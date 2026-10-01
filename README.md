# ByteSpace — landing page

Marketing landing page for ByteSpace, built with the Next.js App Router.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack, React Compiler) |
| UI | React 19 |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Language | TypeScript (strict) |
| Linting | ESLint 9 + `eslint-config-next` |

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
app/
  layout.tsx        Root layout: fonts, <html>/<body>, page metadata
  page.tsx          Landing page — imports sections in display order
  globals.css       Tailwind entry point
components/
  home/             One section per file (one component per export)
    Hero.tsx            Header + hero
    PartnerLogos.tsx    Partner logo strip
    CourseCategories.tsx  Category filter pills (client component)
    FeaturedCourses.tsx Course grid (contains its CourseCard)
    LearningCategories.tsx
    GrowthFeatures.tsx  Two alternating feature rows
    CreatorCta.tsx      Creator call-to-action banner
    Testimonials.tsx
    SiteFooter.tsx      Footer + newsletter
content/            Typed copy and data — no JSX, no styling
  site.ts               Page title / description
  courses.ts
  learning-categories.ts
  growth-features.ts
  testimonials.ts
  footer.ts
  partners.ts
public/             Static assets served at the site root
  hero/  partners/  figma/
```

`app/page.tsx` lists the sections in the order they appear on the page — that
order **is** the page order.

## Conventions

**One section, one file.** Every page section lives in `components/home/`
and exports a single named component. A section-private helper (for example the
pill button in `CourseCategories`) stays in the same file as its only consumer.

**Content lives in `content/`.** Repeated or structured copy — card data,
testimonials, footer link groups, logo dimensions — is typed and exported from
`content/`, so components stay presentational and copy is editable in one place.
Inline prose stays next to the markup it belongs to.

**Named exports.** Sections are exported by name, not by default, so imports
stay greppable and consistent.

**No barrel files.** `CourseCategories` is a client component while the others
are server components; re-exporting both from one `index.ts` invites accidental
server/client bundling. Import sections from their files directly.

**Path alias.** `@/*` maps to the project root (`@/components/...`,
`@/content/...`).


