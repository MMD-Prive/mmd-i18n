/* MMD Prive · Private Membership Benefits policy overlay V3
   Route: /sigil/member/membership/benefits
   Canon: Standard base 1 year; Premium base 2 years.
   CARE BACK qualifying signup/renewal from Aug 2026: Standard +180 days; Premium +1 full year.
*/
(function(){
  "use strict";
  if(((location.pathname||"/").replace(/\/+$/,""))!=="/sigil/member/membership/benefits") return;

  var W=window;
  W.I18N_DICT=W.I18N_DICT||{};
  var I=W.I18N_DICT;
  I.th=I.th||{}; I.en=I.en||{}; I.zh=I.zh||{};

  Object.assign(I.th,{
    "memberBenefits.guest.desc":"ทดลองทำความรู้จัก Private Membership ก่อนเลือก Standard 1 ปี หรือ Premium 2 ปี",
    "memberBenefits.standard.term":"1 YEAR",
    "memberBenefits.standard.unit":"THB / 1 YEAR",
    "memberBenefits.standard.desc":"Private Standard อายุพื้นฐาน 1 ปี สำหรับการสมัครหรือต่ออายุที่เข้าเงื่อนไข CARE BACK ตั้งแต่ ส.ค. 2026 จะเพิ่มอีก 180 วันหลัง MMD ยืนยันสิทธิ์",
    "memberBenefits.premium.term":"2 YEARS",
    "memberBenefits.premium.unit":"THB / 2 YEARS",
    "memberBenefits.premium.desc":"Private Premium อายุพื้นฐาน 2 ปี พร้อม Premium Private access ตามสถานะ สำหรับการสมัครหรือต่ออายุที่เข้าเงื่อนไข CARE BACK ตั้งแต่ ส.ค. 2026 จะเพิ่มอีก 1 ปีหลัง MMD ยืนยันสิทธิ์",
    "memberBenefits.acc.guest.body":"Guest Pass เป็นช่วงทดลอง 7 วันเพื่อทำความรู้จัก Private Membership ก่อนเลือก Standard 1 ปี หรือ Premium 2 ปี และยังไม่ใช่ Standard หรือ Premium โดยอัตโนมัติ",
    "memberBenefits.acc.standard.body":"Standard Active มีอายุพื้นฐาน 1 ปีและเปิด Public + Standard Private access ตาม Entitlement Resolver สำหรับการสมัครหรือต่ออายุที่เข้าเงื่อนไข CARE BACK ตั้งแต่ ส.ค. 2026 จะเพิ่มอายุสมาชิกอีก 180 วันหลัง MMD ยืนยันสิทธิ์",
    "memberBenefits.acc.premium.body":"Premium Active มีอายุพื้นฐาน 2 ปีและเพิ่ม Premium Private access จาก Standard สำหรับการสมัครหรือต่ออายุที่เข้าเงื่อนไข CARE BACK ตั้งแต่ ส.ค. 2026 จะเพิ่มอายุสมาชิกอีก 1 ปีหลัง MMD ยืนยันสิทธิ์",
    "memberBenefits.acc.renewal.body":"วันหมดอายุ Points และอัตราต่ออายุให้ยึดข้อมูลที่ MMD ยืนยันจริงใน My MMD โดย CARE BACK รุ่นขยายใช้ระยะเวลาตามแพ็กเกจ: Standard +180 วัน · Premium +1 ปี"
  });

  Object.assign(I.en,{
    "memberBenefits.guest.desc":"Try Private Membership before choosing Standard for 1 year or Premium for 2 years.",
    "memberBenefits.standard.term":"1 YEAR",
    "memberBenefits.standard.unit":"THB / 1 YEAR",
    "memberBenefits.standard.desc":"Private Standard has a 1-year base term. Eligible signup or renewal from Aug 2026 receives +180 days after MMD verification.",
    "memberBenefits.premium.term":"2 YEARS",
    "memberBenefits.premium.unit":"THB / 2 YEARS",
    "memberBenefits.premium.desc":"Private Premium has a 2-year base term with Premium Private access when active. Eligible signup or renewal from Aug 2026 receives +1 full year after MMD verification.",
    "memberBenefits.acc.guest.body":"Guest Pass is a 7-day introduction to Private Membership before choosing Standard for 1 year or Premium for 2 years. It does not automatically become Standard or Premium.",
    "memberBenefits.acc.standard.body":"Standard Active has a 1-year base term and opens Public + Standard Private access through the canonical resolver. Eligible signup or renewal from Aug 2026 receives +180 days after MMD verification.",
    "memberBenefits.acc.premium.body":"Premium Active has a 2-year base term and adds Premium Private access above Standard. Eligible signup or renewal from Aug 2026 receives +1 full year after MMD verification.",
    "memberBenefits.acc.renewal.body":"Use the verified expiry, Points and renewal information in My MMD. Expanded CARE BACK is tier-specific: Standard +180 days · Premium +1 year."
  });

  Object.assign(I.zh,{
    "memberBenefits.guest.desc":"先体验 Private Membership，再选择 Standard 1 年或 Premium 2 年。",
    "memberBenefits.standard.term":"1 YEAR",
    "memberBenefits.standard.unit":"THB / 1 YEAR",
    "memberBenefits.standard.desc":"Private Standard 基础期限为 1 年。2026年8月起符合 CARE BACK 条件的新购或续费，经 MMD 核验后增加 180 天。",
    "memberBenefits.premium.term":"2 YEARS",
    "memberBenefits.premium.unit":"THB / 2 YEARS",
    "memberBenefits.premium.desc":"Private Premium 基础期限为 2 年，并在 Active 状态下增加 Premium Private access。2026年8月起符合 CARE BACK 条件的新购或续费，经 MMD 核验后增加 1 年。",
    "memberBenefits.acc.guest.body":"Guest Pass 是 7 天的 Private Membership 体验，用于在 Standard 1 年与 Premium 2 年之间做选择；它不会自动变成 Standard 或 Premium。",
    "memberBenefits.acc.standard.body":"Standard Active 基础期限为 1 年，并由 canonical resolver 按状态开放 Public + Standard Private access。2026年8月起符合 CARE BACK 条件的新购或续费，经 MMD 核验后增加 180 天。",
    "memberBenefits.acc.premium.body":"Premium Active 基础期限为 2 年，并在 Standard 之上增加 Premium Private access。2026年8月起符合 CARE BACK 条件的新购或续费，经 MMD 核验后增加 1 年。",
    "memberBenefits.acc.renewal.body":"实际到期日、Points 与续费信息以 My MMD 核验结果为准。扩展版 CARE BACK 按方案区分：Standard +180 天 · Premium +1 年。"
  });

  function apply(){
    var r=document.getElementById("mmdBenefitsFullV4");
    if(r&&W.MMD_I18N&&typeof W.MMD_I18N.apply==="function") W.MMD_I18N.apply(r);
    if(r) r.setAttribute("data-mmd-membership-policy","v3");
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",apply,{once:true});
  else apply();
  setTimeout(apply,120);
  setTimeout(apply,420);
})();
