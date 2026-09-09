# MMD Global Typography · WORLD-05

Status: canonical for new and rebuilt MMD Webflow pages
Date: 2026-09-09

## 1. World split

### Public / MMD Privé
- Root class: `.mmd-prive` (usually with `.mmd-page-light`)
- EN Display / Hero: **Canela**
- EN Editorial H2/H3/Card: **Playfair Display**
- Label / Eyebrow / CTA: **Outfit**
- EN Body: **Inter**
- TH: **Noto Sans Thai**

### SIGIL
- Root class: `.sigil-system` (usually with `.mmd-page-dark`)
- EN Display / Hero / Editorial: **Playfair Display**
- Label / Eyebrow / CTA: **Outfit**
- EN Body: **Inter**
- TH: **Noto Sans Thai**

## 2. Canonical scale

| Role | Public | SIGIL |
|---|---|---|
| Display XL | Canela 68–138px | Playfair 60–120px |
| H1 | Canela 52–108px | Playfair 48–92px |
| Feature H2 | Canela 40–76px | Playfair 36–64px |
| Editorial H2 | Playfair 34–60px | Playfair 32–56px |
| H3 | Playfair 26–40px | Playfair 24–36px |
| Card title | Playfair 21–28px | Playfair 21–28px |
| Eyebrow | Outfit 9–11px | Outfit 9–11px |
| CTA / Nav | Outfit 11–13px | Outfit 11–13px |
| EN body | Inter 15–18px | Inter 15–18px |
| TH body | Noto Sans Thai 15–18px | Noto Sans Thai 15–18px |

## 3. Headline contrast lock

H1/H2 readability takes priority over decoration.

- Public light surface: `#18171B`
- Public dark / photo surface: `#FFF8ED`
- SIGIL dark surface: `#FFF8ED`
- SIGIL light inset: `#18171B`

Gold, burgundy, gradients, transparency, text clipping, and dim metadata colors are **not** default H1/H2 treatments.
Use them only when an element explicitly opts in with an approved class such as `.mmd-gradient-gold`, `.mmd-gradient-burgundy`, or `data-mmd-color-lock` after visual contrast verification.

For photo/dark sections use `data-mmd-surface="dark"`. For a light inset inside SIGIL use `data-mmd-surface="light"`.

## 4. English classes

Public display:
- `.mmd-display-xl`
- `.mmd-display-en`
- `.mmd-brand-en`
- `.mmd-hero-display-en`
- `.mmd-h1-en`
- `.mmd-h2-feature-en`

Editorial:
- `.mmd-h2-editorial-en`
- `.mmd-h3-en`
- `.mmd-card-title-en`

Shared:
- `.mmd-eyebrow`
- `.mmd-label`
- `.mmd-cta`
- `.mmd-nav`
- `.mmd-body-en`
- `.mmd-body-th`

## 5. Guardrails

- Never force Canela or Playfair onto Thai text.
- Never use transparent text as the default heading state.
- Do not use gold as default SIGIL H1/H2; warm ivory is the readability fallback.
- Do not use wine/red as default Public H1/H2; ink is the readability fallback.
- When the background is uncertain, choose the solid contrast token first and add decoration only after verification.
- New/rebuilt pages must declare the correct world root class.
- Existing page-specific CSS may keep an intentional special treatment only when it is explicitly color-locked and remains readable on desktop and mobile.

Canonical stylesheet: `assets/css/mmd-global.css` · `v2026-WORLD-05`
