# MCP / Tool Protocol Readiness Audit

Use this checklist before exposing a business system to agents through MCP or another tool protocol.

## Resources

- [ ] Public business facts are available as resources.
- [ ] Services/products are available as resources.
- [ ] Pricing and availability have freshness metadata.
- [ ] Sensitive resources require authentication.
- [ ] Resource names are stable and descriptive.

## Tools

- [ ] Tool names are concise and business-intent oriented.
- [ ] Tool descriptions explain when to use and when not to use.
- [ ] Inputs are typed and validated.
- [ ] Outputs are structured and predictable.
- [ ] Error shapes are deterministic and recoverable when possible.
- [ ] Mutating actions use idempotency keys.
- [ ] High-risk actions require approval.

## Security

- [ ] Agents use dedicated identities, not human credentials.
- [ ] OAuth scopes or service account permissions are least-privilege.
- [ ] Production and sandbox credentials are separated.
- [ ] Tool calls are audited.
- [ ] Rate limits account for agent workflows.

## Testing

- [ ] Sandbox server exists or is planned.
- [ ] Tool-use evals exist.
- [ ] Permission-boundary evals exist.
- [ ] Regression tests exist for common failures.
