# Birthwave V2 — project brief

Persistent decisions for this build. Not a diary — update in place when a decision changes.

## What this is

A from-scratch Next.js production site for The Birthwave (women's health / pregnancy / birth /
postpartum / newborn clinic, Nungambakkam, Chennai), built as a **new standalone project**
alongside — not replacing — the existing `birthwave-interim-v1` repo at
`~/Documents/CODE FILES SUSHIL/Birthwave/`. That repo has its own routes (`/pregnancy-care`,
`/vbac`, `/normal-birth-delivery`, etc.) and is untouched by this build except as a source of
real, already-vetted photo assets (copied, not referenced live).

## Scope (this execution)

Five routes only: `/`, `/pregnancy-antenatal-care`, `/natural-birth`,
`/normal-vaginal-delivery`, `/vbac-consultation`. Natural Birth and Normal Vaginal Delivery are
deliberately kept as separate pages (per the supplied reference HTML) even though the sitemap
content doc sometimes groups them under one "Birth & Delivery Care" concept — do not merge them
without an explicit instruction to do so.

## Content source of truth

`~/Downloads/Birthwave - WEBSITE CONTENT .pdf` is the primary copy source for all five pages —
it is a copywriter's V2 revision document (marked with "Current" / "Replace with" diffs), not a
record of what's live today. Treat its "Replace with" and un-struck-through text as the approved
copy. The supplied reference HTML files (`birthwave-homepa1ge.html`,
`pregnancy-antenatal-care1.html`, `natural-birth2.html`, `normal-vaginal-delivery23w.html`,
`vbac-consultation1.html`) plus `birthwave-landing.css` / `.js` are layout/visual references only
— section hierarchy, CTA placement, card anatomy — never a literal copy/paste source for markup.

## Verified brand facts

- Doctor: **Dr. Santoshi Nandigam** (confirmed by the canonical logo file and the content PDF —
  not "Santoshini", which only appears in older interim-V1 filenames).
- Phone / WhatsApp: **+91 93630 31925**.
- Address: **8/15, Mahalingapuram Main Road, Mahalingapuram, Nungambakkam, Chennai, Tamil Nadu –
  600034**.
- Instagram/YouTube: use only the two handles given in the build brief
  (`instagram.com/birthtoremember`, `youtube.com/@birthtoremember`) — the live site also links a
  second Instagram/YouTube/Facebook account; those were not in the verified brief and were not
  added. Confirm with the client before adding.
- Colors `#CA9585` (rose/brown), `#5DAEDB` (blue), `#F88379` (coral) are confirmed in the official
  Brand Guideline PDF. The ivory/cocoa/paper tones are from the build brief's "supporting
  surfaces" list, not independently verified in that PDF — they're intentional, not a guess.
- Fonts: Plus Jakarta Sans (display/headings), Poppins (body/UI) — confirmed via the Master Brand
  Brief PDF, which resolves the Brand Guideline PDF's ambiguity (it lists both fonts without
  assigning roles).

## Medical / compliance rules (non-negotiable)

Never invent success rates, experience years, patient volumes, accreditations, or testimonials.
Never guarantee a birth outcome. Prefer "may", "individual clinical context", "discuss with your
clinician". Two load-bearing lines pulled directly from approved copy — reuse verbatim, don't
paraphrase away the hedging:
- "The goal is safe, respectful and appropriate care for both mother and baby — not achieving one
  particular type of birth at any cost."
- "Changing the birth plan is not a failure."

## Real assets, no stock photography

All photography is copied from the existing `birthwave-interim-v1` project's
`public/images/birthwave/` folder (real clinic workshops, community events, doctor portraits) —
verified by opening each file, not assumed from filenames. See `docs/asset-inventory.md` for the
full mapping of file → page → why. The one scraped-site image used
(`postpartum-baby-feet.png`, VBAC page) was renamed from its scraper filename
("best_vbac_doctor") because that name asserted an identity the image doesn't actually show —
never let a source filename's claim leak into a caption or alt text without visually confirming
it.

## Appointment flow

No real booking API exists yet. `src/lib/enquiry.ts` builds a structured WhatsApp deep link from
form input (never a fake "confirmed" state) — swap its internals for a real API later.
