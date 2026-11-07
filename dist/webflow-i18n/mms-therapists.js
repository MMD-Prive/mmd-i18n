/* Generated from MMD canonical i18n — mms-therapists; do not hand edit. */

/* SOURCE: i18n.dict.js */
/* =====================================================
   MMD PRIVÉ — i18n DICTIONARY (SINGLE FILE • LOCK)
   LOCK: v2026-LOCK-01i18n (2026-02-01)

   - Languages: th / en / zh / jp
   - Safe merge (never wipes existing keys)
   - Covers:
     • Global UI
     • Common labels / CTA (Pay pages)
     • Pay / Course
     • Membership / Black Card
     • DUETS VOL.3 poster copy keys
   ===================================================== */

(function () {
  "use strict";

  window.I18N_DICT = window.I18N_DICT || {};
  const D = window.I18N_DICT;

  D.th = D.th || {};
  D.en = D.en || {};
  D.zh = D.zh || {};
  D.jp = D.jp || {};

  // Owner-reviewed admin held queue labels. Pending images are not verified payments.
  Object.assign(D.th, {
    "admin.held_review.title": "สลิปรอตรวจ",
    "admin.held_review.navigation_label": "หมวดตรวจสลิป",
    "admin.held_review.loading": "กำลังอ่านรายการสลิปรอตรวจ…",
  });

  // MY MODEL Booking privacy entry. Same Thai fallback in the Webflow adapter.
  Object.assign(D.th, {
    "myModel.privacy.open": "ความเป็นส่วนตัว · ซ่อนจากลูกค้าบางคน",
  });

  // MY MODEL D-1 LINE reminder card. Worker transport mirrors these TH keys.
  Object.assign(D.th, {
    "myModel.reconfirm.open": "เปิด MY MODEL",
    "myModel.reconfirm.cardAlt": "เปิด MY MODEL เพื่อตรวจรายละเอียดและรับทราบงาน",
    "myModel.reconfirm.cardBody": "ตรวจรายละเอียดงาน แล้วกด “รับทราบงานแล้ว” ใน MY MODEL",
  });

   
/* Black Card — TH (add to i18n.dict.js) */
     Object.assign(D.th, {
"blackcard.eyebrow": "MMD PRIVÉ • BLACK CARD",
"blackcard.hero.h": "BLACK CARD",
"blackcard.hero.p": "สิทธิ์ระดับสูงสุดของระบบ MMD Privé — ไม่เปิดรับทั่วไป และไม่ได้ออกแบบมาเพื่อทุกคน",

"blackcard.badge.price.k": "ค่าถือครอง",
"blackcard.badge.price.v": "25,000 THB",
"blackcard.badge.term.k": "ระยะเวลา",
"blackcard.badge.term.v": "5 Years",
"blackcard.badge.tier.k": "สถานะ",
"blackcard.badge.tier.v": "SVIP",

"blackcard.cta.primary": "Proceed to Payment",
"blackcard.cta.secondary": "Request Consideration",
"blackcard.cta.back": "Back to Benefits",

"blackcard.guesthint": "สำหรับผู้สนใจ: สิทธิ์นี้ใช้ระบบพิจารณา กรุณาเริ่มจาก Premium หรือแจ้งทีมเพื่อประเมินความเหมาะสม",

"blackcard.roleline.guest": "ROLE: Guest — View only",
"blackcard.roleline.member": "ROLE: Member — Eligible for screening",
"blackcard.roleline.vip": "ROLE: VIP — Priority screening",
"blackcard.roleline.blackcard": "ROLE: Black Card — Highest tier",
"blackcard.roleline.admin": "ROLE: Admin — Review mode",

"blackcard.flow.h": "From Premium to Black Card",
"blackcard.flow.p": "Black Card ไม่ใช่ “อัปเกรด” แต่คือ “การยอมรับความสัมพันธ์” ที่เกิดจากความต่อเนื่อง ความชัดเจน และมาตรฐานการใช้บริการ",
"blackcard.flow.s1.h": "Premium (Baseline)",
"blackcard.flow.s1.p": "เข้าระบบเต็มรูปแบบ • ต่อเนื่อง • รู้จักกันจริง",
"blackcard.flow.s2.h": "Signal & Screening",
"blackcard.flow.s2.p": "ระบบดูความเหมาะสม • ความสม่ำเสมอ • มารยาทในการใช้งาน",
"blackcard.flow.s3.h": "Invitation Only",
"blackcard.flow.s3.p": "เมื่อถึงเวลาที่เหมาะสม ทีมจะติดต่อ / เปิดทางให้คุณเอง",
"blackcard.flow.note": "หมายเหตุ: Black Card อาจมีการปรับเงื่อนไขตามช่วงเวลา และอยู่ภายใต้ดุลยพินิจของผู้ก่อตั้ง",

"blackcard.benefits.h": "What You Receive",
"blackcard.benefits.p": "สิทธิ์ที่ให้ “ความต่อเนื่อง” และ “ความเร็ว” แบบสูงสุด — แต่ยังคงมาตรฐานและความปลอดภัยของระบบ",

"blackcard.b1.h": "All Telegram Access",
"blackcard.b1.p": "เข้ากลุ่มทุกระดับที่เกี่ยวข้องกับสมาชิก SVIP (ตามระบบและความเหมาะสม)",
"blackcard.b2.h": "Drive & Archive",
"blackcard.b2.p": "เข้าถึงคลังข้อมูล/อัปเดตที่ระบบเปิดให้กับระดับสูงสุดของสมาชิก",
"blackcard.b3.h": "Highest Priority",
"blackcard.b3.p": "ความสำคัญสูงสุดในการประสานงาน — แต่ยังอยู่บนกติกาและมาตรฐานเดียวกัน",

"blackcard.terms.k1": "Access status",
"blackcard.terms.v1": "SVIP",
"blackcard.terms.k2": "Period",
"blackcard.terms.v2": "5 years",
"blackcard.terms.k3": "Fee",
"blackcard.terms.v3": "25,000 THB",

"blackcard.approval.h": "Approval & Authority",
"blackcard.approval.p": "Black Card คือพื้นที่ที่เราปกป้องมาตรฐานของสมาชิกระดับสูงสุด ดังนั้นการเข้าถึงจะเกิดขึ้นเมื่อ “เหมาะสม” เท่านั้น",
"blackcard.approval.q": "ผมไม่ให้ Black Card เพราะใคร “จ่ายไหว” — ผมให้เพราะคุณ “เหมาะสม”",
"blackcard.approval.by": "— Per (Owner)",
"blackcard.approval.lock": "การชำระเงินอาจต้องผ่านการยืนยันตัวตน/เงื่อนไขของระบบ และอยู่ภายใต้ดุลยพินิจของทีม",

"blackcard.footer.note": "Note: สิทธิ์สามารถปรับตามช่วงเวลา • ระบบ • และความเหมาะสมของสมาชิก"
 });
  /* =====================================================
     GLOBAL UI
     ===================================================== */
  Object.assign(D.th, {
    "brand.owner": "Per (Owner)",
    "ui.ok": "ตกลง",
    "ui.cancel": "ยกเลิก",
    "ui.close": "ปิด",
    "ui.loading": "กำลังโหลด...",
    "ui.error": "เกิดข้อผิดพลาด",
  });

  Object.assign(D.en, {
    "brand.owner": "Per (Owner)",
    "ui.ok": "OK",
    "ui.cancel": "Cancel",
    "ui.close": "Close",
    "ui.loading": "Loading...",
    "ui.error": "Something went wrong",
  });

  Object.assign(D.zh, {
    "brand.owner": "Per（Owner）",
    "ui.ok": "确定",
    "ui.cancel": "取消",
    "ui.close": "关闭",
    "ui.loading": "加载中…",
    "ui.error": "发生错误",
  });

  Object.assign(D.jp, {
    "brand.owner": "Per（Owner）",
    "ui.ok": "OK",
    "ui.cancel": "キャンセル",
    "ui.close": "閉じる",
    "ui.loading": "読み込み中…",
    "ui.error": "エラーが発生しました",
  });

  /* =====================================================
     COMMON LABELS / CTA (ใช้ร่วมทุกหน้า pay)
     ===================================================== */
  Object.assign(D.th, {
    "label.customer": "ชื่อลูกค้า",
    "label.date": "วันที่ใช้บริการ",
    "label.model": "ชื่อนายแบบ",
    "label.service_type": "ประเภทงาน",
    "label.net_amount": "จำนวนเงินสุทธิ",

    "cta.promptpay": "ชำระโดย scan QR code",
    "cta.bank": "โอนผ่านบัญชีธนาคาร",
    "cta.card": "ชำระด้วยบัตรเครดิต ผ่าน PayPal (มีค่าดำเนินการและ service fee 4%)",
    "cta.pay_now": "ดำเนินการชำระเงิน",
  });

  Object.assign(D.en, {
    "label.customer": "Customer",
    "label.date": "Service Date",
    "label.model": "Model",
    "label.service_type": "Service Type",
    "label.net_amount": "Net Amount",

    "cta.promptpay": "Pay via QR Code",
    "cta.bank": "Bank Transfer",
    "cta.card": "Pay by Credit Card via PayPal (4% service fee)",
    "cta.pay_now": "Proceed to Payment",
  });

  Object.assign(D.zh, {
    "label.customer": "客户",
    "label.date": "服务日期",
    "label.model": "模特",
    "label.service_type": "服务类型",
    "label.net_amount": "应付金额",

    "cta.promptpay": "扫码支付",
    "cta.bank": "银行转账",
    "cta.card": "通过 PayPal 使用信用卡付款（4% 服务费）",
    "cta.pay_now": "继续付款",
  });

  Object.assign(D.jp, {
    "label.customer": "お客様名",
    "label.date": "ご利用日",
    "label.model": "モデル",
    "label.service_type": "サービス内容",
    "label.net_amount": "お支払い金額",

    "cta.promptpay": "QRコードで支払う",
    "cta.bank": "銀行振込",
    "cta.card": "PayPal経由でクレジットカード決済（手数料4%）",
    "cta.pay_now": "支払いに進む",
  });

  /* =====================================================
     PAY / COURSE (Luxury – Per voice)
     ===================================================== */
  Object.assign(D.th, {
    "pay.course.kicker": "MMD PRIVÉ · COURSE PAYMENT",
    "pay.course.title": "ชำระค่าคอร์สงาน private",
    "pay.course.subtitle": "หน้านี้ออกแบบสำหรับการชำระเงินโดยตรง เป็นความลับ และ Per เป็นคนดูแลเองทั้งหมด",

    "pay.course.section.plan": "แผนชำระ",
    "pay.course.plan.30": "มัดจำ 30%",
    "pay.course.plan.70": "ชำระก่อนเริ่มงาน 70%",
    "pay.course.plan.100": "ชำระครบ 100%",

    "pay.course.section.details": "รายละเอียดคอร์ส",
    "pay.course.section.methods": "ช่องทางชำระเงิน",
    "pay.course.section.summary": "สรุปยอดชำระ",

    "pay.course.promptpay.hint": "ระบบจะเปิด promptpay.io ตามยอดที่ต้องชำระ",

    "pay.course.bank.title": "🎗 KTB Bank",
    "pay.course.bank.th": "ธ. กรุงไทย",
    "pay.course.bank.accountName": "ชื่อบัญชี: ธัชชะ ป.",
    "pay.course.bank.accountNo": "เลขบัญชี: 1420335898",
  });

  Object.assign(D.en, {
    "pay.course.kicker": "MMD PRIVÉ · COURSE PAYMENT",
    "pay.course.title": "Private Course Payment",
    "pay.course.subtitle": "A direct, confidential payment page curated and managed by Per.",
  });

  Object.assign(D.zh, {
    "pay.course.kicker": "MMD PRIVÉ · COURSE PAYMENT",
    "pay.course.title": "私人课程付款",
    "pay.course.subtitle": "用于直接且保密的付款页面，由 Per 亲自设计与管理。",
  });

  Object.assign(D.jp, {
    "pay.course.kicker": "MMD PRIVÉ · COURSE PAYMENT",
    "pay.course.title": "プライベートコースのお支払い",
    "pay.course.subtitle": "Per が直接設計・管理する、機密性の高い決済ページです。",
  });

  /* =====================================================
     HELPERS / INTERNAL NOTES
     ===================================================== */
  Object.assign(D.th, {
    "membership.helper.blackcard":
      "Black Card เป็นสถานะการเข้าถึงแบบความสัมพันธ์ ไม่ใช่แพ็กเกจที่สามารถสมัครหรือซื้อได้โดยตรง",
    "blackcard.helper.premium":
      "คุณอยู่ในระดับ Premium หากใช้งานต่อเนื่องและเหมาะสม Per จะพิจารณาสถานะเพิ่มเติมตามดุลยพินิจ",
    "blackcard.helper.vip":
      "คุณอยู่ในกลุ่มที่ระบบให้ความสำคัญ Per จะประเมินการเข้าถึงในระดับที่เหมาะสมต่อไป",
  });

  Object.assign(D.en, {
    "blackcard.internal.note":
      "Black Card access is granted manually by owner only. Do not disclose criteria or promise eligibility.",
  });

  /* =====================================================
     MEMBERSHIP / BLACK CARD (Structure page)
     ===================================================== */
  Object.assign(D.th, {
    "membership.title": "โครงสร้างสมาชิก",
    "membership.subtitle": "เลือกการเข้าถึงที่เหมาะกับคุณ",
    "membership.helper": "หน้านี้เป็นข้อมูลแพ็กเกจ ไม่ใช่หน้าชำระเงิน",

    "pkg.7days.title": "7 Days Guest Pass",
    "pkg.7days.desc": "ทดลองระบบและบรรยากาศ ไม่ถือเป็นสถานะสมาชิก",
    "pkg.7days.desc.m": "ทดลองระบบ · 7 วัน",

    "pkg.standard.title": "Standard",
    "pkg.standard.desc": "เริ่มใช้งานอย่างเป็นระบบ เหมาะสำหรับการใช้งานทั่วไป",
    "pkg.standard.desc.m": "เริ่มใช้งาน",

    "pkg.premium.title": "Premium",
    "pkg.premium.desc": "สำหรับผู้ใช้งานต่อเนื่อง ลำดับความสำคัญสูงขึ้น",
    "pkg.premium.desc.m": "ใช้งานต่อเนื่อง",

    "cta.manage": "จัดการสถานะสมาชิก",

    "black.title": "Black Card",
    "black.subtitle": "ไม่ใช่ทุกคนจะเข้าถึงได้",
    "black.statement": "Black Card ไม่ได้เปิดให้สมัครทั่วไป และไม่รับประกันการอนุมัติ",
    "black.statement.m": "Invite-only · Subject to review",
    "black.cta": "เข้าสู่ขั้นตอนการพิจารณา",
  });

  Object.assign(D.en, {
    "membership.title": "Membership Structure",
    "membership.subtitle": "Choose the level that fits your usage",
    "membership.helper": "This page explains packages. It is not a payment page.",

    "pkg.7days.title": "7 Days Guest Pass",
    "pkg.7days.desc": "Try the system. Not a membership.",
    "pkg.7days.desc.m": "7-day trial",

    "pkg.standard.title": "Standard",
    "pkg.standard.desc": "A structured starting point.",
    "pkg.standard.desc.m": "Getting started",

    "pkg.premium.title": "Premium",
    "pkg.premium.desc": "Designed for ongoing use with higher priority.",
    "pkg.premium.desc.m": "Ongoing use",

    "cta.manage": "Manage membership status",

    "black.title": "Black Card",
    "black.subtitle": "Access is considered",
    "black.statement": "Black Card is invite-only and subject to review.",
    "black.statement.m": "Invite-only",
    "black.cta": "Proceed to consideration",
  });

  Object.assign(D.zh, {
    "membership.title": "会员结构",
    "membership.subtitle": "选择适合您的访问级别",
    "membership.helper": "本页面为方案说明，并非付款页面。",

    "pkg.7days.title": "7 天体验",
    "pkg.7days.desc": "体验系统，不属于正式会员。",
    "pkg.7days.desc.m": "7 天体验",

    "pkg.standard.title": "Standard",
    "pkg.standard.desc": "系统化的入门选择。",
    "pkg.standard.desc.m": "入门",

    "pkg.premium.title": "Premium",
    "pkg.premium.desc": "适合持续使用，优先级更高。",
    "pkg.premium.desc.m": "持续使用",

    "cta.manage": "管理会员状态",

    "black.title": "Black Card",
    "black.subtitle": "仅限受邀",
    "black.statement": "Black Card 需审核，不保证通过。",
    "black.statement.m": "仅限受邀",
    "black.cta": "进入审核流程",
  });

  Object.assign(D.jp, {
    "membership.title": "メンバーシップ構成",
    "membership.subtitle": "利用に合ったアクセスを選択",
    "membership.helper": "このページはプラン説明であり、決済ページではありません。",

    "pkg.7days.title": "7日ゲストパス",
    "pkg.7days.desc": "システム体験（正式メンバーシップではありません）。",
    "pkg.7days.desc.m": "7日トライアル",

    "pkg.standard.title": "Standard",
    "pkg.standard.desc": "整った導入プラン。",
    "pkg.standard.desc.m": "はじめる",

    "pkg.premium.title": "Premium",
    "pkg.premium.desc": "継続利用向け（優先度が上がります）。",
    "pkg.premium.desc.m": "継続利用",

    "cta.manage": "メンバー状況を管理",

    "black.title": "Black Card",
    "black.subtitle": "誰でも入れるわけではありません",
    "black.statement": "Black Card は招待制で、審査があり承認を保証しません。",
    "black.statement.m": "招待制 · 審査あり",
    "black.cta": "審査に進む",
  });

  /* =====================================================
     DUETS VOL.3 (Poster / package copy)
     ===================================================== */
  Object.assign(D.th, {
    "duets.slogan": "Discreet by design, Elegant by choice.",
    "duets.package": "PACKAGE MMD DUETS VOL.3",
    "duets.dated": "ลงวันที่",
    "duets.credit1": "บทภาพยนตร์เรื่องสั้นโดย เปอร์",
    "duets.credit2": "กำกับภาพโดย เปอร์",
    "duets.pill.proven": "พิสูจน์มาแล้วกับตา · 2 ครั้ง",

    "duets.why.title": "คู่นี้ดียังไง ?",
    "duets.why.p1":
      "เปอร์มองว่ามันคือเคมีที่เข้า ต้องบอกอย่างนี้ก่อน คือเราดูไม่ออกเลยว่านิสัยจริงๆใครเป็นยังไง ใน Trust Me เปอร์ถึงบอกว่าอย่าเชื่อในสิ่งที่เห็นแค่เปลือก ให้เชื่อรีวิวที่เกิดขึ้นจริง หรือเชื่อที่เปอร์บอกดีที่สุด",
    "duets.why.p2":
      "บอกเลยว่างานนี้ เห็น Kenji จะดูเหมือนเจ้าชู้ คุมเกม แต่ไม่ใช่เลย TarT ต่างหากที่ร้ายที่สุด คุณเชื่อเปอร์ไหมล่ะ​?",

    "duets.tier.kenji": "VIP — EMs11-Kenji",
    "duets.tier.tart": "Standard — Tar T",

    "duets.quote.kenji":
      "“ผมรู้ตัวว่าชอบอะไรไม่ชอบอะไร กลัวจะเจ็บอีกไหมก็กลัว แต่ถ้าใช่ก็ไม่อายที่จะแสดงความรู้สึกออกไป ถ้ามีโอกาส เข้าหาแบบไม่ลังเลแน่นอนครับ”",
    "duets.quote.tart":
      "“ผมเคยสดใสกว่านี้… ผมเห็นกับตาตัวเองเลย สายตาของเขามุ่งมั่นแน่วแน่ เหงื่อทุกหยดทุ่มเท ไม่มีถอย”",

    "duets.key.small1": "สมัครสมาชิกไพรเวท MMD Privé",
    "duets.key.small2": "ดูรูปเต็มๆ · ในกลุ่ม Telegram Premium",
    "duets.key.small3": "Story-driven duo scenes — unseen.",
  });

  Object.assign(D.en, {
    "duets.slogan": "Discreet by design, Elegant by choice.",
    "duets.package": "PACKAGE MMD DUETS VOL.3",
    "duets.dated": "Dated",
    "duets.credit1": "Short film screenplay by Per",
    "duets.credit2": "Cinematography by Per",
    "duets.pill.proven": "Proven · 2 times",

    "duets.why.title": "Why this couple?",
    "duets.why.p1":
      "For me, it’s chemistry. You can’t tell who someone is from the surface. In Trust Me, I always say: don’t believe what you see—believe what’s proven, and believe what I tell you.",
    "duets.why.p2":
      "You may think Kenji is a flirt who controls the game—but he isn’t. Tart is the most dangerous one. Do you trust me?",

    "duets.tier.kenji": "VIP — EMs11-Kenji",
    "duets.tier.tart": "Standard — Tar T",

    "duets.quote.kenji":
      "“I know what I like and what I don’t. I’m scared of getting hurt again—sure. But if it’s right, I’m not ashamed to show it. If I get the chance, I’ll go in without hesitation.”",
    "duets.quote.tart":
      "“I used to be brighter than this… I saw it with my own eyes—his gaze was unwavering. Every drop of sweat was a choice. No backing down.”",

    "duets.key.small1": "Apply for MMD Privé Private Membership",
    "duets.key.small2": "See the full set · Telegram Premium group",
    "duets.key.small3": "Story-driven duo scenes — unseen.",
  });

  Object.assign(D.zh, {
    "duets.slogan": "Discreet by design, Elegant by choice.",
    "duets.package": "PACKAGE MMD DUETS VOL.3",
    "duets.dated": "日期",
    "duets.credit1": "短片剧本：Per",
    "duets.credit2": "摄影：Per",
    "duets.pill.proven": "亲眼见证 · 2 次",

    "duets.why.title": "为什么是这对？",
    "duets.why.p1":
      "在我看来，这是化学反应。光看表面，你永远猜不出一个人的真实。Trust Me 里我一直说：别信你看到的外壳，要信真实发生过的评价，或直接信我。",
    "duets.why.p2":
      "你可能以为 Kenji 花心、很会控场——但不是。最危险的其实是 Tart。你信我吗？",

    "duets.tier.kenji": "VIP — EMs11-Kenji",
    "duets.tier.tart": "Standard — Tar T",

    "duets.quote.kenji":
      "“我很清楚自己喜欢什么、不喜欢什么。怕不怕再受伤？当然怕。但如果是对的，我不怕表达。只要有机会，我一定会毫不犹豫地靠近。”",
    "duets.quote.tart":
      "“我以前比现在更阳光… 但我亲眼看到，他的眼神坚定到不可动摇。每一滴汗都是全力以赴，从不退缩。”",

    "duets.key.small1": "申请加入 MMD Privé 私密会员",
    "duets.key.small2": "查看完整照片 · Telegram Premium 群组",
    "duets.key.small3": "故事驱动的双人场景——未公开。",
  });

  Object.assign(D.jp, {
    "duets.slogan": "Discreet by design, Elegant by choice.",
    "duets.package": "PACKAGE MMD DUETS VOL.3",
    "duets.dated": "日付",
    "duets.credit1": "短編脚本：Per",
    "duets.credit2": "撮影：Per",
    "duets.pill.proven": "この目で見た · 2回",

    "duets.why.title": "Why this couple?",
    "duets.why.p1":
      "私にとっては“相性”です。表面だけでは本当の性格は分からない。Trust Me でも言ってる—見えるものだけを信じないで。実際に起きたレビューか、私の言葉を信じて。",
    "duets.why.p2":
      "Kenji が遊び人で主導権を握るタイプに見えるかもしれない。でも違う。危ないのは Tart のほう。私を信じる？",

    "duets.tier.kenji": "VIP — EMs11-Kenji",
    "duets.tier.tart": "Standard — Tar T",

    "duets.quote.kenji":
      "“好き嫌いは自分で分かってる。もう傷つきたくないって怖さもある。でも、正しい相手なら気持ちは隠さない。チャンスがあるなら迷わず近づく。”",
    "duets.quote.tart":
      "“前はもっと明るかった…でもこの目で見た。彼の視線は揺るがなかった。汗の一滴一滴が覚悟で、引かなかった。”",

    "duets.key.small1": "MMD Privé プライベート会員にสมัคร",
    "duets.key.small2": "全写真を見る · Telegram Premium グループ",
    "duets.key.small3": "物語主導のデュオシーン—未公開。",
  });
  // Personal Friend Referral LV15 — consent-first, model-to-model copy.
  Object.assign(D.th, {
    "partner.recommend.skip": "ข้ามไปเนื้อหา",
    "partner.recommend.loading": "กำลังเตรียมหน้า",
    "partner.recommend.imageFallback": "ภาพโหลดไม่สำเร็จ เนื้อหาและปุ่มยังใช้งานได้ครับ",
    "partner.recommend.hero.title": "แนะนำเพื่อน",
    "partner.recommend.hero.accent": "ให้ MMD รู้จัก",
    "partner.recommend.hero.body": "สำหรับนายแบบที่อยากแนะนำเพื่อนให้ MMD รู้จัก ถ้าเจ้าตัวรับรู้และโอเค ส่งข้อมูลสั้น ๆ มาเริ่มคุยกันได้เลยครับ",
    "partner.recommend.send": "ส่งข้อมูลให้ MMD",
    "partner.recommend.seeSteps": "ดู 3 ขั้นตอน",
    "partner.recommend.reassurance": "เจ้าตัวรับรู้ก่อน · เลือกวิธีติดต่อได้",
    "partner.recommend.steps.title": "เริ่มง่าย ๆ ใน 3 ขั้นตอน",
    "partner.recommend.step1.label": "คุยกับเพื่อน",
    "partner.recommend.step2.label": "เตรียมข้อมูล",
    "partner.recommend.step3.label": "เลือกวิธีคุย",
    "partner.recommend.step1.title": "ให้เพื่อนรับรู้ก่อน",
    "partner.recommend.step1.body": "บอกเพื่อนว่าคุณอยากแนะนำให้ MMD รู้จัก แล้วตกลงกันว่าจะส่งข้อมูลส่วนไหนครับ",
    "partner.recommend.step2.title": "เริ่มจากข้อมูลสั้น ๆ",
    "partner.recommend.step2.body": "ชื่อเล่น รูปปัจจุบันหรือโปรไฟล์สาธารณะ ความสัมพันธ์ของคุณกับเพื่อน และวิธีติดต่อที่เจ้าตัวสะดวกครับ",
    "partner.recommend.step3.title": "เลือกวิธีติดต่อที่สบายใจ",
    "partner.recommend.step3.body": "ให้ MMD คุยผ่านคุณก่อน หรือติดต่อเจ้าตัวโดยตรงตามที่ตกลงกันไว้ได้ครับ",
    "partner.recommend.faq.title": "ก่อนส่งข้อมูล",
    "partner.recommend.faq.after.title": "หลังส่งแล้วเกิดอะไรขึ้น?",
    "partner.recommend.faq.after.body": "MMD จะดูข้อมูลเบื้องต้นและติดต่อกลับ เพื่อบอกว่าขั้นถัดไปควรคุยผ่านคุณหรือคุยกับเจ้าตัวโดยตรงครับ",
    "partner.recommend.faq.care.title": "ข้อมูลได้รับการดูแลอย่างไร?",
    "partner.recommend.faq.care.body": "เจ้าตัวเลือกข้อมูลที่เปิดเผย วิธีติดต่อ และจังหวะการคุยได้ MMD ดูข้อมูลเท่าที่จำเป็นต่อการพิจารณาและประสานงานครับ",
    "partner.recommend.faq.work.title": "คุยเรื่องงานและเงื่อนไขเมื่อไร?",
    "partner.recommend.faq.work.body": "เมื่อมีงานที่เหมาะ MMD จะสรุปบทบาท ขอบเขต และเงื่อนไขให้ผู้เกี่ยวข้องเข้าใจก่อนเริ่มงานครับ",
    "partner.recommend.agency.title": "ดูแลนายแบบในฐานะโมเดลลิ่ง?",
    "partner.recommend.agency.body": "คุยเรื่องรายชื่อ เรท งาน และข้อตกลง ผ่านเส้นทางสำหรับผู้จัดการหรือเอเจนซีครับ",
    "partner.recommend.agency.cta": "ไปหน้าโมเดลลิ่ง",
    "partner.recommend.dock.label": "พร้อมแนะนำเพื่อน?",
    "partner.recommend.partnerHome": "หน้า Partner",
    "partner.recommend.steps.label": "ขั้นตอนแนะนำเพื่อน"
});

  // Partner introduction LV15 — audience, MMD reference rates, and local LINE draft.
  Object.assign(D.th, {
    "partner.referral.skip": "ข้ามไปดูเรท",
    "partner.referral.loading": "กำลังเตรียมหน้า",
    "partner.referral.partnerHome": "หน้า Partner",
    "partner.referral.menu.label": "เมนู Partner",
    "partner.referral.menu.pages": "หน้าอื่นของ Partner",
    "partner.referral.menu.fee": "ค่าแนะนำ",
    "partner.referral.imageFallback": "ภาพโหลดไม่สำเร็จ เนื้อหาและปุ่มยังใช้งานได้ครับ",
    "partner.referral.hero.audience": "ผู้แนะนำ · ผู้ดูแล · โมเดลลิ่ง",
    "partner.referral.hero.title": "แนะนำนายแบบ",
    "partner.referral.hero.accent": "คุยเรทกับเปอร์ให้ชัด",
    "partner.referral.hero.body": "ขอให้เจ้าตัวรับรู้ก่อน แล้วบอกว่าพี่เป็นผู้แนะนำหรือผู้ดูแล เราคุยหน้าที่และเรทให้ตรงกันก่อนเริ่มครับ",
    "partner.referral.send": "ส่งข้อมูลให้เปอร์",
    "partner.referral.seeRates": "ดูเรท",
    "partner.referral.hero.reassurance": "เจ้าตัวยินยอม · ตกลงบทบาทก่อนเริ่ม",
    "partner.referral.rates.reference": "เรทอ้างอิง MMD",
    "partner.referral.rates.title": "ค่าตอบแทนสำหรับผู้แนะนำ",
    "partner.referral.rates.direction": "ค่าแนะนำครั้งเดียวหรือ Bridge ที่ MMD ตกลงจ่ายแยกให้ผู้แนะนำหรือผู้ดูแล",
    "partner.referral.rates.caption": "ค่าตอบแทนอ้างอิงสำหรับผู้แนะนำ แยกตาม Tier และรูปแบบความร่วมมือ",
    "partner.referral.rates.contactHeader": "ค่าแนะนำครั้งเดียว",
    "partner.referral.rates.bridgeHeader": "ประสานต่อ",
    "partner.referral.rates.individual": "ตกลงรายคน",
    "partner.referral.rates.orIndividual": "หรือรายคน",
    "partner.referral.rates.note": "เปอร์จะยืนยันเรทจริง ฐานคำนวณ หน้าที่ และจำนวนงานหรือช่วงเวลาที่ครอบคลุมไว้ใน Agreement / MY Partner ก่อนเริ่มครับ",
    "partner.referral.rates.fullLink": "ดูเรทตามบทบาทและเงื่อนไข",
    "partner.referral.methods.title": "วิธีตกลงค่าตอบแทน",
    "partner.referral.methods.label": "รูปแบบค่าตอบแทน",
    "partner.referral.methods.bridge.tab": "ประสานต่อ",
    "partner.referral.methods.contact.tab": "เปิดคอนแทค",
    "partner.referral.methods.contact.sub": "ครั้งเดียว",
    "partner.referral.methods.copartner.tab": "ราคารวม",
    "partner.referral.methods.profit.tab": "แบ่งกำไร",
    "partner.referral.methods.bridge.title": "ประสานงานต่อในบทบาทที่ตกลง",
    "partner.referral.methods.bridge.body": "ช่วยดูบรีฟ คิว และการเปลี่ยนแปลงตามหน้าที่ที่รับไว้ ยืนยันเปอร์เซ็นต์ ฐานคำนวณ และช่วงงานก่อนเริ่ม จ่ายเมื่องานและการชำระเงินครบเงื่อนไขครับ",
    "partner.referral.methods.contact.title": "เปิดคอนแทคที่เจ้าตัวอนุญาต",
    "partner.referral.methods.contact.body": "เหมาะกับการแนะนำครั้งเดียว เมื่อเจ้าตัวอนุญาตให้ติดต่อและตรวจคอนแทคตรงกันแล้ว MMD จ่ายค่าแนะนำครั้งเดียวตามที่ตกลงไว้ครับ",
    "partner.referral.methods.copartner.title": "ราคารวมต้องคุยโครงสร้างก่อน",
    "partner.referral.methods.copartner.body": "หากจะเสนอราคา Model + Partner ขอคุยค่าตัว ส่วนของผู้ดูแล หน้าที่ และราคาที่ลูกค้าจะจ่ายจริงก่อน เปอร์จะพิจารณาตามขอบเขตงานและบริการ แล้วตกลงเป็นรายดีลครับ",
    "partner.referral.methods.profit.title": "แบ่งกำไรตามข้อตกลงของโครงการ",
    "partner.referral.methods.profit.body": "ตกลงรายได้ ต้นทุนที่นับรวม และสัดส่วนแบ่งกำไรก่อนเริ่มแต่ละโครงการ จ่ายเมื่องานและยอดรับครบตามข้อตกลงครับ",
    "partner.referral.methods.pricing": "สำหรับการดูแลต่อเนื่อง เปอร์อยากเริ่มคุยจากส่วนแบ่งเป็นเปอร์เซ็นต์ตามหน้าที่ ให้ราคาเป็นธรรม ขายได้จริง และมีโอกาสร่วมงานกันระยะยาวครับ",
    "partner.referral.pricing.title": "ราคาต้องขายได้ และเป็นธรรมกับทุกฝ่าย",
    "partner.referral.pricing.intro": "ผมขอคุยเรื่องราคาให้ตรงกันก่อนครับ การบวกส่วนของตัวเองเข้าไปในเรทโมเดล แล้วส่งยอดรวมมาให้เอเจนซีขายต่อ โดยไม่คุยโครงสร้างราคาและเงื่อนไขที่เสนอผ่านช่องทางอื่น เป็นการผลักภาระเรื่องราคาและความเชื่อมั่นมาให้เอเจนซี",
    "partner.referral.pricing.investment": "MMD ลงทุนสูงทั้งการหาลูกค้าที่มีกำลังจ่าย การประสานงาน และการดูแลประสบการณ์ของลูกค้า เพื่อสร้างโอกาสให้นายแบบและ Partner เข้าถึงงานที่มีมูลค่าสูงขึ้น ราคาจึงต้องเผื่อให้ทุกฝ่ายทำหน้าที่ของตัวเองได้อย่างเหมาะสม",
    "partner.referral.pricing.channels": "ถ้านายแบบคนเดียวกันถูกเสนอหลายช่องทาง แล้วลูกค้าพบราคาที่ต่ำกว่ามากในงานที่มีขอบเขตและเงื่อนไขใกล้เคียงกัน ลูกค้าย่อมตั้งคำถามกับ MMD เราต้องอธิบายได้ว่าราคาต่างกันเพราะอะไรและลูกค้าได้รับคุณค่าเพิ่มตรงไหน",
    "partner.referral.pricing.trust": "เมื่อราคาถูกบวกซ้อนหลายชั้นจนยอดที่ลูกค้าจ่ายห่างจากยอดที่นายแบบได้รับมาก โดยไม่มีหน้าที่หรือบริการรองรับ ความรู้สึกของทั้งลูกค้าและนายแบบย่อมได้รับผลกระทบ ความเชื่อมั่นที่เสียไปอาจทำให้ทุกฝ่ายเสียโอกาสระยะยาว",
    "partner.referral.pricing.percentage": "ผมจึงอยากเริ่มจากการตกลงแบ่งเปอร์เซ็นต์ตามหน้าที่และฐานคำนวณที่ชัดเจน ส่วนของ Partner ต่อหนึ่งงานอาจลดลง เพื่อให้ราคาเหมาะสมและเพิ่มโอกาสให้นายแบบได้งานต่อเนื่องมากขึ้นครับ",
    "partner.referral.pricing.partnership": "การติดต่อโมเดล ผมทำเองได้ แต่ผมเลือกทำงานกับ Partner เพื่อแบ่งหน้าที่อย่างมืออาชีพ และใช้เวลากับการหาลูกค้าและดูแลลูกค้าให้ดี การร่วมงานกันจึงต้องเคารพต้นทุนและหน้าที่ของกันและกัน ตั้งราคาที่ขายได้จริง และไม่เอากำไรของฝ่ายเดียวเป็นตัวตั้งจนลูกค้า นายแบบ และเอเจนซีต้องเสียประโยชน์",
    "partner.referral.methods.partnerNote": "ถ้ารับหน้าที่ประสานต่อ ให้ใช้ MY Partner เพื่อยืนยันข้อตกลงและติดตามงาน",
    "partner.referral.methods.partnerLink": "เปิด MY Partner",
    "partner.referral.faq.title": "คุยให้เข้าใจก่อนเริ่ม",
    "partner.referral.faq.types.title": "Partner 4 ประเภทของหน้านี้",
    "partner.referral.faq.types.managementTitle": "Management Partner",
    "partner.referral.faq.types.management": "ผู้ดูแลนายแบบจริง ประสานบรีฟ คิว คุณภาพ และความพร้อม",
    "partner.referral.faq.types.contactTitle": "Contact Provider",
    "partner.referral.faq.types.contact": "ผู้เชื่อมคอนแทคที่เจ้าตัวอนุญาตให้ติดต่อ",
    "partner.referral.faq.types.personalTitle": "Personal Referral",
    "partner.referral.faq.types.personal": "ผู้แนะนำเพื่อนหรือคนรู้จักเป็นการส่วนตัว",
    "partner.referral.faq.types.highProfileTitle": "High-profile Referral",
    "partner.referral.faq.types.highProfile": "เคสที่ต้องดูแลชื่อเสียง ข้อมูล และความเป็นส่วนตัวเป็นพิเศษ",
    "partner.referral.faq.types.distinction": "ประเภท Partner บอกความสัมพันธ์และลักษณะการดูแล ส่วนค่าตอบแทนให้ตกลงตามหน้าที่ของแต่ละดีลครับ",
    "partner.referral.faq.money.title": "เรทโมเดล ค่าแนะนำ และ Agency Fee",
    "partner.referral.faq.money.modelTitle": "เรทโมเดล / ราคา Model + Partner",
    "partner.referral.faq.money.modelBody": "เรทโมเดลคือราคางานของนายแบบ หากรวมส่วนของผู้ดูแลมาแล้ว ขอคุยส่วนที่รวมอยู่ หน้าที่ และขอบเขตงานกับเปอร์ก่อนยืนยันราคาเป็นรายดีลครับ",
    "partner.referral.faq.money.referrerTitle": "ค่าตอบแทนผู้แนะนำ",
    "partner.referral.faq.money.referrerBody": "ค่าแนะนำครั้งเดียวหรือ Bridge ตามข้อตกลง แยกให้ชัดจากส่วนผู้ดูแลที่รวมอยู่ในราคา Co-Partner แล้ว เพื่อไม่คิดค่าตอบแทนหน้าที่เดียวกันซ้ำครับ",
    "partner.referral.faq.money.mmdTitle": "Agency Fee ของ MMD",
    "partner.referral.faq.money.mmdBody": "ในดีลที่ราคา Model + Partner รวมส่วนของผู้ดูแลแล้ว Agency Fee ที่ตกลงสำหรับ MMD เป็นส่วนที่ MMD เก็บไว้ ไม่ต้องนำมาแบ่ง Partner อีกครับ",
    "partner.referral.faq.roles.title": "ผู้แนะนำมาจากบทบาทไหนได้บ้าง?",
    "partner.referral.role.model": "นายแบบแนะนำนายแบบ",
    "partner.referral.role.model.body": "ขออนุญาตเพื่อน เชื่อมคุย และติดตามบรีฟตามที่รับปาก",
    "partner.referral.role.client": "ลูกค้าแนะนำนายแบบ",
    "partner.referral.role.client.body": "แจ้งความสัมพันธ์และความยินยอม แยกบทบาทประสานออกจากการจ้าง โดย MMD พิจารณาการร่วมงาน",
    "partner.referral.role.friend": "เพื่อนแนะนำเพื่อน",
    "partner.referral.role.friend.body": "เชื่อมคุยและช่วยตอบคำถาม โดยให้เพื่อนตัดสินใจได้อย่างสบายใจ",
    "partner.referral.role.acquaintance": "คนรู้จักทั่วไป",
    "partner.referral.role.acquaintance.body": "ยืนยันที่มาคอนแทคและช่วยประสานตามที่ตกลง",
    "partner.referral.role.scout": "Talent Scout อิสระ",
    "partner.referral.role.scout.body": "คัดข้อมูล ความพร้อม และคิว ก่อนส่งให้ MMD พิจารณา",
    "partner.referral.role.manager": "ผู้ดูแลนายแบบรายบุคคล",
    "partner.referral.role.manager.body": "ประสานนายแบบ บรีฟ คิว การเปลี่ยนแปลง และการปิดงาน",
    "partner.referral.role.agency": "โมเดลลิ่ง / เอเจนซี",
    "partner.referral.role.agency.body": "ยืนยันสิทธิ์ตัวแทน ราคา หน้าที่ประสาน และขอบเขตการเข้าถึงข้อมูลของแต่ละคน",
    "partner.referral.faq.friend.title": "ถ้าเป็นเพื่อนแนะนำเพื่อนล่ะ?",
    "partner.referral.faq.friend.body": "เลือกช่วยโดยไม่รับค่าตอบแทน ค่าแนะนำครั้งเดียว หรือ Bridge สำหรับสามงานแรกที่เข้าเงื่อนไขได้ โดยคุยและตกลงก่อนงานแรกครับ",
    "partner.referral.faq.friend.link": "ถ้าเป็นนายแบบที่จะแนะนำเพื่อน อ่านทางนี้",
    "partner.referral.faq.jobs.title": "Public / Private ต่างจาก Tier อย่างไร?",
    "partner.referral.faq.jobs.body": "Public และ Private คือประเภทงาน ส่วน Standard, Premium, GWs, EMs และ Secretive คือ Tier ของนายแบบ ทั้งสองเรื่องกำหนดแยกกันครับ",
    "partner.referral.faq.exclusive.title": "Exclusive หมายถึงการดูแลแบบไหน?",
    "partner.referral.faq.exclusive.body": "เป็นการดูแลข้อมูลและการประสานงานอย่างเป็นความลับ โดยเฉพาะ GWs และ EMs นายแบบยังเลือกทำงานที่อื่นได้ตามความสมัครใจครับ",
    "partner.referral.faq.consent.title": "ใครประสานงานและดูแลข้อมูล?",
    "partner.referral.faq.consent.body": "เปอร์เป็นผู้ดูแลและประสานงานหลักของ MMD ขอให้เจ้าตัวยินยอมก่อนส่งข้อมูล และส่งเฉพาะส่วนที่อนุญาตให้คุยต่อครับ",
    "partner.referral.faq.payment.title": "ยืนยันเรทและรับค่าตอบแทนเมื่อไร?",
    "partner.referral.faq.payment.body": "ให้เปอร์ยืนยันเรทจริง ฐานคำนวณ หน้าที่ และช่วงงานใน Agreement / MY Partner ก่อนเริ่ม จ่ายเมื่อเงื่อนไขของรูปแบบนั้นครบถ้วนครับ",
    "partner.referral.faq.payment.link": "อ่าน Partner Terms",
    "partner.referral.routes.label": "เลือกหน้าตามบทบาทของพี่",
    "partner.referral.routes.personal.title": "นายแบบแนะนำเพื่อน",
    "partner.referral.routes.personal.body": "เส้นทางแนะนำเพื่อนแบบส่วนตัว",
    "partner.referral.routes.fee.title": "ผู้แนะนำทุกบทบาท",
    "partner.referral.routes.fee.body": "ดูตารางค่าแนะนำและเงื่อนไข",
    "partner.referral.routes.manager.title": "โมเดลลิ่ง / ผู้จัดการ",
    "partner.referral.routes.manager.body": "ภาพรวมการดูแลนายแบบหลายคน",
    "partner.referral.routes.terms.title": "พร้อมตกลงหน้าที่",
    "partner.referral.routes.terms.body": "อ่านเงื่อนไขก่อนร่วมงาน",
    "partner.referral.compose.title": "เตรียมข้อความคุยกับเปอร์",
    "partner.referral.compose.summary": "กรอกสั้น ๆ แล้วนำข้อความไปส่งใน LINE",
    "partner.referral.compose.intro": "หน้านี้ช่วยเตรียมข้อความให้พี่คัดลอก จากนั้นเปิด LINE วางข้อความ และกดส่งให้เปอร์ด้วยตัวเองครับ",
    "partner.referral.compose.fallback": "คุยกับเปอร์ผ่าน LINE ได้เลยครับ",
    "partner.referral.openLine": "เปิด LINE",
    "partner.referral.form.label": "ข้อมูลสำหรับเตรียมข้อความแนะนำนายแบบ",
    "partner.referral.form.legend": "ข้อมูลเบื้องต้นและความยินยอม",
    "partner.referral.form.role": "บทบาทของพี่",
    "partner.referral.form.role.choose": "เลือกบทบาท",
    "partner.referral.form.tier": "Tier ที่อยากคุย",
    "partner.referral.form.tier.choose": "เลือก Tier",
    "partner.referral.form.unsure": "ยังไม่แน่ใจ ให้เปอร์ช่วยดู",
    "partner.referral.form.method": "รูปแบบที่อยากคุย",
    "partner.referral.form.method.choose": "เลือกรูปแบบ",
    "partner.referral.form.method.bridge": "Bridge — ประสานต่อ",
    "partner.referral.form.method.contact": "เปิดคอนแทคครั้งเดียว",
    "partner.referral.form.method.copartner": "Co-Partner — ราคารวม",
    "partner.referral.form.method.profit": "Profit Share — แบ่งกำไร",
    "partner.referral.form.job": "ประเภทงานที่อยากคุย",
    "partner.referral.form.brief": "รายละเอียดสั้น ๆ",
    "partner.referral.form.brief.placeholder": "เล่าความสัมพันธ์กับนายแบบ ความพร้อม และสิ่งที่อยากคุยกับเปอร์",
    "partner.referral.form.brief.hint": "ส่งเฉพาะข้อมูลที่เจ้าตัวอนุญาต ความยาวไม่เกิน 1,500 ตัวอักษร",
    "partner.referral.form.consent": "เจ้าตัวรับรู้และอนุญาตให้ส่งข้อมูลเพื่อเชื่อมคุยกับ MMD แล้ว",
    "partner.referral.form.prepare": "เตรียมข้อความ",
    "partner.referral.form.draft": "ข้อความสำหรับส่งให้เปอร์",
    "partner.referral.form.copy": "คัดลอกข้อความ",
    "partner.referral.footer.menu": "เมนูท้ายหน้า Partner",
    "partner.referral.dock.label": "มีคนที่อยากแนะนำ?",
    "partner.referral.form.changed": "ข้อมูลเปลี่ยนแล้ว กดเตรียมข้อความอีกครั้งก่อนส่งครับ",
    "partner.referral.form.required": "เลือกข้อมูลที่จำเป็น เติมรายละเอียดสั้น ๆ และยืนยันว่าเจ้าตัวอนุญาตก่อนครับ",
    "partner.referral.message.title": "สวัสดีครับเปอร์ ขอคุยเรื่องแนะนำนายแบบให้ MMD",
    "partner.referral.message.role": "ผู้แนะนำ",
    "partner.referral.message.tier": "Tier นายแบบ",
    "partner.referral.message.method": "รูปแบบที่อยากคุย",
    "partner.referral.message.work": "ประเภทงาน",
    "partner.referral.message.consent": "เจ้าตัวรับรู้และอนุญาตให้เชื่อมคุยแล้ว",
    "partner.referral.message.agreement": "ขอคุยเรท หน้าที่ และเงื่อนไขกับเปอร์ให้ชัดก่อนเริ่มครับ",
    "partner.referral.form.ready": "ข้อความพร้อมแล้ว คัดลอก เปิด LINE แล้ววางและกดส่งด้วยตัวเองครับ",
    "partner.referral.form.copied": "คัดลอกแล้ว เปิด LINE วางข้อความ แล้วกดส่งได้เลยครับ",
    "partner.referral.form.copyFallback": "คัดลอกไม่สำเร็จ เลือกข้อความด้านบนแล้วคัดลอกด้วยตัวเอง จากนั้นเปิด LINE ครับ"
});
})();


