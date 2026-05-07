# Agent Identity Model

Define how agents authenticate, what identity they use, and how their actions are separated from human users.

## Agent Identities

| Agent name | Purpose | Service account | Owner | Environments |
|---|---|---|---|---|
|  |  |  |  | dev/staging/prod |

## Identity Rules

- Do not share human credentials with agents.
- Use dedicated service accounts or OAuth clients for agents.
- Separate production and sandbox identities.
- Rotate credentials regularly.
- Log agent identity on every tool call.

## Scope Matrix

| Scope | Environment | Allowed actions | Forbidden actions | Approval required? |
|---|---|---|---|---|
| `business.read` | prod | Read public business facts | Modify data | No |
| `leads.write` | prod | Create leads | Delete/export leads | No/Maybe |
| `bookings.request` | prod | Request booking | Confirm appointment | Maybe |
| `payments.draft` | prod | Prepare payment intent | Capture payment | Yes |

## Approval Rules

| Action type | Approval required | Approver | Notes |
|---|---|---|---|
| Low-risk lead creation | No | N/A | Audit only |
| Customer-facing outbound send | Yes | Human operator | Draft first |
| Payment capture | Yes | Authorized human | Never autonomous by default |
| Delete/refund/cancel | Yes | Authorized human | High risk |

## Audit Fields

Every agent action should log:

- Agent identity
- User/session id, if applicable
- Tool/action name
- Input payload summary
- Output/result
- Source facts used
- Approval state
- Timestamp
- Error/retry history
