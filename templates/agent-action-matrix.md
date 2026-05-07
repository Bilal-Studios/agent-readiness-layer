# Agent Action Matrix

## Permission Levels

- Level 0: Read only
- Level 1: Draft only
- Level 2: Submit low-risk request
- Level 3: Modify business data
- Level 4: Spend money, confirm appointments, or make commitments
- Level 5: Delete, refund, charge, cancel, or legally/medically/financially commit

## Matrix

| User intent | Recommended action | Tool/form/API | Permission level | Human approval | Agent response |
|---|---|---|---|---|---|
| {{intent}} | {{action}} | {{tool}} | {{0-5}} | {{Yes/No/Conditional}} | {{response pattern}} |

## Examples

### Example: Ready to Book

- User says: `{{example_user_message}}`
- Agent should: {{expected_action}}
- Tool to use: {{tool | Not available}}
- Approval needed: {{yes/no}}
- Response: {{response}}

### Example: Missing Price

- User says: `How much does {{service}} cost?`
- Agent should: Say price is not listed if not provided, then route to quote/contact CTA.
- Agent must not: Invent or estimate price as a business fact.
