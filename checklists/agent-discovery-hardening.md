# Agent Discovery Hardening Checklist

Use this checklist after generating `llms.txt`, `llms-full.txt`, and `/docs` files.

## Root machine files

- [ ] `/llms.txt` exists at the root
- [ ] `/llms-full.txt` exists at the root
- [ ] `/sitemap.xml` exists
- [ ] `/sitemap.md` exists
- [ ] `/robots.txt` exists

## Documentation index

- [ ] `/docs/` resolves successfully
- [ ] `/docs/index.md` exists or `/docs/` renders an equivalent index
- [ ] `/docs/` links to every public agent documentation file
- [ ] Every linked documentation file returns 200
- [ ] No advertised documentation route returns 404

## Cross-linking

- [ ] `/llms.txt` links to `/llms-full.txt`
- [ ] `/llms.txt` links to `/docs/`
- [ ] `/llms-full.txt` links to `/docs/`
- [ ] `/docs/` links back to `/llms.txt` and `/llms-full.txt`
- [ ] Human pages link to the agent docs from a footer or documentation area

## Homepage HTML signals

- [ ] Homepage `<head>` includes `<link rel="alternate" type="text/markdown" href="/llms.txt">`
- [ ] Homepage `<head>` includes `<link rel="alternate" type="text/markdown" href="/llms-full.txt">`
- [ ] Homepage `<head>` includes a source-of-truth or docs alternate link
- [ ] Important service pages include page-specific markdown alternate links when possible

## Sitemaps

- [ ] `sitemap.xml` includes `/llms.txt`
- [ ] `sitemap.xml` includes `/llms-full.txt`
- [ ] `sitemap.xml` includes `/sitemap.md`
- [ ] `sitemap.xml` includes `/docs/`
- [ ] `sitemap.xml` includes key `/docs/*.md` files
- [ ] Machine-readable URLs include `lastmod` where possible
- [ ] `/sitemap.md` lists both human pages and agent-readable docs

## Robots and crawlability

- [ ] `robots.txt` includes `Sitemap: https://example.com/sitemap.xml`
- [ ] `robots.txt` does not block `/llms.txt`
- [ ] `robots.txt` does not block `/llms-full.txt`
- [ ] `robots.txt` does not block `/docs/`
- [ ] Optional robots comments list agent-readable entry points

## Redirect aliases

- [ ] `/llm.txt` redirects to `/llms.txt`
- [ ] `/ai.txt` redirects to `/llms.txt`
- [ ] `/agents.txt` redirects to `/llms.txt`
- [ ] `/AGENTS.md` redirects to `/docs/` or `/docs/agent-behavior-rules.md`
- [ ] `/agent-docs` redirects to `/docs/`
- [ ] `/ai-docs` redirects to `/docs/`

## Status and content type

- [ ] Machine docs return 200, not 404
- [ ] Redirect aliases return 301, 302, 307, or 308
- [ ] Text files are readable without JavaScript
- [ ] Markdown files are readable without JavaScript
- [ ] Public docs do not require login
- [ ] Public docs do not expose secrets, internal IDs, credentials, or private client data

## Cold-agent test

- [ ] Agent is given only the homepage URL
- [ ] Agent is not told `/llms.txt` exists
- [ ] Agent discovers the machine-readable layer through links, sitemap, robots, or head tags
- [ ] Agent cites or uses `/llms.txt`, `/llms-full.txt`, or `/docs/`
- [ ] Agent correctly identifies the source of truth

## Scoring

- [ ] Agent Readability Score assigned
- [ ] Agent Discoverability Score assigned
- [ ] Broken discovery paths listed
- [ ] Highest-priority fix identified
