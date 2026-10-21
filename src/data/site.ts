// Site identity used for canonical URLs, social cards and structured data.
// nginx serves every page as a directory, so page URLs always end in a slash.
export const site = {
  url: 'https://pohnpeiisland.com',
  name: 'Pohnpei Island',
  locale: 'en_US',
};

export const pageUrl = (path: string) => new URL(path.replace(/^([^#?]*?)\/?([#?].*)?$/, '$1/$2'), site.url).href;

// 1200×630 JPEG: the size and format every social network accepts.
export const ogImage = (file: string) => `https://res.cloudinary.com/doruy2kdr/image/upload/f_jpg,q_auto,c_fill,g_auto,w_1200,h_630/${file}`;

// The one do-it-yourself planning sequence, used by the nav, footers, homepage and /plan-your-trip.
export const practicalGuides = [
  { href: '/getting-here/', title: 'Find your way here', label: 'Getting here', detail: 'Flights & arrival' },
  { href: '/places-to-stay/', title: 'Somewhere to stay', label: 'Places to stay', detail: 'Hotels & island stays' },
  { href: '/tour-operators/', title: 'Go with a local', label: 'Guides & transport', detail: 'Guides & tour operators' },
  { href: '/travel-info/', title: 'A little preparation', label: 'Travel essentials', detail: 'Good things to know' },
];

export const pohnpei = {
  '@type': 'TouristDestination',
  '@id': `${site.url}/#pohnpei`,
  name: 'Pohnpei',
  alternateName: 'The Garden Island of Micronesia',
  geo: { '@type': 'GeoCoordinates', latitude: 6.88, longitude: 158.22 },
  containedInPlace: { '@type': 'Country', name: 'Federated States of Micronesia' },
};

export const organization = {
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: 'PohnpeiIsland.com',
  url: `${site.url}/`,
  description: 'An independent visitor guide to Pohnpei, Federated States of Micronesia.',
};
