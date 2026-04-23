# Midline Investment — Design System v1.0

> A unified visual language for all Midline Investment digital touchpoints — from the flagship website to subsidiary properties.

**Stack:** Next.js + Tailwind v4 · **HQ:** Burlington Tower, Business Bay, Dubai · **Version:** 1.0

---

## Table of Contents

1. [Color Palette](#1-color-palette)
2. [Typography](#2-typography)
3. [Spacing](#3-spacing)
4. [Border Radius](#4-border-radius)
5. [Shadows & Elevation](#5-shadows--elevation)
6. [Motion & Animation](#6-motion--animation)
7. [Iconography](#7-iconography)
8. [Buttons](#8-buttons)
9. [Badges & Tags](#9-badges--tags)
10. [Form Inputs](#10-form-inputs)
11. [Cards](#11-cards)
12. [Alerts & Notifications](#12-alerts--notifications)
13. [Tabs & Navigation](#13-tabs--navigation)
14. [Patterns — Navigation Bar](#14-patterns--navigation-bar)
15. [Patterns — Hero Section](#15-patterns--hero-section)
16. [Patterns — Sector Cards](#16-patterns--sector-cards)
17. [Patterns — Stats & Metrics](#17-patterns--stats--metrics)
18. [Patterns — Footer](#18-patterns--footer)
19. [CSS Design Tokens](#19-css-design-tokens)
20. [Brand Voice & Writing Style](#20-brand-voice--writing-style)

---

## 1. Color Palette

The Midline palette draws from deep authority blues and warm investment gold. Navy anchors the brand with gravitas; sky blue signals openness; gold denotes premium quality and trust.

### Primary — Navy

| Name       | Hex       | CSS Variable   | Usage                          |
|------------|-----------|----------------|--------------------------------|
| Navy Deep  | `#091629` | `--navy-deep`  | Darkest backgrounds, footer    |
| Navy       | `#0E1F3B` | `--navy`       | Primary brand color, navbar    |
| Navy Mid   | `#122D53` | `--navy-mid`   | Gradient mid-stop, hover state |
| Sky Pale   | `#E8F4FB` | `--sky-pale`   | Light tinted backgrounds       |

### Secondary — Sky Blue

| Name       | Hex       | CSS Variable   | Usage                          |
|------------|-----------|----------------|--------------------------------|
| Sky        | `#50A6D0` | `--sky`        | Links, labels, accents         |
| Sky Light  | `#45C2E7` | `--sky-light`  | Hover state for sky elements   |
| Sky Pale   | `#E0F6FB` | `--sky-pale`   | Alert backgrounds, info states |

### Accent — Gold

| Name       | Hex       | CSS Variable   | Usage                          |
|------------|-----------|----------------|--------------------------------|
| Gold       | `#B8941F` | `--gold`       | Primary CTA, "Get A Quote"     |
| Gold Light | `#D4AE3A` | `--gold-light` | Hover state, italic highlights |
| Gold Pale  | `#FAF4E1` | `--gold-pale`  | Subtle gold tint backgrounds   |

### Neutral

| Name      | Hex       | CSS Variable  | Usage                             |
|-----------|-----------|---------------|-----------------------------------|
| Ink       | `#1C2B3A` | `--ink`       | Body text, headings               |
| Slate     | `#6B7A93` | `--slate`     | Secondary text, placeholders      |
| Mist      | `#EEF1F5` | `--mist`      | Borders, dividers, card borders   |
| Off White | `#F7F8FA` | `--off-white` | Page background                   |
| White     | `#FFFFFF` | `--white`     | Card surfaces, modal backgrounds  |

---

## 2. Typography

Two typefaces carry the Midline brand:

- **Cormorant Garamond** (serif) — heritage, gravitas, premium positioning. Used for all display text, H1–H3, and hero headlines.
- **DM Sans** (sans-serif) — clarity and modernity. Used for body copy, UI labels, nav links, and captions.
- **DM Mono** (monospace) — code, hex values, technical metadata.

### Font Import

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
```

### Type Scale

| Role     | Size         | Weight | Font             | Letter Spacing | Usage                        |
|----------|--------------|--------|------------------|----------------|------------------------------|
| Display  | 4.5rem / 72px | 300   | Cormorant        | -0.02em        | Hero super-headlines         |
| H1       | 3rem / 48px  | 400    | Cormorant        | -0.01em        | Page heroes                  |
| H2       | 2rem / 32px  | 500    | Cormorant        | 0              | Section titles               |
| H3       | 1.5rem / 24px| 500    | Cormorant        | 0              | Card titles, subsections     |
| Lead     | 1.1rem / 17.6px | 300 | DM Sans          | 0              | Hero subtext, intros         |
| Body     | 0.9rem / 14.4px | 400 | DM Sans          | 0              | Paragraphs, descriptions     |
| Caption  | 0.75rem / 12px | 500  | DM Sans          | 0.10em         | Image captions, metadata     |
| Label    | 0.68rem / 10.9px | 700| DM Sans          | 0.18em         | Section eyebrows (uppercase) |
| Mono     | 0.78rem      | 400    | DM Mono          | 0              | Code, tokens, hex values     |

### Weights Used

**Cormorant Garamond:** Light 300, Regular 400, Medium 500, SemiBold 600 — all available in Italic.

**DM Sans:** Light 300, Regular 400, Medium 500, SemiBold 600.

### Typographic Rules

- Italic Cormorant in gold (`--gold-light`) for hero emphasis words
- Uppercase DM Sans labels always use `letter-spacing: 0.14–0.20em`
- Line height: `1.1` for display, `1.5–1.65` for body, `1.7` for long-form
- Max line width for body copy: `580px` (65–70 characters)

---

## 3. Spacing

8-point grid system. All spacing is in multiples of 4px, with the primary rhythm at 8px increments.

| Token    | Value     | px  | Usage                                |
|----------|-----------|-----|--------------------------------------|
| `--sp-2` | 0.125rem  | 2px | Hairline gaps, icon offsets          |
| `--sp-4` | 0.25rem   | 4px | Internal badge padding               |
| `--sp-8` | 0.5rem    | 8px | Icon-to-text gap, tight stacks       |
| `--sp-12`| 0.75rem   | 12px| Label margin, small gaps             |
| `--sp-16`| 1rem      | 16px| Standard element gap                 |
| `--sp-24`| 1.5rem    | 24px| Card padding, section sub-gaps       |
| `--sp-32`| 2rem      | 32px| Component internal spacing           |
| `--sp-48`| 3rem      | 48px| Section padding (mobile)             |
| `--sp-64`| 4rem      | 64px| Section padding (desktop)            |
| `--sp-96`| 6rem      | 96px| Hero vertical padding, page margins  |

---

## 4. Border Radius

| Token      | Value  | Usage                                 |
|------------|--------|---------------------------------------|
| `--r-sm`   | 4px    | Buttons, inputs, small chips          |
| `--r-md`   | 8px    | Dropdowns, tooltips, form controls    |
| `--r-lg`   | 16px   | Cards, modals, nav previews           |
| `--r-xl`   | 24px   | Hero blocks, large panels             |
| `--r-full` | 9999px | Pill badges, avatar circles, tags     |

---

## 5. Shadows & Elevation

All shadows are navy-tinted (`rgba(14,31,59, …)`) to stay on-brand. Never use pure black shadows.

| Token          | Value                                                            | Usage                        |
|----------------|------------------------------------------------------------------|------------------------------|
| `--shadow-sm`  | `0 1px 3px rgba(14,31,59,.08), 0 1px 2px rgba(14,31,59,.06)`   | Cards, table rows            |
| `--shadow-md`  | `0 4px 16px rgba(14,31,59,.12), 0 2px 6px rgba(14,31,59,.08)`  | Hover state, dropdowns       |
| `--shadow-lg`  | `0 12px 40px rgba(14,31,59,.16), 0 4px 12px rgba(14,31,59,.10)`| Modals, drawers              |
| `--shadow-xl`  | `0 24px 64px rgba(14,31,59,.22), 0 8px 24px rgba(14,31,59,.14)`| Full-page overlays           |
| `--shadow-gold`| `0 4px 24px rgba(184,148,31,.25)`                               | Gold CTA buttons only        |

---

## 6. Motion & Animation

Motion should feel confident and purposeful. Avoid bounce or spring physics — use deceleration curves that mirror the brand's gravitas.

### Easing Curves

| Token           | Value                          | Usage                                    |
|-----------------|--------------------------------|------------------------------------------|
| `--ease-out`    | `cubic-bezier(0.22, 1, 0.36, 1)` | Entrances, reveals, hover responses  |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | State transitions, page changes      |

### Duration Tokens

| Token        | Value  | Usage                                     |
|--------------|--------|-------------------------------------------|
| `--dur-fast` | 180ms  | Hover, focus ring, toggle                 |
| `--dur-mid`  | 320ms  | Expand/collapse, modal open, card reveal  |
| `--dur-slow` | 560ms  | Page transitions, hero reveals, scroll    |

### GSAP / ScrollTrigger Guidelines

- Hero elements: `y: 40` → `y: 0`, `opacity: 0` → `1`, duration `0.8`, ease `"power3.out"`
- Stagger on card grids: `stagger: 0.08`
- Sector section: `scrub: 1` parallax on background images
- Counter animations: use `GSAP.to()` on a number object, round to integer
- Cloud scroll-scrub (Midline Aviation crossover): `scrub: true`, `pin: true`

---

## 7. Iconography

**Primary library:** Lucide Icons (`lucide-react`)

**Stroke weight:** 1.5px — do not override to bold/filled variants.

### Size Tokens

| Context         | Size  | Usage                             |
|-----------------|-------|-----------------------------------|
| Inline / text   | 16px  | Beside text labels                |
| UI controls     | 20px  | Buttons, inputs, nav              |
| Feature icons   | 24px  | List items, card metadata         |
| Sector icons    | 48px  | Sector card icon blocks           |
| Hero / display  | 64px+ | Decorative, illustration-adjacent |

### Sector Icon Mapping

| Sector                 | Recommended Icon (Lucide)    |
|------------------------|------------------------------|
| Construction           | `Building2` / `HardHat`      |
| Food & Beverage        | `UtensilsCrossed`            |
| Perfumes & Beauty      | `Sparkles`                   |
| Import & Export        | `Globe2`                     |
| Industry & Trade       | `Factory`                    |
| Aviation Services      | `Plane`                      |
| Oil Services           | `Fuel`                       |
| Real Estate            | `Landmark`                   |
| Technology             | `Cpu`                        |

---

## 8. Buttons

Five button variants. Gold is reserved for the primary CTA ("Get A Quote"). Never use more than 2 CTAs in a single section.

### Variants

| Class          | Background      | Text    | Use Case                          |
|----------------|-----------------|---------|-----------------------------------|
| `.btn-primary` | `--navy`        | white   | Secondary actions, navigation     |
| `.btn-gold`    | `--gold`        | white   | **Primary CTA** — "Get A Quote"   |
| `.btn-sky`     | `--sky`         | white   | Links, learn more, filters        |
| `.btn-outline` | transparent     | `--navy`| Tertiary, paired with gold CTA    |
| `.btn-ghost`   | transparent     | `--slate`| Cancel, dismiss, low-priority    |

### Sizes

| Modifier   | Padding         | Font Size |
|------------|-----------------|-----------|
| `.btn-sm`  | 7px 16px        | 0.78rem   |
| (default)  | 11px 26px       | 0.85rem   |
| `.btn-lg`  | 14px 36px       | 0.95rem   |

### Base Button CSS

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-weight: 500;
  letter-spacing: 0.04em;
  border-radius: var(--r-sm);
  transition: all var(--dur-fast) var(--ease-out);
}

.btn-gold {
  background: var(--gold);
  color: white;
  box-shadow: var(--shadow-gold);
}
.btn-gold:hover {
  background: var(--gold-light);
  transform: translateY(-1px);
  box-shadow: 0 6px 28px rgba(184,148,31,.35);
}
```

---

## 9. Badges & Tags

### Badges (filled, pill-shaped)

| Class          | Background                      | Text Color   | Use Case              |
|----------------|---------------------------------|--------------|-----------------------|
| `.badge-navy`  | `rgba(14,31,59,.10)`            | `--navy`     | Location, category    |
| `.badge-sky`   | `rgba(3,100,149,.10)`           | `--sky`      | Sector labels         |
| `.badge-gold`  | `rgba(184,148,31,.12)`          | `--gold`     | Premium, featured     |
| `.badge-green` | `rgba(34,134,87,.10)`           | `#226c57`    | Active, live, success |
| `.badge-slate` | `--mist`                        | `--slate`    | Partner, neutral      |

### Tags (outlined, square-ish)

```css
.tag {
  border: 1px solid currentColor;
  border-radius: var(--r-sm);
  padding: 3px 10px;
  font-size: 0.72rem;
  font-weight: 500;
}
```

### Avatars

| Class          | Size  | Usage                   |
|----------------|-------|-------------------------|
| `.avatar`      | 40px  | Default list/table rows |
| `.avatar-lg`   | 56px  | Profile cards           |
| `.avatar-navy` | —     | Internal team           |
| `.avatar-sky`  | —     | Partner contacts        |
| `.avatar-gold` | —     | VIP / featured          |

---

## 10. Form Inputs

Clean, minimal. Navy focus ring. Used in: contact form, quote request, partner application.

```css
.ds-input {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid var(--mist);
  border-radius: var(--r-md);
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--ink);
  background: white;
  transition: border-color var(--dur-fast), box-shadow var(--dur-fast);
}
.ds-input:focus {
  border-color: var(--sky);
  box-shadow: 0 0 0 3px rgba(3,100,149,.12);
  outline: none;
}
.ds-input::placeholder { color: rgba(107,122,147,.5); }
```

### Input Types Used

- Text, Email, Tel, Select, Textarea
- Label: `0.78rem`, `font-weight: 500`, `--ink`, `margin-bottom: 6px`
- Error state: `border-color: #C0392B`, red focus ring

---

## 11. Cards

### Card Variants

| Variant          | Background                              | Border                        | Use Case                       |
|------------------|-----------------------------------------|-------------------------------|--------------------------------|
| Default          | `white`                                 | `1px solid --mist`            | Standard content cards         |
| Navy             | `--navy`                                | none                          | Dark feature panels            |
| Gradient         | `linear-gradient(135deg, navy → sky)`   | none                          | Hero stat panels, location     |
| Gold Accent      | `white`                                 | `border-top: 3px solid --gold`| Premium sectors, featured      |
| Sky              | `--sky-pale`                            | `1px solid rgba(sky,.15)`     | Info panels, partner cards     |

### Sector Card (hover)

```css
.sector-card {
  background: white;
  border: 1px solid var(--mist);
  border-radius: var(--r-lg);
  padding: var(--sp-24);
  box-shadow: var(--shadow-sm);
  transition: all var(--dur-mid) var(--ease-out);
}
.sector-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-3px);
  border-color: rgba(3,100,149,.20);
}
```

---

## 12. Alerts & Notifications

| Variant     | Background                      | Border                          | Text Color    |
|-------------|---------------------------------|---------------------------------|---------------|
| Info        | `--sky-pale`                    | `1px solid rgba(sky,.20)`       | `--sky`       |
| Success     | `rgba(34,134,87,.08)`           | `1px solid rgba(34,134,87,.20)` | `#1f6b50`     |
| Warning     | `rgba(184,148,31,.10)`          | `1px solid rgba(gold,.25)`      | `--gold`      |

Structure: `icon + title (0.84rem bold) + body (0.80rem, 0.85 opacity)`. Border-radius: `--r-md`.

---

## 13. Tabs & Navigation

### Pill Tabs (content filtering)

```css
.ds-tabs {
  display: flex;
  gap: 4px;
  background: var(--mist);
  padding: 4px;
  border-radius: var(--r-md);
}
.ds-tab {
  padding: 7px 18px;
  border-radius: calc(var(--r-md) - 2px);
  font-size: 0.80rem;
  font-weight: 500;
  color: var(--slate);
  transition: all var(--dur-fast);
}
.ds-tab.active {
  background: white;
  color: var(--navy);
  box-shadow: var(--shadow-sm);
}
```

### Underline Tabs (page-level navigation)

Active: `border-bottom: 2px solid --navy`, color `--navy`, weight 600. Inactive: `--slate`, weight 400. Tab height: 44px.

---

## 14. Patterns — Navigation Bar

```
┌─────────────────────────────────────────────────────────┐
│ [Midline Investment]   Home  Companies  Partners  About  [Get A Quote] │
└─────────────────────────────────────────────────────────┘
```

| Property          | Value                          |
|-------------------|--------------------------------|
| Background        | `--navy` (`#0E1F3B`)           |
| Height            | 64px                           |
| Logo font         | Cormorant Garamond 500 1.1rem  |
| Nav links         | DM Sans 400 0.82rem, rgba(white,.70) |
| Nav link hover    | `color: white`                 |
| CTA button        | `.btn-gold` with `--r-sm`      |
| Scroll behavior   | `position: sticky; top: 0; backdrop-filter: blur(12px)` |
| Padding           | 0 32px                         |

---

## 15. Patterns — Hero Section

```
┌──────────────────────────────────────────────────────────┐
│  EYEBROW TEXT (gold, uppercase, 0.68rem)                 │
│                                                          │
│  Welcome to                                              │
│  Midline Investment          ← Cormorant Light           │
│  the core of visionary       ← Gold italic on key word  │
│  businesses                                              │
│                                                          │
│  Sub-headline (0.9rem, rgba white .65, max 480px)        │
│                                                          │
│  [Get A Quote]  [Our Sectors ↗]                          │
└──────────────────────────────────────────────────────────┘
```

| Property           | Value                                              |
|--------------------|----------------------------------------------------|
| Background         | `linear-gradient(135deg, --navy-deep → --navy → --navy-mid)` |
| Radial spotlight   | `radial-gradient(ellipse 60% 80% at 80% 50%, rgba(sky,.35) → transparent)` |
| Headline font      | Cormorant Garamond, weight 300, letter-spacing -0.01em |
| Italic emphasis    | `color: --gold-light; font-style: italic`          |
| Eyebrow            | 0.68rem, weight 600, letter-spacing 0.20em, `--gold-light` |
| Min height         | 100vh (full viewport)                              |
| Padding            | 96px 64px (desktop), 64px 32px (mobile)            |

---

## 16. Patterns — Sector Cards

**Grid:** `repeat(auto-fill, minmax(220px, 1fr))`, gap `--sp-16`

| Element       | Style                                           |
|---------------|-------------------------------------------------|
| Icon block    | 48×48px, `--navy` bg, `--r-md`, sector emoji/SVG |
| Sector name   | `0.90rem`, weight 600, `--navy`                 |
| Description   | `0.78rem`, `--slate`, line-height 1.5           |
| Hover         | `translateY(-3px)`, `--shadow-lg`, sky border   |
| Animation     | `transition: all 320ms ease-out`                |

---

## 17. Patterns — Stats & Metrics

**Layout:** `repeat(auto-fill, minmax(160px, 1fr))`, centered text

| Element     | Style                                              |
|-------------|----------------------------------------------------|
| Number      | Cormorant Garamond 500, `2.5rem`, `--navy`         |
| Suffix (%, +)| Same font, `2rem`, `--gold`                      |
| Label       | DM Sans 500, `0.72rem`, `letter-spacing: 0.08em`, uppercase, `--slate` |
| Card        | white bg, `--mist` border, `--r-lg`, `--shadow-sm`, text-center |

**Animation:** Counter-up on IntersectionObserver trigger. GSAP or vanilla `requestAnimationFrame`.

---

## 18. Patterns — Footer

**Layout:** 3-column grid (`1.5fr 1fr 1fr`), collapses to 1 column on mobile.

| Zone            | Content                                           |
|-----------------|---------------------------------------------------|
| Brand column    | Cormorant logo, tagline, social icons (LinkedIn, X) |
| Services column | Gold uppercase label + 5 service links            |
| Contact column  | Gold uppercase label + address, hours, phone      |
| Bottom bar      | `border-top: 1px solid rgba(white,.08)`, copyright left, legal links right |

| Property       | Value                    |
|----------------|--------------------------|
| Background     | `--navy-deep`            |
| Text           | `rgba(white, .70)`       |
| Column headers | `--gold-light`, 0.68rem, uppercase, weight 600 |
| Link hover     | `opacity: 1`             |
| Padding        | 48px 48px 24px           |

---

## 19. CSS Design Tokens

Copy this block into your global CSS as the single source of truth.

```css
/* ── MIDLINE INVESTMENT · DESIGN TOKENS v1.0 ── */
:root {
  /* COLORS */
  --navy:        #0E1F3B;
  --navy-deep:   #091629;
  --navy-mid:    #122D53;
  --sky:         #50A6D0;
  --sky-light:   #45C2E7;
  --sky-pale:    #E0F6FB;
  --gold:        #B8941F;
  --gold-light:  #D4AE3A;
  --gold-pale:   #FAF4E1;
  --ink:         #1C2B3A;
  --slate:       #6B7A93;
  --mist:        #EEF1F5;
  --off-white:   #F7F8FA;
  --white:       #FFFFFF;

  /* FONTS */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
  --font-mono:    'DM Mono', monospace;

  /* SPACING (8pt grid) */
  --sp-2:  0.125rem;
  --sp-4:  0.25rem;
  --sp-8:  0.5rem;
  --sp-12: 0.75rem;
  --sp-16: 1rem;
  --sp-24: 1.5rem;
  --sp-32: 2rem;
  --sp-48: 3rem;
  --sp-64: 4rem;
  --sp-96: 6rem;

  /* BORDER RADIUS */
  --r-sm:   4px;
  --r-md:   8px;
  --r-lg:   16px;
  --r-xl:   24px;
  --r-full: 9999px;

  /* SHADOWS (navy-tinted) */
  --shadow-sm:   0 1px 3px rgba(14,31,59,.08), 0 1px 2px rgba(14,31,59,.06);
  --shadow-md:   0 4px 16px rgba(14,31,59,.12), 0 2px 6px rgba(14,31,59,.08);
  --shadow-lg:   0 12px 40px rgba(14,31,59,.16), 0 4px 12px rgba(14,31,59,.10);
  --shadow-xl:   0 24px 64px rgba(14,31,59,.22), 0 8px 24px rgba(14,31,59,.14);
  --shadow-gold: 0 4px 24px rgba(184,148,31,.25);

  /* ANIMATION */
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-fast:    180ms;
  --dur-mid:     320ms;
  --dur-slow:    560ms;

  /* Z-INDEX */
  --z-base:  1;
  --z-above: 10;
  --z-modal: 100;
  --z-top:   1000;
}
```

### Tailwind v4 CSS Variable Mapping

```css
/* tailwind.config equivalent in v4 globals */
@theme {
  --color-navy:       #0E1F3B;
  --color-navy-deep:  #091629;
  --color-navy-mid:   #122D53;
  --color-sky:        #50A6D0;
  --color-sky-light:  #45C2E7;
  --color-sky-pale:   #E0F6FB;
  --color-gold:       #B8941F;
  --color-gold-light: #D4AE3A;
  --color-gold-pale:  #FAF4E1;
  --color-ink:        #1C2B3A;
  --color-slate:      #6B7A93;
  --color-mist:       #EEF1F5;

  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
  --font-mono:    'DM Mono', monospace;
}
```

---

## 20. Brand Voice & Writing Style

### Tone Pillars

- **Authoritative** — We set benchmarks, not follow them. Lead with conviction.
- **Visionary** — Forward-thinking language; avoid nostalgia and looking backward.
- **Warm but precise** — Never cold or corporate. Human, but never casual.
- **Global** — Reflects a 9-country presence. Inclusive of all partner markets.

### Copy Patterns

- Short, punchy headlines in Cormorant italic with gold emphasis words
- Poetic sector descriptions: *"Flight is freedom, and efficiency is our altitude."*
- Bold claims followed immediately by a proof metric
- Em-dash (—) for rhythmic pauses; never double-hyphen
- Oxford comma always

### Headline Formula

```
[Poetic metaphor or statement]
[Gold italic emphasis word]
[Benefit or proof]
```

**Examples:**
> "We don't just build companies. We build *futures*."
> "From One Name, many *successes* are born."
> "Flight is freedom, and efficiency is our *altitude*."

### What to Avoid

- Jargon without immediate plain-language follow-up
- Passive voice in hero or section headline positions
- More than 2 CTAs in a single section or viewport
- Generic stock-photo captions ("two businessmen shaking hands")
- Ellipses in headlines or CTAs

### CTA Copy Standards

| Context           | Primary CTA     | Secondary CTA      |
|-------------------|-----------------|--------------------|
| Hero section      | Get A Quote     | Our Sectors / Learn More |
| Sector cards      | Learn More →    | —                  |
| Contact page      | Send Message    | —                  |
| Partner section   | Become a Partner| View Partners      |
| About page        | Our Story       | Contact Us         |

---

*Midline Investment LLC · Burlington Tower 410, Business Bay, Dubai, UAE*
*Design System v1.0 · © 2026 Midline Investment*
