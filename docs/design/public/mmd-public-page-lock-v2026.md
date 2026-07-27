# MMD Public Page Lock

**Version:** v2026-PUBLIC-PAGE-LOCK-01  
**Status:** Locked  
**Scope:** All MMD Privé public-facing pages, public trust pages, profiles, hall, public access, membership, campaign pages, and selected partner bridge pages  
**Purpose:** Define the default design, font, colour, image, footer, and implementation rules for every public page from this point forward.

---

## 1. Core decision

Every new or migrated public page must start from this world:

```text
MMD Privé Public World = White / Ink / Stone / Wine / Legacy Red Accent
```

The public world should feel:

```text
clean / private / sharp / premium / editorial / discreet / readable
```

It should not feel:

```text
beige-gold hotel
champagne wedding
generic luxury agency
nightclub
bar
public marketplace
```

---

## 2. Required global CSS

Every public page must load the current global CSS:

```html
<link
  rel="stylesheet"
  href="https://mmd-prive.github.io/mmd-i18n/assets/css/mmd-global.css?v=2026-world-04"
/>
```

Current global CSS lock:

```text
MMD • GLOBAL FOUNDATION v2026-WORLD-04
LINE Seed Sans TH UI + Noto Sans Thai Headings
```

Rules:

```text
Default is never dark.
Main UI / English headline / buttons = LINE Seed Sans TH.
Thai headings = Noto Sans Thai 400.
Thai heading line-height is slightly increased to protect vowels and tone marks.
Thai heading letter-spacing is relaxed for readability.
No global transparent / gradient headline.
SIGIL dark mode only inside .sigil-system.
```

---

## 3. Public page classes

### 3.1 Standard public page

Use for most MMD Privé public pages:

```html
<main class="mmd-prive mmd-page-light">
  ...
</main>
```

If Webflow body class is available:

```html
<body class="mmd-prive">
```

### 3.2 Profiles / Companion public directory

Use for profiles and companion/public model browsing:

```html
<main class="mmd-prive mmd-profiles mmd-page-light">
  ...
</main>
```

or:

```html
<body class="mmd-prive mmd-profiles">
```

### 3.3 Partner bridge exception

Partner pages can intentionally use SĪGIL-style dark/gold when the page is a private trust bridge:

```html
<main class="sigil-system mmd-page-dark">
  ...
</main>
```

This is allowed for partner-facing private trust pages, but not for normal public information pages.

---

## 4. Public routes covered by this lock

Use this lock for:

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
/booking if public-facing but not in heavy SIGIL flow
```

Partner bridge pages may reference this lock, but can follow the Partner / SĪGIL Bridge Visual Rule when private-trust styling is needed.

---

## 5. Font lock

### 5.1 Thai headings

All Thai headings use:

```text
Font: Noto Sans Thai
Weight: 400 Normal
Line-height: 1.28 - 1.34
Letter-spacing: -0.006em to 0em
```

Reason:

```text
Thai vowels and tone marks need more vertical breathing room.
```

### 5.2 English headline / brand headline

English headlines use:

```text
Font: LINE Seed Sans TH
Weight: 700 Bold
Optional impact: 800 Extra Bold
```

### 5.3 Buttons / CTA / nav

Buttons, CTA labels, and navigation use:

```text
Font: LINE Seed Sans TH
Weight: 700 Bold
```

### 5.4 Body copy

Body copy uses:

```text
Font: LINE Seed Sans TH
Weight: 400 Normal
Line-height: readable / comfortable
```

---

## 6. Public colour lock

Use this palette:

```css
--mmd-paper:#fbfaf8;
--mmd-paper-soft:#f4f2ef;
--mmd-white:#ffffff;
--mmd-ink:#18171b;
--mmd-ink-soft:#555158;
--mmd-line:#dfdadd;
--mmd-wine:#941523;
--mmd-wine-deep:#68111c;
--mmd-wine-bright:#c91e35;
--mmd-rose:#f8eef0;
```

Colour balance:

```text
60% white / ivory / paper / stone
25% ink / charcoal / smoked glass
10% wine red
3% fresh legacy red
2% soft gold accent
```

Red role:

```text
CTA / active state / small red cut / divider / dot / icon stroke / selected state
```

Gold role:

```text
tiny trim only / soft metallic detail / not main mood
```

---

## 7. Image generation lock for public pages

Every public hero / section visual / mockup image should follow:

```text
clean white-world
ivory paper
cool stone
graphite ink
soft charcoal
smoked glass
deep wine red
fresh legacy red accent
tiny gold trim only
```

Avoid:

```text
beige-gold luxury hotel mood
champagne wedding tone
gold-dominant palette
orange/yellow lighting
nightclub mood
bridal studio mood
generic luxury agency aesthetic
```

If footer is visible in a generated mockup, it must look like a small signature footer, not a corporate sitemap.

---

## 8. Footer lock

Public pages use:

```text
MMD Public Footer
components/webflow/mmd-public-footer.html
```

Footer style:

```text
small signature closure
low height
clean spacing
small brand signature
one short tagline
minimal navigation or no navigation
small credit line
subtle divider
soft red or gold accent only where needed
```

Do not use:

```text
heavy corporate footer
large newsletter box
many columns
large social section
oversized logo
footer that feels like another hero section
```

Partner/private trust pages may use:

```text
SĪGIL Trust Footer
components/webflow/sigil-trust-footer.html
```

---

## 9. CTA lock

Primary CTA on public pages should use wine / legacy red:

```css
.mmd-btn-primary{
  color:#fff;
  background:linear-gradient(135deg,#c91e35,#8e1020);
  box-shadow:0 16px 34px rgba(148,21,35,.18);
}
```

Public CTA should not default to SIGIL gold unless the section is intentionally a private bridge.

---

## 10. Page-level do not do

Avoid:

```text
making the entire public page dark
using SIGIL gold as public main identity
using beige-gold hotel palette
using Thai headings in heavy 700/800 by default
using tight Thai line-height
using too much negative letter-spacing on Thai
using transparent headline styles globally
using corporate footer as default
using large gold footer on public pages
```

---

## 11. Required checklist before shipping any public page

```text
[ ] Page route confirmed
[ ] Page world selected: mmd-prive / mmd-profiles / partner bridge exception
[ ] Global CSS uses ?v=2026-world-04
[ ] Thai headings use Noto Sans Thai 400
[ ] Thai heading line-height checked for vowels and tone marks
[ ] English headline / buttons use LINE Seed Sans TH
[ ] Main colour is White / Ink / Stone / Wine / Legacy Red Accent
[ ] Red appears as precise accent, not full mood
[ ] Gold is secondary only
[ ] Footer is small signature, not corporate block
[ ] Image direction follows public image colour guide
[ ] Mobile layout checked
[ ] Objective + page + CTA + mobile note are defined
```

---

## 12. Final rule

```text
Public MMD Privé = White world with memory of red.
Noto Sans Thai protects Thai headings.
LINE Seed Sans TH keeps UI and English headline modern.
Wine-red carries action.
Fresh legacy red preserves the first MMD identity.
Gold stays quiet.
Footer closes like a private signature.
```
