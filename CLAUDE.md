# sadegh.dev

Sadegh Hayeri's personal site: one page, Next.js App Router, exported as static files to GitHub Pages. `README.md` covers editing content, deploying and the domain setup.

@AGENTS.md

## Invariants

- **Static.** `output: "export"` renders everything at build time: "now" is build day, and nothing can read a request. Route handlers and metadata routes export `dynamic = "force-static"`.
- **Works without JavaScript.** Every component is a server component; interaction is HTML and CSS (`<details>`, anchors, `:hover`).
- **Copy is data.** Text lives in `src/content/site.ts`; components render it.
- **Colour is tokens.** Every colour is a custom property from `src/app/globals.css`, which redefines them for print and `prefers-contrast: more`. `--live` is the one accent and means "running now": keep it to the current role.

## Mirrors

Hand-kept copies. Change the source, then every mirror:

- Colour tokens → constants in `src/app/og.png/route.tsx`, fills in `src/app/icon.svg`, `themeColor` in `src/app/layout.tsx`.
- The portrait in `src/app/icon.svg` → `favicon.ico` and `apple-icon.png` rasterised from it (`README.md` says how). It is not the mark in `src/components/Mark.tsx`, and it is `--bg` on `--ink` only, no `--live`.
- Timeline spans in `src/components/Work.tsx` → the same calculation in `og.png/route.tsx`.
- Facts in `site.ts` → the JSON-LD and Open Graph fields hard-coded in `layout.tsx` (job title, city, university, topics).
- What the page shows (the sections in `src/app/page.tsx`, the fields and links each component renders) → the Markdown copy for AI agents in `src/app/llms.txt/route.ts`, served at `/llms.txt`. Its words come from `site.ts`, so a copy edit reaches it on its own. A section, field or link added to, removed from or reordered on the page needs the same change in that route. After any content change, read `out/llms.txt` from the build and confirm it says everything the page says.

## Working

- A code change is done when `npm run check` passes: lint, type check and build, the same steps CI runs.
- Pushing to `main` deploys to sadegh.dev within minutes. There is no staging.
- Prose (site copy, comments, README) uses Canadian spelling (colour, centre, standardize), with commas or full stops where an em dash would go.
