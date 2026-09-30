# HackSAC

HackSAC is a three-round hackathon hosted by the Student Association of Computer (SAC) at MET's Institute of Engineering, Nashik. This repository contains the event website, registration links, rules, FAQs, and the official Round 1 presentation template.

## Event Overview

- **Eligibility:** Second-year students at MET only
- **Team size:** Four members
- **Round 1 — Idea presentation:** 7–8 October, online
- **Round 2 — Prototype display:** 12 October
- **Round 3 — Final presentation:** 16 October, Computer Department

Round 1 presentations must use the [official PPT template](public/HackSAC-PPT-Template-2026.pptx). The presentation must contain **exactly six slides**; submissions with fewer or more slides will be disqualified.

Read the [Terms and Conditions](https://docs.google.com/document/d/1DXHwGUXSLBWsfwtwy1x6NzwBuqdKOn-5GCTfhnJOal0/edit?usp=sharing) before registering. [Register your team](https://forms.gle/t1fTfjiLrw8a2Sz79).

## Website Features

- Responsive event landing page with round details and problem statements
- Animated, scroll-responsive visual elements and sticky SAC identity header
- FAQ with eligibility, submission requirements, and linked terms
- Direct download of the official PowerPoint template

## Run Locally

Requirements: Node.js 20.9 or later and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |

## Deploy

The site is built with Next.js and can be deployed on [Vercel](https://vercel.com/). Import the repository and use the standard Next.js build settings. The presentation template is stored in `public/`, so it is served as a static file at `/HackSAC-PPT-Template-2026.pptx` in production as well as locally.

## Tech Stack

Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, and Lenis.
