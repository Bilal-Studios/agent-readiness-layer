# MCP Readiness Map

Use this template to plan how the business can expose tools, resources, and prompts to AI agents through an MCP-style interface or similar tool protocol.

## MCP Server Purpose

- Server name:
- Business/system covered:
- Primary users/agents:
- Data sensitivity:
- Auth required: Yes/No

## Resources

Resources are read-only or mostly read-only information an agent can fetch.

| Resource URI | Description | Data owner | Freshness | Access level |
|---|---|---|---|---|
| `business://profile` | Business facts and contacts |  |  | Level 0 |
| `business://services` | Service/product catalog |  |  | Level 0 |
| `business://pricing` | Pricing/packages if available |  |  | Level 0/Restricted |
| `business://availability` | Availability or opening hours |  |  | Level 0/1 |

## Tools

Tools are actions the agent can call.

| Tool name | Purpose | Inputs | Output | Risk | Approval | Idempotent? |
|---|---|---|---|---|---|---|
| `create_lead` | Create a new lead/contact request | name, contact, intent | lead_id, status | Low | No | Yes |
| `request_booking` | Submit a booking request | contact, service, time | request_id, status | Medium | Maybe | Yes |
| `send_message_draft` | Draft an outbound message | recipient, subject, body | draft_id | Medium | Yes before send | Yes |

## Prompts

Reusable prompt resources that guide agents.

| Prompt name | Purpose | Variables | Use when |
|---|---|---|---|
| `qualify_lead` | Qualify a prospect using business rules | service, budget, urgency | Sales/booking flows |
| `explain_service` | Explain a service without overclaiming | service_name, user_context | Education/research |

## Auth and Scope Model

| Scope | Allows | Does not allow | Risk |
|---|---|---|---|
| `business.read` | Read public facts | Modify data | Low |
| `leads.write` | Create leads | Delete/export leads | Medium |
| `bookings.request` | Request booking | Confirm appointment | Medium |
| `payments.charge` | Charge customer | Refund/delete | High |

## Required Safety Features

- Dedicated agent identity/service account
- Least-privilege scopes
- Tool-call audit logs
- Idempotency keys for mutating actions
- Structured errors
- Human approval for high-risk actions
- Rate limits appropriate for agent workflows
- Test/sandbox server before production
