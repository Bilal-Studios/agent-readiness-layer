# Changelog

## v3 — Agent Discovery Hardening Upgrade

### Added

- Added required Agent Discovery Hardening module.
- Added the principle that a machine-readable layer is incomplete until a cold agent can discover it from at least three independent paths.
- Added `templates/agent-discovery-hardening-plan.md`.
- Added `templates/docs-index.md`.
- Added `templates/sitemap.md`.
- Added `checklists/agent-discovery-hardening.md`.
- Added `snippets/html-agent-discovery-links.html`.
- Added `snippets/footer-agent-docs.html`.
- Added `snippets/robots-agent-hints.txt`.
- Added `snippets/sitemap-md-pattern.md`.
- Added `snippets/vercel-agent-redirects.json`.
- Added `evals/cold-agent-crawl.md`.

### Refined

- Updated `SKILL.md` to require discoverability validation for `/llms.txt`, `/llms-full.txt`, `/docs/`, and `/sitemap.md`.
- Updated the Discovery layer to include cold-agent crawl readiness, not only recommendation readiness.
- Updated deliverables to include `/docs/index.md`, `/sitemap.md`, alternate markdown links, footer agent docs, redirect aliases, and cold-crawl evals.
- Added Agent Discoverability Score alongside Agent Readability Score.
- Added status-code and content-type rules for machine-readable files.

### Why This Matters

A site can be highly agent-readable once the machine docs are found, but still weak if agents do not know where to look. v3 makes the skill generate the discovery paths that allow normal crawlers, browser agents, search agents, and HTML-inspection agents to find the AXO layer without prior knowledge.

---

## v2 — Ecosystem-Aligned AXO Upgrade

### Added

- Expanded the skill from a six-layer model to an eight-layer AXO model.
- Added Discovery and Context layers.
- Added `agent-discovery-profile.md`.
- Added `agent-journey-map.md`.
- Added `context-retrieval-map.md`.
- Added `mcp-readiness-map.md`.
- Added `openapi-action-definitions.md`.
- Added `browser-agent-readiness.md`.
- Added `agent-identity-model.md`.
- Added `observability-audit-plan.md`.
- Added `agent-discoverability-audit.md`.
- Added `mcp-readiness-audit.md`.
- Added `sandbox-scenarios.md`.
- Added `mcp-server-pattern.json`.
- Added ecosystem alignment notes.

### Refined

- Reframed the skill as AXO: Agent Experience Optimization.
- Added support for MCP-style resources, tools, prompts, and scopes.
- Added OpenAPI/function-calling action design rules.
- Added browser-agent fallback planning for websites without APIs.
- Added agent-specific identity and permission modeling.
- Added observability and audit requirements.
- Added recommendation/disqualification logic for agent discoverability.
- Added retrieval priority and source-of-truth mapping.

### Preserved

- Original Agent Readiness Layer concept.
- Human website + machine layer separation.
- `llms.txt` and `llms-full.txt` generation.
- Source-of-truth and missing-info discipline.
- Tool readiness, permission model, memory policy, and eval framework.
