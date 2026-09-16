/* CARE BACK Wish → Coupons; customer-visible copy mirrored from the runtime. */
(function () {
  "use strict";
  const copy = {
  "th": {
    "careback.wish.wall.consent": "ยืนยันส่งคำอวยพร และให้แสดงด้านล่างแบบไม่ระบุชื่อเมื่อ MMD ยืนยันว่าเคยใช้บริการแล้ว หากยังไม่เคยใช้บริการ MMD จะเก็บข้อความไว้ก่อน",
    "careback.wish.wall.title": "คำอวยพรจากลูกค้าของเรา",
    "careback.wish.wall.note": "ขอบคุณทุกคำอวยพรจากลูกค้าที่เคยใช้บริการกับ MMD ครับ",
    "careback.wish.wall.loading": "กำลังอ่านคำอวยพร…",
    "careback.wish.wall.empty": "คำอวยพรจากลูกค้าที่ตรวจสอบประวัติบริการแล้วจะแสดงตรงนี้ครับ",
    "careback.wish.wall.error": "ตอนนี้ยังโหลดคำอวยพรไม่ได้ครับ",
    "careback.wish.wall.retry": "ลองอีกครั้ง",
    "careback.wish.wall.back": "กลับไปที่ MY MMD",
    "careback.wish.wall.coupon": "ดูคูปองของฉัน",
    "coupons.wishFirst": "ฝากคำอวยพรถึง MMD ก่อน แล้วกลับมาดูสิทธิ์ CARE BACK ของคุณครับ",
    "coupons.wishCta": "เขียนคำอวยพรถึง MMD"
  },
  "en": {
    "careback.wish.wall.consent": "Send my wish and display it below anonymously once MMD verifies my previous service. Otherwise, keep my wish in the system for now.",
    "careback.wish.wall.title": "Wishes from our customers",
    "careback.wish.wall.note": "Thank you to the customers who have spent time with MMD.",
    "careback.wish.wall.loading": "Loading wishes…",
    "careback.wish.wall.empty": "Wishes from customers with verified service history will appear here.",
    "careback.wish.wall.error": "Wishes could not be loaded right now.",
    "careback.wish.wall.retry": "Try again",
    "careback.wish.wall.back": "Back to MY MMD",
    "careback.wish.wall.coupon": "View my coupons",
    "coupons.wishFirst": "Send your wish to MMD first, then return to check your CARE BACK privilege.",
    "coupons.wishCta": "Write a wish to MMD"
  },
  "zh": {
    "careback.wish.wall.consent": "确认发送祝福；MMD 核实我曾使用服务后可在下方匿名展示，否则先在系统内保存。",
    "careback.wish.wall.title": "来自客户的祝福",
    "careback.wish.wall.note": "感谢曾使用 MMD 服务的每位客户送上的祝福。",
    "careback.wish.wall.loading": "正在加载祝福…",
    "careback.wish.wall.empty": "服务记录核实后的客户祝福将显示在这里。",
    "careback.wish.wall.error": "暂时无法加载祝福。",
    "careback.wish.wall.retry": "重试",
    "careback.wish.wall.back": "返回 MY MMD",
    "careback.wish.wall.coupon": "查看我的优惠券",
    "coupons.wishFirst": "请先向 MMD 送上祝福，再回来查看您的 CARE BACK 权益。",
    "coupons.wishCta": "写下给 MMD 的祝福"
  }
};
  window.I18N_DICT = window.I18N_DICT || {};
  for (const lang of Object.keys(copy)) {
    window.I18N_DICT[lang] = Object.assign(window.I18N_DICT[lang] || {}, copy[lang]);
  }
})();
