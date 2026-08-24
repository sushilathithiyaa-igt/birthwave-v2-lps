# Build status

## Foundation
- Next.js 16.3.0 / React 19.2.8 / Tailwind CSS 4.3.3 / TypeScript, App Router, Turbopack.
- Design tokens (colors, fonts, shadows) defined in `src/app/globals.css` via Tailwind 4's
  CSS-first `@theme`.
- Fonts: Plus Jakarta Sans (display) + Poppins (body), loaded via `next/font/google`.
- Shared components: `SiteHeader`, `MobileActionBar`, `SiteFooter`, `Container`, `Button`,
  `SectionHeading`, `InnerHero`, `CareGrid`, `EditorialBand`, `RelatedCareBand`,
  `ConversionSection`, `FAQAccordion`, `AppointmentForm`, `DoctorTrust`.
- Site-wide config in `src/config/site.ts`. Enquiry transport adapter in `src/lib/enquiry.ts`
  (WhatsApp deep link today, swappable for a real API later).

## Routes
| Route | Status |
|---|---|
| `/` | Built — **rebuilt against the approved design handoff**, see `visual-fidelity-status.md` |
| `/pregnancy-antenatal-care` | Built (not yet design-recovered) |
| `/natural-birth` | Built (not yet design-recovered) |
| `/normal-vaginal-delivery` | Built (not yet design-recovered) |
| `/vbac-consultation` | Built (not yet design-recovered) |

## Technical checks (as of this build)
- `npm run lint` — PASS
- `npm run typecheck` — PASS
- `npm run verify:birthwave` — PASS
- `npm run fidelity` — PASS (homepage; 13/13 sections in order, no overflow at any of the nine
  handoff viewports, ≤0.4% page-height delta at desktop)
- `npm run build` — PASS (all 5 routes statically generated)

## Runtime/visual verification (this session)
Checked in a real browser (dev server + a production `next start` build) at 320, 360, 390, 430,
768, 1024, 1280 and 1440px on all five routes. No horizontal overflow at any width. Found and
fixed two real issues along the way:
- The header nav wrapped to two lines right around 1024–1150px (too little space for four nav
  labels + Call + Book Appointment). Fixed by hiding the "Call" text button until `xl` (1280px)
  and tightening nav gaps — full nav now fits on one line from `lg` (1024px) up.
- The header's "Call"/nav text used `text-muted` against a fully transparent top state, which had
  poor contrast on the dark-hero pages (Natural Birth, VBAC) before scrolling. Fixed by giving the
  unscrolled header a translucent `bg-ivory/45` backdrop instead of fully transparent, so nav text
  stays legible over any hero color.
Also functionally verified: mobile menu open/close, FAQ accordion toggle, and a full
`AppointmentForm` submission (validation errors, then a correctly-built `wa.me` deep link with
the enquiry fields and the right phone number) on the production build.

## Not yet done
- No dedicated `/doctors` page yet — `dr-bharathy-kandasamy.png` and `sheethal-sathya.png` are
  copied into the asset library but not placed on any page.
- Journey-entry categories without a built page (Fertility & Preconception, Postpartum &
  Recovery, Newborn & Pediatric Care, Women's Health) route to a pre-filled WhatsApp enquiry from
  the homepage rather than a dedicated page — intentional for this scope, not an oversight.
- Analytics/tracking IDs are not wired up; `data-event` attributes are present on major CTAs for
  future GTM/GA4 binding.
