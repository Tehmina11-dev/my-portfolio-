# Tehmina — Developer Portfolio

A premium, production-ready developer portfolio for **Tehmina**, a Frontend &
Full-Stack Developer. Built with **Next.js 14 (App Router)**, **TypeScript**,
**Tailwind CSS**, and **Framer Motion** — dark-mode-first, fully responsive,
accessible, and SEO-optimized.

![Built with Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0080)

---

## ✨ Features

- **Dark mode by default** with a smooth light-mode toggle (`next-themes`).
- **Fully responsive** across mobile, tablet, and desktop.
- **Premium animations** & micro-interactions with Framer Motion.
- **Animated typing effect** cycling developer roles in the hero.
- **Custom animated cursor** (auto-disabled on touch / reduced-motion).
- **Scroll progress indicator**, **sticky blur navbar** with scroll-spy,
  **page loader**, and **back-to-top** button.
- **Project filtering** with animated layout transitions.
- **Animated count-up** GitHub stats.
- **Accessible, validated contact form** with success/error states.
- **SEO**: metadata, JSON-LD structured data, dynamic Open Graph image,
  `sitemap.xml`, and `robots.txt`.
- **Clean, scalable architecture** with reusable components, typed data, and a
  single source of truth for content.
- **Performance**: static generation, font optimization, reduced-motion
  support, and minimal client JS.

---

## 🧱 Tech Stack

| Area        | Tech                                             |
| ----------- | ------------------------------------------------ |
| Framework   | Next.js 14 (App Router)                          |
| Language    | TypeScript                                       |
| Styling     | Tailwind CSS (CSS-variable design tokens)        |
| Animation   | Framer Motion                                    |
| Theming     | next-themes                                      |
| Icons       | react-icons                                      |

---

## 📁 Folder Structure

```
src/
├── app/                  # App Router: layout, page, SEO routes, OG image
│   ├── layout.tsx        # Root layout, fonts, metadata, global chrome
│   ├── page.tsx          # Single-page composition of all sections
│   ├── globals.css       # Tailwind layers + design tokens
│   ├── sitemap.ts        # sitemap.xml
│   ├── robots.ts         # robots.txt
│   └── opengraph-image.tsx
├── components/
│   ├── layout/           # Navbar, Footer, ScrollProgress, BackToTop, Cursor, Loader
│   ├── ui/               # Button, Badge, SectionHeading, TypingEffect, ThemeToggle, ...
│   ├── providers/        # ThemeProvider
│   ├── seo/              # JsonLd structured data
│   └── index.ts          # Barrel exports
├── sections/             # Hero, About, Skills, Projects, AIExperience, Experience, ...
├── hooks/                # useMounted, useMediaQuery, useActiveSection, useScrolled
├── lib/                  # motion.ts (shared Framer Motion variants)
├── data/                 # Dummy content: personal, skills, projects, experience, ...
├── types/                # Shared TypeScript types
├── constants/            # Site-wide constants (URL, section ids, ...)
└── utils/                # cn(), form validation, scroll helpers
public/
├── assets/projects/      # Project screenshot placeholders (SVG)
├── favicon.svg
└── Tehmina-Resume.pdf    # Placeholder résumé — replace with the real one
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18.17+ (Node 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build & start
npm run build
npm run start

# Quality checks
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
```

---

## ✏️ Customizing the Content

All content lives in [`src/data/`](src/data) — no need to touch components:

| File                   | What it controls                                  |
| ---------------------- | ------------------------------------------------- |
| `personal.ts`          | Name, title, tagline, email, socials, About text  |
| `skills.ts`            | Skill categories and icons                        |
| `projects.ts`          | Featured projects + filter tags                   |
| `aiExperience.ts`      | "Working with AI & Vector Databases" cards        |
| `experience.ts`        | Experience timeline entries                       |
| `githubStats.ts`       | GitHub stat counters                              |
| `navigation.ts`        | Navbar links                                      |

Other quick edits:

- **Résumé:** replace `public/Tehmina-Resume.pdf` with the real PDF.
- **Project screenshots:** drop images into `public/assets/projects/` and update
  the `image` field in `projects.ts`.
- **Profile image:** swap the placeholder block in
  [`src/sections/hero/HeroAvatar.tsx`](src/sections/hero/HeroAvatar.tsx) for a
  `next/image`.
- **Site URL / SEO:** set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) or edit
  `SITE_URL` in [`src/constants/index.ts`](src/constants/index.ts).
- **Theme colors:** tweak the CSS variables in
  [`src/app/globals.css`](src/app/globals.css).

---

## 📨 Contact Form

The form is fully **validated client-side**. It has no backend by default — on
submit it shows a success state and opens the user's mail client with a
prefilled message (a graceful, zero-config fallback).

To wire a real backend, replace the simulated request in
[`src/sections/Contact.tsx`](src/sections/Contact.tsx) (`handleSubmit`) with a
call to a Next.js Route Handler / Server Action or a service like Resend,
Formspree, or EmailJS.

---

## ▲ Deploying to Vercel

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Tehmina portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new) and import the repo.
   - Vercel auto-detects Next.js — no build config needed
     (build: `next build`, output handled automatically).

3. **Set environment variables**
   - Add `NEXT_PUBLIC_SITE_URL` = your production domain
     (e.g. `https://tehmina.dev`) under **Project → Settings → Environment
     Variables**.

4. **Deploy** — every push to `main` triggers a production deployment; pull
   requests get preview URLs.

> Prefer the CLI? Run `npm i -g vercel` then `vercel` (preview) or
> `vercel --prod` (production) from the project root.

---

## ♿ Accessibility & Performance Notes

- Honors `prefers-reduced-motion` (animations and smooth scroll degrade safely).
- Semantic landmarks, labeled controls, focus-visible rings, and `aria-*` on
  interactive elements.
- Statically generated pages, optimized Google Fonts, and lazy in-view
  animations keep the bundle light.

---

Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.
