/* =====================================================
   MMD PRIVÉ — MEMBER REQUESTS i18n
   LOCK: member-requests-th-v1 (2026-08-25)

   Canonical Thai copy for /member/requests.
   Thai remains the only active rollout language.
   Runtime status values must come from production APIs;
   this file contains display copy only and no demo data.
   ===================================================== */

(function () {
  "use strict";

  window.I18N_DICT = window.I18N_DICT || {};
  const D = window.I18N_DICT;
  D.th = D.th || {};

  Object.assign(D.th, {
    "member.requests.meta.route": "/member/requests",
    "member.requests.meta.title": "คำขอของคุณ",
    "member.requests.nav.dashboard": "My MMD",

    "member.requests.hero.kicker": "MY MMD · REQUESTS",
    "member.requests.hero.title": "คำขอของคุณ",
    "member.requests.hero.emphasis": "ผมวางไว้ตรงนี้ให้แล้วครับ",
    "member.requests.hero.body": "ดูว่าตอนนี้รายการอยู่ตรงไหน MMD กำลังทำอะไร และมีอะไรที่คุณต้องทำต่อ ถ้ายังไม่มีข้อมูลที่ยืนยัน ผมจะไม่สร้างสถานะขึ้นมาให้คุณต้องเดาครับ",
    "member.requests.cta.new": "ส่งคำขอใหม่",
    "member.requests.cta.mms": "MMS Pre-booking",
    "member.requests.cta.retry": "ลองอีกครั้ง",

    "member.requests.access.kicker": "MEMBER ACCESS",
    "member.requests.access.checking.title": "กำลังตรวจสอบข้อมูลของคุณครับ",
    "member.requests.access.checking.body": "ระบบกำลังยืนยัน Member และอ่านเฉพาะข้อมูลที่เกี่ยวข้องกับคุณ",
    "member.requests.access.checking.badge": "CHECKING",
    "member.requests.access.ready.title": "ยืนยัน Member แล้วครับ",
    "member.requests.access.ready.greeting": "สวัสดีครับ {name}",
    "member.requests.access.ready.body": "ผมจะแสดงเฉพาะรายการที่ระบบเชื่อมกับ Member ของคุณได้แล้ว",
    "member.requests.access.ready.badge": "VERIFIED",
    "member.requests.access.locked.title": "ต้องยืนยัน Member ก่อนครับ",
    "member.requests.access.locked.body": "รายละเอียดคำขอเป็นข้อมูลส่วนตัว จึงเปิดให้ดูหลังยืนยันผ่าน LINE เท่านั้น",
    "member.requests.access.locked.badge": "LINE REQUIRED",

    "member.requests.workspace.kicker": "YOUR REQUESTS",
    "member.requests.workspace.title": "ตอนนี้อยู่ตรงไหน",
    "member.requests.workspace.body": "เลือกดูทั้งหมด หรือแยกเฉพาะ MMS, บริการ MMD และเรื่องสมาชิกได้ครับ",
    "member.requests.stats.active": "กำลังดำเนินการ",
    "member.requests.stats.action": "รอข้อมูลจากคุณ",
    "member.requests.stats.confirmed": "ยืนยันแล้ว",
    "member.requests.filter.all": "ทั้งหมด",
    "member.requests.filter.mmd": "MMD",
    "member.requests.filter.mms": "MMS",
    "member.requests.filter.membership": "สมาชิก",
    "member.requests.loading": "กำลังอ่านรายการที่ยืนยันแล้วครับ",
    "member.requests.filter.empty": "ยังไม่มีคำขอประเภทนี้ครับ",

    "member.requests.gate.kicker": "MEMBER VERIFICATION",
    "member.requests.gate.title": "เปิดผ่าน LINE ของ MMD ก่อนนะครับ",
    "member.requests.gate.body": "ผมต้องยืนยันว่าคำขอเหล่านี้เป็นของคุณจริงก่อน จึงจะเปิดรายละเอียดส่วนตัวให้ดูได้ครับ",
    "member.requests.gate.cta": "ยืนยันผ่าน LINE Member",
    "member.requests.error.kicker": "TRY AGAIN",
    "member.requests.error.title": "ตอนนี้อ่านรายการไม่สำเร็จครับ",
    "member.requests.error.body": "ข้อมูลของคุณยังไม่ถูกเปลี่ยน ลองใหม่อีกครั้งได้เลยครับ",
    "member.requests.error.timeout": "ใช้เวลานานกว่าปกติครับ กรุณาลองใหม่อีกครั้ง",
    "member.requests.error.read": "ตอนนี้ระบบอ่านรายการไม่สำเร็จ ข้อมูลเดิมของคุณยังไม่ถูกเปลี่ยนครับ",
    "member.requests.empty.kicker": "NOTHING CONFIRMED TO SHOW",
    "member.requests.empty.title": "ยังไม่มีรายการที่ยืนยันให้แสดงครับ",
    "member.requests.empty.body": "ถ้าคุณเพิ่งส่งข้อมูลให้ MMD หรือ MMS ผมจะรอให้ระบบรับและยืนยันก่อน แล้วค่อยนำสถานะจริงมาแสดงตรงนี้ครับ",
    "member.requests.empty.production": "ตอนนี้หน้ารายการยังรอข้อมูลคำขอที่ยืนยันจาก MMD อยู่ครับ ผมจึงยังไม่ดึงประวัติจากการคาดเดาหรือข้อมูลในเครื่องมาแสดง",

    "member.requests.journey.kicker": "ONE REQUEST · FOUR RESPONSIBILITIES",
    "member.requests.journey.title": "แต่ละคำขอ มีคนดูอยู่ครับ",
    "member.requests.journey.body": "บนมือถือปัดดูแต่ละช่วงได้ครับ ภาพช่วยเล่าว่าใครกำลังดูอะไร โดยสถานะจริงยังยึดข้อมูลจาก Production เท่านั้น",
    "member.requests.journey.swipe": "ปัดดู →",
    "member.requests.story.hito.label": "01 · HITO · STATUS",
    "member.requests.story.hito.title": "คำขออยู่ตรงไหน",
    "member.requests.story.hito.body": "ดูว่าระบบได้รับรายการแล้วหรือยัง และตอนนี้กำลังเดินไปถึงขั้นตอนไหนครับ",
    "member.requests.story.hima.label": "02 · HIMA · MMS",
    "member.requests.story.hima.title": "MMS กำลังประสาน",
    "member.requests.story.hima.body": "วัน เวลา โซน Skills และคนที่เหมาะจะถูกตรวจให้ตรงกับนัดก่อนยืนยันครับ",
    "member.requests.story.hiro.label": "03 · HIRO · REVIEW",
    "member.requests.story.hiro.title": "MMD กำลังตรวจอะไร",
    "member.requests.story.hiro.body": "รายละเอียดที่เกี่ยวข้องจะถูกเทียบให้ครบก่อน เพื่อไม่ส่งคำตอบที่ยังไม่แน่นอนครับ",
    "member.requests.story.per.label": "04 · BOSS PER · NEXT STEP",
    "member.requests.story.per.title": "คุณต้องทำอะไรต่อ",
    "member.requests.story.per.body": "ถ้ามีขั้นตอนจริง ผมจะวางไว้ในรายการนั้น ถ้ายังไม่มี ผมจะไม่เร่งให้คุณทำอะไรครับ",

    "member.requests.status.received": "ได้รับแล้ว",
    "member.requests.status.reviewing": "กำลังตรวจ",
    "member.requests.status.coordinating": "กำลังประสาน",
    "member.requests.status.matching": "กำลังเช็กคน",
    "member.requests.status.waiting": "รอข้อมูลจากคุณ",
    "member.requests.status.confirmed": "ยืนยันแล้ว",
    "member.requests.status.completed": "จบงานแล้ว",
    "member.requests.status.closed": "ปิดรายการแล้ว",
    "member.requests.status.cancelled": "ยกเลิกแล้ว",
    "member.requests.status.fallback": "กำลังตรวจสอบ",

    "member.requests.card.ref": "เลขอ้างอิง",
    "member.requests.card.type": "ประเภท",
    "member.requests.card.status": "สถานะ",
    "member.requests.card.date": "วันนัด",
    "member.requests.card.zone": "พื้นที่",
    "member.requests.card.therapist": "คนที่ประสาน",
    "member.requests.card.skills": "Skills",
    "member.requests.card.updated": "อัปเดตล่าสุด",
    "member.requests.card.details": "ดูรายละเอียด",
    "member.requests.card.next": "NEXT STEP",
    "member.requests.type.mms": "MMS Pre-booking",
    "member.requests.type.membership": "Membership Request",
    "member.requests.type.mmd": "MMD Request",

    "member.requests.routes.kicker": "START SOMETHING NEW",
    "member.requests.routes.title": "มีเรื่องใหม่ให้ช่วยไหมครับ",
    "member.requests.routes.body": "เรื่องเดิมกับเรื่องใหม่จะแยกจากกันชัดเจน คุณจึงไม่ต้องส่งข้อมูลซ้ำในรายการเดิมครับ",
    "member.requests.routes.mmd.title": "เริ่มจากสิ่งที่คุณต้องการ",
    "member.requests.routes.mmd.body": "บริการ, Model, Membership หรือเรื่องที่อยากให้ MMD ช่วยดู",
    "member.requests.routes.mmd.cta": "เปิด Find Your MMD →",
    "member.requests.routes.mms.title": "ให้ Male Therapist ไปถึงคุณ",
    "member.requests.routes.mms.body": "ระบุวัน เวลา โซน และ Skills แล้วให้ MMS ช่วยเช็กคนที่เหมาะ",
    "member.requests.routes.mms.cta": "เริ่ม Pre-booking →",

    "member.requests.faq.kicker": "A LITTLE MORE",
    "member.requests.faq.title": "เรื่องที่ควรรู้ไว้ครับ",
    "member.requests.faq.confirmed.q": "ส่งคำขอแล้ว ถือว่ายืนยันหรือยัง",
    "member.requests.faq.confirmed.a": "ยังครับ คำขอหรือ Pre-booking จะถือว่ายืนยันเมื่อ MMD ประสานรายละเอียดที่จำเป็นและตอบกลับอย่างชัดเจนแล้วเท่านั้น",
    "member.requests.faq.delay.q": "ทำไมบางรายการยังไม่ขึ้นทันที",
    "member.requests.faq.delay.a": "ผมจะแสดงเมื่อระบบ Production เชื่อมคำขอกับ Member ของคุณได้แล้ว เพื่อไม่ให้ข้อมูลผิดคนหรือแสดงสถานะที่ยังตรวจสอบไม่ได้ครับ",
    "member.requests.faq.edit.q": "ถ้าต้องแก้วัน เวลา หรือรายละเอียด",
    "member.requests.faq.edit.a": "หากรายการมีปุ่มแก้ไขหรือส่งข้อมูลเพิ่ม ให้ใช้ปุ่มในรายการนั้นได้เลย ถ้ายังไม่มีปุ่ม กรุณาติดต่อ LINE และแจ้งเลขอ้างอิงครับ",
    "member.requests.faq.reference.q": "เลขอ้างอิงใช้ทำอะไร",
    "member.requests.faq.reference.a": "ใช้ให้ MMD ค้นหารายการได้ถูกต้องและเร็วขึ้น กรุณาเก็บเลขอ้างอิงไว้จนกว่ารายการจะจบครับ",

    "member.requests.note.kicker": "A NOTE FROM PER",
    "member.requests.note.body": "ผมอยากให้หน้านี้เปิดมาแล้วรู้เรื่องเลยครับ ถ้ายังไม่มีอะไรต้องทำ ผมจะไม่สร้างขั้นตอนเพิ่มให้คุณ แต่ถ้ามี ผมจะวางไว้ตรงหน้าและบอกให้ชัดว่าต้องทำอะไรต่อครับ",
    "member.requests.footer": "MY MMD · PRIVATE CONTINUITY"
  });

  window.MMD_MEMBER_REQUESTS_I18N = {
    lock: "member-requests-th-v1",
    status: "active",
    route: "/member/requests",
    languages: ["th"],
    productionTruthOnly: true
  };
})();
