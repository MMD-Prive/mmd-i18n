/* MMD Prive · Public Model Application · canonical TH/EN/ZH i18n
   Route: /apply/public-model
   2026-09-09
*/
(function(){
  "use strict";

  var W=window,D=document;
  W.I18N_DICT=W.I18N_DICT||{};
  var I=W.I18N_DICT;
  I.th=I.th||{}; I.en=I.en||{}; I.zh=I.zh||{};

  Object.assign(I.th,{
    "publicModel.nav.menu":"ดูหัวข้อ",
    "publicModel.nav.apply":"ส่งโปรไฟล์",
    "publicModel.hero.kicker":"MMD PRIVÉ · PUBLIC MODEL",
    "publicModel.hero.lead":"ตอนนี้คุณเป็นใคร ทำงานอะไร ทำอะไรได้ และมีอะไรเป็นจุดเด่น — เล่าแค่นี้ก่อนครับ",
    "publicModel.hero.note":"ไม่ต้องเขียนให้เหมือนใบสมัครงาน และไม่จำเป็นต้องเคยเป็นนายแบบ ถ้า MMD เห็น route ที่เข้ากับคุณ เดี๋ยวเราช่วยดูงานที่เหมาะให้ต่อเอง",
    "publicModel.hero.cta.submit":"ส่งโปรไฟล์ให้ MMD",
    "publicModel.hero.cta.review":"MMD ดูอะไรบ้าง",
    "publicModel.hero.chip.experience":"ไม่ต้องเคยเป็นนายแบบ",
    "publicModel.hero.chip.choice":"ไม่บังคับรับทุกงาน",
    "publicModel.hero.chip.screened":"MMD คัดกรองก่อนทุกครั้ง",
    "publicModel.hero.caption.title":"TART · MODEL-SIDE SCOUT",
    "publicModel.hero.caption.body":"เห็นแววก่อน แล้วค่อยส่งต่อให้ MMD ดู",

    "publicModel.fit.kicker":"WHAT MMD NEEDS FIRST",
    "publicModel.fit.title":"ส่งมาแค่ 4 อย่างก่อน",
    "publicModel.fit.desc":"ไม่ต้องเล่าเยอะตั้งแต่หน้าแรก MMD อยากเห็นตัวจริงก่อน แล้วรายละเอียดที่เหลือค่อยคุยกันได้ครับ",
    "publicModel.fit.card1.title":"ตอนนี้คุณเป็นใคร",
    "publicModel.fit.card1.body":"ชื่อทำงาน อายุ อยู่พื้นที่ไหน และใช้ชีวิตประมาณไหน",
    "publicModel.fit.card2.title":"หน้าตาเป็นยังไง",
    "publicModel.fit.card2.body":"ส่ง IG / Portfolio / Social ที่เห็นตัวจริงได้ชัดพอ ไม่ต้องทำ comp card ก่อน",
    "publicModel.fit.card3.title":"ทำงานหรือทำอะไรได้",
    "publicModel.fit.card3.body":"อาชีพจริง ทักษะ ภาษา กีฬา งานบริการ งานสร้างสรรค์ หรือสิ่งที่ทำเป็นจริง",
    "publicModel.fit.card4.title":"จุดเด่นคืออะไร",
    "publicModel.fit.card4.body":"อะไรที่ทำให้คนอยู่ด้วยแล้วรู้สึกดี หรือทำให้คุณเหมาะกับงานบางแบบเป็นพิเศษ",
    "publicModel.route.kicker":"MMD WILL SORT THE ROUTE",
    "publicModel.route.title":"ไม่ต้องรู้เองก่อนว่าควรอยู่หมวดไหน",
    "publicModel.route.body":"หน้าที่ของคุณคือเล่าให้เราเห็นตัวจริง หน้าที่ของ MMD คือค่อยดูว่างานแบบไหนน่าจะเข้ากับภาพลักษณ์ ความสามารถ เวลา และขอบเขตของคุณ",
    "publicModel.route.item1":"Appearance + personality",
    "publicModel.route.item2":"Work + actual skills",
    "publicModel.route.item3":"Service mindset + communication",
    "publicModel.route.item4":"Boundaries + readiness",

    "publicModel.apply.kicker":"PROFILE FIRST",
    "publicModel.apply.title":"เล่าให้ MMD รู้จักคุณ",
    "publicModel.apply.desc":"เริ่มจากข้อมูลที่ใช้ดูคนก่อน รายละเอียดเชิงระบบค่อยเปิดเมื่อจำเป็น จะได้ไม่เหมือนกรอก HR form ยาว ๆ",
    "publicModel.step.tab1":"ตัวคุณตอนนี้",
    "publicModel.step.tab2":"งานที่เข้ากับคุณ",
    "publicModel.step.tab3":"ติดต่อและส่ง",
    "publicModel.step1.kicker":"STEP 1 OF 3",
    "publicModel.step1.title":"ตอนนี้คุณเป็นใคร",
    "publicModel.step1.note":"ส่วนนี้สำคัญที่สุดครับ — ให้ MMD เห็นคนจริงก่อน",
    "publicModel.form.nickname.label":"ชื่อเล่น / ชื่อทำงาน *",
    "publicModel.form.nickname.placeholder":"เช่น Max / Ken / Poom",
    "publicModel.form.age.label":"อายุ *",
    "publicModel.form.age.placeholder":"18+",
    "publicModel.form.location.label":"อยู่ที่ไหน / รับงานพื้นที่ไหน *",
    "publicModel.form.location.placeholder":"เช่น กรุงเทพฯ / เชียงใหม่ / รับต่างจังหวัดได้",
    "publicModel.form.occupation.label":"ตอนนี้ทำอะไรอยู่ *",
    "publicModel.form.occupation.placeholder":"งานประจำ ฟรีแลนซ์ เรียนอยู่ ทำธุรกิจ กีฬา งานบริการ หรือสิ่งที่ทำอยู่จริง",
    "publicModel.form.skills.label":"ทำอะไรได้บ้าง",
    "publicModel.form.skills.placeholder":"ภาษา กีฬา ขับรถ ทำอาหาร ถ่ายภาพ สอน ฟิตเนส งานบริการ ความสามารถพิเศษ ฯลฯ",
    "publicModel.form.story.label":"จุดเด่นของคุณคืออะไร *",
    "publicModel.form.story.placeholder":"เช่น คุยง่าย ดูแลคนเก่ง มีวินัย สายกิจกรรม สุภาพ ตรงเวลา หรือมีบุคลิกเฉพาะที่คนจำได้",
    "publicModel.form.portfolio.label":"IG / Portfolio / Social ที่เห็นตัวจริง",
    "publicModel.form.portfolio.placeholder":"ใส่ลิงก์เท่าที่มีครับ ถ้ายังไม่มีค่อยคุยกับ MMD ต่อได้",
    "publicModel.step1.more":"รายละเอียดเพิ่ม ถ้ามี",
    "publicModel.form.height.label":"ส่วนสูง",
    "publicModel.form.weight.label":"น้ำหนัก",
    "publicModel.form.expYears.label":"ประสบการณ์ (ปี)",
    "publicModel.form.expMonths.label":"ประสบการณ์ (เดือน)",
    "publicModel.form.agency.label":"เคยทำกับ agency / event / modeling ไหม",
    "publicModel.form.agency.placeholder":"ถ้ามีค่อยระบุ",

    "publicModel.step2.kicker":"STEP 2 OF 3",
    "publicModel.step2.title":"เดี๋ยว MMD ช่วยดูงานให้",
    "publicModel.step2.note":"เลือกเท่าที่รู้ตอนนี้ ถ้ายังไม่แน่ใจให้ MMD ช่วยจัดหมวดได้เลย",
    "publicModel.form.category.label":"หมวดที่รู้สึกว่าใกล้ตัว",
    "publicModel.form.category.auto":"ให้ MMD ช่วยจัดหมวด",
    "publicModel.form.scope.title":"กลุ่มลูกค้าที่รับได้ — เลือกเท่าที่สบายใจ",
    "publicModel.form.scope.female":"ผู้หญิง",
    "publicModel.form.scope.male":"ผู้ชาย",
    "publicModel.form.scope.lgbt":"LGBT",
    "publicModel.form.scope.foreign":"ต่างชาติ",
    "publicModel.form.scope.vip":"VIP",
    "publicModel.form.scope.talk":"ขอคุยก่อนทุกงาน",
    "publicModel.form.boundaries.label":"ขอบเขตหรือเรื่องที่ต้องคุยก่อน",
    "publicModel.form.boundaries.placeholder":"มีอะไรที่ไม่รับ หรืออยากให้ MMD คุยก่อนทุกครั้ง บอกตรง ๆ ได้ครับ",
    "publicModel.step2.more":"ข้อมูลประกอบเพิ่มเติม",
    "publicModel.form.identity.label":"ตัวตนที่สะดวกเปิดเผยกับ MMD",
    "publicModel.form.identity.auto":"ไม่ระบุ / คุยกับ MMD ก่อน",
    "publicModel.form.identity.straight":"ชายแท้",
    "publicModel.form.identity.gay":"เกย์",
    "publicModel.form.identity.bi":"ไบ",
    "publicModel.form.background.title":"ประวัติงานที่เกี่ยวข้อง",
    "publicModel.form.background.none":"ยังไม่เคยรับงาน",
    "publicModel.form.background.self":"เคยรับงานเอง",
    "publicModel.form.background.agency":"เคยทำกับ agency",
    "publicModel.form.background.service":"เคยทำงานบริการ",
    "publicModel.form.background.event":"เคยทำ event / modeling",
    "publicModel.form.background.pro":"ทำเป็นอาชีพอยู่แล้ว",

    "publicModel.step3.kicker":"STEP 3 OF 3",
    "publicModel.step3.title":"ติดต่อกลับและส่ง",
    "publicModel.step3.note":"ถ้า MMD เห็น route ที่น่าสนใจ เราจะใช้ช่องทางนี้ติดต่อกลับ",
    "publicModel.form.phone.label":"เบอร์ติดต่อ *",
    "publicModel.form.phone.placeholder":"08x xxx xxxx",
    "publicModel.form.line.label":"LINE ID *",
    "publicModel.form.line.placeholder":"LINE ID",
    "publicModel.form.telegram.label":"Telegram",
    "publicModel.form.telegram.placeholder":"@username",
    "publicModel.form.independent":"ผมเคยรับงานเองมาก่อน",
    "publicModel.form.safety":"ผมเข้าใจว่างานของ MMD ต้องปลอดภัย ไร้ยาเสพติด และผ่านการคัดกรองก่อน",
    "publicModel.form.consent":"ผมยืนยันว่าข้อมูลเป็นความจริง และยินยอมให้ MMD ใช้เพื่อพิจารณาและติดต่อกลับ",
    "publicModel.form.prev":"ย้อนกลับ",
    "publicModel.form.next":"ถัดไป",
    "publicModel.form.submit":"ส่งโปรไฟล์",
    "publicModel.form.sending":"กำลังส่ง...",
    "publicModel.error.required":"กรุณากรอกข้อมูลที่จำเป็นให้ครบก่อนครับ",
    "publicModel.error.age":"กรุณาระบุอายุ 18 ปีขึ้นไปครับ",
    "publicModel.error.send":"ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่",
    "publicModel.error.system":"ระบบรับใบสมัครยังไม่พร้อม กรุณาติดต่อ MMD",
    "publicModel.review.name":"ชื่อทำงาน",
    "publicModel.review.occupation":"ตอนนี้ทำอะไร",
    "publicModel.review.location":"พื้นที่",
    "publicModel.review.highlight":"จุดเด่น",
    "publicModel.review.category":"หมวด",
    "publicModel.review.boundaries":"ขอบเขต",
    "publicModel.review.notProvided":"ยังไม่ได้กรอก",
    "publicModel.review.talkFirst":"คุยกับ MMD ต่อได้",
    "publicModel.success.kicker":"PROFILE RECEIVED",
    "publicModel.success.title":"MMD ได้รับโปรไฟล์แล้วครับ",
    "publicModel.success.body":"แค่นี้พอสำหรับรอบแรกครับ เดี๋ยว MMD ค่อยดูว่าคุณน่าจะเข้ากับ route งานแบบไหน แล้วติดต่อกลับเมื่อมีสิ่งที่เหมาะ",
    "publicModel.success.cta":"คุยกับ MMD ต่อ",

    "publicModel.after.kicker":"AFTER YOUR PROFILE",
    "publicModel.after.title":"ผ่านก่อน ค่อยเข้า MMD MODEL",
    "publicModel.after.desc":"การส่งโปรไฟล์ยังไม่ใช่การอนุมัติหรือเริ่มรับงานทันที ถ้าผ่านและพร้อมจริง ระบบงานของ Model จะถูกเปิดเป็นอีกขั้นหนึ่ง",
    "publicModel.after.copyKicker":"NO NEED TO RUSH",
    "publicModel.after.copyTitle":"ตอนนี้ส่งตัวตนมาก่อนก็พอ",
    "publicModel.after.copyBody":"MMD จะไม่ให้คุณเรียนระบบยาว ๆ ก่อนที่เราจะรู้ด้วยซ้ำว่างานแบบไหนเหมาะกับคุณ",
    "publicModel.after.step1":"MMD อ่านโปรไฟล์และดู potential",
    "publicModel.after.step2":"ถ้ามี route ที่เหมาะ เราจะติดต่อกลับ",
    "publicModel.after.step3":"เมื่อผ่านและพร้อม จึงค่อยเปิดขั้นตอน Model ต่อ",

    "publicModel.faq.kicker":"GOOD TO KNOW",
    "publicModel.faq.title":"คำถามที่ควรรู้ก่อนส่ง",
    "publicModel.faq.desc":"เก็บรายละเอียดไว้ตรงนี้แทนการเททุกอย่างใส่หน้าแรก",
    "publicModel.faq.q1":"ต้องหล่อระดับนายแบบก่อนถึงสมัครได้ไหม",
    "publicModel.faq.a1":"ไม่จำเป็นต้องเคยเป็นนายแบบครับ MMD ดูรวมทั้งหน้าตา บุคลิก อาชีพ ทักษะ ความรับผิดชอบ การคุยกับคน และจุดเด่นที่เอาไปใช้กับงานจริงได้",
    "publicModel.faq.q2":"สมัครแล้วได้งานเลยไหม",
    "publicModel.faq.a2":"ยังไม่ใช่ครับ การส่งโปรไฟล์คือให้ MMD รู้จักคุณก่อน ถ้ามีงานหรือ route ที่เข้ากับคุณจริง เราจะติดต่อกลับเป็นรายกรณี",
    "publicModel.faq.q3":"ลูกค้าของ MMD เป็นแบบไหน",
    "publicModel.faq.a3":"มีทั้งลูกค้าทั่วไป ลูกค้าประจำ VIP และกลุ่มที่ต้องการคนบุคลิกหรือความสามารถเฉพาะ งานจะถูกคัดกรองก่อนและคุณไม่จำเป็นต้องรับทุกงาน",
    "publicModel.faq.q4":"ถ้ายังไม่รู้ว่าตัวเองเหมาะกับงานอะไร",
    "publicModel.faq.a4":"เลือก ให้ MMD ช่วยจัดหมวด ได้เลยครับ จุดประสงค์ของหน้านี้คือให้เราเห็นตัวคุณก่อน ไม่ใช่ให้คุณวิเคราะห์ตลาดเอง",
    "publicModel.faq.q5":"เรื่องขอบเขตและความปลอดภัย",
    "publicModel.faq.a5":"บอกตรง ๆ ได้ว่าอะไรรับได้ อะไรไม่รับ หรืออยากคุยก่อนทุกงาน MMD ใช้ข้อมูลนี้เพื่อดูความเหมาะสมและไม่ส่งงานแบบสุ่ม",

    "publicModel.footer.note":"Public Model Application · Reviewed by MMD",
    "publicModel.footer.profiles":"ดู Public Models",
    "publicModel.chapters.title":"Public Model Apply",
    "publicModel.chapters.note":"เลือกหัวข้อที่อยากดู",
    "publicModel.chapter.overview":"เริ่มตรงนี้",
    "publicModel.chapter.overview.note":"รู้จัก MMD แบบสั้น ๆ",
    "publicModel.chapter.fit":"MMD ดูอะไร",
    "publicModel.chapter.fit.note":"4 อย่างที่อยากเห็นก่อน",
    "publicModel.chapter.apply":"ส่งโปรไฟล์",
    "publicModel.chapter.apply.note":"ฟอร์ม 3 ขั้น",
    "publicModel.chapter.next":"หลังส่งแล้ว",
    "publicModel.chapter.next.note":"ผ่านก่อนค่อยเข้า Model",
    "publicModel.chapter.details":"คำถามก่อนส่ง",
    "publicModel.chapter.details.note":"รายละเอียดที่พับไว้",
    "publicModel.a11y.openChapters":"เปิดสารบัญหน้านี้",
    "publicModel.a11y.closeChapters":"ปิดสารบัญ"
  });

  Object.assign(I.en,{
    "publicModel.nav.menu":"Sections",
    "publicModel.nav.apply":"Send profile",
    "publicModel.hero.kicker":"MMD PRIVÉ · PUBLIC MODEL",
    "publicModel.hero.lead":"Tell us who you are now, what you do, what you can do, and what makes you stand out. That is enough to start.",
    "publicModel.hero.note":"This does not need to read like a job application, and you do not need modelling experience. If MMD sees a route that fits, we will help identify suitable work from there.",
    "publicModel.hero.cta.submit":"Send my profile",
    "publicModel.hero.cta.review":"What MMD looks for",
    "publicModel.hero.chip.experience":"No modelling experience required",
    "publicModel.hero.chip.choice":"You choose whether to take a job",
    "publicModel.hero.chip.screened":"MMD screens every request first",
    "publicModel.hero.caption.title":"TART · MODEL-SIDE SCOUT",
    "publicModel.hero.caption.body":"He notices potential first, then passes it to MMD for review.",

    "publicModel.fit.kicker":"WHAT MMD NEEDS FIRST",
    "publicModel.fit.title":"Start with just 4 things",
    "publicModel.fit.desc":"You do not need to explain everything up front. MMD wants to see the real person first; the rest can come later.",
    "publicModel.fit.card1.title":"Who are you now?",
    "publicModel.fit.card1.body":"Your working name, age, where you are based, and what your everyday life looks like.",
    "publicModel.fit.card2.title":"What do you look like?",
    "publicModel.fit.card2.body":"Share an IG, portfolio, or social profile where we can see the real you. No comp card needed yet.",
    "publicModel.fit.card3.title":"What do you do or know how to do?",
    "publicModel.fit.card3.body":"Your actual work, skills, languages, sports, service experience, creative work, or anything you genuinely do well.",
    "publicModel.fit.card4.title":"What makes you stand out?",
    "publicModel.fit.card4.body":"What makes people feel comfortable around you, or makes you especially suitable for certain kinds of work.",
    "publicModel.route.kicker":"MMD WILL SORT THE ROUTE",
    "publicModel.route.title":"You do not need to know your category first",
    "publicModel.route.body":"Your job is to let us see the real you. MMD's job is to work out which opportunities fit your look, abilities, time, and boundaries.",
    "publicModel.route.item1":"Appearance + personality",
    "publicModel.route.item2":"Work + actual skills",
    "publicModel.route.item3":"Service mindset + communication",
    "publicModel.route.item4":"Boundaries + readiness",

    "publicModel.apply.kicker":"PROFILE FIRST",
    "publicModel.apply.title":"Let MMD get to know you",
    "publicModel.apply.desc":"We start with the information that helps us understand the person. System details only appear when needed, so this does not feel like a long HR form.",
    "publicModel.step.tab1":"You now",
    "publicModel.step.tab2":"Work that may fit",
    "publicModel.step.tab3":"Contact & send",
    "publicModel.step1.kicker":"STEP 1 OF 3",
    "publicModel.step1.title":"Who are you now?",
    "publicModel.step1.note":"This is the most important part: let MMD see the real person first.",
    "publicModel.form.nickname.label":"Nickname / working name *",
    "publicModel.form.nickname.placeholder":"e.g. Max / Ken / Poom",
    "publicModel.form.age.label":"Age *",
    "publicModel.form.age.placeholder":"18+",
    "publicModel.form.location.label":"Where are you based / where can you work? *",
    "publicModel.form.location.placeholder":"e.g. Bangkok / Chiang Mai / available out of town",
    "publicModel.form.occupation.label":"What are you doing now? *",
    "publicModel.form.occupation.placeholder":"Full-time work, freelance, study, business, sport, service work, or what you actually do now",
    "publicModel.form.skills.label":"What can you do?",
    "publicModel.form.skills.placeholder":"Languages, sport, driving, cooking, photography, teaching, fitness, service skills, special abilities, etc.",
    "publicModel.form.story.label":"What is your strongest point? *",
    "publicModel.form.story.placeholder":"For example: easy to talk to, attentive, disciplined, active, polite, punctual, or a distinctive personality people remember",
    "publicModel.form.portfolio.label":"IG / Portfolio / Social showing the real you",
    "publicModel.form.portfolio.placeholder":"Add any links you have. If you do not have one yet, you can talk with MMD later.",
    "publicModel.step1.more":"Extra details, if available",
    "publicModel.form.height.label":"Height",
    "publicModel.form.weight.label":"Weight",
    "publicModel.form.expYears.label":"Experience (years)",
    "publicModel.form.expMonths.label":"Experience (months)",
    "publicModel.form.agency.label":"Any agency / event / modelling experience?",
    "publicModel.form.agency.placeholder":"Add details if applicable",

    "publicModel.step2.kicker":"STEP 2 OF 3",
    "publicModel.step2.title":"MMD will help find the right work route",
    "publicModel.step2.note":"Choose only what you know now. If you are unsure, let MMD sort the category for you.",
    "publicModel.form.category.label":"Which category feels closest to you?",
    "publicModel.form.category.auto":"Let MMD choose the category",
    "publicModel.form.scope.title":"Client groups you are comfortable with",
    "publicModel.form.scope.female":"Women",
    "publicModel.form.scope.male":"Men",
    "publicModel.form.scope.lgbt":"LGBT",
    "publicModel.form.scope.foreign":"International clients",
    "publicModel.form.scope.vip":"VIP",
    "publicModel.form.scope.talk":"Discuss every job first",
    "publicModel.form.boundaries.label":"Boundaries or anything to discuss first",
    "publicModel.form.boundaries.placeholder":"Tell us what you do not accept or what MMD should discuss with you before every job.",
    "publicModel.step2.more":"Additional background",
    "publicModel.form.identity.label":"Identity you are comfortable sharing with MMD",
    "publicModel.form.identity.auto":"Prefer not to specify / talk with MMD first",
    "publicModel.form.identity.straight":"Straight man",
    "publicModel.form.identity.gay":"Gay",
    "publicModel.form.identity.bi":"Bi",
    "publicModel.form.background.title":"Relevant work background",
    "publicModel.form.background.none":"No previous jobs",
    "publicModel.form.background.self":"Worked independently before",
    "publicModel.form.background.agency":"Worked with an agency",
    "publicModel.form.background.service":"Service / hospitality experience",
    "publicModel.form.background.event":"Event / modelling experience",
    "publicModel.form.background.pro":"Already doing this professionally",

    "publicModel.step3.kicker":"STEP 3 OF 3",
    "publicModel.step3.title":"Contact details & send",
    "publicModel.step3.note":"If MMD sees a promising route, we will use these details to contact you.",
    "publicModel.form.phone.label":"Phone *",
    "publicModel.form.phone.placeholder":"08x xxx xxxx",
    "publicModel.form.line.label":"LINE ID *",
    "publicModel.form.line.placeholder":"LINE ID",
    "publicModel.form.telegram.label":"Telegram",
    "publicModel.form.telegram.placeholder":"@username",
    "publicModel.form.independent":"I have taken jobs independently before",
    "publicModel.form.safety":"I understand MMD work must be safe, drug-free, and screened before proceeding.",
    "publicModel.form.consent":"I confirm this information is true and consent to MMD using it for review and follow-up contact.",
    "publicModel.form.prev":"Back",
    "publicModel.form.next":"Next",
    "publicModel.form.submit":"Send profile",
    "publicModel.form.sending":"Sending...",
    "publicModel.error.required":"Please complete the required information before continuing.",
    "publicModel.error.age":"Please enter an age of 18 or above.",
    "publicModel.error.send":"Could not send your profile. Please try again.",
    "publicModel.error.system":"Applications are temporarily unavailable. Please contact MMD.",
    "publicModel.review.name":"Working name",
    "publicModel.review.occupation":"What you do now",
    "publicModel.review.location":"Location",
    "publicModel.review.highlight":"Strong point",
    "publicModel.review.category":"Category",
    "publicModel.review.boundaries":"Boundaries",
    "publicModel.review.notProvided":"Not provided yet",
    "publicModel.review.talkFirst":"Can discuss with MMD later",
    "publicModel.success.kicker":"PROFILE RECEIVED",
    "publicModel.success.title":"MMD has received your profile",
    "publicModel.success.body":"That is enough for the first review. MMD will consider which work routes fit you and contact you when there is a suitable opportunity.",
    "publicModel.success.cta":"Continue with MMD",

    "publicModel.after.kicker":"AFTER YOUR PROFILE",
    "publicModel.after.title":"Get approved first, then enter MMD MODEL",
    "publicModel.after.desc":"Sending a profile is not approval and does not start work immediately. If you pass review and are ready, the Model work system opens as the next step.",
    "publicModel.after.copyKicker":"NO NEED TO RUSH",
    "publicModel.after.copyTitle":"For now, just show us who you are",
    "publicModel.after.copyBody":"MMD will not make you learn a long system before we even know what kind of work fits you.",
    "publicModel.after.step1":"MMD reads your profile and reviews potential",
    "publicModel.after.step2":"If there is a suitable route, we contact you",
    "publicModel.after.step3":"Once approved and ready, the Model workflow opens",

    "publicModel.faq.kicker":"GOOD TO KNOW",
    "publicModel.faq.title":"Questions worth knowing before you send",
    "publicModel.faq.desc":"The details stay here instead of crowding the first screen.",
    "publicModel.faq.q1":"Do I need to look like a professional model?",
    "publicModel.faq.a1":"No. MMD looks at your appearance, personality, work, skills, responsibility, communication, and practical strengths together. Previous modelling experience is not required.",
    "publicModel.faq.q2":"Will I get a job as soon as I apply?",
    "publicModel.faq.a2":"Not immediately. Sending a profile lets MMD get to know you first. We contact you case by case when there is work or a route that genuinely fits.",
    "publicModel.faq.q3":"What are MMD clients like?",
    "publicModel.faq.a3":"There are general clients, returning clients, VIPs, and clients looking for a specific personality or skill. Requests are screened first, and you do not have to accept every job.",
    "publicModel.faq.q4":"What if I do not know what kind of work fits me?",
    "publicModel.faq.a4":"Choose ‘Let MMD choose the category.’ The point of this page is for us to see you first, not for you to analyse the market yourself.",
    "publicModel.faq.q5":"What about boundaries and safety?",
    "publicModel.faq.a5":"Tell us clearly what you are comfortable with, what you do not accept, or what you want to discuss before every job. MMD uses this to assess fit and does not send random work.",

    "publicModel.footer.note":"Public Model Application · Reviewed by MMD",
    "publicModel.footer.profiles":"View Public Models",
    "publicModel.chapters.title":"Public Model Apply",
    "publicModel.chapters.note":"Choose a section",
    "publicModel.chapter.overview":"Start here",
    "publicModel.chapter.overview.note":"A quick introduction to MMD",
    "publicModel.chapter.fit":"What MMD looks for",
    "publicModel.chapter.fit.note":"The first 4 things we need",
    "publicModel.chapter.apply":"Send profile",
    "publicModel.chapter.apply.note":"3-step form",
    "publicModel.chapter.next":"After sending",
    "publicModel.chapter.next.note":"Approval before Model access",
    "publicModel.chapter.details":"Before you send",
    "publicModel.chapter.details.note":"Extra details, kept folded",
    "publicModel.a11y.openChapters":"Open page sections",
    "publicModel.a11y.closeChapters":"Close page sections"
  });

  Object.assign(I.zh,{
    "publicModel.nav.menu":"页面导航",
    "publicModel.nav.apply":"提交资料",
    "publicModel.hero.kicker":"MMD PRIVÉ · PUBLIC MODEL",
    "publicModel.hero.lead":"先告诉我们你现在是谁、在做什么、会什么，以及你的特点是什么。第一步这些就够了。",
    "publicModel.hero.note":"不用写成正式求职申请，也不需要有模特经验。如果 MMD 看见适合你的方向，我们会继续帮你判断哪些工作更匹配。",
    "publicModel.hero.cta.submit":"提交资料给 MMD",
    "publicModel.hero.cta.review":"MMD 会看什么",
    "publicModel.hero.chip.experience":"不需要模特经验",
    "publicModel.hero.chip.choice":"每个工作都由你决定是否接受",
    "publicModel.hero.chip.screened":"MMD 会先筛选每个需求",
    "publicModel.hero.caption.title":"TART · MODEL-SIDE SCOUT",
    "publicModel.hero.caption.body":"先看见你的潜力，再交给 MMD 继续评估。",

    "publicModel.fit.kicker":"WHAT MMD NEEDS FIRST",
    "publicModel.fit.title":"先给我们 4 件事就够了",
    "publicModel.fit.desc":"一开始不用说得很复杂。MMD 想先看见真实的你，其余细节之后再聊。",
    "publicModel.fit.card1.title":"你现在是谁？",
    "publicModel.fit.card1.body":"你的工作名、年龄、所在地区，以及目前大致的生活状态。",
    "publicModel.fit.card2.title":"你本人是什么样子？",
    "publicModel.fit.card2.body":"提供能看清真实本人的 IG、Portfolio 或 Social 即可，暂时不用先做 comp card。",
    "publicModel.fit.card3.title":"你做什么、会什么？",
    "publicModel.fit.card3.body":"真实职业、技能、语言、运动、服务经验、创意工作，或任何你真正擅长的事情。",
    "publicModel.fit.card4.title":"你的特点是什么？",
    "publicModel.fit.card4.body":"什么会让别人和你相处舒服，或让你特别适合某一类工作。",
    "publicModel.route.kicker":"MMD WILL SORT THE ROUTE",
    "publicModel.route.title":"你不需要先知道自己属于哪一类",
    "publicModel.route.body":"你只需要让我们看见真实的你。MMD 会根据形象、能力、时间与边界，判断更适合你的工作方向。",
    "publicModel.route.item1":"形象 + 个性",
    "publicModel.route.item2":"职业 + 实际技能",
    "publicModel.route.item3":"服务意识 + 沟通",
    "publicModel.route.item4":"边界 + 准备程度",

    "publicModel.apply.kicker":"PROFILE FIRST",
    "publicModel.apply.title":"让 MMD 先认识你",
    "publicModel.apply.desc":"先从能了解这个人的信息开始。只有在需要时才展开系统细节，不会让第一页变成长篇 HR 表单。",
    "publicModel.step.tab1":"现在的你",
    "publicModel.step.tab2":"可能适合的工作",
    "publicModel.step.tab3":"联系方式与提交",
    "publicModel.step1.kicker":"STEP 1 OF 3",
    "publicModel.step1.title":"你现在是谁？",
    "publicModel.step1.note":"这是最重要的一步：先让 MMD 看见真实的人。",
    "publicModel.form.nickname.label":"昵称 / 工作名 *",
    "publicModel.form.nickname.placeholder":"例如 Max / Ken / Poom",
    "publicModel.form.age.label":"年龄 *",
    "publicModel.form.age.placeholder":"18+",
    "publicModel.form.location.label":"你在哪里 / 可在哪些地区工作？ *",
    "publicModel.form.location.placeholder":"例如 Bangkok / Chiang Mai / 可接外地工作",
    "publicModel.form.occupation.label":"你现在在做什么？ *",
    "publicModel.form.occupation.placeholder":"全职、自由职业、学习、经营事业、运动、服务工作，或你目前真实在做的事情",
    "publicModel.form.skills.label":"你会做什么？",
    "publicModel.form.skills.placeholder":"语言、运动、开车、料理、摄影、教学、健身、服务技能、特殊能力等",
    "publicModel.form.story.label":"你最突出的特点是什么？ *",
    "publicModel.form.story.placeholder":"例如好沟通、会照顾人、自律、喜欢活动、有礼貌、守时，或有让人容易记住的个人特质",
    "publicModel.form.portfolio.label":"能看见真实本人的 IG / Portfolio / Social",
    "publicModel.form.portfolio.placeholder":"有多少链接就先放多少。如果暂时没有，之后也可以再和 MMD 沟通。",
    "publicModel.step1.more":"有的话再补充",
    "publicModel.form.height.label":"身高",
    "publicModel.form.weight.label":"体重",
    "publicModel.form.expYears.label":"经验（年）",
    "publicModel.form.expMonths.label":"经验（月）",
    "publicModel.form.agency.label":"有 agency / event / modelling 经验吗？",
    "publicModel.form.agency.placeholder":"如有再填写",

    "publicModel.step2.kicker":"STEP 2 OF 3",
    "publicModel.step2.title":"MMD 会帮你判断合适的工作方向",
    "publicModel.step2.note":"现在知道多少就选多少。如果还不确定，可以直接让 MMD 帮你分类。",
    "publicModel.form.category.label":"哪一个类别最接近你？",
    "publicModel.form.category.auto":"让 MMD 帮我分类",
    "publicModel.form.scope.title":"你感到自在的客户类型",
    "publicModel.form.scope.female":"女性",
    "publicModel.form.scope.male":"男性",
    "publicModel.form.scope.lgbt":"LGBT",
    "publicModel.form.scope.foreign":"国际客户",
    "publicModel.form.scope.vip":"VIP",
    "publicModel.form.scope.talk":"每个工作先沟通",
    "publicModel.form.boundaries.label":"边界或需要先讨论的事项",
    "publicModel.form.boundaries.placeholder":"有什么不接受，或希望 MMD 每次都先和你确认的事项，可以直接说明。",
    "publicModel.step2.more":"补充背景资料",
    "publicModel.form.identity.label":"你愿意向 MMD 说明的身份",
    "publicModel.form.identity.auto":"不特别说明 / 先和 MMD 沟通",
    "publicModel.form.identity.straight":"异性恋男性",
    "publicModel.form.identity.gay":"Gay",
    "publicModel.form.identity.bi":"Bi",
    "publicModel.form.background.title":"相关工作经历",
    "publicModel.form.background.none":"还没有相关工作经验",
    "publicModel.form.background.self":"曾自己接工作",
    "publicModel.form.background.agency":"曾与 agency 合作",
    "publicModel.form.background.service":"有服务 / hospitality 经验",
    "publicModel.form.background.event":"有 event / modelling 经验",
    "publicModel.form.background.pro":"目前已经以此为职业",

    "publicModel.step3.kicker":"STEP 3 OF 3",
    "publicModel.step3.title":"联系方式与提交",
    "publicModel.step3.note":"如果 MMD 看见适合的方向，会通过这些联系方式与你联系。",
    "publicModel.form.phone.label":"联系电话 *",
    "publicModel.form.phone.placeholder":"08x xxx xxxx",
    "publicModel.form.line.label":"LINE ID *",
    "publicModel.form.line.placeholder":"LINE ID",
    "publicModel.form.telegram.label":"Telegram",
    "publicModel.form.telegram.placeholder":"@username",
    "publicModel.form.independent":"我以前曾自己接工作",
    "publicModel.form.safety":"我了解 MMD 的工作必须安全、无毒品，并在进行前完成筛选。",
    "publicModel.form.consent":"我确认以上资料属实，并同意 MMD 将资料用于评估及后续联系。",
    "publicModel.form.prev":"返回",
    "publicModel.form.next":"下一步",
    "publicModel.form.submit":"提交资料",
    "publicModel.form.sending":"正在提交...",
    "publicModel.error.required":"请先完成所有必填资料。",
    "publicModel.error.age":"请填写 18 岁或以上的年龄。",
    "publicModel.error.send":"资料提交失败，请再试一次。",
    "publicModel.error.system":"申请系统暂时无法使用，请联系 MMD。",
    "publicModel.review.name":"工作名",
    "publicModel.review.occupation":"目前在做什么",
    "publicModel.review.location":"地区",
    "publicModel.review.highlight":"特点",
    "publicModel.review.category":"类别",
    "publicModel.review.boundaries":"边界",
    "publicModel.review.notProvided":"尚未填写",
    "publicModel.review.talkFirst":"之后可再和 MMD 沟通",
    "publicModel.success.kicker":"PROFILE RECEIVED",
    "publicModel.success.title":"MMD 已收到你的资料",
    "publicModel.success.body":"第一轮这些资料已经足够。MMD 会判断哪些工作方向更适合你，并在有合适机会时联系你。",
    "publicModel.success.cta":"继续联系 MMD",

    "publicModel.after.kicker":"AFTER YOUR PROFILE",
    "publicModel.after.title":"先通过审核，再进入 MMD MODEL",
    "publicModel.after.desc":"提交资料并不代表已经批准，也不会立即开始接工作。通过审核并准备好之后，Model 工作系统才会作为下一步开放。",
    "publicModel.after.copyKicker":"NO NEED TO RUSH",
    "publicModel.after.copyTitle":"现在先让我们认识真实的你就够了",
    "publicModel.after.copyBody":"在还不知道什么工作适合你之前，MMD 不会先让你学习一大套系统。",
    "publicModel.after.step1":"MMD 阅读资料并判断 potential",
    "publicModel.after.step2":"如果有合适方向，我们会联系你",
    "publicModel.after.step3":"通过审核并准备好之后，再开放 Model 流程",

    "publicModel.faq.kicker":"GOOD TO KNOW",
    "publicModel.faq.title":"提交前值得知道的问题",
    "publicModel.faq.desc":"详细资料放在这里，不让第一页塞满信息。",
    "publicModel.faq.q1":"一定要达到专业模特外形才能申请吗？",
    "publicModel.faq.a1":"不需要。MMD 会综合看外形、个性、职业、技能、责任感、沟通方式，以及能实际用于工作的特点，并不要求一定有模特经验。",
    "publicModel.faq.q2":"申请后会马上有工作吗？",
    "publicModel.faq.a2":"不会马上开始。提交资料只是先让 MMD 认识你；只有出现真正适合你的工作或方向时，我们才会逐一联系。",
    "publicModel.faq.q3":"MMD 的客户是什么类型？",
    "publicModel.faq.a3":"包括一般客户、长期客户、VIP，以及需要特定个性或技能的人。所有需求都会先筛选，而且你不需要接受每一个工作。",
    "publicModel.faq.q4":"如果我还不知道自己适合什么工作呢？",
    "publicModel.faq.a4":"可以直接选择「让 MMD 帮我分类」。这页的目的，是先让我们看见真实的你，不需要你自己先分析市场。",
    "publicModel.faq.q5":"边界和安全怎么处理？",
    "publicModel.faq.a5":"可以直接告诉我们什么可以、什么不接受，或哪些事情希望每次工作前先沟通。MMD 会用这些信息判断是否适合，不会随机发送工作。",

    "publicModel.footer.note":"Public Model Application · Reviewed by MMD",
    "publicModel.footer.profiles":"查看 Public Models",
    "publicModel.chapters.title":"Public Model Apply",
    "publicModel.chapters.note":"选择要查看的部分",
    "publicModel.chapter.overview":"从这里开始",
    "publicModel.chapter.overview.note":"快速了解 MMD",
    "publicModel.chapter.fit":"MMD 会看什么",
    "publicModel.chapter.fit.note":"第一步想先看 4 件事",
    "publicModel.chapter.apply":"提交资料",
    "publicModel.chapter.apply.note":"3 步表单",
    "publicModel.chapter.next":"提交之后",
    "publicModel.chapter.next.note":"通过审核后再进入 Model",
    "publicModel.chapter.details":"提交前问题",
    "publicModel.chapter.details.note":"补充细节先收起",
    "publicModel.a11y.openChapters":"打开页面导航",
    "publicModel.a11y.closeChapters":"关闭页面导航"
  });

  function onRoute(){
    return (((location.pathname||"/").replace(/\/+$/,"")||"/")==="/apply/public-model");
  }

  function setKey(selector,key,root){
    var el=(root||D).querySelector(selector);
    if(el) el.setAttribute("data-i18n-text",key);
  }

  function setList(selector,keys,root){
    var nodes=(root||D).querySelectorAll(selector);
    for(var i=0;i<nodes.length&&i<keys.length;i++) nodes[i].setAttribute("data-i18n-text",keys[i]);
  }

  function setPlaceholder(selector,key,root){
    var el=(root||D).querySelector(selector);
    if(el) el.setAttribute("data-i18n-placeholder",key);
  }

  function setAria(selector,key,root){
    var el=(root||D).querySelector(selector);
    if(el) el.setAttribute("data-i18n-aria-label",key);
  }

  function bindField(root,name,labelKey,placeholderKey){
    var el=root.querySelector('[data-field="'+name+'"]');
    if(!el) return;
    var label=el.closest&&el.closest("label");
    if(label){
      var text=label.querySelector(".p9-label-text,span");
      if(text) text.setAttribute("data-i18n-text",labelKey);
    }
    if(placeholderKey) el.setAttribute("data-i18n-placeholder",placeholderKey);
  }

  function optionText(select,index,key){
    if(!select||!select.options||!select.options[index]) return;
    var opt=select.options[index],value=opt.value;
    var text=W.MMD_I18N&&W.MMD_I18N.t?W.MMD_I18N.t(key):null;
    if(!text) return;
    opt.textContent=text;
    opt.value=value;
  }

  function bind(){
    if(!onRoute()) return;
    var r=D.querySelector(".pma9");
    if(!r) return;

    setKey(".p9-top-actions [data-menu]","publicModel.nav.menu",r);
    setKey(".p9-top-actions [data-go='apply']","publicModel.nav.apply",r);
    setKey(".p9-hero .p9-kicker","publicModel.hero.kicker",r);
    setKey(".p9-lead","publicModel.hero.lead",r);
    setKey(".p9-note","publicModel.hero.note",r);
    setKey(".p9-hero-actions [data-go='apply']","publicModel.hero.cta.submit",r);
    setKey(".p9-hero-actions [data-go='fit']","publicModel.hero.cta.review",r);
    setList(".p9-chips span",["publicModel.hero.chip.experience","publicModel.hero.chip.choice","publicModel.hero.chip.screened"],r);
    setKey(".p9-visual figcaption strong","publicModel.hero.caption.title",r);
    setKey(".p9-visual figcaption span","publicModel.hero.caption.body",r);

    setKey("#p9-fit .p9-head .p9-kicker","publicModel.fit.kicker",r);
    setKey("#p9-fit .p9-head h2","publicModel.fit.title",r);
    setKey("#p9-fit .p9-head .p9-head-copy","publicModel.fit.desc",r);
    var cards=r.querySelectorAll("#p9-fit .p9-four article");
    for(var c=0;c<cards.length&&c<4;c++){
      setKey("h3","publicModel.fit.card"+(c+1)+".title",cards[c]);
      setKey("p","publicModel.fit.card"+(c+1)+".body",cards[c]);
    }
    setKey(".p9-review-copy .p9-kicker-light","publicModel.route.kicker",r);
    setKey(".p9-review-title","publicModel.route.title",r);
    setKey(".p9-review-text","publicModel.route.body",r);
    setList(".p9-route-item",["publicModel.route.item1","publicModel.route.item2","publicModel.route.item3","publicModel.route.item4"],r);

    setKey("#p9-apply .p9-head .p9-kicker-light","publicModel.apply.kicker",r);
    setKey("#p9-apply .p9-head h2","publicModel.apply.title",r);
    setKey("#p9-apply .p9-head .p9-head-copy-light","publicModel.apply.desc",r);
    setList("#p9-apply [data-step-btn] span",["publicModel.step.tab1","publicModel.step.tab2","publicModel.step.tab3"],r);

    var s1=r.querySelector('[data-step="1"]'),s2=r.querySelector('[data-step="2"]'),s3=r.querySelector('[data-step="3"]');
    if(s1){
      setList("legend span,legend strong,legend em",["publicModel.step1.kicker","publicModel.step1.title","publicModel.step1.note"],s1);
      bindField(s1,"nickname","publicModel.form.nickname.label","publicModel.form.nickname.placeholder");
      bindField(s1,"age","publicModel.form.age.label","publicModel.form.age.placeholder");
      bindField(s1,"location","publicModel.form.location.label","publicModel.form.location.placeholder");
      bindField(s1,"occupation_detail","publicModel.form.occupation.label","publicModel.form.occupation.placeholder");
      bindField(s1,"skills","publicModel.form.skills.label","publicModel.form.skills.placeholder");
      bindField(s1,"story","publicModel.form.story.label","publicModel.form.story.placeholder");
      bindField(s1,"portfolio_links","publicModel.form.portfolio.label","publicModel.form.portfolio.placeholder");
      setKey(".p9-mini summary","publicModel.step1.more",s1);
      bindField(s1,"height_cm","publicModel.form.height.label",null);
      bindField(s1,"weight_kg","publicModel.form.weight.label",null);
      bindField(s1,"experience_years","publicModel.form.expYears.label",null);
      bindField(s1,"experience_months","publicModel.form.expMonths.label",null);
      bindField(s1,"agency","publicModel.form.agency.label","publicModel.form.agency.placeholder");
    }
    if(s2){
      setList("legend span,legend strong,legend em",["publicModel.step2.kicker","publicModel.step2.title","publicModel.step2.note"],s2);
      bindField(s2,"category","publicModel.form.category.label",null);
      setKey(".p9-field-title","publicModel.form.scope.title",s2);
      bindField(s2,"boundaries","publicModel.form.boundaries.label","publicModel.form.boundaries.placeholder");
      var minis=s2.querySelectorAll(".p9-mini summary");
      if(minis.length) minis[minis.length-1].setAttribute("data-i18n-text","publicModel.step2.more");
      bindField(s2,"identity","publicModel.form.identity.label",null);
      var titles=s2.querySelectorAll(".p9-field-title");
      if(titles.length>1) titles[titles.length-1].setAttribute("data-i18n-text","publicModel.form.background.title");
    }
    if(s3){
      setList("legend span,legend strong,legend em",["publicModel.step3.kicker","publicModel.step3.title","publicModel.step3.note"],s3);
      bindField(s3,"phone","publicModel.form.phone.label","publicModel.form.phone.placeholder");
      bindField(s3,"line_id","publicModel.form.line.label","publicModel.form.line.placeholder");
      bindField(s3,"telegram","publicModel.form.telegram.label","publicModel.form.telegram.placeholder");
    }

    setKey("[data-prev]","publicModel.form.prev",r);
    setKey("[data-next]","publicModel.form.next",r);
    setKey("[data-submit]","publicModel.form.submit",r);
    setKey("[data-success] .p9-kicker","publicModel.success.kicker",r);
    setKey("[data-success] .p9-success-title","publicModel.success.title",r);
    setKey("[data-success] .p9-success-copy","publicModel.success.body",r);
    setKey("[data-success] .p9-btn-primary","publicModel.success.cta",r);

    setKey("#p9-nextsection .p9-head .p9-kicker","publicModel.after.kicker",r);
    setKey("#p9-nextsection .p9-head h2","publicModel.after.title",r);
    setKey("#p9-nextsection .p9-head .p9-head-copy","publicModel.after.desc",r);
    setKey(".p9-after-copy .p9-kicker","publicModel.after.copyKicker",r);
    setKey(".p9-after-title","publicModel.after.copyTitle",r);
    setKey(".p9-after-text","publicModel.after.copyBody",r);
    setList(".p9-next span",["publicModel.after.step1","publicModel.after.step2","publicModel.after.step3"],r);

    setKey("#p9-details .p9-head .p9-kicker","publicModel.faq.kicker",r);
    setKey("#p9-details .p9-head h2","publicModel.faq.title",r);
    setKey("#p9-details .p9-head .p9-head-copy","publicModel.faq.desc",r);
    var faq=r.querySelectorAll("#p9-details .p9-acc");
    for(var f=0;f<faq.length&&f<5;f++){
      setKey("summary","publicModel.faq.q"+(f+1),faq[f]);
      setKey(".p9-acc-copy,div","publicModel.faq.a"+(f+1),faq[f]);
    }
    setKey(".p9-footer-note","publicModel.footer.note",r);
    setKey(".p9-btn-footer","publicModel.footer.profiles",r);

    setKey(".p9-sheet-head strong","publicModel.chapters.title",r);
    setKey(".p9-sheet-head span","publicModel.chapters.note",r);
    var menuKeys=["overview","fit","apply","next","details"];
    var menu=r.querySelectorAll(".p9-menu [data-go]");
    for(var m=0;m<menu.length&&m<menuKeys.length;m++){
      setKey("strong","publicModel.chapter."+menuKeys[m],menu[m]);
      setKey(".p9-menu-note","publicModel.chapter."+menuKeys[m]+".note",menu[m]);
    }
    setAria(".p9-top-actions [data-menu]","publicModel.a11y.openChapters",r);
    setAria(".p9-dock [data-menu]","publicModel.a11y.openChapters",r);
    setAria(".p9-sheet [data-close-menu]","publicModel.a11y.closeChapters",r);

    r.setAttribute("data-mmd-i18n-bundle","public-model-apply");
    applySpecial(r);
    if(W.MMD_I18N&&typeof W.MMD_I18N.apply==="function") W.MMD_I18N.apply(r);
  }

  function applySpecial(root){
    if(!root) return;
    var category=root.querySelector('[data-field="category"]');
    optionText(category,0,"publicModel.form.category.auto");
    var identity=root.querySelector('[data-field="identity"]');
    optionText(identity,0,"publicModel.form.identity.auto");
    optionText(identity,1,"publicModel.form.identity.straight");
    optionText(identity,2,"publicModel.form.identity.gay");
    optionText(identity,3,"publicModel.form.identity.bi");
  }

  function refresh(){
    if(!onRoute()) return;
    var r=D.querySelector(".pma9");
    if(!r) return;
    applySpecial(r);
    if(W.MMD_I18N&&typeof W.MMD_I18N.apply==="function") W.MMD_I18N.apply(r);
  }

  D.addEventListener("mmd:i18n:ready",function(){bind();refresh()});
  D.addEventListener("mmd:i18n:change",function(){refresh()});
  if(D.readyState==="loading") D.addEventListener("DOMContentLoaded",bind); else bind();
})();
