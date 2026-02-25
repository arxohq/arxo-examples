# Arxo Examples & Reports

Sample reports and MCP request/response examples for [Arxo](https://github.com/arxohq/arxo) architecture analysis. Each **branch** in this repo corresponds to an Arxo version (e.g. `0.1.0-beta.1`, `v0.2.0`). Use the branch that matches the Arxo version you have installed.

## Versioning

- **Branch name** = Arxo version (e.g. `0.1.0-beta.1`, `v0.2.0`).
- Reports and examples on that branch were generated or validated with that version.
- Default branch (e.g. `main`) tracks the latest release.

## Structure

```
arxo-examples/
├── README.md                 # This file
├── manifest.json             # Index: arxo_version, languages, repos, timestamps
├── reports/                  # JSON/HTML reports by language and repository
│   ├── typescript/
│   │   ├── express/
│   │   ├── react/
│   │   ├── webpack/
│   │   │   ├── report.html
│   │   │   └── metadata.json
│   │   └── ...
│   ├── python/
│   └── ...
├── mcp/                      # MCP tool examples: request/response + human-readable
│   ├── typescript/
│   │   └── express/
│   ├── python/
│   └── ...
├── samples/                  # Sample projects (not full third-party repos)
│   └── openclaw/
│       └── minimal-sample/
│           ├── openclaw.json
│           └── README.md
└── site/                     # Astro website (browse reports & examples)
    ├── src/pages/
    ├── scripts/copy-content.mjs
    └── package.json
```

## Website (Astro)

The `site/` directory is an [Astro](https://astro.build) static site. It copies `reports/`, `mcp/`, `samples/`, and `manifest.json` into `public/` at build time and generates index, reports list, and MCP/samples pages.

```bash
cd site && npm install && npm run dev   # Dev server
cd site && npm run build && npm run preview   # Build and preview
```

Deploy the `dist/` output to GitHub Pages, Netlify, or any static host. The site uses `base: '/'` so it is served from the root of the deployment URL.

## Reports

- **Path:** `reports/<language>/<repository>/`
- **Files:** `report.json` (full Arxo output), `metadata.json` (repo name, url, language, arxo_version, generated_at).
- Public metrics only: **scc**, **agent_architecture**, **openclaw_architecture**.

## MCP Examples

- **Path:** `mcp/<language>/<repository>/`
- **Per tool:** `analyze_architecture.md` (human-readable), `analyze_architecture.json` (request + response).
- Use these to see typical MCP responses and how to interpret them.

## Samples

- **Path:** `samples/openclaw/minimal-sample/`
- Minimal `openclaw.json` for testing **openclaw_architecture**. Run Arxo with `--path samples/openclaw/minimal-sample`.

## Regenerating (for maintainers)

From the Arxo repo with public CLI/MCP built:

```bash
# Example: generate report for a cloned repo
arxo analyze --path /path/to/express --metric scc --format json --output report.json

# Use branch name = Arxo version when committing (e.g. 0.1.0-beta.1).
```

## Links

- [Arxo](https://github.com/arxohq/arxo)
- [Docs](https://docs.arxo.io)
- [npm @arxo/mcp](https://www.npmjs.com/package/@arxo/mcp)
