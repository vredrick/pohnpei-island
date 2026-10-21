import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://pohnpeiisland.com',
  // nginx redirects /page to /page/, so links and canonicals use the slash form.
  trailingSlash: 'always',
  integrations: [tailwind()],
});
