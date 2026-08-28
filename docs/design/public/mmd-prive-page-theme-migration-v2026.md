# MMD Privé Page Theme Migration

**Version:** v2026-PRIVE-PAGE-THEME-02  
**Use for:** ปรับหน้า Webflow / public page / profiles / hall / public access / membership / trust ให้กลับมาเป็นธีม MMD Privé ใหม่  
**Core theme:** White / Ink / Stone / Wine / Legacy Red Accent  
**Status:** Ready to use  
**Updated:** Added balanced footer signature rule

---

## 1. Core Direction

MMD Privé ไม่ใช่ beige-gold hotel luxury และไม่ใช่ champagne wedding tone

ธีมหลักของหน้า public ต่อจากนี้คือ:

```text
White / Ink / Stone / Wine / Legacy Red Accent
```

Mood:

```text
clean / private / sharp / premium / editorial / discreet
not too sweet / not too beige / not gold-dominant
```

---

## 2. Required Global CSS

ใน Webflow Site Settings > Head Code ใช้:

```html
<link
  rel="stylesheet"
  href="https://mmd-prive.github.io/mmd-i18n/assets/css/mmd-global.css?v=2026-world-03"
/>
```

Global font:

```css
--mmd-font-main:"LINE Seed Sans TH","Noto Sans Thai",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
--mmd-font-th:"LINE Seed Sans TH","Noto Sans Thai",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
```

---

## 3. Page World Class

Public / White World:

```html
<main class="mmd-prive mmd-page-light">
  ...
</main>
```

Profiles / Companion:

```html
<main class="mmd-prive mmd-profiles mmd-page-light">
  ...
</main>
```

Partner Bridge ถ้าเป็น private trust:

```html
<main class="sigil-system mmd-page-dark">
  ...
</main>
```

---

## 4. Theme Tokens

```css
:root{
  --prive-white:#ffffff;
  --prive-paper:#fbfaf8;
  --prive-ivory:#f8f7f5;
  --prive-stone:#efebe6;
  --prive-line:#dfdadd;

  --prive-ink:#18171b;
  --prive-charcoal:#2a2730;
  --prive-soft:#555158;
  --prive-muted:rgba(24,23,27,.58);

  --prive-wine:#941523;
  --prive-wine-deep:#68111c;
  --prive-legacy-red:#c91e35;
  --prive-rose:#f8eef0;

  --prive-gold-soft:#b98a3e;
}
```

---

## 5. Page Colour Balance

```text
60% White / ivory / paper / stone
25% Ink / charcoal / smoked glass
10% Wine red
3% Fresh legacy red
2% Soft gold accent
```

---

## 6. Correct CSS Usage

Background:

```css
background:
  radial-gradient(circle at 92% 0%,rgba(148,21,35,.045),transparent 26rem),
  linear-gradient(180deg,#ffffff 0%,#fbfaf8 45%,#f8f7f5 100%);
```

Headline:

```css
.mmd-prive-heading{
  color:#18171b;
  font-family:var(--mmd-font-th);
  font-weight:600;
  letter-spacing:-.04em;
  line-height:1.02;
}
```

Body:

```css
.mmd-prive-copy{
  color:#555158;
  font-family:var(--mmd-font-th);
  font-size:16px;
  font-weight:400;
  line-height:1.78;
}
```

Legacy red cut:

```css
.mmd-red-cut{
  width:42px;
  height:2px;
  border-radius:999px;
  background:#c91e35;
}
```

CTA:

```css
.mmd-btn-primary{
  color:#fff;
  background:linear-gradient(135deg,#c91e35,#8e1020);
  box-shadow:0 16px 34px rgba(148,21,35,.18);
}
```

Card:

```css
.mmd-prive-card{
  border:1px solid rgba(24,23,27,.10);
  border-radius:24px;
  background:rgba(255,255,255,.78);
  box-shadow:0 18px 48px rgba(25,20,23,.07);
  backdrop-filter:blur(18px);
  -webkit-backdrop-filter:blur(18px);
}
```

---

## 7. Red Accent Placement

ใช้ legacy red กับ:

```text
primary CTA
small divider under headline
active nav underline
card corner marker
small icon stroke
tiny dot beside label
form focus ring
selected package border
hover detail
```

---

## 8. Gold Rule

Gold ใช้เป็น accent เท่านั้น:

```text
tiny trim
thin logo line
micro divider
small metallic reflection
```

ห้ามใช้ gold เป็น mood หลักของหน้า

---

## 9. Footer Rule — Balanced Signature

Footer ของ MMD ต้องเป็น **small signature closure** ไม่ใช่ corporate footer ใหญ่ ๆ

Footer ที่สวยกำลังดีควรรู้สึกเหมือน:

```text
quiet / premium / trustworthy / editorial / discreet / not too much
```

และไม่ควรแข่งกับ hero, main CTA หรือเนื้อหาหลักของหน้า

### 9.1 Visual balance

Footer ที่ถูกต้องควรมี:

```text
low height
clean spacing
small brand signature
one short tagline
minimal navigation หรือไม่มี navigation
small credit line
subtle divider
soft red หรือ gold accent เท่าที่จำเป็น
```

หลีกเลี่ยง:

