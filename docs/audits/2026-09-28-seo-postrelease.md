# Khabarovsk SEO release verification — 2026-09-28

## Target and criteria

Production origin: `https://annafinkphoto.ru/`. This record verifies the site after [PR #1](https://github.com/danka19/AnnaPh/pull/1) was squash-merged as `c54c063bdb3e40d3248c35e2f7cd9c4ba4627f3a` and ONREZA production deployment `01a0e65a-5ea9-75a7-8b26-efda7bfcf830` became ready. The release criteria are correct public URLs, crawlable static service content, accessible assets, an accurate sitemap, and recorded webmaster status. This is an observation record, not a claim of improved rankings.

Severity: P1 = a substantial remaining discovery/identity issue; P2 = a supporting follow-up or measurement gap. Confidence describes the evidence for the observation, not a prediction of search results.

## Reproducible production checks

On 2026-09-28, `temporary screenshots/seo-production-check.py` fetched the five public pages using the actual domain. It parsed title, description, canonical, `og:url`, H1, JSON-LD, robots directives, and same-origin links, images and stylesheets; it then checked 40 distinct same-origin URLs. The UTF-8 result is locally stored in the gitignored `temporary screenshots/seo-production-check.json`. Final run: **five pages, 40 URLs, zero failed assertions**. The first run had six false alarms caused by case-sensitive HTTP header lookup and direct-text-only H1 extraction in the checker; those checks were corrected before the final run. This script checks schema syntax and URL identity, not eligibility for a Google rich result or factual accuracy beyond the approved content sheet.

| Check | Observed result |
|---|---|
| `/`, `/art-fotosessiya/`, `/zhenskaya-fotosessiya/`, `/semeynaya-fotosessiya/`, `/fotosessiya-beremennosti/` | 200, unique titles/descriptions, one H1 each, matching self-canonical and `og:url`, parseable JSON-LD, no `noindex` or `annaph.ru` in HTML; `x-onreza-commit-sha` matches `c54c063...` |
| Same-origin links, images and stylesheets reachable from these pages | 40 distinct URLs returned 200 to HEAD |
| `http://annafinkphoto.ru/` and `https://www.annafinkphoto.ru/` | Each returns 301 with `Location: https://annafinkphoto.ru/` |
| `/index.html` | 200 with root canonical in the published document; it is still an alternate retrievable URL |
| `/seo-missing-20260928` | 404 |
| `/robots.txt` | 200; wildcard Allow and correct-domain sitemap declaration |
| `/sitemap.xml` | 200; five correct-domain page URLs, with no invented `lastmod` values |
| Google and Yandex HTML verification files | Both 200 with their expected token content |

The release introduced no edit to `index.html` relative to its PR base. The owner has prohibited further homepage edits. The four service pages are interlinked and listed in the sitemap, but there are no new homepage links to them under that constraint. Local responsive/no-JavaScript checks for the release are documented by `temporary screenshots/seo-pages-verify.py` and `seo-site-check.py`; this record's production checker verifies HTTP and HTML, not production mobile layout or real crawler access.

## Webmaster evidence

Google Search Console ownership of the URL-prefix property `https://annafinkphoto.ru/` was confirmed by the published HTML file on 2026-09-28. `sitemap.xml` was submitted and the interface reported **Success, five discovered pages** on the same date. URL Inspection reported:

- Root URL: indexed; last Googlebot Smartphone crawl 2026-09-20 07:52:47, before the domain correction. That historical crawl saw user-declared canonical `https://annaph.ru/`; Google selected the inspected URL as canonical. A single recrawl request was accepted after the fix. The old historical canonical does **not** describe the current production HTML.
- `/art-fotosessiya/`: discovered via `https://annafinkphoto.ru/sitemap.xml`, not yet crawled or indexed at inspection time. A single indexing request was accepted. This is a fresh-page baseline, not evidence of a crawl error.
- Property-wide performance/index coverage reports were still processing, so no impression, click, regional, or indexed-page trend can yet be concluded.

Yandex Webmaster has the site resource and its correct HTML verification file is publicly reachable, but ownership is not yet confirmed. The UI states that clicking its confirmation button accepts the Yandex Webmaster User Agreement; that action awaits the owner's action-time confirmation. No Yandex sitemap submission, regional association, or index coverage result is claimed.

## Remaining findings

| ID | Severity / confidence | Observation and impact | Next action |
|---|---|---|---|
| POST-01 | P1 / high | Google has not yet recrawled the corrected homepage or the newly discovered service pages. Historical root canonical data points to `annaph.ru`, while current HTML points to the right domain. Search presentation may lag the release. | Recheck URL Inspection after crawling; compare declared and Google-selected canonical and page coverage. Do not repeat indexing requests just to accelerate the queue. |
| POST-02 | P1 / high | New pages lack homepage links due to the explicit owner prohibition. Sitemap and service crosslinks exist, but discovery paths from the site's most established page remain limited. | Keep the homepage unchanged. Seek appropriate links from verified owned profiles, actual partner mentions and eligible directory listings when those sources exist; do not fabricate them. |
| POST-03 | P1 / high | Yandex ownership and sitemap processing remain unverified because the legal-agreement action is pending. Khabarovsk region and Yandex index status are unknown. | After owner confirmation, complete verification, submit the sitemap and inspect regional/index data. |
| POST-04 | P2 / high for measurement gap | Public PageSpeed Insights API returned HTTP 429 for one attempted mobile production measurement. No production CrUX/field Core Web Vitals result was obtained; the earlier local Lighthouse report does not prove field performance. | Re-measure when the service is available; inspect mobile lab and field values separately, then optimize only a confirmed bottleneck. |
| POST-05 | P2 / high | The owner reports no source reviews or Yandex Maps/2GIS cards yet. A limited public name search did not establish an existing Google Maps business profile; it is not proof of absence. | Follow the [confirmed facts and owner follow-ups](../SEO_CONTENT_FACTS_2026-09-28.md); check listing eligibility and avoid duplicate or invented entities. |

The [prioritized implementation plan](../superpowers/plans/2026-09-28-seo-geo-khabarovsk.md) remains the ordering reference. Neither successful sitemap processing nor an indexing request proves search ranking, AI citation, or qualified enquiries.
