// Field decisions and unavailable property sites: docs/accommodation-sources.md.
// This is a substantive review date, not a build timestamp.
export const stayReview = { iso: '2026-09-25', label: '25 September 2026' };
export const staySources = {
  tourism: 'https://visitpohnpei.travel/accommodations-and-lodging/',
  contact: 'https://visitpohnpei.travel/contact-us/',
  wcpfc: 'https://meetings.wcpfc.int/file/17549/download',
};
type Feature = 'dining' | 'internet' | 'kitchenette';
export interface Accommodation {
  id: string;
  name: string;
  area: 'Kolonia' | 'Nett';
  description: string;
  amenities: string[];
  features: Feature[];
  ask: string;
  phone: string;
  email: string;
  website?: string;
  sources: { label: string; url: string }[];
  dated?: boolean;
}
const conferenceSource = { label: 'WCPFC accommodation sheet (June 2025, PDF)', url: staySources.wcpfc };
// Alphabetical, not a ranking. One unambiguous primary phone/email per property.
export const accommodations: Accommodation[] = [
  {
    id: '7-stars', name: '7 Stars Inn', area: 'Kolonia',
    description: 'A downtown hotel with several room layouts and an in-house restaurant and bar.',
    amenities: ['Air conditioning · Wi-Fi', 'Private bathroom with hot water', 'Kitchenette in the suite'],
    features: ['dining', 'internet', 'kitchenette'],
    ask: 'Which room layout suits your group, and can you arrange check-in for your arrival time?',
    phone: '+6913206147', email: '7starsinn.reception@gmail.com', website: 'https://7starsinn.com/',
    sources: [{ label: 'Property overview', url: 'https://7starsinn.com/' }, { label: 'Room details', url: 'https://7starsinn.com/accomodation' }],
  },
  {
    id: 'china-star', name: 'China Star Hotel', area: 'Nett',
    description: 'Single and double rooms.',
    amenities: ['Air conditioning · refrigerator', 'Restaurant'], features: ['dining'], dated: true,
    ask: 'Confirm the room type, internet access, and airport pickup arrangements.',
    phone: '+6913204390', email: 'goujunqu@hotmail.com', sources: [conferenceSource],
  },
  {
    id: 'cliff-rainbow', name: 'Cliff Rainbow Hotel', area: 'Kolonia',
    description: 'On Pohnrakied Street, with standard rooms, deluxe rooms, a suite, and its own restaurant.',
    amenities: ['Desk and refrigerator in standard rooms', 'Balcony access in deluxe rooms', 'Larger living area in the suite'], features: ['dining'],
    ask: 'Check the amenities in your chosen category, including air conditioning and internet.',
    phone: '+6913202415', email: 'reservations@cliffrainbow.com', website: 'https://cliffrainbow.com/',
    sources: [{ label: 'Property overview', url: 'https://cliffrainbow.com/' }, { label: 'Standard', url: 'https://cliffrainbow.com/standard.html' }, { label: 'Deluxe', url: 'https://cliffrainbow.com/deluxe.html' }, { label: 'Suite', url: 'https://cliffrainbow.com/suite.html' }],
  },
  {
    id: 'hideaway', name: 'Hideaway Hotel', area: 'Kolonia', description: 'Cottage accommodation.',
    amenities: ['Air conditioning · refrigerator', 'Internet · bar / restaurant'], features: ['dining', 'internet'], dated: true,
    ask: 'Ask about cottage access, bed arrangements, and meal service during your stay.',
    phone: '+6913201970', email: 'hideaway@mail.fm', sources: [conferenceSource],
  },
  {
    id: 'island-palms', name: 'Island Palms Hotel', area: 'Kolonia', description: 'Single, double, and suite options.',
    amenities: ['Air conditioning · Wi-Fi', 'Restaurant'], features: ['dining', 'internet'], dated: true,
    ask: 'Confirm the bed configuration and whether airport transfers are included in your quote.',
    phone: '+6913201074', email: 'islandpalmshotel@gmail.com', sources: [conferenceSource],
  },
  {
    id: 'mangrove-bay', name: 'Mangrove Bay', area: 'Nett', description: 'Rooms, a suite, and a house.',
    amenities: ['Air conditioning · internet', 'Bar / restaurant · kayak rentals'], features: ['dining', 'internet'], dated: true,
    ask: 'Confirm which unit is available and ask about equipment and transport arrangements.',
    phone: '+6913205454', email: 'mangrovebayhotel@gmail.com', sources: [conferenceSource],
  },
  {
    id: 'ocean-view-west', name: 'Ocean View Plaza — West Wing', area: 'Nett', description: 'Rooms and cottages.',
    amenities: ['Air conditioning · refrigerator', 'Internet · restaurant'], features: ['dining', 'internet'], dated: true,
    ask: 'Specify the West Wing when requesting directions, a room, or a transfer.',
    phone: '+6913207049', email: 'rumorsinc@mail.fm', sources: [conferenceSource],
  },
  {
    id: 'sea-breeze', name: 'Sea Breeze', area: 'Kolonia',
    description: 'The hotel’s website introduces its Red Snapper Restaurant, founded by Ellen “Mammy” Ehsa.',
    amenities: ['Air conditioning · refrigerator', 'Internet'], features: ['dining', 'internet'], dated: true,
    ask: 'Confirm room layout, meal times, and transport for your arrival and departure.',
    phone: '+6913202065', email: 'seabreeze@mail.fm', website: 'https://www.seabreezehotelfsm.com/',
    sources: [{ label: 'Hotel & restaurant story', url: 'https://www.seabreezehotelfsm.com/about-us' }, conferenceSource],
  },
  {
    id: 'villa', name: 'The Villa Hotel', area: 'Nett', description: 'Queen and king deluxe rooms.',
    amenities: ['Air conditioning · refrigerator', 'Internet'], features: ['internet'], dated: true,
    ask: 'Ask about dining, the exact arrival location, and airport transfer costs.',
    phone: '+6913203495', email: 'reservations@thevillapohnpei.com', sources: [conferenceSource],
  },
  {
    id: 'yvonnes', name: 'Yvonne’s Hotel', area: 'Kolonia',
    description: 'Across from Kolonia Town Hall, with single, double, and deluxe rooms.',
    amenities: ['Air conditioning', 'Kitchenettes in some rooms', 'Internet varies by room category'], features: ['internet', 'kitchenette'],
    ask: 'Request a kitchenette if needed, and confirm Wi-Fi coverage in the room you book.',
    phone: '+6913205130', email: 'reservations@yvonneshotel.com', website: 'https://www.yvonneshotel.com/',
    sources: [{ label: 'Location & contacts', url: 'https://www.yvonneshotel.com/' }, { label: 'Room details', url: 'https://www.yvonneshotel.com/services' }],
  },
];
