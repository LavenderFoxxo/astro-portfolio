import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    '/twitter': 'https://x.com/alexanderhy04',
    '/github': 'https://github.com/LavenderFoxxo'
  },
  server: {
    port: process.env.PORT || 4321
  }
});
