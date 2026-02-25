# Reports

Arxo analysis outputs by **language** and **repository**. Each folder is `reports/<language>/<repo>/`.

## Per-project files

| File | Description |
|------|-------------|
| `arxo.yaml` | (Optional) Config with exclusions and metrics. Use with `--config` when regenerating. |
| `report.json` | Full Arxo JSON (results, violations, metrics). Public metrics only: scc, agent_architecture, openclaw_architecture. |
| `metadata.json` | Repo metadata: name, url, language, arxo_version, generated_at. |
| `report.html` | (Optional) HTML report. |

## Schema (metadata.json)

- `name` — Repository short name (e.g. express)
- `url` — Clone URL (e.g. https://github.com/expressjs/express)
- `language` — typescript, python, etc.
- `arxo_version` — Arxo version used to generate (e.g. 0.1.0-beta.1)
- `generated_at` — ISO 8601 timestamp

## Adding reports

Run Arxo (public build) against a cloned repo, then copy outputs here under the matching language/repo path. Keep the branch in this repo aligned with the Arxo version used.
