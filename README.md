# Teerapat Futhep — Career Profile

An interactive, single-page career profile site. Dark, cinematic, editorial-luxury
aesthetic per `Style.md` — all-caps neo-grotesk type, bracketed technical labels,
three-digit section indices, 1px dividers, corner-bracket photo frames, and no accent
color (contrast does the work).

## Tech stack

- **Next.js 14** (App Router)
- **Tailwind CSS 3** with design tokens mapped to the style guide
- **TypeScript**
- `next/font` (Inter Tight) and `next/image` (AVIF/WebP optimization, grayscale treatment)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx          Section composition
  globals.css       Tokens, utilities, reveal-on-scroll, scrollbar
components/
  Nav, Hero, About, Experience, PullQuote, Expertise, Contact, Footer
  CornerBrackets    Blueprint/HUD photo + CTA frame
  Reveal            IntersectionObserver fade-up (respects prefers-reduced-motion)
lib/
  data.ts           Single source of truth for all profile content
public/images/       Portrait & candid photography (relocated from /Picture)
```

## Content & contact

All copy lives in `lib/data.ts` — edit there to update.

The **Contact** section provides three channels:

- **Mobile** — `tel:` link plus a **copy-to-clipboard** button (with a non-secure-context fallback)
- **Email** — `mailto:` link plus copy-to-clipboard
- **LinkedIn** — external link

## Notes

- Original photos in `/Picture` were copied into `public/images/` with semantic names
  (`portrait-primary`, `presenting`, `speaking`, `discussion`, `seated`). The `/Picture`
  folder is left untouched as the source.
- Sections fade up on scroll; with `prefers-reduced-motion` they render immediately.
