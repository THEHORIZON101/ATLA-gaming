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

The included model/provider records are fictional sample data, deliberately avoiding unsupported claims about live products. Replace `src/data.ts` with maintained, source-linked records or a backend adapter before production use.

## Architecture

- `src/data.ts` — sample normalized model, release, and prompt records
- `src/scoring.ts` — reusable task-aware weighted scoring and ranking logic
- `src/main.tsx` — product surfaces and interaction flows
- `src/config.ts` — replaceable product identity
- `src/styles.css` — responsive design system and dark theme
- `src/scoring.test.ts` — scoring behavior tests

## Production roadmap

The current release is a frontend vertical slice. Production deployment still requires PostgreSQL/Prisma persistence, authenticated accounts and RBAC, server-side ingestion adapters, live source verification, alerts, rate limiting, and an admin backend. The UI labels all bundled records as sample data.

## Deployment

Build with `npm run build` and deploy the generated `dist/` directory to Vercel, Netlify, Cloudflare Pages, or GitHub Pages. No secrets are required for this preview.
