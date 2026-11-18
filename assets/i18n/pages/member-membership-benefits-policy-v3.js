/* Private Membership Benefits compatibility overlay for older Webflow embeds.
   The terms below apply to first-time signup. MY MMD confirms each renewal offer.
*/
(function(){
  "use strict";
  if(((location.pathname||"/").replace(/\/+$/,""))!=="/sigil/member/membership/benefits") return;

  var W=window;
  W.I18N_DICT=W.I18N_DICT||{};
  var I=W.I18N_DICT;
  I.th=I.th||{}; I.en=I.en||{}; I.zh=I.zh||{};

  Object.assign(I.th,{
    "memberBenefits.guest.desc":"ทดลองทำความรู้จัก Private Membership ก่อนเลือกแพ็กเกจสำหรับการสมัครครั้งแรก",
    "memberBenefits.standard.term":"1 YEAR",
    "memberBenefits.standard.unit":"บาท / 1 ปีแรก",
    "memberBenefits.standard.desc":"สำหรับการสมัครครั้งแรก Standard มีอายุ 1 ปี",
    "memberBenefits.premium.term":"2 YEARS",
    "memberBenefits.premium.unit":"บาท / 2 ปีแรก",
    "memberBenefits.premium.desc":"สำหรับการสมัครครั้งแรก Premium มีอายุ 2 ปี"
  });

  Object.assign(I.en,{
    "memberBenefits.guest.desc":"Try Private Membership before choosing your first membership plan.",
    "memberBenefits.standard.term":"1 YEAR",
    "memberBenefits.standard.unit":"THB / first year",
    "memberBenefits.standard.desc":"New Standard memberships run for one year.",
    "memberBenefits.premium.term":"2 YEARS",
    "memberBenefits.premium.unit":"THB / first 2 years",
    "memberBenefits.premium.desc":"New Premium memberships run for two years."
  });

  Object.assign(I.zh,{
    "memberBenefits.guest.desc":"先体验 Private Membership，再选择首次入会方案。",
    "memberBenefits.standard.term":"1 年",
    "memberBenefits.standard.unit":"泰铢 / 首年",
    "memberBenefits.standard.desc":"首次加入 Standard 的会籍有效期为 1 年。",
    "memberBenefits.premium.term":"2 年",
    "memberBenefits.premium.unit":"泰铢 / 首 2 年",
    "memberBenefits.premium.desc":"首次加入 Premium 的会籍有效期为 2 年。"
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
