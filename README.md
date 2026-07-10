# AI Compass

AI Compass is a task-specific AI model discovery, comparison, ranking, and recommendation experience.

**Live site:** https://thehorizon101.github.io/ATLA-gaming/

The repository root contains the compiled static site used by GitHub Pages. Maintainable TypeScript/React source is stored in [`source/`](source/).

## Develop locally

```bash
cd source
npm install
npm run dev
```

## Verify

```bash
cd source
npm test
npm run build
```

The catalog contains real model families linked to official provider sources. Initial ranking scores are visibly labeled editorial preview estimates. Production use still requires independent benchmark ingestion, pricing history, persistence, authentication, and administrative tooling.
