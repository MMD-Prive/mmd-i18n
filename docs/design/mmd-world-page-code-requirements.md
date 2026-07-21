# MMD World Page Code Requirements

**Version:** v2026-WORLD-02 / v2026-WORLD-PATCH-01  
**Owner:** MMD Privé / SIGIL web system  
**Purpose:** Define the required CSS, JS, and page-root classes for every MMD public page and SIGIL page.

---

## 1. Source of truth

Global CSS lives here:

```text
assets/css/mmd-global.css
```

Current CSS lock:

```text
MMD • GLOBAL FOUNDATION v2026-WORLD-02
```

Core rules:

- Default global style must be Light / White World.
- SIGIL can be dark only when `.sigil-system` is present.
- Thai text uses `Noto Sans Thai`.
- English display text uses `Cormorant Garamond` only when explicitly classed.
- No global transparent or gradient headline.
- Gradient headline classes are opt-in only.

---

## 2. Required Webflow Site Settings code

### 2.1 Global Head Code

Place in:

```text
Webflow > Site Settings > Custom Code > Head Code
```

```html
<!-- =========================
 MMD • CSS GLOBAL HEAD
 v2026-WORLD-02
========================= -->
<link
  rel="stylesheet"
  href="https://mmd-prive.github.io/mmd-i18n/assets/css/mmd-global.css?v=2026-world-02"
/>
```

This CSS must be loaded on all MMD pages.

---

### 2.2 Global Footer Code

Place in:

```text
Webflow > Site Settings > Custom Code > Footer Code
```

Use the legacy global JS first, then the world patch. Do not add a second full inline bootstrap that uses `window.__MMD_GLOBAL_BOOTSTRAPPED__`.

```html
<!-- =========================
 MMD • JS GLOBAL FOOTER
 Keep legacy helper + add world patch
 v2026-WORLD-PATCH-01
========================= -->

<script
  defer
  src="https://cdn.jsdelivr.net/gh/mmdprive/mmd-i18n@v2026-LOCK-02/mmdglobal/dist/mmd-global.js"
  onerror="console.warn('[MMD] mmd-global.js failed to load')">
</script>

<script>
(function () {
  "use strict";

  window.MMD = window.MMD || {};

  function path() {
    return String(window.location.pathname || "/").toLowerCase();
  }

  function hasBodyClass(name) {
    try {
      return document.body && document.body.classList.contains(name);
    } catch (_) {
      return false;
    }
  }

  function inferWorldFromPath() {
    var p = path();

    if (
      p.indexOf("/sigil") === 0 ||
      p.indexOf("/internal/admin") === 0
    ) {
      return "sigil";
    }

    if (
      p.indexOf("/profiles") === 0 ||
      p.indexOf("/hall") === 0 ||
      p.indexOf("/public") === 0 ||
      p.indexOf("/services") === 0 ||
      p.indexOf("/member") === 0 ||
      p.indexOf("/trust") === 0 ||
      p.indexOf("/partner") === 0 ||
      p.indexOf("/booking") === 0 ||
      p.indexOf("/confirm") === 0
    ) {
      return "prive";
    }

    return "neutral";
  }

  function getWorld() {
    if (hasBodyClass("sigil-system")) return "sigil";
    if (hasBodyClass("mmd-prive")) return "prive";
    if (hasBodyClass("mmd-profiles")) return "prive";

    return inferWorldFromPath();
  }

  function applyWorldClass() {
    var world = getWorld();

    try {
      document.documentElement.setAttribute("data-mmd-world", world);
      document.documentElement.classList.remove(
        "mmd-world-neutral",
        "mmd-world-prive",
        "mmd-world-sigil"
      );
      document.documentElement.classList.add("mmd-world-" + world);
    } catch (_) {}

    try {
      if (!document.body) return world;

      var hasWorld =
        document.body.classList.contains("mmd-prive") ||
        document.body.classList.contains("sigil-system");

      if (!hasWorld) {
        if (world === "sigil") document.body.classList.add("sigil-system");
        if (world === "prive") document.body.classList.add("mmd-prive");
      }
    } catch (_) {}

    try {
      window.dispatchEvent(new CustomEvent("mmd:world", {
        detail: {
          world: world,
          path: path()
        }
      }));
    } catch (_) {}

    return world;
  }

  window.MMD.world = window.MMD.world || {};
  window.MMD.world.get = getWorld;
  window.MMD.world.apply = applyWorldClass;
  window.MMD.world.isSigil = function () {
    return getWorld() === "sigil";
  };
  window.MMD.world.isPrive = function () {
    return getWorld() === "prive";
  };

  if (document.readyState !== "loading") {
    applyWorldClass();
  } else {
    document.addEventListener("DOMContentLoaded", applyWorldClass, { once: true });
  }
})();
</script>
```

