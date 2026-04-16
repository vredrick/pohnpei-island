# Pohnpei Island Tourism Website

## Overview

Official tourism website for Pohnpei Island, Federated States of Micronesia. A static marketing site built with Astro 4 that presents the island's culture, history, natural attractions, and travel information in a high-end editorial design style. Currently a single landing page with a mega menu defining the planned multi-page site structure.

**Live URL:** https://pohnpeiisland.com

## Technology Stack

- **Framework:** Astro 4 (static output mode, zero client JS by default)
- **Language:** TypeScript (strict mode via `astro/tsconfigs/strict`)
- **Styling:** Tailwind CSS 3 with custom design tokens in `tailwind.config.mjs`
- **Typography:** Newsreader (headlines/serif) + Be Vietnam Pro (body/sans) via Google Fonts
- **Images:** Cloudinary CDN (account: `doruy2kdr`) with `f_auto,q_auto` transforms -- no local images
- **Hosting:** nginx on VPS (148.230.88.7) with Let's Encrypt SSL via Certbot
- **Domain:** pohnpeiisland.com (DNS on Hostinger, A record points to VPS)

## Commands

```bash
npm run dev        # Start dev server on http://localhost:4321
npm run build      # Build static output to dist/
npm run preview    # Preview the production build locally
```

**Deploy (manual):**
```bash
npm run build && sudo cp -r dist/* /var/www/pohnpeiisland.com/
```

nginx config: `/etc/nginx/sites-available/pohnpeiisland.conf`

## Project Structure

```
pohnpei-landing/
├── CLAUDE.md                      # This file
├── astro.config.mjs               # Astro config (tailwind integration only)
├── tailwind.config.mjs            # Custom colors, fonts, border-radius overrides
├── tsconfig.json                  # Extends astro/tsconfigs/strict
├── package.json                   # Three deps: astro, @astrojs/tailwind, tailwindcss
├── index.html                     # LEGACY: pre-Astro single-file version (safe to delete)
├── public/                        # Static assets (currently empty)
├── src/
│   ├── env.d.ts                   # Astro type reference
│   ├── layouts/
│   │   └── BaseLayout.astro       # HTML shell: head, fonts, preconnects, scroll-reveal script
│   ├── pages/
│   │   └── index.astro            # Landing page -- composes all components in order
│   ├── components/                # All UI components (see src/components/CLAUDE.md)
│   │   ├── Nav.astro              # Fixed navbar: mega menu (desktop) + mobile sheet
│   │   ├── StatusStrip.astro      # Fixed sub-nav bar: PONT clock + coordinates
│   │   ├── Hero.astro             # Split-panel hero with Cloudinary images
│   │   ├── IntroEditorial.astro   # "About Pohnpei" intro section
│   │   ├── StatsBand.astro        # Four-column statistics row
│   │   ├── ChaptersGrid.astro     # Four "chapters" card grid (Nan Madol, Interior, Atolls, Culture)
│   │   ├── NanMadolFeature.astro  # Nan Madol feature callout (image + text split)
│   │   ├── DispatchForm.astro     # Newsletter signup form with client-side submit handler
│   │   ├── MarqueeTicker.astro    # Auto-scrolling text ticker (data-driven items array)
│   │   └── Footer.astro           # Four-column footer with nav links and contact info
│   └── styles/
│       └── global.css             # All custom CSS (see src/styles/CLAUDE.md)
├── content/                       # Scraped source material (see content/CLAUDE.md)
│   ├── raw/                       # 44 raw HTML files from MicronesiaTour.com
│   ├── images/                    # 87 source images organized by topic
│   ├── pages.json                 # Full scraped page data
│   ├── scrape.json                # Raw scrape output
│   ├── images-index.json          # Image metadata index
│   ├── image-manifest.md          # Human-readable image reference
│   ├── source-content.md          # Compiled source content reference
│   └── build-guide.md             # Build instructions from content analysis
├── variants/                      # Earlier design iterations of the landing page
│   ├── index.html                 # Variant index
│   ├── variant-3.html             # Design variant 3
│   ├── variant-3.png              # Screenshot of variant 3
│   └── 3/                         # Variant 3 assets
└── dist/                          # Build output (gitignored)
```

## Design System

### Color Palette

| Token          | Hex       | Usage                                  |
|----------------|-----------|----------------------------------------|
| `sand`         | `#F4E9D4` | Page background                        |
| `sand-bright`  | `#FFF8F1` | Card and panel backgrounds             |
| `sand-deep`    | `#ECE1CD` | Subtle section backgrounds             |
| `basalt`       | `#2A1F18` | Primary text color                     |
| `basalt-soft`  | `#52443C` | Secondary text                         |
| `ochre`        | `#B8642B` | Primary accent, CTAs, highlights       |
| `ochre-deep`   | `#8F4C1E` | Hover states                           |
| `lagoon`       | `#186969` | Secondary accent (reserved for future) |

### Typography

| Tailwind Class  | Font Family    | Role                     |
|-----------------|----------------|--------------------------|
| `font-headline` | Newsreader     | Headlines, editorial text |
| `font-body`     | Be Vietnam Pro | Body copy, paragraphs     |
| `font-label`    | Be Vietnam Pro | Labels, captions, nav items |

### Design Principles

