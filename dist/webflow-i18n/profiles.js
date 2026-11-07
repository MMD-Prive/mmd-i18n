/* Generated from MMD canonical i18n — profiles; do not hand edit. */

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

/* SOURCE: pages/profiles.core.js */
/* MMD Privé · Profiles canonical copy · core + driver/culinary
   Route: /profiles · TH/EN/ZH · 2026-10-05 */
(function(){
"use strict";
if((((location.pathname||"/").replace(/\/+$/,"")||"/"))!=="/profiles")return;
window.I18N_DICT=window.I18N_DICT||{};
var D=window.I18N_DICT;D.th=D.th||{};D.en=D.en||{};D.zh=D.zh||{};
function add(lang,obj){Object.keys(obj).forEach(function(k){D[lang]["profiles."+k]=obj[k]})}

add("th",{
"roleIntro.kicker":"CHOOSE THE ROLE FIRST",
"roleIntro.title":"วันนี้ อยากไปไหน<br><span>ทำอะไรด้วยกันดี</span>",
"roleIntro.body":"เลือกบทบาทก่อน แล้ว MMD จะเปิดเฉพาะคนที่ผ่านการอนุมัติสำหรับบทบาทนั้นจริง ไม่ดึงนายแบบทุกคนขึ้นมาให้เลือกพร้อมกันครับ",
"role.everyday_companion.title":"เพื่อนคู่ใจ","role.everyday_companion.body":"คาเฟ่ หนัง ช้อปปิ้ง และวันธรรมดาที่อยากมีใครอยู่ด้วย",
"role.driver_companion.title":"คนขับรถหล่อ","role.driver_companion.body":"รับส่ง Day trip และการเดินทางที่อยากมีเพื่อนร่วมทาง",
"role.culinary_companion.title":"เชฟหล่อ","role.culinary_companion.body":"ทำอาหาร Private dining และกิจกรรมในครัว",
"role.social_appearance.title":"คู่หูออกงาน","role.social_appearance.body":"Dinner, Event และ Social appearance",
"role.bangkok_companion.title":"เพื่อนเที่ยวกรุงเทพ","role.bangkok_companion.body":"เที่ยวเมือง Local day และพาไปใช้กรุงเทพในอีกมุม",
"role.sport_activity.title":"หนุ่มสายกีฬา","role.sport_activity.body":"วิ่ง กีฬา Outdoor และกิจกรรมแอคทีฟ",
"role.wellness_companion.title":"หนุ่มสายสุขภาพ","role.wellness_companion.body":"Wellness, Fitness และกิจกรรมดูแลตัวเอง",
"role.business_companion.title":"หนุ่มออฟฟิศ","role.business_companion.body":"Business dinner, Meeting companion และ Smart casual",
"role.nightlife_companion.title":"เพื่อนสายปาร์ตี้","role.nightlife_companion.body":"Night out, Concert และ Celebration",
"role.creative_companion.title":"เพื่อนสายศิลป์","role.creative_companion.body":"Gallery, Music, Photo walk และ Creative day",
"role.medical_professional.title":"บุรุษทางการแพทย์","role.medical_professional.body":"เฉพาะผู้มี credential ที่ MMD ตรวจสอบแล้ว",
"role.mms.title":"Male Massage","role.mms.body":"MMS เป็นบริการ Therapist แยกจากโมเดลคัดสรร (Curated Models)",
"role.custom.title":"บรีฟแบบของคุณเอง","role.custom.body":"บอก MMD ว่าวันนี้คุณกำลังมองหาใครแบบไหน",
"stage2.hint":"STEP 2 · ใครจะใช้บริการ","stage2.all":"ทั้งหมด","stage2.male":"ผู้ชาย","stage2.female":"ผู้หญิง",
"common.book":"จองแพ็กเกจนี้ ↗","common.brief":"ส่งบรีฟให้ MMD ↗","common.licensedGuide":"ขอ Licensed Guide ↗","common.verifiedRequest":"ส่ง Verified Request ให้ MMD ↗",
"driver.title":"จองเขาไว้ล่วงหน้า แล้วให้เขาไปรับคุณ",
"driver.body":"ราคานี้เป็นแพ็กเกจเริ่มต้นสำหรับกรุงเทพ MMD จะตรวจคน รถ พื้นที่ และคิวก่อนยืนยันทุกครั้ง",
"driver.p1.line":"รับ 1 จุด → ส่ง 1 จุด เหมาะกับ Dinner, Event หรือวันที่ไม่อยากเรียกรถตอนถึงเวลา","driver.p1.m1":"≤ 90 นาที","driver.p1.m2":"20 km included",
"driver.p2.line":"BKK / DMK ↔ Bangkok พร้อมดูเที่ยวบินและรอรับตามเวลาลงจริง","driver.p2.m1":"≤ 2 ชม.","driver.p2.m2":"40 km included","driver.p2.m3":"รอฟรี 60 นาที",
"driver.p3.line":"มารับ รอคุณ แล้วไปต่อกับคนเดิม เหมาะกับ Dinner + Next stop หรือธุระหลายช่วง","driver.p3.m1":"3 ชั่วโมง","driver.p3.m2":"50 km included",
"driver.p4.line":"คนเดิม รถเดิม และหลายจุดในครึ่งวัน สำหรับ Meeting, Shopping หรือ City day","driver.p4.m1":"4 ชั่วโมง","driver.p4.m2":"70 km included","driver.p4.m3":"หลายจุด",
"driver.rules":"Tollway และ Parking คิดตามจริง · เกินเวลา ฿790/ชม. · เกินระยะ ฿25/km · 22:00–06:00 +฿300 · การจองยังไม่ Confirm จนกว่า MMD จะตรวจ Driver / Vehicle / Availability และตอบกลับ",
"culinary.title":"คืนนี้ ให้เขาทำอะไรให้กินดี?",
"culinary.body":"เลือกประสบการณ์ก่อน เมนูค่อยคุยกันได้ ค่าวัตถุดิบคิดตามจริงแยกจากค่าบริการ และ MMD จะตรวจ skill / menu fit / availability ก่อนยืนยันทุกครั้ง",
"culinary.p1.line":"ทำอาหารด้วยกันแบบไม่เป็นทางการ เหมาะกับ 1–2 เมนูง่าย ๆ และเวลาที่อยากทำอะไรด้วยกันจริง ๆ","culinary.p1.m1":"2 ชั่วโมง","culinary.p1.m2":"1–2 คน","culinary.p1.m3":"Ingredients actual",
"culinary.p2.line":"คุณพัก เขาทำให้กิน เหมาะกับ Dinner ที่บ้าน 2–3 เมนู พร้อมจัดโต๊ะและเก็บครัวเบื้องต้นหลังจบ","culinary.p2.m1":"3 ชั่วโมง","culinary.p2.m2":"1–2 คน","culinary.p2.m3":"2–3 เมนู",
"culinary.p3.line":"ไปเลือกของด้วยกัน แล้วกลับมาทำมื้อที่เลือกไว้ เหมาะกับวันหยุดหรือคนที่อยากได้ทั้ง activity และ dinner","culinary.p3.m1":"4 ชั่วโมง","culinary.p3.m2":"1–2 คน","culinary.p3.m3":"Ingredients actual",
"culinary.p4.line":"มื้อที่จริงจังขึ้น พร้อม menu planning และ plating สำหรับคนที่ MMD ตรวจ culinary skill แล้วเท่านั้น","culinary.p4.m1":"4 ชั่วโมง","culinary.p4.m2":"Verified culinary skill","culinary.p4.m3":"1–2 คน",
"culinary.rules":"วัตถุดิบคิดตามจริง · เกินเวลา ฿690/ชม. · เพิ่มแขก +฿500/คน (ไม่รวมวัตถุดิบ) · Parking/การเดินทางพิเศษตามจริง · แพ้อาหารรุนแรงหรือ dietary restriction ต้องแจ้งก่อนเพื่อให้ MMD ตรวจความเหมาะสม",
"confidential.kicker":"FOR MMD PROFILES · CONFIDENTIAL WORK","confidential.title":"มีโปรไฟล์อยู่แล้ว แต่บางงานอยากให้เป็นเรื่องส่วนตัว?","confidential.body":"คุณยังมี Profile ได้ตามปกติ และเลือกให้บางงานส่งเป็น Confidential ผ่าน MMD เท่านั้น รายละเอียดลูกค้า ข้อเสนองาน และเรทถึงตัวจะไม่แสดงบนหน้า Profiles โดย Confidential เป็นเพียงรูปแบบการปกปิดรายละเอียดงาน—ไม่ได้เปลี่ยนงานเป็น Private Money อัตโนมัติ ก่อนกดรับทุกงาน MY MODEL จะระบุชัดว่าใช้ CURATED MONEY หรือ PRIVATE MONEY","confidential.cta":"ติดต่อ MMD Apply ↗",
"member.kicker":"MMD MEMBERS","member.title":"โปรไฟล์สำหรับสมาชิก MMD","member.note.loggedOut":"เข้าสู่ MY MMD เพื่อดูโปรไฟล์เพิ่มเติมตามสิทธิ์สมาชิกของคุณ","member.note.loggedIn":"ให้ MMD ช่วยดูความเหมาะและความพร้อมก่อนส่งคำขอ","member.login":"เข้าสู่ MY MMD ↗","member.cardLabel":"สำหรับสมาชิก MMD","member.cardCta":"ให้ MMD ช่วยดูรายละเอียด ↗",
"consent.kicker":"FOR EXISTING MMD PROFILES","consent.title":"รูปของคุณ คุณเป็นคนเลือกว่าจะให้ใครเห็น","consent.body":"หากมี Profile กับ MMD อยู่แล้ว คุณสามารถยืนยัน Role ที่อนุญาตให้ใช้รูปบน /profiles สำหรับผู้ที่ยังไม่เป็นสมาชิก หรือขอถอนการแสดงรูปได้ โดยไม่กระทบ Profile ภายในและงาน Confidential ที่ MMD ส่งให้คุณ","consent.cta":"ยืนยันหรือถอนสิทธิ์รูป ↗",
"access.kicker":"CURATED ACCESS","access.body":"<strong>Red Card</strong> สามารถเปิด Exclusive Model Meet กับโมเดลคัดสรร (Curated Models) ในรูปแบบ Curated Job ได้ตาม availability ที่ MMD ยืนยัน ส่วน Private / Exclusive Model scope ใช้ Black Card entitlement และอยู่ใน Private route แยกต่างหาก","access.cta":"ดู MMD Membership",
"catalog.badge":"CURATED","catalog.line":"โปรไฟล์ที่ MMD อนุมัติสำหรับบทบาทนี้แล้ว","catalog.fit":"ก่อนยืนยันงาน","catalog.detail":"MMD จะตรวจคิว ขอบเขต และความเหมาะสมของทั้งสองฝ่ายก่อนยืนยันทุกครั้ง","catalog.cta":"ให้ MMD เช็กคิวและความเหมาะ","catalog.ctaFemale":"ไปที่ BELIEVE ก่อน","catalog.medicalCta":"ส่ง Verified Request ให้ MMD review","catalog.privatePreview":"PRIVATE PREVIEW · ยืนยันตัวตนเพื่อดูสิทธิ์","catalog.chooseRole":"เลือกบทบาทด้านบนก่อน แล้วรายชื่อที่เหมาะจะปรากฏตรงนี้","catalog.none":"ตอนนี้ยังไม่มีคนที่ MMD เปิดสำหรับบทบาทนี้","catalog.result":"แสดง {n} โปรไฟล์ · {role}"
});

add("en",{
"roleIntro.kicker":"CHOOSE THE ROLE FIRST",
"roleIntro.title":"Where would you like to go?<br><span>What shall we do together?</span>",
"roleIntro.body":"Choose the role first. MMD will show only profiles approved for that role instead of exposing every model at once.",
"role.everyday_companion.title":"Everyday Companion","role.everyday_companion.body":"Cafés, films, shopping, and ordinary days when you want someone beside you.",
"role.driver_companion.title":"Driver Companion","role.driver_companion.body":"Pick-ups, day trips, and journeys with someone you actually want along.",
"role.culinary_companion.title":"Culinary Companion","role.culinary_companion.body":"Cooking, private dining, and time together in the kitchen.",
"role.social_appearance.title":"Social Companion","role.social_appearance.body":"Dinner, events, and social appearances.",
"role.bangkok_companion.title":"Bangkok Companion","role.bangkok_companion.body":"Local days and a more personal way to experience Bangkok.",
"role.sport_activity.title":"Sport Companion","role.sport_activity.body":"Running, sport, outdoor, and active plans.",
"role.wellness_companion.title":"Wellness Companion","role.wellness_companion.body":"Wellness, fitness, and easy self-care plans.",
"role.business_companion.title":"Business Companion","role.business_companion.body":"Business dinners, meeting companion, and smart-casual contexts.",
"role.nightlife_companion.title":"Nightlife Companion","role.nightlife_companion.body":"Nights out, concerts, and celebrations.",
"role.creative_companion.title":"Creative Companion","role.creative_companion.body":"Galleries, music, photo walks, and creative days.",
"role.medical_professional.title":"Medical Professional","role.medical_professional.body":"Only credential-verified professionals reviewed by MMD.",
"role.mms.title":"Male Massage","role.mms.body":"MMS is a Therapist service, separate from Curated Models.",
"role.custom.title":"Your own brief","role.custom.body":"Tell MMD what kind of person you are looking for today.",
"stage2.hint":"STEP 2 · Who is this for?","stage2.all":"All","stage2.male":"Men","stage2.female":"Women",
"common.book":"Book this package ↗","common.brief":"Send a brief to MMD ↗","common.licensedGuide":"Request a Licensed Guide ↗","common.verifiedRequest":"Send a Verified Request to MMD ↗",
"driver.title":"Book him ahead, and let him come pick you up",
"driver.body":"These are Bangkok starting packages. MMD verifies the driver, vehicle, area, and availability before every confirmation.",
"driver.p1.line":"One pick-up → one drop-off. Ideal for dinner, an event, or a day when you do not want to call a car at the last minute.","driver.p1.m1":"≤ 90 minutes","driver.p1.m2":"20 km included",
"driver.p2.line":"BKK / DMK ↔ Bangkok, with flight tracking and pick-up based on the actual arrival time.","driver.p2.m1":"≤ 2 hours","driver.p2.m2":"40 km included","driver.p2.m3":"60 min free wait",
"driver.p3.line":"He picks you up, waits, then continues with you—useful for dinner + the next stop or several errands.","driver.p3.m1":"3 hours","driver.p3.m2":"50 km included",
"driver.p4.line":"The same person and car across several stops in half a day, for meetings, shopping, or a city day.","driver.p4.m1":"4 hours","driver.p4.m2":"70 km included","driver.p4.m3":"Multiple stops",
"driver.rules":"Tollway and parking are charged at actual cost · Overtime ฿790/hr · Extra distance ฿25/km · 22:00–06:00 +฿300 · A request is not confirmed until MMD verifies the Driver, Vehicle, and Availability.",
"culinary.title":"What should he make for you tonight?",
"culinary.body":"Choose the experience first; the menu can come later. Ingredients are charged at actual cost, and MMD verifies skill, menu fit, and availability before confirmation.",
"culinary.p1.line":"Cook together informally—ideal for 1–2 simple dishes and a night when the activity itself is part of the time together.","culinary.p1.m1":"2 hours","culinary.p1.m2":"1–2 people","culinary.p1.m3":"Ingredients actual",
"culinary.p2.line":"You relax while he cooks a 2–3 course dinner at home, with basic table setup and kitchen tidy-up after.","culinary.p2.m1":"3 hours","culinary.p2.m2":"1–2 people","culinary.p2.m3":"2–3 dishes",
"culinary.p3.line":"Shop for ingredients together, then return to cook the chosen meal—part activity, part dinner.","culinary.p3.m1":"4 hours","culinary.p3.m2":"1–2 people","culinary.p3.m3":"Ingredients actual",
"culinary.p4.line":"A more considered meal with menu planning and plating, available only with MMD-verified culinary skill.","culinary.p4.m1":"4 hours","culinary.p4.m2":"Verified culinary skill","culinary.p4.m3":"1–2 people",
"culinary.rules":"Ingredients at actual cost · Overtime ฿690/hr · Extra guest +฿500/person (ingredients excluded) · Parking/special travel at actual cost · Severe allergies or dietary restrictions must be disclosed so MMD can review fit.",
"confidential.kicker":"FOR MMD PROFILES · CONFIDENTIAL WORK","confidential.title":"Already have a profile, but want some work kept private?","confidential.body":"You can keep a normal Profile while choosing to receive certain work only as Confidential through MMD. Client details, offers, and your payout are not shown publicly. Confidential controls disclosure; it does not automatically turn a job into Private Money. Before accepting, MY MODEL clearly shows whether the job uses CURATED MONEY or PRIVATE MONEY.","confidential.cta":"Contact MMD Apply ↗",
"member.kicker":"MMD MEMBERS","member.title":"Profiles for MMD Members","member.note.loggedOut":"Sign in to MY MMD to see additional profiles available to your verified membership.","member.note.loggedIn":"Let MMD check fit and availability before you send a request.","member.login":"Open MY MMD ↗","member.cardLabel":"For MMD Members","member.cardCta":"Ask MMD for details ↗",
"consent.kicker":"FOR EXISTING MMD PROFILES","consent.title":"Your image, your choice of who can see it","consent.body":"If you already have an MMD Profile, you can confirm which Roles may use your image on /profiles for visitors who are not yet members, or withdraw public image display without affecting your internal Profile or Confidential work sent by MMD.","consent.cta":"Confirm or withdraw image consent ↗",
"access.kicker":"CURATED ACCESS","access.body":"<strong>Red Card</strong> can open Exclusive Model Meet with Curated Models as a Curated Job when MMD confirms availability. Private / Exclusive Model scope requires Black Card entitlement and stays on the separate Private route.","access.cta":"View MMD Membership",
"catalog.badge":"CURATED","catalog.line":"A profile MMD has approved for this role.","catalog.fit":"Before confirmation","catalog.detail":"MMD checks availability, boundaries, and mutual fit before every confirmation.","catalog.cta":"Ask MMD to check availability","catalog.ctaFemale":"Continue through BELIEVE","catalog.medicalCta":"Send a verified request for MMD review","catalog.privatePreview":"PRIVATE PREVIEW · Verify identity to check access","catalog.chooseRole":"Choose a role above first. Only eligible profiles will appear here.","catalog.none":"No MMD-approved profile is currently open for this role.","catalog.result":"Showing {n} profiles · {role}"
});

add("zh",{
"roleIntro.kicker":"CHOOSE THE ROLE FIRST",
"roleIntro.title":"今天想去哪里？<br><span>想一起做些什么？</span>",
"roleIntro.body":"先选择角色。MMD 只显示确实获批适用于该角色的人选，不会一次把所有 Model 全部公开。",
"role.everyday_companion.title":"日常陪伴","role.everyday_companion.body":"咖啡、电影、购物，以及想有人陪伴的普通一天。",
"role.driver_companion.title":"司机陪伴","role.driver_companion.body":"接送、Day trip，以及希望有人同行的旅程。",
"role.culinary_companion.title":"餐饮陪伴","role.culinary_companion.body":"一起做饭、Private dining 与厨房体验。",
"role.social_appearance.title":"社交陪伴","role.social_appearance.body":"Dinner、Event 与 Social appearance。",
"role.bangkok_companion.title":"曼谷陪伴","role.bangkok_companion.body":"Local day，与熟悉城市节奏的人一起体验 Bangkok。",
"role.sport_activity.title":"运动陪伴","role.sport_activity.body":"跑步、运动、Outdoor 与 active plans。",
"role.wellness_companion.title":"健康生活陪伴","role.wellness_companion.body":"Wellness、Fitness 与轻松的 self-care day。",
"role.business_companion.title":"商务陪伴","role.business_companion.body":"Business dinner、meeting companion 与 smart-casual context。",
"role.nightlife_companion.title":"夜生活陪伴","role.nightlife_companion.body":"Night out、Concert 与 Celebration。",
"role.creative_companion.title":"创意陪伴","role.creative_companion.body":"Gallery、Music、Photo walk 与 Creative day。",
"role.medical_professional.title":"医疗专业人士","role.medical_professional.body":"仅限经 MMD 核实 credential 的专业人士。",
"role.mms.title":"Male Massage","role.mms.body":"MMS 是独立的 Therapist 服务，与精选模特（Curated Models）分开。",
"role.custom.title":"自定义需求","role.custom.body":"告诉 MMD 今天你想找怎样的人。",
"stage2.hint":"STEP 2 · 谁会使用这项服务","stage2.all":"全部","stage2.male":"男性","stage2.female":"女性",
"common.book":"预约此方案 ↗","common.brief":"向 MMD 提交需求 ↗","common.licensedGuide":"申请持牌导游 ↗","common.verifiedRequest":"向 MMD 提交 Verified Request ↗",
"driver.title":"提前预约他，让他来接你",
"driver.body":"这是 Bangkok 的起始方案。每次确认前，MMD 都会核实司机、车辆、区域与档期。",
"driver.p1.line":"一个上车点 → 一个下车点，适合 Dinner、Event，或不想临时叫车的日子。","driver.p1.m1":"≤ 90 分钟","driver.p1.m2":"含 20 km",
"driver.p2.line":"BKK / DMK ↔ Bangkok，包含航班追踪，并按实际抵达时间接机。","driver.p2.m1":"≤ 2 小时","driver.p2.m2":"含 40 km","driver.p2.m3":"免费等候 60 分钟",
"driver.p3.line":"接你、等你，再由同一个人继续同行，适合 Dinner + Next stop 或多段行程。","driver.p3.m1":"3 小时","driver.p3.m2":"含 50 km",
"driver.p4.line":"半天由同一个人、同一辆车陪你跑多个地点，适合 Meeting、Shopping 或 City day。","driver.p4.m1":"4 小时","driver.p4.m2":"含 70 km","driver.p4.m3":"多个停靠点",
"driver.rules":"Tollway 与 Parking 按实际费用 · 超时 ฿790/小时 · 超里程 ฿25/km · 22:00–06:00 +฿300 · 在 MMD 核实 Driver / Vehicle / Availability 并回复前，预约都不视为 Confirm。",
"culinary.title":"今晚，让他做什么给你吃？",
"culinary.body":"先选择体验，菜单之后再讨论。食材按实际费用另计；MMD 会在确认前核实 skill、menu fit 与 availability。",
"culinary.p1.line":"轻松地一起做饭，适合 1–2 道简单料理，也适合把共同做饭本身当成相处的一部分。","culinary.p1.m1":"2 小时","culinary.p1.m2":"1–2 人","culinary.p1.m3":"食材按实际费用",
"culinary.p2.line":"你休息，他在家为你做 2–3 道 Dinner，并包含基础摆桌与结束后的简单厨房整理。","culinary.p2.m1":"3 小时","culinary.p2.m2":"1–2 人","culinary.p2.m3":"2–3 道料理",
"culinary.p3.line":"一起买食材，再回来完成选好的餐点，既是 activity，也是 dinner。","culinary.p3.m1":"4 小时","culinary.p3.m2":"1–2 人","culinary.p3.m3":"食材按实际费用",
"culinary.p4.line":"更完整的一餐，包含 menu planning 与 plating，仅开放给经 MMD 核实 culinary skill 的人选。","culinary.p4.m1":"4 小时","culinary.p4.m2":"已核实 culinary skill","culinary.p4.m3":"1–2 人",
"culinary.rules":"食材按实际费用 · 超时 ฿690/小时 · 增加宾客 +฿500/人（不含食材）· Parking/特殊交通按实际费用 · 严重过敏或 dietary restriction 必须提前告知，以便 MMD 审核是否合适。",
"confidential.kicker":"FOR MMD PROFILES · CONFIDENTIAL WORK","confidential.title":"已经有 Profile，但希望部分工作保持私密？","confidential.body":"你仍可保留正常的 Profile，同时选择让部分工作只通过 MMD 以 Confidential 方式发送。客户资料、工作提案与你的实际报酬不会公开显示。Confidential 只控制信息披露，不会自动把工作变成 Private Money；接受前，MY MODEL 会明确显示使用 CURATED MONEY 还是 PRIVATE MONEY。","confidential.cta":"联系 MMD Apply ↗",
"member.kicker":"MMD MEMBERS","member.title":"MMD 会员可见的 Profiles","member.note.loggedOut":"进入 MY MMD，查看依据你已核实会员权益开放的更多 Profiles。","member.note.loggedIn":"发送请求前，让 MMD 先确认匹配度与档期。","member.login":"进入 MY MMD ↗","member.cardLabel":"MMD 会员可见","member.cardCta":"让 MMD 提供详情 ↗",
"consent.kicker":"FOR EXISTING MMD PROFILES","consent.title":"你的照片，由你决定谁能看见","consent.body":"如果你已经有 MMD Profile，可以确认哪些 Role 允许在 /profiles 向尚未成为会员的访客展示你的照片，也可以撤回公开展示；这不会影响你的内部 Profile 或 MMD 发给你的 Confidential 工作。","consent.cta":"确认或撤回照片授权 ↗",
"access.kicker":"CURATED ACCESS","access.body":"<strong>Red Card</strong> 可在 MMD 确认 availability 后，以 Curated Job 形式开放与精选模特（Curated Models）的 Exclusive Model Meet。Private / Exclusive Model 范围需要 Black Card entitlement，并保留在独立的 Private route。","access.cta":"查看 MMD Membership",
"catalog.badge":"精选","catalog.line":"经 MMD 审核并批准用于此角色的公开资料。","catalog.fit":"确认之前","catalog.detail":"每次确认前，MMD 都会检查时间、边界与双方是否合适。","catalog.cta":"请 MMD 检查时间与匹配度","catalog.ctaFemale":"先进入 BELIEVE","catalog.medicalCta":"提交已验证请求给 MMD 审核","catalog.privatePreview":"PRIVATE PREVIEW · 验证身份后查看权限","catalog.chooseRole":"请先选择上方角色，仅显示符合资格的资料。","catalog.none":"目前此角色暂无经 MMD 批准公开的资料。","catalog.result":"显示 {n} 个 Profiles · {role}"
});

add("th",{
"dayoff.title":"วันหยุดนี้ ไม่ต้องไปคนเดียว","dayoff.body":"ไม่ใช่แพ็กเกจกาแฟ แต่เป็นช่วงเวลาที่มีแผนจริง เลือกคนที่เหมาะกับกิจกรรม แล้วให้ MMD ช่วยดูความลงตัวของวันนั้น",
"dayoff.p1.line":"หนึ่งกิจกรรมหลัก + อีกหนึ่งจุด เช่น Exhibition + Dinner, Movie + Supper หรือ Shopping + Dessert","dayoff.p1.m1":"3 ชั่วโมง","dayoff.p1.m2":"สูงสุด 2 stops",
"dayoff.p2.line":"หลายกิจกรรมในครึ่งวัน เช่น Lunch → Gallery → Shopping → Dessert พร้อม Mini Plan จาก MMD ได้","dayoff.p2.m1":"5 ชั่วโมง","dayoff.p2.m2":"หลายจุด",
"dayoff.p3.line":"ให้ MMD ช่วยวางวันทั้งวันจาก mood และสิ่งที่คุณชอบ สำหรับวันหยุดที่อยากเปลี่ยน routine จริง ๆ","dayoff.p3.m1":"8 ชั่วโมง","dayoff.p3.m2":"Full day",
"dayoff.rules":"DAY OFF แนะนำ 10:00–20:00 · OT ก่อน 00:00 ฿990/ชม. · เวลาที่จองไว้ล่วงหน้าหลัง 00:00 +฿500/ชม. · OT หลัง 00:00 ฿1,490/ชม. · หลัง 03:00 ฿1,790/ชม. · หลัง 06:00 ต้องให้ MMD review ใหม่ · Premium กับ OT ไม่คิดซ้อนในนาทีเดียวกัน · ต่อเวลาต้อง Request ใน MY MMD → Model Approve ใน MY MODEL → MMD ยืนยัน · ค่าอาหาร/เครื่องดื่ม/Ticket/Activity/เดินทาง/Parking คิดตามจริง",

"nightlife.title":"คืนนี้ จะให้จบแค่ Dinner หรือไปต่อ?","nightlife.body":"สำหรับ Dinner, Bar, Concert, Club, Celebration และคืนที่ต้องการคนเดิมอยู่ด้วยตามช่วงเวลาที่จอง",
"nightlife.p1.line":"Dinner + Drink, Concert + Late Supper หรือ Event + After spot แบบไม่ต้องยาวทั้งคืน","nightlife.p1.m1":"3 ชั่วโมง",
"nightlife.p2.line":"Dinner → Cocktail Bar → Night Spot สำหรับคืนที่อยากให้จังหวะต่อเนื่องและไม่ต้องเปลี่ยนคนกลางทาง","nightlife.p2.m1":"5 ชั่วโมง",
"nightlife.p3.line":"Dinner → Bar → Club / Concert → Late Supper สำหรับคืนที่ตั้งใจออกไปใช้จริง ๆ","nightlife.p3.m1":"7 ชั่วโมง",
"nightlife.rules":"NIGHT LIFE เริ่มได้ตั้งแต่ช่วงเย็น · OT ก่อน 00:00 ฿990/ชม. · เวลาที่จองไว้ล่วงหน้าหลัง 00:00 +฿500/ชม. · OT หลัง 00:00 ฿1,490/ชม. · OT หลัง 03:00 ฿1,790/ชม. · หลัง 06:00 ต้องให้ MMD review ใหม่ · Premium กับ OT ไม่คิดซ้อนในนาทีเดียวกัน · ต่อเวลาต้อง Request ใน MY MMD → Model Approve ใน MY MODEL → MMD ยืนยัน · ค่าอาหาร/เครื่องดื่ม/Table minimum/Ticket/Club/Concert/Taxi/Parking คิดตามจริง",

"social.title":"บางงาน แค่มีคนไปด้วยก็เปลี่ยนทั้งบรรยากาศ","social.body":"สำหรับ Dinner, Wedding, Gala, Corporate Event และ Social occasion ที่ต้องการคนที่แต่งตัวเหมาะ เข้าสังคมเป็น และเข้าใจบริบทของงาน",
"social.p1.line":"Dinner, Reception หรือ Invitation ที่อยากมีคู่ไปด้วยแบบสุภาพ ดูดี และคุยกับคนในงานได้","social.p1.m1":"3 ชั่วโมง",
"social.p2.line":"Wedding, Launch, Corporate Event หรือ Celebration ที่ต้องอยู่ด้วยกันตลอดช่วงหลักของงาน","social.p2.m1":"4 ชั่วโมง",
"social.p3.line":"ค่ำคืนที่ยาวขึ้น ตั้งแต่ Dinner / Reception ไปจนถึงช่วงหลักของงาน พร้อม briefing เรื่อง dress code และ social context","social.p3.m1":"6 ชั่วโมง",
"social.commercial":"Brand guest, commercial event, media appearance หรือการใช้ภาพ/วิดีโอเชิงพาณิชย์ ต้อง brief และ quote แยกตามหน้าที่และ usage rights",
"social.rules":"OT ก่อน 00:00 ฿1,290/ชม. · เวลาที่จองไว้ล่วงหน้าหลัง 00:00 +฿500/ชม. · OT หลัง 00:00 ฿1,790/ชม. · OT หลัง 03:00 ฿2,090/ชม. · หลัง 06:00 ต้อง MMD review · หากลักษณะงานเปลี่ยนเป็น Night Life / Commercial ต้อง Change Plan และ re-quote · ต่อเวลาต้อง Request ใน MY MMD → Model Approve ใน MY MODEL → MMD ยืนยัน · ค่าอาหาร/เครื่องดื่ม/Ticket/เดินทาง/Parking/wardrobe พิเศษคิดตามจริง",

"bangkok.title":"Bangkok is the destination. เขาคือคนที่ไปด้วย","bangkok.body":"Local Companion สำหรับคนที่อยากใช้กรุงเทพแบบมีคนรู้จังหวะเมืองไปด้วย — MMD ช่วยวาง route, match personality และดู continuity หลายจุด โดยไม่ขายเป็นบริการมัคคุเทศก์ เว้นแต่ MMD ยืนยันผู้มีใบอนุญาตโดยเฉพาะ",
"bangkok.p1.line":"เลือก 2–3 จุดในโซนเดียวกัน เช่น Old Town, Riverside, Siam หรือ Ari แล้วใช้เมืองไปด้วยกันแบบไม่รีบ","bangkok.p1.m1":"3 ชั่วโมง",
"bangkok.p2.line":"ครึ่งวันที่มีหลาย mood เช่น Neighborhood → Food → River → Sunset โดย MMD ช่วยจัด route ให้เข้ากับสิ่งที่คุณชอบ","bangkok.p2.m1":"5 ชั่วโมง",
"bangkok.p3.line":"หนึ่งวันเต็มในกรุงเทพจาก mood ของคุณ — MMD ช่วยเรียง route, timing และคนที่เหมาะกับ day plan นั้น","bangkok.p3.m1":"8 ชั่วโมง",
"bangkok.guide":"หากต้องการบริการมัคคุเทศก์เชิงประวัติศาสตร์ วัฒนธรรม หรือการนำเที่ยวอย่างเป็นทางการ MMD จะจัดเฉพาะผู้ที่ตรวจใบอนุญาตแล้วและ quote แยก",
"bangkok.rules":"Bangkok city only · OT ก่อน 00:00 ฿1,190/ชม. · เวลาที่จองไว้ล่วงหน้าหลัง 00:00 +฿500/ชม. · OT หลัง 00:00 ฿1,690/ชม. · OT หลัง 03:00 ฿1,990/ชม. · หลัง 06:00 ต้อง MMD review · ถ้า activity เปลี่ยนเป็น Night Life ให้ Change Plan / re-quote · ออกนอกกรุงเทพต้อง re-quote · ต่อเวลาต้อง Request ใน MY MMD → Model Approve ใน MY MODEL → MMD ยืนยัน · ค่าอาหาร/เครื่องดื่ม/ตั๋ว/กิจกรรม/BTS-MRT/Taxi/Boat/Parking คิดตามจริง · Companion ทั่วไปไม่ใช่ Licensed Tour Guide",

"sport.title":"กิจกรรมที่อยากทำ สนุกขึ้นเมื่อมีคนไปด้วย","sport.body":"Running, Tennis, Badminton, Gym buddy หรือ Outdoor activity ที่อยากมี Companion ที่เข้ากับจังหวะของคุณ — MMD จะยืนยัน activity fit และ availability ก่อนทุกงาน",
"sport.p1.line":"หนึ่งกิจกรรมหลัก เช่น Tennis, Badminton, Gym buddy หรือ Run + Coffee หลังจบกิจกรรม","sport.p1.m1":"3 ชั่วโมง",
"sport.p2.line":"วันกิจกรรมที่มีเวลาเต็มขึ้น เช่น Court time → Lunch หรือสอง activity blocks ในโซนเดียวกัน","sport.p2.m1":"5 ชั่วโมง",
"sport.p3.line":"ใช้วันหยุดแบบ active ตั้งแต่กิจกรรมเช้า ไปจนถึงจุดพักหรือมื้ออาหารที่วางไว้ด้วยกัน","sport.p3.m1":"8 ชั่วโมง",
"sport.rules":"Sport Activity คือ Companion สำหรับทำกิจกรรมร่วมกัน ไม่ใช่ Personal Trainer, Therapist หรือผู้ให้คำแนะนำทางการแพทย์ · MMD จะยืนยันความเหมาะสมของ Model กับกิจกรรมก่อนทุกครั้ง · ค่า venue/court/class/equipment/ticket/เดินทาง/Parking/อาหารและเครื่องดื่มคิดตามจริง · OT ก่อน 00:00 ฿990/ชม. · OT หลัง 00:00 ฿1,490/ชม. · หลัง 03:00 ฿1,790/ชม. · หลัง 06:00 ต้อง MMD review · ต่อเวลาต้อง Request ใน MY MMD → Model Approve ใน MY MODEL → MMD ยืนยัน",

"wellness.title":"ให้วันของคุณค่อย ๆ กลับมาอยู่ในจังหวะที่ดี","wellness.body":"Wellness day, healthy lifestyle หรือวันพักที่อยากมีคนไปด้วย — MMD จะดู lifestyle fit และ availability ก่อนทุกงาน เพื่อให้แผนวันนั้นสบายและเป็นของคุณจริง ๆ",
"wellness.p1.line":"ช่วงเวลาสบาย ๆ สำหรับ healthy brunch, เดินเล่น, wellness venue หรือกิจกรรมเบา ๆ ในโซนเดียวกัน","wellness.p1.m1":"3 ชั่วโมง",
"wellness.p2.line":"ครึ่งวันที่มี healthy meal, easy activity และจุดพักที่เลือกตาม mood ของคุณโดยไม่รีบ","wellness.p2.m1":"5 ชั่วโมง",
"wellness.p3.line":"หนึ่งวันเต็มที่เว้นจังหวะให้คุณได้พัก กินดี เดินทางสบาย และใช้เวลากับสิ่งที่ทำให้รู้สึกดีขึ้น","wellness.p3.m1":"8 ชั่วโมง",
"wellness.rules":"Wellness Companion คือเพื่อนร่วมวันสำหรับ lifestyle และกิจกรรมที่ตกลงกัน ไม่ใช่ Personal Trainer, Therapist, massage, recovery treatment หรือผู้ให้คำแนะนำทางการแพทย์ · หากต้องการ massage หรือ recovery service ให้ใช้ MMS Wellness route แยก · MMD จะยืนยันความเหมาะสมของ Model กับแผนและ availability ก่อนทุกครั้ง · ค่า venue/class/ticket/เดินทาง/Parking/อาหารและเครื่องดื่มคิดตามจริง · OT ก่อน 00:00 ฿1,690/ชม. · OT หลัง 00:00 ฿2,190/ชม. · หลัง 03:00 ฿2,690/ชม. · หลัง 06:00 ต้อง MMD review · ต่อเวลาต้อง Request ใน MY MMD → Model Approve ใน MY MODEL → MMD ยืนยัน",

"business.title":"บางบริบท แค่มีคนที่วางตัวดีไปด้วยก็พอ","business.body":"Business lunch, networking event, meeting context และ smart-casual presence สำหรับวันที่อยากมี Companion ที่เข้าใจ dress code และ social context ของคุณ",
"business.p1.line":"Lunch, coffee meeting หรือช่วงพบปะสำคัญที่ต้องการคนไปด้วยอย่างสุภาพและเหมาะกับบริบท","business.p1.m1":"3 ชั่วโมง",
"business.p2.line":"Networking event, client-facing lunch หรือ agenda ที่มีหลายช่วงในวันเดียวกัน โดย MMD ช่วยเช็ก fit และ dress context ล่วงหน้า","business.p2.m1":"5 ชั่วโมง",
"business.p3.line":"หนึ่งวันสำหรับ lunch, networking และ social business context ที่ต้องการ continuity โดยยังคงเป็น Companion คนเดิมตามเวลาที่จอง","business.p3.m1":"8 ชั่วโมง",
"business.rules":"Business Companion คือ social presence companion ไม่ใช่พนักงานบริษัท เลขานุการ ตัวแทนเจรจา ผู้รับมอบอำนาจ หรือผู้มีสิทธิ์เซ็นเอกสาร/ตกลงแทนลูกค้า · MMD จะยืนยัน context, dress code และ availability ก่อนทุกครั้ง · ค่าอาหาร/เครื่องดื่ม/venue/ticket/transport/Parking/wardrobe พิเศษคิดตามจริง · OT ก่อน 00:00 ฿1,990/ชม. · OT หลัง 00:00 ฿2,490/ชม. · หลัง 03:00 ฿2,990/ชม. · หลัง 06:00 ต้อง MMD review · หากขอบเขตเปลี่ยนเป็นงาน commercial, spokesperson หรือ professional service ต้อง Change Plan และ re-quote · ต่อเวลาต้อง Request ใน MY MMD → Model Approve ใน MY MODEL → MMD ยืนยัน",

"creative.title":"วันที่อยากดูอะไรใหม่ ๆ ไม่ต้องไปคนเดียว","creative.body":"Gallery, exhibition, photo walk, music, design หรือ creative day ที่อยากมีคนที่ share interest เดียวกันไปใช้เวลาและคุยกันใน context นั้น",
"creative.p1.line":"Gallery, exhibition, bookstore หรือ creative coffee ที่อยากมีคนไปเดินดู พูดคุย และใช้ mood เดียวกัน","creative.p1.m1":"3 ชั่วโมง",
"creative.p2.line":"Photo walk, gallery route, music หรือ design context ที่มี 2–3 moments ในโซนเดียวกัน โดย MMD เช็ก shared interest และ availability ก่อน","creative.p2.m1":"5 ชั่วโมง",
"creative.p3.line":"หนึ่งวันเต็มสำหรับ gallery, city walk, music หรือ creative plan ที่อยากค่อย ๆ ใช้เวลา โดยมี Companion คนเดิมอยู่ใน context ที่ตกลงกัน","creative.p3.m1":"8 ชั่วโมง",
"creative.rules":"Creative Companion คือ shared-interest companion ไม่ใช่ช่างภาพ นักออกแบบ ศิลปินรับจ้าง ผู้ผลิตงาน หรือผู้ให้บริการวิชาชีพ · Photo walk คือการทำกิจกรรมร่วมกันเท่านั้น ไม่มีภาพส่งมอบหรือ usage rights · งานถ่ายภาพ/วิดีโอเชิงพาณิชย์, creative production หรือการใช้ภาพต้องส่ง brief และ quote แยก · MMD จะยืนยัน shared interest, context และ availability ก่อนทุกครั้ง · ค่า ticket/exhibition/venue/transport/Parking/อาหารและเครื่องดื่มคิดตามจริง · OT ก่อน 00:00 ฿1,690/ชม. · OT หลัง 00:00 ฿2,190/ชม. · หลัง 03:00 ฿2,690/ชม. · หลัง 06:00 ต้อง MMD review · ต่อเวลาต้อง Request ใน MY MMD → Model Approve ใน MY MODEL → MMD ยืนยัน",

"medical.title":"คำขอที่ต้องให้ MMD ตรวจความเหมาะสมก่อน","medical.body":"Medical Professional เปิดเฉพาะผู้ที่ MMD ตรวจ credential แล้ว และรับเป็น request brief เท่านั้น เพื่อให้ MMD ดู specialty, ขอบเขตวิชาชีพ, เวลา/สถานที่ และความเหมาะสมก่อนตอบกลับ",
"medical.line":"ส่งเฉพาะรายละเอียดเท่าที่จำเป็นและขอบเขตที่ต้องการให้ MMD พิจารณา — ยังไม่มีราคา การชำระเงิน การยืนยันคิว หรือการจับคู่จากหน้านี้",
"medical.rules":"ไม่ใช่บริการฉุกเฉิน และหน้านี้ไม่ใช้สำหรับ diagnosis, treatment, therapy หรือคำแนะนำทางการแพทย์ · MMD จะไม่อ้าง claim เกิน credential ที่ตรวจแล้ว และจะไม่เสนอราคา/checkout จนกว่าจะผ่าน MMD review และกำหนดขอบเขตที่ถูกต้อง"
});

add("en",{
"dayoff.title":"Your day off does not have to be a solo day","dayoff.body":"This is not a coffee package. It is planned time together: choose the right person for the activity and let MMD check the fit of the day.",
"dayoff.p1.line":"One main activity + one more stop, such as Exhibition + Dinner, Movie + Supper, or Shopping + Dessert.","dayoff.p1.m1":"3 hours","dayoff.p1.m2":"Up to 2 stops",
"dayoff.p2.line":"Several activities across half a day, such as Lunch → Gallery → Shopping → Dessert, with an optional Mini Plan from MMD.","dayoff.p2.m1":"5 hours","dayoff.p2.m2":"Multiple stops",
"dayoff.p3.line":"Let MMD shape a full day around your mood and interests when you want a real break from routine.","dayoff.p3.m1":"8 hours","dayoff.p3.m2":"Full day",
"dayoff.rules":"DAY OFF is recommended for 10:00–20:00 · OT before 00:00 ฿990/hr · Pre-booked time after 00:00 +฿500/hr · OT after 00:00 ฿1,490/hr · after 03:00 ฿1,790/hr · after 06:00 requires a new MMD review · Premium and OT are not stacked for the same minutes · Extensions require MY MMD Request → Model Approve in MY MODEL → MMD confirmation · Food, drinks, tickets, activities, transport, and parking are charged at actual cost.",

"nightlife.title":"Does tonight end at Dinner, or keep going?","nightlife.body":"For Dinner, Bar, Concert, Club, Celebration, and nights when you want the same person with you for the booked time.",
"nightlife.p1.line":"Dinner + Drink, Concert + Late Supper, or Event + After spot without committing to the whole night.","nightlife.p1.m1":"3 hours",
"nightlife.p2.line":"Dinner → Cocktail Bar → Night Spot for a continuous night without changing companions halfway through.","nightlife.p2.m1":"5 hours",
"nightlife.p3.line":"Dinner → Bar → Club / Concert → Late Supper for a night you genuinely plan to use.","nightlife.p3.m1":"7 hours",
"nightlife.rules":"NIGHT LIFE can start from the evening · OT before 00:00 ฿990/hr · Pre-booked time after 00:00 +฿500/hr · OT after 00:00 ฿1,490/hr · after 03:00 ฿1,790/hr · after 06:00 requires a new MMD review · Premium and OT are not stacked for the same minutes · Extensions require MY MMD Request → Model Approve in MY MODEL → MMD confirmation · Food, drinks, table minimums, tickets, clubs, concerts, taxi, and parking are charged at actual cost.",

"social.title":"For some occasions, simply having the right person beside you changes the room","social.body":"For Dinner, Wedding, Gala, Corporate Event, and social occasions that call for someone who dresses appropriately, socialises well, and understands the context.",
"social.p1.line":"Dinner, Reception, or Invitation when you want a polished companion who can comfortably engage with people at the event.","social.p1.m1":"3 hours",
"social.p2.line":"Wedding, Launch, Corporate Event, or Celebration where you want the same person through the main part of the event.","social.p2.m1":"4 hours",
"social.p3.line":"A longer evening from Dinner / Reception into the main event, with dress-code and social-context briefing.","social.p3.m1":"6 hours",
"social.commercial":"Brand guest, commercial event, media appearance, or commercial photo/video usage requires a separate brief and quote based on duties and usage rights.",
"social.rules":"OT before 00:00 ฿1,290/hr · Pre-booked time after 00:00 +฿500/hr · OT after 00:00 ฿1,790/hr · after 03:00 ฿2,090/hr · after 06:00 requires MMD review · If the scope becomes Night Life / Commercial, the plan must change and be re-quoted · Extensions require MY MMD Request → Model Approve in MY MODEL → MMD confirmation · Food, drinks, tickets, transport, parking, and special wardrobe are charged at actual cost.",

"bangkok.title":"Bangkok is the destination. He is the person you go with.","bangkok.body":"A Local Companion for experiencing Bangkok with someone who understands the rhythm of the city. MMD helps with route, personality match, and continuity across stops. This is not sold as a tour-guide service unless MMD specifically confirms a licensed guide.",
"bangkok.p1.line":"Choose 2–3 stops in one area, such as Old Town, Riverside, Siam, or Ari, and enjoy the city without rushing.","bangkok.p1.m1":"3 hours",
"bangkok.p2.line":"A half day with several moods, such as Neighborhood → Food → River → Sunset, with MMD shaping the route around your interests.","bangkok.p2.m1":"5 hours",
"bangkok.p3.line":"A full Bangkok day built from your mood, with MMD arranging route, timing, and the person who fits that day plan.","bangkok.p3.m1":"8 hours",
"bangkok.guide":"For historical, cultural, or formal guided-tour service, MMD will arrange only a verified licensed guide and quote it separately.",
"bangkok.rules":"Bangkok city only · OT before 00:00 ฿1,190/hr · Pre-booked time after 00:00 +฿500/hr · OT after 00:00 ฿1,690/hr · after 03:00 ฿1,990/hr · after 06:00 requires MMD review · If the activity becomes Night Life, Change Plan / re-quote applies · Outside Bangkok requires re-quote · Extensions require MY MMD Request → Model Approve in MY MODEL → MMD confirmation · Food, drinks, tickets, activities, BTS/MRT, taxi, boat, and parking are actual cost · A general Companion is not a Licensed Tour Guide.",

"sport.title":"The activity is more fun when someone goes with you","sport.body":"Running, Tennis, Badminton, Gym buddy, or Outdoor activity with a Companion who matches your pace. MMD confirms activity fit and availability before every job.",
"sport.p1.line":"One main activity such as Tennis, Badminton, Gym buddy, or a Run + Coffee afterwards.","sport.p1.m1":"3 hours",
"sport.p2.line":"A fuller activity day such as Court time → Lunch, or two activity blocks in the same area.","sport.p2.m1":"5 hours",
"sport.p3.line":"An active day off from a morning activity through a planned rest stop or meal together.","sport.p3.m1":"8 hours",
"sport.rules":"Sport Activity is companionship for doing an activity together, not Personal Training, Therapy, or medical advice · MMD confirms the Model/activity fit before every booking · Venue, court, class, equipment, ticket, transport, parking, food, and drinks are actual cost · OT before 00:00 ฿990/hr · OT after 00:00 ฿1,490/hr · after 03:00 ฿1,790/hr · after 06:00 requires MMD review · Extensions require MY MMD Request → Model Approve in MY MODEL → MMD confirmation.",

"wellness.title":"Let your day settle back into a better rhythm","wellness.body":"A Wellness day, healthy lifestyle plan, or rest day with someone beside you. MMD checks lifestyle fit and availability so the day stays comfortable and genuinely yours.",
"wellness.p1.line":"An easy window for healthy brunch, a walk, wellness venue, or light activity in one area.","wellness.p1.m1":"3 hours",
"wellness.p2.line":"A half day with a healthy meal, easy activity, and rest stops chosen around your mood without rushing.","wellness.p2.m1":"5 hours",
"wellness.p3.line":"A full day with room to rest, eat well, travel comfortably, and spend time on what helps you feel better.","wellness.p3.m1":"8 hours",
"wellness.rules":"Wellness Companion is a lifestyle/activity companion, not a Personal Trainer, Therapist, massage, recovery treatment, or medical-advice provider · For massage or recovery service use the separate MMS Wellness route · MMD confirms Model/plan fit and availability each time · Venue, class, ticket, transport, parking, food, and drinks are actual cost · OT before 00:00 ฿1,690/hr · OT after 00:00 ฿2,190/hr · after 03:00 ฿2,690/hr · after 06:00 requires MMD review · Extensions require MY MMD Request → Model Approve in MY MODEL → MMD confirmation.",

"business.title":"In some contexts, the right presence beside you is enough","business.body":"Business lunch, networking event, meeting context, and smart-casual presence for days when you want a Companion who understands dress code and social context.",
"business.p1.line":"Lunch, coffee meeting, or an important meeting period when you want someone present in a polished, context-appropriate way.","business.p1.m1":"3 hours",
"business.p2.line":"Networking event, client-facing lunch, or an agenda with several parts in one day, with MMD checking fit and dress context in advance.","business.p2.m1":"5 hours",
"business.p3.line":"A full day across lunch, networking, and social-business context with the same Companion for the booked time.","business.p3.m1":"8 hours",
"business.rules":"Business Companion is social presence, not an employee, secretary, negotiator, authorised representative, or someone who can sign or agree on the client's behalf · MMD confirms context, dress code, and availability every time · Food, drinks, venue, tickets, transport, parking, and special wardrobe are actual cost · OT before 00:00 ฿1,990/hr · OT after 00:00 ฿2,490/hr · after 03:00 ฿2,990/hr · after 06:00 requires MMD review · Commercial, spokesperson, or professional-service scope requires Change Plan and re-quote · Extensions require MY MMD Request → Model Approve in MY MODEL → MMD confirmation.",

"creative.title":"When you want to see something new, you do not have to go alone","creative.body":"Gallery, exhibition, photo walk, music, design, or a creative day with someone who shares the interest and can spend time in that context with you.",
"creative.p1.line":"Gallery, exhibition, bookstore, or creative coffee with someone to browse, talk, and share the mood.","creative.p1.m1":"3 hours",
"creative.p2.line":"Photo walk, gallery route, music, or design context with 2–3 moments in the same area, after MMD checks shared interest and availability.","creative.p2.m1":"5 hours",
"creative.p3.line":"A full day for gallery, city walk, music, or a creative plan with the same Companion in the agreed context.","creative.p3.m1":"8 hours",
"creative.rules":"Creative Companion is shared-interest companionship, not a photographer, designer, commissioned artist, producer, or professional service provider · Photo walk means doing the activity together; no delivered images or usage rights are included · Commercial photo/video, creative production, or image usage requires a separate brief and quote · MMD confirms shared interest, context, and availability every time · Tickets, exhibitions, venue, transport, parking, food, and drinks are actual cost · OT before 00:00 ฿1,690/hr · OT after 00:00 ฿2,190/hr · after 03:00 ฿2,690/hr · after 06:00 requires MMD review · Extensions require MY MMD Request → Model Approve in MY MODEL → MMD confirmation.",

"medical.title":"A request MMD needs to review before anything else","medical.body":"Medical Professional is available only for people whose credentials MMD has verified, and only through a request brief so MMD can review specialty, professional scope, time/location, and fit before responding.",
"medical.line":"Send only the details necessary for MMD to review the requested scope. There is no price, payment, confirmed availability, or matching from this page.",
"medical.rules":"This is not an emergency service and this page is not for diagnosis, treatment, therapy, or medical advice · MMD will not make claims beyond verified credentials and will not offer price/checkout until MMD review defines the correct scope."
});

add("zh",{
"dayoff.title":"这个休息日，不必一个人过","dayoff.body":"这不是一个“喝咖啡套餐”，而是一段有计划的相处时间。先选适合活动的人，再由 MMD 确认当天是否合适。",
"dayoff.p1.line":"一个主要活动 + 另一个地点，例如 Exhibition + Dinner、Movie + Supper 或 Shopping + Dessert。","dayoff.p1.m1":"3 小时","dayoff.p1.m2":"最多 2 个 stops",
"dayoff.p2.line":"半天安排多个活动，例如 Lunch → Gallery → Shopping → Dessert，也可由 MMD 提供 Mini Plan。","dayoff.p2.m1":"5 小时","dayoff.p2.m2":"多个地点",
"dayoff.p3.line":"让 MMD 根据你的 mood 与兴趣安排一整天，适合真正想换个 routine 的休息日。","dayoff.p3.m1":"8 小时","dayoff.p3.m2":"全天",
"dayoff.rules":"DAY OFF 建议 10:00–20:00 · 00:00 前 OT ฿990/小时 · 预先预约的 00:00 后时段 +฿500/小时 · 00:00 后 OT ฿1,490/小时 · 03:00 后 ฿1,790/小时 · 06:00 后需 MMD 重新审核 · Premium 与 OT 不在同一分钟重复计算 · 延时需 MY MMD Request → MY MODEL 中 Model Approve → MMD 确认 · 餐饮、Ticket、Activity、交通与 Parking 按实际费用。",

"nightlife.title":"今晚，只到 Dinner，还是继续？","nightlife.body":"适合 Dinner、Bar、Concert、Club、Celebration，以及希望同一个人在已预约时段内持续陪伴的夜晚。",
"nightlife.p1.line":"Dinner + Drink、Concert + Late Supper 或 Event + After spot，不必直接安排整晚。","nightlife.p1.m1":"3 小时",
"nightlife.p2.line":"Dinner → Cocktail Bar → Night Spot，适合希望整晚节奏连贯、不想中途换人的情况。","nightlife.p2.m1":"5 小时",
"nightlife.p3.line":"Dinner → Bar → Club / Concert → Late Supper，适合真正计划好好出去一晚。","nightlife.p3.m1":"7 小时",
"nightlife.rules":"NIGHT LIFE 可从傍晚开始 · 00:00 前 OT ฿990/小时 · 预先预约的 00:00 后时段 +฿500/小时 · 00:00 后 OT ฿1,490/小时 · 03:00 后 ฿1,790/小时 · 06:00 后需 MMD 重新审核 · Premium 与 OT 不重复计算 · 延时需 MY MMD Request → MY MODEL 中 Model Approve → MMD 确认 · 餐饮、Table minimum、Ticket、Club、Concert、Taxi 与 Parking 按实际费用。",

"social.title":"有些场合，只要对的人陪你去，整个氛围就会不同","social.body":"适合 Dinner、Wedding、Gala、Corporate Event 与 Social occasion，需要懂得穿着、社交与场合分寸的人。",
"social.p1.line":"Dinner、Reception 或 Invitation，需要一位举止得体、能自然与现场宾客交流的同行者。","social.p1.m1":"3 小时",
"social.p2.line":"Wedding、Launch、Corporate Event 或 Celebration，需要同一个人在活动主要时段持续陪同。","social.p2.m1":"4 小时",
"social.p3.line":"更长的晚间安排，从 Dinner / Reception 到活动主要时段，并包含 dress code 与 social context briefing。","social.p3.m1":"6 小时",
"social.commercial":"Brand guest、commercial event、media appearance 或商业照片/视频使用，需要按职责与 usage rights 单独提交 brief 与 quote。",
"social.rules":"00:00 前 OT ฿1,290/小时 · 预先预约的 00:00 后时段 +฿500/小时 · 00:00 后 OT ฿1,790/小时 · 03:00 后 ฿2,090/小时 · 06:00 后需 MMD review · 若工作变为 Night Life / Commercial，需 Change Plan 并重新报价 · 延时需 MY MMD Request → MY MODEL 中 Model Approve → MMD 确认 · 餐饮、Ticket、交通、Parking 与特殊 wardrobe 按实际费用。",

"bangkok.title":"Bangkok is the destination. 他是陪你一起去的人。","bangkok.body":"Local Companion 适合想和熟悉城市节奏的人一起体验 Bangkok。MMD 可协助 route、personality match 与多个地点的 continuity；除非 MMD 特别确认持牌导游，否则不作为导游服务销售。",
"bangkok.p1.line":"在同一区域选择 2–3 个地点，例如 Old Town、Riverside、Siam 或 Ari，慢慢使用这座城市。","bangkok.p1.m1":"3 小时",
"bangkok.p2.line":"半天多个 mood，例如 Neighborhood → Food → River → Sunset，由 MMD 按你的兴趣安排 route。","bangkok.p2.m1":"5 小时",
"bangkok.p3.line":"根据你的 mood 安排一整天 Bangkok，由 MMD 组合 route、timing 与适合该 day plan 的人。","bangkok.p3.m1":"8 小时",
"bangkok.guide":"如需历史、文化或正式导览服务，MMD 只会安排已核实执照的 Licensed Guide，并单独报价。",
"bangkok.rules":"仅 Bangkok city · 00:00 前 OT ฿1,190/小时 · 预先预约的 00:00 后时段 +฿500/小时 · 00:00 后 OT ฿1,690/小时 · 03:00 后 ฿1,990/小时 · 06:00 后需 MMD review · 若 activity 变成 Night Life，需 Change Plan / re-quote · 离开 Bangkok 需重新报价 · 延时需 MY MMD Request → MY MODEL 中 Model Approve → MMD 确认 · 餐饮、票券、活动、BTS/MRT、Taxi、Boat、Parking 按实际费用 · 一般 Companion 并非 Licensed Tour Guide。",

"sport.title":"想做的活动，有人一起会更好玩","sport.body":"Running、Tennis、Badminton、Gym buddy 或 Outdoor activity，由节奏适合你的 Companion 一起参与；MMD 每次都会先确认 activity fit 与 availability。",
"sport.p1.line":"一个主要活动，例如 Tennis、Badminton、Gym buddy，或 Run + Coffee。","sport.p1.m1":"3 小时",
"sport.p2.line":"更完整的活动日，例如 Court time → Lunch，或在同一区域安排两个 activity blocks。","sport.p2.m1":"5 小时",
"sport.p3.line":"Active day off，从早上的活动一路到计划好的休息点或用餐。","sport.p3.m1":"8 小时",
"sport.rules":"Sport Activity 是一起参加活动的 Companion，不是 Personal Trainer、Therapist 或医疗建议提供者 · MMD 每次都会确认 Model 与活动的适配度 · venue/court/class/equipment/ticket/交通/Parking/餐饮按实际费用 · 00:00 前 OT ฿990/小时 · 00:00 后 OT ฿1,490/小时 · 03:00 后 ฿1,790/小时 · 06:00 后需 MMD review · 延时需 MY MMD Request → MY MODEL 中 Model Approve → MMD 确认。",

"wellness.title":"让你的这一天，慢慢回到舒服的节奏","wellness.body":"Wellness day、healthy lifestyle 或休息日，希望有人一起时，MMD 会先确认 lifestyle fit 与 availability，让当天的安排真正舒服、适合你。",
"wellness.p1.line":"轻松的一段时间，可安排 healthy brunch、散步、wellness venue 或同一区域内的轻活动。","wellness.p1.m1":"3 小时",
"wellness.p2.line":"半天安排 healthy meal、easy activity 与按 mood 选择的休息点，不必赶时间。","wellness.p2.m1":"5 小时",
"wellness.p3.line":"完整一天，留出休息、好好吃饭、舒适移动，以及做让自己感觉更好的事。","wellness.p3.m1":"8 小时",
"wellness.rules":"Wellness Companion 是 lifestyle 与共同活动的陪伴，不是 Personal Trainer、Therapist、massage、recovery treatment 或医疗建议提供者 · 如需 massage 或 recovery service，请使用独立 MMS Wellness route · MMD 每次确认 Model/plan fit 与 availability · venue/class/ticket/交通/Parking/餐饮按实际费用 · 00:00 前 OT ฿1,690/小时 · 00:00 后 OT ฿2,190/小时 · 03:00 后 ฿2,690/小时 · 06:00 后需 MMD review · 延时需 MY MMD Request → MY MODEL 中 Model Approve → MMD 确认。",

"business.title":"有些场合，只需要一个举止得体的人陪在身边","business.body":"Business lunch、networking event、meeting context 与 smart-casual presence，适合希望同行者理解你的 dress code 与 social context 的日子。",
"business.p1.line":"Lunch、coffee meeting 或重要会面时段，需要有人以得体、符合场合的方式陪同。","business.p1.m1":"3 小时",
"business.p2.line":"Networking event、client-facing lunch 或同一天多个 agenda，由 MMD 预先确认 fit 与 dress context。","business.p2.m1":"5 小时",
"business.p3.line":"一整天跨越 lunch、networking 与 social business context，并在预约时间内保持同一个 Companion。","business.p3.m1":"8 小时",
"business.rules":"Business Companion 是 social presence companion，不是公司员工、秘书、谈判代表、授权代理，也无权替客户签署文件或达成协议 · MMD 每次确认 context、dress code 与 availability · 餐饮、venue、ticket、transport、Parking、特殊 wardrobe 按实际费用 · 00:00 前 OT ฿1,990/小时 · 00:00 后 OT ฿2,490/小时 · 03:00 后 ฿2,990/小时 · 06:00 后需 MMD review · 若范围变为 commercial、spokesperson 或 professional service，需 Change Plan 并 re-quote · 延时需 MY MMD Request → MY MODEL 中 Model Approve → MMD 确认。",

"creative.title":"想去看点新的，不必一个人去","creative.body":"Gallery、exhibition、photo walk、music、design 或 creative day，与真正 share interest 的人一起在那个 context 里花时间、聊天。",
"creative.p1.line":"Gallery、exhibition、bookstore 或 creative coffee，有人一起逛、聊、共享同一种 mood。","creative.p1.m1":"3 小时",
"creative.p2.line":"Photo walk、gallery route、music 或 design context，在同一区域安排 2–3 个 moments，并由 MMD 先确认 shared interest 与 availability。","creative.p2.m1":"5 小时",
"creative.p3.line":"一整天用于 gallery、city walk、music 或 creative plan，由同一个 Companion 在已约定的 context 中陪同。","creative.p3.m1":"8 小时",
"creative.rules":"Creative Companion 是 shared-interest companion，不是摄影师、设计师、受委托艺术家、制作人或专业服务提供者 · Photo walk 只是共同参与活动，不包含成品照片或 usage rights · 商业照片/视频、creative production 或图像使用需另行 brief 与 quote · MMD 每次确认 shared interest、context 与 availability · ticket/exhibition/venue/transport/Parking/餐饮按实际费用 · 00:00 前 OT ฿1,690/小时 · 00:00 后 OT ฿2,190/小时 · 03:00 后 ฿2,690/小时 · 06:00 后需 MMD review · 延时需 MY MMD Request → MY MODEL 中 Model Approve → MMD 确认。",

"medical.title":"需要先由 MMD 判断是否合适的请求","medical.body":"Medical Professional 只开放给经 MMD 核实 credential 的专业人士，并仅接受 request brief，让 MMD 先审核 specialty、专业范围、时间/地点与整体适配度。",
"medical.line":"只提交 MMD 审核所需的必要资料与范围；本页不会直接提供价格、付款、确认档期或匹配结果。",
"medical.rules":"这不是紧急服务，本页也不用于 diagnosis、treatment、therapy 或医疗建议 · MMD 不会做超出已核实 credential 的 claim，也不会在 MMD review 与正确范围确定前提供价格或 checkout。"
});

})();

