// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: add domain
  site: 'https://example.com',

  vite: {
    plugins: [tailwindcss()],
  },
});
