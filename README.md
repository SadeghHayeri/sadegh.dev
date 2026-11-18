# sadegh.dev

Personal website of Sadegh Hayeri: <https://sadegh.dev>.

A single page built with Next.js (App Router) and exported as plain static
files. No server, no database, and nothing on the page depends on JavaScript.

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + type check + build, the same steps CI runs
npm run preview    # serves the built site from out/
```

Requires Node 20.9 or newer.

## Editing the content

Everything the site says is in one file: [`src/content/site.ts`](src/content/site.ts).
Name, intro, roles, open-source projects, the About text and the toolbox are
plain data there. Change the text, commit and push.

- **Roles** are listed most recent first. `start` and `end` are `"YYYY-MM"`;
  set `end: null` for the current role. The timeline positions every bar from
  these dates.
- **Photo**: the picture in the hero is `public/sadegh-hayeri.jpg`, and
  `site.photo` holds its path and its alt text. It is shown as a square, cut
  from the centre, at up to 320px wide, so a file 640px wide stays sharp. To
  change it, replace the file and keep its name, and rewrite the alt text if
  the picture shows something else.
- **Résumé link**: the PDF is `public/Sadegh_Hayeri_Resume.pdf`, and
  `site.resume` holds its path. A download link to it appears in the hero and
  in Contact. To update the résumé, replace the file and keep its name. Set
  `site.resume` to `null` to hide the link.
- **Markdown copy**: <https://sadegh.dev/llms.txt> gives AI agents the whole
  site as one plain Markdown file, and the "For agents" section links to it.
  It is built from `site.ts`, so text changes reach it on their own. If you
  add a section or a new field to the page, add it to
  [`src/app/llms.txt/route.ts`](src/app/llms.txt/route.ts) as well.
- **Colours and type** are tokens at the top of
  [`src/app/globals.css`](src/app/globals.css). `--accent` (amber) is the one
  accent colour. It is only used for the role that is running now and for
  links, under their text and on the text itself when hovered.

## Deploying

Push to `main`. The workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) lints, type
checks, builds and publishes the site to GitHub Pages, usually within a
minute or two. It also rebuilds on the first of each month, because the
timeline ends on the day the site was built.

The domain is set in three places:

- **This repository**: Settings → Pages → Custom domain is `sadegh.dev`, with
  "Enforce HTTPS" on.
- **Cloudflare DNS** for `sadegh.dev`: the apex and `www` point at GitHub
  Pages as "DNS only" records (grey cloud), so GitHub can issue and renew the
  HTTPS certificate.
- **`site.url`** in `src/content/site.ts`, used for canonical links, the
  sitemap and the share image.

## How it is put together

```
src/
  content/site.ts        all text and data
  app/
    layout.tsx           fonts, metadata, structured data
    page.tsx             the page: Header, Hero, Work, OpenSource, About, Contact, Agents
    globals.css          design tokens, reset, shared layout
    og.png/route.tsx     share image, rendered at build time
    llms.txt/route.ts    the site as Markdown for AI agents, rendered at build time
    robots.ts, sitemap.ts, not-found.tsx
    icon.svg, favicon.ico, apple-icon.png
  components/
    Work.tsx             the work timeline, drawn from the role dates
    OpenSource.tsx       the project list
    ...                  one component and one CSS module per section
  lib/time.ts            date helpers
```

- Fonts (Funnel Display, Funnel Sans) are downloaded at build time by
  `next/font` and served from the site itself. Nothing is loaded from a third
  party at runtime.
- The mark is a small portrait, drawn by hand in `--bg` on `--ink`. Its
  paths live in `src/components/Mark.tsx`, which the header and the
  not-found page show, and `icon.svg` is a copy of them with the colours
  written out. `favicon.ico` and `apple-icon.png` are rasterised from
  `icon.svg`. If you change the drawing, change both and regenerate those
  two files. The 16px frame in `favicon.ico` has its eyes and mouth redrawn
  on whole pixels, and `apple-icon.png` is the same head on a square tile,
  scaled to 86%.
- In development, open `http://localhost:3000`. The "Network" address that
  `next dev` prints also shows the page, but Next.js blocks its dev scripts
  there, so edits will not hot-reload.
