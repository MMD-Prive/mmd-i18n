# Admin Console copy — 2026-11-08

Route: `/internal/admin/console`  
Namespace: `admin.console.*`  
Audience: authenticated internal owner/admin

## Canonical files

- `assets/i18n/pages/admin-console.th.json` contains the Thai copy snapshot.
- `assets/i18n/pages/admin-console.js` merges the same keys into
  `window.I18N_DICT.th`. It does not replace the dictionary, start a language
  engine, change the selected language, or read operational data.
- The Worker page's `ADMIN_CONSOLE_COPY` fallback in
  `MMD-Prive/mmd-workers/admin-worker/src/admin-console-page.js` must match this
  snapshot. Update both repositories together when changing the copy.

The new owner workspace is Thai. Existing English/Chinese language preferences
fall back to these Thai keys through the canonical runtime. This change does not
add language controls or claim that the Console has been translated.

## Load only on Console

For the standalone Worker page, load each script once in this order:

1. `assets/i18n/i18n.dict.js`
2. `assets/i18n/pages/admin-console.js`
3. `assets/i18n/i18n.core.v21.js`
4. The Console page client

Use an immutable commit and the matching SRI for every hosted file. Keep the
Thai text in the HTML and client fallback so failed CDN requests cannot blank
controls or errors. No global Webflow loader or completed-route registry change
is needed for this authenticated route.

Use `data-i18n-text`, `data-i18n-placeholder`, and the existing accessible
attribute bindings for static copy. The canonical runtime does not interpolate
`{count}` or other template values: obtain such a string with
`MMD_I18N.t(key)`, format its known values in the Console client, and assign it
with `textContent`. Do not bind a fully formatted dynamic label with
`data-i18n-text`, which would replace it with the raw template on reapply.

Customer names, model names, canonical job identifiers, dates, amounts, and
operational statuses remain data from the authenticated jobs API. Dictionary
registration grants no access and changes no job, payment, or membership state.

## Verification

Run:

```bash
node --test test/admin-console-i18n.test.mjs test/i18n-core-v21.test.mjs
```

The Console extension is checked against its JSON snapshot, repeat loading must
preserve existing dictionary objects and other locales, and the canonical v2.1
runtime must resolve every new key through Thai fallback.

This source change alone does not publish or deploy the Console page.
