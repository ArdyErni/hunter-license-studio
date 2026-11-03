# Hunter License Studio — SEO Strategy, Milestones, and Growth Roadmap

**Created:** 4 November 2026  
**Last updated:** 4 November 2026  
**Document state:** ACTIVE — the user accepted read-only M0 and authorized the specified M1 implementation on 4 November 2026. Deployment, analytics, M2, and subsequent milestones are not authorized.  
**Production:** https://hunter-license-studio.vercel.app/  
**Repository:** https://github.com/ArdyErni/hunter-license-studio  
**Technical baseline:** [Original SEO audit](SEO_AUDIT.md), conducted 3–4 November 2026.  
**Source checkout when this plan was prepared:** `aad4b34fdfe00ab5df15fe60d0a9e2a3f7d3d211`.

This is the execution document. Preserve the original audit as the diagnostic record. Record new measurements, approved decisions, release evidence, and progress here without replacing the audit's historical findings.

## 1. Project overview

Hunter License Studio is an unofficial, fan-made Hunter × Hunter license generator built with React, TypeScript, Vite, and CSS and hosted on Vercel. Users can customize a name and license number, select green/blue/red designs, inspect both card faces, choose TEN/ZETSU/REN/HATSU aura finishes, and export PNG Plain, PNG Holographic, or animated GIF files.

The strategy is to make this existing experience easier to discover, understand, and use. Preserve the editor, card artwork, typography, visual identity, intro, music controls, customization behavior, and all three export formats. Any deliberate product-behavior change needs its own explicit scope decision.

## 2. Overall progress and status rules

**Accepted milestone progress: 1 of 6 (M0, 17% rounded).** M0 was accepted in its explicitly read-only scope; analytics and account-dependent evidence remain deferred. M1 implementation and local verification are complete; its release/production verification gate is pending. No deployment or later milestone is authorized.

