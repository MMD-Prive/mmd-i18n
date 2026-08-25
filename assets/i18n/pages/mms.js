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
    "mms.booking.title":"เลือกสิ่งที่ต้องการ ที่เหลือให้ MMD ประสาน",
    "mms.booking.lead":"เลือกบริการ วัน เวลา พื้นที่ และ Male Therapist ที่สนใจได้ในคำขอเดียว ที่เหลือ MMD จะเช็ก Skills คิว และรายละเอียดที่จำเป็นก่อนตอบยืนยันครับ",
    "mms.booking.member_gate":"หน้านี้ใช้ข้อมูล Member ที่ยืนยันแล้วเพื่อแสดง Therapist และส่ง Pre-booking โดยไม่ขอให้กรอกข้อมูลตัวตนซ้ำใน browser",
    "mms.booking.service.title":"วันนี้อยากให้ช่วยเรื่องไหน",
    "mms.booking.service.helper":"เลือกได้ 1–6 รายการ ระบบจะใช้ Skills เหล่านี้ในการกรอง Therapist ที่ตรงกับคำขอเบื้องต้น",
    "mms.booking.when.title":"วัน เวลา และพื้นที่",
    "mms.booking.match.title":"Therapist ที่ตรงกับคำขอเบื้องต้น",
    "mms.booking.match.helper":"รายชื่อมาจากข้อมูล Therapist จริงใน MMS และกรองจากเงื่อนไขที่เลือก แต่คิวจริงยังต้องให้ MMD ตรวจอีกครั้งครับ",
    "mms.booking.match.cta":"เช็ก Therapist ที่เหมาะ",
    "mms.booking.review.title":"ตรวจรายละเอียดก่อนส่ง",
    "mms.booking.consent":"ผมเข้าใจว่านี่คือ Pre-booking request และยังไม่ใช่การยืนยัน Therapist เวลา สถานที่ หรือยอด จนกว่า MMD จะประสานและตอบกลับครับ",
    "mms.booking.submit":"ส่ง Pre-booking",
    "mms.booking.success.title":"MMD ได้รับคำขอแล้ว",
    "mms.booking.success.body":"ตอนนี้ MMD จะตรวจรายละเอียดและประสาน Therapist ที่เหมาะให้ก่อน รายการยังอยู่ในสถานะรอตรวจจนกว่าจะมีการตอบกลับยืนยันครับ",
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
    "mms.booking.title":"Choose what you need. MMD coordinates the rest.",
    "mms.booking.lead":"Choose the service, date, time, area and any Male Therapist you are interested in within one request. MMD will review skills, availability and the necessary details before confirming anything.",
    "mms.booking.member_gate":"This page uses verified Member information to show therapists and submit a pre-booking without asking you to re-enter identity details in the browser.",
    "mms.booking.service.title":"What would help today?",
    "mms.booking.service.helper":"Choose 1–6 items. These skills are used to find therapists who may fit the request.",
    "mms.booking.when.title":"When and where",
    "mms.booking.match.title":"Therapists matched to this request",
    "mms.booking.match.helper":"These options come from real MMS therapist records filtered by your request. Actual availability still requires MMD review.",
    "mms.booking.match.cta":"Check suitable therapists",
    "mms.booking.review.title":"Review before sending",
    "mms.booking.consent":"I understand this is a pre-booking request and does not confirm a therapist, time, location or amount until MMD coordinates the request and replies with confirmation.",
    "mms.booking.submit":"Send Pre-booking",
    "mms.booking.success.title":"MMD received your request",
    "mms.booking.success.body":"MMD will now review the details and coordinate a suitable therapist. The request remains under review until confirmation is sent back.",
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
    "mms.booking.title":"选择您的需求，其余由 MMD 协调。",
    "mms.booking.lead":"您可以在同一份申请中选择服务、日期、时间、区域以及感兴趣的男性理疗师。MMD 会先核对技能、档期和必要细节，再进行确认。",
    "mms.booking.member_gate":"本页面使用已验证的会员资料显示理疗师并提交预预约，无需在浏览器中重复填写身份信息。",
    "mms.booking.service.title":"今天希望得到哪方面的帮助？",
    "mms.booking.service.helper":"可选择 1–6 项。系统将依据这些技能筛选初步匹配的理疗师。",
    "mms.booking.when.title":"日期、时间与区域",
    "mms.booking.match.title":"与本次需求初步匹配的理疗师",
    "mms.booking.match.helper":"以下人选来自 MMS 的真实理疗师资料，并按您的条件筛选；实际档期仍需由 MMD 再次确认。",
    "mms.booking.match.cta":"查看合适的理疗师",
    "mms.booking.review.title":"发送前确认详情",
    "mms.booking.consent":"我了解这只是预预约申请，在 MMD 完成协调并回复确认之前，并不代表理疗师、时间、地点或金额已经确认。",
    "mms.booking.submit":"发送预预约",
    "mms.booking.success.title":"MMD 已收到您的申请",
    "mms.booking.success.body":"MMD 将先核对详情并协调合适的理疗师。在正式回复确认之前，本申请仍处于审核中。",
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
