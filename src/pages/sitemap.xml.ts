import type { APIRoute } from 'astro';
import { pageUrl } from '../data/site';

// Every page in src/pages except the 404, so new guides are listed automatically.
const paths = Object.keys(import.meta.glob('./**/*.astro'))
  .map(file => file.replace(/^\./, '').replace(/\.astro$/, '').replace(/\/index$/, '/'))
  .filter(path => path !== '/404')
  .sort();

export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(path => `  <url><loc>${pageUrl(path)}</loc></url>`).join('\n')}\n</urlset>\n`,
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
