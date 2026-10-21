/* SIGIL Booking Owner Desk — canonical presentation-only copy. */
(function (window) {
  "use strict";

  var dict = (window.I18N_DICT = window.I18N_DICT || {});
  var copy = {
    th: {
      "sigil.owner.nav.overview": "ภาพรวม",
      "sigil.owner.nav.status": "สถานะ",
      "sigil.owner.nav.requests": "คำขอ",
      "sigil.owner.shell.footer": "ต้าช่วยอ่านข้อมูล · Per เป็นผู้ตัดสินใจ",
      "sigil.owner.shell.private": "พื้นที่ส่วนตัวสำหรับ Owner",
      "sigil.owner.denied.title": "หน้านี้สำหรับ Owner",
      "sigil.owner.denied.body": "บัญชีนี้ยังไม่มีสิทธิ์เข้าถึง กรุณาติดต่อ Per เพื่อตรวจสอบสิทธิ์ครับ",
      "sigil.owner.unavailable.body": "ขณะนี้ตรวจสอบสิทธิ์ไม่ได้ กรุณาลองใหม่อีกครั้งครับ",
      "sigil.owner.action.login": "กลับไปเข้าสู่ระบบ",
      "sigil.owner.eyebrow": "OWNER BOOKING DESK",
      "sigil.owner.access.limited": "PREVIEW · READ-ONLY",
      "sigil.owner.hero.title": "SIGIL Booking สำหรับ Owner",
      "sigil.owner.hero.body":
        "พื้นที่สำหรับ Per ตรวจข้อมูลก่อนตัดสินใจ ขณะนี้ยังไม่มี canonical request feed ที่ยืนยันได้ จึงยังไม่แสดงจำนวนงานและไม่เปิดคำสั่งเปลี่ยนสถานะครับ",
      "sigil.owner.tart.label": "TART · MODEL INTELLIGENCE",
      "sigil.owner.tart.title": "ต้าช่วยอ่านฝั่ง Model",
      "sigil.owner.tart.body":
        "ต้าช่วยจัดโครงข้อมูลฝั่ง Model และชี้จุดที่ต้องตรวจได้ แต่ไม่ยืนยันงาน ราคา การชำระเงิน สิทธิ์ หรือเปลี่ยนสถานะแทน Per ครับ",
      "sigil.owner.tart.scope": "Model context only · ไม่ใช่ผู้อนุมัติ",
      "sigil.owner.status.eyebrow": "CURRENT TRUTH",
      "sigil.owner.status.title": "สถานะที่ยืนยันได้ตอนนี้",
      "sigil.owner.status.connection.label": "CANONICAL SOURCE",
      "sigil.owner.status.connection.value": "ยังไม่เชื่อม",
      "sigil.owner.status.requests.label": "OWNER ACTIONS",
      "sigil.owner.status.requests.value": "ปิดอยู่",
      "sigil.owner.status.authority.label": "PRODUCTION TRUTH",
      "sigil.owner.status.authority.value": "ยังไม่ยืนยัน",
      "sigil.owner.hold.eyebrow": "SAFE HOLD",
      "sigil.owner.hold.title": "ยังไม่เปิดการจัดการคำขอ",
      "sigil.owner.hold.body":
        "ยังไม่มีการเชื่อมต่อที่ยืนยันได้สำหรับจัดการคำขอ MMD หน้านี้จึงไม่อ่านหรือเปลี่ยนข้อมูลระบบเดิม",
      "sigil.owner.tart.note.title": "คำแนะนำจาก TarT",
      "sigil.owner.tart.note.body":
        "จะแสดงคำแนะนำเมื่อมี canonical source เท่านั้นครับ",
      "sigil.owner.hold.note":
        "หน้ารุ่นผสมนี้ยังไม่สร้าง Job, Session, Payment หรือ Booking Request",
      "sigil.owner.action.booking": "เปิดหน้า SIGIL Booking",
      "sigil.owner.action.logout": "ออกจากระบบ",
    },
    en: {
      "sigil.owner.nav.overview": "Overview",
      "sigil.owner.nav.status": "Status",
      "sigil.owner.nav.requests": "Requests",
      "sigil.owner.shell.footer": "TarT helps read the context · Per makes the decisions",
      "sigil.owner.shell.private": "Private workspace for Owner",
      "sigil.owner.denied.title": "Owner access required",
      "sigil.owner.denied.body": "This account does not have access. Contact Per to review your access.",
      "sigil.owner.unavailable.body": "Access cannot be verified right now. Please try again.",
      "sigil.owner.action.login": "Return to sign in",
      "sigil.owner.eyebrow": "OWNER BOOKING DESK",
      "sigil.owner.access.limited": "PREVIEW · READ-ONLY",
      "sigil.owner.hero.title": "SIGIL Booking for Owner",
      "sigil.owner.hero.body":
        "A space for Per to review evidence before deciding. There is no verified canonical request feed yet, so this page shows no job counts and exposes no status-changing actions.",
      "sigil.owner.tart.label": "TART · MODEL INTELLIGENCE",
      "sigil.owner.tart.title": "TarT helps read the Model side",
      "sigil.owner.tart.body":
        "TarT can organize Model-side context and point out what needs review, but cannot confirm a job, price, payment, access, or change a status for Per.",
      "sigil.owner.tart.scope": "Model context only · Not an approver",
      "sigil.owner.status.eyebrow": "CURRENT TRUTH",
      "sigil.owner.status.title": "What is verified now",
      "sigil.owner.status.connection.label": "CANONICAL SOURCE",
      "sigil.owner.status.connection.value": "Not connected",
      "sigil.owner.status.requests.label": "OWNER ACTIONS",
      "sigil.owner.status.requests.value": "Disabled",
      "sigil.owner.status.authority.label": "PRODUCTION TRUTH",
      "sigil.owner.status.authority.value": "Not verified",
      "sigil.owner.hold.eyebrow": "SAFE HOLD",
      "sigil.owner.hold.title": "Request management is not enabled",
      "sigil.owner.hold.body":
        "There is no verified connection for managing MMD requests, so this page neither reads nor changes legacy-system data.",
      "sigil.owner.tart.note.title": "Guidance from TarT",
      "sigil.owner.tart.note.body":
        "Guidance appears only when a canonical source is available.",
      "sigil.owner.hold.note":
        "This blended preview does not create a Job, Session, Payment, or Booking Request.",
      "sigil.owner.action.booking": "Open SIGIL Booking",
      "sigil.owner.action.logout": "Sign out",
    },
    zh: {
      "sigil.owner.nav.overview": "概览",
      "sigil.owner.nav.status": "状态",
      "sigil.owner.nav.requests": "请求",
      "sigil.owner.shell.footer": "TarT 协助理解信息 · Per 作出决定",
      "sigil.owner.shell.private": "Owner 私人工作区",
      "sigil.owner.denied.title": "需要 Owner 权限",
      "sigil.owner.denied.body": "此账户没有访问权限。请联系 Per 核实权限。",
      "sigil.owner.unavailable.body": "目前无法验证权限，请稍后重试。",
      "sigil.owner.action.login": "返回登录",
      "sigil.owner.eyebrow": "OWNER BOOKING DESK",
      "sigil.owner.access.limited": "PREVIEW · READ-ONLY",
      "sigil.owner.hero.title": "Owner 的 SIGIL Booking",
      "sigil.owner.hero.body":
        "这里供 Per 在作出决定前核对证据。目前尚无已验证的 canonical request feed，因此不显示工作数量，也不提供更改状态的操作。",
      "sigil.owner.tart.label": "TART · MODEL INTELLIGENCE",
      "sigil.owner.tart.title": "TarT 协助查看 Model 侧信息",
      "sigil.owner.tart.body":
        "TarT 可以整理 Model 侧背景并指出需要核对的项目，但不能代替 Per 确认工作、价格、付款、权限或更改状态。",
      "sigil.owner.tart.scope": "仅限 Model 背景信息 · 不具审批权",
      "sigil.owner.status.eyebrow": "CURRENT TRUTH",
      "sigil.owner.status.title": "当前可验证的状态",
      "sigil.owner.status.connection.label": "CANONICAL SOURCE",
      "sigil.owner.status.connection.value": "尚未连接",
      "sigil.owner.status.requests.label": "OWNER ACTIONS",
      "sigil.owner.status.requests.value": "已关闭",
      "sigil.owner.status.authority.label": "PRODUCTION TRUTH",
      "sigil.owner.status.authority.value": "尚未验证",
      "sigil.owner.hold.eyebrow": "SAFE HOLD",
      "sigil.owner.hold.title": "尚未开放请求管理",
      "sigil.owner.hold.body":
        "目前没有已验证的连接可用于管理 MMD 请求，因此本页面不会读取或更改旧系统数据。",
      "sigil.owner.tart.note.title": "TarT 的提示",
      "sigil.owner.tart.note.body": "仅在有 canonical source 时显示提示。",
      "sigil.owner.hold.note":
        "此混合预览不会创建 Job、Session、Payment 或 Booking Request。",
      "sigil.owner.action.booking": "打开 SIGIL Booking",
      "sigil.owner.action.logout": "退出登录",
    },
  };

  Object.keys(copy).forEach(function (lang) {
    dict[lang] = dict[lang] || {};
    Object.assign(dict[lang], copy[lang]);
  });
})(window);
