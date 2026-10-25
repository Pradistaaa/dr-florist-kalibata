import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://drfloristkalibata.example',
  integrations: [sitemap()],
});