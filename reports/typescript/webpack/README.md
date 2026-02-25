# typescript/webpack

Reports for [webpack/webpack](https://github.com/webpack/webpack).

- **report.html** — SCC (strongly connected components) HTML report. Open in a browser to explore cycles and dependency graph.
- **metadata.json** — Repo metadata and Arxo version used.

**arxo.yaml** — Exclusions config (node_modules, .yarn, dist, build, test, examples, hot, .github). Used when regenerating.

Regenerate: `arxo analyze --path <clone> --config arxo.yaml --format html --output report.html`.
