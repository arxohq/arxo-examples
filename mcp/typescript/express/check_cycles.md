# check_cycles — TypeScript / express (human-readable)

## Request

- **Tool:** `check_cycles`
- **Parameters:** `{ "project_path": "." }` (or path to cloned express repo)

## What the tool does

Fast check for circular dependencies (SCC). Returns cycle count, max cycle size, and total nodes in cycles. No full report — use `analyze_architecture` with metric scc for full evidence.

## Example response (summary)

- **cycle_count** — Number of strongly connected components (cycles).
- **max_cycle_size** — Size of the largest cycle (number of nodes).
- **total_nodes_in_cycles** — Total nodes that participate in at least one cycle.

## What to do next

- If `cycle_count` > 0, run full analysis (`analyze_architecture` with scc or preset) to see which modules form cycles and prioritize breaking them.
