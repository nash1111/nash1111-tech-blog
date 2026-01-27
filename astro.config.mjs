import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';

// https://astro.build/config
export default defineConfig({
  site: 'https://nash1111rgba.com',
  integrations: [
    mdx({
      remarkPlugins: [remarkFrontmatter],
      rehypePlugins: [rehypePrettyCode],
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'server',
  adapter: cloudflare(),
  vite: {
    optimizeDeps: {
      exclude: ['name-of-the-problematic-dependency'],
    },
  },
});
