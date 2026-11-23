#!/usr/bin/env node
/**
 * AXO Audit CLI (v5.0.0) — Zero-dependency live Agent Readiness Layer auditor.
 *
 * Security & Privacy:
 * - Strictly read-only HTTP GET requests using Node.js built-in fetch (Node 18+).
 * - Zero external dependencies, zero shell execution, zero filesystem writes,
 *   zero environment variable reads.
 *
 * Usage:
 *   node scripts/axo-audit.mjs https://example.com
 *   node scripts/axo-audit.mjs https://example.com --json
 */

const USER_AGENT = "AXO-Audit/5.0 (+https://github.com/Bilal-Studios/agent-readiness-layer)";
const TIMEOUT_MS = 10000;

function parseArgs(argv) {
  const args = argv.slice(2);
  let target = null;
  let jsonOutput = false;
  for (const arg of args) {
    if (arg === "--json") {
      jsonOutput = true;
    } else if (arg === "-h" || arg === "--help") {
      printHelp();
      process.exit(0);
    } else if (!arg.startsWith("-") && !target) {
      target = arg;
    }
  }
  if (!target) {
    printHelp();
    process.exit(1);
  }
  if (!/^https?:\/\//i.test(target)) {
    target = "https://" + target;
  }
  const url = new URL(target);
  return { origin: url.origin, homepageUrl: url.toString(), jsonOutput };
}

function printHelp() {
  console.log(`AXO Audit CLI v5.0.0 — Broadcast Protocol Live Checker

Usage:
  node scripts/axo-audit.mjs <url> [--json]

Examples:
  node scripts/axo-audit.mjs https://bilalstudio.io
  node scripts/axo-audit.mjs https://example.com --json
`);
}

async function safeFetch(url, headers = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": USER_AGENT,
        ...headers,
      },
    });
    const text = await res.text();
    return {
      ok: res.ok,
      status: res.status,
      finalUrl: res.url,
      contentType: (res.headers.get("content-type") || "").toLowerCase(),
      linkHeader: res.headers.get("link") || "",
      varyHeader: (res.headers.get("vary") || "").toLowerCase(),
      body: text,
      error: null,
    };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      finalUrl: url,
      contentType: "",
      linkHeader: "",
      varyHeader: "",
      body: "",
      error: err && err.name === "AbortError" ? "Timeout" : String(err?.message || err),
    };
  } finally {
    clearTimeout(timer);
  }
}

function looksLikeHtml(res) {
  return res.contentType.includes("text/html") || /^\s*<!doctype html|^\s*<html/i.test(res.body);
}

