# Homepage redesign — Island in Motion

Research and implementation: 28 September 2026. Local review; no publication performed.

## Art direction

An oversized editorial wordmark over real Pohnpei lagoon photography leads into warm paper, deep ocean green, and restrained rust accents. Following the owner’s supplied references, the current decorative bands adapt Pohnpeian tattoo geometry: nested chevrons, hatched rails, framed open panels and strong cuff-like borders. The sequence follows arrival → orientation → experiences → history → people → practical planning. Asymmetric photograph heights and changing section colours create rhythm without scroll hijacking.

Image generation produced three visual suggestions in [the concept board](design/homepage-concepts.png): Pacific Field Notes, Island in Motion, and Woven Horizons. Island in Motion supplied the primary direction, with warm editorial details from the other concepts. Generated landscapes are concept illustrations, not factual photographs of Pohnpei; none are used as destination imagery in the website.

## Research and decisions

| Reference | Observation | Application |
| --- | --- | --- |
| [Awwwards: Rhythm of Nature](https://www.awwwards.com/sites/rhythm-of-nature) | Its award listing highlights chapter navigation, an immersive landscape journey, parallax and storytelling. | A deliberate sequence of landscape, history and culture, supported by lightweight scroll movement. This was reference research, not a claim that our page has been judged or awarded. |
| [Awwwards: When to Travel](https://www.awwwards.com/sites/when-to-travel) | Its listing highlights distinctive travel navigation and interactive discovery. | Clear experience entry points and direct planning routes; normal browser scrolling stays intact. |
| [Te Papa: Dohr (Sash), OL002156/3](https://collections.tepapa.govt.nz/object/205813) | Museum documentation describes Eastern Caroline weaving attributed to Pohnpei and Kosrae: finely woven plant fibres, coloured fields, narrow borders and structured patterns. The documented sash also has specific chiefly associations. | Informed the initial concept’s fine woven bands. These were subsequently replaced by tattoo-inspired bands at the owner’s request. No museum image or exact sash pattern is reproduced. |
| [Visit Pohnpei: About Pohnpei](https://visitpohnpei.travel/culture/about-pohnpei/) | Destination context centres on rainforest, lagoon, living traditions, local hospitality and the greeting Kaselehlie. | Ground the page in these distinct experiences; keep the independent guide identity. |
| [UNESCO: Nan Madol](https://whc.unesco.org/en/list/1503/) | UNESCO describes more than 100 constructed islets, basalt and coral walls, and the ceremonial centre of the Saudeleur dynasty. | The Nan Madol chapter uses those supported facts and links to the detailed existing visitor guide. |

The current geometry is an original SVG adaptation of the two Pohnpeian tattoo references supplied directly by the owner on 28 September 2026: a historical arm/hand illustration captioned as Pohnpeian tattooing and a contemporary sleeve photograph. It draws on visible geometric structure without assigning names or cultural meanings to individual motifs. The reference photographs are not published on the site. The supplied imagery supersedes the original woven-band direction.

## Real photographs

| Homepage use | Source | Status |
| --- | --- | --- |
| Hero and lagoon experience | Existing Cloudinary `hero-left-matnas.jpg` | Reused site photograph. Visually verified as a lagoon view; previous component alt text incorrectly called it a waterfall. New alt text describes the visible lagoon. |
| Waterfall experience | Existing Cloudinary `chapter-02-wild-interior.jpg` | Reused site photograph; visible waterfall and walkway. |
| Ocean experience | Existing Cloudinary `hero-right-manta-road-pass.jpg` | Reused site photograph; alt describes the visible manta ray without claiming a specific dive location. |
| Nan Madol experience | Existing Cloudinary `chapter-01-nan-madol.jpg` | Reused site photograph. |
| Nan Madol feature | Existing Cloudinary `feature-nan-madol-step-into.jpg` | Reused site photograph; basalt walls and palms. |
| Culture portrait | Existing Cloudinary `chapter-04-living-culture.jpg` | Reused site photograph; no invented personal name or attribution. |
| Arrival/planning postcard | [Pohnpei lagoon from plane 2, Zykasaa](https://commons.wikimedia.org/wiki/File:Pohnpei_lagoon_from_plane_2.jpg) | New real photograph, taken 6 February 2025; [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Creator, source, licence and display crop are credited next to the image. Original hosted file remains unchanged; the presentation uses CSS object-fit. |

Existing assets retain their delivery through Cloudinary with responsive sizing. The new Commons photo uses its original Wikimedia URL because Cloudinary's remote-fetch endpoint returned HTTP 401. No credentials were used, no Cloudinary account configuration was changed, and no original imagery was overwritten. Existing-site photography permissions are inherited from the current site, not independently established by this redesign.

## Motion and usability

- Staggered letter entrance, introductory image settle, scroll-linked hero and feature photography, section reveals, drawn underline, rotating discovery seal, photographic hover transitions and a continuous editorial ribbon.
- Native scrolling, no page loader, no autoplay audio, no animation framework dependency.
- Visible pause/resume button; preference persists for the tab. OS reduced-motion preference disables animation and parallax, including when changed while the page is open.
- Native details navigation works without JavaScript. Escape, outside click, selecting a link and switching to desktop close the enhanced mobile menu.
- Content starts visible; the reveal observer is a progressive enhancement. All primary actions link to existing guides.
- Homepage-specific components and CSS preserve the existing guide-page design and behaviour. Legacy homepage anchors are retained, including `#dispatch`, which now reaches useful trip planning instead of a simulated newsletter submission.

## Validation

- `npm run build`: all 10 static routes built successfully. Home JavaScript is approximately 2.49 kB before gzip, with no added package dependencies.
- Playwright/Chromium production-preview checks: 36/36 passed. No runtime errors.
- Seven viewport widths (320, 390, 600, 768, 1024, 1440 and 1920px): no horizontal overflow; the complete Pohnpei wordmark fits.
- Eight image elements decoded; all 15 distinct internal link/anchor destinations resolved.
- Verified pause, resume, reload persistence, scroll response, header transition, mobile menu, Escape focus return, anchor navigation, desktop resize, live reduced-motion changes, no-JavaScript content/navigation, and the unchanged travel guide route.
- Desktop hero, full-page composition and mobile hero/menu screenshots were visually inspected. Visual review caught and fixed initial wordmark clipping and an unclipped hero image layer.
- [Desktop preview](design/homepage-desktop.jpg), [mobile preview](design/homepage-mobile.jpg), [full-page preview](design/homepage-full.jpg), [browser check results](design/homepage-qa.json).
- Physical-device testing and an independent Awwwards evaluation are outside this local implementation.

## Tattoo accents and preview recovery — 28 September 2026

- Replaced `Weave.astro` with `TattooBand.astro`: bold 64px bands at the hero, culture chapter and footer. Adjusted section spacing for the deeper patterns, including mobile.
- The previous preview process was no longer running. The replacement server and HTTPS tunnel run as supervised user services, independent of the terminal/tool session, with automatic restart on failure.
- Review URL: https://dom-had-solo-actions.trycloudflare.com/
- Services: `pohnpei-home-preview.service` and `pohnpei-home-preview-tunnel.service`. Inspect with `systemctl --user status pohnpei-home-preview pohnpei-home-preview-tunnel`; stop with `systemctl --user stop pohnpei-home-preview-tunnel pohnpei-home-preview`.
- These are transient review services, not a production deployment. The tunnel URL can change when the tunnel process restarts; retrieve its current URL from `journalctl --user -u pohnpei-home-preview-tunnel`.

- Follow-up verification: 10-route build and diff check passed; HTTPS preview returned HTTP 200 and rendered the updated page in Playwright/Chromium with zero runtime errors. All three new bands rendered at 320, 390, 768 and 1440px without horizontal overflow. Updated desktop, mobile and full-page review images; [tattoo band detail](design/homepage-tattoo-detail.jpg).

## iPhone icon rendering, fish pattern and geographic wording

- The owner’s iPhone screenshot showed Unicode star and arrow characters being rendered as coloured emoji. Replaced all homepage decorative symbols and directional/control characters with `Icon.astro` inline SVGs. Pause/resume now changes SVG path data instead of inserting text glyphs.
- `TattooBand.astro` has two variants: `geometric` for the hero/footer and `fish` for the culture section. The fish variant uses angular fish in open panels, with the same hatched borders. These are contemporary adaptations of the owner’s supplied tattoo references, without invented motif names or meanings.
- Changed the homepage paragraph and geographic label to **North Pacific**, as requested. [Visit Pohnpei](https://visitpohnpei.travel/culture/about-pohnpei/) places the island in the western Pacific north of the equator; the north/west descriptions are compatible.

- Follow-up validation: ten-route build and diff check passed. HTTPS preview returned 200; Chromium confirmed no remaining emoji-prone characters, two geometric bands and one fish band, North Pacific copy, SVG pause/resume state changes, and no overflow at 320/390/768/1440px. Zero runtime errors. [Mobile SVG icons](design/homepage-svg-mobile.jpg) and [fish pattern](design/homepage-fish-culture.jpg) visually reviewed. Physical iPhone recheck remains with the owner.

## Site-wide style extension and seamless patterns — 2026-09-28

Owner approved the homepage direction and requested subtle seamless pattern animation and the same style on the other pages. Extended the paper, lagoon ink, rust accents, Newsreader typography, editorial spacing and SVG icon treatment to all nine guide routes. Shared navigation now offers every guide through a native details menu, with the same island mark and a persistent motion preference. The new dark footer carries the oversized island wordmark and geometric band.

Travel introductions use asymmetric typography and practical side notes. Nan Madol and diving retain cinematic real-photo heroes; the outer-islands photograph has an arched crop. The forest guide reuses the existing homepage waterfall photograph. Planning adds staggered cards using the existing Nan Madol, waterfall and manta photographs. Existing guide content, source/contact links and section IDs remain available. No new business or travel claims were introduced.

`TattooBand.astro` translates the repeated SVG by one exact 160px tile over 80 seconds (geometry) or 100 seconds (fish, reverse direction). Extra track width is clipped inside the band, avoiding empty edges. IntersectionObserver pauses offscreen bands. The shared motion control pauses both variants, stores the preference for the session and applies it across homepage/guide navigation. OS reduced motion disables animation; without JavaScript the patterns stay still and guide navigation remains usable.

Validation:
- Astro production build passes for all 10 routes; `git diff --check` passes.
- Chromium browser checks on all 10 pages at 320, 390, 768 and 1440px: HTTP 200, no horizontal overflow, no oversized icons or emoji-prone decorative characters, no runtime errors.
- Compared before/after built main content: no removed links or section IDs; no broken in-page anchors.
- Pixel comparison of both pattern variants at the start and end of the loop: identical frames.
- 31 interaction checks pass: pattern motion/pause/resume, cross-page preference, native mobile menu and Escape focus, all 9 guide destinations, stay directory search/area/reset/empty state, operator service query/filter/reset/empty state, FAQ, OS reduced motion, no-JS directory/menu/static patterns.
- Desktop/mobile visual review of all guides; existing and reused photographs load.
- HTTPS preview `/plan-your-trip` returns 200 at https://dom-had-solo-actions.trycloudflare.com/plan-your-trip. Same supervised preview services remain running; no production deployment or push.

Selected screenshots and interaction results: `docs/design/guide-refresh/`. These are Chromium lab checks, not a physical iPhone test.

### Owner correction: solid stencil treatment

The owner found the earlier bands too detailed, hollow and outline-heavy compared with the supplied tattoos. Redrew both SVG variants entirely from filled paths: broad black rails, solid diagonal teeth, heavy chevron blocks and a diamond cutout for geometry; filled angular bodies, fins and tails with small eye/body cutouts for fish. All placements now use opaque near-black ink (#151916). Bands on dark photographic/footer sections have a light ground so they retain the black stencil appearance. Removed prior rust/gold band colors and faded opacity. Fixed the homepage footer band's padding so all 64px remain visible.

Build passed after correction. Browser inspection of home, Nan Madol, outer islands and Getting Here confirms every band is opaque, 64px high and has no stroke-based outlines. The tile dimensions and slow animation durations are unchanged. Rechecked pixel equality at the loop boundary for both revised variants. Latest pattern evidence: `stencil-geometric.png`, `stencil-fish.png`, `stencil-culture-mobile.png` in `docs/design/guide-refresh/`; earlier page screenshots show the superseded outlined patterns.
