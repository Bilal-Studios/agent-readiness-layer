# {{Project / Website Name}}

## Purpose

This project contains the human-facing website and the Agent Readiness Layer for {{business_name}}.

The human-facing website is designed for visitors.
The Agent Readiness Layer is designed for AI agents, crawlers, browser agents, search agents, voice agents, sales agents, support agents, and internal automation systems.

## Business Summary

{{Factual summary of what the business does, who it serves, where it operates, and the main conversion goal.}}

## Primary Conversion Goal

- Primary CTA: {{primary_cta}}
- Secondary CTA: {{secondary_cta}}
- Conversion destination: {{phone / WhatsApp / booking URL / form / checkout}}

## Target Audience

{{Audience summary}}

## Pages

| Page | URL | Human purpose | Machine summary | Primary CTA |
|---|---|---|---|---|
| Home | {{url}} | {{purpose}} | {{summary}} | {{cta}} |
| Services | {{url}} | {{purpose}} | {{summary}} | {{cta}} |
| Contact | {{url}} | {{purpose}} | {{summary}} | {{cta}} |

## Agent Readiness Files

| File | Purpose |
|---|---|
| `/public/llms.txt` | Curated short guide for LLMs and agents |
| `/public/llms-full.txt` | Full machine-readable business layer |
| `/docs/business-profile.md` | Source-of-truth business facts |
| `/docs/services.md` | Structured service documentation |
| `/docs/conversion-rules.md` | Intent and CTA routing logic |
| `/docs/permission-model.md` | Agent action permissions and approval levels |
| `/docs/tool-readiness-map.md` | Agent-callable actions and API readiness |
| `/docs/evaluation-plan.md` | Scenario-based evals for agent behavior |
| `/schema/*.json` | JSON-LD structured data assets |
| `/metadata/*` | Page metadata and alt text maps |

## Content Rules

- Do not invent facts.
- Do not invent prices.
- Do not invent guarantees, reviews, awards, or certifications.
- Do not hide marketing copy inside alt text or meta descriptions.
- Keep machine-readable facts consistent with visible website content.
- Mark missing information as `Not provided`.

## Tool and API Rules

Every action an agent can perform should have:

- Clear name
- Clear description
- Required inputs
- Expected output
- Structured error response
- Idempotency key if it creates or modifies data
- Permission level
- Human approval rule
- Audit logging

## Permission Levels

- Level 0: Read only
- Level 1: Draft only
- Level 2: Submit low-risk request
- Level 3: Modify business data
- Level 4: Spend money, confirm appointments, or make commitments
- Level 5: Delete, refund, charge, cancel, or legally/medically/financially commit

## Evaluation

The agent layer should be tested against:

- Fact accuracy
- CTA correctness
- Intent routing
- Price handling
- Urgent/emergency handling
- Tool-use correctness
- Permission boundaries
- Missing-data behavior
- Hallucination resistance
