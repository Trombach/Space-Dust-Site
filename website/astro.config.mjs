import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import alpinejs from "@astrojs/alpinejs";
import partytown from "@astrojs/partytown";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://spacedust.in',
  integrations: [mdx(), sitemap(), alpinejs(), partytown(), tailwind()]
});