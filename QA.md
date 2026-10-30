# QA.md: test results (2026-10-29)

All checks ran against the local production build (`npm run build` + `astro preview`) and again against the deployed preview at https://asap-concrete-utah-preview.netlify.app.

## Build
- `npm run build`: 26 pages, 0 errors, 0 warnings.
- 180 optimized image variants (AVIF/WebP/JPEG). The largest source photo went from 1.16 MB to 57–102 kB at hero size.

## Lighthouse: before (live GoDaddy site) vs after (deployed preview)

| Page | Form factor | Perf | A11y | BP | SEO | LCP |
|---|---|---|---|---|---|---|
| Home | mobile | 76 → **99** | 87 → **100** | 96 → **100** | 100 → **100** | 6.1 s → **1.9 s** |
| Home | desktop | 97 → **100** | 87 → **100** | 96 → **100** | 100 → **100** | 1.3 s → **0.4 s** |
| Service (Services → Core Drilling) | mobile | 98 → **100** | 93 → **100** | 96 → **100** | 100 → **100** | 2.4 s → **1.5 s** |
| Service | desktop | 99 → **100** | 93 → **100** | 96 → **100** | 100 → **100** | 0.9 s → **0.4 s** |
| Contact | mobile | 76 → **100** | 90 → **100** | 96 → **100** | 92 → **100** | 5.9 s → **1.0 s** |
| Contact | desktop | 100 → **100** | 90 → **100** | 96 → **100** | 92 → **100** | 0.3 s → **0.3 s** |

All targets met (≥95 / 100 / 100 / 100). CLS is 0 on mobile everywhere; worst desktop CLS is 0.024 on Contact (well under 0.1). Reports: `audit/lighthouse/before-*`, `local-*`, `after-*` (JSON + HTML).

## Accessibility (axe-core, WCAG 2.0/2.1/2.2 A+AA + best practice)
- Every page (26 + 404) at 375 px and 1440 px.
- First run: 16 violations (low-contrast placeholder labels/TODO notes; heading jump on /services/).
- Fixed and re-run: **0 violations**. Report: `qa/axe-report.json`.

## Keyboard and interaction (Playwright)
| Check | Result |
|---|---|
| First Tab lands on "Skip to main content" | Pass |
| Header tab order: logo, 6 nav links, Call, Free Quote | Pass |
| Mobile drawer opens with Enter, focus stays inside, Esc closes, aria-expanded updates | Pass (local and deployed) |
| FAQ `<details>` opens with Enter | Pass |
| Lightbox opens with Enter, focus on Close, arrow keys navigate, Esc closes, focus returns to the thumbnail | Pass |
| Quote form blocks empty submit, focuses first invalid field, shows inline error text | Pass |

## Links, SEO files and schema
- Internal links in all 26 HTML files: **0 broken**.
- `tel:` links: 158, all `tel:+14357600806`.
- Exactly one `<h1>`, a canonical and a meta description on every page.
- JSON-LD parses on every page. Types: GeneralContractor/LocalBusiness ×26, BreadcrumbList ×22, Service ×10, FAQPage ×11, Article ×6, ContactPage, ImageGallery, ItemList.
- Deployed: `/robots.txt`, `/sitemap-index.xml`, `/sitemap-0.xml`, `/site.webmanifest`, `/favicon.ico` all return 200.
- 301s verified on the deploy: `/contact-us`, `/articles/f/concrete-scanning`, `/ols/products`, `/f.rss`.
- Security headers present on the deploy: CSP, X-Frame-Options DENY, Referrer-Policy, HSTS. The first deploy logged CSP errors for inlined scripts; fixed by forcing external script files. The console is now clean.
- Rich Results Test / validator.schema.org were not run from here (both need an interactive browser session). JSON-LD was parse-checked and type-counted instead. Run the Rich Results Test on the preview URL before launch.

## Screenshots
Every page at 375 / 768 / 1440 in `qa/screenshots/` (78 files). Reviewed for overflow, overlap and broken images. An automated scrollWidth check found **no horizontal overflow** at any width. Two issues found and fixed: the desktop header wrapped at 1024–1279 px (nav tightened, phone button collapses to "Call" there), and lazy images were blank in full-page captures (capture script now scrolls first; the images themselves were fine).

## Netlify Forms (deployed)
- Form `quote` is detected with fields: bot-field, name, phone, email, service, location, details, photo.
- Browser submissions redirect to `/thank-you/` with status 200 and no console errors.
- 9 test submissions were sent. All 9 reached Netlify. Netlify's spam filter put the automated ones in the **Spam** tab, which is normal for scripted test traffic. Two are in Verified. **Delete the test submissions** in Netlify → Forms → quote (both Verified and Spam) before handing over.
- **Email notifications are not set up yet.** The client's email address is unknown. Add a notification under Site configuration → Notifications → Form submission notifications.
