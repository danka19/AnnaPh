# Khabarovsk SEO and generative search optimization plan

Date: 2026-09-28. Target origin confirmed by owner: `https://annafinkphoto.ru`. Evidence: [dated audit](../../audits/2026-09-28-seo-geo.md).

## Goal and constraints

Increase relevant discovery and qualified photography enquiries from Khabarovsk through Yandex/Google, local directories and source-linked AI answers. GEO here means generative engine optimization, alongside local SEO. No ranking or citation guarantees.

Preserve Russian public copy and English project documentation, the visual identity and real photography. Keep static hosting, no backend, forms, accounts, email fields or personal-data storage. Existing brief forbids analytics: do not install Metrika, GA or tracking pixels. Contacts stay external Telegram/VK/MAX/channel links. Do not add a phone number or public street address without supplied and approved information. Preserve archived originals. The owner has authorized implementation of the plan, including the additional service pages.

No redesign, framework migration, paid link campaign, mass AI text generation, fabricated testimonials, fake local branches or address, automatic directory publication, or paid tools are part of this plan. `llms.txt` is not a prerequisite and is deferred. Training bot permission is a separate owner policy, not an SEO requirement.

Sequence: Task 1 immediately; Task 2 next; Tasks 3–5 after confirming factual inputs and page expansion; Task 6 before release; Task 7 baseline now and ongoing. Estimates are working effort, not search-engine response time: technical foundation 1–3 days; content/service rollout 1–2 weeks; local reputation/content growth 4–8 weeks with owner participation.

### Task 1: Correct domain identity and establish an indexing baseline

- [x] Replace annaph.ru in `index.html` canonical, og:url, og:image and JSON-LD url/image, `robots.txt` Sitemap, and `sitemap.xml` loc with the confirmed origin. Check all absolute production URLs, not only canonical.
- [x] Check production image URLs, HTTPS, www and index.html normalization. HTTPS/www redirect to the apex; `/index.html` remains 200 with a root canonical, and unknown paths return 404. Do not add an ONREZA rule without inspecting the active rule set.
- [x] Replace stale lastmod with the true substantive modification date or omit it. No lastmod is emitted until it can be maintained accurately.
- [ ] Verify ownership and inspect homepage in Google Search Console and Yandex Webmaster. Record indexed status, declared/selected canonical, exclusions, sitemap processing and Khabarovsk regional association. Submit the corrected sitemap and request recrawl once.
- [ ] Check robots, meta robots, X-Robots-Tag and CDN/WAF for public pages/assets and major crawlers, including OAI-SearchBot. An impersonated user-agent request alone does not establish real crawler access; corroborate with logs when available.

Acceptance: HTTPS homepage 200; all identity URLs point to annafinkphoto.ru; sitemap URLs resolve; old domain absent from production SEO fields; redirects/404 verified; dated webmaster baseline or explicit access limitation. Recrawl request is not proof of reindexing. Addresses SEO-01/07.

### Task 2: Make essential content independent of JavaScript

- [x] In `index.html`, render services/prices/inclusions, contact anchors and a useful curated portfolio directly in HTML. JS still enhances tabs, lightbox and animation; no framework migration.
- [x] Ensure portfolio/service links are real href links and the page remains readable when JavaScript fails. The live release was checked with JS on and off.
- [ ] Align introduction and structured data with actual displayed packages. Preserve current amounts pending owner validation: women's 6000/7500 RUB; family 7000; men's and pregnancy 6000; art/reportage 5000; school/kindergarten albums from 1300; individual albums by agreement. Confirm units for ambiguous prices rather than assume “per hour”.

Acceptance: browser with JS disabled still shows all service offers, useful gallery content and four contact destinations; enabled version keeps interactions; one H1 and logical headings; no duplicate cards. Addresses SEO-02/04/06.

### Task 3: Publish a small, distinct service architecture

