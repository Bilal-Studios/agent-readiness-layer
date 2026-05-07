# AXO / Agent Readiness Layer Skill

This package contains a reusable skill for creating an **Agent Readiness Layer** around a website, business, product, API, or documentation system.

It helps turn a normal human-facing site into an **agent-operable business surface**: a layer that AI agents can discover, understand, trust, compare, recommend, and use safely.

## What This Skill Generates

- LLM-friendly documentation
- `llms.txt` and `llms-full.txt`
- Markdown mirrors and source-of-truth docs
- Agent discovery and recommendation profiles
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
- Can it understand what the business does?
- Can it compare the offer against alternatives?
- Can it recommend the correct next step?
- Can it use the right tool or API safely?
- Can it avoid hallucinated claims?
- Can the business audit what happened afterward?

## Framework

The skill uses eight layers:

1. **Eyes** — structure and machine readability
2. **Discovery** — how agents find, classify, and compare the business
3. **Context** — source-of-truth docs, markdown mirrors, `llms.txt`, and retrieval surfaces
4. **Hands** — APIs, forms, tools, MCP servers, and actions
5. **Permits** — identity, scopes, approvals, safety, and auditability
6. **Brain** — intent logic, decision rules, conversion routing, and refusal boundaries
7. **Memory** — durable context, brand facts, user preference boundaries, and privacy
8. **Evaluation** — scenario tests, sandbox tests, hallucination traps, and regression checks

## How to Use

Start with `SKILL.md`. Then use the templates in `/templates`, checklists in `/checklists`, snippets in `/snippets`, and evals in `/evals` to generate a full Agent Readiness Layer for a specific website or business.

For planning-only work, use the framework and checklists without generating files.

For implementation work, generate the requested artifacts using the templates.

## Ecosystem Alignment

This skill is designed to align with the modern agent infrastructure ecosystem:

- Agent Skills / `SKILL.md` package format
- `llms.txt` and markdown website mirrors
- Schema.org JSON-LD
- OpenAPI / Swagger tool definitions
- MCP-style tool/resource/prompt surfaces
- Agent identity, least-privilege scopes, and audit logs
- Browser-agent and computer-use readiness
- Sandbox testing and deterministic evals
- Agent discoverability and recommendation optimization

## Recommended Deliverable Groups

```txt
/public
  llms.txt
  llms-full.txt
  sitemap.xml
  robots.txt

/docs
  business-profile.md
  source-of-truth.md
  agent-discovery-profile.md
  agent-journey-map.md
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
  memory-policy.md
  tool-readiness-map.md
  mcp-readiness-map.md
  openapi-action-definitions.md
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

README.md
```
