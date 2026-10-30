# ASAP Concrete Cutting — website rebuild (preview)

Modern, static rebuild of [asapconcreteutah.com](https://asapconcreteutah.com/) for review. Astro 5 + Tailwind CSS 4, deployed to Netlify. **The live site and its DNS are untouched.**

## Run locally

Requires Node 22+ (`.nvmrc` pins 24).

```bash
nvm use
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs dist/
npm run preview    # serves dist/
```

## Edit content (no component changes needed)

| What | Where |
|---|---|
| Phone, service areas, social links, TODO placeholders | `src/content/business.json` |
| Services (copy, FAQs, photo, meta) | `src/content/services/*.md` (one file per service; `order` controls sort) |
| Articles | `src/content/articles/*.md` |
| Homepage FAQ | `src/content/faqs.json` |
| Reviews | `src/content/reviews.json` |
| Gallery captions | `src/lib/gallery.ts` |
| Photos | drop JPG/PNG in `src/assets/images/` and reference by filename (without extension) |
| Design tokens | `src/styles/global.css` (`@theme` block) |

Verbatim copy scraped from the live site lives in `content/source/` and is the only source of truth for business facts. Anything not confirmed there is marked `[TODO: confirm with client]`.

## Deploy

Netlify builds from `main`: `npm run build` → `dist/`. Headers, caching and CSP are in `netlify.toml`; 301s from old URLs in `public/_redirects`. The quote form uses Netlify Forms (`name="quote"`, honeypot `bot-field`, success page `/thank-you/`).

To enable analytics, uncomment the GA4 slot in `src/layouts/Base.astro` and add `https://www.googletagmanager.com` to `script-src`/`connect-src` in the CSP.

## Project docs

- `AUDIT.md` — audit of the live site + Concut reference analysis
- `SITEMAP.md` — information architecture and 301 map
- `DESIGN.md` — design system
- `DECISIONS.md` — every judgment call
- `QA.md` — test results
- `REPORT.md` — final report and next steps
