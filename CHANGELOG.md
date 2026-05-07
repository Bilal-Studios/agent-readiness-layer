# Changelog

## v4 — Broadcast Protocol: Standardized Agentic Web Discovery

### Problem this solves

A site can have perfectly structured llms.txt, permission models, and agent docs — and still fail the cold-agent test because no discovery signal was broadcast. Agents that do not already know the file locations cannot find them. v4 codifies the full broadcast layer.

### Added

- `snippets/html-agent-discovery-links.html` — expanded with all four signal types: head alternate links, hidden body anchor, DPUB ARIA section, noscript static fallback.
- `snippets/footer-agent-docs.html` — updated to use `<section role="doc-instructions" aria-labelledby>` (DPUB ARIA) instead of `<nav>`.
- `snippets/robots-agent-hints.txt` — added `Link: </llms.txt>; rel="help"` directive.
- `snippets/vercel-agent-redirects.json` — added www canonical redirect (has: host condition), Vary: Accept header, content negotiation route, and explanatory comments.
- `snippets/well-known-ai-plugin.json` — new: cross-platform plugin discovery template for `/.well-known/ai-plugin.json`.
- `snippets/content-negotiation-api.js` — new: serverless function that returns llms.txt content for `Accept: text/markdown` requests. Includes explanation of why root-path negotiation does not work on static file servers.
- `snippets/docs-index.html` — new: no-JavaScript HTML docs index template for `/docs/`. Serves as the crawlable documentation entry point when markdown alone is insufficient.
- `templates/agents-md.md` — new: full AGENTS.md template. Includes numbered start-here chain, rules for agents, routing table, permission level table, content negotiation docs, and discovery chain diagram.
- `checklists/agent-discovery-hardening.md` — major update: added checks for hidden body anchor, DPUB ARIA role, Link: directive, .well-known/ai-plugin.json, www canonical redirect, content negotiation, Vary: Accept, JS-heavy page fallbacks, static .md mirrors.
- `templates/agent-discovery-hardening-plan.md` — major update: ten-layer hardening plan with implementation notes, why-this-matters explanations, code samples, and a scored discovery path table.

### Refined

- `<link rel="alternate">` title convention standardized to `"AI Agent Docs"` for the primary entry point.
- Hidden body anchor documented as a separate signal from head alternate links — positioned as first child of `<body>` so it is read before any JavaScript executes.
- DPUB ARIA `role="doc-instructions"` documented with rationale: browser agents and computer-use agents navigate by ARIA landmarks; `doc-instructions` is more semantically specific than `nav` for machine-directed content.
- Content negotiation documented as a server-side concern, not a static file rewrite — with explanation of why Accept-header rewrites do not work on static hosts.
- Discovery Score introduced: count independent discovery paths, target five or more.

### Why this matters

Agents vary enormously in how they approach a new site. Some read `<head>`. Some follow visible links. Some check `robots.txt` first. Some guess `.well-known`. Some cannot execute JavaScript. A site that broadcasts its machine layer through many independent channels does not depend on any one agent being trained on any one convention. The machine docs become findable to any agent, regardless of how it was built.

---

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
