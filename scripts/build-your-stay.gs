/**
 * Build Your Stay request endpoint (Google Apps Script web app).
 *
 * Setup: docs/build-your-stay.md. In short, create a Google Sheet, open
 * Extensions > Apps Script, paste this file, set the OWNER_EMAIL script
 * property, deploy as a web app (Execute as: Me, Who has access: Anyone) and
 * put the /exec URL in PUBLIC_TRIP_REQUEST_ENDPOINT before building the site.
 *
 * The site posts two kinds of JSON body as text/plain:
 *   { type: 'step', step, stepName, session, source }   -> "Funnel" tab
 *   { type: 'request', ...trip fields, brief }           -> "Requests" tab + email to OWNER_EMAIL
 */

const REQUEST_HEADERS = ['Received', 'Status', 'Name', 'Email', 'Arrive', 'Depart', 'Nights', 'Flexible', 'Flights', 'Adults', 'Kids', 'Diver', 'Access needs', 'Base', 'Experiences', 'Extras', 'Diet', 'Budget', 'Fee ok', 'Found us', 'Source', 'Notes', 'Planner flags', 'Session'];
const FUNNEL_HEADERS = ['Time', 'Session', 'Step', 'Step name', 'Source'];
const MAX_LENGTH = 1500;

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return json({ ok: false, error: 'Invalid request' });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const book = SpreadsheetApp.getActiveSpreadsheet();

    if (data.type === 'step') {
      sheet(book, 'Funnel', FUNNEL_HEADERS).appendRow([new Date(), clean(data.session), Number(data.step) || '', clean(data.stepName), clean(data.source)]);
      return json({ ok: true });
    }

    if (data.type === 'request') {
      const email = clean(data.email);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !data.arrive || !data.depart) return json({ ok: false, error: 'Missing details' });

      sheet(book, 'Requests', REQUEST_HEADERS).appendRow([
        new Date(), 'New', clean(data.name), email, clean(data.arrive), clean(data.depart), Number(data.nights) || '',
        data.flexible ? 'Yes' : '', clean(data.flights), Number(data.adults) || '', Number(data.kids) || 0,
        data.diver ? 'Yes' : '', data.access ? 'Yes' : '', clean(data.base), list(data.experiences), list(data.extras),
        clean(data.diet), clean(data.budget), clean(data.fee), clean(data.heard), clean(data.source), clean(data.notes),
        list(data.flags), clean(data.session),
      ]);

      const owner = PropertiesService.getScriptProperties().getProperty('OWNER_EMAIL');
      if (owner) {
        MailApp.sendEmail({
          to: owner,
          replyTo: email,
          subject: `Trip request: ${clean(data.name) || email} · ${clean(data.arrive)} (${Number(data.nights) || '?'} nights)`,
          body: String(data.brief || '').slice(0, 5000),
        });
      }
      return json({ ok: true });
    }

    return json({ ok: false, error: 'Unknown type' });
  } finally {
    lock.releaseLock();
  }
}

function sheet(book, name, headers) {
  let s = book.getSheetByName(name);
  if (!s) {
    s = book.insertSheet(name);
    s.appendRow(headers);
    s.setFrozenRows(1);
  }
  return s;
}

// Plain text only, capped, and never starting like a spreadsheet formula.
function clean(value) {
  const text = String(value == null ? '' : value).slice(0, MAX_LENGTH).trim();
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function list(value) {
  return Array.isArray(value) ? clean(value.join(', ')) : clean(value);
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
