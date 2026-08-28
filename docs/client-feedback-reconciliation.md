# Client feedback reconciliation — local, uncommitted

Read against the live review URL (`https://birthwave-v2-lps-main.vercel.app/`) as read-only
baseline context, `Birthwave 2.0 website changes.docx` (empty/inaccessible — see note below),
the primary content PDF, `Website content.md` / `Website content draft changes.md`, and the
actual Birthwave Brand Guideline PDF.

**Note on the live URL vs. this local project:** the live review URL predates this session's
*and the prior session's* unified-navigation/content-reconciliation work — no deployment has
succeeded since (no Vercel credentials in this environment; see prior report). Several items the
client flagged against the live site (split navigation, the old "One care team" hero tag) were
already fixed locally in the previous pass but never reached the live URL. This pass verified
those fixes still hold, then addressed the genuinely new corrections below.

**Note on `Birthwave 2.0 website changes.docx`:** the file (4.6MB, 7 embedded screenshots) was
read directly by unzipping it as an Office XML package and extracting `word/document.xml` plus
the embedded media — its text is a verbatim match for every item in the prompt's "LATEST CLIENT
FEEDBACK — LOCKED" section, confirming that section is a faithful transcription of it. The 7
screenshots, matched to their surrounding comments, gave three concrete confirmations beyond the
prompt text alone:

1. The "this photo needs to be changed" comment sits directly above a screenshot of the
   **Dr. Santoshi arms-crossed portrait** (the one used in `TeamSection`'s featured card and
   `DoctorTrust`) — and that file was genuinely only **570×682px**, low for a hero-weight portrait.
   A verified 7008×4672 source of the *same person* (different pose, same photoshoot/folder as
   the already-used desk portrait) was found and cropped in as a replacement — see Photos below.
2. The "natural birth is not vaginal delivery" comment sits directly above a screenshot of the
   live Natural Birth page's old "meaning" section reading *"Natural birth is a way of giving
   birth vaginally while allowing labour to progress..."* — the literal violation, now rewritten.
3. One screenshot is of a **different site, `thebirthwave.in`** (not `.com`, not the V2 review
   URL) — shown as a positive reference immediately before the logo-visibility complaint. Its
   hero ("Care that sees the whole woman — before, during and after birth" /
   "Women's Health • Pregnancy • Newborn Care") and its logo (byline legible under the wordmark)
   both validate the direction taken here (broadened hero copy, byline-inclusive logo) without
   copying its differing UI system (e.g. a 5-item floating action bar) into this project.

