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

It also recommends markdown mirrors and source-of-truth docs for token-efficient retrieval.

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
