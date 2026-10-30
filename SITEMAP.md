# SITEMAP.md — information architecture

Goal: win local search for "concrete cutting / core drilling / concrete scanning + Logan / Cache Valley / Northern Utah" and turn visits into calls.

## Primary nav
Home · Services ▾ · Service Areas · Projects · Resources · About · **Call (435) 760-0806** · **Free Quote**

## Pages

| Route | Purpose | Key sections | Schema |
|---|---|---|---|
| `/` | Convert | Hero (headline, sub, Call + Free Quote, trust strip) → Services grid (10) → Why ASAP → Scan-before-you-cut block → 4-step process → Project gallery (6) → Reviews (3) → Service areas → FAQ (6) → Final CTA | LocalBusiness/GeneralContractor, FAQPage |
| `/services/` | Index | Intro, 10 service cards with 1-line summaries, CTA | BreadcrumbList, ItemList |
| `/services/flat-sawing/` | Service | What it is, when you need it, what we need to quote, photos, FAQ, CTA | Service, BreadcrumbList, FAQPage |
| `/services/wall-sawing/` | Service | ″ | ″ |
| `/services/core-drilling/` | Service | ″ | ″ |
| `/services/concrete-demolition/` | Service | ″ | ″ |
| `/services/curbs-and-approaches/` | Service | ″ (placeholder photo) | ″ |
| `/services/green-control-cutting/` | Service | ″ | ″ |
| `/services/concrete-scanning/` | Service | ″ | ″ |
| `/services/concrete-grinding/` | Service | ″ (placeholder photo) | ″ |
| `/services/concrete-sealing/` | Service | ″ | ″ |
| `/services/driveway-cleaning/` | Service | ″ (placeholder photo) | ″ |
| `/service-areas/` | Local | Six regions, "willing to travel", how travel affects quotes (TODO), CTA | BreadcrumbList |
| `/projects/` | Proof | Gallery of real job photos with lightbox, captions by service | BreadcrumbList, ImageGallery |
| `/about/` | Trust | Who we are (within source facts), equipment list derived from photos/articles, TODO owner bio | BreadcrumbList |
| `/resources/` | Content | Six migrated articles | BreadcrumbList |
| `/resources/<slug>/` ×6 | Content | Verbatim article + CTA | Article, BreadcrumbList |
| `/contact/` | Convert | Quote form (Netlify), phone, service areas, response expectation | ContactPage, BreadcrumbList |
| `/thank-you/` | Form success | Confirmation, phone, back links (noindex) | — |
| `/privacy/` | Legal | Placeholder | — |
| `/404` | Utility | Links to services/contact | — |

## 301 map (old → new)
- `/contact-us` → `/contact/`
- `/articles` → `/resources/`
- `/articles/f/5-step-guide-for-egress-window-projects` → `/resources/egress-window-guide/`
- `/articles/f/why-should-you-seal-your-concrete` → `/resources/why-seal-concrete/`
- `/articles/f/concrete-demolition-and-removal` → `/resources/concrete-demolition-and-removal/`
- `/articles/f/core-drilling-tips-and-tricks` → `/resources/core-drilling-tips/`
- `/articles/f/locating-in-floor-heating` → `/resources/locating-in-floor-heating/`
- `/articles/f/concrete-scanning` → `/resources/concrete-scanning/`
- `/ols/products` → `/services/`
- `/f.atom`, `/f.rss`, `/f.json` → `/resources/`

## Copy rules
- Grade 7–8 reading level, short sentences, second person.
- Lead with what the customer gets, when we show up, how to get a quote.
- No claim that is not in `content/source/business-facts.md` unless marked TODO.
