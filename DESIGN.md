# Design Brief

## Direction

Minimal Hello World — a refined, spacious typography-first interface with intentional breathing room and a single accent color for visual focus.

## Tone

Refined minimalism: no decoration, maximum clarity. Every element serves a purpose; nothing is added for visual effect.

## Differentiation

Cool teal accent color (268° hue) used exclusively for the hero "Hello World" text, creating a focal point against neutral backgrounds.

## Color Palette

| Token      | OKLCH              | Role                                   |
| ---------- | ------------------ | -------------------------------------- |
| background | 0.98 0 0 (light)   | Full viewport light background         |
| foreground | 0.15 0 0           | Primary text on light backgrounds      |
| card       | 0.96 0.01 0        | Subtle card elevation, lifted slightly |
| primary    | 0.45 0.12 262      | Interactive elements, secondary accents |
| accent     | 0.55 0.15 268      | Hero text, calls-to-action, focus      |
| muted      | 0.88 0 0           | Disabled states, secondary text        |

## Typography

- Display: Satoshi — warm, rounded geometric shapes for hero/headings
- Body: General Sans — clean, legible sans-serif for all body text and UI labels
- Scale: hero `text-6xl md:text-8xl font-bold tracking-tight`, h2 `text-2xl font-semibold`, body `text-base leading-relaxed`

## Elevation & Depth

Minimal shadow hierarchy: card surfaces use a soft `shadow-sm` for subtle elevation; no dark shadows or excessive depth. Backgrounds differentiate through color lightness (background vs. card vs. muted) rather than shadow.

## Structural Zones

| Zone    | Background        | Border          | Notes                                |
| ------- | ----------------- | --------------- | ------------------------------------ |
| Header  | `bg-background`   | `border-b`      | Minimal divider, light border        |
| Content | `bg-background`   | —               | Breathing room, centered grid       |
| Footer  | `bg-muted/20`     | `border-t`      | Slightly tinted, minimal divider     |

## Spacing & Rhythm

Large negative space: 6rem+ margins on hero section, 2rem+ gaps between content blocks. Micro-spacing: 0.5rem between inline elements, 1rem within cards. Grid structure with breathing room dominates over density.

## Component Patterns

- Buttons: `bg-accent text-accent-foreground`, `rounded-lg`, hover state via opacity/scale (0.95x)
- Cards: `bg-card`, `rounded-lg`, `shadow-sm`, minimal padding (1.5rem)
- Badge: `bg-primary/10 text-primary`, `rounded-md`, inline labels only

## Motion

- Entrance: Fade-in on initial load (no bounce)
- Hover: Subtle opacity and scale transitions (0.2s ease-out)
- Decorative: None — motion is functional only

## Constraints

- No gradients, no glows, no animations
- Teal accent used only for interactive elements and hero text
- Full viewport height, responsive grid layout (mobile-first)
- Single font for display + body (warm, geometric Satoshi)

## Signature Detail

Cool teal accent (268° hue, mid-chroma) applied exclusively to the hero "Hello World" text, creating a single focal point against neutral greys. This restraint elevates the design through absence rather than addition.
