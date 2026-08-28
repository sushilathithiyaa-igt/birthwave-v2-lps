#!/usr/bin/env node
/**
 * Visual-fidelity harness for the four landing pages, sibling to
 * scripts/fidelity.mjs (homepage). Same technique: render reference and
 * production side by side at the handoff's viewport matrix, diff the
 * geometry of every [data-od-id] element.
 *
 *   node scripts/fidelity-landing.mjs pregnancy-antenatal-care
 */
import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { VIEWPORTS } from "./fidelity-viewports.mjs";

const slug = process.argv[2];
if (!slug) {
  console.error("usage: node scripts/fidelity-landing.mjs <slug>");
  process.exit(1);
}

const REF_FILE = { "pregnancy-antenatal-care": "pregnancy-antenatal-care.html", "natural-birth": "natural-birth.html", "normal-vaginal-delivery": "normal-vaginal-delivery.html", "vbac-consultation": "vbac-consultation.html" }[slug];

const root = join(import.meta.dirname, "..");
const outDir = join(root, "tmp", "fidelity", slug);
const REFERENCE_URL = `http://localhost:4100/${REF_FILE}`;
const PRODUCTION_URL = `http://localhost:3000/${slug}`;

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
      fontSize: parseFloat(cs.fontSize),
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
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);

    const dir = join(outDir, label, vp.name);
    mkdirSync(dir, { recursive: true });
    await page.screenshot({ path: join(dir, "full.png"), fullPage: true });

    results[vp.name] = await page.evaluate(MEASURE);
    await page.close();
  }
  await browser.close();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, `${label}.json`), JSON.stringify(results, null, 1));
  console.log(`captured ${label} (${slug}) at ${VIEWPORTS.length} viewports`);
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
      lines.push(`  ✗ HORIZONTAL OVERFLOW: ${p.page.scrollWidth} > ${p.page.innerWidth}`);
      hardFail++;
    } else lines.push(`  ✓ no horizontal overflow`);

    const refOrder = r.page.sectionOrder;
    const prodOrder = p.page.sectionOrder;
    const missing = refOrder.filter((id) => !prodOrder.includes(id));
    if (missing.length) {
      lines.push(`  ✗ missing sections: ${missing.join(", ")}`);
      hardFail++;
    }
    const shared = refOrder.filter((id) => prodOrder.includes(id));
    const prodShared = prodOrder.filter((id) => refOrder.includes(id));
    if (shared.join("|") !== prodShared.join("|")) {
      lines.push(`  ✗ section ORDER differs: ref[${shared.join(" → ")}] prod[${prodShared.join(" → ")}]`);
      hardFail++;
    } else lines.push(`  ✓ section order matches (${shared.length}): ${shared.join(" → ")}`);

    const deltas = [];
    for (const [id, rm] of Object.entries(r.elements)) {
      const pm = p.elements[id];
      if (!pm) continue;
      const dW = pct(rm.w, pm.w);
      const dH = pct(rm.h, pm.h);
      if (dW > 6 || dH > 15) deltas.push({ id, dW, dH, rm, pm });
    }
    deltas.sort((a, b) => b.dW + b.dH - (a.dW + a.dH));
    if (deltas.length === 0) lines.push(`  ✓ tracked geometry within tolerance`);
    else {
      lines.push(`  ${deltas.length} element(s) outside tolerance:`);
      for (const d of deltas.slice(0, 10)) {
        lines.push(`    ${d.id}: w ${d.rm.w}→${d.pm.w} (${d.dW.toFixed(0)}%) h ${d.rm.h}→${d.pm.h} (${d.dH.toFixed(0)}%)`);
      }
    }
  }
  const text = lines.join("\n");
  console.log(text);
  writeFileSync(join(outDir, "report.txt"), text);
  console.log(`\n${hardFail === 0 ? "NO HARD FAILURES" : `${hardFail} HARD FAILURE(S)`}`);
  return hardFail;
}

const ref = await capture("reference", REFERENCE_URL);
const prod = await capture("production", PRODUCTION_URL);
const failures = report(ref, prod);
process.exit(failures === 0 ? 0 : 1);