;

/* SOURCE: pages/mms.js */
/* MMS landing + member pre-booking copy — canonical i18n extension */
(function(){
  "use strict";
  window.I18N_DICT=window.I18N_DICT||{};
  const D=window.I18N_DICT;
  D.th=D.th||{}; D.en=D.en||{}; D.zh=D.zh||{};

  Object.assign(D.th,{
    "mms.cta.prebook":"เริ่ม Pre-booking",
    "mms.cta.line":"คุยกับ MMS ทาง LINE",
    "mms.cta.therapists":"ดูรายชื่อ Male Therapists",
    "mms.booking.kicker":"MMS · PRE-BOOKING",
    "mms.booking.title":"เลือกสิ่งที่ต้องการ ที่เหลือให้ MMS ประสาน",
    "mms.booking.lead":"เลือกบริการ วัน เวลา พื้นที่ และ Therapist ที่สนใจได้ในคำขอเดียว ที่เหลือ MMS จะเช็ก Skill คิว และรายละเอียดที่จำเป็นก่อนตอบยืนยันครับ",
    "mms.booking.member_gate":"หน้านี้ใช้ข้อมูล Member ที่ยืนยันแล้วเพื่อแสดง Therapist และส่ง Pre-booking โดยไม่ขอให้กรอกข้อมูลตัวตนซ้ำใน browser",
    "mms.booking.service.title":"วันนี้อยากให้ช่วยเรื่องไหน",
    "mms.booking.service.helper":"เลือกได้ 1–6 รายการ ระบบจะใช้ Skill เหล่านี้ในการกรอง Therapist ที่ตรงกับคำขอเบื้องต้น",
    "mms.booking.when.title":"วัน เวลา และพื้นที่",
    "mms.booking.match.title":"Therapist ที่ตรงกับคำขอเบื้องต้น",
    "mms.booking.match.helper":"รายชื่อมาจากข้อมูล Therapist จริงใน MMS และกรองจากเงื่อนไขที่เลือก แต่คิวจริงยังต้องให้ MMS ตรวจอีกครั้งครับ",
    "mms.booking.match.cta":"เช็ก Therapist ที่เหมาะ",
    "mms.booking.review.title":"ตรวจรายละเอียดก่อนส่ง",
    "mms.booking.consent":"ผมเข้าใจว่านี่คือ Pre-booking request และยังไม่ใช่การยืนยัน Therapist เวลา สถานที่ หรือยอด จนกว่า MMS จะประสานและตอบกลับครับ",
    "mms.booking.submit":"ส่ง Pre-booking",
    "mms.booking.success.title":"MMS ได้รับคำขอแล้ว",
    "mms.booking.success.body":"ตอนนี้ MMS จะตรวจรายละเอียดและประสาน Therapist ที่เหมาะให้ก่อน รายการยังอยู่ในสถานะรอตรวจจนกว่าจะมีการตอบกลับยืนยันครับ",
    "mms.booking.status.received":"ได้รับคำขอแล้ว",
    "mms.booking.status.matching":"กำลังตรวจ Therapist ที่เหมาะ",
    "mms.booking.status.pending":"กำลังประสานรายละเอียด",
    "mms.booking.status.confirmed":"ยืนยันแล้ว",
    "mms.booking.nav.menu":"เมนู",
    "mms.booking.nav.current":"ตอนนี้",
    "mms.booking.nav.next":"ถัดไป",
    "mms.booking.error.generic":"ยังส่งคำขอไม่ได้ กรุณาลองอีกครั้งหรือติดต่อ MMS ทาง LINE"
  });

  Object.assign(D.en,{
    "mms.cta.prebook":"Start Pre-booking",
    "mms.cta.line":"Chat with MMS on LINE",
    "mms.cta.therapists":"View Male Therapists",
    "mms.booking.kicker":"MMS · PRE-BOOKING",
    "mms.booking.title":"Choose what you need. MMS coordinates the rest.",
    "mms.booking.lead":"Choose the service, date, time, area and any therapist you are interested in within one request. MMS will review skills, availability and the necessary details before confirming anything.",
    "mms.booking.member_gate":"This page uses verified Member information to show therapists and submit a pre-booking without asking you to re-enter identity details in the browser.",
    "mms.booking.service.title":"What would help today?",
    "mms.booking.service.helper":"Choose 1–6 items. These skills are used to find therapists who may fit the request.",
    "mms.booking.when.title":"When and where",
    "mms.booking.match.title":"Therapists matched to this request",
    "mms.booking.match.helper":"These options come from real MMS therapist records filtered by your request. Actual availability still requires MMS review.",
    "mms.booking.match.cta":"Check suitable therapists",
    "mms.booking.review.title":"Review before sending",
    "mms.booking.consent":"I understand this is a pre-booking request and does not confirm a therapist, time, location or amount until MMS coordinates the request and replies with confirmation.",
    "mms.booking.submit":"Send Pre-booking",
    "mms.booking.success.title":"MMS received your request",
    "mms.booking.success.body":"MMS will now review the details and coordinate a suitable therapist. The request remains under review until confirmation is sent back.",
    "mms.booking.status.received":"Request received",
    "mms.booking.status.matching":"Reviewing suitable therapists",
    "mms.booking.status.pending":"Coordinating details",
    "mms.booking.status.confirmed":"Confirmed",
    "mms.booking.nav.menu":"Menu",
    "mms.booking.nav.current":"Current",
    "mms.booking.nav.next":"Next",
    "mms.booking.error.generic":"The request could not be sent yet. Please try again or contact MMS on LINE."
  });

  Object.assign(D.zh,{
    "mms.cta.prebook":"开始预预约",
    "mms.cta.line":"通过 LINE 联系 MMS",
    "mms.cta.therapists":"查看男性理疗师",
    "mms.booking.kicker":"MMS · 预预约",
    "mms.booking.title":"选择您的需求，其余由 MMS 协调。",
    "mms.booking.lead":"您可以在同一份申请中选择服务、日期、时间、区域以及感兴趣的理疗师。MMS 会先核对技能、档期和必要细节，再进行确认。",
    "mms.booking.member_gate":"本页面使用已验证的会员资料显示理疗师并提交预预约，无需在浏览器中重复填写身份信息。",
    "mms.booking.service.title":"今天希望得到哪方面的帮助？",
    "mms.booking.service.helper":"可选择 1–6 项。系统将依据这些技能筛选初步匹配的理疗师。",
    "mms.booking.when.title":"日期、时间与区域",
    "mms.booking.match.title":"与本次需求初步匹配的理疗师",
    "mms.booking.match.helper":"以下人选来自 MMS 的真实理疗师资料，并按您的条件筛选；实际档期仍需由 MMS 再次确认。",
    "mms.booking.match.cta":"查看合适的理疗师",
    "mms.booking.review.title":"发送前确认详情",
    "mms.booking.consent":"我了解这只是预预约申请，在 MMS 完成协调并回复确认之前，并不代表理疗师、时间、地点或金额已经确认。",
    "mms.booking.submit":"发送预预约",
    "mms.booking.success.title":"MMS 已收到您的申请",
    "mms.booking.success.body":"MMS 将先核对详情并协调合适的理疗师。在正式回复确认之前，本申请仍处于审核中。",
    "mms.booking.status.received":"已收到申请",
    "mms.booking.status.matching":"正在筛选合适的理疗师",
    "mms.booking.status.pending":"正在协调详情",
    "mms.booking.status.confirmed":"已确认",
    "mms.booking.nav.menu":"菜单",
    "mms.booking.nav.current":"当前",
    "mms.booking.nav.next":"下一步",
    "mms.booking.error.generic":"暂时无法发送申请，请重试或通过 LINE 联系 MMS。"
  });
})();

