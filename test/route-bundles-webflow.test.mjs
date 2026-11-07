import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import vm from 'node:vm';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const root=fileURLToPath(new URL('../',import.meta.url));
function prepare(){
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'mmd-i18n-route-'));
 const ran=spawnSync(process.execPath,[path.join(root,'scripts/build-webflow-i18n-route-bundles.mjs'),'--out',dir],{encoding:'utf8'});
 assert.equal(ran.status,0,ran.stderr);
 return {dir,manifest:JSON.parse(fs.readFileSync(path.join(dir,'integrity.json'),'utf8'))};
}
function openRoute(dir,p){
 const attached=[];
 const document={
  currentScript:{src:'https://cdn.jsdelivr.net/gh/MMD-Prive/mmd-i18n@'+'a'.repeat(40)+'/dist/webflow-i18n/global-loader.js'},
  createElement:()=>({}),
  head:{appendChild:e=>attached.push(e)},
  documentElement:{setAttribute:()=>{}}
 };
 const win={};
 vm.runInNewContext(fs.readFileSync(path.join(dir,'global-loader.js'),'utf8'),{document,window:win,location:{pathname:p},console});
 return {attached,win};
}
test('build produces canonical bundles without duplicating core',()=>{
 const {dir,manifest}=prepare();
 assert.equal(Object.keys(manifest.bundles).length,11);
 for(const [name,b] of Object.entries(manifest.bundles)){
  const code=fs.readFileSync(path.join(dir,b.filename),'utf8');
  assert.equal((code.match(/SOURCE: i18n.core.v21.js/g)||[]).length,1,name);
  assert.equal((code.match(/SOURCE: i18n.dict.js/g)||[]).length,1,name);
  assert.match(b.integrity,/^sha384-/);
 }
 fs.rmSync(dir,{recursive:true,force:true});
});
test('each page injects exactly one route-specific SHA/SRI bundle',()=>{
 const {dir,manifest}=prepare();
 for(const [route,expected] of [
  ['/profiles','profiles'],['/profiles/','profiles'],['/male-massage/home','mms'],
  ['/male-massage/how-to-use','mms-guide'],['/male-massage/therapists/mms','mms-therapists'],
  ['/apply/mms-therapist','mms-apply'],['/shop/products','shop'],
  ['/promotion/6-years-care-back/wish','care-back-wish'],
  ['/partner/apply','default'],['/sigil/model/login','default']]){
   const {attached,win}=openRoute(dir,route);
   assert.equal(attached.length,1,route);
   assert.match(attached[0].src,new RegExp('/'+expected+'\\.js$'));
   assert.equal(attached[0].integrity,manifest.bundles[expected].integrity);
   assert.equal(win.__MMD_I18N_ROUTE_LOADER_V1__.bundle,expected);
 }
 fs.rmSync(dir,{recursive:true,force:true});
});
