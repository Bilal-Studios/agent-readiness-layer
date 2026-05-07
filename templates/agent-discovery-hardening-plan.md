# Agent Discovery Hardening Plan

## Purpose

Make the machine-readable layer discoverable by agents that were not explicitly instructed to check `/llms.txt`, `/llms-full.txt`, or `/docs/`.

A site is not fully agent-ready until its agent-readable files are reachable from normal crawl behavior.

## Principle

A machine-readable layer is incomplete until it is discoverable from at least **three independent paths**:

1. Homepage HTML signals (head + body DOM)
2. Sitemap or robots.txt
3. Visible or crawlable documentation index

The goal is to make the site **obvious to a cold agent** — one that starts at the homepage URL with no prior knowledge of the site structure.

---

## Layer 1 — HTML Head Signals

Add markdown alternate links inside `<head>`. These are read before any visible content and before JavaScript executes.

```html
<link rel="alternate" type="text/markdown" href="/llms.txt" title="AI Agent Docs" />
<link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Full LLM-readable business profile" />
<link rel="alternate" type="text/markdown" href="/docs/source-of-truth.md" title="Business source of truth" />
<link rel="alternate" type="text/markdown" href="/sitemap.md" title="Markdown sitemap" />
```

**Title conventions:**
- Primary entry point: `title="AI Agent Docs"` — this is the standardized title recognized by agents trained on the llms.txt specification.
- Secondary: use descriptive titles that include the word "agent", "LLM-readable", or "machine-readable".

---

## Layer 2 — Hidden Body Anchor

Add a hidden anchor as the **first child of `<body>`**, before any layout, navigation, or JavaScript.

```html
<body>
  <a href="/llms.txt" style="display:none" aria-label="Machine-readable documentation for AI agents">AI Agent Entry Point</a>
  <!-- rest of page -->
```

**Why this matters:**
- HTML-parser agents and basic scrapers read the document sequentially
- An agent that does not evaluate `<head>` alternate links will encounter this anchor before any other content
- `display:none` hides from visual users but the element remains in the DOM and is readable by document-level parsers
- Position it before any JavaScript component rendering so it is never conditionally removed

---

## Layer 3 — DPUB ARIA Section (Footer / Docs Area)

Use `role="doc-instructions"` (DPUB ARIA) for the agent docs section in the footer or documentation area.

```html
<section role="doc-instructions" aria-labelledby="agent-docs-header">
  <h2 id="agent-docs-header">AI / Agent Docs</h2>
  <p>AI agents: read /llms.txt first, then /llms-full.txt for the full machine-readable business profile.</p>
  <a href="/llms.txt">AI agents start here: llms.txt</a>
  <a href="/llms-full.txt">Full machine-readable profile: llms-full.txt</a>
  <a href="/docs/">Agent documentation index</a>
  <a href="/AGENTS.md">Agent operating instructions: AGENTS.md</a>
</section>
```

**Why `role="doc-instructions"` instead of `<nav>`:**
- Browser agents and computer-use agents (Claude Computer Use, ChatGPT Atlas) navigate by ARIA landmarks
- `doc-instructions` is a DPUB ARIA role that explicitly labels a region as machine-directed instructions
- `<nav>` implies human navigation and may be deprioritized by agents looking for instructional content

**Link label conventions:**
- Do not use bare filenames as link text — `llms.txt` alone gives no context
- Use descriptive labels: `"AI agents start here: llms.txt"`, `"Full machine-readable profile: llms-full.txt"`

---

## Layer 4 — robots.txt

`robots.txt` must include the sitemap location and an explicit link directive.

```txt
Sitemap: https://{{domain}}/sitemap.xml
Link: <https://{{domain}}/llms.txt>; rel="help"

# AI / Agent docs
# https://{{domain}}/llms.txt
# https://{{domain}}/llms-full.txt
# https://{{domain}}/AGENTS.md
# https://{{domain}}/docs/
# https://{{domain}}/sitemap.md
# https://{{domain}}/.well-known/ai-plugin.json
```

**`Link:` directive:**
- Not a formal robots.txt standard, but recognized by agents trained on HTTP link header patterns
- Harmless to standard crawlers
- Points agents to the machine-readable entry point without requiring them to guess

---

## Layer 5 — sitemap.xml

Include all machine-readable files in `sitemap.xml`. Agents that start at robots.txt will follow the sitemap.

Required entries:
- `/llms.txt`
- `/llms-full.txt`
- `/AGENTS.md`
- `/sitemap.md`
- `/docs/`
- `/docs/source-of-truth.md`
- All other `/docs/*.md` files
- `/.well-known/ai-plugin.json`
- Static content mirrors (e.g. `/works.md`) for JS-rendered pages

All entries should include `<lastmod>`.

---

## Layer 6 — .well-known/ai-plugin.json

Create `/.well-known/ai-plugin.json` for cross-platform plugin discovery. Agents that check `.well-known` paths (OpenAI-compatible agents, some browser agents) will find this without any other signals.

```json
{
  "schema_version": "v1",
  "name_for_human": "{{Business Name}}",
  "name_for_model": "{{business_name_snake_case}}",
  "description_for_human": "{{One-sentence description.}}",
  "description_for_model": "{{Two or three sentences. What the business does, who it serves, and where to find /llms.txt, /llms-full.txt, /AGENTS.md, and /docs/.}}",
  "auth": { "type": "none" },
  "logo_url": "https://{{domain}}/logo.png",
  "contact_email": "{{email}}",
  "legal_info_url": "https://{{domain}}/terms/"
}
```

