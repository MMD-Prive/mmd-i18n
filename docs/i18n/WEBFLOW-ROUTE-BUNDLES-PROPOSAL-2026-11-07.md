# Webflow Route Scoped i18n Bundles (STAGING PROPOSAL)

This adds a **build-time** route-bundle generator; it does NOT alter Webflow, overwrite the canonical engine, or publish. It addresses the current Global Footer loading 15 canonical translation scripts on every Webflow page.

## Run

```bash
node scripts/build-webflow-i18n-route-bundles.mjs
node --test test/route-bundles-webflow.test.mjs
```

The command generates `dist/webflow-i18n/<route>.js`, `global-loader.js`, and `integrity.json`. Commit the generated distribution only after QA. Production installation must pin the **same immutable commit SHA** for the loader and all generated bundles, and put the **loader SRI** from `integrity.json` in the registered Webflow hosted script; bundles are also SHA-pinned and SRI-checked.

**Never paste the placeholder below verbatim** (it is documentation, not a deployable URL):

```html
<script defer src="https://cdn.jsdelivr.net/gh/MMD-Prive/mmd-i18n@APPROVED_40_CHAR_COMMIT_SHA/dist/webflow-i18n/global-loader.js"
  integrity="sha384-VERIFIED_LOADER_HASH" crossorigin="anonymous"></script>
```

### Rules
- Replace the 15 i18n tags in Webflow Global Footer **as one verified swap** after mobile/Desktop staging QA; never load old and new together.
- Routes use exact path or bounded prefix matching; unknown routes get a minimal dictionary/registry/autobind/core bundle.
- The current `i18n.core.v21.js` language behavior is preserved, even though the older Restore Contract calls for TH-only. Reconcile owner policy before production. Do **not** make unsupported locale claims.
- All copy remains in `mmd-i18n`, not in Webflow inline code and not duplicated in `mmd-workers`.
- The large Partner Thai text replacement script is not part of this i18n bundle; migrate it only after binding review and QA.
- Do not alter payment, auth, Kenji, signed-link, model confirmation or consent behavior.

Related: [MMD Global Audit PR #3120](https://github.com/MMD-Prive/mmd-workers/pull/3120).
