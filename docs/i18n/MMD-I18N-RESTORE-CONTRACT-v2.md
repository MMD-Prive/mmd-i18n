# MMD i18n Restore Contract v2

Updated: 2026-08-04  
Status: HARD LOCK

## Decision

`MMD-Prive/mmd-i18n` is again the canonical language source for MMD Privé,
SIGIL customer/member pages, Webflow embeds, and Worker-rendered HTML.

The language system must not be replaced by page-local dictionaries, duplicated
language engines, or parallel `<span data-lang>` implementations.

## Canonical load order

Load these files once, in this order:

```html
<script defer src="https://cdn.jsdelivr.net/gh/MMD-Prive/mmd-i18n@main/assets/i18n/i18n.dict.js?v=20260804-restore-2"></script>
<script defer src="https://cdn.jsdelivr.net/gh/MMD-Prive/mmd-i18n@main/assets/i18n/i18n.core.js?v=20260804-restore-2"></script>
```

Production should pin an approved release tag after the restore PR is merged.
Using `@main` is the migration bridge, not the long-term release policy.

## Language behavior

| Item | Contract |
| --- | --- |
| Supported | TH / EN / ZH / JP |
| Alias | `ja` normalizes to `jp` |
| Default | Thai |
| Storage | write both `mmd_lang` and legacy `lang` |
| URL override | `?lang=th|en|zh|jp` |
| Missing key | selected → Thai → English → keep existing copy |
| Page navigation | the stored language remains active across routes |

## Markup

Use semantic bindings; keep readable Thai source copy in the element so the
page still works if JavaScript or the CDN is unavailable.

```html
<h1 data-i18n-text="public.access.hero.title">เริ่มจากสิ่งที่คุณต้องการจริง ๆ</h1>
<p data-i18n="public.access.hero.body">ผมจะช่วยจัดตัวเลือกให้ชัดขึ้นครับ</p>
<input data-i18n-placeholder="booking.brief.placeholder" placeholder="เล่าให้ผมฟังสั้น ๆ">
<button type="button" data-set-lang="en">EN</button>
```

Use `data-i18n-html` only for trusted repository-owned copy. Prefer
`data-i18n-text` for plain text.

## Page migration rule

Every new or redesigned customer-facing HTML artifact must:

1. load the canonical dictionary and engine;
2. use repository dictionary keys instead of a page-local dictionary;
3. retain Thai source copy as the no-JavaScript fallback;
4. preserve query parameters, tokens, forms, and route behavior;
5. pass `npm run audit:i18n -- --strict <changed files>`.

Internal machine-only or admin artifacts may be exempt only with an explicit
comment containing `data-mmd-i18n-exempt:` and a reason.

## Migration order

1. Global Webflow loader and language selector.
2. Public acquisition pages and navigation/footer.
3. Membership, booking, payment, and confirmation.
4. Member Dashboard / LIFF.
5. SIGIL application, model, and internal lanes according to access scope.

The restoration must be incremental. Existing Thai copy remains visible until
the matching language keys have been reviewed.
