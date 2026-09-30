# Varad Patil — AI/ML Engineer & Researcher Portfolio

A fast, accessible, SEO-ready personal portfolio built with **React 19**, **Vite 7**, **Tailwind CSS v4**, and **Framer Motion 12**. Showcases research (M.Tech thesis, RAG publication), AI/ML projects, experience, and downloadable resumes. It is the "AI Portfolio" link on the placement resumes; full-stack work lives on the separate [Dev Portfolio](https://varaddev.vercel.app/).

> Live: https://varadiitk.vercel.app/

---

## ✨ Features

- ⚡ **Vite + React 19** — lightning-fast dev/build with code-splitting (vendor chunks for `react` and `framer-motion`).
- 🎨 **Tailwind CSS v4** with custom typography (Inter + Source Serif 4).
- 🎬 **Framer Motion** — subtle scroll-triggered fades, staggered card reveals, and hover lifts. Respects `prefers-reduced-motion`.
- 🔍 **SEO-ready** — full meta tags, Open Graph, Twitter cards, canonical URL, `robots.txt`, `sitemap.xml`, JSON-LD (`Person` + `WebSite` schema).
- 📱 **PWA-lite** — `site.webmanifest` + theme color + maskable icon.
- ♿ **Accessible** — semantic landmarks, skip-to-content link, `aria-label`s on icon buttons, focus-visible styles, keyboard-friendly nav.
- 🖼 **Performance** — preloaded hero image, lazy-loaded gallery images, font preconnect, no source maps in production.
- 📄 **Resume + Full CV** (AI/ML resume and Master Resume) in Hero, Navbar, and Contact.
- 🧩 **Single-source content** — edit everything from [`src/data/content.js`](src/data/content.js).

---

## 📁 Project Structure

```
research-portfolio/
├── index.html                  # SEO meta, JSON-LD, manifest, noscript fallback
├── public/
│   ├── VARAD_PATIL_RESUME_AI.pdf       # main (AI/ML) resume
│   ├── VARAD_PATIL_MASTER_RESUME.pdf   # Full CV (all projects)
│   ├── og-image.png                    # 1200×630 social card
│   ├── robots.txt, sitemap.xml, site.webmanifest, favicon.svg
│   └── images/                 # profile, projects, research (WebP), company logos
├── src/
│   ├── App.jsx                 # MotionConfig + skip link + section order
│   ├── index.css               # Tailwind v4 + smooth scroll
│   ├── data/content.js         # All site content
│   └── components/
│       ├── Navbar, Hero, About, Research, Projects, Experience, Skills, Contact, Footer
│       ├── icons.jsx           # shared SVG icons + ImageWithFallback
│       └── motion/             # Motion.jsx (FadeIn, Stagger, HoverCard, SectionHeader), ease.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** (Node 20+ recommended)
- **npm 9+**

### Install & Run
```bash
npm install
npm run dev          # local dev server (http://localhost:5173)
npm run build        # production build → dist/ (prerendered HTML)
npm run preview      # serve the production build locally
npm run lint         # ESLint
```

---

## ✏️ Customizing Content

All site content lives in [`src/data/content.js`](src/data/content.js):

- `personalInfo`: name, title, both emails, social links, Dev Portfolio URL, profile image, resume + full CV paths
- `heroContent` — greeting, intro
- `aboutContent`, `education`, `achievements`, `positions`, `certifications`
- `research`, `projects` (optional `image`, `tag`, `links`; a missing image shows a placeholder), `experience`, `skills`
- `navLinks`

The two resume PDFs are the source of truth for this content. Replace them by overwriting the files in `public/`, and keep `content.js` in sync with them.

---

## 🔍 SEO

The site URL `https://varadiitk.vercel.app/` is hardcoded in `index.html` (canonical, OG/Twitter, JSON-LD), `public/robots.txt` and `public/sitemap.xml`. Change all of them together if the domain changes.

After deploying: submit `sitemap.xml` to Google Search Console and check the JSON-LD with the Rich Results Test.

---

## 🚢 Deployment

The build output in `dist/` is fully static and can be hosted on any static host.

### Vercel (recommended)
```bash
npm i -g vercel
vercel --prod
```
Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Add a `_redirects` file with `/* /index.html 200` if you add client-side routes later.

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch (e.g. via gh-pages npm package)
```
If hosting under a sub-path (`/repo-name/`), set `base: '/repo-name/'` in [`vite.config.js`](vite.config.js).

### Cloudflare Pages
- Build command: `npm run build`
- Build output: `dist`

---

## 🧪 Production Quality

| Area | Notes |
|---|---|
| **Performance** | Vendor chunk-splitting, font preconnect/preload, WebP + lazy images, no sourcemaps in prod |
| **SEO** | Prerendered HTML, meta + OG + Twitter + canonical + JSON-LD (Person, WebSite, ScholarlyArticle) + sitemap + robots |
| **Accessibility** | Skip link, semantic HTML, `aria-label`s, focus styles, reduced-motion respect |
| **PWA** | `site.webmanifest`, theme color, SVG icon |
| **No-JS fallback** | `<noscript>` block with contact info |

After deploying, audit with:

- **Lighthouse** (Chrome DevTools) — aim for 95+ across Performance / Accessibility / Best Practices / SEO.
- **PageSpeed Insights** — https://pagespeed.web.dev/
- **WebPageTest** — https://www.webpagetest.org/

---

## 🛠 Tech Stack

| | |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Fonts | Inter, Source Serif 4 (Google Fonts) |
| Linting | ESLint 9 |

---

## 📜 License

© Varad Patil. Personal portfolio — content (text, images, resume) is **not** open for reuse. Source structure may be referenced for educational purposes.

---

## 📬 Contact

- **Email:** varadapatil123@gmail.com
- **LinkedIn:** https://linkedin.com/in/varad-patil-web-dev
- **Email (IITK):** varadap25@iitk.ac.in
- **GitHub:** https://github.com/DevVaradPatil
- **Dev Portfolio:** https://varaddev.vercel.app/
