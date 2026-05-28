# Varad Patil — AI/ML Engineer & Researcher Portfolio

A fast, accessible, SEO-ready personal portfolio built with **React 19**, **Vite 7**, **Tailwind CSS v4**, and **Framer Motion**. Showcases research (RAG, LLMs), AI/ML projects, experience, and a downloadable resume.

> Live: https://varadiitk.vercel.app/ *(replace with your deployed URL)*

---

## ✨ Features

- ⚡ **Vite + React 19** — lightning-fast dev/build with code-splitting (vendor chunks for `react` and `framer-motion`).
- 🎨 **Tailwind CSS v4** with custom typography (Inter + Source Serif 4).
- 🎬 **Framer Motion** — subtle scroll-triggered fades, staggered card reveals, and hover lifts. Respects `prefers-reduced-motion`.
- 🔍 **SEO-ready** — full meta tags, Open Graph, Twitter cards, canonical URL, `robots.txt`, `sitemap.xml`, JSON-LD (`Person` + `WebSite` schema).
- 📱 **PWA-lite** — `site.webmanifest` + theme color + maskable icon.
- ♿ **Accessible** — semantic landmarks, skip-to-content link, `aria-label`s on icon buttons, focus-visible styles, keyboard-friendly nav.
- 🖼 **Performance** — preloaded hero image, lazy-loaded gallery images, font preconnect, no source maps in production.
- 📄 **Resume download** in Hero, Navbar, and Contact section.
- 🧩 **Single-source content** — edit everything from [`src/data/content.js`](src/data/content.js).

---

## 📁 Project Structure

```
research-portfolio/
├── index.html                  # SEO meta, JSON-LD, manifest
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   ├── VARAD_PATIL_RESUME_AI.pdf
│   └── images/                 # profile, projects, research, company logos
├── src/
│   ├── main.jsx
│   ├── App.jsx                 # MotionConfig + skip link + section routing
│   ├── index.css               # Tailwind v4 + animations
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Research.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── motion/Motion.jsx   # FadeIn / Stagger / StaggerItem / MotionCard
│   └── data/content.js         # All site content
├── vite.config.js              # Build + chunk-splitting config
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
npm run build        # production build → dist/
npm run preview      # serve the production build locally
npm run lint         # ESLint
```

---

## ✏️ Customizing Content

All site content lives in [`src/data/content.js`](src/data/content.js):

- `personalInfo` — name, title, email, social links, profile image, resume path
- `heroContent` — greeting, intro
- `aboutContent`, `education`, `achievements`
- `research`, `projects`, `experience`, `skills`
- `navLinks`

Replace the resume by overwriting `public/VARAD_PATIL_RESUME_AI.pdf` (or update `personalInfo.resume`).

---

## 🔍 SEO Checklist — Before You Deploy

The site ships with strong SEO defaults. **You must update the placeholder domain** (`https://varadiitk.vercel.app//`) before going live.

Search & replace `https://varadiitk.vercel.app/` in these files:

- [`index.html`](index.html) — `canonical`, `og:url`, `og:image`, `twitter:image`, JSON-LD `url`/`image`/`sameAs`
- [`public/robots.txt`](public/robots.txt) — `Sitemap:` line
- [`public/sitemap.xml`](public/sitemap.xml) — all `<loc>` entries

Optional but recommended:

- Add a dedicated **1200×630 OG image** at `public/og-image.png` and update the `og:image` / `twitter:image` URLs.
- Submit `sitemap.xml` to [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters).
- Verify structured data with the [Rich Results Test](https://search.google.com/test/rich-results).
- Add a Google Analytics / Plausible / Umami snippet inside `index.html` if you want traffic insights.

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
| **Performance** | Vendor chunk-splitting, font preconnect/preload, lazy images, no sourcemaps in prod |
| **SEO** | Meta + OG + Twitter + canonical + JSON-LD + sitemap + robots |
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
| Animation | Framer Motion 11 |
| Fonts | Inter, Source Serif 4 (Google Fonts) |
| Linting | ESLint 9 |

---

## 📜 License

© Varad Patil. Personal portfolio — content (text, images, resume) is **not** open for reuse. Source structure may be referenced for educational purposes.

---

## 📬 Contact

- **Email:** varadapatil123@gmail.com
- **LinkedIn:** https://linkedin.com/in/varad-patil-web-dev
- **GitHub:** https://github.com/devVaradPatil/
