# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio (Varad Patil, AI/ML) built with React 19 + Vite 7 + Tailwind CSS v4 (via `@tailwindcss/vite`, no `tailwind.config.js`) + framer-motion 12. Static output, deployed to Vercel at `https://varadiitk.vercel.app/`. No router, no backend, no tests.

## Commands

The user's terminal is Windows PowerShell 5.1: chain commands with `;`, never `&&`.

```
npm run dev      # http://localhost:5173
npm run build    # client build -> SSR build of src/entry-server.jsx -> scripts/prerender.js injects the HTML into dist/index.html
npm run preview
npm run lint     # ESLint 9 flat config
```

There is no test suite. Verify changes with `npm run build` and by viewing the page.

## Architecture

- **The production HTML is prerendered.** `npm run build` renders `<App />` to a string (`src/entry-server.jsx`, React `renderToString`) and puts it inside `#root` of `dist/index.html`, so crawlers and link previews see the full content without running JS. `src/main.jsx` hydrates when `#root` already has children and does a plain render otherwise (dev). So components must render identically on server and client: no `window`/`document` access during render (keep it in effects), and no random or time-dependent output. The one exception is the footer year, which is safe because it is only rebuilt at deploy. A `<noscript>` style in `index.html` overrides framer's initial `opacity:0` for no-JS visitors.

- **All content lives in `src/data/content.js`.** Components are pure presentation over its exports (`personalInfo`, `heroContent`, `aboutContent`, `education`, `research`, `projects`, `experience`, `skills`, `achievements`, `positions`, `certifications`, `navLinks`). Adding a project, job, or skill means editing data only; image paths are relative to `public/`.
- **The two resume PDFs in `public/` are the source of truth for that content.** `VARAD_PATIL_RESUME_AI.pdf` is the main resume, and `VARAD_PATIL_MASTER_RESUME.pdf` is the "Full CV". Both link to this site as the AI portfolio, so placement recruiters compare them. Projects are AI/ML only; full-stack work (Snikrz, Spotify 2.0, DJB CRM) belongs on the separate Dev Portfolio (`personalInfo.sdePortfolio`, varaddev.vercel.app), which the site links to from the navbar, hero, projects, contact and footer.
- `src/App.jsx` stacks the sections in a fixed order inside `<MotionConfig reducedMotion="user">`. Section `id`s (`#home`, `#about`, …) must match `navLinks`. Navigation is plain anchors: CSS `scroll-behavior` + `scroll-padding-top` in `index.css` handle the smooth scroll and the fixed-navbar offset.
- Animation lives in `src/components/motion/`:
  - `ease.js` holds `EASE` and `VIEWPORT` (a non-component module so fast refresh works)
  - `Motion.jsx` holds `FadeIn`, `Stagger`/`StaggerItem`, `HoverCard` and `SectionHeader`

  Two rules keep motion smooth. First, **never put Tailwind `transition-all`/`transform` on an element framer animates**; `HoverCard` uses `transition-[box-shadow,border-color]`. Second, give an element only one entrance animation: a card's entrance comes from the surrounding `StaggerItem`/`FadeIn`, and `HoverCard` only adds the hover lift.
- `src/components/icons.jsx` has the shared SVG icons and `ImageWithFallback`, which shows a placeholder when `src` is missing or fails. That's how projects without screenshots render.
- SEO lives outside React: `index.html` (meta, OG/Twitter, JSON-LD, `<noscript>`), `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`, `public/og-image.png`, PNG icons (`apple-touch-icon.png`, `icon-192.png`, `icon-512.png`). JSON-LD has three blocks: Person, WebSite and ScholarlyArticle (the ICTCS paper). Bump `<lastmod>` in `sitemap.xml` when content changes. The site URL `https://varadiitk.vercel.app/` (single trailing slash) is hardcoded in all of them.

## Gotchas

- **Everything in `public/` ships publicly** (copied verbatim into `dist/`). Don't leave private or backup PDFs there.
- Images are WebP. Convert new screenshots before adding them (`varad.jpeg` is kept only for the JSON-LD `image`).
- Lint uses core `no-unused-vars`, which doesn't see JSX usage. `eslint.config.js` therefore ignores `motion` and capitalized names/args; don't "fix" those imports away.
- The in-app browser pane may not run `requestAnimationFrame` when it's in the background, so framer content stays at opacity 0 there. Verify with a headless Playwright run against `vite preview` instead (Python Playwright + Chromium are installed). Checks worth repeating: no hydration warnings in the console, and all `[style*=opacity]` elements reaching opacity 1 after scrolling.
