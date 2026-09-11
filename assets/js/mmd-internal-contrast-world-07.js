(()=>{
  'use strict';
  const path=(location.pathname.replace(/\/+$/,'')||'/');
  if(!/^\/internal(?:\/|$)/.test(path))return;

  const html=document.documentElement;
  html.dataset.mmdContrastWorld='internal';

  const TEXT='h1,h2,h3,h4,p,li,label,small,figcaption,summary,blockquote';
  const HERO='[class*="hero" i],[data-mmd-hero]';
  const DARK='[data-mmd-surface="dark"],.mmd-dark,.theme-dark,.is-dark,.bg-dark,.sigil-system,.mmd-page-dark';
  const LIGHT='[data-mmd-surface="light"],.mmd-light,.theme-light,.is-light,.bg-light,.mmd-page-light';
  const LOCK='[data-mmd-color-lock],[data-mmd-native-color-lock]';

  function rgb(v){
    const m=String(v||'').match(/rgba?\(([^)]+)\)/i);
    if(!m)return null;
    const a=m[1].split(',').map(Number);
    return {r:a[0],g:a[1],b:a[2],a:a.length>3?a[3]:1};
  }
  function lum(c){
    if(!c)return 0;
    const f=x=>{x/=255;return x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4)};
    return .2126*f(c.r)+.7152*f(c.g)+.0722*f(c.b);
  }
  function isLocked(el){
    return !!el.closest(LOCK)||el.matches('.mmd-gradient-gold,.mmd-gradient-burgundy,.mmd-heading-boss,.mmd-heading-gold-clean');
  }
  function markHeroes(root){
    root.querySelectorAll(HERO).forEach(hero=>{
      if(hero.closest(LOCK))return;
      const cs=getComputedStyle(hero);
      const hasBg=/url\(/i.test(cs.backgroundImage||'');
      const hasMedia=!!hero.querySelector(':scope > img,:scope > picture,:scope > video');
      if(hasBg||hasMedia)hero.dataset.mmdIPhotoOverlay='1';
    });
  }
  function tone(el){
    let n=el.parentElement;
    for(let i=0;n&&i<9;i++,n=n.parentElement){
      if(n.matches(LIGHT))return 'light';
      if(n.matches(DARK))return 'dark';
      if(n.hasAttribute('data-mmd-i-photo-overlay'))return 'photo';
      const cs=getComputedStyle(n);
      if(/url\(/i.test(cs.backgroundImage||''))return 'photo';
      const bg=rgb(cs.backgroundColor);
      if(bg&&bg.a>.55)return lum(bg)<.36?'dark':'light';
      if(n.tagName==='BODY')break;
    }
    const bg=rgb(getComputedStyle(document.body).backgroundColor);
    return bg&&bg.a>.55&&lum(bg)>.36?'light':'dark';
  }
  function classify(root=document){
    markHeroes(root);
    root.querySelectorAll(TEXT).forEach(el=>{
      if(isLocked(el))return;
      el.dataset.mmdITone=tone(el);
    });
  }
  function boot(){
    classify();
    let t;
    new MutationObserver(()=>{
      clearTimeout(t);
      t=setTimeout(()=>classify(),80);
    }).observe(document.documentElement,{subtree:true,childList:true});
    html.dataset.mmdContrastVersion='WORLD-07-INTERNAL-PILOT';
  }
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',boot,{once:true}):boot();
})();
