# Visual fidelity status

Measured with `npm run fidelity` — renders the locked reference
(`references/birthwave-v2-design/`) and the production route side by side at the handoff's nine
viewports, capturing full-page screenshots plus the bounding geometry of every `[data-od-id]`
element. Screenshots land in `tmp/home-fidelity/{reference,production}/<viewport>/`.

| Page | Reference render | 1440 | 768/820 | 390 | 360 overflow | Structure | Layout | Status |
|---|---|---|---|---|---|---|---|---|
| Home | PASS | PASS | PASS | PASS | none | 13/13 sections, in order | ≤0.4% at desktop | **PASS** |
| Pregnancy | not started | — | — | — | — | — | — | pending |
| Natural Birth | not started | — | — | — | — | — | — | pending |
| Normal Delivery | not started | — | — | — | — | — | — | pending |
| VBAC | not started | — | — | — | — | — | — | pending |

## Homepage — page height vs reference

| Viewport | Reference | Production | Δ | Horizontal overflow |
|---|---|---|---|---|
| 360×800 | 12046 | 11844 | 1.7% | none *(reference itself overflows here: 387 > 360)* |
| 390×844 | 11800 | 11427 | 3.2% | none |
| 430×932 | 11477 | 11276 | 1.8% | none |
| 600×960 | 10614 | 10538 | 0.7% | none |
| 820×1180 | 9364 | 9156 | 2.2% | none |
| 1024×768 | 7837 | 7732 | 1.3% | none |
| 1366×768 | 8373 | 8336 | 0.4% | none |
| 1440×900 | 8537 | 8500 | 0.4% | none |
| 1920×1080 | 8602 | 8565 | 0.4% | none |

At 1366 / 1440 / 1920 **every** tracked element is inside tolerance (≤5% width, ≤12% height,
≤2px type). The residual delta at narrower widths is line-wrapping under the real brand fonts —
see below.

## Section order (all nine viewports)

`site-header → hero → trust-strip → about → services → focus-services → pregnancy-journey →
team → difference → testimonials → faq → final-cta → footer`

Matches the reference exactly; no section added, removed or reordered.

## Deliberate differences from the reference

1. **Real brand fonts.** The reference never imports Plus Jakarta Sans / Poppins, so both it and
   the approved preview PNG rendered in a Helvetica fallback. Production loads the specified
   families. Text therefore wraps differently — e.g. the hero lede sets in 2 lines instead of 3,
   which alone accounts for ~34px of the hero-height delta.
2. **Five continuum dots instead of one.** The reference's percentage `box-shadow` offsets are
   invalid CSS, so only one of the five intended nodes ever painted.
3. **Proof section carries clinic photography, not the prototype's testimonials.** The quotes in
   the export ("A new mother", "A family in Chennai") are unverified. Geometry is unchanged.
4. **Care-team roles follow the verified roster.** The prototype listed the paediatrician under
   gynaecology and vice versa. Names and layout follow the reference; roles are corrected. The
   third card is Sheethal Sathya (a verified team member with a real portrait) rather than the
   prototype's Dr. Amudha Varshini, for whom no portrait exists.
5. **Service card headings are fluid below 620px** (`clamp(16px,4.6vw,23px)` instead of a fixed
   23px). The reference's fixed size pushes the two-up grid past the viewport at 360px.
6. **`Book Appointment` stays on one line at 1024–1150px.** The reference wraps it inside the
   pill; `whitespace-nowrap` avoids that without causing overflow.
7. **No booking form on the homepage.** The reference has none either — its final CTA links to a
   `mailto:` on an unverified address, replaced here with the project's real WhatsApp enquiry
   transport. The four service pages keep their full forms.
8. **`View profile →` is now `Book a consultation →`.** There is no doctor profile page; the
   reference's own link pointed at the contact section regardless.
