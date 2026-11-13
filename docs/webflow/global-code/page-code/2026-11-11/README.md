# Webflow Page Custom Code จาก PR #56

อ่าน [แผนตรวจและย้อนกลับสำหรับ Staging](STAGING-REVIEW.md) และ [รายการต่อหน้า](staging-pages.csv) ก่อนใช้ไฟล์ชุดนี้ ให้ใช้ fragment ในฉบับที่ผ่านการตรวจเดียวกันทั้งชุด และตรวจโค้ดที่ผูกไว้แล้วทุกชั้นก่อนประกอบ draft สำหรับทดสอบ

## 1. rules-head

**หน้า** หน้าที่ใช้ #mmd-rules-page-lvmaxx-v2 จริงเท่านั้น · HTML ของ /rules บน Staging ใช้ #mmdRulesPageV2 จึงต้องตรวจ runtime ก่อนเลือกหน้าติดตั้ง

**ช่อง** Head · Inside <head> tag

[เปิดไฟล์ rules-head.txt](./rules-head.txt)

## 2. studio-visual-head

**หน้า** /studio, /internal/admin/studio และหน้าย่อย

**ช่อง** Head · Inside <head> tag

[เปิดไฟล์ studio-visual-head.txt](./studio-visual-head.txt)

## 3. studio-bridge-head

**หน้า** /studio เฉพาะกรณีมีหน้า Webflow ที่ render ที่ path นี้ วางหลัง Studio Visual · Staging ปัจจุบัน redirect ไป /internal/admin/studio

**ช่อง** Head · Inside <head> tag

[เปิดไฟล์ studio-bridge-head.txt](./studio-bridge-head.txt)

## 4. mms-header-head

**หน้า** หน้า MMS ที่มี data-mmd-world="mms" บน <html>

**ช่อง** Head · Inside <head> tag

[เปิดไฟล์ mms-header-head.txt](./mms-header-head.txt)

## 5. partner-head

**หน้า** /partner และ /partner/* ที่เป็นหน้าใช้งานและผ่านการตรวจการผูกโค้ดซ้ำ

**ช่อง** Head · Inside <head> tag

[เปิดไฟล์ partner-head.txt](./partner-head.txt)

## 6. public-header-head

**หน้า** หน้า Public ที่ใช้เมนูสำรอง รวม /pay/membership และ /member/membership ตามเงื่อนไขในสคริปต์

**ช่อง** Head · Inside <head> tag

[เปิดไฟล์ public-header-head.txt](./public-header-head.txt)

## 7. internal-silver-head

**หน้า** /internal และ /internal/* ยกเว้น /internal/ceo/dashboard รวม /partner/dashboard/relax-spa และ /partner/dashboard/kalima-massage พร้อมหน้าย่อย วางหลัง Partner Theme ในหน้า Partner

**ช่อง** Head · Inside <head> tag

[เปิดไฟล์ internal-silver-head.txt](./internal-silver-head.txt)

## 8. internal-admin-contrast-head

**หน้า** /internal/admin และ /internal/admin/* วางหลัง Internal Silver

**ช่อง** Head · Inside <head> tag

[เปิดไฟล์ internal-admin-contrast-head.txt](./internal-admin-contrast-head.txt)

## 9. internal-workspace-head

**หน้า** /internal และ /internal/* ยกเว้นหน้าที่ลงท้าย /login, /setup, /invite วางหลัง Head ชุด Internal อื่น

**ช่อง** Head · Inside <head> tag

[เปิดไฟล์ internal-workspace-head.txt](./internal-workspace-head.txt)

## 10. mms-therapist-footer

**หน้า** /therapists, /apply/mms-therapist, /apply/mms-therapist-benefits, /apply/mms-therapist-rules, /male-massage/apply/mms-fast-track, /male-massage/home, /hall, /male-massage/therapists/login, /male-massage/therapists/me รวม /male-massage และ /male-massage/rules/mms-therapist ที่มี redirect

**ช่อง** Footer · Before </body> tag

[เปิดไฟล์ mms-therapist-footer.txt](./mms-therapist-footer.txt)

## 11. admin-care-back-css-footer

**หน้า** Member Intelligence, Access Invite, Owner Setup, Studio Upload, Studio Review, Model Preview, CEO Brief, CARE BACK ที่มี #mmdCareBackV2 และ /internal/admin/customer-data, /internal/admin/console, /internal/admin/sitemap

**ช่อง** Footer · Before </body> tag

[เปิดไฟล์ admin-care-back-css-footer.txt](./admin-care-back-css-footer.txt)

## 12. admin-canon-js-footer

**หน้า** /internal/admin/member-intelligence, /internal/admin/access/invite, /internal/admin/studio/*, /internal/admin/payments/historical-backfill, /internal/admin/customer-data, /internal/admin/console, /internal/admin/sitemap วางหลัง Admin และ CARE BACK CSS เมื่อใช้ทั้งคู่

**ช่อง** Footer · Before </body> tag

[เปิดไฟล์ admin-canon-js-footer.txt](./admin-canon-js-footer.txt)

## 13. kenji-matrix-footer

**หน้า** /internal/ceo/kenji-control

**ช่อง** Footer · Before </body> tag

[เปิดไฟล์ kenji-matrix-footer.txt](./kenji-matrix-footer.txt)

## 14. partner-footer

**หน้า** /partner และ /partner/* ที่เป็นหน้าใช้งานและผ่านการตรวจการผูกโค้ดซ้ำ

**ช่อง** Footer · Before </body> tag

[เปิดไฟล์ partner-footer.txt](./partner-footer.txt)
