// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import { redirects } from './redirects.mjs';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://srcspatna.in',
  redirects,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],
  adapter: cloudflare({
    imageService: 'compile'
  })
});