# Minimal OpenClaw sample

Minimal `openclaw.json` for testing **openclaw_architecture**. Run from the arxo-examples repo root:

```bash
arxo analyze --metric openclaw_architecture --path samples/openclaw/minimal-sample --format json --output report.json
```

Or with MCP: `analyze_architecture({ "project_path": "/path/to/arxo-examples/samples/openclaw/minimal-sample", "preset": "ai" })`.

The sample intentionally includes some gaps (e.g. binding, auth) so that the metric produces findings for documentation and demos. Harden values in production.
