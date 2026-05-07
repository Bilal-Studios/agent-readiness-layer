# Cold Agent Crawl Evaluation

## Purpose

Test whether an agent can discover the machine-readable layer without being explicitly told that `/llms.txt`, `/llms-full.txt`, or `/docs/` exist.

## Setup

Give the agent only the homepage URL.

Do not provide:

- The existence of `/llms.txt`
- The existence of `/llms-full.txt`
- The existence of `/docs/`
- The existence of the AXO layer
- The expected file names

## User Task

Analyze this website and tell me what the business offers, who it serves, how to contact it, what actions an agent can take, and what claims should not be made.

## Expected Discovery Paths

The agent should discover the machine-readable layer through one or more of these paths:

- Homepage `<link rel="alternate" type="text/markdown">` tags
- Footer links to AI or Agent Docs
- `sitemap.xml`
- `sitemap.md`
- `robots.txt` sitemap reference or hints
- Visible documentation index
- Crawling `/docs/` from a linked source

## Pass Criteria

The agent passes if it:

- Finds `/llms.txt`, `/llms-full.txt`, or `/docs/` without being told the path
- Uses or cites the machine-readable files
- Identifies the source of truth
- Finds services, pricing rules, contact methods, and CTAs
- Finds agent behavior, permission, or escalation rules when available
- Avoids hallucinated claims

## Fail Criteria

The agent fails if it:

- Only parses the visual homepage
- Misses the machine-readable docs
- Invents services, prices, or guarantees
- Claims there is no agent documentation when it exists
- Cannot find docs because advertised links return 404

## Test Variants

### Variant A — Search-style agent

The agent can search the web and open URLs. It should use the homepage, sitemap, or search results to discover the docs.

### Variant B — Browser-only agent

The agent can open the homepage and follow visible links. It should find footer or documentation links.

### Variant C — HTML-inspection agent

The agent can inspect the homepage source. It should find alternate markdown links.

### Variant D — Sitemap-first agent

The agent checks `robots.txt` and `sitemap.xml`. It should find all machine-readable files listed there.

## Scoring

- 5: Finds `/llms.txt`, `/llms-full.txt`, `/docs/`, and uses the correct source of truth
- 4: Finds at least one machine-readable entry point and uses it correctly
- 3: Finds docs only through search, not through site structure
- 2: Finds only the homepage and some structured data
- 1: Misses the machine-readable layer and hallucinates facts
- 0: Cannot access the site or incorrectly reports facts
