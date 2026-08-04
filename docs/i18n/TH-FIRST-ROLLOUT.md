# MMD i18n · TH-First Rollout

Decision date: 2026-08-04  
Status: HARD LOCK

MMD will complete the Thai experience before translating any page into EN,
ZH, or JP. Future locale data may remain in the repository for reference, but
future language controls stay disabled in production.

## Definition of Thai complete

A route is TH-complete only when:

- headings, body copy, labels, placeholders, validation, empty states, loading
  states, success/error messages, consent, and CTA text are present in Thai;
- mobile-short copy is reviewed where the mobile layout requires it;
- dynamic Worker/API messages shown to customers have Thai-safe presentation;
- no visible copy depends on an incomplete foreign-locale key;
- route parameters, forms, tokens, and redirects still work;
- the route passes the canonical i18n audit and Thai coverage report.

## Migration order

1. Global navigation, footer, and shared CTA.
2. `/public/access` and public acquisition routes.
3. Membership and benefits.
4. Booking, payment, and confirmation.
5. Member Dashboard / LIFF.
6. SIGIL customer, application, model, and internal lanes.

Only after all approved routes are TH-complete may MMD enable EN, then ZH and
JP in separately reviewed translation phases.
