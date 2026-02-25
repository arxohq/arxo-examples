# typescript/langchainjs

Reports for [langchain-ai/langchainjs](https://github.com/langchain-ai/langchainjs) (LangChain.js).

- **report.html** — SCC and agent_architecture HTML report. Open in a browser to explore cycles, dependency graph, and agent/LLM findings.
- **metadata.json** — Repo metadata and Arxo version used.

**arxo.yaml** — Exclusions config (node_modules, .yarn, dist, build, tests, coverage, .github). Metrics: scc, agent_architecture.

Regenerate: `arxo analyze --path <clone> --config arxo.yaml --format html --output report.html`.
