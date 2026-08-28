# MMD Privé / SĪGIL World System

**Version:** v2026-WORLD-03  
**Status:** Locked for gradual page migration  
**Scope:** Webflow pages, page components, global CSS/JS, public/private footer usage  
**Purpose:** Use this document as the shared summary for gradually updating every MMD page into the correct MMD Privé or SĪGIL visual world.

---

## 1. Core decision

MMD now has two primary visual worlds:

```text
MMD Privé = White World / public trust / customer-facing discovery
SĪGIL System = Underground World / private trust / sensitive flow / access system
```

Default global style is always **MMD Privé / White World**.

SĪGIL dark styling must never be the default. It applies only when the page or wrapper uses:

```html
<body class="sigil-system">
```

or:

```html
<main class="sigil-system mmd-page-dark">
```

---

## 2. Global CSS lock

Global CSS source:

```text
assets/css/mmd-global.css
```

Current lock:

```text
MMD • GLOBAL FOUNDATION v2026-WORLD-03
```

Required Webflow Head Code:

```html
<link
  rel="stylesheet"
  href="https://mmd-prive.github.io/mmd-i18n/assets/css/mmd-global.css?v=2026-world-03"
/>
```

Rules:

- Global CSS must load on every MMD page.
- Default must never be dark.
- Main UI / Thai font is `LINE Seed Sans TH`.
- Thai fallback is `Noto Sans Thai`.
- No global transparent headline.
- No global gradient headline.
- Gradient text is allowed only through explicit opt-in classes.

Font imports in global CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600&display=swap');
@import url('https://cdn.jsdelivr.net/gh/googlefonts/line-seed-sans@latest/LINESeedSansTH.css');
```

Font tokens:

```css
--mmd-font-main:"LINE Seed Sans TH","Noto Sans Thai",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
--mmd-font-th:"LINE Seed Sans TH","Noto Sans Thai",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
--mmd-font-en:"LINE Seed Sans TH","Noto Sans Thai",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
--mmd-font-display-en:"LINE Seed Sans TH","Noto Sans Thai",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
```

---

## 3. Global JS lock

Required Webflow Footer Code:

```html
<script
  defer
  src="https://cdn.jsdelivr.net/gh/mmdprive/mmd-i18n@v2026-LOCK-02/mmdglobal/dist/mmd-global.js"
  onerror="console.warn('[MMD] mmd-global.js failed to load')">
</script>
```

Then add the world patch from:

```text
docs/design/mmd-world-page-code-requirements.md
```

Rules:

- Keep legacy global helper active.
- Do not duplicate the full bootstrap guard.
- Do not add a second full inline bootstrap using `window.__MMD_GLOBAL_BOOTSTRAPPED__`.
- Later improvement: merge the world patch into `mmdglobal/dist/mmd-global.js` and release a new lock version.

---

## 4. MMD Privé / White World

### 4.1 Meaning

MMD Privé is the public-facing, white-world, premium trust surface.

Use for:

- First impression
- Discovery
- Public information
- Membership information
- Profiles
- Public access
- Trust explanation
- Concierge-facing public journeys

Tone:

```text
bright / refined / readable / calm / premium / private but welcoming
```

### 4.2 Required class

Preferred:

```html
<body class="mmd-prive">
```

Webflow fallback:

```html
<main class="mmd-prive mmd-page-light">
  ...
