# AUDIT — asapconcreteutah.com (crawled 2026-10-29)

## 0. Headline finding

The live site is for **ASAP Concrete Cutting**, a concrete *cutting/coring/scanning/demolition* contractor in Logan, UT — not a flatwork (driveway/patio) contractor. The rebuild brief's example service list (driveways, patios, foundations…) does not apply. The rebuild uses only the ten services the live site actually lists. This makes Concut a closer structural reference than expected, which raises the bar on *not* copying it.

## 1. Pages and structure

| URL | Title tag | H1 | Notes |
|---|---|---|---|
| `/` | ASAP Concrete Cutting in Logan, Utah | "Logan, UT" | Hero = truck photo, no headline. Specialty sentence, quote form, reviews widget, blog feed. |
| `/services` | ASAP Concrete Cutting in Logan, Utah (dup) | "You should see what we saw." | Two plain lists: 10 services, 6 service areas. No descriptions. |
| `/contact-us` | ASAP Concrete Cutting | "Contact Us" | Form only (Name, Email*, Phone, description). No address, hours, email, map. |
| `/articles` | Articles | "Helpful Articles" | 6 posts, 2020–2024, 5 categories. |
| `/articles/f/<slug>` ×6 | post title | "Helpful Articles" (H1 is the blog title, post title is H3) | Real, useful posts written by the owner. |
| `/ols/products` | (in sitemap) | — | **404 "Invalid Widget Data Requested"** — dead store page in sitemap. |

Nav: Home · Contact Us · Services · Articles (plus a "More" overflow that duplicates them). Footer: copyright, Facebook, Instagram, "Powered by GoDaddy", repeated nav.

Sitemap: `sitemap.xml` index → website / blog / ols (ols contains the 404). `robots.txt` is `User-agent: *` with no rules and no sitemap line.

## 2. Content inventory

Verbatim copy is in `content/source/*.md` and `content/source/articles/*.md`. Business facts in `content/source/business-facts.md`.

- **NAP:** Name ✔, Phone ✔ (435) 760-0806, Address ✘, Email ✘, Hours ✘.
- **Credentials:** no license #, insurance statement, years in business, or owner name anywhere.
- **Services (10):** Flat Sawing, Wall Sawing, Core Drilling, Concrete Demolition, Curbs and Approaches, Green/Control Cutting, Concrete Scanning, Concrete Grinding, Concrete Sealing, Driveway Cleaning. Zero descriptive copy on the Services page; the blog posts are the only place services are explained.
- **Service areas (6):** Cache Valley, Bear Lake, Southern Idaho, Brigham City, Ogden, Salt Lake City, "Willing to travel beyond areas listed."
- **Reviews:** 3 five-star reviews in a GoDaddy widget (C. Tracy, D. Grant, B. Nielsen — full text in business-facts.md). No aggregate rating, no link to the review platform. **On mobile the widget renders a blank white block with white-on-white heading** (see `audit/screenshots/home-375.png`).
- **FAQs:** none. **Gallery:** none (photos appear only as hero/strip/blog thumbnails). **About:** none.
- **Conflicting phone:** the truck wrap in the hero photo shows 208-317-7831; the site uses (435) 760-0806. Flagged for the client; only the 435 number is used.

## 3. Images (`content/source/images/`)

