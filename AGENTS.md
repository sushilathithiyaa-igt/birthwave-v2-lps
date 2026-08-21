<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Birthwave V2 — agent instructions

## Stack
- Next.js 16.3 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS 4 (CSS-first `@theme`
  config in `src/app/globals.css` — no `tailwind.config.ts`).
- Package manager: npm.

## Conventions
- Server Components by default. Add `"use client"` only where interaction requires it (menus,
  forms, accordions).
- Shared design tokens (colors, fonts, shadows) live in `src/app/globals.css` under `@theme
  inline`. Never hardcode a hex color in a component — use the token utilities (`bg-rose`,
  `text-muted`, etc.).
- Brand facts (phone, address, socials, doctor name) live in `src/config/site.ts`. Never
  duplicate these as literal strings elsewhere.
- The appointment/enquiry transport is an adapter in `src/lib/enquiry.ts` (currently builds a
  WhatsApp deep link). Swap its internals for a real leads API later without touching call sites.
- Shared page primitives live in `src/components/` (`InnerHero`, `CareGrid`, `EditorialBand`,
  `RelatedCareBand`, `ConversionSection`, `FAQAccordion`, `AppointmentForm`, `DoctorTrust`). Reuse
  these for new pages; don't fork a one-off copy of a section unless the layout genuinely differs.
- Never use `href="#"`, fake forms, or fake play buttons — every interactive control must do
  something real (navigate, call, open WhatsApp, submit).

## Medical/compliance copy rules
See `docs/project-brief.md` for the full rules. In short: no invented statistics, no outcome
guarantees ("guaranteed normal delivery", "100% success"), no rigid VBAC eligibility claims.
Prefer "may", "individual clinical context", "discuss with your clinician".

## Verification
Run before considering any change done:
```
npm run lint
npm run typecheck
npm run verify:birthwave
npm run build
```
