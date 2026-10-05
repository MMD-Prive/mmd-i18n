/* MMD Privé · Black Card LV9.1 · canonical TH/EN/ZH i18n
   Route: /blackcard/black-card
   2026-10-05
*/
(function(){
  "use strict";

  var W=window,D=document;
  W.I18N_DICT=W.I18N_DICT||{};
  var I=W.I18N_DICT;
  I.th=I.th||{}; I.en=I.en||{}; I.zh=I.zh||{};

  Object.assign(I.th,{
    "bc91.hero.kicker":"HIGHEST TRUST / SĪGIL",
    "bc91.hero.subtitle":"สิทธิ์พิเศษขั้นสูงสุดของ MMD Privé",
    "bc91.hero.lead":"Black Card คือระดับสมาชิกสำหรับผู้ที่ MMD ไว้ใจให้เข้าสู่ TRUST สูงสุดของ SĪGIL system พร้อมการดูแลต่อเนื่องเต็มที่ตลอดระยะเวลา 3 ปี",
    "bc91.hero.body":"Red Card privileges ทั้งหมดรวมอยู่แล้ว และต่อยอดไปยัง Private / Exclusive opportunities ตาม entitlement, approval, consent และ availability จริงของแต่ละโอกาส",
    "bc91.hero.cta":"อ่านรายละเอียดต่อ",
    "bc91.axis.years":"YEARS",

    "bc91.membership.kicker":"MEMBERSHIP",
    "bc91.membership.title":"Three years inside the trust.",
    "bc91.membership.desc":"เมื่อเข้าใจว่า Black Card คือระดับความสัมพันธ์และการดูแล จึงค่อยเป็นเรื่องของค่าสมาชิก",
    "bc91.membership.term":"ระยะเวลาสมาชิก 3 ปี",
    "bc91.membership.note":"เป็นค่า access membership และการออก SĪGIL Card หลัง MMD ตรวจยืนยันการชำระ ไม่ใช้หักค่าจองหรือค่าบริการอื่น",
    "bc91.membership.legend":"RED CARD INCLUDED · PRIVATE REVIEW · HIGHEST TRUST",

    "bc91.rights.kicker":"WHAT IT OPENS",
    "bc91.rights.title":"สิทธิ์สูงสุด ไม่ใช่สิทธิ์ไร้ขอบเขต",
    "bc91.rights.1.title":"Red Card included",
    "bc91.rights.1.body":"Public privileges ระดับสูงสุดของ Red Card รวมอยู่ใน Black Card โดยไม่ต้องถือสิทธิ์ซ้ำ",
    "bc91.rights.2.title":"Private / Exclusive review",
    "bc91.rights.2.body":"MMD เปิด Private / Exclusive scope เมื่อ entitlement และโอกาสนั้นอนุญาตจริง",
    "bc91.rights.3.title":"Approved private media",
    "bc91.rights.3.body":"เข้าถึง approved Private / Shirtless Pics ที่ผ่าน consent, review และ customer grant แล้ว",
    "bc91.rights.4.title":"Private Cut / selected release",
    "bc91.rights.4.body":"อาจมี TMIB Private Cut หรือ private release เฉพาะ Black Card เมื่อ MMD เปิดในช่วงนั้น",

    "bc91.trust.kicker":"CONTINUITY",
    "bc91.trust.title":"ไม่ต้องเริ่มต้นใหม่ ทุกครั้งที่กลับมา",
    "bc91.trust.body":"Black Card ทำหน้าที่เป็นสถานะอ้างอิงของคุณใน MMD ตลอด 3 ปี เพื่อให้ประวัติ ความชอบ ขอบเขต และวิธีดูแลที่เหมาะกับคุณต่อเนื่องกันได้ แต่ทุก access ยังยึด consent, entitlement, approval และ availability ของทุกฝ่าย",

    "bc91.close.kicker":"NEXT",
    "bc91.close.title":"ถ้าคุณคิดว่า Black Card เหมาะกับคุณ",
    "bc91.close.body":"หน้าถัดไปคือ Black Card Review สำหรับอ่านรายละเอียดก่อนยืนยันขั้นตอน ไม่มีการตัดเงินและยังไม่เปิดสถานะสมาชิกจนกว่า MMD จะตรวจการชำระเงินจริง",
    "bc91.close.review":"ไปต่อที่ Black Card Review",
    "bc91.close.back":"กลับไป SIGIL",

    "bc91.mobile.read":"อ่านต่อ",
    "bc91.mobile.membership.meta":"Black Card · 3 ปี · SĪGIL Card หลังตรวจยืนยันการชำระ",
    "bc91.mobile.foundation.title":"RED CARD INCLUDED",
    "bc91.mobile.foundation.body":"Public privileges ระดับ Red Card รวมอยู่ทั้งหมด และต่อยอด Private เมื่อสิทธิ์และโอกาสพร้อมจริง",
    "bc91.mobile.swipe":"SWIPE สิทธิ์ →",
    "bc91.mobile.swipe.note":"ข้อมูล ไม่ใช่รูปภาพ",
    "bc91.mobile.card1.title":"RED CARD",
    "bc91.mobile.card1.body":"Public privileges ระดับสูงสุดรวมแล้ว",
    "bc91.mobile.card2.title":"PRIVATE",
    "bc91.mobile.card2.body":"Private / Exclusive review ตาม entitlement",
    "bc91.mobile.card3.title":"MEDIA",
    "bc91.mobile.card3.body":"Approved private media ที่ consent แล้ว",
    "bc91.mobile.card4.title":"PRIVATE CUT",
    "bc91.mobile.card4.body":"Selected private release เมื่อ MMD เปิด",
    "bc91.mobile.trust.kicker":"WHY BLACK CARD",
    "bc91.mobile.trust.title":"รู้จักคุณมากขึ้น ดูแลต่อจากเดิม",
    "bc91.mobile.trust.body":"สถานะนี้ช่วยให้ MMD ใช้บริบทที่ยืนยันแล้วต่อเนื่อง ไม่ต้องเริ่มอธิบายใหม่ทุกครั้ง ขณะเดียวกันทุก Private access ยังยึด consent, approval และ availability จริง",
    "bc91.mobile.details.kicker":"PROGRESSIVE DISCLOSURE",
    "bc91.mobile.details.title":"รายละเอียดครบ เปิดอ่านเมื่ออยากรู้",
    "bc91.mobile.acc1.q":"Black Card เหมาะกับใคร",
    "bc91.mobile.acc1.a":"เหมาะกับสมาชิกที่ต้องการความเป็นส่วนตัวสูง ความต่อเนื่อง และเข้าใจขอบเขตของ MMD โดยต้องการให้ MMD รู้จักบริบทของตนมากขึ้นตลอด 3 ปี",
    "bc91.mobile.acc2.q":"Red Card รวมอยู่แค่ไหน",
    "bc91.mobile.acc2.a":"Public privileges ของ Red Card รวมอยู่ใน Black Card แล้ว ไม่จำเป็นต้องซื้อสิทธิ์ซ้ำ ส่วน Private / Exclusive access ยังเปิดตาม entitlement, approval, consent และ availability จริง",
    "bc91.mobile.acc3.q":"ค่า 35,000 บาทคืออะไร",
    "bc91.mobile.acc3.a":"เป็นค่า access membership ระยะเวลา 3 ปีและการออก SĪGIL Card หลัง MMD ตรวจยืนยันการชำระ ไม่ใช้หักค่าจอง ค่า model/service หรือค่าใช้จ่ายเฉพาะงาน",
    "bc91.mobile.acc4.q":"Private access เปิดอัตโนมัติไหม",
    "bc91.mobile.acc4.a":"ไม่อัตโนมัติ ทุกโอกาสยังต้องดู entitlement, approval, consent, availability และความเหมาะสมของคำขอจริงก่อน MMD ยืนยัน",
    "bc91.mobile.final.title":"Black Card Review",
    "bc91.mobile.final.body":"ดูรายละเอียดก่อนยืนยันขั้นตอน — หน้านี้ไม่ตัดเงินและยังไม่เปิดสมาชิกจนกว่า MMD จะตรวจการชำระเงินจริง",
    "bc91.mobile.final.cta":"ไปต่อ"
  });

  Object.assign(I.en,{
    "bc91.hero.kicker":"HIGHEST TRUST / SĪGIL",
    "bc91.hero.subtitle":"The highest level of privilege at MMD Privé",
    "bc91.hero.lead":"Black Card is MMD’s highest membership layer for people we trust to enter the highest TRUST level of the SĪGIL system, with full, continuous care throughout a 3-year membership.",
    "bc91.hero.body":"All Red Card privileges are already included, with further Private / Exclusive opportunities opened according to verified entitlement, approval, consent, and actual availability.",
    "bc91.hero.cta":"Read the details",
    "bc91.axis.years":"YEARS",

    "bc91.membership.kicker":"MEMBERSHIP",
    "bc91.membership.title":"Three years inside the trust.",
    "bc91.membership.desc":"Once the meaning of Black Card is clear, the next question is the membership fee.",
    "bc91.membership.term":"3-year membership",
    "bc91.membership.note":"This is the Black Card access membership fee and includes issuance of the SĪGIL Card after MMD verifies payment. It cannot be used to offset bookings or service fees.",
    "bc91.membership.legend":"RED CARD INCLUDED · PRIVATE REVIEW · HIGHEST TRUST",

    "bc91.rights.kicker":"WHAT IT OPENS",
    "bc91.rights.title":"The highest level of access, not access without boundaries",
    "bc91.rights.1.title":"Red Card included",
    "bc91.rights.1.body":"All highest-level Public privileges of Red Card are included in Black Card, without requiring a second membership.",
    "bc91.rights.2.title":"Private / Exclusive review",
    "bc91.rights.2.body":"MMD may open Private / Exclusive scope when verified entitlement and the specific opportunity allow it.",
    "bc91.rights.3.title":"Approved private media",
    "bc91.rights.3.body":"Access is limited to approved Private / Shirtless Pics that have passed consent, MMD review, and customer grant.",
    "bc91.rights.4.title":"Private Cut / selected release",
    "bc91.rights.4.body":"Black Card may receive TMIB Private Cut or selected private releases when MMD makes them available.",

    "bc91.trust.kicker":"CONTINUITY",
    "bc91.trust.title":"Pick up where you left off",
    "bc91.trust.body":"For 3 years, Black Card acts as a reference status for your relationship with MMD so verified history, preferences, boundaries, and the way we care for you can continue. Every access still follows consent, entitlement, approval, and availability.",

    "bc91.close.kicker":"NEXT",
    "bc91.close.title":"If Black Card feels right for you",
    "bc91.close.body":"The next page is Black Card Review, where you can read the details before confirming the next step. It does not charge you or activate membership until MMD has verified the actual payment.",
    "bc91.close.review":"Continue to Black Card Review",
    "bc91.close.back":"Back to SIGIL",

    "bc91.mobile.read":"Read more",
    "bc91.mobile.membership.meta":"Black Card · 3 years · SĪGIL Card after payment verification",
    "bc91.mobile.foundation.title":"RED CARD INCLUDED",
    "bc91.mobile.foundation.body":"All Red Card Public privileges are included, with Private access added only when your entitlement and the opportunity are ready.",
    "bc91.mobile.swipe":"SWIPE RIGHTS →",
    "bc91.mobile.swipe.note":"Info cards, not an image gallery",
    "bc91.mobile.card1.title":"RED CARD",
    "bc91.mobile.card1.body":"Highest-level Public privileges included",
    "bc91.mobile.card2.title":"PRIVATE",
    "bc91.mobile.card2.body":"Private / Exclusive review by entitlement",
    "bc91.mobile.card3.title":"MEDIA",
    "bc91.mobile.card3.body":"Approved private media with consent",
    "bc91.mobile.card4.title":"PRIVATE CUT",
    "bc91.mobile.card4.body":"Selected private releases when opened by MMD",
    "bc91.mobile.trust.kicker":"WHY BLACK CARD",
    "bc91.mobile.trust.title":"Known better. Cared for continuously.",
    "bc91.mobile.trust.body":"Black Card lets MMD continue from verified context instead of asking you to start over each time. Private access still follows real consent, approval, and availability.",
    "bc91.mobile.details.kicker":"PROGRESSIVE DISCLOSURE",
    "bc91.mobile.details.title":"All the detail, only when you need it",
    "bc91.mobile.acc1.q":"Who is Black Card for?",
    "bc91.mobile.acc1.a":"For members who value high privacy, continuity, and clear boundaries, and who want MMD to understand their verified context more deeply over the 3-year membership.",
    "bc91.mobile.acc2.q":"How much of Red Card is included?",
    "bc91.mobile.acc2.a":"All Red Card Public privileges are included in Black Card. Private / Exclusive access still follows verified entitlement, approval, consent, and availability.",
    "bc91.mobile.acc3.q":"What is the THB 35,000 fee?",
    "bc91.mobile.acc3.a":"It is the 3-year Black Card access membership fee and includes issuance of the SĪGIL Card after payment verification. It cannot be used against booking, model, service, or job-specific fees.",
    "bc91.mobile.acc4.q":"Does Private access open automatically?",
    "bc91.mobile.acc4.a":"No. Each opportunity still depends on entitlement, approval, consent, availability, and the actual fit of the request before MMD confirms it.",
    "bc91.mobile.final.title":"Black Card Review",
    "bc91.mobile.final.body":"Review the details before confirming the next step. This page does not charge you or activate membership until MMD verifies payment.",
    "bc91.mobile.final.cta":"Continue"
  });

  Object.assign(I.zh,{
    "bc91.hero.kicker":"HIGHEST TRUST / SĪGIL",
    "bc91.hero.subtitle":"MMD Privé 最高级别的特别权益",
    "bc91.hero.lead":"Black Card 是 MMD 为高度信任的会员设立的最高级别会员身份，可进入 SĪGIL system 的最高 TRUST 层级，并在 3 年会员期内获得持续、完整的照顾。",
    "bc91.hero.body":"所有 Red Card 权益均已包含，并可在会员权益状态、审批、同意与实际档期允许时，进一步开放 Private / Exclusive opportunities。",
    "bc91.hero.cta":"继续阅读",
    "bc91.axis.years":"YEARS",

    "bc91.membership.kicker":"MEMBERSHIP",
    "bc91.membership.title":"在信任体系中的三年",
    "bc91.membership.desc":"先理解 Black Card 所代表的信任与照顾方式，再进入会员费用这一层。",
    "bc91.membership.term":"3 年会员期",
    "bc91.membership.note":"此费用为 Black Card access membership，并在 MMD 核实付款后包含 SĪGIL Card 的发放；不可抵扣预约或其他服务费用。",
    "bc91.membership.legend":"RED CARD INCLUDED · PRIVATE REVIEW · HIGHEST TRUST",

    "bc91.rights.kicker":"WHAT IT OPENS",
    "bc91.rights.title":"最高级别的权益，不代表没有边界",
    "bc91.rights.1.title":"包含 Red Card",
    "bc91.rights.1.body":"Black Card 已包含 Red Card 的最高级别 Public privileges，无需重复持有另一套会员权益。",
    "bc91.rights.2.title":"Private / Exclusive 审核",
    "bc91.rights.2.body":"仅在会员权益状态与该机会本身允许时，MMD 才会开放 Private / Exclusive scope。",
    "bc91.rights.3.title":"Approved private media",
    "bc91.rights.3.body":"仅可查看已取得同意、通过 MMD 审核并获得 customer grant 的 approved Private / Shirtless Pics。",
    "bc91.rights.4.title":"Private Cut / selected release",
    "bc91.rights.4.body":"当 MMD 正式开放时，Black Card 可获得 TMIB Private Cut 或指定 private release。",

    "bc91.trust.kicker":"CONTINUITY",
    "bc91.trust.title":"每次回来，都不必重新开始",
    "bc91.trust.body":"在 3 年会员期内，Black Card 会作为你与 MMD 之间的参考身份，让已确认的历史、偏好、边界与照顾方式能够延续；所有 access 仍须遵循 consent、entitlement、approval 与 availability。",

    "bc91.close.kicker":"NEXT",
    "bc91.close.title":"如果你认为 Black Card 适合你",
    "bc91.close.body":"下一页是 Black Card Review，可先阅读完整细节再确认下一步。该页面不会直接扣款，也不会在 MMD 核实实际付款前激活会员身份。",
    "bc91.close.review":"前往 Black Card Review",
    "bc91.close.back":"返回 SIGIL",

    "bc91.mobile.read":"继续阅读",
    "bc91.mobile.membership.meta":"Black Card · 3 年 · 核实付款后发放 SĪGIL Card",
    "bc91.mobile.foundation.title":"RED CARD INCLUDED",
    "bc91.mobile.foundation.body":"已包含全部 Red Card Public privileges；Private access 仅在权益状态与具体机会都准备好时开放。",
    "bc91.mobile.swipe":"横向查看权益 →",
    "bc91.mobile.swipe.note":"信息卡，不是图片轮播",
    "bc91.mobile.card1.title":"RED CARD",
    "bc91.mobile.card1.body":"已包含最高级别 Public privileges",
    "bc91.mobile.card2.title":"PRIVATE",
    "bc91.mobile.card2.body":"按 entitlement 审核 Private / Exclusive access",
    "bc91.mobile.card3.title":"MEDIA",
    "bc91.mobile.card3.body":"仅限已取得同意的 approved private media",
    "bc91.mobile.card4.title":"PRIVATE CUT",
    "bc91.mobile.card4.body":"MMD 开放时提供指定 private release",
    "bc91.mobile.trust.kicker":"WHY BLACK CARD",
    "bc91.mobile.trust.title":"更了解你，也能从原来的位置继续照顾",
    "bc91.mobile.trust.body":"Black Card 让 MMD 可以沿用已经确认的背景，不必每次重新说明；Private access 仍须遵循真实的 consent、approval 与 availability。",
    "bc91.mobile.details.kicker":"PROGRESSIVE DISCLOSURE",
    "bc91.mobile.details.title":"信息完整，需要时再展开",
    "bc91.mobile.acc1.q":"Black Card 适合谁？",
    "bc91.mobile.acc1.a":"适合重视高度隐私、持续照顾并理解 MMD 边界的会员，希望 MMD 在 3 年内更深入理解其已确认的使用背景。",
    "bc91.mobile.acc2.q":"Red Card 包含到什么程度？",
    "bc91.mobile.acc2.a":"Black Card 已包含全部 Red Card Public privileges。Private / Exclusive access 仍须依据 verified entitlement、approval、consent 与 availability 开放。",
    "bc91.mobile.acc3.q":"35,000 THB 是什么费用？",
    "bc91.mobile.acc3.a":"这是 3 年 Black Card access membership 费用，并在 MMD 核实付款后包含 SĪGIL Card 的发放；不可抵扣预约、model/service 或单次工作的其他费用。",
    "bc91.mobile.acc4.q":"Private access 会自动开放吗？",
    "bc91.mobile.acc4.a":"不会。每个机会仍须根据 entitlement、approval、consent、availability 与实际需求匹配度，由 MMD 确认后开放。",
    "bc91.mobile.final.title":"Black Card Review",
    "bc91.mobile.final.body":"先查看完整细节，再确认下一步。MMD 核实付款前，本页不会扣款或激活会员身份。",
    "bc91.mobile.final.cta":"继续"
  });

  function onRoute(){
    return (((location.pathname||"/").replace(/\/+$/,"")||"/")==="/blackcard/black-card");
  }

  function setKey(selector,key,root){
    var el=(root||D).querySelector(selector);
    if(el) el.setAttribute("data-i18n-text",key);
  }
  function setAll(selector,key,root){
    var nodes=(root||D).querySelectorAll(selector);
    for(var i=0;i<nodes.length;i++) nodes[i].setAttribute("data-i18n-text",key);
  }
  function setList(selector,keys,root){
    var nodes=(root||D).querySelectorAll(selector);
    for(var i=0;i<nodes.length&&i<keys.length;i++) nodes[i].setAttribute("data-i18n-text",keys[i]);
  }

  function ensureLanguageUI(root){
    if(root.querySelector(".bc91-lang")) return;
    var nav=root.querySelector(".bc91-nav");
    if(!nav) return;
    var box=D.createElement("div");
    box.className="bc91-lang";
    box.setAttribute("aria-label","Language");
    box.innerHTML='<button type="button" data-set-lang="th">TH</button><button type="button" data-set-lang="en">EN</button><button type="button" data-set-lang="zh">中文</button>';
    var meta=nav.querySelector(".bc91-nav-meta");
    if(meta) nav.insertBefore(box,meta); else nav.appendChild(box);

    if(!D.getElementById("bc91-lang-style")){
      var style=D.createElement("style");
      style.id="bc91-lang-style";
      style.textContent=
        '#mmd-blackcard-lv91 .bc91-lang{display:flex;align-items:center;gap:3px;margin-left:auto;margin-right:16px;padding:3px;border:1px solid var(--line2);border-radius:999px;background:rgba(7,7,6,.44);backdrop-filter:blur(12px)}'+
        '#mmd-blackcard-lv91 .bc91-lang button{appearance:none;border:0;border-radius:999px;background:transparent;color:var(--muted);padding:6px 9px;font:700 9px/1 "LINE Seed Sans TH","Noto Sans Thai",sans-serif;letter-spacing:.08em;cursor:pointer}'+
        '#mmd-blackcard-lv91 .bc91-lang button.is-active,#mmd-blackcard-lv91 .bc91-lang button[aria-pressed="true"]{background:var(--gold);color:#11100d}'+
        '@media(max-width:767px){#mmd-blackcard-lv91 .bc91-lang{margin-right:8px}#mmd-blackcard-lv91 .bc91-lang button{padding:5px 7px;font-size:8px}#mmd-blackcard-lv91 .bc91-nav-meta{display:none}}';
      D.head.appendChild(style);
    }
  }

  function bind(){
    if(!onRoute()) return;
    var r=D.getElementById("mmd-blackcard-lv91");
    if(!r) return;

    ensureLanguageUI(r);

    setKey(".d9-copy .bc91-kicker","bc91.hero.kicker",r);
    setKey(".d9-th","bc91.hero.subtitle",r);
    setKey(".d9-lead","bc91.hero.lead",r);
    setKey(".d9-body","bc91.hero.body",r);
    setKey(".d9-copy .bc91-btn span","bc91.hero.cta",r);
    setKey(".d9-axis small","bc91.axis.years",r);

    setKey(".d9-price-copy .bc91-kicker","bc91.membership.kicker",r);
    setKey(".d9-price-copy h2","bc91.membership.title",r);
    setKey(".d9-price-copy>p:not(.bc91-kicker):not(.d9-note)","bc91.membership.desc",r);
    setKey(".d9-term span","bc91.membership.term",r);
    setKey(".d9-note","bc91.membership.note",r);
    setKey(".d9-card-art p","bc91.membership.legend",r);

    setKey(".d9-rights-copy .bc91-kicker","bc91.rights.kicker",r);
    setKey(".d9-rights-copy h2","bc91.rights.title",r);
    var rights=r.querySelectorAll(".d9-right-list article");
    for(var i=0;i<rights.length&&i<4;i++){
      setKey("b","bc91.rights."+(i+1)+".title",rights[i]);
      setKey("p","bc91.rights."+(i+1)+".body",rights[i]);
    }

    setKey(".d9-trust-copy .bc91-kicker","bc91.trust.kicker",r);
    setKey(".d9-trust-copy h2","bc91.trust.title",r);
    setKey(".d9-trust-copy>p:last-child","bc91.trust.body",r);

    setKey(".d9-close-copy .bc91-kicker","bc91.close.kicker",r);
    setKey(".d9-close-copy h2","bc91.close.title",r);
    setKey(".d9-close-copy>p:last-of-type","bc91.close.body",r);
    setKey(".d9-actions .bc91-btn-gold span","bc91.close.review",r);
    setKey(".d9-actions .bc91-btn-line","bc91.close.back",r);

    setKey(".m9-hero-copy .bc91-kicker","bc91.hero.kicker",r);
    setKey(".m9-hero-copy h2","bc91.hero.subtitle",r);
    setKey(".m9-hero-copy>p:last-child","bc91.hero.lead",r);
    setKey(".m9-down span","bc91.mobile.read",r);

    setKey(".m9-membership-top .bc91-kicker","bc91.membership.kicker",r);
    setKey(".m9-membership-top>div>p:last-child","bc91.mobile.membership.meta",r);
    setKey(".m9-foundation b","bc91.mobile.foundation.title",r);
    setKey(".m9-foundation p","bc91.mobile.foundation.body",r);
    setKey(".m9-swipe-head p","bc91.mobile.swipe",r);
    setKey(".m9-swipe-head span","bc91.mobile.swipe.note",r);
    var cards=r.querySelectorAll(".m9-swipe article");
    for(var c=0;c<cards.length&&c<4;c++){
      setKey("b","bc91.mobile.card"+(c+1)+".title",cards[c]);
      setKey("p","bc91.mobile.card"+(c+1)+".body",cards[c]);
    }

    setKey(".m9-trust-copy .bc91-kicker","bc91.mobile.trust.kicker",r);
    setKey(".m9-trust-copy h2","bc91.mobile.trust.title",r);
    setKey(".m9-trust-copy>p:not(.bc91-kicker)","bc91.mobile.trust.body",r);

    setKey(".m9-details-head .bc91-kicker","bc91.mobile.details.kicker",r);
    setKey(".m9-details-head h2","bc91.mobile.details.title",r);
    var acc=r.querySelectorAll(".m9-accordion details");
    for(var a=0;a<acc.length&&a<4;a++){
      setKey("summary span","bc91.mobile.acc"+(a+1)+".q",acc[a]);
      setKey("details>div,div","bc91.mobile.acc"+(a+1)+".a",acc[a]);
    }

    setKey(".m9-final-copy .bc91-kicker","bc91.close.kicker",r);
    setKey(".m9-final-copy h2","bc91.mobile.final.title",r);
    setKey(".m9-final-copy p:not(.bc91-kicker)","bc91.mobile.final.body",r);
    setKey(".m9-final-copy .bc91-btn span","bc91.mobile.final.cta",r);

    r.setAttribute("data-mmd-i18n-bundle","blackcard-black-card");
    if(W.MMD_I18N&&typeof W.MMD_I18N.apply==="function") W.MMD_I18N.apply(r);
  }

  function refresh(){
    if(!onRoute()) return;
    var r=D.getElementById("mmd-blackcard-lv91");
    if(r&&W.MMD_I18N&&typeof W.MMD_I18N.apply==="function") W.MMD_I18N.apply(r);
  }

  D.addEventListener("mmd:i18n:ready",function(){bind();refresh();});
  D.addEventListener("mmd:i18n:change",refresh);
  if(D.readyState==="loading") D.addEventListener("DOMContentLoaded",bind); else bind();
})();