**`description_for_model` is the most important field.** It should tell an agent reading this file exactly where to go next.

---

## Layer 7 — /docs/ as a No-JavaScript HTML Page

`/docs/` must return a readable HTML page without requiring JavaScript.

Requirements:
- Plain HTML, no client-side rendering
- Lists every documentation file with a one-sentence description
- Recommends reading order for agents
- Links back to `/llms.txt`, `/AGENTS.md`, `/sitemap.md`
- Returns 200 (not a JS loading state)

Use `snippets/docs-index.html` as the implementation template.

Also maintain `/docs/index.md` as a markdown mirror for agents that prefer plain text.

---

## Layer 8 — AGENTS.md

Create `/AGENTS.md` as a plain markdown file at the site root.

Content requirements:
- Numbered start-here chain (llms.txt → llms-full.txt → source-of-truth → behavior rules → action matrix → permission model)
- What the business is (two to three sentences, confirmed facts only)
- Rules: what to use, what not to invent
- Routing rules for primary user intents
- Permission level table
- Content negotiation endpoint documentation
- Full discovery chain as a text diagram
- Standard machine files list

Use `templates/agents-md.md` as the implementation template.

---

## Layer 9 — Content Negotiation

Static file servers cannot serve different content based on `Accept` headers at the root path. Use a dedicated endpoint:

- Create `/api/negotiate` (or equivalent) as a serverless function
- If the request includes `Accept: text/markdown` or `Accept: text/plain`, return `/llms.txt` content with `Content-Type: text/markdown`
- Set `Vary: Accept` on the root path so CDN caches treat accept-header variants separately
- Document the endpoint in `/AGENTS.md`

Use `snippets/content-negotiation-api.js` as the implementation.

**Why a dedicated endpoint instead of root-path negotiation:**
Standard static file servers (Vercel, Netlify, GitHub Pages) evaluate rewrites only after checking for static file matches. A root-level `index.html` takes priority. The dedicated endpoint works reliably on any platform.

---

## Layer 10 — Static Fallbacks for JavaScript-Rendered Pages

Pages that render content via JavaScript (portfolio pages, product listings, search results) are invisible to crawlers and agents that cannot execute JavaScript.

For each JS-rendered page:
1. Add a `<noscript>` block with static summaries of the key content
2. Create a `.md` version at the root (e.g. `/works.md`, `/products.md`)
3. Add the `.md` file to `sitemap.xml`
4. Link the `.md` file from `/docs/` or `/AGENTS.md`

The `.md` version does not need to be complete — it should contain enough confirmed facts that an agent reading it knows what the page offers.

---

## Redirect Aliases

Agents and humans may guess the wrong filename. Add permanent redirects:

- `/llm.txt` → `/llms.txt`
- `/ai.txt` → `/llms.txt`
- `/agents.txt` → `/llms.txt`
- `/AGENTS.txt` → `/AGENTS.md`
- `/agent-docs` → `/docs/`
- `/ai-docs` → `/docs/`

Use `snippets/vercel-agent-redirects.json` as the implementation for Vercel deployments.

---

## www Canonical Redirect

Choose one canonical domain form (www or bare) and redirect the other permanently.

For Vercel:
```json
{
  "source": "/:path*",
  "has": [{ "type": "host", "value": "{{bare-domain.com}}" }],
  "destination": "https://www.{{bare-domain.com}}/:path*",
  "permanent": true
}
```

Ensure all machine-readable file URLs in `sitemap.xml`, `llms.txt`, and `llms-full.txt` use the canonical domain.

---

## Validation

Run these checks after implementation:

```bash
curl -I https://{{domain}}/llms.txt
curl -I https://{{domain}}/llms-full.txt
curl -I https://{{domain}}/docs/
curl -I https://{{domain}}/AGENTS.md
curl -I https://{{domain}}/robots.txt
curl -I https://{{domain}}/sitemap.xml
curl -I https://{{domain}}/.well-known/ai-plugin.json
curl -s -H "Accept: text/markdown" https://{{domain}}/api/negotiate | head -3
```

Then run the cold-agent test from `evals/cold-agent-crawl.md`.

---

## Discovery Score

Count the number of independent discovery paths. Target: **5 or more**.

| Path | Status |
|------|--------|
| `<link rel="alternate">` in `<head>` | |
| Hidden anchor at `<body>` start | |
| `<section role="doc-instructions">` in footer | |
| `robots.txt` Link directive + comments | |
| `sitemap.xml` with machine file entries | |
| `/.well-known/ai-plugin.json` | |
| `/docs/` as no-JS HTML index | |
| `/AGENTS.md` with discovery chain | |
| Content negotiation endpoint | |
| Static fallbacks for JS-rendered pages | |

**Score 8–10:** Excellent. Any type of agent finds the machine layer.
**Score 5–7:** Good. Most agents find it. Improve missing paths.
**Score 3–4:** Weak. Only agents with specific training find it.
**Score 0–2:** Failed. Machine layer exists but cannot be discovered independently.
