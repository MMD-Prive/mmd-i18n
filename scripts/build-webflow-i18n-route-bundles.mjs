/**
 * Build optional Webflow route-specific canonical i18n bundles, without modifying production.
 * No external dependencies; bundles are generated from already reviewed source JS.
 * Runtime: node scripts/build-webflow-i18n-route-bundles.mjs [--out DIR]
 */
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

const repoRoot=fileURLToPath(new URL('../',import.meta.url));
const config=JSON.parse(fs.readFileSync(path.join(repoRoot,'scripts/webflow-i18n-routes.json'),'utf8'));
const i=process.argv.indexOf('--out');
const out=i>=0&&process.argv[i+1]?path.resolve(process.argv[i+1]):path.join(repoRoot,'dist/webflow-i18n');
fs.mkdirSync(out,{recursive:true});
const sri=s=>'sha384-'+createHash('sha384').update(s,'utf8').digest('base64');
const hashes={};
const bundles={};
for(const [name,extra] of Object.entries(config.bundles)){
  if(!/^[a-z][a-z0-9-]*$/.test(name))throw Error('Invalid bundle name');
  const sources=[...config.base,...extra,...config.final];
  const unique=[...new Set(sources)];
  if(unique.length!==sources.length)throw Error('Duplicate source in '+name);
  const code=[
    '/* Generated from MMD canonical i18n — '+name+'; do not hand edit. */',
    ...sources.map(file=>{
      const full=path.join(repoRoot,'assets/i18n',file);
      if(!fs.existsSync(full))throw Error('Missing source '+file);
      return '\n/* SOURCE: '+file+' */\n'+fs.readFileSync(full,'utf8')+'\n;';
    }),
    '\n'
  ].join('\n');
  const filename=name+'.js';
  fs.writeFileSync(path.join(out,filename),code,'utf8');
  hashes[name]=sri(code);
  bundles[name]={filename,integrity:hashes[name],sources};
}
const loaderTemplate=[
  '/* Generated Webflow i18n route loader — SHA/SRI pinned bundles only. */',
  '(function(){',
  '  "use strict";',
  '  if(window.__MMD_I18N_ROUTE_LOADER_V1__)return;',
  '  var doc=document,current=doc.currentScript;',
  '  var src=current&&current.src||"";',
  '  var start="https://cdn.jsdelivr.net/gh/MMD-Prive/mmd-i18n@";',
  '  if(src.indexOf(start)!==0){console.warn("MMD i18n: loader must be pinned");return;}',
  '  var rest=src.slice(start.length),sha=rest.slice(0,40);',
  '  var suffix=rest.slice(40);',
  '  if(!/^[a-f0-9]{40}$/i.test(sha)||suffix!=="/dist/webflow-i18n/global-loader.js"){console.warn("MMD i18n: invalid commit-pinned URL");return;}',
  '  function status(value){doc.documentElement.setAttribute("data-mmd-i18n-bundle",value);}',
  '  var legacyCore=Array.prototype.some.call(doc.scripts,function(script){',
  '    return /\\/i18n\\.core\\.v21\\.js(?:[?#]|$)/i.test(script.src);',
  '  });',
  '  if(window.__MMD_I18N_V21__||legacyCore){',
  '    status("conflict");console.warn("MMD i18n: legacy runtime is still present");return;',
  '  }',
  '  var paths=__ROUTES__;',
  '  var integrity=__HASHES__;',
  '  var p=(location.pathname||"/").replace(/\\/+$/,"")||"/";',
  '  function pick(){',
  '    for(var k=0;k<paths.length;k++){var e=paths[k];if(e.exact&&e.exact.indexOf(p)>=0)return e.name;}',
  '    for(var k=0;k<paths.length;k++){var e=paths[k],prefix=e.prefix||[];',
  '      for(var j=0;j<prefix.length;j++){var q=prefix[j];if(p===q||p.indexOf(q+"/")===0)return e.name;}}',
  '    return "default";',
  '  }',
  '  var name=pick(),hash=integrity[name];',
  '  if(!hash||!/^sha384-[a-z0-9+/]+=*$/i.test(hash)){console.warn("MMD i18n: missing bundle integrity");return;}',
  '  var js=doc.createElement("script");',
  '  js.src=start+sha+"/dist/webflow-i18n/"+name+".js";',
  '  js.integrity=hash;',
  '  js.crossOrigin="anonymous";',
  '  js.async=false;',
  '  js.onerror=function(){status("failed");};',
  '  js.onload=function(){status(window.__MMD_I18N_V21__?"loaded":"failed");};',
  '  window.__MMD_I18N_ROUTE_LOADER_V1__={bundle:name,src:js.src};',
  '  status("loading");',
  '  (doc.head||doc.body||doc.documentElement).appendChild(js);',
  '})();'
];
const loader=loaderTemplate.join('\n').replace('__ROUTES__',JSON.stringify(config.routes)).replace('__HASHES__',JSON.stringify(hashes));
fs.writeFileSync(path.join(out,'global-loader.js'),loader+'\n','utf8');
fs.writeFileSync(path.join(out,'integrity.json'),JSON.stringify({
  createdBy:'scripts/build-webflow-i18n-route-bundles.mjs',
  loaderIntegrity:sri(loader+'\n'),
  bundles
},null,2)+'\n','utf8');
console.log('Generated '+Object.keys(bundles).length+' canonical bundles + loader at '+out);
