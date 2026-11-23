/**
 * AXO Broadcast Protocol v5 — WebMCP Browser Tool Registration
 * Drop into your frontend bundle so browser-native agents (Chrome WebMCP /
 * navigator.modelContext) can discover safe, typed page tools without brittle
 * DOM scraping.
 *
 * Security rule: Read-only tools (Level 0) may run autonomously. Any action
 * that submits user data or modifies state (Level 2+) MUST require explicit
 * user confirmation and never execute silently.
 */
export function registerAxoWebMcpTools({
  businessName = "Your Business",
  llmsTxtUrl = "/llms.txt",
  contactEndpoint = "/api/inquiry",
} = {}) {
  if (typeof navigator === "undefined" || !navigator.modelContext) {
    return false;
  }

  const mc = navigator.modelContext;
  if (typeof mc.registerTool !== "function") {
    return false;
  }

  // Level 0 (Read-Only): Fetch canonical machine-readable business summary
  mc.registerTool({
    name: "get_business_summary",
    description: `Fetch the canonical machine-readable summary (/llms.txt) for ${businessName}.`,
    annotations: {
      readOnlyHint: true,
      idempotentHint: true,
      openWorldHint: false,
    },
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    async execute() {
      const res = await fetch(llmsTxtUrl, {
        headers: { Accept: "text/markdown, text/plain" },
      });
      if (!res.ok) {
        return { ok: false, error: `Failed to fetch ${llmsTxtUrl} (HTTP ${res.status})` };
      }
      return { ok: true, contentType: res.headers.get("content-type"), markdown: await res.text() };
    },
  });

  // Level 2 (Low-Risk Request): Draft/submit inquiry ONLY after explicit user confirmation
  mc.registerTool({
    name: "submit_inquiry_request",
    description: `Submit a contact or consultation request to ${businessName}. Requires explicit user confirmation before calling.`,
    annotations: {
      readOnlyHint: false,
      destructiveHint: false,
      idempotentHint: false,
      openWorldHint: false,
    },
    inputSchema: {
      type: "object",
      required: ["name", "email", "message", "userConfirmed"],
      properties: {
        name: { type: "string", minLength: 1, maxLength: 120 },
        email: { type: "string", format: "email", maxLength: 200 },
        message: { type: "string", minLength: 5, maxLength: 2000 },
        userConfirmed: {
          type: "boolean",
          description: "Must be true only after the human explicitly approves submission.",
        },
      },
      additionalProperties: false,
    },
    async execute(args) {
      if (!args || args.userConfirmed !== true) {
        return {
          ok: false,
          error: "HUMAN_APPROVAL_REQUIRED",
          message: "Ask the user to confirm their details before submitting.",
        };
      }
      const res = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: args.name,
          email: args.email,
          message: args.message,
        }),
      });
      return { ok: res.ok, status: res.status };
    },
  });

  return true;
}
