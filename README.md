# AXO — Agent Readiness Layer Skill (v5.0.0)

[![Version](https://img.shields.io/badge/version-5.0.0-00FFD1?style=flat-square)](./CHANGELOG.md)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)
[![Agent Skills Standard](https://img.shields.io/badge/standard-agentskills.io-FF00C8?style=flat-square)](./SKILL.md)
[![Zero-Dep CLI](https://img.shields.io/badge/CLI-zero--dependency-FFD166?style=flat-square)](./scripts/axo-audit.mjs)

Turn any website, SaaS product, API, or codebase into an **AI agent-operable business surface** — so AI agents can discover, understand, compare, recommend, and act on it safely without hallucinating.

> **SEO** asks: *Can a search engine rank this?*
> **GEO** asks: *Can an LLM cite this?*
> **AXO (Agent Experience Optimization)** asks: *Can a cold AI agent discover this site, verify its facts, avoid forbidden claims, invoke the right tool with the right permission level, and leave an audit trail?*

---

## Install in 10 Seconds

### Universal Skills CLI (`skills.sh` / Codex / Claude Code / Cursor / Windsurf / Antigravity)
```bash
npx skills add Bilal-Studios/agent-readiness-layer
```

### Agensi Marketplace (`agensi.io`)
Install directly from [Agensi](https://agensi.io) via the Agensi MCP connector, or download the packaged skill bundle.

### Manual Clone (Any Agent Harness)
```bash
git clone https://github.com/Bilal-Studios/agent-readiness-layer.git ~/.agents/skills/agent-readiness-layer
```

---

## Instant Live Audit (Zero Dependencies)

Score any live website against all **12 Broadcast Protocol v5 signals** right now — pure Node.js 18+ built-in `fetch`, strictly read-only, zero packages to install:

```bash
node scripts/axo-audit.mjs https://example.com
node scripts/axo-audit.mjs https://example.com --json
```

It checks `/llms.txt`, `/llms-full.txt`, `/AGENTS.md`, `<link rel="alternate" type="text/markdown">`, DPUB ARIA `role="doc-instructions"`, `robots.txt` agent hints, `sitemap.xml` / `sitemap.md`, `/docs/`, Schema.org JSON-LD, `Accept: text/markdown` content negotiation, `/.well-known/agent-card.json` (A2A) & `ai-plugin.json`, and `/.well-known/mcp.json` / WebMCP — then outputs a **0–100 AXO Score** and prioritized fixes.

---

## What's New in v5.0.0

- **Zero-Dependency Live CLI Auditor (`scripts/axo-audit.mjs`)** — verify real cold-agent discoverability before and after shipping.
- **Broadcast Protocol v5 (12 Independent Signals)** — adds 3 modern agentic-web standards on top of v4's 9 signals:
  - **A2A Agent Card** (`snippets/well-known-agent-card.json` → `/.well-known/agent-card.json`)
  - **MCP Streamable HTTP Discovery** (`snippets/well-known-mcp.json` → `/.well-known/mcp.json`)
  - **WebMCP Browser Tool Registration** (`snippets/webmcp-browser-tools.js` → `navigator.modelContext`)
- **Full Ecosystem Packaging** — compliant `SKILL.md` YAML frontmatter (`agentskills.io` / Agensi.io), `.claude-plugin/plugin.json` + `marketplace.json`, and clean progressive-disclosure layout.

---

## The 8-Layer AXO Framework

1. **Eyes** — Semantic HTML, Schema.org JSON-LD, and clean machine readability
2. **Discovery** — How cold agents find, classify, compare, and recommend the business
3. **Context** — Source-of-truth docs, `llms.txt`, `llms-full.txt`, `/docs/`, and Markdown mirrors
4. **Hands** — OpenAPI schemas, MCP tools/resources, WebMCP browser tools, and form fallbacks
5. **Permits** — 6-tier permission model (Level 0 read-only → Level 5 destructive/legal/financial), agent identity, and human-approval gates
6. **Brain** — Intent routing, conversion logic, refusal boundaries, and forbidden-claim rules
7. **Memory** — Durable verified facts vs. ephemeral user state and privacy boundaries
8. **Evaluation** — Cold-agent crawl evals, hallucination traps, sandbox scenarios, and regression checks

---

## Broadcast Protocol v5 (12 Independent Signals)

A machine-readable layer is incomplete until a cold agent can discover it through at least **5 independent paths**. Target all 12:

| # | Signal | Who reads it |
|---|--------|-------------|
| 1 | `<link rel="alternate" type="text/markdown" href="/llms.txt" title="AI Agent Docs">` in `<head>` | HTML-inspection agents, head parsers |
| 2 | Hidden anchor `<a href="/llms.txt" style="display:none">` as first child of `<body>` | Sequential DOM parsers that skip `<head>` |
| 3 | `<section role="doc-instructions" aria-labelledby>` in footer | Browser & computer-use agents navigating ARIA landmarks |
| 4 | `robots.txt` with `Link: </llms.txt>; rel="help"` + AI docs block | Crawlers inspecting `robots.txt` first |
| 5 | `sitemap.xml` listing machine files + `/sitemap.md` | Agents traversing robots → sitemap |
| 6 | `/.well-known/ai-plugin.json` | OpenAI-compatible plugin agents |
| 7 | `/docs/` no-JavaScript HTML index + `/docs/index.md` | Agents crawling without JS execution |
| 8 | `/AGENTS.md` with numbered start-here chain | Coding agents & repo-pattern agents |
| 9 | `Accept: text/markdown` content negotiation (`Vary: Accept`) | HTTP-negotiating agents & edge gateways |
| 10 | `/.well-known/agent-card.json` (A2A) | Agent-to-Agent (A2A) discovery clients |
| 11 | `/.well-known/mcp.json` | Streamable HTTP MCP clients |
| 12 | WebMCP (`navigator.modelContext.registerTool`) | Browser-native agents executing typed page tools |

---

## Package Contents

```text
agent-readiness-layer/
├── SKILL.md                          # Agent Skills entry point (YAML frontmatter + 11-phase workflow)
├── manifest.yaml                     # Structured capability & observability manifest
├── .claude-plugin/
│   ├── plugin.json                   # Claude Code plugin descriptor
│   └── marketplace.json              # Marketplace listing definition
├── scripts/
│   └── axo-audit.mjs                 # Zero-dep read-only live AXO auditor (Node 18+)
├── templates/                        # 24 ready-to-fill AXO deliverable templates
├── snippets/                         # 14 drop-in HTML, JSON-LD, MCP, A2A, WebMCP & serverless snippets
├── checklists/                       # 6 structured audit checklists
├── evals/                            # Cold-agent crawl, sandbox, and hallucination-trap evals
└── examples/                         # Full reference builds (SaaS/agency, dental clinic, live studio)
```

---

## Example Prompts Once Installed

- *"Audit `https://mysite.com` with `agent-readiness-layer` and fix the top 5 missing signals."*
- *"Build a full AXO Agent Readiness Layer (`llms.txt`, `AGENTS.md`, `/.well-known/agent-card.json`, permission model, and evals) for this repo."*
- *"Design a 6-level permission model and WebMCP tool definitions for our clinic booking flow."*

---

## Built by Bilal Studio

Created and maintained by **[Bilal Studio](https://bilalstudio.io)** — web design, AI interfaces, and agent-ready architecture for modern businesses.

- Want a **done-for-you AXO implementation**, live MCP/WebMCP integration, or AI voice/booking receptionist? Reach out at **[hello@bilalstudio.io](mailto:hello@bilalstudio.io)** or visit **[bilalstudio.io](https://bilalstudio.io)**.
- Found this useful? Star the repo or open an issue/PR.
