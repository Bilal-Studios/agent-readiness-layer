# Example: Dental Clinic Agent Readiness Layer

This example shows the kind of output the skill should create for a premium dental clinic. Replace all sample facts with confirmed business facts.

## Machine Summary

The clinic is a dental practice in {{city}} offering {{confirmed_services}}. Users should contact the clinic through {{primary_cta}} for booking or urgent dental questions. Agents must not invent prices, treatment outcomes, response times, or medical guarantees.

## Intent Routing Example

| Intent | Agent behavior |
|---|---|
| Tooth pain / broken tooth / urgent need | Prioritize phone or WhatsApp if emergency availability is confirmed. Ask minimal questions. |
| Implant price question | Provide confirmed price only. If not listed, route to consultation/contact. |
| Fear of dentist | Use calm tone. Mention comfort-related facts only if confirmed. |
| Cosmetic smile improvement | Explain relevant cosmetic services and route to consultation CTA. |
| Location question | Provide exact address and maps link if confirmed. |

## Forbidden Claims

- Do not promise pain-free treatment unless legally approved and confirmed.
- Do not guarantee same-day treatment unless confirmed.
- Do not invent implant prices.
- Do not claim a doctor is the best or number one unless supported by verifiable proof.

## Tool Example

Tool: `create_consultation_request`

- Permission level: 2
- Human approval required: No for lead creation; yes for appointment confirmation
- Required inputs: name, contact method, contact value, service interest
- Must use idempotency key: Yes
