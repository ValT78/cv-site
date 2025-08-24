// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import image from '@astrojs/image';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
vite: {
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@components/*": "src/components/*",
      "@data/*": "src/data/*",
      "@layouts/*": "src/layouts/*",
      "@pages/*": "src/pages/*",
    },
  },
},

  integrations: [image(), svelte()],
});