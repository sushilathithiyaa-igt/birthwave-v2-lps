# Locked design reference — Birthwave V2 homepage

Copied 2026-08-24 from the Open Design handoff `~/Downloads/birthwave home page.zip`
(already extracted at `~/Downloads/Web-Prototype/`). **Do not edit these files** — they are
the visual contract the production homepage is measured against.

## Contents

| File | Role |
|---|---|
| `birthwave-homepage.html` | Primary screen. Self-contained: all CSS is inline in `<style>`. |
| `birthwave-homepage-preview.png` | Approved full-page visual (1440×8537). |
| `DESIGN-HANDOFF.md` | Implementation contract. |
| `DESIGN-MANIFEST.json` | Machine-readable screens/tokens/viewport matrix. |
| `birthwave-landing.css` / `.js` | Shared stylesheet + behaviour for the **four service pages**, not the homepage. |
| `assets/` | `birthwave-logo.png`, `dr-santoshini.jpg`, `clinic-exterior.jpg`, `clinic-detail.jpg`. |

The three `assets/*.jpg` files are downscaled to 1600px (from 7008px originals, ~20MB each) so
the repo stays clonable — the reference only ever displays them at ≤500px, so re-rendering it is
unaffected. `assets/birthwave-care-optimized.mp4` (15MB) is omitted: the homepage design has no
video slot. Full-resolution originals remain in the source ZIP.

The four service-page HTML files (`natural-birth.html` etc.) also live in the source ZIP; they
were not copied here because this pass covers the homepage only.

## Reference status

| Page | HTML | CSS | JS | Renders correctly |
|---|---|---|---|---|
| Home | YES | INLINE | INLINE | YES |

Verified by serving this directory over HTTP and rendering it in Chromium at all nine handoff
viewports — layout completes, the asset-substitution script resolves, and the rendered page is
pixel-identical in height (8537px at 1440) to `birthwave-homepage-preview.png`.

## Two defects in the reference, deliberately not reproduced

1. **No webfonts are loaded.** The homepage declares `Plus Jakarta Sans` / `Poppins` but never
   imports them, so both the export *and* the approved preview PNG rendered in a Helvetica/Arial
   fallback. The sibling `birthwave-landing.css` in the same handoff *does* `@import` both
   families from Google Fonts, and the Brand Guideline names them, so the intended typefaces are
   unambiguous. Production loads the real fonts via `next/font`, which shifts line-wrapping
   slightly versus the preview. This is the source of essentially all remaining height delta.
2. **The continuum's five timeline dots never paint.** `.journey-line:before` positions them with
   percentage `box-shadow` offsets, which is invalid CSS — browsers drop the whole declaration
   and only the single base dot renders. Production renders all five at the declared
   0 / 25 / 50 / 75 / 100% offsets.
