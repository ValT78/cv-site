// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

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

  integrations: [react(), svelte()],
});