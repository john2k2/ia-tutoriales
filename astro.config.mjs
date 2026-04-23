// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://john2k2.github.io',
  base: '/ia-tutoriales',
  vite: {
    plugins: [tailwindcss()]
  }
});
