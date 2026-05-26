# N7 Landing Page — Codelinear Technical Assignment

Pixel-perfect, responsive frontend implementation of the N7 fintech landing page design.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals and transitions
- **Embla Carousel** — case studies slider

## Project structure

```
src/
  app/           # layout, page, global styles
  components/
    layout/      # Container
    sections/    # page sections (Hero, Solutions, etc.)
    ui/          # reusable UI primitives
  data/          # content as data (solutions, insights, footer)
  lib/           # utilities
```

## Design notes

- Design tokens (colors, spacing, glass effects) are defined in `src/app/globals.css`.
- Hero image uses Unsplash; dashboard and phone UIs are built with CSS/HTML for crisp scaling.
- Replace assets in `public/images/` with Figma exports for closer pixel parity.

## Live deployment

Deploy to Vercel:

1. Push this repo to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Use default Next.js settings — no env vars required.

## Author

**devadarshh** — [imadarshsingh2002@gmail.com](mailto:imadarshsingh2002@gmail.com)
