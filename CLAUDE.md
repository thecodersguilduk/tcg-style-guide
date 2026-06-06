# TCG Style Guide

Interactive brand component library for The Coders Guild (TCG). A single-page React app showing the full design system — colours, typography, logos, buttons, cards, nav bar, hero section, and form inputs.

## Tech stack

- React 19 + Vite 8
- Tailwind CSS v4 — theme configured via `@theme` in `src/index.css` (no `tailwind.config.js`)
- Poppins from Google Fonts
- No routing — everything renders from `src/pages/StyleGuide.jsx`

```
npm install
npm run dev
```

## Brand colours

Defined in `src/index.css` as CSS custom properties:

| Token | Hex     | Tailwind class |
|-------|---------|----------------|
| navy  | #3A405A | `bg-navy`, `text-navy` |
| sand  | #F2D0A4 | `bg-sand`, `text-sand` |
| red   | #E4200A | `bg-red`, `text-red` |
| teal  | #218380 | `bg-teal`, `text-teal` |

## Logo rules — IMPORTANT

Only 4 background colour × 3 logo type combinations are approved. Do not add others.

### 3 logo types per colour theme
| Type | Description | Asset prefix |
|------|-------------|--------------|
| Primary | Full logo — icon + "The Coders Guild" wordmark | `logo-` |
| Secondary | Icon/mark only | `icon-` |
| Tertiary | Wordmark/text only | `wordmark-` |

### 4 approved colour themes
| Theme | Background | Foreground | Asset suffix |
|-------|-----------|------------|--------------|
| Dark  | Navy #3A405A | Sand #F2D0A4 | `-dark` |
| Light | Sand #F2D0A4 | Navy #3A405A | `-light` |
| Red   | Red #E4200A  | Sand #F2D0A4 | `-red` |
| Green | Teal #218380 | Sand #F2D0A4 | `-green` |

### Asset files in `public/assets/`
```
logo-dark.svg      logo-light.svg      logo-red.svg      logo-green.svg
icon-dark.svg      icon-light.svg      icon-red.svg      icon-green.svg
wordmark-dark.svg  wordmark-light.svg  wordmark-red.svg  wordmark-green.svg
```
Transparent-background versions (for use in UI contexts):
```
icon-dark-transparent.svg   icon-light-transparent.svg
logo-dark-transparent.svg   logo-light-transparent.svg
```

## Key files

| File | Purpose |
|------|---------|
| `src/pages/StyleGuide.jsx` | Main style guide page — all sections |
| `src/components/Button.jsx` | CTA + outline button variants |
| `src/components/Card.jsx` | navy / sand / red / teal card variants |
| `src/components/NavBar.jsx` | Top navigation bar |
| `src/components/Hero.jsx` | Full-width hero with rotating brand shapes |
| `src/components/FormInputs.jsx` | Text input, select, textarea, checkbox |
| `src/index.css` | Tailwind v4 @theme tokens + spin animations |
| `public/assets/` | All SVG brand assets |
| `NOTES.md` | Documents inferred vs. sourced design decisions |

## What's inferred (not in official brand docs)

See `NOTES.md` for the full list. Key items:
- All form input styles (border colours, focus rings, error states)
- Disabled button state
- Exact rotation animation duration (20s)

The style guide UI clearly labels inferred sections.

## Repo

GitHub: `https://github.com/thecodersguilduk/tcg-style-guide.git`
Branch strategy: feature branches off `main`.
