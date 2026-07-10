# AI Compass

A polished, task-specific AI discovery and recommendation platform. This repository contains a functional frontend vertical slice with adaptive discovery, transparent scoring, adjustable rankings, comparisons, release intelligence, a source-aware prompt archive, dark mode, responsive layouts, and a persistent local watchlist.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For a production build:

```bash
npm run build
npm test
```

## Data and trust

The catalog contains real model families from major providers with links to official documentation. The initial quality, speed, value, privacy, reliability, and context scores are editorial preview estimates—not independent benchmark results—and are labeled that way in the interface.

## Architecture

- `src/data.ts` — sample normalized model, release, and prompt records
- `src/scoring.ts` — reusable task-aware weighted scoring and ranking logic
- `src/main.tsx` — product surfaces and interaction flows
- `src/config.ts` — replaceable product identity
- `src/styles.css` — responsive design system and dark theme
- `src/scoring.test.ts` — scoring behavior tests

## Production roadmap

The current release is a frontend vertical slice. Production deployment still requires PostgreSQL/Prisma persistence, authenticated accounts and RBAC, server-side ingestion adapters, independent benchmark ingestion, pricing history, alerts, rate limiting, and an admin backend.

## Deployment

Build with `npm run build` and deploy the generated `dist/` directory to Vercel, Netlify, Cloudflare Pages, or GitHub Pages. No secrets are required for this preview.
