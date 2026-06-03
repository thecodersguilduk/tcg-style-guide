# Design Decisions — TCG Component Library

Documenting choices, assumptions, and gaps filled when translating the **TCG Style Sheet 2026** PDF and live website into a React + Tailwind component library.

---

## Source Materials

| Source | What it provided |
|---|---|
| `TCG_Style-Sheet-2026.pdf` (4 pages) | Colours, fonts, logo variants, social-media card designs, presentation slide layouts |
| `thecodersguild.org.uk` MHTML | Live nav structure (Employers / Learners / Courses / About Us / Insights), sticky header, Elementor markup patterns |

---

## Colours

The PDF defines exactly **four brand colours**. No greys, whites, or surface tones are specified.

| Token | Hex | Usage |
|---|---|---|
| `navy` | `#3A405A` | Primary backgrounds, text on light surfaces |
| `sand` | `#F2D0A4` | Secondary backgrounds, text on dark surfaces |
| `red` | `#E4200A` | CTAs, urgent/hiring callouts |
| `teal` | `#218380` | Courses, positive accents, form focus rings |

### Gaps filled

- **Hover/focus tints**: The PDF provides no interaction-state colours. We generated `*-light` and `*-dark` variants by shifting lightness ±10% while staying in gamut. These are used only for hover/focus states, not as standalone brand colours.
- **White text on red**: The PDF hiring card uses what appears to be white (`#FFFFFF`) or very light sand text on the red background. We use `text-white` for the `cta` button variant and `red` cards for maximum contrast (WCAG AA on `#E4200A`).
- **Background surfaces**: `sand-light` (`#F7E2C4`) is used as a form-section background to differentiate from pure white without introducing an off-brand grey.
- **No grey palette**: The style sheet has no greys. We use `navy` at reduced opacity (`navy/40`, `navy/70`) for placeholder text and secondary copy instead.

---

## Typography

The PDF specifies **Poppins** in three weights only:

| Weight | CSS `font-weight` | Usage in this library |
|---|---|---|
| Light | 300 | Body copy, descriptions, form placeholders |
| Regular | 400 | Navigation links, labels, secondary text |
| Semibold | 600 | Headings, button labels, card tags |

### Gaps filled

- **No type scale specified**: The PDF shows heading sizes visually in presentation slides but doesn't define a numeric scale. We follow Tailwind's default scale (`text-sm` through `text-6xl`) and use Semibold for all headings, Regular for nav, Light for body — matching the font pairing hierarchy in the PDF.
- **No line-height/letter-spacing rules**: We use Tailwind defaults (`leading-tight` for headings, `leading-relaxed` for body), which produce results consistent with the PDF layouts.
- **No italic usage shown**: Italics are used sparingly only for blockquote styling in the testimonial cards — this is an addition not shown in the source material.

---

## Button Design (6 Variants)

The PDF social-media page (page 3) shows pill-shaped buttons: "Learn more" and "Get in touch" with fully rounded ends. All buttons in the library use `rounded-full`.

| Variant | Background | Text | Source reference |
|---|---|---|---|
| `primary` | Navy | Sand | Inferred — no navy-bg button in PDF, but follows logo-primary logic |
| `secondary` | Sand | Navy | Sand testimonial card's implied CTA |
| `cta` | Red | White | "Get in touch" button on hiring card |
| `teal` | Teal | Sand | "Learn more" button on teal course card |
| `outlineNavy` | Transparent | Navy (border) | Presentation slide "Volutpat ipsum" outlined buttons |
| `outlineSand` | Transparent | Sand (border) | "Learn more" pill on social cards with dark backgrounds |

### Gaps filled

- **No explicit button size spec**: The PDF shows buttons at roughly three sizes across social and presentation contexts. We mapped these to `sm` / `md` / `lg` with padding derived from the visual proportions.
- **No disabled state shown**: We apply `opacity-50` + `pointer-events-none` as a safe default.

---

## Card Design (4 Variants)

Derived from the four social-media story cards on PDF page 3:

| Variant | Maps to PDF card | Background | Text |
|---|---|---|---|
| `navy` | (implied dark card) | Navy | Sand |
| `sand` | Testimonial / Sam Raife card | Sand | Navy |
| `red` | "We're Hiring!" card | Red | White |
| `teal` | "Software Tester" course card | Teal | Sand |

All cards use `rounded-2xl` — the PDF stories have rounded corners inside phone mockups; the exact radius isn't specified, so we chose a generous radius consistent with the pill-button aesthetic.

---

## NavBar

Derived from the live website header (MHTML source):

- **Navy background** with sticky positioning
- **Sand-coloured links** matching the live site's sand-on-navy pattern
- **Red CTA** button ("Get in Touch") at the right edge
- **Menu items**: Employers, Learners, Courses, About Us, Insights — taken directly from the live nav
- **Mobile**: Hamburger toggle (the live site uses Elementor's burger menu at tablet breakpoint)

### Gaps filled

- **Logo SVG**: The actual logo is an SVG asset hosted on the live site. We created a simplified geometric approximation (four circles + rotated diamond) that echoes the brand mark. **A production build should replace this with the official SVG asset.**
- **Dropdown sub-menus**: The live site has multi-level dropdowns. This library provides a flat link list — dropdowns would be a future addition.
- **Active link state**: No specification in the PDF. Not implemented.

---

## Hero Section

Follows the **title slide** pattern from PDF page 4 and the **cover page** layout (page 1):

- Navy background with decorative sand-coloured line shapes (diamond + circle, matching the geometric brand elements on the cover)
- Large Poppins Semibold heading
- Light-weight subtitle
- CTA + optional secondary pill button

### Gaps filled

- **Decorative shapes**: The cover page shows outlined diamond and circle shapes overlapping. We replicate this with absolutely-positioned CSS borders. The exact sizes/positions are approximated from the visual layout.
- **No hero image spec**: The PDF doesn't show a hero with a photo. The live site uses Elementor widgets with background images. Our Hero is text-only by default; an `image` prop would be a future enhancement.

---

## Form Inputs

No form styles appear in the PDF or the presentation deck. These are **entirely inferred** from the brand system:

- **Border colour**: `navy/30` — light navy tint, consistent with the muted approach used across the brand
- **Focus ring**: Teal — the only colour not heavily used elsewhere; provides clear affordance without clashing with the red CTA
- **Error state**: Red border + red helper text (maps to the CTA/alert colour)
- **Border radius**: `rounded-lg` — less than the pill buttons, more than sharp corners, consistent with the card radius family

---

## What's Missing / Future Work

1. **Official logo SVGs** — The library includes a geometric placeholder. Drop in the real assets from the brand folder.
2. **Dark-mode palette** — The PDF doesn't address dark mode. The navy-heavy brand lends itself to it, but no spec exists.
3. **Animation/motion** — The live site uses Elementor's fadeInUp animations. No motion tokens are defined in the style sheet.
4. **Spacing scale** — No spatial rhythm (8px grid, etc.) is specified. We rely on Tailwind's default 4px-based scale.
5. **Icon set** — The live site uses Font Awesome. No icon guidance appears in the brand PDF.
6. **Dropdown menus** — NavBar currently provides flat links only.
7. **Breakpoints** — The PDF doesn't specify breakpoints. We use Tailwind defaults (`sm: 640px`, `md: 768px`, `lg: 1024px`).
