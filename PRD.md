# PohnpeiIsland.com — Independent Pohnpei Guide

Status: Implementation in progress; completed milestones are available locally for owner review. No deployment of these milestones has been performed.

Date: September 25, 2026

Progress updated: September 26, 2026

## Implementation progress

This snapshot supersedes the original baseline and current-state labels below, which describe the September 25 discovery review.

| Workstream | Local status |
| --- | --- |
| Phase 0: scope | Owner authorized the Nan Madol, accommodation, travel-guide, Guides & Transport / Plan Your Visit, and adventure-guide milestones. Publisher identity and corrections contact remain open. |
| Phase 1: inventory | Completed for those milestones in `docs/nan-madol-sources.md`, `docs/accommodation-sources.md`, `docs/travel-sources.md`, `docs/operator-sources.md`, and `docs/adventure-sources.md`; the site-wide inventory remains incomplete. |
| Phase 2: Nan Madol visitor path | Implemented: rewritten guide, six related operator listings, published contact actions, independent-site wording, official tourism referral, and navigation/accessibility improvements. |
| Phase 3: accommodation | Implemented: ten source-listed properties, usable contact actions, search and filters, and planning links. |
| Phase 3: getting here and essentials | Implemented: expanded arrival and practical guides, shared source records, and internal conflict notes. Previous milestone checks passed the production build and responsive, keyboard, and no-JavaScript browser checks. |
| Phase 3: guides and planning | Implemented: all nine official operator entries, shared Nan Madol contacts and stable anchors, service filters with a complete no-JavaScript directory, paused-service notices, five practical planning steps, and contextual navigation. Sources and unresolved contact differences are recorded in `docs/operator-sources.md`. |
| Phase 3: adventure guides | Implemented: Waterfalls & Jungle, audited Diving & Surfing and Outer Islands, source-supported shared operator connections, and homepage/navigation/planning entry points. Sources and removed/qualified claims are recorded in `docs/adventure-sources.md`. Existing diving hero asset returns 404; image references preserved per owner direction. |
| Phase 3: remaining release work | Dining and shopping directories; missing destination/culture/history/about pages; remaining existing-page audits; newsletter cleanup; site-wide links and search metadata. |
| Phases 4 and 5 | Deferred: photography improvements, interactive guide, and partnership exploration. |

The disabled `/plan-your-trip` tool has been replaced. The `/waterfalls-and-jungle` route now exists and all audited internal destinations resolve. Remaining release issues include the homepage newsletter's simulated success and a preexisting diving hero image URL returning 404. The first-release checklist below remains a release-wide gate, not a declaration that local milestones are unfinished.

**Recommended next milestone:** build sourced Dining and Shopping & Crafts directories, with direct business contacts and useful navigation. Remaining release work also includes about-Pohnpei/culture/history/About this Guide pages, publisher identity and corrections contact, newsletter cleanup, the broken diving hero asset, and site-wide accessibility/search metadata. The completed local Guides & Transport / Plan Your Visit brief remains in [docs/next-goal.md](docs/next-goal.md); completion of that goal is not completion of the whole first release.

### Adventure guides validation — 26 September 2026

