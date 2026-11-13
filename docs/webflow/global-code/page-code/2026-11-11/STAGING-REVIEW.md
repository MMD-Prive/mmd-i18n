# Webflow Staging · แยก Global Head และ Footer

ตรวจแบบอ่านอย่างเดียววันที่ 12 พฤศจิกายน 2569 (Asia/Bangkok) สำหรับ SĪGIL System `68f879d546d2f4e2ab186e90` ใช้ [mmd-i18n #56](https://github.com/MMD-Prive/mmd-i18n/pull/56) ที่ main `0df38d6bbd342dd5b90607aeec4e0ecd6d0b9966` และ [mmd-workers #3120](https://github.com/MMD-Prive/mmd-workers/pull/3120) ที่ main `0d22783f846febffcc2ba55576e184b7e4c4ff8d`

## สถานะที่พบ

- Global Freeform ใน Webflow Editor ตรงกับ `shared/2026-11-11` ฉบับก่อนแพตช์เมื่อไม่นับ whitespace ปลายบรรทัด/ปลายไฟล์ ส่วน HTML ที่เผยแพร่บน `mmdprive.webflow.io` มี Snapshot 11 พ.ย. ฉบับเต็มอยู่ทั้ง Head และ Footer ตรวจข้อความทั้งชุดบน `/`, `/rules`, `/partner/terms` และ `/internal/admin/studio` จึงมีความเสี่ยงที่การ Publish Staging จาก draft ปัจจุบันจะตัดโค้ดหน้าออกพร้อมกัน
- อ่าน inventory ครบ 334 รายการ โดย 319 รายการมี path และไม่มีสถานะ draft/archived อ่าน Freeform จริงเพิ่ม 60 หน้า รวม Rules, Studio, Partner, MMS, Kenji และ Internal ตัวอย่าง ไม่พบ ID หรือ URL ของบล็อกเป้าหมายใน Freeform ที่อ่านได้ การอ่าน Registered Page Scripts ได้ผล 1 หน้า และอีก 59 หน้าตอบ `Custom code block not found` ยังต้องตรวจ HTML Embed, CMS Template, Site Scripts และโหลดแบบ dynamic ก่อนสรุปว่าแต่ละหน้ามีโค้ดเพียงชุดเดียว
- Webflow รายงาน Site Scripts 15 รายการแยกจาก Freeform รวม World V5, Page Patches V422, PostHog bootstrap, Member Header และ Model Confirm ให้เก็บ bindings และตรวจลำดับตาม HTML จริง การแทนที่ Freeform อย่างเดียวไม่แทนที่สคริปต์ที่ลงทะเบียนไว้
- Head ของ Snapshot 7 และ 11 พ.ย. ตรงกันทุกไบต์ Footer มีการแทน i18n แบบเดิม 15 tags ด้วย loader commit `887c1346fa27c74798f06b5beff4f1401540a091` และเปลี่ยน PostHog สอง tags เป็นรุ่นที่กัน Internal แล้ว ตัว inline เดิมทั้ง 21 บล็อกตรงทุกไบต์กับ payload ใน `mmd-workers/webflow/global/site-code/2026-11-07/sources` ส่วน 14 fragments ใน #56 ตรงกับ tags เดิมทั้ง 19 tags ก่อนแพตช์ (17 inline และ Kenji 2 hosted)
- [รายการต่อหน้า](staging-pages.csv) เรียง Head/Footer ตามลำดับเดิมภายในกลุ่ม วัดขนาดแบบ UTF-16 ในช่องที่อ่านได้ และระบุหน้าที่ต้องตรวจตาม DOM/route guard ช่องว่างหมายถึงยังไม่ได้อ่านค่า Page Settings นั้น รายการนี้ใช้ตรวจงานทีละหน้าและไม่มีคำสั่ง bulk write

## คงไว้ร่วมกันและย้ายเฉพาะหน้า

| กลุ่ม | ที่อยู่และลำดับ | เงื่อนไขก่อนตัดจาก Global |
| --- | --- | --- |
| Shared Head | favicon, touch icon, logo/scale CSS, font preconnect และ global typography ตามลำดับเดิม | คง CSS กว้าง 4 บล็อกเพื่อรักษา cascade และตัวอักษรทุก world |
| Shared Footer | i18n loader หนึ่งตัว, language marker, PostHog route แล้ว API แบบ defer | คง TH/EN/ZH, ตรวจ `data-mmd-i18n-bundle=loaded` และไม่มี legacy core ซ้ำ |
| Rules | `rules-head` ใน Head เฉพาะหน้าที่มี `#mmd-rules-page-lvmaxx-v2` | `/rules` ที่เผยแพร่มี `#mmdRulesPageV2` และ lane อยู่ใน HTML แล้ว ต้องยืนยัน DOM หลัง JS ทำงานก่อนผูก กฎนี้อิง root selector |
| Studio | `studio-visual-head` มี CSS ก่อน JS บน Studio และ Internal Studio ที่ตรง scope ตามด้วยชุด Internal ที่หน้าต้องใช้ | `/studio` ตอบ redirect ไป `/internal/admin/studio` จึงไม่ใส่ `studio-bridge-head` ที่ปลายทาง หากเส้นทางเดิมกลับมา render ให้ bridge ตามหลัง visual และตรวจ auth ก่อน form action |
| MMS | `mms-header-head` เมื่อ `html[data-mmd-world=mms]` และ `mms-therapist-footer` ตาม exact allowlist | World V5 ตั้ง world ให้ `/male-massage*` และ `/therapists` ตรวจ mobile logo ที่ 479 และ 991 px หน้า `/male-massage` ตอบ HTTP 404 บน Staging แต่โค้ดเดิมยังมี client redirect ไป `/male-massage/home` ต้องพิสูจน์ redirect ทดแทนก่อนตัดบล็อกจาก Global ตรวจ `/male-massage/rules/mms-therapist` ไปหน้า Apply Rules ด้วย |
| Partner | `partner-head` ตั้ง class ก่อน Theme CSS และ CTA Contrast CSS, `partner-footer` เป็น classic script ที่ตำแหน่งเดิมเท่าที่ Page Settings อนุญาต | ใช้ bytes จาก mmd-workers ที่ตรึง commit และ SRI ทั้ง 3 ไฟล์ ตรวจผลของการย้ายลำดับเทียบกับ page CSS และต้นทุน fetch บนมือถือ หน้า Relax Spa และ Kalima ที่ route guard ระบุยังตอบ 404 บน Staging |
| Public header fallback | `public-header-head` เฉพาะหน้าที่ runtime guard ผ่านและไม่มี header เดิม รวมข้อยกเว้น `/pay/membership` และ `/member/membership` | ต้องยืนยันบนมือถือทีละหน้าและบน template ที่ไม่มี static Page Settings คง legacy fallback ใน Global สำหรับรอบที่ mapping ยังไม่ครบ |
| Internal / Admin | Silver → Contrast → Workspace ใน Head ตาม guard, Admin/CARE BACK CSS → Admin Canon JS ใน Footer | Silver import เดิมตรึง commit แต่ dynamic import นี้ไม่มี SRI ของตัวเอง ให้คง dependency เดิมและทดสอบ fallback โดยเฉพาะ CEO Dashboard และ login/setup/invite รวมหน้า CSS ที่มี `#mmdCareBackV2` |
| Kenji | `kenji-matrix-footer` เฉพาะ `/internal/ceo/kenji-control` โดย UI มาก่อน Runtime และทั้งคู่ defer | เช็ก guard แบบ exact, UI และ Runtime อย่างละหนึ่งครั้ง ตรวจ owner session และค่าที่แสดงโดยไม่ส่งคำสั่งจริง |

`/partner/terms` มี Head เดิม 47,597 หน่วย UTF-16 และ Footer เดิม 18,633 หน่วย การเติม fragments เดิมแบบ inline ทำให้ทั้งสองช่องเกิน 50,000 จึงใช้ `<link>` สองแท็กและ `<script src>` หนึ่งแท็กจาก Source Files เดิม CSS ใช้ลำดับเดิมและเก็บ bootstrap ตั้ง class แบบ inline JS อยู่ท้าย body แบบ classic เพื่อรักษาการรันก่อน `DOMContentLoaded` ในการ parse ปกติ ตรวจตำแหน่งจริงเทียบกับ deferred scripts และวัดผลเมื่อ CDN ช้า เอกสาร [Webflow Custom Code](https://help.webflow.com/hc/en-us/articles/33961357265299-Custom-code-in-head-and-body-tags) ระบุเพดาน 50,000 ตัวอักษรต่อช่อง

## SHA, SRI และการทดสอบ

- คำนวณ SHA-384 จาก HTTP response bytes โดยตรง ตรวจทั้ง i18n loader และ 11 bundles ตรงกับ pin/SRI เดิมทั้งหมด ตรวจ CSS และ JS ของ Partner จาก jsDelivr ตรงกับ Git ทุกไบต์และตอบ CORS `*` แพตช์จึงใช้ไฟล์เดิมโดยไม่สร้าง loader ใหม่
- PostHog routes และ API ตอบ 200 พร้อม CORS แต่ digest ของทั้งสองไม่ตรงกับ `integrity` ใน Snapshot และ Editor ฉบับก่อนแพตช์ แพตช์แก้ค่าใน **candidate shared footer** เท่านั้น การแก้ทำให้โค้ดสองชิ้นมีสิทธิ์ทำงานใน browser จึงต้องตรวจผลต่อ event และ fetch ก่อนอนุมัติ Kenji สองไฟล์เพิ่ม SRI จาก bytes ของ URL แบบ versioned เดิม คง `crossorigin=anonymous` สำหรับทุก tag ที่ใส่ SRI
- ทดสอบ Node สำหรับ i18n 16 route cases, legacy conflict และเรียก loader ซ้ำ รวม PostHog 6 route guard cases กับการป้องกัน fetch wrapper ซ้ำ ตรวจ baseline audit ของ mmd-workers ผ่าน 3 ข้อ ข้อมูลนี้ยืนยัน guard และ asset bytes แต่ browser smoke test, LINE in-app, session/cookie, CSS ที่คำนวณจริง และ analytics delivery ยังต้องทดสอบบน Staging ที่อนุมัติ

## รอบทดสอบหลังอนุมัติ

1. บันทึก baseline แยกกันสำหรับ Published Staging และ Webflow Editor เก็บ Head/Footer และ registered bindings ของทุกหน้าที่แตะ พร้อม Site Scripts, page IDs, route, ความยาว และ SHA-256 สำหรับตรวจเทียบ ตรวจว่ามีงาน draft อื่นรอเผยแพร่หรือไม่ ใช้ staging site ที่แยกได้หรือ source preview สำหรับการซ้อม หากต้องใช้ `mmdprive.webflow.io` ให้เลือกเฉพาะ staging subdomain และตรวจรายการ pending changes ทั้งไซต์ก่อนกด [วิธี Publish Staging ของ Webflow](https://help.webflow.com/hc/en-us/articles/33961351954579-How-do-I-publish-or-unpublish-a-Webflow-site)
2. ทดลองกลุ่มที่ mapping ชัดก่อนบน isolated preview ได้แก่ `/internal/admin/studio` และหน้าย่อยจริง, `/partner/terms` และ `/partner/apply`, `/internal/ceo/kenji-control` ย้ายทีละกลุ่ม โดยตัดจาก Global และผูก Page Code ที่ตรวจครบใน build เดียว สำหรับกลุ่มที่มี route ยังขาด ให้เก็บ legacy block ใน Global ของ build ทดสอบนั้นและเว้นการผูก block เดียวกันใน Page Settings ห้ามใช้ candidate shared Head/Footer เป็นการแทนที่เต็มไซต์จนกว่าจะปิดรายการค้าง
3. ตรวจ source และ Network ในแต่ละหน้าว่า candidate อยู่จุดที่ตั้งใจและทำงานหนึ่งครั้ง ตรวจ route ที่ไม่เกี่ยวข้องว่า block ไม่ทำงาน ตรวจหน้า Rules, Partner CTA/footer, MMS logo/redirect, Public mobile header และ Internal directory ที่ 390/479/760/991 px และ Desktop 1440 px เทียบกับ baseline รวมทดสอบ slow network และ CDN failure
4. ใช้บัญชีทดสอบเท่านั้นสำหรับ session มีสิทธิ์/หมดอายุ/ไม่มีสิทธิ์ ตรวจ Internal login, Admin route, Kenji owner และ SĪGIL lounge ตรวจ LIFF signup/status/renew จาก LINE จริงบน test callback ที่อนุญาต ทดสอบ member payment return โดยใช้ sandbox/test intent และเช็ก `origin_rejected`, redirect loop, session loss รวม public membership CTA และ MY MODEL confirmation เป็น control
5. ตรวจ PostHog bootstrap ก่อน routes/API wrappers และ capture เพียงครั้งต่อ conversion ตรวจ Internal ไม่มี PostHog SDK request, capture หรือ fetch wrapper และตรวจว่า Partner/Member/SĪGIL เก็บเฉพาะ event ที่ baseline อนุญาต ทวนสถานะ console, SRI/CORS และไม่มี legacy i18n core คู่กับ loader ปิดรายการหน้า/route ที่ยังไม่ยืนยันก่อนขออนุมัติขยาย scope

## ย้อนกลับ

- หากแก้เฉพาะ isolated preview ให้ทิ้ง preview หรือคืน source ที่บันทึกไว้ สำหรับ Editor ที่ยังไม่ Publish ให้คืน Page Settings และ registered bindings ของหน้าเดิม แล้วคืน Site Head/Footer ตาม **Editor pre-change snapshot** เพื่อรักษางาน draft ที่มีอยู่
- หากได้ Publish Staging หลังอนุมัติแล้วและต้องคืนสภาพที่ผู้ทดสอบเคยเห็น ให้คืน Page Settings/registered bindings ทุกหน้าที่แตะก่อน แล้วคืน Site Head และ Footer จาก `../../snapshots/2026-11-11/global-head.txt` และ `../../snapshots/2026-11-11/global-footer.txt` ทั้งคู่ใน build เดียว ตรวจไม่มี block ย้ายซ้ำกับ Global ที่คืนมา แล้ว Publish เฉพาะ Staging และเทียบ HTML, redirects และชุด smoke test กับ baseline
- Snapshot 11 พ.ย. คืนพฤติกรรมเดิมรวมค่า SRI ของ PostHog เดิม หากต้องคงการแก้ Analytics ให้ถือเป็นขอบเขตอนุมัติแยก หลังคืน Published Staging แล้วสามารถคืน Editor draft แยกตาม snapshot ของ Editor โดยไม่ Publish ซ้ำ ตรวจ custom domains ในหน้าต่าง Publish ทุกครั้ง
