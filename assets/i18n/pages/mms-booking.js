/* MMS member booking v2 — canonical Thai copy and scoped display adapter.
   Source of truth: MMD-Prive/mmd-i18n/assets/i18n/pages/mms-booking.js.
   Presentation only: never changes service codes, form values, auth or API payloads. */
(function(W){
  'use strict';
  var copy={
    'hero.title':'ให้ Male Massage<br><em>ช่วยดูแล</em>',
    'hero.lead':'เลือกบริการ วันเวลา และพื้นที่ที่สะดวก MMS จะช่วยแนะนำ Therapist และประสานรายละเอียดให้ครับ',
    'hero.kicker':'MY MMS · ขอจองเบื้องต้น',
    'hero.status':'กำลังตรวจสอบบัญชีสมาชิก',
    'nav.back':'กลับ MY MMS ↗',
    'nav.aria':'เมนู MY MMS',
    'nav.steps':'ขั้นตอนส่งคำขอ',
    'nav.service':'เลือกบริการ',
    'nav.details':'วันเวลา · พื้นที่',
    'nav.review':'ตรวจและส่ง',
    'gate.title':'ยืนยันบัญชีผ่าน LINE',
    'gate.body':'ใช้บัญชีสมาชิกของคุณเพื่อดูรายชื่อ Therapist และส่งคำขอได้สะดวกขึ้น',
    'gate.cta':'ยืนยันบัญชีผ่าน LINE ↗',
    'service.title':'เลือกบริการที่ต้องการ',
    'service.body':'เลือกได้ 1–6 รายการ เพื่อให้ MMS แนะนำ Therapist ได้ตรงกับความต้องการครับ',
    'service.placeholder':'ยืนยันบัญชีสมาชิกเพื่อดูรายการบริการ',
    'service.selected':'เลือกแล้ว',
    'service.maximum':'รายการ · สูงสุด 6',
    'details.title':'วันเวลาและสถานที่',
    'details.body':'ระบุพื้นที่คร่าว ๆ ก่อนได้ ยังไม่ต้องแจ้งเลขห้อง',
    'field.recipient':'ผู้รับบริการ',
    'field.male':'ผู้ชาย',
    'field.female':'ผู้หญิง',
    'field.manual':'ให้ MMS ช่วยประสาน',
    'field.province':'จังหวัด',
    'field.province.loading':'กำลังโหลดจังหวัด…',
    'field.zone':'เขต / โซน',
    'field.zone.empty':'เลือกจังหวัดก่อน',
    'field.date':'วันที่',
    'field.time':'เวลา',
    'field.duration':'ระยะเวลา',
    'field.duration.90':'90 นาที',
    'field.duration.120':'120 นาที',
    'field.duration.180':'180 นาที',
    'field.duration.help':'เริ่มต้น 90 นาที',
    'field.location':'ชื่อสถานที่หรือจุดนัดหมาย',
    'field.location.placeholder':'ชื่อคอนโด โรงแรม หรือบริเวณใกล้เคียง',
    'gps.cta':'ใช้ตำแหน่งปัจจุบันช่วยตรวจพื้นที่ ↗',
    'gps.help':'เลือกจังหวัดและโซนเองได้ โดยไม่ต้องเปิดตำแหน่ง',
    'location.question':'ต้องแจ้งสถานที่ละเอียดแค่ไหน?',
    'location.answer':'ชื่อคอนโด โรงแรม หรือย่านที่พอประสานเส้นทางได้ก็เพียงพอ รายละเอียดเพิ่มเติมแจ้ง MMS ภายหลังได้ครับ',
    'match.title':'Therapist ที่คุณสนใจ',
    'match.body':'MMS แนะนำรายชื่อจากบริการและพื้นที่ที่เลือก โดยจะตรวจสอบคิวอีกครั้งก่อนยืนยัน',
    'match.cta':'ดู Therapist ที่เหมาะสม ↗',
    'match.help':'เลือกได้สูงสุด 5 คน หรือให้ MMS ช่วยประสานต่อ',
    'match.preferred':'มีชื่อที่สนใจอยู่แล้ว?',
    'match.preferred.placeholder':'ระบุชื่อที่จำได้ (ถ้ามี)',
    'journey.title':'หลังส่งคำขอเป็นอย่างไร?',
    'journey.1':'MMS ทบทวนบริการ วันเวลา และพื้นที่',
    'journey.2':'ประสาน Therapist และตรวจสอบคิว',
    'journey.3':'แจ้งรายละเอียดและค่าใช้จ่ายก่อนยืนยัน',
    'review.title':'ตรวจรายละเอียดก่อนส่ง',
    'review.body':'คำขอเบื้องต้นยังไม่ใช่การยืนยันนัดหรือค่าใช้จ่าย MMS จะประสานและตอบกลับให้ครับ',
    'review.note':'รายละเอียดเพิ่มเติม',
    'review.note.placeholder':'สิ่งที่ต้องการแจ้ง MMS เพิ่มเติม (ถ้ามี)',
    'review.consent':'เข้าใจว่า Therapist วันเวลา สถานที่ และค่าใช้จ่ายจะยืนยันหลัง MMS ประสานและตอบกลับแล้ว',
    'review.submit':'ส่งคำขอให้ MMS ↗',
    'review.help':'สอบถามเพิ่มเติม',
    'contact.line':'ติดต่อ MMS ทาง LINE ↗',
    'contact.short':'ติดต่อ MMS ↗',
    'success.title':'MMS ได้รับคำขอแล้ว',
    'success.body':'MMS จะทบทวนรายละเอียดและติดต่อกลับเพื่อประสานนัดหมาย',
    'footer.slogan':'คัดสรร Therapist ฝีมือดี<br>เป็นส่วนตัว เดินทางไปหาคุณได้ทุกที่...แค่กับคุณ',
    'footer.howto':'วิธีใช้บริการ',
    'sheet.aria':'เมนูขั้นตอน',
    'sheet.open':'เปิดเมนูขั้นตอน',
    'sheet.close':'ปิดเมนู',
    'sheet.title':'เลือกขั้นตอน',
    'sheet.start':'เริ่มต้น',
    'sheet.service':'1 · เลือกบริการ',
    'sheet.details':'2 · วันเวลาและพื้นที่',
    'sheet.match':'Therapist ที่สนใจ',
    'sheet.journey':'หลังส่งคำขอ',
    'sheet.review':'3 · ตรวจและส่ง',
    'sheet.next':'ถัดไป ↓',
    'runtime.gate':'กรุณายืนยันบัญชีผ่าน LINE ก่อนส่งคำขอ',
    'runtime.error':'ยังส่งคำขอไม่ได้ กรุณาลองอีกครั้งหรือติดต่อ MMS ทาง LINE',
    'runtime.skills':'กรุณาเลือกบริการ 1–6 รายการ',
    'runtime.details':'กรุณาระบุผู้รับบริการ พื้นที่ วันที่ และเวลาให้ครบ',
    'runtime.matching':'MMS กำลังตรวจสอบบริการและพื้นที่ที่เลือก',
    'runtime.manual':'รายละเอียดนี้ต้องประสานเพิ่มเติม สามารถส่งคำขอให้ MMS ช่วยดูแลต่อได้ครับ',
    'runtime.empty':'ยังไม่พบ Therapist ที่ตรงกับรายละเอียดทั้งหมด ส่งคำขอให้ MMS ช่วยประสานเพิ่มเติมได้ครับ',
    'runtime.checking':'กำลังตรวจสอบ…',
    'runtime.sending':'กำลังส่งคำขอ…',
    'runtime.consent':'กรุณายืนยันว่าเข้าใจเงื่อนไขคำขอเบื้องต้นก่อนส่ง',
    'runtime.profile':'ยังตรวจสอบบัญชีไม่ได้ กรุณาลองอีกครั้ง',
    'runtime.catalog':'รายการบริการยังไม่พร้อม กรุณาลองอีกครั้ง',
    'runtime.loading':'ยังโหลดรายละเอียดไม่ได้ กรุณาลองอีกครั้ง',
    'runtime.match_error':'ยังตรวจสอบรายชื่อไม่ได้ กรุณาลองอีกครั้ง',
    'runtime.zone_ready':'เลือกจังหวัดและโซนที่ใกล้สถานที่นัดหมาย',
    'runtime.zone_error':'ยังโหลดพื้นที่ให้บริการไม่ได้ กรุณาลองอีกครั้งก่อนส่งคำขอ',
    'runtime.gps_loading':'กำลังตรวจตำแหน่ง…',
    'runtime.gps_received':'รับตำแหน่งแล้ว กรุณายืนยันจังหวัดและโซนจากรายการอีกครั้ง',
    'runtime.gps_error':'ยังอ่านตำแหน่งไม่ได้ กรุณาเลือกจังหวัดและโซนจากรายการ',
    'runtime.gps_unsupported':'กรุณาเลือกจังหวัดและโซนจากรายการได้เลย',
    'runtime.province_error':'โหลดจังหวัดไม่สำเร็จ',
    'runtime.zone_load_error':'โหลดโซนไม่สำเร็จ',
    'runtime.zone_choose':'เลือกโซน / เขต / อำเภอ',
    'runtime.province_choose':'เลือกจังหวัด',
    'runtime.zone_loading':'กำลังโหลดโซน…',
    'runtime.reference':'เลขอ้างอิง: ',
    'runtime.verified':'ยืนยันบัญชีแล้ว · ',
    'runtime.summary.service':'บริการ',
    'runtime.summary.recipient':'ผู้รับบริการ',
    'runtime.summary.when':'วันและเวลา',
    'runtime.summary.area':'พื้นที่',
    'runtime.summary.therapist':'Therapist ที่สนใจ',
    'runtime.unselected':'ยังไม่ได้เลือก',
    'runtime.interested':'สนใจคนนี้'
  };
  var dict=W.I18N_DICT=W.I18N_DICT||{};dict.th=dict.th||{};
  Object.keys(copy).forEach(function(k){dict.th['mms.booking.v2.'+k]=copy[k];});
  if(!W.document)return;
  var exact={
    'Member verification required':'runtime.gate',
    'กรุณายืนยัน Member Access ผ่าน LINE ก่อนครับ':'runtime.gate',
    'MMS service is temporarily unavailable':'runtime.error',
    'กรุณาเลือก Services 1–6 รายการครับ':'runtime.skills',
    'กรุณาระบุผู้รับบริการ โซน วันที่ และเวลาให้ครบครับ':'runtime.details',
    'MMD กำลังตรวจ Skills และพื้นที่ที่ตรงกันครับ':'runtime.matching',
    'เงื่อนไขนี้ต้องให้ MMD ช่วยประสานเป็นรายกรณีครับ สามารถส่ง Pre-booking ต่อได้':'runtime.manual',
    'ยังไม่พบ Therapist ที่ตรงครบทุกเงื่อนไขในข้อมูลปัจจุบัน แต่ยังส่ง Pre-booking ให้ MMD ช่วยประสานได้ครับ':'runtime.empty',
    'กำลังเช็ก…':'runtime.checking',
    'กำลังส่ง…':'runtime.sending',
    'เช็ก Therapist ที่เหมาะ →':'match.cta',
    'ส่ง Pre-booking ให้ MMD':'review.submit',
    'กรุณายืนยันว่าเข้าใจสถานะ Pre-booking ก่อนส่งครับ':'runtime.consent',
    'ตรวจสอบ Member Access ไม่สำเร็จ กรุณาลองใหม่อีกครั้งครับ':'runtime.profile',
    'รายการ Services ของ MMS ยังไม่พร้อมครับ':'runtime.catalog',
    'โหลดข้อมูล MMS ไม่สำเร็จ กรุณาลองใหม่อีกครั้งครับ':'runtime.loading',
    'เช็กรายชื่อไม่สำเร็จ กรุณาลองใหม่ครับ':'runtime.match_error',
    'ส่ง Pre-booking ไม่สำเร็จ กรุณาลองใหม่อีกครั้งครับ':'runtime.error',
    'เลือกจังหวัดก่อน แล้วเลือกโซนที่ใกล้สถานที่จริงที่สุด':'runtime.zone_ready',
    'พื้นที่ให้บริการโหลดไม่สำเร็จ จึงยังไม่ส่งคำขอจองเพื่อป้องกันการจับคู่ผิดพื้นที่':'runtime.zone_error',
    'ยังไม่สามารถโหลดพื้นที่ให้บริการได้ กรุณาลองใหม่อีกครั้ง':'runtime.zone_error',
    'กำลังตรวจว่าตำแหน่งพร้อมใช้งาน…':'runtime.gps_loading',
    'รับตำแหน่งแล้ว เพื่อความแม่นยำในการจับคู่ กรุณายืนยันจังหวัดและโซนจากรายการเอง':'runtime.gps_received',
    'ไม่สามารถอ่านตำแหน่งได้ กรุณาเลือกจังหวัดและโซนเองได้เลย':'runtime.gps_error',
    'Browser นี้ไม่รองรับ GPS กรุณาเลือกจังหวัดและโซนเองได้เลย':'runtime.gps_unsupported'
  };
  function convert(text){
    var trim=text.trim();
    if(exact[trim])return text.replace(trim,copy[exact[trim]]);
    return text.replace(/Member verified · /g,copy['runtime.verified']).replace(/Reference: /g,copy['runtime.reference']).replace(/ให้ MMD ช่วย(?:ประสาน|ดู)/g,copy['field.manual']).replace(/Skills ตรง (\d+) รายการ/g,'ตรงกับบริการที่เลือก $1 รายการ').replace(/MMD จะตรวจคิวอีกครั้ง/g,'MMS จะตรวจสอบคิวอีกครั้ง').replace(/เลือกได้สูงสุด (\d+) Services ครับ/g,'เลือกบริการได้สูงสุด $1 รายการ');
  }
  function init(){
    var root=W.document.querySelector('#mmb2[data-rebuild="mms-booking-mobile-v2"]');
    if(!root||root.dataset.brandCopyReady)return;root.dataset.brandCopyReady='1';
    function apply(node){
      if(!node||node.nodeType===8)return;
      if(node.nodeType===3){if(node.parentElement&&node.parentElement.closest('script,style,textarea,input,option'))return;var next=convert(node.nodeValue);if(next!==node.nodeValue)node.nodeValue=next;return;}
      if(node.nodeType!==1||node.matches('script,style,textarea,input,option'))return;
      Array.from(node.childNodes).forEach(apply);
    }
    apply(root);
    new W.MutationObserver(function(list){list.forEach(function(m){if(m.type==='characterData')apply(m.target);else Array.from(m.addedNodes).forEach(apply);});}).observe(root,{childList:true,subtree:true,characterData:true});
  }
  if(W.document.readyState==='loading')W.document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})(window);