/* MMS /male-massage/home — canonical TH / EN / ZH copy + CTA contrast bridge.
   Source: restored highest customer-facing /therapists V4, visual-sync V6 (2026-09-05). */
(function(){
  "use strict";
  var W=window, D=W.I18N_DICT=W.I18N_DICT||{};
  D.th=D.th||{}; D.en=D.en||{}; D.zh=D.zh||{};

  Object.assign(D.th,{
    "mms.home.hero.title":"เริ่มออนไลน์<br>แล้ว Therapist ไปถึงคุณ",
    "mms.home.hero.lead":"MMS ไม่มีหน้าร้านสำหรับ Walk-in ครับ เริ่มจากส่งรายละเอียดและ Pre-booking ออนไลน์ก่อน จากนั้น MMS จะเช็กคิวและประสาน Therapist ให้เดินทางไปยังบ้าน คอนโด โรงแรม หรือพื้นที่ส่วนตัวที่เหมาะสมตามนัด",
    "mms.home.hero.cta.prebook":"เริ่ม Pre-booking",
    "mms.home.hero.cta.howto":"ดูวิธีใช้บริการ",
    "mms.home.hero.swipe":"ปัดดูขั้นตอน →",
    "mms.home.setting.title":"ไปหาคุณ<br>หรือคุณไปที่ Spa",
    "mms.home.setting.lead":"เลือกจากสถานที่ก่อนก็พอครับ ถ้าอยากให้ Therapist ไปหา เลือก MMS · ถ้าอยากเข้า Spa เลือก Relax Spa by 9",
    "mms.home.setting.mms.body":"Therapist ไปยังบ้าน คอนโด โรงแรม หรือพื้นที่ส่วนตัวที่เหมาะสมในกรุงเทพฯ",
    "mms.home.setting.mms.cta":"ดูบริการ MMS",
    "mms.home.setting.spa.body":"เดินทางเข้ารับบริการที่ Spa พร้อมพื้นที่และอุปกรณ์ที่เตรียมไว้สำหรับการพักผ่อน",
    "mms.home.setting.spa.cta":"ดู Relax Spa by 9",
    "mms.home.services.title":"เลือก Skill ที่ต้องการ<br>แล้วให้ MMS ช่วย Match",
    "mms.home.services.lead":"เลือก Skill ที่อยากได้ไว้ใน Pre-booking ได้เลยครับ MMS จะดู Skill พื้นที่ เวลา และความพร้อมจริงของ Therapist ก่อนตอบกลับ",
    "mms.home.service.1.body":"นวดผ่อนคลาย",
    "mms.home.service.2.body":"นวดคลายเส้น",
    "mms.home.service.3.body":"นวดเพื่อการฟื้นตัวของกล้ามเนื้อ",
    "mms.home.service.4.body":"ดูแลอาการจากการนั่งนาน",
    "mms.home.service.5.body":"คำแนะนำด้านโภชนาการและการออกกำลังกาย",
    "mms.home.service.6.body":"นวดประคบสมุนไพร",
    "mms.home.service.7.body":"Session ที่มี Partner อยู่ด้วย",
    "mms.home.service.8.body":"บริการนวดสำหรับผู้หญิง",
    "mms.home.services.swipe":"ปัดเพื่อดูบริการต่อ →",
    "mms.home.standard.title":"คัดมากกว่า<br>รูปร่างหน้าตา",
    "mms.home.standard.lead":"บุคลิกและภาพลักษณ์มีความสำคัญครับ แต่ความสุภาพ การสื่อสาร ความรับผิดชอบ สุขอนามัย และการเคารพขอบเขต คือสิ่งที่ทำให้ Session รู้สึกดีได้จริง",
    "mms.home.standard.faq1.q":"MMS คัดเลือกอย่างไร",
    "mms.home.standard.faq1.a":"เราดูพื้นฐานการนวด บุคลิก Service Mind การสื่อสาร ความพร้อม และความเหมาะสมกับรูปแบบงาน ไม่ได้ตัดสินจากภาพเพียงอย่างเดียว",
    "mms.home.standard.faq2.q":"Pre-booking หมายถึงอะไร",
    "mms.home.standard.faq2.a":"เป็นการส่งวัน เวลา สถานที่ บริการ และ Therapist ที่สนใจให้ MMS เช็กคิวก่อน ยังไม่ถือเป็นการยืนยันนัดจนกว่า MMS จะตอบกลับและตกลงรายละเอียดครบครับ",
    "mms.home.standard.faq3.q":"เลือกตามบุคลิกได้ไหม",
    "mms.home.standard.faq3.a":"บอกได้ครับ ยิ่งแจ้งอย่างสุภาพและชัดเจน เราจะยิ่งช่วยดูคนที่เข้ากับบรรยากาศที่คุณต้องการได้ง่ายขึ้น โดยยังขึ้นอยู่กับความพร้อมจริงในวันนั้น",
    "mms.home.booking.title":"บอกสิ่งที่ต้องการ<br>ที่เหลือให้ MMS ประสาน",
    "mms.home.booking.lead":"ระบุวัน เวลา พื้นที่ บริการ และ Therapist ที่สนใจได้เลยครับ MMS จะเช็กความเหมาะสมและคิวจริงก่อนตอบกลับ",
    "mms.home.booking.step1.title":"ส่งรายละเอียด",
    "mms.home.booking.step1.body":"วัน · เวลา · พื้นที่ · บริการ",
    "mms.home.booking.step2.title":"MMS เช็กคิว",
    "mms.home.booking.step2.body":"เช็ก Therapist และความเหมาะสมของงาน",
    "mms.home.booking.step3.title":"ยืนยันก่อนนัด",
    "mms.home.booking.step3.body":"Pre-booking ยังไม่ใช่การยืนยันจนกว่า MMS จะตอบกลับ",
    "mms.home.booking.cta.prebook":"เริ่ม Pre-booking",
    "mms.home.booking.cta.apply":"สนใจร่วมงานเป็น MMS Therapist",
    "mms.home.branch.title":"เลือกส่วนที่ต้องการดู",
    "mms.home.branch.menu":"เมนู",
    "mms.home.branch.next":"ถัดไป",
    "mms.home.branch.start":"เริ่มต้น",
    "mms.home.branch.setting":"เลือกสถานที่",
    "mms.home.branch.services":"เลือกบริการ",
    "mms.home.branch.standard":"มาตรฐาน"
  });

  Object.assign(D.en,{
    "mms.home.hero.title":"Start online.<br>Your therapist comes to you.",
    "mms.home.hero.lead":"MMS has no walk-in storefront. Start by sharing the details and sending an online pre-booking. MMS then checks availability and coordinates a suitable therapist to your home, condominium, hotel or other appropriate private location.",
    "mms.home.hero.cta.prebook":"Start Pre-booking",
    "mms.home.hero.cta.howto":"How it works",
    "mms.home.hero.swipe":"Swipe the journey →",
    "mms.home.setting.title":"At your place<br>or at the spa",
    "mms.home.setting.lead":"Start with the setting. Choose MMS when you want the therapist to come to you, or Relax Spa by 9 when you prefer to visit the spa.",
    "mms.home.setting.mms.body":"A selected therapist visits your home, condominium, hotel or another suitable private location in Bangkok.",
    "mms.home.setting.mms.cta":"Explore MMS",
    "mms.home.setting.spa.body":"Visit the spa for a prepared treatment room with the space and equipment ready for your session.",
    "mms.home.setting.spa.cta":"Explore Relax Spa by 9",
    "mms.home.services.title":"Choose the skill you need.<br>Let MMS match the fit.",
    "mms.home.services.lead":"Add the skill you want to your pre-booking. MMS checks the therapist's skills, area, timing and real availability before replying.",
    "mms.home.service.1.body":"Relaxation massage",
    "mms.home.service.2.body":"Traditional Thai massage",
    "mms.home.service.3.body":"Muscle recovery massage",
    "mms.home.service.4.body":"Relief for prolonged sitting discomfort",
    "mms.home.service.5.body":"Nutrition and exercise guidance",
    "mms.home.service.6.body":"Thai herbal compress massage",
    "mms.home.service.7.body":"Partner-present massage session",
    "mms.home.service.8.body":"Massage service for women",
    "mms.home.services.swipe":"Swipe for more services →",
    "mms.home.standard.title":"Selected for more<br>than appearance",
    "mms.home.standard.lead":"Presentation matters, but respectful communication, responsibility, hygiene and clear boundaries are what make a session genuinely comfortable.",
    "mms.home.standard.faq1.q":"How does MMS select therapists?",
    "mms.home.standard.faq1.a":"We consider massage foundations, service mindset, communication, readiness and fit for the work—not photographs alone.",
    "mms.home.standard.faq2.q":"What does Pre-booking mean?",
    "mms.home.standard.faq2.a":"It lets MMS check the requested date, time, location, service and therapist. The session is not confirmed until MMS replies and all details are agreed.",
    "mms.home.standard.faq3.q":"Can I share personality preferences?",
    "mms.home.standard.faq3.a":"Yes. Clear, respectful preferences help MMS find a closer fit, subject to real availability on that day.",
    "mms.home.booking.title":"Share what you need.<br>Let MMS coordinate.",
    "mms.home.booking.lead":"Share your date, time, area, service and preferred therapist. MMS checks the real fit and availability before replying.",
    "mms.home.booking.step1.title":"Send the brief",
    "mms.home.booking.step1.body":"Date · time · area · service",
    "mms.home.booking.step2.title":"MMS checks availability",
    "mms.home.booking.step2.body":"Therapist fit and actual availability",
    "mms.home.booking.step3.title":"Confirm before the session",
    "mms.home.booking.step3.body":"Pre-booking is not confirmed until MMS replies",
    "mms.home.booking.cta.prebook":"Start Pre-booking",
    "mms.home.booking.cta.apply":"Apply as an MMS Therapist",
    "mms.home.branch.title":"Choose a chapter",
    "mms.home.branch.menu":"Menu",
    "mms.home.branch.next":"Next",
    "mms.home.branch.start":"Start",
    "mms.home.branch.setting":"Choose setting",
    "mms.home.branch.services":"Services",
    "mms.home.branch.standard":"Standard"
  });

  Object.assign(D.zh,{
    "mms.home.hero.title":"线上开始<br>理疗师按约上门",
    "mms.home.hero.lead":"MMS 不设现场 Walk-in 门店。请先在线提交需求并进行预预约，MMS 会确认实际档期，再协调合适的理疗师按约前往住宅、公寓、酒店或其他合适的私人地点。",
    "mms.home.hero.cta.prebook":"开始预预约",
    "mms.home.hero.cta.howto":"查看服务流程",
    "mms.home.hero.swipe":"滑动查看流程 →",
    "mms.home.setting.title":"上门服务<br>或前往 Spa",
    "mms.home.setting.lead":"先选择地点即可：希望理疗师上门请选择 MMS；希望前往 Spa，请选择 Relax Spa by 9。",
    "mms.home.setting.mms.body":"精选理疗师前往您在曼谷的住宅、公寓、酒店或其他合适的私人地点。",
    "mms.home.setting.mms.cta":"查看 MMS 服务",
    "mms.home.setting.spa.body":"前往 Spa，在准备好的护理空间与设备中享受服务。",
    "mms.home.setting.spa.cta":"查看 Relax Spa by 9",
    "mms.home.services.title":"选择所需 Skill<br>由 MMS 协助匹配",
    "mms.home.services.lead":"请在预预约时选择需要的 Skill。MMS 会确认理疗师的技能、地区、时间与实际可用情况后再回复。",
    "mms.home.service.1.body":"芳香精油放松按摩",
    "mms.home.service.2.body":"泰式舒展按摩",
    "mms.home.service.3.body":"运动恢复按摩",
    "mms.home.service.4.body":"久坐不适舒缓",
    "mms.home.service.5.body":"营养与运动建议",
    "mms.home.service.6.body":"泰式草药热敷按摩",
    "mms.home.service.7.body":"伴侣在场按摩服务",
    "mms.home.service.8.body":"女性按摩服务",
    "mms.home.services.swipe":"滑动查看更多服务 →",
    "mms.home.standard.title":"筛选标准<br>不只看外表",
    "mms.home.standard.lead":"形象固然重要，但礼貌沟通、责任感、卫生与尊重界限，才是真正带来舒适体验的关键。",
    "mms.home.standard.faq1.q":"MMS 如何筛选理疗师？",
    "mms.home.standard.faq1.a":"我们综合考量按摩基础、服务意识、沟通、准备程度与工作匹配度，而非只看照片。",
    "mms.home.standard.faq2.q":"Pre-booking 是什么意思？",
    "mms.home.standard.faq2.a":"即先提交日期、时间、地点、服务与心仪人选；在 MMS 回复并确认全部细节前，尚不视为正式确认。",
    "mms.home.standard.faq3.q":"可以提出性格偏好吗？",
    "mms.home.standard.faq3.a":"可以。清晰且尊重地说明偏好，有助于 MMS 更准确地匹配，但仍以当天实际可用情况为准。",
    "mms.home.booking.title":"告诉我们您的需求<br>其余由 MMS 协调",
    "mms.home.booking.lead":"请提供日期、时间、地区、服务与心仪理疗师。MMS 会确认实际匹配与时间后再回复。",
    "mms.home.booking.step1.title":"提交需求",
    "mms.home.booking.step1.body":"日期 · 时间 · 地区 · 服务",
    "mms.home.booking.step2.title":"MMS 确认档期",
    "mms.home.booking.step2.body":"确认理疗师匹配与实际可用情况",
    "mms.home.booking.step3.title":"预约前确认",
    "mms.home.booking.step3.body":"MMS 回复前，预预约不代表正式确认",
    "mms.home.booking.cta.prebook":"开始预预约",
    "mms.home.booking.cta.apply":"申请成为 MMS Therapist",
    "mms.home.branch.title":"选择页面章节",
    "mms.home.branch.menu":"菜单",
    "mms.home.branch.next":"下一项",
    "mms.home.branch.start":"开始",
    "mms.home.branch.setting":"选择地点",
    "mms.home.branch.services":"服务项目",
    "mms.home.branch.standard":"服务标准"
  });

  function isHome(){
    var p=(location.pathname||"/").replace(/\/+$/g,"")||"/";
    return p==="/male-massage/home";
  }
  function put(root,selector,key,html){
    var nodes=root.querySelectorAll(selector);
    for(var i=0;i<nodes.length;i+=1){
      var el=nodes[i], lang=el.getAttribute("data-lang");
      if(!lang||!D[lang]||!D[lang][key]) continue;
      if(html) el.innerHTML=D[lang][key]; else el.textContent=D[lang][key];
    }
  }
  function visible(root,lang){
    lang=(lang==="en"||lang==="zh")?lang:"th";
    root.setAttribute("data-ui-lang",lang);
    var nodes=root.querySelectorAll("[data-lang]");
    for(var i=0;i<nodes.length;i+=1) nodes[i].hidden=nodes[i].getAttribute("data-lang")!==lang;
    var buttons=root.querySelectorAll("[data-set-lang]");
    for(var j=0;j<buttons.length;j+=1) buttons[j].setAttribute("aria-pressed",buttons[j].getAttribute("data-set-lang")===lang?"true":"false");
    try{localStorage.setItem("mms-home-lang",lang);}catch(_){}
  }
  function currentLang(){
    try{
      var v=localStorage.getItem("mmd_lang")||localStorage.getItem("lang")||localStorage.getItem("mms-home-lang");
      if(v==="en"||v==="zh"||v==="th") return v;
    }catch(_){}
    return "th";
  }
  function contrast(){
    if(document.getElementById("mms-home-github-contrast-v1")) return;
    var s=document.createElement("style");
    s.id="mms-home-github-contrast-v1";
    s.textContent="html[data-mmd-world='mms'] #mms-home-v4 .mh4-button-primary,html[data-mmd-world='mms'] #mms-home-v4 .mh4-mini-link{color:#fff!important;-webkit-text-fill-color:#fff!important}html[data-mmd-world='mms'] #mms-home-v4 .mh4-button-primary *,html[data-mmd-world='mms'] #mms-home-v4 .mh4-mini-link *{color:inherit!important;-webkit-text-fill-color:inherit!important}html[data-mmd-world='mms'] #mms-home-v4 .mh4-button-secondary{color:#062d1e!important;-webkit-text-fill-color:#062d1e!important;background:#fff!important}html[data-mmd-world='mms'] #mms-home-v4 .mh4-button-secondary *{color:inherit!important;-webkit-text-fill-color:inherit!important}html[data-mmd-world='mms'] #mms-home-v4 .mh4-button-outline{color:#fff!important;-webkit-text-fill-color:#fff!important}html[data-mmd-world='mms'] #mms-home-v4 .mh4-setting-copy>b{color:#062d1e!important;-webkit-text-fill-color:#062d1e!important}html[data-mmd-world='mms'] #mms-home-v4 .mh4-text-link{color:#cfddd3!important;-webkit-text-fill-color:#cfddd3!important}html[data-mmd-world='mms'] #mms-home-v4 .mh4-lang button{color:#587063!important;-webkit-text-fill-color:#587063!important}html[data-mmd-world='mms'] #mms-home-v4 .mh4-lang button[aria-pressed='true']{background:#062d1e!important;color:#fff!important;-webkit-text-fill-color:#fff!important}html[data-mmd-world='mms'] #mms-home-v4 .mh4-branch-next{background:#bbdd72!important;color:#10251a!important;-webkit-text-fill-color:#10251a!important}";
    document.head.appendChild(s);
  }
  function hydrate(lang){
    if(!isHome()) return;
    var root=document.getElementById("mms-home-v4"); if(!root) return;
    root.setAttribute("data-mms-home","/male-massage/home");
    root.setAttribute("data-mmd-i18n-source","github:mms.home");
    root.setAttribute("data-mmd-copy-version","2026-09-05-v1");
    contrast();
    put(root,".mh4-hero-copy h1 [data-lang]","mms.home.hero.title",true);
    put(root,".mh4-hero-copy>.mh4-lead[data-lang]","mms.home.hero.lead",false);
    put(root,".mh4-hero-copy .mh4-button-primary [data-lang]","mms.home.hero.cta.prebook",false);
    put(root,".mh4-hero-copy .mh4-button-secondary [data-lang]","mms.home.hero.cta.howto",false);
    put(root,".mh4-journey-shell .mh4-swipe-meta [data-lang]","mms.home.hero.swipe",false);
    put(root,"#mh4-setting-title [data-lang]","mms.home.setting.title",true);
    put(root,"#mh4-setting .mh4-section-head>p[data-lang]","mms.home.setting.lead",false);
    put(root,"#mh4-setting .mh4-setting-card:nth-child(1) .mh4-setting-copy>p[data-lang]","mms.home.setting.mms.body",false);
    put(root,"#mh4-setting .mh4-setting-card:nth-child(1) .mh4-setting-copy>b [data-lang]","mms.home.setting.mms.cta",false);
    put(root,"#mh4-setting .mh4-setting-card:nth-child(2) .mh4-setting-copy>p[data-lang]","mms.home.setting.spa.body",false);
    put(root,"#mh4-setting .mh4-setting-card:nth-child(2) .mh4-setting-copy>b [data-lang]","mms.home.setting.spa.cta",false);
    put(root,"#mh4-services-title [data-lang]","mms.home.services.title",true);
    put(root,"#mh4-services .mh4-section-head>p[data-lang]","mms.home.services.lead",false);
    for(var n=1;n<=8;n+=1) put(root,"#mh4-services .mh4-service-card:nth-child("+n+")>p[data-lang]","mms.home.service."+n+".body",false);
    put(root,"#mh4-services .mh4-swipe-meta [data-lang]","mms.home.services.swipe",false);
    put(root,"#mh4-standard-title [data-lang]","mms.home.standard.title",true);
    put(root,"#mh4-standard .mh4-standard-copy>p[data-lang]","mms.home.standard.lead",false);
    for(var q=1;q<=3;q+=1){
      put(root,"#mh4-standard .mh4-accordion details:nth-child("+q+") summary [data-lang]","mms.home.standard.faq"+q+".q",false);
      put(root,"#mh4-standard .mh4-accordion details:nth-child("+q+")>div p[data-lang]","mms.home.standard.faq"+q+".a",false);
    }
    put(root,"#mh4-booking-title [data-lang]","mms.home.booking.title",true);
    put(root,"#mh4-booking .mh4-booking-copy>p[data-lang]","mms.home.booking.lead",false);
    for(var st=1;st<=3;st+=1){
      put(root,"#mh4-booking .mh4-booking-steps li:nth-child("+st+") strong[data-lang]","mms.home.booking.step"+st+".title",false);
      put(root,"#mh4-booking .mh4-booking-steps li:nth-child("+st+") small[data-lang]","mms.home.booking.step"+st+".body",false);
    }
    put(root,"#mh4-booking .mh4-booking-actions .mh4-button-primary [data-lang]","mms.home.booking.cta.prebook",false);
    put(root,"#mh4-booking .mh4-text-link [data-lang]","mms.home.booking.cta.apply",false);
    put(root,"#mh4-branch-title [data-lang]","mms.home.branch.title",false);
    put(root,".mh4-branch-open b[data-lang]","mms.home.branch.menu",false);
    put(root,".mh4-branch-next [data-lang]","mms.home.branch.next",false);
    put(root,".mh4-branch-list [data-branch-target='mh4-start'] [data-lang]","mms.home.branch.start",false);
    put(root,".mh4-branch-list [data-branch-target='mh4-setting'] [data-lang]","mms.home.branch.setting",false);
    put(root,".mh4-branch-list [data-branch-target='mh4-services'] [data-lang]","mms.home.branch.services",false);
    put(root,".mh4-branch-list [data-branch-target='mh4-standard'] [data-lang]","mms.home.branch.standard",false);
    visible(root,lang||currentLang());
  }

  document.addEventListener("mmd:i18n:ready",function(e){hydrate(e&&e.detail&&e.detail.lang);});
  document.addEventListener("mmd:i18n:change",function(e){hydrate(e&&e.detail&&e.detail.lang);});
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",function(){hydrate(currentLang());});
  else hydrate(currentLang());
})();

