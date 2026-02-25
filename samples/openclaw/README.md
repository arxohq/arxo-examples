# OpenClaw sample

Minimal OpenClaw project for testing the **openclaw_architecture** metric. The metric looks for:

- `.openclaw/openclaw.json`
- `openclaw.json`
- `openclaw.config.json`

## minimal-sample

Contains a minimal `openclaw.json` so that `arxo analyze --metric openclaw_architecture --path samples/openclaw/minimal-sample` (or MCP `analyze_architecture` with that path) produces openclaw_architecture results. Use it to:

- Try openclaw_architecture without a real OpenClaw deployment.
- Generate example reports and MCP responses for the examples repo.

Copy or symlink into your project, or run Arxo with `--path` pointing at `samples/openclaw/minimal-sample`.
