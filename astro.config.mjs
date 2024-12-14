// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [expressiveCode(), mdx(), sitemap(), preact()],
});