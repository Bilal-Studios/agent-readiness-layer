# AXO / Agent Readiness Layer Skill

## Purpose

Use this skill to transform a normal human-facing website, business brief, product, API, or codebase into an **Agent Readiness Layer**: a structured, machine-readable, tool-ready, safety-aware layer that allows AI agents to discover, understand, compare, recommend, and operate the business accurately.

This skill is not only SEO, GEO, AEO, README generation, or `llms.txt` generation.

It is **AXO: Agent Experience Optimization**.

AXO answers:

- Can an AI agent discover this business and classify it correctly?
- Can an AI agent find the machine-readable layer without being told that `/llms.txt` exists?
- Can an AI agent understand the business without relying on visual UI?
- Can an AI agent identify confirmed facts, missing facts, offers, services, prices, locations, and CTAs?
- Can an AI agent compare this business against alternatives without hallucinating?
- Can an AI agent choose the correct next action for different user intents?
- Can an AI agent use forms, APIs, tools, browser workflows, or MCP servers safely?
- Can an AI agent know when to stop and ask for human approval?
- Can the business audit and evaluate agent behavior afterward?

## When to Use This Skill

Use this skill when the user asks to:

- Make a website LLM-friendly, AI-agent-friendly, machine-readable, or agent-operable.
- Generate `llms.txt`, `llms-full.txt`, markdown mirrors, or AI-readable business documentation.
- Create README/documentation for an AI agent, Codex, browser agent, voice agent, sales agent, support agent, search agent, or internal operations agent.
- Optimize a website for AI agents while preserving normal human-facing pages.
- Build structured business docs, schema, metadata, conversion rules, API/tool readiness maps, permission models, or agent evals.
- Audit whether a website can be discovered, understood, recommended, or operated by agents.
- Prepare a business for MCP, OpenAPI/function-calling, browser agents, voice agents, or autonomous workflows.

Do not use this skill for simple SEO metadata only unless the user specifically wants the agent-readiness layer included.

## Core Philosophy

A human website sells.
A machine-readable layer explains.
A discovery layer helps agents find and compare.
A discovery hardening layer makes the machine-readable layer findable from a cold crawl.
A tool layer lets agents act.
A permission layer keeps actions safe.
An evaluation layer proves the system works.

Use the eight-layer model:

1. **Eyes** — Can the agent understand?
2. **Discovery** — Can the agent find, classify, compare, and recommend?
3. **Context** — Can the agent retrieve the right source of truth efficiently?
4. **Hands** — Can the agent act?
5. **Permits** — Can the agent act safely?
6. **Brain** — Can the agent decide correctly?
7. **Memory** — Can the agent stay consistent over time?
8. **Evaluation** — Can we prove it works?

## Required Operating Rules

1. Never hide a whole website inside alt text, meta descriptions, invisible text, or spammy markup.
2. Keep the human-facing website and machine-readable layer consistent.
3. Separate confirmed facts from marketing claims.
4. Mark unknown facts as `Not provided`.
5. Never invent prices, guarantees, awards, certifications, reviews, opening hours, medical/legal claims, or availability.
6. If the business is medical, legal, financial, child-related, housing-related, employment-related, or otherwise high-stakes, add extra caution, escalation, and claim-control rules.
7. Use Markdown, JSON, JSON-LD, OpenAPI-style schemas, MCP-style descriptions, and plain text wherever possible.
8. Every CTA must be explicit and traceable to a confirmed source.
9. Every high-risk action must have a permission level and human approval rule.
10. Every generated output should make it easier for an agent to answer: who is this for, what do they offer, where are they, how do I contact them, what should I recommend next, what can I do, what should I not claim, and when should I escalate?
11. Design for both API agents and browser/computer-use agents.
12. Do not treat `llms.txt`, `llms-full.txt`, or `/docs` as complete until they are discoverable from normal crawl paths.
13. A machine-readable layer is incomplete until it is discoverable from at least three independent paths: homepage HTML, sitemap/robots, and a visible or crawlable documentation index.
14. Every advertised machine-readable route must return 200 or redirect intentionally. Never link agents to a 404.
15. Generate evals before treating the system as ready.

## Inputs to Request or Extract

When available, extract these from the website, brief, codebase, provided copy, sitemap, screenshots, API docs, product docs, or user notes:

- Business name
- Industry
- Location and service area
- Contact methods
- Opening hours
- Languages
- Primary CTA
- Secondary CTA
- Products/services
- Prices/packages
- Booking or buying process
- Target audience
- Pain points
- Differentiators
- Trust signals
- Reviews/testimonials, only if real/provided
- Legal/medical/financial constraints
- Existing pages and URLs
- Existing forms and fields
- Existing APIs or integrations
- Existing schema and metadata
- Existing internal docs or README
- Existing agent/tooling architecture, if any
- Existing CRM, booking, payment, email, analytics, or support systems
- Existing auth/security constraints
- Existing observability, logs, and QA/eval systems

If information is missing, do not ask endless questions by default. Create a Missing Information Report and continue with best-effort placeholders labeled `Not provided`.

