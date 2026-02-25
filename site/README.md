# Arxo Examples site (Astro)

Static site to browse reports, MCP examples, and samples. Content is copied from the repo root (`reports/`, `mcp/`, `samples/`, `manifest.json`) into `public/` before each build.

## Commands

- **`npm run dev`** — Copy content and start dev server
- **`npm run build`** — Copy content and build to `dist/`
- **`npm run preview`** — Serve `dist/` locally

## Deploy

Deploy the `dist/` folder to GitHub Pages, Netlify, Vercel, or any static host. The site uses `base: '/'` and is served from the root of the deployment URL.
