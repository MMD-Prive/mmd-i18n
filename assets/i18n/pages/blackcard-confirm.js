/* MMD Privé · Black Card Companion Preference · TH/EN copy */
(function(){
  "use strict";
  var W=window,D=document;
  W.I18N_DICT=W.I18N_DICT||{};
  var I=W.I18N_DICT;
  I.th=I.th||{}; I.en=I.en||{};
  Object.assign(I.th,{
    "bc.confirm.runtime.loading":"กำลังตรวจรายการ…",
    "bc.confirm.runtime.choose":"เลือกคนที่คุณอยากเริ่มต้นด้วยครับ",
    "bc.confirm.runtime.choice":"คุณเลือก {name} · กดบันทึกได้เลย",
    "bc.confirm.runtime.saved":"บันทึก Preference แล้ว · {name}",
    "bc.confirm.runtime.saving":"กำลังบันทึกกับ MMD…",
    "bc.confirm.runtime.no_token":"กรุณาเปิดลิงก์รายการเดิมที่ MMD ออกให้ เพื่อยืนยันบัญชีสมาชิกครับ",
    "bc.confirm.runtime.pending":"ส่ง Preference แล้ว · รอ MMD ตรวจสอบ",
    "bc.confirm.runtime.recorded":"MMD บันทึก Preference นี้แล้วครับ",
    "bc.confirm.runtime.follow_up":"MMD ขอข้อมูลเพิ่มเติมสำหรับ Preference นี้ครับ",
    "bc.confirm.runtime.declined":"คำขอ Preference นี้ไม่ได้รับการอนุมัติครับ",
    "bc.confirm.runtime.cancelled":"ยกเลิกคำขอ Preference นี้แล้วครับ",
    "bc.confirm.runtime.expired":"ข้อมูล Preference หมดอายุแล้วครับ กรุณาติดต่อ MMD",
    "bc.confirm.runtime.verified":"ยืนยันการชำระแล้ว · เลือก Preference ได้ โดยสิทธิ์สมาชิกยังขึ้นกับการอนุมัติของ MMD",
    "bc.confirm.runtime.evidence":"รับหลักฐานแล้ว · เลือก Preference ได้ระหว่างรอตรวจยอดครับ",
    "bc.confirm.runtime.error":"ตรวจหรือบันทึกไม่สำเร็จครับ กรุณาลองอีกครั้ง",
    "bc.confirm.runtime.error_expired":"ลิงก์หมดอายุครับ กรุณาขอลิงก์ยืนยันใหม่จาก MMD",
    "bc.confirm.runtime.error_payment":"ยังไม่พบการชำระที่ยืนยันแล้วหรือหลักฐานที่ระบบรับไว้ครับ",
    "bc.confirm.runtime.error_product":"ลิงก์นี้ไม่มีรายการ Black Card ที่ตรงกับบัญชีครับ",
    "bc.confirm.runtime.error_sync":"รับคำขอไว้แล้ว แต่ยังส่งให้ทีมตรวจไม่ได้ครับ ลองบันทึกอีกครั้งได้",
    "bc.confirm.runtime.error_conflict":"ข้อมูลเปลี่ยนแล้วครับ กดตรวจรายการอีกครั้งก่อนแก้ตัวเลือก",
    "bc.confirm.runtime.error_reason":"กรุณาระบุเหตุผลสั้น ๆ สำหรับการเปลี่ยน Companion ครับ",
    "bc.confirm.runtime.change_reason":"เหตุผลที่ต้องการเปลี่ยน Companion",
    "bc.confirm.runtime.retry":"ตรวจรายการอีกครั้ง",
    "bc.confirm.flow.steps":"01 ตรวจสอบรายการเดิม → 02 เลือก Companion → 03 รอการตรวจจาก MMD",
    "bc.confirm.flow.title":"เริ่มต้นการดูแลในแบบที่คุณเลือก",
    "bc.confirm.flow.closed_title":"Black Card ยังไม่เปิดรับสมัครใหม่",
    "bc.confirm.flow.closed_body":"นโยบาย Black Card ได้รับการยืนยันแล้ว แต่ระบบแพ็กเกจและการชำระยังไม่เปิดใช้งานครับ หน้านี้ไม่รับชำระเงินและไม่สร้างสิทธิ์สมาชิก",
    "bc.confirm.flow.existing_link":"มีรายการ Black Card เดิมจาก MMD แล้ว · ตรวจตัวเลือก Companion ↓",
    "bc.confirm.flow.existing_hint":"กรุณาใช้เฉพาะลิงก์ยืนยันรายการเดิมที่ MMD ออกให้ ระบบจะตรวจ token และข้อมูลรายการกับ payments-worker",
    "bc.confirm.flow.companion_title":"เลือก Companion ที่คุณต้องการ",
    "bc.confirm.flow.companion_body":"ตัวเลือกนี้เป็น Preference ของบัญชีสมาชิกที่ผูกกับรายการ ไม่ใช่การจองบุคคลจริง และไม่เปลี่ยนสถานะชำระเงินหรือสิทธิ์สมาชิก",
    "bc.confirm.error.blackcard_required":"ยังไม่พบรายการ Black Card ที่ตรงกับบัญชีและลิงก์ยืนยันนี้ครับ",
    "bc.confirm.error.conflict":"ข้อมูลคำขอเปลี่ยนจากครั้งก่อนครับ กรุณาตรวจรายละเอียดแล้วส่งใหม่",
    "bc.confirm.error.generic":"เกิดปัญหาระหว่างส่งคำขอ กรุณาลองอีกครั้งครับ",
    "bc.confirm.error.member_required":"กรุณาเปิดลิงก์รายการเดิมที่ MMD ออกให้ เพื่อยืนยันบัญชีสมาชิกครับ",
    "bc.confirm.error.reason":"กรุณาระบุเหตุผลสั้น ๆ สำหรับการเปลี่ยน Companion ครับ",
    "bc.confirm.error.retry":"รับคำขอไว้แล้วแต่ยังส่งเข้าคิวตรวจไม่ได้ครับ กรุณากดส่งอีกครั้ง",
    "bc.confirm.error.timeout":"ใช้เวลานานกว่าปกติครับ กรุณาตรวจสอบอินเทอร์เน็ตแล้วลองใหม่",
    "bc.confirm.error.unavailable":"ยังบันทึกคำขอไม่ได้ครับ กรุณาลองใหม่ภายหลัง",
    "bc.confirm.load.blackcard_required":"ยังไม่พบรายการ Black Card ที่ตรงกับบัญชีและลิงก์ยืนยันนี้ครับ",
    "bc.confirm.load.member_required":"กรุณาเปิดลิงก์รายการเดิมที่ MMD ออกให้ เพื่อยืนยันบัญชีสมาชิกครับ",
    "bc.confirm.load.ready":"เลือก Companion Preference แล้วส่งให้ MMD ตรวจได้ครับ",
    "bc.confirm.load.saved":"โหลด Preference จากบัญชีสมาชิกแล้วครับ",
    "bc.confirm.load.unavailable":"ยังโหลดข้อมูลบัญชีไม่ได้ครับ กรุณาลองใหม่ภายหลัง",
    "bc.confirm.status.cancelled":"ยกเลิกคำขอแล้ว",
    "bc.confirm.status.declined":"คำขอนี้ยังไม่ได้รับการยืนยัน",
    "bc.confirm.status.follow_up":"MMD ขอข้อมูลเพิ่มเติม",
    "bc.confirm.status.pending":"รอตรวจ Preference",
    "bc.confirm.status.recorded":"บันทึก Preference แล้ว",
    "bc.confirm.status.reviewing":"กำลังตรวจ Preference",
    "bc.confirm.status.unavailable":"ยังตรวจสถานะ Preference ไม่ได้"
  });
  Object.assign(I.en,{
    "bc.confirm.runtime.loading":"Checking your request…",
    "bc.confirm.runtime.choose":"Choose the Companion you would like to start with.",
    "bc.confirm.runtime.choice":"You chose {name} · Ready to save.",
    "bc.confirm.runtime.saved":"Preference saved · {name}",
    "bc.confirm.runtime.saving":"Saving your preference…",
    "bc.confirm.runtime.no_token":"Open the existing confirmation link issued by MMD to verify the member account.",
    "bc.confirm.runtime.pending":"Preference submitted · Awaiting MMD review.",
    "bc.confirm.runtime.recorded":"MMD has recorded this preference.",
    "bc.confirm.runtime.follow_up":"MMD needs more information about this preference.",
    "bc.confirm.runtime.declined":"This preference request was declined.",
    "bc.confirm.runtime.cancelled":"This preference request was cancelled.",
    "bc.confirm.runtime.expired":"This preference has expired. Please contact MMD.",
    "bc.confirm.runtime.verified":"Payment verified · You may choose a preference. Membership access still requires MMD approval.",
    "bc.confirm.runtime.evidence":"Evidence received · You may choose a preference while payment is reviewed.",
    "bc.confirm.runtime.error":"Could not check or save the preference. Please retry.",
    "bc.confirm.runtime.error_expired":"This link has expired. Please request a new confirmation link from MMD.",
    "bc.confirm.runtime.error_payment":"No verified payment or received evidence was found.",
    "bc.confirm.runtime.error_product":"This link has no matching Black Card request for the account.",
    "bc.confirm.runtime.error_sync":"Your request is stored, but review sync is pending. Please retry saving.",
    "bc.confirm.runtime.error_conflict":"The preference changed. Reload the request before changing your choice.",
    "bc.confirm.runtime.error_reason":"Please add a short reason for changing your Companion.",
    "bc.confirm.runtime.change_reason":"Reason for changing your Companion",
    "bc.confirm.runtime.retry":"Reload request",
    "bc.confirm.flow.steps":"01 Check your existing request → 02 Choose a Companion → 03 Wait for MMD review",
    "bc.confirm.flow.title":"Begin care in the way you choose",
    "bc.confirm.flow.closed_title":"Black Card is not accepting new applications",
    "bc.confirm.flow.closed_body":"The Black Card policy is confirmed, but the package and payment systems are not enabled. This page does not accept payment or create membership access.",
    "bc.confirm.flow.existing_link":"Already have an existing Black Card request from MMD? Review your Companion choice ↓",
    "bc.confirm.flow.existing_hint":"Use only the existing confirmation link issued by MMD. The system checks its token and request with payments-worker.",
    "bc.confirm.flow.companion_title":"Choose your Companion",
    "bc.confirm.flow.companion_body":"This choice is a preference saved to the member account linked to the request. It does not book a person or change payment or membership access.",
    "bc.confirm.error.blackcard_required":"No Black Card request matches this account and confirmation link.",
    "bc.confirm.error.conflict":"The request changed since the previous attempt. Review it and submit again.",
    "bc.confirm.error.generic":"Something went wrong while sending the request. Please try again.",
    "bc.confirm.error.member_required":"Open the existing confirmation link issued by MMD to verify the member account.",
    "bc.confirm.error.reason":"Please add a short reason for changing your Companion.",
    "bc.confirm.error.retry":"Your request is stored, but it has not reached the review queue. Please retry.",
    "bc.confirm.error.timeout":"This is taking longer than expected. Check your connection and try again.",
    "bc.confirm.error.unavailable":"The request could not be saved yet. Please try again later.",
    "bc.confirm.load.blackcard_required":"No Black Card request matches this account and confirmation link.",
    "bc.confirm.load.member_required":"Open the existing confirmation link issued by MMD to verify the member account.",
    "bc.confirm.load.ready":"Choose a Companion Preference and send it to MMD for review.",
    "bc.confirm.load.saved":"Loaded your Companion Preference from your member account.",
    "bc.confirm.load.unavailable":"We could not load your account data. Please try again later.",
    "bc.confirm.status.cancelled":"Request cancelled",
    "bc.confirm.status.declined":"This request was not approved",
    "bc.confirm.status.follow_up":"MMD needs more information",
    "bc.confirm.status.pending":"Preference pending review",
    "bc.confirm.status.recorded":"Preference recorded",
    "bc.confirm.status.reviewing":"Preference under review",
    "bc.confirm.status.unavailable":"Preference status is unavailable"
  });
  function bind(){
    if(((location.pathname||"/").replace(/\/+$/,"")||"/")!=="/blackcard/confirm") return;
    var root=D.getElementById("bcflow");
    if(!root) return;
    root.setAttribute("data-mmd-i18n-bundle","blackcard-confirm");
    if(W.MMD_I18N&&typeof W.MMD_I18N.apply==="function") {
      root.setAttribute("lang",W.MMD_I18N.getLang());
      W.MMD_I18N.apply(root);
    }
  }
  D.addEventListener("mmd:i18n:ready",bind);
  D.addEventListener("mmd:i18n:change",bind);
  if(D.readyState==="loading") D.addEventListener("DOMContentLoaded",bind); else bind();
})();