| File | Px | Looks like | Use in rebuild |
|---|---|---|---|
| ASAP-Stand_Black-2.png | 2400×735 | Logo, black bg (transparent PNG) | Yes (header/footer, recolor-safe) |
| IMG_9191.jpg | 1920×2560 | Real: wrapped truck at commercial site | Yes: About / trust |
| IMG_5593.jpg | 1920×2560 | Real: operator core drilling beside skid steer | Yes: hero candidate, Core Drilling |
| blob-16d1c89.png | 1920×2560 (6.6 MB) | Duplicate of IMG_5593 with black band | No (dup) |
| IMG_6751.jpg | 1284×1309 | Real: hand-held ring saw cutting a wall/footing | Yes: Wall Sawing |
| IMG_6752.jpg | 1284×1144 | Real: track-mounted wall saw on a footing | Yes: Wall Sawing / Green cutting |
| Electric-Flat-Saw-.jpg | 2400×2316 | Real: electric walk-behind flat saw by the truck | Yes: Flat Sawing |
| IMG_1828.jpg | 828×804 | Real: broken-out slab with skid steer, caution tape | Yes: Demolition (low res, small use only) |
| IMG_2335-2.jpg | 1920×2560 | Real: interior slab trench cut for plumbing | Yes: Demolition / Flat sawing |
| IMG_3200.jpg | 1920×2560 | Real: egress window opening cut in foundation | Yes: Wall sawing / egress |
| IMG_2678-2.jpg | 2400×1883 | Real: in-floor heat tubing before pour | Yes: Scanning article |
| IMG_2049-2.jpg | 2264×2055 | GSSI ground-penetrating radar cart (looks like a product shot on foam) | Yes with caution: Scanning |
| 441-driveway-before-4-smaller.jpg | 1024×612 | Spalled driveway close-up (likely owner photo) | Yes: Sealing |
| concrete-sealer-water-repelling-v-seal-concret.jpg | 550×412 | Vendor/stock image (V-SEAL) | No — too small and not theirs |

No photos exist for: Curbs and Approaches, Concrete Grinding, Driveway Cleaning, team/owner, finished sealed driveway. Those get labeled placeholders. See "Photo shoot list" in REPORT.md.

## 4. Tech stack

- **Platform:** GoDaddy Website Builder 8.0 (`meta generator: Starfield Technologies; Go Daddy Website Builder`). React-rendered, heavy CSS-in-JS class soup, `img1.wsimg.com` image CDN.
- **Fonts:** Montserrat 600/700 (headings), Helvetica/Arial body. Inlined @font-face with swap.
- **Trackers:** GA4 `G-HNYVBE79LV` via googletagmanager; `pagead2.googlesyndication.com` loads on Contact; Google reCAPTCHA v2 invisible on forms.
- **Forms:** GoDaddy `contact.apps-api.instantpage.secureserver.net`, `method=get` to `#`, unnamed inputs, email-list opt-in checkbox on the home form.
- **Blog:** GoDaddy blog app (`blog.apps.secureserver.net`), RSS/Atom/JSON feeds advertised.
- **Reviews:** GoDaddy Reviews widget (client-side rendered; fails on mobile viewport).
- **Theme color:** `#00aeee`.

## 5. Lighthouse — before (`audit/lighthouse/before-*.{json,html}`)

| Page | Form factor | Perf | A11y | Best Practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| Home | mobile | **76** | 87 | 96 | 100 | 6.1 s | 0 | 130 ms |
| Home | desktop | 97 | 87 | 96 | 100 | 1.3 s | 0.001 | 0 |
| Services | mobile | 98 | 93 | 96 | 100 | 2.4 s | 0 | 90 ms |
| Services | desktop | 99 | 93 | 96 | 100 | 0.9 s | 0.001 | 0 |
| Contact | mobile | **76** | 90 | 96 | **92** | 5.9 s | 0.001 | 170 ms |
| Contact | desktop | 100 | 90 | 96 | 92 | 0.3 s | 0.002 | 0 |

Mobile LCP of ~6 s on the two pages that matter most (Home, Contact) is the key performance problem. Accessibility failures are mainly contrast (cyan `#00aeee` on white ≈ 2.4:1), missing form labels (placeholder-only inputs), and heading order.

## 6. SEO

