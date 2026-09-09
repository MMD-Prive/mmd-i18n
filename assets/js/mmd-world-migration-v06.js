(()=>{
  'use strict';
  const VERSION='2026-WORLD-06';
  const path=(location.pathname.replace(/\/+$/,'')||'/');
  const html=document.documentElement;
  const SIGIL=/^\/sigil(?:\/|$)/;
  const SIGIL_KEEP=/^\/sigil\/(?:internal|admin|ceo)(?:\/|$)|^\/sigil\/member\/api\/liff\/status$/;
  const EXCLUDED=/^\/(?:male-massage|therapists|apply\/mms-therapist|partner|internal|shop|mmd-shop|docs|model|accept\/job|app|member\/mms-booking)(?:\/|$)/;
  const PUBLIC=/^(?:\/$|\/(?:profiles|public|services|booking|find|membership|member|promotion|confirm|pay|rules|terms|legal|privacy-policy|trust|tmib|hall|aftercare|believe|blackcard|journal|concierge|onboarding|join|match|confirmation|password-reset|404|en\/member)(?:\/|$)|\/apply\/public-model(?:\/|$))/;
  const SPECIAL=/^(?:\/profiles|\/booking|\/member\/renewal|\/rules\/model\/consent|\/services\/companion|\/promotion\/6-years-care-back(?:-preview-v2|\/wish)?|\/journal|\/tmib(?:\/|$)|\/trust\/inme(?:\/|$)|\/blackcard(?:\/|$)|\/aftercare|\/believe\/inme|\/sigil\/(?:start|inme|hero|jobs)(?:\/|$))/;
  const CANON='.mmd-display-en,.mmd-brand-en,.mmd-hero-display-en,.mmd-display-xl,.mmd-h1-en,.mmd-h2-feature-en,.mmd-h2-editorial-en,.mmd-h3-en,.mmd-card-title-en';
  const APPROVED='.mmd-gradient-gold,.mmd-gradient-burgundy,.mmd-heading-boss,.mmd-heading-gold-clean';

  function world(){
    if(SIGIL_KEEP.test(path)||EXCLUDED.test(path))return null;
    if(SIGIL.test(path))return 'sigil';
    if(PUBLIC.test(path))return 'public';
    return null;
  }
  const W=world();
  html.dataset.mmdMigrationVersion=VERSION;
  html.dataset.mmdMigrationScope=W||'keep';
  if(W) html.dataset.mmdWorld=W;

  function rgb(s){
    const m=String(s||'').match(/rgba?\(([^)]+)\)/i);if(!m)return null;
    const v=m[1].split(',').map(Number);return {r:v[0],g:v[1],b:v[2],a:v.length>3?v[3]:1};
  }
  function lum(c){
    if(!c)return 0;const f=x=>{x/=255;return x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4)};
    return .2126*f(c.r)+.7152*f(c.g)+.0722*f(c.b);
  }
  function ratio(a,b){const A=lum(a),B=lum(b);return (Math.max(A,B)+.05)/(Math.min(A,B)+.05)}
  function diff(a,b){return a&&b?Math.abs(a.r-b.r)+Math.abs(a.g-b.g)+Math.abs(a.b-b.b):999}
  function scriptOf(el){
    const t=(el.textContent||'').trim();
    if(/[\u0E00-\u0E7F]/.test(t))return 'th';
    if(/[\u3400-\u9FFF\uF900-\uFAFF]/.test(t))return 'cjk';
    return 'en';
  }
  function surface(el){
    let n=el.parentElement,photo=false;
    for(let i=0;n&&i<8;i++,n=n.parentElement){
      if(n.matches('[data-mmd-surface="dark"],.mmd-dark-card,.mmd-founder-panel,.mmd-hero-dark,.mmd-dark,.theme-dark,.is-dark,.bg-dark'))return {tone:'dark',bg:{r:5,g:5,b:5,a:1},photo:true};
      if(n.matches('[data-mmd-surface="light"],.mmd-light-card,.theme-light,.is-light,.bg-light'))return {tone:'light',bg:{r:251,g:250,b:248,a:1},photo:false};
      const c=getComputedStyle(n),b=rgb(c.backgroundColor);
      if(c.backgroundImage&&c.backgroundImage!=='none')photo=true;
      if(b&&b.a>.55){return {tone:lum(b)<.34?'dark':'light',bg:b,photo};}
      if(n.tagName==='BODY')break;
    }
    return W==='sigil'?{tone:'dark',bg:{r:5,g:5,b:5,a:1},photo}:{tone:'light',bg:{r:251,g:250,b:248,a:1},photo};
  }
  function explicit(el){
    if(el.dataset.mmdNativeColorLock==='1'||el.matches(APPROVED))return true;
    const st=el.getAttribute('style')||'';
    return /(?:^|;)\s*(?:color|-webkit-text-fill-color|background(?:-image)?)\s*:/i.test(st);
  }
  function preserveReadable(el,s){
    if(!SPECIAL.test(path))return false;
    const fg=rgb(getComputedStyle(el).color);
    const target=s.tone==='dark'?{r:255,g:248,b:237,a:1}:{r:24,g:23,b:27,a:1};
    return !!fg && ratio(fg,s.bg)>=3 && diff(fg,target)>34;
  }
  function prime(el){
    if(el.hasAttribute('data-mmd-color-lock')&&!el.hasAttribute('data-mmd-auto-color-lock'))el.dataset.mmdNativeColorLock='1';
    if(el.hasAttribute('data-mmd-auto-color-lock')){el.removeAttribute('data-mmd-color-lock');el.removeAttribute('data-mmd-auto-color-lock');}
    el.removeAttribute('data-mmd-migration');
    el.removeAttribute('data-mmd-role');
    el.removeAttribute('data-mmd-script');
    el.removeAttribute('data-mmd-tone');
  }
  function autoLock(el){el.setAttribute('data-mmd-color-lock','');el.setAttribute('data-mmd-auto-color-lock','1')}
  function classifyHeading(el){
    prime(el);
    const sc=scriptOf(el),role=el.tagName.toLowerCase(),s=surface(el);
    el.dataset.mmdRole=role;el.dataset.mmdScript=sc;el.dataset.mmdTone=s.tone;
    if(explicit(el)||preserveReadable(el,s)){
      el.dataset.mmdMigration='color-lock';autoLock(el);return;
    }
    if(sc!=='en'||el.matches(CANON)||el.hasAttribute('data-mmd-keep')){
      el.dataset.mmdMigration='keep';return;
    }
    el.dataset.mmdMigration='migrate';
  }
  function classify(){
    if(!W)return;
    if(document.body){
      document.body.classList.toggle('mmd-prive',W==='public');
      document.body.classList.toggle('sigil-system',W==='sigil');
    }
    document.querySelectorAll('h1,h2,h3').forEach(classifyHeading);
  }
  function loadCss(){
    if(document.getElementById('mmd-global-world-06-css'))return;
    const l=document.createElement('link');l.id='mmd-global-world-06-css';l.rel='stylesheet';
    l.href='https://mmd-prive.github.io/mmd-i18n/assets/css/mmd-global-world-06.css?v=20260909-2';document.head.append(l);
  }
  function patchMmsBenefits(){
    const x=document.getElementById('mms-benefits-y2');if(!x)return;
    const q=s=>x.querySelector(s),p=q('#profile .mby2-section-head>p');
    if(p)p.textContent='หุ่นดีขึ้น รูปดีขึ้น Skill เพิ่มขึ้น ประสบการณ์มากขึ้น — โปรไฟล์และเรทของคุณไม่ควรถูกล็อกอยู่กับวันแรกที่สมัคร';
    const c=q('#profile .mby2-editorial-card');if(c){const h=c.querySelector('h3'),b=c.querySelector('p'),e=c.querySelector('em');if(h)h.innerHTML='อัปเดตรูปเองได้<br>ไม่ต้องรอ';if(b)b.textContent='อัปเดตรูปให้กลุ่มลูกค้าของคุณเห็นรูปร่าง หน้าตา และบอดี้เวอร์ชันปัจจุบันได้จาก Therapist Dashboard ไม่ต้องรอให้ทีมมาแก้ให้ทีหลัง';if(e)e.textContent='เป็นผู้ชาย อย่าแต่งรูปเยอะ มันโป๊ะ !!'}
    if(!document.querySelector('link[href*="mms-logo-symbol"]')){const l=document.createElement('link');l.rel='icon';l.href='https://s3.amazonaws.com/webflow-prod-assets/68f879d546d2f4e2ab186e90/6a8d34cfab578d105d8de01b_mms-logo-symbol.svg';document.head.append(l)}
  }
  function boot(){classify();loadCss();patchMmsBenefits();let t;new MutationObserver(()=>{clearTimeout(t);t=setTimeout(classify,90)}).observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['lang']});}
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',boot,{once:true}):boot();
  window.__MMDWorldMigration={version:VERSION,path,world:W,classify};
})();