/* MMS /male-massage/therapists/mms — canonical TH / EN / ZH service-page copy. */
(function(){
  "use strict";
  var W=window, D=W.I18N_DICT=W.I18N_DICT||{};
  D.th=D.th||{}; D.en=D.en||{}; D.zh=D.zh||{};
  var COPY={"th":{"nav.home":"Male Massage","nav.services":"รูปแบบบริการ","nav.guide":"วิธีใช้งาน","nav.book":"เริ่มจอง","nav.skip":"ข้ามไปเนื้อหา","nav.app":"MY MMS","hero.kicker":"MMS / AT YOUR PLACE","hero.first":"พักสบาย","hero.second":"ในพื้นที่ของคุณ","hero.body":"อยากพักแบบไหน บอกผมได้ครับ ผมช่วยเลือก Therapist และประสานรายละเอียดก่อนเดินทางไปหา","hero.book":"เริ่ม MMS Pre-booking","hero.line":"ให้ Per ช่วยแนะนำ","hero.note":"ส่งคำขอไว้ก่อน เดี๋ยวผมเช็กคิวกับรายละเอียดให้ แล้วค่อยยืนยันนัดครับ","hero.tag1":"บ้าน · คอนโด · โรงแรม","hero.tag2":"เป็นส่วนตัว","hero.tag3":"ขอบเขตชัดเจน","standard.kicker":"01 / THE MMS STANDARD","standard.title":"ดูแลดี สบายใจตั้งแต่ก่อนนัด","standard.more":"ดูแลกันยังไง","standard.1title":"คุณภาพการนวด","standard.1body":"ใส่ใจทักษะและการปรับแรงกดให้สบายสำหรับคุณ","standard.2title":"สะอาด พร้อมดูแล","standard.2body":"บุคลิกสุภาพ แต่งกายเรียบร้อย พร้อมเข้าพื้นที่ของคุณ","standard.3title":"เคารพความเป็นส่วนตัว","standard.3body":"พูดคุยขอบเขตให้ตรงกัน และให้เกียรติกันตลอด Session","standard.4title":"รายละเอียดชัดก่อนนัด","standard.4body":"ตรวจคิว พื้นที่ และค่าใช้จ่าย ก่อนตอบยืนยัน","services.kicker":"02 / RELAXATION, YOUR WAY","services.title":"เลือกการดูแลที่เหมาะกับคุณ","services.body":"แตะดูรูปแบบที่สนใจ แล้วบอกความต้องการในหน้าจอง หรือให้ Per ช่วยแนะนำครับ","tab.men":"นวดผ่อนคลาย","tab.women":"สำหรับผู้หญิง","tab.partner":"Partner-Present","men.kicker":"PRIVATE RELAXATION","men.title":"วางวันหนัก ๆ ไว้ตรงนี้","men.body":"ผ่อนคลายทั่วไป ปรับแรงกดตามที่สบาย หรือเน้นจุดที่รู้สึกล้า ทั้งหลังวันทำงานและการเดินทาง ให้คุณพักในพื้นที่ที่คุ้นเคย","men.1":"ผ่อนคลายทั่วไป","men.2":"เน้นจุดตึงล้า","men.3":"พักหลังเดินทาง","men.note":"บริการและระยะเวลาจริงจะตรวจและแจ้งอีกครั้งก่อนยืนยัน","women.kicker":"WOMEN MASSAGE · MALE THERAPISTS","women.title":"วันพักที่คุณเป็นคนเลือก","women.body":"บริการนวดผ่อนคลายสำหรับผู้หญิงโดย Male Therapists แจ้งสไตล์ แรงกด และความเป็นส่วนตัวที่ต้องการได้ล่วงหน้า","women.note":"ผู้รับบริการยืนยันความต้องการด้วยตนเอง และขอปรับหรือหยุด Session ได้ทุกเวลา","partner.kicker":"PARTNER-PRESENT SESSION","partner.title":"ช่วยคู่ ให้สบายใจไปด้วยกัน","partner.body":"ช่วยคู่ของคุณปรึกษาและเลือก Therapist พร้อมอยู่ภายในสถานที่ตลอด Session ได้ เพื่อให้ผู้รับบริการรู้สึกสบายใจ","partner.note":"ผู้รับบริการเป็นผู้ตัดสินใจ และสามารถขอปรับหรือหยุดได้ทุกเวลา","services.book":"ส่งคำขอในหน้าจอง","services.ask":"ปรึกษา Per","services.boundary":"MMS เป็นบริการนวดและ Wellness แบบ Non-erotic โดยเคารพขอบเขตของทั้งสองฝ่าย","process.kicker":"03 / FROM REQUEST TO REST","process.title":"สามขั้นตอน แล้วค่อยพัก","process.more":"อ่านรายละเอียดก่อนยืนยัน","process.1title":"บอกสิ่งที่ต้องการ","process.1body":"ยืนยันบัญชีผ่าน LINE แล้วเลือกบริการ วันเวลา และพื้นที่ในหน้าจอง","process.2title":"ผมช่วยเช็กคิวกับรายละเอียด","process.2body":"ผมจะบอกชื่อ Therapist รูปแบบ ระยะเวลา ราคา และค่าเดินทางให้ดูก่อนครับ","process.3title":"ยืนยัน แล้วรอรับการดูแล","process.3body":"ถ้ารายละเอียดลงตัว ผมแจ้งมัดจำให้ แล้วรอข้อความยืนยันนัดจาก MMS ครับ","process.guide":"อ่านวิธีใช้งาน","faq.kicker":"04 / GOOD TO KNOW","faq.title":"รู้ไว้ ก่อนเริ่มจอง","faq.1q":"ให้ Therapist ไปหาที่ไหนได้บ้าง?","faq.1a":"บ้าน คอนโด โรงแรม หรือพื้นที่ส่วนตัวที่เหมาะสมในเขตให้บริการ ต้องตรวจสอบพื้นที่และกฎการเข้าพบของสถานที่ก่อนนัด รายละเอียดอุปกรณ์และสิ่งที่ควรเตรียมจะแจ้งตามรูปแบบบริการ","faq.2q":"เลือก Therapist เองได้ไหม?","faq.2a":"แจ้งคนที่สนใจในหน้าจองได้ครับ หรือให้ Per ช่วยแนะนำตามสไตล์ที่ต้องการ โดยขึ้นอยู่กับคิว พื้นที่ และความเหมาะสมในวันนั้น","faq.3q":"ราคาและค่าเดินทางเท่าไร?","faq.3a":"ผมแจ้งราคาและค่าเดินทางตามบริการกับระยะเวลาให้ดูก่อนยืนยันนัดครับ ตรวจรายละเอียดให้เรียบร้อยก่อนชำระมัดจำ หน้านี้ไม่มีเรียกเก็บเงิน","faq.4q":"ส่ง Pre-booking แล้ว ยืนยันคิวเลยไหม?","faq.4a":"ยังครับ เป็นคำขอเบื้องต้น ผมเช็กคิวและรายละเอียดให้ครบก่อน นัดยืนยันเมื่อชำระมัดจำตามที่แจ้งและได้รับข้อความจาก MMS ครับ","final.kicker":"YOUR NEXT MOMENT OF REST","final.title":"พักสบาย ให้ MMS ดูแลถึงที่","final.body":"ส่งวัน เวลา พื้นที่ และสไตล์ที่ชอบมาได้ครับ ผมช่วยประสานให้ก่อนยืนยันนัด","final.book":"เริ่ม MMS Pre-booking","final.line":"คุยกับ Per ใน LINE","footer.slogan1":"คัดสรร Therapist ฝีมือดี","footer.slogan2":"เป็นส่วนตัว เดินทางไปหาคุณได้ทุกที่...แค่กับคุณ","footer.home":"กลับ Male Massage","footer.app":"รู้จัก MY MMS","footer.join":"ร่วมงานกับ MMS"},"en":{"nav.home":"Male Massage","nav.services":"Service formats","nav.guide":"Service guide","nav.book":"Pre-book","nav.skip":"Skip to content","nav.app":"MY MMS","hero.kicker":"MMS / AT YOUR PLACE","hero.first":"Rest well.","hero.second":"In your own space.","hero.body":"Tell me how you would like to unwind. I will help find a therapist and coordinate the details before the visit.","hero.book":"Start MMS pre-booking","hero.line":"Ask Per for a recommendation","hero.note":"Send a request. MMS checks availability and details before confirming.","hero.tag1":"Home · Condo · Hotel","hero.tag2":"Private care","hero.tag3":"Clear boundaries","standard.kicker":"01 / THE MMS STANDARD","standard.title":"Considered care, from the start.","standard.more":"How we take care of the details","standard.1title":"Massage quality","standard.1body":"Attention to technique and a pressure level comfortable for you.","standard.2title":"Clean and prepared","standard.2body":"Polite presentation and readiness to enter your private space.","standard.3title":"Respect and privacy","standard.3body":"Agreed boundaries and mutual respect throughout the session.","standard.4title":"Details before confirmation","standard.4body":"Availability, location and costs checked before the appointment is confirmed.","services.kicker":"02 / RELAXATION, YOUR WAY","services.title":"Find the care that suits you.","services.body":"Explore each format, then describe your preferences on the booking page or ask Per for guidance.","tab.men":"Relaxation","tab.women":"For women","tab.partner":"Partner-Present","men.kicker":"PRIVATE RELAXATION","men.title":"Leave a long day behind.","men.body":"General relaxation, a comfortable pressure level or attention to tired areas after work or travel, in a familiar private setting.","men.1":"Everyday relaxation","men.2":"Tired-area focus","men.3":"After-travel rest","men.note":"The exact service and duration are checked before confirmation.","women.kicker":"WOMEN MASSAGE · MALE THERAPISTS","women.title":"A pause, on your terms.","women.body":"Relaxation for women by male therapists. Share your preferred style, pressure and privacy needs in advance.","women.note":"The recipient confirms their own preferences and may adjust or stop the session at any time.","partner.kicker":"PARTNER-PRESENT SESSION","partner.title":"Help your partner feel at ease.","partner.body":"Consult, help choose a therapist and remain at the venue throughout the session to support your partner’s comfort.","partner.note":"The recipient decides and may adjust or stop the session at any time.","services.book":"Continue to pre-booking","services.ask":"Consult Per","services.boundary":"MMS provides non-erotic massage and wellness with mutually respected boundaries.","process.kicker":"03 / FROM REQUEST TO REST","process.title":"Three steps, then time to unwind.","process.more":"Read what happens before confirmation","process.1title":"Tell us what you need","process.1body":"Verify through LINE, then choose a service, date, time and area on the booking page.","process.2title":"I check the details with you","process.2body":"I will share the therapist, format, duration, service price and travel fee before confirmation.","process.3title":"Confirm, then unwind","process.3body":"Once we agree on the details, I will share the deposit steps. Your booking is confirmed by an MMS message.","process.guide":"Read the service guide","faq.kicker":"04 / GOOD TO KNOW","faq.title":"Before you pre-book.","faq.1q":"Where can a therapist visit?","faq.1a":"A home, condo, hotel or suitable private venue within a confirmed service area. Check venue access rules before the appointment. Equipment and preparation details depend on the agreed service.","faq.2q":"Can I choose a therapist?","faq.2a":"You may name a preferred therapist on the booking page or ask Per for guidance. Availability, location and suitability still need to be checked.","faq.3q":"What are the price and travel fees?","faq.3a":"I will share the service price and travel fee before confirmation. Please review everything before paying the stated deposit. This page does not collect payment.","faq.4q":"Does pre-booking confirm my appointment?","faq.4a":"Not yet. It is an initial request. I will check availability and details first. Your booking is confirmed after the stated deposit and an MMS confirmation message.","final.kicker":"YOUR NEXT MOMENT OF REST","final.title":"Relax. MMS comes to you.","final.body":"Send me your date, time, area and preferences. I will coordinate the details before confirmation.","final.book":"Start MMS pre-booking","final.line":"Talk to Per on LINE","footer.slogan1":"Straight to your door.","footer.slogan2":"Tap to book discreet, skilled therapists.","footer.home":"Back to Male Massage","footer.app":"Explore MY MMS","footer.join":"Work with MMS"},"zh":{"nav.home":"Male Massage","nav.services":"服务形式","nav.guide":"使用指南","nav.book":"开始预预约","nav.skip":"跳至正文","nav.app":"MY MMS","hero.kicker":"MMS / AT YOUR PLACE","hero.first":"安心休息","hero.second":"就在您的空间","hero.body":"告诉我您想怎样放松。我会协助推荐理疗师，并在到访前协调好详情。","hero.book":"开始 MMS 预预约","hero.line":"请 Per 协助推荐","hero.note":"提交初步需求后，MMS 会先核对档期与详情，再确认预约。","hero.tag1":"住宅 · 公寓 · 酒店","hero.tag2":"私密护理","hero.tag3":"界限清晰","standard.kicker":"01 / THE MMS STANDARD","standard.title":"从预约开始，就让您安心。","standard.more":"了解服务标准","standard.1title":"按摩品质","standard.1body":"注重手法，并调整至让您舒适的力度。","standard.2title":"整洁与准备","standard.2body":"礼貌得体，做好到访私人空间的准备。","standard.3title":"尊重与隐私","standard.3body":"事先沟通界限，全程相互尊重。","standard.4title":"确认前，详情清楚","standard.4body":"先核对档期、地点与费用，再确认预约。","services.kicker":"02 / RELAXATION, YOUR WAY","services.title":"找到适合您的护理。","services.body":"查看各类形式，再到预约页面说明偏好，或请 Per 提供建议。","tab.men":"放松按摩","tab.women":"女性服务","tab.partner":"伴侣陪同","men.kicker":"PRIVATE RELAXATION","men.title":"把漫长的一天放下。","men.body":"日常放松、按舒适度调整力度，或照顾工作及旅途后的疲劳部位，让您在熟悉的私人环境中休息。","men.1":"日常放松","men.2":"关注疲劳部位","men.3":"旅途后休息","men.note":"具体服务与时长会在确认前再次核对。","women.kicker":"WOMEN MASSAGE · MALE THERAPISTS","women.title":"休息，由您决定。","women.body":"由男性理疗师为女性提供放松护理。可提前说明偏好手法、力度与隐私需求。","women.note":"由接受服务者亲自确认需求，并可随时要求调整或停止。","partner.kicker":"PARTNER-PRESENT SESSION","partner.title":"陪伴侣，一起安心。","partner.body":"可参与咨询、协助选择理疗师，并在服务全程留在场所内，支持伴侣的舒适感。","partner.note":"由接受服务者做决定，并可随时调整或停止。","services.book":"前往预预约","services.ask":"咨询 Per","services.boundary":"MMS 提供非色情按摩与健康护理，并尊重双方界限。","process.kicker":"03 / FROM REQUEST TO REST","process.title":"三步安排，安心休息。","process.more":"查看确认预约前的流程","process.1title":"告诉我们您的需求","process.1body":"通过 LINE 验证账号，再选择服务、日期、时间与地区。","process.2title":"我来和您核对详情","process.2body":"我会先告诉您理疗师、形式、时长、服务价格与交通费。","process.3title":"确认后，安心等待","process.3body":"详情商定后，我会说明定金方式；收到 MMS 确认消息后，预约才成立。","process.guide":"阅读使用指南","faq.kicker":"04 / GOOD TO KNOW","faq.title":"开始预预约前。","faq.1q":"理疗师可以到访哪里？","faq.1a":"可到访已确认服务地区内的住宅、公寓、酒店或合适私人场所。预约前须核对场所出入规定。设备与准备事项将按约定服务说明。","faq.2q":"可以自行选择理疗师吗？","faq.2a":"可在预约页面填写偏好的理疗师，或请 Per 协助推荐。仍须核对档期、地区与是否合适。","faq.3q":"价格与交通费是多少？","faq.3a":"我会在确认前说明服务、时长与交通费用。支付定金前请先核对详情。本页面不收款。","faq.4q":"提交预预约就代表已确认吗？","faq.4a":"还没有。这只是初步需求。我会先核对档期和详情，收到定金及 MMS 确认消息后，预约才成立。","final.kicker":"YOUR NEXT MOMENT OF REST","final.title":"安心休息，MMS 到您身边。","final.body":"告诉我日期、时间、地区与偏好。我会在确认预约前协调详情。","final.book":"开始 MMS 预预约","final.line":"通过 LINE 联系 Per","footer.slogan1":"精选专业理疗师","footer.slogan2":"私密护理，按约前往您的地点，专为您服务。","footer.home":"返回 Male Massage","footer.app":"了解 MY MMS","footer.join":"加入 MMS"}};
  ["th","en","zh"].forEach(function(lang){
    Object.keys(COPY[lang]||{}).forEach(function(key){
      D[lang]["mms.service.v2."+key]=COPY[lang][key];
    });
  });
})();

