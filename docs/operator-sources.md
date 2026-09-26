# Guides & Transport: sources and editorial decisions

Substantively reviewed 26 September 2026 for the local directory/planning milestone. Source review is not direct confirmation, inspection, endorsement or a reservation. No outreach, calls, messages or form submissions were made. Review dates remain internal.

## Coverage of the official directory

Baseline: [Pohnpei Tourism Office operator directory](https://visitpohnpei.travel/tour-operators/), retrieved through web browsing on 26 September 2026. Nine distinct business entries; all nine included. None duplicated, deferred or wholly unresolved. Some fields remain unresolved as noted below. Inclusion covers this directory, not every business in Pohnpei or the separate FSM Visitors Board list.

| Official entry / stable ID | Disposition | Fields and decisions |
| --- | --- | --- |
| Caroline Islands Air Inc. / `caroline-islands-air` | Included | Published phone/email and island-tour/outer-atoll-flight categories. No named destination, operating schedule, base address or guaranteed service inferred. Officially linked Facebook page could not be retrieved. |
| JADESA Tours / `jadesa` | Included; Nan Madol relation retained | Directory email and own-site phone/WhatsApp agree. Own tours page supports guided boats, kayaks, tide dependence and departure at Nihkawad. Departure location is labeled as such, not presented as an office address or inferred municipality. |
| Kenny’s Inc. / `kennys` | Included; Nan Madol relation retained | Directory supports diving/ocean trips and Nan Madol. Retain both fully printed phones and primary email. Parenthetical second email repeats Caroline Islands Air’s address; omit it. No confidently identified operator-owned site found in this review. |
| Nalikendinleng Tour / `nalikendinleng` | Included; Nan Madol relation retained | Directory supports Nan Madol, waterfalls and hikes; complete phone/email used. Do not route visitors to the listed personal Facebook profile when business contact actions suffice. No independently established office location. |
| Ocean Care Company / `ocean-care` | Included; Nan Madol relation retained | Retain directory’s fully printed phone and email. Omit abbreviated second number; do not infer a shared location or merge the business with Seabreeze Hotel from its email alone. |
| Pacific Island Adventures Co. (Club Pareo) / `club-pareo` | Included as one business | Diving/ocean services and full phone/email from directory. Club Pareo is the parenthetical name of this entry, not a second record. No explicit Nan Madol service. Officially linked Facebook page could not be retrieved. |
| Pohnpei Ocean Cruise / `ocean-cruise` | Included, paused; Nan Madol relation retained | Own website still suspends all tours and new bookings. Own email takes precedence over older directory address. Own footer supports Kolonia and the same phone. Public card describes contacts as updates, links to reopening news, and makes no availability claim. |
| Pohnpei Surf Club / `surf-club` | Included; Nan Madol relation retained | Directory supports diving/ocean trips, waterfalls, custom tours and boat charters. Phones, email and explicitly labeled WhatsApp retained. Own website timed out again: omit its website button, uncorroborated location and surf-specific category. Surfing inquiries on the existing activity guide are framed as questions. |
| Sunset View Car Rental / `sunset-view` | Included | Directory supports chauffeured tours/email. Own site supports rental service in Pohnpei and Chuuk. Own contact page supports the Pohnpei phone and Ohmine Street opposite Joy Hotel, Kolonia. Do not include Chuuk phone or a secondary number listed under both states. No explicit Nan Madol service. |

## Operator-owned sources

All reviewed 26 September 2026; each URL also appears in structured field evidence where used.

- https://myjadesa.com/pages/tours — rendered service, route-start and contact text. Retain no prices, durations, capacity or route-access guarantees. The contact form at https://myjadesa.com/pages/contact-us was inspected read-only; no submission.
- https://pohnpeioceancruise.com/en — live suspension banner overrides tours still advertised lower on the page. Contact: `pocmail.fm@gmail.com`, replacing official directory `poc@mail.fm`. Retain no personal health explanation. Status remains paused, unchanged from September 25.
- https://www.sunsetviewcarrental.com/ — rental inquiry form lets visitors specify Pohnpei or Chuuk. Button here says “Visit website”; no claim that submission confirms a booking.
- https://www.sunsetviewcarrental.com/contact-us.html — Pohnpei-specific location and phone. Retain tourism-directory email because the website’s rendered address is obfuscated. Do not invent a WhatsApp action from a phone number.
- https://pohnpeisurfclub.com/ and https://www.pohnpeisurfclub.com/ — web-tool timeout/inaccessible responses; direct HTTPS request to www timed out after 15 seconds. This is an access limitation, not proof the business or website has closed.
- Operator Facebook destinations reached from the official directory (Caroline Islands Air and Club Pareo) returned tool retrieval errors. No facts taken from inaccessible social pages and no social buttons added.

## Conflicts and omissions

A cross-check of [FSM Visitors Board’s Pohnpei page](https://www.fsmtravel.com/pohnpei-state) on 26 September 2026 exposed additional discrepancies. It does not expand this milestone’s official Pohnpei Tourism Office coverage scope:

- Kenny’s: FSM Visitors Board prints `320-4580`; the Pohnpei Tourism Office prints `320-4587` and `920-1353`. Preserve the state tourism office’s complete numbers; do not combine uncertain alternatives.
- Ocean Care: FSM Visitors Board prints `320-8559` and another email. This may explain the state directory’s abbreviated `8559`, but is not operator-owned confirmation. Keep the fully printed state-directory `320-2065` and published email; retain the discrepancy for release review.
- Club Pareo: FSM Visitors Board prints `pareo@clubcircle.net`; Pohnpei Tourism Office prints `pareo@club-circle.net`. Retain the state tourism office spelling, also provide its matching phone, and flag email delivery as unconfirmed. Do not silently alter the domain.
- No independently supported office location was found for Caroline Islands Air, Kenny’s, Nalikendinleng, Ocean Care, Club Pareo or Surf Club. Omit location fields rather than borrow an accommodation address, use a mailing address as a meeting point, or infer one from a business name.
- No business contact was tested by placing a call, sending email/WhatsApp or submitting a form. A syntactically valid URL is not proof of delivery or current service.

## Shared records and visitor paths

`src/data/operators.ts` is the shared source of truth: stable IDs, service categories, contact fields, sources, field provenance, review dates and paused state. `nanMadolOperators` derives the six related businesses from explicit destination relationships. Both rendered surfaces use `OperatorContacts.astro`. Existing `/nan-madol#local-guides` and all six business anchors remain intact. No contact details are copied into the planning guide.

Directory ordering is alphabetical. Filters group published services; membership is not a booking or availability check. Ocean Cruise remains visible, with a pause notice, in relevant groups. Search and filter UI appears only after JavaScript initializes; without JavaScript, all nine records and contacts remain available. Service-query links fall back to the full directory without JavaScript; a business fragment takes priority over an incompatible filter.

The new Plan Your Visit page is original editorial guidance, not an itinerary package or booking tool. Its five steps link existing arrival/entry, accommodation and Nan Madol guides with the directory. It deliberately adds no new entry rules, prices, schedules or estimated trip durations. Outer-island guidance is attributed to https://visitpohnpei.travel/pohnpei-outer-atolls/ (read 26 September 2026). Official help links use https://visitpohnpei.travel/contact-us/ (read the same date).

Shared navigation/footer and travel guide navigation now expose the directory and planning page. Contextual links were added to stays and practical travel guidance. The diving page’s unsupported single-provider promotion was replaced by neutral directory guidance. The outer-atoll page’s newsletter dead end now points to flight contacts, without promising a specific route. These are referral changes; full audits of those two older experience guides remain future work.

## Maintenance and local review

Before publication, recheck paused status and the unresolved contact differences above. Review business records quarterly or when corrections arrive. Advance a review date only after checking relevant sources. No image URLs, image files, asset processing or image dependencies were changed.

Local preview and validation are recorded in the PRD progress snapshot. Chromium loaded all eight distinct external web destinations on the new pages with HTTP 200 and matching page content, including the tourism pages that returned a 403 to a raw Python request. This distinguishes a client access block from a broken link. The Browser plugin was unavailable; installed Playwright was used. Broader release work, including Waterfalls & Jungle and the homepage’s simulated newsletter, remains open. This milestone is not a release approval.

### Adventure-guide follow-up — 26 September 2026

Added Surf Club's explicitly published surfing/P-Pass and Ahnd connections from [Eco-Adventure surfing](https://www.pohnpei-adventure.com/surfing/) and [Ahnd & Pakin](https://www.pohnpei-adventure.com/atolls/). These are attributed inquiries requiring current confirmation, not guaranteed departures. The atoll reference is dated 2021. No Pakin service, specific airline route, or named hiking route has been inferred. General activity lists use existing service categories; contacts and pause status are unchanged. See `docs/adventure-sources.md` for the audit, omitted claims and remaining limits.