function isValidJson(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

async function runAudit(origin, homepageUrl) {
  const [
    homeRes,
    mdNegotiateRes,
    llmsRes,
    llmsFullRes,
    agentsRes,
    robotsRes,
    sitemapXmlRes,
    sitemapMdRes,
    docsRes,
    aiPluginRes,
    agentCardRes,
    mcpRes,
  ] = await Promise.all([
    safeFetch(homepageUrl, { Accept: "text/html,application/xhtml+xml" }),
    safeFetch(homepageUrl, { Accept: "text/markdown, text/plain;q=0.9" }),
    safeFetch(`${origin}/llms.txt`),
    safeFetch(`${origin}/llms-full.txt`),
    safeFetch(`${origin}/AGENTS.md`),
    safeFetch(`${origin}/robots.txt`),
    safeFetch(`${origin}/sitemap.xml`),
    safeFetch(`${origin}/sitemap.md`),
    safeFetch(`${origin}/docs/`),
    safeFetch(`${origin}/.well-known/ai-plugin.json`),
    safeFetch(`${origin}/.well-known/agent-card.json`),
    safeFetch(`${origin}/.well-known/mcp.json`),
  ]);

  const homeHtml = homeRes.ok ? homeRes.body : "";
  const checks = [];

  const add = (id, layer, label, weight, pass, detail, fix) => {
    checks.push({ id, layer, label, weight, pass: Boolean(pass), detail, fix });
  };

  // 1. /llms.txt
  const llmsOk = llmsRes.ok && !looksLikeHtml(llmsRes) && llmsRes.body.trim().length >= 40;
  add(
    "llms_txt",
    "Context",
    "/llms.txt routing index",
    15,
    llmsOk,
    llmsOk
      ? `HTTP ${llmsRes.status} (${llmsRes.body.length} chars)`
      : llmsRes.ok
        ? "Returned HTML fallback instead of plain text/markdown"
        : `HTTP ${llmsRes.status || llmsRes.error}`,
    "Publish a concise Markdown routing index at /llms.txt (Content-Type: text/plain or text/markdown)."
  );

  // 2. /llms-full.txt
  const llmsFullOk =
    llmsFullRes.ok && !looksLikeHtml(llmsFullRes) && llmsFullRes.body.trim().length >= 120;
  add(
    "llms_full_txt",
    "Context",
    "/llms-full.txt complete summary",
    8,
    llmsFullOk,
    llmsFullOk ? `HTTP ${llmsFullRes.status} (${llmsFullRes.body.length} chars)` : `HTTP ${llmsFullRes.status || llmsFullRes.error}`,
    "Add /llms-full.txt containing the full verified source-of-truth business documentation."
  );

  // 3. /AGENTS.md
  const agentsOk = agentsRes.ok && !looksLikeHtml(agentsRes) && agentsRes.body.trim().length >= 40;
  add(
    "agents_md",
    "Broadcast",
    "/AGENTS.md agent entry point",
    8,
    agentsOk,
    agentsOk ? `HTTP ${agentsRes.status} (${agentsRes.body.length} chars)` : `HTTP ${agentsRes.status || agentsRes.error}`,
    "Add /AGENTS.md with a numbered Start-Here chain, permission boundaries, and routing table."
  );

  // 4. Homepage <link rel="alternate" type="text/markdown">
  const hasHeadAlt =
    /<link[^>]+rel=["'][^"']*alternate[^"']*["'][^>]+type=["']text\/markdown["']/i.test(homeHtml) ||
    /<link[^>]+type=["']text\/markdown["'][^>]+rel=["'][^"']*alternate[^"']*["']/i.test(homeHtml);
  const hasHttpLinkHeader = /rel=["']?(alternate|help|describedby)["']?/i.test(homeRes.linkHeader) &&
    /llms\.txt|AGENTS\.md|docs/i.test(homeRes.linkHeader);
  add(
    "head_alternate_link",
    "Broadcast",
    'Homepage <link rel="alternate" type="text/markdown"> or HTTP Link header',
    10,
    hasHeadAlt || hasHttpLinkHeader,
    hasHeadAlt
      ? "Found <link rel=\"alternate\" type=\"text/markdown\"> in <head>"
      : hasHttpLinkHeader
        ? `Found HTTP Link header: ${homeRes.linkHeader}`
        : "Not detected in homepage HTML or response headers",
    'Add <link rel="alternate" type="text/markdown" href="/llms.txt" title="AI Agent Docs"> inside <head>.'
  );

  // 5. Semantic ARIA / visible or hidden agent docs discovery in body
  const hasAriaDocInstructions = /role=["']doc-instructions["']/i.test(homeHtml);
  const hasBodyLlmsLink = /<a[^>]+href=["'][^"']*(llms\.txt|AGENTS\.md|\/docs\/?)["']/i.test(homeHtml);
  add(
    "body_discovery_signal",
    "Broadcast",
    'Homepage body discovery link / DPUB ARIA role="doc-instructions"',
    8,
    hasAriaDocInstructions || hasBodyLlmsLink,
    hasAriaDocInstructions
      ? 'Found role="doc-instructions" landmark'
      : hasBodyLlmsLink
        ? "Found body anchor linking to agent docs"
        : "No body link or doc-instructions ARIA section found",
    'Add a footer <section role="doc-instructions"> or anchor pointing to /llms.txt and /docs/.'
  );

  // 6. robots.txt agent hints
  const robotsOk = robotsRes.ok && !looksLikeHtml(robotsRes);
  const robotsHasAgentHint =
    robotsOk && (/llms\.txt|AGENTS\.md|Link:\s*<[^>]+>/i.test(robotsRes.body) || /sitemap:/i.test(robotsRes.body));
  const robotsHasExplicitAi = robotsOk && /llms\.txt|AGENTS\.md/i.test(robotsRes.body);
  add(
    "robots_hints",
    "Broadcast",
    "/robots.txt with Sitemap + AI agent hints",
    7,
    robotsHasExplicitAi,
    robotsHasExplicitAi
      ? "robots.txt explicitly references llms.txt / AGENTS.md"
      : robotsHasAgentHint
        ? "robots.txt has Sitemap, but no explicit llms.txt / Link hint"
        : `HTTP ${robotsRes.status || robotsRes.error}`,
    'Add "Link: </llms.txt>; rel=\\"help\\"" and a comment block referencing /llms.txt in /robots.txt.'
  );

  // 7. sitemap.xml or sitemap.md
  const sitemapXmlOk = sitemapXmlRes.ok && /<urlset|<sitemapindex/i.test(sitemapXmlRes.body);
  const sitemapListsMachine =
    sitemapXmlOk && /llms\.txt|AGENTS\.md|\/docs/i.test(sitemapXmlRes.body);
  const sitemapMdOk = sitemapMdRes.ok && !looksLikeHtml(sitemapMdRes) && sitemapMdRes.body.trim().length > 30;
  add(
    "sitemap_coverage",
    "Broadcast",
    "/sitemap.xml (machine docs listed) or /sitemap.md",
    7,
    sitemapListsMachine || sitemapMdOk,
    sitemapListsMachine
      ? "sitemap.xml includes machine-readable routes"
      : sitemapMdOk
        ? "Found /sitemap.md"
        : sitemapXmlOk
          ? "sitemap.xml exists, but does not list /llms.txt or /docs/"
          : "No valid sitemap.xml or sitemap.md found",
    "List /llms.txt, /llms-full.txt, and /docs/ in sitemap.xml and/or publish /sitemap.md."
  );

  // 8. /docs/ no-JS HTML index
  const docsOk = docsRes.ok && docsRes.body.trim().length >= 80 && !/404|not found/i.test(docsRes.body.slice(0, 400));
  add(
    "docs_index",
    "Context",
    "/docs/ crawlable documentation index",
    7,
    docsOk,
    docsOk ? `HTTP ${docsRes.status} (${docsRes.contentType || "unknown"})` : `HTTP ${docsRes.status || docsRes.error}`,
    "Publish a static, no-JavaScript /docs/ index linking all verified documentation pages."
  );

  // 9. Structured data (JSON-LD)
  const hasJsonLd = /<script[^>]+type=["']application\/ld\+json["'][^>]*>/i.test(homeHtml);
  add(
    "json_ld",
    "Eyes",
    "Schema.org JSON-LD structured data on homepage",
    8,
    hasJsonLd,
    hasJsonLd ? "Found application/ld+json block" : "No JSON-LD script block detected on homepage",
    "Embed Organization / WebSite / Service / FAQPage Schema.org JSON-LD on the homepage."
  );

  // 10. HTTP Content Negotiation (Accept: text/markdown)
  const contentNegOk =
    mdNegotiateRes.ok &&
    (mdNegotiateRes.contentType.includes("text/markdown") ||
      mdNegotiateRes.contentType.includes("text/plain")) &&
    !looksLikeHtml(mdNegotiateRes);
  add(
    "content_negotiation",
    "Broadcast",
    "HTTP Content Negotiation (Accept: text/markdown)",
    6,
    contentNegOk,
    contentNegOk
      ? `Returned ${mdNegotiateRes.contentType} directly on Accept: text/markdown`
      : `Returned ${mdNegotiateRes.contentType || mdNegotiateRes.status || mdNegotiateRes.error}`,
    "Serve Markdown when clients send Accept: text/markdown (with Vary: Accept header)."
  );

  // 11. Well-known agent discovery (ai-plugin.json OR agent-card.json)
  const aiPluginOk = aiPluginRes.ok && isValidJson(aiPluginRes.body);
  const agentCardOk = agentCardRes.ok && isValidJson(agentCardRes.body);
  add(
    "well_known_agent",
    "Discovery",
    "/.well-known/agent-card.json (A2A) or ai-plugin.json",
    8,
    agentCardOk || aiPluginOk,
    agentCardOk && aiPluginOk
      ? "Both agent-card.json and ai-plugin.json present"
      : agentCardOk
        ? "Found valid /.well-known/agent-card.json"
        : aiPluginOk
          ? "Found valid /.well-known/ai-plugin.json"
          : "Neither /.well-known/agent-card.json nor /.well-known/ai-plugin.json found",
    "Publish /.well-known/agent-card.json (A2A) and/or /.well-known/ai-plugin.json pointing to /llms.txt."
  );

  // 12. MCP / WebMCP readiness
  const mcpOk = mcpRes.ok && isValidJson(mcpRes.body);
  const hasWebMcp = /navigator\.modelContext|toolname=/i.test(homeHtml);
  add(
    "mcp_webmcp",
    "Hands",
    "/.well-known/mcp.json or WebMCP browser tool signals",
    8,
    mcpOk || hasWebMcp,
    mcpOk && hasWebMcp
      ? "Both /.well-known/mcp.json and WebMCP markup detected"
      : mcpOk
        ? "Found valid /.well-known/mcp.json"
        : hasWebMcp
          ? "Found WebMCP registration signals in homepage"
          : "No /.well-known/mcp.json or WebMCP signals detected",
    "Expose /.well-known/mcp.json for MCP servers or register safe WebMCP tools for browser agents."
  );

  const score = checks.reduce((sum, c) => sum + (c.pass ? c.weight : 0), 0);
  const maxScore = checks.reduce((sum, c) => sum + c.weight, 0);
  const passedSignals = checks.filter((c) => c.pass).length;

  let grade = "F";
  if (score >= 90) grade = "A+";
  else if (score >= 80) grade = "A";
  else if (score >= 65) grade = "B";
  else if (score >= 45) grade = "C";
  else if (score >= 25) grade = "D";

  return {
    tool: "AXO Audit CLI v5.0.0",
    target: homepageUrl,
    origin,
    auditedAt: new Date().toISOString(),
    score,
    maxScore,
    grade,
    passedSignals,
    totalSignals: checks.length,
    broadcastMinimumMet: passedSignals >= 5,
    checks,
  };
}

function printReport(report) {
  console.log(`\nAXO Agent Readiness Audit — ${report.origin}`);
  console.log(`Score: ${report.score}/${report.maxScore} (Grade ${report.grade}) | Signals: ${report.passedSignals}/${report.totalSignals}`);
  console.log(`Broadcast Protocol Minimum (>=5 signals): ${report.broadcastMinimumMet ? "PASS" : "FAIL"}\n`);

  for (const c of report.checks) {
    const icon = c.pass ? "[PASS]" : "[MISS]";
    console.log(`${icon} (${String(c.weight).padStart(2, " ")}pt) [${c.layer}] ${c.label}`);
    console.log(`       ${c.detail}`);
  }

  const missing = report.checks.filter((c) => !c.pass).sort((a, b) => b.weight - a.weight);
  if (missing.length > 0) {
    console.log("\nTop Priority Fixes:");
    missing.slice(0, 5).forEach((m, i) => {
      console.log(`  ${i + 1}. (+${m.weight}pt) ${m.fix}`);
    });
  } else {
    console.log("\nAll 12 Broadcast Protocol v5 signals passed.");
  }
  console.log("\nPowered by AXO (Agent Readiness Layer) — https://github.com/Bilal-Studios/agent-readiness-layer\n");
}

(async () => {
  const { origin, homepageUrl, jsonOutput } = parseArgs(process.argv);
  const report = await runAudit(origin, homepageUrl);
  if (jsonOutput) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    printReport(report);
  }
})();