;

/* SOURCE: pages/mms-therapists.js */
/* MMS Therapist recruitment page — canonical i18n bindings (TH / EN / ZH) */
(function(){
  "use strict";
  var W=window,DOC=document;
  W.I18N_DICT=W.I18N_DICT||{};
  var D=W.I18N_DICT; D.th=D.th||{}; D.en=D.en||{}; D.zh=D.zh||{};

  Object.assign(D.th,{
    "mms.therapists.nav.work":"งานแบบนี้","mms.therapists.nav.ai":"AI ช่วยอะไร","mms.therapists.nav.flow":"จาก Brief ถึงงานจริง","mms.therapists.nav.growth":"Profile Growth","mms.therapists.nav.apply":"สมัคร",
    "mms.therapists.hero.kicker":"MMS · THERAPIST OPPORTUNITY","mms.therapists.hero.title":"Therapist ไทยมีฝีมือ<br><span>ดีจนคนพูดถึงกันมานาน</span>","mms.therapists.hero.lead":"Male Massage กำลังทำแอปฯ เพื่อให้คนมีฝีมือได้มีโอกาสรับงานเสริมใกล้ตัว โดยไม่ต้องเสียเวลาวิ่งหางานเองทั้งวัน","mms.therapists.hero.founder":"<b>จากประสบการณ์ 6 ปีของเปอร์</b> ผมอยากให้ทั้งคนที่สนใจเริ่มต้น และคนที่ทำงานอยู่แล้ว มีอีกทางเลือกในการหารายได้—เมื่อคุณว่างและมีงานที่เหมาะอยู่ใกล้ ๆ ระบบจะส่งรายละเอียดมาให้ คุณอ่านก่อน แล้วค่อยตัดสินใจเองครับ","mms.therapists.hero.tag1":"มีงานประจำก็สมัครได้","mms.therapists.hero.tag2":"ไม่ต้องวิ่งหางานเอง","mms.therapists.hero.tag3":"ดูรายละเอียดก่อนรับ","mms.therapists.hero.apply":"สมัครให้ MMS รู้จักก่อน <b>↗</b>","mms.therapists.hero.how":"ดูว่าเริ่มทำงานยังไง <b>↓</b>","mms.therapists.hero.proof":"MMS คัดคนทำงานตามเกณฑ์จริงครับ ฝีมือสำคัญมาก—และ MMD ทั้งที บุคลิกดี ดูแลตัวเองดี ก็สำคัญเหมือนกัน","mms.therapists.hero.customer":"กำลังมองหาบริการนวด? ไปหน้า Male Massage →",
    "mms.therapists.story.title":"ไม่ต้องเดาว่างานจะมาแบบไหน<br><span>ปัดดูตั้งแต่ Brief จนถึงออกเดินทางได้เลย</span>","mms.therapists.story.lead":"พอมีงานเข้ามา คุณจะเห็นข้อมูลสำคัญก่อน แล้วค่อยเลือกว่าจะรับหรือผ่านครับ",
    "mms.therapists.benefits.title":"มีฝีมือดี<br><span>ก็ควรมีคนเห็น</span>","mms.therapists.benefits.lead":"ไม่ว่าจะเพิ่งเริ่ม หรือทำเป็นอาชีพอยู่แล้ว ถ้าคุณดูแลงานดีและอยากมีอีกทางเลือกในการรับงาน MMS อยากรู้จักครับ",
    "mms.therapists.ai.title":"มีงานใกล้คุณ<br><span>ระบบช่วยบอก แต่คุณเป็นคนเลือก</span>","mms.therapists.ai.lead":"เมื่อมีงานที่อาจเหมาะ ระบบจะรวบรวมรายละเอียดให้คุณดูง่ายขึ้น แต่การรับหรือผ่าน ยังเป็นของคุณเสมอ",
    "mms.therapists.growth.title":"ทำงานไปเรื่อย ๆ<br><span>โปรไฟล์ก็โตไปกับคุณ</span>","mms.therapists.growth.lead":"ทุกงานที่คุณทำดี จะค่อย ๆ กลายเป็นประสบการณ์ที่ช่วยให้คุณมีทางเลือกมากขึ้น",
    "mms.therapists.fit.title":"ไม่ต้องเป็นคนแบบเดียวกัน<br><span>ถ้าตั้งใจทำงาน ก็คุยกันได้</span>","mms.therapists.fit.lead":"ไม่ว่าคุณจะเพิ่งเริ่ม หรือมีประสบการณ์อยู่แล้ว MMS อยากดูความตั้งใจและวิธีทำงานของคุณก่อน",
    "mms.therapists.faq.title":"มีข้อไหนค้างใจ<br><span>กด + เปิดดูแค่ข้อนั้นครับ</span>","mms.therapists.faq.lead":"ไม่ต้องอ่านจนจบก็ได้ครับ เลือกเปิดเฉพาะข้อที่ค้างใจ แล้วค่อยคุยกันต่อได้",
    "mms.therapists.final.title":"ถ้าอยากลองมีงานเสริม<br><span>ที่ยังเลือกเองได้ ก็เริ่มจากสมัครไว้ก่อนครับ</span>","mms.therapists.final.lead":"มี Profile ไม่ได้แปลว่าต้องรับทุกงาน คุณยังเป็นคนกำหนดว่าช่วงไหนพร้อม และงานแบบไหนเหมาะกับตัวเอง","mms.therapists.final.apply":"สมัครเป็น Therapist <b>↗</b>","mms.therapists.final.benefits":"ดู Benefits","mms.therapists.final.rules":"อ่าน Rules","mms.therapists.final.customer":"กำลังมองหาบริการนวด? ไปหน้า Male Massage →"
  });

  Object.assign(D.en,{
    "mms.therapists.nav.work":"How this work fits","mms.therapists.nav.ai":"What AI helps with","mms.therapists.nav.flow":"From brief to job","mms.therapists.nav.growth":"Profile growth","mms.therapists.nav.apply":"Apply",
    "mms.therapists.hero.kicker":"MMS · THERAPIST OPPORTUNITY","mms.therapists.hero.title":"Thai Therapists with real skill<br><span>have been talked about for years</span>","mms.therapists.hero.lead":"Male Massage is building an app that helps skilled people find nearby freelance work—without spending the day chasing it themselves.","mms.therapists.hero.founder":"<b>From Per’s six years of experience</b>, I want both newcomers and working therapists to have another way to earn. When you are free and a suitable job is nearby, the details come to you. Read them first, then decide for yourself.","mms.therapists.hero.tag1":"Apply alongside a full-time job","mms.therapists.hero.tag2":"No need to chase jobs","mms.therapists.hero.tag3":"See the details first","mms.therapists.hero.apply":"Let MMS get to know you <b>↗</b>","mms.therapists.hero.how":"See how it works <b>↓</b>","mms.therapists.hero.proof":"MMS selects therapists against real working criteria. Skill matters greatly—and under MMD, being well-presented and taking care of yourself matters too.","mms.therapists.hero.customer":"Looking for a massage service? Go to Male Massage →",
    "mms.therapists.story.title":"You do not have to guess what a job looks like<br><span>Swipe from the brief to heading out</span>","mms.therapists.story.lead":"When a job arrives, you see the important details first, then choose whether to accept or pass.",
    "mms.therapists.benefits.title":"Real skill<br><span>deserves to be seen</span>","mms.therapists.benefits.lead":"Whether you are just starting out or already work professionally, MMS would like to know you if you care for clients well and want another way to find work.",
    "mms.therapists.ai.title":"When work is near you<br><span>the system tells you; you choose</span>","mms.therapists.ai.lead":"When a job may suit you, the system gathers the important details. Accepting or passing is always your decision.",
    "mms.therapists.growth.title":"Keep doing good work<br><span>and your profile grows with you</span>","mms.therapists.growth.lead":"Each job you do well becomes experience that opens up more choices over time.",
    "mms.therapists.fit.title":"You do not have to fit one mould<br><span>if you care about the work, let’s talk</span>","mms.therapists.fit.lead":"Whether you are new or experienced, MMS wants to understand your commitment and how you work first.",
    "mms.therapists.faq.title":"Something still on your mind?<br><span>Open only the question you need</span>","mms.therapists.faq.lead":"You do not need to read everything. Open the part you are wondering about, then we can talk.",
    "mms.therapists.final.title":"If you want freelance work<br><span>that you can still choose for yourself, start with an application</span>","mms.therapists.final.lead":"Having a profile does not mean taking every job. You decide when you are ready and which work suits you.","mms.therapists.final.apply":"Apply as a Therapist <b>↗</b>","mms.therapists.final.benefits":"View benefits","mms.therapists.final.rules":"Read the rules","mms.therapists.final.customer":"Looking for a massage service? Go to Male Massage →"
  });

  Object.assign(D.zh,{
    "mms.therapists.nav.work":"这份工作适合谁","mms.therapists.nav.ai":"AI 能帮什么","mms.therapists.nav.flow":"从简报到出发","mms.therapists.nav.growth":"资料成长","mms.therapists.nav.apply":"申请",
    "mms.therapists.hero.kicker":"MMS · 理疗师机会","mms.therapists.hero.title":"泰国理疗师的真本事<br><span>一直以来都有口皆碑</span>","mms.therapists.hero.lead":"Male Massage 正在打造一款应用，让有真本事的人获得附近的自由接案机会，不必整天奔波找工作。","mms.therapists.hero.founder":"<b>来自 Per 六年的经验</b>，我希望刚起步的人和已经在做这行的人，都能多一个增加收入的选择。当您有空且附近有合适工作时，系统会把详情送到您面前。先看清楚，再自己决定。","mms.therapists.hero.tag1":"有全职工作也可申请","mms.therapists.hero.tag2":"不必自己四处找工作","mms.therapists.hero.tag3":"先看详情再决定","mms.therapists.hero.apply":"先让 MMS 认识您 <b>↗</b>","mms.therapists.hero.how":"看看如何开始 <b>↓</b>","mms.therapists.hero.proof":"MMS 按真实工作标准筛选。技术非常重要；在 MMD，得体、懂得照顾自己也同样重要。","mms.therapists.hero.customer":"正在寻找按摩服务？前往 Male Massage →",
    "mms.therapists.story.title":"不必猜测工作会是什么样子<br><span>从收到简报到出发，一路滑着看</span>","mms.therapists.story.lead":"有工作进来时，您会先看到重要细节，再决定接受或略过。",
    "mms.therapists.benefits.title":"真正的技术<br><span>值得被看见</span>","mms.therapists.benefits.lead":"无论刚开始还是已经专业从业，只要您认真照顾客户，也想多一个接案方式，MMS 想认识您。",
    "mms.therapists.ai.title":"附近有合适工作时<br><span>系统提醒，选择权在您</span>","mms.therapists.ai.lead":"当工作可能适合您，系统会整理重要信息。接受或略过，始终由您决定。",
    "mms.therapists.growth.title":"持续把工作做好<br><span>您的资料也会一起成长</span>","mms.therapists.growth.lead":"每一份做好的工作都会变成经验，让您慢慢拥有更多选择。",
    "mms.therapists.fit.title":"不必成为同一种人<br><span>认真对待工作，就值得聊聊</span>","mms.therapists.fit.lead":"无论您是新手还是有经验，MMS 会先了解您的投入程度和工作方式。",
    "mms.therapists.faq.title":"还有什么想问的吗？<br><span>只打开您关心的那一项</span>","mms.therapists.faq.lead":"不需要全部读完。打开您关心的部分，再继续聊就好。",
    "mms.therapists.final.title":"如果想拥有一份自由接案<br><span>而且仍能自己选择，就先申请吧</span>","mms.therapists.final.lead":"拥有资料不代表必须接下每一份工作。何时准备好、哪种工作适合您，依然由您决定。","mms.therapists.final.apply":"申请成为理疗师 <b>↗</b>","mms.therapists.final.benefits":"查看福利","mms.therapists.final.rules":"阅读规则","mms.therapists.final.customer":"正在寻找按摩服务？前往 Male Massage →"
  });

  function bind(selector,key,kind){
    var nodes=DOC.querySelectorAll(selector),attr=kind==="html"?"data-i18n-html":"data-i18n-text";
    for(var i=0;i<nodes.length;i+=1) nodes[i].setAttribute(attr,key);
  }
  function run(){
    var root=DOC.getElementById("mms-therapists-maxx"); if(!root)return;
    bind(".m3-nav-links a:nth-child(1)","mms.therapists.nav.work");
    bind(".m3-nav-links a:nth-child(2)","mms.therapists.nav.ai");
    bind(".m3-nav-links a:nth-child(3)","mms.therapists.nav.flow");
    bind(".m3-nav-links a:nth-child(4)","mms.therapists.nav.growth");
    bind(".m3-apply","mms.therapists.nav.apply");
    bind("#mms-top .m3-kicker","mms.therapists.hero.kicker");
    bind("#mms-top .m3-h1","mms.therapists.hero.title","html");
    bind("#mms-top .m3-lead","mms.therapists.hero.lead");
    bind("#mms-top .m3-founder-note","mms.therapists.hero.founder","html");
    bind("#mms-top .m3-tag:nth-child(1)","mms.therapists.hero.tag1");
    bind("#mms-top .m3-tag:nth-child(2)","mms.therapists.hero.tag2");
    bind("#mms-top .m3-tag:nth-child(3)","mms.therapists.hero.tag3");
    bind("#mms-top .m3-btn-primary","mms.therapists.hero.apply","html");
    bind("#mms-top .m3-btn-soft","mms.therapists.hero.how","html");
    bind("#mms-top .m3-proof","mms.therapists.hero.proof");
    bind("#mms-top .m3-customer","mms.therapists.hero.customer");
    bind("#benefits .m3-h2","mms.therapists.benefits.title","html");
    bind("#benefits .m3-head p","mms.therapists.benefits.lead");
    bind("#ai .m3-h2","mms.therapists.ai.title","html");
    bind("#ai .m3-copy p","mms.therapists.ai.lead");
    bind("#how-work .m3-h2","mms.therapists.story.title","html");
    bind("#how-work .m3-head p","mms.therapists.story.lead");
    bind("#growth .m3-h2","mms.therapists.growth.title","html");
    bind("#growth .m3-copy p","mms.therapists.growth.lead");
    bind("#fit .m3-h2","mms.therapists.fit.title","html");
    bind("#fit .m3-copy p","mms.therapists.fit.lead");
    bind("#faq .m3-h2","mms.therapists.faq.title","html");
    bind("#faq .m3-head p","mms.therapists.faq.lead");
    bind("#apply .m3-h2","mms.therapists.final.title","html");
    bind("#apply .m3-copy>p:not(.m3-kicker)","mms.therapists.final.lead");
    bind("#apply .m3-btn-lime","mms.therapists.final.apply","html");
    bind("#apply .m3-btn-glass:nth-of-type(2)","mms.therapists.final.benefits");
    bind("#apply .m3-btn-glass:nth-of-type(3)","mms.therapists.final.rules");
    bind("#apply .m3-final-route","mms.therapists.final.customer");
    if(W.MMD_I18N&&W.MMD_I18N.apply)W.MMD_I18N.apply(DOC);
  }
  if(DOC.readyState==="loading")DOC.addEventListener("DOMContentLoaded",run); else run();
  DOC.addEventListener("mmd:i18n:ready",run);
})();
/* Complete body copy for the MMS Therapist page. Uses the canonical MMD i18n runtime only. */
(function(){"use strict";var W=window,DOC=document,D=W.I18N_DICT=W.I18N_DICT||{};D.en=D.en||{};D.zh=D.zh||{};Object.assign(D.en,{"mms.therapists.full.tag1":"<i></i>Apply alongside a full-time job","mms.therapists.full.tag2":"<i></i>No need to chase jobs","mms.therapists.full.tag3":"<i></i>See the details first","mms.therapists.full.status1a":"Near you","mms.therapists.full.status1b":"Know where the work is","mms.therapists.full.status2a":"Read first","mms.therapists.full.status2b":"Understand the job in full","mms.therapists.full.status3a":"You choose","mms.therapists.full.status3b":"Accept or pass yourself","mms.therapists.full.quick1k":"01 · FOR THERAPISTS","mms.therapists.full.quick1t":"Real skill deserves to be seen","mms.therapists.full.quick1d":"Whether you are just starting or already work professionally, you can apply.","mms.therapists.full.quick2k":"02 · WHEN READY","mms.therapists.full.quick2t":"Open availability when you are free","mms.therapists.full.quick2d":"No shop shift, and no need to be ready all the time.","mms.therapists.full.quick3k":"03 · MMS STANDARD","mms.therapists.full.quick3t":"We choose people carefully before jobs go out","mms.therapists.full.quick3d":"Good work starts with both skill and a service mindset.","mms.therapists.full.b1s":"01","mms.therapists.full.b1h":"No need to stay at a shop","mms.therapists.full.b1p":"You can start with a profile while working, studying, or following your own schedule.","mms.therapists.full.b1e":"FREELANCE FIRST","mms.therapists.full.b2s":"02","mms.therapists.full.b2h":"The brief comes first","mms.therapists.full.b2p":"Area, time, job format and key information should come before an answer.","mms.therapists.full.b2e":"BRIEF BEFORE ACCEPT","mms.therapists.full.b3s":"03","mms.therapists.full.b3h":"Pass when you are not ready","mms.therapists.full.b3p":"If a job does not suit that day, you do not have to force it to please a system.","mms.therapists.full.b3e":"YOU DECIDE","mms.therapists.full.b4s":"04","mms.therapists.full.b4h":"AI reduces the small tasks","mms.therapists.full.b4p":"It arranges the context clearly before you make your own decision.","mms.therapists.full.b4e":"AI ASSISTED","mms.therapists.full.b5s":"05","mms.therapists.full.b5h":"MMS helps coordinate","mms.therapists.full.b5p":"The working details should not be something a therapist has to carry alone.","mms.therapists.full.b5e":"COORDINATION","mms.therapists.full.life1s":"AVAILABILITY FIRST","mms.therapists.full.life1t":"Open up when you have time","mms.therapists.full.life1d":"You do not need to watch notifications all day. Work should add to the life you already have.","mms.therapists.full.life2s":"YOUR PACE","mms.therapists.full.life2t":"Your profile stays with you","mms.therapists.full.life2d":"It does not tie you to a shop. A day without availability is still your day.","mms.therapists.full.ai1t":"A nearby job appears when it fits","mms.therapists.full.ai1d":"No chasing jobs or watching a screen all day.","mms.therapists.full.ai2t":"Read before replying","mms.therapists.full.ai2d":"Know where, when, and what you need to prepare.","mms.therapists.full.ai3t":"Are you ready?","mms.therapists.full.ai3d":"Look first, then accept. No one forces you into work you are not ready for.","mms.therapists.full.ai4t":"After you accept","mms.therapists.full.ai4d":"The working details follow so you can focus on real service.","mms.therapists.full.aihuman":"<strong>The system makes work easier to find; it does not choose for you.</strong> Accepting or passing is always the therapist’s decision.","mms.therapists.full.story1t":"A job arrives; it does not mean you must take it","mms.therapists.full.story1d":"See the client brief and skill fit first.","mms.therapists.full.story2t":"Check the area and distance first","mms.therapists.full.story2d":"A job may fit, but if it is too far that day, you can still pass.","mms.therapists.full.story3t":"Decision details stay together","mms.therapists.full.story3d":"You do not have to accept first and ask questions later.","mms.therapists.full.story4t":"Fit check is guidance, not pressure","mms.therapists.full.story4d":"Area fit and skill fit help you decide; they do not force a yes.","mms.therapists.full.story5t":"See travel time before leaving your day","mms.therapists.full.story5d":"Fifteen minutes and fifty minutes can lead to very different decisions.","mms.therapists.full.story6t":"After you accept","mms.therapists.full.story6d":"The On My Way route, client notes and coordination come next.","mms.therapists.full.step1h":"Apply and share your real skills","mms.therapists.full.step1p":"Start with what you have. No need to make your profile bigger than you are.","mms.therapists.full.step2h":"MMS helps your profile start in the right place","mms.therapists.full.step2p":"Not everyone has to begin with the same type of job.","mms.therapists.full.step3h":"Open availability when you are ready","mms.therapists.full.step3p":"Availability belongs to you; you do not have to stay online all day.","mms.therapists.full.step4h":"Brief before accept or pass","mms.therapists.full.step4p":"Area, time, skill and the important context come before your answer.","mms.therapists.full.step5h":"Do the work; then let the profile grow","mms.therapists.full.step5p":"Experience and feedback build from real jobs over time.","mms.therapists.full.g1t":"Skills updated","mms.therapists.full.g1d":"Add only what you can genuinely do.","mms.therapists.full.g2t":"New photo","mms.therapists.full.g2d":"Keep the image true to who you are now.","mms.therapists.full.g3t":"Experience +","mms.therapists.full.g3d":"Build it one real job at a time.","mms.therapists.full.g4t":"Rating & feedback","mms.therapists.full.g4d":"Use feedback to keep improving your work.","mms.therapists.full.fit1":"Want extra income","mms.therapists.full.fit2":"Have a Massage / Wellness foundation","mms.therapists.full.fit3":"Take care of yourself and communicate well","mms.therapists.full.fit4":"Enjoy a modern service role","mms.therapists.full.fit5":"Do not want to be tied to a traditional shop","mms.therapists.full.fitnote":"Not sure whether this suits you? Send your profile and let’s talk first. You do not need to open availability right away.","mms.therapists.full.faq1q":"Do I need to work at a shop?","mms.therapists.full.faq1a":"No. MMS treats this as freelance work: open availability when it suits you, without a fixed employee shift.","mms.therapists.full.faq2q":"Is work or income guaranteed?","mms.therapists.full.faq2a":"No. Job volume depends on real demand, area, time, skill and how each brief fits. I do not want anyone applying because they were promised too much.","mms.therapists.full.faq3q":"Will AI choose jobs for me?","mms.therapists.full.faq3a":"No. AI organises the context and summarises the brief. Accept or pass remains the therapist’s decision.","mms.therapists.full.faq4q":"Can I apply if I am still learning?","mms.therapists.full.faq4a":"Yes, apply and talk with us. Tell us honestly what you can do, then we can see where to begin. No need to present yourself as more experienced than you are.","mms.therapists.full.faq5q":"Do I need massage experience?","mms.therapists.full.faq5a":"A Massage or Wellness foundation helps, but MMS looks at the whole picture: skill, service mindset, communication and readiness.","mms.therapists.full.faq6q":"Who are the clients?","mms.therapists.full.faq6a":"There are different contexts. The information needed to decide is in the brief before accepting, with everyone’s privacy respected.","mms.therapists.full.faq7q":"Can I decline a job?","mms.therapists.full.faq7a":"Yes. That is the heart of this freelance flow: see the information first, then decide whether a job suits you.","mms.therapists.full.faq8q":"What is the best way to start?","mms.therapists.full.faq8a":"Start with the application. Add what you have honestly; if MMS needs anything else, we will get back to you.","mms.therapists.full.finalk":"PROFILE READY · WHEN YOU ARE","mms.therapists.full.login":"Therapist login","mms.therapists.full.footer":"A new generation of freelance therapists · AI organises the details; you choose the work"});Object.assign(D.zh,{"mms.therapists.full.tag1":"<i></i>有全职工作也可申请","mms.therapists.full.tag2":"<i></i>不必自己四处找工作","mms.therapists.full.tag3":"<i></i>先看详情再决定","mms.therapists.full.status1a":"在您附近","mms.therapists.full.status1b":"先知道工作地点","mms.therapists.full.status2a":"先阅读","mms.therapists.full.status2b":"完整了解工作内容","mms.therapists.full.status3a":"由您选择","mms.therapists.full.status3b":"自己决定接受或略过","mms.therapists.full.quick1k":"01 · 面向理疗师","mms.therapists.full.quick1t":"真正的技术值得被看见","mms.therapists.full.quick1d":"无论刚开始还是已经专业从业，都可以先申请。","mms.therapists.full.quick2k":"02 · 准备好再开","mms.therapists.full.quick2t":"有空时再开放接案","mms.therapists.full.quick2d":"不必固定在店里，也不必随时待命。","mms.therapists.full.quick3k":"03 · MMS 标准","mms.therapists.full.quick3t":"先选对人，再发送工作","mms.therapists.full.quick3d":"好工作始于技术与服务心态兼具的人。","mms.therapists.full.b1s":"01","mms.therapists.full.b1h":"不必固定在店里","mms.therapists.full.b1p":"有工作、在读书，或有自己的时间表，都能先从资料开始。","mms.therapists.full.b1e":"自由接案优先","mms.therapists.full.b2s":"02","mms.therapists.full.b2h":"先看简报","mms.therapists.full.b2p":"区域、时间、工作形式和重要资讯应在回复前先说明。","mms.therapists.full.b2e":"先简报，后决定","mms.therapists.full.b3s":"03","mms.therapists.full.b3h":"还没准备好就略过","mms.therapists.full.b3p":"如果这份工作不适合当天，不需要勉强自己去迎合系统。","mms.therapists.full.b3e":"由您决定","mms.therapists.full.b4s":"04","mms.therapists.full.b4h":"AI 减少琐事","mms.therapists.full.b4p":"它会整理资讯，让您再自己决定。","mms.therapists.full.b4e":"AI 协助","mms.therapists.full.b5s":"05","mms.therapists.full.b5h":"MMS 协助协调","mms.therapists.full.b5p":"工作安排不该全由理疗师一个人承担。","mms.therapists.full.b5e":"协调支持","mms.therapists.full.life1s":"先看空档","mms.therapists.full.life1t":"有时间再开放","mms.therapists.full.life1d":"不必整天盯着通知。工作应该为您现有的生活加分。","mms.therapists.full.life2s":"按自己的节奏","mms.therapists.full.life2t":"资料属于您自己","mms.therapists.full.life2d":"它不会把您绑在店里。没有开放接案的一天，依然是您自己的日子。","mms.therapists.full.ai1t":"附近有合适工作时才出现","mms.therapists.full.ai1d":"不必自己找工作，也不必整天盯着屏幕。","mms.therapists.full.ai2t":"回复前先阅读","mms.therapists.full.ai2d":"先知道地点、时间和需要准备什么。","mms.therapists.full.ai3t":"准备好了吗？","mms.therapists.full.ai3d":"先看清楚再接受。没有人会强迫您接下尚未准备好的工作。","mms.therapists.full.ai4t":"接受之后","mms.therapists.full.ai4d":"后续安排会接上，让您能专心做好服务。","mms.therapists.full.aihuman":"<strong>系统让找工作更轻松，但不会替您做选择。</strong> 接受或略过，始终由理疗师决定。","mms.therapists.full.story1t":"有工作进来，不代表一定要接","mms.therapists.full.story1d":"先看客户简报和技能匹配。","mms.therapists.full.story2t":"先看区域和距离","mms.therapists.full.story2d":"工作可能合适，但当天太远，仍然可以略过。","mms.therapists.full.story3t":"决定所需资讯放在一起","mms.therapists.full.story3d":"不必先接受，再慢慢提问。","mms.therapists.full.story4t":"匹配是参考，不是压力","mms.therapists.full.story4d":"区域和技能匹配帮助判断，不会强迫您说好。","mms.therapists.full.story5t":"离开原本生活前先看交通时间","mms.therapists.full.story5d":"十五分钟和五十分钟，可能得到完全不同的答案。","mms.therapists.full.story6t":"接受之后","mms.therapists.full.story6d":"接着才进入 On My Way、客户备注和后续协调。","mms.therapists.full.step1h":"申请并如实说明技能","mms.therapists.full.step1p":"从已有的开始，不必把资料包装得超过自己。","mms.therapists.full.step2h":"MMS 帮您从合适的位置开始","mms.therapists.full.step2p":"每个人不必从同一种工作起步。","mms.therapists.full.step3h":"准备好再开放接案","mms.therapists.full.step3p":"可接案状态属于您，不必整天在线等候。","mms.therapists.full.step4h":"先看简报，再决定接受或略过","mms.therapists.full.step4p":"区域、时间、技能和重要情境都应在回复前说明。","mms.therapists.full.step5h":"认真工作，资料自然成长","mms.therapists.full.step5p":"经验和评价会随真实工作慢慢累积。","mms.therapists.full.g1t":"技能更新","mms.therapists.full.g1d":"只添加真正会做的项目。","mms.therapists.full.g2t":"新照片","mms.therapists.full.g2d":"让照片符合现在真实的您。","mms.therapists.full.g3t":"经验 +","mms.therapists.full.g3d":"从每一份真实工作慢慢累积。","mms.therapists.full.g4t":"评分与回馈","mms.therapists.full.g4d":"用回馈持续改善服务。","mms.therapists.full.fit1":"想增加收入","mms.therapists.full.fit2":"有按摩 / Wellness 基础","mms.therapists.full.fit3":"懂得照顾自己，也善于沟通","mms.therapists.full.fit4":"喜欢新一代服务工作","mms.therapists.full.fit5":"不想被传统店铺绑定","mms.therapists.full.fitnote":"还不确定是否适合？先把资料发来聊聊，不需要马上开放接案。","mms.therapists.full.faq1q":"需要固定在店里工作吗？","mms.therapists.full.faq1a":"不需要。MMS 将此定位为自由接案：在您方便的时间开放接案，没有固定员工班次。","mms.therapists.full.faq2q":"会保证工作或收入吗？","mms.therapists.full.faq2a":"不会。工作量取决于真实需求、区域、时间、技能以及每份简报的匹配程度。我不希望任何人因为被过度承诺而申请。","mms.therapists.full.faq3q":"AI 会替我选择工作吗？","mms.therapists.full.faq3a":"不会。AI 会整理情境并总结简报；接受或略过仍由理疗师自己决定。","mms.therapists.full.faq4q":"还在学习也能申请吗？","mms.therapists.full.faq4a":"可以，先申请聊聊。如实说明您目前能做什么，再一起看看从哪里开始；不必把自己包装得比实际更有经验。","mms.therapists.full.faq5q":"一定要有按摩经验吗？","mms.therapists.full.faq5a":"按摩或 Wellness 基础会很有帮助，但 MMS 会看整体：技能、服务心态、沟通和准备程度。","mms.therapists.full.faq6q":"客户是谁？","mms.therapists.full.faq6a":"有不同情境。接受前的简报会提供判断所需资讯，并照顾所有人的隐私。","mms.therapists.full.faq7q":"可以拒绝工作吗？","mms.therapists.full.faq7a":"可以。这正是自由接案的核心：先看资讯，再判断工作是否适合您。","mms.therapists.full.faq8q":"最适合从哪里开始？","mms.therapists.full.faq8a":"先填写申请表。如实写下已有的资料；如果 MMS 还需要什么，会再联系您。","mms.therapists.full.finalk":"资料准备好 · 等您准备好","mms.therapists.full.login":"理疗师登录","mms.therapists.full.footer":"新一代自由接案理疗师 · AI 整理资讯，由您选择工作"});var binds=[["#mms-top .m3-tag:nth-child(1)","mms.therapists.full.tag1","html"],["#mms-top .m3-tag:nth-child(2)","mms.therapists.full.tag2","html"],["#mms-top .m3-tag:nth-child(3)","mms.therapists.full.tag3","html"],["#mms-top .m3-status:nth-child(1) b","mms.therapists.full.status1a"],["#mms-top .m3-status:nth-child(1) span","mms.therapists.full.status1b"],["#mms-top .m3-status:nth-child(2) b","mms.therapists.full.status2a"],["#mms-top .m3-status:nth-child(2) span","mms.therapists.full.status2b"],["#mms-top .m3-status:nth-child(3) b","mms.therapists.full.status3a"],["#mms-top .m3-status:nth-child(3) span","mms.therapists.full.status3b"],["#mms-top .m3-quick-card:nth-child(1) b","mms.therapists.full.quick1k"],["#mms-top .m3-quick-card:nth-child(1) strong","mms.therapists.full.quick1t"],["#mms-top .m3-quick-card:nth-child(1) span","mms.therapists.full.quick1d"],["#mms-top .m3-quick-card:nth-child(2) b","mms.therapists.full.quick2k"],["#mms-top .m3-quick-card:nth-child(2) strong","mms.therapists.full.quick2t"],["#mms-top .m3-quick-card:nth-child(2) span","mms.therapists.full.quick2d"],["#mms-top .m3-quick-card:nth-child(3) b","mms.therapists.full.quick3k"],["#mms-top .m3-quick-card:nth-child(3) strong","mms.therapists.full.quick3t"],["#mms-top .m3-quick-card:nth-child(3) span","mms.therapists.full.quick3d"],["#benefits .m3-benefit:nth-child(1) small","mms.therapists.full.b1s"],["#benefits .m3-benefit:nth-child(1) h3","mms.therapists.full.b1h"],["#benefits .m3-benefit:nth-child(1) p","mms.therapists.full.b1p"],["#benefits .m3-benefit:nth-child(1) em","mms.therapists.full.b1e"],["#benefits .m3-benefit:nth-child(2) small","mms.therapists.full.b2s"],["#benefits .m3-benefit:nth-child(2) h3","mms.therapists.full.b2h"],["#benefits .m3-benefit:nth-child(2) p","mms.therapists.full.b2p"],["#benefits .m3-benefit:nth-child(2) em","mms.therapists.full.b2e"],["#benefits .m3-benefit:nth-child(3) small","mms.therapists.full.b3s"],["#benefits .m3-benefit:nth-child(3) h3","mms.therapists.full.b3h"],["#benefits .m3-benefit:nth-child(3) p","mms.therapists.full.b3p"],["#benefits .m3-benefit:nth-child(3) em","mms.therapists.full.b3e"],["#benefits .m3-benefit:nth-child(4) small","mms.therapists.full.b4s"],["#benefits .m3-benefit:nth-child(4) h3","mms.therapists.full.b4h"],["#benefits .m3-benefit:nth-child(4) p","mms.therapists.full.b4p"],["#benefits .m3-benefit:nth-child(4) em","mms.therapists.full.b4e"],["#benefits .m3-benefit:nth-child(5) small","mms.therapists.full.b5s"],["#benefits .m3-benefit:nth-child(5) h3","mms.therapists.full.b5h"],["#benefits .m3-benefit:nth-child(5) p","mms.therapists.full.b5p"],["#benefits .m3-benefit:nth-child(5) em","mms.therapists.full.b5e"],["#benefits .m3-life:nth-child(1) small","mms.therapists.full.life1s"],["#benefits .m3-life:nth-child(1) strong","mms.therapists.full.life1t"],["#benefits .m3-life:nth-child(1) span","mms.therapists.full.life1d"],["#benefits .m3-life:nth-child(2) small","mms.therapists.full.life2s"],["#benefits .m3-life:nth-child(2) strong","mms.therapists.full.life2t"],["#benefits .m3-life:nth-child(2) span","mms.therapists.full.life2d"],["#ai .m3-ai-card:nth-child(1) strong","mms.therapists.full.ai1t"],["#ai .m3-ai-card:nth-child(1) span","mms.therapists.full.ai1d"],["#ai .m3-ai-card:nth-child(2) strong","mms.therapists.full.ai2t"],["#ai .m3-ai-card:nth-child(2) span","mms.therapists.full.ai2d"],["#ai .m3-ai-card:nth-child(3) strong","mms.therapists.full.ai3t"],["#ai .m3-ai-card:nth-child(3) span","mms.therapists.full.ai3d"],["#ai .m3-ai-card:nth-child(4) strong","mms.therapists.full.ai4t"],["#ai .m3-ai-card:nth-child(4) span","mms.therapists.full.ai4d"],["#ai .m3-human","mms.therapists.full.aihuman","html"],["#how-work .m3-story-card:nth-child(1) strong","mms.therapists.full.story1t"],["#how-work .m3-story-card:nth-child(2) strong","mms.therapists.full.story2t"],["#how-work .m3-story-card:nth-child(3) strong","mms.therapists.full.story3t"],["#how-work .m3-story-card:nth-child(4) strong","mms.therapists.full.story4t"],["#how-work .m3-story-card:nth-child(5) strong","mms.therapists.full.story5t"],["#how-work .m3-story-card:nth-child(6) strong","mms.therapists.full.story6t"],["#how-work .m3-story-card:nth-child(1) span","mms.therapists.full.story1d"],["#how-work .m3-story-card:nth-child(2) span","mms.therapists.full.story2d"],["#how-work .m3-story-card:nth-child(3) span","mms.therapists.full.story3d"],["#how-work .m3-story-card:nth-child(4) span","mms.therapists.full.story4d"],["#how-work .m3-story-card:nth-child(5) span","mms.therapists.full.story5d"],["#how-work .m3-story-card:nth-child(6) span","mms.therapists.full.story6d"],["#how-work .m3-step:nth-child(1) h3","mms.therapists.full.step1h"],["#how-work .m3-step:nth-child(2) h3","mms.therapists.full.step2h"],["#how-work .m3-step:nth-child(3) h3","mms.therapists.full.step3h"],["#how-work .m3-step:nth-child(4) h3","mms.therapists.full.step4h"],["#how-work .m3-step:nth-child(5) h3","mms.therapists.full.step5h"],["#how-work .m3-step:nth-child(1) p","mms.therapists.full.step1p"],["#how-work .m3-step:nth-child(2) p","mms.therapists.full.step2p"],["#how-work .m3-step:nth-child(3) p","mms.therapists.full.step3p"],["#how-work .m3-step:nth-child(4) p","mms.therapists.full.step4p"],["#how-work .m3-step:nth-child(5) p","mms.therapists.full.step5p"],["#growth .m3-growth-point:nth-child(1) strong","mms.therapists.full.g1t"],["#growth .m3-growth-point:nth-child(2) strong","mms.therapists.full.g2t"],["#growth .m3-growth-point:nth-child(3) strong","mms.therapists.full.g3t"],["#growth .m3-growth-point:nth-child(4) strong","mms.therapists.full.g4t"],["#growth .m3-growth-point:nth-child(1) span","mms.therapists.full.g1d"],["#growth .m3-growth-point:nth-child(2) span","mms.therapists.full.g2d"],["#growth .m3-growth-point:nth-child(3) span","mms.therapists.full.g3d"],["#growth .m3-growth-point:nth-child(4) span","mms.therapists.full.g4d"],["#fit .m3-pill:nth-child(1)","mms.therapists.full.fit1"],["#fit .m3-pill:nth-child(2)","mms.therapists.full.fit2"],["#fit .m3-pill:nth-child(3)","mms.therapists.full.fit3"],["#fit .m3-pill:nth-child(4)","mms.therapists.full.fit4"],["#fit .m3-pill:nth-child(5)","mms.therapists.full.fit5"],["#fit .m3-note","mms.therapists.full.fitnote"],["#faq details:nth-child(1) summary","mms.therapists.full.faq1q","html"],["#faq details:nth-child(2) summary","mms.therapists.full.faq2q","html"],["#faq details:nth-child(3) summary","mms.therapists.full.faq3q","html"],["#faq details:nth-child(4) summary","mms.therapists.full.faq4q","html"],["#faq details:nth-child(5) summary","mms.therapists.full.faq5q","html"],["#faq details:nth-child(6) summary","mms.therapists.full.faq6q","html"],["#faq details:nth-child(7) summary","mms.therapists.full.faq7q","html"],["#faq details:nth-child(8) summary","mms.therapists.full.faq8q","html"],["#faq details:nth-child(1) .m3-answer","mms.therapists.full.faq1a"],["#faq details:nth-child(2) .m3-answer","mms.therapists.full.faq2a"],["#faq details:nth-child(3) .m3-answer","mms.therapists.full.faq3a"],["#faq details:nth-child(4) .m3-answer","mms.therapists.full.faq4a"],["#faq details:nth-child(5) .m3-answer","mms.therapists.full.faq5a"],["#faq details:nth-child(6) .m3-answer","mms.therapists.full.faq6a"],["#faq details:nth-child(7) .m3-answer","mms.therapists.full.faq7a"],["#faq details:nth-child(8) .m3-answer","mms.therapists.full.faq8a"],["#apply .m3-kicker","mms.therapists.full.finalk"],["#apply .m3-btn-glass:nth-of-type(4)","mms.therapists.full.login"],[".m3-footer p","mms.therapists.full.footer"]];function run(){var root=DOC.getElementById("mms-therapists-maxx");if(!root)return;binds.forEach(function(item){var nodes=DOC.querySelectorAll(item[0]),attr=item[2]==="html"?"data-i18n-html":"data-i18n-text";for(var i=0;i<nodes.length;i++)nodes[i].setAttribute(attr,item[1])});if(W.MMD_I18N&&W.MMD_I18N.apply)W.MMD_I18N.apply(DOC)}if(DOC.readyState==="loading")DOC.addEventListener("DOMContentLoaded",run);else run();DOC.addEventListener("mmd:i18n:ready",run)})();

