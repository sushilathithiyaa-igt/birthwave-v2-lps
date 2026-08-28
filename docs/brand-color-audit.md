# Brand Color Audit — local, uncommitted

Read the actual **Birthwave Brand Guideline.pdf** (19 pages, `~/Downloads/`) directly before
making any change. Its "Colors" page lists three **Primary Colors** with full RGB/CMYK
breakdowns:

1. `#CA9585` (rose/brown)
2. `#5DAEDB` (blue)
3. `#F88379` (coral)

**Important contradiction, resolved per this task's own source-priority order:** the blue
(`#5DAEDB`) is technically an official primary color in the guideline PDF — but this task's
explicit client instruction says *"BLUE CURRENTLY USED IN THE SITE IS NOT APPROVED"* and
*"NO BLUE VISUAL ACCENTS."* Per the stated priority (latest client feedback > brand guideline),
the client's live rejection overrides the guideline's technical approval. All blue has been
removed from rendered output; nothing here invents a replacement hex not derived from the two
remaining approved primaries (rose, coral) or the site's existing warm-neutral family.

No secondary/neutral color page exists in the guideline PDF — the ivory/paper/sand/blush/cocoa
neutrals already in use are the build's own derived supporting surfaces (documented as such in
`docs/project-brief.md`), not a guideline omission.

## Findings

| Old color | Location | Replacement | Brand guide source |
|---|---|---|---|
| `--color-sky: #5DAEDB` | `globals.css` root token — defined but **unused** as a utility class anywhere in the codebase (confirmed by grep) | **Deleted** (token and its `@theme inline` passthrough removed entirely) | Guideline lists it as Primary Color 2; removed per explicit client rejection this pass |
| `--color-sky-mist: #EAF5FA` (root default) | Pale blue "mist" neutral. Rendered wherever a page has no `.theme-*` override (Pregnancy) and wherever `bg-sky-mist` is used with no theme scope — `InnerHero.tsx`'s hero badge pill, used on all four landing pages | `#F6EDE8` — a warm rose-mist tint derived from the approved rose primary (`#CA9585`), matching the existing `--color-blush-light` family | Rose is Primary Color 1 |
| `.theme-normal-vaginal-delivery` entire page theme: `--color-rose: #4F98BD`, `--color-deep: #3D7C9C`, plus blue-tinted `--color-ivory/--color-sand/--color-blush/--color-sky-mist` | The single largest issue — this override drives `bg-rose`/`text-rose`/`bg-deep`/`hover:bg-deep` used throughout every shared component (buttons, CTAs, badges, hover states, icons), so the **entire** `/normal-vaginal-delivery` page rendered in blue | Rebuilt on coral: `--color-rose: #F88379` (exact approved primary), `--color-deep: #DD6A5F` (a darker derivation, same method already used for `--color-od-rose-deep` from `--color-od-rose`), plus coral-family `ivory/sand/blush/sky-mist` tints | Coral is Primary Color 3 |
| `bg-sky-mist` section background, `normal-vaginal-delivery/page.tsx:75` | The "birth-path" CareGrid section's background wash | No code change needed — automatically resolves to the corrected coral `--color-sky-mist` once the theme override above is fixed | — |

## Verification

- `grep`-based scan of every 6-digit hex literal across `src/**/*.tsx` and `src/**/*.css` for a
  blue-dominant channel (blue > red and blue > green): **zero remaining matches** outside this
  report's own explanatory comments describing what was removed.
- No other page theme (`.theme-natural-birth`, `.theme-vbac`) or the default root palette used
  by Pregnancy contained blue — confirmed by inspection, not just grep, since a false negative
  here would be a real bug.

## Unapproved-blue occurrence count

- **Before:** 1 root token (`--color-sky`, unused) + 1 root neutral (`--color-sky-mist`, pale
  blue, live on Pregnancy's hero badge) + 1 entire page theme (`.theme-normal-vaginal-delivery`,
  live across the whole Normal Vaginal Delivery page).
- **After:** 0.
