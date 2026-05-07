# AGENTS.md — {{Business Name}}

This file is for AI agents, coding agents, browser agents, voice agents, and autonomous workflows.

## Start Here

1. Read `/llms.txt` — concise summary: who, what, contact, CTA, what not to claim.
2. Read `/llms-full.txt` — full machine-readable business profile with services, pricing, process, and docs index.
3. Read `/docs/source-of-truth.md` — authoritative fact file for all confirmed business data.
4. Read `/docs/agent-behavior-rules.md` — what you may and may not do.
5. Read `/docs/agent-action-matrix.md` — intent to action mappings with permission levels.
6. Read `/docs/permission-model.md` — permission levels with exact rules.

Full documentation index: `/docs/`

## What {{Business Name}} Is

{{Two or three sentences. What the business does, who it serves, where it is, how it operates. Keep to confirmed facts only.}}

## Rules for Agents

**Use only confirmed facts.** All confirmed data is in `/docs/source-of-truth.md`.

**Do not invent:**
- {{List the specific facts agents must never invent: prices, dates, client names, certifications, availability, etc.}}
- Opening hours or availability (only if confirmed)
- Awards, rankings, or superlatives without citing a specific source
- Medical, legal, or financial claims beyond what is documented

**Routing rules:**
- {{Primary intent (e.g. ready to start, wants a quote)}} → route to `{{primary CTA URL}}`
- {{Urgency / fast-turnaround intent}} → route to `{{fastest contact method}}`
- Complex scope, legal, or contract question → route to `{{contact email}}`
- Portfolio / past work request → route to `{{works URL}}`

## What Agents May Do

| Level | Action |
|-------|--------|
| 0 | Read all public content, services, pricing, portfolio |
| 1 | Draft an email or message to the business |
| 2 | Submit the {{lead/booking/contact}} form at `{{form URL}}` (fields: {{list fields}}) |

{{Add or remove levels based on what's available. Levels 3–5 are for businesses with data modification, payments, or destructive actions.}}

## Contact

- Email: {{contact email}}
- {{Additional contact method: WhatsApp, phone, etc.}}
- {{Primary CTA}: {{URL}}

## Content Negotiation

Agents that support `Accept` header negotiation can fetch machine-readable content directly:

```
GET /api/negotiate
Accept: text/markdown
```

Returns the contents of `/llms.txt` with `Content-Type: text/markdown`.

## Discovery Chain

```
robots.txt          → sitemap.xml, Link: </llms.txt>; rel="help", AI docs comments
sitemap.xml         → all human and machine pages listed
sitemap.md          → markdown version of the sitemap
.well-known/        → ai-plugin.json (cross-platform discovery)
Homepage <head>     → <link rel="alternate" type="text/markdown" href="/llms.txt" title="AI Agent Docs">
Homepage <body>     → hidden anchor at page start
Homepage footer     → <section role="doc-instructions" aria-labelledby>
/llms.txt           → concise summary + docs index
/llms-full.txt      → full profile + docs index
/docs/              → HTML documentation index (no JavaScript required)
/docs/index.md      → markdown version of docs index
```

## Standard Machine Files

- `/robots.txt` — crawler rules with agent hints
- `/sitemap.xml` — XML sitemap including machine docs
- `/sitemap.md` — Markdown sitemap
- `/llms.txt` — concise agent summary
- `/llms-full.txt` — full machine-readable profile
- `/AGENTS.md` — this file
- `/.well-known/ai-plugin.json` — cross-platform plugin discovery