/* Preserve the FAQ disclosure icon when translated copy replaces each summary. */
(function(){"use strict";var D=window.I18N_DICT||{},icon=' <i class="m3-plus" aria-hidden="true"></i>';["en","zh"].forEach(function(lang){if(!D[lang])return;for(var i=1;i<=8;i++){var key="mms.therapists.full.faq"+i+"q";if(D[lang][key]&&D[lang][key].indexOf("m3-plus")<0)D[lang][key]+=icon}})})();

;

/* SOURCE: completed-pages.registry.js */
/* MMD Prive — completed/current route registry for canonical i18n rollout.
   2026-09-04. Historical previews, copies, placeholders and drafts are excluded. */
(function () {
  "use strict";

  var W = window;
  var routes = [
    { path: "/", world: "public" },
    { path: "/profiles", world: "public", bundle: "profiles" },
    { path: "/public/access", world: "public" },
    { path: "/services/companion", world: "public" },
    { path: "/booking", world: "public" },
    { path: "/find", world: "public" },
    { path: "/apply/public-model", world: "public", bundle: "public-model-apply" },
    { path: "/therapists", world: "mms" },
    { path: "/membership", world: "member" },
    { path: "/terms", world: "trust" },
    { path: "/privacy-policy", world: "trust" },
    { path: "/aftercare", world: "trust" },
    { path: "/tmib", world: "public" },
    { path: "/trust/start", world: "trust" },
    { path: "/trust/inme", world: "trust" },

    { path: "/member/login", world: "member" },
    { path: "/member/dashboard", world: "member" },
    { path: "/member/requests", world: "member" },
    { path: "/member/private", world: "member" },
    { path: "/member/membership", world: "member" },
    { path: "/member/kenji-ai-20", world: "member" },
    { path: "/sigil/member/membership/benefits", world: "member", bundle: "member-membership-benefits" },
    { path: "/pay/membership", world: "member" },
    { path: "/confirm/payment-proof", world: "member" },
    { path: "/confirm/public-access-payment", world: "public" },
    { path: "/confirm/public-access-received", world: "public" },
    { path: "/confirm/access-proof", world: "public" },
    { path: "/blackcard/black-card", world: "member", bundle: "blackcard-black-card" },
    { path: "/blackcard/confirm", world: "member", bundle: "blackcard-confirm" },

    { path: "/promotion/6-years-care-back", world: "campaign", bundle: "care-back" },
    { path: "/promotion/6-years-care-back/wish", world: "campaign", bundle: "care-back-wish" },

    { path: "/male-massage/", world: "mms", bundle: "mms" },
    { path: "/male-massage/home", world: "mms", bundle: "mms" },
    { path: "/male-massage/how-to-use", world: "mms", bundle: "mms" },
    { path: "/male-massage/member/mms-booking", world: "mms", bundle: "mms" },
    { path: "/male-massage/therapists/mms", world: "mms", bundle: "mms" },
    { path: "/apply/mms-therapist", world: "mms", bundle: "mms-therapist-application" },
    { path: "/apply/mms-therapist-benefits", world: "mms" },
    { path: "/apply/mms-therapist-rules", world: "mms" },
    { path: "/male-massage/rules/mms-therapist", world: "mms" },
    { path: "/male-massage/apply/mms-fast-track", world: "mms" },

    { path: "/partner/referral", world: "partner" },
    { path: "/shop", world: "shop", bundle: "mmd-shop" },
    { path: "/shop/supplier/portal", world: "shop", bundle: "mmd-shop" },

    { path: "/studio", world: "internal" },
    { path: "/internal/admin/studio", world: "internal" },
    { path: "/internal/admin/studio/upload", world: "internal" },
    { path: "/internal/admin/studio/review", world: "internal" },
    { path: "/internal/admin/studio/model-preview", world: "internal" },
    { path: "/internal/admin/kenji", world: "internal" },
    { path: "/internal/admin/kenji-client-intake", world: "internal" },
    { path: "/internal/admin/jobs/create-job", world: "internal" },
    { path: "/internal/admin/member-intelligence", world: "internal" },
    { path: "/internal/admin/membership-access", world: "internal" }
  ];

  var normalized = routes.map(function (item) {
    return Object.assign({
      locales: ["th", "en", "zh"],
      runtime: "canonical",
      fallback: "selected>th>en>existing-copy",
      exposure: item.world === "internal" ? "internal" : "customer-safe"
    }, item);
  });

  W.MMD_I18N_COMPLETED_ROUTES = normalized;

  function current() {
    var path = (location.pathname || "/").replace(/\/+$/, "") || "/";
    for (var i = 0; i < normalized.length; i += 1) {
      var candidate = normalized[i].path.replace(/\/+$/, "") || "/";
      if (candidate === path) return normalized[i];
    }
    return null;
  }

  try {
    var active = current();
    if (active) {
      document.documentElement.setAttribute("data-mmd-i18n-route", active.path);
      document.documentElement.setAttribute("data-mmd-world", document.documentElement.getAttribute("data-mmd-world") || active.world);
      document.documentElement.setAttribute("data-mmd-i18n-runtime", "canonical");
    }
  } catch (_) {}
})();

