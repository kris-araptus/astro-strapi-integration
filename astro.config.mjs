import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap()],
	vite: {
		envPrefix: ['VITE_', 'STRAPI_'],  // Include your environment variable prefixes here
	  },
});
