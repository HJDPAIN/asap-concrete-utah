# REPORT.md: ASAP Concrete Cutting rebuild

- **Preview:** https://asap-concrete-utah-preview.netlify.app (Netlify subdomain only, no custom domain)
- **Repo:** https://github.com/HJDPAIN/asap-concrete-utah (continuous deploy from `main`)
- **Netlify admin:** https://app.netlify.com/projects/asap-concrete-utah-preview
- **Live site:** asapconcreteutah.com was only read (crawled), never changed. Its DNS was not touched, and it still resolves to GoDaddy (76.223.105.230 / 13.248.243.5).

## Important correction
The brief described a flatwork contractor. The live site is **ASAP Concrete Cutting**, a sawing, coring, scanning and demolition company. The rebuild uses only its ten real services.

## Before / after Lighthouse (mobile)

| Page | Perf | A11y | Best Practices | SEO | LCP |
|---|---|---|---|---|---|
| Home | 76 → 99 | 87 → 100 | 96 → 100 | 100 → 100 | 6.1 s → 1.9 s |
| Service page | 98 → 100 | 93 → 100 | 96 → 100 | 100 → 100 | 2.4 s → 1.5 s |
| Contact | 76 → 100 | 90 → 100 | 96 → 100 | 92 → 100 | 5.9 s → 1.0 s |

Desktop scores are 100/100/100/100 on all three pages. Full table is in QA.md.

## Top 10 improvements (tied to AUDIT.md §7)
1. **Clear hero (P0 #1).** The headline says what they do and where, with Call and Free Quote buttons above the fold. Before, the first screen was a truck photo and "Logan, UT".
2. **Sticky mobile call bar (P0 #2).** Call and Quote stay on screen at every scroll position on phones.
3. **Short, labeled quote form (P0 #3).** Visible labels, inline errors, a service picker, an optional photo and a thank-you page. The newsletter checkbox and reCAPTCHA are gone.
4. **Mobile load time cut 3x (P0 #4).** Home LCP went from 6.1 s to 1.9 s with responsive AVIF/WebP and no third-party scripts.
5. **Reviews that render everywhere (P0 #5).** The three real reviews are static HTML. The old widget was blank on phones.
6. **Ten service pages (P1 #6).** Each has a plain-English explanation, "what we need to quote", FAQs, photos and Service schema. Before, the services were one bare list.
7. **Trust strip (P1 #7).** It sits above the fold and uses only claims the source supports.
8. **Local SEO (P1 #8–9, §6).** LocalBusiness/GeneralContractor, Service, FAQPage, BreadcrumbList and Article schema. Every page has a unique title and description, plus canonicals and a clean sitemap. A Service Areas page and a footer coverage block were added.
9. **WCAG AA (P2 #11–12, #14).** Darker brand cyan for text, 44 px tap targets, correct heading order, a skip link, and visible focus states. axe reports 0 violations.
10. **Editable content and safe migration.** All copy lives in `src/content/`. The six articles moved over verbatim with 301s from every old URL, including the dead `/ols/products`.

## Information needed from client
- Street address, or confirmation that the business is service-area only.
- Business hours.
- Email address for the footer and **form notifications**.
- **Which phone to publish.** The site says (435) 760-0806 but the truck wrap says 208-317-7831.
- Utah contractor license number and insurance status.
- Year founded and owner name for the About page.
- Google Business Profile URL, plus rating and review count.
- Confirm all ten services are current, especially Driveway Cleaning and Concrete Grinding.
- Confirm the service areas, and any specific cities they want to target.
- How travel beyond the listed areas is priced.
- OK to use photos from their Instagram and Facebook on the site, and higher-resolution originals of those photos.
- A reviewed privacy policy.

## Photo shoot list
1. Curb or approach cut, before and after.
2. Green cutting control joints in a fresh slab.
3. Grinding a sidewalk trip hazard.
4. Driveway power washing, before and after.
5. A sealed driveway with water beading.
6. Owner and crew portrait with the truck, for About and hero alternatives.
7. Wide shots of a finished egress window and a completed core-drill pattern.
8. The scanner in use, marking a slab. The current scanner photo looks like a product shot.

## Next steps to go live
1. **Content sign-off.** Walk the client through the preview and fill every `[TODO: confirm with client]` in `src/content/business.json` and the About page.
2. **Photos.** Shoot the list above and drop the files in `src/assets/images/`. Placeholders swap automatically by key.
3. **Google Business Profile alignment.** Make the name, phone and service areas match exactly, add the GBP link to `business.json`, and add the street address to schema if they publish one.
4. **Forms.** Add an email notification in Netlify and delete the QA test submissions in both Verified and Spam.
5. **Analytics.** Uncomment the GA4 slot (live ID G-HNYVBE79LV), update the CSP, and set up call-click and form-submit events.
6. **Domain cutover.** Update `site` in `astro.config.mjs` and `siteUrl` in `business.json` to the real domain and rebuild. Add the domain in Netlify, then switch DNS at GoDaddy (A record to Netlify's load balancer, `www` CNAME to the Netlify subdomain). The 301 map in `public/_redirects` covers every old URL. Keep the GoDaddy site until DNS has propagated.
7. **After launch.** Submit the new sitemap in Search Console (verification tag `VCRPuxNGzR7l9XQ8nqbTB-50iQVvpI2oxCWeFkyVpqg` already exists for the old site). Run the Rich Results Test, and watch the 301s for 404s for two weeks.
8. **Later.** Add per-city landing pages once the client confirms cities, and keep publishing articles. The existing ones are good and already ranked.
