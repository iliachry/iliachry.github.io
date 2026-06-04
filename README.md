# iliachry.gr — Personal Website

Personal website for Ilias Chrysovergis — researcher, software architect, and founder building intelligent spatial systems for the physical world.

**Live**: [iliachry.gr](https://iliachry.gr)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages (static export)

## Project Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home page
│   ├── work/page.tsx       # Work / case studies
│   ├── research/page.tsx   # Research & publications
│   ├── ventures/page.tsx   # Startup ventures
│   ├── about/page.tsx      # About / bio
│   └── contact/page.tsx    # Contact with smart form
├── components/
│   ├── layout/             # Header, Footer, PageWrapper
│   ├── sections/           # Page-specific section components
│   │   ├── home/           # Hero, SelectedWork, Bio, etc.
│   │   └── contact/        # ContactForm
│   ├── ui/                 # Reusable UI components
│   │   ├── animate-in.tsx  # Scroll-triggered animation
│   │   ├── badge.tsx       # Tag/badge component
│   │   ├── button.tsx      # Button variants
│   │   ├── monogram.tsx    # IC monogram SVG
│   │   └── section-heading.tsx
│   └── theme-provider.tsx  # Dark/light mode
├── data/                   # Content data layer
│   ├── site.ts             # Site metadata, social links
│   ├── navigation.ts       # Nav configuration
│   ├── projects.ts         # Case studies / work
│   ├── publications.ts     # Academic publications
│   ├── ventures.ts         # Startup ventures
│   ├── achievements.ts     # Awards & recognition
│   └── research.ts         # Research themes, PhD, collaborations
└── app/globals.css         # Design system (tokens, utilities)
```

## How to Edit Content

All content is centralized in `src/data/`. Each file is a TypeScript module exporting typed data:

- **Projects**: Edit `src/data/projects.ts` — add/remove case studies, mark featured
- **Publications**: Edit `src/data/publications.ts` — add new papers/patents
- **Ventures**: Edit `src/data/ventures.ts` — update status, add new ventures
- **Achievements**: Edit `src/data/achievements.ts` — add awards/recognition
- **Research**: Edit `src/data/research.ts` — update PhD, themes, collaborations
- **Site info**: Edit `src/data/site.ts` — metadata, social links, email

Look for `// EDIT:` comments in data files for structured placeholders that need your specific details.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

## Deployment

The site auto-deploys to GitHub Pages on push to `master` via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

The site is exported as a static site (`output: 'export'` in `next.config.ts`).

## Design System

- **Colors**: Warm neutral foundation + controlled orange accent (`#D4600A`)
- **Typography**: Inter (body) + Instrument Serif (headings) + JetBrains Mono (code)
- **Theme**: Light/dark mode with toggle, system preference detection
- **Design tokens**: Defined in `src/app/globals.css` via CSS custom properties

## Contact Form

The contact form UI is built but needs a backend. Options:
1. [Formspree](https://formspree.io) — easiest, add form endpoint
2. [Netlify Forms](https://docs.netlify.com/forms/setup/) — if hosting on Netlify
3. Custom API route — add a serverless function

See `src/components/sections/contact/contact-form.tsx` for the TODO comment.
