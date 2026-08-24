# Homepage asset map

Every image slot in the approved homepage design, and what fills it in production. Sources:
`D` = design handoff (`references/birthwave-v2-design/`), `V1` = the earlier
`birthwave-interim-v1` photo library.

| Section | Reference slot | Production asset | Source | Crop notes |
|---|---|---|---|---|
| Header / Footer | `.brand-logo`, 148×58 on a `#9d7668` panel | `images/brand/birthwave-logo-white-trimmed.png` | V1 | White wordmark trimmed to its ink bounds so it fills the panel; the handoff's own logo has a baked-in background |
| Hero | `.hero-main` — dominant arched portrait, 72% × 500px | `images/home/dr-santoshi-clinic.jpg` | D `assets/dr-santoshini.jpg` | Pre-cropped to 4:5 at 48% horizontal so the subject stays centred in both the desktop arch (~0.95) and the mobile crop (~0.74) |
| Hero | `.hero-side` — overlapping photo, 34% × 265px, 9px ivory border | `images/home/clinic-exterior.jpg` | D `assets/clinic-exterior.jpg` | Cropped to 0.85 portrait, centred on the entrance and signage |
| Team | `.featured-doctor img`, 410px tall, `120px 20px 20px 20px` | `images/team/dr-santoshi-nandigam.png` | V1 | A **different** photograph of Dr. Santoshi from the hero — studio portrait vs environmental — so the page doesn't repeat one image |
| Team | `.doctor-card` 1 | `images/team/dr-bharathy-kandasamy.png` | V1 | `object-cover`, 210px tall |
| Team | `.doctor-card` 2 | `images/team/sheethal-sathya.png` | V1 | `object-cover`, 210px tall |
| Team | `.doctor-card` 3 | *initials panel* (`DS`) on `--od-sand` | — | No verified portrait — see `asset-gaps.md`. Uses the reference's own placeholder colour and exact geometry; hidden below 620px, matching the reference's third-card rule |
| Proof | `.quote-card.feature`, 1.12fr × 352px | `images/home/clinic-lounge.jpg` | D `EXP01311.JPG` | Cropped 2:1 to the panel ratio |
| Proof | `.quote-stack` top, 555×180 | `images/home/clinic-signage-wall.jpg` | D `EXP01253.JPG` | Cropped 3:1 |
| Proof | `.quote-stack` bottom, 555×154 | `images/home/clinic-consult-lounge.jpg` | D `EXP01318.JPG` | Cropped 3.4:1 |

## Curation rules applied

- Dr. Santoshi appears twice on the page (hero, team) as the design requires, but never as the
  same photograph twice.
- Proof panels use interiors with **no identifiable individuals**, so no one is shown without a
  confirmed identity. `EXP01306.JPG` (reception, staff member visible) was passed over for this
  reason.
- No stock photography anywhere.

## Available but unused

- `references/.../assets/birthwave-care-optimized.mp4` (15MB) — the approved homepage design has
  no video slot, so adding one would mean inventing a section. Held for a future page.
- `references/.../assets/clinic-detail.jpg`, plus `EXP01306`, `EXP01336` in the source ZIP.
