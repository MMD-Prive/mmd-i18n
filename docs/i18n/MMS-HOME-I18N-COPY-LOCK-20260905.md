# MMS `/male-massage/home` — i18n + copy + CTA contrast lock

Status: staged in PR
Date: 2026-09-05 ICT

## Role

`/male-massage/home` is the customer Male Massage home. `/therapists` remains the recruitment/career front door.

The customer home keeps the highest recoverable former `/therapists` V4 structure, including the remembered eight-skill chapter:

> เลือก Skill ที่ต้องการ แล้วให้ MMS ช่วย Match

## Language contract

- Default: TH
- Active: TH / EN / ZH
- Canonical dictionary namespace: `mms.home.*`
- Canonical shared MMS pre-booking namespace: `mms.booking.*`
- Route must be present in `MMD_I18N_COMPLETED_ROUTES` as world `mms`, bundle `mms`.
- Selected-language persistence uses canonical `mmd_lang` / `lang`; the restored V4 compatibility key `mms-home-lang` must be synchronized, not treated as a separate source of truth.

## Voice / wording

Use MMS as the customer-facing coordinator on MMS pages. Do not switch to `MMD` inside MMS booking/customer copy unless the copy is explicitly referring to the parent brand.

Preferred voice is Per voice: direct, calm, helpful, not system-like. Keep English product terms that are already part of the MMS product language when they improve recognition, especially `Pre-booking`, `Skill`, `Therapist`, and `Match`.

Canonical remembered headline stays:

`เลือก Skill ที่ต้องการ แล้วให้ MMS ช่วย Match`

## CTA contrast

Global link styles must never make CTA text disappear or read dark-on-dark.

Required scoped rules for `#mms-home-v4`:

- Primary forest CTA: white text + `-webkit-text-fill-color:#fff`.
- Secondary white CTA: forest text.
- Dark-surface outline CTA: white text.
- Setting-card action: forest text.
- Dark booking text-link: warm pale text.
- Active language button: forest background + white text.
- Branch Next: lime background + dark forest text.

These rules are intentionally scoped to the MMS customer home so they do not alter unrelated MMD worlds.

## Eight skills

1. Aroma Therapy Oil Massage
2. Thai Massage
3. Sport Massage
4. Office Syndrome
5. Health & Fitness Advisor
6. Thai Herbal Compress
7. Partner-Present Session
8. Women Massage

## Release rule

GitHub i18n changes may be merged after review/CI. Webflow visual V6 remains a separate staged presentation layer and should not be published merely because this i18n PR exists.
