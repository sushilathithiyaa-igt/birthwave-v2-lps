# Content Reconciliation Audit

Prepared for the client-review round (August 2026). Cross-checks the live site against:

- **Primary content authority:** `Birthwave - WEBSITE CONTENT .pdf` (50 pages — Home, Care & Services, and per-landing-page copy decks)
- **Client change notes:** `Website content.md`, `Website content draft changes.md`

Status legend: **MATCH** (site already reflects the source) · **PARTIAL** (site covers the idea, wording differs) · **MISSING** (source content had no home on the site — now added, noted below) · **SUPERSEDED** (site intentionally diverges from the source, with reason) · **REVIEW REQUIRED** (a client question/claim that cannot be resolved from approved material — nothing published, flagged for the client's confirmation).

---

## Home (`/`)

| Content document section | Current website section | Status | Action taken |
|---|---|---|---|
| Section 1 — Hero (eyebrow, headline, body, image label) | `HeroSection` | MATCH | Rewrote eyebrow, H1 and body to the approved copy; the hero's floating image tag now shows the approved "Dr. Santoshi Nandigam — Founder · Obstetrics & Gynaecology" image label instead of invented placeholder copy. |
| Section 2 — "Where are you in your journey" (Planning / Pregnant / Preparing for Birth / Postpartum / Newborn / Women's Health) | `ServicesSection` mosaic | PARTIAL | The mosaic already covers all six areas; card copy tightened for Fertility (now names holistic fertility, per client note 2) and Women's Health (now names vaginismus & pelvic health, per client note 5). Non-built services now route to WhatsApp with the topic preselected instead of a generic anchor (see Link Audit). |
| Section 3 — Meet Dr. Santoshi | `TeamSection` (brief) + **new** `DoctorTrust` section | MISSING → added | The client's own note flagged this gap directly: *"What's after meet dr Santoshi part? Could not see that section... I wanna know what we are writing."* The approved bio paragraph existed in the codebase as an unused, already-built `DoctorTrust` component (never wired into the page) — it is now inserted directly after the team grid, using the exact approved copy and existing design language (no new visual system introduced). |
| Section 4 — The Birthwave Way (Medical Care / Birth & Recovery Support / Holistic Wellbeing) | `ApproachSection` | PARTIAL → upgraded | Section eyebrow renamed to "The Birthwave Way" (the client explicitly said *"I like the way you guys call it 'the birthwave way'"*). The three abstract principles ("Listen / Support / Personalise") were replaced with the approved three pillars and their sub-service tags. |
| Section 5 — Care That Continues (the five-stage journey) | `ContinuumSection` | MATCH | Order verified: 01 Planning → 02 Pregnancy → 03 Birth → 04 Baby & Child → 05 Recovery. No change needed. |
| Section 6 — Questions You May Already Have | `HomeFaqSection` | PARTIAL → upgraded | FAQ set replaced with the five approved questions, which explicitly surface fertility, vaginismus and pediatric care — direct answers to client notes 2 and 5 (fertility/IVF focus, a visible vaginismus entry point) without inventing a standalone page. |
| Section 7 — Final CTA | `FinalCtaSection` | MATCH | No change. |
| Footer | `SiteFooter` | SUPERSEDED | Rebuilt per this round's explicit footer spec (Explore / Contact, same on all five pages) rather than the source document's slightly different column split — see Global Navigation section of the build report. |
| — | `DifferenceSection`, `ClinicProofSection`, `TrustStrip` | SUPERSEDED (intentionally) | Not present in the content document; kept as-is. `ClinicProofSection` deliberately uses authentic clinic photography instead of the source's placeholder testimonial quotes — see Testimonials below. |

## Pregnancy & Antenatal Care (`/pregnancy-antenatal-care`)

| Content document section | Current website section | Status | Action taken |
|---|---|---|---|
| Hero, pregnancy continuum, care grid, Birthwave approach, connected care, FAQ, conversion | All sections present | MATCH | Already built to a close paraphrase of the approved copy in the prior implementation round; verified against the full PDF text in this round, no material gap found. |
| Related care priority (Normal Delivery / Natural Birth / VBAC, not Fertility) | `RelatedCareBand` | MATCH | Confirmed the three items are Early pregnancy / Growing well / Preparing for birth, with no Fertility card used to fill space. |

## Natural Birth (`/natural-birth`)

| Content document section | Current website section | Status | Action taken |
|---|---|---|---|
| What is natural birth / normal vaginal delivery vs. natural birth distinction | Hero + `EditorialBand` ("meaning") | MATCH | Distinction preserved: normal (vaginal) delivery = route of birth; natural birth = a lower-intervention approach where appropriate. Terms are not used interchangeably. |
| Preparation topics (understanding labour, birth planning, breathing, movement, birth-partner prep, childbirth education) | `CareGrid` preparation section | PARTIAL | Card set already covers the core topics; not expanded to a full one-card-per-topic layout to avoid restructuring the approved card composition. |
| Doula support (client note) | **new** FAQ item | REVIEW REQUIRED (published a safe, non-specific version) | See Doula Support below. |
| No guarantee of intervention-free birth; pain relief not framed as failure | FAQ ("Can I discuss pain relief and changing plans?") | MATCH | Verified — copy explicitly treats a birth plan as revisable, no failure framing anywhere on the page. |

## Normal Vaginal Delivery (`/normal-vaginal-delivery`)

| Content document section | Current website section | Status | Action taken |
|---|---|---|---|
| Definition, terminology ("normal delivery" as the primary, most-searched term) | Hero, `FeatureBand` | MATCH | Primary service wording is "Normal Vaginal Delivery"; supporting copy uses "normal delivery" naturally, per client note 3. |
| Relationship to Natural Birth and VBAC | `CareGrid` cross-links, `RelatedCareBand` | MATCH | Two care-grid items link directly to `/natural-birth` and `/pregnancy-antenatal-care`; related-care band links to Natural Birth and VBAC. |
| No guarantee of vaginal delivery; Caesarean not framed as failure | `FeatureBand` copy | MATCH | "Every birth story needs room to be its own" — explicitly individual, not a guarantee. |

## VBAC Consultation (`/vbac-consultation`)

| Content document section | Current website section | Status | Action taken |
|---|---|---|---|
| VBAC = Vaginal Birth After Caesarean; no automatic eligibility; individual assessment | Hero, `EditorialBand` ("vbac-meaning") | MATCH | Copy explicitly states VBAC "may be possible for some people" and depends on individual history — no eligibility calculator, no guarantee. |
| Redundant "VBAC after Caesarean section" phrasing (client note 4) | Hero, care-grid, related-care copy | MATCH — verified, no fix needed | Audited every VBAC mention site-wide (`grep` across all `.tsx`); none repeat the redundant phrasing the client flagged in the old prototype. Current copy consistently says "options after a previous Caesarean," never "VBAC (Vaginal Birth After Caesarean) after Caesarean section." |
| Previous Caesarean history, current pregnancy, individual assessment, birth-plan discussion, "another C-section may still be recommended" | `CareGrid` consultation path, `ConversionSection` (previous-Caesarean field) | MATCH | Confirmed present. |

---

## Brand Naming Audit

Client instruction: *"Birthwave has to be addressed uniformly as 'The Birthwave.'"*

Audited every user-visible string (headings, body copy, alt text, button/link labels — not code comments or the `siteConfig.shortName` data field used only for genuine grammatical exceptions). **17 bare "Birthwave" mentions corrected to "The Birthwave"** across `HeroSection`, `ApproachSection`, `ClinicProofSection` (×3), `HomeFaqSection` (×3), `TeamSection`, `DoctorTrust`, `AppointmentForm` (×2), `SiteFooter`, and alt text on `normal-vaginal-delivery`, `vbac-consultation` and `pregnancy-antenatal-care`. Two UI verb-phrase labels — "WhatsApp Birthwave" (header/footer/mobile menu) — were kept as the deliberate grammatical exception the client's own instruction anticipates ("WhatsApp The Birthwave" reads as broken English). Metadata titles/descriptions and `siteConfig.name` were already consistently "The Birthwave" and needed no change.

---

## Content flagged for client confirmation (nothing published)

- **`DOULA DETAILS — CONTENT REVIEW REQUIRED`.** The client's notes name four people (Sheetal, Amudha, Nalini, Eunice) with no confirmed roles, credentials or the specific claim "the only people in Chennai" — which the task's own rule forbids publishing without verified evidence. Nothing about specific doula names or that superlative claim was published. A single, generic, non-superlative FAQ was added to the Natural Birth page ("Can I have doula support during labour?") acknowledging doula support as a preparation topic to discuss with the care team — no names, no credentials, no exclusivity claim.
- **`CONTENT REVIEW REQUIRED — Hypnobirthing`.** Client note frames this as a future focus ("we want to concentrate on that too in the future"). Per the task's explicit rule, a future intention is not published as a current offering. Not added to any page.
- **`CONTENT REVIEW REQUIRED — Labour/comfort pool wording`.** Client note: Birthwave does not perform water birth but may arrange a pool for labour comfort, with delivery happening outside the pool. This operational detail is not present in the approved 50-page content document, only in an informal note. Not published — the distinction the client asked for (comfort use vs. actual delivery) is exactly the kind of claim that needs the client's sign-off on current operational availability before it goes live.
- **`PATIENT TESTIMONIALS AWAITING CLIENT CONTENT`.** Client note asks for patient birth-experience testimonials, to be collected by the clinic team (Graceline, Divya, Srija). None exist as approved content yet. `ClinicProofSection` continues to use authentic clinic photography in the testimonial slot's geometry rather than fabricated quotes — no change needed until real testimonials are supplied.

None of the above required a code change beyond the one generic, unattributed doula FAQ line described above.
