# Machine Readability Audit Checklist

## Entity Understanding

- [ ] Business name is explicit
- [ ] Industry/category is explicit
- [ ] Location/service area is explicit
- [ ] Contact methods are explicit
- [ ] Opening hours are explicit or marked missing
- [ ] Languages are explicit or marked missing
- [ ] Main services/products are listed in text
- [ ] Prices are explicit or marked missing

## Page Understanding

- [ ] Each page has a machine summary
- [ ] Each page has a purpose and intent
- [ ] Each page has one primary CTA
- [ ] Each page has metadata
- [ ] Canonical URLs are defined
- [ ] Important pages have markdown mirrors or docs equivalents

## LLM Files

- [ ] `/llms.txt` exists
- [ ] `/llms-full.txt` exists, if appropriate
- [ ] Files are concise, factual, and Markdown/plain text
- [ ] Files include agent instructions
- [ ] Files include missing-data warnings
- [ ] Files do not contradict visible website

## Structured Data

- [ ] Organization or LocalBusiness schema
- [ ] WebSite schema
- [ ] WebPage schema for major pages
- [ ] BreadcrumbList schema
- [ ] FAQPage schema only where FAQ is visible/relevant
- [ ] Service/Product schema only when supported by page content
- [ ] Review schema only for real, visible, provided reviews

## Metadata and Alt Text

- [ ] Meta descriptions summarize pages briefly
- [ ] Metadata is not used as hidden documentation
- [ ] Alt text describes images accurately
- [ ] Alt text is not keyword-stuffed
- [ ] Open Graph data exists for important pages

## Agent Usefulness

- [ ] Agent can identify the correct CTA for each intent
- [ ] Agent can distinguish confirmed vs unknown facts
- [ ] Agent can avoid unsupported claims
- [ ] Agent can route urgent/high-risk users properly
- [ ] Agent can find tool/API/form instructions if available
