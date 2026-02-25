# typescript/react

Reports for [facebook/react](https://github.com/facebook/react).

- **report.html** — SCC (strongly connected components) HTML report. Open in a browser to explore cycles and dependency graph.
- **metadata.json** — Repo metadata and Arxo version used.

**arxo.yaml** — Exclusions config (node_modules, __tests__, *.spec/test, dist, build, scripts). Used when regenerating.

Regenerate: `arxo analyze --path <clone> --config arxo.yaml --format html --output report.html`.