- **Titles:** Home and Services share the same title; Contact and Articles titles lack the business/location. No page targets a service keyword.
- **Meta descriptions:** Home/Services are keyword lists; Contact and Articles have none; blog posts use truncated first paragraph.
- **H1:** Home H1 is "Logan, UT"; blog posts' H1 is "Helpful Articles" on every post (post title is an H3). Services H1 is a pun with no keyword.
- **Heading hierarchy:** H1 → H4 jumps everywhere; H2/H3 skipped.
- **Alt text:** logo has alt; all job photos are CSS backgrounds (no alt, invisible to search/screen readers); blog images have empty alt.
- **Schema:** none (0 JSON-LD blocks on every page). No LocalBusiness, no Service, no FAQ.
- **Canonical:** absent on the 4 main pages; present on blog posts.
- **Indexability:** indexable; no robots meta. robots.txt has no sitemap reference. Sitemap includes a 404 URL.
- **Open Graph:** present but og:description is just the phone number; og:image is a portrait truck photo (poor crop on social).
- **Local signals:** no address, no hours, no map, no GBP link, service areas only as a bare list on an inner page.

## 7. UX problems (prioritized)

**P0 — costs calls/leads**
1. **No value proposition in the hero.** First screen is a truck photo, then "Logan, UT". A visitor cannot tell what the company does without scrolling to a dash-separated sentence.
2. **Primary CTA is weak and non-sticky on mobile.** One blue "Click here to call" button; nothing persistent while scrolling 4,200 px on a phone.
3. **Quote form friction.** Placeholder-only labels (vanish on focus, fail a11y), asterisks inconsistent between home and contact, an unrelated newsletter checkbox, reCAPTCHA copy, no stated response time, no success confirmation visible.
4. **Mobile home LCP ≈ 6 s** (76 perf). Hero is a 1920×2560 portrait JPEG served as a CSS background.
5. **Reviews widget is broken on mobile:** blank area with an invisible white heading.

**P1 — trust and findability**
6. No description of any service; prospects must guess what "Green/Control Cutting" or "Curbs and Approaches" means.
7. No trust bar: no years, licensed/insured, service radius, or review count above the fold.
8. No address, hours, or email anywhere → weak local-SEO and no map pin for a "near me" searcher.
9. Service areas are a bare list on page 2; not surfaced on Home or in footer.
10. Blog feed dominates the homepage (6 cards) ahead of any service or trust content.

**P2 — polish and accessibility**
11. Cyan on white text (~2.4:1) fails WCAG AA for headings, links, and the top bar.
12. Heading order broken (H1→H4), duplicate H1 ("Helpful Articles") on all posts.
13. Dead "More" menu item and duplicate nav in footer; "Powered by GoDaddy" badge.
14. Tap targets: footer social icons and nav links are ~24 px.
15. Sitemap advertises a 404 page; feeds advertised for a six-post blog.

## 8. Scorecard

| Area | Score /10 | Why |
|---|---|---|
| Clarity of offer | 3 | No headline, services unexplained |
| Conversion path | 4 | Phone visible but no sticky CTA, high-friction form |
| Trust signals | 3 | 3 reviews (broken on mobile), nothing else |
| Local SEO | 4 | Title mentions Logan; no NAP, schema, or area pages |
| Technical SEO | 5 | Indexable, sitemap present but dirty, no canonicals/schema |
| Performance | 5 | Mobile LCP 6 s on Home/Contact |
| Accessibility | 5 | Contrast, labels, heading order |
| Content depth | 6 | Blog posts are genuinely good; service pages are empty |
| Design | 4 | Default builder template, no hierarchy |
| Maintainability | 3 | Builder lock-in, no content model |

## 9. What the rebuild fixes (in order)

