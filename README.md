# Portfolio — Shubhanjali

Personal developer portfolio: a project-focused site showcasing what I build,
how I build it, the architecture behind each project, and working demos.

 [Live URL](https://myportfolio-production-43a6.up.railway.app/)

## Tech Stack

| Layer            | Technology                         |
| ---------------- | ---------------------------------- |
| Framework        | Next.js 16 (App Router, Turbopack) |
| Language         | TypeScript                         |
| UI Library       | React 19                           |
| Styling          | Tailwind CSS v4                    |
| Animations       | Framer Motion                      |
| Icons            | Lucide React (+ custom brand SVGs) |
| Forms            | React Hook Form                    |
| Validation       | Zod                                |
| Contact / Email  | Resend (via API route handler)     |
| Analytics        | Vercel Analytics                   |
| Deployment       | Vercel                             |
| Fonts            | Geist Sans & Geist Mono            |

## Features

- Single-scroll home: Hero · About · Skills · Projects · Experience · Contact
- Dedicated case-study page per project (`/projects/[slug]`, statically generated)
- Dark / light mode (system default, no flash on load)
- Contact form backed by a Next.js Route Handler + Resend
- SEO: per-page metadata, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`
- Accessible and fully responsive (mobile-first)
- Content lives in typed data files — no CMS, no database

## Project Structure

```
src/
  app/              Routes: home, /projects/[slug], /api/contact, sitemap, robots
  components/
    layout/         Nav, Footer, ThemeToggle
    sections/       Hero, About, Skills, Projects, Experience, Contact
    ui/             Reveal, Chip, Section, SectionHeading, ArchDiagram, BrandIcons
  content/          site.ts, projects.ts, skills.ts, experience.ts  ← edit content here
  lib/              utils, motion presets, contact schema
planning/           Planning docs (structure, design system, deployment, etc.)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

The contact form works without any config (it logs submissions instead of
emailing). To send real emails, copy `.env.example` to `.env.local` and fill in:

```
RESEND_API_KEY=
CONTACT_TO_EMAIL=shubhanjali32@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the development server      |
| `npm run build` | Production build                  |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Run ESLint                        |

## Deployment

Deployed on Vercel. Push to GitHub, import the repo in Vercel, add the
environment variables above, and deploy. See `planning/05-deployment.md` for
the full checklist.
