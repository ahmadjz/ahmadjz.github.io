// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// User page (ahmadjz.github.io) is served at the root, so base is '/'.
// If this ever moves to a project repo, set base to '/<repo>' via an env var.
const SITE = 'https://ahmadjz.github.io';

export default defineConfig({
  site: SITE,
  base: '/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    react(),
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
