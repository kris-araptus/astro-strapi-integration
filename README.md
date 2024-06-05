Sure! Here's an updated version of your README file to reflect the integration of Astro and Strapi:
Astro-Strapi Integration

sh

npm create astro@latest -- --template blog

Open in StackBlitz
Open with CodeSandbox
Open in GitHub Codespaces

    🧑‍🚀 Seasoned astronaut? Delete this file. Have fun!

blog
Features

    ✅ Minimal styling (make it your own!)
    ✅ 100/100 Lighthouse performance
    ✅ SEO-friendly with canonical URLs and OpenGraph data
    ✅ Sitemap support
    ✅ RSS Feed support
    ✅ Markdown & MDX support
    ✅ Integrated with Strapi CMS for content management

🚀 Project Structure

Inside of your Astro-Strapi integration project, you'll see the following folders and files:

text

├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── lib/
│       └── strapi.ts
├── strapi/
│   ├── api/
│   │   └── article/
│   └── config/
├── astro.config.mjs
├── README.md
├── package.json
├── tsconfig.json
└── .env

    src/pages/ - This directory contains your page components.
    src/components/ - Place your Astro/React/Vue/Svelte/Preact components here.
    src/content/ - Contains "collections" of related Markdown and MDX documents.
    src/lib/strapi.ts - Contains the Strapi API fetch logic.
    strapi/ - This directory contains your Strapi backend setup.
    public/ - Any static assets, like images, can be placed here.

Astro looks for .astro or .md files in the src/pages/ directory. Each page is exposed as a route based on its file name.
🧞 Commands

All commands are run from the root of the project, from a terminal:
Command	Action
npm install	Installs dependencies
npm run dev	Starts local dev server at localhost:4321
npm run build	Build your production site to ./dist/
npm run preview	Preview your build locally, before deploying
npm run strapi:start	Starts the Strapi server
npm run strapi:build	Build the Strapi project
npm run strapi:develop	Start Strapi in development mode
npm run astro ...	Run CLI commands like astro add, astro check
npm run astro -- --help	Get help using the Astro CLI
👀 Want to learn more?

Check out Astro's documentation, Strapi's documentation, or jump into Astro's Discord server.
Credit

This integration is based on the Astro Starter Kit and utilizes Strapi CMS for content management. The original theme is inspired by Bear Blog.