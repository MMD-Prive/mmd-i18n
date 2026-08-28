# MMD Footer Balanced Signature Rule

**Version:** v2026-FOOTER-BALANCED-01  
**Status:** Locked  
**Scope:** MMD Public Footer, SĪGIL Trust Footer, page-end signature sections  
**Purpose:** Define the footer style that feels beautiful enough, premium enough, and not too heavy for MMD Privé and SĪGIL pages.

---

## 1. Core decision

MMD footers should be **small signature closures**, not large corporate navigation blocks.

The footer should feel like a final private mark at the bottom of the page:

```text
quiet / premium / trustworthy / editorial / discreet / not too much
```

It should not compete with the hero, main CTA, or page content.

---

## 2. Visual balance

A good MMD footer should use:

```text
low height
clean spacing
small brand signature
one short tagline
minimal navigation or no navigation
small credit line
subtle divider
soft red or gold accent only where needed
```

Avoid:

```text
heavy corporate footer
large newsletter box
many columns
large social section
oversized logo
full dark block on every public page
footer that feels like another hero section
```

---

## 3. MMD Public Footer

Component source:

```text
components/webflow/mmd-public-footer.html
```

Component name:

```text
MMD Public Footer
```

Use on public white-world information pages:

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

Recommended public footer copy:

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

Public footer should not become black-gold or SIGIL-heavy unless the specific page intentionally bridges into private trust.

---

## 4. SĪGIL Trust Footer

Component source:

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

Recommended SĪGIL footer copy:

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

SĪGIL footer is not an internal-only footer. It is useful where customers, models, or partners need reassurance before giving sensitive information.

---

## 5. Footer height rule

Footer should feel complete but not tall.

Recommended proportions:

```text
Desktop: 220px - 360px total visual height
Mobile: compact stacked footer, no more than necessary
```

A footer can be slightly taller only if it contains legal / trust / verification copy required for that page.

---

## 6. Navigation rule

Public footer may contain light navigation, but keep it limited.

Recommended max:

```text
4 - 6 small links
```

SĪGIL Trust Footer should usually avoid navigation and focus on trust reassurance.

---

## 7. Accent rule

Public footer:

```text
wine-red / fresh legacy red = small cut, link hover, tiny line, active marker
soft gold = tiny brand detail only
```

SĪGIL footer:

```text
champagne gold = small seal, fine border, tiny label
wine red = optional shadow or private warning accent
```

Do not mix too much red and gold until it feels hotel / wedding / generic luxury.

---

## 8. Placement rule

Use footer at the final page end only.

Do not place footer inside:

```text
hero section
main CTA card
form step
modal
member dashboard core console
heavy booking flow unless the page needs trust reassurance
```

For heavy conversion pages, footer may be hidden or replaced with a compact trust strip.

---

## 9. Final rule

The footer should feel like:

```text
a quiet signature after a private conversation
```

Not:

```text
a corporate sitemap
an ad block
a second hero
a loud brand wall
```