1. Hero with a plain-English headline, sub-line, Call + Free Quote CTAs, and a trust strip.
2. Sticky mobile call/quote bar; `tel:` everywhere the number appears.
3. One page per service with real descriptions, photos, FAQs, and `Service` schema; services grid on Home.
4. Short, labeled quote form on Netlify Forms with honeypot and a success page; no newsletter checkbox.
5. Static Astro output: hero as `<img>` with responsive AVIF/WebP, explicit dimensions, zero third-party JS → mobile LCP target < 2 s.
6. Reviews rendered as static HTML (verbatim, attributed) so they work on every device.
7. `LocalBusiness`/`GeneralContractor` + `Service` + `FAQPage` + `BreadcrumbList` JSON-LD; unique titles/descriptions; canonicals; clean sitemap and robots.
8. Service Areas page and footer coverage line with the six named areas.
9. AA-compliant palette derived from the brand cyan (darkened for text use), 16 px+ body, 44 px tap targets, visible labels and focus states.
10. Content in `src/content/` so copy can be edited without touching components; 301 map from old URLs.

## 10. Information needed from client

- Street address (or service-area-only business confirmation) and city for schema/GBP.
- Business hours and whether "ASAP"/same-day availability can be promised.
- Email address for the quote form notifications and footer.
- Which phone number(s) to publish: website says (435) 760-0806; truck wrap says 208-317-7831.
- Utah contractor license number and insurance statement (so "Licensed & insured" can be shown).
- Year founded / years in business; owner name for the About page.
- Google Business Profile URL and current rating/review count (to link and to show an aggregate).
- Confirm all ten services are still offered, especially Driveway Cleaning and Concrete Grinding.
- Confirm service-area list and any cities to call out individually (e.g., Logan, Smithfield, Preston, Garden City, Tremonton).
- Any photos of: curb/approach cuts, grinding, driveway cleaning/sealing results, the crew, finished egress windows.
- Pricing guidance or minimums, if any should be stated.
- Privacy policy owner/contact for the legal page.

---

# Phase 2 — Reference analysis: concut.com

Concut (Concrete Cutting & Breaking Co.) is a 50-year, multi-state industrial cutting firm. Only *patterns* are borrowed; no copy, images, colors, or layout are reused.

| # | Pattern on Concut | How it is adapted for ASAP (Utah, owner-operated, residential + commercial) |
|---|---|---|
| 1 | Hero with one clear promise + paired CTAs ("See Our Work" / "Call Now") | Hero headline states the trade and region in plain words; CTAs are **Call (435) 760-0806** and **Get a Free Quote**. Call is primary because this is a phone-first local business. |
| 2 | Service icon row directly under the hero | A services grid of the ten real services, each linking to its own page. Icons are simple line SVGs drawn for this project, not Concut's. |
| 3 | Stats/credentials bar ("Family-Owned Since 1974", "24/7") | A trust strip using only confirmable facts: Logan, UT based; six named service areas; "free quotes"; "same-day when possible" sourced from the B. Nielsen review. Years/licensing shown only once the client confirms them (TODO placeholders in content). |
| 4 | Named testimonials with first name + initial | The three real reviews, verbatim, with the attribution format the source already uses (e.g., "D. Grant"). Rendered as static HTML, not a widget. |
| 5 | 4-step "Working with Us Is Easy" process | A 4-step process in ASAP's own words: Tell us about the job → Get a quote → We cut on your schedule → Clean site, ready for the next trade (the last step is drawn from the D. Grant review). |
| 6 | Regional coverage spelled out in the footer | Footer lists the six service areas and the "willing to travel" line; a dedicated Service Areas page explains coverage without inventing cities. |
| 7 | Safety / "unforeseen challenges" emphasis | Reframed around **concrete scanning before cutting** (ASAP's own differentiator from their blog): avoid hitting conduit, PT cables, or in-floor heat. Presented as a "why scan first" block, not a corporate safety program. |
| 8 | Blog as "News & Insights" with CTA repetition | Keep the six existing articles as a Resources section, since they are good and already indexed, and add a repeated paired CTA after every service page and article. |

Not adapted: multi-location phone switcher, careers, video library, newsletter signup (none exist for ASAP).
