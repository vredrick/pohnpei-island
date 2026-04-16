# Styles Directory

## Purpose

Contains `global.css`, the single custom CSS file for the project. This file handles everything that cannot be expressed with Tailwind utility classes alone: keyframe animations, the mega menu hover system, tapa cloth decorative patterns, hero layout rules, the film grain overlay, and responsive breakpoint overrides.

Tailwind is imported automatically by the `@astrojs/tailwind` integration -- there is no manual `@tailwind` import in this file.

## File: global.css

### Sections in Order

1. **Tapa Patterns** (lines 1-8) -- `.tapa-pattern` and `.tapa-divider` classes using inline SVG `background-image`. The tapa pattern is a chevron/zigzag motif inspired by Micronesian tapa cloth. The divider is a diamond repeat pattern in ochre.

2. **Selection Color** (lines 10-13) -- `::selection` styled with ochre background and sand text.

3. **Scroll Behavior** (lines 15-18) -- `scroll-behavior: smooth` with `scroll-padding-top: 120px` to clear the fixed header on anchor jumps.

4. **Font Features** (lines 20-22) -- Enables OpenType stylistic sets `ss01` and `ss02` on the body.

5. **Keyframe Animations** (lines 24-48):
   - `fadeUp` -- 26px upward fade-in (used by `.anim-fadeUp`)
   - `fadeDown` -- 14px downward fade-in (used by `.anim-fadeDown`)
   - `slowZoom` -- scales to `1` over time (used by `.hero-zoom`, 22s duration)
   - `marquee` -- horizontal scroll from 0 to -50% (used by `.marquee-track`, 42s loop)
   - `pulseDot` -- opacity + box-shadow pulse (used by `.pulse-dot` on StatusStrip)

6. **Animation Classes** (lines 50-78):
   - `.hero-zoom` -- slow 22s zoom for hero panel images
   - `.reveal` / `.reveal.in` -- scroll-triggered fade-up (works with IntersectionObserver in BaseLayout)
   - `.anim-fadeUp` -- immediate fade-up animation (hero headline, CTA)
   - `.anim-fadeDown` -- immediate fade-down animation (hero eyebrow)
   - `.marquee-track` -- infinite horizontal scroll for MarqueeTicker
   - `.pulse-dot` -- pulsing indicator dot on StatusStrip

7. **Hero Layout** (lines 84-118):
   - `.hero-seam` -- 1px vertical line between hero panels (hidden on mobile)
   - `.hero-section` -- `height: calc(100svh - 116px)` on mobile, `min-height: 720px` on desktop
   - `.hero-panel` -- `min-height: 50%` on mobile, `100%` on desktop
   - `.hero-content` -- padding for the centered overlay text

8. **Mega Menu System** (lines 124-265):
   - `.menu-top` -- container for each dropdown group
   - `.menu-top > button/a` -- top-level nav items (Newsreader font, uppercase, animated underline on hover)
   - `.chev` -- CSS-only chevron arrow that rotates on hover
   - `.menu-panel` -- dropdown panel (positioned absolute, animated opacity + translateY, ochre top border)
   - `.menu-panel::before` -- invisible 12px bridge to prevent hover gap
   - `.menu-panel a` -- dropdown links (slide-right on hover)
   - `.menu-panel a .sub` -- subtitle text in dropdown links
   - `.menu-panel a.soon` -- dimmed links with "Soon" badge (pseudo-element)

9. **Film Grain Overlay** (lines 270-280) -- `body::before` with fixed position, fractal noise SVG, 5% opacity, multiply blend mode. Covers entire viewport, `pointer-events: none`.

10. **Focus Styles** (lines 282-285) -- `:focus-visible` with 2px ochre outline.

11. **Mobile Menu** (lines 287-303):
    - `.menu-desktop` / `.menu-mobile-toggle` / `.menu-cta-desktop` -- show/hide based on 900px breakpoint
    - `.menu-mobile-sheet` / `.menu-mobile-sheet.open` -- toggled by JS in Nav.astro

12. **Mobile Overrides** (lines 300-303) -- Scroll padding adjustments at 768px breakpoint.

## Conventions

- **Tailwind-first approach.** Only add CSS here when Tailwind utilities cannot achieve the effect (animations, pseudo-elements, complex hover states, SVG backgrounds).
- **No CSS custom properties.** Color values are hardcoded to match `tailwind.config.mjs` tokens. If you change a color in Tailwind config, check this file for matching hex values.
- **Inline SVGs for patterns.** The tapa and grain patterns use URL-encoded SVGs in `background-image` to avoid external file dependencies.
- **900px mobile breakpoint for nav.** The mega menu switches to mobile layout at 900px (not the standard Tailwind `md` 768px breakpoint). This is because the desktop mega menu needs more horizontal space.
- **Animation stagger via inline styles.** Staggered animations use `style="animation-delay: Xs"` or `style="transition-delay: Xs"` on individual elements in the Astro templates, not in this CSS file.

## Key Hardcoded Values

| Value     | Meaning                                  |
|-----------|------------------------------------------|
| `#2A1F18` | basalt (primary text)                    |
| `#B8642B` | ochre (primary accent)                   |
| `#F4E9D4` | sand (backgrounds)                       |
| `#FFF8F1` | sand-bright (panels)                     |
| `116px`   | Total fixed header height (80px nav + 36px status strip) |
| `120px`   | Scroll padding top (slightly more than header for breathing room) |
| `900px`   | Mobile nav breakpoint                    |
| `768px`   | Hero and general mobile breakpoint       |
