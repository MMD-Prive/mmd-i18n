# Partner / SĪGIL Bridge Visual Rule

**Version:** v2026-PARTNER-SIGIL-BRIDGE-01  
**Status:** Locked  
**Scope:** `/partner/*`, partner-facing pages, Yuki Partner Division pages  
**Purpose:** Clarify that Partner pages may use selected SĪGIL visual language even when the page is visible to customers, partners, or external users.

---

## 1. Core decision

Partner pages are not pure public white-world pages.

They are a **Public-visible Private Trust Bridge** between:

```text
MMD Privé public trust
SĪGIL private access / review system
Yuki Partner Division
```

Because of this, Partner pages may intentionally use SĪGIL-inspired dark, gold, glass, and private-office visual cues.

This is not considered a visual error.

---

## 2. When SĪGIL color is allowed on Partner pages

Allowed on:

```text
/partner
/partner/apply
/partner/model
/partner/model/preview
/partner/model/simulate
/partner/service
```

Allowed when the page needs to communicate:

- private review
- partner trust
- controlled access
- Yuki oversight
- sensitive recommendation / referral
- discreet collaboration
- internal-to-external bridge

---

## 3. Visual direction

Partner pages may use:

```text
black / deep charcoal
warm champagne gold
soft burgundy shadow
smoked glass
dark marble
private office / review room mood
SĪGIL-style cards or seals
```

But Partner pages should still be readable, external-facing, and human.

They should not feel like a raw admin panel or an internal-only console.

---

## 4. Class rule

If the page is visually SĪGIL/private, use:

```html
<body class="sigil-system">
```

or Webflow wrapper fallback:

```html
<main class="sigil-system mmd-page-dark">
  ...
</main>
```

If the page is deliberately brighter and closer to public trust, use:

```html
<main class="mmd-prive mmd-page-light">
  ...
</main>
```

Hybrid sections may opt in locally with dark cards, but the page must remain readable.

---

## 5. Footer rule

Partner pages should usually use:

```text
SĪGIL Trust Footer
```

Component source:

```text
components/webflow/sigil-trust-footer.html
```

Reason: Partner pages ask external people to trust MMD/SĪGIL with recommendations, contacts, referrals, model information, business connections, or private collaboration details.

Do not use the MMD Public Footer by default on Partner pages unless the page is intentionally redesigned as a white-world public information page.

---

## 6. Copy tone

Partner copy should feel:

```text
private / direct / calm / trustworthy / curated / not sales-heavy
```

Good wording:

```text
Tell me who you know.
Start partner review.
Private trust layer.
Designed under Per's direct oversight.
```

Avoid:

```text
mass recruitment
public listing marketplace
open affiliate program
cheap lead generation
```

---

## 7. Design check

Before publishing a Partner page, confirm:

```text
[ ] Page route is partner-facing
[ ] Page has selected world: sigil-system or mmd-prive
[ ] SĪGIL colors are intentional, not accidental
[ ] Thai body copy is readable
[ ] Main headline is not too transparent
[ ] CTA is clear
[ ] SĪGIL Trust Footer is used when asking for sensitive trust
[ ] Mobile first layout is checked
```

---

## 8. Final rule

Partner pages may use SĪGIL colors.

This is correct when the page is acting as a private trust gateway, partner review surface, or Yuki Partner Division entry point.
