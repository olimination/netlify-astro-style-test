import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.comvation.com',
  integrations: [sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
      theme: 'dracula',
      // Manually specify langs
      // Note: Shiki has countless langs built-in, including .astro!
      langs: ['astro'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  }
});