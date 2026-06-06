# Notes — Items Not Found in Source Material

This file lists elements in the component library that are **inferred** or **not directly specified** in the TCG Style Sheet 2026 PDF or the live site MHTML captures.

---

## Inferred components

- **Form input styles** (`FormInputs.jsx`) — Entirely inferred. No form styling exists in the PDF or MHTML CSS beyond basic Elementor defaults. Border colour, focus ring colour, error states, and border-radius are all extrapolated from the brand palette.

## Inferred states

- **Disabled button state** — Not shown anywhere in the PDF or live site. We apply `opacity-50` + `pointer-events-none` as a safe default.

## Inferred animation values

- **`spin-cw` / `spin-ccw` CSS animations** — The rotation animations are applied via JavaScript on the live site (Elementor motion effects), not in the MHTML CSS. The `easing="linear"` attribute and visual behaviour suggest continuous rotation. We use `20s` duration for a slow gentle spin — the exact duration is inferred.

## Not addressed in sources

- **Mobile nav animation timing** — The hamburger menu exists on the live site, but exact transition duration/easing is not captured in the MHTML CSS.
- **Dark mode** — Not addressed in the PDF or live site.
- **Icon set** — The live site uses Font Awesome. No icon guidance appears in the brand PDF.

## Removed invented elements

The following items from the initial build were removed because they don't appear on the live site or in the PDF:

- `primary` button variant (navy bg, sand text) — no navy-bg button found on site
- `secondary` button variant (sand bg, navy text) — not found
- `teal` button variant (teal bg, sand text) — not found
- `outlineSand` button variant — not a distinct variant; the live site uses white outlines on dark sections
- `*-light` and `*-dark` colour tints — invented hover tints, not in brand spec
- Navy navbar background with sand text — live site actually uses white/transparent bg with navy text
- CSS border diamond/circle shapes in Hero — live site uses the three real SVG shapes (square, arch, semicircle)
- Invented LogoMark SVG (circles + diamond) — replaced with real extracted logo
