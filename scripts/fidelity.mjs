#!/usr/bin/env node
/**
 * Visual-fidelity harness for the Birthwave homepage.
 *
 * Renders the locked design reference and the production route side by side at
 * the handoff's viewport matrix, capturing full-page screenshots plus the
 * bounding geometry of every [data-od-id] element so differences can be
 * measured rather than eyeballed.
 *
 *   node scripts/fidelity.mjs            # capture both, then report
 *   node scripts/fidelity.mjs production # re-capture production only
 */
import { chromium } from "playwright";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { VIEWPORTS } from "./fidelity-viewports.mjs";

const root = join(import.meta.dirname, "..");
const outDir = join(root, "tmp", "home-fidelity");

const REFERENCE_URL =
  process.env.REFERENCE_URL ?? "http://localhost:4100/birthwave-homepage.html";
const PRODUCTION_URL = process.env.PRODUCTION_URL ?? "http://localhost:3000/";

export { VIEWPORTS };

/**
 * Collect layout facts for every tracked element. Positions are recorded
 * relative to the document (not the viewport) so scroll position can't skew
 * the comparison.
 */
const MEASURE = () => {
  const out = {};
  for (const el of document.querySelectorAll("[data-od-id]")) {
    const id = el.getAttribute("data-od-id");
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    out[id] = {
      x: Math.round(r.x + window.scrollX),
      y: Math.round(r.y + window.scrollY),
      w: Math.round(r.width),
      h: Math.round(r.height),
      display: cs.display,
      bg: cs.backgroundColor,
      color: cs.color,
      fontSize: parseFloat(cs.fontSize),
      lineHeight: cs.lineHeight,
      radius: cs.borderTopLeftRadius,
    };
  }
  const heading = document.querySelector("h1");
  return {
    elements: out,
    page: {
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      bodyHeight: document.body.scrollHeight,
      overflow: document.documentElement.scrollWidth > window.innerWidth,
      h1Count: document.querySelectorAll("h1").length,
      h1Text: heading ? heading.textContent.trim() : null,
      h1FontSize: heading ? parseFloat(getComputedStyle(heading).fontSize) : null,
      sectionOrder: Array.from(document.querySelectorAll("[data-od-id]"))
        .filter((el) => el.matches("section, header, footer"))
        .map((el) => el.getAttribute("data-od-id")),
    },
  };
};

async function capture(label, url) {
  const browser = await chromium.launch();
  const results = {};
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
    // Settle lazy images and entry animations before measuring.
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(700);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    const dir = join(outDir, label, vp.name);
    mkdirSync(dir, { recursive: true });
    await page.screenshot({ path: join(dir, "full.png"), fullPage: true });
    await page.screenshot({ path: join(dir, "viewport.png") });

    results[vp.name] = await page.evaluate(MEASURE);
    await page.close();
  }
  await browser.close();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, `${label}.json`), JSON.stringify(results, null, 2));
  console.log(`captured ${label} at ${VIEWPORTS.length} viewports`);
  return results;
}

function pct(a, b) {
  if (a === 0 && b === 0) return 0;
  const base = Math.max(Math.abs(a), Math.abs(b), 1);
  return (Math.abs(a - b) / base) * 100;
}

function report(ref, prod) {
  const lines = [];
  let hardFail = 0;

  for (const vp of VIEWPORTS) {
    const r = ref[vp.name];
    const p = prod[vp.name];
    if (!r || !p) continue;

    lines.push(`\n=== ${vp.name} ===`);
    if (p.page.overflow) {
      lines.push(`  ✗ HORIZONTAL OVERFLOW: scrollWidth ${p.page.scrollWidth} > ${p.page.innerWidth}`);
      hardFail++;
    } else {
      lines.push(`  ✓ no horizontal overflow`);
    }
    if (p.page.h1Count !== 1) {
      lines.push(`  ✗ expected exactly one h1, found ${p.page.h1Count}`);
      hardFail++;
    }

    // Section order must match the reference exactly.
    const refOrder = r.page.sectionOrder;
    const prodOrder = p.page.sectionOrder;
    const missing = refOrder.filter((id) => !prodOrder.includes(id));
    const extra = prodOrder.filter((id) => !refOrder.includes(id));
    if (missing.length) {
      lines.push(`  ✗ missing sections: ${missing.join(", ")}`);
      hardFail++;
    }
    if (extra.length) {
      lines.push(`  ! extra sections (not in reference): ${extra.join(", ")}`);
    }
    const shared = refOrder.filter((id) => prodOrder.includes(id));
    const prodShared = prodOrder.filter((id) => refOrder.includes(id));
    if (shared.join("|") !== prodShared.join("|")) {
      lines.push(`  ✗ section ORDER differs`);
      lines.push(`      reference:  ${shared.join(" → ")}`);
      lines.push(`      production: ${prodShared.join(" → ")}`);
      hardFail++;
    } else if (!missing.length) {
      lines.push(`  ✓ section order matches (${shared.length} sections)`);
    }

    // Geometry deltas for elements present in both.
    const deltas = [];
    for (const [id, rm] of Object.entries(r.elements)) {
      const pm = p.elements[id];
      if (!pm) continue;
      const dW = pct(rm.w, pm.w);
      const dH = pct(rm.h, pm.h);
      const dY = Math.abs(rm.y - pm.y);
      const dFont = Math.abs(rm.fontSize - pm.fontSize);
      if (dW > 5 || dH > 12 || dFont > 2) {
        deltas.push({ id, dW, dH, dY, dFont, ref: rm, prod: pm });
      }
    }
    deltas.sort((a, b) => b.dW + b.dH - (a.dW + a.dH));
    if (deltas.length === 0) {
      lines.push(`  ✓ tracked geometry within tolerance`);
    } else {
      lines.push(`  ${deltas.length} element(s) outside tolerance (top 10):`);
      for (const d of deltas.slice(0, 10)) {
        lines.push(
          `    ${d.id}: w ${d.ref.w}→${d.prod.w} (${d.dW.toFixed(0)}%)` +
            ` h ${d.ref.h}→${d.prod.h} (${d.dH.toFixed(0)}%)` +
            (d.dFont > 2 ? ` font ${d.ref.fontSize}→${d.prod.fontSize}px` : "")
        );
      }
    }
  }

  const text = lines.join("\n");
  console.log(text);
  writeFileSync(join(outDir, "report.txt"), text);
  console.log(`\n${hardFail === 0 ? "NO HARD FAILURES" : `${hardFail} HARD FAILURE(S)`}`);
  return hardFail;
}

const mode = process.argv[2] ?? "both";
const refPath = join(outDir, "reference.json");
const prodPath = join(outDir, "production.json");

let ref;
let prod;
if (mode === "production" && existsSync(refPath)) {
  ref = JSON.parse(readFileSync(refPath, "utf8"));
  prod = await capture("production", PRODUCTION_URL);
} else if (mode === "reference") {
  ref = await capture("reference", REFERENCE_URL);
  prod = existsSync(prodPath) ? JSON.parse(readFileSync(prodPath, "utf8")) : null;
} else {
  ref = await capture("reference", REFERENCE_URL);
  prod = await capture("production", PRODUCTION_URL);
}

if (ref && prod) {
  const failures = report(ref, prod);
  process.exit(failures === 0 ? 0 : 1);
}
