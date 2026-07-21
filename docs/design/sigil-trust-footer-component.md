# SĪGIL Trust Footer Component

**Version:** v2026-SIGIL-TRUST-FOOTER-01  
**Status:** Locked  
**Purpose:** Define where the SĪGIL Trust Footer should appear and how it should communicate privacy, trust, and Per's direct oversight.

---

## 1. Core decision

The SĪGIL Trust Footer is **not only for internal pages**.

It should be visible on selected **client-facing / model-facing / partner-facing private trust pages** where the user needs reassurance that MMD/SĪGIL handles sensitive information carefully.

It must not be treated as an admin-only footer.

---

## 2. Design intent

The footer should be minimal, calm, and trust-focused. It should not feel like a marketing footer and should not contain many navigation links.

Primary message:

```text
SĪGIL is designed under Per's direct oversight.
```

Trust meaning:

- Sensitive information from clients, models, and partners is handled inside a deliberately designed access flow.
- Per designed and oversees the system structure, visual language, data flow, access checkpoints, and human-review points.
- The footer should communicate limited visibility, controlled review, and direct accountability.
- Avoid overclaiming that no infrastructure, database, worker, platform, or system layer is involved.
- Prefer phrases like “direct Per oversight,” “minimal data exposure,” and “private by design.”

---

## 3. Where to use it

Use the SĪGIL Trust Footer on **customer-visible / external private-trust pages**, especially when the page asks for sensitive action, trust, identity, proof, payment, or private review.

Recommended pages:

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

Optional, only if the page is styled as a private/SĪGIL trust page:

```text
/trust/inme
/public/access
/confirm/payment-confirmation
/confirm/verify
```

Do not use it as a general public footer for normal white-world pages. Those use the `MMD Public Footer` component.

---

## 4. Where not to use it

Do not place this component on admin-only pages unless a small internal audit signature is needed.

Avoid by default:

```text
/internal/admin/*
/sigil/admin/*
/member/dashboard
/member/login
```

Reason: admin and dashboard pages are operational tools. A large trust footer can distract from action flow and data review.

---

## 5. Component name

Webflow Component name:

```text
SĪGIL Trust Footer
```

Primary class:

```text
sigil-trust-footer
```

The component must be placed inside the page canvas / component area, not inside Webflow Global Footer Code.

---

## 6. Required world class

The page should use SĪGIL world styling:

```html
<body class="sigil-system">
```

If Webflow cannot set the body class directly, wrap the page with:

```html
<main class="sigil-system mmd-page-dark">
  ...
</main>
```

The global world patch may backfill the class from route, but explicit class is still preferred.

---

## 7. Locked copy direction

English headline:

```text
Designed under Per’s direct oversight.
```

Thai trust copy:

```text
ข้อมูลของลูกค้า โมเดล และพาร์ทเนอร์ ถูกจัดวางอยู่ในระบบที่ Per ออกแบบและกำกับเองโดยตรง ตั้งแต่ภาพลักษณ์ การไหลของข้อมูล การคัดกรอง ไปจนถึงจุดที่ต้องมีมนุษย์เข้ามาตรวจสอบ เพื่อให้ทุกขั้นตอนจำกัดการมองเห็นเท่าที่จำเป็น และรักษาความไว้วางใจของทุกฝ่ายให้มากที่สุด
```

Trust chips:

```text
Direct Per oversight
Minimal data exposure
Client · Model · Partner privacy
```

Bottom line:

```text
System design, visual language, access flow, privacy structure and operational care by Per × AI System Workers.
```

Signature:

```text
SĪGIL · PRIVATE BY DESIGN
```

---

## 8. Safety wording rule

Do not write:

```text
Only Per knows everything.
```

Use instead:

```text
Designed under Per’s direct oversight.
```

or

```text
Information is handled through a private access flow designed and overseen by Per.
```

Reason: the website still uses hosting, databases, Workers, automation layers, and third-party platforms. The copy should communicate trust and control without making impossible technical claims.

---

## 9. Relationship with existing footers

Use this footer for private-trust pages:

```text
SĪGIL Trust Footer
```

Use this footer for normal public white-world pages:

```text
MMD Public Footer
```

Never place both footers on the same page unless intentionally building a transition page between MMD Privé and SĪGIL.

---

## 10. Quick usage matrix

```text
MMD public information page      -> MMD Public Footer
MMD profiles / companion page    -> MMD Public Footer
Client-visible SIGIL page        -> SĪGIL Trust Footer
Partner private trust page       -> SĪGIL Trust Footer
Model private application page   -> SĪGIL Trust Footer
Internal admin console           -> no footer by default
Member dashboard                 -> no footer by default
Heavy conversion form            -> footer optional, keep compact
```
