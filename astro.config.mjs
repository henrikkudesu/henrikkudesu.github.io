// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // site: 'https://github.com/henrikkudesu/astroTest',
  // base: 'astroTest',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
    ],
  },
});