## Workflow

### Phase 1 — Source-of-Truth Extraction

Create a factual business profile before generating any docs.

Output:

- Business Source of Truth
- Fact Confidence Map
- Missing Information Report
- Risk Classification
- Claim Control List

Use `templates/business-profile.md`, `templates/source-of-truth.md`, and `templates/missing-info-report.md`.

### Phase 2 — Human Website Structure Audit

Check whether the human website is clear, conversion-focused, accessible, and structurally understandable.

Assess:

- Semantic HTML structure
- Heading hierarchy
- Page purpose clarity
- CTA clarity
- Form labels and input names
- Contact visibility
- Mobile navigation clarity
- Service/category structure
- Trust and proof placement
- Accessibility basics
- Whether critical business facts are visible to humans, not hidden only in machine docs

Output:

- Human UX gaps
- Conversion gaps
- Structural gaps
- Accessibility gaps

Use `checklists/human-website-audit.md`.

### Phase 3 — Eyes Layer: Machine Readability

Create or plan the machine-readable layer.

Assess or generate:

- `llms.txt`
- `llms-full.txt`
- `/docs/` and `/docs/index.md`
- `/sitemap.md`
- Markdown mirrors for important HTML pages
- `README.md`
- `/docs` source-of-truth files
- Schema.org JSON-LD
- Homepage alternate markdown links
- Footer or documentation links to the machine-readable layer
- Metadata map
- Alt text map
- Sitemap and canonical URL logic
- Structured page summaries
- Machine-readable contact, offer, service, and location facts

Output:

- Machine Readability Score
- Missing machine-readable assets
- Proposed files and snippets

Use `templates/llms.txt.md`, `templates/llms-full.txt.md`, `templates/readme.md`, `templates/page-machine-profile.md`, `snippets/json-ld-patterns.json`, and `checklists/machine-readability-audit.md`.

### Phase 4 — Discovery Layer: Agent Discoverability and Recommendation Readiness

Map how an AI agent discovers, evaluates, and decides whether to recommend the business.

This phase has two distinct parts:

1. **Recommendation readiness** — can the agent classify, compare, and recommend the business accurately?
2. **Discovery hardening** — can a cold agent find the machine-readable layer without being told where it is?

Assess or generate:

- Agent discovery profile
- Agent journey map
- Category and entity classification
- Comparison facts
- Recommendation triggers
- Disqualification rules
- Query/intent coverage
- Evidence required for claims
- Source freshness and last-updated fields
- Agent discovery hardening plan
- `/docs/` index or `/docs/index.md`
- `/sitemap.md`
- Homepage `<link rel="alternate" type="text/markdown">` tags
- Footer or visible links to agent docs
- `sitemap.xml` entries for machine-readable files
- `robots.txt` sitemap references and optional agent hints
- Redirect aliases for common guesses, such as `/llm.txt`, `/ai.txt`, `/agents.txt`, and `/AGENTS.md`

Output:

- Agent Discovery Profile
- Agent Journey Map
- Agent Discovery Hardening Plan
- Agent Recommendation Rules
- Comparison Readiness Score
- Agent Discoverability Score
- Broken Discovery Paths Report

Use `templates/agent-discovery-profile.md`, `templates/agent-journey-map.md`, `templates/agent-discovery-hardening-plan.md`, `templates/docs-index.md`, `templates/sitemap.md`, `checklists/agent-discoverability-audit.md`, and `checklists/agent-discovery-hardening.md`.

### Phase 5 — Context Layer: Retrieval and Documentation Surfaces

Define what an agent should read first, what it should retrieve only when needed, and what the canonical source is for each fact.

Assess or generate:

- `llms.txt` as the short routing layer
- `llms-full.txt` as the full machine summary
- `/docs/` as the public documentation index
- `/sitemap.md` as a markdown crawl map
- Markdown mirrors for major pages
- Source-of-truth docs
- Last-updated fields
- Fact confidence labels
- Retrieval-friendly chunk boundaries
- Stable URLs for important facts

Output:

- Context Map
- Retrieval Priority Map
- Source-of-Truth Map

Use `templates/context-retrieval-map.md`.

### Phase 6 — Hands Layer: Tool, API, Browser, and MCP Readiness

Identify what actions an agent should be able to perform.

For each action define:

- Tool name
- Purpose
- When to use
- When not to use
- Inputs
- Outputs
- Error shapes
- Risk level
- Approval requirement
- Idempotency behavior
- Audit log requirements
- MCP resource/tool/prompt mapping, if applicable
- Browser fallback path, if no API exists

Output:

- Agent Action Matrix
- Tool Readiness Map
- OpenAPI Action Definitions
- MCP Readiness Map
- Browser-Agent Interaction Map
- API Readiness Recommendations

Use `templates/tool-readiness-map.md`, `templates/agent-action-matrix.md`, `templates/mcp-readiness-map.md`, `templates/openapi-action-definitions.md`, `templates/browser-agent-readiness.md`, `snippets/openapi-tool-pattern.yaml`, and `snippets/mcp-server-pattern.json`.

