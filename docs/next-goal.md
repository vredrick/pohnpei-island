# Next goal: Guides & Transport and Plan Your Visit

Status: Implemented and validated locally on 26 September 2026; ready for owner review. No push or deployment. See the PRD implementation-progress snapshot for validation and the review checklist; see `docs/operator-sources.md` for research and unresolved contact details. The goal prompt below is preserved as the acceptance scope.

## Goal prompt

Build a complete Guides & Transport directory and an actionable Plan Your Visit guide in `/home/vredrick/pohnpei-landing`, ready for local owner review, following `PRD.md` and its implementation-progress notes.

1. Research the current Pohnpei Tourism Office operator directory and relevant operator-owned sources. Account for every official entry as included, duplicate, deferred, or unresolved with a recorded reason. Preserve source URLs, substantive review dates, status changes, and conflicting details in internal source notes. Do not treat a published listing as direct confirmation or endorsement.
2. Build `/tour-operators` with original summaries, documented service categories, source-backed locations, and usable published contact actions. Use neutral ordering; add service filters only if useful, and retain the full directory without JavaScript. Omit unsupported fields and distinguish paused services clearly. Do not guess prices, schedules, contact details, or access guarantees.
3. Consolidate the existing Nan Madol operator records into a shared source of truth used by both the directory and the Nan Madol page. Preserve stable IDs and existing anchors. Associate destinations with operators only where sources establish the service; avoid duplicating contact details across pages.
4. Replace the disabled tool at `/plan-your-trip` with an original, practical planning sequence: choose interests, check flights and entry guidance, arrange accommodation, contact relevant guides or transport, and reconfirm the plan. Link to Getting Here, Travel Essentials, Places to Stay, Nan Madol, and the new directory. Any suggested itineraries must be labeled as ideas, with no implied package availability or invented durations.
5. Update shared navigation and relevant guide links so visitors can discover the directory and move from planning to an appropriate business contact. Preserve working routes and the independent-site identity with official tourism referrals.
6. Keep the current Astro stack, editorial design, and existing images. Keep source-review dates internal. No booking backend, payments, outreach, image editing, pushing, or deployment is part of this goal.
7. Run the production build and meaningful checks of directory data, local destinations and anchors, contact URL formats, mobile/desktop layout, keyboard navigation, filters if present, and essential no-JavaScript behavior. Check external destinations where possible and report blocks or timeouts separately from confirmed failures. Do not send messages, submit bookings, or place calls to test contact actions.
8. Update `PRD.md` progress and internal source notes. Provide a local preview with a short owner-review checklist, test results, and remaining uncertainties. Preserve unrelated working-tree files. Leave implementation changes available for review; do not commit them unless separately requested.

Done means a visitor can browse the source-backed guide/transport directory, identify a relevant provider, open a meaningful contact destination, and follow a useful trip-planning path without encountering the old disabled planner. The existing Nan Madol operator path must continue working. This milestone does not claim the entire first content release is complete.

## Remaining work after this goal

- Build Waterfalls & Jungle to resolve the missing featured route; audit the remaining experience guides.
- Complete dining, shopping, about-Pohnpei, culture, history, and About this Guide content.
- Remove the simulated newsletter signup and finish site-wide navigation, accessibility, metadata, sitemap, and crawler guidance.
- Obtain owner release review and separate deployment authorization.
