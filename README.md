# N7 Fintech Landing Page

A responsive, pixel-focused marketing site for a modern banking platform. Built as a frontend implementation of the N7 fintech design—showcasing layout, motion, and component structure with Next.js and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)

## Live demo

> Deploy on [Vercel](https://vercel.com/new) and add your URL here after the first deploy.

`https://your-project.vercel.app`

## Features

- **Responsive layout** — mobile-first sections from hero through footer
- **Design system** — tokens for color, typography, spacing, and glass effects in `globals.css`
- **Scroll animations** — section reveals and transitions with Framer Motion
- **Case studies carousel** — Embla Carousel for insights and stories
- **Composable UI** — reusable buttons, checklists, dashboard and laptop mockups
- **Content-driven sections** — copy and links centralized under `src/data/`

## Page sections

| Section | Description |
|--------|-------------|
| Hero | Headline, CTAs, trusted-by brands, hero visual |
| Solutions | Product overview cards |
| Loan Management | Feature highlight with dashboard mockup |
| Core Banking | Platform capabilities |
| Paperless CTA | Conversion block |
| Digital Banking | Product narrative |
| Insights & Case Studies | Content and carousel |
| Footer | Navigation and links |

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Carousel | Embla Carousel React |
| Utilities | `clsx`, `tailwind-merge` |

## Getting started

### Prerequisites

- Node.js 18+
- npm (or pnpm / yarn)

### Install and run

```bash
git clone https://github.com/YOUR_USERNAME/n7-fintech-landing.git
cd n7-fintech-landing
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project structure

```
src/
├── app/              # Root layout, page, global styles
├── components/
│   ├── layout/       # Container and layout primitives
│   ├── sections/     # Page sections (Hero, Solutions, Footer, …)
│   └── ui/           # Buttons, mockups, shared UI
├── data/             # Static content (links, assets, copy)
└── lib/              # Shared utilities
public/
└── images/           # Optimized images and Figma exports
```

## Deployment

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Use the default **Next.js** preset (no environment variables required).

See [DEPLOY.md](./DEPLOY.md) for step-by-step Git and Vercel commands.

## Design notes

- Hero and section imagery live under `public/images/` and `public/n7/`.
- Dashboard and device frames are built with HTML/CSS for sharp scaling at any viewport.
- Swap assets with Figma exports for closer pixel parity with the source design.

## Author

**Adarsh Singh** ([@devadarshh](https://github.com/devadarshh))

- Email: [imadarshsingh2002@gmail.com](mailto:imadarshsingh2002@gmail.com)

## License

This project was created for a technical assignment. All design rights belong to the original brand; code is provided for portfolio and evaluation purposes.
