# TODO: Placement-ready AI portfolio

Goal: this site is the "AI Portfolio" link on both placement resumes, so its content has to match them.
Sources of truth:
- `public/VARAD_PATIL_RESUME_AI.pdf`: main AI/ML resume
- `public/VARAD_PATIL_MASTER_RESUME.pdf`: Full CV (all projects)
- SDE / web portfolio: https://varaddev.vercel.app/

## Still open

- [ ] Optional: replace `public/og-image.png` (currently a 1200×630 screenshot of the hero) with a designed social card
- [ ] After deploy: submit `sitemap.xml` in Google Search Console, check JSON-LD with the Rich Results Test, run Lighthouse
- [ ] Commit the work (nothing committed yet)

## Decisions (resolved 2026-09-30)

- [x] D1: Master Resume published as `/VARAD_PATIL_MASTER_RESUME.pdf` ("Full CV"); the AI/ML resume stays the main "Resume"
- [x] D2: Both emails shown (Gmail + IITK)
- [x] D3: Placeholders for projects without images
- [x] D4: Location "IIT Kanpur, India"

## Phase 0: Safety & housekeeping ✅
- [x] Old backup resume moved out of `public/` to `../portfolio-private-backup/`
- [x] `npm audit fix` (0 vulnerabilities)
- [x] Lint fixed (clean)
- [x] Dead files and CSS removed

## Phase 1: Content synced with resumes ✅
- [x] Projects: CivicPulse, CityLens, Resume Insight, Active-Break Monsoon, Cyclone Track, Air Quality, with metrics, tags and Live/Code/Kaggle links
- [x] Legal RAG kept only under Research; DJB CRM removed (SDE)
- [x] Research: M.Tech thesis (ongoing) added; ICTCS entry updated with the Springer chapter link
- [x] Experience, achievements, positions, certifications, skills and education updated from the resumes
- [x] Hero / About copy updated

## Phase 2: SDE portfolio linking ✅
- [x] Dev Portfolio link in Navbar (desktop + mobile), Hero, below Projects, Contact card, Footer, JSON-LD `sameAs`, `<noscript>`
- [x] Full CV button in Hero, mobile Navbar, Contact

## Phase 3: Animation smoothness ✅
- [x] `transition-all` removed from every framer-animated element (new `HoverCard`)
- [x] Stacked entrance animations removed (Hero image, About card, Education)
- [x] Viewport trigger changed from `amount: 0.2` to a bottom margin, so tall grids reveal on time
- [x] Framer hover on ~60 tech/skill pills replaced by CSS hover
- [x] Shared `EASE`/`VIEWPORT` (`motion/ease.js`) and `SectionHeader`
- [x] Checked with a headless browser at 1280 and 390 wide: every section reveals, no console errors, no horizontal scroll

## Phase 4: SEO ✅
- [x] `//` double slash fixed everywhere; `robots.txt` no longer blocks `/assets/`; sitemap is root-only
- [x] Real 1200×630 `og-image.png`; meta, keywords and JSON-LD (`knowsAbout`, `affiliation`, `award`, both emails) updated

## Phase 5: Performance & accessibility ✅
- [x] Images converted to WebP (≈1.6 MB → ≈190 KB); unused DJB screenshot removed
- [x] Navbar `aria-expanded`/`aria-controls`; Hero has `id="home"`; nav uses real anchors, so the URL hash updates; `scroll-padding-top` for the fixed navbar

## Phase 7: Images + SEO hardening ✅
- [x] CivicPulse, CityLens and thesis (`pmvision.webp`) images wired in; new `rag.webp`; oversized screenshots downscaled to 1200px
- [x] Build-time prerendering: full content in the HTML for non-JS crawlers and link previews, then hydration; no-JS fallback keeps content visible
- [x] PNG icons (apple-touch 180, manifest 192/512), ScholarlyArticle JSON-LD, sitemap `lastmod`, single `<h1>`
- [x] Verified against the production build: no hydration warnings, all 11 images load, all sections visible with JS off

## Phase 6: Docs ✅
- [x] README, CLAUDE.md updated; PROFILE.md deleted (duplicated `content.js`)
