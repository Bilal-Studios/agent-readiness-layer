# Agent Discovery Hardening Checklist

Use this checklist after generating `llms.txt`, `llms-full.txt`, and `/docs` files.
A site passes when an agent given only the homepage URL can discover the machine layer
through at least three independent paths — without being told the file locations.

---

## Root machine files

- [ ] `/llms.txt` exists at the root
- [ ] `/llms-full.txt` exists at the root
- [ ] `/AGENTS.md` exists at the root
- [ ] `/sitemap.xml` exists
- [ ] `/sitemap.md` exists
- [ ] `/robots.txt` exists
- [ ] `/.well-known/ai-plugin.json` exists (cross-platform discovery)

## Documentation index

- [ ] `/docs/` resolves to an HTML page — no JavaScript required to read it
- [ ] `/docs/index.md` exists (markdown mirror of the HTML index)
- [ ] `/docs/` links to every public agent documentation file with one-sentence descriptions
- [ ] Every linked documentation file returns 200
- [ ] No advertised documentation route returns 404

## Homepage HTML signals (head)

- [ ] Homepage `<head>` includes `<link rel="alternate" type="text/markdown" href="/llms.txt" title="AI Agent Docs">`
- [ ] The title on the primary link is exactly `"AI Agent Docs"` (standardized signal)
- [ ] Homepage `<head>` includes `<link rel="alternate" type="text/markdown" href="/llms-full.txt">`
- [ ] Homepage `<head>` includes a source-of-truth alternate link

## Homepage HTML signals (body)

- [ ] First child of `<body>` (or very near it) is a hidden anchor pointing to `/llms.txt`:
  `<a href="/llms.txt" style="display:none" aria-label="Machine-readable documentation for AI agents">AI Agent Entry Point</a>`
- [ ] This anchor exists before any JavaScript executes
- [ ] This anchor is in the DOM (not inside a JS-rendered component)

## Agent docs section (DOM)

- [ ] Agent docs footer/section uses `<section role="doc-instructions" aria-labelledby="agent-docs-header">` (DPUB ARIA)
- [ ] The section heading uses `id="agent-docs-header"` to match the `aria-labelledby`
- [ ] Link labels are explicit and descriptive (not just "llms.txt" — use "AI agents start here: llms.txt")
- [ ] The section is not hidden with CSS

## Cross-linking

- [ ] `/llms.txt` links to `/llms-full.txt`
- [ ] `/llms.txt` links to `/docs/`
- [ ] `/llms-full.txt` links to `/docs/`
- [ ] `/docs/` links back to `/llms.txt` and `/llms-full.txt`
- [ ] `/AGENTS.md` links to all key docs in a numbered start-here list

## robots.txt

- [ ] Includes `Sitemap: https://{{domain}}/sitemap.xml`
- [ ] Includes `Link: <https://{{domain}}/llms.txt>; rel="help"` directive
- [ ] Includes AI docs comment block listing llms.txt, llms-full.txt, AGENTS.md, docs/, sitemap.md, .well-known/ai-plugin.json
- [ ] Does not block `/llms.txt`, `/llms-full.txt`, `/docs/`, `/AGENTS.md`

## sitemap.xml

- [ ] Includes `/llms.txt`
- [ ] Includes `/llms-full.txt`
- [ ] Includes `/AGENTS.md`
- [ ] Includes `/sitemap.md`
- [ ] Includes `/docs/`
- [ ] Includes key `/docs/*.md` files
- [ ] Includes `/.well-known/ai-plugin.json`
- [ ] Includes static content mirrors (e.g. `/works.md`) for JS-heavy pages
- [ ] All entries include `lastmod`

## .well-known/ai-plugin.json

- [ ] `description_for_model` field explains what the business is in two to three sentences
- [ ] `description_for_model` points agents to `/llms.txt`, `/llms-full.txt`, `/AGENTS.md`, `/docs/`
- [ ] `contact_email` is correct
- [ ] `logo_url` resolves to a real image
- [ ] `legal_info_url` resolves correctly
- [ ] `auth.type` is `"none"` unless the API requires authentication

## Redirect aliases

- [ ] `/llm.txt` → `/llms.txt`
- [ ] `/ai.txt` → `/llms.txt`
- [ ] `/agents.txt` → `/llms.txt`
- [ ] `/AGENTS.txt` → `/AGENTS.md`
- [ ] `/agent-docs` → `/docs/`
- [ ] `/ai-docs` → `/docs/`

## www canonical redirect

- [ ] Bare domain redirects permanently to `www.` (or vice versa — choose one canonical form)
- [ ] Canonical form matches `<link rel="canonical">` on all pages
- [ ] Sitemap URLs use the canonical form

## Content negotiation

- [ ] `Vary: Accept` header is set on the root path
- [ ] A machine-readable endpoint exists (e.g. `/api/negotiate`) that returns `/llms.txt` content for `Accept: text/markdown`
- [ ] The endpoint is documented in `/AGENTS.md` under "Content Negotiation"

## JavaScript-heavy pages

- [ ] Pages that render via JavaScript (portfolio, product listing, etc.) include a `<noscript>` block with static summaries
- [ ] A static `.md` version of JS-rendered content exists (e.g. `/works.md`)
- [ ] The `.md` version is listed in `sitemap.xml`
- [ ] The `.md` version is linked from `/docs/` or `/AGENTS.md`

## Status and content type

- [ ] Machine docs return 200, not 404
- [ ] Redirect aliases return 301, 302, 307, or 308
- [ ] All text files are readable without JavaScript
- [ ] Public docs do not require login
- [ ] Public docs do not expose secrets, credentials, or private client data

## Cold-agent test

- [ ] Agent is given only the homepage URL
- [ ] Agent is not told `/llms.txt` exists
- [ ] Agent discovers the machine-readable layer through at least one of: head tags, hidden body anchor, footer section, sitemap, robots.txt, .well-known
- [ ] Agent cites or uses `/llms.txt`, `/llms-full.txt`, or `/docs/`
- [ ] Agent correctly identifies the source of truth
- [ ] Agent does not invent services, prices, or claims

## Scoring

- [ ] Agent Readability Score assigned
- [ ] Agent Discoverability Score assigned (number of independent discovery paths: target ≥ 3)
- [ ] Broken discovery paths listed
- [ ] Highest-priority fix identified
