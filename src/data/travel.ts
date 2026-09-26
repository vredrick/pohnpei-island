// Review metadata stays internal; do not render date badges.
export const travelReview = { iso: '2026-09-25', ledger: 'docs/travel-sources.md' };
export const travelFacts = { airport: 'PNI', timeZone: 'UTC +11', currency: 'USD' };
export const travelSources = {
  tourismArrival: 'https://visitpohnpei.travel/getting-to-pohnpei/',
  tourismEssentials: 'https://visitpohnpei.travel/visitor-travel-information/',
  tourismContact: 'https://visitpohnpei.travel/contact-us/',
  operators: 'https://visitpohnpei.travel/tour-operators/',
  outerIslands: 'https://visitpohnpei.travel/pohnpei-outer-atolls/',
  airport: 'https://tci.gov.fm/civilaviation/pohnpei.html',
  united: 'https://www.united.com/',
  unitedNetwork: 'https://guam.united.com/',
  nauruSchedule: 'https://www.nauruair.com/travel-info/flight-schedule',
  entry: 'https://www.fsmtravel.com/entry-requirements',
  usTravel: 'https://travel.state.gov/en/international-travel/travel-advisories/federated-states-of-micronesia.html',
  usTransit: 'https://travel.state.gov/content/travel/en/us-visas/other-visa-categories/transit.html',
  telecom: 'https://www.fsmtc.fm/node/5',
  telecomSupport: 'https://www.fsmtc.fm/support',
  weather: 'https://www.weather.gov/gum/pohnpei',
  health: 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/micronesia',
} as const;