| Milestone | Status | Implementation approval | Review/acceptance | Evidence |
|---|---|---|---|---|
| [0 — Baseline and Measurement](#milestone-0-baseline-and-measurement) | COMPLETED | Read-only scope authorized | Accepted by user, 4 November 2026 | Six production lab runs and nine exports; analytics explicitly deferred; current authenticated GSC evidence unavailable |
| [1 — Technical SEO Foundation](#milestone-1-technical-seo-foundation) | IN PROGRESS | Specified M1 scope authorized, 4 November 2026 | Local implementation/verification complete; review, deployment authorization, and production verification pending | [M1 evidence](#12-m1-implementation-and-verification-record) |
| [2 — Content and On-Page SEO](#milestone-2-content-and-on-page-seo) | NOT STARTED | Not recorded | Pending | None |
| [3 — Visual SEO and Discoverability](#milestone-3-visual-seo-and-discoverability) | NOT STARTED | Not recorded | Pending | None |
| [4 — Authority and Organic Growth](#milestone-4-authority-and-organic-growth) | NOT STARTED | Not recorded | Pending | None |
| [5 — Monitoring and Continuous Improvement](#milestone-5-monitoring-and-continuous-improvement) | NOT STARTED | Not recorded | Pending | None |

Allowed milestone statuses:

- **NOT STARTED:** implementation has not begun; planning alone does not change this status.
- **IN PROGRESS:** the user has approved that milestone's scope and work has begun.
- **COMPLETED:** deliverables, tests, and applicable production verification are evidenced. Record user acceptance separately; completion alone does not authorize the next milestone.
- **BLOCKED:** identify a concrete dependency, owner, next action, and review date. Missing optional metrics must be labeled unavailable rather than silently replaced with zero.

Approval sequence: approve milestone scope → implement only that milestone → validate → obtain any required deployment approval → verify production → submit evidence for review → record acceptance and explicit approval to start the next milestone. Reviewing this roadmap is not blanket approval to implement all milestones.

### Documentation preparation

- [x] Archive the completed audit in `docs/SEO_AUDIT.md`.
- [x] Prepare the proposed roadmap, milestone gates, and analytics specification.
- [x] Receive user review authorizing read-only M0 and the specified M1 scope.
- [x] Receive explicit authorization for Milestone 0's read-only assessment; analytics implementation remains deferred.

## 3. Vision, objectives, and target types

**Desired journey:** relevant organic visitor → opens/starts using the generator → customizes a license → generates a PNG/GIF and requests its download.

The homepage already contains the generator. There is no separate “open generator” route today; measure intentional use rather than treating a page load as a generator start.

| Area | Objective | Technical completion target | Search/engagement outcome |
|---|---|---|---|
| Technical SEO | Make the tool reliably understandable and accessible. | Useful initial HTML; correct canonical/sitemap; constrained mobile layout; improved startup; accurate metadata. | Relevant visits can reach and use the tool without avoidable technical friction. |
| Content SEO | Explain the tool and its outputs without overwhelming it. | Clear heading, concise introduction, instructions, export/aura explanations, and contextual links. | More disclosed queries align with license creation; more landing visits start the generator. |
| Search visibility | Establish relevance for license-generator intent. | Consistent homepage targeting; no duplicate keyword landing pages. | Evaluate relevant impressions, clicks, and CTR after a valid observation window. No promised ranks. |
| Acquisition and engagement | Connect discovery to successful creation. | Validated, minimal event collection and channel reporting. | Measure starts, customization, PNG/GIF outcomes, and referral/Pinterest contribution. |
| Visual discovery | Make representative outputs publicly discoverable. | Optimized examples, stable URLs, useful descriptions, and working sharing images. | Evaluate image-search, social, Pinterest, and referral engagement separately. |

Technical budgets and QA targets in this document are **proposed targets**, not measured current performance. Numerical growth targets remain unset until usable measurement exists.

## 4. Keyword and search-intent strategy

Use [audit keyword research](SEO_AUDIT.md#7-keyword-opportunities) and [competitor observations](SEO_AUDIT.md#8-competitor-analysis) as the initial research record. Those searches are samples, not a localized ranking report. Search volumes, difficulty scores, and forecasts have not been verified.

| Tier | Terms | Intent and competition | Planned destination/treatment |
|---|---|---|---|
| Primary | Hunter x Hunter License Generator; Hunter License Generator | Tool creation intent. Sampled results included this project's launch discussions; the shorter phrase needs franchise context. | Homepage title, H1, short introduction, instructions, and examples. |
| Primary, mixed intent | Hunter x Hunter License | Lore, collectibles, and digital creation compete; physical card retailers are relevant competitors. | Homepage and example descriptions explaining that this is an unofficial digital generator. |
| Secondary | Hunter x Hunter Card Maker; Create Hunter x Hunter License; Hunter License Maker | Creation/how-to intent, with some trading-card ambiguity. | Natural synonyms and instructions on the same homepage. |
| Secondary | Hunter x Hunter Custom License | Personalization intent, including printed merchandise. | Show custom results and explain immediate PNG/GIF downloads. |
| Secondary, experimental | Hunter x Hunter ID Generator | Plausible tool intent, with little clear exact-match evidence in the audit. | Test modest natural wording; validate demand before dedicated content. |
| Long-term | Hunter x Hunter Generator; Hunter x Hunter | Mixed character/Nen tools and broad franchise/publishing/streaming intent. | Contextual relevance only; do not replace the license focus or imply unsupported features. |

Candidate long tails: custom Hunter license with name, Hunter license PNG download, holographic Hunter license maker, animated Hunter license GIF, and Hunter-script name on a license. These are hypotheses, not proven demand.

Competitive positioning: demonstrate the working tool, three designs, front/back views, selected-aura finishes, and all three exports. Do not imitate competitors' copy or imply physical fulfilment, official affiliation, Nen personality testing, or character generation.

### Keyword/content decisions

- Start with one strong homepage; do not create near-identical pages for “maker,” “generator,” or each aura.
- Recheck representative searches before approving a new guide; record date, market/device context where available, intent, and URLs.
- Evaluate disclosed relevant-query groups rather than inferring target rankings from aggregate average position.
- Consider a new guide only when Search Console queries, product questions, or referral evidence reveal a distinct task the homepage cannot answer concisely.
- Retain a long-tail hypothesis as unproven when data is sparse; do not label sparse search results “low difficulty.”

## 5. Baseline and evidence register

### Historical baseline: verified in the audit window

| Measurement | Historical value | Qualification |
|---|---|---|
| Search Console export | `https___hunter-license-studio.vercel.app_-Performance-on-Search-2026-11-03.xlsx` | User-supplied; all seven sheets inspected in the original audit. |
| Actual daily rows | 25 October–1 November 2026 | Eight dates, despite the “Last 3 months” filter. |
| Search type | Web, text-based | Keep like-for-like comparisons; Image search is separate. |
| Search clicks / impressions / CTR | 3 / 38 / 7.89% | Very small sample; not a forecast or reliable test of snippet quality. |
| Homepage average position | 1.47 in the Pages sheet | Does not establish rankings for target keywords. |
| Disclosed target queries | None in the supplied query table | One unrelated query was disclosed; undisclosed demand is unknown, not zero. |
| Devices | Desktop: 0 clicks/32 impressions; mobile: 3 clicks/6 impressions | Too small to establish device conversion differences. |
| Countries | Philippines: 3 clicks/36 impressions; US and New Zealand: 1 impression each | Audience context, not a reason to restrict the English tool geographically. |
| HTML/rendering | Empty initial React root; one rendered H1, “Create your license.” | Public content requires JavaScript and intro completion. |
| Crawl endpoints | Homepage, robots.txt, sitemap: 200; HTTP→HTTPS: 308; sampled invalid path: 404 | Historical checks; revalidate in M0 and after relevant deployments. |
| Canonical | HTTPS homepage | Google-selected canonical/current indexing require account inspection. |
| Sharing/schema | No OG/Twitter image; no JSON-LD observed | Metadata otherwise present. |
| Main assets | Intro PNG 730,577 bytes; header PNG 453,020 bytes; audio file 6,244,914 bytes | Asset sizes, not proof all bytes transfer on every visit. |
| Desktop FCP/LCP/intro | 2.39 s / 2.39 s / 2.24 s | One cold-cache, unthrottled 1440×900 Chrome run. |
| Mobile FCP/LCP/intro | 15.09 s / 15.09 s / 15.04 s | One cold-cache 390×844 run, 1.6 Mbps download, configured 150 ms latency, CPU 4×. |
| Observed layout shift | 0 in both sampled runs | Not a field CLS determination. |
| Sampled interaction durations | Maximum 32 ms desktop / 40 ms mobile | Not field INP measurements. |
| Mobile layout | Overflow at multiple widths; header also overflows at 320px | Tooltip positioning is a likely major contributor. |
| Field Core Web Vitals / PSI score | Unavailable | API quota error; absence of CrUX data was not established. |

Full methods, findings, qualifications, and sources remain in [SEO_AUDIT.md](SEO_AUDIT.md). Do not replace those historical numbers with later measurements.

### Measurement available now versus later

| Metric/capability | Current availability | Next action |
|---|---|---|
| Historical Google impressions, clicks, CTR, page/device/country dimensions | Available in the workbook | Preserve original filters and dates; obtain new comparable exports in M0. |
| Current index status, selected canonical, sitemap acceptance, security/manual-action reports | Not verified through account access | Site owner reviews Search Console in M0. A verification tag alone is not proof. |
| Current metadata, HTTP behavior, layout, lab performance | Measurable by inspection | Rebaseline before implementation; repeat after approved releases. |
| Organic landing visits and engagement | No client-side analytics integration found in inspected source on 4 November 2026 | Confirm any hosting/account analytics, then approve an aggregate measurement approach. |
| Generator starts, customization, PNG/GIF outcomes, export failures | Not instrumented in inspected source | Future M0 event implementation and validation only after approval. |
| Referral and Pinterest conversions | Not measured by the supplied evidence | Add coarse channel attribution; obtain Pinterest account analytics if available. |
| Pinterest impressions, saves, outbound clicks | Unknown; no account data supplied | Confirm business-account access and baseline before distribution. |
| Monthly search volume / keyword difficulty / competitor backlinks | Not verified | Use relevant intent and observed data; do not invent values. |

### Measurement periods and evaluation rules

1. Rebaseline technical observations immediately before each relevant change, using the same conditions as its comparison test.
2. After approved instrumentation passes QA, collect an initial **28 consecutive days** of product/channel measurements. Record deployment dates, outages, tracking coverage, and excluded tests.
3. If data is too sparse or coverage is incomplete, extend observation to **56 days** or report only descriptive counts. These are proposed observation windows, not significance guarantees.
4. Set numerical search-growth and engagement targets only after reviewing those measurements. Record the target, denominator, period, rationale, and approval here.
5. Use comparable 28-day periods when possible, with device/country/query filters held consistent. Keep GSC dates as exported and document analytics reporting timezone/date boundaries rather than assuming daily buckets align.
6. Label before/after changes as associations unless an appropriate experiment establishes causality. Search changes, seasonality, promotion, and small samples can confound results.

The measurement window can continue after M0 acceptance. Do not delay all technical fixes for 28 days solely to manufacture a traffic-growth baseline; retain the historical evidence and mark pre/post instrumentation boundaries clearly.

## 6. SEO and product analytics specification

**Planning only. No events, tracking service, cookies, or analytics integration have been added by this task.** Provider choice, delivery/storage design, retention, access, and any required consent behavior must be approved as part of future M0 scope.

### Scope and attribution

- An initial **visit** means one top-level homepage load, not a unique person. Reloads and separate tabs are separate visits. A background tab does not count until first visible.
- Determine one coarse entry channel locally and hold it in memory for that page lifetime: `organic_search`, `pinterest`, `other_referral`, `direct`, or `unknown`. Use `unknown` when evidence is ambiguous; never relabel it as organic.
- Recognize known search/Pinterest referrer hosts and only approved campaign values. Do not transmit raw URLs, full referrers, query strings, or fragments.
- Pinterest is a separate social/referral channel; its organic Pin impressions are not Google organic-search impressions.
- Do not stitch users across visits, sites, or devices. Cross-page journeys through future guides are outside the initial funnel unless a later, explicitly reviewed design adds a necessary measurement method.
- Blocked analytics, declined collection where applicable, and interrupted pages cause undercounting. Search clicks and measured landing visits are different quantities and need not match.

### Required events

| Event | Exact trigger | Frequency and exclusions | Proposed hook location |
|---|---|---|---|
| `generator_started` | First trusted user interaction with generator inputs, design/aura choices, preview actions, or export controls. | Once per visit. Never on mounting, hydration, intro completion, default population, or programmatic focus. | `App.tsx`, `HunterLicense.tsx`, `ExportControls.tsx`, through one shared future measurement helper. |
| `license_customized` | First user-originated actual change to name, number, design, or aura. Compare locally; send no value. | Once per visit; ensure start is counted first. Exclude repeated identical values, initial defaults, flip/rotate-only actions, and Reset. | Existing customization handlers in `App.tsx`. |
| `export_png_plain` | A plain PNG Blob is created and the automatic download is dispatched without a synchronous error. | Once per successful operation, with local first-in-visit flags. Never on menu opening, option selection alone, failure, or duplicate blocked operations. | Successful export/download boundary in `ExportControls.tsx` and `utils/exportLicense.tsx`. |
| `export_png_holographic` | Same success boundary for a holographic PNG. | Same rules as plain PNG; current aura remains the source of the visual finish. | Same boundary. |
| `export_gif` | GIF encoding finishes, a valid Blob is produced, and download dispatch returns without a synchronous error. | Same rules; frame capture/progress callbacks must not emit successes. | Same boundary, after worker encoding completes. |

**Export success means generation plus download dispatch.** The current browser download approach cannot prove the user saved the file to disk. Reports must say “generated/download requested,” not “confirmed file saved.”

### Minimal supporting events

These are proposed in addition to the five requested events because funnel denominators and failure rates cannot be derived from successes alone.

| Event | Why needed | Trigger |
|---|---|---|
| `landing_page_view` | Denominator for relevant landing visits and funnel rates. | Once when the homepage first becomes visible, subject to the approved collection behavior. |
| `export_started` | Export-demand/attempt volume by format. | After the existing duplicate-operation guard admits an actual export operation. |
| `export_failed` | Resolved failure counts by format/stage. | Once for an admitted operation that fails; send only an allowlisted stage/category. |

If the chosen system already supplies a suitable page-view counter, map it to `landing_page_view` rather than adding a duplicate automatic page view. Avoid introducing a separate event for every click or keystroke.

### Data minimization and funnel counting

Use an explicit payload allowlist, not automatic capture of component props or the DOM.

| Allowed datum | Purpose / limit |
|---|---|
| Event name and schema version | Stable aggregate event definitions. |
| Coarse channel enum | Compare organic, Pinterest, and other acquisition sources. |
| Format enum on `export_started` / `export_failed` | `png_plain`, `png_holographic`, or `gif`; success names already identify format. |
| First-export flags on success events | `first_export_in_visit`, `first_export_for_format_in_visit`, `first_customized_export_in_visit`; compute in memory without sending a visit/user identifier. |
| Allowlisted failure category on failure events | For example `capture_failed`, `encode_failed`, `download_dispatch_failed`, or `unknown`. No raw error messages. |
| Aggregate reporting date bucket | Use coarse dates; avoid retaining detailed per-person timelines. |

`first_customized_export_in_visit` becomes true only for the first successful export whose attempt started after a `license_customized` event in that visit. It remains independent of the first-export flag: a visitor can export defaults, customize, and then export again. This represents historical journey order, not a claim that the final card differs from defaults after a Reset.

Do not collect or persist:

- License names, numbers, kana readings, form values, free text, or hashes of those values.
- Exported images, GIFs, canvas data, Blobs, screenshots, filenames, or download contents.
- Email addresses, account details, full referrers/URLs, query strings, fragments, DOM snapshots, or raw exception objects.
- Persistent user/visitor identifiers, fingerprints, advertising IDs, cross-session tracking, or session replay.
- Unnecessary device, location, or audience attributes merely because a provider offers them.

No IP address belongs in an event payload. Network services inevitably receive connection information while handling a request; verify the chosen service's request logging and retention rather than claiming no service ever receives an IP. Prefer a provider/configuration that minimizes or does not retain such identifiers. Disable automatic form capture, URL-property capture, replay, and unused analytics features. A future typed helper must accept only the approved event schema, never a complete license/props object.

Proposed retention: retain aggregated counts, restrict reporting access, and discard raw event records as soon as aggregation/deduplication needs permit. Record the actual retention period and provider behavior before enabling collection; no period or provider is approved yet.

### KPI definitions

All funnel counts below use the same visit scope, entry channel, collection coverage, and reporting period. Percentages use a nonzero denominator; otherwise report “not enough data,” not 0%.

| KPI | Definition | Availability |
|---|---|---|
| Google organic clicks / impressions / CTR | GSC Web/text-based totals and relevant disclosed query groups; CTR = clicks ÷ impressions. | Historical workbook; fresh GSC exports needed. |
| Relevant query impressions | Impressions in a documented license-related query group; privacy omissions remain unknown. | GSC where disclosed. |
| Generator start rate | Visits with `generator_started` ÷ measured landing visits. | Requires instrumentation. |
| Customization rate | Visits with `license_customized` ÷ generator-started visits. | Requires instrumentation. |
| Any-export rate | Success events with `first_export_in_visit=true` ÷ generator-started visits. | Requires instrumentation. |
| Ordered organic funnel completion | Organic success events with `first_customized_export_in_visit=true` ÷ organic landing visits. | Requires instrumentation; defaults-only exports remain valid but separate. |
| PNG Plain / Holographic / GIF operations | Count each matching successful-operation event; also report first-per-format flags for visit counts. | Requires instrumentation. |
| Resolved export completion rate | Successful operations ÷ (successful + failed resolved operations), overall and by format. | Requires supporting failure events; excludes abandoned/interrupted operations. Do not label it an all-attempt completion rate. |
| Export attempt volume | Admitted `export_started` operations by format. | Requires instrumentation; lost events/unfinished attempts limit reconciliation. |
| Landing-page engagement | Initially use intentional generator starts and customization as meaningful engagement proxies. | Requires instrumentation; avoid arbitrary time/scroll tracking by default. |
| Pinterest/referral contribution | Measured landing visits, starts, and first exports for the corresponding coarse channel. | Requires attribution and relevant traffic. |
| Pinterest reach and response | Native impressions, saves, outbound clicks, and outbound click rate. | Requires business-account analytics; not equivalent to site visits or exports. |

No baseline exists yet for product conversion, engagement, export success rates, referral conversions, or Pinterest growth. Do not substitute Search Console clicks for measured generator usage.

### Analytics acceptance tests for future M0

- [ ] A normal load, intro, hydration, and default rendering produce no start/customization/export-success event.
- [ ] A page first visible twice still has one landing event; a user interaction produces exactly one start.
- [ ] A real customization produces one customization event; subsequent keystrokes expose no input text and do not multiply the visit count.
- [ ] Reset, flips, and rotation do not falsely imply customization.
- [ ] Each format emits success only after successful generation and download dispatch; its current artwork/aura remains unchanged.
- [ ] Repeated exports count operations but first-export/first-format flags remain accurate.
- [ ] Default export → customization → later export counts the ordered customized-export stage once.
- [ ] Duplicate blocked exports emit neither extra attempt nor success events.
- [ ] Capture/encoder/download-dispatch failures emit one sanitized failure and no success; retry is measured correctly.
- [ ] Inspect outbound requests using distinctive test names/numbers and confirm no values, hashes, image data, full URLs, raw errors, or license props appear anywhere in payloads.
- [ ] Block analytics or simulate delivery failure: customization and all exports still work with no user-facing analytics errors.
- [ ] Validate configured collection/consent behavior, provider logging/retention, developer/test exclusion, and coarse channel attribution without adding persistent identifiers.
- [ ] Synthetic counts reconcile with the dashboard; collection limitations and operation-vs-visit definitions are visible in reporting.

## Milestone 0: Baseline and Measurement

**Status:** COMPLETED — accepted read-only scope  
**Implementation approval:** Read-only assessment authorized; no analytics or file changes were authorized in M0.  
**Acceptance:** User explicitly accepted M0 as complete for proceeding to M1, 4 November 2026.  
**Owner:** Codex for the authorized assessment; site owner for authenticated account evidence.

**Scope decision:** The user's later M0 authorization superseded the proposed instrumentation tasks below. Six current production measurements and nine export checks were completed. Analytics, the product-funnel observation window, and authenticated Search Console verification were not completed or implied to work; their deferral was accepted when M1 was authorized. The original proposed checklist remains below as a record of that distinction.

**Objective:** Establish an honest technical/search baseline and a validated way to measure acquisition through generation before judging growth.

**Current baseline:** Historical observations above are available. Current Google indexing/account reports and product analytics are unverified or uninstrumented. The source scan on 4 November found no client-side analytics integration.

**Targets and KPIs:** Record a fresh technical baseline, current Search Console state, and a complete metric dictionary. Validate all approved synthetic analytics scenarios. Start a 28-day observation window; production conversion and search-growth targets remain unset pending data.

### Implementation checklist and deliverables

- [x] M0-01: Preserve the original workbook and audit reference; record export date, filters, actual date coverage, and source checkout in the measurement log.
- [ ] M0-02: Obtain current owner-reviewed URL Inspection, selected canonical, sitemap processing, indexing, and security/manual-action evidence. Distinguish unavailable account evidence from failed indexing.
- [x] M0-03: Recheck production HTML, metadata, assets, endpoints, and layout; record production URL, deployment/source revision where known, and test conditions.
- [x] M0-04: Repeat desktop/mobile cold-cache lab measurements at least three times; report median and range, payload sizes, intro completion, and browser/network/CPU settings.
- [ ] M0-05: Confirm any existing hosting/account analytics and Pinterest business-account access without assuming availability.
- [ ] M0-06: Approve the minimal event schema, provider/collection design, retention/access, attribution, and any required consent behavior before adding measurement code.
- [ ] M0-07: Implement only the approved measurement scope; validate the analytics acceptance tests and establish aggregate reporting.
- [ ] M0-08: Start the observation window and record unavailable metrics and known coverage limits. Submit baseline/measurement evidence for user review.

**Dependencies:** Explicit implementation approval; Search Console owner access; approved measurement service/design; browser testing; Pinterest account access only for Pinterest metrics.

**Verification:** Compare account exports with the recorded filters; inspect payloads and synthetic dashboard counts; verify delivery failure cannot break the tool. Run the common regression checklist below if source is instrumented, and verify production only after an approved deployment.

**Completion criteria:** Baseline evidence is reproducible, current account findings or specific access blockers are documented, the approved measurement design passes QA, and the initial window is underway. Any measurement deferral requires an explicit scope decision; do not mark missing analytics as working. Waiting for traffic is not itself a blocker to accepting an otherwise complete baseline.

**Risks/limits:** Privacy exclusions, sparse traffic, browser blocking, unavailable account data, and provider defaults. A website verification tag alone is not sufficient evidence. New instrumentation cannot reconstruct past product usage.

**Next gate:** User reviews M0 evidence and explicitly authorizes M1.

## Milestone 1: Technical SEO Foundation

**Status:** IN PROGRESS  
**Implementation approval:** User authorized the specified M1 technical changes on 4 November 2026; no deployment, analytics, or later milestones.  
**Acceptance:** Local implementation and verification complete; user review pending. Production verification remains a separate release gate.  
**Owner:** Codex for implementation and local verification; site owner for release approval.

**Objective:** Remove the audit's strongest technical/relevance/usability limitations while preserving the generator experience.

**Current baseline:** [Audit H1–H5 and accessibility findings](SEO_AUDIT.md#5-prioritized-recommendations): empty initial body, vague heading, oversized logos, competing media, overflow, and selected-state/contrast issues. Canonical, robots, and sitemap were historically sound.

**Targets and KPIs:** Useful public content in initial HTML; one descriptive H1; no unintended overflow at 320/375/390/768/1440px; correct endpoints/canonical; passing generator/export regressions. Proposed release budgets: combined startup-logo transfer ≤200 KB; median cold mobile FCP/LCP and intro completion ≤4.0 seconds under the baseline throttle; median desktop LCP ≤2.5 seconds; observed lab CLS ≤0.1. These are proposed budgets, not field pass claims. Longer-term field goals remain LCP ≤2.5 seconds, INP ≤200 ms, and CLS ≤0.1 at p75 separately for mobile/desktop when data is available.

### Implementation checklist and deliverables

- [x] M1-01: Serve public heading/introduction directly in `index.html`, reusing that same DOM content in the React editor. No framework migration, duplicate copy, or hydration is introduced.
- [x] M1-02: Add a descriptive heading/introduction and approved title/description reflecting the actual digital generator and PNG/GIF capabilities.
- [x] M1-03: Add resized transparent WebP logo variants and preload the optimized intro asset; retain original PNG artwork unchanged.
- [x] M1-04: Delay assigning the audio source/autoplay attempt until two animation frames after intro completion; preserve default music state, loop, volume, toggle, and resume behavior.
- [x] M1-05: Constrain fixed tooltip coordinates and allow narrow header wrapping. All required widths, focused tooltips, and normal mobile touch controls pass local checks.
- [x] M1-06: Preserve the HTTPS canonical, robots.txt, and sitemap; validate built assets and favicon locally. Hosting configuration and production redirects/404 behavior are unchanged; production revalidation is deferred until an authorized deployment.
- [x] M1-07: Add pressed states, native fieldset/legend groups, SVG decorative/meaningful semantics, inactive-face hiding, focus indicators, and improved text contrast.
- [x] M1-08: Produce M0-versus-local-build measurements, complete editor/export/accessibility checks, and record the test-origin limitation below. All approved local targets pass; no performance-budget relaxation was required.
- [ ] Release gate: Obtain explicit deployment approval, verify the real production deployment, and submit evidence for acceptance. No deployment or M2 work has begun.

**Likely files:** `index.html`, `src/main.tsx`, `src/App.tsx`, `src/App.css`, loading/card/text components, `public/images/`, and only necessary build configuration. File selection is a planning map, not permission for unrelated edits.

**Dependencies:** M0 accepted and M1 authorized; approved copy/rendering choice; current production baseline; preserved asset originals.

**Verification:** Inspect raw HTML and the JavaScript-disabled view, then test normal hydration and Google rendering through owner-accessible URL Inspection. Repeat three comparable lab runs; inspect network ordering; test keyboard, reduced motion, music, customization, all themes/auras, and all exports. Verify metadata/HTTP behavior in production after deployment.

**Completion criteria:** Required technical checks and agreed release budgets pass, production evidence is recorded, and no generator/export regression remains. If a budget cannot be met without a product tradeoff, record the measured limit and obtain explicit acceptance before closing or advancing. Google reindexing/ranking changes are monitored outcomes, not an immediate delivery guarantee.

**Risks/limits:** Current loading/hiding behavior complicates prerendering; browser autoplay rules and caches vary; lab improvements do not guarantee field results. Framework migration requires a separate justified proposal.

**Next gate:** User accepts M1 evidence and authorizes M2.

## Milestone 2: Content and On-Page SEO

**Status:** NOT STARTED  
**Implementation approval:** Not recorded  
**Acceptance:** Pending  
**Owner:** To be assigned during approval.

**Objective:** Help a visitor understand, use, and export a license without turning the homepage into a long article.

**Current baseline:** Supporting instructions, public examples, and export explanations are largely absent; the audit identifies relevant creation intent but no verified volume or target-query rankings.

**Targets and KPIs:** One clear H1 with logical supporting H2/H3 sections, accurate explanations of all three export formats and four aura finishes, valid contextual links, and useful public copy in initial HTML. Review generator-start/customization rates and relevant query coverage after the observation window; numerical growth/conversion targets remain pending baseline review.

### Implementation checklist and deliverables

- [ ] M2-01: Add concise instructions covering inputs, designs/auras, preview, and export.
- [ ] M2-02: Explain PNG Plain versus PNG Holographic versus GIF Animated accurately, including which formats use the selected aura.
- [ ] M2-03: Explain TEN/ZETSU/REN/HATSU as this tool's visual finishes; do not imply Nen personality testing or unsupported functionality.
- [ ] M2-04: Answer practical questions about unofficial status, name conversion limitations, customization, and downloads.
- [ ] M2-05: Use natural keyword variants and stable contextual section links; retain the generator's prominence and compact layout. The audit's 300–500-word suggestion is an editorial guide, not an SEO quota.
- [ ] M2-06: Check content against actual UI and outputs, prerendered/rendered HTML, mobile readability, and keyboard navigation. No duplicate “maker/generator” pages.
- [ ] M2-07: Record final copy/intent mapping and before/after evidence for review.

**Likely files:** Public-content component, `App.tsx`, scoped content styles, and initial-HTML/prerender source established in M1.

**Dependencies:** M1 accepted and M2 authorized; content/rendering structure; verified current features; measurement coverage recorded.

**Verification:** Follow the instructions as a new visitor; produce all three outputs; inspect heading/link structure, initial HTML, mobile flow, and accessibility. Verify production content after an approved deployment.

**Completion criteria:** All planned sections are accurate, discoverable, concise, and accessible; the editor and outputs are unchanged; production and common regressions pass. No traffic increase is claimed solely because copy shipped.

**Risks/limits:** Thin keyword-driven copy, excessive page length, accidental official/print-ready claims, and unsupported name-conversion promises. Google may rewrite search snippets.

**Next gate:** User accepts M2 and authorizes M3.

## Milestone 3: Visual SEO and Discoverability

**Status:** NOT STARTED  
**Implementation approval:** Not recorded  
**Acceptance:** Pending  
**Owner:** To be assigned during approval.

**Objective:** Make representative outputs visible to image search and sharing systems while keeping the editor fast.

**Current baseline:** No public example gallery, OG/Twitter image URLs, or JSON-LD in the audit. Existing logos are not sufficient demonstrations of the generated product. Pinterest reach/clicks are unknown.

**Targets and KPIs:** At least three approved representative examples with stable public URLs and meaningful captions/alt text; working OG/Twitter previews; truthful structured data; a small approved Pinterest-ready creative set. Monitor image impressions, Pinterest saves/outbound clicks, and resulting starts/exports after publication; no numerical traffic promise.

### Implementation checklist and deliverables

- [ ] M3-01: Generate examples from the real tool using explicitly fictional/sample details; show the available designs and explain finish/export differences without uploading visitors' cards.
- [ ] M3-02: Publish optimized examples with descriptive filenames, intrinsic dimensions, alt text/captions, and stable crawlable URLs. Lazy-load examples below the fold where appropriate; preserve full-quality downloads separately.
- [ ] M3-03: Add absolute OG/Twitter image URLs and image descriptions; create a suitable sharing composition, for example an approved 1200×630 design, and verify platform crops.
- [ ] M3-04: Add accurate WebApplication/SoftwareApplication information consistent with visible content. Validate schema and document any rich-result ineligibility; do not invent ratings, reviews, official affiliation, or a nonexistent search feature.
- [ ] M3-05: Prepare a small set of vertical 2:3 static Pin compositions, such as 1000×1500 PNG/JPEG, with clear, truthful titles/descriptions and readable examples. These are promotion canvases, not changes to card/export dimensions. Confirm current formats before creating animated Pin variants; do not assume GIF upload support.
- [ ] M3-06: Draft approved destination links/campaign names without publishing. Confirm business-account access and any domain-verification requirements for future Pinterest reporting.
- [ ] M3-07: Verify image HTTP responses, HTML inclusion, image quality, previews, schema, page weight, and production behavior after deployment.

**Likely files:** Future gallery/content component, `public/images/examples/`, preview/Pin source assets, `index.html` or its prerendered equivalent. Account-side publishing belongs to M4, not this asset-preparation milestone.

**Dependencies:** M2 accepted and M3 authorized; approved sample details/assets; chosen schema and creative designs; account capabilities confirmed for later distribution.

**Verification:** Direct 200 image responses; useful alt/caption text; no personal details in assets; working social previews; Schema.org validation plus an honest Google rich-result assessment; baseline-equivalent performance/regression checks. Google image indexing is observed later, not guaranteed by an image returning 200.

**Completion criteria:** Approved examples and previews work in production; schema is accurate; Pin drafts meet the chosen format; no unapproved publication or meaningful startup regression.

**Risks/limits:** Image indexing and sharing-cache refresh delays; gallery weight; platform-specific crops; account access; software rich-result rating/review requirements. FAQ rich results were discontinued in May 2026: useful FAQ content remains, but expanded FAQ snippets are not a target.

**Next gate:** User accepts M3 and explicitly authorizes the M4 distribution scope.

## Milestone 4: Authority and Organic Growth

**Status:** NOT STARTED  
**Implementation approval:** Not recorded  
**Acceptance:** Pending  
**Owner:** To be assigned during approval.

**Objective:** Earn relevant discovery and referrals by showing a useful tool and accurate examples, not by manufacturing links.

**Current baseline:** The audit found existing launch discussions and a project listing. No verified backlink profile, referral-conversion baseline, or Pinterest account performance was available.

**Targets and KPIs:** Inventory and correct controlled listings; execute only an approved, limited distribution plan; record source/destination/date and observable referral outcomes. Establish the first Pinterest/referral baseline before setting growth targets. No promised backlink count, ranking, or publication quota.

### Implementation checklist and deliverables

- [ ] M4-01: Inventory existing project references from the audit, verify ownership/access and current wording, and prepare accurate updates reflecting tested features.
- [ ] M4-02: Identify relevant fan resources/communities and their rules; draft helpful, specific examples or tutorial contributions. Do not buy/exchange links, mass-submit directories, or duplicate promotional posts.
- [ ] M4-03: Present exact external changes, destinations, recipients where applicable, and Pin drafts for explicit authorization before publishing or sending outreach.
- [ ] M4-04: Publish only the authorized items; keep a distribution log. Use a small approved campaign vocabulary, for example `utm_source=pinterest&utm_medium=social&utm_campaign=license_examples`, while retaining canonical homepage behavior. Analytics must classify locally rather than store raw query strings.
- [ ] M4-05: Record Pinterest impressions/saves/outbound clicks separately from measured website visits, starts, and exports. Evaluate the quality of referrals, not just their volume.
- [ ] M4-06: Assess one possible supporting guide against actual questions/query evidence, distinct intent, maintenance cost, and a clear link back to the generator. Create it only if specifically approved; otherwise record why no new page is justified.
- [ ] M4-07: Verify published links/assets and record results/limits for user review.

**Likely locations:** Controlled project listings, approved posts/Pins, distribution log in this document; `README.md` or a genuine guide route only if specifically in the approved scope.

**Dependencies:** M3 accepted and M4 authorized; approved assets; accurate destination content; account/ownership access; working coarse-channel measurement; explicit authorization for external writes/messages.

**Verification:** Preview proposed external content before publication; inspect links/campaign canonical behavior, native Pinterest metrics, aggregate channel attribution, and referred product usage. If a guide is approved, verify its unique initial HTML, canonical, sitemap inclusion, navigation, and common production regressions.

**Completion criteria:** The approved outreach/distribution scope is executed and checked, or any unavailable access is explicitly recorded for a scope decision; the first results/observation plan is reviewed. No obligation to create an article merely to check a box.

**Risks/limits:** Community rules, account access, third-party moderation/edits, traffic volatility, referrer suppression, and unproven attribution. Public mentions do not guarantee ranking gains.

**Next gate:** User accepts M4 and authorizes M5's recurring review process.

## Milestone 5: Monitoring and Continuous Improvement

**Status:** NOT STARTED  
**Implementation approval:** Not recorded  
**Acceptance:** Pending  
**Owner:** To be assigned during approval.

**Objective:** Establish a repeatable process connecting search relevance and visitor experience to generated licenses.

**Current baseline:** Historical audit/workbook only; no approved recurring process or measured product-growth baseline. Use evidence collected during M0–M4, without backfilling missing history.

**Targets and KPIs:** Complete one documented review cycle with comparable filters, coverage notes, valid denominators, and an approved next decision. Establish numerical search/engagement goals only when the initial measurement window supports them. Track relevant clicks/impressions/CTR, starts/customization, all export formats, resolved failures, device performance, and Pinterest/referral contribution.

### Implementation checklist and deliverables

- [ ] M5-01: Confirm an owner and the reporting schedule below; make the metric definitions, date boundaries, and collection gaps explicit in reports.
- [ ] M5-02: Review current indexing, canonical/sitemap status, device performance, relevant disclosed queries, and landing-page outcomes using comparable periods.
- [ ] M5-03: Analyze start/customization/ordered-export rates and per-format resolved failures. Diagnose where users stop rather than optimizing only impressions.
- [ ] M5-04: Compare referral/Pinterest reach, outbound clicks, measured visits, and exports without assuming each platform click is a website visit.
- [ ] M5-05: Approve numerical targets with a measured baseline, denominator, observation period, and rationale; extend sparse-data windows instead of forcing conclusions.
- [ ] M5-06: Record a decision: retain, test one relevant change, investigate a regression, or propose one distinct guide. Review/approve any new implementation scope before work begins.
- [ ] M5-07: Complete the first report/review and record the next scheduled review. Append later reports and decisions without modifying the original audit.

**Likely locations:** This roadmap's append-only measurement/review logs, existing GSC exports and approved aggregate reporting; future code/content changes require their own approved scope.

**Dependencies:** M4 accepted and M5 authorized; measurement access, an accountable reviewer, recorded release history, and sufficient usable observation time or a clearly documented sparse-data result.

**Verification:** Recalculate rates from counts, check period/filter consistency, inspect missing metrics, and reconcile synthetic tracking where schemas change. Conduct actual post-deployment checks rather than assuming a successful build proves production correctness.

**Completion criteria:** The recurring process and first review are accepted, limitations and next actions are recorded, and the next review has an owner/date. The milestone can be COMPLETED while monitoring continues; it does not mean organic growth is permanently “finished.”

**Risks/limits:** Small samples, seasonality, search updates, changing query mix, browser blocking, instrumentation changes, and promotion confound comparisons. No roadmap milestone guarantees a particular Google ranking.

## 7. Shared regression and release requirements

Apply the relevant checks to each authorized milestone; documentation/account-only work does not require running unrelated application tests.

- [ ] Name/number customization, reading hints, reset, three designs, both faces, flip/rotate, and four aura styles still work.
- [ ] Plain PNG excludes effects; holographic PNG uses the selected aura; GIF has changing frames, readable fixed information, the established dimensions, and seamless looping.
- [ ] Export progress/errors, duplicate prevention, descriptive downloads, retry, worker cleanup, and mobile downloads remain intact.
- [ ] Intro appearance/timing, reduced-motion handling, layout stability, and music controls retain the agreed behavior.
- [ ] Check 320/375/390/768/1440px layouts, keyboard/focus, selection semantics, and meaningful image descriptions.
- [ ] For code/config changes, run the existing build and applicable lint/targeted checks; distinguish pre-existing failures from new ones. Do not silently fix unrelated components. The prior implementation session reported an existing `HunterText.tsx` lint issue; recheck rather than assuming its current status.
- [ ] For public-content changes, inspect raw and rendered HTML, metadata/canonical, robots/sitemap where relevant, HTTP errors, sharing/images, and comparable performance.
- [ ] Verify the production deployment and its actual assets/behavior after any authorized release. Record deployment URL/revision, date, checks, and rollback reference.
- [ ] Confirm measurement payloads remain minimal and a failed/blocked analytics request never blocks generator use.

## 8. Governance, dependencies, and review gates

1. Implement one approved milestone at a time. Do not begin the next until its predecessor is reviewed/accepted and the next scope is explicitly approved.
2. Preserve the application's visual identity, license artwork, customization, front/back interaction, all three export formats, and agreed startup/music behavior.
3. Prefer the existing architecture; no unnecessary framework migration, dependency, tracking SDK, or unrelated refactor.
4. Do not create thin/duplicate pages, stuff keywords, fabricate reviews/ratings/schema, or imply official affiliation or unsupported functionality.
5. Separate code completion, production verification, user acceptance, and search outcomes. Do not mark ranking/indexing gains merely because a release shipped.
6. Document concrete scope, changed files, tests, risks, and deployment/rollback plan before implementation review. Deployment and external publication require the applicable explicit authorization; do not infer it from this planning task.
7. Collect only the approved aggregate analytics data. No personal license details, images, persistent identifiers, automatic form capture, or replay. Record schema/provider/retention changes before enabling them.
8. Keep `SEO_AUDIT.md` as the historical diagnostic document. Update this execution document after approved work; append new measurements with dates, never rewrite history or turn unknown values into zero.

| Dependency / open decision | Current state | Resolution point |
|---|---|---|
| Roadmap and milestone implementation approval | M0 read-only scope accepted; specified M1 implementation authorized and locally verified | User review of M1; deployment and M2+ remain unauthorized. |
| Search Console ownership/access and current indexed state | Not verified in account | M0 owner-reviewed evidence. |
| Analytics provider, retention/access, collection behavior, attribution | Not chosen | M0 scope decision before instrumentation. |
| Valid engagement baseline and numerical growth targets | Unavailable | Initial 28-day window; extend if sparse. |
| Smallest suitable initial-HTML architecture | Static public HTML reused in the editor, implemented and tested | No framework migration or full-app hydration introduced. |
| Intro/music performance tradeoffs | Intro retained; audio source/play attempt deferred until after intro completion | Controls/default state/loop/volume/resume preserved; production timing verification pending. |
| Pinterest business account and publishing permissions | Not verified | Check in M0; assets in M3; approved distribution in M4. |
| Field CWV/PSI access | Unavailable in original audit | Retry legitimate tools/access in M0; preserve lab/field distinction. |

## 9. Monitoring and reporting schedule

This is the proposed operating schedule, not a claim that monitoring is already active. Measurement/health observation can run after approved M0 setup while later milestones proceed sequentially; that does not authorize M5 implementation early.

| Cadence | Review | Output |
|---|---|---|
| Every authorized deployment | Actual production behavior, metadata/HTML, relevant endpoints, performance, generator/exports, and event schema | Dated release evidence and any regression/rollback decision. |
| Weekly after measurement is enabled | Indexing changes, notable failures, data delivery, basic query/device/channel trends | Short issue/count review; avoid decisions from one or two impressions. |
| At the first 28-day measurement boundary | Coverage, baseline counts, relevant search queries, starts/customization/exports, referral/Pinterest contribution | Baseline review and proposed targets, or an explicitly extended window. |
| Every 28 days once comparable data exists | Like-for-like search and product funnel comparisons; snippet and content-intent opportunities | Report with counts, denominators, caveats, and one prioritized decision. |
| Quarterly, or when clear intent/feature changes occur | Keyword/competitor relevance, content gaps, stale examples, analytics necessity, platform guidance | Updated proposed strategy in this roadmap; preserve original audit. |
| On a confirmed serious regression | Crawl/index prohibition, failed critical assets, unusable editor/export, or prohibited analytics data | Investigate promptly, propose/execute only authorized remediation, record evidence. |

Revisit targeting when repeated relevant query patterns show a different task, a current page attracts mismatched intent, or measured visitor behavior reveals an unmet explanation need. Consider new content only for a distinct useful task with evidence and a maintenance owner. Do not produce more pages simply because broad impressions are low.

## 10. Evidence, approval, and progress logs

Append entries as work is reviewed. Do not prefill future dates, test passes, or approvals.

### Milestone review record template

| Field | Entry |
|---|---|
| Milestone / status / owner | Not recorded |
| Approved scope, approver, date, and reference | Not recorded |
| Deliverables / source revision / deployment | Not recorded |
| Tests and actual production evidence | Not recorded |
| Baseline → result, methods, sample size, and coverage | Not recorded |
| Unresolved risks / accepted limitations | Not recorded |
| Acceptance decision / approver / date | Not recorded |
| Next milestone authorization | Not recorded |
| Next action / review date | Not recorded |

### Measurement log

| Date/window | Source/filters and environment | Metric/result | Evidence and limits |
|---|---|---|---|
| 3–4 November 2026 audit | Supplied GSC workbook and production lab checks | Historical values in section 5 | [Original audit](SEO_AUDIT.md); small search sample, single-run lab results, field metrics unavailable. |
| 4 November 2026 planning | Source checkout `aad4b34`; metadata and analytics integration scan | No client-side analytics integration found in inspected source | Hosting/account dashboards not verified. No application changes or milestone implementation performed. |
| 4 November 2026 M0 | Three desktop and three mobile production lab runs; same browser/throttle definitions as section 12 | Desktop median FCP/LCP 2.316 s; mobile 14.988 s; CLS 0 in all runs | Nine export checks passed; current authenticated GSC and field metrics unavailable. Read-only scope accepted by user. |
| 4 November 2026 M1 | Three desktop and three mobile local production-build runs; Brotli quality 3 test server | Desktop median FCP/LCP 2.032 s; mobile 3.864 s; CLS 0 in all final runs | Loopback origin is not Vercel; no deployment. See raw runs, ranges, and verification below. |

### Target register

| Target type | Baseline | Proposed target / decision | Approval |
|---|---|---|---|
| Technical release checks | M0 six-run production baseline recorded below | All approved local M1 budgets and regression checks pass | Local evidence ready for user review; production gate pending |
| Relevant search impressions/clicks/CTR | Historical 3 clicks/38 impressions; insufficient target-query evidence | Establish comparable window before a numerical growth target | Pending |
| Generator starts/customization/ordered exports | Not measured | Validate events, then collect 28 days; extend if sparse | Pending |
| Resolved PNG/GIF completion | Not measured | Establish by format with failure definitions and coverage | Pending |
| Pinterest/referral acquisition and export outcomes | Not measured | Establish channel/account baseline before growth target | Pending |

### Decision and change log

| Date | Decision/change | Authority / impact |
|---|---|---|
| 4 November 2026 | Create separate diagnostic and execution documents; preserve the audit; add a proposed aggregate product funnel. | User's documentation request. All milestone statuses remain NOT STARTED; no implementation approval inferred. |
| 4 November 2026 | Accept the explicitly read-only M0 assessment and authorize only the specified M1 technical implementation. | User authorization; analytics, deployment, external publication, and M2+ remain excluded. |
| 4 November 2026 | Complete M1 implementation and local verification; retain IN PROGRESS for the pending release/production gate. | Local targets pass. Historical audit, original PNG artwork, dependencies, export implementation, and hosting configuration remain unchanged. |

### Overall implementation checklist

- [x] M0's authorized read-only scope completed, evidence reviewed, and accepted; analytics/account-dependent checks remain deferred.
- [ ] M1 completed, evidence reviewed, and accepted.
- [ ] M2 completed, evidence reviewed, and accepted.
- [ ] M3 completed, evidence reviewed, and accepted.
- [ ] M4 completed, evidence reviewed, and accepted.
- [ ] M5 process established, first review completed, and accepted.

## 11. Reference material

The audit contains the primary technical findings and competitor research. Recheck time-sensitive platform guidance before its milestone is implemented.

- [Initial SEO audit](SEO_AUDIT.md)
- [Google: JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google: Search Console query/data limitations](https://support.google.com/webmasters/answer/17011259?hl=en)
- [Google: Core Web Vitals](https://web.dev/articles/vitals)
- [Google: Image SEO](https://developers.google.com/search/docs/appearance/google-images)
- [Google: Software application structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app) — distinguish truthful schema from rich-result eligibility.
- [Google: Documentation updates](https://developers.google.com/search/updates) — FAQ rich-result retirement recorded in May 2026; do not promise expanded FAQ snippets.
- [Pinterest: Creative specifications](https://help.pinterest.com/en/business/article/pinterest-product-specs) — consulted 4 November 2026; recommends 2:3 imagery, such as 1000×1500, for standard image creative.
- [Pinterest: Analytics](https://help.pinterest.com/en/business/article/pinterest-analytics) — consulted 4 November 2026; business-account access is required for native analytics. Reach/engagement/outbound clicks are distinct from website conversions.

## 12. M1 implementation and verification record

**Date:** 4 November 2026, Asia/Manila. **Result:** Local implementation and verification complete; stopped pending user review. **Deployment:** Not performed. **M2 and later milestones:** Not started. The IN PROGRESS milestone status reflects the still-pending release/production verification gate, not unfinished local code work.

### Implementation decisions and changed files

| File | Change and reason |
|---|---|
| `index.html` | Serve one descriptive H1 and introductory paragraph in the initial body; improve title/description; correct the favicon MIME/size/URL; preload the optimized intro logo. Small critical styles preserve the black startup and readable no-JS fallback. A three-second failed-bootstrap fallback reveals the public copy if the app never mounts. `flow-root` prevents the standalone heading margin from shifting the body. Existing OG/Twitter metadata, canonical, and verification tag are otherwise retained. |
| `src/components/PublicIntroduction.tsx` (new) | Move that same public HTML section into its existing editor position in a layout effect, restoring it on cleanup. This gives one source of copy, one H1, no hydration mismatch, no full-app SSR/framework migration, and usable text without JavaScript. |
| `src/main.tsx` | Pass intro-completion readiness to the editor through the loading component. |
| `src/components/LoadingScreen.tsx` | Use the resized transparent WebP with matching intrinsic aspect ratio and expose readiness to children. The 1.8-second fade/hold/fade CSS, black background, responsive sizing, reduced-motion behavior, and input/visibility gate are preserved. |
| `src/App.tsx` | Reuse the public introduction; use the small header image with intrinsic dimensions; leave audio without a source until two animation frames after intro completion. Preserve the default music state, loop, 0.15 volume, user-gesture play, pause, and resume. Clamp tooltips to the viewport on focus/pointer/scroll/resize. Add fieldset/legend grouping, pressed states, linked name guidance, and decorative-symbol semantics. |
| `src/App.css` | Fix overflow at its cause using fixed/clamped tooltips and wrapping header controls; retain the existing editor layout. Style native control groups, add keyboard focus indicators, and improve placeholder/hint/footer/aura-label contrast. The REN button label is lighter for contrast; card/aura artwork and glow definitions are unchanged. |
| `src/components/HunterLicense.tsx` | Hide the inactive front/back face from assistive technology while retaining both visual faces and all preview interactions. Flat export panels are unchanged. |
| `src/components/HunterText.tsx` | Expose named SVGs as images and hide decorative fine print. Use an equivalent direct placement loop to fix the existing lint error while preserving glyph positions and dimensions. |
| `public/images/anime-hxh-logo-1120.webp` (new) | Resize the original intro artwork to 1120×630 and encode transparent WebP for the existing maximum 560px display. No crop, redraw, or recoloring; original PNG retained. |
| `public/images/hxh-logo-140.webp` (new) | Resize the existing header mark to 140×100 with its original 1.4 aspect ratio and transparency, for the existing 40×40 contain box. Original PNG retained. |
| `public/images/hxh-favicon-48.png` (new) | Fit the same mark within a transparent 48×48 PNG, replacing use of the full-size header PNG as a wrongly declared SVG favicon. |
| `docs/SEO_ROADMAP.md` | Record authorization, accepted read-only M0 scope, implementation decisions, evidence, results, and release gates. |

No application dependency or lockfile changed. No build/hosting configuration, export utility, card face artwork/style, original logo PNG, or audio file changed. No analytics, tracking, cookies, gallery, new page, social-preview image, structured data, deployment, or external outreach was added/performed.

`docs/SEO_AUDIT.md` is unchanged: SHA-256 `3324a88d2563a185757366dc62edbcd31e4bdb98497106b82c30bd1e5c336bd0`.

### Asset sizes and preservation

All sizes below are bytes of image payload, excluding HTTP headers. WebP variants were deterministically resized/encoded from existing PNGs using browser canvas; no image-generation service or dependency was used. Transparent pixels remain; originals are retained for compatibility/reference.

| Startup use | M0 asset / size | M1 asset / size | Reduction |
|---|---|---|---:|
| Intro | `anime-hxh-logo.png`, 3840×2160, 730,577 B | `anime-hxh-logo-1120.webp`, 1120×630, 69,180 B | 90.5% |
| Header | `hxh-logo.png`, 1484×1060, 453,020 B | `hxh-logo-140.webp`, 140×100, 3,522 B | 99.2% |
| **Combined logos** | **1,183,597 B** | **72,702 B (72.7 KB)** | **93.9%** |
| Favicon reference | Same 453,020 B header PNG; declared as SVG | `hxh-favicon-48.png`, transparent 48×48, 2,553 B; declared PNG | 99.4% for the referenced asset |

Do not add the old favicon's shared PNG again to the unique-logo baseline: a browser may reuse its cached copy. The audio file remains 6,244,914 B; its loading is deferred rather than its content being changed.

### Benchmark method and comparison limits

- M0: production URL, six successful runs on 4 November (local time). One preliminary client DNS failure recovered before measurement and is excluded from successful runs.
- M1: final `npm run build` output on a loopback-only in-memory static test server at `http://127.0.0.1:4174/`. It serves Brotli quality 3 for text, unmodified image/audio bytes, and byte ranges for audio. This is test tooling, not a project/configuration change or deployment.
- Both: Chrome 156.0.8078.80, fresh context per run, browser HTTP cache cleared/disabled, DPR 1, no unrelated browser test workload during the final six-run set.
- Desktop: 1440×900, unthrottled. Mobile: 390×844 touch/mobile emulation, 200,000 B/s download (1.6 Mbps), 93,750 B/s upload, configured 150 ms latency, and 4× CPU slowdown.
- M0 JavaScript payload was 104,151 B Brotli. M1's local test server delivers 104,679 B Brotli (341,223 B decoded), within 1% of the M0 wire size; this avoids comparing the production compressed bundle to an uncompressed Vite preview. CSS is 8,418 B compressed versus 8,320 B in M0.
- Browser PerformanceObserver captured FCP/LCP and layout shifts through intro completion plus 1.5 seconds; CLS uses the largest observed session window. LCP was the H1 in all final runs. No application runtime errors were observed.
- Network/CPU/cache/viewport settings match M0, but origin/server conditions do not: M0 was Vercel with unforced CDN/DNS/TLS state; M1 is loopback. Server response overhead is lower locally. These results verify local engineering targets, not deployed performance, Lighthouse scores, field INP, or field CWV compliance.

#### Final raw runs

Seconds except CLS. FCP and LCP happened at the same recorded paint in each run.

| Device/run | M0 FCP/LCP | M0 intro complete | M0 CLS | M1 FCP/LCP | M1 intro complete | M1 CLS |
|---|---:|---:|---:|---:|---:|---:|
| Desktop 1 | 2.652 | 2.480 | 0 | 2.288 | 2.118 | 0 |
| Desktop 2 | 2.316 | 2.263 | 0 | 2.032 | 1.992 | 0 |
| Desktop 3 | 2.288 | 2.236 | 0 | 2.028 | 1.989 | 0 |
| Mobile 1 | 15.012 | 14.939 | 0 | 3.876 | 3.815 | 0 |
| Mobile 2 | 14.916 | 14.856 | 0 | 3.864 | 3.824 | 0 |
| Mobile 3 | 14.988 | 14.930 | 0 | 3.860 | 3.821 | 0 |

#### Medians and ranges

| Metric | M0 desktop median (min–max) | M1 desktop median (min–max) | M0 mobile median (min–max) | M1 mobile median (min–max) |
|---|---|---|---|---|
| FCP | 2.316 s (2.288–2.652) | 2.032 s (2.028–2.288) | 14.988 s (14.916–15.012) | 3.864 s (3.860–3.876) |
| LCP | 2.316 s (2.288–2.652) | 2.032 s (2.028–2.288) | 14.988 s (14.916–15.012) | 3.864 s (3.860–3.876) |
| Intro completion | 2.263 s (2.236–2.480) | 1.992 s (1.989–2.118) | 14.930 s (14.856–14.939) | 3.821 s (3.815–3.824) |
| Observed CLS | 0 (0–0) | 0 (0–0) | 0 (0–0) | 0 (0–0) |

All approved local targets pass: logos ≤200 KB; median mobile LCP/intro ≤4 s; no overflow; editor/export regressions pass. Desktop LCP is also below the proposed 2.5-second local budget. Mobile headroom is limited, so rerun against Vercel after a separately authorized deployment rather than promising the same production figures.

An earlier diagnostic set found CLS from the standalone heading's margin collapsing through the body. The final build fixes it with a formatting context and removes the JS-starting heading from normal flow; the final six runs above all have CLS 0. Earlier diagnostic timings are not substituted into the final results.

### Responsive, accessibility, HTML, and editor verification

| Width | M0 document scroll width | M1 document scroll width | Result |
|---|---:|---:|---|
| 320px | 459px | 320px | Pass; narrow header wraps, controls and focused tooltips stay inside viewport. |
| 375px | 471px | 375px | Pass. |
| 390px | 485px | 390px | Pass; mobile visual/layout widths now agree and ordinary Rotate taps work. |
| 768px | 848px | 768px | Pass. |
| 1440px | 1465px | 1440px | Pass. |

- Raw built HTML contains the H1 and introductory paragraph. With JavaScript disabled, both are visible, there is one H1, and a concise JavaScript-required message explains customization/exports. The no-JS view does not pretend the editor is functional without JavaScript.
- Normal JS startup reuses the same introduction in the editor; no duplicate H1 or runtime error was observed after customization/export. Development StrictMode setup/cleanup and subsequent editor updates also retain exactly one introduction. A blocked-main-bundle test reveals the public fallback after three seconds.
- Every required width was checked with keyboard-focused header tooltips open; computed tooltip edges remain inside the viewport. No global overflow-hiding workaround is used.
- Native Card color/Nen Aura groups are named. Exactly one button in each has `aria-pressed=true`, and the state follows selection. Meaningful SVGs have accessible names; decorative fine print is hidden. Inactive preview-face hiding follows flips.
- Hint/footer contrast is approximately 6.09:1 against the studio background. Settled active aura button text: TEN 8.75:1, ZETSU 5.83:1, REN 6.14:1, HATSU 5.02:1. All tested values exceed 4.5:1.
- Name uppercase conversion, numeric filtering and native length limits, three designs, four auras, reset, flip, keyboard rotation, ordinary mobile tap/rotation, music toggles, and reduced motion pass. The intro's existing 1.8-second fade/hold/fade and static reduced-motion alternative remain.
- During the intro the app stays hidden/inert and audio has no source. After intro completion the source is assigned with `preload=none`, loop true, and volume 0.15. User-initiated playback still occurs in the toggle handler. Autoplay remains subject to browser policy, as before.

### Export regression evidence

Two complementary suites passed, totaling **18 successful exports**:

1. Repeat M0's nine checks: desktop blue plain/HATSU holographic/HATSU GIF; desktop TEN/ZETSU/REN holographic; mobile blue plain/HATSU holographic/HATSU GIF. All four holographic compositions are distinct. Representative desktop blue plain/HATSU PNG/HATSU GIF results were byte-identical to their M0 counterparts, including the plain PNG hash `05dfae551d0e428a4662f71ea8167fec667d526c548cfa543ecacea18157ff83`.
2. Complete all nine design×format combinations, additionally testing the existing numeric-name fallback on red:

| Design / selected aura | Plain PNG | Holographic PNG | Animated GIF |
|---|---|---|---|
| Green / TEN | Pass | Pass | Pass |
| Blue / ZETSU | Pass | Pass | Pass |
| Red / REN, name `123` fallback | Pass | Pass | Pass |

All PNGs are 2640×1872, opaque/nonblank, and holographic output differs from the corresponding plain image. All GIFs are 880×624, 60 changing frames, exactly 4,000 ms with distributed 60/70 ms delays (15 FPS average), repeat count 0 (infinite), and a smaller first/last-frame difference than quarter-cycle difference. Static card information remains fixed; sample outputs were decoded for validation. Expected filenames and capture-root cleanup pass.

Additional focused checks passed: two immediate export invocations produce only one operation/download; the button is disabled while processing; a simulated local encoder failure displays the existing error and unlocks controls; retry downloads a PNG successfully, clears the error, and leaves no offscreen capture roots. These tests alter only the ephemeral test page, not application source or production.

### Build, scope, and release gate

- `npm.cmd run build`: PASS (TypeScript and Vite production bundle).
- `npm.cmd run lint`: PASS. The pre-existing `HunterText.tsx` immutability error is resolved by the equivalent placement loop in the already-in-scope SVG accessibility component.
- `git diff --check`: PASS.
- Local build has the production HTTPS canonical; robots.txt and sitemap source are unchanged. Built endpoints and assets return expected content types locally. The favicon is a real 48×48 PNG. No route/hosting configuration was changed; local test-server 404 behavior is not claimed as post-deployment Vercel verification.
- Temporary browser harnesses/server and ignored screenshots were used locally; no test service, application dependency, analytics service, or production configuration was added.
- Historical audit hash, original logo/audio files, package manifests/lockfile, license face/style files, and export utility/worker code are unchanged.

**Unresolved / intentionally deferred:** Production verification and Google indexing/canonical selection require separately approved deployment/account access. Field CWV and INP remain unmeasured. Tests use desktop Chrome and mobile emulation, not physical iOS/Android hardware or all browser engines. Analytics and its observation window remain deferred. Local timings are not guaranteed production timings.

**Scope deviations:** None. Public copy is limited to the approved heading/introduction and no-JS explanation; no M2 instructional sections, gallery, social preview, structured data, new content page, tracking, publication, or outreach was created.

**Stop condition:** Implementation and local verification are complete. Await explicit user approval before deployment or M2; after an authorized deployment, verify production before closing the M1 release gate or claiming deployed SEO/performance improvement.
