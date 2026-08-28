#!/usr/bin/env node
/**
 * Crawls every clickable control (anchors + buttons) across the five
 * client-review routes and verifies each one does something intentional:
 *
 *  - internal <a href="/..."> resolves to a real route (HTTP 200)
 *  - <a href="#id"> resolves to a real element id on the same page
 *  - tel: / wa.me / mailto: / configured social hrefs are accepted as-is
 *  - no bare href="#", no empty href, no obviously dead route
 *  - known interactive buttons (booking sheet triggers, FAQ toggles, mobile
 *    menu toggle) are clicked and checked for an observable state change
 *
 * Usage: node scripts/verify-links.mjs
 * Requires the production server running at http://localhost:3000
 * (npm run build && npm run start -- -p 3000).
 */
import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const ROUTES = [
  "/",
  "/pregnancy-antenatal-care",
  "/natural-birth",
  "/normal-vaginal-delivery",
  "/vbac-consultation",
];

const ALLOWED_EXTERNAL_PREFIXES = [
  "tel:+919363031925",
  "https://wa.me/919363031925",
  "https://www.instagram.com/birthtoremember/",
  "https://www.youtube.com/@birthtoremember",
];

let hardFailures = 0;
let totalControls = 0;
let validControls = 0;

async function checkInternalRoute(path) {
  const res = await fetch(`${BASE}${path}`, { method: "GET" });
  return res.status === 200;
}

async function main() {
  const browser = await chromium.launch();
  const results = [];

  for (const route of ROUTES) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });

    const routeResult = { route, anchors: [], buttons: [] };

    // ---- Anchors ----
    const anchors = await page.$$eval("a[href]", (els) =>
      els.map((el) => ({
        href: el.getAttribute("href"),
        text: (el.textContent || "").trim().slice(0, 60),
        target: el.getAttribute("target"),
      }))
    );

    for (const a of anchors) {
      totalControls++;
      const { href, text } = a;
      let verdict = "OK";
      let detail = "";

      if (!href || href === "#" || href.trim() === "") {
        verdict = "FAIL";
        detail = "empty/bare href=\"#\"";
      } else if (href.startsWith("#")) {
        const id = href.slice(1);
        const exists = await page.$(`[id="${id}"]`);
        if (!exists) {
          verdict = "FAIL";
          detail = `no element with id="${id}" on ${route}`;
        } else {
          detail = "in-page anchor resolves";
        }
      } else if (href.startsWith("/")) {
        const [pathOnly] = href.split("#");
        const ok = await checkInternalRoute(pathOnly || "/");
        if (!ok) {
          verdict = "FAIL";
          detail = `internal route ${pathOnly} did not return 200`;
        } else if (href.includes("#")) {
          detail = `internal route OK; fragment #${href.split("#")[1]} not cross-page-verified`;
        } else {
          detail = "internal route resolves (200)";
        }
      } else if (ALLOWED_EXTERNAL_PREFIXES.some((p) => href.startsWith(p))) {
        detail = "verified external target (tel/WhatsApp/social)";
      } else if (href.startsWith("mailto:")) {
        detail = "mailto link";
      } else if (href.startsWith("http")) {
        // External link not in the verified allow-list — flag for review
        // rather than hard-fail (network fetches to third parties are not
        // reliable inside this environment's sandbox).
        verdict = "REVIEW";
        detail = "external URL not in the verified allow-list";
      } else {
        verdict = "REVIEW";
        detail = "unrecognised href scheme";
      }

      if (verdict === "FAIL") hardFailures++;
      if (verdict === "OK") validControls++;
      routeResult.anchors.push({ href, text, verdict, detail });
    }

    // ---- Known interactive buttons (booking sheet, FAQ, mobile menu) ----
    const buttonChecks = [];

    // Desktop "Book Appointment" in header opens the booking sheet.
    const headerBook = await page.$('[data-od-id="header-book-appointment"]');
    if (headerBook && (await headerBook.isVisible())) {
      totalControls++;
      await headerBook.click();
      await page.waitForTimeout(400);
      const sheetOpen = await page.$eval("body", (b) => b.classList.contains("sheet-open")).catch(() => false);
      buttonChecks.push({
        label: "header Book Appointment",
        verdict: sheetOpen ? "OK" : "FAIL",
        detail: sheetOpen ? "booking sheet opened" : "booking sheet did not open",
      });
      if (sheetOpen) {
        validControls++;
        await page.keyboard.press("Escape");
        await page.waitForTimeout(300);
      } else {
        hardFailures++;
      }
    }

    // Mobile menu toggle (resize to a narrow viewport for this check).
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(150);
    const menuToggle = await page.$('[data-od-id="mobile-menu-toggle"]');
    if (menuToggle) {
      totalControls++;
      await menuToggle.click();
      await page.waitForTimeout(400);
      const expanded = await menuToggle.getAttribute("aria-expanded");
      buttonChecks.push({
        label: "mobile menu toggle",
        verdict: expanded === "true" ? "OK" : "FAIL",
        detail: expanded === "true" ? "mobile menu opened" : "mobile menu did not open",
      });
      if (expanded === "true") {
        validControls++;
        await menuToggle.click();
        await page.waitForTimeout(300);
      } else {
        hardFailures++;
      }
    }
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(150);

    // FAQ accordion — first toggle should expand its panel.
    const faqButtons = await page.$$('#faq button[aria-expanded]');
    if (faqButtons.length > 0) {
      totalControls++;
      const before = await faqButtons[0].getAttribute("aria-expanded");
      await faqButtons[0].click();
      await page.waitForTimeout(350);
      const after = await faqButtons[0].getAttribute("aria-expanded");
      const toggled = before !== after;
      buttonChecks.push({
        label: "FAQ accordion toggle",
        verdict: toggled ? "OK" : "FAIL",
        detail: toggled ? `aria-expanded ${before} → ${after}` : "aria-expanded did not change",
      });
      if (toggled) validControls++;
      else hardFailures++;
    }

    routeResult.buttons = buttonChecks;
    results.push(routeResult);
    await context.close();
  }

  await browser.close();

  // ---- Report ----
  console.log("Link & control audit\n");
  for (const r of results) {
    console.log(`=== ${r.route} ===`);
    for (const a of r.anchors) {
      const mark = a.verdict === "OK" ? "✓" : a.verdict === "FAIL" ? "✗" : "…";
      if (a.verdict !== "OK") {
        console.log(`  ${mark} [${a.verdict}] "${a.text}" href="${a.href}" — ${a.detail}`);
      }
    }
    for (const b of r.buttons) {
      const mark = b.verdict === "OK" ? "✓" : "✗";
      console.log(`  ${mark} [${b.verdict}] ${b.label} — ${b.detail}`);
    }
    console.log("");
  }

  console.log(`Total controls checked: ${totalControls}`);
  console.log(`Valid: ${validControls}`);
  console.log(`Hard failures: ${hardFailures}`);

  if (hardFailures > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
