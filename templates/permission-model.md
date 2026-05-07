# Agent Permission Model

## Purpose

Define what the agent can read, draft, submit, modify, confirm, charge, delete, or escalate.

## Agent Identity

- Agent name: {{agent_name}}
- Agent owner: {{owner}}
- Service account: {{service_account | Not provided}}
- OAuth scopes: {{scopes | Not provided}}
- Environment: {{production/staging/local}}

## Permission Levels

| Level | Name | Description | Examples | Approval needed |
|---|---|---|---|---|
| 0 | Read only | Agent can retrieve public or allowed data | Read FAQs, service list | No |
| 1 | Draft only | Agent can prepare but not submit | Draft email, draft quote | Yes before sending |
| 2 | Submit low-risk request | Agent can create low-risk records | Lead, contact form, support ticket | Usually no |
| 3 | Modify business data | Agent can update internal records | CRM status, appointment notes | Conditional |
| 4 | Commit | Agent can confirm appointments, spend money, or make commitments | Confirm booking, place order | Yes |
| 5 | Destructive/high-risk | Agent can delete, refund, charge, cancel, or legally/medically/financially commit | Refund, delete account, charge card | Always yes |

## Action Permissions

| Action | Level | Allowed? | Approval rule | Notes |
|---|---|---|---|---|
| {{action}} | {{level}} | {{Yes/No/Conditional}} | {{rule}} | {{notes}} |

## Least-Privilege Access

The agent should only receive access to:

- {{allowed_resource_1}}
- {{allowed_resource_2}}

The agent must not receive access to:

- {{forbidden_resource_1}}
- {{forbidden_resource_2}}

## Audit Logging

Every agent action should log:

- Timestamp
- User/session ID where applicable
- Agent identity
- Tool called
- Inputs used
- Output received
- Reason for action
- Permission level
- Approval status
- Error/retry attempts

## Escalation Contacts

| Escalation type | Contact/person/team | Method |
|---|---|---|
| {{type}} | {{contact}} | {{method}} |
