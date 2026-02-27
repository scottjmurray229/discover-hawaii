# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Discover Hawaii — a travel guide website built with Astro 5, Tailwind CSS 4, and deployed to Cloudflare Pages. Content is markdown-based using Astro's content collections with Zod schemas.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

No test runner is configured. No linter is configured.

## Architecture

### Content Collections (`src/content/`)

Two collections defined in `src/content/config.ts`:
- **destinations** — Travel destination pages with typed schema (region enum: oahu/maui/big-island/kauai/molokai/lanai, budgetPerDay in USD, highlights array, contentStatus workflow, gradientColors for per-destination theming)
- **blog** — Articles with categories (destination, food, festival, practical, budget, culture)

Both collections use a `draft: true` default. Content status tracks: draft → review → published → needs-update.

### Routing (`src/pages/`)

- `index.astro` — Home page
- `destinations/[...slug].astro` — Dynamic catch-all route, generates static pages from the destinations collection via `getStaticPaths()`
- `404.astro` — Custom error page

### Layouts

- `BaseLayout.astro` — Root layout with SEO meta (OG, Twitter cards, canonical URL), imports FloatingNav + Footer + global styles
- `DestinationLayout.astro` — Wraps BaseLayout, adds hero with per-destination gradient, quick facts bar, highlights section

### Components (`src/components/`)

- `FloatingNav.astro` — Dual navigation: mobile bottom tab bar (fixed) + desktop top nav bar. Active link detection via `Astro.url.pathname`.
- `Footer.astro` — 3-column grid with brand info, destination links, legal links

### Styling (`src/styles/global.css`)

Design system uses CSS custom properties for tokens:
- Colors: Ocean Teal `#0891b2` (primary), Deep Night `#1A2332`, Sand `#F5F0E8` (bg)
- 8px spacing grid (`--space-1` through `--space-24`)
- Content width tokens: `--content-width-sm/md/lg/prose`
- Per-destination gradient classes
- Utility classes: `.container-content`, `.container-prose`, `.section-padding`, `.touch-target`

Tailwind is used for utility classes; global.css handles design tokens and base styles. Components use scoped `<style>` blocks.

### Deployment

Cloudflare Pages via `@astrojs/cloudflare` adapter. Config in `wrangler.jsonc`. Build output at `dist/` with worker at `dist/_worker.js/index.js`. Node.js compatibility enabled.

## Design Principles

1. Immersion First — Video heroes and cinematic photography dominate
2. Mobile-Native — Design starts at 375px. Touch targets 44px minimum.
3. Trust Through Specificity — Include specific activities, real prices.
4. AI-Surface Ready — Quick Facts blocks, question-based headings, SpeakableSpecification schema

## Content Rules

- First-person plural voice: "we discovered...", "our first morning..."
- Scott = logistics/practical. Jenice = cultural/local.
- **Names rule:** Only use "Scott", "Jenice", and "I/we" in content. Never include names of family members, children, or other travel companions.
- All prices in USD
- Cross-link every page to at least 2 other content pillars
- Question-based H2/H3 headings for GEO
- Answer-first paragraphs: lead with the answer, then supporting detail

### Pillar Pages

Six content pillars linked from the nav:
- `/beaches/` — Beach Guide (top beaches across all islands)
- `/cuisine/` — Hawaiian Cuisine (poke, plate lunch, shave ice, kalua pork, loco moco)
- `/outdoor/` — Outdoor Adventures (hiking, surfing, snorkeling)
- `/festivals/` — Festival Calendar (Merrie Monarch, Lei Day, Aloha Festivals)
- `/finer-things/` — Tropical cocktails, luxury resorts, spa culture
- `/plan/` — AI Trip Planner

## Master Plan Updates

After completing significant work, update the **central master plan** at `C:\Users\scott\documents\discover-more\docs\master-plan.md`:
- Update the **Current Status table** row for this site
- Add a session log entry to `C:\Users\scott\documents\discover-more\docs\session-log.md` with date and summary
