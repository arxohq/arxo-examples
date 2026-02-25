# python/fastapi

Reports for [tiangolo/fastapi](https://github.com/tiangolo/fastapi).

- **report.html** — SCC (strongly connected components) HTML report. Open in a browser to explore cycles and dependency graph.
- **metadata.json** — Repo metadata and Arxo version used.

**arxo.yaml** — Exclusions config (__pycache__, .venv, venv, .pytest_cache, .mypy_cache, .ruff_cache, node_modules). Used when regenerating.

Regenerate: `arxo analyze --path <clone> --config arxo.yaml --format html --output report.html`.
