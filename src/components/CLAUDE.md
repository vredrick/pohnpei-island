# Components Directory

## Purpose

All UI components for the Pohnpei tourism site. Each `.astro` file is a self-contained component that is composed into page layouts. Currently all components serve the single landing page (`src/pages/index.astro`).

## Component Render Order

Components are composed in `index.astro` in this exact visual order (top to bottom):

```
Nav              -- fixed, z-50, always visible
StatusStrip      -- fixed, z-40, always visible below Nav
Hero             -- first content section (full viewport height)
IntroEditorial   -- "About Pohnpei" text section
StatsBand        -- four statistics in a row
ChaptersGrid     -- four chapter cards in a staggered grid
NanMadolFeature  -- split image+text feature callout
DispatchForm     -- newsletter signup
MarqueeTicker    -- scrolling text band
Footer           -- site footer with nav and contact
```

## Component Details

### Nav.astro
**Role:** Primary navigation. Fixed position at top of page.
**Script:** Yes -- mobile menu toggle (open/close sheet, swap hamburger/X icons, lock body scroll, auto-close on resize > 900px).
**Key classes:** `.menu-desktop`, `.menu-mobile-toggle`, `.menu-mobile-sheet`, `.menu-top`, `.menu-panel` (all styled in `global.css`).
**Structure:**
- Desktop: Three dropdown mega-menu groups ("The Island", "Experiences", "Plan") + "Dispatch" direct link + "Kaselehlie Join" CTA button
- Mobile: Hamburger toggle reveals a full-width sheet below the header with flat link list
- Future page links use `.soon` class (dimmed, with "Soon" badge)
**Breakpoint:** Desktop nav hides at <= 900px; mobile toggle appears

### StatusStrip.astro
**Role:** Thin data bar below the nav showing official guide badge, GPS coordinates, and live PONT timezone clock.
**Script:** Yes -- updates clock every 30 seconds (UTC+11 = PONT timezone).
**Position:** Fixed at `top-20` (below the 80px nav), `z-40`, `h-9` (36px).

### Hero.astro
**Role:** Full-viewport split-panel hero section.
**Script:** No (CSS animations only).
**Layout:** Two side-by-side panels (stack on mobile), each with a Cloudinary background image, dark gradient overlay, and slow-zoom animation. Central content is absolutely positioned with animated headline, subtitle, description, and two CTA buttons.
**Images:** `hero-left-matnas.jpg` (rainforest waterfall) and `hero-right-manta-road-pass.jpg` (reef/lagoon).
**Sizing:** Uses `.hero-section` class from `global.css` -- `100svh - 116px` on mobile, `min-height: 720px` on desktop.

### IntroEditorial.astro
**Role:** "About Pohnpei" introductory section.
**Script:** No.
**Section ID:** `#about`
**Pattern:** Centered text with ochre eyebrow label, large headline with italic ochre emphasis, body paragraph, etymology note, tapa divider.

### StatsBand.astro
**Role:** Four key statistics in a horizontal grid.
**Script:** No.
**Data (hardcoded):** 1,606 visitors (2025), 50+ experiences, 25% land conserved, 30% reefs protected.
**Pattern:** Grid of `grid-cols-2 md:grid-cols-4` with `.reveal` staggered by `transition-delay`.

### ChaptersGrid.astro
**Role:** Four "chapter" cards presenting the island's main themes.
**Script:** No.
**Section IDs:** Contains anchor IDs `#adventures`, `#atolls`, `#culture` on individual cards.
**Layout:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` with alternating vertical offset (`md:mt-20` on chapters II and IV) for a staggered magazine layout.
**Cards:** Each card has a 3:4 aspect ratio Cloudinary image, Roman numeral badge, tapa divider, title, subtitle, and description. All cards are links.
**Images:**
- Chapter I: `chapter-01-nan-madol.jpg`
- Chapter II: `chapter-02-wild-interior.jpg`
- Chapter III: `chapter-03-outer-atolls.jpg`
- Chapter IV: `chapter-04-living-culture.jpg`

### NanMadolFeature.astro
**Role:** Dedicated Nan Madol feature callout.
**Script:** No.
**Section ID:** `#nan-madol` (also has `#history` as a hidden anchor)
**Layout:** Split 50/50 -- left panel is full-bleed image, right panel is text content with tapa pattern background.
**Image:** `feature-nan-madol-step-into.jpg`

### DispatchForm.astro
**Role:** Newsletter signup form.
**Script:** Yes -- intercepts form submit, shows confirmation message ("Signal received. We'll meet you on the reef."), clears input, resets after 5 seconds. No actual backend submission.
**Section ID:** `#dispatch`
**Layout:** Centered card with double-border frame (outer border + inner tapa-pattern border), email input + submit button.

### MarqueeTicker.astro
**Role:** Auto-scrolling horizontal text ticker.
**Script:** No (CSS animation only via `.marquee-track` class).
**Data:** Items array defined in frontmatter: `['Kaselehlie', 'Upon a Stone Altar', 'The Garden Island', 'Nan Madol', 'The Venice of the Pacific', 'Forty Waterfalls', 'Tiahk en Pohnpei', 'Sokehs Ridge']`. Items are duplicated in the template (`[...items, ...items]`) to create seamless looping.
**Separator:** Gold diamond character between items.

### Footer.astro
**Role:** Site footer with four-column grid.
**Script:** No.
**Columns:**
1. Brand block (logo, tagline quote)
2. "The Island" nav links (About, Culture, History, Atolls)
3. "Plan Your Visit" nav links (all marked "soon")
4. "Pohnpei Tourism Office" contact info (address, email, MicronesiaTour.com link, social placeholders)
**Contact:** P.O. Box 1949, Kolonia, Pohnpei FM 96941 / pnitourism@gmail.com

## Conventions

- **No props needed for current components.** All components are used without passing props (content is hardcoded). `BaseLayout` is the only component that accepts props (`title`, `description`).
- **Reveal animations.** Add class `reveal` to any element that should fade-in on scroll. The IntersectionObserver in `BaseLayout.astro` handles the rest. Use inline `style="transition-delay: Xs;"` for staggered reveals.
- **Anchor links.** All nav links currently point to `#section-id` anchors within the landing page. Future pages will replace these with actual routes.
- **Ochre italic emphasis.** Key words in headlines are wrapped in `<em class="italic text-ochre">` for the signature editorial style.
- **Eyebrow labels.** Every section starts with a small uppercase label: `font-label text-ochre tracking-[0.3em] uppercase text-[11px] font-semibold`

## Adding New Components

1. Create a new `.astro` file in this directory
2. Import and place it in `src/pages/index.astro` (or a new page) in the correct visual order
3. Use existing design tokens (colors, fonts, spacing) from `tailwind.config.mjs`
4. Follow the section structure: eyebrow label, headline with ochre emphasis, body content
5. Add `reveal` class to elements that should animate on scroll
6. Use Cloudinary URLs for any images
7. Only add `<script>` tags if client-side interactivity is truly required
