// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://huxi.app',
  // Keep essential page CSS in the HTML so a restored tab cannot lose a stylesheet from an older deploy.
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
