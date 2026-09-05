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
