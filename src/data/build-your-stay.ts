// Options for the Build Your Stay pilot (/build-your-stay).
// The pilot tests demand before any provider agreements exist, so nothing here
// names a business, quotes a price or promises availability.

export const replyDays = 3;

export const photo = (file: string, width = 640, height = 440) =>
  `https://res.cloudinary.com/doruy2kdr/image/upload/f_auto,q_auto,c_fill,g_auto,w_${width},h_${height}/${file}`;

export interface Option {
  id: string;
  name: string;
  text: string;
  image?: string;
  alt?: string;
}

export interface Base extends Option {
  place: string;
}

export interface Experience extends Option {
  tags: string[];
}

export const steps = ['Dates', 'Travellers', 'Your base', 'Your days', 'Extras', 'Send'];

export const bases: Base[] = [
  { id: 'town', name: 'In town', place: 'Kolonia', text: 'Walk to cafés, shops and the harbour. Easy for a first visit.' },
  { id: 'water', name: 'Quiet waterfront', place: 'Lagoon & mangroves', text: 'Slow mornings and water views, a little further from town.', image: 'hero-left-matnas.jpg', alt: 'Green islands and still water in Pohnpei’s lagoon' },
  { id: 'dive', name: 'Dive-ready', place: 'Close to the boats', text: 'Early starts and somewhere to rinse and store gear.', image: 'hero-right-manta-road-pass.jpg', alt: 'A manta ray swimming through blue water' },
  { id: 'any', name: 'Surprise me', place: 'Planner’s pick', text: 'Tell us what matters and we’ll suggest a match.', image: 'feature-nan-madol-step-into.jpg', alt: 'Basalt walls at Nan Madol' },
];

export const experiences: Experience[] = [
  { id: 'nanmadol', name: 'Nan Madol', text: 'Basalt walls and tidal canals of the ancient stone city.', tags: ['Tide-dependent', 'Guided'], image: 'chapter-01-nan-madol.jpg', alt: 'Stacked basalt walls at Nan Madol' },
  { id: 'falls', name: 'Waterfalls & rainforest', text: 'Jungle trails to falls and swimming holes.', tags: ['Weather-dependent', 'Walking'], image: 'chapter-02-wild-interior.jpg', alt: 'A waterfall in Pohnpei’s rainforest' },
  { id: 'dive', name: 'Manta & reef diving', text: 'Channels and walls on the barrier reef.', tags: ['Certification', 'Boat'], image: 'hero-right-manta-road-pass.jpg', alt: 'A manta ray swimming through blue water' },
  { id: 'snorkel', name: 'Lagoon & snorkel day', text: 'Sandbars, reef flats and a picnic on the water.', tags: ['All levels', 'Boat'], image: 'hero-left-matnas.jpg', alt: 'Islands and calm water in the lagoon' },
  { id: 'surf', name: 'Surf the reef pass', text: 'Powerful reef breaks for experienced surfers.', tags: ['Experienced', 'Seasonal'] },
  { id: 'atoll', name: 'Outer island trip', text: 'Pakin or a further atoll. Its own adventure.', tags: ['Permission', 'Extra days'], image: 'chapter-03-outer-atolls.jpg', alt: 'A forested atoll ringed by reef' },
  { id: 'culture', name: 'Culture & sakau', text: 'Time with local hosts and a sakau evening.', tags: ['Ask before photos'], image: 'chapter-04-living-culture.jpg', alt: 'A Pohnpeian cultural demonstration beneath a thatched shelter' },
  { id: 'town', name: 'Kolonia & local food', text: 'Markets, history stops and island cooking.', tags: ['Easy day'] },
];

export const extras = ['Airport pickup', 'Rental car', 'Driver or guide for the stay', 'Celebrating an occasion', 'Photographer', 'Accessible options'];

export const flightOptions = ['Not yet', 'Booked', 'Need help'];

// Per person, not counting flights. Adjust once real draft plans show typical costs.
export const budgets = ['Under $800', '$800–1,500', '$1,500–2,500', '$2,500+', 'Not sure yet'];

// Optional willingness-to-pay question for a future arrangement service.
export const fees = ['Only if it’s free', 'Up to $25', '$25–50', '$50–100', '$100+'];

export const sources = ['Google search', 'Facebook group', 'Instagram', 'Dive forum or club', 'Friend or family', 'Other'];
