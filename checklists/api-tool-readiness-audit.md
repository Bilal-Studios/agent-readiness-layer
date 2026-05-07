# API and Tool Readiness Audit Checklist

## Tool Definition

- [ ] Every agent action has a clear tool name
- [ ] Tool description explains when to use it
- [ ] Tool description explains when not to use it
- [ ] Required inputs are explicit
- [ ] Optional inputs are explicit
- [ ] Output shape is documented
- [ ] Error shape is documented
- [ ] Examples are provided

## Reliability

- [ ] Create/update endpoints support idempotency keys
- [ ] Retry behavior is safe and documented
- [ ] Duplicate submissions are prevented
- [ ] Errors are deterministic and structured
- [ ] Validation errors include field names and suggested fixes
- [ ] Rate limits are documented

## Security

- [ ] Agent has dedicated identity/service account
- [ ] Least-privilege scopes are defined
- [ ] High-risk tools require approval
- [ ] Audit logs include tool inputs and outputs
- [ ] Secrets are never exposed to the agent prompt
- [ ] PII handling is documented

## Observability

- [ ] Tool calls are logged
- [ ] Agent reasoning/action traces are available where possible
- [ ] Failed calls are categorized
- [ ] Escalation events are logged
- [ ] Human approvals are recorded