- Built all three authorized deliverables using Pohnpei Eco-Adventure Guide's SCUBA, surfing, hiking, waterfalls and island articles, cross-checked with the tourism office. Full claim decisions, source ages and uncertainty boundaries: [docs/adventure-sources.md](docs/adventure-sources.md).
- `npm run build` passed for ten routes; `git diff --check` passed. No dependencies changed. All 65 unique local route/fragment destinations across the site resolve, including the formerly missing waterfall page. The older validation's missing-route finding below is now resolved.
- Playwright 1.58.2 / Chromium at `http://localhost:4322` tested the three guides at 320, 390, 768, 901 and 1440 px, each 1000 px high. Browser plugin not available; used the existing Playwright installation without adding dependencies. Page identity, meaningful content, absence of framework overlays, horizontal layout, heading/header boundaries, section anchors and keyboard navigation passed. Mobile ocean hero clipping was found and corrected by constraining its aspect-ratio container to the viewport width.
- Browser journeys passed: Home → Waterfalls & Jungle → hiking-filtered directory; Plan Your Visit → Diving & Surfing → Surf Club → Ahnd guide → flight contact; conflicting service filter/business fragment → visible Surf Club → surfing guide. Paused operators remain labeled. At 320 and 1440 px with JavaScript disabled, all three guides and their directory contact paths remain usable.
- All 20 distinct external web destinations across the activity pages and directory returned HTTP 200 with matching titles in Chromium. This includes all 11 Eco-Adventure source articles. No contact messages, calls or form submissions were made.
- Shared-data checks retain nine operators, six Nan Madol relationships and matching contact links. New specific relationships are limited to the explicit Surf Club surfing/P-Pass and Ahnd references; no named hiking route, Pakin operator or airline/island route is inferred.
- **Open asset finding:** the existing `diving-surfing-hero.jpg` Cloudinary URL returns HTTP 404. This is the sole observed console resource error on the guide pages; no application runtime errors or other console warnings occurred. The outer-atoll image loads. All existing tracked image tags, URLs and CSS image references match the prior commit; the waterfall page adds no image. Restore or replace the diving asset in a separately authorized image task.
- Screenshot evidence and temporary QA scripts/results are outside the repo under `/tmp/adventures-*`. Desktop and mobile screenshots were visually reviewed. Two temporary-script issues (serializing a locator and checking navigation before it completed) were fixed; the final browser run passed with the documented asset exception.
- Preview continues on server port 4322; use Codex/SSH forwarding as described below. Validation was completed locally; the owner subsequently authorized committing and pushing this milestone. No deployment was performed during validation. Existing untracked archives/drafts remain untouched. Testing covers Chromium and the stated widths, not physical devices or field conditions.

Adventure-guide owner review: read the individual source links and qualifications, try the three operator journeys, and review the remaining diving-image issue. Bookings, contact delivery, current trail conditions and specific transport availability remain unverified.

### Guides & Transport / Plan Your Visit validation — 26 September 2026

- `npm run build` passed for all nine routes; `git diff --check` passed. No dependencies changed.
- Data checks passed for all nine distinct official entries, alphabetical order, field provenance/review dates, seven service categories, six explicit Nan Madol relationships, paused status and omitted ambiguous contacts. Phone/email/WhatsApp URL syntax passed; the six Nan Madol contact sets exactly match the full directory.
- Playwright 1.58.2 with installed Chromium tested both new pages at 320, 390, 768, 901, 1024 and 1440 px (1000 px height). Page identity, meaningful content, no error overlay, no relevant console errors/warnings, screenshots, no horizontal overflow, header overlap, all service filters, combined search, empty/reset states, hash recovery, keyboard skip links/menu/Escape and planning anchors passed. The Browser plugin was unavailable; no browser dependencies were installed.
- Browser journey passed: Plan Your Visit → hiking service filter → Nan Madol visiting guide → existing operator contacts → JADESA's actual tours website. No communication or booking action was submitted.
- JavaScript-disabled checks at 320 and 1440 px passed: all nine directory businesses, all six Nan Madol listings, contact links, planning content and quick navigation remain available.
- All 46 unique local route/fragment destinations were audited across nine built pages: 45 valid; the sole missing destination is the preexisting `/waterfalls-and-jungle` link on the diving page. New page paths and preserved Nan Madol anchors all pass. This known release blocker is the next milestone.
- All eight distinct external web destinations on the two new pages loaded with HTTP 200 and matching content in Chromium. Research-only Surf Club website requests timed out, and two Facebook source fetches were blocked/unavailable; these were omitted as website actions. Telephone/email/WhatsApp delivery, business availability and bookings are untested by design. Contact discrepancies remain documented for publication review.
- Compared all tracked source image tags, Cloudinary URLs and CSS image references against the prior commit: unchanged. Existing archive/draft files remain untouched. No push or deployment of this milestone.