```text
heavy corporate footer
large newsletter box
many columns
large social section
oversized logo
full dark block on every public page
footer that feels like another hero section
```

### 9.2 MMD Public Footer

Source:

```text
components/webflow/mmd-public-footer.html
```

Component name:

```text
MMD Public Footer
```

ใช้กับ public white-world information pages:

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

Recommended copy:

```text
MMD PRIVÉ
Bangkok • Kept Secrets
Discreet by your desire, Elegant by choice.
กรุงเทพฯ เมืองแห่งความลับ — เพราะคนที่เขารออยู่.. อาจเป็นคุณ
2020 - 2026
Concept, system design, graphic direction, character design, cinematic writing, operations and care by Per × AI System Workers.
```

Visual direction:

```text
white / ivory / paper
ink text
wine-red micro accent
legacy red dot or cut line if needed
gold only tiny detail
```

Public footer ไม่ควรกลายเป็น black-gold หรือ SIGIL-heavy ยกเว้นหน้านั้นตั้งใจ bridge ไป private trust

### 9.3 SĪGIL Trust Footer

Source:

```text
components/webflow/sigil-trust-footer.html
```

Component name:

```text
SĪGIL Trust Footer
```

ใช้กับ client / model / partner-facing private trust pages:

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

Recommended copy:

```text
SĪGIL SYSTEM · PRIVATE TRUST LAYER
Designed under Per’s direct oversight.
ข้อมูลของลูกค้า โมเดล และพาร์ทเนอร์ ถูกจัดวางอยู่ในระบบที่ Per ออกแบบและกำกับเองโดยตรง เพื่อให้ทุกขั้นตอนจำกัดการมองเห็นเท่าที่จำเป็น และรักษาความไว้วางใจของทุกฝ่ายให้มากที่สุด
SĪGIL · PRIVATE BY DESIGN
```

Visual direction:

```text
deep black / charcoal
ivory text
champagne-gold micro trim
wine shadow only if needed
minimal trust badges
no large navigation block
```

### 9.4 Footer height

```text
Desktop: 220px - 360px total visual height
Mobile: compact stacked footer, no more than necessary
```

ใหญ่ขึ้นได้เฉพาะถ้ามี legal / trust / verification copy ที่จำเป็นจริง ๆ

### 9.5 Navigation

Public footer มี light navigation ได้ แต่ควรจำกัด:

```text
4 - 6 small links
```

SĪGIL Trust Footer ควรหลีกเลี่ยง navigation และเน้น trust reassurance

### 9.6 Final footer rule

```text
Footer = a quiet signature after a private conversation.
Not a corporate sitemap.
Not an ad block.
Not a second hero.
Not a loud brand wall.
```

---

## 10. Quick Webflow Page Patch

ถ้าหน้าเก่าจืดหรือ beige/gold เกินไป ให้ใช้ wrapper:

```html
<main class="mmd-prive mmd-page-light mmd-prive-theme-v2026">
  ...
</main>
```

แล้วเพิ่ม CSS เฉพาะหน้า:

```html
<style>
.mmd-prive-theme-v2026{
  --page-bg:#fbfaf8;
  --page-ink:#18171b;
  --page-soft:#555158;
  --page-line:#dfdadd;
  --page-wine:#941523;
  --page-red:#c91e35;
  --page-gold:#b98a3e;

  background:
    radial-gradient(circle at 92% 0%,rgba(148,21,35,.045),transparent 26rem),
    linear-gradient(180deg,#ffffff 0%,#fbfaf8 52%,#f8f7f5 100%);
  color:var(--page-ink);
  font-family:var(--mmd-font-main);
}

.mmd-prive-theme-v2026 :is(h1,h2,h3){
  color:var(--page-ink);
  -webkit-text-fill-color:currentColor;
  background:none;
  text-shadow:none;
  filter:none;
}

.mmd-prive-theme-v2026 p{
  color:var(--page-soft);
  line-height:1.78;
}

.mmd-prive-theme-v2026 .mmd-red-cut,
.mmd-prive-theme-v2026 .red-cut{
  width:42px;
  height:2px;
  border-radius:999px;
  background:var(--page-red);
}

.mmd-prive-theme-v2026 .mmd-btn-primary{
  color:#fff;
  background:linear-gradient(135deg,#c91e35,#8e1020);
  box-shadow:0 16px 34px rgba(148,21,35,.18);
}
</style>
```

---

## 11. Migration Checklist

```text
[ ] Page has correct world class
[ ] Global CSS uses ?v=2026-world-03
[ ] Main background is white / paper / stone
[ ] Text uses ink and soft ink
[ ] CTA uses wine-red
[ ] Fresh red appears as small accent
[ ] Gold is secondary only
[ ] Footer is correct component
[ ] Footer is small signature, not corporate block
[ ] Footer height is controlled
[ ] Mobile has readable contrast
[ ] No beige-gold hotel mood
```

---

## Final Rule

```text
MMD Privé = White world with memory of red.
White keeps it clean.
Ink keeps it private.
Stone keeps it premium.
Wine-red carries action.
Fresh legacy red preserves the first logo identity.
Gold stays quiet.
Footer closes like a private signature.
```
