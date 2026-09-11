// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: add domain
  site: 'https://example.com',

  // Fonts are downloaded at build time and self-hosted (no request to Google
  // from the visitor's browser). Add <Font cssVariable="--font-libre-franklin" />
  // to the <head> of every page (the root layout).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Libre Franklin',
      cssVariable: '--font-libre-franklin',
      // Variable font: one file covers the whole range used by the design
      weights: ['400 800'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