- **Zero border-radius everywhere** -- all Tailwind radius values are overridden to `0px` (except `full` for pills). This creates a sharp, editorial aesthetic.
- **Tapa cloth pattern** -- an inline SVG chevron/diamond pattern applied via `.tapa-pattern` and `.tapa-divider` CSS classes. Used on the nav, section backgrounds, and decorative dividers.
- **Film grain overlay** -- a subtle `body::before` pseudo-element applies a fractal noise SVG over the entire page at 5% opacity.
- **Scroll reveal** -- elements with class `.reveal` animate in (fade up) when they enter the viewport, powered by an IntersectionObserver in `BaseLayout.astro`.
- **Hero slow zoom** -- hero panel images use a 22-second `slowZoom` CSS animation.

### Image Convention

All images are served from Cloudinary. URL pattern:
```
https://res.cloudinary.com/doruy2kdr/image/upload/f_auto,q_auto,c_fill,g_auto,w_{WIDTH},h_{HEIGHT}/{FILENAME}
```

Never store images locally. Always use Cloudinary URLs with `f_auto,q_auto` for automatic format and quality optimization.

## Key Architectural Patterns

### Component Model

Every component is a `.astro` file in `src/components/`. Components are composed in `src/pages/index.astro` in visual order. Each component is self-contained:

- HTML template in the component body
- Optional frontmatter (`---` block) for data/props
- Optional `<script>` tag at the bottom for client-side behavior (only Nav, StatusStrip, DispatchForm, and BaseLayout have scripts)

### Page Composition

`index.astro` wraps everything in `BaseLayout` and stacks components:
```
BaseLayout > Nav > StatusStrip > main(Hero > IntroEditorial > StatsBand > ChaptersGrid > NanMadolFeature > DispatchForm > MarqueeTicker) > Footer
```

### Fixed Header Stack

The nav and status strip are both `fixed` positioned, creating a 116px total header height:
- Nav: `h-20` (80px), `top-0`, `z-50`
- StatusStrip: `h-9` (36px), `top-20`, `z-40`
- Main content has `pt-[116px]` to clear both

### Section Anchors

Components use `id` attributes for in-page navigation:
- `#top` (main), `#about` (IntroEditorial), `#adventures` (ChaptersGrid), `#atolls` (ChaptersGrid), `#culture` (ChaptersGrid), `#nan-madol` (NanMadolFeature), `#history` (NanMadolFeature), `#dispatch` (DispatchForm)

## Development Guidelines

1. **No git repo yet.** The project does not have git initialized. Consider running `git init` and making an initial commit before significant changes.
2. **Keep JS minimal.** Astro ships zero JS by default. Only add `<script>` tags when client interactivity is truly needed.
3. **Cloudinary for all images.** Never add image files to `public/` or `src/`. Upload to Cloudinary and reference via URL.
4. **Tailwind for styling.** Use Tailwind utility classes as the primary styling approach. Only add to `global.css` for animations, complex hover states, or patterns that cannot be expressed in utilities.
5. **Consistent section spacing.** Sections use `py-28 md:py-36 px-6` as the standard padding pattern.
6. **Label/eyebrow pattern.** Section eyebrows use: `font-label text-ochre tracking-[0.3em] uppercase text-[11px] font-semibold`
7. **Heading pattern.** Section headings use: `font-headline text-basalt text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight` with ochre italic emphasis on key words.
8. **CTA button pattern.** Primary buttons use: `bg-ochre text-white px-8 py-4 font-label uppercase tracking-[0.14em] text-xs font-semibold hover:bg-ochre-deep active:scale-95 transition-all`

## Planned Expansion

The mega menu in `Nav.astro` defines the future multi-page site structure. Items marked with the `.soon` class are not yet built:

**The Island** (dropdown):
- About Pohnpei (anchors to `#about` -- exists as landing section)
- The Culture (anchors to `#culture` -- exists as landing section)
- History / Nan Madol (anchors to `#nan-madol` -- exists as landing section)
- Outer Atolls (anchors to `#atolls` -- exists as landing section)

**Experiences** (dropdown):
- Nan Madol (exists as landing section)
- Adventures (exists as landing section)
- Dining (marked "Soon")
- Shopping (marked "Soon")

**Plan** (dropdown -- all marked "Soon"):
- Getting Here
- Places to Stay
- Tour Operators
- Travel Info

**Dispatch** -- newsletter/blog section (form exists, no blog pages yet)

Source content for all planned pages exists in `content/raw/` HTML files and `content/images/`.

## Important Notes

- The root `index.html` is a legacy pre-Astro single-file version. It is safe to delete but kept as reference.
- A backup of the previously deployed site is at `/var/www/pohnpeiisland.com/index.html.bak` on the VPS.
- The `DispatchForm` currently has a client-side-only submit handler (shows confirmation, resets after 5 seconds). There is no backend for form submissions yet.
- The `StatusStrip` shows a live PONT timezone clock (UTC+11) updated every 30 seconds.
- The `public/` directory is currently empty.

## Navigation Guide

- [src/components/CLAUDE.md](src/components/CLAUDE.md) -- Component architecture, props, scripts, and relationships
- [src/styles/CLAUDE.md](src/styles/CLAUDE.md) -- CSS architecture: animations, mega menu, tapa patterns, hero layout
- [content/CLAUDE.md](content/CLAUDE.md) -- Scraped source material reference for building future pages