</main>
```

### 4.3 Recommended routes

```text
/
/profiles
/hall
/public/access
/services/companion
/member/membership
/member/membership/benefits
/trust/inme
/blackcard/black-card
/promotion/* when public campaign
```

### 4.4 Color behavior

- Background: paper / ivory / white.
- Heading: ink, not black-heavy.
- Body: soft ink.
- CTA: wine-red.
- Gold is allowed only as small accent, not the main public identity.
- No SIGIL black-gold mood unless the section intentionally opt-ins as a dark card.

### 4.5 Typography

Thai / normal heading:

```html
<h2 class="mmd-title-th">เลือก mood ที่ใช่ ก่อนเข้าสู่ขั้นตอนถัดไป</h2>
```

Body:

```html
<p class="mmd-text">ข้อความอธิบายของหน้า...</p>
```

Public gradient, only if intentionally needed:

```html
<h1 class="mmd-display-en mmd-gradient-burgundy">MMD PRIVÉ</h1>
```

---

## 5. Profiles / Companion Public Palette

### 5.1 Meaning

Profiles and Companion pages are still public / white-world, but use a sharper directory palette.

Use for:

```text
/profiles
/services/companion
```

### 5.2 Required class

Preferred:

```html
<body class="mmd-prive mmd-profiles">
```

Webflow fallback:

```html
<main class="mmd-prive mmd-profiles mmd-page-light">
  ...
</main>
```

### 5.3 Rules

- Keep page bright and readable.
- Heading uses ink.
- Body uses soft ink.
- CTA uses wine-red.
- Availability green is only for availability/status.
- Do not use SIGIL gold / champagne gradient.
- Do not turn the whole page into dark mode.

---

## 6. SĪGIL System / Underground World

### 6.1 Meaning

SĪGIL is the private trust layer for sensitive actions, access, verification, model application, partner review, private payment, recovery, aftercare, and internal control.

Tone:

```text
dark / controlled / discreet / private / secure / calm / trust by design
```

### 6.2 Required class

Preferred:

```html
<body class="sigil-system">
```

Webflow fallback:

```html
<main class="sigil-system mmd-page-dark">
  ...
</main>
```

### 6.3 Recommended routes

```text
/sigil/*
/internal/admin/*
/partner/* when styled as private/SĪGIL
/sigil/access
/sigil/booking
/sigil/pay/*
/sigil/apply
/sigil/apply/private-model-confirm
/sigil/aftercare
/sigil/recovery
```

### 6.4 Color behavior

- Background: black / deep charcoal.
- Text: ivory / warm white.
- Accent: champagne gold.
- CTA: gold or dark glass.
- Avoid public burgundy as main identity.
- Avoid white-world footer unless the page is intentionally public.

### 6.5 Headline rule

SIGIL gold headline is opt-in:

```html
<h1 class="mmd-display-en mmd-gradient-gold">Be our partner.</h1>
```

or:

```html
<h1 class="mmd-display-en mmd-heading-gold-clean">Be our partner.</h1>
```

If a SIGIL headline still looks too dark, too transparent, or disappears, the page probably has old CSS using:

```text
opacity
color: transparent
-webkit-text-fill-color: transparent
ghost-title
old gradient text
```

Use the page-specific readability patch from:

```text
docs/design/mmd-world-page-code-requirements.md
```

Do not place that emergency patch globally unless every SIGIL page needs it.

---

## 7. Footer system

MMD has two footer components.

---

### 7.1 MMD Public Footer

Source:

```text
components/webflow/mmd-public-footer.html
```

Component name:

```text
MMD Public Footer
```

Use on public / white-world information pages:

```text
/
/profiles
/hall
/public/access
/services/companion
/member/membership
/member/membership/benefits
/trust/inme
/blackcard/black-card
/promotion/* when public campaign
```

Do not use on:

```text
/sigil/*
/internal/admin/*
/member/dashboard
/member/login
/confirm/*
/booking if heavy conversion form
```

Purpose:

```text
small signature footer / public brand close / not a heavy navigation footer
```

---

### 7.2 SĪGIL Trust Footer

Source:

```text
components/webflow/sigil-trust-footer.html
```

Component name:

```text
SĪGIL Trust Footer
```

Use on client / model / partner-facing private trust pages:

```text
/sigil/access
/sigil/booking
/sigil/pay/*
/sigil/aftercare
/sigil/recovery
/sigil/apply
/sigil/apply/private-model-confirm
/partner
/partner/apply
/partner/model
/partner/model/preview
/partner/model/simulate
/partner/service
```

Optional only when the page is styled as private/SĪGIL trust:

```text
/trust/inme
/public/access
/confirm/payment-confirmation
/confirm/verify
```

Purpose:

```text
client-visible trust reassurance / Per direct oversight / minimal data exposure / private by design
```

Important:

- This is not an internal-only footer.
- It should be visible where customers, models, or partners are about to trust MMD/SĪGIL with sensitive information.
- Do not use it as a general footer for normal white-world pages.

---

## 8. Migration checklist for every page

Every page migration must check:

```text
[ ] Page route confirmed
[ ] Page world selected: mmd-prive / mmd-profiles / sigil-system
[ ] Global CSS loaded with ?v=2026-world-03
[ ] Global JS loaded
[ ] World patch loaded if still using v2026-LOCK-02 JS
[ ] No duplicate full inline bootstrap
[ ] Page wrapper or body class is correct
[ ] Thai uses LINE Seed Sans TH / Noto Sans Thai fallback
[ ] No accidental transparent heading
[ ] No global gradient heading
[ ] Public page CTA uses wine-red
[ ] SIGIL page CTA uses gold / dark glass
[ ] Correct footer component selected
[ ] Mobile view checked
[ ] New feature has objective + page + CTA + mobile note
```

---

## 9. Suggested page migration order

### Phase 1 — Foundation-critical

```text
/global Webflow Head Code
/global Webflow Footer Code
/footer components
/profiles
/hall
```

### Phase 2 — Public trust / conversion

```text
/public/access
/services/companion
/member/membership
/member/membership/benefits
/trust/inme
/blackcard/black-card
/promotion/6-years-care-back
```

### Phase 3 — Private trust / SIGIL-facing

```text
/sigil/access
/sigil/booking
/sigil/pay/*
/sigil/apply
/sigil/apply/private-model-confirm
/partner
/partner/apply
/partner/model/preview
```

### Phase 4 — Support / verification / aftercare

```text
/confirm/payment-confirmation
/confirm/verify
/sigil/aftercare
/sigil/recovery
/member/dashboard
/member/login
```

### Phase 5 — Internal admin

```text
/internal/admin/*
/sigil/admin/*
```

Internal/admin pages should prioritize clarity and operational safety over visual decoration.

---

## 10. Minimal shells

### 10.1 MMD Privé public shell

```html
<main class="mmd-prive mmd-page-light">
  <section class="mmd-glass">
    <p class="mmd-kicker">MMD PRIVÉ</p>
    <h1 class="mmd-display-title">หัวข้อของหน้า</h1>
    <p class="mmd-text">ข้อความ public-world...</p>
    <a class="mmd-btn mmd-btn-primary" href="/public/access">เริ่มต่อ</a>
  </section>
</main>
```

### 10.2 Profiles / Companion shell

```html
<main class="mmd-prive mmd-profiles mmd-page-light">
  <section>
    <p class="mmd-kicker">MMD PRIVÉ PUBLIC WORLD</p>
    <h1 class="mmd-title-th">เลือกคนที่เข้ากับจังหวะของคุณ</h1>
    <p class="mmd-text">Profiles / Companion copy...</p>
    <a class="mmd-btn mmd-btn-primary" href="/public/access?from=profiles">คัดเลือกบรีฟ</a>
  </section>
</main>
```

### 10.3 SĪGIL shell

```html
<main class="sigil-system mmd-page-dark">
  <section class="mmd-glass">
    <p class="mmd-kicker">SĪGIL SYSTEM</p>
    <h1 class="mmd-display-en mmd-gradient-gold">Private trust layer.</h1>
    <p class="mmd-text">SIGIL private-world copy...</p>
    <a class="mmd-btn mmd-btn-gold" href="/sigil/access">Continue</a>
  </section>
</main>
```

---

## 11. Final rule

From this point forward, every page update should start by choosing its world:

```text
Public / White World = mmd-prive
Profiles / Companion = mmd-prive mmd-profiles
Private / SIGIL = sigil-system
```

Then apply the correct footer:

```text
Public information page = MMD Public Footer
Private trust page = SĪGIL Trust Footer
Internal/admin page = no footer by default unless needed
```
