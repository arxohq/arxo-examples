# analyze_architecture — TypeScript / express (human-readable)

## Request

- **Tool:** `analyze_architecture`
- **Parameters:** `{ "project_path": "." }` (or absolute path to cloned express repo)
- **Optional:** `preset: "ai"` to run agent_architecture + openclaw_architecture; omit or use default to run configured metrics (e.g. scc only).

## What the tool does

Runs Arxo analysis and returns agent architecture scores (reliability, governance, safety, coordination) and OpenClaw architecture scores (config security, skill governance, observability, supply chain), plus per-detector findings with file, line, and recommendation.

## Example response (summary)

- **agent_architecture.overall_agent_health** — Composite 0–1 score. Higher is better. For a non-agent repo like express, this may be N/A or low if no agent patterns are detected.
- **agent_architecture.agent_reliability_score** — Reliability axis (e.g. loop guards, timeouts).
- **findings** — List of issues with `rule_id`, `severity`, `evidence` (file, line, reason), `recommendation`. Address high-severity first.
- **openclaw_architecture** — Only present if the project has `openclaw.json` (or `.openclaw/openclaw.json`). For express, typically absent or empty.

## What to do next

1. Check `overall_agent_health` (and axis scores) for a quick health signal.
2. Triage `findings` by severity; use `recommendation` and `evidence` to fix issues.
3. For OpenClaw projects, review config and skill governance findings.

## Full request/response

See `analyze_architecture.json` for the raw request and response payload (when available).
