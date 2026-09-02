# Sancora Technologies — Corporate Website

Premium corporate website for **Sancora Technologies**, built with React, Tailwind CSS, TanStack Router, Context API, Framer Motion, and Lucide icons.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React (Vite) |
| Styling | Tailwind CSS v4 |
| State | React Context API (Theme, Nav, Contact Form) |
| Routing | TanStack Router (type-safe, code-based routes) |
| Icons | lucide-react |
| Animations | Framer Motion |

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero, stats, services preview, testimonials, CTA |
| `/about` | Company story, timeline, mission/vision, leadership |
| `/services` | Service overview with sub-capabilities |
| `/services/$serviceId` | Dynamic service detail pages |
| `/case-studies` | Portfolio / case study highlights |
| `/contact` | Contact form with Context-managed submission state |

## Getting Started

```bash
cd sancora-website
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   ├── home/          # Home page sections
│   ├── layout/        # Navbar, Footer, Layout, PageMeta
│   └── ui/            # Button, Card, Section, StatCounter, Carousel
├── context/           # ThemeContext, NavContext, ContactFormContext
├── data/              # Static content (services, testimonials, team, case studies)
├── routes/            # Page components per route
├── router.tsx         # TanStack Router route tree
└── main.tsx           # App entry point
```

## Build

```bash
npm run build
npm run preview
```
