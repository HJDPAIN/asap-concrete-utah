# DECISIONS.md — judgment calls, in order

1. **Trade correction.** The brief assumed a flatwork contractor (driveways, patios). The live site is a concrete *cutting* company. I built the IA around its ten real services and dropped the brief's example list. Flatwork-style services are not offered and are not mentioned.
2. **Phone number.** Only (435) 760-0806 is used (the number on the website). The 208-317-7831 number visible on the truck wrap is listed in AUDIT.md as a client question and not published.
3. **Address/hours/email/license/years** are not on the live site, so they are `[TODO: confirm with client]` in content and omitted from JSON-LD rather than guessed. Schema uses `areaServed` instead of a street address.
4. **"Same-day" language** appears only as "same-day when possible" and is attributed to the customer review that says it; it is not stated as a guarantee.
5. **Reviews** are the three verbatim reviews with the exact attribution shown on the live site. No aggregate rating/`AggregateRating` schema because no count/average is published.
6. **Brand color.** Kept the brand cyan `#00AEEE` for the logo and large accents but it fails AA on white (2.4:1), so body links, buttons, and small text use a darkened cyan `#0369A1` (≈5.9:1 on white) and the CTA accent is a safety orange `#C2410C` for Call buttons (≈5.5:1 with white text). Documented in DESIGN.md.
7. **Logo.** Reused the existing logo PNG (transparent) and also traced a simple SVG wordmark fallback so the header stays sharp; the mark geometry is the client's own.
8. **Blog kept.** The six articles are real, useful, and indexed; migrated them verbatim to `/resources/<slug>` with 301s from `/articles/f/<slug>`.
9. **Per-city pages:** not built. The live site lists regions, not cities. One Service Areas page covers the six regions; city pages are a recommended next step once the client confirms cities.
10. **Dead `/ols/products` URL** 301s to `/services` rather than being left as a 404.
11. **Form:** Netlify Forms with honeypot, no reCAPTCHA (no third-party JS). Photo upload is optional and limited to images. Removed the newsletter opt-in checkbox from the quote form.
12. **Stack:** Astro 5 + Tailwind 4 static output as specified. Fonts self-hosted via `@fontsource-variable` (Inter Tight display, Inter body). No client JS except the small nav drawer and lightbox scripts.
13. **Images:** processed with Astro's built-in `<Picture>` (sharp) to AVIF/WebP with explicit dimensions. The 6.6 MB duplicate PNG and the 550 px vendor sealer image are excluded.
14. **Placeholders** for missing photos are labeled grey blocks ("Photo needed: curb cut"), never stock.
15. **GA4:** the live ID `G-HNYVBE79LV` is included in the layout as a commented-out slot, not active.
16. **Privacy Policy** is a clearly labeled placeholder page, not legal advice.
17. **Netlify site name:** `asap-concrete-utah-preview` so it cannot be confused with a production site. No custom domain attached.
