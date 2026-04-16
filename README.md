# Pohnpei Island — The Garden Island of Micronesia

A tourism guide for Pohnpei Island, Federated States of Micronesia. Built with Astro, TypeScript, and Tailwind CSS.

**Live:** [pohnpeiisland.com](https://pohnpeiisland.com)

## Stack

- **Framework:** [Astro 4](https://astro.build) (static output, zero JS shipped)
- **Styling:** Tailwind CSS 3 with custom design tokens (sand, basalt, ochre palette)
- **Typography:** Newsreader (headlines) + Be Vietnam Pro (body) via Google Fonts
- **Images:** Cloudinary CDN with auto-format/quality transforms
- **Hosting:** nginx on VPS with Let's Encrypt SSL
- **Domain:** pohnpeiisland.com (Hostinger DNS → VPS at 148.230.88.7)

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview production build
```

## Deploy

Build and copy to the live server directory:

```bash
npm run build && sudo cp -r dist/* /var/www/pohnpeiisland.com/
```

## Project Structure

```
src/
├── layouts/
│   └── BaseLayout.astro         # Head, fonts, scroll-reveal script
├── components/
│   ├── Nav.astro                # Mega menu + mobile nav
│   ├── StatusStrip.astro        # PONT clock + coordinates bar
│   ├── Hero.astro               # Split-panel hero with Cloudinary images
│   ├── IntroEditorial.astro     # "About Pohnpei" section
│   ├── StatsBand.astro          # Key statistics row
│   ├── ChaptersGrid.astro       # Four chapters card grid
│   ├── NanMadolFeature.astro    # Nan Madol feature callout
│   ├── DispatchForm.astro       # Newsletter signup form
│   ├── MarqueeTicker.astro      # Scrolling text ticker
│   └── Footer.astro             # Site footer
├── styles/
│   └── global.css               # Animations, mega menu, tapa patterns
└── pages/
    └── index.astro              # Landing page (composes all components)
```

### Other Directories

- **content/** — Scraped source material from the original site: raw HTML pages, images, and metadata JSON. Reference for building out future pages.
- **variants/** — Design iterations of the landing page.

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `sand` | #F4E9D4 | Page background |
| `sand-bright` | #FFF8F1 | Card/panel backgrounds |
| `sand-deep` | #ECE1CD | Subtle section backgrounds |
| `basalt` | #2A1F18 | Primary text |
| `ochre` | #B8642B | Accent, CTAs, highlights |
| `ochre-deep` | #8F4C1E | Hover states |
| `lagoon` | #186969 | Secondary accent (reserved) |

All border radii are set to 0px (sharp corners) to match the editorial aesthetic. The tapa cloth pattern is used as a repeating SVG background across nav, sections, and decorative elements.

## Planned Pages

The mega menu defines the future site structure — sections marked "Soon" in the nav:

- About Pohnpei, Culture, History/Nan Madol, Outer Atolls, Adventures
- Dining, Shopping, Getting Here, Places to Stay, Tour Operators, Travel Info
- Dispatch (newsletter/blog)

Source content for these pages is in `content/raw/` and `content/images/`.