;

/* SOURCE: pages/profiles.runtime.js */
/* MMD Privé · Profiles canonical binder/runtime
   Route: /profiles · TH/EN/ZH · 2026-10-05 */
(function(){
  "use strict";
  var W=window,D=document;
  function onRoute(){return (((location.pathname||"/").replace(/\/+$/,"")||"/")==="/profiles");}
  if(!onRoute())return;
  var remembered=new WeakMap(),scheduled=false;
  function lang(){
    if(W.MMD_I18N&&typeof W.MMD_I18N.getLang==="function")return W.MMD_I18N.getLang();
    try{var q=new URLSearchParams(location.search).get("lang");var s=q||localStorage.getItem("mmd_lang")||localStorage.getItem("lang")||"th";return /^(th|en|zh)$/.test(s)?s:"th";}catch(_){return"th";}
  }
  function t(key,l){
    if(W.MMD_I18N&&typeof W.MMD_I18N.t==="function"){var v=W.MMD_I18N.t("profiles."+key,{lang:l});if(v!=null&&String(v).trim())return String(v);}
    var I=W.I18N_DICT||{},row=I[l]||{};return row["profiles."+key]||null;
  }
  function reverse(){
    var I=W.I18N_DICT||{},th=I.th||{},out={};
    Object.keys(th).forEach(function(k){if(k.indexOf("profiles.")!==0)return;var v=th[k];if(typeof v!=="string"||!v.trim()||/[<>]/.test(v))return;out[v.trim()]=k.slice(9);});
    return out;
  }
  function preserveReplace(node,value){var raw=node.nodeValue||"",m=raw.match(/^(\s*)([\s\S]*?)(\s*)$/);node.nodeValue=(m?m[1]:"")+value+(m?m[3]:"");}
  function translateText(root,l){
    var rev=reverse(),scope=root&&root.nodeType===1?root:D.body;if(!scope)return;
    var walker=D.createTreeWalker(scope,NodeFilter.SHOW_TEXT,{acceptNode:function(node){var p=node.parentElement;if(!p||p.closest("script,style,noscript,textarea,pre,code"))return NodeFilter.FILTER_REJECT;return node.nodeValue&&node.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});
    var nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(function(node){var key=remembered.get(node);if(!key){key=rev[(node.nodeValue||"").trim()]||null;if(key)remembered.set(node,key);}if(!key)return;var value=t(key,l);if(value!=null)preserveReplace(node,value);});
  }
  function bindSpecial(){
    var root=D.getElementById("mmdProfilesV8");
    if(root){var title=root.querySelector(".mp8-role-intro h2");if(title)title.setAttribute("data-i18n-html","profiles.roleIntro.title");root.querySelectorAll("[data-lang]").forEach(function(btn){var v=btn.getAttribute("data-lang");if(v)btn.setAttribute("data-set-lang",v);});}
    var access=D.querySelector("#profiles-access-note .profile-access-copy");if(access)access.setAttribute("data-i18n-html","profiles.access.body");
  }
  function activeRole(){var root=D.getElementById("mmdProfilesV8"),btn=root&&root.querySelector("[data-role-value][aria-pressed=\"true\"]");return btn&&btn.getAttribute("data-role-value")||"";}
  function translateResult(l){
    var root=D.getElementById("mmdProfilesV8"),count=root&&root.querySelector("[data-result-count]");if(!count)return;
    var role=activeRole();if(!role)return;var cards=root.querySelectorAll("[data-track] [data-profile]"),n=cards.length,roleName=t("role."+role+".title",l)||role,template=t("catalog.result",l);
    if(template)count.textContent=template.replace("{n}",String(n)).replace("{role}",roleName);
  }
  function apply(root){var l=lang();bindSpecial();if(W.MMD_I18N&&typeof W.MMD_I18N.apply==="function")W.MMD_I18N.apply(D,{lang:l});translateText(root||D.body,l);translateResult(l);}
  function schedule(root){if(scheduled)return;scheduled=true;requestAnimationFrame(function(){scheduled=false;apply(root&&root.isConnected?root:D.body);});}
  D.addEventListener("mmd:i18n:ready",function(){apply(D.body);});
  D.addEventListener("mmd:i18n:change",function(){apply(D.body);});
  D.addEventListener("click",function(e){var b=e.target&&e.target.closest&&e.target.closest("#mmdProfilesV8 [data-lang]");if(!b)return;var v=b.getAttribute("data-lang");setTimeout(function(){if(W.MMD_I18N&&typeof W.MMD_I18N.setLang==="function")W.MMD_I18N.setLang(v);apply(D.body);},0);});
  function boot(){apply(D.body);if(typeof MutationObserver==="function"){var mo=new MutationObserver(function(records){var target=null;for(var i=0;i<records.length;i++){if(records[i].addedNodes&&records[i].addedNodes.length){target=records[i].target;break;}}schedule(target||D.body);});mo.observe(D.body,{childList:true,subtree:true});W.__MMD_PROFILES_I18N_OBSERVER__=mo;}}
  if(D.readyState==="loading")D.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
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

