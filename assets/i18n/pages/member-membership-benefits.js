/* MMD Prive · SIGIL Member Membership Benefits · canonical TH/EN/ZH i18n
   Route: /sigil/member/membership/benefits
   2026-09-09
*/
(function(){
  "use strict";

  var W=window,D=document;
  W.I18N_DICT=W.I18N_DICT||{};
  var I=W.I18N_DICT;
  I.th=I.th||{}; I.en=I.en||{}; I.zh=I.zh||{};

  Object.assign(I.th,{
    "memberBenefits.brand.kicker":"SIGIL MEMBER",
    "memberBenefits.brand.name":"PRIVATE MEMBERSHIP",
    "memberBenefits.home":"MEMBER HOME",
    "memberBenefits.hero.cap":"PRIVATE · VERIFIED ACCESS",
    "memberBenefits.hero.kicker":"PRIVATE MEMBERSHIP BENEFITS",
    "memberBenefits.hero.title":"Benefits",
    "memberBenefits.hero.subtitle":"สิทธิ์ที่ค่อย ๆ เปิดตามระดับที่ยืนยันแล้ว",
    "memberBenefits.hero.lead":"ไม่ต้องจำตารางยาว ๆ ครับ เริ่มจากดูว่าระดับไหนตรงกับการใช้งานของคุณ แล้วค่อยเปิดรายละเอียดเฉพาะส่วนที่อยากรู้",
    "memberBenefits.hero.truthLabel":"VERIFIED ACCESS",
    "memberBenefits.hero.truth":"สิทธิ์จริงอ้างอิงสถานะที่ MMD ยืนยันแล้ว ไม่ได้เปิดเพียงเพราะเห็นหน้านี้ เลือกแพ็กเกจ ชำระเงิน หรือส่งหลักฐาน",
    "memberBenefits.cta.membership":"ดู Membership ที่เหมาะกับคุณ",
    "memberBenefits.cta.status":"เช็กสถานะของฉัน",
    "memberBenefits.rail.levels":"Levels",
    "memberBenefits.rail.experience":"Experience",
    "memberBenefits.rail.details":"Details",
    "memberBenefits.rail.continue":"Continue",
    "memberBenefits.levels.kicker":"ACCESS LAYERS · SWIPE",
    "memberBenefits.levels.title":"เริ่มจากระดับที่ใช้จริง",
    "memberBenefits.levels.desc":"ปัดซ้าย–ขวาเพื่อดูภาพรวม แต่ละระดับบอกเฉพาะสิ่งที่ต่างกัน ส่วนรายละเอียดพับไว้ด้านล่าง",
    "memberBenefits.level.details":"ดูรายละเอียด",
    "memberBenefits.guest.kind":"01 · TRIAL",
    "memberBenefits.guest.term":"7 DAYS",
    "memberBenefits.guest.name":"Guest Pass",
    "memberBenefits.guest.price":"1,499",
    "memberBenefits.guest.unit":"THB",
    "memberBenefits.guest.desc":"ทดลองทำความรู้จัก Private Membership ก่อนเลือกสมาชิกแบบรายปี",
    "memberBenefits.guest.b1":"ทดลอง workflow 7 วัน",
    "memberBenefits.guest.b2":"ดูขั้นตอนการค้นหาและการดูแล",
    "memberBenefits.guest.b3":"ยังไม่ใช่ Standard / Premium",
    "memberBenefits.standard.kind":"02 · STANDARD",
    "memberBenefits.standard.term":"1 YEAR",
    "memberBenefits.standard.name":"Standard",
    "memberBenefits.standard.price":"1,199",
    "memberBenefits.standard.unit":"THB / YEAR",
    "memberBenefits.standard.desc":"จุดเริ่มต้นของ Private Membership สำหรับการใช้งานต่อเนื่อง",
    "memberBenefits.standard.b1":"Public + Standard Private ตามสถานะ",
    "memberBenefits.standard.b2":"Member Dashboard",
    "memberBenefits.standard.b3":"Points และ renewal path",
    "memberBenefits.premium.kind":"03 · PREMIUM",
    "memberBenefits.premium.term":"1 YEAR",
    "memberBenefits.premium.name":"Premium",
    "memberBenefits.premium.price":"2,999",
    "memberBenefits.premium.unit":"THB / YEAR",
    "memberBenefits.premium.desc":"เพิ่มระดับตัวเลือกและบริบท Private ที่ลึกขึ้นจาก Standard",
    "memberBenefits.premium.b1":"รวมสิทธิ์ Standard ที่ยืนยันแล้ว",
    "memberBenefits.premium.b2":"เพิ่ม Premium Private access",
    "memberBenefits.premium.b3":"เหมาะกับการใช้ Private บ่อยขึ้น",
    "memberBenefits.curated.kind":"04 · CURATED",
    "memberBenefits.curated.term":"VIP / SVIP",
    "memberBenefits.curated.name":"Curated",
    "memberBenefits.curated.price":"By status",
    "memberBenefits.curated.unit":"VERIFIED",
    "memberBenefits.curated.desc":"ระดับที่ MMD เปิดตามประวัติ ความเหมาะสม และสถานะที่ตรวจสอบแล้ว",
    "memberBenefits.curated.b1":"Curated VIP / SVIP access",
    "memberBenefits.curated.b2":"ไม่ใช่แพ็กเกจซื้อทั่วไป",
    "memberBenefits.curated.b3":"ชื่อและ code เปิดเฉพาะผู้มีสิทธิ์",
    "memberBenefits.mini.title":"ยังไม่แน่ใจว่าจะเลือกระดับไหน?",
    "memberBenefits.mini.desc":"กลับไปดูราคาและเลือกแพ็กเกจจากหน้า Membership ได้เลย",
    "memberBenefits.mini.cta":"เปิด Membership",
    "memberBenefits.experience.kicker":"MEMBER EXPERIENCE · SWIPE",
    "memberBenefits.experience.title":"สิทธิ์ไม่ได้มีแค่รายชื่อ Model",
    "memberBenefits.experience.desc":"สิ่งสำคัญคือเข้าถึงข้อมูลที่เหมาะกับคุณ มีบริบทพอให้ตัดสินใจ และกลับมาใช้ต่อได้โดยไม่ต้องเริ่มใหม่ทุกครั้ง",
    "memberBenefits.access.kicker":"01 · ACCESS",
    "memberBenefits.access.title":"เห็นเฉพาะสิ่งที่ระดับของคุณเปิดได้",
    "memberBenefits.access.desc":"ระบบใช้สถานะที่ยืนยันแล้วเป็นตัวกำหนด access ไม่ใช่หน้าเว็บหรือ query string",
    "memberBenefits.context.kicker":"02 · CONTEXT",
    "memberBenefits.context.title":"มีคนช่วยตีความสิ่งที่คุณกำลังหา",
    "memberBenefits.context.desc":"Kenji ช่วยอธิบายและพาไปต่อ แต่ไม่อนุมัติ entitlement แทนระบบ",
    "memberBenefits.continuity.kicker":"03 · CONTINUITY",
    "memberBenefits.continuity.title":"กลับมาใช้ต่อโดยไม่ต้องเริ่มจากศูนย์",
    "memberBenefits.continuity.desc":"Dashboard, renewal และประวัติที่ยืนยันแล้วช่วยให้การดูแลต่อเนื่องขึ้น",
    "memberBenefits.swipe":"swipe to explore",
    "memberBenefits.details.kicker":"PROGRESSIVE DISCLOSURE",
    "memberBenefits.details.title":"อยากรู้เรื่องไหน ค่อยเปิดตรงนั้น",
    "memberBenefits.details.desc":"ข้อมูลที่ยาวถูกพับไว้ให้หน้าไม่แน่นเกินไป กดเครื่องหมาย + เพื่อเปิดเฉพาะหัวข้อที่ต้องการ",
    "memberBenefits.acc.guest.title":"Guest Pass ต่างจากสมาชิกจริงอย่างไร",
    "memberBenefits.acc.guest.body":"Guest Pass เป็นช่วงทดลอง 7 วันเพื่อทำความรู้จัก Private Membership ยังไม่ใช่ Standard หรือ Premium และบางสิทธิ์ยังขึ้นอยู่กับการตรวจสอบของ MMD",
    "memberBenefits.acc.guest.cta":"ดูแพ็กเกจ",
    "memberBenefits.acc.standard.title":"Standard เปิดอะไรให้บ้าง",
    "memberBenefits.acc.standard.body":"เมื่อ Standard Active ได้รับการยืนยัน ระบบจึงเปิด Public และ Standard Private access ตาม Entitlement Resolver พร้อมพื้นที่ Member Dashboard และเส้นทาง renewal ที่เกี่ยวข้อง",
    "memberBenefits.acc.standard.cta":"เปิด Member Dashboard",
    "memberBenefits.acc.premium.title":"Premium เพิ่มอะไรจาก Standard",
    "memberBenefits.acc.premium.body":"Premium Active เพิ่ม Premium Private access จาก Standard โดยยังอิงสถานะจริงของสมาชิกและการเปิดข้อมูลตามสิทธิ์ ไม่ใช่การเปิดชื่อหรือ code ทั้งหมดแบบสาธารณะ",
    "memberBenefits.acc.premium.cta":"ดู Premium",
    "memberBenefits.acc.curated.title":"VIP / SVIP และ Curated Access",
    "memberBenefits.acc.curated.body":"VIP และ SVIP เป็น curated access ที่ MMD เปิดตามประวัติและสถานะที่ยืนยันแล้ว ไม่ใช่แพ็กเกจที่ซื้อจากหน้านี้ และผู้ที่ inactive หรือ expired จะไม่เห็นชื่อหรือ code Private",
    "memberBenefits.acc.curated.cta":"เช็กสถานะของฉัน",
    "memberBenefits.acc.renewal.title":"Points และ Renewal คิดอย่างไร",
    "memberBenefits.acc.renewal.body":"Points และอัตราต่ออายุขึ้นกับข้อมูลที่ระบบยืนยันและเงื่อนไขปัจจุบัน จึงแยกไปไว้ในหน้า Renewal เพื่อไม่ให้หน้า Benefits กลายเป็นตารางราคาเก่า",
    "memberBenefits.acc.renewal.cta":"ดู Renewal",
    "memberBenefits.acc.blackcard.title":"Black Card อยู่ตรงไหนของระบบ",
    "memberBenefits.acc.blackcard.body":"Black Card ไม่ถูกวางเป็นแพ็กเกจซื้อทั่วไปในหน้า Benefits นี้ การพิจารณาอิงประวัติ ความเหมาะสม และเงื่อนไขภายใน MMD",
    "memberBenefits.acc.blackcard.cta":"อ่าน Black Card",
    "memberBenefits.kenji.kicker":"KENJI / MEMBER CONCIERGE",
    "memberBenefits.kenji.title":"ให้ Kenji ช่วยพาไปต่อได้ แต่สิทธิ์จริงให้ระบบเป็นคนตอบ",
    "memberBenefits.kenji.body":"ถ้าสงสัยว่าแพ็กเกจไหนเหมาะกับการใช้งาน Kenji ช่วยอธิบายได้ครับ ส่วนสถานะ สิทธิ์ Points และ access จะอ้างอิงข้อมูลที่ MMD ยืนยันแล้วเท่านั้น",
    "memberBenefits.final.kicker":"NEXT STEP",
    "memberBenefits.final.title":"พร้อมแล้ว เลือกทางที่ตรงกับคุณ",
    "memberBenefits.final.body":"ถ้ายังไม่ได้เป็นสมาชิก ให้กลับไปเลือกแพ็กเกจ ถ้ามีบัญชีอยู่แล้ว ให้เช็กสถานะจริงจาก Member Dashboard ก่อนครับ",
    "memberBenefits.final.membership":"เลือก Membership",
    "memberBenefits.final.dashboard":"Member Dashboard",
    "memberBenefits.final.note":"การเปิดสิทธิ์จริงยังขึ้นอยู่กับ canonical membership state และการตรวจสอบของ MMD",
    "memberBenefits.sticky.membership":"เลือก Membership",
    "memberBenefits.sticky.dashboard":"My MMD"
  });

  Object.assign(I.en,{
    "memberBenefits.brand.kicker":"SIGIL MEMBER",
    "memberBenefits.brand.name":"PRIVATE MEMBERSHIP",
    "memberBenefits.home":"MEMBER HOME",
    "memberBenefits.hero.cap":"PRIVATE · VERIFIED ACCESS",
    "memberBenefits.hero.kicker":"PRIVATE MEMBERSHIP BENEFITS",
    "memberBenefits.hero.title":"Benefits",
    "memberBenefits.hero.subtitle":"Benefits that open progressively with your verified level",
    "memberBenefits.hero.lead":"No need to memorise a long table. Start with the level that fits how you use MMD, then open only the details you need.",
    "memberBenefits.hero.truthLabel":"VERIFIED ACCESS",
    "memberBenefits.hero.truth":"Real access follows the membership status verified by MMD. It does not open simply because this page is visible, a package was selected, payment was made, or proof was sent.",
    "memberBenefits.cta.membership":"Find the membership for you",
    "memberBenefits.cta.status":"Check my status",
    "memberBenefits.rail.levels":"Levels",
    "memberBenefits.rail.experience":"Experience",
    "memberBenefits.rail.details":"Details",
    "memberBenefits.rail.continue":"Continue",
    "memberBenefits.levels.kicker":"ACCESS LAYERS · SWIPE",
    "memberBenefits.levels.title":"Start with the level you actually use",
    "memberBenefits.levels.desc":"Swipe to compare the overall structure. Each level shows only what changes; deeper details stay folded below.",
    "memberBenefits.level.details":"View details",
    "memberBenefits.guest.kind":"01 · TRIAL",
    "memberBenefits.guest.term":"7 DAYS",
    "memberBenefits.guest.name":"Guest Pass",
    "memberBenefits.guest.price":"1,499",
    "memberBenefits.guest.unit":"THB",
    "memberBenefits.guest.desc":"Try the Private Membership workflow before choosing an annual plan.",
    "memberBenefits.guest.b1":"7-day trial workflow",
    "memberBenefits.guest.b2":"See how discovery and concierge support work",
    "memberBenefits.guest.b3":"Not yet Standard / Premium",
    "memberBenefits.standard.kind":"02 · STANDARD",
    "memberBenefits.standard.term":"1 YEAR",
    "memberBenefits.standard.name":"Standard",
    "memberBenefits.standard.price":"1,199",
    "memberBenefits.standard.unit":"THB / YEAR",
    "memberBenefits.standard.desc":"The starting point for ongoing Private Membership use.",
    "memberBenefits.standard.b1":"Public + Standard Private, subject to verified status",
    "memberBenefits.standard.b2":"Member Dashboard",
    "memberBenefits.standard.b3":"Points and renewal path",
    "memberBenefits.premium.kind":"03 · PREMIUM",
    "memberBenefits.premium.term":"1 YEAR",
    "memberBenefits.premium.name":"Premium",
    "memberBenefits.premium.price":"2,999",
    "memberBenefits.premium.unit":"THB / YEAR",
    "memberBenefits.premium.desc":"A deeper level of Private choice and context beyond Standard.",
    "memberBenefits.premium.b1":"Includes verified Standard benefits",
    "memberBenefits.premium.b2":"Adds Premium Private access",
    "memberBenefits.premium.b3":"Designed for more frequent Private use",
    "memberBenefits.curated.kind":"04 · CURATED",
    "memberBenefits.curated.term":"VIP / SVIP",
    "memberBenefits.curated.name":"Curated",
    "memberBenefits.curated.price":"By status",
    "memberBenefits.curated.unit":"VERIFIED",
    "memberBenefits.curated.desc":"Access opened by MMD based on history, fit, and verified status.",
    "memberBenefits.curated.b1":"Curated VIP / SVIP access",
    "memberBenefits.curated.b2":"Not a general purchase package",
    "memberBenefits.curated.b3":"Names and codes appear only for eligible members",
    "memberBenefits.mini.title":"Not sure which level fits?",
    "memberBenefits.mini.desc":"Return to Membership to compare prices and choose a package.",
    "memberBenefits.mini.cta":"Open Membership",
    "memberBenefits.experience.kicker":"MEMBER EXPERIENCE · SWIPE",
    "memberBenefits.experience.title":"Benefits go beyond a list of Models",
    "memberBenefits.experience.desc":"What matters is access to information suited to you, enough context to decide, and continuity when you return without starting over every time.",
    "memberBenefits.access.kicker":"01 · ACCESS",
    "memberBenefits.access.title":"See only what your verified level can open",
    "memberBenefits.access.desc":"Access is determined by verified status, not by the page itself or a query string.",
    "memberBenefits.context.kicker":"02 · CONTEXT",
    "memberBenefits.context.title":"Someone helps interpret what you are looking for",
    "memberBenefits.context.desc":"Kenji can explain and guide the next step, but cannot approve entitlement instead of the system.",
    "memberBenefits.continuity.kicker":"03 · CONTINUITY",
    "memberBenefits.continuity.title":"Pick up where you left off",
    "memberBenefits.continuity.desc":"Your Dashboard, renewal status, and verified history help MMD continue the experience without resetting the context.",
    "memberBenefits.swipe":"swipe to explore",
    "memberBenefits.details.kicker":"PROGRESSIVE DISCLOSURE",
    "memberBenefits.details.title":"Open only the detail you need",
    "memberBenefits.details.desc":"Longer information stays folded so the page remains easy to scan. Tap + to open only the topic you want.",
    "memberBenefits.acc.guest.title":"How is Guest Pass different from membership?",
    "memberBenefits.acc.guest.body":"Guest Pass is a 7-day introduction to the Private Membership workflow. It is not Standard or Premium yet, and some access still depends on MMD verification.",
    "memberBenefits.acc.guest.cta":"View packages",
    "memberBenefits.acc.standard.title":"What does Standard open?",
    "memberBenefits.acc.standard.body":"Once Standard Active is verified, the Entitlement Resolver can open Public and Standard Private access, together with the Member Dashboard and the relevant renewal path.",
    "memberBenefits.acc.standard.cta":"Open Member Dashboard",
    "memberBenefits.acc.premium.title":"What does Premium add to Standard?",
    "memberBenefits.acc.premium.body":"Premium Active adds Premium Private access on top of Standard while still following verified membership status and entitlement-based disclosure. It does not expose every private name or code publicly.",
    "memberBenefits.acc.premium.cta":"View Premium",
    "memberBenefits.acc.curated.title":"VIP / SVIP and Curated Access",
    "memberBenefits.acc.curated.body":"VIP and SVIP are curated access levels opened by MMD from verified history and status. They are not packages sold from this page, and inactive or expired members do not receive private names or codes.",
    "memberBenefits.acc.curated.cta":"Check my status",
    "memberBenefits.acc.renewal.title":"How do Points and Renewal work?",
    "memberBenefits.acc.renewal.body":"Points and renewal rates depend on verified records and current conditions, so they live on the Renewal page rather than turning Benefits into an outdated price table.",
    "memberBenefits.acc.renewal.cta":"View Renewal",
    "memberBenefits.acc.blackcard.title":"Where does Black Card fit?",
    "memberBenefits.acc.blackcard.body":"Black Card is not presented here as a general purchase package. Consideration follows MMD history, suitability, and internal conditions.",
    "memberBenefits.acc.blackcard.cta":"Read Black Card",
    "memberBenefits.kenji.kicker":"KENJI / MEMBER CONCIERGE",
    "memberBenefits.kenji.title":"Kenji can guide the next step; the system confirms the actual entitlement",
    "memberBenefits.kenji.body":"If you are unsure which package fits how you use MMD, Kenji can explain the options. Status, benefits, Points, and access still follow MMD-verified data only.",
    "memberBenefits.final.kicker":"NEXT STEP",
    "memberBenefits.final.title":"Ready? Choose the path that fits you",
    "memberBenefits.final.body":"If you are not a member yet, return to Membership to choose a package. If you already have an account, check your verified status in Member Dashboard first.",
    "memberBenefits.final.membership":"Choose Membership",
    "memberBenefits.final.dashboard":"Member Dashboard",
    "memberBenefits.final.note":"Actual access still depends on the canonical membership state and MMD verification.",
    "memberBenefits.sticky.membership":"Choose Membership",
    "memberBenefits.sticky.dashboard":"My MMD"
  });

  Object.assign(I.zh,{
    "memberBenefits.brand.kicker":"SIGIL MEMBER",
    "memberBenefits.brand.name":"PRIVATE MEMBERSHIP",
    "memberBenefits.home":"会员主页",
    "memberBenefits.hero.cap":"PRIVATE · VERIFIED ACCESS",
    "memberBenefits.hero.kicker":"PRIVATE MEMBERSHIP BENEFITS",
    "memberBenefits.hero.title":"Benefits",
    "memberBenefits.hero.subtitle":"权益会随已验证等级逐步开放",
    "memberBenefits.hero.lead":"不需要记住一长张表。先看哪一等级最符合你的使用方式，再按需展开细节。",
    "memberBenefits.hero.truthLabel":"已验证权益",
    "memberBenefits.hero.truth":"实际权益以 MMD 已验证的会员状态为准。仅仅看到本页、选择套餐、付款或提交凭证，都不会自动开放权益。",
    "memberBenefits.cta.membership":"查看适合你的 Membership",
    "memberBenefits.cta.status":"查看我的状态",
    "memberBenefits.rail.levels":"等级",
    "memberBenefits.rail.experience":"体验",
    "memberBenefits.rail.details":"详情",
    "memberBenefits.rail.continue":"下一步",
    "memberBenefits.levels.kicker":"ACCESS LAYERS · SWIPE",
    "memberBenefits.levels.title":"从你实际使用的等级开始",
    "memberBenefits.levels.desc":"左右滑动查看整体差异。每个等级只显示变化的部分，更深入的说明会收在下方。",
    "memberBenefits.level.details":"查看详情",
    "memberBenefits.guest.kind":"01 · TRIAL",
    "memberBenefits.guest.term":"7 DAYS",
    "memberBenefits.guest.name":"Guest Pass",
    "memberBenefits.guest.price":"1,499",
    "memberBenefits.guest.unit":"THB",
    "memberBenefits.guest.desc":"先体验 Private Membership 的使用流程，再决定是否选择年度会员。",
    "memberBenefits.guest.b1":"7 天体验流程",
    "memberBenefits.guest.b2":"了解筛选与 Concierge 支持方式",
    "memberBenefits.guest.b3":"尚不是 Standard / Premium",
    "memberBenefits.standard.kind":"02 · STANDARD",
    "memberBenefits.standard.term":"1 YEAR",
    "memberBenefits.standard.name":"Standard",
    "memberBenefits.standard.price":"1,199",
    "memberBenefits.standard.unit":"THB / YEAR",
    "memberBenefits.standard.desc":"持续使用 Private Membership 的起始等级。",
    "memberBenefits.standard.b1":"按已验证状态开放 Public + Standard Private",
    "memberBenefits.standard.b2":"Member Dashboard",
    "memberBenefits.standard.b3":"Points 与 renewal 路径",
    "memberBenefits.premium.kind":"03 · PREMIUM",
    "memberBenefits.premium.term":"1 YEAR",
    "memberBenefits.premium.name":"Premium",
    "memberBenefits.premium.price":"2,999",
    "memberBenefits.premium.unit":"THB / YEAR",
    "memberBenefits.premium.desc":"在 Standard 之上，开放更深入的 Private 选择与背景信息。",
    "memberBenefits.premium.b1":"包含已验证的 Standard 权益",
    "memberBenefits.premium.b2":"增加 Premium Private access",
    "memberBenefits.premium.b3":"适合更频繁使用 Private 服务",
    "memberBenefits.curated.kind":"04 · CURATED",
    "memberBenefits.curated.term":"VIP / SVIP",
    "memberBenefits.curated.name":"Curated",
    "memberBenefits.curated.price":"按状态开放",
    "memberBenefits.curated.unit":"VERIFIED",
    "memberBenefits.curated.desc":"MMD 会根据历史、适配度与已验证状态开放此等级。",
    "memberBenefits.curated.b1":"Curated VIP / SVIP access",
    "memberBenefits.curated.b2":"不是一般公开购买的套餐",
    "memberBenefits.curated.b3":"姓名与 code 仅向符合资格的会员开放",
    "memberBenefits.mini.title":"还不确定哪个等级适合你？",
    "memberBenefits.mini.desc":"回到 Membership 页面比较价格并选择套餐即可。",
    "memberBenefits.mini.cta":"打开 Membership",
    "memberBenefits.experience.kicker":"MEMBER EXPERIENCE · SWIPE",
    "memberBenefits.experience.title":"权益不只是一份 Model 名单",
    "memberBenefits.experience.desc":"更重要的是看到与你匹配的信息、有足够背景做决定，并在下次回来时可以继续，而不是每次都从零开始。",
    "memberBenefits.access.kicker":"01 · ACCESS",
    "memberBenefits.access.title":"只看到你的已验证等级可开放的内容",
    "memberBenefits.access.desc":"Access 由已验证状态决定，不由页面本身或 query string 决定。",
    "memberBenefits.context.kicker":"02 · CONTEXT",
    "memberBenefits.context.title":"有人帮你理解自己正在寻找什么",
    "memberBenefits.context.desc":"Kenji 可以解释并带你进入下一步，但不会代替系统批准 entitlement。",
    "memberBenefits.continuity.kicker":"03 · CONTINUITY",
    "memberBenefits.continuity.title":"回来时可以从上次继续",
    "memberBenefits.continuity.desc":"Dashboard、renewal 状态与已验证历史，让后续服务可以延续，不必每次重新开始。",
    "memberBenefits.swipe":"滑动查看更多",
    "memberBenefits.details.kicker":"PROGRESSIVE DISCLOSURE",
    "memberBenefits.details.title":"想知道哪一项，再打开哪一项",
    "memberBenefits.details.desc":"较长的信息会先收起，让页面保持清楚。点击 + 只展开你需要的主题。",
    "memberBenefits.acc.guest.title":"Guest Pass 与正式会员有什么不同？",
    "memberBenefits.acc.guest.body":"Guest Pass 是 7 天的 Private Membership 流程体验，目前还不是 Standard 或 Premium，部分权益仍需 MMD 验证后开放。",
    "memberBenefits.acc.guest.cta":"查看套餐",
    "memberBenefits.acc.standard.title":"Standard 会开放哪些内容？",
    "memberBenefits.acc.standard.body":"Standard Active 验证通过后，Entitlement Resolver 才会按状态开放 Public 与 Standard Private access，并提供 Member Dashboard 及相应 renewal 路径。",
    "memberBenefits.acc.standard.cta":"打开 Member Dashboard",
    "memberBenefits.acc.premium.title":"Premium 比 Standard 多什么？",
    "memberBenefits.acc.premium.body":"Premium Active 会在 Standard 基础上增加 Premium Private access，同时仍以真实会员状态和 entitlement 为准，不会公开开放全部 private 姓名或 code。",
    "memberBenefits.acc.premium.cta":"查看 Premium",
    "memberBenefits.acc.curated.title":"VIP / SVIP 与 Curated Access",
    "memberBenefits.acc.curated.body":"VIP 与 SVIP 是 MMD 根据已验证历史与状态开放的 curated access，并不是本页公开销售的套餐。inactive 或 expired 状态不会获得 Private 姓名或 code。",
    "memberBenefits.acc.curated.cta":"查看我的状态",
    "memberBenefits.acc.renewal.title":"Points 与 Renewal 如何计算？",
    "memberBenefits.acc.renewal.body":"Points 与续费价格取决于已验证记录和当前条件，因此统一放在 Renewal 页面，避免 Benefits 变成过时的价格表。",
    "memberBenefits.acc.renewal.cta":"查看 Renewal",
    "memberBenefits.acc.blackcard.title":"Black Card 在系统中是什么位置？",
    "memberBenefits.acc.blackcard.body":"Black Card 不会在本页作为一般公开购买的套餐展示。是否适用会根据 MMD 历史、适配度与内部条件评估。",
    "memberBenefits.acc.blackcard.cta":"了解 Black Card",
    "memberBenefits.kenji.kicker":"KENJI / MEMBER CONCIERGE",
    "memberBenefits.kenji.title":"Kenji 可以帮你继续下一步，实际权益仍由系统确认",
    "memberBenefits.kenji.body":"如果不确定哪一个套餐更适合你的使用方式，Kenji 可以协助说明；但会员状态、权益、Points 与 access 只以 MMD 已验证的数据为准。",
    "memberBenefits.final.kicker":"NEXT STEP",
    "memberBenefits.final.title":"准备好了，就选择适合你的下一步",
    "memberBenefits.final.body":"如果还不是会员，请回到 Membership 选择套餐；如果已有账户，建议先在 Member Dashboard 查看已验证状态。",
    "memberBenefits.final.membership":"选择 Membership",
    "memberBenefits.final.dashboard":"Member Dashboard",
    "memberBenefits.final.note":"实际权益开放仍以 canonical membership state 与 MMD 验证结果为准。",
    "memberBenefits.sticky.membership":"选择 Membership",
    "memberBenefits.sticky.dashboard":"My MMD"
  });

  function onRoute(){
    return ((location.pathname||"/").replace(/\/+$/,"/").replace(/\/$/,"")||"/")==="/sigil/member/membership/benefits";
  }

  function setKey(selector,key,root){
    var el=(root||D).querySelector(selector);
    if(el) el.setAttribute("data-i18n-text",key);
  }

  function setList(selector,keys,root){
    var nodes=(root||D).querySelectorAll(selector);
    for(var i=0;i<nodes.length&&i<keys.length;i++) nodes[i].setAttribute("data-i18n-text",keys[i]);
  }

  function bind(){
    if(!onRoute()) return;
    var r=D.getElementById("mmdBenefitsFullV4");
    if(!r) return;

    setKey(".bf4-brand b","memberBenefits.brand.kicker",r);
    setKey(".bf4-brand small","memberBenefits.brand.name",r);
    setKey(".bf4-home","memberBenefits.home",r);
    setKey(".bf4-hero-cap","memberBenefits.hero.cap",r);
    setKey(".bf4-hero-copy>.bf4-k","memberBenefits.hero.kicker",r);
    setKey(".bf4-hero h1","memberBenefits.hero.title",r);
    setKey(".bf4-hero h2","memberBenefits.hero.subtitle",r);
    setKey(".bf4-lead","memberBenefits.hero.lead",r);
    setKey(".bf4-truth b","memberBenefits.hero.truthLabel",r);
    setKey(".bf4-truth p","memberBenefits.hero.truth",r);
    setList(".bf4-hero .bf4-actions .bf4-btn",["memberBenefits.cta.membership","memberBenefits.cta.status"],r);
    setList(".bf4-rail a",["memberBenefits.rail.levels","memberBenefits.rail.experience","memberBenefits.rail.details","memberBenefits.rail.continue"],r);

    setKey("#bf4-levels .bf4-head .bf4-k","memberBenefits.levels.kicker",r);
    setKey("#bf4-levels .bf4-head h2","memberBenefits.levels.title",r);
    setKey("#bf4-levels .bf4-head>p:last-child","memberBenefits.levels.desc",r);

    ["guest","standard","premium","curated"].forEach(function(tier){
      var card=r.querySelector('[data-tier="'+tier+'"]');
      if(!card) return;
      setKey(".bf4-level-top span","memberBenefits."+tier+".kind",card);
      setKey(".bf4-level-top em","memberBenefits."+tier+".term",card);
      setKey("h3","memberBenefits."+tier+".name",card);
      setKey(".bf4-price strong","memberBenefits."+tier+".price",card);
      setKey(".bf4-price span","memberBenefits."+tier+".unit",card);
      setKey(":scope>p:not(.bf4-price)","memberBenefits."+tier+".desc",card);
      setList("ul li",["memberBenefits."+tier+".b1","memberBenefits."+tier+".b2","memberBenefits."+tier+".b3"],card);
    });

    setKey(".bf4-mini-cta b","memberBenefits.mini.title",r);
    setKey(".bf4-mini-cta span","memberBenefits.mini.desc",r);
    setKey(".bf4-mini-cta .bf4-btn","memberBenefits.mini.cta",r);

    setKey("#bf4-experience .bf4-head .bf4-k","memberBenefits.experience.kicker",r);
    setKey("#bf4-experience .bf4-head h2","memberBenefits.experience.title",r);
    setKey("#bf4-experience .bf4-head>p:last-child","memberBenefits.experience.desc",r);
    var exp=r.querySelectorAll(".bf4-exp-card");
    ["access","context","continuity"].forEach(function(key,i){
      if(!exp[i]) return;
      setKey("figcaption span","memberBenefits."+key+".kicker",exp[i]);
      setKey("figcaption strong","memberBenefits."+key+".title",exp[i]);
      setKey("figcaption p","memberBenefits."+key+".desc",exp[i]);
    });

    setKey("#bf4-details .bf4-head .bf4-k","memberBenefits.details.kicker",r);
    setKey("#bf4-details .bf4-head h2","memberBenefits.details.title",r);
    setKey("#bf4-details .bf4-head>p:last-child","memberBenefits.details.desc",r);
    ["guest","standard","premium","curated","renewal","blackcard"].forEach(function(key){
      var a=r.querySelector('[data-detail="'+key+'"]');
      if(!a) return;
      setKey(".bf4-acc-left strong","memberBenefits.acc."+key+".title",a);
      setKey(".bf4-panel p","memberBenefits.acc."+key+".body",a);
      setKey(".bf4-panel a","memberBenefits.acc."+key+".cta",a);
    });

    setKey(".bf4-kenji .bf4-k","memberBenefits.kenji.kicker",r);
    setKey(".bf4-kenji h2","memberBenefits.kenji.title",r);
    setKey(".bf4-kenji p:last-child","memberBenefits.kenji.body",r);
    setKey(".bf4-final .bf4-k","memberBenefits.final.kicker",r);
    setKey(".bf4-final h2","memberBenefits.final.title",r);
    setKey(".bf4-final>p:not(.bf4-k)","memberBenefits.final.body",r);
    setList(".bf4-final .bf4-actions .bf4-btn",["memberBenefits.final.membership","memberBenefits.final.dashboard"],r);
    setKey(".bf4-final small","memberBenefits.final.note",r);
    setList(".bf4-sticky a",["memberBenefits.sticky.membership","memberBenefits.sticky.dashboard"],r);

    applySpecial(r);
    if(W.MMD_I18N&&typeof W.MMD_I18N.apply==="function") W.MMD_I18N.apply(r);
    r.setAttribute("data-mmd-i18n-bundle","member-membership-benefits");
  }

  function lang(){
    try{return W.MMD_I18N&&W.MMD_I18N.getLang?W.MMD_I18N.getLang():localStorage.getItem("mmd_lang")||"th"}catch(_){return "th"}
  }

  function text(key){
    var l=lang(),table=I[l]||I.th||{};
    return table[key]||I.th[key]||I.en[key]||"";
  }

  function applySpecial(root){
    var more=root.querySelectorAll(".bf4-more");
    for(var i=0;i<more.length;i++){
      var plus=more[i].querySelector("span");
      var node=more[i].firstChild;
      if(node&&node.nodeType===3) node.nodeValue=text("memberBenefits.level.details")+" ";
      else more[i].insertBefore(D.createTextNode(text("memberBenefits.level.details")+" "),plus||null);
    }
    var swipe=root.querySelector(".bf4-swipe");
    if(swipe){
      var n=swipe.lastChild;
      if(n&&n.nodeType===3) n.nodeValue=" "+text("memberBenefits.swipe");
    }
  }

  function refresh(){
    if(!onRoute()) return;
    var r=D.getElementById("mmdBenefitsFullV4");
    if(!r) return;
    applySpecial(r);
    if(W.MMD_I18N&&typeof W.MMD_I18N.apply==="function") W.MMD_I18N.apply(r);
  }

  D.addEventListener("mmd:i18n:ready",function(){bind();refresh()});
  D.addEventListener("mmd:i18n:change",function(){refresh()});
  if(D.readyState==="loading") D.addEventListener("DOMContentLoaded",bind); else bind();
})();
