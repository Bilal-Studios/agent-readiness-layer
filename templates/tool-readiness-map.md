# Tool Readiness Map

## Purpose

This document defines what actions an AI agent can perform for the business and whether the current website/API is ready for those actions.

## Tool Readiness Summary

| Action | Current surface | Agent-ready? | Missing pieces | Risk level |
|---|---|---|---|---|
| {{action}} | {{form/api/manual}} | {{Yes/No/Partial}} | {{missing}} | {{0-5}} |

## Tool Definition Template

### Tool: {{tool_name}}

- Purpose: {{purpose}}
- Business goal supported: {{goal}}
- Use when: {{when_to_use}}
- Do not use when: {{when_not_to_use}}
- Current implementation: {{API / Form / Manual / Not available}}
- Endpoint/form URL: {{url | Not provided}}
- Method: {{GET / POST / PATCH / DELETE / N/A}}
- Idempotent: {{Yes / No / Needs idempotency key / Unknown}}
- Permission level: {{0-5}}
- Human approval required: {{Yes / No / Conditional}}
- Audit log required: {{Yes / No}}

#### Required Inputs

| Field | Type | Description | Validation |
|---|---|---|---|
| {{field}} | {{type}} | {{description}} | {{validation}} |

#### Optional Inputs

| Field | Type | Description | Validation |
|---|---|---|---|
| {{field}} | {{type}} | {{description}} | {{validation}} |

#### Successful Output

```json
{
  "success": true,
  "request_id": "string",
  "status": "string",
  "message": "string"
}
```

#### Error Output

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable explanation",
    "field": "field_name",
    "recoverable": true,
    "suggested_fix": "What the agent should change before retrying"
  }
}
```

#### Retry Rules

- Safe to retry: {{Yes / No / Conditional}}
- Required idempotency key: {{Yes / No}}
- Max retries: {{number}}
- Escalate after: {{condition}}
