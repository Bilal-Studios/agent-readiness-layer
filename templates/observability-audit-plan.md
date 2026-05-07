# Observability and Audit Plan

Define how agent behavior is traced, reviewed, debugged, and improved.

## Trace Requirements

| Event | Required fields | Retention | Owner |
|---|---|---|---|
| User request | timestamp, channel, intent, user id/session |  |  |
| Retrieval | sources read, snippets used, freshness |  |  |
| Decision | selected intent, confidence, rules applied |  |  |
| Tool call | tool, inputs summary, idempotency key, result |  |  |
| Approval | approver, approved/denied, reason |  |  |
| Error | error_code, recoverable, retry count, next step |  |  |

## Metrics

- Successful task completion rate
- Escalation rate
- Tool error rate
- Hallucination/unsupported claim rate
- Permission violation attempts
- Average time to resolution
- Cost/token usage
- User satisfaction or conversion result

## Incident Log

| Date | Incident | Severity | Root cause | Fix | Regression test added? |
|---|---|---|---|---|---|
|  |  | Low/Medium/High |  |  | Yes/No |

## Review Cadence

- Daily during launch for high-risk agents
- Weekly for stable production agents
- After every major site/API/content change
- After every serious failure or hallucination event

## Minimum Production Requirement

Do not allow autonomous high-risk actions unless the system has:

- Tool-call logs
- Human approval logs
- Rollback or correction path
- Sandbox tests
- Regression evals
- Clear owner for failures
