# Asset inventory

All assets below were copied from `~/Documents/CODE FILES SUSHIL/Birthwave/public/images/` (the
existing V1 project's already-vetted photo library) unless noted. Every file was opened and
visually confirmed before use — none were used on filename alone.

| File (this project) | Source | Used on | Why |
|---|---|---|---|
| `images/brand/birthwave-logo-white.png` | V1 `birthwave-logo-white.png` | Header, footer (rose badge) | Transparent white glyph — the only logo variant that works on both light and dark section backgrounds inside a colored badge |
| `images/brand/birthwave-logo-solid.png` | `~/Downloads/Birthwave logo.png` | Unused (kept for reference/print) | Canonical flattened logo with baked-in brown background; not usable directly in a responsive header |
| `images/team/dr-santoshi-nandigam.png` | V1 | Home hero, `DoctorTrust` (all 5 pages) | Confirmed real portrait, already labeled and used in production V1 |
| `images/team/dr-bharathy-kandasamy.png` | V1 | (available, not currently placed) | Second team portrait, reserved for a future `/doctors` page |
| `images/team/sheethal-sathya.png` | V1 | (available, not currently placed) | Third team portrait, reserved for a future `/doctors` page |
| `images/care/clinic-interior.webp` | V1 `birthwave/video/birthwave-hospital-poster.webp` | Home media section (video poster) | Real clinic interior photo, warm/premium, doubles as video poster |
| `images/care/community-event.png` | V1 `birthwave-community-event.png` | Home media section | Real group event photo — used instead of a fabricated testimonial section |
| `images/care/antenatal-movement-coaching.png` | V1 | (available, not currently placed) | Real movement/dance class photo — candidate for a future wellness section |
| `images/care/birth-partner-session.png` | V1 `birthwave-birth-partner-session.png` | Pregnancy hero; VBAC editorial band | Calm, individual consultation mood — reused deliberately across two pages for a consistent "one-on-one conversation" feel, not out of laziness |
| `images/care/prenatal-workshop.png` | V1 `birthwave-prenatal-workshop.png` | Natural Birth editorial band | Birth-partner hand-holding technique — matches "birth partner preparation" copy |
| `images/care/birth-position-practice.png` | V1 `birthwave-birth-position-practice.png` | Natural Birth hero | Real workshop photo of a birth-ball positioning practice |
| `images/care/childbirth-workshop-01.png` | V1 `birthwave-childbirth-workshop-01.png` | Normal Vaginal Delivery hero | Real workshop photo showing a labour-support technique |
| `images/care/childbirth-workshop-02.png` | V1 `birthwave-childbirth-workshop-02.png` | Normal Vaginal Delivery editorial band | Real workshop photo, positioning demonstration on a treatment table |
| `images/care/workshop-facilitator.png` | V1 | (available, not currently placed) | Reserved for a future childbirth-education content page |
| `images/care/postpartum-baby-feet.png` | Scraped site archive (`Latest IMage asserts/.../2025_11_best_vbac_doctor/screen.png`) | VBAC hero | Renamed from the scraper's filename, which asserted an unverifiable "VBAC doctor" identity — the actual image is a tasteful, face-free postpartum belly/newborn-feet photo, used for its VBAC-relevant mood (previous scar, next chapter), not for any claimed identity |
| `videos/clinic-experience.mp4` | V1 `videos/birthwave-hospital-experience.mp4` | Home media section | Only pre-existing short clinic video; ~1.1MB, already web-optimized |

## Deliberately not used

- The raw camera-roll dump at `~/Downloads/BIRTHWAVE ASSERTS/` (20GB, 580 files, phone-timestamp
  filenames only, no metadata) was not used. It's clearly newer (2026-dated) than the assets
  above and may contain better material, but nothing in it could be identified or vetted without
  opening every file individually, and the V1 asset library already covered every page's need with
  real, previously-approved photography. Worth a manual pass in a future session if fresher
  imagery is wanted.
- The "Latest IMage asserts" scraped-site archive was mostly unusable: many `screen.png` captures
  in that folder are blank/broken (the scraper's screenshot of a page where the image failed to
  load), confirmed by opening several samples. Only one image from that archive
  (`postpartum-baby-feet.png`, see above) rendered real content.
- No stock photography (Unsplash etc.) was used anywhere, per the build brief.
