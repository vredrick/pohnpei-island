# SEO

## What the site does

- **URLs:** nginx serves each page as a directory and redirects `/page` to `/page/`. Internal links, canonicals and the sitemap all use the slash form so nothing points at a redirect. `trailingSlash: 'always'` in `astro.config.mjs` keeps the dev server the same.
- **Every page** (`src/layouts/BaseLayout.astro`): canonical URL, robots meta, Open Graph and Twitter card tags with a 1200×630 JPEG from Cloudinary (`ogImage()` in `src/data/site.ts`), and one JSON-LD `@graph` with WebSite, Organization, WebPage and, on inner pages, a BreadcrumbList.
- **Page-specific structured data** (passed as `schema`):
  - Home: TouristDestination for Pohnpei.
  - Nan Madol: TouristAttraction and an FAQPage built from the same `faqs` array the page renders.
  - Places to Stay: ItemList of Hotel entries from `src/data/accommodations.ts`.
  - Guides & Transport: ItemList of LocalBusiness entries from `src/data/operators.ts`, skipping paused operators.
- **`/sitemap.xml`:** generated from `src/pages`, so new pages are listed automatically. The 404 page is left out.
- **`/robots.txt`** allows everything and points to the sitemap.
- **`/404.html`** is marked `noindex`.

## Adding a page

Pass `title` (about 60 characters, main keyword first), `description` (about 150 characters), `canonical` as a path such as `/new-page/`, and an `image` from `ogImage('file.jpg')`. Add `schema` only when the page has structured facts to describe.

## Server and account tasks

These are outside the repository:

1. **Use the 404 page.** In `/etc/nginx/sites-available/pohnpeiisland.conf`, add `error_page 404 /404.html;` to the HTTPS server block, then run `sudo nginx -t && sudo systemctl reload nginx`.
2. **Redirect www.** `https://www.pohnpeiisland.com/` currently returns the site with a 200 status. Add a server block that returns `301 https://pohnpeiisland.com$request_uri` for `www.pohnpeiisland.com`. The canonical tags already point to the bare domain, so this tidies up the duplicate rather than fixing a ranking problem.
3. **Google Search Console.** Add the `pohnpeiisland.com` domain property (DNS TXT record at Hostinger), submit `https://pohnpeiisland.com/sitemap.xml`, and use the URL inspection tool on the home page and Nan Madol. Do the same in Bing Webmaster Tools, which can import from Search Console.
4. **Check the rich results** after deploying with Google's Rich Results Test and a social preview tool such as opengraph.xyz.
