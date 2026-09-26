// Substantive source-review dates, never automatically changed by a build.
export const reviewed = { iso: '2026-09-25', label: '25 September 2026' };
export const sources = {
  tourism: 'https://visitpohnpei.travel/nan-madol-pohnpei/',
  operators: 'https://visitpohnpei.travel/tour-operators/',
  unesco: 'https://whc.unesco.org/en/list/1503/',
  contact: 'https://visitpohnpei.travel/contact-us/',
};
export interface Operator {
  id: string; name: string; services: string; phones: string[]; email: string;
  whatsapp?: string; website?: string; paused?: boolean; source: string; reviewed: string;
}
// Every official directory entry explicitly listing Nan Madol. Review decisions:
// docs/nan-madol-sources.md. Unclear secondary contacts are not guessed.
export const operators: Operator[] = [
  { id: 'jadesa', name: 'JADESA Tours', services: 'Nan Madol by kayak or guided boat',
    phones: ['+6913207138', '+6919218276'], email: 'myjadesa@gmail.com', whatsapp: '+6919218276',
    website: 'https://myjadesa.com/pages/tours', source: sources.operators, reviewed: reviewed.iso },
  { id: 'kennys', name: 'Kenny’s Inc.', services: 'Nan Madol tours · ocean excursions',
    phones: ['+6913204587', '+6919201353'], email: 'kennykmpni@mail.fm', source: sources.operators, reviewed: reviewed.iso },
  { id: 'nalikendinleng', name: 'Nalikendinleng Tour', services: 'Nan Madol · waterfalls · hikes',
    phones: ['+6919259870'], email: 'bejayobispo81@gmail.com', source: sources.operators, reviewed: reviewed.iso },
  { id: 'ocean-care', name: 'Ocean Care Company', services: 'Nan Madol · waterfalls · hikes',
    phones: ['+6913202065'], email: 'seabreezehotel691@gmail.com', source: sources.operators, reviewed: reviewed.iso },
  { id: 'ocean-cruise', name: 'Pohnpei Ocean Cruise', services: 'Nan Madol · island excursions',
    phones: ['+6913203397'], email: 'pocmail.fm@gmail.com', website: 'https://pohnpeioceancruise.com/en',
    paused: true, source: 'https://pohnpeioceancruise.com/en', reviewed: reviewed.iso },
  { id: 'surf-club', name: 'Pohnpei Surf Club', services: 'Nan Madol · waterfalls · boat charters',
    phones: ['+6919207343', '+6913207845'], email: 'pnisurfclub@gmail.com', whatsapp: '+6919207343',
    source: sources.operators, reviewed: reviewed.iso },
];
export const formatPhone = (number: string) => number.replace(/^(\+691)(\d{3})(\d{4})$/, '$1 $2 $3');