---

## 3. Required page-root classes

### 3.1 MMD Privé public pages

Use for public / white-world / information pages.

```html
<body class="mmd-prive">
```

If Webflow cannot set `body` class directly, add a top-level page wrapper:

```html
<main class="mmd-prive mmd-page-light">
  ...
</main>
```

Typical routes:

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
```

---

### 3.2 Profiles / Companion public palette

Use this when the page should follow the `/profiles` public directory palette.

```html
<body class="mmd-prive mmd-profiles">
```

If Webflow cannot set `body` class directly:

```html
<main class="mmd-prive mmd-profiles mmd-page-light">
  ...
</main>
```

Typical routes:

```text
/profiles
/services/companion
```

Rules:

- Page background stays white / paper.
- Main headings use ink, not gold.
- CTA uses wine-red gradient.
- Status green is only for availability.
- Do not use SIGIL gold / champagne gradients.

---

### 3.3 SIGIL / internal pages

Use for SIGIL underground pages and internal admin pages.

```html
<body class="sigil-system">
```

If Webflow cannot set `body` class directly:

```html
<main class="sigil-system mmd-page-dark">
  ...
</main>
```

Typical routes:

```text
/sigil/*
/internal/admin/*
```

Rules:

- SIGIL dark mode is allowed only inside `.sigil-system`.
- Gold heading gradients are allowed only when explicitly classed.
- Avoid public white footer unless creating a specific SIGIL micro-footer.
- If a headline looks too dark, check page-specific CSS for opacity, ghost-title, transparent text, or old gradient code.

---

## 4. Required typography classes

### 4.1 Thai heading

```html
<h2 class="mmd-title-th">เลือก mood ที่ใช่ ก่อนเข้าสู่ขั้นตอนถัดไป</h2>
```

### 4.2 Normal body copy

```html
<p class="mmd-text">ข้อความอธิบายของหน้า...</p>
```

### 4.3 English display headline

Use only for English display text.

```html
<h1 class="mmd-display-en">MMD PRIVÉ Hall</h1>
```

### 4.4 Public burgundy gradient

Use only when explicitly wanted.

```html
<h1 class="mmd-display-en mmd-gradient-burgundy">MMD PRIVÉ Hall</h1>
```

### 4.5 SIGIL gold headline

Use only inside `.sigil-system`.

```html
<h1 class="mmd-display-en mmd-gradient-gold">Be our partner.</h1>
```

or

```html
<h1 class="mmd-display-en mmd-heading-gold-clean">Be our partner.</h1>
```

---

## 5. Page-specific SIGIL readability patch

Use this only if a SIGIL page still has old page CSS that makes headline too dark, too transparent, or invisible.

Place after the page CSS.

```html
<style>
body.sigil-system,
.sigil-system{
  --sigil-headline:#fff2c2;
  --sigil-headline-soft:#f6d98e;
  --sigil-copy:rgba(255,248,237,.88);
  --sigil-copy-muted:rgba(255,248,237,.72);
}

.sigil-system :is(
  h1,
  .hero-title,
  .partner-title,
  .sigil-title,
  .sigil-hero-title,
  .mmd-heading-boss,
  .mmd-gradient-gold
){
  color:transparent !important;
  background:linear-gradient(
    180deg,
    #fff7d8 0%,
    #ffe6a8 26%,
    #f3cf7b 56%,
    #c99445 100%
  ) !important;
  -webkit-background-clip:text !important;
  background-clip:text !important;
  -webkit-text-fill-color:transparent !important;
  opacity:1 !important;
  filter:drop-shadow(0 18px 34px rgba(0,0,0,.72)) !important;
  text-shadow:none !important;
}

.sigil-system :is(
  .mmd-bg-title,
  .mmd-ghost-title,
  .ghost-title,
  .bg-title,
  .hero-ghost,
  .partner-ghost,
  [class*="ghost"],
  [class*="bg-title"]
){
  color:rgba(255,248,237,.135) !important;
  background:none !important;
  -webkit-background-clip:border-box !important;
  background-clip:border-box !important;
  -webkit-text-fill-color:currentColor !important;
  opacity:1 !important;
  filter:none !important;
  text-shadow:none !important;
}

.sigil-system :is(
  p,
  li,
  .hero-copy,
  .partner-copy,
  .sigil-copy,
  .mmd-text,
  .mmd-body,
  .mmd-description
){
  color:var(--sigil-copy) !important;
  font-family:"Noto Sans Thai","Inter",system-ui,sans-serif !important;
  font-weight:500 !important;
  line-height:1.78 !important;
  letter-spacing:-.012em !important;
  opacity:1 !important;
}

.sigil-system :is(
  .kicker,
  .eyebrow,
  .hero-kicker,
  .partner-kicker,
  .sigil-kicker,
  .mmd-kicker
){
  color:#f6d98e !important;
  -webkit-text-fill-color:currentColor !important;
  opacity:1 !important;
  font-weight:800 !important;
  letter-spacing:.16em !important;
}
</style>
```

---

## 6. Public footer component rule

The MMD Public Footer is a Webflow Component, not a Global Footer Code script.

Component name:

```text
MMD Public Footer
```

Use only on public / white-world information pages:

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
```

Do not use on:

```text
/sigil/*
/internal/admin/*
/member/dashboard
/member/login
/confirm/*
/booking if the page is a heavy conversion form
```

---

## 7. Do not do this

Do not add a full inline duplicate JS bootstrap if external `mmd-global.js` is already loaded.

Avoid this pattern in Webflow Global Footer:

```js
if (window.__MMD_GLOBAL_BOOTSTRAPPED__) return;
window.__MMD_GLOBAL_BOOTSTRAPPED__ = true;
```

Reason: the external JS uses the same bootstrap guard. A duplicate full inline bootstrap can prevent the external JS from running.

Do not add global CSS that makes headings transparent by default.

Avoid this pattern globally:

```css
h1,
h2,
h3{
  color:transparent;
  -webkit-text-fill-color:transparent;
}
```

Do not make SIGIL dark styles the default `:root` or `body` style.

Do not use SIGIL gold gradient on public pages.

Do not use the public footer on SIGIL / internal admin pages.

---

## 8. Quick page checklist

Every new page must confirm:

```text
[ ] Page world selected: mmd-prive / mmd-profiles / sigil-system
[ ] Global CSS loaded from mmd-global.css?v=2026-world-02
[ ] Global JS + world patch loaded in footer
[ ] No duplicate full inline bootstrap
[ ] Thai text uses Noto Sans Thai via global classes
[ ] English display uses mmd-display-en only when intended
[ ] No accidental transparent heading
[ ] Public page uses wine CTA, not SIGIL gold
[ ] SIGIL page uses sigil-system and readable gold/ivory text
[ ] Public footer component used only on public info pages
[ ] New feature includes objective + page + CTA + mobile note
```

---

## 9. Minimal page shells

### 9.1 Public page shell

```html
<main class="mmd-prive mmd-page-light">
  <section class="mmd-glass">
    <p class="mmd-kicker">MMD PRIVÉ</p>
    <h1 class="mmd-display-en mmd-gradient-burgundy">MMD PRIVÉ</h1>
    <p class="mmd-text">Public page copy...</p>
    <a class="mmd-btn mmd-btn-primary" href="/public/access">Start</a>
  </section>
</main>
```

### 9.2 Profiles / companion shell

```html
<main class="mmd-prive mmd-profiles mmd-page-light">
  <section>
    <p class="mmd-kicker">MMD PRIVÉ PUBLIC WORLD</p>
    <h1 class="mmd-title-th">เลือกคนที่เข้ากับจังหวะของคุณ</h1>
    <p class="mmd-text">Profiles / Companion public-world copy...</p>
    <a class="mmd-btn mmd-btn-primary" href="/public/access?from=profiles">คัดเลือกบรีฟ</a>
  </section>
</main>
```

### 9.3 SIGIL page shell

```html
<main class="sigil-system mmd-page-dark">
  <section class="mmd-glass">
    <p class="mmd-kicker">SĪGIL SYSTEM</p>
    <h1 class="mmd-display-en mmd-gradient-gold">Be our partner.</h1>
    <p class="mmd-text">SIGIL private-world copy...</p>
    <a class="mmd-btn mmd-btn-gold" href="/partner/apply">Start review</a>
  </section>
</main>
```