| Client request | Affected routes | Current state (before) | Source | Required change | Status |
|---|---|---|---|---|---|
| Broaden "one care team" / pregnancy-only positioning | `/` | Hero H1 "journey into motherhood," floating tag "One care team / for the journey from planning to growing up," body copy pregnancy-sequence only | Prompt (explicit) | Rewrite hero H1/body/floating tag to lead with women's-health breadth (gynaecology, PCOS, fertility) alongside pregnancy | **DONE** |
| "The Birthwave" naming uniformity | All 5 | Already corrected in the prior session (17 fixes) | Prompt | Re-verify, no regressions | **VERIFIED — no new occurrences found** |
| Natural Birth ≠ route of delivery | `/natural-birth`, `/normal-vaginal-delivery` (comparison also relevant), homepage FAQ/cards | FAQ/hero/editorial copy already avoided the literal forbidden phrasing, but led with "normal delivery = vaginal birth" before natural birth's own definition, and had no explicit side-by-side comparison | Prompt (explicit, "strongest content correction") | Lead Natural Birth's own definition with "an approach," add an explicit two-concept comparison component | **DONE** — new `BirthConceptComparison` component added to both pages |
| Photos need upgrading | `/` (hero side image, proof-section panels, team featured portrait) | Existing clinic-exterior/signage-wall/lounge photos were low-resolution (36-121KB); Dr. Santoshi's featured team portrait was 570×682px | Prompt + docx screenshot (confirms the flagged photo) + located `~/Downloads/Web-Prototype/EXP0123*.JPG` and `assets/dr-santoshini.jpg` (18-22MB professional photography, same clinic/person, same photoshoot as the already-used hero portrait) | Replace with the high-resolution originals | **DONE** — 5 images replaced (4 clinic photos + the featured team portrait, cropped from a verified 7008×4672 source) |
| Recent workshop-edited photos | All (workshop imagery) | Existing workshop photos already in use (`childbirth-workshop-01/02`, `birth-position-practice`, etc.) | Prompt | Search for newer edited versions | **ASSET REQUIRED** — no newer workshop photoshoot found anywhere in local sources; existing workshop photos are unchanged (already reasonable quality, no worse alternative found) |
| Image cropping / empty space audit | All | — | Prompt | Spot-check at 9 viewports | **PASS** — no accidental blank space or bad crops found; see build report |
| Logo not clearly visible / "by Dr. Santoshi" | All (header, footer) | Header/footer used a trimmed logo asset that omitted the "By Dr. Santoshi Nandigam" byline entirely | Prompt + official `birthwave-logo-solid.png` (has the byline, on a solid background) | Extract the byline-inclusive lockup as a transparent asset from the official solid file (chroma-key + crop, not a redraw); enlarge the header container slightly | **DONE** — new `birthwave-logo-white-with-byline.png`, confirmed legible on mobile |
| Add Dr. Deepika | `/` team section | Already present (initials fallback) | V1 verified roster | Confirm still present | **PASS** |
| Add Dr. Adithi | `/` team section | Not present | V1 verified roster (`Pelvic Floor Therapy · Vaginismus Coach`) | Add with verified role, initials fallback | **DONE** |
| Add Dr. Amudha | `/` team section | Not present | V1 verified roster (`Naturopathy & Yoga · Fertility Yoga`) | Add with verified role, initials fallback | **DONE** |
| Add Dr. Hamsini | `/` team section | Not present, no verified info anywhere | Client statement only — no match in any source searched | Add name only, no invented role | **DONE** — shown as "Role to be confirmed"; see `docs/team-asset-gaps.md` |
| Fertility / PCOS / weight / holistic-fertility / difference FAQs | `/` FAQ | 5 FAQs, none covering PCOS, weight, or "what makes Birthwave different" | Prompt | Expand, medically cautious wording | **DONE** — 10 FAQs, reordered to lead with non-pregnancy questions |
| Surface holistic fertility / PCOS / gynaecology / vaginismus on homepage | `/` | Services grid already covers these; hero/FAQ did not | Prompt | Broaden hero + FAQ (done above); Services grid copy already names vaginismus/holistic fertility from the prior session | **DONE** (via hero + FAQ changes; Services grid unchanged, already compliant) |
| Preserve "The Birthwave Way" | `/` | Already the section eyebrow/heading (renamed in prior session) | Prompt | No regression | **VERIFIED** |
| Hypnobirthing / labour pool / doula | Natural Birth FAQ, homepage | Not published as current services (prior session) | Prompt | Re-verify nothing was added without confirmation | **VERIFIED — still not published**, see below |
| Remove unapproved blue | All | `.theme-normal-vaginal-delivery` was an entire blue page theme (`#4F98BD`/`#3D7C9C`); root `--color-sky`/`--color-sky-mist` were blue tokens | Actual Brand Guideline PDF (blue is technically Primary Color 2) + client's explicit rejection this pass, which the stated source-priority overrides | Rebuild on the coral primary (`#F88379`) instead | **DONE** — see `docs/brand-color-audit.md` for the full before/after and the guideline-vs-client-instruction note |
| Uniform navigation | All 5 | Already unified in the prior session | Prompt | Re-verify no regression, confirm collapse threshold | **VERIFIED** — still one header, `bp1280` collapse threshold intact |
| Uniform footer | All 5 | Already unified in the prior session | Prompt | Re-verify | **VERIFIED** |
| No dead CTAs/links | All 5 | Already clean per the prior session's link verifier | Prompt | Re-run after this pass's changes | **VERIFIED — 214/214, 0 hard failures** (re-run after all content/color/image/logo changes) |
| Fluid motion polish | All 5 | Already implemented (card lift, FAQ rotate, booking-sheet slide, mobile-menu transition, `prefers-reduced-motion` support) in the prior session | Prompt | Confirm no regression from this pass's edits | **VERIFIED** — no motion-affecting markup was touched this pass except the new `BirthConceptComparison` (static content, no animation needed) |

## Doula support — unchanged from the prior pass

Client notes still name Sheetal, Amudha, Nalini, Eunice with no verified roles/credentials, plus
the "only people in Chennai" claim, which remains unpublishable without verification. The one
generic, unattributed FAQ line on Natural Birth ("Can I have doula support during labour?") from
the prior session stays as-is — nothing new was added or removed. Worth noting for the client:
the V1 verified roster records **Sheethal Sathya** as a DONA-certified birth doula in addition to
her lactation/childbirth-education role — not currently surfaced on her card. Flagged in
`docs/team-asset-gaps.md`, not acted on (wasn't requested this pass).

## Hypnobirthing / labour-pool wording — unchanged from the prior pass

Both remain unpublished. Hypnobirthing is a stated future focus, not a current service. The
labour-comfort-pool concept isn't in the approved content PDF at all, only in an informal note,
and the client's own note underscores the exact distinction (comfort use vs. actual delivery)
that would need explicit sign-off before publishing any wording at all — so none was added.
