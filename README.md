# AXO / Agent Readiness Layer Skill

This package contains a reusable skill for creating an **Agent Readiness Layer** around a website, business, product, API, or documentation system.

It helps turn a normal human-facing site into an **agent-operable business surface**: a layer that AI agents can discover, understand, trust, compare, recommend, and use safely.

Version 3 adds **Agent Discovery Hardening**: the machine-readable layer is not considered complete until a cold agent can find it without being explicitly told that `/llms.txt`, `/llms-full.txt`, or `/docs/` exist.

Version 4 adds the **Broadcast Protocol**: a standardized set of signals that make the machine layer discoverable through nine independent paths — so any agent, regardless of how it was built, can find it.

## What This Skill Generates

- LLM-friendly documentation
- `llms.txt` and `llms-full.txt`
- `AGENTS.md` — dedicated agent entry point with start-here chain
- Markdown mirrors and source-of-truth docs
- Agent discovery and recommendation profiles
- Agent discovery hardening plans with broadcast signal checklist
- `/docs/` HTML index (no JavaScript required)
- `/sitemap.md`, `robots.txt` hints, alternate markdown links, redirect aliases
- `/.well-known/ai-plugin.json` — cross-platform plugin discovery
- Content negotiation endpoint for `Accept: text/markdown`
- Static fallbacks for JavaScript-rendered pages
- Machine-readable page profiles
- Schema.org JSON-LD and metadata maps
- OpenAPI/MCP readiness maps
- Tool/action definitions
- Agent action matrices
- Permission and identity models
- Human approval and escalation rules
- Memory policies
- Observability and audit requirements
- Sandbox and evaluation scenarios
- Agent journey maps

## Core Concept

This skill is not just SEO, GEO, AEO, or README generation.

It is **AXO: Agent Experience Optimization**.

SEO asks: can a search engine rank this?

AXO asks:

- Can an AI agent discover this business?
- Can a cold agent find the machine-readable layer without being told the file paths?
- Can it understand what the business does?
- Can it compare the offer against alternatives?
- Can it recommend the correct next step?
- Can it use the right tool or API safely?
- Can it avoid hallucinated claims?
- Can the business audit what happened afterward?

## Framework

The skill uses eight layers:

1. **Eyes** — structure and machine readability
2. **Discovery** — how agents find, classify, compare, and reach the machine-readable layer
3. **Context** — source-of-truth docs, markdown mirrors, `llms.txt`, and retrieval surfaces
4. **Hands** — APIs, forms, tools, MCP servers, and actions
5. **Permits** — identity, scopes, approvals, safety, and auditability
6. **Brain** — intent logic, decision rules, conversion routing, and refusal boundaries
7. **Memory** — durable context, brand facts, user preference boundaries, and privacy
8. **Evaluation** — scenario tests, sandbox tests, hallucination traps, and regression checks

## Broadcast Protocol (v4)

A machine-readable layer is incomplete until it is discoverable from at least **five independent paths**. Target nine.

| Signal | Who reads it |
|--------|-------------|
| `<link rel="alternate" type="text/markdown" href="/llms.txt" title="AI Agent Docs">` in `<head>` | HTML-inspection agents, head-parsers |
| Hidden anchor `<a href="/llms.txt" style="display:none">` as first child of `<body>` | Sequential DOM-parsers, scrapers that skip `<head>` |
| `<section role="doc-instructions" aria-labelledby>` in footer | Browser agents, computer-use agents navigating by ARIA landmarks |
| `robots.txt` with `Link: </llms.txt>; rel="help"` + AI docs comment block | Crawlers that parse robots.txt for agent hints |
| `sitemap.xml` with all machine files listed | Agents that start from robots → sitemap |
| `/.well-known/ai-plugin.json` with `description_for_model` pointing to docs | OpenAI-compatible agents, agents that check `.well-known` |
| `/docs/` as a no-JavaScript HTML index | Agents following links without JS execution |
| `/AGENTS.md` with numbered start-here chain | Coding agents, GitHub-pattern agents |
| `/api/negotiate` with `Accept: text/markdown` → returns `llms.txt` | Agents that use HTTP content negotiation |

Each signal is independent. An agent that misses one can find the machine layer through another.

## How to Use

Start with `SKILL.md`. Then use the templates in `/templates`, checklists in `/checklists`, snippets in `/snippets`, and evals in `/evals` to generate a full Agent Readiness Layer for a specific website or business.

For planning-only work, use the framework and checklists without generating files.

For implementation work, generate the requested artifacts using the templates.

## Ecosystem Alignment

This skill is designed to align with the modern agent infrastructure ecosystem:

- Agent Skills / `SKILL.md` package format
- `llms.txt`, `llms-full.txt`, `AGENTS.md`, markdown mirrors, and `sitemap.md`
- Schema.org JSON-LD
- OpenAPI / Swagger tool definitions
- MCP-style tool/resource/prompt surfaces
- `.well-known/ai-plugin.json` (OpenAI plugin standard)
- DPUB ARIA roles for browser-agent navigation
- HTTP content negotiation (`Accept: text/markdown`)
- Agent identity, least-privilege scopes, and audit logs
- Browser-agent and computer-use readiness
- Sandbox testing and deterministic evals
- Agent discoverability and recommendation optimization

## Recommended Deliverable Groups

```txt
/public
  llms.txt
  llms-full.txt
  AGENTS.md
  sitemap.xml
  sitemap.md
  robots.txt

/.well-known
  ai-plugin.json

/api
  negotiate.js          (content negotiation serverless function)

/docs
  index.html            (no-JS HTML docs index)
  index.md              (markdown mirror)
  business-profile.md
  source-of-truth.md
  agent-discovery-profile.md
  agent-journey-map.md
  agent-discovery-hardening-plan.md
  context-retrieval-map.md
  services.md
  pricing.md
  locations.md
  faq.md
  offers.md
  target-audience.md
  brand-voice.md
  conversion-rules.md
  agent-behavior-rules.md
  permission-model.md
  agent-identity-model.md
  memory-policy.md
  tool-readiness-map.md
  mcp-readiness-map.md
  openapi-action-definitions.md
  browser-agent-readiness.md
  agent-action-matrix.md
  observability-audit-plan.md
  evaluation-plan.md
  missing-info-report.md

/schema
  organization.json
  local-business.json
  website.json
  webpage.json
  services.json
  faq.json
  breadcrumbs.json

/metadata
  page-metadata-map.md
  alt-text-map.md

/evals
  agent-readiness-evals.md
  sandbox-scenarios.md
  cold-agent-crawl.md

README.md
```
