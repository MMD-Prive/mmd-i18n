# MMD Font Default Rule

**Version:** v2026-FONT-DEFAULT-01  
**Status:** Locked  
**Scope:** Webflow Style Manager, Global CSS, public MMD Privé pages, SĪGIL pages  
**Purpose:** Define default font choices and weights for consistent readability across every MMD page.

---

## 1. Core decision

Default UI font for MMD web pages is:

```text
LINE Seed Sans TH
```

Thai headings use:

```text
Noto Sans Thai
Weight 400
```

English headlines and buttons use:

```text
LINE Seed Sans TH
```

---

## 2. Webflow default font setup

In Webflow Style Manager, set the default typography like this:

```text
Body / All Body Pages:
Font: LINE Seed Sans TH
Weight: 400 Normal
```

Thai headings:

```text
Thai H1 / Thai H2 / Thai H3 / Thai section heading:
Font: Noto Sans Thai
Weight: 400 Normal
Line-height: slightly increased
Letter-spacing: relaxed / not too tight
```

English headlines:

```text
English display / English hero / brand headline:
Font: LINE Seed Sans TH
Weight: 700 Bold or 800 Extra Bold when impact is needed
```

Buttons / CTA / nav:

```text
Font: LINE Seed Sans TH
Weight: 700 Bold
```

Body copy:

```text
Font: LINE Seed Sans TH
Weight: 400 Normal
```

---

## 3. Reason for Thai heading rule

Thai headings need more vertical breathing room because vowels and tone marks can collide when line-height is too tight.

Therefore Thai headings should use:

```text
Noto Sans Thai 400
line-height around 1.28 - 1.34
letter-spacing around -0.006em to 0em
```

Do not use very tight negative letter-spacing for Thai headings.

---

## 4. Available font weights

Use these as the normal system:

```text
LINE Seed Sans TH 400 Normal = body / paragraph / form text
LINE Seed Sans TH 700 Bold = English headings / buttons / nav / labels
LINE Seed Sans TH 800 Extra Bold = English impact headline only
```

Thai heading fallback:

```text
Noto Sans Thai 400 Normal = Thai headings
Noto Sans Thai 500 Medium = optional small emphasis
Noto Sans Thai 600 Semi Bold = optional only when a Thai label needs stronger UI presence
```

---

## 5. CSS global requirement

Global CSS should keep these imports:

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600&display=swap');
@import url('https://cdn.jsdelivr.net/gh/googlefonts/line-seed-sans@latest/LINESeedSansTH.css');
```

Global font tokens:

```css
--mmd-font-main:"LINE Seed Sans TH","Noto Sans Thai",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
--mmd-font-ui:"LINE Seed Sans TH","Noto Sans Thai",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
--mmd-font-en:"LINE Seed Sans TH","Noto Sans Thai",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
--mmd-font-display-en:"LINE Seed Sans TH","Noto Sans Thai",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
--mmd-font-th:"Noto Sans Thai","LINE Seed Sans TH",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
--mmd-font-th-heading:"Noto Sans Thai","LINE Seed Sans TH",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
```

---

## 6. Weight rule by component

```text
Body copy: LINE Seed Sans TH 400
Muted copy: LINE Seed Sans TH 400
Important copy: LINE Seed Sans TH 500 / 600
Thai heading: Noto Sans Thai 400
English headline: LINE Seed Sans TH 700 / 800
Card title Thai: Noto Sans Thai 400
Card title English: LINE Seed Sans TH 700
Button: LINE Seed Sans TH 700
Navigation: LINE Seed Sans TH 700
Kicker / eyebrow: LINE Seed Sans TH 700 / 800
Small legal / credit: LINE Seed Sans TH 400 / 500
```

---

## 7. Do not do

Avoid:

```text
Using LINE Seed Sans TH 800 for every Thai heading
Using 800 Extra Bold for every paragraph or card
Using 400 Normal for CTA labels that need authority
Using overly tight negative letter-spacing on Thai text
Using tight line-height on Thai headings
Mixing random serif fonts into Thai UI
Letting browser default serif show anywhere
```

---

## 8. Final rule

```text
Default UI = LINE Seed Sans TH 400
Thai heading = Noto Sans Thai 400 with safer line-height
English headline = LINE Seed Sans TH 700 / 800
Buttons = LINE Seed Sans TH 700
Fallback = Noto Sans Thai 400 / 500 / 600
```
