import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  site: 'https://kulachat.github.io',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets',
    inlineStylesheets: 'always',
  },
  image: {
    domains: ['images.unsplash.com', 'techthaiban.org'],
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});
