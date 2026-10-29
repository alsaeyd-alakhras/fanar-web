import{n as s,r as i}from"./index-BS_IWvA2.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=s("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=s("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=s("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]),c="fnar-invoice-submissions-v1",r=new Set;function h(){try{const t=localStorage.getItem(c);if(!t)return[];const a=JSON.parse(t);return Array.isArray(a)?a.filter(e=>typeof e=="object"&&e!==null&&typeof e.id=="string"&&typeof e.type=="string"&&typeof e.status=="string"):[]}catch{return[]}}let n=[];typeof window<"u"&&(n=h());function d(){r.forEach(t=>t())}function o(t){localStorage.setItem(c,JSON.stringify(t)),n=t,d()}function y(t){return r.add(t),()=>{r.delete(t)}}function p(){return n}function u(){return[]}function m(){return i.useSyncExternalStore(y,p,u)}const S={add(t){const a={...t,id:`FNAR-${crypto.randomUUID()}`,createdAt:new Date().toISOString(),status:"pending"};return o([a,...n]),a},updateStatus(t,a){o(n.map(e=>e.id===t?{...e,status:a}:e))}};export{l as C,g as W,k as a,S as i,m as u};