Local production preview: `npm run preview -- --host 0.0.0.0 --port 4322`, at [Guides & Transport](http://localhost:4322/tour-operators) and [Plan Your Visit](http://localhost:4322/plan-your-trip). For remote access, use Codex/SSH port forwarding to server port 4322; the browser's local forwarded port may differ. Direct access to the server's public IP timed out from the owner's device even though server-side checks passed. A temporary HTTPS tunnel was also validated as a fallback. Preview is for owner review and must be restarted if its process stops.

Owner review:

1. Browse the directory on phone and desktop; try a service filter, a business-name search and reset.
2. Review the paused Ocean Cruise listing and the direct-contact presentation, including the contact uncertainties in the source ledger.
3. Follow the five planning steps into accommodation, entry guidance, Nan Madol and relevant providers. Confirm the tone and questions fit the intended visitor.
4. Review the preserved Nan Madol guide/contact path and the new navigation links. Publication remains a separate decision.


Keep existing images unchanged and source-review dates internal, following the owner's subsequent direction. Do not add public review-date badges. Production publication remains a separate step after owner review.

Product: [PohnpeiIsland.com](https://pohnpeiisland.com/)

Primary tourism reference: [Visit Pohnpei](https://visitpohnpei.travel/)

## 1. Product direction

PohnpeiIsland.com is an independent, locally grounded guide that helps people discover Pohnpei, understand its culture and places, plan a visit, and connect directly with local businesses.

The site will complement the Pohnpei Tourism Office's existing work through useful original writing, organized information, and clear referrals. A formal tourism-office partnership is a future goal. The site must describe its present independence accurately and must not imply an existing endorsement or partnership.

The immediate improvement is to turn existing destination stories into a dependable guide: readers should be able to understand a place, learn how to visit it, and find an appropriate business to contact.

### Agreed direction

- Expand and improve existing content using accurate, attributed source material.
- Use the official tourism website as the primary destination and business-directory reference.
- Write original descriptions and explanations around sourced facts.
- Direct visitors to businesses through published contact methods and external websites.
- Preserve the site's Pohnpei focus.
- Leave images unchanged during the initial content and directory work.
- Later, improve existing photographs using image-editing capabilities while preserving the actual subjects and locations.
- Explore an interactive visual guide in a later phase.

### Working assumptions to confirm during review

- Cover Pohnpei State, centered on the main island, with outer islands presented separately and with their own cultural and logistical context.
- Launch in English using the current editorial design and Astro stack.
- Use directory category pages first; individual business pages are optional when enough reliable content exists.
- Start with direct referrals rather than collecting booking requests on this website.

This document authorizes no implementation, outreach, image editing, or deployment. Those activities follow agreement on the plan and a subsequent instruction to proceed.

## 2. Audience and outcomes

| Audience | Need | Desired outcome |
| --- | --- | --- |
| People discovering Pohnpei | Understand where it is and what makes it worth exploring | Find a relevant place, story, or experience |
| Visitors actively planning | Find reliable logistics, accommodation, and operators | Reach a useful business contact or official information source |
| Visitors already on island | Find food, transport, shops, and nearby activities | Get directions or contact a business quickly on a phone |
| Pohnpeians, diaspora, and interested readers | See the island represented with depth and respect | Explore culture, history, communities, and contemporary life |
| Local businesses | Be discoverable with accurate public information | Receive relevant inquiries through their existing channels |

## 3. Current baseline

The September 25 review examined public page content and links plus the local source. It was not a full rendered-browser, accessibility, or performance audit. Hostinger account tools were unavailable; hosting-account state was not inspected.

The repository contains eight Astro pages: home, Nan Madol, diving and surfing, outer atolls, getting here, places to stay, travel information, and trip planning. Some project documentation still describes an earlier single-page version and should be reconciled during implementation.

| Finding | Product implication | Planned response |
| --- | --- | --- |
| Nan Madol and diving/surfing already contain substantial content | There is a useful foundation, but claims need verification | Audit, rewrite, and connect these pages to relevant operators |
| Accommodation and trip planning contain placeholder tools | Visitors cannot complete the next planning step | Replace placeholders with useful listings and planning guidance |
| Links point to `/waterfalls-and-jungle`, which returned 404 | A featured experience leads to a dead end | Build the page or correct its links before release |
| The newsletter handler displays success without saving an address | The interface promises a service it does not deliver | Remove the signup UI from the first release unless a working service is separately commissioned |
| Social links use placeholder destinations | Visitors cannot reach the intended accounts | Supply confirmed destinations or omit those links |
| Reviewed pages lack outbound business and official tourism links | Readers cannot readily act on the information | Add contextual referrals and a prominent official tourism link |
| Airline information conflicts between pages | Repeated facts can drift | Use a shared, sourced record for repeated travel facts |
| Existing copy includes precise historical, seasonal, price, access, and activity claims | Confident wording can exceed the available evidence | Verify each material claim; qualify, omit, or hold unresolved details |
| Sitemap and robots endpoints returned 404; metadata is incomplete | Search and sharing need finishing | Include sitemap, crawl guidance, canonical URLs, and page-specific sharing metadata |

The local reference archive includes 44 source-page records and 87 image files. It is research material, not a current verified database or proof of image-use permission. Revisit live sources before publishing new copy or listings.

## 4. Scope and release boundaries

### First public content release

- Correct and expand the eight existing pages.
- Add dedicated about-Pohnpei, culture, history, waterfalls/hiking, dining, shopping, tour-operator, and about-this-guide pages.
- Publish categorized business listings with usable contact actions.
- Add contextual links between destinations, practical guidance, and relevant businesses.
- Identify the site as independent and link to the official tourism office.
- Remove misleading or unfinished interaction paths.
- Complete basic navigation, accessibility, and search metadata work.

### Later phases

- Improve existing photographs, with before/after review.
- Add deeper community stories and local contributions.
- Develop an interactive visual guide, potentially an illustrated map with places and itinerary assembly.
- Consider newsletter delivery, business submissions, translations, or richer booking integrations if a clear need and maintenance capacity emerge.
- Explore a formal partnership with the tourism office.

### Outside the first release

Payments, live availability, reservations, user accounts, reviews, business dashboards, automated publishing of scraped material, and an AI travel chatbot are not required. No broad redesign, hosting migration, or image-generation work is included.

## 5. Information architecture and page-by-page plan

Navigation should make discovery and practical planning equally accessible. Suggested groups are Discover Pohnpei, Things to Do, Local Businesses, and Plan Your Visit. About this Guide and Official Tourism Information should be easy to find in the footer and relevant pages.

Preserve existing working URLs. The following new paths are proposed, not yet implemented.

| Page / route | Current state | Planned content | Primary references |
| --- | --- | --- | --- |
| Home `/` | Existing | Clear positioning, concise introduction, experience pathways, local-business entry points, official tourism referral | S1, shared verified facts |
| About Pohnpei `/about-pohnpei` | Homepage section only | Geography, island/state distinction, communities, language, contemporary life, orientation | S2 |
| Culture `/culture` | Homepage section only | Living traditions, respectful participation, etiquette, local perspectives | S3, S12, local review where needed |
| History `/history` | Partial material on Nan Madol page | Sourced timeline and wider island history, clearly distinguished from oral traditions | S4, S15 |
| Nan Madol `/nan-madol` | Existing long-form page | Historical context, access, permissions, preparation, relevant guides | S5, S10, S15 |
| Waterfalls & Jungle `/waterfalls-and-jungle` | Missing; linked publicly | Named places with sourced access information, hiking preparation, relevant guides | S6, S10 |
| Diving & Surfing `/diving-and-surfing` | Existing long-form page | Separate activity guidance, sourced seasonality, conditions-dependent access, multiple operators | S6, S10, S12, operator sources |
| Outer Islands `/outer-atolls` | Brief existing page | Distinct islands and cultures, nearby versus remote journeys, permission and transport context | S7, S10, S12 |
| Places to Stay `/places-to-stay` | Placeholder finder | Accommodation directory with location and contact information | S8 |
| Dining `/dining` | Missing | Restaurants, cafés, food stands, markets, original food context | S9 |
| Guides & Transport `/tour-operators` | Missing | Tour operators and listed transport services grouped by service | S10 |
| Shopping & Crafts `/shopping` | Missing | Shops, makers, crafts, markets, public contact details | S11 |
| Getting Here `/getting-here` | Existing brief guide | Sourced route overview and links to current airline information | S13, airline sources |
| Travel Information `/travel-info` | Existing brief guide | Practical essentials, etiquette, connectivity, getting around, links to responsible authorities | S12; current authority sources for entry and health matters |
| Plan Your Visit `/plan-your-trip` | Placeholder planner | Practical planning sequence, relevant directory links, editorial itinerary suggestions | S6–S13 |
| About this Guide `/about` | Missing | Publisher identity, independence, source approach, corrections channel, official tourism referral | Owner-supplied identity and contact; S14 |

Suggested itineraries must be labeled as ideas, not available packages. Do not invent journey times, prices, opening hours, or guaranteed access to make an itinerary look complete.

## 6. Core visitor journeys

### Discover a place and find a guide

Home → Nan Madol → understand the site and visiting requirements → see relevant operators → open a published contact method or operator website.

### Plan a stay

Getting Here → check the airline's current route information → Places to Stay → review location and published facilities → contact the property directly.

### Explore locally

Dining or Shopping → browse businesses by category/location → read concise details → get directions or contact the business.

### Find official information

Any practical guide → clearly labeled official tourism or responsible-authority link → consult the current source. Readers should understand which organization they are visiting.

No primary visitor journey should terminate at a disabled search box, fake confirmation, missing page, or generic “coming soon” message.

## 7. Content and source requirements

### Source hierarchy

1. **Official tourism baseline:** use Visit Pohnpei for destination context and published listings.
2. **Responsible primary source:** check operators for their services and contacts, airlines for routes and baggage rules, UNESCO for heritage designation, and the relevant authority for entry or other regulated requirements.
3. **Local knowledge:** incorporate owner-approved local contributions for cultural nuance and experience, with attribution and review appropriate to the material.

An official listing is evidence that information was published, not proof that every service, contact, or price is still current. Do not label a business “verified,” “recommended by the tourism office,” or “partner” based solely on inclusion in a directory.

### Editorial rules

- Write original copy informed by the sources; avoid copying long passages or mechanically paraphrasing the official site page by page.
- Separate factual statements, practical suggestions, oral traditions, and editorial interpretation.
- Keep Pohnpei's people and present-day life central. Avoid portraying communities as frozen in time or treating cultural participation as automatically available to tourists.
- Preserve correct names and spellings; explain alternative names when supported.
- Avoid unsupported superlatives, invented first-hand experience, visitor counts, ratings, and claims that an activity is always safe or accessible.
- Treat precise dive instructions, tides, site access, fees, and transport schedules as details requiring appropriate current sources.
- When credible sources conflict, record the discrepancy and seek clarification; qualify or omit the disputed detail until resolved.
- Link sources close to practical information, with a concise source/update note rather than overwhelming readers with research metadata.

### Research-to-publication workflow

For each page: inventory existing claims → read current sources → record facts and conflicts → draft original copy → check factual support and cultural framing → connect related places/businesses → review before publication.

AI may help organize and write the material. Generated text is never evidence for a fact.

## 8. Business directory requirements

Seed the directory from the official accommodation, dining, shopping, and tour-operator pages. Reconcile the full source list at implementation time; do not make an old listing count a permanent requirement.

### Listing fields

| Field | Requirement |
| --- | --- |
| Stable ID and name | Required; one underlying business record can appear in multiple categories |
| Category and services | Required; service tags must reflect published information |
| Location | Municipality/island and address detail when available; do not invent precise coordinates |
| Original summary | Concise description without unsupported endorsements or amenities |
| Contact methods | Public business phone, email, website, social page, or WhatsApp when explicitly published |
| Map link | Use an identified business/location link; check it matches the named business |
| Related places | Link destinations only when the business is documented to serve them |
| Sources and dates | Source URL, date reviewed, and provenance for changing fields |
| Verification status | Distinguish source-reviewed from directly confirmed; preserve unresolved conflicts |
| Images | Existing imagery only in this phase; retain source/credit information |

Use “Visit website,” “Call,” “Email,” “WhatsApp,” and “Directions” as appropriate. Use “Book on operator website” only when the destination actually supports booking. A social page or email address is an inquiry channel, not a confirmed reservation.

Missing fields should be omitted cleanly. A listing with no usable contact or directions should remain in the research queue until it can provide a meaningful next step. Account for excluded or unresolved source entries in the editorial checklist.

Default ordering should be neutral, such as alphabetical within category. Feature businesses by relevance to the destination, without inventing a ranking. Do not imply a commercial relationship.

Category browsing is sufficient for launch. Simple location/service filters may be added if they materially improve browsing, with meaningful empty states and the complete list accessible without JavaScript.

## 9. Content structure and implementation approach

Retain Astro and the existing visual foundation. A backend or CMS is not needed for the initial release.

Proposed content types:

- **Place:** stable ID, slug, name, island/municipality, category, description, visiting details, source references, related business IDs, existing image references.
- **Business:** the listing fields above, with stable IDs shared across directories.
- **Guide:** title, slug, editorial body, related places/businesses, sources, last substantive review date.
- **Source:** publisher, URL, retrieval/review date, relevant claim or field, review status, conflict notes.

Store these as structured, validated project content using an implementation compatible with the installed Astro version. Keep public copy separate from internal research notes. Shared records should supply repeated contact details and facts so changes do not require editing several pages independently.

An image record should be able to retain its original source and later edited version. No asset migration or image processing is required now.

## 10. Presentation, accessibility, and search

- Preserve the established typography, palette, and editorial character while improving information hierarchy.
- Make business contact actions easy to use on phones; wrap long names and addresses without overflow.
- Provide meaningful headings, keyboard-accessible navigation, visible focus states, adequate contrast, descriptive links, and useful alternative text.
- Ensure essential content and contacts remain available without client-side JavaScript.
- Support reduced-motion preferences in existing animated sections.
- Give each published page a unique title, description, canonical URL, and appropriate sharing metadata using existing suitable images.
- Include published pages in a sitemap and provide intentional crawler guidance. Missing `robots.txt` alone does not imply that search engines cannot index the current site.
- Use structured data only when it accurately represents visible content; never fabricate ratings or reviews.
- Preserve existing routes and map any necessary URL changes to redirects.

## 11. Images and future visual guide

### Photography phase: deferred

The owner prefers improving existing photographs rather than generating replacement scenes. Later edits can address exposure, color, noise, sharpness, resolution, and cropping. Preserve recognizable geography, architecture, people, and business facilities; do not add amenities or alter what visitors can expect to find.

Keep originals, identify source/usage permissions, and review before/after versions. Retain accurate captions and credits. Image availability in the archive does not establish permission to republish it.

### Interactive guide phase: exploratory

Potential experience: visitors explore an illustrated or geographic map, open place details, find related businesses, and assemble an itinerary. The format is still undecided.

Prepare for this through stable place IDs, source-backed locations, categories, and business relationships. Do not collect precise coordinates by guessing. A future visual interface must have an equivalent accessible list and must not imply live transport, route safety, or booking availability.

This phase needs its own concept review and scoped specification after the information foundation is useful.

## 12. Delivery phases

| Phase | Deliverables | Completion condition |
| --- | --- | --- |
| 0 — Agree on scope | This PRD, geographic scope, publisher/contact identity, first batch | Owner selects the implementation scope |
| 1 — Build the content inventory | Claim audit for existing pages, refreshed official-source inventory, normalized business records, unresolved-items list | Each planned page has sources and a clear content brief; conflicts are visible |
| 2 — Establish one complete visitor path | Revised Nan Madol page, relevant operator listings/contact actions, independent-site identification, official tourism referral | A reader can move from understanding Nan Madol to contacting an appropriate listed operator |
| 3 — Complete the first content release | Remaining page expansions and directories, useful planning pages, removal of broken/placeholder paths, navigation and metadata | First-release acceptance criteria below are met |
| 4 — Improve photography | Selected existing images edited and reviewed | Approved improvements preserve factual appearance and original assets |
| 5 — Explore visual planning and partnership | Interactive-guide concept; separately agreed partnership approach | Owner chooses the next product scope; any partnership claim reflects an actual agreement |

The recommended first implementation batch is Phases 1 and 2, including fixes to misleading interactions encountered in that path. Prepare a preview for review before publishing. Do not send outreach or deploy as part of writing or reviewing this plan.

## 13. Acceptance criteria for the first content release

- [ ] Site identity clearly states independence and provides a working official tourism link.
- [ ] All existing pages have been audited for material factual claims and revised where necessary.
- [ ] Every published directory record has a source and review date, and at least one meaningful contact/directions action.
- [ ] Official-source entries are accounted for as published, duplicate, deferred, or unresolved with a recorded reason.
- [ ] No source-reviewed listing is mislabeled as directly confirmed or formally endorsed.
- [ ] Place-to-operator relationships reflect documented services.
- [ ] The accommodation and planning pages provide usable information instead of placeholder tools.
- [ ] Featured waterfall links resolve to a useful page.
- [ ] Newsletter and social controls do not make unsupported promises or lead to placeholder destinations.
- [ ] Internal links and in-page anchors work; external business destinations have been checked and known failures handled.
- [ ] No unsupported prices, hours, access guarantees, ratings, or precise locations are introduced.
- [ ] Mobile and desktop review confirms readable content, usable navigation, and contact actions.
- [ ] Keyboard navigation and essential no-JavaScript paths work.
- [ ] Page metadata, canonical URLs, sitemap, and crawler guidance are consistent.
- [ ] Existing photography remains unchanged in this release.
- [ ] The production build succeeds and relevant content-validation checks pass.
- [ ] The owner has reviewed the intended release before a separately authorized deployment.

Validation should focus on meaningful behavior: data integrity, internal links, contact destinations, directory relationships, and complete visitor journeys. Use browser checks during implementation; do not treat this content audit as evidence of tested visual behavior.

## 14. Maintenance and success measures

Proposed maintenance cadence: review business contacts and transport guidance quarterly and before major content releases; review stable cultural/history content annually or when corrections arrive. Assign an owner before launch. Display “last reviewed” only after a substantive source check, not every build.

Provide a corrections contact once the owner supplies the address. Publishing that address and conducting outreach are separate actions. Submitted corrections should be reviewed before publication.

At release, measure completeness and usability through the acceptance criteria. If lightweight analytics are later approved, track outbound business actions, official-source referrals, and movement from destination pages to directories. Establish a baseline before setting traffic or conversion targets. An outbound click is not a confirmed booking; business revenue cannot be inferred from it.

## 15. Remaining owner decisions

These do not prevent reviewing this plan:

1. Confirm Pohnpei State coverage, with the main island prioritized and outer islands treated separately.
2. Supply the publisher name and public corrections/contact address for About this Guide.
3. Confirm whether the first preview should be Nan Madol plus guides, as recommended, or accommodation plus practical planning.
4. Identify any local cultural reviewers or existing tourism-office relationship that should inform later work.

Interactive-guide format, photography selection, analytics, newsletter service, and partnership outreach can be decided later.

## 16. Source register

These are research entry points, not a declaration that every claim on every source has been verified. The homepage, operator page, and official sitemap were revisited while preparing this PRD. The remaining links include pages examined during the September 25 discovery pass and destinations identified from the official navigation or local archive. Recheck relevant pages during implementation.

| ID | Source | Intended use |
| --- | --- | --- |
| S1 | [Visit Pohnpei](https://visitpohnpei.travel/) | Official tourism identity and destination overview |
| S2 | [About Pohnpei](https://visitpohnpei.travel/culture/about-pohnpei/) | Island context and geography |
| S3 | [Culture](https://visitpohnpei.travel/culture/) | Cultural context; research entry point |
| S4 | [History](https://visitpohnpei.travel/history/) | Historical context; research entry point |
| S5 | [Nan Madol](https://visitpohnpei.travel/nan-madol-pohnpei/) | Destination and visit information |
| S6 | [Adventures](https://visitpohnpei.travel/adventure/) | Activities and destination inventory |
| S7 | [Outer Islands](https://visitpohnpei.travel/pohnpei-outer-atolls/) | Outer-island context |
| S8 | [Accommodation](https://visitpohnpei.travel/accommodations-and-lodging/) | Published lodging listings |
| S9 | [Dining](https://visitpohnpei.travel/dining-in-pohnpei/) | Published food and dining listings |
| S10 | [Tour Operators](https://visitpohnpei.travel/tour-operators/) | Published guides and transport services |
| S11 | [Shopping](https://visitpohnpei.travel/shop-pohnpei/) | Published shops and crafts listings |
| S12 | [Visitor Travel Information](https://visitpohnpei.travel/visitor-travel-information/) | Practical guidance and etiquette |
| S13 | [Getting to Pohnpei](https://visitpohnpei.travel/getting-to-pohnpei/) | Route overview and airline references |
| S14 | [Tourism Office Contact](https://visitpohnpei.travel/contact-us/) | Official office identity and referral |
| S15 | [UNESCO: Nan Madol](https://whc.unesco.org/en/list/1503/) | Heritage designation and historical reference |
| S16 | [Official Sitemap](https://visitpohnpei.travel/sitemap/) | Additional source discovery |

Local implementation references: `src/pages/`, `src/components/DispatchForm.astro`, `src/components/Footer.astro`, `src/layouts/BaseLayout.astro`, and the reference archive under `content/`.
