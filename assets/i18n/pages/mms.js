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