- [x] Accept the proposed extension from the one-page brief before implementation. The owner authorized this plan's execution.
- [ ] Prioritize queries using owner booking priorities and Khabarovsk-filtered Wordstat data; volumes are currently unknown. Start with 3–4 pages with enough unique material, then expand only when justified.

| Proposed URL | Primary Russian search intent | Required unique content |
|---|---|---|
| `/` | фотограф Хабаровск; Анна Финк фотограф | identity, approach, service overview, selected work, contact |
| `/zhenskaya-fotosessiya/` | женская / портретная фотосессия Хабаровск | two real packages, preparation, appropriate series |
| `/semeynaya-fotosessiya/` | семейный фотограф / фотосессия с детьми Хабаровск | participant conditions, children, family examples |
| `/fotosessiya-beremennosti/` | фотосессия беременности Хабаровск | owner-approved preparation, comfort, examples; no medical claims |
| `/muzhskoy-portret/` | мужская / деловая фотосессия Хабаровск | portrait purposes and real examples |
| `/art-fotosessiya/` | образная / творческая фотосессия Хабаровск | real concept series, preparation, pricing units |
| `/fotoalbomy/` | выпускные альбомы Хабаровск | formats, minimum order, price basis and production timing |

- [ ] Every page: unique title/description/H1, concise answer about offer and city, actual package, what is extra, delivery timing, 6–12 selected relevant images, preparation/FAQ and booking link. Use truthful facts, not a word-count quota.
- [ ] Implement as static route directories with `index.html` or the hosting equivalent; self-canonical and sitemap entry for each. Link from the homepage and relevant services; add breadcrumbs. Avoid targeting the same query on several interchangeable pages.
- [ ] Do not invent Love Story prices because a gallery exists. Add a separate page only after service confirmation. Do not create pages for nearby towns unless actually served with distinct useful information.

Acceptance: pages independently answer their intent, work without JS, return 200, have unique metadata and appropriate canonicals, appear in sitemap and internal links; no template-only duplicates. Addresses SEO-03/04/GEO-03.

### Task 4: Establish a consistent local identity and trustworthy evidence

- [ ] Obtain preferred public name (Russian and Latin), actual service area, whether clients visit a permanent location, verified profile URLs, delivery/booking/extra-cost terms and testimonial permissions. Keep private residential addresses private.
- [ ] Add a readable author/contact section: who, what photography, Khabarovsk, where sessions take place and how to book. Confirm the existing 10+ years claim and 35AWARDS distinctions before expanding them.
- [ ] Inventory existing Yandex Business/Maps and 2GIS listings and eligible Google Business Profile presence. Claim/update the correct existing entity when available and eligible; check current platform rules for service-area photographers before creating anything. Avoid duplicate listings. External profile mutations require a separate authorized execution task.
- [ ] Align name, website, category, service descriptions and public contacts across owned VK/Telegram and eligible listings. Use truthful service-area settings, not a rented studio presented as owned premises.
- [ ] Replace or support anonymous testimonials with permitted genuine reviews and source links. Ask real clients for honest feedback without fabricated ratings. Add verified competition profile/result links where available.
- [ ] Pursue a few relevant mentions from studios, collaborators and local publications through real credited work; do not buy link packages.

Acceptance: documented profile inventory with exact URLs and ownership status; matching identity facts; sourced review/award claims; no unsupported address, stars or “best in city” assertion. Addresses GEO-01/02.

### Task 5: Make facts easy to retrieve and cite

- [ ] Add short visible answers to: cost and inclusions; studio rental; preparation/clothing; help with posing; family participant limits; delivery/retouching; rescheduling; choosing a studio or outdoor location. Obtain answers from Anna before publication.
- [ ] Publish 2–3 original case studies with permission: actual Khabarovsk location/studio, purpose, preparation, result, credited photographer, relevant service link. Do not infer a location from an image. Add a practical local location guide only from real experience; verify access/fees and seasonal advice before publication.
- [ ] Update JSON-LD using current validated vocabulary: Person for author, appropriate LocalBusiness only when facts support it, Service/Offer for real public packages, stable @id links and BreadcrumbList on new pages. Replace deprecated/unverified type declarations. Use RUB and numerical prices with correct units where established. Structured data must match visible text.
- [ ] FAQ exists to answer visitors; do not promise FAQ rich results. Do not add self-serving AggregateRating or synthetic reviews. No hidden AI-targeted blocks, keyword repetition or special crawler-only copy.

