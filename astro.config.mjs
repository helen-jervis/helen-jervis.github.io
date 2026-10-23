// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://helen-jervis.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
