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

