# Agent Journey Map

Map how an AI agent discovers, evaluates, recommends, and acts on behalf of a user.

## Stage 1 — Discovery

How does an agent find this business?

- Search query examples:
- Referral/source examples:
- Direct URL examples:
- `llms.txt` / sitemap / schema entry points:

### Failure Risks

- 

### Improvements

- 

## Stage 2 — Understanding

What does the agent need to understand quickly?

- Business category:
- Main services/products:
- Location/service area:
- Audience:
- Primary CTA:
- Important constraints:

### Best Source to Read First

1. `/llms.txt`
2. `/docs/source-of-truth.md`
3. `/docs/services.md`
4. Relevant page markdown mirror

## Stage 3 — Comparison

What facts help the agent compare this business to alternatives?

| Dimension | Fact | Source | Safe to use? |
|---|---|---|---|
| Price |  |  | Yes/No |
| Location |  |  | Yes/No |
| Speed |  |  | Yes/No |
| Specialization |  |  | Yes/No |
| Trust/proof |  |  | Yes/No |

## Stage 4 — Recommendation

When should the agent recommend the business?

- 

When should it avoid recommending the business?

- 

## Stage 5 — Action

What can the agent do next?

| User intent | Recommended action | Tool/API/form | Approval needed? | Risk |
|---|---|---|---|---|
| General inquiry |  |  | No | Low |
| Ready to book/buy |  |  | Maybe | Medium |
| Urgent/emergency |  |  | Human escalation | High |
| Payment/refund/cancel |  |  | Yes | High |

## Stage 6 — Handoff

When should the agent stop and involve a human?

- 

## Stage 7 — Post-Action Audit

What should be logged?

- User intent
- Source facts used
- Tool called
- Input payload
- Output/result
- Approval decision
- Agent reasoning summary
- Error/retry details