;

/* SOURCE: i18n.autobind.js */
/* =====================================================
   MMD Prive i18n Auto-bind — v1.0.1 (2026-09-04)

   Migration bridge for finished Webflow pages that were built before
   data-i18n attributes became mandatory. It binds ONLY exact, unique
   dictionary values and never guesses translations.
   ===================================================== */
(function () {
  "use strict";

  var W = window;
  var D = document;
  if (W.__MMD_I18N_AUTOBIND_V1__) return;
  W.__MMD_I18N_AUTOBIND_V1__ = true;

  var LANGS = ["th", "en", "zh"];
  var TEXT_SELECTOR = "h1,h2,h3,h4,h5,h6,p,span,strong,small,em,button,a,label,summary,option,legend,dt,dd,li";
  var ATTRS = [
    { name: "placeholder", binding: "data-i18n-placeholder" },
    { name: "title", binding: "data-i18n-title" },
    { name: "aria-label", binding: "data-i18n-aria-label" }
  ];

  function norm(value) {
    return String(value == null ? "" : value).replace(/\s+/g, " ").trim();
  }

  function currentPath() {
    return (location.pathname || "/").replace(/\/+$/, "") || "/";
  }

  function completedRoute() {
    var registry = W.MMD_I18N_COMPLETED_ROUTES;
    if (!Array.isArray(registry) || !registry.length) return false;
    var path = currentPath();
    for (var i = 0; i < registry.length; i += 1) {
      var candidate = String(registry[i].path || "/").replace(/\/+$/, "") || "/";
      if (candidate === path) return true;
    }
    return false;
  }

  function usable(value) {
    var text = norm(value);
    return text.length >= 2 && text.length <= 1200;
  }

  function dictionary() {
    return W.I18N_DICT || W.I18N || W.DICT || {};
  }

  function buildReverse() {
    var reverse = Object.create(null);
    var source = dictionary();

    LANGS.forEach(function (lang) {
      var table = source[lang] || {};
      Object.keys(table).forEach(function (key) {
        var value = table[key];
        if (typeof value !== "string" || !usable(value)) return;
        var token = norm(value);
        if (!reverse[token]) reverse[token] = key;
        else if (reverse[token] !== key) reverse[token] = null;
      });
    });

    return reverse;
  }

  function excluded(el) {
    if (!el || !el.closest) return true;
    return !!el.closest("script,style,pre,code,svg,math,[contenteditable='true'],[data-no-i18n],[data-mmd-i18n-skip]");
  }

  function hasExplicitBinding(el) {
    if (!el || !el.hasAttribute) return true;
    return el.hasAttribute("data-i18n") ||
      el.hasAttribute("data-i18n-text") ||
      el.hasAttribute("data-i18n-html") ||
      el.hasAttribute("data-i18n-placeholder") ||
      el.hasAttribute("data-i18n-title") ||
      el.hasAttribute("data-i18n-aria-label") ||
      el.hasAttribute("data-i18n-attr");
  }

  function safeTextElement(el) {
    if (excluded(el) || hasExplicitBinding(el)) return false;
    var children = el.children || [];
    for (var i = 0; i < children.length; i += 1) {
      var child = children[i];
      if (child.getAttribute && child.getAttribute("aria-hidden") === "true") continue;
      if (norm(child.textContent)) return false;
    }
    return usable(el.textContent);
  }

  function bindText(root, reverse) {
    var nodes = root && root.querySelectorAll ? root.querySelectorAll(TEXT_SELECTOR) : [];
    for (var i = 0; i < nodes.length; i += 1) {
      var el = nodes[i];
      if (!safeTextElement(el)) continue;
      var key = reverse[norm(el.textContent)];
      if (!key) continue;
      el.setAttribute("data-i18n-text", key);
      el.setAttribute("data-mmd-i18n-autobound", "text");
    }
  }

  function bindAttributes(root, reverse) {
    var all = root && root.querySelectorAll ? root.querySelectorAll("[placeholder],[title],[aria-label]") : [];
    for (var i = 0; i < all.length; i += 1) {
      var el = all[i];
      if (excluded(el)) continue;
      for (var j = 0; j < ATTRS.length; j += 1) {
        var item = ATTRS[j];
        if (el.hasAttribute(item.binding)) continue;
        var raw = el.getAttribute(item.name);
        if (!usable(raw)) continue;
        var key = reverse[norm(raw)];
        if (!key) continue;
        el.setAttribute(item.binding, key);
        el.setAttribute("data-mmd-i18n-autobound", "attr");
      }
    }
  }

  function scan(root) {
    if (!completedRoute()) return false;
    root = root || D;
    var reverse = buildReverse();
    bindText(root, reverse);
    bindAttributes(root, reverse);
    try {
      if (W.MMD_I18N && typeof W.MMD_I18N.apply === "function") W.MMD_I18N.apply(root);
      D.documentElement.setAttribute("data-mmd-i18n-autobind", "1");
    } catch (_) {}
    return true;
  }

  function boot() {
    if (!completedRoute()) {
      try { D.documentElement.setAttribute("data-mmd-i18n-autobind", "skipped"); } catch (_) {}
      return;
    }
    scan(D);
    if (typeof W.MutationObserver !== "function" || !D.body) return;
    var queued = false;
    var observer = new W.MutationObserver(function () {
      if (queued) return;
      queued = true;
      W.requestAnimationFrame(function () {
        queued = false;
        scan(D);
      });
    });
    observer.observe(D.body, { childList: true, subtree: true });
    W.__MMD_I18N_AUTOBIND_OBSERVER__ = observer;
  }

  D.addEventListener("mmd:i18n:ready", function () { scan(D); });
  D.addEventListener("mmd:i18n:change", function () { scan(D); });

  if (D.readyState === "loading") D.addEventListener("DOMContentLoaded", boot);
  else boot();
})();

