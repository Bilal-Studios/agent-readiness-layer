# Ecosystem Alignment Notes

This skill is designed to fit the current agent-infrastructure ecosystem rather than act as a standalone prompt pack.

## Compatible Concepts

## Agent Skills

The package follows the folder-based skill model:

- `SKILL.md` as the entry point
- templates for generated artifacts
- checklists for audits
- snippets for structured data/tooling
- evals for scenario testing

## llms.txt / Machine-Readable Website Docs

The skill treats `llms.txt` as a short routing/index layer and `llms-full.txt` as a full machine-readable website summary.

It also recommends markdown mirrors, `/docs/` indexes, `/sitemap.md`, and source-of-truth docs for token-efficient retrieval.

## Agent Discovery Hardening

The skill assumes that not every agent will automatically check `/llms.txt` or know that machine-readable docs exist.

For that reason, v3 adds hardening patterns that make the AXO layer discoverable from normal crawl behavior:

- homepage `<link rel="alternate" type="text/markdown">` signals
- footer links to AI / Agent Docs
- `/docs/` and `/docs/index.md` indexes
- `sitemap.xml` entries for machine-readable files
- `/sitemap.md` for markdown-first crawling
- `robots.txt` sitemap references and optional hints
- redirects for common guesses like `/llm.txt`, `/ai.txt`, `/agents.txt`, and `/AGENTS.md`
- cold-agent crawl evals

## MCP / Tool Protocols

The skill includes an MCP readiness map and a server pattern that model:

- resources = readable business facts and catalogs
- tools = controlled business actions
- prompts = reusable agent behavior templates
- scopes = least-privilege permissions

## OpenAPI / Function Calling

The skill includes OpenAPI-style action definitions with:

- clear action descriptions
- typed inputs
- structured outputs
- deterministic error shapes
- idempotency keys
- human approval boundaries

## Browser / Computer-Use Agents

The skill includes browser-agent readiness checks for cases where APIs do not exist yet.

It focuses on predictable forms, labels, selectors, success states, and fallback paths.

## Agent Security and Governance

The skill includes templates for:

- agent-specific identity
- least-privilege scopes
- approval rules
- audit logs
- observability
- rate-limit and retry policy

## Agent Discoverability / AXO

The skill formalizes AXO as:

- discovery
- classification
- comparison
- recommendation
- action
- handoff
- post-action audit

This positions the skill as a practical generator for Agent Experience Optimization, not only AI SEO.
