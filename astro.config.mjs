import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://pohnpeiisland.com',
  // nginx redirects /page to /page/, so links and canonicals use the slash form.
  trailingSlash: 'always',
  // The pilot form moved into /plan-your-trip. nginx also sends a 301 for this path.
  redirects: { '/build-your-stay/': '/plan-your-trip/' },
  integrations: [tailwind()],
});
