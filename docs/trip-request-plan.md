# Plan: one trip-request path ("we set it up with locals")

Status: Plan only (21 October 2026). Nothing is built yet. The owner will review it and build it from a cloud session.

## The idea, in the owner's words (summarised)

The site should do one thing for a visitor who doesn't know Pohnpei: **let them say what trip they want, and the owner sets it up with the right local people.** Many Pohnpei guides, boat operators and hosts have no website and are hard to reach from abroad. The owner can contact them directly, in the local language. A visitor shouldn't have to piece a trip together across platforms.

This is still a **demand test**. The site collects requests (what they want, who's coming, when, budget), and the owner follows up by hand. No payments, no instant booking, no named providers in the flow.

## What's confusing today

1. **Two planning pages that look the same.** `/plan-your-trip/` is a five-step DIY reading guide. `/build-your-stay/` is the request form. Both are in the menu, and the Plan page opens with two competing "plan" buttons.
2. **Three different step lists.** The homepage has 4 planning steps, `/plan-your-trip/` has 5 different ones, and the builder has 6 more.
3. **The real offer is hidden.** Every main "Plan your visit" button goes to the DIY reading. The request form is only reachable from the Explore menu and a secondary button.
4. **The wrong promise.** "Build your stay" sounds like booking a hotel. The current copy promises a "free draft plan built from our guides", which isn't the offer. The offer is that **we arrange it with local people for you.**
5. **Too many disclaimers.** "Independent guide", "not a booking" and "starts a conversation" are repeated everywhere, so it feels like nothing can actually be done.

## The new promise

> **Tell us the trip you want. We'll set it up with local guides, boats and hosts on Pohnpei.**
> Many of the island's best people aren't online. We know them, and we'll reach them for you. Nothing is booked or paid until you say yes.

"Pilot" honesty stays, but it's said once, in the place where it matters (the form and its confirmation), not on every page.

## Site structure

### One planning destination: `/plan-your-trip/`

`/plan-your-trip/` becomes the request form's home: the page every "Plan" button leads to.

1. **Hero:** the promise above, plus one button: **Start my trip request**. It scrolls to the form or starts it.
2. **How it works:** three short steps, also reused on the homepage.
   1. **Tell us your trip:** dates, who's coming, what you'd love to do, your budget. About 3 minutes.
   2. **We reach the locals:** we contact the guides, boats and hosts who fit, including the ones without websites.
   3. **You get a plan with real options:** we come back within N days. You choose; nothing is booked until you say yes.
3. **The form:** the existing builder component, restructured (see below).
4. **Prefer to do it yourself?** A short block with the same four links the homepage uses: Getting here → Places to stay → Guides & transport → Travel essentials. This is the only "DIY sequence" on the site.
5. **One-line footer note:** "PohnpeiIsland.com is an independent guide. You confirm and pay providers directly."

`/build-your-stay/` redirects (301) to `/plan-your-trip/`. Use an nginx `location = /build-your-stay/ { return 301 /plan-your-trip/; }` or Astro `redirects` in `astro.config.mjs`, and remove the page from the sitemap.

The long DIY prose currently on `/plan-your-trip/` is handled like this:
- "What to include / what to ask a provider" moves to `/tour-operators/`, which already has a similar "Agree the details" section. Merge, don't duplicate.
- "Reconfirm the details" moves to `/travel-info/` as a short "Before you go" checklist, or is cut.
- "Choose your interests" (three cards) is cut. The form's "What you'd love to do" step and the homepage experience cards already cover it.

### Navigation (`src/components/Nav.astro`, `Homepage.astro` header, footers)

- Desktop top bar: **Experiences** · **Local guides** · **[Plan my trip]** (button style).
- Menu groups:
  - **Explore the island:** unchanged.
  - **Practical info:** Getting here, Places to stay, Guides & transport, Travel essentials. Drop both "Plan your visit" and "Build your stay" from this list; the button covers it.
- Footers: the same four practical links plus "Plan my trip".

### Homepage (`src/components/home/Homepage.astro`)

- Planning section (`#plan`): keep the "Far away. Within reach." design. Swap the CTA to **Start my trip request** and add the three "How it works" steps. The four practical links stay as the secondary DIY path, labelled "Or plan it yourself".
- Header "Plan your visit" button becomes "Plan my trip", still linking to `/plan-your-trip/`.

### Guide pages

`TravelGuideLayout`, `ActivityGuideLayout`, the Nan Madol page and the experience guides end with one consistent CTA box: "Want this in your trip? **Start my trip request** — we'll arrange it with local guides." Where possible, pass the experience as a query (`/plan-your-trip/?add=nanmadol`) so the form starts with it selected. This is optional but cheap; the IDs already exist in `src/data/build-your-stay.ts`.

## The form, restructured

Same component (`src/components/BuildYourStay.astro`) and data file (`src/data/build-your-stay.ts`), with clearer order and wording. The "base" step now comes after activities, because where to stay depends on what they'll do.

| # | Step label | Asks | Notes |
|---|---|---|---|
| 1 | **When** | Arrive, leave, flexible?, flights booked/not yet/need help | Unchanged |
| 2 | **Who** | Adults, kids, certified divers?, access needs | Unchanged |
| 3 | **What you'd love to do** | Experience cards, multi-select | Was step 4. Add "Not sure, suggest things" |
| 4 | **Where to stay** | In town / waterfront / dive-ready / help me choose, plus "already booked" | Was step 3. Add "I've already booked a place" |
| 5 | **Extras** | Airport pickup, car, driver/guide, occasion, photographer, accessible, diet | Unchanged |
| 6 | **Budget & send** | Budget per person (required), fee question, name, email, how they found us, notes | Fee question reworded (below) |

Wording changes:
- Component/UI name: "Your trip" (summary panel), not "Your stay". The final button changes from "Send to a planner" to **Send my trip request**.
- Pilot line on the last step: "We'll contact local guides and hosts for your dates and reply within N days with options and prices. Nothing is booked or paid until you say yes."
- Fee question: "If we arrange everything for you (guides, boats, pickups, stays), what fee would feel fair for the whole trip?" Keep the same options; this is the key demand signal.
- Confirmation screen ("Request received"): the three "How it works" steps again, with "Step 1 ✓".
- `replyDays`: the owner decides whether 3 days is realistic now that the reply involves contacting people. Consider 5.

### Data contract (important)

The Apps Script endpoint (`scripts/build-your-stay.gs`) writes fixed columns. **If any payload field is added or renamed, the script must be updated in the live Apps Script project and redeployed as a new version (same URL)** (see `docs/build-your-stay.md`). The cloud session can edit `scripts/build-your-stay.gs`, but the owner, or a session with the remote browser, has to paste and redeploy it. Changes proposed here:
- New optional values only: `base: 'booked'`, experience `'suggest'`. These fit existing columns, so **no script change is needed**.
- Funnel step names change (`steps` array). That's fine; only test rows exist so far. Delete the test rows before launch.

Keep the localStorage keys stable (`bys-*`) or bump them deliberately, so returning visitors with a half-filled old trip don't break.

## Out of scope for this round

- Payments, deposits, provider accounts, instant booking, named providers in the flow.
- Automatic confirmation email to the traveller (see the "Limits" section in `docs/build-your-stay.md`).
- New photography.

## Open questions for the owner

1. Final button wording: "Plan my trip" (nav) and "Start my trip request" (CTA). OK, or something warmer?
2. Reply time: keep 3 days or move to 5?
3. How will travellers pay, once they say yes: directly to each provider, or through you? The copy says "you confirm and pay providers directly" for now. Change it if that's not the plan.
4. Should the form ask for a phone or WhatsApp number? Many follow-ups may be easier there. This needs a new column, which means a script redeploy.

## Files to touch

- `src/pages/plan-your-trip.astro`: rewrite as above.
- `src/pages/build-your-stay.astro`: delete; add the redirect.
- `src/components/BuildYourStay.astro`, `src/data/build-your-stay.ts`, `src/styles/build-your-stay.css`: step order and wording.
- `src/components/Nav.astro`, `src/components/Footer.astro`, `src/components/home/Homepage.astro`: nav, CTA, How it works.
- `src/layouts/TravelGuideLayout.astro`, `src/layouts/ActivityGuideLayout.astro`, `src/pages/tour-operators.astro`, `src/pages/travel-info.astro`: CTA box; take in moved DIY content.
- `src/pages/sitemap.xml.ts`, `docs/build-your-stay.md`, `PRD.md`: update.
- Optional: `/etc/nginx/sites-available/pohnpeiisland.conf` redirect (VPS only).

## Done means

A first-time visitor on any page sees one obvious next step, "Plan my trip". They understand within one screen that the owner will set the trip up with local people, and they can send a request in about 3 minutes. There is only one planning sequence on the site, and `/build-your-stay/` still works via the redirect. Build passes; check mobile and desktop and keyboard use of the form; send one test request end to end and delete the test row afterwards.
