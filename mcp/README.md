# MCP Examples

Request/response examples for Arxo MCP tools, by **language** and **repository**. Use these to see typical inputs and outputs and how to interpret them.

## Structure

Each folder is `mcp/<language>/<repo>/`. For each tool:

- **`<tool>.md`** — Human-readable summary: what was requested, what the response means (scores, findings, next steps).
- **`<tool>.json`** — (Optional) Full request and response for tooling or tests. Shape: `{ "tool": "...", "request": { ... }, "response": { ... } }`.

## Tools

- **analyze_architecture** — Run agent and OpenClaw architecture analysis. Params: `project_path` (required), optional `preset`, `metrics`, `config_path`, `output_format`.
- **check_cycles** — Fast cycle check (SCC). Params: `project_path`.
- **arxo_config_help** — Config schema and examples. Params: optional `section`.
- **arxo_config_validate** — Validate arxo.yaml. Params: `project_path`, optional `config_path` or `config_yaml`.
- **arxo_config_suggest** — Suggest arxo.yaml for project. Params: `project_path`, optional `preset`, `language`.

## Adding examples

Capture real MCP calls (e.g. from Cursor with Arxo MCP) or run the MCP server and record request/response. Commit under the branch that matches the Arxo version used.
