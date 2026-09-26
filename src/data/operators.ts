// Source-reviewed records, not direct confirmations. Dates never advance on build.
// Field exceptions, omitted contacts and full coverage: docs/operator-sources.md.
export const operatorSources = {
  tourism: 'https://visitpohnpei.travel/tour-operators/',
  contact: 'https://visitpohnpei.travel/contact-us/',
  jadesa: 'https://myjadesa.com/pages/tours',
  oceanCruise: 'https://pohnpeioceancruise.com/en',
  sunset: 'https://www.sunsetviewcarrental.com/',
  sunsetContact: 'https://www.sunsetviewcarrental.com/contact-us.html',
} as const;

export const serviceCategories = {
  'nan-madol': 'Nan Madol',
  'hiking': 'Waterfalls & hikes',
  'ocean': 'Diving & ocean trips',
  'boats': 'Kayaks & boat charters',
  'island': 'Island tours',
  'road': 'Car rental & chauffeured tours',
  'flights': 'Outer-atoll flights',
} as const;
export type ServiceCategory = keyof typeof serviceCategories;
export const relatedPlaceGuides = {
  'nan-madol': { label: 'Nan Madol visitor guide', href: '/nan-madol#visiting' },
  'p-pass': { label: 'Surfing guide', href: '/diving-and-surfing#surfing' },
  'ahnd': { label: 'Ahnd visiting guide', href: '/outer-atolls#nearby' },
} as const;
export type RelatedPlace = keyof typeof relatedPlaceGuides;
export interface Operator {
  id: string;
  name: string;
  services: string;
  summary: string;
  categories: ServiceCategory[];
  relatedPlaces: RelatedPlace[];
  location?: string;
  phones: string[];
  email: string;
  whatsapp?: string;
  website?: string;
  paused?: boolean;
  source: string;
  evidence: { url: string; fields: string }[];
  reviewed: string;
}
const reviewed = '2026-09-26';
const source = operatorSources.tourism;
export const operators: Operator[] = [
  { id: 'caroline-islands-air', name: 'Caroline Islands Air Inc.',
    services: 'Island tours · outer-atoll flights',
    summary: 'Ask about flights to your intended atoll and arrangements for touring the main island.',
    categories: ['island', 'flights'], relatedPlaces: [],
    phones: ['+6913208406'], email: 'jeff.aingimea@iflycia.com',
    source, reviewed, evidence: [{ url: source, fields: 'Name, services, phone and email. No specific flight route or schedule confirmed.' }] },
  { id: 'jadesa', name: 'JADESA Tours', services: 'Nan Madol by kayak or guided boat',
    summary: 'Explore the waterways around Nan Madol by kayak or guided boat. Ask which route suits the tide and your group.',
    categories: ['nan-madol', 'boats'], relatedPlaces: ['nan-madol'], location: 'Tour departure: Nihkawad',
    phones: ['+6913207138', '+6919218276'], email: 'myjadesa@gmail.com', whatsapp: '+6919218276',
    website: operatorSources.jadesa, source, reviewed,
    evidence: [{ url: source, fields: 'Name, email and Nan Madol service.' }, { url: operatorSources.jadesa, fields: 'Kayak/boat tours, tide dependence, departure location, phones and WhatsApp.' }] },
  { id: 'kennys', name: 'Kenny’s Inc.', services: 'Diving · ocean trips · Nan Madol',
    summary: 'A contact for combining an interest in the ocean with a visit to Nan Madol.',
    categories: ['nan-madol', 'ocean'], relatedPlaces: ['nan-madol'],
    phones: ['+6913204587', '+6919201353'], email: 'kennykmpni@mail.fm', source, reviewed,
    evidence: [{ url: source, fields: 'Name, services, complete phones and primary email; ambiguous second email omitted.' }] },
  { id: 'nalikendinleng', name: 'Nalikendinleng Tour', services: 'Nan Madol · waterfalls · hikes',
    summary: 'Discuss a walking route, waterfall visit or Nan Madol outing that fits your group.',
    categories: ['nan-madol', 'hiking'], relatedPlaces: ['nan-madol'],
    phones: ['+6919259870'], email: 'bejayobispo81@gmail.com', source, reviewed,
    evidence: [{ url: source, fields: 'Name, services, phone and email.' }] },
  { id: 'ocean-care', name: 'Ocean Care Company', services: 'Nan Madol · waterfalls · hikes',
    summary: 'Ask about guided days on land, from cultural sites to forest trails.',
    categories: ['nan-madol', 'hiking'], relatedPlaces: ['nan-madol'],
    phones: ['+6913202065'], email: 'seabreezehotel691@gmail.com', source, reviewed,
    evidence: [{ url: source, fields: 'Name, services, fully printed phone and email; abbreviated second number omitted.' }] },
  { id: 'club-pareo', name: 'Pacific Island Adventures Co. (Club Pareo)', services: 'Diving · ocean trips',
    summary: 'Discuss diving or an ocean outing, including equipment and the experience your party needs.',
    categories: ['ocean'], relatedPlaces: [],
    phones: ['+6919239377'], email: 'pareo@club-circle.net', source, reviewed,
    evidence: [{ url: source, fields: 'Name, services, phone and email. Email differs from FSM Visitors Board; see ledger.' }] },
  { id: 'ocean-cruise', name: 'Pohnpei Ocean Cruise', services: 'Nan Madol · ocean trips · mangroves · waterfalls',
    summary: 'Its published excursions span island and coastal visits. Follow the operator’s website for reopening news.',
    categories: ['nan-madol', 'ocean', 'hiking'], relatedPlaces: ['nan-madol'], location: 'Kolonia',
    phones: ['+6913203397'], email: 'pocmail.fm@gmail.com', website: operatorSources.oceanCruise,
    paused: true, source: operatorSources.oceanCruise, reviewed,
    evidence: [{ url: source, fields: 'Name and listed services.' }, { url: operatorSources.oceanCruise, fields: 'Suspension of tours/new bookings, updated email, phone and Kolonia location.' }] },
  { id: 'surf-club', name: 'Pohnpei Surf Club', services: 'Diving · Nan Madol · waterfalls · boat charters',
    summary: 'Discuss a boat charter or a guided visit on land or water. The Eco-Adventure Guide also names this business for surfing and Ahnd trips; confirm current arrangements directly.',
    categories: ['nan-madol', 'ocean', 'hiking', 'boats'], relatedPlaces: ['nan-madol', 'p-pass', 'ahnd'],
    phones: ['+6919207343', '+6913207845'], email: 'pnisurfclub@gmail.com', whatsapp: '+6919207343',
    source, reviewed, evidence: [{ url: source, fields: 'Name, services, phones, email and explicitly published WhatsApp. Own website timed out; no website button or inferred location.' }, { url: 'https://www.pohnpei-adventure.com/surfing/', fields: 'Published surf-guide connection, including P-Pass; not current availability.' }, { url: 'https://www.pohnpei-adventure.com/atolls/', fields: 'Explicit Ahnd trip connection in an article dated 2021; no Pakin service inferred.' }] },
  { id: 'sunset-view', name: 'Sunset View Car Rental', services: 'Car rental · chauffeured tours',
    summary: 'Arrange a rental or ask about a tour with a driver. Specify Pohnpei when contacting this two-state business.',
    categories: ['road'], relatedPlaces: [], location: 'Ohmine Street, opposite Joy Hotel, Kolonia',
    phones: ['+6913204908'], email: 'sunsetviewcarrental@gmail.com', website: operatorSources.sunset,
    source, reviewed, evidence: [{ url: source, fields: 'Name, chauffeured tours and email.' }, { url: operatorSources.sunset, fields: 'Car rental in Pohnpei and Chuuk.' }, { url: operatorSources.sunsetContact, fields: 'Pohnpei phone and physical location; secondary number shared with Chuuk omitted.' }] },
];
export const nanMadolOperators = operators.filter(operator => operator.relatedPlaces.includes('nan-madol'));
export const formatPhone = (number: string) => number.replace(/^(\+691)(\d{3})(\d{4})$/, '$1 $2 $3');
