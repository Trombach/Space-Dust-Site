import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import yaml from '@rollup/plugin-yaml';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()]
  },
  site: 'https://spacedust.in',
  integrations: [tailwind(), sitemap(), mdx(), partytown(), alpinejs()]
});