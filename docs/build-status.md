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
| `/` | Built |
| `/pregnancy-antenatal-care` | Built |
| `/natural-birth` | Built |
| `/normal-vaginal-delivery` | Built |
| `/vbac-consultation` | Built |

## Technical checks (as of this build)
- `npm run lint` — PASS
- `npm run typecheck` — PASS
- `npm run verify:birthwave` — PASS
- `npm run build` — PASS (all 5 routes statically generated)

## Not yet done
- Runtime/browser visual verification across the 320–1920px range (in progress this session).
- No dedicated `/doctors` page yet — `dr-bharathy-kandasamy.png` and `sheethal-sathya.png` are
  copied into the asset library but not placed on any page.
- Journey-entry categories without a built page (Fertility & Preconception, Postpartum &
  Recovery, Newborn & Pediatric Care, Women's Health) route to a pre-filled WhatsApp enquiry from
  the homepage rather than a dedicated page — intentional for this scope, not an oversight.
- Analytics/tracking IDs are not wired up; `data-event` attributes are present on major CTAs for
  future GTM/GA4 binding.
