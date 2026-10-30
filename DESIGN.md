# DESIGN.md — design system

Mobile-first; designed at 375 px, scaled to 768 and 1440.

## Type
- **Display/headings:** Inter Tight Variable (self-hosted via `@fontsource-variable/inter-tight`), weight 700, tight tracking (-0.02em).
- **Body:** Inter Variable (`@fontsource-variable/inter`), 400/600.
- Scale (ratio 1.25, base 16 px): 16 / 18 / 20 / 25 / 31 / 39 / 49 / 61. Hero H1 clamps 36→60 px.
- Body line-height 1.6, headings 1.1–1.2. Measure capped at 65ch (`max-w-prose` = 65ch).
- Minimum body text 16 px; small print 14 px only for captions/legal with ≥ 4.5:1 contrast.

## Spacing
8 px grid. Section padding: 64 px mobile, 96 px ≥ md, 128 px ≥ xl. Container max 1200 px, 16 px side gutter mobile, 24 px tablet, 32 px desktop.

## Color tokens (CSS custom properties in `src/styles/global.css`, mapped to Tailwind `@theme`)
| Token | Hex | Use | Contrast |
|---|---|---|---|
| `--c-ink-950` | #0B1220 | Headings, footer bg | 17.9:1 on white |
| `--c-ink-700` | #334155 | Body text | 9.1:1 on white |
| `--c-ink-500` | #64748B | Secondary text (≥ 16 px only) | 4.6:1 on white |
| `--c-ink-200` | #E2E8F0 | Borders | — |
| `--c-ink-100` | #F1F5F9 | Surface / section alt bg | — |
| `--c-brand-500` | #00AEEE | Brand cyan: logo, large decorative, 3 px rules, icons on dark | 2.4:1 on white → **never for text on white** |
| `--c-brand-700` | #0369A1 | Links, secondary buttons, text accents | 5.9:1 on white |
| `--c-brand-800` | #075985 | Link hover | 7.4:1 |
| `--c-cta-600` | #C2410C | Primary "Call" button bg, white text | 5.5:1 with white |
| `--c-cta-700` | #9A3412 | Primary hover | 7.3:1 |
| `--c-white` | #FFFFFF | — | — |

Dark sections (footer, final CTA) use `--c-ink-950` bg with white/`--c-ink-200` text; cyan `#00AEEE` on `#0B1220` = 8.5:1 so it is allowed for text there.

## Components
- **Button:** primary (cta-600 bg, white, 48 px tall, 16 px text, radius 8), secondary (white bg, brand-700 border/text), ghost (text + arrow). Min 44×44 tap target. Focus: 3 px brand-500 outline offset 2 px.
- **Header:** logo left, nav center/right ≥ lg, phone button always visible; mobile hamburger opens a `<dialog>`-based drawer, Esc/overlay closes, focus trapped by native dialog.
- **Sticky mobile bar:** fixed bottom on < lg: "Call" (primary) + "Free Quote" (secondary); body gets bottom padding so content is never hidden.
- **Card:** white, 1 px ink-200 border, radius 12, 24 px padding; whole card is the link.
- **Trust strip:** 4 items, icon + label, wraps 2×2 on mobile.
- **Step list:** numbered circles (brand-700), connecting line ≥ md.
- **Testimonial:** quote, 5 stars (aria-label), name, date.
- **Gallery + lightbox:** `<a>` grid of `<Picture>`; lightbox is a `<dialog>` with prev/next/close buttons, arrow-key nav, `aria-label`s.
- **FAQ:** native `<details>/<summary>` with custom marker, grouped under one heading, FAQPage schema.
- **Form:** visible `<label>` above each field, `required` + `aria-describedby` error text, inline validation on blur via Constraint Validation API, honeypot `bot-field`, success redirect to `/thank-you/`.
- **Footer:** NAP, service list, service areas, resources, social, copyright.

## Motion
Only opacity/transform ≤ 200 ms on hover/focus and drawer open; everything wrapped in `@media (prefers-reduced-motion: no-preference)`.

## Imagery
Real photos only, through Astro `<Picture formats={['avif','webp']}>` with `widths` and explicit `width/height`. Hero image is `loading="eager" fetchpriority="high"`; everything else lazy. Missing subjects use a labeled placeholder block (`<Placeholder label="Photo needed: curb cut" />`).

## Icons
Hand-written inline SVG (24 px, 1.75 stroke) for the ten services and UI glyphs. No icon font.
