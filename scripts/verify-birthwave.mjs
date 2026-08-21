#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const root = join(import.meta.dirname, "..");
const srcApp = join(root, "src", "app");

const failures = [];
const ok = (label) => console.log(`  ✓ ${label}`);
const fail = (label) => {
  failures.push(label);
  console.log(`  ✗ ${label}`);
};

function walk(dir, exts, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next") continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, exts, out);
    else if (exts.includes(extname(entry.name))) out.push(full);
  }
  return out;
}

console.log("Birthwave V2 verifier\n");

// 1. Five required routes exist
console.log("Routes:");
const routes = [
  ["/", "page.tsx"],
  ["/pregnancy-antenatal-care", "pregnancy-antenatal-care/page.tsx"],
  ["/natural-birth", "natural-birth/page.tsx"],
  ["/normal-vaginal-delivery", "normal-vaginal-delivery/page.tsx"],
  ["/vbac-consultation", "vbac-consultation/page.tsx"],
];
for (const [route, file] of routes) {
  if (existsSync(join(srcApp, file))) ok(`${route} -> ${file}`);
  else fail(`${route} missing (${file})`);
}

// 2. Metadata exists for each route (title export)
console.log("\nMetadata:");
for (const [route, file] of routes) {
  const path = join(srcApp, file);
  if (!existsSync(path)) continue;
  const content = readFileSync(path, "utf8");
  if (content.includes("export const metadata")) ok(`${route} has metadata`);
  else fail(`${route} missing metadata export`);
}

// 3. Scan all source files for banned strings/patterns
console.log("\nContent safety scan:");
const sourceFiles = walk(join(root, "src"), [".ts", ".tsx", ".css"]);
const bannedStrings = [
  { needle: "910000000000", label: "placeholder WhatsApp number" },
  { needle: "images.unsplash.com", label: "production Unsplash placeholder image" },
  { needle: "lorem ipsum", label: "Lorem Ipsum placeholder text", ci: true },
  { needle: 'href="#"', label: 'dead href="#" link' },
  { needle: "href='#'", label: "dead href='#' link" },
];

let clean = true;
for (const file of sourceFiles) {
  const content = readFileSync(file, "utf8");
  const haystack = content;
  for (const { needle, label, ci } of bannedStrings) {
    const found = ci ? haystack.toLowerCase().includes(needle) : haystack.includes(needle);
    if (found) {
      fail(`${label} found in ${file.replace(root + "/", "")}`);
      clean = false;
    }
  }
}
if (clean) ok("no banned placeholder strings found");

// 4. Central phone/site config exists and looks real
console.log("\nSite config:");
const sitePath = join(root, "src", "config", "site.ts");
if (existsSync(sitePath)) {
  const content = readFileSync(sitePath, "utf8");
  if (/\+91 \d{5} \d{5}/.test(content)) ok("real phone number present in site config");
  else fail("site config phone number looks malformed or missing");
  if (content.includes("Mahalingapuram")) ok("real address present in site config");
  else fail("site config address missing");
} else {
  fail("src/config/site.ts does not exist");
}

// 5. Internal links only reference valid routes
console.log("\nInternal link targets:");
const validRoutes = new Set(routes.map(([route]) => route));
const hrefRegex = /href[:=]\s*"(\/[a-zA-Z0-9\-]*)"/g;
const seenInternal = new Set();
for (const file of sourceFiles) {
  const content = readFileSync(file, "utf8");
  let match;
  while ((match = hrefRegex.exec(content))) {
    seenInternal.add(match[1]);
  }
}
let linksOk = true;
for (const href of seenInternal) {
  if (!validRoutes.has(href)) {
    fail(`internal link "${href}" does not match a built route`);
    linksOk = false;
  }
}
if (linksOk) ok("all internal hrefs resolve to a built route");

// 6. Required local assets resolve
console.log("\nLocal assets:");
const assetRegex = /["'](\/(?:images|videos)\/[^"']+)["']/g;
const referencedAssets = new Set();
for (const file of sourceFiles) {
  const content = readFileSync(file, "utf8");
  let match;
  while ((match = assetRegex.exec(content))) {
    referencedAssets.add(match[1]);
  }
}
let assetsOk = true;
for (const asset of referencedAssets) {
  const full = join(root, "public", asset);
  if (existsSync(full)) ok(`asset resolves: ${asset}`);
  else {
    fail(`asset missing: ${asset}`);
    assetsOk = false;
  }
}
if (referencedAssets.size === 0) fail("no local image/video assets referenced (unexpected)");

// 7. Production build artifacts (if present) don't contain known placeholders
console.log("\nBuild artifact scan:");
const buildDir = join(root, ".next", "server", "app");
if (existsSync(buildDir)) {
  const built = walk(buildDir, [".js", ".html"]);
  let buildClean = true;
  for (const file of built) {
    const content = readFileSync(file, "utf8");
    if (content.includes("910000000000") || /lorem ipsum/i.test(content)) {
      fail(`placeholder content found in build output: ${file.replace(root + "/", "")}`);
      buildClean = false;
    }
  }
  if (buildClean) ok("no known placeholders in .next build output");
} else {
  console.log("  (skipped: run `npm run build` first to check build output)");
}

console.log("\n" + "-".repeat(40));
if (failures.length > 0) {
  console.log(`FAILED: ${failures.length} check(s) did not pass.`);
  process.exit(1);
} else {
  console.log("PASSED: all Birthwave verifier checks succeeded.");
}
