# Example: Bilal Studio (bilalstudio.io)

Live implementation of the Agent Readiness Layer on a solo web design studio site.

**Site:** https://www.bilalstudio.io  
**Industry:** Web design & development studio  
**Stack:** Vanilla HTML/CSS/JS, Vercel, Supabase, Resend  
**AXO status before:** 80% — had JSON-LD, robots.txt with AI allowlists, OG tags. Missing llms.txt, docs/, agent behavior rules.  
**AXO status after:** Full six-layer implementation.

---

## What Was Already in Place

- ProfessionalService, FAQPage, WebSite, WebPage JSON-LD schema
- robots.txt with GPTBot, ClaudeBot, PerplexityBot allowlists
- OG and Twitter card tags
- Cookieless Plausible analytics (GDPR-friendly)
- Clean sitemap.xml

## What Was Added

### Eyes Layer
- `/llms.txt` — concise agent summary (who, what, how to contact, what not to claim)
- `/llms-full.txt` — complete factual profile with all services, pricing, process, social proof, open source, docs index
- `/docs/source-of-truth.md` — single authoritative fact file
- `/docs/services.md` — per-service breakdown
- JSON-LD additions: BreadcrumbList, SoftwareSourceCode for both open source projects
- sitemap.xml updated with llms.txt, llms-full.txt, docs entries
- robots.txt updated with AI agent instruction comment pointing to llms.txt

### Hands Layer
- `/docs/agent-action-matrix.md` — 14 intent → action mappings with permission levels and response patterns

### Permits Layer
- `/docs/permission-model.md` — Level 0 (read), Level 1 (draft), Level 2 (submit brief form); Levels 3-5 not applicable

### Brain Layer
- `/docs/conversion-rules.md` — 7 intent types with correct routing logic
- `/docs/agent-behavior-rules.md` — permitted actions, forbidden actions, escalation rules, missing data handling

### Memory Layer
- `/docs/brand-voice.md` — tone rules, banned words, correct language patterns, CTA style

### Evaluation Layer
- `/docs/evaluation-plan.md` — 6 scenario tests: price trap, availability trap, urgency routing, superiority claim, portfolio request, brief submission

---

## Key Design Decisions

**No opening hours.** The studio is fully online and async. Removing this removes a common hallucination vector — agents won't invent office hours.

**No hardcoded project count.** Portfolio loads dynamically from Supabase. The llms.txt says "portfolio updated regularly" rather than a number that goes stale.

**Level 2 is the highest available action.** The only form on the site creates a lead — no payments, no booking confirmations, no data modification. This simplifies the permission model significantly.

**llms-full.txt includes a complete docs index.** Any AI agent that fetches it immediately knows where to find deeper structured information.

---

## Files Created

```
bilal-studio-v2/
  llms.txt
  llms-full.txt
  docs/
    source-of-truth.md
    services.md
    agent-behavior-rules.md
    permission-model.md
    conversion-rules.md
    agent-action-matrix.md
    brand-voice.md
    evaluation-plan.md
```

Modified: `index.html` (JSON-LD, Open Source section), `sitemap.xml`, `robots.txt`
