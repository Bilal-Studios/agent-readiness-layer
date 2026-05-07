# OpenAPI Action Definitions

Use this template to define agent-callable API actions in a way that is clear, safe, and retry-resistant.

## Action Inventory

| Action | Endpoint | Method | Risk | Approval | Idempotency key | Auth scope |
|---|---|---|---|---|---|---|
| Create lead | `/api/leads` | POST | Low | No | Required | `leads.write` |
| Request booking | `/api/booking-requests` | POST | Medium | Maybe | Required | `bookings.request` |
| Get services | `/api/services` | GET | Low | No | N/A | `business.read` |

## Action Definition Pattern

### `{action_name}`

**Purpose:**  

**Use when:**  

**Do not use when:**  

**Endpoint:**  

**Method:**  

**Auth scope:**  

**Risk level:**  

**Human approval:**  

**Idempotency:**  

**Required inputs:**

| Field | Type | Description | Validation |
|---|---|---|---|
|  |  |  |  |

**Successful response shape:**

```json
{
  "status": "success",
  "id": "example_id",
  "message": "Human-readable summary",
  "next_step": "What the agent should do next"
}
```

**Error response shape:**

```json
{
  "status": "error",
  "error_code": "MISSING_REQUIRED_FIELD",
  "message": "The phone field is required.",
  "recoverable": true,
  "missing_fields": ["phone"],
  "next_step": "Ask the user for their phone number."
}
```

## Design Rules

- Use concise action names that describe business intent.
- Keep tool descriptions specific enough for an agent to choose correctly.
- Never expose broad admin endpoints directly to agents.
- Require idempotency keys on mutating POST requests.
- Return structured errors that explain how the agent can self-correct.
- Separate request/draft actions from irreversible confirm/send/charge actions.
