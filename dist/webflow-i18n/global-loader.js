/* Generated Webflow i18n route loader — SHA/SRI pinned bundles only. */
(function(){
  "use strict";
  if(window.__MMD_I18N_ROUTE_LOADER_V1__)return;
  var doc=document,current=doc.currentScript;
  var src=current&&current.src||"";
  var start="https://cdn.jsdelivr.net/gh/MMD-Prive/mmd-i18n@";
  if(src.indexOf(start)!==0){console.warn("MMD i18n: loader must be pinned");return;}
  var rest=src.slice(start.length),sha=rest.slice(0,40);
  var suffix=rest.slice(40);
  if(!/^[a-f0-9]{40}$/i.test(sha)||suffix!=="/dist/webflow-i18n/global-loader.js"){console.warn("MMD i18n: invalid commit-pinned URL");return;}
  function status(value){doc.documentElement.setAttribute("data-mmd-i18n-bundle",value);}
  var legacyCore=Array.prototype.some.call(doc.scripts,function(script){
    return /\/i18n\.core\.v21\.js(?:[?#]|$)/i.test(script.src);
  });
  if(window.__MMD_I18N_V21__||legacyCore){
    status("conflict");console.warn("MMD i18n: legacy runtime is still present");return;
  }
  var paths=[{"name":"profiles","exact":["/profiles"]},{"name":"black-card","exact":["/blackcard/black-card"]},{"name":"requests","exact":["/member/requests","/my-mmd/requests","/member/my-mmd/requests"]},{"name":"mms-guide","exact":["/male-massage/how-to-use"]},{"name":"mms-therapists","exact":["/male-massage/therapists/mms","/male-massage/therapists","/therapists"]},{"name":"mms-apply","exact":["/apply/mms-therapist","/apply/mms-therapist-benefits","/apply/mms-therapist-rules"]},{"name":"care-back-wish","exact":["/promotion/6-years-care-back/wish"]},{"name":"care-back","exact":["/promotion/6-years-care-back"]},{"name":"mms","prefix":["/male-massage","/mms"]},{"name":"shop","prefix":["/shop"]}];
  var integrity={"default":"sha384-9c0eDFb73LiIG2wM2dr2R00bmt9+Vkhz/AV4vpnMziJz7TmR9ZL9gWji7fog/KoH","profiles":"sha384-iQouDO9H7fqGwpclHJ7vXvDCb6W2gY8iwzDTiDW3JQmgDZOzGeanVrdzTeAWcHQB","black-card":"sha384-GtpQ8KfPAf/J4HBB43YjEu1fXgQYc9wY+E3A/TiHxugfrDWUQ32O2rnVP0LKQPre","requests":"sha384-WHLXrpM931x9rtQGu52xk1XQrpKvoTOLWYuvUCh+h2zUCMa6RKI4vlwhNJHZaOAv","mms":"sha384-xhOJAI0ccqZ5JrTAzjDllHimlcF6HXSwgSIq5GhW1jfJHJuHFc0beDDBql8B+9Yq","mms-guide":"sha384-pmzIEwbed4VD2QPsaV0Dv+KxxF7fa8DizVjyYx3K76NboF/H0oY6ue8wVhH1ynj+","mms-therapists":"sha384-w0Kegm69PxTFNEo8zSdvSn5zKURbzNopL+/D/YpdPSJVrtY5pqd+BXDqLwRZfTT9","mms-apply":"sha384-3w41UGrfex2X3kFs0274SFxD8/Gta8+xSlYrjLt+XY1Q8KgZ6cIeAsMbe8ULu1oL","shop":"sha384-trhHjoRZF4OwNKdGks2HpjVT6G7B2ZHtEJMncVzMsIdk6i6TfsD+H6VpbIWHmJAb","care-back":"sha384-nv03qPpGMhpHFB9pItQJhDRNZNyrhg7PqMdckkhZJRozDZfbvuGDY+D9C5nHow4O","care-back-wish":"sha384-AFrvlxjkFCbk52YZRPJ0Nnvww93Kr7+M8o/rNo+Ggo/L8IFp77sicqDmQHGIDfN/"};
  var p=(location.pathname||"/").replace(/\/+$/,"")||"/";
  function pick(){
    for(var k=0;k<paths.length;k++){var e=paths[k];if(e.exact&&e.exact.indexOf(p)>=0)return e.name;}
    for(var k=0;k<paths.length;k++){var e=paths[k],prefix=e.prefix||[];
      for(var j=0;j<prefix.length;j++){var q=prefix[j];if(p===q||p.indexOf(q+"/")===0)return e.name;}}
    return "default";
  }
  var name=pick(),hash=integrity[name];
  if(!hash||!/^sha384-[a-z0-9+/]+=*$/i.test(hash)){console.warn("MMD i18n: missing bundle integrity");return;}
  var js=doc.createElement("script");
  js.src=start+sha+"/dist/webflow-i18n/"+name+".js";
  js.integrity=hash;
  js.crossOrigin="anonymous";
  js.async=false;
  js.onerror=function(){status("failed");};
  js.onload=function(){status(window.__MMD_I18N_V21__?"loaded":"failed");};
  window.__MMD_I18N_ROUTE_LOADER_V1__={bundle:name,src:js.src};
  status("loading");
  (doc.head||doc.body||doc.documentElement).appendChild(js);
})();
