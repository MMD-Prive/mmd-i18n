/* Generated from MMD canonical i18n — care-back; do not hand edit. */

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

/* SOURCE: care-back-promotion.i18n.js */
/* =====================================================
   MMD PRIVÉ — CARE BACK / PROMOTION 6 YEARS i18n
   LOCK: care-back-promotion-v1 (2026-08-14)

   Customer-safe bilingual keys for Kenji AI 2.0, HYPE,
   Webflow pages, and Worker-rendered HTML.
   Languages: th / en
   ===================================================== */

(function () {
  "use strict";

  window.I18N_DICT = window.I18N_DICT || {};
  const D = window.I18N_DICT;

  D.th = D.th || {};
  D.en = D.en || {};

  Object.assign(D.th, {
    "careback.campaign.name": "CARE BACK",
    "careback.campaign.context": "MMD Privé 6 Years / 6 Years CARE BACK",
    "careback.hero.eyebrow": "MMD PRIVÉ · 6 YEARS",
    "careback.hero.title": "CARE BACK",
    "careback.hero.subtitle": "สิทธิ์เฉพาะบุคคลสำหรับคนที่อยากเช็กสิทธิ์กับ MMD ในช่วงครบรอบ 6 ปี",
    "careback.hero.body": "ไม่ว่าจะเป็นลูกค้าใหม่ ลูกค้าปัจจุบัน ลูกค้าเก่า ลูกค้าที่กลับมาใหม่ หรือเคสวันเกิด Kenji สามารถช่วยพาไปตรวจสอบสิทธิ์ CARE BACK ได้ครับ สิทธิ์นี้ไม่ใช่คูปองสาธารณะ และรายละเอียดจริงต้องยืนยันหลัง MMD ตรวจสอบข้อมูลก่อนเสมอ",

    "careback.cta.check": "ตรวจสอบสิทธิ์ CARE BACK",
    "careback.cta.use": "ใช้สิทธิ์กับ MMD",
    "careback.cta.submit": "ส่งข้อมูลให้ MMD ตรวจสอบ",
    "careback.cta.kenji": "ให้ Kenji ช่วยดูสิทธิ์ให้",
    "careback.cta.membership": "ไปที่ Membership Intake",
    "careback.cta.onboarding": "ยืนยันข้อมูลต่อ",

    "careback.route.preview": "/promotion/6-years-care-back",
    "careback.route.membership": "/sigil/membership",
    "careback.route.onboarding": "/sigil/onboarding",

    "careback.master.answer": "CARE BACK เป็นสิทธิ์แคมเปญครบรอบ 6 ปีของ MMD สำหรับคนที่อยากเช็กสิทธิ์ส่วนตัว ไม่ว่าจะเป็นลูกค้าใหม่ ลูกค้าปัจจุบัน ลูกค้าเก่า หรือเคสวันเกิด สิทธิ์นี้ไม่ใช่คูปองสาธารณะและไม่ได้เหมือนกันทุกคน MMD จะตรวจสอบสถานะ ความเกี่ยวข้อง ประวัติเดิม เวลา และเงื่อนไขก่อน ถ้าผ่านเงื่อนไข Kenji จะพาไปขั้นตอนรับสิทธิ์หรือใช้สิทธิ์กับ MMD ต่อไปครับ",
    "careback.positioning.short": "CARE BACK เป็นสิทธิ์เฉพาะบุคคล ไม่ใช่คูปองสาธารณะ และต้องตรวจสอบก่อนใช้สิทธิ์จริง",
    "careback.review.required": "รายละเอียดสุดท้ายต้องให้ MMD ยืนยันหลังตรวจสอบครับ",
    "careback.fallback.unconfirmed": "ตอนนี้ผมยังไม่เห็นรายละเอียดที่ยืนยันสำหรับเคสนี้ ขอพาไปตรวจสอบสิทธิ์ก่อนนะครับ",

    "careback.segment.new.title": "สมัครใหม่",
    "careback.segment.new.answer": "สมัครใหม่ก็สามารถเริ่มตรวจสอบสิทธิ์ CARE BACK ได้ครับ สิทธิ์นี้ไม่ใช่คูปองสาธารณะที่ใช้ได้ทันทีทุกคน แต่ MMD จะดูจากข้อมูลของคุณ ความต้องการใช้บริการ ช่วงเวลา และความเหมาะสมก่อน ถ้าผ่านเงื่อนไข Kenji จะพาไปขั้นตอนถัดไปครับ",

    "careback.segment.current.title": "ลูกค้าปัจจุบัน",
    "careback.segment.current.answer": "ถ้าเป็นลูกค้าปัจจุบัน Kenji สามารถช่วยเช็กสิทธิ์ CARE BACK ให้ได้ครับ MMD จะดูจากสถานะสมาชิก ประวัติการใช้งาน ช่วงเวลาที่ต้องการใช้สิทธิ์ และเงื่อนไขของแคมเปญ สิทธิ์ที่ได้อาจไม่เหมือนกันทุกคน และต้องยืนยันหลังตรวจสอบครับ",

    "careback.segment.previous.title": "ลูกค้าเก่า",
    "careback.segment.previous.answer": "ถ้าเคยเป็นลูกค้า MMD มาก่อน แคมเปญ CARE BACK อาจเกี่ยวข้องกับคุณโดยตรงครับ แต่สิทธิ์จะต้องตรวจสอบจากข้อมูลเดิมและเงื่อนไขปัจจุบันก่อน Kenji จะพาไปเช็กสถานะอย่างเป็นส่วนตัว และถ้าข้อมูลตรงกับเงื่อนไข MMD จะพาไปขั้นตอนรับสิทธิ์ต่อไปครับ",

    "careback.segment.returning.title": "ลูกค้ากลับมาใหม่",
    "careback.segment.returning.answer": "ยินดีต้อนรับกลับมาครับ ถ้าคุณเคยอยู่กับ MMD มาก่อน Kenji สามารถช่วยเช็กสิทธิ์ CARE BACK ให้ได้ สิทธิ์นี้ออกแบบมาเพื่อดูแลคนที่มีความเกี่ยวข้องกับ MMD ในช่วงครบรอบ 6 ปี แต่รายละเอียดต้องตรวจสอบจากข้อมูลของคุณก่อนครับ",

    "careback.segment.birthday.title": "HBD / Birthday Privilege",
    "careback.segment.birthday.answer": "ถ้าเป็นช่วงวันเกิดหรือ HBD case Kenji สามารถส่งให้ MMD ตรวจเป็นสิทธิ์พิเศษแบบ birthday-related ได้ครับ สิทธิ์อาจเป็นการดูแลเพิ่มเติม โค้ดเฉพาะบุคคล หรือข้อเสนอที่ MMD พิจารณาให้ตามสถานะและช่วงเวลา แต่ยังต้องตรวจสอบก่อนนะครับ",

    "careback.segment.renewal.title": "ต่ออายุสมาชิก",
    "careback.segment.renewal.answer": "ถ้าต้องการใช้ CARE BACK กับการต่ออายุสมาชิก Kenji จะช่วยเตรียมข้อมูลให้ MMD ตรวจสอบได้ครับ การส่งสลิปหรือหลักฐานเป็นเพียงข้อมูลประกอบการตรวจ ไม่ใช่การอนุมัติทันที สถานะสมาชิกจะอัปเดตหลัง MMD ยืนยันเท่านั้นครับ",

    "careback.benefits.title": "สิทธิประโยชน์ที่อาจเกี่ยวข้อง",
    "careback.benefits.note": "รายละเอียดจริงขึ้นอยู่กับสิทธิ์ของแต่ละคนและการตรวจสอบของ MMD",
    "careback.benefit.personal_code": "โค้ดเฉพาะบุคคล",
    "careback.benefit.birthday": "สิทธิ์วันเกิด / HBD privilege",
    "careback.benefit.returning": "สิทธิ์พิจารณาสำหรับลูกค้าเก่าหรือลูกค้ากลับมาใหม่",
    "careback.benefit.renewal": "สิทธิ์ช่วยต่ออายุสมาชิก",
    "careback.benefit.membership_review": "Membership access review",
    "careback.benefit.private_request": "Private request review",
    "careback.benefit.priority_review": "การพิจารณาแบบพิเศษหรือ priority review เมื่อเหมาะสม",
    "careback.benefit.access_support": "Access continuation support",
    "careback.benefit.hype": "HYPE-assisted verification",

    "careback.not.title": "CARE BACK ไม่ใช่อะไร",
    "careback.not.answer": "CARE BACK ไม่ใช่คูปองสาธารณะหรือแพ็กเกจที่กดใช้ได้ทันทีครับ เป็นสิทธิ์เฉพาะบุคคลที่ต้องตรวจสอบก่อน โดย MMD จะดูจากสถานะ ความเกี่ยวข้อง ประวัติเดิม เวลา และเงื่อนไขแคมเปญครับ",
    "careback.not.public_coupon": "ไม่ใช่คูปองสาธารณะ",
    "careback.not.auto_discount": "ไม่ใช่ส่วนลดอัตโนมัติ",
    "careback.not.package": "ไม่ใช่แพ็กเกจสมาชิก",
    "careback.not.vip_package": "VIP ไม่ใช่แพ็กเกจที่ซื้อหรือใช้โค้ดปลดล็อกได้ทันที",
    "careback.not.payment_approval": "สลิปหรือหลักฐานเป็นข้อมูลประกอบการตรวจ ไม่ใช่การยืนยันสิทธิ์ทันที",

    "careback.faq.what.title": "ได้อะไรบ้าง?",
    "careback.faq.what.answer": "สิทธิ์ที่อาจเกี่ยวข้องมีได้หลายแบบ เช่น โค้ดเฉพาะบุคคล สิทธิ์วันเกิด สิทธิ์สำหรับลูกค้าเก่า สิทธิ์ช่วยต่ออายุ หรือการพิจารณา request แบบส่วนตัว รายละเอียดของแต่ละคนไม่จำเป็นต้องเหมือนกัน และต้องตรวจสอบก่อนครับ",

    "careback.faq.member.title": "ต้องสมัครสมาชิกก่อนไหม?",
    "careback.faq.member.answer": "หน้า CARE BACK สามารถดูรายละเอียดเบื้องต้นได้ก่อนครับ แต่ถ้าจะใช้สิทธิ์จริงหรือเข้าสู่บริการแบบส่วนตัว อาจต้องผ่านการตรวจสอบสถานะ สมัครสมาชิก หรือทำ intake เพิ่ม ขึ้นอยู่กับเคสครับ",

    "careback.faq.old.title": "ลูกค้าเก่าใช้ได้ไหม?",
    "careback.faq.old.answer": "เช็กได้ครับ ลูกค้าเก่าเป็นกลุ่มที่ CARE BACK อาจเกี่ยวข้องโดยตรง แต่ยังต้องตรวจสอบข้อมูลเดิมและสถานะปัจจุบันก่อนครับ",

    "careback.faq.new.title": "ลูกค้าใหม่ใช้ได้ไหม?",
    "careback.faq.new.answer": "ลูกค้าใหม่ก็เริ่มเช็กสิทธิ์ได้ครับ แต่สิทธิ์อาจต่างจากลูกค้าเดิม เพราะ MMD จะพิจารณาตามข้อมูลและความเหมาะสมของแต่ละเคสครับ",

    "careback.faq.birthday.title": "วันเกิดได้อะไร?",
    "careback.faq.birthday.answer": "ถ้าเป็นวันเกิด Kenji ส่งเข้า HBD / birthday-related review ให้ได้ครับ สิทธิ์อาจเป็นโค้ดเฉพาะบุคคล การดูแลเพิ่มเติม หรือข้อเสนอที่เหมาะกับสถานะของคุณ แต่ต้องตรวจสอบก่อนยืนยันครับ",

    "careback.faq.code.title": "โค้ดใช้ยังไง?",
    "careback.faq.code.answer": "โค้ด CARE BACK เป็นโค้ดเฉพาะบุคคล ใช้ได้ตามเงื่อนไขหลังผ่านการตรวจสอบครับ หากระบบยืนยันสิทธิ์แล้ว Kenji หรือ HYPE จะพาไปขั้นตอนใช้สิทธิ์กับ MMD ต่อไป",

    "careback.faq.transfer.title": "โอนให้เพื่อนได้ไหม?",
    "careback.faq.transfer.answer": "โดยปกติสิทธิ์ CARE BACK เป็นสิทธิ์เฉพาะบุคคล ไม่ควรโอนให้ผู้อื่นครับ ถ้ามีกรณีพิเศษต้องให้ MMD ตรวจสอบก่อนเท่านั้น",

    "careback.faq.expiry.title": "หมดเขตเมื่อไหร่?",
    "careback.faq.expiry.answer": "ตอนนี้ Kenji ยังไม่เห็นวันหมดเขตที่ยืนยันสำหรับคุณ ต้องตรวจสอบสิทธิ์ก่อน หรือให้ MMD ยืนยันตามเคสครับ",

    "careback.faq.services.title": "ใช้กับบริการอะไรได้บ้าง?",
    "careback.faq.services.answer": "สิทธิ์อาจเกี่ยวข้องกับ membership, renewal, private request, MMD companion, MMS Wellness Access หรือ request อื่นที่ MMD พิจารณาได้ครับ แต่ไม่ได้แปลว่าใช้ได้กับทุกบริการทันที ต้องดูเงื่อนไขของสิทธิ์ที่ได้รับก่อนครับ",

    "careback.faq.mms.title": "ใช้กับ MMS ได้ไหม?",
    "careback.faq.mms.answer": "สามารถส่งให้ MMD ตรวจในบริบท MMS Wellness Access ได้ครับ แต่ MMS อยู่ในกรอบ wellness, relaxation และ body recovery เท่านั้น และสิทธิ์ต้องตรวจสอบก่อนว่าใช้กับเคสนั้นได้หรือไม่",

    "careback.faq.vip.title": "ใช้กับ VIP ได้ไหม?",
    "careback.faq.vip.answer": "VIP ไม่ใช่แพ็กเกจที่ซื้อหรือใช้โค้ดเพื่อปลดล็อกได้ทันทีครับ เป็นกลุ่มสิทธิ์การมองเห็น/การเข้าถึงแบบส่วนตัว CARE BACK อาจช่วยให้ MMD พิจารณาเคสของคุณได้ แต่ไม่ใช่การการันตี VIP access ครับ",

    "careback.faq.pay_first.title": "ต้องจ่ายก่อนถึงได้สิทธิ์ไหม?",
    "careback.faq.pay_first.answer": "ไม่ควรจ่ายก่อนโดยยังไม่รู้ขั้นตอนครับ ให้ Kenji พาเช็กสิทธิ์ก่อน ถ้ามีการส่งสลิปหรือหลักฐานใด ๆ จะเป็นเพียงข้อมูลประกอบการตรวจสอบ ไม่ใช่การอนุมัติหรือยืนยันสิทธิ์ทันทีครับ",

    "careback.faq.why_check.title": "ทำไมต้องตรวจสอบ?",
    "careback.faq.why_check.answer": "เพราะ CARE BACK เป็นสิทธิ์เฉพาะบุคคล ไม่ใช่คูปองสาธารณะ MMD จึงต้องตรวจสอบสถานะ ความเกี่ยวข้อง ประวัติเดิม และความเหมาะสมก่อน เพื่อให้สิทธิ์ถูกต้องและปลอดภัยครับ"
  });

  Object.assign(D.en, {
    "careback.campaign.name": "CARE BACK",
    "careback.campaign.context": "MMD Privé 6 Years / 6 Years CARE BACK",
    "careback.hero.eyebrow": "MMD PRIVÉ · 6 YEARS",
    "careback.hero.title": "CARE BACK",
    "careback.hero.subtitle": "A personal privilege check for people connected with MMD during the 6-year milestone.",
    "careback.hero.body": "New customers, current customers, previous customers, returning customers, and birthday-related cases can all start a CARE BACK eligibility check. This is not a public coupon. Final details must be confirmed after MMD reviews the customer’s information.",

    "careback.cta.check": "Check CARE BACK eligibility",
    "careback.cta.use": "Use with MMD",
    "careback.cta.submit": "Send details for MMD review",
    "careback.cta.kenji": "Let Kenji check my privilege",
    "careback.cta.membership": "Go to Membership Intake",
    "careback.cta.onboarding": "Continue verification",

    "careback.route.preview": "/promotion/6-years-care-back",
    "careback.route.membership": "/sigil/membership",
    "careback.route.onboarding": "/sigil/onboarding",

    "careback.master.answer": "CARE BACK is MMD’s 6-year personal privilege campaign. New customers, current customers, previous customers, returning customers, and birthday-related cases can all start an eligibility check. It is not a public coupon or a guaranteed discount. MMD reviews each case based on status, history, timing, availability, and campaign conditions. If eligible, Kenji will guide the customer to the next step.",
    "careback.positioning.short": "CARE BACK is a personal privilege, not a public coupon, and it must be checked before use.",
    "careback.review.required": "Final details must be confirmed by MMD after review.",
    "careback.fallback.unconfirmed": "I do not have a confirmed privilege for this case yet. Let me guide the customer through the eligibility check first.",

    "careback.segment.new.title": "New customer",
    "careback.segment.new.answer": "New customers can start a CARE BACK eligibility check. This is not an instant public coupon, so MMD will review the customer’s request, timing, and suitability first. If eligible, Kenji will guide the customer to the next step.",

    "careback.segment.current.title": "Current customer",
    "careback.segment.current.answer": "Current customers can ask Kenji to check CARE BACK eligibility. MMD will review membership status, usage history, intended timing, and campaign conditions. The privilege may differ by customer and must be confirmed after review.",

    "careback.segment.previous.title": "Previous customer",
    "careback.segment.previous.answer": "Previous MMD customers may be directly relevant to CARE BACK, but eligibility still needs to be reviewed against past records and current campaign conditions. Kenji can guide the customer through a private status check before any privilege is confirmed.",

    "careback.segment.returning.title": "Returning customer",
    "careback.segment.returning.answer": "Welcome back. If the customer has been connected with MMD before, Kenji can help check CARE BACK eligibility. This privilege is designed for people connected with MMD during the 6-year milestone, but the final details must be reviewed first.",

    "careback.segment.birthday.title": "HBD / Birthday Privilege",
    "careback.segment.birthday.answer": "If this is connected to the customer’s birthday, Kenji can submit it as a birthday-related CARE BACK review. The final privilege may be a personal code, additional care, or another offer MMD considers appropriate based on status and timing. It must be checked before confirmation.",

    "careback.segment.renewal.title": "Membership renewal",
    "careback.segment.renewal.answer": "If the customer wants to use CARE BACK for membership renewal, Kenji can prepare the details for MMD review. Any proof or slip is supporting evidence only. It is not automatic approval. Membership status updates only after MMD confirms.",

    "careback.benefits.title": "Possible benefit categories",
    "careback.benefits.note": "The actual privilege depends on the customer’s individual eligibility and MMD review.",
    "careback.benefit.personal_code": "Personal campaign code",
    "careback.benefit.birthday": "Birthday / HBD privilege",
    "careback.benefit.returning": "Returning-customer consideration",
    "careback.benefit.renewal": "Membership renewal support",
    "careback.benefit.membership_review": "Membership access review",
    "careback.benefit.private_request": "Private request review",
    "careback.benefit.priority_review": "Special handling or priority review when appropriate",
    "careback.benefit.access_support": "Access continuation support",
    "careback.benefit.hype": "HYPE-assisted verification",

    "careback.not.title": "What CARE BACK is not",
    "careback.not.answer": "CARE BACK is not a public coupon or an instant package. It is a personal privilege that must be reviewed first. MMD checks status, relationship history, timing, and campaign conditions before confirming any privilege.",
    "careback.not.public_coupon": "Not a public coupon",
    "careback.not.auto_discount": "Not an automatic discount",
    "careback.not.package": "Not a membership package",
    "careback.not.vip_package": "VIP is not a package that can be purchased or unlocked instantly with a code",
    "careback.not.payment_approval": "Proof or a slip is supporting evidence only, not instant privilege confirmation",

    "careback.faq.what.title": "What can I get?",
    "careback.faq.what.answer": "Possible privileges may include a personal code, birthday-related privilege, returning-customer consideration, renewal support, or private request review. The final privilege does not have to be the same for every customer and must be checked first.",

    "careback.faq.member.title": "Do I need to become a member first?",
    "careback.faq.member.answer": "The CARE BACK preview can be viewed first. To actually use a privilege or continue into private access, the customer may need status review, membership, or an additional intake step depending on the case.",

    "careback.faq.old.title": "Can previous customers use it?",
    "careback.faq.old.answer": "Yes, previous customers can check. Previous customers may be directly relevant to CARE BACK, but MMD still needs to review past records and current status first.",

    "careback.faq.new.title": "Can new customers use it?",
    "careback.faq.new.answer": "New customers can start an eligibility check. The final privilege may differ from existing or previous customers because MMD reviews each case individually.",

    "careback.faq.birthday.title": "What do I get for my birthday?",
    "careback.faq.birthday.answer": "For birthday cases, Kenji can submit the customer for HBD / birthday-related review. The privilege may be a personal code, additional care, or an offer suitable to the customer’s status, but it must be reviewed before confirmation.",

    "careback.faq.code.title": "How do I use the code?",
    "careback.faq.code.answer": "A CARE BACK code is personal and can be used according to its conditions after review. Once eligibility is confirmed, Kenji or HYPE will guide the customer to the next step for using it with MMD.",

    "careback.faq.transfer.title": "Can I transfer it to a friend?",
    "careback.faq.transfer.answer": "By default, CARE BACK is personal and should not be transferred to another person. Any special case must be reviewed by MMD first.",

    "careback.faq.expiry.title": "When does it end?",
    "careback.faq.expiry.answer": "Kenji does not have a confirmed end date for this customer yet. The customer should start an eligibility check or wait for MMD to confirm the applicable condition for the case.",

    "careback.faq.services.title": "Which services can it apply to?",
    "careback.faq.services.answer": "The privilege may be related to membership, renewal, private requests, MMD companion, MMS Wellness Access, or another request MMD can review. It does not mean it applies to every service automatically. The final condition depends on the confirmed privilege.",

    "careback.faq.mms.title": "Can it be used with MMS?",
    "careback.faq.mms.answer": "It can be submitted for review under MMS Wellness Access, but MMS remains within professional wellness, relaxation, and body recovery only. MMD must confirm whether the privilege applies to that case.",

    "careback.faq.vip.title": "Can it unlock VIP?",
    "careback.faq.vip.answer": "VIP is not a package that can be purchased or unlocked instantly with a code. It is a private visibility/access layer. CARE BACK may help MMD review the customer’s case, but it does not guarantee VIP access.",

    "careback.faq.pay_first.title": "Do I need to pay first?",
    "careback.faq.pay_first.answer": "The customer should not pay before understanding the correct step. Kenji should guide the customer through the eligibility check first. If proof or a slip is submitted, it is supporting evidence only, not automatic approval or privilege confirmation.",

    "careback.faq.why_check.title": "Why does MMD need to check?",
    "careback.faq.why_check.answer": "Because CARE BACK is personal, not a public coupon. MMD checks status, connection, past history, and suitability first so the privilege is applied correctly and safely."
  });

  window.MMD_CARE_BACK_PROMOTION_I18N = {
    lock: "care-back-promotion-v1",
    status: "active",
    languages: ["th", "en"],
    knowledge_id: "kenji_20_011_care_back_promotion_answering",
    routes: {
      preview: "/promotion/6-years-care-back",
      membership: "/sigil/membership",
      onboarding: "/sigil/onboarding"
    },
    forbidden_public_claims: [
      "guaranteed approval",
      "automatic discount",
      "public coupon",
      "VIP package",
      "payment proof confirms access",
      "transferable by default"
    ]
  };
})();

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

