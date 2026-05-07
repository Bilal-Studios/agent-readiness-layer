# Browser-Agent Readiness

Use this when no API exists and an agent may need to operate the website through a browser or computer-use environment.

## Browser Workflow Inventory

| Workflow | Page URL | Human action | Agent-safe? | API alternative needed? |
|---|---|---|---|---|
| Submit contact form |  | Fill form and submit | Yes/No | Yes/No |
| Book appointment |  | Select service/time | Yes/No | Yes/No |
| Request quote |  | Fill form/upload files | Yes/No | Yes/No |

## Form Readiness

| Page | Field purpose | Label text | `name` / `id` | Required? | Validation message |
|---|---|---|---|---|---|
|  | Name |  |  | Yes |  |
|  | Phone |  |  | Yes |  |
|  | Email |  |  | No |  |

## Browser-Agent Rules

- Every input must have a clear visible label.
- Every input must have predictable `name` or `id` attributes.
- Avoid hidden required fields unless documented.
- Avoid CAPTCHA-only workflows for trusted internal agents; provide API fallback when possible.
- Show deterministic success and error states after form submission.
- Avoid multi-step modals with ambiguous state.
- Use stable selectors for important actions.

## Fallback and Escalation

If the agent cannot complete a browser workflow:

1. Capture the page/state summary.
2. Explain the blocker.
3. Ask for human intervention or route to API/manual process.
