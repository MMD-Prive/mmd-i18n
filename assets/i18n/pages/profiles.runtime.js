/* MMD Privé · Profiles canonical binder/runtime
   Route: /profiles · TH/EN/ZH · 2026-10-05 */
(function(){
  "use strict";
  var W=window,D=document;
  function onRoute(){return (((location.pathname||"/").replace(/\/+$/,"")||"/")==="/profiles");}
  if(!onRoute())return;
  var remembered=new WeakMap(),scheduled=false;
  function lang(){
    if(W.MMD_I18N&&typeof W.MMD_I18N.getLang==="function")return W.MMD_I18N.getLang();
    try{var q=new URLSearchParams(location.search).get("lang");var s=q||localStorage.getItem("mmd_lang")||localStorage.getItem("lang")||"th";return /^(th|en|zh)$/.test(s)?s:"th";}catch(_){return"th";}
  }
  function t(key,l){
    if(W.MMD_I18N&&typeof W.MMD_I18N.t==="function"){var v=W.MMD_I18N.t("profiles."+key,{lang:l});if(v!=null&&String(v).trim())return String(v);}
    var I=W.I18N_DICT||{},row=I[l]||{};return row["profiles."+key]||null;
  }
  function reverse(){
    var I=W.I18N_DICT||{},th=I.th||{},out={};
    Object.keys(th).forEach(function(k){if(k.indexOf("profiles.")!==0)return;var v=th[k];if(typeof v!=="string"||!v.trim()||/[<>]/.test(v))return;out[v.trim()]=k.slice(9);});
    return out;
  }
  function preserveReplace(node,value){var raw=node.nodeValue||"",m=raw.match(/^(\s*)([\s\S]*?)(\s*)$/);node.nodeValue=(m?m[1]:"")+value+(m?m[3]:"");}
  function translateText(root,l){
    var rev=reverse(),scope=root&&root.nodeType===1?root:D.body;if(!scope)return;
    var walker=D.createTreeWalker(scope,NodeFilter.SHOW_TEXT,{acceptNode:function(node){var p=node.parentElement;if(!p||p.closest("script,style,noscript,textarea,pre,code"))return NodeFilter.FILTER_REJECT;return node.nodeValue&&node.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});
    var nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(function(node){var key=remembered.get(node);if(!key){key=rev[(node.nodeValue||"").trim()]||null;if(key)remembered.set(node,key);}if(!key)return;var value=t(key,l);if(value!=null)preserveReplace(node,value);});
  }
  function bindSpecial(){
    var root=D.getElementById("mmdProfilesV8");
    if(root){var title=root.querySelector(".mp8-role-intro h2");if(title)title.setAttribute("data-i18n-html","profiles.roleIntro.title");root.querySelectorAll("[data-lang]").forEach(function(btn){var v=btn.getAttribute("data-lang");if(v)btn.setAttribute("data-set-lang",v);});}
    var access=D.querySelector("#profiles-access-note .profile-access-copy");if(access)access.setAttribute("data-i18n-html","profiles.access.body");
  }
  function activeRole(){var root=D.getElementById("mmdProfilesV8"),btn=root&&root.querySelector("[data-role-value][aria-pressed=\"true\"]");return btn&&btn.getAttribute("data-role-value")||"";}
  function translateResult(l){
    var root=D.getElementById("mmdProfilesV8"),count=root&&root.querySelector("[data-result-count]");if(!count)return;
    var role=activeRole();if(!role)return;var cards=root.querySelectorAll("[data-track] [data-profile]"),n=cards.length,roleName=t("role."+role+".title",l)||role,template=t("catalog.result",l);
    if(template)count.textContent=template.replace("{n}",String(n)).replace("{role}",roleName);
  }
  function apply(root){var l=lang();bindSpecial();if(W.MMD_I18N&&typeof W.MMD_I18N.apply==="function")W.MMD_I18N.apply(D,{lang:l});translateText(root||D.body,l);translateResult(l);}
  function schedule(root){if(scheduled)return;scheduled=true;requestAnimationFrame(function(){scheduled=false;apply(root&&root.isConnected?root:D.body);});}
  D.addEventListener("mmd:i18n:ready",function(){apply(D.body);});
  D.addEventListener("mmd:i18n:change",function(){apply(D.body);});
  D.addEventListener("click",function(e){var b=e.target&&e.target.closest&&e.target.closest("#mmdProfilesV8 [data-lang]");if(!b)return;var v=b.getAttribute("data-lang");setTimeout(function(){if(W.MMD_I18N&&typeof W.MMD_I18N.setLang==="function")W.MMD_I18N.setLang(v);apply(D.body);},0);});
  function boot(){apply(D.body);if(typeof MutationObserver==="function"){var mo=new MutationObserver(function(records){var target=null;for(var i=0;i<records.length;i++){if(records[i].addedNodes&&records[i].addedNodes.length){target=records[i].target;break;}}schedule(target||D.body);});mo.observe(D.body,{childList:true,subtree:true});W.__MMD_PROFILES_I18N_OBSERVER__=mo;}}
  if(D.readyState==="loading")D.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();
