# Agent Discovery Hardening Plan

## Purpose

Make the machine-readable layer discoverable by agents that were not explicitly instructed to check `/llms.txt`, `/llms-full.txt`, or `/docs/`.

A site is not fully agent-ready until its agent-readable files are reachable from normal crawl behavior.

## Principle

A machine-readable layer is incomplete until it is discoverable from at least three independent paths:

1. Homepage HTML signals
2. Sitemap or robots.txt
3. Visible or crawlable documentation index

## Required Entry Points

### Root files

- `/llms.txt`
- `/llms-full.txt`
- `/sitemap.xml`
- `/sitemap.md`
- `/robots.txt`

### Documentation index

- `/docs/`
- `/docs/index.md` or an HTML route that renders the same index

### Individual documentation files

- `/docs/source-of-truth.md`
- `/docs/services.md`
- `/docs/agent-behavior-rules.md`
- `/docs/permission-model.md`
- `/docs/conversion-rules.md`
- `/docs/brand-voice.md`
- `/docs/agent-action-matrix.md`
- `/docs/evaluation-plan.md`

Add or remove files based on project scope, but every linked file must return 200.

## Homepage HTML Signals

Add markdown alternate links in the homepage `<head>`.

```html
<link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM-readable site summary">
<link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Full LLM-readable business profile">
<link rel="alternate" type="text/markdown" href="/docs/source-of-truth.md" title="Business source of truth">
<link rel="alternate" type="text/markdown" href="/sitemap.md" title="Markdown sitemap">
```

For important service pages, add page-specific markdown mirrors where possible.

```html
<link rel="alternate" type="text/markdown" href="/docs/services.md" title="Machine-readable service profile">
```

## Visible Links

Add a small footer group or documentation link cluster.

Suggested label:

```txt
AI / Agent Docs
```

Suggested links:

- `llms.txt`
- `Full agent profile`
- `Agent docs`
- `Markdown sitemap`

Keep this visible but unobtrusive. Do not hide it with CSS or make it crawl-inaccessible.

## Sitemap Requirements

Add machine-readable files to `sitemap.xml`:

- `/llms.txt`
- `/llms-full.txt`
- `/sitemap.md`
- `/docs/`
- `/docs/source-of-truth.md`
- `/docs/services.md`
- `/docs/agent-behavior-rules.md`
- `/docs/permission-model.md`
- `/docs/conversion-rules.md`
- `/docs/brand-voice.md`
- `/docs/agent-action-matrix.md`
- `/docs/evaluation-plan.md`

Add `lastmod` dates when possible.

## Markdown Sitemap

Create `/sitemap.md` as a crawl-friendly markdown index.

It should include:

- Human pages
- Agent-readable files
- API/tool documentation, if public
- Source-of-truth docs
- Last updated date

## Robots.txt Hints

`robots.txt` must include the sitemap location.

Optional comments may list agent-readable entry points.

```txt
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml

# Agent-readable entry points:
# https://example.com/llms.txt
# https://example.com/llms-full.txt
# https://example.com/sitemap.md
# https://example.com/docs/
```

Do not block machine-readable docs unless there is a strong privacy reason.

## Redirects for Common Guesses

Agents and humans may guess the wrong filename. Add redirects where possible.

- `/llm.txt` → `/llms.txt`
- `/ai.txt` → `/llms.txt`
- `/agents.txt` → `/llms.txt`
- `/AGENTS.md` → `/docs/` or `/docs/agent-behavior-rules.md`
- `/agent-docs` → `/docs/`
- `/ai-docs` → `/docs/`

Use permanent redirects only when stable.

## Status Code Rules

Every advertised file must return a useful status:

- `200` for real files
- `301` or `308` for aliases
- Never advertise a file that returns `404`
- Avoid authentication for public agent docs
- Avoid JavaScript-only rendering for docs indexes

## Content Type Rules

Preferred content types:

- `.txt` files: `text/plain; charset=utf-8`
- `.md` files: `text/markdown; charset=utf-8` or `text/plain; charset=utf-8`
- HTML docs index: `text/html; charset=utf-8`

## Validation Tests

1. Open the homepage and inspect the `<head>` for alternate links.
2. Open `/llms.txt`.
3. Open `/llms-full.txt`.
4. Open `/docs/`.
5. Open every file linked from `/docs/`.
6. Open `/sitemap.xml` and confirm machine files are listed.
7. Open `/sitemap.md` and confirm all agent docs are listed.
8. Open `/robots.txt` and confirm the sitemap is listed.
9. Test common redirects.
10. Run a cold-agent crawl test where the agent is not told that `/llms.txt` exists.

## Scoring

### Excellent

The agent can discover the machine-readable layer from homepage HTML, footer links, sitemap files, and robots hints.

### Good

The agent can discover `/llms.txt` from at least two crawl paths.

### Weak

The agent-readable docs exist but are not linked from the homepage, sitemap, or docs index.

### Failed

The docs are advertised but return 404, are blocked by robots, or require authentication.
