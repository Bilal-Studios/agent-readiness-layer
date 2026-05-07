# Agent Readiness Layer / AXO Generator Skill

## Purpose

Use this skill to transform a normal human-facing website, business brief, or codebase into an Agent Readiness Layer: a structured, machine-readable, tool-ready, safety-aware layer that allows AI agents to understand, represent, recommend, and operate the business accurately.

This skill is not only SEO, GEO, or README generation. It is Agent Experience Optimization (AXO).

AXO answers:

- Can an AI agent understand this business without relying on visual UI?
- Can an AI agent identify confirmed facts, missing facts, offers, services, prices, locations, and CTAs?
- Can an AI agent choose the correct next action for different user intents?
- Can an AI agent use forms, APIs, or tools safely?
- Can an AI agent avoid hallucinating prices, guarantees, claims, or availability?
- Can the business audit and evaluate agent behavior afterward?

## When to Use This Skill

Use this skill when the user asks to:

- Make a website LLM-friendly, AI-agent-friendly, machine-readable, or agent-operable.
- Generate `llms.txt`, `llms-full.txt`, machine-readable docs, or AI-readable business documentation.
- Create README/documentation for an AI agent, Codex, browser agent, voice agent, sales agent, support agent, or search agent.
- Optimize a website for AI agents while preserving normal human-facing pages.
- Build structured business docs, schema, metadata, conversion rules, API/tool readiness maps, permission models, or agent evals.
- Audit whether a website can be understood or operated by agents.

Do not use this skill for simple SEO metadata only unless the user specifically wants the agent-readiness layer included.

## Core Philosophy

A human website sells.
A machine-readable layer explains.
A tool layer lets agents act.
A permission layer keeps actions safe.
An evaluation layer proves the system works.

Use the six-layer model:

1. Eyes — Can the agent understand?
2. Hands — Can the agent act?
3. Permits — Can the agent act safely?
4. Brain — Can the agent decide correctly?
5. Memory — Can the agent stay consistent over time?
6. Evaluation — Can we prove it works?

## Required Operating Rules

1. Never hide a whole website inside alt text, meta descriptions, invisible text, or spammy markup.
2. Keep the human-facing website and machine-readable layer consistent.
3. Separate confirmed facts from marketing claims.
4. Mark unknown facts as `Not provided`.
5. Never invent prices, guarantees, awards, certifications, reviews, opening hours, medical/legal claims, or availability.
6. If the business is medical, legal, financial, or otherwise high-stakes, add extra caution, escalation, and claim-control rules.
7. Use Markdown, JSON, JSON-LD, OpenAPI-style schemas, and plain text wherever possible.
8. Every CTA must be explicit and traceable to a confirmed source.
9. Every high-risk action must have a permission level and human approval rule.
10. Every generated output should make it easier for an agent to answer: who is this for, what do they offer, where are they, how do I contact them, what should I recommend next, what should I not claim?

## Inputs to Request or Extract

When available, extract these from the website, brief, codebase, provided copy, sitemap, screenshots, or user notes:

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

If information is missing, do not ask endless questions by default. Create a Missing Information Report and continue with best-effort placeholders labeled `Not provided`.

## Workflow

### Phase 1 — Source-of-Truth Extraction

Create a factual business profile before generating any docs.

Output:

- Business Source of Truth
- Fact Confidence Map
- Missing Information Report
- Risk Classification

Use `templates/business-profile.md` and `templates/missing-info-report.md`.

### Phase 2 — Human Website Structure Audit

Check whether the human website is clear, conversion-focused, and structurally understandable.

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

Output:

- Human UX gaps
- Conversion gaps
- Structural gaps

Use `checklists/human-website-audit.md`.

### Phase 3 — Eyes Layer: Machine Readability

Create or plan the machine-readable layer.

Assess or generate:

- `llms.txt`
- `llms-full.txt`
- Markdown mirrors for important HTML pages
- `README.md`
- `/docs` source-of-truth files
- Schema.org JSON-LD
- Metadata map
- Alt text map
- Sitemap and canonical URL logic

Output:

- Machine Readability Score
- Missing machine-readable assets
- Proposed files and snippets

Use `templates/llms.txt.md`, `templates/llms-full.txt.md`, `templates/readme.md`, `templates/page-machine-profile.md`, `snippets/json-ld-patterns.json`, and `checklists/machine-readability-audit.md`.

### Phase 4 — Hands Layer: Tool and API Readiness

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

Output:

- Agent Action Matrix
- Tool Readiness Map
- API Readiness Recommendations

Use `templates/tool-readiness-map.md`, `templates/agent-action-matrix.md`, and `snippets/openapi-tool-pattern.yaml`.

### Phase 5 — Permits Layer: Security and Permissions

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
- Human approval rules
- Least-privilege scopes
- Audit log requirements
- Escalation paths

Use `templates/permission-model.md`.

### Phase 6 — Brain Layer: Intent and Decision Logic

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

Output:

- Conversion Rules
- Agent Behavior Rules
- Forbidden Claims
- Escalation Logic

Use `templates/conversion-rules.md` and `templates/agent-behavior-rules.md`.

### Phase 7 — Memory Layer

Define what the agent should remember, where it should remember it, and what it must not remember.

Output:

- Memory policy
- Long-term business facts
- User preference memory boundaries
- Sensitive data rules
- Brand voice persistence rules

Use `templates/memory-policy.md`.

### Phase 8 — Evaluation Layer

Create scenario-based evals to test whether the agent behaves correctly.

Output:

- Test scenarios
- Expected behavior
- Pass/fail criteria
- Hallucination traps
- Tool-use tests
- Permission-boundary tests

Use `evals/agent-readiness-evals.md` and `templates/evaluation-plan.md`.

## Standard Deliverables

For a full build, generate or recommend this structure:

```txt
/public
  llms.txt
  llms-full.txt
  sitemap.xml
  robots.txt

/docs
  business-profile.md
  source-of-truth.md
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
  agent-action-matrix.md
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

## Recommended Response Pattern

When using this skill in chat, structure the response as:

1. What I found / extracted
2. What is missing
3. Agent-readiness diagnosis by layer
4. Recommended file structure
5. Exact next implementation prompt or generated files
6. Evaluation checklist

## Final Sanity Check

Before delivering, verify:

- Does an agent know what the business does?
- Does an agent know who the customer is?
- Does an agent know the correct CTA?
- Does an agent know what not to say?
- Does an agent know when to ask a human?
- Does an agent know which tool to use?
- Does an agent know which actions require approval?
- Can the business audit what the agent did and why?
