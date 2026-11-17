# Manvi Gupta, portfolio

Next.js (App Router) + TypeScript + CSS Modules.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

- `src/data/` holds all the content (site copy, projects, experience, skills, credentials). Edit text here, not in components.
- `src/types/` holds the shared TypeScript types for that data.
- `src/components/<Name>/` has one folder per section, each with its own `.module.css`.
- `src/app/globals.css` has only design tokens, the reset and base typography.
- `src/hooks/` has the pointer-parallax and copy-to-clipboard hooks.
- `src/components/WalkingGuide/` holds the guide: provider (on/off, saved in localStorage), trail and toggle.
- `public/images/` holds the three illustrations (hero, about, avatar).

Fonts (Gloock and Figtree) come from `@fontsource` packages, so the build needs no network.

## Adding a project

Add an object to `src/data/projects.ts`. Set `diagram` to draw an architecture diagram from nodes and arrows, or leave it out for a text-only card.
