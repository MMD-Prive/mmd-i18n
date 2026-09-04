# MMD TH / EN / ZH rollout — 2026-09-04

Status: ACTIVE ROLLOUT

## Canonical runtime

- Default language: `th`
- Active languages: `th`, `en`, `zh`
- Known but inactive: `jp`
- Runtime: `/assets/i18n/i18n.core.v21.js`
- Base dictionary: `/assets/i18n/i18n.dict.js`
- Completed-route registry: `/assets/i18n/completed-pages.registry.js`
- Legacy Webflow migration bridge: `/assets/i18n/i18n.autobind.js`
- Webflow loader: `/components/webflow/mmd-i18n-loader.html`

## Safety

1. Missing copy never blanks or overwrites existing page copy.
2. Fallback is selected language -> Thai -> English -> existing page copy.
3. Thai stays the MMD default even though the current Webflow site metadata reports English as its primary locale.
4. Auto-binding is exact and unique only. It never machine-guesses a key from similar wording.
5. Drafts, placeholders, preview routes, copies, and obsolete historical routes are excluded from the completed-route registry.
6. Internal routes may participate in the same runtime, but registration does not widen authentication, entitlement, or public exposure.

## Webflow localization mode

The current Webflow site exposes no secondary locales through the connected Localization API. Because the API can only write secondary locale content and cannot create/enable locales in this environment, the canonical GitHub runtime is the active localization layer for this rollout.

When native secondary locales become available, native page metadata/content may be layered on top without replacing the canonical copy dictionary.

## Production bundles loaded globally

- Base MMD dictionary
- MMS landing / pre-booking
- MMS How to Use
- MMS Therapist Application
- MMD Shop
- CARE BACK promotion
- CARE BACK Wish submission

Additional finished pages join the same runtime by adding reviewed dictionary keys/bundles; existing untranslated copy remains visible until those keys are reviewed.
