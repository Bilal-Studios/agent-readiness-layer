# Agent Memory Policy

## Purpose

Define what the agent may remember across sessions and what must remain session-only or never be stored.

## Business Memory

The agent may store stable business facts such as:

- Business name
- Services/products
- Locations
- Opening hours
- Brand voice
- Approved claims
- CTA rules
- Tool schemas
- Permission rules

## User Memory

The agent may remember user preferences only when appropriate and allowed, such as:

- Preferred language
- Preferred contact method
- Non-sensitive service preferences
- Past interaction status

## Sensitive Information

The agent must not store sensitive personal data unless explicitly allowed and necessary for the workflow.

Sensitive data includes:

- Medical details
- Financial details
- Legal details
- Identity documents
- Payment information
- Precise home address
- Authentication credentials
- Private personal attributes

## Session-Only Data

Keep this data temporary unless explicitly required:

- One-time booking preferences
- Temporary troubleshooting details
- Current cart/request state
- Short-term support context

## Memory Update Rules

Before updating long-term memory, verify:

1. Is the information stable?
2. Is it useful for future interactions?
3. Is it safe to store?
4. Has the user or business allowed it?
5. Is the value factual rather than inferred?

## Forgetting Rules

If a user asks to forget or delete remembered information, comply according to the system's memory/privacy capabilities and escalate if deletion requires manual handling.
