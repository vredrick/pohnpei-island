# Trip request pilot ("Plan my trip")

The form lives on `/plan-your-trip/` (the old `/build-your-stay/` URL redirects there). It is a demand test for an owner-arranged service: travellers send their dates, group, the experiences they want, where they'd like to stay, extras and a budget. The owner contacts local guides, boats and hosts (many of whom aren't online) and replies with real options. Nothing is booked or paid until the traveller says yes, and the form names no businesses and quotes no prices. The code still uses the original `BuildYourStay` / `bys-` names; the site structure is described in `docs/trip-request-plan.md`.

## What it collects

- **Requests tab:** one row per request. It records the trip details, budget (required), fair planning fee (optional), how the traveller found us, traffic source (UTM tags or referring site), the planner flags, and a Status column you update as you work.
- **Funnel tab:** one row per step each visitor reaches (anonymous visit id, step, source). Counting the visits that reach step 1, step 2 and so on up to Send shows where people stop.
- **Email:** the plain-text brief goes to `OWNER_EMAIL`, or to the deploying account if that property isn't set. Reply-To is the traveller.

Nothing else is stored. An unfinished trip is saved only in the traveller's own browser.

## Setup (about 10 minutes)

1. Create a Google Sheet, for example "Build Your Stay requests".
2. In the Sheet, open **Extensions → Apps Script**. Replace the editor contents with `scripts/build-your-stay.gs` and save.
3. Optional: to send requests to a different inbox, open **Project Settings → Script properties** in Apps Script and add `OWNER_EMAIL`. Otherwise they go to the Google account that deploys the script.
4. Choose **Deploy → New deployment → Web app**. Set *Execute as* to **Me** and *Who has access* to **Anyone**, then deploy and approve the permissions (Sheets and sending email).
5. Copy the web app URL ending in `/exec`.
6. In the project root, create `.env` with:

   ```
   PUBLIC_TRIP_REQUEST_ENDPOINT=https://script.google.com/macros/s/…/exec
   ```

7. Run `npm run build`, check the page with `npm run preview`, send one test request, and confirm that a row and an email arrive. Then deploy as usual.

Without the variable the page builds in **preview mode**. It shows a notice and sends nothing. Don't deploy it in that state.

After you edit the script, use **Deploy → Manage deployments → Edit → New version**. That keeps the same URL.

## Running the pilot

- **The promise:** a reply with options within 3 days (`replyDays` in `src/data/build-your-stay.ts`). Change it there if contacting providers takes longer; the "How it works" copy updates with it.
- **Draft reply:** a day-by-day outline using the guides. Mark anything still to confirm with providers. End with the real test: *"Would you like us to arrange this for you for $X?"* Record the answer in the Status column.
- **Traffic:** link to the page with UTM tags, for example `?utm_source=facebook&utm_campaign=micronesia-group`, so the Source column shows which channels bring requests.
- **Decide in advance:** set a target number of requests with real dates and a time window before promoting the page.

## Signals to review

| Signal | Where |
| --- | --- |
| Visits that start the builder | Funnel, step 1 count |
| Where people stop | Funnel, count by step |
| Requests with dates in the next 12 months | Requests |
| Most-chosen experiences and bases | Requests: Experiences, Base |
| Budget and fair planning fee | Requests: Budget, Fee ok |
| Replies to your options and "yes, arrange it" | Requests: Status |
| Which channels bring requests | Requests and Funnel: Source |

## Limits

- The endpoint is public. A hidden field rejects simple bots, and every value is stored as plain text. If spam appears, add a reCAPTCHA or Cloudflare Turnstile check.
- Apps Script has daily email quotas. A personal Gmail account allows about 100 emails a day, which is plenty for a pilot.
- Travellers get no automatic confirmation email. Sending one from a public endpoint could be abused to send mail to anyone. Your reply with options is the confirmation.
