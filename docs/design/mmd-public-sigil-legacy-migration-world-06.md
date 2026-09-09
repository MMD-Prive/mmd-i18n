# MMD Public + SIGIL Legacy Typography Migration · WORLD-06

Date: 2026-09-09
Status: migration manifest
Input: full Webflow route inventory (313 pages) + current site-level typography overrides + recent Public/SIGIL rebuilt-page inspection.

## Purpose

WORLD-05 established the canonical fonts and safe H1/H2 colors, but older pages may still:
- use LINE Seed Sans TH for EN headings,
- contain page-local color fixes,
- use custom dark/photo surfaces,
- switch TH/EN/ZH dynamically,
- or live outside the newer `.mmd-prive` / `.sigil-system` root wrappers.

WORLD-06 classifies each H1/H2/H3 at runtime as `KEEP`, `MIGRATE`, or `COLOR-LOCK` and applies one shared migration layer instead of manually rewriting every page.

## Canon

### Public / MMD Privé
- EN H1 / Hero → Canela 400.
- EN H2 / H3 → Playfair Display 500.
- TH → Noto Sans Thai.
- H1/H2 on light → `#18171B`.
- H1/H2 on dark/photo → `#FFF8ED`.

### SIGIL
- EN H1/H2/H3 → Playfair Display 500.
- TH → Noto Sans Thai.
- H1/H2 on dark → `#FFF8ED`.
- H1/H2 on light inset → `#18171B`.

Font size is not blanket-migrated. Legacy page-specific size/line-height is retained unless that page already uses canonical WORLD-05 utility classes.

## Classification

### KEEP

KEEP means typography is already intentional or should not be changed by the EN migration. H1/H2 contrast safety still applies unless the heading is also an intentional color lock.

Element-level KEEP:
- Thai headings.
- Chinese/CJK headings.
- headings already using canonical MMD classes (`.mmd-display-en`, `.mmd-hero-display-en`, `.mmd-h1-en`, `.mmd-h2-editorial-en`, etc.).
- explicit `data-mmd-keep` headings.

Route-level KEEP / out of this migration:
- `/male-massage/**`
- `/therapists/**`
- `/apply/mms-therapist**`
- `/member/mms-booking/**`
- `/partner/**`
- `/internal/**`
- `/shop/**`
- `/mmd-shop`
- `/docs/**`
- `/model/**`
- `/accept/job`
- `/app`
- `/sigil/internal/**`
- `/sigil/admin/**`
- `/sigil/ceo/**`
- `/sigil/member/api/liff/status`

These keep their own MMS, Partner, Internal/Admin, Shop, Docs, or app typography systems.

### MIGRATE

All other eligible Public and SIGIL **English** H1/H2/H3 headings migrate unless they qualify for COLOR-LOCK.

Public route families covered:
- `/`
- `/profiles`
- `/public/**`
- `/services/**`
- `/booking`
- `/find`
- `/membership`
- `/member/**` except MMS booking
- `/promotion/**`
- `/confirm/**`
- `/pay/**`
- `/rules/**`
- `/terms`
- `/legal/**`
- `/privacy-policy`
- `/trust/**`
- `/tmib/**`
- `/hall`
- `/aftercare`
- `/believe/**`
- `/blackcard/**`
- `/journal`
- `/concierge/**`
- `/apply/public-model/**`
- `/onboarding/**`
- `/join`
- `/match`
- `/confirmation`
- `/password-reset`
- `/404`
- `/en/member/**`

SIGIL route family covered:
- `/sigil`
- `/sigil/**` except the explicit KEEP exclusions above.

### COLOR-LOCK

COLOR-LOCK preserves an intentional heading color but still applies the canonical EN font for that world. It is not a blanket exemption from typography migration.

Always COLOR-LOCK when explicitly approved:
- existing `data-mmd-color-lock`
- `.mmd-gradient-gold`
- `.mmd-gradient-burgundy`
- `.mmd-heading-boss`
- `.mmd-heading-gold-clean`

Recent/special visual routes receive an additional protection pass. A non-default local heading color is preserved only when its measured contrast is at least 3:1; otherwise it falls back to MIGRATE and the safe solid color.

Protected visual routes:
- `/profiles`
- `/booking`
- `/member/renewal`
- `/rules/model/consent`
- `/services/companion`
- `/promotion/6-years-care-back`
- `/promotion/6-years-care-back-preview-v2`
- `/promotion/6-years-care-back/wish`
- `/journal`
- `/tmib/**`
- `/trust/inme/**`
- `/blackcard/**`
- `/aftercare`
- `/believe/inme`
- `/sigil/start`
- `/sigil/inme`
- `/sigil/hero`
- `/sigil/jobs`

This protects deliberate treatments such as the recent Profiles dark-guide gold headings while allowing low-contrast legacy colors to be corrected.

## Runtime surface detection

For H1/H2, WORLD-06 determines `light` or `dark` from, in order:
1. explicit `data-mmd-surface="light|dark"`,
2. approved dark/light wrapper classes,
3. nearest non-transparent computed background color,
4. Public fallback = light; SIGIL fallback = dark.

The runtime writes debugging attributes:
- `html[data-mmd-world="public|sigil"]`
- `html[data-mmd-migration-version="2026-WORLD-06"]`
- heading `data-mmd-migration="keep|migrate|color-lock"`
- heading `data-mmd-role="h1|h2|h3"`
- heading `data-mmd-script="en|th|cjk"`
- heading `data-mmd-tone="light|dark"`

## Dynamic language handling

The classifier reruns after TH/EN/ZH text changes. This is required for pages such as `/profiles` where the heading starts in Thai and changes language without a full page reload.

## Legacy site-head conflict

The Webflow site head still contains an older rule forcing all headings/body copy to `LINE Seed Sans TH !important`. WORLD-06 intentionally overrides it only within classified Public/SIGIL pages. Other worlds remain untouched.

## Files

- Runtime: `assets/js/mmd-world-migration-v06.js`
- Migration CSS: `assets/css/mmd-global-world-06.css`
- Base tokens: `assets/css/mmd-global.css` (WORLD-05)

## Patch rule

Do not manually patch individual Public/SIGIL headings after WORLD-06 unless the design is intentionally exceptional. For an intentional exception, add `data-mmd-color-lock` or `data-mmd-keep` and document why.
