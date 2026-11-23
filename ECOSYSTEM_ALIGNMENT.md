# Ecosystem Alignment Notes (v5.0.0)

This skill is designed to fit the modern agent-infrastructure ecosystem rather than act as a standalone prompt pack.

## Agent Skills Standard (`agentskills.io` & Agensi)

The package follows the open folder-based skill specification:

- `SKILL.md` with YAML frontmatter (`name`, `description`, `license`, `compatibility`, `metadata`) for progressive disclosure
- `scripts/axo-audit.mjs` — zero-dependency, strictly read-only CLI auditor (safe for marketplace automated security scans)
- `.claude-plugin/plugin.json` & `marketplace.json` for native Claude Code installation
- `templates/`, `checklists/`, `snippets/`, `evals/`, and `examples/` for modular implementation

## Broadcast Protocol v5 (12 Independent Discovery Signals)

A site's machine-readable layer is not complete until a cold agent can find it through at least **five independent paths** without being told file URLs in advance:

1. Homepage `<link rel="alternate" type="text/markdown">` + HTTP `Link` headers
2. First-child `<body>` discovery anchor (before JS execution)
3. Footer `<section role="doc-instructions" aria-labelledby>` (DPUB ARIA landmark for browser/computer-use agents)
4. `robots.txt` `Link: </llms.txt>; rel="help"` and AI docs directives
5. `sitemap.xml` machine-route entries + `/sitemap.md`
6. `/.well-known/ai-plugin.json`
7. No-JS `/docs/` HTML index + `/docs/index.md`
8. `/AGENTS.md` numbered start-here chain
9. HTTP content negotiation (`Accept: text/markdown` + `Vary: Accept`)
10. `/.well-known/agent-card.json` (A2A Agent Card)
11. `/.well-known/mcp.json` (Streamable HTTP MCP server discovery)
12. WebMCP (`navigator.modelContext.registerTool`) browser-native tool registration

## MCP, A2A, WebMCP & OpenAPI

- **MCP (`snippets/well-known-mcp.json`, `snippets/mcp-server-pattern.json`):** separates read-only resources from scoped, approval-gated tools.
- **A2A (`snippets/well-known-agent-card.json`):** advertises capabilities, input/output modes, skills, and verified machine-doc URLs.
- **WebMCP (`snippets/webmcp-browser-tools.js`):** registers typed browser tools with explicit `readOnlyHint` vs. `userConfirmed` gates.
- **OpenAPI (`snippets/openapi-tool-pattern.yaml`):** typed inputs, deterministic error shapes, idempotency keys, and human approval rules.

## Agent Security & Governance

- 6-level permission model (Level 0 Read-only → Level 5 Destructive / Financial / Legal)
- Least-privilege scoped agent identities (never reuse broad human admin credentials)
- Audit logs, hallucination-trap evals, and live cold-agent crawl verification via `scripts/axo-audit.mjs`
