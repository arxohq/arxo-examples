import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://arxohq.github.io',
  base: '/',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
