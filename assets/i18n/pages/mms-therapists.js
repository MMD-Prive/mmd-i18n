/* MMS Therapist recruitment page — canonical i18n bindings (TH / EN / ZH) */
(function(){
  "use strict";
  var W=window,DOC=document;
  W.I18N_DICT=W.I18N_DICT||{};
  var D=W.I18N_DICT; D.th=D.th||{}; D.en=D.en||{}; D.zh=D.zh||{};

  Object.assign(D.th,{
    "mms.therapists.nav.work":"งานแบบนี้","mms.therapists.nav.ai":"AI ช่วยอะไร","mms.therapists.nav.flow":"จาก Brief ถึงงานจริง","mms.therapists.nav.growth":"Profile Growth","mms.therapists.nav.apply":"สมัคร",
    "mms.therapists.hero.kicker":"MMS · THERAPIST OPPORTUNITY","mms.therapists.hero.title":"Therapist ไทยมีฝีมือ<br><span>ดีจนคนพูดถึงกันมานาน</span>","mms.therapists.hero.lead":"Male Massage กำลังทำแอปฯ เพื่อให้คนมีฝีมือได้มีโอกาสรับงานเสริมใกล้ตัว โดยไม่ต้องเสียเวลาวิ่งหางานเองทั้งวัน","mms.therapists.hero.founder":"<b>จากประสบการณ์ 6 ปีของเปอร์</b> ผมอยากให้ทั้งคนที่สนใจเริ่มต้น และคนที่ทำงานอยู่แล้ว มีอีกทางเลือกในการหารายได้—เมื่อคุณว่างและมีงานที่เหมาะอยู่ใกล้ ๆ ระบบจะส่งรายละเอียดมาให้ คุณอ่านก่อน แล้วค่อยตัดสินใจเองครับ","mms.therapists.hero.tag1":"มีงานประจำก็สมัครได้","mms.therapists.hero.tag2":"ไม่ต้องวิ่งหางานเอง","mms.therapists.hero.tag3":"ดูรายละเอียดก่อนรับ","mms.therapists.hero.apply":"สมัครให้ MMS รู้จักก่อน <b>↗</b>","mms.therapists.hero.how":"ดูว่าเริ่มทำงานยังไง <b>↓</b>","mms.therapists.hero.proof":"MMS คัดคนทำงานตามเกณฑ์จริงครับ ฝีมือสำคัญมาก—และ MMD ทั้งที บุคลิกดี ดูแลตัวเองดี ก็สำคัญเหมือนกัน","mms.therapists.hero.customer":"กำลังมองหาบริการนวด? ไปหน้า Male Massage →",
    "mms.therapists.story.title":"ไม่ต้องเดาว่างานจะมาแบบไหน<br><span>ปัดดูตั้งแต่ Brief จนถึงออกเดินทางได้เลย</span>","mms.therapists.story.lead":"พอมีงานเข้ามา คุณจะเห็นข้อมูลสำคัญก่อน แล้วค่อยเลือกว่าจะรับหรือผ่านครับ",
    "mms.therapists.benefits.title":"มีฝีมือดี<br><span>ก็ควรมีคนเห็น</span>","mms.therapists.benefits.lead":"ไม่ว่าจะเพิ่งเริ่ม หรือทำเป็นอาชีพอยู่แล้ว ถ้าคุณดูแลงานดีและอยากมีอีกทางเลือกในการรับงาน MMS อยากรู้จักครับ",
    "mms.therapists.ai.title":"มีงานใกล้คุณ<br><span>ระบบช่วยบอก แต่คุณเป็นคนเลือก</span>","mms.therapists.ai.lead":"เมื่อมีงานที่อาจเหมาะ ระบบจะรวบรวมรายละเอียดให้คุณดูง่ายขึ้น แต่การรับหรือผ่าน ยังเป็นของคุณเสมอ",
    "mms.therapists.growth.title":"ทำงานไปเรื่อย ๆ<br><span>โปรไฟล์ก็โตไปกับคุณ</span>","mms.therapists.growth.lead":"ทุกงานที่คุณทำดี จะค่อย ๆ กลายเป็นประสบการณ์ที่ช่วยให้คุณมีทางเลือกมากขึ้น",
    "mms.therapists.fit.title":"ไม่ต้องเป็นคนแบบเดียวกัน<br><span>ถ้าตั้งใจทำงาน ก็คุยกันได้</span>","mms.therapists.fit.lead":"ไม่ว่าคุณจะเพิ่งเริ่ม หรือมีประสบการณ์อยู่แล้ว MMS อยากดูความตั้งใจและวิธีทำงานของคุณก่อน",
    "mms.therapists.faq.title":"มีข้อไหนค้างใจ<br><span>กด + เปิดดูแค่ข้อนั้นครับ</span>","mms.therapists.faq.lead":"ไม่ต้องอ่านจนจบก็ได้ครับ เลือกเปิดเฉพาะข้อที่ค้างใจ แล้วค่อยคุยกันต่อได้",
    "mms.therapists.final.title":"ถ้าอยากลองมีงานเสริม<br><span>ที่ยังเลือกเองได้ ก็เริ่มจากสมัครไว้ก่อนครับ</span>","mms.therapists.final.lead":"มี Profile ไม่ได้แปลว่าต้องรับทุกงาน คุณยังเป็นคนกำหนดว่าช่วงไหนพร้อม และงานแบบไหนเหมาะกับตัวเอง","mms.therapists.final.apply":"สมัครเป็น Therapist <b>↗</b>","mms.therapists.final.benefits":"ดู Benefits","mms.therapists.final.rules":"อ่าน Rules","mms.therapists.final.customer":"กำลังมองหาบริการนวด? ไปหน้า Male Massage →"
  });

  Object.assign(D.en,{
    "mms.therapists.nav.work":"How this work fits","mms.therapists.nav.ai":"What AI helps with","mms.therapists.nav.flow":"From brief to job","mms.therapists.nav.growth":"Profile growth","mms.therapists.nav.apply":"Apply",
    "mms.therapists.hero.kicker":"MMS · THERAPIST OPPORTUNITY","mms.therapists.hero.title":"Thai Therapists with real skill<br><span>have been talked about for years</span>","mms.therapists.hero.lead":"Male Massage is building an app that helps skilled people find nearby freelance work—without spending the day chasing it themselves.","mms.therapists.hero.founder":"<b>From Per’s six years of experience</b>, I want both newcomers and working therapists to have another way to earn. When you are free and a suitable job is nearby, the details come to you. Read them first, then decide for yourself.","mms.therapists.hero.tag1":"Apply alongside a full-time job","mms.therapists.hero.tag2":"No need to chase jobs","mms.therapists.hero.tag3":"See the details first","mms.therapists.hero.apply":"Let MMS get to know you <b>↗</b>","mms.therapists.hero.how":"See how it works <b>↓</b>","mms.therapists.hero.proof":"MMS selects therapists against real working criteria. Skill matters greatly—and under MMD, being well-presented and taking care of yourself matters too.","mms.therapists.hero.customer":"Looking for a massage service? Go to Male Massage →",
    "mms.therapists.story.title":"You do not have to guess what a job looks like<br><span>Swipe from the brief to heading out</span>","mms.therapists.story.lead":"When a job arrives, you see the important details first, then choose whether to accept or pass.",
    "mms.therapists.benefits.title":"Real skill<br><span>deserves to be seen</span>","mms.therapists.benefits.lead":"Whether you are just starting out or already work professionally, MMS would like to know you if you care for clients well and want another way to find work.",
    "mms.therapists.ai.title":"When work is near you<br><span>the system tells you; you choose</span>","mms.therapists.ai.lead":"When a job may suit you, the system gathers the important details. Accepting or passing is always your decision.",
    "mms.therapists.growth.title":"Keep doing good work<br><span>and your profile grows with you</span>","mms.therapists.growth.lead":"Each job you do well becomes experience that opens up more choices over time.",
    "mms.therapists.fit.title":"You do not have to fit one mould<br><span>if you care about the work, let’s talk</span>","mms.therapists.fit.lead":"Whether you are new or experienced, MMS wants to understand your commitment and how you work first.",
    "mms.therapists.faq.title":"Something still on your mind?<br><span>Open only the question you need</span>","mms.therapists.faq.lead":"You do not need to read everything. Open the part you are wondering about, then we can talk.",
    "mms.therapists.final.title":"If you want freelance work<br><span>that you can still choose for yourself, start with an application</span>","mms.therapists.final.lead":"Having a profile does not mean taking every job. You decide when you are ready and which work suits you.","mms.therapists.final.apply":"Apply as a Therapist <b>↗</b>","mms.therapists.final.benefits":"View benefits","mms.therapists.final.rules":"Read the rules","mms.therapists.final.customer":"Looking for a massage service? Go to Male Massage →"
  });

  Object.assign(D.zh,{
    "mms.therapists.nav.work":"这份工作适合谁","mms.therapists.nav.ai":"AI 能帮什么","mms.therapists.nav.flow":"从简报到出发","mms.therapists.nav.growth":"资料成长","mms.therapists.nav.apply":"申请",
    "mms.therapists.hero.kicker":"MMS · 理疗师机会","mms.therapists.hero.title":"泰国理疗师的真本事<br><span>一直以来都有口皆碑</span>","mms.therapists.hero.lead":"Male Massage 正在打造一款应用，让有真本事的人获得附近的自由接案机会，不必整天奔波找工作。","mms.therapists.hero.founder":"<b>来自 Per 六年的经验</b>，我希望刚起步的人和已经在做这行的人，都能多一个增加收入的选择。当您有空且附近有合适工作时，系统会把详情送到您面前。先看清楚，再自己决定。","mms.therapists.hero.tag1":"有全职工作也可申请","mms.therapists.hero.tag2":"不必自己四处找工作","mms.therapists.hero.tag3":"先看详情再决定","mms.therapists.hero.apply":"先让 MMS 认识您 <b>↗</b>","mms.therapists.hero.how":"看看如何开始 <b>↓</b>","mms.therapists.hero.proof":"MMS 按真实工作标准筛选。技术非常重要；在 MMD，得体、懂得照顾自己也同样重要。","mms.therapists.hero.customer":"正在寻找按摩服务？前往 Male Massage →",
    "mms.therapists.story.title":"不必猜测工作会是什么样子<br><span>从收到简报到出发，一路滑着看</span>","mms.therapists.story.lead":"有工作进来时，您会先看到重要细节，再决定接受或略过。",
    "mms.therapists.benefits.title":"真正的技术<br><span>值得被看见</span>","mms.therapists.benefits.lead":"无论刚开始还是已经专业从业，只要您认真照顾客户，也想多一个接案方式，MMS 想认识您。",
    "mms.therapists.ai.title":"附近有合适工作时<br><span>系统提醒，选择权在您</span>","mms.therapists.ai.lead":"当工作可能适合您，系统会整理重要信息。接受或略过，始终由您决定。",
    "mms.therapists.growth.title":"持续把工作做好<br><span>您的资料也会一起成长</span>","mms.therapists.growth.lead":"每一份做好的工作都会变成经验，让您慢慢拥有更多选择。",
    "mms.therapists.fit.title":"不必成为同一种人<br><span>认真对待工作，就值得聊聊</span>","mms.therapists.fit.lead":"无论您是新手还是有经验，MMS 会先了解您的投入程度和工作方式。",
    "mms.therapists.faq.title":"还有什么想问的吗？<br><span>只打开您关心的那一项</span>","mms.therapists.faq.lead":"不需要全部读完。打开您关心的部分，再继续聊就好。",
    "mms.therapists.final.title":"如果想拥有一份自由接案<br><span>而且仍能自己选择，就先申请吧</span>","mms.therapists.final.lead":"拥有资料不代表必须接下每一份工作。何时准备好、哪种工作适合您，依然由您决定。","mms.therapists.final.apply":"申请成为理疗师 <b>↗</b>","mms.therapists.final.benefits":"查看福利","mms.therapists.final.rules":"阅读规则","mms.therapists.final.customer":"正在寻找按摩服务？前往 Male Massage →"
  });

  function bind(selector,key,kind){
    var nodes=DOC.querySelectorAll(selector),attr=kind==="html"?"data-i18n-html":"data-i18n-text";
    for(var i=0;i<nodes.length;i+=1) nodes[i].setAttribute(attr,key);
  }
  function run(){
    var root=DOC.getElementById("mms-therapists-maxx"); if(!root)return;
    bind(".m3-nav-links a:nth-child(1)","mms.therapists.nav.work");
    bind(".m3-nav-links a:nth-child(2)","mms.therapists.nav.ai");
    bind(".m3-nav-links a:nth-child(3)","mms.therapists.nav.flow");
    bind(".m3-nav-links a:nth-child(4)","mms.therapists.nav.growth");
    bind(".m3-apply","mms.therapists.nav.apply");
    bind("#mms-top .m3-kicker","mms.therapists.hero.kicker");
    bind("#mms-top .m3-h1","mms.therapists.hero.title","html");
    bind("#mms-top .m3-lead","mms.therapists.hero.lead");
    bind("#mms-top .m3-founder-note","mms.therapists.hero.founder","html");
    bind("#mms-top .m3-tag:nth-child(1)","mms.therapists.hero.tag1");
    bind("#mms-top .m3-tag:nth-child(2)","mms.therapists.hero.tag2");
    bind("#mms-top .m3-tag:nth-child(3)","mms.therapists.hero.tag3");
    bind("#mms-top .m3-btn-primary","mms.therapists.hero.apply","html");
    bind("#mms-top .m3-btn-soft","mms.therapists.hero.how","html");
    bind("#mms-top .m3-proof","mms.therapists.hero.proof");
    bind("#mms-top .m3-customer","mms.therapists.hero.customer");
    bind("#benefits .m3-h2","mms.therapists.benefits.title","html");
    bind("#benefits .m3-head p","mms.therapists.benefits.lead");
    bind("#ai .m3-h2","mms.therapists.ai.title","html");
    bind("#ai .m3-copy p","mms.therapists.ai.lead");
    bind("#how-work .m3-h2","mms.therapists.story.title","html");
    bind("#how-work .m3-head p","mms.therapists.story.lead");
    bind("#growth .m3-h2","mms.therapists.growth.title","html");
    bind("#growth .m3-copy p","mms.therapists.growth.lead");
    bind("#fit .m3-h2","mms.therapists.fit.title","html");
    bind("#fit .m3-copy p","mms.therapists.fit.lead");
    bind("#faq .m3-h2","mms.therapists.faq.title","html");
    bind("#faq .m3-head p","mms.therapists.faq.lead");
    bind("#apply .m3-h2","mms.therapists.final.title","html");
    bind("#apply .m3-copy>p:not(.m3-kicker)","mms.therapists.final.lead");
    bind("#apply .m3-btn-lime","mms.therapists.final.apply","html");
    bind("#apply .m3-btn-glass:nth-of-type(2)","mms.therapists.final.benefits");
    bind("#apply .m3-btn-glass:nth-of-type(3)","mms.therapists.final.rules");
    bind("#apply .m3-final-route","mms.therapists.final.customer");
    if(W.MMD_I18N&&W.MMD_I18N.apply)W.MMD_I18N.apply(DOC);
  }
  if(DOC.readyState==="loading")DOC.addEventListener("DOMContentLoaded",run); else run();
  DOC.addEventListener("mmd:i18n:ready",run);
})();