Acceptance: every factual answer has owner/source support; entity graph validates and matches rendered content; no old domain; at least one useful answer per intended query; source links and dates where relevant. AI inclusion remains an observed outcome, not a release gate.

### Task 6: Verify media, page experience and technical release

- [ ] Add precise alt descriptions to meaningful curated images, empty alt to decoration; preserve author attribution. Prefer context over repeating city keywords in every alt.
- [ ] Measure production mobile Lighthouse/PageSpeed and field data if available. Inspect initial image/video requests before optimizing; add srcset/sizes and dimensions where beneficial. Avoid eagerly loading every portfolio photograph or autoplay media outside the useful viewport.
- [ ] Target field p75 LCP ≤2.5s, INP ≤200ms and CLS ≤0.1 when sufficient data exists; use lab checks diagnostically, not as fabricated field evidence. Confirm current metric definitions during implementation.
- [ ] Run crawler/link/metadata/schema checks across all published pages; test missing paths, query variants and index.html normalization; inspect representative pages in webmaster tools.
- [ ] Follow project visual gates for any eventual UI change: each changed section, desktop/mobile/large width, interactive states and two screenshot passes; test contact destinations and keyboard/mobile navigation. Keep originals in source_assets and excluded from deployment.

Acceptance: no broken internal links/images or blocking crawl errors; factual structured data; documented real performance results and remaining limits; reviewed screenshots; intentional commit/push and post-deploy verification. This audit made no UI changes and did not run these future release gates.

### Task 7: Track outcomes for 8–12 weeks without adding analytics

- [ ] Record baseline now and compare rolling 28-day periods: indexed intended pages, non-brand impressions/clicks by service query, branded impressions, CTR and region where reports support it. Use Search Console and Yandex Webmaster; no on-site analytics installation.
- [ ] Use the owner's existing enquiry process to record aggregate qualified enquiries/bookings and voluntarily reported discovery source; do not create a personal-data store in the site/repository. Set numerical growth targets only after baseline and capacity are known.
- [ ] Monthly, run a fixed small set of prompts in available search-enabled ChatGPT, Yandex/Alice and Google AI search. Record date, engine/mode, city context, exact prompt, mention, cited URL and factual accuracy. Repeat samples because answers vary; absence of an AI answer is not automatically a site defect.

Suggested Russian prompt set:

1. «Посоветуй фотографа для женской фотосессии в Хабаровске, который помогает позировать».
2. «Семейная фотосессия в Хабаровске: фотограф, стоимость и что входит».
3. «Где заказать фотосессию беременности в Хабаровске?»
4. «Кто снимает художественные портреты в Хабаровске?»
5. «Анна Финк фотограф Хабаровск: услуги, цены и как записаться».

Acceptance: dated repeatable baseline and follow-up table, with citation accuracy and qualified demand separated from visibility. No guaranteed top positions, fixed citation share or attributed revenue without evidence.

## Inputs that still affect execution

Domain, display name, service priorities, photo-delivery window, paid extras and free rescheduling with at least 24 hours' notice are confirmed. The branch has four static service pages and an updated sitemap; production publication remains a release step. Webmaster/hosting access, Wordstat data, late rescheduling and travel terms, real case-study permissions, and directory/review sources remain outstanding. The owner confirms that Yandex Maps/2GIS cards and source reviews do not exist yet and will provide links after creating them. These are tracked in `docs/SEO_CONTENT_FACTS_2026-09-28.md`; do not invent them to satisfy a checklist.
