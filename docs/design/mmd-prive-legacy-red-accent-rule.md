# MMD Privé Legacy Red Accent Rule

**Version:** v2026-PRIVE-LEGACY-RED-01  
**Status:** Locked  
**Scope:** MMD Privé public / white-world pages, profiles, public access, membership, trust pages, selected partner bridge sections  
**Purpose:** Preserve the original MMD logo red as a small but intentional brand accent while keeping MMD Privé clean, readable, and premium.

---

## 1. Core decision

MMD Privé should not become beige-gold generic luxury.

The public world remains:

```text
white / ink / stone / wine / legacy red accent
```

The original logo red should not be removed. It should appear as a controlled accent that gives the white-world design tension, memory, and brand continuity.

---

## 2. Red role

Legacy red is a **signal color**, not the whole atmosphere.

Use red to create:

- CTA focus
- active states
- tiny cuts / dividers
- underline accents
- badge dots
- icon strokes
- hover details
- selected states
- trust or access markers
- first-logo heritage references

Do not use it as a large background field unless the page has a deliberate campaign reason.

---

## 3. Approved red range

Use the global tokens:

```css
--mmd-wine:#941523;
--mmd-wine-deep:#68111c;
--mmd-wine-bright:#c91e35;
--mmd-rose:#f8eef0;
```

Interpretation:

```text
#941523 = MMD wine / main CTA red
#68111C = deep red / pressed state / shadow
#C91E35 = fresh legacy red / tiny accent / active state
#F8EEF0 = rose surface / soft red background
```

---

## 4. Where red should appear

Good usage:

```text
primary CTA
small eyebrow text
short divider line under headline
active nav state
card corner marker
small icon stroke
tiny dot beside label
form focus ring
selected package border
subtle hover state
```

Examples:

```css
.mmd-btn-primary{
  background:linear-gradient(135deg,#c91e35,#8e1020);
}

.mmd-red-cut{
  width:42px;
  height:2px;
  background:#c91e35;
}

.mmd-active-dot{
  width:7px;
  height:7px;
  border-radius:999px;
  background:#c91e35;
}
```

---

## 5. Where red should not dominate

Avoid:

```text
full red hero background
large red gradients behind models
red-heavy cards across the whole page
red text for all headings
red as body copy color
red mixed with gold until it feels wedding / hotel / generic luxury
```

The page should still feel like MMD Privé, not a generic red-and-gold luxury brand.

---

## 6. Relationship with gold

Gold remains a small accent.

Gold should not replace legacy red as the public-world identity.

Correct:

```text
wine-red CTA + tiny gold line
ink heading + red cut
white card + red active state
```

Incorrect:

```text
champagne gold everywhere
beige-gold hero
large gold headline with hotel mood
```

---

## 7. Partner exception

Partner pages may use SIGIL-inspired gold, dark, and glass because they are a public-visible private trust bridge.

However, when a Partner page needs to preserve MMD Privé heritage, a small red accent may still appear as:

```text
logo echo
note edge line
small active marker
CTA hover detail
private review warning accent
```

This should not conflict with the Partner / SĪGIL Bridge Visual Rule.

---

## 8. Final rule

MMD Privé should keep a visible but restrained trace of the original logo red.

The red should feel like a precise cut, not a full mood.

```text
White world stays clean.
Ink keeps authority.
Wine-red carries action.
Fresh legacy red preserves the first MMD identity.
Gold stays secondary.
```
