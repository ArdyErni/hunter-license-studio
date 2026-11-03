> **Historical baseline — archived 4 November 2026.** This document preserves the completed audit from the project conversation. Findings and measurements describe the original audit window, not subsequent implementation status. Repository file links have been made relative for portability. The statement about making no changes refers to the original audit task. Track implementation, approvals, new measurements, and decisions in [SEO_ROADMAP.md](SEO_ROADMAP.md); do not rewrite this baseline as fixes are completed. Any factual correction should be recorded in a dated addendum without replacing the original finding.

# Hunter License Studio — SEO Audit and Improvement Roadmap

**Audit window:** 3–4 November 2026, Asia/Manila  
**Production:** [hunter-license-studio.vercel.app](https://hunter-license-studio.vercel.app/)  
**Search data:** Provided Search Console workbook exported on 3 November 2026  
**Scope:** Audit only. No project files, dependencies, functionality, or deployment settings were changed.

## 1. Executive summary

**Hunter License Studio has the foundations for indexing, but its main search opportunity is poorly expressed in the page content.** The site already provides a relevant tool; search engines and first-time visitors receive relatively little explanation of what it does.

The strongest findings are:

1. **The initial HTML contains metadata but no application content.** The body contains an empty React root. With JavaScript disabled, the page has no visible text or headings.
2. **The visible H1 is “Create your license.”** It does not identify Hunter × Hunter or describe the application as a license generator.
3. **Startup performance needs attention.** Two logo images total approximately 1.18 MB, and a 6.24 MB audio file begins loading during startup. The application remains hidden until the logo loads and its intro finishes.
4. **Horizontal overflow affects mobile presentation.** It was reproducible at several widths. Tooltip positioning appears responsible for much of it; header controls also overflow at 320px.
5. **The workbook is too small to establish keyword rankings or demand.** It records 3 clicks and 38 impressions, but no disclosed target-keyword queries.
6. **Useful search and sharing assets are missing:** concise instructions, export explanations, crawlable example images, social preview images, and structured application information.

**No CRITICAL crawling or indexing blocker was confirmed.** The highest priorities are clearer content, reliable delivery of that content, faster startup, and mobile layout corrections.

---

## 2. Evidence and limitations

The audit included:

- The application source, rendering components, styles, assets, export architecture, HTML entry point, robots.txt, and sitemap.
- Direct production HTTP requests and Chrome rendering.
- Production metadata, headings, links, images, export menu, and JavaScript-disabled behavior.
- Layout checks from 320px to 1440px.
- Desktop and throttled mobile performance observations.
- All seven sheets in the supplied workbook.
- Public keyword searches, competing pages, and current Google documentation.

Important limits:

- Search results are a research sample, **not a localized Google rank-tracking report**.
- No verified monthly search-volume, keyword-difficulty, or backlink-authority dataset was available.
- The workbook does not provide access to live URL Inspection, indexing reports, manual actions, or Search Console settings.
- The PageSpeed Insights API returned **HTTP 429 quota errors**. This is a testing-service limitation, not an error on your website.
- Performance figures below are individual lab observations, not field Core Web Vitals or Lighthouse scores.

The production site was inspected independently. Its metadata matches the inspected source, and the deployed export menu contains all three current export options.

## 3. What the Search Console workbook actually shows

The workbook’s filter says **“Last 3 months,”** but its Chart sheet contains only eight dated rows: **25 October–1 November 2026**. It does not provide three months of daily observations.

### Recorded performance

| Metric | Recorded result |
|---|---:|
| Clicks | 3 |
| Impressions | 38 |
| CTR | 7.89% |
| Homepage average position, Pages sheet | 1.47 |
| Pages listed | Homepage only |
| Disclosed queries | 1 |
| Search type | Web, text-based |

### Devices

| Device | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| Desktop | 0 | 32 | 0% | 1.22 |
| Mobile | 3 | 6 | 50% | 2.83 |

### Countries

| Country | Clicks | Impressions |
|---|---:|---:|
| Philippines | 3 | 36 |
| United States | 0 | 1 |
| New Zealand | 0 | 1 |

### Interpretation

The site appeared in Google Search during the reporting period. However:

- **Position 1.47 does not establish strong rankings for the target keywords.** The underlying target queries are not disclosed.
- The only query shown is **“can you check again now?”**, with one impression and no clicks. It provides no useful evidence of license-generator demand.
- The discrepancy between 38 total impressions and one disclosed query impression is not automatically a reporting fault. Google omits some queries for privacy and reporting limitations. [Search Console query limitations](https://support.google.com/webmasters/answer/17011259?hl=en).
- Three mobile clicks are insufficient to conclude that mobile users convert better.
- The overall CTR is not a reliable basis for diagnosing poor snippets or testing title changes.

**Treat this workbook as an initial baseline, not proof of ranking success or failure.**

## 4. Technical SEO findings

| Area | Verified finding | Assessment |
|---|---|---|
| HTML structure | HTML language, UTF-8, viewport, and rendered main landmark are present. | Sound foundation. |
| Title | “Hunter License Studio \| Hunter × Hunter License Generator”; 57 characters. | Relevant, but the generator phrase could lead. |
| Meta description | Present; 171 characters; mentions designs and holographic effects. | Useful, but omits current PNG/GIF choices. |
| Canonical | Production HTML identifies the HTTPS homepage as canonical. | Correct for the current single-page site. |
| Robots metadata | No `noindex` meta tag or `X-Robots-Tag` prohibition observed. | No explicit `index,follow` tag is required. |
| robots.txt | Returns 200, permits crawling, and references the sitemap. | Pass. |
| Sitemap | Returns 200 with an XML content type and one homepage URL. | Appropriate for one indexable page. |
| Open Graph | Title, description, site name, type, and URL are present. | Missing preview image. |
| Twitter/X cards | Large-image card declaration, title, and description are present. | Missing image URL. |
| Headings | One rendered H1: “Create your license.” No rendered H2 or H3. | Valid hierarchy, weak description of the tool. |
| Image alternatives | Logo has an appropriate alt attribute. Four rendered SVG graphics with `role="img"` lack accessible names. | Accessibility refinement needed. |
| Image delivery | Header logo: 453,020 bytes. Intro logo: 730,577 bytes. | Oversized for their displayed dimensions. |
| Internal links | The brand links to `#`; other links lead off-site. | No explanatory sections or supporting content to discover. |
| JavaScript rendering | Initial body is an empty root; application content appears after JavaScript and the intro. | Rendering dependency, not a confirmed indexing block. |
| Mobile layout | Responsive layout exists, but horizontal overflow is reproducible. | Needs correction. |
| Performance | Intro visibility waits on image loading; audio also loads during startup. | Major improvement opportunity. |
| Accessibility | Form labels and keyboard card controls exist; selection states, faint text, and SVG naming need work. | Mixed; preserve existing strengths. |
| Structured data | No JSON-LD observed. | Opportunity, not an indexing requirement. |
| Duplicate URLs | `/index.html` returns the homepage with a canonical pointing to `/`. | Canonical already mitigates duplication; optional redirect cleanup. |
| Errors and redirects | A deliberately nonexistent path returns 404. HTTP redirects to HTTPS with 308. | Correct behavior; no sampled soft-404 problem. |

The GitHub, feedback form, and Buy Me a Coffee links returned 200. The YouTube check encountered a response-header parsing error in the testing client, so its destination remains **unverified**, rather than confirmed broken.

### JavaScript indexability

Google can render JavaScript, so React/Vite alone does not prevent indexing. However, the current page requires rendering before Google can obtain its substantive content. Other crawlers may not execute JavaScript. Google recommends considering server rendering or prerendering for this reason. [Google’s JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

A framework migration is not necessary merely to improve this small site.

## 5. Prioritized recommendations

Severity definitions:

- **CRITICAL:** Confirmed prevention of crawling, indexing, or access to essential content.
- **HIGH:** Substantial limitation on relevance, rendering reliability, performance, or usability.
- **MEDIUM:** Meaningful improvement to discoverability or presentation.
- **LOW:** Optional refinement.

### HIGH priority

| ID | What and why | Files/components | Recommended implementation | Verification |
|---|---|---|---|---|
| H1 | **Deliver useful content in initial HTML.** The current response explains nothing in its body until JavaScript runs. | `index.html`, `src/main.tsx`, future public-content component, build configuration. | Prerender the public heading, short explanation, and supporting content. Keep the editor interactive. Ensure useful content is not entirely inside the startup subtree marked hidden/inert. | Inspect the production response and JavaScript-disabled page. Confirm useful text exists, then compare Google’s rendered HTML through URL Inspection. |
| H2 | **Describe the application clearly.** The visible heading and introduction undersell its purpose. | [App.tsx](../src/App.tsx#L221), `index.html`. | Use a descriptive H1 and brief introduction. Mention custom names, designs, aura effects, and PNG/GIF exports naturally. | Check one clear H1, visible copy, production metadata, and later Search Console query relevance. |
| H3 | **Reduce startup image weight.** Approximately 1.18 MB of logos is excessive for the displayed sizes. | `public/images/`, [LoadingScreen.tsx](../src/components/LoadingScreen.tsx#L22), brand image in `App.tsx`. | Produce smaller assets from the existing artwork, preserving transparency and identity. Provide appropriate resolution variants. Consider early discovery of the optimized intro image. | Compare transferred bytes, visual quality, and time until the application becomes usable on a throttled connection. |
| H4 | **Stop optional media competing with startup.** Audio begins loading while the intro is still waiting on images. | [App.tsx](../src/App.tsx#L342), startup lifecycle. | Defer the audio request until critical images and the interface are ready. Preserve the existing player controls and intended music behavior. Loading only on explicit play would be a separate product decision. | Inspect the network waterfall: audio should not compete with essential startup assets. Test playback and the music toggle afterward. |
| H5 | **Correct horizontal overflow.** It can shrink mobile presentation or require horizontal scrolling. | [App.css](../src/App.css#L1181), `.topbar-actions`, `.topbar`, tooltip rules. | Constrain tooltip placement to the viewport and prevent hidden tooltips from extending scrollable bounds. Adapt header controls at narrow widths. Fix the cause rather than applying a blanket overflow mask. | Test 320, 375, 390, 768, and 1440px widths, keyboard focus, open tooltips, and the export menu. Confirm the page no longer expands horizontally. |

**Preserve the intro’s visual identity.** Optimizing its assets and request order should come before changing its timing. The measured startup delay is substantially longer than the intended 1.8-second animation because loading happens first.

### MEDIUM and LOW priority

| ID | Priority | What and why | Files/components | Implementation and verification |
|---|---|---|---|---|
| M1 | MEDIUM | Explain how to use the tool and choose an export format. This answers visitor questions and supplies relevant page content. | `App.tsx`, future content component. | Add concise instructions, an export comparison, aura explanations, and a small FAQ below the editor. Verify the content is useful, readable, and present in rendered and prerendered HTML. |
| M2 | MEDIUM | Add crawlable example images. Current cards are rendered from DOM/SVG; downloaded blob URLs are not permanent public examples. | Future gallery component, `public/images/examples/`. | Publish a small set of actual exported examples with stable URLs, dimensions, descriptive alt text, and captions. Verify image URLs return 200 and appear in HTML. |
| M3 | MEDIUM | Supply social preview images. Large-image card metadata currently lacks an image. | [index.html](../index.html#L27), future preview asset. | Add absolute `og:image` and `twitter:image` URLs, image descriptions, and suitable dimensions. Use an actual license preview, not only a logo. Verify with sharing previews and direct image requests. |
| M4 | MEDIUM | Describe the application through structured data. | `index.html` or prerendered public-content component. | Add truthful `WebApplication`/`SoftwareApplication` information: name, URL, purpose, browser requirements, category, and free price if retained. Validate schema and separately assess Google feature eligibility. |
| M5 | MEDIUM | Improve accessibility of customization controls and decorative artwork. | `App.tsx`, `HunterText.tsx`, `LicenseFaces.tsx`, `HunterLicense.tsx`, `App.css`. | Expose selected color/aura states, group related controls semantically, name meaningful SVGs or hide decorative ones, and improve faint text contrast. Verify with keyboard and screen-reader checks plus an accessibility audit. |
| M6 | MEDIUM | Build useful contextual links and accurate external descriptions. | Future content sections, `README.md`, existing project listings. | Link to real supporting sections or guides. Update project descriptions to reflect verified features. Measure referral visits and relevant search impressions. |
| L1 | LOW | Correct the favicon declaration and size. It currently declares SVG while pointing to a large PNG. | [index.html](../index.html#L6), favicon asset. | Use a small, correctly declared favicon derived from existing branding. Verify the response content type, browser appearance, and transfer size. |
| L2 | LOW | Consolidate `/index.html` with `/`. The canonical already provides a consolidation signal. | Future hosting redirect configuration. | Optionally redirect `/index.html` directly to `/`, preserving query parameters. Verify one permanent redirect and unchanged canonical behavior. |

No recommendation above has been implemented.

## 6. Performance findings

### Observed lab results

| Measurement | Desktop | Mobile |
|---|---:|---:|
| Viewport configured | 1440 × 900 | 390 × 844 |
| Network | Unthrottled | 1.6 Mbps download, configured 150 ms latency |
| CPU slowdown | None | 4× |
| First Contentful Paint | 2.39 s | 15.09 s |
| Largest Contentful Paint | 2.39 s | 15.09 s |
| Intro completion | 2.24 s | 15.04 s |
| Observed layout shift | 0 | 0 |
| Largest sampled interaction duration | 32 ms | 40 ms |

The measured LCP element was the H1.

These are single-run observations with a cold browser cache. The sampled interaction durations **are not field INP measurements**, and the layout-shift observations do not establish site-wide CLS performance.

For field assessment, the usual “good” thresholds are LCP ≤2.5 seconds, INP ≤200 milliseconds, and CLS ≤0.1 at the 75th percentile, assessed separately for desktop and mobile. [Core Web Vitals guidance](https://web.dev/articles/vitals).

### Main loading costs

| Resource | Observed size | Implication |
|---|---:|---|
| Intro logo | 730.6 KB | Animation starts after this image loads. |
| Header logo | 453.0 KB | Displayed in a 40 × 40px box. |
| Background audio | 6.24 MB file | Requested during startup despite being nonessential to creation. |
| Initial JavaScript | 104.2 KB Brotli; 339.6 KB decoded | Worth monitoring, but not the largest transfer problem. |
| Stylesheet | 8.3 KB Brotli; 33.2 KB decoded | Relatively modest. |

The favicon references the header-logo file as well. Some test conditions generated another request; normal browser caching may reuse it, so that should not automatically be counted as another full transfer for every visitor.

Positive findings:

- Export code is dynamically imported.
- GIF encoding runs in a worker.
- Sampled layout shift was zero.
- No runtime JavaScript error was observed during the production inspection.

Prioritize images, media scheduling, and the startup visibility dependency before spending time on small CSS reductions or changing frameworks.

## 7. Keyword opportunities

**Verified monthly search volumes and difficulty scores are unavailable for every term below.** Priorities reflect product fit and sampled search intent, not numerical ranking forecasts.

| Keyword | Intent and sampled competition | Priority and recommended treatment |
|---|---|---|
| **Hunter x Hunter License Generator** | Strong tool intent. Sampled results included launch discussions for this project. | **Primary.** Target the homepage title, H1, introduction, and examples. |
| **Hunter License Generator** | Tool intent, but “Hunter” can be ambiguous without franchise context. | **Primary variant.** Always clarify Hunter × Hunter nearby. |
| **Hunter x Hunter License** | Mixed informational, collectible, and shopping intent. Physical card sellers compete here. | **Secondary.** Explain the digital generator and distinguish it from physical merchandise. |
| **Hunter x Hunter Card Maker** | Creation intent, with ambiguity around trading-card creation and general card-design discussions. | **Secondary.** Use naturally in descriptive copy; keep the license purpose explicit. |
| **Hunter x Hunter ID Generator** | Plausible customization intent, but little clear exact-match tool evidence surfaced. | **Experimental.** Mention as a natural synonym, then validate through Search Console. |
| **Create Hunter x Hunter License** | Task-oriented and how-to intent. | **High relevance.** Use in concise instructions and examples. |
| **Hunter License Maker** | Similar task intent to “generator,” with franchise ambiguity. | **Useful variant.** Cover on the same homepage rather than creating a duplicate page. |
| **Hunter x Hunter Custom License** | Personalization intent, including physical printed products. | **Useful secondary term.** Emphasize immediate digital customization and downloads. |
| **Hunter x Hunter Generator** | Broad, mixed intent: original characters, abilities, Nen tests, and other tools. | **Lower priority.** Qualify it as a license generator. |
| **Hunter x Hunter** | Broad franchise, viewing, manga, and reference intent. | **Long-term contextual term.** Do not make this the homepage’s primary acquisition target. |

The broad franchise search surfaced official publishing and streaming destinations, including [VIZ](https://www.viz.com/hunter-x-hunter) and [Crunchyroll](https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter). A focused card-making application answers a different need.

### Long-tail candidates to validate

- Free Hunter x Hunter license generator
- Custom Hunter license with name
- Hunter license PNG download
- Animated Hunter license GIF
- Holographic Hunter license maker
- How to create a Hunter x Hunter license
- Hunter license with Hunter-script name

These are **content hypotheses**, not verified high-volume queries. Sparse exact-match results do not prove easy rankings or meaningful demand.

Do not target Nen personality tests, character generation, or ability generation as if the application provides those functions.

## 8. Competitor analysis

These pages compete for related attention or intent. Their observed features are **not proof of why they rank**; backlink profiles and ranking histories were not available.

| Competitor | Title and description approach | Content, imagery, and intent | Opportunity for Hunter License Studio |
|---|---|---|---|
| [ID Card Factory](https://theidcardfactory.co.uk/products/hunter-license-personalised-hxh-blue-v2) | Title identifies a personalized blue Hunter License and the franchise. Description emphasizes a customer’s name and printed PVC. | Clear product information, descriptive image alt text, and a purchase/personalization flow. | Clearly offer browser-based creation and digital downloads rather than physical fulfilment. |
| [TheMysteryShack](https://themysteryshack.com/products/hunter-license) | Franchise-and-product title; description uses license lore. | Product images, reviews, related products, and physical-card intent. | Demonstrate personalized results immediately and explain available download formats. |
| [Raket printable template](https://www.raket.ph/arthouse/products/printable-single-star-hunter-license-anime-hunter-x-hunter?src=share) | A descriptive printable-license listing title. Independent meta-description verification was unavailable because direct access was blocked. | Publicly retrieved content describes an editable Canva template delivered after purchase. Some image descriptions are generic filenames. | Explain that customization happens directly in the browser and show the actual workflow. |
| [OC Creator](https://occreator.org/hunter-x-hunter-oc-creator) | Explicit HxH character-maker title and description explaining its inputs. | Tool controls, many examples, explanatory sections, and FAQs. Adjacent character-creation intent. | Adopt its clarity of explanation while keeping your homepage substantially shorter and focused on licenses. |
| [lans.cloud Nen generator](https://lans.cloud/nen-type-generator) | Question-oriented title and description explaining the result. | Tool first, followed by instructions, screenshots, and explanations. Adjacent Nen-test intent. | Explain your aura finishes without implying the application determines a user’s Nen category. |

### Differentiation to communicate

Your current application can demonstrate:

- Personalized names and license numbers.
- Three distinct card designs.
- Front and back views.
- TEN, ZETSU, REN, and HATSU visual finishes.
- Plain PNG, holographic PNG, and animated GIF exports.
- Immediate browser-based creation.

Those capabilities should be understandable without opening every control.

### Backlink and referral opportunities

Public searches already surfaced launch discussions on [r/HunterXHunter](https://www.reddit.com/r/HunterXHunter/comments/1xg028a/i_couldnt_find_a_hunter_license_generator_so_i/) and a [Stackinfolio project listing](https://www.stackinfolio.dev/paul-ardy-erni/projects/hunter-license-studio?from=discover).

Recommended approach:

- Update existing descriptions, where you control them, to reflect current verified functionality.
- Share useful examples or tutorials with relevant fan-resource curators.
- Make examples easy to reference through stable image and page URLs.
- Track referral quality and successful exports rather than counting links alone.

No outreach or messages were sent.

## 9. Content and metadata strategy

### Improve the existing homepage first

Use the homepage as the principal landing page. A second page containing substantially the same editor and keyword variations would add maintenance and potential duplication without an established benefit.

A compact structure would be:

| Placement | Content |
|---|---|
| Above the editor | Descriptive H1 and one short explanatory paragraph. |
| Existing editor | Preserve the interactive creation experience. |
| Below the editor | Three-step instructions. |
| Export section | Brief comparison of the three formats. |
| Examples | Three small, optimized examples with captions. |
| FAQ | Four or five practical questions. |

An initial editorial budget of roughly **300–500 supporting words** is reasonable for usability, not a ranking requirement.

### Suggested wording

**Title**

> Hunter x Hunter License Generator | Hunter License Studio

**H1**

> Create your Hunter x Hunter License

**Introduction**

> Customize a fan-made Hunter x Hunter license with your name, card design, and Nen aura. Download a plain PNG, holographic PNG, or animated GIF.

**Meta description**

> Create a custom Hunter x Hunter license with your name, card design and Nen aura. Download a plain PNG, holographic PNG or animated GIF. Free in your browser.

Google may display different title or snippet text; these are proposed source values, not guaranteed search-result layouts.

### Useful supporting sections

**How to create your license**

1. Enter a name and license number.
2. Choose a design and aura.
3. Preview both sides and select an export format.

**Choose your export**

| Format | Explanation |
|---|---|
| PNG — Plain | Static artwork without aura or holographic effects. |
| PNG — Holographic | Static artwork with the selected visual finish. |
| GIF — Animated | A looping holographic animation based on the selected aura. |

**FAQ topics**

- Is this an official Hunter × Hunter product?
- How do I put my name on the license?
- Why is my name converted into katakana and Hunter script?
- What is the difference between the PNG exports?
- How do I download an animated GIF?

Keep answers grounded in current behavior. Avoid promising physical printing specifications, transparent exports, or other unsupported features.

### Image SEO

Use real, publicly accessible examples rather than expecting generated downloads to become discoverable images. Give each example a descriptive filename, concise alt text, nearby explanation, and intrinsic dimensions. [Google’s image SEO guidance](https://developers.google.com/search/docs/appearance/google-images).

### Structured data

Basic application information can describe the tool accurately. However, Google’s software-app rich-result requirements include genuine rating or review information. **Do not fabricate reviews to satisfy a validator or promise star snippets.** [Software application requirements](https://developers.google.com/search/docs/appearance/structured-data/software-app).

FAQs should be written for visitors. Google discontinued FAQ rich results beginning **7 May 2026**, so FAQ schema is not an expanded-result opportunity for this audit. [Google’s documentation changelog](https://developers.google.com/search/updates).

## 10. Accessibility and mobile usability

Several existing features should be retained:

- Name and license-number inputs have associated labels.
- Icon links have accessible names.
- The interactive card supports keyboard actions.
- Reduced-motion handling exists.
- The export interface provides processing and error states.

Recommended refinements:

- Expose which card color and aura are selected, rather than relying solely on CSS classes.
- Give related option sets clear group semantics.
- Mark decorative SVG fine print as decorative, or provide an appropriate accessible description.
- Review whether the visually hidden back face remains exposed to assistive technology.
- Improve faint text contrast.

The faint hint color measured approximately **3.77:1** against the studio background, and footer text approximately **3.94:1**. Both are below the usual 4.5:1 threshold for normal-sized text. Some supporting text is only 8–10px.

The 38px icon controls are also worth reviewing for comfortable mobile use, although that dimension alone does not establish a WCAG failure.

These are usability improvements, not claims of direct ranking penalties.

## 11. Google Search Console readiness

The verification meta tag exists, but its presence does not independently prove the current account configuration.

| Check | Action | Success condition |
|---|---|---|
| Current indexing | Inspect the exact HTTPS homepage. | Current indexing status and crawl date are understood. |
| Google rendering | Run a live inspection and review rendered HTML, screenshot, and resource failures. | Meaningful heading and explanatory content are available to Google. |
| Canonical selection | Compare declared and Google-selected canonicals. | Homepage is consolidated to `/`. |
| Sitemap | Submit or confirm `/sitemap.xml`. | Successful processing; one intended URL currently discovered. |
| Page indexing | Review exclusions and errors. | No unintended `noindex`, blocked assets, or canonical exclusions. |
| Search performance | Preserve the workbook’s Web/text-based baseline, then monitor comparable periods. | Relevant generator/maker queries begin appearing where disclosed. |
| Query groups | Track brand, license-generator, customization, and export-related queries separately. | Growth can be attributed to relevant intent. |
| Device/country | Review mobile and desktop, initially including Philippines traffic. | No persistent device-specific regression. |
| Image search | Review separately after public examples are introduced. | Example images are accessible and relevant impressions can be monitored. |
| Core Web Vitals | Review available field reports or independently collect measurements. | Performance is assessed with sufficient real-user data. |
| Security/manual actions | Check account reports. | Any actual warnings are addressed; none were verified in this audit. |

Use 28-day comparisons once sufficient history exists. Do not interpret absent disclosed queries as proof of zero demand or assume a sitemap submission guarantees indexing.

Google retired the Search Console Mobile Usability report and Mobile-Friendly Test in December 2023. Use browser/device checks and current performance/accessibility tools instead. [Google’s retirement announcement](https://developers.google.com/search/blog/2023/04/page-experience-in-search).

## 12. Implementation roadmap

The periods below are suggested sequencing, not delivery estimates.

| Stage | Scope | Completion criteria |
|---|---|---|
| **First release** | H1–H5: descriptive content, initial-HTML delivery, optimized logos, deferred media competition, and overflow correction. | Useful content exists in the response; mobile layout is constrained; startup improves in comparable tests; editor/export regression checks pass. |
| **Second release** | M1–M5: concise instructions, examples, sharing metadata, truthful structured data, and accessibility refinements. | Content and image URLs are crawlable; previews work; controls remain usable; schema is accurately validated. |
| **Weeks 3–4** | M6: update existing project descriptions and consider one genuinely useful supporting guide. | Links lead to useful, distinct content; referral activity can be assessed. |
| **After sufficient data accumulates** | Compare relevant query impressions, clicks, landing-page behavior, and export success. | Next content investment is based on observed demand rather than keyword assumptions. |
| **Optional cleanup** | L1–L2: favicon and `/index.html` consolidation. | Correct asset declaration and predictable canonical URL behavior. |

Success should mean **more relevant visitors who successfully create and export a license**, supported by reliable indexing and usable performance. It should not be defined by the current aggregate position figure or a promise to rank for the broad franchise name.
