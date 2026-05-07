// /api/negotiate.js — Content negotiation endpoint for Vercel (Node.js runtime)
//
// Purpose: Allow agents that send Accept: text/markdown or Accept: text/plain
// to receive the machine-readable llms.txt directly instead of HTML.
//
// Deploy at: /api/negotiate
// Document in AGENTS.md:
//   GET /api/negotiate
//   Accept: text/markdown
//   → returns contents of /llms.txt with Content-Type: text/markdown
//
// Why this exists: Static file servers (Vercel, Netlify, GitHub Pages) serve
// index.html before evaluating Accept headers on the root path. A dedicated
// endpoint ensures content negotiation works reliably without moving the
// homepage out of static serving.

import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  const accept = req.headers['accept'] || '';

  if (accept.includes('text/markdown') || accept.includes('text/plain')) {
    try {
      const content = readFileSync(join(process.cwd(), 'llms.txt'), 'utf8');
      res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.setHeader('Vary', 'Accept');
      res.status(200).send(content);
    } catch {
      res.redirect(302, '/llms.txt');
    }
  } else {
    res.redirect(302, '/llms.txt');
  }
}
