# Ravi Shankar Pratihast - Portfolio

Production-oriented personal portfolio built with React + TypeScript + Vite.

## Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React + React Icons

## Current Features

- Responsive layout (mobile-first)
- Dark mode support
- Project showcase with custom screenshots from `public/Images`
- Experience carousel
- Skills marquee (LogoLoop)
- Contact-focused footer with quick links and social links

## Project Structure

```text
src/
├── App.tsx
├── main.tsx
├── index.css
├── data/
│   ├── projects.ts
│   └── experience.ts
├── context/
│   └── ThemeContext.tsx
├── pages/
│   └── Home.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── ui/
│       ├── LogoLoop.tsx
│       └── LogoLoop.css
└── Assets/
    └── RaviSPratihast:resume.pdf

public/
└── Images/
    ├── ApplyTrack.png
    ├── profx.png
    ├── yoi.png
    ├── vidin.png
    ├── ecommerce.png
    └── todoapp.png
```

## Scripts

```bash
pnpm dev      # Start dev server
pnpm build    # Production build
pnpm preview  # Preview production build
pnpm lint     # Lint code
```

## Content Update Guide

### 1) Update projects
Edit `src/data/projects.ts`:

- `title`
- `description`
- `image` (use `/Images/<file>.png`)
- `tech`
- `github`, `demo`, or `projectLink`

### 2) Update experience
Edit `src/data/experience.ts`:

- `company`
- `role`
- `location`
- `duration`
- `responsibilities`

### 3) Update resume download
Edit import in `src/components/sections/Hero.tsx`:

- `import resumeFile from "../../Assets/<your-resume>.pdf";`

### 4) Update footer contact details
Edit `src/components/layout/Footer.tsx`:

- Email, phone, location
- GitHub and LinkedIn URLs

## Notes

- Some project entries may be intentionally commented out (for later reuse).
- Keep image paths under `public/Images` to avoid import churn.
- Run `pnpm build` before deploying.
