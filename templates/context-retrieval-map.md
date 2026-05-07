# Context Retrieval Map

Define what an agent should read first, what it should retrieve only when needed, and which file is the canonical source for each fact.

## Retrieval Priority

| Priority | File/URL | Purpose | Token budget | Use when |
|---:|---|---|---:|---|
| 1 | `/llms.txt` | Short routing/index layer | Low | Always first |
| 2 | `/docs/source-of-truth.md` | Canonical business facts | Medium | Business facts needed |
| 3 | `/docs/services.md` | Service details | Medium | Service matching/pricing |
| 4 | `/llms-full.txt` | Full machine-readable website | High | Complex questions |
| 5 | Page markdown mirror | Page-specific details | Medium | User asks about a specific page |

## Fact Ownership

| Fact | Canonical source | Fallback source | Last updated | Confidence |
|---|---|---|---|---|
| Business name |  |  |  | High/Medium/Low |
| Phone/WhatsApp |  |  |  | High/Medium/Low |
| Opening hours |  |  |  | High/Medium/Low |
| Prices |  |  |  | High/Medium/Low |
| Services |  |  |  | High/Medium/Low |
| Offers |  |  |  | High/Medium/Low |

## Chunking Rules

- Keep each section under a clear heading.
- Put one service/product per section.
- Put one FAQ per heading or list item.
- Include source/freshness where facts can change.
- Avoid mixing multiple unrelated business facts in one dense paragraph.

## Conflict Rules

If two sources conflict:

1. Prefer the latest source with explicit date.
2. Prefer source-of-truth docs over marketing pages.
3. Prefer visible human website facts over hidden/generated docs when legal or conversion-critical.
4. Mark uncertainty instead of guessing.