### Phase 7 — Permits Layer: Security, Identity, and Permissions

Define what agents may and may not do.

Use permission levels:

- Level 0: Read only
- Level 1: Draft only
- Level 2: Submit low-risk request
- Level 3: Modify business data
- Level 4: Spend money, confirm appointments, or make commitments
- Level 5: Delete, refund, charge, cancel, or legally/medically/financially commit

Output:

- Permission model
- Agent identity model
- OAuth/scope recommendations
- Human approval rules
- Least-privilege scopes
- Rate-limit and retry policy
- Audit log requirements
- Escalation paths
- Rollback requirements

Use `templates/permission-model.md`, `templates/agent-identity-model.md`, and `templates/observability-audit-plan.md`.

### Phase 8 — Brain Layer: Intent and Decision Logic

Define how an agent should behave when representing the business.

Create logic for:

- Emergency/urgent intent
- Ready-to-buy/book intent
- Price-shopping intent
- Research intent
- Anxiety/fear/objection intent
- Location intent
- Language-specific intent
- Complaint/refund/cancellation intent
- High-risk or sensitive intent
- Missing-data handling
- Competitor comparison intent
- Tool-use decision points

Output:

- Conversion Rules
- Agent Behavior Rules
- Forbidden Claims
- Escalation Logic
- Handoff Logic

Use `templates/conversion-rules.md` and `templates/agent-behavior-rules.md`.

### Phase 9 — Memory Layer

Define what the agent should remember, where it should remember it, and what it must not remember.

Output:

- Memory policy
- Durable business facts
- User preference memory boundaries
- Sensitive data rules
- Brand voice persistence rules
- Expiration/update rules
- Conflict resolution rules

Use `templates/memory-policy.md`.

### Phase 10 — Observability Layer

Define how the business can inspect agent behavior after the fact.

Output:

- Trace requirements
- Tool-call logs
- Decision logs
- Human approval logs
- Failure reports
- Hallucination incident logs
- Cost/token monitoring
- Rate limit monitoring
- Regression monitoring

Use `templates/observability-audit-plan.md`.

### Phase 11 — Evaluation and Sandbox Layer

Create scenario-based evals to test whether the agent behaves correctly before production.

Output:

- Test scenarios
- Expected behavior
- Pass/fail criteria
- Hallucination traps
- Tool-use tests
- Permission-boundary tests
- Browser workflow tests
- API sandbox tests
- Regression tests

Use `evals/agent-readiness-evals.md`, `evals/sandbox-scenarios.md`, and `templates/evaluation-plan.md`.

## Standard Deliverables

For a full build, generate or recommend this structure:

```txt
/public
  llms.txt
  llms-full.txt
  sitemap.xml
  sitemap.md
  robots.txt

/docs
  index.md
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
  homepage-alternate-links.html
  footer-agent-docs.html

/evals
  agent-readiness-evals.md
  sandbox-scenarios.md
  cold-agent-crawl.md

README.md
```

For planning-only requests, do not create files. Provide the architecture, checklist, and recommended deliverables.

For implementation requests, create the files as templates or filled content depending on how much business information is available.

## Output Quality Standards

Generated machine-readable content should be:

- Specific
- Factual
- Stable
- Easy to parse
- Action-oriented
- Low ambiguity
- Consistent with visible website content
- Explicit about missing information
- Safe for agents to use
- Easy to validate with evals
- Compatible with API agents, browser agents, voice agents, and search agents

Avoid:

- Keyword stuffing
- Generic marketing fluff
- Fake urgency
- Hidden text strategies
- Claims not visible or supported elsewhere
- Long meta descriptions
- Alt text used as secret prompts
- Tool definitions with vague names like `doThing` or `submit`
- Error handling that only says `failed`
- Agent permissions that reuse broad human credentials
- Tool actions without idempotency guidance
- Recommendations without evidence or source freshness

## Recommended Response Pattern

When using this skill in chat, structure the response as:

1. What I found / extracted
2. What is missing
3. Agent-readiness diagnosis by layer
4. Agent journey and discovery risks
5. Agent discovery hardening status
6. Recommended file/tool structure
7. Exact next implementation prompt or generated files
8. Evaluation checklist

## Final Sanity Check

Before delivering, verify:

- Does an agent know what the business does?
- Does an agent know who the customer is?
- Does an agent know the correct CTA?
- Does an agent know what not to say?
- Does an agent know when to ask a human?
- Does an agent know which tool to use?
- Does an agent know which actions require approval?
- Does an agent know the source of truth for each fact?
- Does an agent know how fresh the information is?
- Can a cold agent find the machine-readable layer without being told the exact file paths?
- Do `/docs/`, `/llms.txt`, `/llms-full.txt`, and `/sitemap.md` return 200 or intentional redirects?
- Does the homepage expose alternate markdown links or visible agent documentation links?
- Does `sitemap.xml` list the agent-readable files?
- Does an agent know what to do if an API fails?
- Can the business audit what the agent did and why?
- Can the business run evals before exposing the agent to real users?
