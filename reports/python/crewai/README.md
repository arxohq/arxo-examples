# python/crewai

Reports for [joaomdmoura/crewai](https://github.com/joaomdmoura/crewai) (CrewAI agent framework).

- **report.html** — SCC and agent_architecture HTML report. Open in a browser to explore cycles, dependency graph, and agent/LLM findings.
- **metadata.json** — Repo metadata and Arxo version used.

**arxo.yaml** — Exclusions config (__pycache__, .venv, venv, .pytest_cache, .mypy_cache, .ruff_cache, node_modules). Metrics: scc, agent_architecture.

Regenerate: `arxo analyze --path <clone> --config arxo.yaml --format html --output report.html`.