;

/* SOURCE: i18n.core.v21.js */
/* =====================================================
   MMD Prive i18n Core — MULTI-LANGUAGE ROLLOUT v2.1.0
   2026-09-04

   Canonical runtime for Webflow + Worker-rendered HTML.
   Active languages: th / en / zh
   Default language: th
   Future language: jp (known, not active)

   Safety contract:
   - Missing/blank translation never erases existing copy.
   - Fallback order: selected -> Thai -> English -> existing page copy.
   - Webflow's primary html lang does not override the MMD Thai default.
   - mmd_lang and legacy lang stay synchronized.
   ===================================================== */
(function () {
  "use strict";

  var W = window;
  var D = document;
  if (W.__MMD_I18N_V21__) return;
  W.__MMD_I18N_V21__ = true;

  try {
    if (W.__MMD_I18N_OBSERVER__ && W.__MMD_I18N_OBSERVER__.disconnect) {
      W.__MMD_I18N_OBSERVER__.disconnect();
    }
  } catch (_) {}

  var VERSION = "2.1.0-rollout";
  var DEFAULT_LANG = "th";
  var KNOWN_LANGS = ["th", "en", "zh", "jp"];
  var AVAILABLE_LANGS = ["th", "en", "zh"];
  var STORAGE_KEYS = ["mmd_lang", "lang"];
  var BUTTON_SELECTOR = ".mmd-lang-btn,[data-set-lang],[data-lang-btn]";

  function str(value) {
    return value === null || value === undefined ? "" : String(value);
  }

  function trim(value) {
    return str(value).replace(/\s+/g, " ").trim();
  }

  function nonBlank(value) {
    return trim(value) !== "";
  }

  function safeGet(key) {
    try { return W.localStorage.getItem(key); } catch (_) { return null; }
  }

  function safeSet(key, value) {
    try { W.localStorage.setItem(key, value); } catch (_) {}
  }

  function normalizeLang(input) {
    var lang = trim(input).toLowerCase().replace(/_/g, "-");
    if (!lang) return null;
    if (lang === "ja" || lang.indexOf("ja-") === 0 || lang.indexOf("jp-") === 0) return "jp";
    if (lang.indexOf("zh-") === 0) return "zh";
    if (lang.indexOf("th-") === 0) return "th";
    if (lang.indexOf("en-") === 0) return "en";
    return KNOWN_LANGS.indexOf(lang) >= 0 ? lang : null;
  }

  function availableLang(input) {
    var lang = normalizeLang(input);
    return lang && AVAILABLE_LANGS.indexOf(lang) >= 0 ? lang : null;
  }

  function urlLang() {
    try { return availableLang(new URLSearchParams(W.location.search || "").get("lang")); }
    catch (_) { return null; }
  }

  function storedLang() {
    for (var i = 0; i < STORAGE_KEYS.length; i += 1) {
      var lang = availableLang(safeGet(STORAGE_KEYS[i]));
      if (lang) return lang;
    }
    return null;
  }

  function htmlLang() {
    try {
      if (D.documentElement.getAttribute("data-mmd-use-html-lang") !== "true") return null;
      return availableLang(D.documentElement.getAttribute("lang"));
    } catch (_) { return null; }
  }

  function getLang() {
    return urlLang() || storedLang() || htmlLang() || DEFAULT_LANG;
  }

  function persist(input) {
    var lang = availableLang(input) || DEFAULT_LANG;
    for (var i = 0; i < STORAGE_KEYS.length; i += 1) safeSet(STORAGE_KEYS[i], lang);
    try {
      D.documentElement.setAttribute("lang", lang);
      D.documentElement.setAttribute("data-mmd-lang", lang);
    } catch (_) {}
    return lang;
  }

  function normalizeRole(input) {
    var role = trim(input).toLowerCase().replace(/[_\s]+/g, "-");
    var aliases = {
      guest: "guest", free: "guest", public: "guest",
      standard: "standard", std: "standard",
      premium: "premium", pre: "premium",
      vip: "vip", blackcard: "blackcard", "black-card": "blackcard", black: "blackcard",
      svip: "blackcard", "s-vip": "blackcard",
      "7days": "7days", "7-day": "7days", "7-days": "7days", "guest-pass": "7days"
    };
    return aliases[role] || "guest";
  }

  function currentRole(root) {
    var values = [];
    try {
      if (root && root.getAttribute) values.push(root.getAttribute("data-user-role"));
      if (D.body) values.push(D.body.getAttribute("data-user-role"));
    } catch (_) {}
    values.push(safeGet("mmd_role"));
    values.push(safeGet("role"));
    for (var i = 0; i < values.length; i += 1) if (nonBlank(values[i])) return normalizeRole(values[i]);
    return "guest";
  }

  function dict() {
    return W.I18N_DICT || W.I18N || W.DICT || {};
  }

  function lookup(lang, key) {
    var source = dict();
    if (source[lang] && Object.prototype.hasOwnProperty.call(source[lang], key)) return source[lang][key];
    if (source[key] && Object.prototype.hasOwnProperty.call(source[key], lang)) return source[key][lang];
    return null;
  }

  function fallbacks(input) {
    var selected = availableLang(input) || DEFAULT_LANG;
    var order = [selected, "th", "en"];
    var seen = {};
    return order.filter(function (lang) {
      if (seen[lang]) return false;
      seen[lang] = true;
      return true;
    });
  }

  function keyCandidates(base, role, mobile) {
    var key = trim(base);
    if (!key) return [];
    var r = normalizeRole(role);
    var out = [];
    if (mobile) {
      out.push(key + ".m." + r);
      out.push(key + "." + r + ".m");
      out.push(key + ".m");
    }
    out.push(key + "." + r);
    out.push(key);
    var seen = {};
    return out.filter(function (candidate) {
      if (seen[candidate]) return false;
      seen[candidate] = true;
      return true;
    });
  }

  function t(key, options) {
    if (typeof options === "string") options = { lang: options };
    options = options || {};
    var langs = fallbacks(options.lang || getLang());
    var role = normalizeRole(options.role || currentRole(options.root || D.body));
    var keys = keyCandidates(key, role, !!options.mobile);
    for (var i = 0; i < langs.length; i += 1) {
      for (var j = 0; j < keys.length; j += 1) {
        var value = lookup(langs[i], keys[j]);
        if (nonBlank(value)) return str(value);
      }
    }
    return null;
  }

  function qsa(root, selector) {
    return root && root.querySelectorAll ? root.querySelectorAll(selector) : [];
  }

  function isMobileBinding(el) {
    var value = el && el.getAttribute ? el.getAttribute("data-i18n-mobile") : null;
    if (value === null) return false;
    value = trim(value).toLowerCase();
    return value === "" || value === "true" || value === "1" || value === "yes" || value === "mobile";
  }

  function fallback(el, kind, attr) {
    if (!el || !el.getAttribute) return "";
    var specific = "";
    if (kind === "attr" && attr) specific = el.getAttribute("data-fallback-attr-" + str(attr).toLowerCase()) || "";
    else if (kind) specific = el.getAttribute("data-fallback-" + kind) || "";
    return trim(specific || el.getAttribute("data-fallback") || "");
  }

  function applyValue(el, kind, value, attr) {
    var output = nonBlank(value) ? str(value) : fallback(el, kind, attr);
    if (!nonBlank(output)) return;
    if (kind === "text") el.textContent = output;
    else if (kind === "html") el.innerHTML = output;
    else if (kind === "value") {
      try { el.value = output; } catch (_) { el.setAttribute("value", output); }
    } else if (kind === "attr" && attr) el.setAttribute(attr, output);
    else el.setAttribute(kind, output);
  }

  function applySelector(root, selector, keyAttr, kind, lang, role) {
    var nodes = qsa(root, selector);
    for (var i = 0; i < nodes.length; i += 1) {
      var el = nodes[i];
      var value = t(el.getAttribute(keyAttr), { lang: lang, role: role, mobile: isMobileBinding(el), root: root });
      applyValue(el, kind, value);
    }
  }

  function apply(root, options) {
    root = root || D;
    options = options || {};
    var lang = availableLang(options.lang) || getLang();
    var role = normalizeRole(options.role || currentRole(root));

    applySelector(root, "[data-i18n]", "data-i18n", "html", lang, role);
    applySelector(root, "[data-i18n-text]", "data-i18n-text", "text", lang, role);
    applySelector(root, "[data-i18n-html]", "data-i18n-html", "html", lang, role);
    applySelector(root, "[data-i18n-placeholder]", "data-i18n-placeholder", "placeholder", lang, role);
    applySelector(root, "[data-i18n-title]", "data-i18n-title", "title", lang, role);
    applySelector(root, "[data-i18n-aria-label]", "data-i18n-aria-label", "aria-label", lang, role);
    applySelector(root, "[data-i18n-value]", "data-i18n-value", "value", lang, role);

    var attrNodes = qsa(root, "[data-i18n-attr]");
    for (var a = 0; a < attrNodes.length; a += 1) {
      var el = attrNodes[a];
      var items = str(el.getAttribute("data-i18n-attr")).split(/[;,]/g);
      for (var b = 0; b < items.length; b += 1) {
        var idx = items[b].indexOf(":");
        if (idx <= 0) continue;
        var attr = trim(items[b].slice(0, idx));
        var key = trim(items[b].slice(idx + 1));
        if (!attr || !key) continue;
        applyValue(el, "attr", t(key, { lang: lang, role: role, mobile: isMobileBinding(el), root: root }), attr);
      }
    }

    try {
      D.documentElement.setAttribute("data-mmd-lang", lang);
      D.documentElement.setAttribute("data-mmd-role", role);
    } catch (_) {}
    updateButtons(lang);
    dispatch("mmd:i18n:applied", { lang: lang, role: role, version: VERSION });
    return lang;
  }

  function dispatch(name, detail) {
    try { D.dispatchEvent(new W.CustomEvent(name, { detail: detail })); } catch (_) {}
  }

  function updateButtons(lang) {
    var buttons = qsa(D, BUTTON_SELECTOR);
    for (var i = 0; i < buttons.length; i += 1) {
      var button = buttons[i];
      var target = availableLang(button.getAttribute("data-set-lang") || button.getAttribute("data-lang-btn") || button.getAttribute("data-lang"));
      if (!target) continue;
      var active = target === lang;
      if (button.classList) {
        button.classList.toggle("mmd-lang-active", active);
        button.classList.toggle("is-active", active);
      }
      button.setAttribute("aria-pressed", active ? "true" : "false");
    }
  }

  function setLang(input, options) {
    options = options || {};
    var lang = persist(input);
    apply(options.root || D, { lang: lang, role: options.role });
    dispatch("mmd:i18n:change", { lang: lang, version: VERSION });
    return lang;
  }

  function bindButtons() {
    if (D.__MMD_I18N_V21_BUTTONS__) return;
    D.__MMD_I18N_V21_BUTTONS__ = true;
    D.addEventListener("click", function (event) {
      var target = event.target;
      if (target && target.closest) target = target.closest(BUTTON_SELECTOR);
      if (!target || !target.getAttribute) return;
      var lang = target.getAttribute("data-set-lang") || target.getAttribute("data-lang-btn") || target.getAttribute("data-lang");
      if (!availableLang(lang)) return;
      if (event.preventDefault) event.preventDefault();
      setLang(lang);
    });
  }

  function observe() {
    if (typeof W.MutationObserver !== "function") return;
    var target = D.body;
    if (!target) return;
    var observer = new W.MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i += 1) {
        var added = mutations[i].addedNodes || [];
        for (var j = 0; j < added.length; j += 1) {
          if (added[j] && added[j].nodeType === 1) apply(added[j], { lang: getLang() });
        }
      }
    });
    observer.observe(target, { childList: true, subtree: true });
    W.__MMD_I18N_OBSERVER__ = observer;
  }

  function init(options) {
    options = options || {};
    var lang = persist(options.lang || getLang());
    apply(options.root || D, { lang: lang, role: options.role });
    if (options.bindLangButtons !== false) bindButtons();
    if (options.observe !== false) observe();
    dispatch("mmd:i18n:ready", { lang: lang, version: VERSION, languages: AVAILABLE_LANGS.slice() });
    return true;
  }

  var API = {
    version: VERSION,
    languages: AVAILABLE_LANGS.slice(),
    knownLanguages: KNOWN_LANGS.slice(),
    defaultLang: DEFAULT_LANG,
    normalizeLang: normalizeLang,
    normalizeRole: normalizeRole,
    getLang: getLang,
    setLang: setLang,
    t: t,
    apply: apply,
    bindLangButtons: bindButtons,
    init: init
  };

  W.MMD_I18N = API;
  W.T = function (key, options) { return API.t(key, options || {}); };

  function boot() {
    try { API.init({ root: D, observe: true }); } catch (_) {}
  }

  if (D.readyState === "loading") D.addEventListener("DOMContentLoaded", boot);
  else boot();
})();

;

