# Notes — Items Not Found in Source Material

This file lists elements in the component library that are **inferred** or **not directly specified** in the TCG Style Sheet 2026 PDF or the live site MHTML captures.

---

## Brand shapes (2026-08-04)

- **`shape-circle.svg` was not a circle** — the file (previously `shape-semicircle.svg`) was a
  scaled-up copy of the same curved-triangle path used by `shape-arch.svg`. Replaced its contents
  with an actual `<circle>` so the shape matches its label.

## Logo treatments (2026-08-04)

- **Black and white transparent-background logo fills** (`logo-black-transparent.svg`,
  `logo-white-transparent.svg`) — Not in the original PDF/MHTML source. Added at Crispin's
  direction as additional approved logo treatments, alongside navy and sand
  (`logo-navy-transparent.svg`, `logo-sand-transparent.svg`). All four are the same approved logo
  artwork recoloured to a single fill — no new marks were drawn.
- **PNG downloads for logo treatments** — Rasterised from the four transparent-background SVGs
  above at 1920px wide (2x) using `sharp`, matching the SVG/PNG download pattern used elsewhere in
  the Logo section. `sharp` was installed with `--no-save` purely to generate these PNGs and is
  not a project dependency.
- **Icon outline shape** — The "Icon mark" brand shape previously used the solid filled icon
  (`icon-light-transparent.svg`), which was the logo, not the outline brand shape. Switched to the
  existing `icon-light-outline.svg` / `icon-dark-outline.svg` assets (stroke-only outline), which
  were already in `public/assets/` but unused as a labelled brand shape.

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
- CSS border diamond/circle shapes in Hero — live site uses the three real SVG shapes (square, arch, circle)
- Invented LogoMark SVG (circles + diamond) — replaced with real extracted logo
