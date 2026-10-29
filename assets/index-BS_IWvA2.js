const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ProgramPage-Bxi7GhbR.js","./PageHero-D9zYObnT.js","./ConsultationsPage-DNxe9Hwj.js","./PartnershipsPage-a1Mkqr_F.js","./InvoicesPage-B1VErWXD.js","./useInvoiceDocuments-BmTPvMci.js","./file-text-DcJ8z5xK.js","./arrow-left-BDQJDFem.js","./AcademyDashboard-OlgAXZ5A.js","./useAcademyProgress-D2y0JsJ4.js","./useAcademyQuizzes-C8ROukcT.js","./useAcademyProfile-BLlu2v7W.js","./AcademyCourses-sAvpvKEj.js","./AcademyCourseDetail-Dki81Cmc.js","./AcademyLessonPage-rwE0xddY.js","./AcademyQuizPage-MSqJAquB.js","./AcademyQuizResultsPage-BTXVDr7e.js","./AcademyProfilePage-BEudcc0Y.js","./AcademyProgressPage-Ben7AIfc.js","./ResearchPathPage-BygUCm7S.js","./search-qM19eeBL.js","./InvoiceDocumentPage-BEtoVva4.js","./useInvoiceSubmissions-CionhHL6.js","./AdminInvoicesPage-B9aKDd4Z.js"])))=>i.map(i=>d[i]);
var Yv=Object.defineProperty;var Xv=(t,e,r)=>e in t?Yv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var kn=(t,e,r)=>Xv(t,typeof e!="symbol"?e+"":e,r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var E0={exports:{}},Ku={},A0={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Symbol.for("react.element"),Qv=Symbol.for("react.portal"),Gv=Symbol.for("react.fragment"),Kv=Symbol.for("react.strict_mode"),Jv=Symbol.for("react.profiler"),Zv=Symbol.for("react.provider"),ey=Symbol.for("react.context"),ty=Symbol.for("react.forward_ref"),ry=Symbol.for("react.suspense"),ny=Symbol.for("react.memo"),iy=Symbol.for("react.lazy"),gh=Symbol.iterator;function sy(t){return t===null||typeof t!="object"?null:(t=gh&&t[gh]||t["@@iterator"],typeof t=="function"?t:null)}var T0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P0=Object.assign,D0={};function xa(t,e,r){this.props=t,this.context=e,this.refs=D0,this.updater=r||T0}xa.prototype.isReactComponent={};xa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function R0(){}R0.prototype=xa.prototype;function Lp(t,e,r){this.props=t,this.context=e,this.refs=D0,this.updater=r||T0}var zp=Lp.prototype=new R0;zp.constructor=Lp;P0(zp,xa.prototype);zp.isPureReactComponent=!0;var vh=Array.isArray,M0=Object.prototype.hasOwnProperty,Bp={current:null},O0={key:!0,ref:!0,__self:!0,__source:!0};function L0(t,e,r){var n,i={},s=null,o=null;if(e!=null)for(n in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)M0.call(e,n)&&!O0.hasOwnProperty(n)&&(i[n]=e[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(n in l=t.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:Ko,type:t,key:s,ref:o,props:i,_owner:Bp.current}}function ay(t,e){return{$$typeof:Ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ip(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ko}function oy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var yh=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oy(""+t.key):e.toString(36)}function Ul(t,e,r,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ko:case Qv:o=!0}}if(o)return o=t,i=i(o),t=n===""?"."+bc(o,0):n,vh(i)?(r="",t!=null&&(r=t.replace(yh,"$&/")+"/"),Ul(i,e,r,"",function(c){return c})):i!=null&&(Ip(i)&&(i=ay(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(yh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,n=n===""?".":n+":",vh(t))for(var l=0;l<t.length;l++){s=t[l];var u=n+bc(s,l);o+=Ul(s,e,r,u,i)}else if(u=sy(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=n+bc(s,l++),o+=Ul(s,e,r,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ll(t,e,r){if(t==null)return t;var n=[],i=0;return Ul(t,n,"","",function(s){return e.call(r,s,i++)}),n}function ly(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ht={current:null},Wl={transition:null},uy={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:Bp};function z0(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:ll,forEach:function(t,e,r){ll(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!Ip(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=xa;ue.Fragment=Gv;ue.Profiler=Jv;ue.PureComponent=Lp;ue.StrictMode=Kv;ue.Suspense=ry;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uy;ue.act=z0;ue.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=P0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)M0.call(e,u)&&!O0.hasOwnProperty(u)&&(n[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:Ko,type:t.type,key:i,ref:s,props:n,_owner:o}};ue.createContext=function(t){return t={$$typeof:ey,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zv,_context:t},t.Consumer=t};ue.createElement=L0;ue.createFactory=function(t){var e=L0.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:ty,render:t}};ue.isValidElement=Ip;ue.lazy=function(t){return{$$typeof:iy,_payload:{_status:-1,_result:t},_init:ly}};ue.memo=function(t,e){return{$$typeof:ny,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};ue.unstable_act=z0;ue.useCallback=function(t,e){return Ht.current.useCallback(t,e)};ue.useContext=function(t){return Ht.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Ht.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Ht.current.useEffect(t,e)};ue.useId=function(){return Ht.current.useId()};ue.useImperativeHandle=function(t,e,r){return Ht.current.useImperativeHandle(t,e,r)};ue.useInsertionEffect=function(t,e){return Ht.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Ht.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Ht.current.useMemo(t,e)};ue.useReducer=function(t,e,r){return Ht.current.useReducer(t,e,r)};ue.useRef=function(t){return Ht.current.useRef(t)};ue.useState=function(t){return Ht.current.useState(t)};ue.useSyncExternalStore=function(t,e,r){return Ht.current.useSyncExternalStore(t,e,r)};ue.useTransition=function(){return Ht.current.useTransition()};ue.version="18.3.1";A0.exports=ue;var b=A0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy=b,dy=Symbol.for("react.element"),py=Symbol.for("react.fragment"),fy=Object.prototype.hasOwnProperty,hy=cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,my={key:!0,ref:!0,__self:!0,__source:!0};function B0(t,e,r){var n,i={},s=null,o=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)fy.call(e,n)&&!my.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:dy,type:t,key:s,ref:o,props:i,_owner:hy.current}}Ku.Fragment=py;Ku.jsx=B0;Ku.jsxs=B0;E0.exports=Ku;var a=E0.exports,I0={exports:{}},kr={},$0={exports:{}},U0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,z){var S=D.length;D.push(z);e:for(;0<S;){var G=S-1>>>1,ne=D[G];if(0<i(ne,z))D[G]=z,D[S]=ne,S=G;else break e}}function r(D){return D.length===0?null:D[0]}function n(D){if(D.length===0)return null;var z=D[0],S=D.pop();if(S!==z){D[0]=S;e:for(var G=0,ne=D.length,st=ne>>>1;G<st;){var fe=2*(G+1)-1,Pe=D[fe],je=fe+1,ye=D[je];if(0>i(Pe,S))je<ne&&0>i(ye,Pe)?(D[G]=ye,D[je]=S,G=je):(D[G]=Pe,D[fe]=S,G=fe);else if(je<ne&&0>i(ye,S))D[G]=ye,D[je]=S,G=je;else break e}}return z}function i(D,z){var S=D.sortIndex-z.sortIndex;return S!==0?S:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,f=3,m=!1,y=!1,g=!1,_=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var z=r(c);z!==null;){if(z.callback===null)n(c);else if(z.startTime<=D)n(c),z.sortIndex=z.expirationTime,e(u,z);else break;z=r(c)}}function w(D){if(g=!1,v(D),!y)if(r(u)!==null)y=!0,Q(N);else{var z=r(c);z!==null&&W(w,z.startTime-D)}}function N(D,z){y=!1,g&&(g=!1,h(F),F=-1),m=!0;var S=f;try{for(v(z),p=r(u);p!==null&&(!(p.expirationTime>z)||D&&!L());){var G=p.callback;if(typeof G=="function"){p.callback=null,f=p.priorityLevel;var ne=G(p.expirationTime<=z);z=t.unstable_now(),typeof ne=="function"?p.callback=ne:p===r(u)&&n(u),v(z)}else n(u);p=r(u)}if(p!==null)var st=!0;else{var fe=r(c);fe!==null&&W(w,fe.startTime-z),st=!1}return st}finally{p=null,f=S,m=!1}}var k=!1,j=null,F=-1,A=5,C=-1;function L(){return!(t.unstable_now()-C<A)}function O(){if(j!==null){var D=t.unstable_now();C=D;var z=!0;try{z=j(!0,D)}finally{z?V():(k=!1,j=null)}}else k=!1}var V;if(typeof x=="function")V=function(){x(O)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,H=I.port2;I.port1.onmessage=O,V=function(){H.postMessage(null)}}else V=function(){_(O,0)};function Q(D){j=D,k||(k=!0,V())}function W(D,z){F=_(function(){D(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,Q(N))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var S=f;f=z;try{return D()}finally{f=S}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var S=f;f=D;try{return z()}finally{f=S}},t.unstable_scheduleCallback=function(D,z,S){var G=t.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?G+S:G):S=G,D){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=S+ne,D={id:d++,callback:z,priorityLevel:D,startTime:S,expirationTime:ne,sortIndex:-1},S>G?(D.sortIndex=S,e(c,D),r(u)===null&&D===r(c)&&(g?(h(F),F=-1):g=!0,W(w,S-G))):(D.sortIndex=ne,e(u,D),y||m||(y=!0,Q(N))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var z=f;return function(){var S=f;f=z;try{return D.apply(this,arguments)}finally{f=S}}}})(U0);$0.exports=U0;var xy=$0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy=b,br=xy;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var W0=new Set,No={};function ms(t,e){ra(t,e),ra(t+"Capture",e)}function ra(t,e){for(No[t]=e,t=0;t<e.length;t++)W0.add(e[t])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xd=Object.prototype.hasOwnProperty,vy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wh={},_h={};function yy(t){return xd.call(_h,t)?!0:xd.call(wh,t)?!1:vy.test(t)?_h[t]=!0:(wh[t]=!0,!1)}function wy(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _y(t,e,r,n){if(e===null||typeof e>"u"||wy(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,r,n,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $p=/[\-:]([a-z])/g;function Up(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($p,Up);_t[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($p,Up);_t[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($p,Up);_t[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wp(t,e,r,n){var i=_t.hasOwnProperty(e)?_t[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_y(e,r,i,n)&&(r=null),n||i===null?yy(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var Vn=gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),Vp=Symbol.for("react.strict_mode"),gd=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),vd=Symbol.for("react.suspense"),yd=Symbol.for("react.suspense_list"),qp=Symbol.for("react.memo"),ei=Symbol.for("react.lazy"),q0=Symbol.for("react.offscreen"),bh=Symbol.iterator;function Sa(t){return t===null||typeof t!="object"?null:(t=bh&&t[bh]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,jc;function Ua(t){if(jc===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);jc=e&&e[1]||""}return`
`+jc+t}var Nc=!1;function kc(t,e){if(!t||Nc)return"";Nc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var n=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){n=c}t.call(e.prototype)}else{try{throw Error()}catch(c){n=c}t()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=n.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Nc=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Ua(t):""}function by(t){switch(t.tag){case 5:return Ua(t.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 2:case 15:return t=kc(t.type,!1),t;case 11:return t=kc(t.type.render,!1),t;case 1:return t=kc(t.type,!0),t;default:return""}}function wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Fs:return"Portal";case gd:return"Profiler";case Vp:return"StrictMode";case vd:return"Suspense";case yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H0:return(t.displayName||"Context")+".Consumer";case V0:return(t._context.displayName||"Context")+".Provider";case Hp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qp:return e=t.displayName||null,e!==null?e:wd(t.type)||"Memo";case ei:e=t._payload,t=t._init;try{return wd(t(e))}catch{}}return null}function jy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wd(e);case 8:return e===Vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ny(t){var e=Y0(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cl(t){t._valueTracker||(t._valueTracker=Ny(t))}function X0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=Y0(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function fu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _d(t,e){var r=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function jh(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=bi(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Q0(t,e){e=e.checked,e!=null&&Wp(t,"checked",e,!1)}function bd(t,e){Q0(t,e);var r=bi(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jd(t,e.type,r):e.hasOwnProperty("defaultValue")&&jd(t,e.type,bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nh(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function jd(t,e,r){(e!=="number"||fu(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Wa=Array.isArray;function Ws(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+bi(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Nd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kh(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(R(92));if(Wa(r)){if(1<r.length)throw Error(R(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:bi(r)}}function G0(t,e){var r=bi(e.value),n=bi(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function Sh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function K0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?K0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var dl,J0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ko(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ky=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(t){ky.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),to[e]=to[t]})});function Z0(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||to.hasOwnProperty(t)&&to[t]?(""+e).trim():e+"px"}function ex(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Z0(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var Sy=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sd(t,e){if(e){if(Sy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Cd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fd=null;function Yp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ed=null,Vs=null,Hs=null;function Ch(t){if(t=el(t)){if(typeof Ed!="function")throw Error(R(280));var e=t.stateNode;e&&(e=rc(e),Ed(t.stateNode,t.type,e))}}function tx(t){Vs?Hs?Hs.push(t):Hs=[t]:Vs=t}function rx(){if(Vs){var t=Vs,e=Hs;if(Hs=Vs=null,Ch(t),e)for(t=0;t<e.length;t++)Ch(e[t])}}function nx(t,e){return t(e)}function ix(){}var Sc=!1;function sx(t,e,r){if(Sc)return t(e,r);Sc=!0;try{return nx(t,e,r)}finally{Sc=!1,(Vs!==null||Hs!==null)&&(ix(),rx())}}function So(t,e){var r=t.stateNode;if(r===null)return null;var n=rc(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(R(231,e,typeof r));return r}var Ad=!1;if(Ln)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){Ad=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{Ad=!1}function Cy(t,e,r,n,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(d){this.onError(d)}}var ro=!1,hu=null,mu=!1,Td=null,Fy={onError:function(t){ro=!0,hu=t}};function Ey(t,e,r,n,i,s,o,l,u){ro=!1,hu=null,Cy.apply(Fy,arguments)}function Ay(t,e,r,n,i,s,o,l,u){if(Ey.apply(this,arguments),ro){if(ro){var c=hu;ro=!1,hu=null}else throw Error(R(198));mu||(mu=!0,Td=c)}}function xs(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function ax(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fh(t){if(xs(t)!==t)throw Error(R(188))}function Ty(t){var e=t.alternate;if(!e){if(e=xs(t),e===null)throw Error(R(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Fh(i),t;if(s===n)return Fh(i),e;s=s.sibling}throw Error(R(188))}if(r.return!==n.return)r=i,n=s;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,n=s;break}if(l===n){o=!0,n=i,r=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===r){o=!0,r=s,n=i;break}if(l===n){o=!0,n=s,r=i;break}l=l.sibling}if(!o)throw Error(R(189))}}if(r.alternate!==n)throw Error(R(190))}if(r.tag!==3)throw Error(R(188));return r.stateNode.current===r?t:e}function ox(t){return t=Ty(t),t!==null?lx(t):null}function lx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lx(t);if(e!==null)return e;t=t.sibling}return null}var ux=br.unstable_scheduleCallback,Eh=br.unstable_cancelCallback,Py=br.unstable_shouldYield,Dy=br.unstable_requestPaint,Ye=br.unstable_now,Ry=br.unstable_getCurrentPriorityLevel,Xp=br.unstable_ImmediatePriority,cx=br.unstable_UserBlockingPriority,xu=br.unstable_NormalPriority,My=br.unstable_LowPriority,dx=br.unstable_IdlePriority,Ju=null,xn=null;function Oy(t){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Ju,t,void 0,(t.current.flags&128)===128)}catch{}}var Jr=Math.clz32?Math.clz32:By,Ly=Math.log,zy=Math.LN2;function By(t){return t>>>=0,t===0?32:31-(Ly(t)/zy|0)|0}var pl=64,fl=4194304;function Va(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gu(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,s=t.pingedLanes,o=r&268435455;if(o!==0){var l=o&~i;l!==0?n=Va(l):(s&=o,s!==0&&(n=Va(s)))}else o=r&~i,o!==0?n=Va(o):s!==0&&(n=Va(s));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-Jr(e),i=1<<r,n|=t[r],e&=~i;return n}function Iy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $y(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jr(s),l=1<<o,u=i[o];u===-1?(!(l&r)||l&n)&&(i[o]=Iy(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Pd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function px(){var t=pl;return pl<<=1,!(pl&4194240)&&(pl=64),t}function Cc(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Jo(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jr(e),t[e]=r}function Uy(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-Jr(r),s=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~s}}function Qp(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-Jr(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var ve=0;function fx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hx,Gp,mx,xx,gx,Dd=!1,hl=[],di=null,pi=null,fi=null,Co=new Map,Fo=new Map,ri=[],Wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ah(t,e){switch(t){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":pi=null;break;case"mouseover":case"mouseout":fi=null;break;case"pointerover":case"pointerout":Co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(e.pointerId)}}function Fa(t,e,r,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},e!==null&&(e=el(e),e!==null&&Gp(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Vy(t,e,r,n,i){switch(e){case"focusin":return di=Fa(di,t,e,r,n,i),!0;case"dragenter":return pi=Fa(pi,t,e,r,n,i),!0;case"mouseover":return fi=Fa(fi,t,e,r,n,i),!0;case"pointerover":var s=i.pointerId;return Co.set(s,Fa(Co.get(s)||null,t,e,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Fo.set(s,Fa(Fo.get(s)||null,t,e,r,n,i)),!0}return!1}function vx(t){var e=Hi(t.target);if(e!==null){var r=xs(e);if(r!==null){if(e=r.tag,e===13){if(e=ax(r),e!==null){t.blockedOn=e,gx(t.priority,function(){mx(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Rd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Fd=n,r.target.dispatchEvent(n),Fd=null}else return e=el(r),e!==null&&Gp(e),t.blockedOn=r,!1;e.shift()}return!0}function Th(t,e,r){Vl(t)&&r.delete(e)}function Hy(){Dd=!1,di!==null&&Vl(di)&&(di=null),pi!==null&&Vl(pi)&&(pi=null),fi!==null&&Vl(fi)&&(fi=null),Co.forEach(Th),Fo.forEach(Th)}function Ea(t,e){t.blockedOn===e&&(t.blockedOn=null,Dd||(Dd=!0,br.unstable_scheduleCallback(br.unstable_NormalPriority,Hy)))}function Eo(t){function e(i){return Ea(i,t)}if(0<hl.length){Ea(hl[0],t);for(var r=1;r<hl.length;r++){var n=hl[r];n.blockedOn===t&&(n.blockedOn=null)}}for(di!==null&&Ea(di,t),pi!==null&&Ea(pi,t),fi!==null&&Ea(fi,t),Co.forEach(e),Fo.forEach(e),r=0;r<ri.length;r++)n=ri[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<ri.length&&(r=ri[0],r.blockedOn===null);)vx(r),r.blockedOn===null&&ri.shift()}var qs=Vn.ReactCurrentBatchConfig,vu=!0;function qy(t,e,r,n){var i=ve,s=qs.transition;qs.transition=null;try{ve=1,Kp(t,e,r,n)}finally{ve=i,qs.transition=s}}function Yy(t,e,r,n){var i=ve,s=qs.transition;qs.transition=null;try{ve=4,Kp(t,e,r,n)}finally{ve=i,qs.transition=s}}function Kp(t,e,r,n){if(vu){var i=Rd(t,e,r,n);if(i===null)Lc(t,e,n,yu,r),Ah(t,n);else if(Vy(i,t,e,r,n))n.stopPropagation();else if(Ah(t,n),e&4&&-1<Wy.indexOf(t)){for(;i!==null;){var s=el(i);if(s!==null&&hx(s),s=Rd(t,e,r,n),s===null&&Lc(t,e,n,yu,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else Lc(t,e,n,null,r)}}var yu=null;function Rd(t,e,r,n){if(yu=null,t=Yp(n),t=Hi(t),t!==null)if(e=xs(t),e===null)t=null;else if(r=e.tag,r===13){if(t=ax(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yu=t,null}function yx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ry()){case Xp:return 1;case cx:return 4;case xu:case My:return 16;case dx:return 536870912;default:return 16}default:return 16}}var ii=null,Jp=null,Hl=null;function wx(){if(Hl)return Hl;var t,e=Jp,r=e.length,n,i="value"in ii?ii.value:ii.textContent,s=i.length;for(t=0;t<r&&e[t]===i[t];t++);var o=r-t;for(n=1;n<=o&&e[r-n]===i[s-n];n++);return Hl=i.slice(t,1<n?1-n:void 0)}function ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function Ph(){return!1}function Sr(t){function e(r,n,i,s,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ml:Ph,this.isPropagationStopped=Ph,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zp=Sr(ga),Zo=Be({},ga,{view:0,detail:0}),Xy=Sr(Zo),Fc,Ec,Aa,Zu=Be({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Aa&&(Aa&&t.type==="mousemove"?(Fc=t.screenX-Aa.screenX,Ec=t.screenY-Aa.screenY):Ec=Fc=0,Aa=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),Dh=Sr(Zu),Qy=Be({},Zu,{dataTransfer:0}),Gy=Sr(Qy),Ky=Be({},Zo,{relatedTarget:0}),Ac=Sr(Ky),Jy=Be({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Zy=Sr(Jy),e2=Be({},ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t2=Sr(e2),r2=Be({},ga,{data:0}),Rh=Sr(r2),n2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=s2[t])?!!e[t]:!1}function ef(){return a2}var o2=Be({},Zo,{key:function(t){if(t.key){var e=n2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?i2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(t){return t.type==="keypress"?ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l2=Sr(o2),u2=Be({},Zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mh=Sr(u2),c2=Be({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),d2=Sr(c2),p2=Be({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),f2=Sr(p2),h2=Be({},Zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m2=Sr(h2),x2=[9,13,27,32],tf=Ln&&"CompositionEvent"in window,no=null;Ln&&"documentMode"in document&&(no=document.documentMode);var g2=Ln&&"TextEvent"in window&&!no,_x=Ln&&(!tf||no&&8<no&&11>=no),Oh=" ",Lh=!1;function bx(t,e){switch(t){case"keyup":return x2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function v2(t,e){switch(t){case"compositionend":return jx(e);case"keypress":return e.which!==32?null:(Lh=!0,Oh);case"textInput":return t=e.data,t===Oh&&Lh?null:t;default:return null}}function y2(t,e){if(As)return t==="compositionend"||!tf&&bx(t,e)?(t=wx(),Hl=Jp=ii=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _x&&e.locale!=="ko"?null:e.data;default:return null}}var w2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!w2[t.type]:e==="textarea"}function Nx(t,e,r,n){tx(n),e=wu(e,"onChange"),0<e.length&&(r=new Zp("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var io=null,Ao=null;function _2(t){Mx(t,0)}function ec(t){var e=Ds(t);if(X0(e))return t}function b2(t,e){if(t==="change")return e}var kx=!1;if(Ln){var Tc;if(Ln){var Pc="oninput"in document;if(!Pc){var Bh=document.createElement("div");Bh.setAttribute("oninput","return;"),Pc=typeof Bh.oninput=="function"}Tc=Pc}else Tc=!1;kx=Tc&&(!document.documentMode||9<document.documentMode)}function Ih(){io&&(io.detachEvent("onpropertychange",Sx),Ao=io=null)}function Sx(t){if(t.propertyName==="value"&&ec(Ao)){var e=[];Nx(e,Ao,t,Yp(t)),sx(_2,e)}}function j2(t,e,r){t==="focusin"?(Ih(),io=e,Ao=r,io.attachEvent("onpropertychange",Sx)):t==="focusout"&&Ih()}function N2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(Ao)}function k2(t,e){if(t==="click")return ec(e)}function S2(t,e){if(t==="input"||t==="change")return ec(e)}function C2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:C2;function To(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!xd.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function $h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uh(t,e){var r=$h(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=$h(r)}}function Cx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fx(){for(var t=window,e=fu();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=fu(t.document)}return e}function rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F2(t){var e=Fx(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Cx(r.ownerDocument.documentElement,r)){if(n!==null&&rf(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!t.extend&&s>n&&(i=n,n=s,s=i),i=Uh(r,s);var o=Uh(r,n);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>n?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var E2=Ln&&"documentMode"in document&&11>=document.documentMode,Ts=null,Md=null,so=null,Od=!1;function Wh(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Od||Ts==null||Ts!==fu(n)||(n=Ts,"selectionStart"in n&&rf(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),so&&To(so,n)||(so=n,n=wu(Md,"onSelect"),0<n.length&&(e=new Zp("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=Ts)))}function xl(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Ps={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Dc={},Ex={};Ln&&(Ex=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function tc(t){if(Dc[t])return Dc[t];if(!Ps[t])return t;var e=Ps[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Ex)return Dc[t]=e[r];return t}var Ax=tc("animationend"),Tx=tc("animationiteration"),Px=tc("animationstart"),Dx=tc("transitionend"),Rx=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fi(t,e){Rx.set(t,e),ms(e,[t])}for(var Rc=0;Rc<Vh.length;Rc++){var Mc=Vh[Rc],A2=Mc.toLowerCase(),T2=Mc[0].toUpperCase()+Mc.slice(1);Fi(A2,"on"+T2)}Fi(Ax,"onAnimationEnd");Fi(Tx,"onAnimationIteration");Fi(Px,"onAnimationStart");Fi("dblclick","onDoubleClick");Fi("focusin","onFocus");Fi("focusout","onBlur");Fi(Dx,"onTransitionEnd");ra("onMouseEnter",["mouseout","mouseover"]);ra("onMouseLeave",["mouseout","mouseover"]);ra("onPointerEnter",["pointerout","pointerover"]);ra("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));function Hh(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,Ay(n,e,void 0,t),t.currentTarget=null}function Mx(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var o=n.length-1;0<=o;o--){var l=n[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Hh(i,l,c),s=u}else for(o=0;o<n.length;o++){if(l=n[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Hh(i,l,c),s=u}}}if(mu)throw t=Td,mu=!1,Td=null,t}function Se(t,e){var r=e[$d];r===void 0&&(r=e[$d]=new Set);var n=t+"__bubble";r.has(n)||(Ox(e,t,2,!1),r.add(n))}function Oc(t,e,r){var n=0;e&&(n|=4),Ox(r,t,n,e)}var gl="_reactListening"+Math.random().toString(36).slice(2);function Po(t){if(!t[gl]){t[gl]=!0,W0.forEach(function(r){r!=="selectionchange"&&(P2.has(r)||Oc(r,!1,t),Oc(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gl]||(e[gl]=!0,Oc("selectionchange",!1,e))}}function Ox(t,e,r,n){switch(yx(e)){case 1:var i=qy;break;case 4:i=Yy;break;default:i=Kp}r=i.bind(null,e,r,t),i=void 0,!Ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Lc(t,e,r,n,i){var s=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Hi(l),o===null)return;if(u=o.tag,u===5||u===6){n=s=o;continue e}l=l.parentNode}}n=n.return}sx(function(){var c=s,d=Yp(r),p=[];e:{var f=Rx.get(t);if(f!==void 0){var m=Zp,y=t;switch(t){case"keypress":if(ql(r)===0)break e;case"keydown":case"keyup":m=l2;break;case"focusin":y="focus",m=Ac;break;case"focusout":y="blur",m=Ac;break;case"beforeblur":case"afterblur":m=Ac;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=d2;break;case Ax:case Tx:case Px:m=Zy;break;case Dx:m=f2;break;case"scroll":m=Xy;break;case"wheel":m=m2;break;case"copy":case"cut":case"paste":m=t2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Mh}var g=(e&4)!==0,_=!g&&t==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var x=c,v;x!==null;){v=x;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,h!==null&&(w=So(x,h),w!=null&&g.push(Do(x,w,v)))),_)break;x=x.return}0<g.length&&(f=new m(f,y,null,r,d),p.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&r!==Fd&&(y=r.relatedTarget||r.fromElement)&&(Hi(y)||y[zn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=r.relatedTarget||r.toElement,m=c,y=y?Hi(y):null,y!==null&&(_=xs(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(g=Dh,w="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(g=Mh,w="onPointerLeave",h="onPointerEnter",x="pointer"),_=m==null?f:Ds(m),v=y==null?f:Ds(y),f=new g(w,x+"leave",m,r,d),f.target=_,f.relatedTarget=v,w=null,Hi(d)===c&&(g=new g(h,x+"enter",y,r,d),g.target=v,g.relatedTarget=_,w=g),_=w,m&&y)t:{for(g=m,h=y,x=0,v=g;v;v=_s(v))x++;for(v=0,w=h;w;w=_s(w))v++;for(;0<x-v;)g=_s(g),x--;for(;0<v-x;)h=_s(h),v--;for(;x--;){if(g===h||h!==null&&g===h.alternate)break t;g=_s(g),h=_s(h)}g=null}else g=null;m!==null&&qh(p,f,m,g,!1),y!==null&&_!==null&&qh(p,_,y,g,!0)}}e:{if(f=c?Ds(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=b2;else if(zh(f))if(kx)N=S2;else{N=N2;var k=j2}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=k2);if(N&&(N=N(t,c))){Nx(p,N,r,d);break e}k&&k(t,f,c),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&jd(f,"number",f.value)}switch(k=c?Ds(c):window,t){case"focusin":(zh(k)||k.contentEditable==="true")&&(Ts=k,Md=c,so=null);break;case"focusout":so=Md=Ts=null;break;case"mousedown":Od=!0;break;case"contextmenu":case"mouseup":case"dragend":Od=!1,Wh(p,r,d);break;case"selectionchange":if(E2)break;case"keydown":case"keyup":Wh(p,r,d)}var j;if(tf)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else As?bx(t,r)&&(F="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(F="onCompositionStart");F&&(_x&&r.locale!=="ko"&&(As||F!=="onCompositionStart"?F==="onCompositionEnd"&&As&&(j=wx()):(ii=d,Jp="value"in ii?ii.value:ii.textContent,As=!0)),k=wu(c,F),0<k.length&&(F=new Rh(F,t,null,r,d),p.push({event:F,listeners:k}),j?F.data=j:(j=jx(r),j!==null&&(F.data=j)))),(j=g2?v2(t,r):y2(t,r))&&(c=wu(c,"onBeforeInput"),0<c.length&&(d=new Rh("onBeforeInput","beforeinput",null,r,d),p.push({event:d,listeners:c}),d.data=j))}Mx(p,e)})}function Do(t,e,r){return{instance:t,listener:e,currentTarget:r}}function wu(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=So(t,r),s!=null&&n.unshift(Do(t,s,i)),s=So(t,e),s!=null&&n.push(Do(t,s,i))),t=t.return}return n}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qh(t,e,r,n,i){for(var s=e._reactName,o=[];r!==null&&r!==n;){var l=r,u=l.alternate,c=l.stateNode;if(u!==null&&u===n)break;l.tag===5&&c!==null&&(l=c,i?(u=So(r,s),u!=null&&o.unshift(Do(r,u,l))):i||(u=So(r,s),u!=null&&o.push(Do(r,u,l)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var D2=/\r\n?/g,R2=/\u0000|\uFFFD/g;function Yh(t){return(typeof t=="string"?t:""+t).replace(D2,`
`).replace(R2,"")}function vl(t,e,r){if(e=Yh(e),Yh(t)!==e&&r)throw Error(R(425))}function _u(){}var Ld=null,zd=null;function Bd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Id=typeof setTimeout=="function"?setTimeout:void 0,M2=typeof clearTimeout=="function"?clearTimeout:void 0,Xh=typeof Promise=="function"?Promise:void 0,O2=typeof queueMicrotask=="function"?queueMicrotask:typeof Xh<"u"?function(t){return Xh.resolve(null).then(t).catch(L2)}:Id;function L2(t){setTimeout(function(){throw t})}function zc(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),Eo(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Eo(e)}function hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var va=Math.random().toString(36).slice(2),pn="__reactFiber$"+va,Ro="__reactProps$"+va,zn="__reactContainer$"+va,$d="__reactEvents$"+va,z2="__reactListeners$"+va,B2="__reactHandles$"+va;function Hi(t){var e=t[pn];if(e)return e;for(var r=t.parentNode;r;){if(e=r[zn]||r[pn]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Qh(t);t!==null;){if(r=t[pn])return r;t=Qh(t)}return e}t=r,r=t.parentNode}return null}function el(t){return t=t[pn]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function rc(t){return t[Ro]||null}var Ud=[],Rs=-1;function Ei(t){return{current:t}}function Ce(t){0>Rs||(t.current=Ud[Rs],Ud[Rs]=null,Rs--)}function ke(t,e){Rs++,Ud[Rs]=t.current,t.current=e}var ji={},Mt=Ei(ji),Jt=Ei(!1),as=ji;function na(t,e){var r=t.type.contextTypes;if(!r)return ji;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=e[s];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Zt(t){return t=t.childContextTypes,t!=null}function bu(){Ce(Jt),Ce(Mt)}function Gh(t,e,r){if(Mt.current!==ji)throw Error(R(168));ke(Mt,e),ke(Jt,r)}function Lx(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(R(108,jy(t)||"Unknown",i));return Be({},r,n)}function ju(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,as=Mt.current,ke(Mt,t),ke(Jt,Jt.current),!0}function Kh(t,e,r){var n=t.stateNode;if(!n)throw Error(R(169));r?(t=Lx(t,e,as),n.__reactInternalMemoizedMergedChildContext=t,Ce(Jt),Ce(Mt),ke(Mt,t)):Ce(Jt),ke(Jt,r)}var En=null,nc=!1,Bc=!1;function zx(t){En===null?En=[t]:En.push(t)}function I2(t){nc=!0,zx(t)}function Ai(){if(!Bc&&En!==null){Bc=!0;var t=0,e=ve;try{var r=En;for(ve=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}En=null,nc=!1}catch(i){throw En!==null&&(En=En.slice(t+1)),ux(Xp,Ai),i}finally{ve=e,Bc=!1}}return null}var Ms=[],Os=0,Nu=null,ku=0,Ar=[],Tr=0,os=null,Pn=1,Dn="";function Ii(t,e){Ms[Os++]=ku,Ms[Os++]=Nu,Nu=t,ku=e}function Bx(t,e,r){Ar[Tr++]=Pn,Ar[Tr++]=Dn,Ar[Tr++]=os,os=t;var n=Pn;t=Dn;var i=32-Jr(n)-1;n&=~(1<<i),r+=1;var s=32-Jr(e)+i;if(30<s){var o=i-i%5;s=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Pn=1<<32-Jr(e)+i|r<<i|n,Dn=s+t}else Pn=1<<s|r<<i|n,Dn=t}function nf(t){t.return!==null&&(Ii(t,1),Bx(t,1,0))}function sf(t){for(;t===Nu;)Nu=Ms[--Os],Ms[Os]=null,ku=Ms[--Os],Ms[Os]=null;for(;t===os;)os=Ar[--Tr],Ar[Tr]=null,Dn=Ar[--Tr],Ar[Tr]=null,Pn=Ar[--Tr],Ar[Tr]=null}var wr=null,gr=null,Ee=!1,Kr=null;function Ix(t,e){var r=Rr(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Jh(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wr=t,gr=hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wr=t,gr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=os!==null?{id:Pn,overflow:Dn}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Rr(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,wr=t,gr=null,!0):!1;default:return!1}}function Wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vd(t){if(Ee){var e=gr;if(e){var r=e;if(!Jh(t,e)){if(Wd(t))throw Error(R(418));e=hi(r.nextSibling);var n=wr;e&&Jh(t,e)?Ix(n,r):(t.flags=t.flags&-4097|2,Ee=!1,wr=t)}}else{if(Wd(t))throw Error(R(418));t.flags=t.flags&-4097|2,Ee=!1,wr=t}}}function Zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wr=t}function yl(t){if(t!==wr)return!1;if(!Ee)return Zh(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bd(t.type,t.memoizedProps)),e&&(e=gr)){if(Wd(t))throw $x(),Error(R(418));for(;e;)Ix(t,e),e=hi(e.nextSibling)}if(Zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){gr=hi(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}gr=null}}else gr=wr?hi(t.stateNode.nextSibling):null;return!0}function $x(){for(var t=gr;t;)t=hi(t.nextSibling)}function ia(){gr=wr=null,Ee=!1}function af(t){Kr===null?Kr=[t]:Kr.push(t)}var $2=Vn.ReactCurrentBatchConfig;function Ta(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(R(309));var n=r.stateNode}if(!n)throw Error(R(147,t));var i=n,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!r._owner)throw Error(R(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function em(t){var e=t._init;return e(t._payload)}function Ux(t){function e(h,x){if(t){var v=h.deletions;v===null?(h.deletions=[x],h.flags|=16):v.push(x)}}function r(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function n(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function i(h,x){return h=vi(h,x),h.index=0,h.sibling=null,h}function s(h,x,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<x?(h.flags|=2,x):v):(h.flags|=2,x)):(h.flags|=1048576,x)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function l(h,x,v,w){return x===null||x.tag!==6?(x=qc(v,h.mode,w),x.return=h,x):(x=i(x,v),x.return=h,x)}function u(h,x,v,w){var N=v.type;return N===Es?d(h,x,v.props.children,w,v.key):x!==null&&(x.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ei&&em(N)===x.type)?(w=i(x,v.props),w.ref=Ta(h,x,v),w.return=h,w):(w=Zl(v.type,v.key,v.props,null,h.mode,w),w.ref=Ta(h,x,v),w.return=h,w)}function c(h,x,v,w){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Yc(v,h.mode,w),x.return=h,x):(x=i(x,v.children||[]),x.return=h,x)}function d(h,x,v,w,N){return x===null||x.tag!==7?(x=Ki(v,h.mode,w,N),x.return=h,x):(x=i(x,v),x.return=h,x)}function p(h,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=qc(""+x,h.mode,v),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ul:return v=Zl(x.type,x.key,x.props,null,h.mode,v),v.ref=Ta(h,null,x),v.return=h,v;case Fs:return x=Yc(x,h.mode,v),x.return=h,x;case ei:var w=x._init;return p(h,w(x._payload),v)}if(Wa(x)||Sa(x))return x=Ki(x,h.mode,v,null),x.return=h,x;wl(h,x)}return null}function f(h,x,v,w){var N=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:l(h,x,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ul:return v.key===N?u(h,x,v,w):null;case Fs:return v.key===N?c(h,x,v,w):null;case ei:return N=v._init,f(h,x,N(v._payload),w)}if(Wa(v)||Sa(v))return N!==null?null:d(h,x,v,w,null);wl(h,v)}return null}function m(h,x,v,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(v)||null,l(x,h,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ul:return h=h.get(w.key===null?v:w.key)||null,u(x,h,w,N);case Fs:return h=h.get(w.key===null?v:w.key)||null,c(x,h,w,N);case ei:var k=w._init;return m(h,x,v,k(w._payload),N)}if(Wa(w)||Sa(w))return h=h.get(v)||null,d(x,h,w,N,null);wl(x,w)}return null}function y(h,x,v,w){for(var N=null,k=null,j=x,F=x=0,A=null;j!==null&&F<v.length;F++){j.index>F?(A=j,j=null):A=j.sibling;var C=f(h,j,v[F],w);if(C===null){j===null&&(j=A);break}t&&j&&C.alternate===null&&e(h,j),x=s(C,x,F),k===null?N=C:k.sibling=C,k=C,j=A}if(F===v.length)return r(h,j),Ee&&Ii(h,F),N;if(j===null){for(;F<v.length;F++)j=p(h,v[F],w),j!==null&&(x=s(j,x,F),k===null?N=j:k.sibling=j,k=j);return Ee&&Ii(h,F),N}for(j=n(h,j);F<v.length;F++)A=m(j,h,F,v[F],w),A!==null&&(t&&A.alternate!==null&&j.delete(A.key===null?F:A.key),x=s(A,x,F),k===null?N=A:k.sibling=A,k=A);return t&&j.forEach(function(L){return e(h,L)}),Ee&&Ii(h,F),N}function g(h,x,v,w){var N=Sa(v);if(typeof N!="function")throw Error(R(150));if(v=N.call(v),v==null)throw Error(R(151));for(var k=N=null,j=x,F=x=0,A=null,C=v.next();j!==null&&!C.done;F++,C=v.next()){j.index>F?(A=j,j=null):A=j.sibling;var L=f(h,j,C.value,w);if(L===null){j===null&&(j=A);break}t&&j&&L.alternate===null&&e(h,j),x=s(L,x,F),k===null?N=L:k.sibling=L,k=L,j=A}if(C.done)return r(h,j),Ee&&Ii(h,F),N;if(j===null){for(;!C.done;F++,C=v.next())C=p(h,C.value,w),C!==null&&(x=s(C,x,F),k===null?N=C:k.sibling=C,k=C);return Ee&&Ii(h,F),N}for(j=n(h,j);!C.done;F++,C=v.next())C=m(j,h,F,C.value,w),C!==null&&(t&&C.alternate!==null&&j.delete(C.key===null?F:C.key),x=s(C,x,F),k===null?N=C:k.sibling=C,k=C);return t&&j.forEach(function(O){return e(h,O)}),Ee&&Ii(h,F),N}function _(h,x,v,w){if(typeof v=="object"&&v!==null&&v.type===Es&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ul:e:{for(var N=v.key,k=x;k!==null;){if(k.key===N){if(N=v.type,N===Es){if(k.tag===7){r(h,k.sibling),x=i(k,v.props.children),x.return=h,h=x;break e}}else if(k.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ei&&em(N)===k.type){r(h,k.sibling),x=i(k,v.props),x.ref=Ta(h,k,v),x.return=h,h=x;break e}r(h,k);break}else e(h,k);k=k.sibling}v.type===Es?(x=Ki(v.props.children,h.mode,w,v.key),x.return=h,h=x):(w=Zl(v.type,v.key,v.props,null,h.mode,w),w.ref=Ta(h,x,v),w.return=h,h=w)}return o(h);case Fs:e:{for(k=v.key;x!==null;){if(x.key===k)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){r(h,x.sibling),x=i(x,v.children||[]),x.return=h,h=x;break e}else{r(h,x);break}else e(h,x);x=x.sibling}x=Yc(v,h.mode,w),x.return=h,h=x}return o(h);case ei:return k=v._init,_(h,x,k(v._payload),w)}if(Wa(v))return y(h,x,v,w);if(Sa(v))return g(h,x,v,w);wl(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(r(h,x.sibling),x=i(x,v),x.return=h,h=x):(r(h,x),x=qc(v,h.mode,w),x.return=h,h=x),o(h)):r(h,x)}return _}var sa=Ux(!0),Wx=Ux(!1),Su=Ei(null),Cu=null,Ls=null,of=null;function lf(){of=Ls=Cu=null}function uf(t){var e=Su.current;Ce(Su),t._currentValue=e}function Hd(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function Ys(t,e){Cu=t,of=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kt=!0),t.firstContext=null)}function Br(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(Cu===null)throw Error(R(308));Ls=t,Cu.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var qi=null;function cf(t){qi===null?qi=[t]:qi.push(t)}function Vx(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,cf(e)):(r.next=i.next,i.next=r),e.interleaved=r,Bn(t,n)}function Bn(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var ti=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mi(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,pe&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,Bn(t,r)}return i=n.interleaved,i===null?(e.next=e,cf(n)):(e.next=i.next,i.next=e),n.interleaved=e,Bn(t,r)}function Yl(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Qp(t,r)}}function tm(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?i=s=e:s=s.next=e}else i=s=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Fu(t,e,r,n){var i=t.updateQueue;ti=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var f=l.lane,m=l.eventTime;if((n&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,g=l;switch(f=e,m=r,g.tag){case 1:if(y=g.payload,typeof y=="function"){p=y.call(m,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,f=typeof y=="function"?y.call(m,p,f):y,f==null)break e;p=Be({},p,f);break e;case 2:ti=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=m,u=p):d=d.next=m,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);us|=o,t.lanes=o,t.memoizedState=p}}function rm(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(R(191,i));i.call(n)}}}var tl={},gn=Ei(tl),Mo=Ei(tl),Oo=Ei(tl);function Yi(t){if(t===tl)throw Error(R(174));return t}function pf(t,e){switch(ke(Oo,e),ke(Mo,t),ke(gn,tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kd(e,t)}Ce(gn),ke(gn,e)}function aa(){Ce(gn),Ce(Mo),Ce(Oo)}function qx(t){Yi(Oo.current);var e=Yi(gn.current),r=kd(e,t.type);e!==r&&(ke(Mo,t),ke(gn,r))}function ff(t){Mo.current===t&&(Ce(gn),Ce(Mo))}var Me=Ei(0);function Eu(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function hf(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var Xl=Vn.ReactCurrentDispatcher,$c=Vn.ReactCurrentBatchConfig,ls=0,ze=null,rt=null,ct=null,Au=!1,ao=!1,Lo=0,U2=0;function St(){throw Error(R(321))}function mf(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!tn(t[r],e[r]))return!1;return!0}function xf(t,e,r,n,i,s){if(ls=s,ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?q2:Y2,t=r(n,i),ao){s=0;do{if(ao=!1,Lo=0,25<=s)throw Error(R(301));s+=1,ct=rt=null,e.updateQueue=null,Xl.current=X2,t=r(n,i)}while(ao)}if(Xl.current=Tu,e=rt!==null&&rt.next!==null,ls=0,ct=rt=ze=null,Au=!1,e)throw Error(R(300));return t}function gf(){var t=Lo!==0;return Lo=0,t}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?ze.memoizedState=ct=t:ct=ct.next=t,ct}function Ir(){if(rt===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=ct===null?ze.memoizedState:ct.next;if(e!==null)ct=e,rt=t;else{if(t===null)throw Error(R(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},ct===null?ze.memoizedState=ct=t:ct=ct.next=t}return ct}function zo(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=Ir(),r=e.queue;if(r===null)throw Error(R(311));r.lastRenderedReducer=t;var n=rt,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ls&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:t(n,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=n):u=u.next=p,ze.lanes|=d,us|=d}c=c.next}while(c!==null&&c!==s);u===null?o=n:u.next=l,tn(n,e.memoizedState)||(Kt=!0),e.memoizedState=n,e.baseState=o,e.baseQueue=u,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do s=i.lane,ze.lanes|=s,us|=s,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Wc(t){var e=Ir(),r=e.queue;if(r===null)throw Error(R(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,s=e.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,n]}function Yx(){}function Xx(t,e){var r=ze,n=Ir(),i=e(),s=!tn(n.memoizedState,i);if(s&&(n.memoizedState=i,Kt=!0),n=n.queue,vf(Kx.bind(null,r,n,t),[t]),n.getSnapshot!==e||s||ct!==null&&ct.memoizedState.tag&1){if(r.flags|=2048,Bo(9,Gx.bind(null,r,n,i,e),void 0,null),dt===null)throw Error(R(349));ls&30||Qx(r,e,i)}return i}function Qx(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Gx(t,e,r,n){e.value=r,e.getSnapshot=n,Jx(e)&&Zx(t)}function Kx(t,e,r){return r(function(){Jx(e)&&Zx(t)})}function Jx(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!tn(t,r)}catch{return!0}}function Zx(t){var e=Bn(t,1);e!==null&&Zr(e,t,1,-1)}function nm(t){var e=un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},e.queue=t,t=t.dispatch=H2.bind(null,ze,t),[e.memoizedState,t]}function Bo(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function e1(){return Ir().memoizedState}function Ql(t,e,r,n){var i=un();ze.flags|=t,i.memoizedState=Bo(1|e,r,void 0,n===void 0?null:n)}function ic(t,e,r,n){var i=Ir();n=n===void 0?null:n;var s=void 0;if(rt!==null){var o=rt.memoizedState;if(s=o.destroy,n!==null&&mf(n,o.deps)){i.memoizedState=Bo(e,r,s,n);return}}ze.flags|=t,i.memoizedState=Bo(1|e,r,s,n)}function im(t,e){return Ql(8390656,8,t,e)}function vf(t,e){return ic(2048,8,t,e)}function t1(t,e){return ic(4,2,t,e)}function r1(t,e){return ic(4,4,t,e)}function n1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function i1(t,e,r){return r=r!=null?r.concat([t]):null,ic(4,4,n1.bind(null,e,t),r)}function yf(){}function s1(t,e){var r=Ir();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&mf(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function a1(t,e){var r=Ir();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&mf(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function o1(t,e,r){return ls&21?(tn(r,e)||(r=px(),ze.lanes|=r,us|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=r)}function W2(t,e){var r=ve;ve=r!==0&&4>r?r:4,t(!0);var n=$c.transition;$c.transition={};try{t(!1),e()}finally{ve=r,$c.transition=n}}function l1(){return Ir().memoizedState}function V2(t,e,r){var n=gi(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},u1(t))c1(e,r);else if(r=Vx(t,e,r,n),r!==null){var i=Vt();Zr(r,t,n,i),d1(r,e,n)}}function H2(t,e,r){var n=gi(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(u1(t))c1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,r);if(i.hasEagerState=!0,i.eagerState=l,tn(l,o)){var u=e.interleaved;u===null?(i.next=i,cf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}r=Vx(t,e,i,n),r!==null&&(i=Vt(),Zr(r,t,n,i),d1(r,e,n))}}function u1(t){var e=t.alternate;return t===ze||e!==null&&e===ze}function c1(t,e){ao=Au=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function d1(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Qp(t,r)}}var Tu={readContext:Br,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},q2={readContext:Br,useCallback:function(t,e){return un().memoizedState=[t,e===void 0?null:e],t},useContext:Br,useEffect:im,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Ql(4194308,4,n1.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ql(4,2,t,e)},useMemo:function(t,e){var r=un();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=un();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=V2.bind(null,ze,t),[n.memoizedState,t]},useRef:function(t){var e=un();return t={current:t},e.memoizedState=t},useState:nm,useDebugValue:yf,useDeferredValue:function(t){return un().memoizedState=t},useTransition:function(){var t=nm(!1),e=t[0];return t=W2.bind(null,t[1]),un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=ze,i=un();if(Ee){if(r===void 0)throw Error(R(407));r=r()}else{if(r=e(),dt===null)throw Error(R(349));ls&30||Qx(n,e,r)}i.memoizedState=r;var s={value:r,getSnapshot:e};return i.queue=s,im(Kx.bind(null,n,s,t),[t]),n.flags|=2048,Bo(9,Gx.bind(null,n,s,r,e),void 0,null),r},useId:function(){var t=un(),e=dt.identifierPrefix;if(Ee){var r=Dn,n=Pn;r=(n&~(1<<32-Jr(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=Lo++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=U2++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y2={readContext:Br,useCallback:s1,useContext:Br,useEffect:vf,useImperativeHandle:i1,useInsertionEffect:t1,useLayoutEffect:r1,useMemo:a1,useReducer:Uc,useRef:e1,useState:function(){return Uc(zo)},useDebugValue:yf,useDeferredValue:function(t){var e=Ir();return o1(e,rt.memoizedState,t)},useTransition:function(){var t=Uc(zo)[0],e=Ir().memoizedState;return[t,e]},useMutableSource:Yx,useSyncExternalStore:Xx,useId:l1,unstable_isNewReconciler:!1},X2={readContext:Br,useCallback:s1,useContext:Br,useEffect:vf,useImperativeHandle:i1,useInsertionEffect:t1,useLayoutEffect:r1,useMemo:a1,useReducer:Wc,useRef:e1,useState:function(){return Wc(zo)},useDebugValue:yf,useDeferredValue:function(t){var e=Ir();return rt===null?e.memoizedState=t:o1(e,rt.memoizedState,t)},useTransition:function(){var t=Wc(zo)[0],e=Ir().memoizedState;return[t,e]},useMutableSource:Yx,useSyncExternalStore:Xx,useId:l1,unstable_isNewReconciler:!1};function Qr(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function qd(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:Be({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var sc={isMounted:function(t){return(t=t._reactInternals)?xs(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=Vt(),i=gi(t),s=Mn(n,i);s.payload=e,r!=null&&(s.callback=r),e=mi(t,s,i),e!==null&&(Zr(e,t,i,n),Yl(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=Vt(),i=gi(t),s=Mn(n,i);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=mi(t,s,i),e!==null&&(Zr(e,t,i,n),Yl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Vt(),n=gi(t),i=Mn(r,n);i.tag=2,e!=null&&(i.callback=e),e=mi(t,i,n),e!==null&&(Zr(e,t,n,r),Yl(e,t,n))}};function sm(t,e,r,n,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,o):e.prototype&&e.prototype.isPureReactComponent?!To(r,n)||!To(i,s):!0}function p1(t,e,r){var n=!1,i=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Br(s):(i=Zt(e)?as:Mt.current,n=e.contextTypes,s=(n=n!=null)?na(t,i):ji),e=new e(r,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sc,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function am(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&sc.enqueueReplaceState(e,e.state,null)}function Yd(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},df(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Br(s):(s=Zt(e)?as:Mt.current,i.context=na(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qd(t,e,s,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&sc.enqueueReplaceState(i,i.state,null),Fu(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function oa(t,e){try{var r="",n=e;do r+=by(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Vc(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Xd(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Q2=typeof WeakMap=="function"?WeakMap:Map;function f1(t,e,r){r=Mn(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Du||(Du=!0,ip=n),Xd(t,e)},r}function h1(t,e,r){r=Mn(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){Xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Xd(t,e),typeof n!="function"&&(xi===null?xi=new Set([this]):xi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function om(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new Q2;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=uw.bind(null,t,e,r),e.then(t,t))}function lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function um(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Mn(-1,1),e.tag=2,mi(r,e,1))),r.lanes|=1),t)}var G2=Vn.ReactCurrentOwner,Kt=!1;function Bt(t,e,r,n){e.child=t===null?Wx(e,null,r,n):sa(e,t.child,r,n)}function cm(t,e,r,n,i){r=r.render;var s=e.ref;return Ys(e,i),n=xf(t,e,r,n,s,i),r=gf(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(Ee&&r&&nf(e),e.flags|=1,Bt(t,e,n,i),e.child)}function dm(t,e,r,n,i){if(t===null){var s=r.type;return typeof s=="function"&&!Cf(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,m1(t,e,s,n,i)):(t=Zl(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:To,r(o,n)&&t.ref===e.ref)return In(t,e,i)}return e.flags|=1,t=vi(s,n),t.ref=e.ref,t.return=e,e.child=t}function m1(t,e,r,n,i){if(t!==null){var s=t.memoizedProps;if(To(s,n)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=n=s,(t.lanes&i)!==0)t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,In(t,e,i)}return Qd(t,e,r,n,i)}function x1(t,e,r){var n=e.pendingProps,i=n.children,s=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Bs,dr),dr|=r;else{if(!(r&1073741824))return t=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(Bs,dr),dr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,ke(Bs,dr),dr|=n}else s!==null?(n=s.baseLanes|r,e.memoizedState=null):n=r,ke(Bs,dr),dr|=n;return Bt(t,e,i,r),e.child}function g1(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Qd(t,e,r,n,i){var s=Zt(r)?as:Mt.current;return s=na(e,s),Ys(e,i),r=xf(t,e,r,n,s,i),n=gf(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(Ee&&n&&nf(e),e.flags|=1,Bt(t,e,r,i),e.child)}function pm(t,e,r,n,i){if(Zt(r)){var s=!0;ju(e)}else s=!1;if(Ys(e,i),e.stateNode===null)Gl(t,e),p1(e,r,n),Yd(e,r,n,i),n=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=Br(c):(c=Zt(r)?as:Mt.current,c=na(e,c));var d=r.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==n||u!==c)&&am(e,o,n,c),ti=!1;var f=e.memoizedState;o.state=f,Fu(e,n,o,i),u=e.memoizedState,l!==n||f!==u||Jt.current||ti?(typeof d=="function"&&(qd(e,r,d,n),u=e.memoizedState),(l=ti||sm(e,r,l,n,f,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=u),o.props=n,o.state=u,o.context=c,n=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{o=e.stateNode,Hx(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Qr(e.type,l),o.props=c,p=e.pendingProps,f=o.context,u=r.contextType,typeof u=="object"&&u!==null?u=Br(u):(u=Zt(r)?as:Mt.current,u=na(e,u));var m=r.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||f!==u)&&am(e,o,n,u),ti=!1,f=e.memoizedState,o.state=f,Fu(e,n,o,i);var y=e.memoizedState;l!==p||f!==y||Jt.current||ti?(typeof m=="function"&&(qd(e,r,m,n),y=e.memoizedState),(c=ti||sm(e,r,c,n,f,y,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=y),o.props=n,o.state=y,o.context=u,n=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return Gd(t,e,r,n,s,i)}function Gd(t,e,r,n,i,s){g1(t,e);var o=(e.flags&128)!==0;if(!n&&!o)return i&&Kh(e,r,!1),In(t,e,s);n=e.stateNode,G2.current=e;var l=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&o?(e.child=sa(e,t.child,null,s),e.child=sa(e,null,l,s)):Bt(t,e,l,s),e.memoizedState=n.state,i&&Kh(e,r,!0),e.child}function v1(t){var e=t.stateNode;e.pendingContext?Gh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gh(t,e.context,!1),pf(t,e.containerInfo)}function fm(t,e,r,n,i){return ia(),af(i),e.flags|=256,Bt(t,e,r,n),e.child}var Kd={dehydrated:null,treeContext:null,retryLane:0};function Jd(t){return{baseLanes:t,cachePool:null,transitions:null}}function y1(t,e,r){var n=e.pendingProps,i=Me.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Me,i&1),t===null)return Vd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=n.children,t=n.fallback,s?(n=e.mode,s=e.child,o={mode:"hidden",children:o},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lc(o,n,0,null),t=Ki(t,n,r,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jd(r),e.memoizedState=Kd,t):wf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return K2(t,e,o,n,l,i,r);if(s){s=n.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:n.children};return!(o&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=u,e.deletions=null):(n=vi(i,u),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=vi(l,s):(s=Ki(s,o,r,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,n=s,s=e.child,o=t.child.memoizedState,o=o===null?Jd(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~r,e.memoizedState=Kd,n}return s=t.child,t=s.sibling,n=vi(s,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function wf(t,e){return e=lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _l(t,e,r,n){return n!==null&&af(n),sa(e,t.child,null,r),t=wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function K2(t,e,r,n,i,s,o){if(r)return e.flags&256?(e.flags&=-257,n=Vc(Error(R(422))),_l(t,e,o,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=n.fallback,i=e.mode,n=lc({mode:"visible",children:n.children},i,0,null),s=Ki(s,i,o,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,e.mode&1&&sa(e,t.child,null,o),e.child.memoizedState=Jd(o),e.memoizedState=Kd,s);if(!(e.mode&1))return _l(t,e,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,s=Error(R(419)),n=Vc(s,n,void 0),_l(t,e,o,n)}if(l=(o&t.childLanes)!==0,Kt||l){if(n=dt,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bn(t,i),Zr(n,t,i,-1))}return Sf(),n=Vc(Error(R(421))),_l(t,e,o,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gr=hi(i.nextSibling),wr=e,Ee=!0,Kr=null,t!==null&&(Ar[Tr++]=Pn,Ar[Tr++]=Dn,Ar[Tr++]=os,Pn=t.id,Dn=t.overflow,os=e),e=wf(e,n.children),e.flags|=4096,e)}function hm(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Hd(t.return,e,r)}function Hc(t,e,r,n,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function w1(t,e,r){var n=e.pendingProps,i=n.revealOrder,s=n.tail;if(Bt(t,e,n.children,r),n=Me.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hm(t,r,e);else if(t.tag===19)hm(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ke(Me,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Eu(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),Hc(e,!1,i,r,s);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Eu(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Hc(e,!0,r,null,s);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function In(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),us|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,r=vi(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=vi(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function J2(t,e,r){switch(e.tag){case 3:v1(e),ia();break;case 5:qx(e);break;case 1:Zt(e.type)&&ju(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;ke(Su,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(ke(Me,Me.current&1),e.flags|=128,null):r&e.child.childLanes?y1(t,e,r):(ke(Me,Me.current&1),t=In(t,e,r),t!==null?t.sibling:null);ke(Me,Me.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return w1(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Me,Me.current),n)break;return null;case 22:case 23:return e.lanes=0,x1(t,e,r)}return In(t,e,r)}var _1,Zd,b1,j1;_1=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Zd=function(){};b1=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,Yi(gn.current);var s=null;switch(r){case"input":i=_d(t,i),n=_d(t,n),s=[];break;case"select":i=Be({},i,{value:void 0}),n=Be({},n,{value:void 0}),s=[];break;case"textarea":i=Nd(t,i),n=Nd(t,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=_u)}Sd(r,n);var o;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(No.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in n){var u=n[c];if(l=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(r||(r={}),r[o]=u[o])}else r||(s||(s=[]),s.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(No.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Se("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}r&&(s=s||[]).push("style",r);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};j1=function(t,e,r,n){r!==n&&(e.flags|=4)};function Pa(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function Z2(t,e,r){var n=e.pendingProps;switch(sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return Zt(e.type)&&bu(),Ct(e),null;case 3:return n=e.stateNode,aa(),Ce(Jt),Ce(Mt),hf(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kr!==null&&(op(Kr),Kr=null))),Zd(t,e),Ct(e),null;case 5:ff(e);var i=Yi(Oo.current);if(r=e.type,t!==null&&e.stateNode!=null)b1(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(R(166));return Ct(e),null}if(t=Yi(gn.current),yl(e)){n=e.stateNode,r=e.type;var s=e.memoizedProps;switch(n[pn]=e,n[Ro]=s,t=(e.mode&1)!==0,r){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(i=0;i<Ha.length;i++)Se(Ha[i],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":jh(n,s),Se("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},Se("invalid",n);break;case"textarea":kh(n,s),Se("invalid",n)}Sd(r,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?n.textContent!==l&&(s.suppressHydrationWarning!==!0&&vl(n.textContent,l,t),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&vl(n.textContent,l,t),i=["children",""+l]):No.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Se("scroll",n)}switch(r){case"input":cl(n),Nh(n,s,!0);break;case"textarea":cl(n),Sh(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=_u)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=K0(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=o.createElement(r,{is:n.is}):(t=o.createElement(r),r==="select"&&(o=t,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):t=o.createElementNS(t,r),t[pn]=e,t[Ro]=n,_1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cd(r,n),r){case"dialog":Se("cancel",t),Se("close",t),i=n;break;case"iframe":case"object":case"embed":Se("load",t),i=n;break;case"video":case"audio":for(i=0;i<Ha.length;i++)Se(Ha[i],t);i=n;break;case"source":Se("error",t),i=n;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=n;break;case"details":Se("toggle",t),i=n;break;case"input":jh(t,n),i=_d(t,n),Se("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=Be({},n,{value:void 0}),Se("invalid",t);break;case"textarea":kh(t,n),i=Nd(t,n),Se("invalid",t);break;default:i=n}Sd(r,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?ex(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&J0(t,u)):s==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&ko(t,u):typeof u=="number"&&ko(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Se("scroll",t):u!=null&&Wp(t,s,u,o))}switch(r){case"input":cl(t),Nh(t,n,!1);break;case"textarea":cl(t),Sh(t);break;case"option":n.value!=null&&t.setAttribute("value",""+bi(n.value));break;case"select":t.multiple=!!n.multiple,s=n.value,s!=null?Ws(t,!!n.multiple,s,!1):n.defaultValue!=null&&Ws(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_u)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(t&&e.stateNode!=null)j1(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(R(166));if(r=Yi(Oo.current),Yi(gn.current),yl(e)){if(n=e.stateNode,r=e.memoizedProps,n[pn]=e,(s=n.nodeValue!==r)&&(t=wr,t!==null))switch(t.tag){case 3:vl(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vl(n.nodeValue,r,(t.mode&1)!==0)}s&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[pn]=e,e.stateNode=n}return Ct(e),null;case 13:if(Ce(Me),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&gr!==null&&e.mode&1&&!(e.flags&128))$x(),ia(),e.flags|=98560,s=!1;else if(s=yl(e),n!==null&&n.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[pn]=e}else ia(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),s=!1}else Kr!==null&&(op(Kr),Kr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?it===0&&(it=3):Sf())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return aa(),Zd(t,e),t===null&&Po(e.stateNode.containerInfo),Ct(e),null;case 10:return uf(e.type._context),Ct(e),null;case 17:return Zt(e.type)&&bu(),Ct(e),null;case 19:if(Ce(Me),s=e.memoizedState,s===null)return Ct(e),null;if(n=(e.flags&128)!==0,o=s.rendering,o===null)if(n)Pa(s,!1);else{if(it!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Eu(t),o!==null){for(e.flags|=128,Pa(s,!1),n=o.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)s=r,t=n,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ke(Me,Me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ye()>la&&(e.flags|=128,n=!0,Pa(s,!1),e.lanes=4194304)}else{if(!n)if(t=Eu(o),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return Ct(e),null}else 2*Ye()-s.renderingStartTime>la&&r!==1073741824&&(e.flags|=128,n=!0,Pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(r=s.last,r!==null?r.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ye(),e.sibling=null,r=Me.current,ke(Me,n?r&1|2:r&1),e):(Ct(e),null);case 22:case 23:return kf(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?dr&1073741824&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function ew(t,e){switch(sf(e),e.tag){case 1:return Zt(e.type)&&bu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return aa(),Ce(Jt),Ce(Mt),hf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ff(e),null;case 13:if(Ce(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));ia()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(Me),null;case 4:return aa(),null;case 10:return uf(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var bl=!1,Tt=!1,tw=typeof WeakSet=="function"?WeakSet:Set,$=null;function zs(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ue(t,e,n)}else r.current=null}function ep(t,e,r){try{r()}catch(n){Ue(t,e,n)}}var mm=!1;function rw(t,e){if(Ld=vu,t=Fx(),rf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,f=null;t:for(;;){for(var m;p!==r||i!==0&&p.nodeType!==3||(l=o+i),p!==s||n!==0&&p.nodeType!==3||(u=o+n),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===r&&++c===i&&(l=o),f===s&&++d===n&&(u=o),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(zd={focusedElem:t,selectionRange:r},vu=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,_=y.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:Qr(e.type,g),_);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){Ue(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return y=mm,mm=!1,y}function oo(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ep(e,r,s)}i=i.next}while(i!==n)}}function ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function tp(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function N1(t){var e=t.alternate;e!==null&&(t.alternate=null,N1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[Ro],delete e[$d],delete e[z2],delete e[B2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k1(t){return t.tag===5||t.tag===3||t.tag===4}function xm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rp(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=_u));else if(n!==4&&(t=t.child,t!==null))for(rp(t,e,r),t=t.sibling;t!==null;)rp(t,e,r),t=t.sibling}function np(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(np(t,e,r),t=t.sibling;t!==null;)np(t,e,r),t=t.sibling}var gt=null,Gr=!1;function Gn(t,e,r){for(r=r.child;r!==null;)S1(t,e,r),r=r.sibling}function S1(t,e,r){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Ju,r)}catch{}switch(r.tag){case 5:Tt||zs(r,e);case 6:var n=gt,i=Gr;gt=null,Gn(t,e,r),gt=n,Gr=i,gt!==null&&(Gr?(t=gt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):gt.removeChild(r.stateNode));break;case 18:gt!==null&&(Gr?(t=gt,r=r.stateNode,t.nodeType===8?zc(t.parentNode,r):t.nodeType===1&&zc(t,r),Eo(t)):zc(gt,r.stateNode));break;case 4:n=gt,i=Gr,gt=r.stateNode.containerInfo,Gr=!0,Gn(t,e,r),gt=n,Gr=i;break;case 0:case 11:case 14:case 15:if(!Tt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ep(r,e,o),i=i.next}while(i!==n)}Gn(t,e,r);break;case 1:if(!Tt&&(zs(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Ue(r,e,l)}Gn(t,e,r);break;case 21:Gn(t,e,r);break;case 22:r.mode&1?(Tt=(n=Tt)||r.memoizedState!==null,Gn(t,e,r),Tt=n):Gn(t,e,r);break;default:Gn(t,e,r)}}function gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new tw),e.forEach(function(n){var i=dw.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Yr(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:gt=l.stateNode,Gr=!1;break e;case 3:gt=l.stateNode.containerInfo,Gr=!0;break e;case 4:gt=l.stateNode.containerInfo,Gr=!0;break e}l=l.return}if(gt===null)throw Error(R(160));S1(s,o,i),gt=null,Gr=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ue(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)C1(e,t),e=e.sibling}function C1(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yr(e,t),ln(t),n&4){try{oo(3,t,t.return),ac(3,t)}catch(g){Ue(t,t.return,g)}try{oo(5,t,t.return)}catch(g){Ue(t,t.return,g)}}break;case 1:Yr(e,t),ln(t),n&512&&r!==null&&zs(r,r.return);break;case 5:if(Yr(e,t),ln(t),n&512&&r!==null&&zs(r,r.return),t.flags&32){var i=t.stateNode;try{ko(i,"")}catch(g){Ue(t,t.return,g)}}if(n&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=r!==null?r.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Q0(i,s),Cd(l,o);var c=Cd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?ex(i,p):d==="dangerouslySetInnerHTML"?J0(i,p):d==="children"?ko(i,p):Wp(i,d,p,c)}switch(l){case"input":bd(i,s);break;case"textarea":G0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ws(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ws(i,!!s.multiple,s.defaultValue,!0):Ws(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ro]=s}catch(g){Ue(t,t.return,g)}}break;case 6:if(Yr(e,t),ln(t),n&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(g){Ue(t,t.return,g)}}break;case 3:if(Yr(e,t),ln(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Eo(e.containerInfo)}catch(g){Ue(t,t.return,g)}break;case 4:Yr(e,t),ln(t);break;case 13:Yr(e,t),ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jf=Ye())),n&4&&gm(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(Tt=(c=Tt)||d,Yr(e,t),Tt=c):Yr(e,t),ln(t),n&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(p=$=d;$!==null;){switch(f=$,m=f.child,f.tag){case 0:case 11:case 14:case 15:oo(4,f,f.return);break;case 1:zs(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){n=f,r=f.return;try{e=n,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(g){Ue(n,r,g)}}break;case 5:zs(f,f.return);break;case 22:if(f.memoizedState!==null){ym(p);continue}}m!==null?(m.return=f,$=m):ym(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Z0("display",o))}catch(g){Ue(t,t.return,g)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(g){Ue(t,t.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Yr(e,t),ln(t),n&4&&gm(t);break;case 21:break;default:Yr(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(k1(r)){var n=r;break e}r=r.return}throw Error(R(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(ko(i,""),n.flags&=-33);var s=xm(t);np(t,s,i);break;case 3:case 4:var o=n.stateNode.containerInfo,l=xm(t);rp(t,l,o);break;default:throw Error(R(161))}}catch(u){Ue(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nw(t,e,r){$=t,F1(t)}function F1(t,e,r){for(var n=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||bl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Tt;l=bl;var c=Tt;if(bl=o,(Tt=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?wm(i):u!==null?(u.return=o,$=u):wm(i);for(;s!==null;)$=s,F1(s),s=s.sibling;$=i,bl=l,Tt=c}vm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):vm(t)}}function vm(t){for(;$!==null;){var e=$;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Tt||ac(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Tt)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:Qr(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rm(e,s,n);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}rm(e,o,r)}break;case 5:var l=e.stateNode;if(r===null&&e.flags&4){r=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Eo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Tt||e.flags&512&&tp(e)}catch(f){Ue(e,e.return,f)}}if(e===t){$=null;break}if(r=e.sibling,r!==null){r.return=e.return,$=r;break}$=e.return}}function ym(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var r=e.sibling;if(r!==null){r.return=e.return,$=r;break}$=e.return}}function wm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{ac(4,e)}catch(u){Ue(e,r,u)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(u){Ue(e,i,u)}}var s=e.return;try{tp(e)}catch(u){Ue(e,s,u)}break;case 5:var o=e.return;try{tp(e)}catch(u){Ue(e,o,u)}}}catch(u){Ue(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var iw=Math.ceil,Pu=Vn.ReactCurrentDispatcher,_f=Vn.ReactCurrentOwner,Lr=Vn.ReactCurrentBatchConfig,pe=0,dt=null,Je=null,yt=0,dr=0,Bs=Ei(0),it=0,Io=null,us=0,oc=0,bf=0,lo=null,Qt=null,jf=0,la=1/0,Cn=null,Du=!1,ip=null,xi=null,jl=!1,si=null,Ru=0,uo=0,sp=null,Kl=-1,Jl=0;function Vt(){return pe&6?Ye():Kl!==-1?Kl:Kl=Ye()}function gi(t){return t.mode&1?pe&2&&yt!==0?yt&-yt:$2.transition!==null?(Jl===0&&(Jl=px()),Jl):(t=ve,t!==0||(t=window.event,t=t===void 0?16:yx(t.type)),t):1}function Zr(t,e,r,n){if(50<uo)throw uo=0,sp=null,Error(R(185));Jo(t,r,n),(!(pe&2)||t!==dt)&&(t===dt&&(!(pe&2)&&(oc|=r),it===4&&ni(t,yt)),er(t,n),r===1&&pe===0&&!(e.mode&1)&&(la=Ye()+500,nc&&Ai()))}function er(t,e){var r=t.callbackNode;$y(t,e);var n=gu(t,t===dt?yt:0);if(n===0)r!==null&&Eh(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&Eh(r),e===1)t.tag===0?I2(_m.bind(null,t)):zx(_m.bind(null,t)),O2(function(){!(pe&6)&&Ai()}),r=null;else{switch(fx(n)){case 1:r=Xp;break;case 4:r=cx;break;case 16:r=xu;break;case 536870912:r=dx;break;default:r=xu}r=O1(r,E1.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function E1(t,e){if(Kl=-1,Jl=0,pe&6)throw Error(R(327));var r=t.callbackNode;if(Xs()&&t.callbackNode!==r)return null;var n=gu(t,t===dt?yt:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Mu(t,n);else{e=n;var i=pe;pe|=2;var s=T1();(dt!==t||yt!==e)&&(Cn=null,la=Ye()+500,Gi(t,e));do try{ow();break}catch(l){A1(t,l)}while(!0);lf(),Pu.current=s,pe=i,Je!==null?e=0:(dt=null,yt=0,e=it)}if(e!==0){if(e===2&&(i=Pd(t),i!==0&&(n=i,e=ap(t,i))),e===1)throw r=Io,Gi(t,0),ni(t,n),er(t,Ye()),r;if(e===6)ni(t,n);else{if(i=t.current.alternate,!(n&30)&&!sw(i)&&(e=Mu(t,n),e===2&&(s=Pd(t),s!==0&&(n=s,e=ap(t,s))),e===1))throw r=Io,Gi(t,0),ni(t,n),er(t,Ye()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(R(345));case 2:$i(t,Qt,Cn);break;case 3:if(ni(t,n),(n&130023424)===n&&(e=jf+500-Ye(),10<e)){if(gu(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Id($i.bind(null,t,Qt,Cn),e);break}$i(t,Qt,Cn);break;case 4:if(ni(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var o=31-Jr(n);s=1<<o,o=e[o],o>i&&(i=o),n&=~s}if(n=i,n=Ye()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*iw(n/1960))-n,10<n){t.timeoutHandle=Id($i.bind(null,t,Qt,Cn),n);break}$i(t,Qt,Cn);break;case 5:$i(t,Qt,Cn);break;default:throw Error(R(329))}}}return er(t,Ye()),t.callbackNode===r?E1.bind(null,t):null}function ap(t,e){var r=lo;return t.current.memoizedState.isDehydrated&&(Gi(t,e).flags|=256),t=Mu(t,e),t!==2&&(e=Qt,Qt=r,e!==null&&op(e)),t}function op(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function sw(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ni(t,e){for(e&=~bf,e&=~oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Jr(e),n=1<<r;t[r]=-1,e&=~n}}function _m(t){if(pe&6)throw Error(R(327));Xs();var e=gu(t,0);if(!(e&1))return er(t,Ye()),null;var r=Mu(t,e);if(t.tag!==0&&r===2){var n=Pd(t);n!==0&&(e=n,r=ap(t,n))}if(r===1)throw r=Io,Gi(t,0),ni(t,e),er(t,Ye()),r;if(r===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$i(t,Qt,Cn),er(t,Ye()),null}function Nf(t,e){var r=pe;pe|=1;try{return t(e)}finally{pe=r,pe===0&&(la=Ye()+500,nc&&Ai())}}function cs(t){si!==null&&si.tag===0&&!(pe&6)&&Xs();var e=pe;pe|=1;var r=Lr.transition,n=ve;try{if(Lr.transition=null,ve=1,t)return t()}finally{ve=n,Lr.transition=r,pe=e,!(pe&6)&&Ai()}}function kf(){dr=Bs.current,Ce(Bs)}function Gi(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,M2(r)),Je!==null)for(r=Je.return;r!==null;){var n=r;switch(sf(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&bu();break;case 3:aa(),Ce(Jt),Ce(Mt),hf();break;case 5:ff(n);break;case 4:aa();break;case 13:Ce(Me);break;case 19:Ce(Me);break;case 10:uf(n.type._context);break;case 22:case 23:kf()}r=r.return}if(dt=t,Je=t=vi(t.current,null),yt=dr=e,it=0,Io=null,bf=oc=us=0,Qt=lo=null,qi!==null){for(e=0;e<qi.length;e++)if(r=qi[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var o=s.next;s.next=i,n.next=o}r.pending=n}qi=null}return t}function A1(t,e){do{var r=Je;try{if(lf(),Xl.current=Tu,Au){for(var n=ze.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Au=!1}if(ls=0,ct=rt=ze=null,ao=!1,Lo=0,_f.current=null,r===null||r.return===null){it=1,Io=e,Je=null;break}e:{var s=t,o=r.return,l=r,u=e;if(e=yt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=lm(o);if(m!==null){m.flags&=-257,um(m,o,l,s,e),m.mode&1&&om(s,c,e),e=m,u=c;var y=e.updateQueue;if(y===null){var g=new Set;g.add(u),e.updateQueue=g}else y.add(u);break e}else{if(!(e&1)){om(s,c,e),Sf();break e}u=Error(R(426))}}else if(Ee&&l.mode&1){var _=lm(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),um(_,o,l,s,e),af(oa(u,l));break e}}s=u=oa(u,l),it!==4&&(it=2),lo===null?lo=[s]:lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=f1(s,u,e);tm(s,h);break e;case 1:l=u;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(xi===null||!xi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=h1(s,l,e);tm(s,w);break e}}s=s.return}while(s!==null)}D1(r)}catch(N){e=N,Je===r&&r!==null&&(Je=r=r.return);continue}break}while(!0)}function T1(){var t=Pu.current;return Pu.current=Tu,t===null?Tu:t}function Sf(){(it===0||it===3||it===2)&&(it=4),dt===null||!(us&268435455)&&!(oc&268435455)||ni(dt,yt)}function Mu(t,e){var r=pe;pe|=2;var n=T1();(dt!==t||yt!==e)&&(Cn=null,Gi(t,e));do try{aw();break}catch(i){A1(t,i)}while(!0);if(lf(),pe=r,Pu.current=n,Je!==null)throw Error(R(261));return dt=null,yt=0,it}function aw(){for(;Je!==null;)P1(Je)}function ow(){for(;Je!==null&&!Py();)P1(Je)}function P1(t){var e=M1(t.alternate,t,dr);t.memoizedProps=t.pendingProps,e===null?D1(t):Je=e,_f.current=null}function D1(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=ew(r,e),r!==null){r.flags&=32767,Je=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{it=6,Je=null;return}}else if(r=Z2(r,e,dr),r!==null){Je=r;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);it===0&&(it=5)}function $i(t,e,r){var n=ve,i=Lr.transition;try{Lr.transition=null,ve=1,lw(t,e,r,n)}finally{Lr.transition=i,ve=n}return null}function lw(t,e,r,n){do Xs();while(si!==null);if(pe&6)throw Error(R(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(Uy(t,s),t===dt&&(Je=dt=null,yt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||jl||(jl=!0,O1(xu,function(){return Xs(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Lr.transition,Lr.transition=null;var o=ve;ve=1;var l=pe;pe|=4,_f.current=null,rw(t,r),C1(r,t),F2(zd),vu=!!Ld,zd=Ld=null,t.current=r,nw(r),Dy(),pe=l,ve=o,Lr.transition=s}else t.current=r;if(jl&&(jl=!1,si=t,Ru=i),s=t.pendingLanes,s===0&&(xi=null),Oy(r.stateNode),er(t,Ye()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Du)throw Du=!1,t=ip,ip=null,t;return Ru&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===sp?uo++:(uo=0,sp=t):uo=0,Ai(),null}function Xs(){if(si!==null){var t=fx(Ru),e=Lr.transition,r=ve;try{if(Lr.transition=null,ve=16>t?16:t,si===null)var n=!1;else{if(t=si,si=null,Ru=0,pe&6)throw Error(R(331));var i=pe;for(pe|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:oo(8,d,s)}var p=d.child;if(p!==null)p.return=d,$=p;else for(;$!==null;){d=$;var f=d.sibling,m=d.return;if(N1(d),d===c){$=null;break}if(f!==null){f.return=m,$=f;break}$=m}}}var y=s.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,$=h;break e}$=s.return}}var x=t.current;for($=x;$!==null;){o=$;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,$=v;else e:for(o=x;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ac(9,l)}}catch(N){Ue(l,l.return,N)}if(l===o){$=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,$=w;break e}$=l.return}}if(pe=i,Ai(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Ju,t)}catch{}n=!0}return n}finally{ve=r,Lr.transition=e}}return!1}function bm(t,e,r){e=oa(r,e),e=f1(t,e,1),t=mi(t,e,1),e=Vt(),t!==null&&(Jo(t,1,e),er(t,e))}function Ue(t,e,r){if(t.tag===3)bm(t,t,r);else for(;e!==null;){if(e.tag===3){bm(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(xi===null||!xi.has(n))){t=oa(r,t),t=h1(e,t,1),e=mi(e,t,1),t=Vt(),e!==null&&(Jo(e,1,t),er(e,t));break}}e=e.return}}function uw(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&r,dt===t&&(yt&r)===r&&(it===4||it===3&&(yt&130023424)===yt&&500>Ye()-jf?Gi(t,0):bf|=r),er(t,e)}function R1(t,e){e===0&&(t.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var r=Vt();t=Bn(t,e),t!==null&&(Jo(t,e,r),er(t,r))}function cw(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),R1(t,r)}function dw(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(R(314))}n!==null&&n.delete(e),R1(t,r)}var M1;M1=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Kt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Kt=!1,J2(t,e,r);Kt=!!(t.flags&131072)}else Kt=!1,Ee&&e.flags&1048576&&Bx(e,ku,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Gl(t,e),t=e.pendingProps;var i=na(e,Mt.current);Ys(e,r),i=xf(null,e,n,t,i,r);var s=gf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(n)?(s=!0,ju(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,df(e),i.updater=sc,e.stateNode=i,i._reactInternals=e,Yd(e,n,t,r),e=Gd(null,e,n,!0,s,r)):(e.tag=0,Ee&&s&&nf(e),Bt(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(Gl(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=fw(n),t=Qr(n,t),i){case 0:e=Qd(null,e,n,t,r);break e;case 1:e=pm(null,e,n,t,r);break e;case 11:e=cm(null,e,n,t,r);break e;case 14:e=dm(null,e,n,Qr(n.type,t),r);break e}throw Error(R(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Qr(n,i),Qd(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Qr(n,i),pm(t,e,n,i,r);case 3:e:{if(v1(e),t===null)throw Error(R(387));n=e.pendingProps,s=e.memoizedState,i=s.element,Hx(t,e),Fu(e,n,null,r);var o=e.memoizedState;if(n=o.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=oa(Error(R(423)),e),e=fm(t,e,n,r,i);break e}else if(n!==i){i=oa(Error(R(424)),e),e=fm(t,e,n,r,i);break e}else for(gr=hi(e.stateNode.containerInfo.firstChild),wr=e,Ee=!0,Kr=null,r=Wx(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ia(),n===i){e=In(t,e,r);break e}Bt(t,e,n,r)}e=e.child}return e;case 5:return qx(e),t===null&&Vd(e),n=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bd(n,i)?o=null:s!==null&&Bd(n,s)&&(e.flags|=32),g1(t,e),Bt(t,e,o,r),e.child;case 6:return t===null&&Vd(e),null;case 13:return y1(t,e,r);case 4:return pf(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=sa(e,null,n,r):Bt(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Qr(n,i),cm(t,e,n,i,r);case 7:return Bt(t,e,e.pendingProps,r),e.child;case 8:return Bt(t,e,e.pendingProps.children,r),e.child;case 12:return Bt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(Su,n._currentValue),n._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!Jt.current){e=In(t,e,r);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===n){if(s.tag===1){u=Mn(-1,r&-r),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=r,u=s.alternate,u!==null&&(u.lanes|=r),Hd(s.return,r,e),l.lanes|=r;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Hd(o,r,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Bt(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,Ys(e,r),i=Br(i),n=n(i),e.flags|=1,Bt(t,e,n,r),e.child;case 14:return n=e.type,i=Qr(n,e.pendingProps),i=Qr(n.type,i),dm(t,e,n,i,r);case 15:return m1(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Qr(n,i),Gl(t,e),e.tag=1,Zt(n)?(t=!0,ju(e)):t=!1,Ys(e,r),p1(e,n,i),Yd(e,n,i,r),Gd(null,e,n,!0,t,r);case 19:return w1(t,e,r);case 22:return x1(t,e,r)}throw Error(R(156,e.tag))};function O1(t,e){return ux(t,e)}function pw(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rr(t,e,r,n){return new pw(t,e,r,n)}function Cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fw(t){if(typeof t=="function")return Cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hp)return 11;if(t===qp)return 14}return 2}function vi(t,e){var r=t.alternate;return r===null?(r=Rr(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Zl(t,e,r,n,i,s){var o=2;if(n=t,typeof t=="function")Cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Ki(r.children,i,s,e);case Vp:o=8,i|=8;break;case gd:return t=Rr(12,r,e,i|2),t.elementType=gd,t.lanes=s,t;case vd:return t=Rr(13,r,e,i),t.elementType=vd,t.lanes=s,t;case yd:return t=Rr(19,r,e,i),t.elementType=yd,t.lanes=s,t;case q0:return lc(r,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V0:o=10;break e;case H0:o=9;break e;case Hp:o=11;break e;case qp:o=14;break e;case ei:o=16,n=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Rr(o,r,e,i),e.elementType=t,e.type=n,e.lanes=s,e}function Ki(t,e,r,n){return t=Rr(7,t,n,e),t.lanes=r,t}function lc(t,e,r,n){return t=Rr(22,t,n,e),t.elementType=q0,t.lanes=r,t.stateNode={isHidden:!1},t}function qc(t,e,r){return t=Rr(6,t,null,e),t.lanes=r,t}function Yc(t,e,r){return e=Rr(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hw(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cc(0),this.expirationTimes=Cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cc(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ff(t,e,r,n,i,s,o,l,u){return t=new hw(t,e,r,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rr(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(s),t}function mw(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function L1(t){if(!t)return ji;t=t._reactInternals;e:{if(xs(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var r=t.type;if(Zt(r))return Lx(t,r,e)}return e}function z1(t,e,r,n,i,s,o,l,u){return t=Ff(r,n,!0,t,i,s,o,l,u),t.context=L1(null),r=t.current,n=Vt(),i=gi(r),s=Mn(n,i),s.callback=e??null,mi(r,s,i),t.current.lanes=i,Jo(t,i,n),er(t,n),t}function uc(t,e,r,n){var i=e.current,s=Vt(),o=gi(i);return r=L1(r),e.context===null?e.context=r:e.pendingContext=r,e=Mn(s,o),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=mi(i,e,o),t!==null&&(Zr(t,i,o,s),Yl(t,i,o)),o}function Ou(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Ef(t,e){jm(t,e),(t=t.alternate)&&jm(t,e)}function xw(){return null}var B1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Af(t){this._internalRoot=t}cc.prototype.render=Af.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));uc(t,e,null,null)};cc.prototype.unmount=Af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cs(function(){uc(null,t,null,null)}),e[zn]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=xx();t={blockedOn:null,target:t,priority:e};for(var r=0;r<ri.length&&e!==0&&e<ri[r].priority;r++);ri.splice(r,0,t),r===0&&vx(t)}};function Tf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function gw(t,e,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var c=Ou(o);s.call(c)}}var o=z1(e,n,t,0,null,!1,!1,"",Nm);return t._reactRootContainer=o,t[zn]=o.current,Po(t.nodeType===8?t.parentNode:t),cs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var c=Ou(u);l.call(c)}}var u=Ff(t,0,!1,null,null,!1,!1,"",Nm);return t._reactRootContainer=u,t[zn]=u.current,Po(t.nodeType===8?t.parentNode:t),cs(function(){uc(e,u,r,n)}),u}function pc(t,e,r,n,i){var s=r._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ou(o);l.call(u)}}uc(e,o,t,i)}else o=gw(r,e,t,i,n);return Ou(o)}hx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Va(e.pendingLanes);r!==0&&(Qp(e,r|1),er(e,Ye()),!(pe&6)&&(la=Ye()+500,Ai()))}break;case 13:cs(function(){var n=Bn(t,1);if(n!==null){var i=Vt();Zr(n,t,1,i)}}),Ef(t,1)}};Gp=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var r=Vt();Zr(e,t,134217728,r)}Ef(t,134217728)}};mx=function(t){if(t.tag===13){var e=gi(t),r=Bn(t,e);if(r!==null){var n=Vt();Zr(r,t,e,n)}Ef(t,e)}};xx=function(){return ve};gx=function(t,e){var r=ve;try{return ve=t,e()}finally{ve=r}};Ed=function(t,e,r){switch(e){case"input":if(bd(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=rc(n);if(!i)throw Error(R(90));X0(n),bd(n,i)}}}break;case"textarea":G0(t,r);break;case"select":e=r.value,e!=null&&Ws(t,!!r.multiple,e,!1)}};nx=Nf;ix=cs;var vw={usingClientEntryPoint:!1,Events:[el,Ds,rc,tx,rx,Nf]},Da={findFiberByHostInstance:Hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yw={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ox(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Ju=Nl.inject(yw),xn=Nl}catch{}}kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vw;kr.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tf(e))throw Error(R(200));return mw(t,e,null,r)};kr.createRoot=function(t,e){if(!Tf(t))throw Error(R(299));var r=!1,n="",i=B1;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ff(t,1,!1,null,null,r,!1,n,i),t[zn]=e.current,Po(t.nodeType===8?t.parentNode:t),new Af(e)};kr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=ox(e),t=t===null?null:t.stateNode,t};kr.flushSync=function(t){return cs(t)};kr.hydrate=function(t,e,r){if(!dc(e))throw Error(R(200));return pc(null,t,e,!0,r)};kr.hydrateRoot=function(t,e,r){if(!Tf(t))throw Error(R(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",o=B1;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=z1(e,null,t,1,r??null,i,!1,s,o),t[zn]=e.current,Po(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new cc(e)};kr.render=function(t,e,r){if(!dc(e))throw Error(R(200));return pc(null,t,e,!1,r)};kr.unmountComponentAtNode=function(t){if(!dc(t))throw Error(R(40));return t._reactRootContainer?(cs(function(){pc(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};kr.unstable_batchedUpdates=Nf;kr.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!dc(r))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return pc(t,e,r,!1,n)};kr.version="18.3.1-next-f1338f8080-20240426";function I1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I1)}catch(t){console.error(t)}}I1(),I0.exports=kr;var ww=I0.exports,$1,km=ww;$1=km.createRoot,km.hydrateRoot;const _w="modulepreload",bw=function(t,e){return new URL(t,e).href},Sm={},ft=function(e,r,n){let i=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(r.map(c=>{if(c=bw(c,n),c in Sm)return;Sm[c]=!0;const d=c.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!n)for(let y=o.length-1;y>=0;y--){const g=o[y];if(g.href===c&&(!d||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":_w,d||(m.as="script"),m.crossOrigin="",m.href=c,u&&m.setAttribute("nonce",u),document.head.appendChild(m),d)return new Promise((y,g)=>{m.addEventListener("load",y),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Pf=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,U1=/^[\\/]{2}/;function jw(t,e){return e+t.replace(/\\/g,"/")}var Cm="popstate";function Fm(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function Nw(t={}){function e(n,i){var c;let s=(c=i.state)==null?void 0:c.masked,{pathname:o,search:l,hash:u}=s||n.location;return lp("",{pathname:o,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default",s?{pathname:n.location.pathname,search:n.location.search,hash:n.location.hash}:void 0)}function r(n,i){return typeof i=="string"?i:ds(i)}return Sw(e,r,null,t)}function Te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kw(){return Math.random().toString(36).substring(2,10)}function Em(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function lp(t,e,r=null,n,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ya(e):e,state:r,key:e&&e.key||n||kw(),mask:i}}function ds({pathname:t="/",search:e="",hash:r=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ya(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substring(r),t=t.substring(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substring(n),t=t.substring(0,n)),t&&(e.pathname=t)}return e}function Sw(t,e,r,n={}){let{window:i=document.defaultView,v5Compat:s=!1}=n,o=i.history,l="POP",u=null,c=d();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function d(){return(o.state||{idx:null}).idx}function p(){l="POP";let _=d(),h=_==null?null:_-c;c=_,u&&u({action:l,location:g.location,delta:h})}function f(_,h){l="PUSH";let x=Fm(_)?_:lp(g.location,_,h);c=d()+1;let v=Em(x,c),w=g.createHref(x.mask||x);try{o.pushState(v,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(w)}s&&u&&u({action:l,location:g.location,delta:1})}function m(_,h){l="REPLACE";let x=Fm(_)?_:lp(g.location,_,h);c=d();let v=Em(x,c),w=g.createHref(x.mask||x);o.replaceState(v,"",w),s&&u&&u({action:l,location:g.location,delta:0})}function y(_){return Cw(i,_)}let g={get action(){return l},get location(){return t(i,o)},listen(_){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Cm,p),u=_,()=>{i.removeEventListener(Cm,p),u=null}},createHref(_){return e(i,_)},createURL:y,encodeLocation(_){let h=y(_);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:m,go(_){return o.go(_)}};return g}function Cw(t,e,r=!1){let n="http://localhost";t&&(n=t.location.origin!=="null"?t.location.origin:t.location.href),Te(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:ds(e);return i=i.replace(/ $/,"%20"),!r&&U1.test(i)&&(i=n+i),new URL(i,n)}function W1(t,e,r="/"){return Fw(t,e,r,!1)}function Fw(t,e,r,n,i){let s=typeof e=="string"?ya(e):e,o=$n(s.pathname||"/",r);if(o==null)return null;let l=Ew(t),u=null,c=Iw(o);for(let d=0;u==null&&d<l.length;++d)u=Bw(l[d],c,n);return u}function Ew(t){let e=V1(t);return Aw(e),e}function V1(t,e=[],r=[],n="",i=!1){let s=(o,l,u=i,c)=>{let d={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(n)&&u)return;Te(d.relativePath.startsWith(n),`Absolute route path "${d.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(n.length)}let p=en([n,d.relativePath]),f=r.concat(d);o.children&&o.children.length>0&&(Te(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),V1(o.children,e,f,p,u)),!(o.path==null&&!o.index)&&e.push({path:p,score:Lw(p,o.index),routesMeta:f.map((m,y)=>{let[g,_]=Y1(m.relativePath,m.caseSensitive,y===f.length-1);return{...m,matcher:g,compiledParams:_}})})};return t.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))s(o,l);else for(let c of H1(o.path))s(o,l,!0,c)}),e}function H1(t){let e=t.split("/");if(e.length===0)return[];let[r,...n]=e,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let o=H1(n.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function Aw(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:zw(e.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var Tw=/^:[\w-]+$/,Pw=3,Dw=2,Rw=1,Mw=10,Ow=-2,Am=t=>t==="*";function Lw(t,e){let r=t.split("/"),n=r.length;return r.some(Am)&&(n+=Ow),e&&(n+=Dw),r.filter(i=>!Am(i)).reduce((i,s)=>i+(Tw.test(s)?Pw:s===""?Rw:Mw),n)}function zw(t,e){return t.length===e.length&&t.slice(0,-1).every((n,i)=>n===e[i])?t[t.length-1]-e[e.length-1]:0}function Bw(t,e,r=!1){let{routesMeta:n}=t,i={},s="/",o=[];for(let l=0;l<n.length;++l){let u=n[l],c=l===n.length-1,d=s==="/"?e:e.slice(s.length)||"/",p={path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f=u.matcher&&u.compiledParams?q1(p,d,u.matcher,u.compiledParams):Lu(p,d),m=u.route;if(!f&&c&&r&&!n[n.length-1].route.index&&(f=Lu({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:en([s,f.pathname]),pathnameBase:Ww(en([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=en([s,f.pathnameBase]))}return o}function Lu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,n]=Y1(t.path,t.caseSensitive,t.end);return q1(t,e,r,n)}function q1(t,e,r,n){let i=e.match(r);if(!i)return null;let s=i[0],o=ua(s,1),l=i.slice(1);return{params:n.reduce((c,{paramName:d,isOptional:p},f)=>{if(d==="*"){let y=l[f]||"";o=ua(s.slice(0,s.length-y.length),1)}const m=l[f];return p&&!m?c[d]=void 0:c[d]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Y1(t,e=!1,r=!0){rn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let n=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u,c,d)=>{if(n.push({paramName:l,isOptional:u!=null}),u){let p=d.charAt(c+o.length);return p&&p!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(n.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),n]}function Iw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return rn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function $n(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}function $w(t,e="/"){let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?ya(t):t,s;return r?(r=X1(r),r.startsWith("/")||r.startsWith("\\")?s=Tm(r.substring(1),"/"):s=Tm(r,e)):s=e,{pathname:s,search:Vw(n),hash:Hw(i)}}function Tm(t,e){let r=ua(e).split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Xc(t,e,r,n){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Uw(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Df(t){let e=Uw(t);return e.map((r,n)=>n===e.length-1?r.pathname:r.pathnameBase)}function fc(t,e,r,n=!1){let i;typeof t=="string"?i=ya(t):(i={...t},Te(!i.pathname||!i.pathname.includes("?"),Xc("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),Xc("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),Xc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=r;else{let p=e.length-1;if(!n&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?e[p]:"/"}let u=$w(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}var X1=t=>t.replace(/[\\/]{2,}/g,"/"),en=t=>X1(t.join("/"));function ua(t,e=0){let r=t.length;for(;r>e&&t.charCodeAt(r-1)===47;)r--;return r===t.length?t:t.slice(0,r)}var Ww=t=>ua(t).replace(/^\/*/,"/"),Vw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Hw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,qw=class{constructor(t,e,r,n=!1){this.status=t,this.statusText=e||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Yw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Xw(t){let e=t.map(r=>r.route.path).filter(Boolean);return en(e)||"/"}var Q1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function G1(t,e){let r=t;if(typeof r!="string"||!Pf.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let n=r,i=!1;if(Q1)try{let s=new URL(window.location.href),o=U1.test(r)?new URL(jw(r,s.protocol)):new URL(r),l=$n(o.pathname,e);o.origin===s.origin&&l!=null?r=l+o.search+o.hash:i=!0}catch{rn(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:i,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Pm=new URL("http://localhost");function Rf(t){if(t.createURL)return t.createURL("/");try{return new URL(t.createHref("/"),Pm)}catch{return Pm}}function Qc(t,e){return t.origin===e.origin&&(t.origin!=="null"||t.protocol===e.protocol&&t.host===e.host)}function Qw(t,e){if(t.startsWith("//"))return!0;let r=e.protocol.toLowerCase();return t.toLowerCase().startsWith(r)?e.host===""||t.slice(r.length).startsWith("//"):!1}function Mf(t,e,r,n){let i=null;try{i=t==null?null:new URL(t,r)}catch{}let s=new URL(e,r),o=i!=null&&!Qc(i,r),l=!Qc(s,r);if(n==="reject"){if(o||l)throw new Error("External navigation is not allowed")}else if(l&&(i==null||!Qw(t,i)||!Qc(i,s)))throw new Error("External navigation is not allowed")}var K1=["POST","PUT","PATCH","DELETE"];new Set(K1);var Gw=["GET",...K1];new Set(Gw);var Kw=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Jw(t){try{return Kw.includes(new URL(t).protocol)}catch{return!1}}var wa=b.createContext(null);wa.displayName="DataRouter";var hc=b.createContext(null);hc.displayName="DataRouterState";var J1=b.createContext(!1);function Zw(){return b.useContext(J1)}var Z1=b.createContext({isTransitioning:!1});Z1.displayName="ViewTransition";var e_=b.createContext(new Map);e_.displayName="Fetchers";var t_=b.createContext(null);t_.displayName="Await";var Cr=b.createContext(null);Cr.displayName="Navigation";var rl=b.createContext(null);rl.displayName="Location";var nn=b.createContext({outlet:null,matches:[],isDataRoute:!1});nn.displayName="Route";var Of=b.createContext(null);Of.displayName="RouteError";var eg="REACT_ROUTER_ERROR",r_="REDIRECT",n_="ROUTE_ERROR_RESPONSE";function i_(t){if(t.startsWith(`${eg}:${r_}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function s_(t){if(t.startsWith(`${eg}:${n_}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new qw(e.status,e.statusText,e.data)}catch{}}function a_(t,{relative:e}={}){Te(_a(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=b.useContext(Cr),{hash:i,pathname:s,search:o}=nl(t,{relative:e}),l=s;return r!=="/"&&(l=s==="/"?r:en([r,s])),n.createHref({pathname:l,search:o,hash:i})}function _a(){return b.useContext(rl)!=null}function Yt(){return Te(_a(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(rl).location}var tg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function rg(t){b.useContext(Cr).static||b.useLayoutEffect(t)}function Ti(){let{isDataRoute:t}=b.useContext(nn);return t?y_():o_()}function o_(){Te(_a(),"useNavigate() may be used only in the context of a <Router> component.");let t=b.useContext(wa),{basename:e,navigator:r}=b.useContext(Cr),{matches:n}=b.useContext(nn),{pathname:i}=Yt(),s=JSON.stringify(Df(n)),o=b.useRef(!1);return rg(()=>{o.current=!0}),b.useCallback((u,c={})=>{if(rn(o.current,tg),!o.current)return;if(typeof u=="number"){r.go(u);return}let d=fc(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:en([e,d.pathname])),Mf(typeof u=="string"?u:ds(u),r.createHref(d),Rf(r),"reject"),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,s,i,t])}b.createContext(null);function Pj(){let{matches:t}=b.useContext(nn),e=t[t.length-1];return(e==null?void 0:e.params)??{}}function nl(t,{relative:e}={}){let{matches:r}=b.useContext(nn),{pathname:n}=Yt(),i=JSON.stringify(Df(r));return b.useMemo(()=>fc(t,JSON.parse(i),n,e==="path"),[t,i,n,e])}function l_(t,e){return ng(t,e)}function ng(t,e,r){var _;Te(_a(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=b.useContext(Cr),{matches:i}=b.useContext(nn),s=i[i.length-1],o=s?s.params:{},l=s?s.pathname:"/",u=s?s.pathnameBase:"/",c=s&&s.route;{let h=c&&c.path||"";sg(l,!c||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let d=Yt(),p;if(e){let h=typeof e=="string"?ya(e):e;Te(u==="/"||((_=h.pathname)==null?void 0:_.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${h.pathname}" was given in the \`location\` prop.`),p=h}else p=d;let f=p.pathname||"/",m=f;if(u!=="/"){let h=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(h.length).join("/")}let y=r&&r.state.matches.length?r.state.matches.map(h=>Object.assign(h,{route:r.manifest[h.route.id]||h.route})):W1(t,{pathname:m});rn(c||y!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),rn(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=f_(y&&y.map(h=>Object.assign({},h,{params:Object.assign({},o,h.params),pathname:en([u,n.encodeLocation?n.encodeLocation(h.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?u:en([u,n.encodeLocation?n.encodeLocation(h.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathnameBase])})),i,r);return e&&g?b.createElement(rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...p},navigationType:"POP"}},g):g}function u_(){let t=v_(),e=Yw(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n},s={padding:"2px 4px",backgroundColor:n},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:s},"ErrorBoundary")," or"," ",b.createElement("code",{style:s},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),r?b.createElement("pre",{style:i},r):null,o)}var c_=b.createElement(u_,null),ig=class extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const r=s_(t.digest);r&&(t=r)}let e=t!==void 0?b.createElement(nn.Provider,{value:this.props.routeContext},b.createElement(Of.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?b.createElement(d_,{error:t},e):e}};ig.contextType=J1;var Gc=new WeakMap;function d_({children:t,error:e}){let{basename:r,navigator:n}=b.useContext(Cr);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=i_(e.digest);if(i){let s=Gc.get(e);if(s)throw s;let o=G1(i.location,r),l=o.absoluteURL||o.to;if(Mf(i.location,l,Rf(n),"allow-explicit"),Jw(l))throw new Error("Invalid redirect location");if(Q1&&!Gc.get(e))if(o.isExternal||i.reloadDocument)window.location.href=l;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:i.replace}));throw Gc.set(e,u),u}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l}`})}}return t}function p_({routeContext:t,match:e,children:r}){let n=b.useContext(wa);return n&&n.static&&n.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=e.route.id),b.createElement(nn.Provider,{value:t},r)}function f_(t,e=[],r){let n=r==null?void 0:r.state;if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let d=i.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);Te(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,d+1))}let o=!1,l=-1;if(r&&n){o=n.renderFallback;for(let d=0;d<i.length;d++){let p=i[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(l=d),p.route.id){let{loaderData:f,errors:m}=n,y=p.route.loader&&!f.hasOwnProperty(p.route.id)&&(!m||m[p.route.id]===void 0);if(p.route.lazy||y){r.isStatic&&(o=!0),l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}}let u=r==null?void 0:r.onError,c=n&&u?(d,p)=>{var f,m;u(d,{location:n.location,params:((m=(f=n.matches)==null?void 0:f[0])==null?void 0:m.params)??{},pattern:Xw(n.matches),errorInfo:p})}:void 0;return i.reduceRight((d,p,f)=>{let m,y=!1,g=null,_=null;n&&(m=s&&p.route.id?s[p.route.id]:void 0,g=p.route.errorElement||c_,o&&(l<0&&f===0?(sg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,_=null):l===f&&(y=!0,_=p.route.hydrateFallbackElement||null)));let h=e.concat(i.slice(0,f+1)),x=()=>{let v;return m?v=g:y?v=_:p.route.Component?v=b.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=d,b.createElement(p_,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?b.createElement(ig,{location:n.location,revalidation:n.revalidation,component:g,error:m,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:c}):x()},null)}function Lf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function h_(t){let e=b.useContext(wa);return Te(e,Lf(t)),e}function m_(t){let e=b.useContext(hc);return Te(e,Lf(t)),e}function x_(t){let e=b.useContext(nn);return Te(e,Lf(t)),e}function zf(t){let e=x_(t),r=e.matches[e.matches.length-1];return Te(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function g_(){return zf("useRouteId")}function v_(){var n;let t=b.useContext(Of),e=m_("useRouteError"),r=zf("useRouteError");return t!==void 0?t:(n=e.errors)==null?void 0:n[r]}function y_(){let{router:t}=h_("useNavigate"),e=zf("useNavigate"),r=b.useRef(!1);return rg(()=>{r.current=!0}),b.useCallback(async(i,s={})=>{rn(r.current,tg),r.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var Dm={};function sg(t,e,r){!e&&!Dm[t]&&(Dm[t]=!0,rn(!1,r))}b.memo(w_);function w_({routes:t,manifest:e,future:r,state:n,isStatic:i,onError:s}){return ng(t,void 0,{manifest:e,state:n,isStatic:i,onError:s,future:r})}function __({to:t,replace:e,state:r,relative:n}){Te(_a(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i,navigator:s}=b.useContext(Cr);rn(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=b.useContext(nn),{pathname:l}=Yt(),u=Ti(),c=fc(t,Df(o),l,n==="path");Mf(typeof t=="string"?t:ds(t),s.createHref(c),Rf(s),"reject");let d=JSON.stringify(c);return b.useEffect(()=>{u(JSON.parse(d),{replace:e,state:r,relative:n})},[u,d,n,e,r]),null}function Ne(t){Te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function b_({basename:t="/",children:e=null,location:r,navigationType:n="POP",navigator:i,static:s=!1,useTransitions:o}){Te(!_a(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:i,static:s,useTransitions:o,future:{}}),[l,i,s,o]);typeof r=="string"&&(r=ya(r));let{pathname:c="/",search:d="",hash:p="",state:f=null,key:m="default",mask:y}=r,g=b.useMemo(()=>{let _=$n(c,l);return _==null?null:{location:{pathname:_,search:d,hash:p,state:f,key:m,mask:y},navigationType:n}},[l,c,d,p,f,m,n,y]);return rn(g!=null,`<Router basename="${l}"> is not able to match the URL "${c}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:b.createElement(Cr.Provider,{value:u},b.createElement(rl.Provider,{children:e,value:g}))}function j_({children:t,location:e}){return l_(up(t),e)}function up(t,e=[]){let r=[];return b.Children.forEach(t,(n,i)=>{if(!b.isValidElement(n))return;let s=[...e,i];if(n.type===b.Fragment){r.push.apply(r,up(n.props.children,s));return}Te(n.type===Ne,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Te(!n.props.index||!n.props.children,"An index route cannot have child routes.");let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=up(n.props.children,s)),r.push(o)}),r}var eu="get",tu="application/x-www-form-urlencoded";function mc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function N_(t){return mc(t)&&t.tagName.toLowerCase()==="button"}function k_(t){return mc(t)&&t.tagName.toLowerCase()==="form"}function S_(t){return mc(t)&&t.tagName.toLowerCase()==="input"}function C_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function F_(t,e){return t.button===0&&(!e||e==="_self")&&!C_(t)}var kl=null;function E_(){if(kl===null)try{new FormData(document.createElement("form"),0),kl=!1}catch{kl=!0}return kl}var A_=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kc(t){return t!=null&&!A_.has(t)?(rn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tu}"`),null):t}function T_(t,e){let r,n,i,s,o;if(k_(t)){let l=t.getAttribute("action");n=l?$n(l,e):null,r=t.getAttribute("method")||eu,i=Kc(t.getAttribute("enctype"))||tu,s=new FormData(t)}else if(N_(t)||S_(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(n=u?$n(u,e):null,r=t.getAttribute("formmethod")||l.getAttribute("method")||eu,i=Kc(t.getAttribute("formenctype"))||Kc(l.getAttribute("enctype"))||tu,s=new FormData(l,t),!E_()){let{name:c,type:d,value:p}=t;if(d==="image"){let f=c?`${c}.`:"";s.append(`${f}x`,"0"),s.append(`${f}y`,"0")}else c&&s.append(c,p)}}else{if(mc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=eu,n=null,i=tu,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:n,method:r.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bf(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ag(t,e,r,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${n}`:i.pathname=`${i.pathname}.${n}`:i.pathname==="/"?i.pathname=`_root.${n}`:e&&$n(i.pathname,e)==="/"?i.pathname=`${ua(e)}/_root.${n}`:i.pathname=`${ua(i.pathname)}.${n}`,i}async function P_(t,e){if(t.id in e)return e[t.id];try{let r=await import(t.module);return e[t.id]=r,r}catch(r){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function D_(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function R_(t,e,r){let n=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await P_(s,r);return o.links?o.links():[]}return[]}));return z_(n.flat(1).filter(D_).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Rm(t,e,r,n,i,s){let o=(u,c)=>r[c]?u.route.id!==r[c].route.id:!0,l=(u,c)=>{var d;return r[c].pathname!==u.pathname||((d=r[c].route.path)==null?void 0:d.endsWith("*"))&&r[c].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,c)=>o(u,c)||l(u,c)):s==="data"?e.filter((u,c)=>{var p;let d=n.routes[u.route.id];if(!d||!d.hasLoader)return!1;if(o(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let f=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function M_(t,e,{includeHydrateFallback:r}={}){return O_(t.map(n=>{let i=e.routes[n.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),r&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function O_(t){return[...new Set(t)]}function L_(t){let e={},r=Object.keys(t).sort();for(let n of r)e[n]=t[n];return e}function z_(t,e){let r=new Set;return new Set(e),t.reduce((n,i)=>{let s=JSON.stringify(L_(i));return r.has(s)||(r.add(s),n.push({key:s,link:i})),n},[])}function If(){let t=b.useContext(wa);return Bf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function B_(){let t=b.useContext(hc);return Bf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var $f=b.createContext(void 0);$f.displayName="FrameworkContext";function xc(){let t=b.useContext($f);return Bf(t,"You must render this element inside a <HydratedRouter> element"),t}function I_(t,e){let r=b.useContext($f),[n,i]=b.useState(!1),[s,o]=b.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:p}=e,f=b.useRef(null);b.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let g=h=>{h.forEach(x=>{o(x.isIntersecting)})},_=new IntersectionObserver(g,{threshold:.5});return f.current&&_.observe(f.current),()=>{_.disconnect()}}},[t]),b.useEffect(()=>{if(n){let g=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(g)}}},[n]);let m=()=>{i(!0)},y=()=>{i(!1),o(!1)};return r?t!=="intent"?[s,f,{}]:[s,f,{onFocus:Ra(l,m),onBlur:Ra(u,y),onMouseEnter:Ra(c,m),onMouseLeave:Ra(d,y),onTouchStart:Ra(p,m)}]:[!1,f,{}]}function Ra(t,e){return r=>{t&&t(r),r.defaultPrevented||e(r)}}function $_({page:t,...e}){let r=Zw(),{nonce:n}=xc(),{router:i}=If(),s=b.useMemo(()=>W1(i.routes,t,i.basename),[i.routes,t,i.basename]);return s?(e.nonce==null&&n&&(e={...e,nonce:n}),r?b.createElement(W_,{page:t,matches:s,...e}):b.createElement(V_,{page:t,matches:s,...e})):null}function U_(t){let{manifest:e,routeModules:r}=xc(),[n,i]=b.useState([]);return b.useEffect(()=>{let s=!1;return R_(t,e,r).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,r]),n}function W_({page:t,matches:e,...r}){let n=Yt(),{future:i}=xc(),{basename:s}=If(),o=b.useMemo(()=>{if(t===n.pathname+n.search+n.hash)return[];let l=ag(t,s,i.v8_trailingSlashAwareDataRequests,"rsc"),u=!1,c=[];for(let d of e)typeof d.route.shouldRevalidate=="function"?u=!0:c.push(d.route.id);return u&&c.length>0&&l.searchParams.set("_routes",c.join(",")),[l.pathname+l.search]},[s,i.v8_trailingSlashAwareDataRequests,t,n,e]);return b.createElement(b.Fragment,null,o.map(l=>b.createElement("link",{key:l,rel:"prefetch",as:"fetch",href:l,...r})))}function V_({page:t,matches:e,...r}){let n=Yt(),{future:i,manifest:s,routeModules:o}=xc(),{basename:l}=If(),{loaderData:u,matches:c}=B_(),d=b.useMemo(()=>Rm(t,e,c,s,n,"data"),[t,e,c,s,n]),p=b.useMemo(()=>Rm(t,e,c,s,n,"assets"),[t,e,c,s,n]),f=b.useMemo(()=>{if(t===n.pathname+n.search+n.hash)return[];let g=new Set,_=!1;if(e.forEach(x=>{var w;let v=s.routes[x.route.id];!v||!v.hasLoader||(!d.some(N=>N.route.id===x.route.id)&&x.route.id in u&&((w=o[x.route.id])!=null&&w.shouldRevalidate)||v.hasClientLoader?_=!0:g.add(x.route.id))}),g.size===0)return[];let h=ag(t,l,i.v8_trailingSlashAwareDataRequests,"data");return _&&g.size>0&&h.searchParams.set("_routes",e.filter(x=>g.has(x.route.id)).map(x=>x.route.id).join(",")),[h.pathname+h.search]},[l,i.v8_trailingSlashAwareDataRequests,u,n,s,d,e,t,o]),m=b.useMemo(()=>M_(p,s),[p,s]),y=U_(p);return b.createElement(b.Fragment,null,f.map(g=>b.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...r})),m.map(g=>b.createElement("link",{key:g,rel:"modulepreload",href:g,...r})),y.map(({key:g,link:_})=>b.createElement("link",{key:g,nonce:r.nonce,..._,crossOrigin:_.crossOrigin??r.crossOrigin})))}function H_(...t){return e=>{t.forEach(r=>{typeof r=="function"?r(e):r!=null&&(r.current=e)})}}var q_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{q_&&(window.__reactRouterVersion="7.18.4")}catch{}function Y_({basename:t,children:e,useTransitions:r,window:n}){let i=b.useRef();i.current==null&&(i.current=Nw({window:n,v5Compat:!0}));let s=i.current,[o,l]=b.useState({action:s.action,location:s.location}),u=b.useCallback(c=>{r===!1?l(c):b.startTransition(()=>l(c))},[r]);return b.useLayoutEffect(()=>s.listen(u),[s,u]),b.createElement(b_,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:s,useTransitions:r})}var Ji=b.forwardRef(function({onClick:e,discover:r="render",prefetch:n="none",relative:i,reloadDocument:s,replace:o,mask:l,state:u,target:c,to:d,preventScrollReset:p,viewTransition:f,defaultShouldRevalidate:m,...y},g){let{basename:_,navigator:h,useTransitions:x}=b.useContext(Cr),v=typeof d=="string"&&Pf.test(d),w=G1(d,_);d=w.to;let N=a_(d,{relative:i}),k=Yt(),j=null;if(l){let H=fc(l,[],k.mask?k.mask.pathname:"/",!0);_!=="/"&&(H.pathname=H.pathname==="/"?_:en([_,H.pathname])),j=h.createHref(H)}let[F,A,C]=I_(n,y),L=K_(d,{replace:o,mask:l,state:u,target:c,preventScrollReset:p,relative:i,viewTransition:f,defaultShouldRevalidate:m,useTransitions:x});function O(H){e&&e(H),H.defaultPrevented||L(H)}let V=!(w.isExternal||s),I=b.createElement("a",{...y,...C,href:(V?j:void 0)||w.absoluteURL||N,onClick:V?O:e,ref:H_(g,A),target:c,"data-discover":!v&&r==="render"?"true":void 0});return F&&!v?b.createElement(b.Fragment,null,I,b.createElement($_,{page:N})):I});Ji.displayName="Link";var X_=b.forwardRef(function({"aria-current":e="page",caseSensitive:r=!1,className:n="",end:i=!1,style:s,to:o,viewTransition:l,children:u,...c},d){let p=nl(o,{relative:c.relative}),f=Yt(),m=b.useContext(hc),{navigator:y,basename:g}=b.useContext(Cr),_=m!=null&&r4(p)&&l===!0,h=y.encodeLocation?y.encodeLocation(p).pathname:p.pathname,x=f.pathname,v=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;r||(x=x.toLowerCase(),v=v?v.toLowerCase():null,h=h.toLowerCase()),v&&g&&(v=$n(v,g)||v);const w=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let N=x===h||!i&&x.startsWith(h)&&x.charAt(w)==="/",k=v!=null&&(v===h||!i&&v.startsWith(h)&&v.charAt(h.length)==="/"),j={isActive:N,isPending:k,isTransitioning:_},F=N?e:void 0,A;typeof n=="function"?A=n(j):A=[n,N?"active":null,k?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let C=typeof s=="function"?s(j):s;return b.createElement(Ji,{...c,"aria-current":F,className:A,ref:d,style:C,to:o,viewTransition:l},typeof u=="function"?u(j):u)});X_.displayName="NavLink";var Q_=b.forwardRef(({discover:t="render",fetcherKey:e,navigate:r,reloadDocument:n,replace:i,state:s,method:o=eu,action:l,onSubmit:u,relative:c,preventScrollReset:d,viewTransition:p,defaultShouldRevalidate:f,...m},y)=>{let{useTransitions:g}=b.useContext(Cr),_=e4(),h=t4(l,{relative:c}),x=o.toLowerCase()==="get"?"get":"post",v=typeof l=="string"&&Pf.test(l),w=N=>{if(u&&u(N),N.defaultPrevented)return;N.preventDefault();let k=N.nativeEvent.submitter,j=(k==null?void 0:k.getAttribute("formmethod"))||o,F=()=>_(k||N.currentTarget,{fetcherKey:e,method:j,navigate:r,replace:i,state:s,relative:c,preventScrollReset:d,viewTransition:p,defaultShouldRevalidate:f});g&&r!==!1?b.startTransition(()=>F()):F()};return b.createElement("form",{ref:y,method:x,action:h,onSubmit:n?u:w,...m,"data-discover":!v&&t==="render"?"true":void 0})});Q_.displayName="Form";function G_(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function og(t){let e=b.useContext(wa);return Te(e,G_(t)),e}function K_(t,{target:e,replace:r,mask:n,state:i,preventScrollReset:s,relative:o,viewTransition:l,defaultShouldRevalidate:u,useTransitions:c}={}){let d=Ti(),p=Yt(),f=nl(t,{relative:o});return b.useCallback(m=>{if(F_(m,e)){m.preventDefault();let y=r!==void 0?r:ds(p)===ds(f),g=()=>d(t,{replace:y,mask:n,state:i,preventScrollReset:s,relative:o,viewTransition:l,defaultShouldRevalidate:u});c?b.startTransition(()=>g()):g()}},[p,d,f,r,n,i,e,t,s,o,l,u,c])}var J_=0,Z_=()=>`__${String(++J_)}__`;function e4(){let{router:t}=og("useSubmit"),{basename:e}=b.useContext(Cr),r=g_(),n=t.fetch,i=t.navigate;return b.useCallback(async(s,o={})=>{let{action:l,method:u,encType:c,formData:d,body:p}=T_(s,e);if(o.navigate===!1){let f=o.fetcherKey||Z_();await n(f,r,o.action||l,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||c,flushSync:o.flushSync})}else await i(o.action||l,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,i,e,r])}function t4(t,{relative:e}={}){let{basename:r}=b.useContext(Cr),n=b.useContext(nn);Te(n,"useFormAction must be used inside a RouteContext");let[i]=n.matches.slice(-1),s={...nl(t||".",{relative:e})},o=Yt();if(t==null){s.search=o.search;let l=new URLSearchParams(s.search),u=l.getAll("index");if(u.some(d=>d==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let d=l.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(s.pathname=s.pathname==="/"?r:en([r,s.pathname])),ds(s)}function r4(t,{relative:e}={}){let r=b.useContext(Z1);Te(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=og("useViewTransitionState"),i=nl(t,{relative:e});if(!r.isTransitioning)return!1;let s=$n(r.currentLocation.pathname,n)||r.currentLocation.pathname,o=$n(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Lu(i.pathname,o)!=null||Lu(i.pathname,s)!=null}const zu="fnar-demo-auth-session",Bu="fnar-demo-auth-change",cp="fnar-academy-profile",n4="fnar-academy-profile-change",lg=b.createContext(null);function i4(t){if(typeof t!="object"||t===null||Array.isArray(t))return!1;const r=t.user;if(typeof r!="object"||r===null||Array.isArray(r))return!1;const n=r;return typeof n.id=="string"&&typeof n.displayName=="string"&&typeof n.email=="string"&&typeof n.createdAt=="string"}function Mm(){try{const t=localStorage.getItem(zu);if(!t)return null;const e=JSON.parse(t);return i4(e)?e:(localStorage.removeItem(zu),null)}catch{return null}}function Om(t){try{localStorage.setItem(zu,JSON.stringify(t))}catch{}window.dispatchEvent(new CustomEvent(Bu))}function s4(){try{localStorage.removeItem(zu)}catch{}window.dispatchEvent(new CustomEvent(Bu))}function Lm(){return`demo-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function a4(t){return(t.split("@")[0]||"").slice(0,30)||"مستخدم تجريبي"}function ug(){try{const t=localStorage.getItem(cp);if(!t)return null;const e=JSON.parse(t);return typeof e=="object"&&e!==null&&typeof e.displayName=="string"?e:null}catch{return null}}function o4(t){const e=ug();if(!(e&&e.displayName.trim().length>0))try{const r=localStorage.getItem(cp),i={...r?JSON.parse(r):{},displayName:t.trim().slice(0,60)};localStorage.setItem(cp,JSON.stringify(i)),window.dispatchEvent(new CustomEvent(n4))}catch{}}function l4({children:t}){const[e,r]=b.useState(()=>Mm());b.useEffect(()=>{const l=()=>r(Mm());return window.addEventListener(Bu,l),window.addEventListener("storage",l),()=>{window.removeEventListener(Bu,l),window.removeEventListener("storage",l)}},[]);const n=b.useCallback(l=>{const u=ug(),c=u&&u.displayName.trim().length>0?u.displayName:a4(l),d={id:Lm(),displayName:c,email:l.trim().slice(0,120),createdAt:new Date().toISOString()},p={user:d};return Om(p),r(p),d},[]),i=b.useCallback((l,u)=>{const c={id:Lm(),displayName:l.trim().slice(0,60),email:u.trim().slice(0,120),createdAt:new Date().toISOString()},d={user:c};return Om(d),r(d),o4(c.displayName),c},[]),s=b.useCallback(()=>{s4(),r(null)},[]),o={isAuthenticated:e!==null,user:(e==null?void 0:e.user)??null,login:n,signup:i,logout:s};return a.jsx(lg.Provider,{value:o,children:t})}function cg(){const t=b.useContext(lg);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}function Kn({children:t}){const{isAuthenticated:e}=cg(),r=Yt();if(!e){const n=r.pathname+r.search;return a.jsx(__,{to:"/login",replace:!0,state:{from:n}})}return a.jsx(a.Fragment,{children:t})}function dg(t,e,r){return Math.max(t,Math.min(e,r))}class u4{advance(e){var l;if(!this.isRunning)return;let r=!1;if(this.lerp)this.value=(n=this.value,i=this.to,s=60*this.lerp,o=e,function(u,c,d){return(1-d)*u+d*c}(n,i,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,r=!0);else{this.currentTime+=e;const u=dg(0,this.currentTime/this.duration,1);r=u>=1;const c=r?1:this.easing(u);this.value=this.from+(this.to-this.from)*c}var n,i,s,o;(l=this.onUpdate)==null||l.call(this,this.value,r),r&&this.stop()}stop(){this.isRunning=!1}fromTo(e,r,{lerp:n=.1,duration:i=1,easing:s=u=>u,onStart:o,onUpdate:l}){this.from=this.value=e,this.to=r,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=l}}class c4{constructor({wrapper:e,content:r,autoResize:n=!0,debounce:i=250}={}){kn(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});kn(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});kn(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=r,n&&(this.debouncedResize=function(s,o){let l;return function(){let u=arguments,c=this;clearTimeout(l),l=setTimeout(function(){s.apply(c,u)},o)}}(this.resize,i),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,r;(e=this.wrapperResizeObserver)==null||e.disconnect(),(r=this.contentResizeObserver)==null||r.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class pg{constructor(){this.events={}}emit(e,...r){let n=this.events[e]||[];for(let i=0,s=n.length;i<s;i++)n[i](...r)}on(e,r){var n;return(n=this.events[e])!=null&&n.push(r)||(this.events[e]=[r]),()=>{var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(s=>r!==s)}}off(e,r){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(i=>r!==i)}destroy(){this.events={}}}const zm=100/6;class d4{constructor(e,{wheelMultiplier:r=1,touchMultiplier:n=1}){kn(this,"onTouchStart",e=>{const{clientX:r,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=r,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});kn(this,"onTouchMove",e=>{const{clientX:r,clientY:n}=e.targetTouches?e.targetTouches[0]:e,i=-(r-this.touchStart.x)*this.touchMultiplier,s=-(n-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=r,this.touchStart.y=n,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:e})});kn(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});kn(this,"onWheel",e=>{let{deltaX:r,deltaY:n,deltaMode:i}=e;r*=i===1?zm:i===2?this.windowWidth:1,n*=i===1?zm:i===2?this.windowHeight:1,r*=this.wheelMultiplier,n*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:r,deltaY:n,event:e})});kn(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=r,this.touchMultiplier=n,this.touchStart={x:null,y:null},this.emitter=new pg,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,r){return this.emitter.on(e,r)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class p4{constructor({wrapper:e=window,content:r=document.documentElement,wheelEventsTarget:n=e,eventsTarget:i=n,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:l=.075,touchInertiaMultiplier:u=35,duration:c,easing:d=v=>Math.min(1,1.001-Math.pow(2,-10*v)),lerp:p=!c&&.1,infinite:f=!1,orientation:m="vertical",gestureOrientation:y="vertical",touchMultiplier:g=1,wheelMultiplier:_=1,autoResize:h=!0,__experimental__naiveDimensions:x=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:v,deltaY:w,event:N})=>{if(N.ctrlKey)return;const k=N.type.includes("touch"),j=N.type.includes("wheel");if(this.options.syncTouch&&k&&N.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const F=v===0&&w===0,A=this.options.gestureOrientation==="vertical"&&w===0||this.options.gestureOrientation==="horizontal"&&v===0;if(F||A)return;let C=N.composedPath();if(C=C.slice(0,C.indexOf(this.rootElement)),C.find(I=>{var H,Q,W,D,z;return((H=I.hasAttribute)===null||H===void 0?void 0:H.call(I,"data-lenis-prevent"))||k&&((Q=I.hasAttribute)===null||Q===void 0?void 0:Q.call(I,"data-lenis-prevent-touch"))||j&&((W=I.hasAttribute)===null||W===void 0?void 0:W.call(I,"data-lenis-prevent-wheel"))||((D=I.classList)===null||D===void 0?void 0:D.contains("lenis"))&&!(!((z=I.classList)===null||z===void 0)&&z.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void N.preventDefault();if(this.isSmooth=this.options.syncTouch&&k||this.options.smoothWheel&&j,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();N.preventDefault();let L=w;this.options.gestureOrientation==="both"?L=Math.abs(w)>Math.abs(v)?w:v:this.options.gestureOrientation==="horizontal"&&(L=v);const O=k&&this.options.syncTouch,V=k&&N.type==="touchend"&&Math.abs(L)>5;V&&(L=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+L,Object.assign({programmatic:!1},O?{lerp:V?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const v=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-v),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:r,wheelEventsTarget:n,eventsTarget:i,smoothWheel:s,syncTouch:o,syncTouchLerp:l,touchInertiaMultiplier:u,duration:c,easing:d,lerp:p,infinite:f,gestureOrientation:y,orientation:m,touchMultiplier:g,wheelMultiplier:_,autoResize:h,__experimental__naiveDimensions:x},this.animate=new u4,this.emitter=new pg,this.dimensions=new c4({wrapper:e,content:r,autoResize:h}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new d4(i,{touchMultiplier:g,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,r){return this.emitter.on(e,r)}off(e,r){return this.emitter.off(e,r)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const r=e-(this.time||e);this.time=e,this.animate.advance(.001*r)}scrollTo(e,{offset:r=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:l=!s&&this.options.lerp,onComplete:u,force:c=!1,programmatic:d=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let p;if(typeof e=="string"?p=document.querySelector(e):e!=null&&e.nodeType&&(p=e),p){if(this.options.wrapper!==window){const m=this.options.wrapper.getBoundingClientRect();r-=this.isHorizontal?m.left:m.top}const f=p.getBoundingClientRect();e=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=r,e=Math.round(e),this.options.infinite?d&&(this.targetScroll=this.animatedScroll=this.scroll):e=dg(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(u==null||u(this));if(!d){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:l,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(p,f)=>{this.isScrolling=!0,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),d&&(this.targetScroll=p),f||this.emit(),f&&(this.reset(),this.emit(),u==null||u(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,r=this.limit,(e%r+r)%r):this.animatedScroll;var e,r}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,r){this.rootElement.classList.toggle(e,r),this.emitter.emit("className change",this)}}function Fn(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function fg(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _r={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$o={duration:.5,overwrite:!1,delay:0},Uf,wt,Ae,Mr=1e8,be=1/Mr,dp=Math.PI*2,f4=dp/4,h4=0,hg=Math.sqrt,m4=Math.cos,x4=Math.sin,pt=function(e){return typeof e=="string"},We=function(e){return typeof e=="function"},Un=function(e){return typeof e=="number"},Wf=function(e){return typeof e>"u"},yn=function(e){return typeof e=="object"},tr=function(e){return e!==!1},Vf=function(){return typeof window<"u"},Sl=function(e){return We(e)||pt(e)},mg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rt=Array.isArray,g4=/random\([^)]+\)/g,v4=/,\s*/g,Bm=/(?:-?\.?\d|\.)+/gi,xg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gg=/[+-]=-?[.\d]+/,y4=/[^,'"\[\]\s]+/gi,w4=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Oe,cn,pp,Hf,jr={},Iu={},vg,yg=function(e){return(Iu=ca(e,jr))&&sr},qf=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},Uo=function(e,r){return!r&&console.warn(e)},wg=function(e,r){return e&&(jr[e]=r)&&Iu&&(Iu[e]=r)||jr},Wo=function(){return 0},_4={suppressEvents:!0,isStart:!0,kill:!1},ru={suppressEvents:!0,kill:!1},b4={suppressEvents:!0},Yf={},yi=[],fp={},_g,fr={},Zc={},Im=30,nu=[],Xf="",Qf=function(e){var r=e[0],n,i;if(yn(r)||We(r)||(e=[e]),!(n=(r._gsap||{}).harness)){for(i=nu.length;i--&&!nu[i].targetTest(r););n=nu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Wg(e[i],n)))||e.splice(i,1);return e},Zi=function(e){return e._gsap||Qf(Or(e))[0]._gsap},bg=function(e,r,n){return(n=e[r])&&We(n)?e[r]():Wf(n)&&e.getAttribute&&e.getAttribute(r)||n},rr=function(e,r){return(e=e.split(",")).forEach(r)||e},qe=function(e){return Math.round(e*1e5)/1e5||0},Re=function(e){return Math.round(e*1e7)/1e7||0},Qs=function(e,r){var n=r.charAt(0),i=parseFloat(r.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},j4=function(e,r){for(var n=r.length,i=0;e.indexOf(r[i])<0&&++i<n;);return i<n},$u=function(){var e=yi.length,r=yi.slice(0),n,i;for(fp={},yi.length=0,n=0;n<e;n++)i=r[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Gf=function(e){return!!(e._initted||e._startAt||e.add)},jg=function(e,r,n,i){yi.length&&!wt&&$u(),e.render(r,n,!!(wt&&r<0&&Gf(e))),yi.length&&!wt&&$u()},Ng=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(y4).length<2?r:pt(e)?e.trim():e},kg=function(e){return e},Nr=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},N4=function(e){return function(r,n){for(var i in n)i in r||i==="duration"&&e||i==="ease"||(r[i]=n[i])}},ca=function(e,r){for(var n in r)e[n]=r[n];return e},$m=function t(e,r){for(var n in r)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=yn(r[n])?t(e[n]||(e[n]={}),r[n]):r[n]);return e},Uu=function(e,r){var n={},i;for(i in e)i in r||(n[i]=e[i]);return n},co=function(e){var r=e.parent||Oe,n=e.keyframes?N4(Rt(e.keyframes)):Nr;if(tr(e.inherit))for(;r;)n(e,r.vars.defaults),r=r.parent||r._dp;return e},k4=function(e,r){for(var n=e.length,i=n===r.length;i&&n--&&e[n]===r[n];);return n<0},Sg=function(e,r,n,i,s){var o=e[i],l;if(s)for(l=r[s];o&&o[s]>l;)o=o._prev;return o?(r._next=o._next,o._next=r):(r._next=e[n],e[n]=r),r._next?r._next._prev=r:e[i]=r,r._prev=o,r.parent=r._dp=e,r},gc=function(e,r,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=r._prev,o=r._next;s?s._next=o:e[n]===r&&(e[n]=o),o?o._prev=s:e[i]===r&&(e[i]=s),r._next=r._prev=r.parent=null},Ni=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},es=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},S4=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},hp=function(e,r,n,i){return e._startAt&&(wt?e._startAt.revert(ru):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,i))},C4=function t(e){return!e||e._ts&&t(e.parent)},Um=function(e){return e._repeat?da(e._tTime,e=e.duration()+e._rDelay)*e:0},da=function(e,r){var n=Math.floor(e=Re(e/r));return e&&n===e?n-1:n},Wu=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},vc=function(e){return e._end=Re(e._start+(e._tDur/Math.abs(e._ts||e._rts||be)||0))},yc=function(e,r){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Re(n._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),vc(e),n._dirty||es(n,e)),e},Cg=function(e,r){var n;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(n=Wu(e.rawTime(),r),(!r._dur||il(0,r.totalDuration(),n)-r._tTime>be)&&r.render(n,!0)),es(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-be}},fn=function(e,r,n,i){return r.parent&&Ni(r),r._start=Re((Un(n)?n:n||e!==Oe?Er(e,n,r):e._time)+r._delay),r._end=Re(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),Sg(e,r,"_first","_last",e._sort?"_start":0),mp(r)||(e._recent=r),i||Cg(e,r),e._ts<0&&yc(e,e._tTime),e},Fg=function(e,r){return(jr.ScrollTrigger||qf("scrollTrigger",r))&&jr.ScrollTrigger.create(r,e)},Eg=function(e,r,n,i,s){if(Jf(e,r,s),!e._initted)return 1;if(!n&&e._pt&&!wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_g!==mr.frame)return yi.push(e),e._lazy=[s,i],1},F4=function t(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||t(r))},mp=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},E4=function(e,r,n,i){var s=e.ratio,o=r<0||!r&&(!e._start&&F4(e)&&!(!e._initted&&mp(e))||(e._ts<0||e._dp._ts<0)&&!mp(e))?0:1,l=e._rDelay,u=0,c,d,p;if(l&&e._repeat&&(u=il(0,e._tDur,r),d=da(u,l),e._yoyo&&d&1&&(o=1-o),d!==da(e._tTime,l)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||wt||i||e._zTime===be||!r&&e._zTime){if(!e._initted&&Eg(e,r,i,n,u))return;for(p=e._zTime,e._zTime=r||(n?be:0),n||(n=r&&!p),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=u,c=e._pt;c;)c.r(o,c.d),c=c._next;r<0&&hp(e,r,n,!0),e._onUpdate&&!n&&vr(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&vr(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===o&&(o&&Ni(e,1),!n&&!wt&&(vr(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},A4=function(e,r,n){var i;if(n>r)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>r)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<r)return i;i=i._prev}},pa=function(e,r,n,i){var s=e._repeat,o=Re(r)||0,l=e._tTime/e._tDur;return l&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Re(o*(s+1)+e._rDelay*s):o,l>0&&!i&&yc(e,e._tTime=e._tDur*l),e.parent&&vc(e),n||es(e.parent,e),e},Wm=function(e){return e instanceof Gt?es(e):pa(e,e._dur)},T4={_start:0,endTime:Wo,totalDuration:Wo},Er=function t(e,r,n){var i=e.labels,s=e._recent||T4,o=e.duration()>=Mr?s.endTime(!1):e._dur,l,u,c;return pt(r)&&(isNaN(r)||r in i)?(u=r.charAt(0),c=r.substr(-1)==="%",l=r.indexOf("="),u==="<"||u===">"?(l>=0&&(r=r.replace(/=/,"")),(u==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(r.substr(1))||0)*(c?(l<0?s:n).totalDuration()/100:1)):l<0?(r in i||(i[r]=o),i[r]):(u=parseFloat(r.charAt(l-1)+r.substr(l+1)),c&&n&&(u=u/100*(Rt(n)?n[0]:n).totalDuration()),l>1?t(e,r.substr(0,l-1),n)+u:o+u)):r==null?o:+r},po=function(e,r,n){var i=Un(r[1]),s=(i?2:1)+(e<2?0:1),o=r[s],l,u;if(i&&(o.duration=r[1]),o.parent=n,e){for(l=o,u=n;u&&!("immediateRender"in l);)l=u.vars.defaults||{},u=tr(u.vars.inherit)&&u.parent;o.immediateRender=tr(l.immediateRender),e<2?o.runBackwards=1:o.startAt=r[s-1]}return new Ke(r[0],o,r[s+1])},Pi=function(e,r){return e||e===0?r(e):r},il=function(e,r,n){return n<e?e:n>r?r:n},Pt=function(e,r){return!pt(e)||!(r=w4.exec(e))?"":r[1]},P4=function(e,r,n){return Pi(n,function(i){return il(e,r,i)})},xp=[].slice,Ag=function(e,r){return e&&yn(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&yn(e[0]))&&!e.nodeType&&e!==cn},D4=function(e,r,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return pt(i)&&!r||Ag(i,1)?(s=n).push.apply(s,Or(i)):n.push(i)})||n},Or=function(e,r,n){return Ae&&!r&&Ae.selector?Ae.selector(e):pt(e)&&!n&&(pp||!fa())?xp.call((r||Hf).querySelectorAll(e),0):Rt(e)?D4(e,n):Ag(e)?xp.call(e,0):e?[e]:[]},gp=function(e){return e=Or(e)[0]||Uo("Invalid scope")||{},function(r){var n=e.current||e.nativeElement||e;return Or(r,n.querySelectorAll?n:n===e?Uo("Invalid scope")||Hf.createElement("div"):e)}},Tg=function(e){return e.sort(function(){return .5-Math.random()})},Pg=function(e){if(We(e))return e;var r=yn(e)?e:{each:e},n=ts(r.ease),i=r.from||0,s=parseFloat(r.base)||0,o={},l=i>0&&i<1,u=isNaN(i)||l,c=r.axis,d=i,p=i;return pt(i)?d=p={center:.5,edges:.5,end:1}[i]||0:!l&&u&&(d=i[0],p=i[1]),function(f,m,y){var g=(y||r).length,_=o[g],h,x,v,w,N,k,j,F,A;if(!_){if(A=r.grid==="auto"?0:(r.grid||[1,Mr])[1],!A){for(j=-Mr;j<(j=y[A++].getBoundingClientRect().left)&&A<g;);A<g&&A--}for(_=o[g]=[],h=u?Math.min(A,g)*d-.5:i%A,x=A===Mr?0:u?g*p/A-.5:i/A|0,j=0,F=Mr,k=0;k<g;k++)v=k%A-h,w=x-(k/A|0),_[k]=N=c?Math.abs(c==="y"?w:v):hg(v*v+w*w),N>j&&(j=N),N<F&&(F=N);i==="random"&&Tg(_),_.max=j-F,_.min=F,_.v=g=(parseFloat(r.amount)||parseFloat(r.each)*(A>g?g-1:c?c==="y"?g/A:A:Math.max(A,g/A))||0)*(i==="edges"?-1:1),_.b=g<0?s-g:s,_.u=Pt(r.amount||r.each)||0,n=n&&g<0?q4(n):n}return g=(_[f]-_.min)/_.max||0,Re(_.b+(n?n(g):g)*_.v)+_.u}},vp=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Re(Math.round(parseFloat(n)/e)*e*r);return(i-i%1)/r+(Un(n)?0:Pt(n))}},Dg=function(e,r){var n=Rt(e),i,s;return!n&&yn(e)&&(i=n=e.radius||Mr,e.values?(e=Or(e.values),(s=!Un(e[0]))&&(i*=i)):e=vp(e.increment)),Pi(r,n?We(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var l=parseFloat(s?o.x:o),u=parseFloat(s?o.y:0),c=Mr,d=0,p=e.length,f,m;p--;)s?(f=e[p].x-l,m=e[p].y-u,f=f*f+m*m):f=Math.abs(e[p]-l),f<c&&(c=f,d=p);return d=!i||c<=i?e[d]:o,s||d===o||Un(o)?d:d+Pt(o)}:vp(e))},Rg=function(e,r,n,i){return Pi(Rt(e)?!r:n===!0?!!(n=0):!i,function(){return Rt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(r-e+n*.99))/n)*n*i)/i})},R4=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(i){return r.reduce(function(s,o){return o(s)},i)}},M4=function(e,r){return function(n){return e(parseFloat(n))+(r||Pt(n))}},O4=function(e,r,n){return Og(e,r,0,1,n)},Mg=function(e,r,n){return Pi(n,function(i){return e[~~r(i)]})},L4=function t(e,r,n){var i=r-e;return Rt(e)?Mg(e,t(0,e.length),r):Pi(n,function(s){return(i+(s-e)%i)%i+e})},z4=function t(e,r,n){var i=r-e,s=i*2;return Rt(e)?Mg(e,t(0,e.length-1),r):Pi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Vo=function(e){return e.replace(g4,function(r){var n=r.indexOf("[")+1,i=r.substring(n||7,n?r.indexOf("]"):r.length-1).split(v4);return Rg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Og=function(e,r,n,i,s){var o=r-e,l=i-n;return Pi(s,function(u){return n+((u-e)/o*l||0)})},B4=function t(e,r,n,i){var s=isNaN(e+r)?0:function(m){return(1-m)*e+m*r};if(!s){var o=pt(e),l={},u,c,d,p,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},r={p:r};else if(Rt(e)&&!Rt(r)){for(d=[],p=e.length,f=p-2,c=1;c<p;c++)d.push(t(e[c-1],e[c]));p--,s=function(y){y*=p;var g=Math.min(f,~~y);return d[g](y-g)},n=r}else i||(e=ca(Rt(e)?[]:{},e));if(!d){for(u in r)Kf.call(l,e,u,"get",r[u]);s=function(y){return th(y,l)||(o?e.p:e)}}}return Pi(n,s)},Vm=function(e,r,n){var i=e.labels,s=Mr,o,l,u;for(o in i)l=i[o]-r,l<0==!!n&&l&&s>(l=Math.abs(l))&&(u=o,s=l);return u},vr=function(e,r,n){var i=e.vars,s=i[r],o=Ae,l=e._ctx,u,c,d;if(s)return u=i[r+"Params"],c=i.callbackScope||e,n&&yi.length&&$u(),l&&(Ae=l),d=u?s.apply(c,u):s.call(c),Ae=o,d},qa=function(e){return Ni(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wt),e.progress()<1&&vr(e,"onInterrupt"),e},$s,Lg=[],zg=function(e){if(e)if(e=!e.name&&e.default||e,Vf()||e.headless){var r=e.name,n=We(e),i=r&&!n&&e.init?function(){this._props=[]}:e,s={init:Wo,render:th,add:Kf,kill:rb,modifier:tb,rawVars:0},o={targetTest:0,get:0,getSetter:eh,aliases:{},register:0};if(fa(),e!==i){if(fr[r])return;Nr(i,Nr(Uu(e,s),o)),ca(i.prototype,ca(s,Uu(e,o))),fr[i.prop=r]=i,e.targetTest&&(nu.push(i),Yf[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}wg(r,i),e.register&&e.register(sr,i,nr)}else Lg.push(e)},_e=255,Ya={aqua:[0,_e,_e],lime:[0,_e,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_e],navy:[0,0,128],white:[_e,_e,_e],olive:[128,128,0],yellow:[_e,_e,0],orange:[_e,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_e,0,0],pink:[_e,192,203],cyan:[0,_e,_e],transparent:[_e,_e,_e,0]},ed=function(e,r,n){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(n-r)*e*6:e<.5?n:e*3<2?r+(n-r)*(2/3-e)*6:r)*_e+.5|0},Bg=function(e,r,n){var i=e?Un(e)?[e>>16,e>>8&_e,e&_e]:0:Ya.black,s,o,l,u,c,d,p,f,m,y;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ya[e])i=Ya[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),l=e.charAt(3),e="#"+s+s+o+o+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&_e,i&_e,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&_e,e&_e]}else if(e.substr(0,3)==="hsl"){if(i=y=e.match(Bm),!r)u=+i[0]%360/360,c=+i[1]/100,d=+i[2]/100,o=d<=.5?d*(c+1):d+c-d*c,s=d*2-o,i.length>3&&(i[3]*=1),i[0]=ed(u+1/3,s,o),i[1]=ed(u,s,o),i[2]=ed(u-1/3,s,o);else if(~e.indexOf("="))return i=e.match(xg),n&&i.length<4&&(i[3]=1),i}else i=e.match(Bm)||Ya.transparent;i=i.map(Number)}return r&&!y&&(s=i[0]/_e,o=i[1]/_e,l=i[2]/_e,p=Math.max(s,o,l),f=Math.min(s,o,l),d=(p+f)/2,p===f?u=c=0:(m=p-f,c=d>.5?m/(2-p-f):m/(p+f),u=p===s?(o-l)/m+(o<l?6:0):p===o?(l-s)/m+2:(s-o)/m+4,u*=60),i[0]=~~(u+.5),i[1]=~~(c*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},Ig=function(e){var r=[],n=[],i=-1;return e.split(wi).forEach(function(s){var o=s.match(Is)||[];r.push.apply(r,o),n.push(i+=o.length+1)}),r.c=n,r},Hm=function(e,r,n){var i="",s=(e+i).match(wi),o=r?"hsla(":"rgba(",l=0,u,c,d,p;if(!s)return e;if(s=s.map(function(f){return(f=Bg(f,r,1))&&o+(r?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(d=Ig(e),u=n.c,u.join(i)!==d.c.join(i)))for(c=e.replace(wi,"1").split(Is),p=c.length-1;l<p;l++)i+=c[l]+(~u.indexOf(l)?s.shift()||o+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!c)for(c=e.split(wi),p=c.length-1;l<p;l++)i+=c[l]+s[l];return i+c[p]},wi=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ya)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),I4=/hsl[a]?\(/,$g=function(e){var r=e.join(" "),n;if(wi.lastIndex=0,wi.test(r))return n=I4.test(r),e[1]=Hm(e[1],n),e[0]=Hm(e[0],n,Ig(e[1])),!0},Ho,mr=function(){var t=Date.now,e=500,r=33,n=t(),i=n,s=1e3/240,o=s,l=[],u,c,d,p,f,m,y=function g(_){var h=t()-i,x=_===!0,v,w,N,k;if((h>e||h<0)&&(n+=h-r),i+=h,N=i-n,v=N-o,(v>0||x)&&(k=++p.frame,f=N-p.time*1e3,p.time=N=N/1e3,o+=v+(v>=s?4:s-v),w=1),x||(u=c(g)),w)for(m=0;m<l.length;m++)l[m](N,f,k,_)};return p={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){vg&&(!pp&&Vf()&&(cn=pp=window,Hf=cn.document||{},jr.gsap=sr,(cn.gsapVersions||(cn.gsapVersions=[])).push(sr.version),yg(Iu||cn.GreenSockGlobals||!cn.gsap&&cn||{}),Lg.forEach(zg)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&p.sleep(),c=d||function(_){return setTimeout(_,o-p.time*1e3+1|0)},Ho=1,y(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(u),Ho=0,c=Wo},lagSmoothing:function(_,h){e=_||1/0,r=Math.min(h||33,e)},fps:function(_){s=1e3/(_||240),o=p.time*1e3+s},add:function(_,h,x){var v=h?function(w,N,k,j){_(w,N,k,j),p.remove(v)}:_;return p.remove(_),l[x?"unshift":"push"](v),fa(),v},remove:function(_,h){~(h=l.indexOf(_))&&l.splice(h,1)&&m>=h&&m--},_listeners:l},p}(),fa=function(){return!Ho&&mr.wake()},de={},$4=/^[\d.\-M][\d.\-,\s]/,U4=/["']/g,W4=function(e){for(var r={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,l,u,c;s<o;s++)u=n[s],l=s!==o-1?u.lastIndexOf(","):u.length,c=u.substr(0,l),r[i]=isNaN(c)?c.replace(U4,"").trim():+c,i=u.substr(l+1).trim();return r},V4=function(e){var r=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",r);return e.substring(r,~i&&i<n?e.indexOf(")",n+1):n)},H4=function(e){var r=(e+"").split("("),n=de[r[0]];return n&&r.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[W4(r[1])]:V4(e).split(",").map(Ng)):de._CE&&$4.test(e)?de._CE("",e):n},q4=function(e){return function(r){return 1-e(1-r)}},ts=function(e,r){return e&&(We(e)?e:de[e]||H4(e))||r},gs=function(e,r,n,i){n===void 0&&(n=function(u){return 1-r(1-u)}),i===void 0&&(i=function(u){return u<.5?r(u*2)/2:1-r((1-u)*2)/2});var s={easeIn:r,easeOut:n,easeInOut:i},o;return rr(e,function(l){de[l]=jr[l]=s,de[o=l.toLowerCase()]=n;for(var u in s)de[o+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=de[l+"."+u]=s[u]}),s},Ug=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},td=function t(e,r,n){var i=r>=1?r:1,s=(n||(e?.3:.45))/(r<1?r:1),o=s/dp*(Math.asin(1/i)||0),l=function(d){return d===1?1:i*Math.pow(2,-10*d)*x4((d-o)*s)+1},u=e==="out"?l:e==="in"?function(c){return 1-l(1-c)}:Ug(l);return s=dp/s,u.config=function(c,d){return t(e,c,d)},u},rd=function t(e,r){r===void 0&&(r=1.70158);var n=function(o){return o?--o*o*((r+1)*o+r)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ug(n);return i.config=function(s){return t(e,s)},i};rr("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;gs(t+",Power"+(r-1),e?function(n){return Math.pow(n,r)}:function(n){return n},function(n){return 1-Math.pow(1-n,r)},function(n){return n<.5?Math.pow(n*2,r)/2:1-Math.pow((1-n)*2,r)/2})});de.Linear.easeNone=de.none=de.Linear.easeIn;gs("Elastic",td("in"),td("out"),td());(function(t,e){var r=1/e,n=2*r,i=2.5*r,s=function(l){return l<r?t*l*l:l<n?t*Math.pow(l-1.5/e,2)+.75:l<i?t*(l-=2.25/e)*l+.9375:t*Math.pow(l-2.625/e,2)+.984375};gs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);gs("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});gs("Circ",function(t){return-(hg(1-t*t)-1)});gs("Sine",function(t){return t===1?1:-m4(t*f4)+1});gs("Back",rd("in"),rd("out"),rd());de.SteppedEase=de.steps=jr.SteppedEase={config:function(e,r){e===void 0&&(e=1);var n=1/e,i=e+(r?0:1),s=r?1:0,o=1-be;return function(l){return((i*il(0,o,l)|0)+s)*n}}};$o.ease=de["quad.out"];rr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Xf+=t+","+t+"Params,"});var Wg=function(e,r){this.id=h4++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:bg,this.set=r?r.getSetter:eh},qo=function(){function t(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,pa(this,+r.duration,1,1),this.data=r.data,Ae&&(this._ctx=Ae,Ae.data.push(this)),Ho||mr.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,pa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(fa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yc(this,n),!s._dp||s.parent||Cg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===be||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),jg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Um(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Um(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?da(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-be?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Wu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-be?0:this._rts,this.totalTime(il(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),vc(this),S4(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==be&&(this._tTime-=be)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Re(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(tr(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=b4);var i=wt;return wt=n,Gf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Er(this,n),tr(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,tr(i)),this._dur||(this._zTime=-be),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-be:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-be,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-be)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var l=We(n)?n:kg,u=function(){var d=i.then;i.then=null,s&&s(),We(l)&&(l=l(i))&&(l.then||l===i)&&(i.then=d),o(l),i.then=d};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?u():i._prom=u})},e.kill=function(){qa(this)},t}();Nr(qo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-be,_prom:0,_ps:!1,_rts:1});var Gt=function(t){fg(e,t);function e(n,i){var s;return n===void 0&&(n={}),s=t.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=tr(n.sortChildren),Oe&&fn(n.parent||Oe,Fn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Fg(Fn(s),n.scrollTrigger),s}var r=e.prototype;return r.to=function(i,s,o){return po(0,arguments,this),this},r.from=function(i,s,o){return po(1,arguments,this),this},r.fromTo=function(i,s,o,l){return po(2,arguments,this),this},r.set=function(i,s,o){return s.duration=0,s.parent=this,co(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ke(i,s,Er(this,o),1),this},r.call=function(i,s,o){return fn(this,Ke.delayedCall(0,i,s),o)},r.staggerTo=function(i,s,o,l,u,c,d){return o.duration=s,o.stagger=o.stagger||l,o.onComplete=c,o.onCompleteParams=d,o.parent=this,new Ke(i,o,Er(this,u)),this},r.staggerFrom=function(i,s,o,l,u,c,d){return o.runBackwards=1,co(o).immediateRender=tr(o.immediateRender),this.staggerTo(i,s,o,l,u,c,d)},r.staggerFromTo=function(i,s,o,l,u,c,d,p){return l.startAt=o,co(l).immediateRender=tr(l.immediateRender),this.staggerTo(i,s,l,u,c,d,p)},r.render=function(i,s,o){var l=this._time,u=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=i<=0?0:Re(i),p=this._zTime<0!=i<0&&(this._initted||!c),f,m,y,g,_,h,x,v,w,N,k,j;if(this!==Oe&&d>u&&i>=0&&(d=u),d!==this._tTime||o||p){if(l!==this._time&&c&&(d+=this._time-l,i+=this._time-l),f=d,w=this._start,v=this._ts,h=!v,p&&(c||(l=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(k=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(f=Re(d%_),d===u?(g=this._repeat,f=c):(N=Re(d/_),g=~~N,g&&g===N&&(f=c,g--),f>c&&(f=c)),N=da(this._tTime,_),!l&&this._tTime&&N!==g&&this._tTime-N*_-this._dur<=0&&(N=g),k&&g&1&&(f=c-f,j=1),g!==N&&!this._lock){var F=k&&N&1,A=F===(k&&g&1);if(g<N&&(F=!F),l=F?0:d%c?c:d,this._lock=1,this.render(l||(j?0:Re(g*_)),s,!c)._lock=0,this._tTime=d,!s&&this.parent&&vr(this,"onRepeat"),this.vars.repeatRefresh&&!j&&(this.invalidate()._lock=1,N=g),l&&l!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,u=this._tDur,A&&(this._lock=2,l=F?c:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!j&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=A4(this,Re(l),Re(f)),x&&(d-=f-(f=x._start))),this._tTime=d,this._time=f,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,l=0),!l&&d&&c&&!s&&!N&&(vr(this,"onStart"),this._tTime!==d))return this;if(f>=l&&i>=0)for(m=this._first;m;){if(y=m._next,(m._act||f>=m._start)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,o),f!==this._time||!this._ts&&!h){x=0,y&&(d+=this._zTime=-be);break}}m=y}else{m=this._last;for(var C=i<0?i:f;m;){if(y=m._prev,(m._act||C<=m._end)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(C-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(C-m._start)*m._ts,s,o||wt&&Gf(m)),f!==this._time||!this._ts&&!h){x=0,y&&(d+=this._zTime=C?-be:be);break}}m=y}}if(x&&!s&&(this.pause(),x.render(f>=l?0:-be)._zTime=f>=l?1:-1,this._ts))return this._start=w,vc(this),this.render(i,s,o);this._onUpdate&&!s&&vr(this,"onUpdate",!0),(d===u&&this._tTime>=this.totalDuration()||!d&&l)&&(w===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(d===u&&this._ts>0||!d&&this._ts<0)&&Ni(this,1),!s&&!(i<0&&!l)&&(d||l||!u)&&(vr(this,d===u&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<u&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(i,s){var o=this;if(Un(s)||(s=Er(this,s,i)),!(i instanceof qo)){if(Rt(i))return i.forEach(function(l){return o.add(l,s)}),this;if(pt(i))return this.addLabel(i,s);if(We(i))i=Ke.delayedCall(0,i);else return this}return this!==i?fn(this,i,s):this},r.getChildren=function(i,s,o,l){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),l===void 0&&(l=-Mr);for(var u=[],c=this._first;c;)c._start>=l&&(c instanceof Ke?s&&u.push(c):(o&&u.push(c),i&&u.push.apply(u,c.getChildren(!0,s,o)))),c=c._next;return u},r.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},r.remove=function(i){return pt(i)?this.removeLabel(i):We(i)?this.killTweensOf(i):(i.parent===this&&gc(this,i),i===this._recent&&(this._recent=this._last),es(this))},r.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Re(mr.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},r.addLabel=function(i,s){return this.labels[i]=Er(this,s),this},r.removeLabel=function(i){return delete this.labels[i],this},r.addPause=function(i,s,o){var l=Ke.delayedCall(0,s||Wo,o);return l.data="isPause",this._hasPause=1,fn(this,l,Er(this,i))},r.removePause=function(i){var s=this._first;for(i=Er(this,i);s;)s._start===i&&s.data==="isPause"&&Ni(s),s=s._next},r.killTweensOf=function(i,s,o){for(var l=this.getTweensOf(i,o),u=l.length;u--;)ai!==l[u]&&l[u].kill(i,s);return this},r.getTweensOf=function(i,s){for(var o=[],l=Or(i),u=this._first,c=Un(s),d;u;)u instanceof Ke?j4(u._targets,l)&&(c?(!ai||u._initted&&u._ts)&&u.globalTime(0)<=s&&u.globalTime(u.totalDuration())>s:!s||u.isActive())&&o.push(u):(d=u.getTweensOf(l,s)).length&&o.push.apply(o,d),u=u._next;return o},r.tweenTo=function(i,s){s=s||{};var o=this,l=Er(o,i),u=s,c=u.startAt,d=u.onStart,p=u.onStartParams,f=u.immediateRender,m,y=Ke.to(o,Nr({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(c&&"time"in c?c.time:o._time))/o.timeScale())||be,onStart:function(){if(o.pause(),!m){var _=s.duration||Math.abs((l-(c&&"time"in c?c.time:o._time))/o.timeScale());y._dur!==_&&pa(y,_,0,1).render(y._time,!0,!0),m=1}d&&d.apply(y,p||[])}},s));return f?y.render(0):y},r.tweenFromTo=function(i,s,o){return this.tweenTo(s,Nr({startAt:{time:Er(this,i)}},o))},r.recent=function(){return this._recent},r.nextLabel=function(i){return i===void 0&&(i=this._time),Vm(this,Er(this,i))},r.previousLabel=function(i){return i===void 0&&(i=this._time),Vm(this,Er(this,i),1)},r.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+be)},r.shiftChildren=function(i,s,o){o===void 0&&(o=0);var l=this._first,u=this.labels,c;for(i=Re(i);l;)l._start>=o&&(l._start+=i,l._end+=i),l=l._next;if(s)for(c in u)u[c]>=o&&(u[c]+=i);return es(this)},r.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return t.prototype.invalidate.call(this,i)},r.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),es(this)},r.totalDuration=function(i){var s=0,o=this,l=o._last,u=Mr,c,d,p;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(p=o.parent;l;)c=l._prev,l._dirty&&l.totalDuration(),d=l._start,d>u&&o._sort&&l._ts&&!o._lock?(o._lock=1,fn(o,l,d-l._delay,1)._lock=0):u=d,d<0&&l._ts&&(s-=d,(!p&&!o._dp||p&&p.smoothChildTiming)&&(o._start+=Re(d/o._ts),o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),u=0),l._end>s&&l._ts&&(s=l._end),l=c;pa(o,o===Oe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Oe._ts&&(jg(Oe,Wu(i,Oe)),_g=mr.frame),mr.frame>=Im){Im+=_r.autoSleep||120;var s=Oe._first;if((!s||!s._ts)&&_r.autoSleep&&mr._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||mr.sleep()}}},e}(qo);Nr(Gt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Y4=function(e,r,n,i,s,o,l){var u=new nr(this._pt,e,r,0,1,Qg,null,s),c=0,d=0,p,f,m,y,g,_,h,x;for(u.b=n,u.e=i,n+="",i+="",(h=~i.indexOf("random("))&&(i=Vo(i)),o&&(x=[n,i],o(x,e,r),n=x[0],i=x[1]),f=n.match(Jc)||[];p=Jc.exec(i);)y=p[0],g=i.substring(c,p.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),y!==f[d++]&&(_=parseFloat(f[d-1])||0,u._pt={_next:u._pt,p:g||d===1?g:",",s:_,c:y.charAt(1)==="="?Qs(_,y)-_:parseFloat(y)-_,m:m&&m<4?Math.round:0},c=Jc.lastIndex);return u.c=c<i.length?i.substring(c,i.length):"",u.fp=l,(gg.test(i)||h)&&(u.e=0),this._pt=u,u},Kf=function(e,r,n,i,s,o,l,u,c,d){We(i)&&(i=i(s||0,e,o));var p=e[r],f=n!=="get"?n:We(p)?c?e[r.indexOf("set")||!We(e["get"+r.substr(3)])?r:"get"+r.substr(3)](c):e[r]():p,m=We(p)?c?J4:Yg:Zf,y;if(pt(i)&&(~i.indexOf("random(")&&(i=Vo(i)),i.charAt(1)==="="&&(y=Qs(f,i)+(Pt(f)||0),(y||y===0)&&(i=y))),!d||f!==i||yp)return!isNaN(f*i)&&i!==""?(y=new nr(this._pt,e,r,+f||0,i-(f||0),typeof p=="boolean"?eb:Xg,0,m),c&&(y.fp=c),l&&y.modifier(l,this,e),this._pt=y):(!p&&!(r in e)&&qf(r,i),Y4.call(this,e,r,f,i,m,u||_r.stringFilter,c))},X4=function(e,r,n,i,s){if(We(e)&&(e=fo(e,s,r,n,i)),!yn(e)||e.style&&e.nodeType||Rt(e)||mg(e))return pt(e)?fo(e,s,r,n,i):e;var o={},l;for(l in e)o[l]=fo(e[l],s,r,n,i);return o},Vg=function(e,r,n,i,s,o){var l,u,c,d;if(fr[e]&&(l=new fr[e]).init(s,l.rawVars?r[e]:X4(r[e],i,s,o,n),n,i,o)!==!1&&(n._pt=u=new nr(n._pt,s,e,0,1,l.render,l,0,l.priority),n!==$s))for(c=n._ptLookup[n._targets.indexOf(s)],d=l._props.length;d--;)c[l._props[d]]=u;return l},ai,yp,Jf=function t(e,r,n){var i=e.vars,s=i.ease,o=i.startAt,l=i.immediateRender,u=i.lazy,c=i.onUpdate,d=i.runBackwards,p=i.yoyoEase,f=i.keyframes,m=i.autoRevert,y=e._dur,g=e._startAt,_=e._targets,h=e.parent,x=h&&h.data==="nested"?h.vars.targets:_,v=e._overwrite==="auto"&&!Uf,w=e.timeline,N=i.easeReverse||p,k,j,F,A,C,L,O,V,I,H,Q,W,D;if(w&&(!f||!s)&&(s="none"),e._ease=ts(s,$o.ease),e._rEase=N&&(ts(N)||e._ease),e._from=!w&&!!i.runBackwards,e._from&&(e.ratio=1),!w||f&&!i.stagger){if(V=_[0]?Zi(_[0]).harness:0,W=V&&i[V.prop],k=Uu(i,Yf),g&&(g._zTime<0&&g.progress(1),r<0&&d&&l&&!m?g.render(-1,!0):g.revert(d&&y?ru:_4),g._lazy=0),o){if(Ni(e._startAt=Ke.set(_,Nr({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&tr(u),startAt:null,delay:0,onUpdate:c&&function(){return vr(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(wt||!l&&!m)&&e._startAt.revert(ru),l&&y&&r<=0&&n<=0){r&&(e._zTime=r);return}}else if(d&&y&&!g){if(r&&(l=!1),F=Nr({overwrite:!1,data:"isFromStart",lazy:l&&!g&&tr(u),immediateRender:l,stagger:0,parent:h},k),W&&(F[V.prop]=W),Ni(e._startAt=Ke.set(_,F)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(wt?e._startAt.revert(ru):e._startAt.render(-1,!0)),e._zTime=r,!l)t(e._startAt,be,be);else if(!r)return}for(e._pt=e._ptCache=0,u=y&&tr(u)||u&&!y,j=0;j<_.length;j++){if(C=_[j],O=C._gsap||Qf(_)[j]._gsap,e._ptLookup[j]=H={},fp[O.id]&&yi.length&&$u(),Q=x===_?j:x.indexOf(C),V&&(I=new V).init(C,W||k,e,Q,x)!==!1&&(e._pt=A=new nr(e._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(z){H[z]=A}),I.priority&&(L=1)),!V||W)for(F in k)fr[F]&&(I=Vg(F,k,e,Q,C,x))?I.priority&&(L=1):H[F]=A=Kf.call(e,C,F,"get",k[F],Q,x,0,i.stringFilter);e._op&&e._op[j]&&e.kill(C,e._op[j]),v&&e._pt&&(ai=e,Oe.killTweensOf(C,H,e.globalTime(r)),D=!e.parent,ai=0),e._pt&&u&&(fp[O.id]=1)}L&&Gg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!D,f&&r<=0&&w.render(Mr,!0,!0)},Q4=function(e,r,n,i,s,o,l,u){var c=(e._pt&&e._ptCache||(e._ptCache={}))[r],d,p,f,m;if(!c)for(c=e._ptCache[r]=[],f=e._ptLookup,m=e._targets.length;m--;){if(d=f[m][r],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==r&&d.fp!==r;)d=d._next;if(!d)return yp=1,e.vars[r]="+=0",Jf(e,l),yp=0,u?Uo(r+" not eligible for reset. Try splitting into individual properties"):1;c.push(d)}for(m=c.length;m--;)p=c[m],d=p._pt||p,d.s=(i||i===0)&&!s?i:d.s+(i||0)+o*d.c,d.c=n-d.s,p.e&&(p.e=qe(n)+Pt(p.e)),p.b&&(p.b=d.s+Pt(p.b))},G4=function(e,r){var n=e[0]?Zi(e[0]).harness:0,i=n&&n.aliases,s,o,l,u;if(!i)return r;s=ca({},r);for(o in i)if(o in s)for(u=i[o].split(","),l=u.length;l--;)s[u[l]]=s[o];return s},K4=function(e,r,n,i){var s=r.ease||i||"power1.inOut",o,l;if(Rt(r))l=n[e]||(n[e]=[]),r.forEach(function(u,c){return l.push({t:c/(r.length-1)*100,v:u,e:s})});else for(o in r)l=n[o]||(n[o]=[]),o==="ease"||l.push({t:parseFloat(e),v:r[o],e:s})},fo=function(e,r,n,i,s){return We(e)?e.call(r,n,i,s):pt(e)&&~e.indexOf("random(")?Vo(e):e},Hg=Xf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",qg={};rr(Hg+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return qg[t]=1});var Ke=function(t){fg(e,t);function e(n,i,s,o){var l;typeof i=="number"&&(s.duration=i,i=s,s=null),l=t.call(this,o?i:co(i))||this;var u=l.vars,c=u.duration,d=u.delay,p=u.immediateRender,f=u.stagger,m=u.overwrite,y=u.keyframes,g=u.defaults,_=u.scrollTrigger,h=i.parent||Oe,x=(Rt(n)||mg(n)?Un(n[0]):"length"in i)?[n]:Or(n),v,w,N,k,j,F,A,C;if(l._targets=x.length?Qf(x):Uo("GSAP target "+n+" not found. https://gsap.com",!_r.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=m,y||f||Sl(c)||Sl(d)){i=l.vars;var L=i.easeReverse||i.yoyoEase;if(v=l.timeline=new Gt({data:"nested",defaults:g||{},targets:h&&h.data==="nested"?h.vars.targets:x}),v.kill(),v.parent=v._dp=Fn(l),v._start=0,f||Sl(c)||Sl(d)){if(k=x.length,A=f&&Pg(f),yn(f))for(j in f)~Hg.indexOf(j)&&(C||(C={}),C[j]=f[j]);for(w=0;w<k;w++)N=Uu(i,qg),N.stagger=0,L&&(N.easeReverse=L),C&&ca(N,C),F=x[w],N.duration=+fo(c,Fn(l),w,F,x),N.delay=(+fo(d,Fn(l),w,F,x)||0)-l._delay,!f&&k===1&&N.delay&&(l._delay=d=N.delay,l._start+=d,N.delay=0),v.to(F,N,A?A(w,F,x):0),v._ease=de.none;v.duration()?c=d=0:l.timeline=0}else if(y){co(Nr(v.vars.defaults,{ease:"none"})),v._ease=ts(y.ease||i.ease||"none");var O=0,V,I,H;if(Rt(y))y.forEach(function(Q){return v.to(x,Q,">")}),v.duration();else{N={};for(j in y)j==="ease"||j==="easeEach"||K4(j,y[j],N,y.easeEach);for(j in N)for(V=N[j].sort(function(Q,W){return Q.t-W.t}),O=0,w=0;w<V.length;w++)I=V[w],H={ease:I.e,duration:(I.t-(w?V[w-1].t:0))/100*c},H[j]=I.v,v.to(x,H,O),O+=H.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||l.duration(c=v.duration())}else l.timeline=0;return m===!0&&!Uf&&(ai=Fn(l),Oe.killTweensOf(x),ai=0),fn(h,Fn(l),s),i.reversed&&l.reverse(),i.paused&&l.paused(!0),(p||!c&&!y&&l._start===Re(h._time)&&tr(p)&&C4(Fn(l))&&h.data!=="nested")&&(l._tTime=-be,l.render(Math.max(0,-d)||0)),_&&Fg(Fn(l),_),l}var r=e.prototype;return r.render=function(i,s,o){var l=this._time,u=this._tDur,c=this._dur,d=i<0,p=i>u-be&&!d?u:i<be?0:i,f,m,y,g,_,h,x,v;if(!c)E4(this,i,s,o);else if(p!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(f=p,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(g*100+i,s,o);if(f=Re(p%g),p===u?(y=this._repeat,f=c):(_=Re(p/g),y=~~_,y&&y===_?(f=c,y--):f>c&&(f=c)),h=this._yoyo&&y&1,h&&(f=c-f),_=da(this._tTime,g),f===l&&!o&&this._initted&&y===_)return this._tTime=p,this;y!==_&&this.vars.repeatRefresh&&!h&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Re(g*y),!0).invalidate()._lock=0)}if(!this._initted){if(Eg(this,d?i:f,o,s,p))return this._tTime=0,this;if(l!==this._time&&!(o&&this.vars.repeatRefresh&&y!==_))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var w=f<l;if(w!==this._inv){var N=w?l:c-l;this._inv=w,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=l,this._invRecip=N?(w?-1:1)/N:0,this._invScale=w?-this.ratio:1-this.ratio,this._invEase=w?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/c);if(this._from&&(this.ratio=x=1-x),this._tTime=p,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!l&&p&&!s&&!_&&(vr(this,"onStart"),this._tTime!==p))return this;for(m=this._pt;m;)m.r(x,m.d),m=m._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(d&&hp(this,i,s,o),vr(this,"onUpdate")),this._repeat&&y!==_&&this.vars.onRepeat&&!s&&this.parent&&vr(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(d&&!this._onUpdate&&hp(this,i,!0,!0),(i||!c)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&Ni(this,1),!s&&!(d&&!l)&&(p||l||h)&&(vr(this,p===u?"onComplete":"onReverseComplete",!0),this._prom&&!(p<u&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},r.resetTo=function(i,s,o,l,u){Ho||mr.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Jf(this,c),d=this._ease(c/this._dur),Q4(this,i,s,o,l,d,c,u)?this.resetTo(i,s,o,l,1):(yc(this,0),this.parent||Sg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?qa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ai&&ai.vars.overwrite!==!0)._first||qa(this),this.parent&&o!==this.timeline.totalDuration()&&pa(this,this._dur*this.timeline._tDur/o,0,1),this}var l=this._targets,u=i?Or(i):l,c=this._ptLookup,d=this._pt,p,f,m,y,g,_,h;if((!s||s==="all")&&k4(l,u))return s==="all"&&(this._pt=0),qa(this);for(p=this._op=this._op||[],s!=="all"&&(pt(s)&&(g={},rr(s,function(x){return g[x]=1}),s=g),s=G4(l,s)),h=l.length;h--;)if(~u.indexOf(l[h])){f=c[h],s==="all"?(p[h]=s,y=f,m={}):(m=p[h]=p[h]||{},y=s);for(g in y)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&gc(this,_,"_pt"),delete f[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&d&&qa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return po(1,arguments)},e.delayedCall=function(i,s,o,l){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:l})},e.fromTo=function(i,s,o){return po(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Oe.killTweensOf(i,s,o)},e}(qo);Nr(Ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rr("staggerTo,staggerFrom,staggerFromTo",function(t){Ke[t]=function(){var e=new Gt,r=xp.call(arguments,0);return r.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,r)}});var Zf=function(e,r,n){return e[r]=n},Yg=function(e,r,n){return e[r](n)},J4=function(e,r,n,i){return e[r](i.fp,n)},Z4=function(e,r,n){return e.setAttribute(r,n)},eh=function(e,r){return We(e[r])?Yg:Wf(e[r])&&e.setAttribute?Z4:Zf},Xg=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},eb=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},Qg=function(e,r){var n=r._pt,i="";if(!e&&r.b)i=r.b;else if(e===1&&r.e)i=r.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=r.c}r.set(r.t,r.p,i,r)},th=function(e,r){for(var n=r._pt;n;)n.r(e,n.d),n=n._next},tb=function(e,r,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,r,n),s=o},rb=function(e){for(var r=this._pt,n,i;r;)i=r._next,r.p===e&&!r.op||r.op===e?gc(this,r,"_pt"):r.dep||(n=1),r=i;return!n},nb=function(e,r,n,i){i.mSet(e,r,i.m.call(i.tween,n,i.mt),i)},Gg=function(e){for(var r=e._pt,n,i,s,o;r;){for(n=r._next,i=s;i&&i.pr>r.pr;)i=i._next;(r._prev=i?i._prev:o)?r._prev._next=r:s=r,(r._next=i)?i._prev=r:o=r,r=n}e._pt=s},nr=function(){function t(r,n,i,s,o,l,u,c,d){this.t=n,this.s=s,this.c=o,this.p=i,this.r=l||Xg,this.d=u||this,this.set=c||Zf,this.pr=d||0,this._next=r,r&&(r._prev=this)}var e=t.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=nb,this.m=n,this.mt=s,this.tween=i},t}();rr(Xf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return Yf[t]=1});jr.TweenMax=jr.TweenLite=Ke;jr.TimelineLite=jr.TimelineMax=Gt;Oe=new Gt({sortChildren:!1,defaults:$o,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_r.stringFilter=$g;var rs=[],iu={},ib=[],qm=0,sb=0,nd=function(e){return(iu[e]||ib).map(function(r){return r()})},wp=function(){var e=Date.now(),r=[];e-qm>2&&(nd("matchMediaInit"),rs.forEach(function(n){var i=n.queries,s=n.conditions,o,l,u,c;for(l in i)o=cn.matchMedia(i[l]).matches,o&&(u=1),o!==s[l]&&(s[l]=o,c=1);c&&(n.revert(),u&&r.push(n))}),nd("matchMediaRevert"),r.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),qm=e,nd("matchMedia"))},Kg=function(){function t(r,n){this.selector=n&&gp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=sb++,r&&this.add(r)}var e=t.prototype;return e.add=function(n,i,s){We(n)&&(s=i,i=n,n=We);var o=this,l=function(){var c=Ae,d=o.selector,p;return c&&c!==o&&c.data.push(o),s&&(o.selector=gp(s)),Ae=o,p=i.apply(o,arguments),We(p)&&o._r.push(p),Ae=c,o.selector=d,o.isReverted=!1,p};return o.last=l,n===We?l(o,function(u){return o.add(null,u)}):n?o[n]=l:l},e.ignore=function(n){var i=Ae;Ae=null,n(this),Ae=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof t?n.push.apply(n,i.getTweens()):i instanceof Ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var l=s.getTweens(),u=s.data.length,c;u--;)c=s.data[u],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return l.splice(l.indexOf(d),1)}));for(l.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,p){return p.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),u=s.data.length;u--;)c=s.data[u],c instanceof Gt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ke)&&c.revert&&c.revert(n);s._r.forEach(function(d){return d(n,s)}),s.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),i)for(var o=rs.length;o--;)rs[o].id===this.id&&rs.splice(o,1)},e.revert=function(n){this.kill(n||{})},t}(),ab=function(){function t(r){this.contexts=[],this.scope=r,Ae&&Ae.data.push(this)}var e=t.prototype;return e.add=function(n,i,s){yn(n)||(n={matches:n});var o=new Kg(0,s||this.scope),l=o.conditions={},u,c,d;Ae&&!o.selector&&(o.selector=Ae.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?d=1:(u=cn.matchMedia(n[c]),u&&(rs.indexOf(o)<0&&rs.push(o),(l[c]=u.matches)&&(d=1),u.addListener?u.addListener(wp):u.addEventListener("change",wp)));return d&&i(o,function(p){return o.add(null,p)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},t}(),Vu={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.forEach(function(i){return zg(i)})},timeline:function(e){return new Gt(e)},getTweensOf:function(e,r){return Oe.getTweensOf(e,r)},getProperty:function(e,r,n,i){pt(e)&&(e=Or(e)[0]);var s=Zi(e||{}).get,o=n?kg:Ng;return n==="native"&&(n=""),e&&(r?o((fr[r]&&fr[r].get||s)(e,r,n,i)):function(l,u,c){return o((fr[l]&&fr[l].get||s)(e,l,u,c))})},quickSetter:function(e,r,n){if(e=Or(e),e.length>1){var i=e.map(function(d){return sr.quickSetter(d,r,n)}),s=i.length;return function(d){for(var p=s;p--;)i[p](d)}}e=e[0]||{};var o=fr[r],l=Zi(e),u=l.harness&&(l.harness.aliases||{})[r]||r,c=o?function(d){var p=new o;$s._pt=0,p.init(e,n?d+n:d,$s,0,[e]),p.render(1,p),$s._pt&&th(1,$s)}:l.set(e,u);return o?c:function(d){return c(e,u,n?d+n:d,l,1)}},quickTo:function(e,r,n){var i,s=sr.to(e,Nr((i={},i[r]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(u,c,d){return s.resetTo(r,u,c,d)};return o.tween=s,o},isTweening:function(e){return Oe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ts(e.ease,$o.ease)),$m($o,e||{})},config:function(e){return $m(_r,e||{})},registerEffect:function(e){var r=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(l){return l&&!fr[l]&&!jr[l]&&Uo(r+" effect requires "+l+" plugin.")}),Zc[r]=function(l,u,c){return n(Or(l),Nr(u||{},s),c)},o&&(Gt.prototype[r]=function(l,u,c){return this.add(Zc[r](l,yn(u)?u:(c=u)&&{},this),c)})},registerEase:function(e,r){de[e]=ts(r)},parseEase:function(e,r){return arguments.length?ts(e,r):de},getById:function(e){return Oe.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var n=new Gt(e),i,s;for(n.smoothChildTiming=tr(e.smoothChildTiming),Oe.remove(n),n._dp=0,n._time=n._tTime=Oe._time,i=Oe._first;i;)s=i._next,(r||!(!i._dur&&i instanceof Ke&&i.vars.onComplete===i._targets[0]))&&fn(n,i,i._start-i._delay),i=s;return fn(Oe,n,0),n},context:function(e,r){return e?new Kg(e,r):Ae},matchMedia:function(e){return new ab(e)},matchMediaRefresh:function(){return rs.forEach(function(e){var r=e.conditions,n,i;for(i in r)r[i]&&(r[i]=!1,n=1);n&&e.revert()})||wp()},addEventListener:function(e,r){var n=iu[e]||(iu[e]=[]);~n.indexOf(r)||n.push(r)},removeEventListener:function(e,r){var n=iu[e],i=n&&n.indexOf(r);i>=0&&n.splice(i,1)},utils:{wrap:L4,wrapYoyo:z4,distribute:Pg,random:Rg,snap:Dg,normalize:O4,getUnit:Pt,clamp:P4,splitColor:Bg,toArray:Or,selector:gp,mapRange:Og,pipe:R4,unitize:M4,interpolate:B4,shuffle:Tg},install:yg,effects:Zc,ticker:mr,updateRoot:Gt.updateRoot,plugins:fr,globalTimeline:Oe,core:{PropTween:nr,globals:wg,Tween:Ke,Timeline:Gt,Animation:qo,getCache:Zi,_removeLinkedListItem:gc,reverting:function(){return wt},context:function(e){return e&&Ae&&(Ae.data.push(e),e._ctx=Ae),Ae},suppressOverwrites:function(e){return Uf=e}}};rr("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Vu[t]=Ke[t]});mr.add(Gt.updateRoot);$s=Vu.to({},{duration:0});var ob=function(e,r){for(var n=e._pt;n&&n.p!==r&&n.op!==r&&n.fp!==r;)n=n._next;return n},lb=function(e,r){var n=e._targets,i,s,o;for(i in r)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=ob(o,i)),o&&o.modifier&&o.modifier(r[i],e,n[s],i))},id=function(e,r){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(l){var u,c;if(pt(s)&&(u={},rr(s,function(d){return u[d]=1}),s=u),r){u={};for(c in s)u[c]=r(s[c]);s=u}lb(l,s)}}}},sr=Vu.registerPlugin({name:"attr",init:function(e,r,n,i,s){var o,l,u;this.tween=n;for(o in r)u=e.getAttribute(o)||"",l=this.add(e,"setAttribute",(u||0)+"",r[o],i,s,0,0,o),l.op=o,l.b=u,this._props.push(o)},render:function(e,r){for(var n=r._pt;n;)wt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,r){for(var n=r.length;n--;)this.add(e,n,e[n]||0,r[n],0,0,0,0,0,1)}},id("roundProps",vp),id("modifiers"),id("snap",Dg))||Vu;Ke.version=Gt.version=sr.version="3.15.0";vg=1;Vf()&&fa();de.Power0;de.Power1;de.Power2;de.Power3;de.Power4;de.Linear;de.Quad;de.Cubic;de.Quart;de.Quint;de.Strong;de.Elastic;de.Back;de.SteppedEase;de.Bounce;de.Sine;de.Expo;de.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ym,oi,Gs,rh,Xi,Xm,nh,ub=function(){return typeof window<"u"},Wn={},Ui=180/Math.PI,Ks=Math.PI/180,bs=Math.atan2,Qm=1e8,ih=/([A-Z])/g,cb=/(left|right|width|margin|padding|x)/i,db=/[\s,\(]\S/,hn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_p=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},pb=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},fb=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},hb=function(e,r){return r.set(r.t,r.p,e===1?r.e:e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},mb=function(e,r){var n=r.s+r.c*e;r.set(r.t,r.p,~~(n+(n<0?-.5:.5))+r.u,r)},Jg=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},Zg=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},xb=function(e,r,n){return e.style[r]=n},gb=function(e,r,n){return e.style.setProperty(r,n)},vb=function(e,r,n){return e._gsap[r]=n},yb=function(e,r,n){return e._gsap.scaleX=e._gsap.scaleY=n},wb=function(e,r,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},_b=function(e,r,n,i,s){var o=e._gsap;o[r]=n,o.renderTransform(s,o)},Le="transform",ir=Le+"Origin",bb=function t(e,r){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Wn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=hn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=An(i,l)}):this.tfm[e]=o.x?o[e]:An(i,e),e===ir&&(this.tfm.zOrigin=o.zOrigin);else return hn.transform.split(",").forEach(function(l){return t.call(n,l,r)});if(this.props.indexOf(Le)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ir,r,"")),e=Le}(s||r)&&this.props.push(e,r,s[e])},ev=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jb=function(){var e=this.props,r=this.target,n=r.style,i=r._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?r[e[s]](e[s+2]):r[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ih,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),s=nh(),(!s||!s.isStart)&&!n[Le]&&(ev(n),i.zOrigin&&n[ir]&&(n[ir]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},tv=function(e,r){var n={target:e,props:[],revert:jb,save:bb};return e._gsap||sr.core.getCache(e),r&&e.style&&e.nodeType&&r.split(",").forEach(function(i){return n.save(i)}),n},rv,bp=function(e,r){var n=oi.createElementNS?oi.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):oi.createElement(e);return n&&n.style?n:oi.createElement(e)},yr=function t(e,r,n){var i=getComputedStyle(e);return i[r]||i.getPropertyValue(r.replace(ih,"-$1").toLowerCase())||i.getPropertyValue(r)||!n&&t(e,ha(r)||r,1)||""},Gm="O,Moz,ms,Ms,Webkit".split(","),ha=function(e,r,n){var i=r||Xi,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Gm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Gm[o]:"")+e},jp=function(){ub()&&window.document&&(Ym=window,oi=Ym.document,Gs=oi.documentElement,Xi=bp("div")||{style:{}},bp("div"),Le=ha(Le),ir=Le+"Origin",Xi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rv=!!ha("perspective"),nh=sr.core.reverting,rh=1)},Km=function(e){var r=e.ownerSVGElement,n=bp("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Gs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Gs.removeChild(n),s},Jm=function(e,r){for(var n=r.length;n--;)if(e.hasAttribute(r[n]))return e.getAttribute(r[n])},nv=function(e){var r,n;try{r=e.getBBox()}catch{r=Km(e),n=1}return r&&(r.width||r.height)||n||(r=Km(e)),r&&!r.width&&!r.x&&!r.y?{x:+Jm(e,["x","cx","x1"])||0,y:+Jm(e,["y","cy","y1"])||0,width:0,height:0}:r},iv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&nv(e))},ki=function(e,r){if(r){var n=e.style,i;r in Wn&&r!==ir&&(r=Le),n.removeProperty?(i=r.substr(0,2),(i==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),n.removeProperty(i==="--"?r:r.replace(ih,"-$1").toLowerCase())):n.removeAttribute(r)}},li=function(e,r,n,i,s,o){var l=new nr(e._pt,r,n,0,1,o?Zg:Jg);return e._pt=l,l.b=i,l.e=s,e._props.push(n),l},Zm={deg:1,rad:1,turn:1},Nb={grid:1,flex:1},Si=function t(e,r,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",l=Xi.style,u=cb.test(r),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(u?"Width":"Height"),p=100,f=i==="px",m=i==="%",y,g,_,h;if(i===o||!s||Zm[i]||Zm[o])return s;if(o!=="px"&&!f&&(s=t(e,r,n,"px")),h=e.getCTM&&iv(e),(m||o==="%")&&(Wn[r]||~r.indexOf("adius")))return y=h?e.getBBox()[u?"width":"height"]:e[d],qe(m?s/y*p:s/100*y);if(l[u?"width":"height"]=p+(f?o:i),g=i!=="rem"&&~r.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===oi||!g.appendChild)&&(g=oi.body),_=g._gsap,_&&m&&_.width&&u&&_.time===mr.time&&!_.uncache)return qe(s/_.width*p);if(m&&(r==="height"||r==="width")){var x=e.style[r];e.style[r]=p+i,y=e[d],x?e.style[r]=x:ki(e,r)}else(m||o==="%")&&!Nb[yr(g,"display")]&&(l.position=yr(e,"position")),g===e&&(l.position="static"),g.appendChild(Xi),y=Xi[d],g.removeChild(Xi),l.position="absolute";return u&&m&&(_=Zi(g),_.time=mr.time,_.width=g[d]),qe(f?y*s/p:y&&s?p/y*s:0)},An=function(e,r,n,i){var s;return rh||jp(),r in hn&&r!=="transform"&&(r=hn[r],~r.indexOf(",")&&(r=r.split(",")[0])),Wn[r]&&r!=="transform"?(s=Xo(e,i),s=r!=="transformOrigin"?s[r]:s.svg?s.origin:qu(yr(e,ir))+" "+s.zOrigin+"px"):(s=e.style[r],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Hu[r]&&Hu[r](e,r,n)||yr(e,r)||bg(e,r)||(r==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Si(e,r,s,n)+n:s},kb=function(e,r,n,i){if(!n||n==="none"){var s=ha(r,e,1),o=s&&yr(e,s,1);o&&o!==n?(r=s,n=o):r==="borderColor"&&(n=yr(e,"borderTopColor"))}var l=new nr(this._pt,e.style,r,0,1,Qg),u=0,c=0,d,p,f,m,y,g,_,h,x,v,w,N;if(l.b=n,l.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=yr(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[r],e.style[r]=i,i=yr(e,r)||i,g?e.style[r]=g:ki(e,r)),d=[n,i],$g(d),n=d[0],i=d[1],f=n.match(Is)||[],N=i.match(Is)||[],N.length){for(;p=Is.exec(i);)_=p[0],x=i.substring(u,p.index),y?y=(y+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(y=1),_!==(g=f[c++]||"")&&(m=parseFloat(g)||0,w=g.substr((m+"").length),_.charAt(1)==="="&&(_=Qs(m,_)+w),h=parseFloat(_),v=_.substr((h+"").length),u=Is.lastIndex-v.length,v||(v=v||_r.units[r]||w,u===i.length&&(i+=v,l.e+=v)),w!==v&&(m=Si(e,r,g,v)||0),l._pt={_next:l._pt,p:x||c===1?x:",",s:m,c:h-m,m:y&&y<4||r==="zIndex"?Math.round:0});l.c=u<i.length?i.substring(u,i.length):""}else l.r=r==="display"&&i==="none"?Zg:Jg;return gg.test(i)&&(l.e=0),this._pt=l,l},e0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Sb=function(e){var r=e.split(" "),n=r[0],i=r[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),r[0]=e0[n]||n,r[1]=e0[i]||i,r.join(" ")},Cb=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var n=r.t,i=n.style,s=r.u,o=n._gsap,l,u,c;if(s==="all"||s===!0)i.cssText="",u=1;else for(s=s.split(","),c=s.length;--c>-1;)l=s[c],Wn[l]&&(u=1,l=l==="transformOrigin"?ir:Le),ki(n,l);u&&(ki(n,Le),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Xo(n,1),o.uncache=1,ev(i)))}},Hu={clearProps:function(e,r,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new nr(e._pt,r,n,0,0,Cb);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Yo=[1,0,0,1,0,0],sv={},av=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},t0=function(e){var r=yr(e,Le);return av(r)?Yo:r.substr(7).match(xg).map(qe)},sh=function(e,r){var n=e._gsap||Zi(e),i=e.style,s=t0(e),o,l,u,c;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,s=[u.a,u.b,u.c,u.d,u.e,u.f],s.join(",")==="1,0,0,1,0,0"?Yo:s):(s===Yo&&!e.offsetParent&&e!==Gs&&!n.svg&&(u=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,l=e.nextElementSibling,Gs.appendChild(e)),s=t0(e),u?i.display=u:ki(e,"display"),c&&(l?o.insertBefore(e,l):o?o.appendChild(e):Gs.removeChild(e))),r&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Np=function(e,r,n,i,s,o){var l=e._gsap,u=s||sh(e,!0),c=l.xOrigin||0,d=l.yOrigin||0,p=l.xOffset||0,f=l.yOffset||0,m=u[0],y=u[1],g=u[2],_=u[3],h=u[4],x=u[5],v=r.split(" "),w=parseFloat(v[0])||0,N=parseFloat(v[1])||0,k,j,F,A;n?u!==Yo&&(j=m*_-y*g)&&(F=w*(_/j)+N*(-g/j)+(g*x-_*h)/j,A=w*(-y/j)+N*(m/j)-(m*x-y*h)/j,w=F,N=A):(k=nv(e),w=k.x+(~v[0].indexOf("%")?w/100*k.width:w),N=k.y+(~(v[1]||v[0]).indexOf("%")?N/100*k.height:N)),i||i!==!1&&l.smooth?(h=w-c,x=N-d,l.xOffset=p+(h*m+x*g)-h,l.yOffset=f+(h*y+x*_)-x):l.xOffset=l.yOffset=0,l.xOrigin=w,l.yOrigin=N,l.smooth=!!i,l.origin=r,l.originIsAbsolute=!!n,e.style[ir]="0px 0px",o&&(li(o,l,"xOrigin",c,w),li(o,l,"yOrigin",d,N),li(o,l,"xOffset",p,l.xOffset),li(o,l,"yOffset",f,l.yOffset)),e.setAttribute("data-svg-origin",w+" "+N)},Xo=function(e,r){var n=e._gsap||new Wg(e);if("x"in n&&!r&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",l="deg",u=getComputedStyle(e),c=yr(e,ir)||"0",d,p,f,m,y,g,_,h,x,v,w,N,k,j,F,A,C,L,O,V,I,H,Q,W,D,z,S,G,ne,st,fe,Pe;return d=p=f=g=_=h=x=v=w=0,m=y=1,n.svg=!!(e.getCTM&&iv(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(i[Le]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[Le]!=="none"?u[Le]:"")),i.scale=i.rotate=i.translate="none"),j=sh(e,n.svg),n.svg&&(n.uncache?(D=e.getBBox(),c=n.xOrigin-D.x+"px "+(n.yOrigin-D.y)+"px",W=""):W=!r&&e.getAttribute("data-svg-origin"),Np(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,j)),N=n.xOrigin||0,k=n.yOrigin||0,j!==Yo&&(L=j[0],O=j[1],V=j[2],I=j[3],d=H=j[4],p=Q=j[5],j.length===6?(m=Math.sqrt(L*L+O*O),y=Math.sqrt(I*I+V*V),g=L||O?bs(O,L)*Ui:0,x=V||I?bs(V,I)*Ui+g:0,x&&(y*=Math.abs(Math.cos(x*Ks))),n.svg&&(d-=N-(N*L+k*V),p-=k-(N*O+k*I))):(Pe=j[6],st=j[7],S=j[8],G=j[9],ne=j[10],fe=j[11],d=j[12],p=j[13],f=j[14],F=bs(Pe,ne),_=F*Ui,F&&(A=Math.cos(-F),C=Math.sin(-F),W=H*A+S*C,D=Q*A+G*C,z=Pe*A+ne*C,S=H*-C+S*A,G=Q*-C+G*A,ne=Pe*-C+ne*A,fe=st*-C+fe*A,H=W,Q=D,Pe=z),F=bs(-V,ne),h=F*Ui,F&&(A=Math.cos(-F),C=Math.sin(-F),W=L*A-S*C,D=O*A-G*C,z=V*A-ne*C,fe=I*C+fe*A,L=W,O=D,V=z),F=bs(O,L),g=F*Ui,F&&(A=Math.cos(F),C=Math.sin(F),W=L*A+O*C,D=H*A+Q*C,O=O*A-L*C,Q=Q*A-H*C,L=W,H=D),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,h=180-h),m=qe(Math.sqrt(L*L+O*O+V*V)),y=qe(Math.sqrt(Q*Q+Pe*Pe)),F=bs(H,Q),x=Math.abs(F)>2e-4?F*Ui:0,w=fe?1/(fe<0?-fe:fe):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!av(yr(e,Le)),W&&e.setAttribute("transform",W))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(m*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(y*=-1,x+=x<=0?180:-180)),r=r||n.uncache,n.x=d-((n.xPercent=d&&(!r&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=p-((n.yPercent=p&&(!r&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=qe(m),n.scaleY=qe(y),n.rotation=qe(g)+l,n.rotationX=qe(_)+l,n.rotationY=qe(h)+l,n.skewX=x+l,n.skewY=v+l,n.transformPerspective=w+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!r&&n.zOrigin||0)&&(i[ir]=qu(c)),n.xOffset=n.yOffset=0,n.force3D=_r.force3D,n.renderTransform=n.svg?Eb:rv?ov:Fb,n.uncache=0,n},qu=function(e){return(e=e.split(" "))[0]+" "+e[1]},sd=function(e,r,n){var i=Pt(r);return qe(parseFloat(r)+parseFloat(Si(e,"x",n+"px",i)))+i},Fb=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,ov(e,r)},zi="0deg",Ma="0px",Bi=") ",ov=function(e,r){var n=r||this,i=n.xPercent,s=n.yPercent,o=n.x,l=n.y,u=n.z,c=n.rotation,d=n.rotationY,p=n.rotationX,f=n.skewX,m=n.skewY,y=n.scaleX,g=n.scaleY,_=n.transformPerspective,h=n.force3D,x=n.target,v=n.zOrigin,w="",N=h==="auto"&&e&&e!==1||h===!0;if(v&&(p!==zi||d!==zi)){var k=parseFloat(d)*Ks,j=Math.sin(k),F=Math.cos(k),A;k=parseFloat(p)*Ks,A=Math.cos(k),o=sd(x,o,j*A*-v),l=sd(x,l,-Math.sin(k)*-v),u=sd(x,u,F*A*-v+v)}_!==Ma&&(w+="perspective("+_+Bi),(i||s)&&(w+="translate("+i+"%, "+s+"%) "),(N||o!==Ma||l!==Ma||u!==Ma)&&(w+=u!==Ma||N?"translate3d("+o+", "+l+", "+u+") ":"translate("+o+", "+l+Bi),c!==zi&&(w+="rotate("+c+Bi),d!==zi&&(w+="rotateY("+d+Bi),p!==zi&&(w+="rotateX("+p+Bi),(f!==zi||m!==zi)&&(w+="skew("+f+", "+m+Bi),(y!==1||g!==1)&&(w+="scale("+y+", "+g+Bi),x.style[Le]=w||"translate(0, 0)"},Eb=function(e,r){var n=r||this,i=n.xPercent,s=n.yPercent,o=n.x,l=n.y,u=n.rotation,c=n.skewX,d=n.skewY,p=n.scaleX,f=n.scaleY,m=n.target,y=n.xOrigin,g=n.yOrigin,_=n.xOffset,h=n.yOffset,x=n.forceCSS,v=parseFloat(o),w=parseFloat(l),N,k,j,F,A;u=parseFloat(u),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,u+=d),u||c?(u*=Ks,c*=Ks,N=Math.cos(u)*p,k=Math.sin(u)*p,j=Math.sin(u-c)*-f,F=Math.cos(u-c)*f,c&&(d*=Ks,A=Math.tan(c-d),A=Math.sqrt(1+A*A),j*=A,F*=A,d&&(A=Math.tan(d),A=Math.sqrt(1+A*A),N*=A,k*=A)),N=qe(N),k=qe(k),j=qe(j),F=qe(F)):(N=p,F=f,k=j=0),(v&&!~(o+"").indexOf("px")||w&&!~(l+"").indexOf("px"))&&(v=Si(m,"x",o,"px"),w=Si(m,"y",l,"px")),(y||g||_||h)&&(v=qe(v+y-(y*N+g*j)+_),w=qe(w+g-(y*k+g*F)+h)),(i||s)&&(A=m.getBBox(),v=qe(v+i/100*A.width),w=qe(w+s/100*A.height)),A="matrix("+N+","+k+","+j+","+F+","+v+","+w+")",m.setAttribute("transform",A),x&&(m.style[Le]=A)},Ab=function(e,r,n,i,s){var o=360,l=pt(s),u=parseFloat(s)*(l&&~s.indexOf("rad")?Ui:1),c=u-i,d=i+c+"deg",p,f;return l&&(p=s.split("_")[1],p==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),p==="cw"&&c<0?c=(c+o*Qm)%o-~~(c/o)*o:p==="ccw"&&c>0&&(c=(c-o*Qm)%o-~~(c/o)*o)),e._pt=f=new nr(e._pt,r,n,i,c,pb),f.e=d,f.u="deg",e._props.push(n),f},r0=function(e,r){for(var n in r)e[n]=r[n];return e},Tb=function(e,r,n){var i=r0({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,l,u,c,d,p,f,m,y;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Le]=r,l=Xo(n,1),ki(n,Le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Le],o[Le]=r,l=Xo(n,1),o[Le]=c);for(u in Wn)c=i[u],d=l[u],c!==d&&s.indexOf(u)<0&&(m=Pt(c),y=Pt(d),p=m!==y?Si(n,u,c,y):parseFloat(c),f=parseFloat(d),e._pt=new nr(e._pt,l,u,p,f-p,_p),e._pt.u=y||0,e._props.push(u));r0(l,i)};rr("padding,margin,Width,Radius",function(t,e){var r="Top",n="Right",i="Bottom",s="Left",o=(e<3?[r,n,i,s]:[r+s,r+n,i+n,i+s]).map(function(l){return e<2?t+l:"border"+l+t});Hu[e>1?"border"+t:t]=function(l,u,c,d,p){var f,m;if(arguments.length<4)return f=o.map(function(y){return An(l,y,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(d+"").split(" "),m={},o.forEach(function(y,g){return m[y]=f[g]=f[g]||f[(g-1)/2|0]}),l.init(u,m,p)}});var lv={name:"css",register:jp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,n,i,s){var o=this._props,l=e.style,u=n.vars.startAt,c,d,p,f,m,y,g,_,h,x,v,w,N,k,j,F,A;rh||jp(),this.styles=this.styles||tv(e),F=this.styles.props,this.tween=n;for(g in r)if(g!=="autoRound"&&(d=r[g],!(fr[g]&&Vg(g,r,n,i,e,s)))){if(m=typeof d,y=Hu[g],m==="function"&&(d=d.call(n,i,e,s),m=typeof d),m==="string"&&~d.indexOf("random(")&&(d=Vo(d)),y)y(this,e,g,d,n)&&(j=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),d+="",wi.lastIndex=0,wi.test(c)||(_=Pt(c),h=Pt(d),h?_!==h&&(c=Si(e,g,c,h)+h):_&&(d+=_)),this.add(l,"setProperty",c,d,i,s,0,0,g),o.push(g),F.push(g,0,l[g]);else if(m!=="undefined"){if(u&&g in u?(c=typeof u[g]=="function"?u[g].call(n,i,e,s):u[g],pt(c)&&~c.indexOf("random(")&&(c=Vo(c)),Pt(c+"")||c==="auto"||(c+=_r.units[g]||Pt(An(e,g))||""),(c+"").charAt(1)==="="&&(c=An(e,g))):c=An(e,g),f=parseFloat(c),x=m==="string"&&d.charAt(1)==="="&&d.substr(0,2),x&&(d=d.substr(2)),p=parseFloat(d),g in hn&&(g==="autoAlpha"&&(f===1&&An(e,"visibility")==="hidden"&&p&&(f=0),F.push("visibility",0,l.visibility),li(this,l,"visibility",f?"inherit":"hidden",p?"inherit":"hidden",!p)),g!=="scale"&&g!=="transform"&&(g=hn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Wn,v){if(this.styles.save(g),A=d,m==="string"&&d.substring(0,6)==="var(--"){if(d=yr(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=d,d=yr(e,"perspective"),C?e.style.perspective=C:ki(e,"perspective")}p=parseFloat(d)}if(w||(N=e._gsap,N.renderTransform&&!r.parseTransform||Xo(e,r.parseTransform),k=r.smoothOrigin!==!1&&N.smooth,w=this._pt=new nr(this._pt,l,Le,0,1,N.renderTransform,N,0,-1),w.dep=1),g==="scale")this._pt=new nr(this._pt,N,"scaleY",N.scaleY,(x?Qs(N.scaleY,x+p):p)-N.scaleY||0,_p),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){F.push(ir,0,l[ir]),d=Sb(d),N.svg?Np(e,d,0,k,0,this):(h=parseFloat(d.split(" ")[2])||0,h!==N.zOrigin&&li(this,N,"zOrigin",N.zOrigin,h),li(this,l,g,qu(c),qu(d)));continue}else if(g==="svgOrigin"){Np(e,d,1,k,0,this);continue}else if(g in sv){Ab(this,N,g,f,x?Qs(f,x+d):d);continue}else if(g==="smoothOrigin"){li(this,N,"smooth",N.smooth,d);continue}else if(g==="force3D"){N[g]=d;continue}else if(g==="transform"){Tb(this,d,e);continue}}else g in l||(g=ha(g)||g);if(v||(p||p===0)&&(f||f===0)&&!db.test(d)&&g in l)_=(c+"").substr((f+"").length),p||(p=0),h=Pt(d)||(g in _r.units?_r.units[g]:_),_!==h&&(f=Si(e,g,c,h)),this._pt=new nr(this._pt,v?N:l,g,f,(x?Qs(f,x+p):p)-f,!v&&(h==="px"||g==="zIndex")&&r.autoRound!==!1?mb:_p),this._pt.u=h||0,v&&A!==d?(this._pt.b=c,this._pt.e=A,this._pt.r=hb):_!==h&&h!=="%"&&(this._pt.b=c,this._pt.r=fb);else if(g in l)kb.call(this,e,g,c,x?x+d:d);else if(g in e)this.add(e,g,c||e[g],x?x+d:d,i,s);else if(g!=="parseTransform"){qf(g,d);continue}v||(g in l?F.push(g,0,l[g]):typeof e[g]=="function"?F.push(g,2,e[g]()):F.push(g,1,c||e[g])),o.push(g)}}j&&Gg(this)},render:function(e,r){if(r.tween._time||!nh())for(var n=r._pt;n;)n.r(e,n.d),n=n._next;else r.styles.revert()},get:An,aliases:hn,getSetter:function(e,r,n){var i=hn[r];return i&&i.indexOf(",")<0&&(r=i),r in Wn&&r!==ir&&(e._gsap.x||An(e,"x"))?n&&Xm===n?r==="scale"?yb:vb:(Xm=n||{})&&(r==="scale"?wb:_b):e.style&&!Wf(e.style[r])?xb:~r.indexOf("-")?gb:eh(e,r)},core:{_removeProperty:ki,_getMatrix:sh}};sr.utils.checkPrefix=ha;sr.core.getStyleSaver=tv;(function(t,e,r,n){var i=rr(t+","+e+","+r,function(s){Wn[s]=1});rr(e,function(s){_r.units[s]="deg",sv[s]=1}),hn[i[13]]=t+","+e,rr(n,function(s){var o=s.split(":");hn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");rr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){_r.units[t]="px"});sr.registerPlugin(lv);var E=sr.registerPlugin(lv)||sr;E.core.Tween;function Pb(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Db(t,e,r){return e&&Pb(t.prototype,e),t}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vt,su,xr,ui,ci,Js,uv,Wi,Zs,cv,Rn,Xr,dv,pv=function(){return vt||typeof window<"u"&&(vt=window.gsap)&&vt.registerPlugin&&vt},fv=1,Us=[],oe=[],vn=[],ho=Date.now,kp=function(e,r){return r},Rb=function(){var e=Zs.core,r=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,oe),i.push.apply(i,vn),oe=n,vn=i,kp=function(o,l){return r[o](l)}},_i=function(e,r){return~vn.indexOf(e)&&vn[vn.indexOf(e)+1][r]},mo=function(e){return!!~cv.indexOf(e)},Lt=function(e,r,n,i,s){return e.addEventListener(r,n,{passive:i!==!1,capture:!!s})},Ot=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},Cl="scrollLeft",Fl="scrollTop",Sp=function(){return Rn&&Rn.isPressed||oe.cache++},Yu=function(e,r){var n=function i(s){if(s||s===0){fv&&(xr.history.scrollRestoration="manual");var o=Rn&&Rn.isPressed;s=i.v=Math.round(s)||(Rn&&Rn.iOS?1:0),e(s),i.cacheID=oe.cache,o&&kp("ss",s)}else(r||oe.cache!==i.cacheID||kp("ref"))&&(i.cacheID=oe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Wt={s:Cl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yu(function(t){return arguments.length?xr.scrollTo(t,nt.sc()):xr.pageXOffset||ui[Cl]||ci[Cl]||Js[Cl]||0})},nt={s:Fl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Wt,sc:Yu(function(t){return arguments.length?xr.scrollTo(Wt.sc(),t):xr.pageYOffset||ui[Fl]||ci[Fl]||Js[Fl]||0})},Xt=function(e,r){return(r&&r._ctx&&r._ctx.selector||vt.utils.toArray)(e)[0]||(typeof e=="string"&&vt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Mb=function(e,r){for(var n=r.length;n--;)if(r[n]===e||r[n].contains(e))return!0;return!1},Ci=function(e,r){var n=r.s,i=r.sc;mo(e)&&(e=ui.scrollingElement||ci);var s=oe.indexOf(e),o=i===nt.sc?1:2;!~s&&(s=oe.push(e)-1),oe[s+o]||Lt(e,"scroll",Sp);var l=oe[s+o],u=l||(oe[s+o]=Yu(_i(e,n),!0)||(mo(e)?i:Yu(function(c){return arguments.length?e[n]=c:e[n]})));return u.target=e,l||(u.smooth=vt.getProperty(e,"scrollBehavior")==="smooth"),u},Cp=function(e,r,n){var i=e,s=e,o=ho(),l=o,u=r||50,c=Math.max(500,u*3),d=function(y,g){var _=ho();g||_-o>u?(s=i,i=y,l=o,o=_):n?i+=y:i=s+(y-s)/(_-l)*(o-l)},p=function(){s=i=n?0:i,l=o=0},f=function(y){var g=l,_=s,h=ho();return(y||y===0)&&y!==i&&d(y),o===l||h-l>c?0:(i+(n?_:-_))/((n?h:o)-g)*1e3};return{update:d,reset:p,getVelocity:f}},Oa=function(e,r){return r&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},n0=function(e){var r=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(n)?r:n},hv=function(){Zs=vt.core.globals().ScrollTrigger,Zs&&Zs.core&&Rb()},mv=function(e){return vt=e||pv(),!su&&vt&&typeof document<"u"&&document.body&&(xr=window,ui=document,ci=ui.documentElement,Js=ui.body,cv=[xr,ui,ci,Js],vt.utils.clamp,dv=vt.core.context||function(){},Wi="onpointerenter"in Js?"pointer":"mouse",uv=Xe.isTouch=xr.matchMedia&&xr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Xr=Xe.eventTypes=("ontouchstart"in ci?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ci?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return fv=0},500),su=1),Zs||hv(),su};Wt.op=nt;oe.cache=0;var Xe=function(){function t(r){this.init(r)}var e=t.prototype;return e.init=function(n){su||mv(vt)||console.warn("Please gsap.registerPlugin(Observer)"),Zs||hv();var i=n.tolerance,s=n.dragMinimum,o=n.type,l=n.target,u=n.lineHeight,c=n.debounce,d=n.preventDefault,p=n.onStop,f=n.onStopDelay,m=n.ignore,y=n.wheelSpeed,g=n.event,_=n.onDragStart,h=n.onDragEnd,x=n.onDrag,v=n.onPress,w=n.onRelease,N=n.onRight,k=n.onLeft,j=n.onUp,F=n.onDown,A=n.onChangeX,C=n.onChangeY,L=n.onChange,O=n.onToggleX,V=n.onToggleY,I=n.onHover,H=n.onHoverEnd,Q=n.onMove,W=n.ignoreCheck,D=n.isNormalizer,z=n.onGestureStart,S=n.onGestureEnd,G=n.onWheel,ne=n.onEnable,st=n.onDisable,fe=n.onClick,Pe=n.scrollSpeed,je=n.capture,ye=n.allowClicks,P=n.lockAxis,M=n.onLockAxis;this.target=l=Xt(l)||ci,this.vars=n,m&&(m=vt.utils.toArray(m)),i=i||1e-9,s=s||0,y=y||1,Pe=Pe||1,o=o||"wheel,touch,pointer",c=c!==!1,u||(u=parseFloat(xr.getComputedStyle(Js).lineHeight)||22);var q,J,ie,Z,me,bt,ar,T=this,or=0,wn=0,Hn=n.passive||!d&&n.passive!==!1,Ie=Ci(l,Wt),_n=Ci(l,nt),qn=Ie(),Di=_n(),at=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Xr[0]==="pointerdown",Yn=mo(l),Ve=l.ownerDocument||ui,Ur=[0,0,0],Fr=[0,0,0],bn=0,ba=function(){return bn=ho()},Qe=function(K,he){return(T.event=K)&&m&&Mb(K.target,m)||he&&at&&K.pointerType!=="touch"||W&&W(K,he)},sl=function(){T._vx.reset(),T._vy.reset(),J.pause(),p&&p(T)},jn=function(){var K=T.deltaX=n0(Ur),he=T.deltaY=n0(Fr),B=Math.abs(K)>=i,ee=Math.abs(he)>=i;L&&(B||ee)&&L(T,K,he,Ur,Fr),B&&(N&&T.deltaX>0&&N(T),k&&T.deltaX<0&&k(T),A&&A(T),O&&T.deltaX<0!=or<0&&O(T),or=T.deltaX,Ur[0]=Ur[1]=Ur[2]=0),ee&&(F&&T.deltaY>0&&F(T),j&&T.deltaY<0&&j(T),C&&C(T),V&&T.deltaY<0!=wn<0&&V(T),wn=T.deltaY,Fr[0]=Fr[1]=Fr[2]=0),(Z||ie)&&(Q&&Q(T),ie&&(_&&ie===1&&_(T),x&&x(T),ie=0),Z=!1),bt&&!(bt=!1)&&M&&M(T),me&&(G(T),me=!1),q=0},vs=function(K,he,B){Ur[B]+=K,Fr[B]+=he,T._vx.update(K),T._vy.update(he),c?q||(q=requestAnimationFrame(jn)):jn()},ys=function(K,he){P&&!ar&&(T.axis=ar=Math.abs(K)>Math.abs(he)?"x":"y",bt=!0),ar!=="y"&&(Ur[2]+=K,T._vx.update(K,!0)),ar!=="x"&&(Fr[2]+=he,T._vy.update(he,!0)),c?q||(q=requestAnimationFrame(jn)):jn()},Xn=function(K){if(!Qe(K,1)){K=Oa(K,d);var he=K.clientX,B=K.clientY,ee=he-T.x,X=B-T.y,te=T.isDragging;T.x=he,T.y=B,(te||(ee||X)&&(Math.abs(T.startX-he)>=s||Math.abs(T.startY-B)>=s))&&(ie||(ie=te?2:1),te||(T.isDragging=!0),ys(ee,X))}},Ri=T.onPress=function(re){Qe(re,1)||re&&re.button||(T.axis=ar=null,J.pause(),T.isPressed=!0,re=Oa(re),or=wn=0,T.startX=T.x=re.clientX,T.startY=T.y=re.clientY,T._vx.reset(),T._vy.reset(),Lt(D?l:Ve,Xr[1],Xn,Hn,!0),T.deltaX=T.deltaY=0,v&&v(T))},le=T.onRelease=function(re){if(!Qe(re,1)){Ot(D?l:Ve,Xr[1],Xn,!0);var K=!isNaN(T.y-T.startY),he=T.isDragging,B=he&&(Math.abs(T.x-T.startX)>3||Math.abs(T.y-T.startY)>3),ee=Oa(re);!B&&K&&(T._vx.reset(),T._vy.reset(),d&&ye&&vt.delayedCall(.08,function(){if(ho()-bn>300&&!re.defaultPrevented){if(re.target.click)re.target.click();else if(Ve.createEvent){var X=Ve.createEvent("MouseEvents");X.initMouseEvent("click",!0,!0,xr,1,ee.screenX,ee.screenY,ee.clientX,ee.clientY,!1,!1,!1,!1,0,null),re.target.dispatchEvent(X)}}})),T.isDragging=T.isGesturing=T.isPressed=!1,p&&he&&!D&&J.restart(!0),ie&&jn(),h&&he&&h(T),w&&w(T,B)}},Mi=function(K){return K.touches&&K.touches.length>1&&(T.isGesturing=!0)&&z(K,T.isDragging)},Wr=function(){return(T.isGesturing=!1)||S(T)},Vr=function(K){if(!Qe(K)){var he=Ie(),B=_n();vs((he-qn)*Pe,(B-Di)*Pe,1),qn=he,Di=B,p&&J.restart(!0)}},Hr=function(K){if(!Qe(K)){K=Oa(K,d),G&&(me=!0);var he=(K.deltaMode===1?u:K.deltaMode===2?xr.innerHeight:1)*y;vs(K.deltaX*he,K.deltaY*he,0),p&&!D&&J.restart(!0)}},Oi=function(K){if(!Qe(K)){var he=K.clientX,B=K.clientY,ee=he-T.x,X=B-T.y;T.x=he,T.y=B,Z=!0,p&&J.restart(!0),(ee||X)&&ys(ee,X)}},ws=function(K){T.event=K,I(T)},Nn=function(K){T.event=K,H(T)},ja=function(K){return Qe(K)||Oa(K,d)&&fe(T)};J=T._dc=vt.delayedCall(f||.25,sl).pause(),T.deltaX=T.deltaY=0,T._vx=Cp(0,50,!0),T._vy=Cp(0,50,!0),T.scrollX=Ie,T.scrollY=_n,T.isDragging=T.isGesturing=T.isPressed=!1,dv(this),T.enable=function(re){return T.isEnabled||(Lt(Yn?Ve:l,"scroll",Sp),o.indexOf("scroll")>=0&&Lt(Yn?Ve:l,"scroll",Vr,Hn,je),o.indexOf("wheel")>=0&&Lt(l,"wheel",Hr,Hn,je),(o.indexOf("touch")>=0&&uv||o.indexOf("pointer")>=0)&&(Lt(l,Xr[0],Ri,Hn,je),Lt(Ve,Xr[2],le),Lt(Ve,Xr[3],le),ye&&Lt(l,"click",ba,!0,!0),fe&&Lt(l,"click",ja),z&&Lt(Ve,"gesturestart",Mi),S&&Lt(Ve,"gestureend",Wr),I&&Lt(l,Wi+"enter",ws),H&&Lt(l,Wi+"leave",Nn),Q&&Lt(l,Wi+"move",Oi)),T.isEnabled=!0,T.isDragging=T.isGesturing=T.isPressed=Z=ie=!1,T._vx.reset(),T._vy.reset(),qn=Ie(),Di=_n(),re&&re.type&&Ri(re),ne&&ne(T)),T},T.disable=function(){T.isEnabled&&(Us.filter(function(re){return re!==T&&mo(re.target)}).length||Ot(Yn?Ve:l,"scroll",Sp),T.isPressed&&(T._vx.reset(),T._vy.reset(),Ot(D?l:Ve,Xr[1],Xn,!0)),Ot(Yn?Ve:l,"scroll",Vr,je),Ot(l,"wheel",Hr,je),Ot(l,Xr[0],Ri,je),Ot(Ve,Xr[2],le),Ot(Ve,Xr[3],le),Ot(l,"click",ba,!0),Ot(l,"click",ja),Ot(Ve,"gesturestart",Mi),Ot(Ve,"gestureend",Wr),Ot(l,Wi+"enter",ws),Ot(l,Wi+"leave",Nn),Ot(l,Wi+"move",Oi),T.isEnabled=T.isPressed=T.isDragging=!1,st&&st(T))},T.kill=T.revert=function(){T.disable();var re=Us.indexOf(T);re>=0&&Us.splice(re,1),Rn===T&&(Rn=0)},Us.push(T),D&&mo(l)&&(Rn=T),T.enable(g)},Db(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();Xe.version="3.15.0";Xe.create=function(t){return new Xe(t)};Xe.register=mv;Xe.getAll=function(){return Us.slice()};Xe.getById=function(t){return Us.filter(function(e){return e.vars.id===t})[0]};pv()&&vt.registerPlugin(Xe);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var U,Ss,ae,ge,hr,xe,ah,Xu,Qo,xo,Xa,El,Ft,wc,Fp,It,i0,s0,Cs,xv,ad,gv,zt,Ep,vv,yv,Zn,Ap,oh,ea,lh,go,Tp,od,Al=1,At=Date.now,ld=At(),zr=0,Qa=0,a0=function(e,r,n){var i=pr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+r+"Clamp"]=i,i?e.substr(6,e.length-7):e},o0=function(e,r){return r&&(!pr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Ob=function t(){return Qa&&requestAnimationFrame(t)},l0=function(){return wc=1},u0=function(){return wc=0},dn=function(e){return e},Ga=function(e){return Math.round(e*1e5)/1e5||0},wv=function(){return typeof window<"u"},_v=function(){return U||wv()&&(U=window.gsap)&&U.registerPlugin&&U},ps=function(e){return!!~ah.indexOf(e)},bv=function(e){return(e==="Height"?lh:ae["inner"+e])||hr["client"+e]||xe["client"+e]},jv=function(e){return _i(e,"getBoundingClientRect")||(ps(e)?function(){return cu.width=ae.innerWidth,cu.height=lh,cu}:function(){return Tn(e)})},Lb=function(e,r,n){var i=n.d,s=n.d2,o=n.a;return(o=_i(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(r?bv(s):e["client"+s])||0}},zb=function(e,r){return!r||~vn.indexOf(e)?jv(e):function(){return cu}},mn=function(e,r){var n=r.s,i=r.d2,s=r.d,o=r.a;return Math.max(0,(n="scroll"+i)&&(o=_i(e,n))?o()-jv(e)()[s]:ps(e)?(hr[n]||xe[n])-bv(i):e[n]-e["offset"+i])},Tl=function(e,r){for(var n=0;n<Cs.length;n+=3)(!r||~r.indexOf(Cs[n+1]))&&e(Cs[n],Cs[n+1],Cs[n+2])},pr=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},Ka=function(e){return typeof e=="number"},Vi=function(e){return typeof e=="object"},La=function(e,r,n){return e&&e.progress(r?0:1)&&n&&e.pause()},js=function(e,r,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return r(e,n)}):r(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Ns=Math.abs,Nv="left",kv="top",uh="right",ch="bottom",ns="width",is="height",vo="Right",yo="Left",wo="Top",_o="Bottom",Ge="padding",Pr="margin",ma="Width",dh="Height",tt="px",Dr=function(e){return ae.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Bb=function(e){var r=Dr(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},c0=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},Tn=function(e,r){var n=r&&Dr(e)[Fp]!=="matrix(1, 0, 0, 1, 0, 0)"&&U.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Qu=function(e,r){var n=r.d2;return e["offset"+n]||e["client"+n]||0},Sv=function(e){var r=[],n=e.labels,i=e.duration(),s;for(s in n)r.push(n[s]/i);return r},Ib=function(e){return function(r){return U.utils.snap(Sv(e),r)}},ph=function(e){var r=U.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var l;if(!s)return r(i);if(s>0){for(i-=o,l=0;l<n.length;l++)if(n[l]>=i)return n[l];return n[l-1]}else for(l=n.length,i+=o;l--;)if(n[l]<=i)return n[l];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var l=r(i);return!s||Math.abs(l-i)<o||l-i<0==s<0?l:r(s<0?i-e:i+e)}},$b=function(e){return function(r,n){return ph(Sv(e))(r,n.direction)}},Pl=function(e,r,n,i){return n.split(",").forEach(function(s){return e(r,s,i)})},ut=function(e,r,n,i,s){return e.addEventListener(r,n,{passive:!i,capture:!!s})},lt=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},Dl=function(e,r,n){n=n&&n.wheelHandler,n&&(e(r,"wheel",n),e(r,"touchmove",n))},d0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Rl={toggleActions:"play",anticipatePin:0},Gu={top:0,left:0,center:.5,bottom:1,right:1},au=function(e,r){if(pr(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=r/100),e=e.substr(0,n-1)),e=i+(e in Gu?Gu[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},Ml=function(e,r,n,i,s,o,l,u){var c=s.startColor,d=s.endColor,p=s.fontSize,f=s.indent,m=s.fontWeight,y=ge.createElement("div"),g=ps(n)||_i(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,h=g?xe:n.tagName==="IFRAME"?n.contentDocument.body:n,x=e.indexOf("start")!==-1,v=x?c:d,w="border-color:"+v+";font-size:"+p+";color:"+v+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((_||u)&&g?"fixed;":"absolute;"),(_||u||!g)&&(w+=(i===nt?uh:ch)+":"+(o+parseFloat(f))+"px;"),l&&(w+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),y._isStart=x,y.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),y.style.cssText=w,y.innerText=r||r===0?e+"-"+r:e,h.children[0]?h.insertBefore(y,h.children[0]):h.appendChild(y),y._offset=y["offset"+i.op.d2],ou(y,0,i,x),y},ou=function(e,r,n,i){var s={display:"block"},o=n[i?"os2":"p2"],l=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ma]=1,s["border"+l+ma]=0,s[n.p]=r+"px",U.set(e,s)},se=[],Pp={},Go,p0=function(){return At()-zr>34&&(Go||(Go=requestAnimationFrame(On)))},ks=function(){(!zt||!zt.isPressed||zt.startX>xe.clientWidth)&&(oe.cache++,zt?Go||(Go=requestAnimationFrame(On)):On(),zr||hs("scrollStart"),zr=At())},ud=function(){yv=ae.innerWidth,vv=ae.innerHeight},Ja=function(e){oe.cache++,(e===!0||!Ft&&!gv&&!ge.fullscreenElement&&!ge.webkitFullscreenElement&&(!Ep||yv!==ae.innerWidth||Math.abs(ae.innerHeight-vv)>ae.innerHeight*.25))&&Xu.restart(!0)},fs={},Ub=[],Cv=function t(){return lt(Y,"scrollEnd",t)||Qi(!0)},hs=function(e){return fs[e]&&fs[e].map(function(r){return r()})||Ub},cr=[],Fv=function(e){for(var r=0;r<cr.length;r+=5)(!e||cr[r+4]&&cr[r+4].query===e)&&(cr[r].style.cssText=cr[r+1],cr[r].getBBox&&cr[r].setAttribute("transform",cr[r+2]||""),cr[r+3].uncache=1)},Ev=function(){return oe.forEach(function(e){return Dt(e)&&++e.cacheID&&(e.rec=e())})},fh=function(e,r){var n;for(It=0;It<se.length;It++)n=se[It],n&&(!r||n._ctx===r)&&(e?n.kill(1):n.revert(!0,!0));go=!0,r&&Fv(r),r||hs("revert")},Av=function(e,r){oe.cache++,(r||!$t)&&oe.forEach(function(n){return Dt(n)&&n.cacheID++&&(n.rec=0)}),pr(e)&&(ae.history.scrollRestoration=oh=e)},$t,ss=0,f0,Wb=function(){if(f0!==ss){var e=f0=ss;requestAnimationFrame(function(){return e===ss&&Qi(!0)})}},Tv=function(){xe.appendChild(ea),lh=!zt&&ea.offsetHeight||ae.innerHeight,xe.removeChild(ea)},h0=function(e){return Qo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},Qi=function(e,r){if(hr=ge.documentElement,xe=ge.body,ah=[ae,ge,hr,xe],zr&&!e&&!go){ut(Y,"scrollEnd",Cv);return}Tv(),$t=Y.isRefreshing=!0,go||Ev();var n=hs("refreshInit");xv&&Y.sort(),r||fh(),oe.forEach(function(i){Dt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),se.slice(0).forEach(function(i){return i.refresh()}),go=!1,se.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Tp=1,h0(!0),se.forEach(function(i){var s=mn(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,l=i._startClamp&&i.start>=s;(o||l)&&i.setPositions(l?s-1:i.start,o?Math.max(l?s:i.start+1,s):i.end,!0)}),h0(!1),Tp=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),oe.forEach(function(i){Dt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Av(oh,1),Xu.pause(),ss++,$t=2,On(2),se.forEach(function(i){return Dt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),$t=Y.isRefreshing=!1,hs("refresh")},Dp=0,lu=1,bo,On=function(e){if(e===2||!$t&&!go){Y.isUpdating=!0,bo&&bo.update(0);var r=se.length,n=At(),i=n-ld>=50,s=r&&se[0].scroll();if(lu=Dp>s?-1:1,$t||(Dp=s),i&&(zr&&!wc&&n-zr>200&&(zr=0,hs("scrollEnd")),Xa=ld,ld=n),lu<0){for(It=r;It-- >0;)se[It]&&se[It].update(0,i);lu=1}else for(It=0;It<r;It++)se[It]&&se[It].update(0,i);Y.isUpdating=!1}Go=0},Rp=[Nv,kv,ch,uh,Pr+_o,Pr+vo,Pr+wo,Pr+yo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],uu=Rp.concat([ns,is,"boxSizing","max"+ma,"max"+dh,"position",Pr,Ge,Ge+wo,Ge+vo,Ge+_o,Ge+yo]),Vb=function(e,r,n){ta(n);var i=e._gsap;if(i.spacerIsNative)ta(i.spacerState);else if(e._gsap.swappedIn){var s=r.parentNode;s&&(s.insertBefore(e,r),s.removeChild(r))}e._gsap.swappedIn=!1},cd=function(e,r,n,i){if(!e._gsap.swappedIn){for(var s=Rp.length,o=r.style,l=e.style,u;s--;)u=Rp[s],o[u]=n[u];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),l[ch]=l[uh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ns]=Qu(e,Wt)+tt,o[is]=Qu(e,nt)+tt,o[Ge]=l[Pr]=l[kv]=l[Nv]="0",ta(i),l[ns]=l["max"+ma]=n[ns],l[is]=l["max"+dh]=n[is],l[Ge]=n[Ge],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},Hb=/([A-Z])/g,ta=function(e){if(e){var r=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||U.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?r[s]=o:r[s]&&r.removeProperty(s.replace(Hb,"-$1").toLowerCase())}},Ol=function(e){for(var r=uu.length,n=e.style,i=[],s=0;s<r;s++)i.push(uu[s],n[uu[s]]);return i.t=e,i},qb=function(e,r,n){for(var i=[],s=e.length,o=n?8:0,l;o<s;o+=2)l=e[o],i.push(l,l in r?r[l]:e[o+1]);return i.t=e.t,i},cu={left:0,top:0},m0=function(e,r,n,i,s,o,l,u,c,d,p,f,m,y){Dt(e)&&(e=e(u)),pr(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?au("0"+e.substr(3),n):0));var g=m?m.time():0,_,h,x;if(m&&m.seek(0),isNaN(e)||(e=+e),Ka(e))m&&(e=U.utils.mapRange(m.scrollTrigger.start,m.scrollTrigger.end,0,f,e)),l&&ou(l,n,i,!0);else{Dt(r)&&(r=r(u));var v=(e||"0").split(" "),w,N,k,j;x=Xt(r,u)||xe,w=Tn(x)||{},(!w||!w.left&&!w.top)&&Dr(x).display==="none"&&(j=x.style.display,x.style.display="block",w=Tn(x),j?x.style.display=j:x.style.removeProperty("display")),N=au(v[0],w[i.d]),k=au(v[1]||"0",n),e=w[i.p]-c[i.p]-d+N+s-k,l&&ou(l,k,i,n-k<20||l._isStart&&k>20),n-=n-k}if(y&&(u[y]=e||-.001,e<0&&(e=0)),o){var F=e+n,A=o._isStart;_="scroll"+i.d2,ou(o,F,i,A&&F>20||!A&&(p?Math.max(xe[_],hr[_]):o.parentNode[_])<=F+1),p&&(c=Tn(l),p&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+tt))}return m&&x&&(_=Tn(x),m.seek(f),h=Tn(x),m._caScrollDist=_[i.p]-h[i.p],e=e/m._caScrollDist*f),m&&m.seek(g),m?e:Math.round(e)},Yb=/(webkit|moz|length|cssText|inset)/i,x0=function(e,r,n,i){if(e.parentNode!==r){var s=e.style,o,l;if(r===xe){e._stOrig=s.cssText,l=Dr(e);for(o in l)!+o&&!Yb.test(o)&&l[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=l[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;U.core.getCache(e).uncache=1,r.appendChild(e)}},Pv=function(e,r,n){var i=r,s=i;return function(o){var l=Math.round(e());return l!==i&&l!==s&&Math.abs(l-i)>3&&Math.abs(l-s)>3&&(o=l,n&&n()),s=i,i=Math.round(o),i}},Ll=function(e,r,n){var i={};i[r.p]="+="+n,U.set(e,i)},g0=function(e,r){var n=Ci(e,r),i="_scroll"+r.p2,s=function o(l,u,c,d,p){var f=o.tween,m=u.onComplete,y={};c=c||n();var g=Pv(n,c,function(){f.kill(),o.tween=0});return p=d&&p||0,d=d||l-c,f&&f.kill(),u[i]=l,u.inherit=!1,u.modifiers=y,y[i]=function(){return g(c+d*f.ratio+p*f.ratio*f.ratio)},u.onUpdate=function(){oe.cache++,o.tween&&On()},u.onComplete=function(){o.tween=0,m&&m.call(f)},f=o.tween=U.to(e,u),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ut(e,"wheel",n.wheelHandler),Y.isTouch&&ut(e,"touchmove",n.wheelHandler),s},Y=function(){function t(r,n){Ss||t.register(U)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ap(this),this.init(r,n)}var e=t.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Qa){this.update=this.refresh=this.kill=dn;return}n=c0(pr(n)||Ka(n)||n.nodeType?{trigger:n}:n,Rl);var s=n,o=s.onUpdate,l=s.toggleClass,u=s.id,c=s.onToggle,d=s.onRefresh,p=s.scrub,f=s.trigger,m=s.pin,y=s.pinSpacing,g=s.invalidateOnRefresh,_=s.anticipatePin,h=s.onScrubComplete,x=s.onSnapComplete,v=s.once,w=s.snap,N=s.pinReparent,k=s.pinSpacer,j=s.containerAnimation,F=s.fastScrollEnd,A=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Wt:nt,L=!p&&p!==0,O=Xt(n.scroller||ae),V=U.core.getCache(O),I=ps(O),H=("pinType"in n?n.pinType:_i(O,"pinType")||I&&"fixed")==="fixed",Q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=L&&n.toggleActions.split(" "),D="markers"in n?n.markers:Rl.markers,z=I?0:parseFloat(Dr(O)["border"+C.p2+ma])||0,S=this,G=n.onRefreshInit&&function(){return n.onRefreshInit(S)},ne=Lb(O,I,C),st=zb(O,I),fe=0,Pe=0,je=0,ye=Ci(O,C),P,M,q,J,ie,Z,me,bt,ar,T,or,wn,Hn,Ie,_n,qn,Di,at,Yn,Ve,Ur,Fr,bn,ba,Qe,sl,jn,vs,ys,Xn,Ri,le,Mi,Wr,Vr,Hr,Oi,ws,Nn;if(S._startClamp=S._endClamp=!1,S._dir=C,_*=45,S.scroller=O,S.scroll=j?j.time.bind(j):ye,J=ye(),S.vars=n,i=i||n.animation,"refreshPriority"in n&&(xv=1,n.refreshPriority===-9999&&(bo=S)),V.tweenScroll=V.tweenScroll||{top:g0(O,nt),left:g0(O,Wt)},S.tweenTo=P=V.tweenScroll[C.p],S.scrubDuration=function(B){Mi=Ka(B)&&B,Mi?le?le.duration(B):le=U.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Mi,paused:!0,onComplete:function(){return h&&h(S)}}):(le&&le.progress(1).kill(),le=0)},i&&(i.vars.lazy=!1,i._initted&&!S.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),S.animation=i.pause(),i.scrollTrigger=S,S.scrubDuration(p),Xn=0,u||(u=i.vars.id)),w&&((!Vi(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in xe.style&&U.set(I?[xe,hr]:O,{scrollBehavior:"auto"}),oe.forEach(function(B){return Dt(B)&&B.target===(I?ge.scrollingElement||hr:O)&&(B.smooth=!1)}),q=Dt(w.snapTo)?w.snapTo:w.snapTo==="labels"?Ib(i):w.snapTo==="labelsDirectional"?$b(i):w.directional!==!1?function(B,ee){return ph(w.snapTo)(B,At()-Pe<500?0:ee.direction)}:U.utils.snap(w.snapTo),Wr=w.duration||{min:.1,max:2},Wr=Vi(Wr)?xo(Wr.min,Wr.max):xo(Wr,Wr),Vr=U.delayedCall(w.delay||Mi/2||.1,function(){var B=ye(),ee=At()-Pe<500,X=P.tween;if((ee||Math.abs(S.getVelocity())<10)&&!X&&!wc&&fe!==B){var te=(B-Z)/Ie,ot=i&&!L?i.totalProgress():te,ce=ee?0:(ot-Ri)/(At()-Xa)*1e3||0,He=U.utils.clamp(-te,1-te,Ns(ce/2)*ce/.185),jt=te+(w.inertia===!1?0:He),$e,Fe,we=w,qr=we.onStart,De=we.onInterrupt,lr=we.onComplete;if($e=q(jt,S),Ka($e)||($e=jt),Fe=Math.max(0,Math.round(Z+$e*Ie)),B<=me&&B>=Z&&Fe!==B){if(X&&!X._initted&&X.data<=Ns(Fe-B))return;w.inertia===!1&&(He=$e-te),P(Fe,{duration:Wr(Ns(Math.max(Ns(jt-ot),Ns($e-ot))*.185/ce/.05||0)),ease:w.ease||"power3",data:Ns(Fe-B),onInterrupt:function(){return Vr.restart(!0)&&De&&js(S,De)},onComplete:function(){S.update(),fe=ye(),i&&!L&&(le?le.resetTo("totalProgress",$e,i._tTime/i._tDur):i.progress($e)),Xn=Ri=i&&!L?i.totalProgress():S.progress,x&&x(S),lr&&js(S,lr)}},B,He*Ie,Fe-B-He*Ie),qr&&js(S,qr,P.tween)}}else S.isActive&&fe!==B&&Vr.restart(!0)}).pause()),u&&(Pp[u]=S),f=S.trigger=Xt(f||m!==!0&&m),Nn=f&&f._gsap&&f._gsap.stRevert,Nn&&(Nn=Nn(S)),m=m===!0?f:Xt(m),pr(l)&&(l={targets:f,className:l}),m&&(y===!1||y===Pr||(y=!y&&m.parentNode&&m.parentNode.style&&Dr(m.parentNode).display==="flex"?!1:Ge),S.pin=m,M=U.core.getCache(m),M.spacer?_n=M.pinState:(k&&(k=Xt(k),k&&!k.nodeType&&(k=k.current||k.nativeElement),M.spacerIsNative=!!k,k&&(M.spacerState=Ol(k))),M.spacer=at=k||ge.createElement("div"),at.classList.add("pin-spacer"),u&&at.classList.add("pin-spacer-"+u),M.pinState=_n=Ol(m)),n.force3D!==!1&&U.set(m,{force3D:!0}),S.spacer=at=M.spacer,ys=Dr(m),ba=ys[y+C.os2],Ve=U.getProperty(m),Ur=U.quickSetter(m,C.a,tt),cd(m,at,ys),Di=Ol(m)),D){wn=Vi(D)?c0(D,d0):d0,T=Ml("scroller-start",u,O,C,wn,0),or=Ml("scroller-end",u,O,C,wn,0,T),Yn=T["offset"+C.op.d2];var ja=Xt(_i(O,"content")||O);bt=this.markerStart=Ml("start",u,ja,C,wn,Yn,0,j),ar=this.markerEnd=Ml("end",u,ja,C,wn,Yn,0,j),j&&(ws=U.quickSetter([bt,ar],C.a,tt)),!H&&!(vn.length&&_i(O,"fixedMarkers")===!0)&&(Bb(I?xe:O),U.set([T,or],{force3D:!0}),sl=U.quickSetter(T,C.a,tt),vs=U.quickSetter(or,C.a,tt))}if(j){var re=j.vars.onUpdate,K=j.vars.onUpdateParams;j.eventCallback("onUpdate",function(){S.update(0,0,1),re&&re.apply(j,K||[])})}if(S.previous=function(){return se[se.indexOf(S)-1]},S.next=function(){return se[se.indexOf(S)+1]},S.revert=function(B,ee){if(!ee)return S.kill(!0);var X=B!==!1||!S.enabled,te=Ft;X!==S.isReverted&&(X&&(Hr=Math.max(ye(),S.scroll.rec||0),je=S.progress,Oi=i&&i.progress()),bt&&[bt,ar,T,or].forEach(function(ot){return ot.style.display=X?"none":"block"}),X&&(Ft=S,S.update(X)),m&&(!N||!S.isActive)&&(X?Vb(m,at,_n):cd(m,at,Dr(m),Qe)),X||S.update(X),Ft=te,S.isReverted=X)},S.refresh=function(B,ee,X,te){if(!((Ft||!S.enabled)&&!ee)){if(m&&B&&zr){ut(t,"scrollEnd",Cv);return}!$t&&G&&G(S),Ft=S,P.tween&&!X&&(P.tween.kill(),P.tween=0),le&&le.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Qn){return Qn.vars.immediateRender&&Qn.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),S.isReverted||S.revert(!0,!0),S._subPinOffset=!1;var ot=ne(),ce=st(),He=j?j.duration():mn(O,C),jt=Ie<=.01||!Ie,$e=0,Fe=te||0,we=Vi(X)?X.end:n.end,qr=n.endTrigger||f,De=Vi(X)?X.start:n.start||(n.start===0||!f?0:m?"0 0":"0 100%"),lr=S.pinnedContainer=n.pinnedContainer&&Xt(n.pinnedContainer,S),sn=f&&Math.max(0,se.indexOf(S))||0,ht=sn,mt,Nt,Li,al,kt,et,an,_c,xh,Na,on,ka,ol;for(D&&Vi(X)&&(ka=U.getProperty(T,C.p),ol=U.getProperty(or,C.p));ht-- >0;)et=se[ht],et.end||et.refresh(0,1)||(Ft=S),an=et.pin,an&&(an===f||an===m||an===lr)&&!et.isReverted&&(Na||(Na=[]),Na.unshift(et),et.revert(!0,!0)),et!==se[ht]&&(sn--,ht--);for(Dt(De)&&(De=De(S)),De=a0(De,"start",S),Z=m0(De,f,ot,C,ye(),bt,T,S,ce,z,H,He,j,S._startClamp&&"_startClamp")||(m?-.001:0),Dt(we)&&(we=we(S)),pr(we)&&!we.indexOf("+=")&&(~we.indexOf(" ")?we=(pr(De)?De.split(" ")[0]:"")+we:($e=au(we.substr(2),ot),we=pr(De)?De:(j?U.utils.mapRange(0,j.duration(),j.scrollTrigger.start,j.scrollTrigger.end,Z):Z)+$e,qr=f)),we=a0(we,"end",S),me=Math.max(Z,m0(we||(qr?"100% 0":He),qr,ot,C,ye()+$e,ar,or,S,ce,z,H,He,j,S._endClamp&&"_endClamp"))||-.001,$e=0,ht=sn;ht--;)et=se[ht]||{},an=et.pin,an&&et.start-et._pinPush<=Z&&!j&&et.end>0&&(mt=et.end-(S._startClamp?Math.max(0,et.start):et.start),(an===f&&et.start-et._pinPush<Z||an===lr)&&isNaN(De)&&($e+=mt*(1-et.progress)),an===m&&(Fe+=mt));if(Z+=$e,me+=$e,S._startClamp&&(S._startClamp+=$e),S._endClamp&&!$t&&(S._endClamp=me||-.001,me=Math.min(me,mn(O,C))),Ie=me-Z||(Z-=.01)&&.001,jt&&(je=U.utils.clamp(0,1,U.utils.normalize(Z,me,Hr))),S._pinPush=Fe,bt&&$e&&(mt={},mt[C.a]="+="+$e,lr&&(mt[C.p]="-="+ye()),U.set([bt,ar],mt)),m&&!(Tp&&S.end>=mn(O,C)))mt=Dr(m),al=C===nt,Li=ye(),Fr=parseFloat(Ve(C.a))+Fe,!He&&me>1&&(on=(I?ge.scrollingElement||hr:O).style,on={style:on,value:on["overflow"+C.a.toUpperCase()]},I&&Dr(xe)["overflow"+C.a.toUpperCase()]!=="scroll"&&(on.style["overflow"+C.a.toUpperCase()]="scroll")),cd(m,at,mt),Di=Ol(m),Nt=Tn(m,!0),_c=H&&Ci(O,al?Wt:nt)(),y?(Qe=[y+C.os2,Ie+Fe+tt],Qe.t=at,ht=y===Ge?Qu(m,C)+Ie+Fe:0,ht&&(Qe.push(C.d,ht+tt),at.style.flexBasis!=="auto"&&(at.style.flexBasis=ht+tt)),ta(Qe),lr&&se.forEach(function(Qn){Qn.pin===lr&&Qn.vars.pinSpacing!==!1&&(Qn._subPinOffset=!0)}),H&&ye(Hr)):(ht=Qu(m,C),ht&&at.style.flexBasis!=="auto"&&(at.style.flexBasis=ht+tt)),H&&(kt={top:Nt.top+(al?Li-Z:_c)+tt,left:Nt.left+(al?_c:Li-Z)+tt,boxSizing:"border-box",position:"fixed"},kt[ns]=kt["max"+ma]=Math.ceil(Nt.width)+tt,kt[is]=kt["max"+dh]=Math.ceil(Nt.height)+tt,kt[Pr]=kt[Pr+wo]=kt[Pr+vo]=kt[Pr+_o]=kt[Pr+yo]="0",kt[Ge]=mt[Ge],kt[Ge+wo]=mt[Ge+wo],kt[Ge+vo]=mt[Ge+vo],kt[Ge+_o]=mt[Ge+_o],kt[Ge+yo]=mt[Ge+yo],qn=qb(_n,kt,N),$t&&ye(0)),i?(xh=i._initted,ad(1),i.render(i.duration(),!0,!0),bn=Ve(C.a)-Fr+Ie+Fe,jn=Math.abs(Ie-bn)>1,H&&jn&&qn.splice(qn.length-2,2),i.render(0,!0,!0),xh||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ad(0)):bn=Ie,on&&(on.value?on.style["overflow"+C.a.toUpperCase()]=on.value:on.style.removeProperty("overflow-"+C.a));else if(f&&ye()&&!j)for(Nt=f.parentNode;Nt&&Nt!==xe;)Nt._pinOffset&&(Z-=Nt._pinOffset,me-=Nt._pinOffset),Nt=Nt.parentNode;Na&&Na.forEach(function(Qn){return Qn.revert(!1,!0)}),S.start=Z,S.end=me,J=ie=$t?Hr:ye(),!j&&!$t&&(J<Hr&&ye(Hr),S.scroll.rec=0),S.revert(!1,!0),Pe=At(),Vr&&(fe=-1,Vr.restart(!0)),Ft=0,i&&L&&(i._initted||Oi)&&i.progress()!==Oi&&i.progress(Oi||0,!0).render(i.time(),!0,!0),(jt||je!==S.progress||j||g||i&&!i._initted)&&(i&&!L&&(i._initted||je||i.vars.immediateRender!==!1)&&i.totalProgress(j&&Z<-.001&&!je?U.utils.normalize(Z,me,0):je,!0),S.progress=jt||(J-Z)/Ie===je?0:je),m&&y&&(at._pinOffset=Math.round(S.progress*bn)),le&&le.invalidate(),isNaN(ka)||(ka-=U.getProperty(T,C.p),ol-=U.getProperty(or,C.p),Ll(T,C,ka),Ll(bt,C,ka-(te||0)),Ll(or,C,ol),Ll(ar,C,ol-(te||0))),jt&&!$t&&S.update(),d&&!$t&&!Hn&&(Hn=!0,d(S),Hn=!1)}},S.getVelocity=function(){return(ye()-ie)/(At()-Xa)*1e3||0},S.endAnimation=function(){La(S.callbackAnimation),i&&(le?le.progress(1):i.paused()?L||La(i,S.direction<0,1):La(i,i.reversed()))},S.labelToScroll=function(B){return i&&i.labels&&(Z||S.refresh()||Z)+i.labels[B]/i.duration()*Ie||0},S.getTrailing=function(B){var ee=se.indexOf(S),X=S.direction>0?se.slice(0,ee).reverse():se.slice(ee+1);return(pr(B)?X.filter(function(te){return te.vars.preventOverlaps===B}):X).filter(function(te){return S.direction>0?te.end<=Z:te.start>=me})},S.update=function(B,ee,X){if(!(j&&!X&&!B)){var te=$t===!0?Hr:S.scroll(),ot=B?0:(te-Z)/Ie,ce=ot<0?0:ot>1?1:ot||0,He=S.progress,jt,$e,Fe,we,qr,De,lr,sn;if(ee&&(ie=J,J=j?ye():te,w&&(Ri=Xn,Xn=i&&!L?i.totalProgress():ce)),_&&m&&!Ft&&!Al&&zr&&(!ce&&Z<te+(te-ie)/(At()-Xa)*_?ce=1e-4:ce===1&&me>te+(te-ie)/(At()-Xa)*_&&(ce=.9999)),ce!==He&&S.enabled){if(jt=S.isActive=!!ce&&ce<1,$e=!!He&&He<1,De=jt!==$e,qr=De||!!ce!=!!He,S.direction=ce>He?1:-1,S.progress=ce,qr&&!Ft&&(Fe=ce&&!He?0:ce===1?1:He===1?2:3,L&&(we=!De&&W[Fe+1]!=="none"&&W[Fe+1]||W[Fe],sn=i&&(we==="complete"||we==="reset"||we in i))),A&&(De||sn)&&(sn||p||!i)&&(Dt(A)?A(S):S.getTrailing(A).forEach(function(Li){return Li.endAnimation()})),L||(le&&!Ft&&!Al?(le._dp._time-le._start!==le._time&&le.render(le._dp._time-le._start),le.resetTo?le.resetTo("totalProgress",ce,i._tTime/i._tDur):(le.vars.totalProgress=ce,le.invalidate().restart())):i&&i.totalProgress(ce,!!(Ft&&(Pe||B)))),m){if(B&&y&&(at.style[y+C.os2]=ba),!H)Ur(Ga(Fr+bn*ce));else if(qr){if(lr=!B&&ce>He&&me+1>te&&te+1>=mn(O,C),N)if(!B&&(jt||lr)){var ht=Tn(m,!0),mt=te-Z;x0(m,xe,ht.top+(C===nt?mt:0)+tt,ht.left+(C===nt?0:mt)+tt)}else x0(m,at);ta(jt||lr?qn:Di),jn&&ce<1&&jt||Ur(Fr+(ce===1&&!lr?bn:0))}}w&&!P.tween&&!Ft&&!Al&&Vr.restart(!0),l&&(De||v&&ce&&(ce<1||!od))&&Qo(l.targets).forEach(function(Li){return Li.classList[jt||v?"add":"remove"](l.className)}),o&&!L&&!B&&o(S),qr&&!Ft?(L&&(sn&&(we==="complete"?i.pause().totalProgress(1):we==="reset"?i.restart(!0).pause():we==="restart"?i.restart(!0):i[we]()),o&&o(S)),(De||!od)&&(c&&De&&js(S,c),Q[Fe]&&js(S,Q[Fe]),v&&(ce===1?S.kill(!1,1):Q[Fe]=0),De||(Fe=ce===1?1:3,Q[Fe]&&js(S,Q[Fe]))),F&&!jt&&Math.abs(S.getVelocity())>(Ka(F)?F:2500)&&(La(S.callbackAnimation),le?le.progress(1):La(i,we==="reverse"?1:!ce,1))):L&&o&&!Ft&&o(S)}if(vs){var Nt=j?te/j.duration()*(j._caScrollDist||0):te;sl(Nt+(T._isFlipped?1:0)),vs(Nt)}ws&&ws(-te/j.duration()*(j._caScrollDist||0))}},S.enable=function(B,ee){S.enabled||(S.enabled=!0,ut(O,"resize",Ja),I||ut(O,"scroll",ks),G&&ut(t,"refreshInit",G),B!==!1&&(S.progress=je=0,J=ie=fe=ye()),ee!==!1&&S.refresh())},S.getTween=function(B){return B&&P?P.tween:le},S.setPositions=function(B,ee,X,te){if(j){var ot=j.scrollTrigger,ce=j.duration(),He=ot.end-ot.start;B=ot.start+He*B/ce,ee=ot.start+He*ee/ce}S.refresh(!1,!1,{start:o0(B,X&&!!S._startClamp),end:o0(ee,X&&!!S._endClamp)},te),S.update()},S.adjustPinSpacing=function(B){if(Qe&&B){var ee=Qe.indexOf(C.d)+1;Qe[ee]=parseFloat(Qe[ee])+B+tt,Qe[1]=parseFloat(Qe[1])+B+tt,ta(Qe)}},S.disable=function(B,ee){if(B!==!1&&S.revert(!0,!0),S.enabled&&(S.enabled=S.isActive=!1,ee||le&&le.pause(),Hr=0,M&&(M.uncache=1),G&&lt(t,"refreshInit",G),Vr&&(Vr.pause(),P.tween&&P.tween.kill()&&(P.tween=0)),!I)){for(var X=se.length;X--;)if(se[X].scroller===O&&se[X]!==S)return;lt(O,"resize",Ja),I||lt(O,"scroll",ks)}},S.kill=function(B,ee){S.disable(B,ee),le&&!ee&&le.kill(),u&&delete Pp[u];var X=se.indexOf(S);X>=0&&se.splice(X,1),X===It&&lu>0&&It--,X=0,se.forEach(function(te){return te.scroller===S.scroller&&(X=1)}),X||$t||(S.scroll.rec=0),i&&(i.scrollTrigger=null,B&&i.revert({kill:!1}),ee||i.kill()),bt&&[bt,ar,T,or].forEach(function(te){return te.parentNode&&te.parentNode.removeChild(te)}),bo===S&&(bo=0),m&&(M&&(M.uncache=1),X=0,se.forEach(function(te){return te.pin===m&&X++}),X||(M.spacer=0)),n.onKill&&n.onKill(S)},se.push(S),S.enable(!1,!1),Nn&&Nn(S),i&&i.add&&!Ie){var he=S.update;S.update=function(){S.update=he,oe.cache++,Z||me||S.refresh()},U.delayedCall(.01,S.update),Ie=.01,Z=me=0}else S.refresh();m&&Wb()},t.register=function(n){return Ss||(U=n||_v(),wv()&&window.document&&t.enable(),Ss=Qa),Ss},t.defaults=function(n){if(n)for(var i in n)Rl[i]=n[i];return Rl},t.disable=function(n,i){Qa=0,se.forEach(function(o){return o[i?"kill":"disable"](n)}),lt(ae,"wheel",ks),lt(ge,"scroll",ks),clearInterval(El),lt(ge,"touchcancel",dn),lt(xe,"touchstart",dn),Pl(lt,ge,"pointerdown,touchstart,mousedown",l0),Pl(lt,ge,"pointerup,touchend,mouseup",u0),Xu.kill(),Tl(lt);for(var s=0;s<oe.length;s+=3)Dl(lt,oe[s],oe[s+1]),Dl(lt,oe[s],oe[s+2])},t.enable=function(){if(ae=window,ge=document,hr=ge.documentElement,xe=ge.body,U){if(Qo=U.utils.toArray,xo=U.utils.clamp,Ap=U.core.context||dn,ad=U.core.suppressOverwrites||dn,oh=ae.history.scrollRestoration||"auto",Dp=ae.pageYOffset||0,U.core.globals("ScrollTrigger",t),xe){Qa=1,ea=document.createElement("div"),ea.style.height="100vh",ea.style.position="absolute",Tv(),Ob(),Xe.register(U),t.isTouch=Xe.isTouch,Zn=Xe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ep=Xe.isTouch===1,ut(ae,"wheel",ks),ah=[ae,ge,hr,xe],U.matchMedia?(t.matchMedia=function(d){var p=U.matchMedia(),f;for(f in d)p.add(f,d[f]);return p},U.addEventListener("matchMediaInit",function(){Ev(),fh()}),U.addEventListener("matchMediaRevert",function(){return Fv()}),U.addEventListener("matchMedia",function(){Qi(0,1),hs("matchMedia")}),U.matchMedia().add("(orientation: portrait)",function(){return ud(),ud})):console.warn("Requires GSAP 3.11.0 or later"),ud(),ut(ge,"scroll",ks);var n=xe.hasAttribute("style"),i=xe.style,s=i.borderTopStyle,o=U.core.Animation.prototype,l,u;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",l=Tn(xe),nt.m=Math.round(l.top+nt.sc())||0,Wt.m=Math.round(l.left+Wt.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xe.setAttribute("style",""),xe.removeAttribute("style")),El=setInterval(p0,250),U.delayedCall(.5,function(){return Al=0}),ut(ge,"touchcancel",dn),ut(xe,"touchstart",dn),Pl(ut,ge,"pointerdown,touchstart,mousedown",l0),Pl(ut,ge,"pointerup,touchend,mouseup",u0),Fp=U.utils.checkPrefix("transform"),uu.push(Fp),Ss=At(),Xu=U.delayedCall(.2,Qi).pause(),Cs=[ge,"visibilitychange",function(){var d=ae.innerWidth,p=ae.innerHeight;ge.hidden?(i0=d,s0=p):(i0!==d||s0!==p)&&Ja()},ge,"DOMContentLoaded",Qi,ae,"load",Qi,ae,"resize",Ja],Tl(ut),se.forEach(function(d){return d.enable(0,1)}),u=0;u<oe.length;u+=3)Dl(lt,oe[u],oe[u+1]),Dl(lt,oe[u],oe[u+2])}else if(ge){var c=function d(){t.enable(),ge.removeEventListener("DOMContentLoaded",d)};ge.addEventListener("DOMContentLoaded",c)}}},t.config=function(n){"limitCallbacks"in n&&(od=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(El)||(El=i)&&setInterval(p0,i),"ignoreMobileResize"in n&&(Ep=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Tl(lt)||Tl(ut,n.autoRefreshEvents||"none"),gv=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,i){var s=Xt(n),o=oe.indexOf(s),l=ps(s);~o&&oe.splice(o,l?6:2),i&&(l?vn.unshift(ae,i,xe,i,hr,i):vn.unshift(s,i))},t.clearMatchMedia=function(n){se.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},t.isInViewport=function(n,i,s){var o=(pr(n)?Xt(n):n).getBoundingClientRect(),l=o[s?ns:is]*i||0;return s?o.right-l>0&&o.left+l<ae.innerWidth:o.bottom-l>0&&o.top+l<ae.innerHeight},t.positionInViewport=function(n,i,s){pr(n)&&(n=Xt(n));var o=n.getBoundingClientRect(),l=o[s?ns:is],u=i==null?l/2:i in Gu?Gu[i]*l:~i.indexOf("%")?parseFloat(i)*l/100:parseFloat(i)||0;return s?(o.left+u)/ae.innerWidth:(o.top+u)/ae.innerHeight},t.killAll=function(n){if(se.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=fs.killAll||[];fs={},i.forEach(function(s){return s()})}},t}();Y.version="3.15.0";Y.saveStyles=function(t){return t?Qo(t).forEach(function(e){if(e&&e.style){var r=cr.indexOf(e);r>=0&&cr.splice(r,5),cr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),U.core.getCache(e),Ap())}}):cr};Y.revert=function(t,e){return fh(!t,e)};Y.create=function(t,e){return new Y(t,e)};Y.refresh=function(t){return t?Ja(!0):(Ss||Y.register())&&Qi(!0)};Y.update=function(t){return++oe.cache&&On(t===!0?2:0)};Y.clearScrollMemory=Av;Y.maxScroll=function(t,e){return mn(t,e?Wt:nt)};Y.getScrollFunc=function(t,e){return Ci(Xt(t),e?Wt:nt)};Y.getById=function(t){return Pp[t]};Y.getAll=function(){return se.filter(function(t){return t.vars.id!=="ScrollSmoother"})};Y.isScrolling=function(){return!!zr};Y.snapDirectional=ph;Y.addEventListener=function(t,e){var r=fs[t]||(fs[t]=[]);~r.indexOf(e)||r.push(e)};Y.removeEventListener=function(t,e){var r=fs[t],n=r&&r.indexOf(e);n>=0&&r.splice(n,1)};Y.batch=function(t,e){var r=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,d){var p=[],f=[],m=U.delayedCall(i,function(){d(p,f),p=[],f=[]}).pause();return function(y){p.length||m.restart(!0),p.push(y.trigger),f.push(y),s<=p.length&&m.progress(1)}},l;for(l in e)n[l]=l.substr(0,2)==="on"&&Dt(e[l])&&l!=="onRefreshInit"?o(l,e[l]):e[l];return Dt(s)&&(s=s(),ut(Y,"refresh",function(){return s=e.batchMax()})),Qo(t).forEach(function(u){var c={};for(l in n)c[l]=n[l];c.trigger=u,r.push(Y.create(c))}),r};var v0=function(e,r,n,i){return r>i?e(i):r<0&&e(0),n>i?(i-r)/(n-r):n<0?r/(r-n):1},dd=function t(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(Xe.isTouch?" pinch-zoom":""):"none",e===hr&&t(xe,r)},zl={auto:1,scroll:1},Xb=function(e){var r=e.event,n=e.target,i=e.axis,s=(r.changedTouches?r.changedTouches[0]:r).target,o=s._gsap||U.core.getCache(s),l=At(),u;if(!o._isScrollT||l-o._isScrollT>2e3){for(;s&&s!==xe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(zl[(u=Dr(s)).overflowY]||zl[u.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ps(s)&&(zl[(u=Dr(s)).overflowY]||zl[u.overflowX]),o._isScrollT=l}(o._isScroll||i==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},Dv=function(e,r,n,i){return Xe.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:i=i&&Xb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ut(ge,Xe.eventTypes[0],w0,!1,!0)},onDisable:function(){return lt(ge,Xe.eventTypes[0],w0,!0)}})},Qb=/(input|label|select|textarea)/i,y0,w0=function(e){var r=Qb.test(e.target.tagName);(r||y0)&&(e._gsapAllow=!0,y0=r)},Gb=function(e){Vi(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,n=r.normalizeScrollX,i=r.momentum,s=r.allowNestedScroll,o=r.onRelease,l,u,c=Xt(e.target)||hr,d=U.core.globals().ScrollSmoother,p=d&&d.get(),f=Zn&&(e.content&&Xt(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),m=Ci(c,nt),y=Ci(c,Wt),g=1,_=(Xe.isTouch&&ae.visualViewport?ae.visualViewport.scale*ae.visualViewport.width:ae.outerWidth)/ae.innerWidth,h=0,x=Dt(i)?function(){return i(l)}:function(){return i||2.8},v,w,N=Dv(c,e.type,!0,s),k=function(){return w=!1},j=dn,F=dn,A=function(){u=mn(c,nt),F=xo(Zn?1:0,u),n&&(j=xo(0,mn(c,Wt))),v=ss},C=function(){f._gsap.y=Ga(parseFloat(f._gsap.y)+m.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",m.offset=m.cacheID=0},L=function(){if(w){requestAnimationFrame(k);var D=Ga(l.deltaY/2),z=F(m.v-D);if(f&&z!==m.v+m.offset){m.offset=z-m.v;var S=Ga((parseFloat(f&&f._gsap.y)||0)-m.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+S+", 0, 1)",f._gsap.y=S+"px",m.cacheID=oe.cache,On()}return!0}m.offset&&C(),w=!0},O,V,I,H,Q=function(){A(),O.isActive()&&O.vars.scrollY>u&&(m()>u?O.progress(1)&&m(u):O.resetTo("scrollY",u))};return f&&U.set(f,{y:"+=0"}),e.ignoreCheck=function(W){return Zn&&W.type==="touchmove"&&L()||g>1.05&&W.type!=="touchstart"||l.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){w=!1;var W=g;g=Ga((ae.visualViewport&&ae.visualViewport.scale||1)/_),O.pause(),W!==g&&dd(c,g>1.01?!0:n?!1:"x"),V=y(),I=m(),A(),v=ss},e.onRelease=e.onGestureStart=function(W,D){if(m.offset&&C(),!D)H.restart(!0);else{oe.cache++;var z=x(),S,G;n&&(S=y(),G=S+z*.05*-W.velocityX/.227,z*=v0(y,S,G,mn(c,Wt)),O.vars.scrollX=j(G)),S=m(),G=S+z*.05*-W.velocityY/.227,z*=v0(m,S,G,mn(c,nt)),O.vars.scrollY=F(G),O.invalidate().duration(z).play(.01),(Zn&&O.vars.scrollY>=u||S>=u-1)&&U.to({},{onUpdate:Q,duration:z})}o&&o(W)},e.onWheel=function(){O._ts&&O.pause(),At()-h>1e3&&(v=0,h=At())},e.onChange=function(W,D,z,S,G){if(ss!==v&&A(),D&&n&&y(j(S[2]===D?V+(W.startX-W.x):y()+D-S[1])),z){m.offset&&C();var ne=G[2]===z,st=ne?I+W.startY-W.y:m()+z-G[1],fe=F(st);ne&&st!==fe&&(I+=fe-st),m(fe)}(z||D)&&On()},e.onEnable=function(){dd(c,n?!1:"x"),Y.addEventListener("refresh",Q),ut(ae,"resize",Q),m.smooth&&(m.target.style.scrollBehavior="auto",m.smooth=y.smooth=!1),N.enable()},e.onDisable=function(){dd(c,!0),lt(ae,"resize",Q),Y.removeEventListener("refresh",Q),N.kill()},e.lockAxis=e.lockAxis!==!1,l=new Xe(e),l.iOS=Zn,Zn&&!m()&&m(1),Zn&&U.ticker.add(dn),H=l._dc,O=U.to(l,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Pv(m,m(),function(){return O.pause()})},onUpdate:On,onComplete:H.vars.onComplete}),l};Y.sort=function(t){if(Dt(t))return se.sort(t);var e=ae.pageYOffset||0;return Y.getAll().forEach(function(r){return r._sortY=r.trigger?e+r.trigger.getBoundingClientRect().top:r.start+ae.innerHeight}),se.sort(t||function(r,n){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Y.observe=function(t){return new Xe(t)};Y.normalizeScroll=function(t){if(typeof t>"u")return zt;if(t===!0&&zt)return zt.enable();if(t===!1){zt&&zt.kill(),zt=t;return}var e=t instanceof Xe?t:Gb(t);return zt&&zt.target===e.target&&zt.kill(),ps(e.target)&&(zt=e),e};Y.core={_getVelocityProp:Cp,_inputObserver:Dv,_scrollers:oe,_proxies:vn,bridge:{ss:function(){zr||hs("scrollStart"),zr=At()},ref:function(){return Ft}}};_v()&&U.registerPlugin(Y);function $r(){const[t,e]=b.useState(!1);return b.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)");e(r.matches);const n=i=>e(i.matches);return r.addEventListener("change",n),()=>r.removeEventListener("change",n)},[]),t}E.registerPlugin(Y);function Kb({children:t}){const e=b.useRef(null),r=$r();return b.useEffect(()=>{if(r)return;const n=new p4({duration:1.2,easing:s=>Math.min(1,1.001-Math.pow(2,-10*s)),smoothWheel:!0,touchMultiplier:1.5});e.current=n,n.on("scroll",Y.update);const i=s=>{n.raf(s*1e3)};return E.ticker.add(i),E.ticker.lagSmoothing(0),()=>{E.ticker.remove(i),n.destroy(),e.current=null}},[r]),a.jsx(a.Fragment,{children:t})}function Jb(){const t=b.useRef(null),e=b.useRef(null);return b.useEffect(()=>{const r=window.matchMedia("(hover: hover) and (pointer: fine)"),n=window.matchMedia("(prefers-reduced-motion: reduce)");if(!r.matches||n.matches)return;const i=t.current,s=e.current;if(!i||!s)return;E.set([i,s],{xPercent:-50,yPercent:-50,x:-100,y:-100,opacity:0});const o=E.quickTo(i,"x",{duration:.12,ease:"power3.out"}),l=E.quickTo(i,"y",{duration:.12,ease:"power3.out"}),u=E.quickTo(s,"x",{duration:.38,ease:"power3.out"}),c=E.quickTo(s,"y",{duration:.38,ease:"power3.out"});let d=!1,p=!1;const f=()=>{d||(d=!0,E.to([i,s],{opacity:1,duration:.25,overwrite:"auto"}))},m=()=>{d=!1,E.to([i,s],{opacity:0,duration:.2,overwrite:"auto"})},y=x=>{o(x.clientX),l(x.clientY),u(x.clientX),c(x.clientY),f()},g=x=>{const v=x.target;if(!(v instanceof Element))return;const w=!!v.closest('a, button, [role="button"], [data-cursor="hover"]');w!==p&&(p=w,E.to(s,{scale:p?1.65:1,borderColor:p?"rgba(132,164,177,0.95)":"rgba(132,164,177,0.65)",backgroundColor:p?"rgba(132,164,177,0.12)":"rgba(132,164,177,0)",boxShadow:p?"0 0 28px rgba(132,164,177,0.16)":"0 0 0 rgba(132,164,177,0)",duration:.3,ease:"power3.out",overwrite:"auto"}),E.to(i,{scale:p?.65:1,duration:.25,ease:"power3.out",overwrite:"auto"}))},_=()=>{E.to(s,{scale:p?1.35:.8,duration:.15,overwrite:"auto"})},h=()=>{E.to(s,{scale:p?1.65:1,duration:.25,ease:"power3.out",overwrite:"auto"})};return window.addEventListener("pointermove",y),window.addEventListener("pointerover",g),window.addEventListener("pointerdown",_),window.addEventListener("pointerup",h),document.addEventListener("pointerleave",m),()=>{window.removeEventListener("pointermove",y),window.removeEventListener("pointerover",g),window.removeEventListener("pointerdown",_),window.removeEventListener("pointerup",h),document.removeEventListener("pointerleave",m),E.killTweensOf([i,s])}},[]),a.jsxs(a.Fragment,{children:[a.jsx("div",{ref:t,"aria-hidden":"true",className:`\r
          pointer-events-none\r
          fixed\r
          left-0\r
          top-0\r
          z-[9999]\r
          hidden\r
          h-[6px]\r
          w-[6px]\r
          rounded-full\r
          bg-[#84A4B1]\r
          shadow-[0_0_12px_rgba(132,164,177,0.45)]\r
          md:block\r
        `}),a.jsx("div",{ref:e,"aria-hidden":"true",className:`\r
          pointer-events-none\r
          fixed\r
          left-0\r
          top-0\r
          z-[9998]\r
          hidden\r
          h-[36px]\r
          w-[36px]\r
          rounded-full\r
          border\r
          border-[#84A4B1]/65\r
          bg-transparent\r
          md:block\r
        `})]})}function Zb(){const{pathname:t}=Yt();return b.useEffect(()=>{t!=="/"&&window.scrollTo({top:0,left:0,behavior:"instant"})},[t]),null}function e3({className:t="",variant:e="light"}){const r=e==="light"?"/brand/fnar-wordmark-logo-light.svg":"/brand/fnar-wordmark-logo-dark.svg";return a.jsx("img",{src:r,alt:"فنر — FNAR",draggable:!1,className:`
        block
        w-auto
        h-[42px]
        sm:h-[46px]
        lg:h-[54px]
        xl:h-[58px]
        max-w-[160px]
        lg:max-w-[190px]
        object-contain
        select-none
        shrink-0
        transition-opacity
        duration-300
        ${t}
      `})}const t3=[{label:"الرئيسية",href:"/",type:"route"},{label:"البرنامج",href:"/program",type:"route"},{label:"الاستشارات",href:"/consultations",type:"route"},{label:"الشراكات",href:"/partnerships",type:"route"},{label:"الأكاديمية",href:"/academy",type:"route"},{label:"عن فنر",href:"/about",type:"anchor"}],_0=[{id:"market-understanding",title:"فهم السوق",description:"قراءة بنية السوق، القوى المؤثرة، وطبيعة الحركة بعيداً عن الضوضاء اليومية.",icon:"market"},{id:"analysis-schools",title:"مدارس التحليل",description:"المدرسة الكلاسيكية، الموجات، والتحليل الكمي — بأدواتها وحدود كل مدرسة.",icon:"schools"},{id:"risk-management",title:"إدارة المخاطر",description:"حماية رأس المال أولاً، تحديد المخاططة، وقواعد الخروج قبل الدخول.",icon:"risk"},{id:"capital",title:"رأس المال",description:"إدارة المحفظة، توزيع الأصول، ومبادئ النمو المستدام بدون مغامرة مدمرة.",icon:"capital"},{id:"financial-behavior",title:"السلوك المالي والنفسي",description:"التحيزات المعرفية، الانضباط العاطفي، وقرارات السوق تحت الضغط.",icon:"behavior"},{id:"decision-making",title:"صناعة القرار",description:"من المعرفة إلى الفعل — منهجية واضحة لاتخاذ قرارات مستقلة ومنضبطة.",icon:"decision"}],r3=[{id:"foundation",number:"01",title:"الأساس",subtitle:"بناء المعرفة الأولى",description:"من الصفر إلى فهم حقيقي لبنية الأسواق المالية. لا افتراضات سابقة مطلوبة.",level:"الأساس",atmosphere:"foundation",courses:[]},{id:"analysis",number:"02",title:"التحليل",subtitle:"التحليل النقدي المنهجي",description:"أدوات التحليل المتقدمة، ربط المفاهيم، وقراءة السوق بعقلية تحليلية مستقلة.",level:"التحليل",atmosphere:"analysis",courses:[]},{id:"advanced",number:"03",title:"المتقدم",subtitle:"صناعة القرار المستقل",description:"إدارة المحفظة، السلوك المتقدم، واتخاذ قرارات احترافية تحت ظروف السوق الحقيقية.",level:"المتقدم",atmosphere:"advanced",courses:[]}],pd={user:{id:"user-demo",name:"أحمد",currentPathId:"foundation",progressPercent:65},currentPath:r3[0],recentLessons:[{id:"l1",courseId:"foundation-1",title:"بنية السوق وأنواع الأوامر",durationMinutes:18,order:5,isPreview:!1},{id:"l2",courseId:"foundation-1",title:"قراءة الرسم البياني",durationMinutes:22,order:6,isPreview:!1},{id:"l3",courseId:"foundation-1",title:"مفهوم السيولة",durationMinutes:15,order:7,isPreview:!0},{id:"l4",courseId:"foundation-1",title:"القوى المؤثرة على السعر",durationMinutes:26,order:8,isPreview:!1}]},Bl=[{text:"معلومات",depth:.3},{text:"تحليلات",depth:.6},{text:"آراء",depth:.2},{text:"ضوضاء",depth:.8},{text:"أخبار",depth:.5},{text:"مؤشرات",depth:.4},{text:"تناقضات",depth:.7},{text:"مدارس مختلفة",depth:.35},{text:"توصيات",depth:.65},{text:"إشارات",depth:.25},{text:"توقعات",depth:.55},{text:"بيانات",depth:.45}],n3=[{id:"chaos",title:"تشتيت",description:"معلومات متفرقة ومتضاربة"},{id:"connect",title:"ربط",description:"ربط المفاهيم والأدوات"},{id:"analyze",title:"تحليل",description:"تحليل نقدي ومنهجي"},{id:"understand",title:"فهم",description:"فهم أعمق ورؤية واضحة"},{id:"decide",title:"قرار",description:"صناعة قرار مستقل ومنضبط"}],i3=[{id:"pc-01",number:"01",title:"العقل",description:"طريقة التفكير، وبناء العقلية المناسبة لفهم الأسواق واتخاذ القرارات بصورة منهجية.",order:1},{id:"pc-02",number:"02",title:"التاجر",description:"مفهوم التاجر، وطبيعة التعامل مع السوق، والسلوك والانضباط المطلوب للعمل فيه.",order:2},{id:"pc-03",number:"03",title:"الأسواق المالية",description:"مدخل شامل لفهم الأسواق المالية، طبيعتها، آلية عملها، والأطراف الموجودة فيها.",order:3},{id:"pc-04",number:"04",title:"التحليل الفني — من المدخل إلى الاحتراف",description:"يبدأ من أساسيات التحليل الفني ويتدرج إلى المستويات المتقدمة والاحترافية.",order:4},{id:"pc-05",number:"05",title:"الإدارة المالية",description:"تنظيم الجانب المالي للمتداول، وفهم الأموال والالتزامات والتعامل معها بصورة منظمة.",order:5},{id:"pc-06",number:"06",title:"إدارة المخاطر",description:"فهم المخاطر، قياسها، وتنظيم التعامل معها داخل السوق.",order:6},{id:"pc-07",number:"07",title:"إدارة رأس المال",description:"إدارة رأس المال، توزيعه، وتنظيم استخدامه بصورة منهجية.",order:7},{id:"pc-08",number:"08",title:"الذهب والمعادن",description:"فهم سوق الذهب والمعادن وطبيعته وخصائصه والعوامل المرتبطة به.",order:8},{id:"pc-09",number:"09",title:"أخطاء المتداولين",description:"أبرز الأخطاء الشائعة لدى المتداولين وأسبابها وآثارها.",order:9}],Dj=[{id:"stage-education",number:"01",title:"المرحلة الأولى — التعليم",duration:"3 أشهر",description:"تغطي منهجية فنر في التفكير، التحليل، التنظيم المالي، وإدارة المخاطر ورأس المال. مرحلة تعليمية مكثفة ومدروسة.",isOptional:!1,requiresSeparateAgreement:!1},{id:"stage-practical",number:"02",title:"المرحلة الثانية — الجانب التطبيقي",duration:"علاقة طويلة الأمد",description:"بعد إكمال المرحلة التعليمية، قد يختار المشارك استكشاف علاقة تطبيقية طويلة الأمد مع فنر. هذه المرحلة غير مشمولة تلقائياً، وتتطلب اتفاقاً أو عقداً منفصلاً. استيفاء الحد الأدنى لرأس المال لا يضمن القبول.",isOptional:!0,requiresSeparateAgreement:!0}],Rj=[{id:"faq-01",question:"هل الدورات تُباع بشكل منفصل؟",answer:"لا. البرنامج التعليمي هو حزمة متكاملة من تسعة دورات مصممة لتعمل معاً كمنهج واحد. الالتحاق يكون بالحزمة الكاملة."},{id:"faq-02",question:"كم مدة البرنامج؟",answer:"مدة المرحلة التعليمية الأساسية ثلاثة أشهر تغطي جميع دورات البرنامج التسع."},{id:"faq-03",question:"هل المرحلة التطبيقية مشمولة في البرنامج؟",answer:"لا. المرحلة التطبيقية علاقة منفصلة لمن يرغب بعد إكمال التعليم. تتطلب اتفاقاً أو عقداً خاصاً، ولا يتم قبولها تلقائياً."},{id:"faq-04",question:"هل هناك إعفاء من الرسوم؟",answer:"بعض المشاركين قد يستوفون شروط إعفاء كامل من الرسوم التعليمية بناءً على اتفاقيات سابقة. لا يُقدَّم الإعفاء تلقائياً لجميع المتقدمين."},{id:"faq-05",question:"هل يحتاج المبتدئ إلى معرفة مسبقة؟",answer:"لا. البرنامج مصمم ليبدأ من بناء طريقة التفكير ويمتد إلى المستويات المتقدمة، وهو مناسب لمختلف المستويات."},{id:"faq-06",question:"هل يقدم فنر توصيات أو وعوداً بالربح؟",answer:"لا. فنر يعلّم كيف تفهم الأسواق وتتخذ قراراتك بنفسك. لا توصيات، لا وعود بالربح، لا اختصارات."}],Rv=[{id:"con-01",number:"01",category:"reorganization",title:"جلسة إعادة التنظيم بعد الخسائر",targetAudience:"المتداولون الذين تعرضوا لخسائر ويرغبون في إعادة تقييم وضعهم",description:"للمتداولين الذين تعرضوا لخسائر ويرغبون في تقييم وضعهم، فهم الأخطاء السابقة، وتنظيم خطواتهم القادمة. هذه استشارة تعليمية وتحليلية، وليست خدمة توصيات مباشرة.",durationMinutes:45,priceKWD:150,supportedPriceKWD:45,isSupportedEligible:!0,mayLeadToPartnership:!1,order:1},{id:"con-02",number:"02",category:"general",title:"الاستشارة العامة",targetAudience:"الأفراد الذين يرغبون في نقاش مركز حول الأسواق المالية",description:"للأفراد الذين يرغبون في نقاش مركز للأسواق المالية أو التداول أو المواضيع ذات الصلة.",durationMinutes:60,priceKWD:200,supportedPriceKWD:60,isSupportedEligible:!0,mayLeadToPartnership:!1,order:2},{id:"con-03",number:"03",category:"analysts",title:"استشارة المحللين والمتداولين",targetAudience:"المحللون والمتداولون ذوو المعرفة أو الخبرة المسبقة",description:"للمحللين والمتداولين ذوي المعرفة أو الخبرة المسبقة. قد تشمل المواضيع المنهجية، المقاربة التحليلية، سير العمل، المشكلات المتكررة، ومجالات التحسين.",durationMinutes:60,priceKWD:300,isSupportedEligible:!1,mayLeadToPartnership:!1,order:3},{id:"con-04",number:"04",category:"extended",title:"الجلسة الخاصة الموسعة",targetAudience:"الحالات التي تتطلب نقاشاً أعمق لعدة مواضيع مترابطة",description:"للحالات التي تتطلب نقاشاً أعمق لعدة مواضيع مترابطة أو مراجعة شاملة.",durationMinutes:90,priceKWD:450,isSupportedEligible:!1,mayLeadToPartnership:!1,order:4},{id:"con-05",number:"05",category:"corporate",title:"استشارة الشركات وأصحاب رؤوس الأموال",targetAudience:"الشركات، المستثمرون، أصحاب الأعمال، وأصحاب المحافظ الكبيرة",description:"للشركات والمستثمرين وأصحاب الأعمال وأصحاب المحافظ الكبيرة. قد تكون هذه الاستشارة نقاشاً أولياً قبل شراكة محتملة. إذا كان الهدف يتعلق بخدمات رأس المال العملية لدى فنر، الحد الأدنى لرأس المال المخصص هو 15,000 د.ك، في محفظة العميل أو الشركة الخاصة. استيفاء الحد الأدنى لا يضمن القبول.",durationMinutes:120,priceKWD:750,isSupportedEligible:!1,mayLeadToPartnership:!0,minimumCapitalKWD:15e3,order:5}],s3=[{id:"fu-01",title:"متابعة الاستشارة العامة أو إعادة التنظيم",durationMinutes:30,priceKWD:75,eligibleAfterCategory:"general",eligibilityWindowDays:null},{id:"fu-02",title:"متابعة المحللين والمتداولين",durationMinutes:30,priceKWD:125,eligibleAfterCategory:"analysts",eligibilityWindowDays:null},{id:"fu-03",title:"متابعة الشركات وأصحاب رؤوس الأموال",durationMinutes:45,priceKWD:250,eligibleAfterCategory:"corporate",eligibilityWindowDays:null}],Mj=250,Mv=[{id:"strategic",number:"A",title:"الشراكات الاستراتيجية",subtitle:"فرص طويلة الأمد ومؤسسية",description:"للشركات والمؤسسات وأصحاب الأعمال والمستثمرين وأصحاب رؤوس الأموال والمحافظ الكبيرة والمنظمات الاستراتيجية. تتيح هذه الشراكات إمكانية التعاون في خدمات رأس المال العملية لدى فنر.",audiences:["الشركات والمؤسسات","أصحاب الأعمال","المستثمرون","أصحاب رؤوس الأموال","أصحاب المحافظ الكبيرة","المنظمات الاستراتيجية"],requiresCapital:!0,minimumCapitalKWD:15e3,hasApplicationForm:!0},{id:"collaboration",number:"B",title:"الشراكات والتعاون",subtitle:"تعاون مهني وتجاري",description:"للمؤثرين وصناع المحتوى والمنظمات الإعلامية وشركات التسويق والخبراء والمتخصصين والأعمال والأفراد أصحاب العروض المناسبة.",audiences:["المؤثرون","صناع المحتوى","المنظمات الإعلامية","شركات التسويق","الخبراء","المتخصصون","الأعمال","أصحاب العروض المناسبة"],requiresCapital:!1,hasApplicationForm:!0}],a3=[],Oj=15e3;E.registerPlugin(Y);const b0=[...t3.filter(t=>t.href!=="/invoices"),{label:"الفواتير",href:"/invoices",type:"route"}];function o3(){const t=b.useRef(null),e=Ti(),r=Yt(),n=r.pathname==="/",[i,s]=b.useState(()=>window.location.pathname!=="/"),[o,l]=b.useState(!1),[u,c]=b.useState(!1),{isAuthenticated:d,user:p,logout:f}=cg();b.useEffect(()=>{if(!n){s(!0);return}const h=document.querySelector("#methodology");if(!h){const w=()=>{s(window.scrollY>80)};return w(),window.addEventListener("scroll",w,{passive:!0}),()=>{window.removeEventListener("scroll",w)}}(()=>{const w=h.getBoundingClientRect().top+window.scrollY-window.innerHeight*.12;s(window.scrollY>=w)})();const v=Y.create({trigger:h,start:"top 12%",onEnter:()=>s(!0),onLeaveBack:()=>s(!1)});return()=>{v.kill()}},[n,r.pathname]),b.useEffect(()=>{if(!t.current)return;const h=E.context(()=>{E.fromTo(t.current,{y:-24,opacity:0},{y:0,opacity:1,duration:1.05,delay:.15,ease:"power4.out",clearProps:"transform"})});return()=>h.revert()},[]),b.useEffect(()=>{l(!1),c(!1)},[r.pathname,r.hash]),b.useEffect(()=>{if(!o)return;const h=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=h}},[o]),b.useEffect(()=>{if(!o&&!u)return;const h=x=>{x.key==="Escape"&&(l(!1),c(!1))};return window.addEventListener("keydown",h),()=>{window.removeEventListener("keydown",h)}},[o,u]);const m=()=>{f(),c(!1),l(!1),e("/",{replace:!0})},y=h=>{c(!1),l(!1),e(h),window.scrollTo({top:0,behavior:"instant"})},g=(h,x)=>{if(h.metaKey||h.ctrlKey||h.shiftKey||h.altKey||h.button!==0)return;if(h.preventDefault(),l(!1),c(!1),x.type==="route"){r.pathname!==x.href&&e(x.href),window.scrollTo({top:0,behavior:"instant"});return}const[v,w]=x.href.split("#"),N=v||r.pathname,k=w||"";if(!k){e(N);return}const j=()=>{const F=document.getElementById(k);F&&F.scrollIntoView({behavior:"smooth",block:"start"})};N!==r.pathname?(e(`${N}#${k}`),window.setTimeout(j,350)):j()},_=!n||i;return a.jsxs(a.Fragment,{children:[a.jsx("nav",{ref:t,dir:"rtl","aria-label":"القائمة الرئيسية",className:"fixed inset-x-0 top-0 z-[100] px-4 pt-4 md:px-6 md:pt-5 lg:px-8",children:a.jsxs("div",{className:`
            mx-auto flex h-[72px] w-full max-w-[1380px]
            items-center justify-between rounded-[22px]
            border px-4
            transition-[background-color,border-color,box-shadow]
            duration-500 md:px-5 lg:px-6
            ${_?"border-[#1D2C4F]/[0.08] bg-[#F3F3F1]/[0.94] shadow-[0_18px_60px_rgba(29,44,79,0.08)] backdrop-blur-2xl":"border-[#F3F3F1]/[0.10] bg-[#0B1729]/[0.22] shadow-[0_18px_60px_rgba(0,0,0,0.10)] backdrop-blur-xl"}
          `,children:[a.jsx("div",{className:"flex h-full w-[175px] shrink-0 items-center justify-start",children:a.jsx("a",{href:"/",onClick:h=>g(h,{href:"/",type:"route"}),className:"group flex h-full min-w-[145px] items-center justify-start transition-opacity duration-300 hover:opacity-85","data-cursor":"hover","aria-label":"فنر — الصفحة الرئيسية",children:a.jsx(e3,{variant:_?"dark":"light"})})}),a.jsxs("div",{className:"hidden h-full items-center lg:flex",children:[a.jsx("span",{className:`ml-5 h-[22px] w-px transition-colors duration-500 xl:ml-7 ${_?"bg-[#1D2C4F]/10":"bg-[#F3F3F1]/10"}`}),a.jsx("ul",{className:"flex h-full items-center gap-1",children:b0.map((h,x)=>{const v=h.type==="route"&&r.pathname===h.href;return a.jsx("li",{className:"flex h-full items-center",children:a.jsxs("a",{href:h.href,onClick:w=>g(w,h),"aria-current":v?"page":void 0,"data-cursor":"hover",className:`
                        group relative flex h-[44px] items-center
                        rounded-full px-4 font-arabic text-[13px]
                        font-medium transition-all duration-300
                        ${_?`text-[#1D2C4F]/70 hover:bg-[#1D2C4F]/[0.045] hover:text-[#1D2C4F] ${v?"text-[#1D2C4F]":""}`:`text-[#F3F3F1]/75 hover:bg-[#F3F3F1]/[0.055] hover:text-[#F3F3F1] ${v?"text-[#F3F3F1]":""}`}
                      `,children:[a.jsx("span",{className:`ml-2 text-[8px] font-medium tracking-[0.12em] ${_?"text-[#54707D]":"text-[#84A4B1]"}`,children:String(x+1).padStart(2,"0")}),h.label,a.jsx("span",{className:`
                          absolute bottom-[6px] right-1/2 h-px
                          translate-x-1/2 bg-[#84A4B1]
                          transition-all duration-300
                          ${v?"w-[14px]":"w-0 group-hover:w-[14px]"}
                        `})]})},h.href)})})]}),a.jsxs("div",{className:"hidden items-center gap-3 lg:flex",children:[d&&p?a.jsxs("div",{className:"relative",children:[a.jsxs("button",{type:"button",onClick:()=>c(!u),"aria-expanded":u,"aria-label":"حسابي",className:`flex h-[40px] items-center gap-2.5 rounded-full border px-2.5 transition-all duration-300 ${_?"border-[#1D2C4F]/10 hover:border-[#84A4B1]/30":"border-[#F3F3F1]/12 hover:border-[#84A4B1]/40"}`,children:[a.jsx("span",{className:`flex h-7 w-7 items-center justify-center rounded-full font-sans text-[11px] font-bold ${_?"bg-[#1D2C4F]/8 text-[#1D2C4F]":"bg-[#84A4B1]/15 text-[#84A4B1]"}`,children:p.displayName.trim().split(/\s+/).slice(0,2).map(h=>h[0]).join("").toUpperCase().slice(0,2)||"؟"}),a.jsx("span",{className:`max-w-[80px] truncate font-arabic text-[11px] font-medium ${_?"text-[#1D2C4F]/70":"text-[#F3F3F1]/70"}`,children:p.displayName}),a.jsx("svg",{width:"10",height:"10",viewBox:"0 0 12 12",fill:"none",className:`transition-transform duration-300 ${u?"rotate-180":""} ${_?"text-[#1D2C4F]/40":"text-[#F3F3F1]/40"}`,children:a.jsx("path",{d:"M2 4L6 8L10 4",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})]}),u&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"fixed inset-0 z-[95]",onClick:()=>c(!1)}),a.jsxs("div",{className:"absolute left-0 top-[48px] z-[96] w-[200px] overflow-hidden rounded-[14px] border border-[#1D2C4F]/10 bg-[#F3F3F1] shadow-[0_18px_60px_rgba(29,44,79,0.12)]",role:"menu",children:[a.jsxs("div",{className:"border-b border-[#1D2C4F]/8 px-4 py-3",children:[a.jsx("p",{className:"truncate font-arabic text-[12px] font-semibold text-[#1D2C4F]",children:p.displayName}),a.jsx("p",{className:"mt-0.5 truncate font-arabic text-[10px] text-[#1D2C4F]/35",children:p.email})]}),a.jsxs("div",{className:"py-1.5",children:[a.jsxs("button",{type:"button",onClick:()=>y("/academy"),className:"flex w-full items-center gap-3 px-4 py-2.5 text-right font-arabic text-[12px] text-[#1D2C4F]/70 transition-colors hover:bg-[#1D2C4F]/[0.03] hover:text-[#1D2C4F]",role:"menuitem",children:[a.jsx("span",{className:"text-[9px] text-[#84A4B1]",children:"01"}),"الأكاديمية"]}),a.jsxs("button",{type:"button",onClick:()=>y("/academy/progress"),className:"flex w-full items-center gap-3 px-4 py-2.5 text-right font-arabic text-[12px] text-[#1D2C4F]/70 transition-colors hover:bg-[#1D2C4F]/[0.03] hover:text-[#1D2C4F]",role:"menuitem",children:[a.jsx("span",{className:"text-[9px] text-[#84A4B1]",children:"02"}),"تقدّمي التعليمي"]}),a.jsxs("button",{type:"button",onClick:()=>y("/academy/profile"),className:"flex w-full items-center gap-3 px-4 py-2.5 text-right font-arabic text-[12px] text-[#1D2C4F]/70 transition-colors hover:bg-[#1D2C4F]/[0.03] hover:text-[#1D2C4F]",role:"menuitem",children:[a.jsx("span",{className:"text-[9px] text-[#84A4B1]",children:"03"}),"الملف الشخصي"]}),a.jsx("div",{className:"my-1.5 border-t border-[#1D2C4F]/8"}),a.jsxs("button",{type:"button",onClick:m,className:"flex w-full items-center gap-3 px-4 py-2.5 text-right font-arabic text-[12px] text-[#1D2C4F]/60 transition-colors hover:bg-red-50/60 hover:text-red-600",role:"menuitem",children:[a.jsx("span",{className:"text-[9px] text-[#1D2C4F]/25",children:"04"}),"تسجيل الخروج"]})]})]})]})]}):a.jsx("button",{type:"button",onClick:()=>y("/login"),className:`flex h-[40px] items-center gap-2 rounded-full border px-4 font-arabic text-[12px] font-medium transition-all duration-300 ${_?"border-[#1D2C4F]/12 text-[#1D2C4F]/70 hover:border-[#84A4B1]/30 hover:text-[#1D2C4F]":"border-[#F3F3F1]/15 text-[#F3F3F1]/70 hover:border-[#84A4B1]/40 hover:text-[#F3F3F1]"}`,children:"دخول"}),a.jsx("span",{className:`h-[22px] w-px ${_?"bg-[#1D2C4F]/10":"bg-[#F3F3F1]/10"}`}),a.jsxs("a",{href:"/program",onClick:h=>g(h,{href:"/program",type:"route"}),"data-cursor":"hover",className:`
                group relative flex h-[44px] items-center gap-4
                overflow-hidden rounded-full border px-5
                font-arabic text-[13px] font-semibold
                transition-all duration-500
                ${_?"border-[#1D2C4F]/10 bg-[#1D2C4F] text-[#F3F3F1] hover:border-[#84A4B1]":"border-[#F3F3F1]/16 bg-[#F3F3F1]/[0.07] text-[#F3F3F1] hover:border-[#84A4B1]/55 hover:bg-[#F3F3F1]/[0.11]"}
              `,children:[a.jsx("span",{className:"absolute inset-0 translate-y-full bg-[#84A4B1] transition-transform duration-500 ease-out group-hover:translate-y-0"}),a.jsx("span",{className:"relative z-10 transition-colors duration-300 group-hover:text-[#1D2C4F]",children:"اكتشف البرنامج"}),a.jsx("span",{className:`
                  relative z-10 flex h-6 w-6 items-center
                  justify-center rounded-full border text-[9px]
                  transition-all duration-500
                  group-hover:-translate-x-1
                  group-hover:border-[#1D2C4F]/20
                  group-hover:text-[#1D2C4F]
                  ${_?"border-[#F3F3F1]/20":"border-[#F3F3F1]/18"}
                `,children:"←"})]})]}),a.jsx("button",{type:"button",onClick:()=>l(h=>!h),"aria-expanded":o,"aria-controls":"fnar-mobile-menu","aria-label":o?"إغلاق القائمة":"فتح القائمة",className:`
              relative z-[120] flex h-10 w-10
              items-center justify-center
              rounded-full transition-colors duration-300
              lg:hidden
              ${o?"bg-[#F3F3F1]/10 text-[#F3F3F1]":_?"text-[#1D2C4F]":"text-[#F3F3F1]"}
            `,children:a.jsxs("span",{className:"relative block h-[14px] w-[18px]",children:[a.jsx("span",{className:`absolute right-0 top-0 h-px bg-current transition-all duration-300 ${o?"top-[6px] w-[18px] rotate-45":"w-[18px]"}`}),a.jsx("span",{className:`absolute right-0 top-[6px] h-px bg-current transition-all duration-300 ${o?"w-0 opacity-0":"w-[12px] opacity-100"}`}),a.jsx("span",{className:`absolute bottom-0 right-0 h-px bg-current transition-all duration-300 ${o?"bottom-[7px] w-[18px] -rotate-45":"w-[18px]"}`})]})})]})}),a.jsxs("div",{id:"fnar-mobile-menu",dir:"rtl","aria-hidden":!o,className:`
          fixed inset-0 z-[90] overflow-y-auto
          bg-[#0B1729] transition-[opacity,visibility]
          duration-500 lg:hidden
          ${o?"visible opacity-100":"invisible pointer-events-none opacity-0"}
        `,children:[a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 opacity-[0.32]",style:{backgroundImage:"linear-gradient(rgba(132,164,177,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.07) 1px, transparent 1px)",backgroundSize:"72px 72px"}}),a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -left-[30%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#84A4B1]/10 blur-[120px]"}),a.jsxs("div",{className:"relative flex min-h-full flex-col px-7 pb-8 pt-[110px]",children:[a.jsxs("div",{className:"mb-7 flex items-center gap-3",children:[a.jsx("span",{className:"h-px w-7 bg-[#84A4B1]/60"}),a.jsx("span",{className:"font-sans text-[9px] font-medium tracking-[0.28em] text-[#84A4B1]",children:"FNAR / NAVIGATION"})]}),a.jsx("div",{className:"flex flex-1 flex-col",children:b0.map((h,x)=>{const v=h.type==="route"&&r.pathname===h.href;return a.jsxs("a",{href:h.href,tabIndex:o?0:-1,"aria-current":v?"page":void 0,onClick:w=>g(w,h),className:`
                    group flex items-center justify-between
                    border-b border-[#F3F3F1]/[0.08]
                    py-[18px] font-arabic
                    text-[clamp(1.65rem,7vw,2.5rem)]
                    font-medium transition-colors duration-300
                    hover:text-[#84A4B1]
                    ${v?"text-[#84A4B1]":"text-[#F3F3F1]"}
                  `,children:[a.jsx("span",{children:h.label}),a.jsx("span",{className:"font-sans text-[9px] font-normal tracking-[0.18em] text-[#84A4B1]/55",children:String(x+1).padStart(2,"0")})]},h.href)})}),a.jsx("div",{className:"mt-6",children:d&&p?a.jsxs("div",{className:"rounded-[16px] border border-[#F3F3F1]/[0.08] bg-[#F3F3F1]/[0.02] p-5",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-full bg-[#84A4B1]/15 font-sans text-[13px] font-bold text-[#84A4B1]",children:p.displayName.trim().split(/\s+/).slice(0,2).map(h=>h[0]).join("").toUpperCase().slice(0,2)||"؟"}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("p",{className:"truncate font-arabic text-[14px] font-semibold text-[#F3F3F1]",children:p.displayName}),a.jsx("p",{className:"truncate font-arabic text-[10px] text-[#F3F3F1]/35",children:p.email})]})]}),a.jsxs("div",{className:"mt-4 space-y-1",children:[a.jsxs("button",{type:"button",tabIndex:o?0:-1,onClick:()=>y("/academy"),className:"flex w-full items-center justify-between rounded-lg px-3 py-3 font-arabic text-[13px] text-[#F3F3F1]/70 transition-colors hover:bg-[#F3F3F1]/[0.04] hover:text-[#F3F3F1]",children:["الأكاديمية",a.jsx("span",{className:"text-[10px] text-[#84A4B1]/50",children:"←"})]}),a.jsxs("button",{type:"button",tabIndex:o?0:-1,onClick:()=>y("/academy/progress"),className:"flex w-full items-center justify-between rounded-lg px-3 py-3 font-arabic text-[13px] text-[#F3F3F1]/70 transition-colors hover:bg-[#F3F3F1]/[0.04] hover:text-[#F3F3F1]",children:["تقدّمي",a.jsx("span",{className:"text-[10px] text-[#84A4B1]/50",children:"←"})]}),a.jsxs("button",{type:"button",tabIndex:o?0:-1,onClick:()=>y("/academy/profile"),className:"flex w-full items-center justify-between rounded-lg px-3 py-3 font-arabic text-[13px] text-[#F3F3F1]/70 transition-colors hover:bg-[#F3F3F1]/[0.04] hover:text-[#F3F3F1]",children:["ملفي الشخصي",a.jsx("span",{className:"text-[10px] text-[#84A4B1]/50",children:"←"})]}),a.jsx("div",{className:"my-1 border-t border-[#F3F3F1]/[0.08]"}),a.jsxs("button",{type:"button",tabIndex:o?0:-1,onClick:m,className:"flex w-full items-center justify-between rounded-lg px-3 py-3 font-arabic text-[13px] text-[#F3F3F1]/50 transition-colors hover:bg-red-500/10 hover:text-red-400",children:["تسجيل الخروج",a.jsx("span",{className:"text-[10px] text-[#F3F3F1]/30",children:"←"})]})]})]}):a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{type:"button",tabIndex:o?0:-1,onClick:()=>y("/login"),className:"flex-1 rounded-full border border-[#F3F3F1]/15 py-3 font-arabic text-[13px] font-medium text-[#F3F3F1]/80 transition-colors hover:border-[#84A4B1]/40 hover:text-[#F3F3F1]",children:"دخول"}),a.jsx("button",{type:"button",tabIndex:o?0:-1,onClick:()=>y("/signup"),className:"flex-1 rounded-full bg-[#F3F3F1] py-3 font-arabic text-[13px] font-semibold text-[#1D2C4F]",children:"إنشاء حساب"})]})}),a.jsxs("div",{className:"mt-6",children:[a.jsxs("a",{href:"/program",tabIndex:o?0:-1,onClick:h=>g(h,{href:"/program",type:"route"}),className:"group flex w-full items-center justify-between rounded-full bg-[#F3F3F1] px-6 py-[15px] font-arabic text-[14px] font-semibold text-[#1D2C4F]",children:[a.jsx("span",{children:"اكتشف البرنامج"}),a.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-[#1D2C4F]/15 text-[10px] transition-transform duration-300 group-hover:-translate-x-1",children:"←"})]}),a.jsxs("div",{className:"mt-5 flex items-center justify-between text-[9px] text-[#F3F3F1]/35",children:[a.jsx("span",{children:"FNAR"}),a.jsx("span",{className:"font-sans tracking-[0.16em]",children:"KNOWLEDGE BEFORE DECISION"})]})]})]})]})]})}const za=[[95,150,2.5],[170,90,2],[220,190,3],[305,115,2],[350,235,3.5],[430,165,2.2],[515,95,2],[560,245,3],[650,150,2.4],[720,235,2],[125,330,2],[245,315,2.5],[390,345,3],[520,330,2],[665,350,2.5],[760,315,2]],l3=[[0,2],[1,2],[2,3],[2,4],[3,4],[3,6],[4,5],[4,11],[4,12],[5,6],[5,7],[6,8],[7,8],[7,13],[8,9],[8,14],[10,11],[11,12],[12,13],[13,14],[14,15]];function u3(){return a.jsxs("svg",{viewBox:"0 0 840 470",className:"h-full w-full overflow-visible",fill:"none","aria-hidden":"true",children:[a.jsxs("defs",{children:[a.jsxs("radialGradient",{id:"signalFog",cx:"50%",cy:"50%",r:"50%",children:[a.jsx("stop",{offset:"0%",stopColor:"#84A4B1",stopOpacity:".16"}),a.jsx("stop",{offset:"100%",stopColor:"#84A4B1",stopOpacity:"0"})]}),a.jsx("filter",{id:"signalGlow",x:"-200%",y:"-200%",width:"500%",height:"500%",children:a.jsx("feGaussianBlur",{stdDeviation:"5"})})]}),a.jsx("ellipse",{"data-signal-fog":!0,cx:"410",cy:"235",rx:"310",ry:"205",fill:"url(#signalFog)"}),a.jsxs("g",{"data-signal-grid":!0,stroke:"#84A4B1",strokeOpacity:".07",strokeWidth:".7",children:[[110,190,270,350].map(t=>a.jsx("path",{d:`M35 ${t} H805`},t)),[120,240,360,480,600,720].map(t=>a.jsx("path",{d:`M${t} 40 V430`},t))]}),a.jsx("g",{stroke:"#84A4B1",strokeWidth:"1",children:l3.map(([t,e],r)=>a.jsx("path",{"data-signal-link":!0,d:`M${za[t][0]} ${za[t][1]} L${za[e][0]} ${za[e][1]}`,strokeOpacity:r%3===0?.28:.16},r))}),a.jsx("g",{children:za.map(([t,e,r],n)=>a.jsxs("g",{"data-signal-node":!0,children:[a.jsx("circle",{cx:t,cy:e,r:r*5,fill:"#84A4B1",fillOpacity:".035",filter:"url(#signalGlow)"}),a.jsx("circle",{cx:t,cy:e,r,fill:n===4||n===12?"#F3F3F1":"#84A4B1",fillOpacity:n===4||n===12?.9:.55})]},n))}),a.jsxs("g",{"data-signal-orbits":!0,stroke:"#84A4B1",strokeOpacity:".13",strokeWidth:".8",children:[a.jsx("ellipse",{cx:"410",cy:"235",rx:"190",ry:"118"}),a.jsx("ellipse",{cx:"410",cy:"235",rx:"265",ry:"165",strokeDasharray:"3 11"})]})]})}function c3(){return a.jsxs("svg",{viewBox:"0 0 420 420",className:"h-full w-full overflow-visible",fill:"none","aria-hidden":"true",children:[a.jsx("defs",{children:a.jsxs("radialGradient",{id:"coreGlow",cx:"50%",cy:"50%",r:"50%",children:[a.jsx("stop",{offset:"0%",stopColor:"#F3F3F1",stopOpacity:".22"}),a.jsx("stop",{offset:"38%",stopColor:"#84A4B1",stopOpacity:".12"}),a.jsx("stop",{offset:"100%",stopColor:"#84A4B1",stopOpacity:"0"})]})}),a.jsx("circle",{"data-core-glow":!0,cx:"210",cy:"210",r:"175",fill:"url(#coreGlow)"}),a.jsxs("g",{"data-core-rings":!0,stroke:"#84A4B1",fill:"none",children:[a.jsx("circle",{cx:"210",cy:"210",r:"132",strokeOpacity:".13"}),a.jsx("circle",{cx:"210",cy:"210",r:"94",strokeOpacity:".22",strokeDasharray:"2 8"}),a.jsx("circle",{cx:"210",cy:"210",r:"54",strokeOpacity:".34"})]}),a.jsxs("g",{"data-core-axes":!0,stroke:"#84A4B1",strokeOpacity:".18",children:[a.jsx("path",{d:"M210 35 V385"}),a.jsx("path",{d:"M35 210 H385"}),a.jsx("path",{d:"M86 86 L334 334"}),a.jsx("path",{d:"M334 86 L86 334"})]}),a.jsxs("g",{"data-core-mark":!0,children:[a.jsx("path",{d:"M210 142 L270 199 L210 254 L150 199 Z",stroke:"#F3F3F1",strokeOpacity:".72",strokeWidth:"1.4"}),a.jsx("path",{d:"M210 164 L246 199 L210 232 L174 199 Z",stroke:"#84A4B1",strokeOpacity:".8",strokeWidth:"1.3"}),a.jsx("circle",{cx:"210",cy:"199",r:"5",fill:"#84A4B1"})]}),a.jsxs("g",{"data-core-ticks":!0,stroke:"#84A4B1",strokeOpacity:".48",children:[a.jsx("path",{d:"M210 66 V80"}),a.jsx("path",{d:"M210 340 V354"}),a.jsx("path",{d:"M66 210 H80"}),a.jsx("path",{d:"M340 210 H354"})]})]})}function d3(){return a.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden pointer-events-none","aria-hidden":"true",children:[a.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:"url('/images/fnar-design3-hero.svg')",backgroundPosition:"center center",transform:"scale(1.015)"}}),a.jsx("div",{className:"absolute inset-y-0 left-0 w-[64%]",style:{background:"linear-gradient(90deg, rgba(9,22,42,.58) 0%, rgba(13,30,53,.43) 38%, rgba(15,34,58,.18) 72%, transparent 100%)"}}),a.jsx("div",{className:"absolute inset-y-0 right-0 w-[47%]",style:{background:"linear-gradient(270deg, rgba(10,24,45,.62) 0%, rgba(13,29,51,.38) 48%, transparent 100%)"}}),a.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at 57% 61%, transparent 0%, transparent 14%, rgba(8,20,38,.06) 31%, rgba(7,17,33,.17) 100%)"}}),a.jsx("div",{className:"absolute inset-0 hidden opacity-[0.055] md:block",style:{backgroundImage:"linear-gradient(rgba(132,164,177,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.16) 1px, transparent 1px)",backgroundSize:"92px 92px",maskImage:"linear-gradient(to right, black 0%, black 48%, transparent 76%)",WebkitMaskImage:"linear-gradient(to right, black 0%, black 48%, transparent 76%)"}}),a.jsx("div",{className:"absolute inset-x-0 bottom-0 h-[38%]",style:{background:"linear-gradient(to top, rgba(5,14,28,.48) 0%, rgba(7,18,34,.16) 52%, transparent 100%)"}}),a.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(90deg, rgba(3,11,24,.22), transparent 20%, transparent 78%, rgba(3,11,24,.26))"}}),a.jsx("div",{className:"absolute inset-0 md:hidden",style:{background:"linear-gradient(180deg, rgba(8,20,38,.16), rgba(8,20,38,.42))"}})]})}E.registerPlugin(Y);const fd=["معلومات","تحليلات","توصيات","آراء","ضوضاء","أخبار","مؤشرات","تناقضات","مدارس مختلفة"],j0=[{left:"7%",top:"21%",depth:.9,size:"15px"},{left:"18%",top:"34%",depth:.55,size:"12px"},{left:"5%",top:"53%",depth:.7,size:"13px"},{left:"27%",top:"68%",depth:.8,size:"14px"},{left:"45%",top:"17%",depth:.45,size:"11px"},{left:"57%",top:"72%",depth:.65,size:"12px"},{left:"73%",top:"29%",depth:.75,size:"13px"},{left:"80%",top:"58%",depth:.5,size:"11px"},{left:"36%",top:"82%",depth:.4,size:"11px"}];function p3(){const t=b.useRef(null),e=$r(),r=b.useMemo(()=>{const i=Bl!=null&&Bl.length?Bl.map(s=>s.text):fd;return j0.map((s,o)=>i[o%i.length]??fd[o%fd.length])},[]);b.useEffect(()=>{const i=t.current;if(!i)return;if(e){E.set(i.querySelectorAll("[data-hero-enter]"),{autoAlpha:1,x:0,y:0,scale:1,rotate:0,filter:"blur(0px)"}),E.set(i.querySelectorAll("[data-hero-label]"),{autoAlpha:.48,filter:"blur(0px)"}),E.set(i.querySelector("[data-signal-field]"),{autoAlpha:1});return}let s;const o=E.context(()=>{if(E.set("[data-hero-copy]",{autoAlpha:0,y:26,filter:"blur(0px)"}),E.set("[data-hero-label]",{autoAlpha:0,filter:"blur(5px)"}),E.set("[data-signal-field]",{autoAlpha:1}),E.set("[data-signal-link]",{strokeDasharray:160,strokeDashoffset:160}),E.set("[data-signal-node]",{autoAlpha:0,scale:.45,transformOrigin:"center"}),E.set("[data-core]",{autoAlpha:0,scale:.72,rotate:-7}),E.set("[data-core-mark]",{scale:.6,transformOrigin:"center"}),E.set("[data-resolution-copy]",{autoAlpha:0,y:24,filter:"blur(7px)"}),E.set("[data-hero-transition]",{autoAlpha:0,visibility:"hidden",clipPath:"circle(0% at 42% 58%)"}),E.timeline({defaults:{ease:"power3.out"}}).to("[data-hero-label]",{autoAlpha:.48,filter:"blur(0px)",duration:1.1,stagger:.06},0).to("[data-signal-node]",{autoAlpha:1,scale:1,duration:.8,stagger:{each:.025,from:"random"}},.15).to("[data-signal-link]",{strokeDashoffset:0,duration:1.3,stagger:.025,ease:"power2.inOut"},.3).to("[data-core]",{autoAlpha:1,scale:1,rotate:0,duration:1.4},.45).to("[data-hero-copy]",{autoAlpha:1,y:0,filter:"blur(0px)",duration:1,stagger:.09},.48),E.to("[data-core-rings]",{rotate:360,transformOrigin:"center",duration:70,repeat:-1,ease:"none"}),E.to("[data-core-glow]",{scale:1.12,opacity:.72,transformOrigin:"center",duration:4.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),E.to("[data-signal-orbits]",{rotate:-360,transformOrigin:"center",duration:95,repeat:-1,ease:"none"}),i.querySelectorAll("[data-hero-label]").forEach((c,d)=>{E.to(c,{x:(d%2?-1:1)*(6+d%4),y:d%3===0?-7:6,duration:5+d%5,repeat:-1,yoyo:!0,ease:"sine.inOut"})}),window.matchMedia("(pointer: fine)").matches){const c=i.querySelector("[data-signal-field]"),d=i.querySelector("[data-core]"),p=i.querySelector("[data-copy-wrap]"),f=c?E.quickTo(c,"x",{duration:1.2,ease:"power2.out"}):null,m=c?E.quickTo(c,"y",{duration:1.2,ease:"power2.out"}):null,y=d?E.quickTo(d,"x",{duration:1.4,ease:"power2.out"}):null,g=d?E.quickTo(d,"y",{duration:1.4,ease:"power2.out"}):null,_=p?E.quickTo(p,"x",{duration:1.6,ease:"power2.out"}):null,h=v=>{if(window.scrollY>i.offsetTop+120)return;const w=i.getBoundingClientRect(),N=((v.clientX-w.left)/w.width-.5)*2,k=((v.clientY-w.top)/w.height-.5)*2;f==null||f(N*-14),m==null||m(k*-9),y==null||y(N*7),g==null||g(k*5),_==null||_(N*3)},x=()=>{f==null||f(0),m==null||m(0),y==null||y(0),g==null||g(0),_==null||_(0)};i.addEventListener("pointermove",h),i.addEventListener("pointerleave",x),s=()=>{i.removeEventListener("pointermove",h),i.removeEventListener("pointerleave",x)}}if(window.matchMedia("(min-width: 768px)").matches){const c=E.timeline({scrollTrigger:{trigger:i,start:"top top",end:"+=370%",pin:!0,scrub:1.45,anticipatePin:1,invalidateOnRefresh:!0}});c.to({},{duration:.24}),c.to("[data-hero-copy]",{autoAlpha:0,y:-24,filter:"blur(5px)",duration:.16,ease:"none"},.24).to("[data-scroll-cue]",{autoAlpha:0,duration:.06,ease:"none"},.24).to("[data-signal-field]",{scale:1.075,xPercent:-2,autoAlpha:.92,duration:.18,ease:"none"},.25).to("[data-information-layer]",{autoAlpha:.78,duration:.14,ease:"none"},.25).to("[data-signal-field]",{scale:.9,xPercent:7,yPercent:1,autoAlpha:.68,duration:.23,ease:"none"},.46).to("[data-core]",{scale:1.28,xPercent:10,duration:.23,ease:"none"},.46).to("[data-hero-label]",{autoAlpha:.12,filter:"blur(3px)",duration:.2,stagger:{each:.014,from:"random"},ease:"none"},.48).to("[data-hero-label]",{autoAlpha:0,duration:.1,ease:"none"},.67).to("[data-information-layer]",{autoAlpha:0,duration:.11,ease:"none"},.68).to("[data-signal-field]",{autoAlpha:.22,scale:.82,xPercent:10,duration:.15,ease:"none"},.68).to("[data-core]",{scale:1.5,xPercent:18,duration:.16,ease:"none"},.68).set("[data-hero-label]",{autoAlpha:0},.785).set("[data-information-layer]",{autoAlpha:0},.785).set("[data-signal-field]",{autoAlpha:.22},.785).fromTo("[data-resolution-copy]",{autoAlpha:0,y:24,filter:"blur(7px)"},{autoAlpha:1,y:0,filter:"blur(0px)",duration:.11,ease:"none"},.79).to({},{duration:.12}).to("[data-hero-transition]",{autoAlpha:1,visibility:"visible",clipPath:"circle(150% at 42% 58%)",duration:.085,ease:"none"},.915).to("[data-resolution-copy]",{autoAlpha:0,y:-14,duration:.055,ease:"none"},.925).to("[data-core]",{autoAlpha:0,scale:1.66,duration:.065,ease:"none"},.925).to("[data-signal-field]",{autoAlpha:0,duration:.06,ease:"none"},.925).set("[data-hero-label], [data-information-layer]",{autoAlpha:0},.924)}else E.timeline({scrollTrigger:{trigger:i,start:"top top",end:"bottom top",scrub:.8}}).to("[data-hero-copy]",{autoAlpha:0,y:-30},0).to("[data-core]",{scale:1.18},0).to("[data-signal-field]",{autoAlpha:.28,scale:1.04},0).to("[data-information-layer]",{autoAlpha:0},.48).to("[data-hero-label]",{autoAlpha:0},.48).to("[data-hero-transition]",{autoAlpha:1,visibility:"visible",clipPath:"circle(150% at 42% 58%)"},.76);requestAnimationFrame(()=>Y.refresh())},i);return()=>{s==null||s(),o.revert()}},[e]);const n=i=>s=>{var o;s.preventDefault(),(o=document.querySelector(i))==null||o.scrollIntoView({behavior:e?"auto":"smooth"})};return a.jsxs("section",{ref:t,id:"hero",lang:"ar",dir:"rtl",className:"relative isolate h-[100svh] min-h-[720px] w-full overflow-hidden bg-[#1D2C4F]",children:[a.jsx(d3,{}),a.jsx("div",{"data-information-layer":!0,className:"pointer-events-none absolute inset-0 z-[4] hidden md:block",children:j0.map((i,s)=>a.jsx("span",{"data-hero-label":!0,"data-hero-enter":!0,className:"absolute font-arabic text-[#F3F3F1] opacity-0",style:{left:i.left,top:i.top,fontSize:i.size},children:r[s]},s))}),a.jsx("div",{"data-signal-field":!0,className:"absolute left-[-7%] top-[12%] z-[6] hidden h-[74%] w-[64%] md:block",style:{willChange:"transform, opacity"},children:a.jsx(u3,{})}),a.jsx("div",{"data-core":!0,"data-hero-enter":!0,className:"absolute left-[31%] top-1/2 z-[8] h-[min(52vw,590px)] w-[min(52vw,590px)] -translate-x-1/2 -translate-y-1/2 opacity-0 md:left-[36%]",style:{willChange:"transform, opacity"},children:a.jsx(c3,{})}),a.jsx("div",{className:"pointer-events-none absolute inset-0 z-[24] flex items-center",children:a.jsx("div",{className:"mx-auto w-full max-w-[1500px] px-6 md:px-8 lg:px-12 xl:px-16",children:a.jsxs("div",{"data-copy-wrap":!0,className:`\r
              pointer-events-auto\r
              mx-auto\r
              mt-[32vh]\r
              max-w-[640px]\r
              text-center\r
              md:mx-0\r
              md:mr-0\r
              md:ml-auto\r
              md:mt-0\r
              md:w-[44%]\r
              md:text-right\r
            `,children:[a.jsxs("div",{"data-hero-copy":!0,"data-hero-enter":!0,className:`\r
                mb-5\r
                flex\r
                translate-y-[26px]\r
                items-center\r
                justify-center\r
                gap-3\r
                opacity-0\r
                md:justify-start\r
              `,children:[a.jsx("span",{className:"h-px w-9 bg-[#84A4B1]/60"}),a.jsx("span",{className:"font-arabic text-[12px] font-medium tracking-[0.08em] text-[#F3F3F1]/55",children:"من التشتيت إلى القرار"})]}),a.jsxs("h1",{className:"font-arabic font-bold leading-[0.98] tracking-[-0.035em]",children:[a.jsx("span",{"data-hero-copy":!0,"data-hero-enter":!0,className:`\r
                  block\r
                  translate-y-[26px]\r
                  pb-[0.08em]\r
                  text-[clamp(3rem,10vw,4.7rem)]\r
                  text-[#F3F3F1]\r
                  opacity-0\r
                  md:text-[clamp(4rem,6.6vw,7.5rem)]\r
                `,children:"من الغموض"}),a.jsx("span",{"data-hero-copy":!0,"data-hero-enter":!0,className:`\r
                  block\r
                  translate-y-[26px]\r
                  pb-[0.12em]\r
                  text-[clamp(3rem,10vw,4.7rem)]\r
                  text-[#84A4B1]\r
                  opacity-0\r
                  md:text-[clamp(4rem,6.6vw,7.5rem)]\r
                `,children:"إلى الفهم"})]}),a.jsx("p",{"data-hero-copy":!0,"data-hero-enter":!0,className:`\r
                mx-auto\r
                mt-5\r
                max-w-[560px]\r
                translate-y-[26px]\r
                font-arabic\r
                text-[14px]\r
                leading-[1.9]\r
                text-[#F3F3F1]/68\r
                opacity-0\r
                md:mx-0\r
                md:mr-0\r
                md:ml-auto\r
                md:mt-6\r
                md:text-[16px]\r
                lg:text-[17px]\r
              `,children:"منهج متكامل لبناء الفهم، إدارة المخاطر، وصناعة القرار المستقل في الأسواق المالية."}),a.jsxs("div",{"data-hero-copy":!0,"data-hero-enter":!0,className:`\r
                mt-7\r
                flex\r
                translate-y-[26px]\r
                flex-wrap\r
                items-center\r
                justify-center\r
                gap-5\r
                opacity-0\r
                md:mt-9\r
                md:justify-start\r
                md:gap-6\r
              `,children:[a.jsxs("a",{href:"#paths",onClick:n("#paths"),className:`\r
                  group\r
                  inline-flex\r
                  min-w-[158px]\r
                  items-center\r
                  justify-center\r
                  gap-3\r
                  rounded-full\r
                  bg-[#F3F3F1]\r
                  px-7\r
                  py-3.5\r
                  text-[14px]\r
                  font-semibold\r
                  text-[#1D2C4F]\r
                  transition-all\r
                  duration-300\r
                  hover:bg-[#84A4B1]\r
                `,"data-cursor":"hover",children:[a.jsx("span",{children:"ابدأ مع فنر"}),a.jsx("span",{className:"transition-transform duration-300 group-hover:-translate-x-1",children:"←"})]}),a.jsxs("a",{href:"#paths",onClick:n("#paths"),className:`\r
                  group\r
                  inline-flex\r
                  items-center\r
                  gap-3\r
                  border-b\r
                  border-[#F3F3F1]/25\r
                  pb-1.5\r
                  text-[14px]\r
                  font-medium\r
                  text-[#F3F3F1]/72\r
                  transition-colors\r
                  duration-300\r
                  hover:border-[#84A4B1]\r
                  hover:text-[#84A4B1]\r
                `,"data-cursor":"hover",children:[a.jsx("span",{children:"استكشف المنهج"}),a.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-current text-[10px] transition-transform duration-300 group-hover:-translate-x-1",children:"←"})]})]})]})})}),a.jsxs("div",{"data-resolution-copy":!0,className:`\r
          pointer-events-none\r
          absolute\r
          right-[7vw]\r
          top-1/2\r
          z-[18]\r
          hidden\r
          w-[38vw]\r
          max-w-[600px]\r
          -translate-y-1/2\r
          text-right\r
          opacity-0\r
          md:block\r
        `,children:[a.jsx("span",{className:"text-[10px] tracking-[0.28em] text-[#84A4B1]",children:"وضوح"}),a.jsx("p",{className:"mt-3 font-arabic text-[clamp(2.4rem,4.8vw,5rem)] font-bold leading-[1.08] text-[#F3F3F1]",children:"حين تتضح الصورة."})]}),a.jsx("div",{className:"pointer-events-none absolute inset-0 z-[12]",style:{background:"linear-gradient(180deg,rgba(7,15,29,.28),transparent 25%,transparent 68%,rgba(7,15,29,.52)),linear-gradient(90deg,rgba(7,15,29,.2),transparent 28%,transparent 78%,rgba(7,15,29,.18))"}}),a.jsx("div",{"data-hero-transition":!0,className:"pointer-events-none invisible absolute inset-0 z-[35] bg-[#F3F3F1] opacity-0",style:{clipPath:"circle(0% at 42% 58%)"}}),a.jsxs("div",{"data-scroll-cue":!0,className:"pointer-events-none absolute bottom-5 left-1/2 z-[40] hidden -translate-x-1/2 flex-col items-center gap-2 md:flex",children:[a.jsx("span",{className:"text-[9px] font-medium tracking-[0.28em] text-[#F3F3F1]/35",children:"مرر"}),a.jsx("div",{className:"h-10 w-px bg-gradient-to-b from-[#84A4B1]/60 to-transparent"})]})]})}E.registerPlugin(Y);const f3=[{text:"معلومات",x:12,y:20,size:"text-lg",opacity:.58},{text:"تحليلات",x:28,y:36,size:"text-sm",opacity:.42},{text:"توصيات",x:8,y:54,size:"text-base",opacity:.5},{text:"آراء",x:76,y:23,size:"text-sm",opacity:.46},{text:"ضوضاء",x:68,y:45,size:"text-xl",opacity:.58},{text:"أخبار",x:87,y:61,size:"text-sm",opacity:.4},{text:"مؤشرات",x:23,y:71,size:"text-base",opacity:.44},{text:"تناقضات",x:72,y:76,size:"text-sm",opacity:.38},{text:"مدارس مختلفة",x:43,y:19,size:"text-sm",opacity:.36},{text:"قراءات",x:52,y:69,size:"text-base",opacity:.42},{text:"توقعات",x:91,y:34,size:"text-sm",opacity:.34},{text:"بيانات",x:36,y:58,size:"text-lg",opacity:.5}],Ba=[{title:"التشتيت",description:"معلومات كثيرة. اتجاهات متضاربة. صورة غير مكتملة."},{title:"الربط",description:"ربط المفاهيم والأدوات لبناء صورة أكثر وضوحاً."},{title:"التحليل",description:"قراءة العلاقات بمنهج نقدي، لا بردّة فعل."},{title:"الفهم",description:"حين تتضح الصورة، يصبح التعقيد أبسط."},{title:"القرار",description:"قرار مستقل. واعٍ. ومنضبط."}],Il=(t,e=0,r=1)=>Math.max(e,Math.min(r,t));function h3(){const t=b.useRef(null),e=b.useRef(null),r=$r();return b.useEffect(()=>{const n=t.current,i=e.current;if(!n||!i)return;const s=i.getContext("2d");if(!s)return;let o=0,l=0,u=0,c=[],d=r?1:0,p=d;const f=Math.min(window.devicePixelRatio||1,2),m=()=>{const h=o<768?36:72;c=Array.from({length:h},()=>{const x=Math.random()*o,v=l*.16+Math.random()*l*.68;return{x,y:v,originX:x,originY:v,phase:Math.random()*Math.PI*2,speed:.4+Math.random()*.8,radius:.6+Math.random()*1.4}})},y=()=>{const h=n.getBoundingClientRect();o=h.width,l=h.height,i.width=Math.floor(o*f),i.height=Math.floor(l*f),i.style.width=`${o}px`,i.style.height=`${l}px`,s.setTransform(f,0,0,f,0,0),m()},g=h=>{s.clearRect(0,0,o,l),p+=(d-p)*.07;const x=o/2,v=l*.5,w=Il((p-.12)/.55),N=Il((p-.68)/.25),k=c.map(C=>{const L=(1-w)*13,O=Math.sin(h*4e-4*C.speed+C.phase)*L,V=Math.cos(h*33e-5*C.speed+C.phase)*L*.7,I=Math.min(o,l)*(.22-w*.12),H=C.phase+C.originX*.003,Q=x+Math.cos(H)*I,W=v+Math.sin(H)*I*.58;return{x:C.originX+(Q-C.originX)*w+O,y:C.originY+(W-C.originY)*w+V}}),j=Il((p-.16)/.22),F=1-Il((p-.6)/.18),A=j*F;if(A>.01){const C=o<768?72:105;for(let L=0;L<k.length;L++)for(let O=L+1;O<Math.min(L+10,k.length);O++){const V=k[L],I=k[O],H=V.x-I.x,Q=V.y-I.y,W=Math.sqrt(H*H+Q*Q);if(W>C)continue;const D=(1-W/C)*A*.22;s.strokeStyle=`rgba(132,164,177,${D})`,s.lineWidth=.7,s.beginPath(),s.moveTo(V.x,V.y),s.lineTo(I.x,I.y),s.stroke()}}k.forEach((C,L)=>{const O=c[L],V=(.18+w*.3)*(1-N*.9);s.fillStyle=`rgba(29,44,79,${V})`,s.beginPath(),s.arc(C.x,C.y,O.radius,0,Math.PI*2),s.fill()}),u=requestAnimationFrame(g)};y(),window.addEventListener("resize",y);const _=Y.create({trigger:n,start:"top top",end:"bottom bottom",onUpdate:h=>{d=h.progress}});return r?(g(0),cancelAnimationFrame(u)):u=requestAnimationFrame(g),()=>{window.removeEventListener("resize",y),cancelAnimationFrame(u),_.kill()}},[r]),b.useEffect(()=>{const n=t.current;if(!n||r)return;const i=E.context(()=>{const s=E.utils.toArray("[data-chaos-fragment]",n),o=E.utils.toArray("[data-method-scene]",n),l=E.utils.toArray("[data-progress-item]",n),u=E.utils.toArray("[data-network-node]",n);E.set(o,{autoAlpha:0}),E.set(o[0],{autoAlpha:1}),E.set("[data-method-eyebrow]",{autoAlpha:0,y:-12}),E.set("[data-method-final]",{autoAlpha:0,y:30}),E.set("[data-analysis-grid]",{autoAlpha:0,scale:1.08}),E.set("[data-understanding-ring]",{autoAlpha:0,scale:1.35,rotate:-4}),E.set("[data-understanding-inner]",{scale:.72,transformOrigin:"center"}),E.set("[data-understanding-axis]",{scale:0,transformOrigin:"center"}),E.set("[data-understanding-tick]",{autoAlpha:0}),E.set("[data-understanding-glow]",{autoAlpha:0,scale:.6}),E.set("[data-decision-mark]",{autoAlpha:0}),E.set("[data-decision-path]",{strokeDasharray:500,strokeDashoffset:500}),E.set("[data-decision-origins]",{autoAlpha:0}),E.set("[data-decision-node]",{autoAlpha:0,scale:.4,transformOrigin:"450px 270px"}),E.set("[data-decision-resolved-path]",{strokeDasharray:240,strokeDashoffset:240}),E.set("[data-decision-destination]",{autoAlpha:0,scale:.4,transformOrigin:"450px 505px"}),E.set("[data-decision-glow]",{autoAlpha:0,scale:.6,transformOrigin:"450px 270px"}),E.set(u,{scale:0,transformOrigin:"center"}),E.set("[data-network-line]",{strokeDasharray:500,strokeDashoffset:500}),E.set("[data-progress-fill]",{scaleX:0,transformOrigin:"right center"}),l.forEach((p,f)=>{E.set(p,{opacity:f===0?1:.35})}),s.forEach((p,f)=>{E.set(p,{x:E.utils.random(-45,45),y:E.utils.random(-35,35),rotate:E.utils.random(-4,4),filter:f%4===0?"blur(2px)":"blur(0px)"})});const c=E.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:n,start:"top top",end:"bottom bottom",scrub:1.35}});c.to("[data-method-eyebrow]",{autoAlpha:1,y:0,duration:.05,ease:"power2.out"},0),c.fromTo("[data-scene-0] [data-scene-copy]",{y:28,autoAlpha:0},{y:0,autoAlpha:1,duration:.07,ease:"power3.out"},.02),c.to(s,{x:()=>E.utils.random(-80,80),y:()=>E.utils.random(-50,50),rotate:()=>E.utils.random(-5,5),duration:.14,stagger:.001},.02),c.to("[data-scene-0]",{autoAlpha:0,scale:.97,duration:.055},.18),c.to(s,{x:0,y:0,rotate:0,autoAlpha:.12,filter:"blur(0px)",duration:.1,stagger:.002,ease:"power2.inOut"},.18),c.to("[data-scene-1]",{autoAlpha:1,duration:.04},.22),c.fromTo("[data-scene-1] [data-scene-copy]",{y:24,autoAlpha:0},{y:0,autoAlpha:1,duration:.06,ease:"power3.out"},.23),c.to(u,{scale:1,duration:.07,stagger:.008,ease:"back.out(1.7)"},.24),c.to("[data-network-line]",{strokeDashoffset:0,duration:.12,stagger:.008,ease:"power2.inOut"},.26),c.to("[data-scene-1]",{autoAlpha:0,scale:.96,duration:.05},.39),c.to("[data-scene-2]",{autoAlpha:1,duration:.04},.42),c.fromTo("[data-scene-2] [data-scene-copy]",{y:24,autoAlpha:0},{y:0,autoAlpha:1,duration:.06,ease:"power3.out"},.43),c.to("[data-analysis-grid]",{autoAlpha:1,scale:1,duration:.09,ease:"power2.out"},.43),c.to("[data-analysis-line]",{strokeDashoffset:0,duration:.12,stagger:.01,ease:"power2.inOut"},.46),c.to("[data-scene-2]",{autoAlpha:0,scale:.94,duration:.055},.59),c.to("[data-scene-3]",{autoAlpha:1,duration:.04},.62),c.fromTo("[data-scene-3] [data-scene-copy]",{y:24,autoAlpha:0},{y:0,autoAlpha:1,duration:.06,ease:"power3.out"},.63),c.to("[data-understanding-ring]",{autoAlpha:1,scale:1,duration:.11,ease:"power3.inOut"},.62),c.to("[data-scene-3]",{autoAlpha:0,scale:.96,duration:.06,ease:"power2.inOut"},.76),c.to("[data-scene-4]",{autoAlpha:1,duration:.05},.79),c.fromTo("[data-scene-4] [data-scene-copy]",{y:22,autoAlpha:0},{y:0,autoAlpha:1,duration:.07,ease:"power3.out"},.8),c.to("[data-decision-mark]",{autoAlpha:1,duration:.035},.79),c.to("[data-decision-origins]",{autoAlpha:1,duration:.05,ease:"power2.out"},.8),c.to("[data-decision-path]",{strokeDashoffset:0,duration:.14,stagger:{each:.012,from:"edges"},ease:"power2.inOut"},.82),c.to("[data-decision-node]",{autoAlpha:1,scale:1,duration:.08,ease:"back.out(1.35)"},.9),c.to("[data-decision-glow]",{autoAlpha:1,scale:1,duration:.09,ease:"power2.out"},.9),c.to("[data-decision-path]",{opacity:.12,duration:.07,ease:"power2.out"},.96),c.to("[data-decision-origins]",{autoAlpha:.12,duration:.07},.96),c.to("[data-decision-resolved-path]",{strokeDashoffset:0,duration:.13,ease:"power2.inOut"},.98),c.to("[data-decision-destination]",{autoAlpha:1,scale:1,duration:.07,ease:"back.out(1.5)"},1.09),c.to({},{duration:.22},1.16),c.to("[data-scene-4]",{autoAlpha:0,scale:.97,duration:.08,ease:"power2.inOut"},1.38),c.to("[data-method-visual]",{scale:.9,autoAlpha:.16,duration:.08,ease:"power2.inOut"},1.38),c.to("[data-method-final]",{autoAlpha:1,y:0,duration:.1,ease:"power3.out"},1.45),c.to("[data-progress-fill]",{scaleX:1,duration:1},0);const d=[0,.22,.42,.62,.79];l.forEach((p,f)=>{c.to(p,{opacity:1,duration:.025},d[f]),f>0&&c.to(l[f-1],{opacity:.38,duration:.025},d[f])})},n);return()=>i.revert()},[r]),b.useEffect(()=>{if(!r||!t.current)return;const n=t.current;E.set(n.querySelectorAll("[data-method-scene]"),{display:"none"}),E.set(n.querySelector("[data-method-final]"),{autoAlpha:1,y:0})},[r]),a.jsx("section",{ref:t,id:"methodology",dir:"rtl",className:`\r
        relative\r
        h-[600svh]\r
        bg-cream-100\r
      `,children:a.jsxs("div",{className:`\r
          sticky\r
          top-0\r
          h-[100svh]\r
          overflow-hidden\r
          bg-cream-100\r
        `,children:[a.jsx("canvas",{ref:e,className:`\r
            absolute\r
            inset-0\r
            w-full\r
            h-full\r
            pointer-events-none\r
            opacity-80\r
          `,"aria-hidden":"true"}),a.jsx("div",{"aria-hidden":"true",className:`\r
            absolute\r
            left-1/2\r
            top-[-24rem]\r
            -translate-x-1/2\r
            w-[52rem]\r
            h-[52rem]\r
            rounded-full\r
            bg-turquoise-400/10\r
            blur-[140px]\r
            pointer-events-none\r
          `}),a.jsx("div",{"aria-hidden":"true",className:`\r
            absolute\r
            inset-0\r
            opacity-[0.035]\r
            pointer-events-none\r
            [background-image:linear-gradient(rgba(29,44,79,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(29,44,79,0.8)_1px,transparent_1px)]\r
            [background-size:72px_72px]\r
          `}),a.jsxs("div",{className:`\r
            absolute\r
            z-30\r
            top-8\r
            lg:top-10\r
            right-6\r
            lg:right-10\r
            flex\r
            items-center\r
            gap-4\r
          `,"data-method-eyebrow":!0,children:[a.jsx("span",{className:`\r
              text-[10px]\r
              lg:text-xs\r
              tracking-[0.28em]\r
              text-navy-700/45\r
            `,children:"02"}),a.jsx("span",{className:"w-10 h-px bg-navy-700/20"}),a.jsx("span",{className:`\r
              text-xs\r
              lg:text-sm\r
              font-medium\r
              text-navy-700/70\r
            `,children:"الكشف المنهجي"})]}),a.jsxs("div",{className:`\r
            absolute\r
            inset-0\r
            z-10\r
            flex\r
            items-center\r
            justify-center\r
          `,"data-method-visual":!0,children:[a.jsx("div",{"aria-hidden":"true",className:`\r
              absolute\r
              inset-[8%]\r
              lg:inset-[6%]\r
              pointer-events-none\r
            `,children:f3.map((n,i)=>a.jsx("span",{"data-chaos-fragment":!0,className:`
                  absolute
                  ${n.size}
                  text-navy-700
                  whitespace-nowrap
                  will-change-transform
                `,style:{left:`${n.x}%`,top:`${n.y}%`,opacity:n.opacity},children:n.text},`${n.text}-${i}`))}),a.jsx("div",{"data-method-scene":!0,"data-scene-0":!0,className:`\r
              absolute\r
              inset-0\r
              flex\r
              items-center\r
              justify-center\r
              pointer-events-none\r
            `,children:a.jsxs("div",{"data-scene-copy":!0,className:`\r
                text-center\r
                px-6\r
                max-w-3xl\r
              `,children:[a.jsx("span",{className:"text-xs tracking-[0.25em] text-turquoise-600",children:"01"}),a.jsx("h2",{className:`\r
                  mt-4\r
                  text-[clamp(3.8rem,9vw,8.5rem)]\r
                  leading-[0.95]\r
                  font-bold\r
                  text-navy-700\r
                `,children:"التشتيت"}),a.jsx("p",{className:`\r
                  mt-6\r
                  text-base\r
                  lg:text-xl\r
                  text-navy-500\r
                  max-w-xl\r
                  mx-auto\r
                  leading-relaxed\r
                `,children:Ba[0].description})]})}),a.jsxs("div",{"data-method-scene":!0,"data-scene-1":!0,className:`\r
              absolute\r
              inset-0\r
              flex\r
              items-center\r
              justify-center\r
              pointer-events-none\r
            `,children:[a.jsxs("svg",{viewBox:"0 0 800 500",className:`\r
                absolute\r
                w-[min(86vw,900px)]\r
                h-auto\r
                overflow-visible\r
              `,fill:"none","aria-hidden":"true",children:[a.jsxs("g",{stroke:"#84A4B1",strokeWidth:"1.2",strokeOpacity:"0.65",children:[a.jsx("path",{"data-network-line":!0,d:"M120 170 L315 245"}),a.jsx("path",{"data-network-line":!0,d:"M170 355 L315 245"}),a.jsx("path",{"data-network-line":!0,d:"M315 245 L485 155"}),a.jsx("path",{"data-network-line":!0,d:"M315 245 L520 335"}),a.jsx("path",{"data-network-line":!0,d:"M485 155 L665 235"}),a.jsx("path",{"data-network-line":!0,d:"M520 335 L665 235"})]}),[[120,170],[170,355],[315,245],[485,155],[520,335],[665,235]].map(([n,i],s)=>a.jsxs("g",{"data-network-node":!0,children:[a.jsx("circle",{cx:n,cy:i,r:"8",fill:"#F3F3F1",stroke:"#1D2C4F",strokeOpacity:"0.5"}),a.jsx("circle",{cx:n,cy:i,r:"18",stroke:"#84A4B1",strokeOpacity:"0.18"})]},s))]}),a.jsxs("div",{"data-scene-copy":!0,className:`\r
                relative\r
                z-10\r
                text-center\r
                px-6\r
                max-w-2xl\r
                bg-transparent\r
                py-8\r
                lg:py-10\r
              `,children:[a.jsx("span",{className:"text-xs tracking-[0.25em] text-turquoise-600",children:"02"}),a.jsx("h2",{className:`\r
                  mt-3\r
                  text-[clamp(3.5rem,8vw,7.5rem)]\r
                  leading-none\r
                  font-bold\r
                  text-navy-700\r
                `,children:"الربط"}),a.jsx("p",{className:"mt-5 text-base lg:text-lg text-navy-500 leading-relaxed",children:Ba[1].description})]})]}),a.jsxs("div",{"data-method-scene":!0,"data-scene-2":!0,className:`\r
              absolute\r
              inset-0\r
              flex\r
              items-center\r
              justify-center\r
              pointer-events-none\r
            `,children:[a.jsxs("svg",{"data-analysis-grid":!0,viewBox:"0 0 800 500",className:`\r
                absolute\r
                w-[min(88vw,920px)]\r
                h-auto\r
              `,fill:"none","aria-hidden":"true",children:[a.jsxs("g",{stroke:"#1D2C4F",strokeOpacity:"0.08",strokeWidth:"1",children:[Array.from({length:9}).map((n,i)=>a.jsx("line",{x1:80+i*80,y1:"70",x2:80+i*80,y2:"430"},`v-${i}`)),Array.from({length:6}).map((n,i)=>a.jsx("line",{x1:"80",y1:70+i*72,x2:"720",y2:70+i*72},`h-${i}`))]}),a.jsxs("g",{stroke:"#84A4B1",strokeWidth:"1.4",strokeOpacity:"0.72",children:[a.jsx("path",{"data-analysis-line":!0,strokeDasharray:"600",strokeDashoffset:"600",d:"M120 350 L230 270 L330 300 L430 180 L540 225 L680 125"}),a.jsx("path",{"data-analysis-line":!0,strokeDasharray:"600",strokeDashoffset:"600",d:"M120 385 L245 350 L365 365 L490 285 L680 310",strokeOpacity:"0.38"})]}),a.jsxs("g",{fill:"#1D2C4F",children:[a.jsx("circle",{cx:"120",cy:"350",r:"4"}),a.jsx("circle",{cx:"230",cy:"270",r:"4"}),a.jsx("circle",{cx:"330",cy:"300",r:"4"}),a.jsx("circle",{cx:"430",cy:"180",r:"4"}),a.jsx("circle",{cx:"540",cy:"225",r:"4"}),a.jsx("circle",{cx:"680",cy:"125",r:"4"})]})]}),a.jsxs("div",{"data-scene-copy":!0,className:`\r
                relative\r
                z-10\r
                text-center\r
                px-8\r
                py-9\r
                max-w-2xl\r
                bg-transparent\r
              `,children:[a.jsx("span",{className:"text-xs tracking-[0.25em] text-turquoise-600",children:"03"}),a.jsx("h2",{className:`\r
                  mt-3\r
                  text-[clamp(3.5rem,8vw,7.5rem)]\r
                  leading-none\r
                  font-bold\r
                  text-navy-700\r
                `,children:"التحليل"}),a.jsx("p",{className:"mt-5 text-base lg:text-lg text-navy-500 leading-relaxed",children:Ba[2].description})]})]}),a.jsxs("div",{"data-method-scene":!0,"data-scene-3":!0,className:`\r
              absolute\r
              inset-0\r
              flex\r
              items-center\r
              justify-center\r
              pointer-events-none\r
            `,children:[a.jsxs("div",{"data-understanding-ring":!0,className:`\r
                absolute\r
                left-1/2\r
                top-1/2\r
                w-[min(72vw,560px)]\r
                aspect-square\r
                -translate-x-1/2\r
                -translate-y-1/2\r
              `,"aria-hidden":"true",children:[a.jsx("div",{"data-understanding-glow":!0,className:`\r
                  absolute\r
                  inset-[18%]\r
                  rounded-full\r
                  bg-turquoise-400/[0.08]\r
                  blur-[55px]\r
                `}),a.jsx("div",{"data-understanding-outer":!0,className:`\r
                  absolute\r
                  inset-0\r
                  rounded-full\r
                  border\r
                  border-turquoise-400/35\r
                `}),a.jsx("div",{"data-understanding-inner":!0,className:`\r
                  absolute\r
                  inset-[18%]\r
                  rounded-full\r
                  border\r
                  border-navy-700/[0.10]\r
                `}),a.jsx("div",{"data-understanding-axis":!0,className:`\r
                  absolute\r
                  left-[14%]\r
                  right-[14%]\r
                  top-1/2\r
                  h-px\r
                  -translate-y-1/2\r
                  bg-gradient-to-r\r
                  from-transparent\r
                  via-turquoise-400/30\r
                  to-transparent\r
                `}),a.jsx("div",{"data-understanding-axis":!0,className:`\r
                  absolute\r
                  top-[14%]\r
                  bottom-[14%]\r
                  left-1/2\r
                  w-px\r
                  -translate-x-1/2\r
                  bg-gradient-to-b\r
                  from-transparent\r
                  via-turquoise-400/25\r
                  to-transparent\r
                `}),a.jsx("div",{"data-understanding-tick":!0,className:`\r
                  absolute\r
                  top-[17%]\r
                  left-1/2\r
                  -translate-x-1/2\r
                  w-px\r
                  h-5\r
                  bg-turquoise-600/45\r
                `}),a.jsx("div",{"data-understanding-tick":!0,className:`\r
                  absolute\r
                  bottom-[17%]\r
                  left-1/2\r
                  -translate-x-1/2\r
                  w-px\r
                  h-5\r
                  bg-turquoise-600/45\r
                `}),a.jsx("div",{"data-understanding-tick":!0,className:`\r
                  absolute\r
                  left-[17%]\r
                  top-1/2\r
                  -translate-y-1/2\r
                  h-px\r
                  w-5\r
                  bg-turquoise-600/45\r
                `}),a.jsx("div",{"data-understanding-tick":!0,className:`\r
                  absolute\r
                  right-[17%]\r
                  top-1/2\r
                  -translate-y-1/2\r
                  h-px\r
                  w-5\r
                  bg-turquoise-600/45\r
                `})]}),a.jsxs("div",{"data-scene-copy":!0,className:`\r
                relative\r
                z-10\r
                text-center\r
                px-6\r
                max-w-2xl\r
              `,children:[a.jsx("span",{className:`\r
                  text-xs\r
                  tracking-[0.25em]\r
                  text-turquoise-600\r
                `,children:"04"}),a.jsx("h2",{"data-understanding-title":!0,className:`\r
                  mt-3\r
                  text-[clamp(3.5rem,8vw,7.5rem)]\r
                  leading-none\r
                  font-bold\r
                  text-navy-700\r
                `,children:"الفهم"}),a.jsx("p",{className:`\r
                  mt-5\r
                  text-base\r
                  lg:text-lg\r
                  text-navy-500\r
                  leading-relaxed\r
                `,children:Ba[3].description})]})]}),a.jsxs("div",{"data-method-scene":!0,"data-scene-4":!0,className:`\r
              absolute\r
              inset-0\r
              flex\r
              items-center\r
              justify-center\r
              pointer-events-none\r
            `,children:[a.jsxs("svg",{"data-decision-mark":!0,viewBox:"0 0 900 620",className:`\r
                absolute\r
                left-1/2\r
                top-1/2\r
                w-[min(92vw,1000px)]\r
                h-auto\r
                -translate-x-1/2\r
                -translate-y-1/2\r
                overflow-visible\r
              `,fill:"none","aria-hidden":"true",children:[a.jsx("defs",{children:a.jsxs("radialGradient",{id:"decision-glow",cx:"50%",cy:"50%",r:"50%",children:[a.jsx("stop",{offset:"0%",stopColor:"#84A4B1",stopOpacity:"0.22"}),a.jsx("stop",{offset:"100%",stopColor:"#84A4B1",stopOpacity:"0"})]})}),a.jsx("circle",{"data-decision-glow":!0,cx:"450",cy:"270",r:"155",fill:"url(#decision-glow)"}),a.jsxs("g",{stroke:"#84A4B1",strokeWidth:"1.2",strokeLinecap:"round",children:[a.jsx("path",{"data-decision-path":!0,d:"M100 105 C235 115 320 155 450 270",strokeOpacity:"0.24"}),a.jsx("path",{"data-decision-path":!0,d:"M80 205 C220 205 325 225 450 270",strokeOpacity:"0.38"}),a.jsx("path",{"data-decision-path":!0,d:"M105 365 C245 340 335 305 450 270",strokeOpacity:"0.24"}),a.jsx("path",{"data-decision-path":!0,d:"M800 105 C665 115 580 155 450 270",strokeOpacity:"0.24"}),a.jsx("path",{"data-decision-path":!0,d:"M820 205 C680 205 575 225 450 270",strokeOpacity:"0.38"}),a.jsx("path",{"data-decision-path":!0,d:"M795 365 C655 340 565 305 450 270",strokeOpacity:"0.24"})]}),a.jsxs("g",{"data-decision-origins":!0,fill:"#84A4B1",fillOpacity:"0.45",children:[a.jsx("circle",{cx:"100",cy:"105",r:"3"}),a.jsx("circle",{cx:"80",cy:"205",r:"3"}),a.jsx("circle",{cx:"105",cy:"365",r:"3"}),a.jsx("circle",{cx:"800",cy:"105",r:"3"}),a.jsx("circle",{cx:"820",cy:"205",r:"3"}),a.jsx("circle",{cx:"795",cy:"365",r:"3"})]}),a.jsxs("g",{"data-decision-node":!0,children:[a.jsx("circle",{cx:"450",cy:"270",r:"38",stroke:"#84A4B1",strokeOpacity:"0.18"}),a.jsx("circle",{cx:"450",cy:"270",r:"17",fill:"#F3F3F1",stroke:"#84A4B1",strokeOpacity:"0.75",strokeWidth:"1.4"}),a.jsx("circle",{cx:"450",cy:"270",r:"4",fill:"#84A4B1"})]}),a.jsx("path",{"data-decision-resolved-path":!0,d:"M450 288 L450 490",stroke:"#1D2C4F",strokeWidth:"1.6",strokeLinecap:"round"}),a.jsxs("g",{"data-decision-destination":!0,children:[a.jsx("circle",{cx:"450",cy:"505",r:"5",fill:"#1D2C4F"}),a.jsx("circle",{cx:"450",cy:"505",r:"17",stroke:"#84A4B1",strokeOpacity:"0.3"})]})]}),a.jsxs("div",{"data-scene-copy":!0,className:`\r
                relative\r
                z-10\r
                text-center\r
                px-6\r
                max-w-2xl\r
              `,children:[a.jsx("span",{className:`\r
                  text-xs\r
                  tracking-[0.25em]\r
                  text-turquoise-600\r
                `,children:"05"}),a.jsx("h2",{className:`\r
                  mt-3\r
                  text-[clamp(3.5rem,8vw,7.5rem)]\r
                  leading-none\r
                  font-bold\r
                  text-navy-700\r
                `,children:"القرار"}),a.jsx("p",{className:`\r
                  mt-5\r
                  text-base\r
                  lg:text-lg\r
                  text-navy-500\r
                  leading-relaxed\r
                `,children:Ba[4].description})]})]})]}),a.jsx("div",{"data-method-final":!0,className:`\r
            absolute\r
            inset-0\r
            z-20\r
            flex\r
            items-center\r
            justify-center\r
            pointer-events-none\r
          `,children:a.jsxs("div",{className:"text-center px-6 max-w-4xl",children:[a.jsx("span",{className:`\r
                text-xs\r
                tracking-[0.3em]\r
                text-turquoise-600\r
              `,children:"منهج فنر"}),a.jsxs("h2",{className:`\r
                mt-5\r
                text-[clamp(3rem,7vw,7rem)]\r
                leading-[1.05]\r
                font-bold\r
                text-navy-700\r
              `,children:["من التشتيت",a.jsx("br",{}),"إلى القرار."]}),a.jsx("p",{className:`\r
                mt-7\r
                text-base\r
                lg:text-xl\r
                text-navy-500\r
                leading-relaxed\r
                max-w-xl\r
                mx-auto\r
              `,children:"منهج يحوّل الضوضاء المالية إلى فهم منظم، ثم إلى قرار مستقل."})]})}),a.jsxs("div",{className:`\r
            absolute\r
            z-40\r
            bottom-6\r
            lg:bottom-9\r
            left-6\r
            right-6\r
            lg:left-10\r
            lg:right-10\r
          `,children:[a.jsx("div",{className:`\r
              relative\r
              h-px\r
              bg-navy-700/10\r
              mb-4\r
            `,children:a.jsx("div",{"data-progress-fill":!0,className:`\r
                absolute\r
                inset-y-0\r
                right-0\r
                w-full\r
                bg-turquoise-600/80\r
              `})}),a.jsx("div",{className:`\r
              flex\r
              items-start\r
              justify-between\r
              gap-2\r
            `,children:n3.map((n,i)=>a.jsxs("div",{"data-progress-item":!0,className:`\r
                    flex\r
                    flex-col\r
                    gap-1\r
                    transition-none\r
                  `,children:[a.jsx("span",{className:`\r
                      text-[9px]\r
                      lg:text-[10px]\r
                      tracking-[0.15em]\r
                      text-turquoise-600\r
                    `,children:String(i+1).padStart(2,"0")}),a.jsx("span",{className:`\r
                      text-[10px]\r
                      sm:text-xs\r
                      lg:text-sm\r
                      font-medium\r
                      text-navy-700\r
                    `,children:n.title})]},n.id))})]})]})})}E.registerPlugin(Y);const m3={market:a.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"h-full w-full","aria-hidden":"true",children:[a.jsx("path",{d:"M8 35L17 27L24 30L39 14",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round",className:`\r
          [stroke-dasharray:60]\r
          [stroke-dashoffset:0]\r
          transition-all duration-500\r
          group-hover:[stroke-dashoffset:8]\r
        `}),a.jsx("path",{d:"M8 39H40",stroke:"currentColor",strokeOpacity:".18"}),a.jsx("circle",{cx:"17",cy:"27",r:"2.2",fill:"currentColor",className:`\r
          origin-center\r
          transition-transform duration-500\r
          group-hover:scale-125\r
        `}),a.jsx("circle",{cx:"24",cy:"30",r:"2.2",fill:"currentColor",className:`\r
          origin-center\r
          transition-transform duration-500\r
          group-hover:scale-125\r
        `}),a.jsx("circle",{cx:"39",cy:"14",r:"2.8",fill:"currentColor",className:`\r
          origin-center\r
          transition-transform duration-500\r
          group-hover:scale-150\r
        `})]}),schools:a.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"h-full w-full","aria-hidden":"true",children:[a.jsx("circle",{cx:"24",cy:"24",r:"3",fill:"currentColor",className:`\r
          origin-center\r
          transition-transform duration-500\r
          group-hover:scale-125\r
        `}),a.jsx("path",{d:"M24 24L10 12",stroke:"currentColor",strokeWidth:"1.3",className:`\r
          origin-[24px_24px]\r
          transition-transform duration-500\r
          group-hover:-rotate-6\r
        `}),a.jsx("path",{d:"M24 24L38 11",stroke:"currentColor",strokeWidth:"1.3",className:`\r
          origin-[24px_24px]\r
          transition-transform duration-500\r
          group-hover:rotate-6\r
        `}),a.jsx("path",{d:"M24 24L10 37",stroke:"currentColor",strokeWidth:"1.3",className:`\r
          origin-[24px_24px]\r
          transition-transform duration-500\r
          group-hover:rotate-6\r
        `}),a.jsx("path",{d:"M24 24L39 36",stroke:"currentColor",strokeWidth:"1.3",className:`\r
          origin-[24px_24px]\r
          transition-transform duration-500\r
          group-hover:-rotate-6\r
        `}),a.jsx("circle",{cx:"10",cy:"12",r:"2",fill:"currentColor"}),a.jsx("circle",{cx:"38",cy:"11",r:"2",fill:"currentColor"}),a.jsx("circle",{cx:"10",cy:"37",r:"2",fill:"currentColor"}),a.jsx("circle",{cx:"39",cy:"36",r:"2",fill:"currentColor"})]}),risk:a.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"h-full w-full","aria-hidden":"true",children:[a.jsx("circle",{cx:"24",cy:"24",r:"8",stroke:"currentColor",strokeWidth:"1.3"}),a.jsx("circle",{cx:"24",cy:"24",r:"15",stroke:"currentColor",strokeOpacity:".28",className:`\r
          origin-center\r
          transition-transform duration-500\r
          group-hover:scale-110\r
        `}),a.jsx("path",{d:"M24 7V12M24 36V41M7 24H12M36 24H41",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"}),a.jsx("circle",{cx:"24",cy:"24",r:"2.5",fill:"currentColor",className:`\r
          origin-center\r
          transition-transform duration-500\r
          group-hover:scale-150\r
        `})]}),capital:a.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"h-full w-full","aria-hidden":"true",children:[a.jsx("circle",{cx:"24",cy:"24",r:"16",stroke:"currentColor",strokeOpacity:".2"}),a.jsx("circle",{cx:"24",cy:"24",r:"10",stroke:"currentColor",strokeWidth:"1.3",className:`\r
          origin-center\r
          transition-transform duration-500\r
          group-hover:scale-110\r
        `}),a.jsx("path",{d:"M24 24L24 8",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",className:`\r
          origin-[24px_24px]\r
          transition-transform duration-700\r
          group-hover:rotate-[35deg]\r
        `}),a.jsx("path",{d:"M24 24L38 31",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:`\r
          origin-[24px_24px]\r
          transition-transform duration-700\r
          group-hover:-rotate-[20deg]\r
        `}),a.jsx("circle",{cx:"24",cy:"24",r:"3",fill:"currentColor"})]}),behavior:a.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"h-full w-full","aria-hidden":"true",children:[a.jsx("path",{d:`\r
          M7 25\r
          C11 25 11 17 15 17\r
          C19 17 19 33 24 33\r
          C29 33 29 13 34 13\r
          C38 13 38 25 41 25\r
        `,stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",className:`\r
          [stroke-dasharray:80]\r
          [stroke-dashoffset:0]\r
          transition-all duration-700\r
          group-hover:[stroke-dashoffset:-12]\r
        `}),a.jsx("path",{d:"M7 25H41",stroke:"currentColor",strokeOpacity:".18"}),a.jsx("circle",{cx:"24",cy:"33",r:"2.5",fill:"currentColor",className:`\r
          origin-center\r
          transition-transform duration-500\r
          group-hover:scale-150\r
        `})]}),decision:a.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",className:"h-full w-full","aria-hidden":"true",children:[a.jsx("path",{d:"M8 11C17 11 18 18 24 24",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",className:`\r
          transition-transform duration-500\r
          group-hover:translate-x-[2px]\r
        `}),a.jsx("path",{d:"M8 37C17 37 18 30 24 24",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",className:`\r
          transition-transform duration-500\r
          group-hover:translate-x-[2px]\r
        `}),a.jsx("path",{d:"M24 24H40",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",className:`\r
          transition-transform duration-500\r
          group-hover:translate-x-[3px]\r
        `}),a.jsx("circle",{cx:"24",cy:"24",r:"3.5",fill:"currentColor",className:`\r
          origin-center\r
          transition-transform duration-500\r
          group-hover:scale-125\r
        `}),a.jsx("circle",{cx:"40",cy:"24",r:"2",fill:"currentColor"})]})},x3=[{left:"4%",top:"12%"},{left:"4%",bottom:"12%"},{left:"50%",bottom:"0",transform:"translateX(-50%)"},{right:"4%",bottom:"12%"},{right:"4%",top:"12%"},{left:"50%",top:"0",transform:"translateX(-50%)"}];function N0(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:`\r
          absolute inset-0\r
          rounded-full\r
          border border-[#84A4B1]/25\r
        `}),a.jsx("div",{className:`\r
          absolute\r
          inset-[14px]\r
          rounded-full\r
          border border-[#1D2C4F]/[0.07]\r
\r
          sm:inset-[16px]\r
        `}),a.jsx("div",{className:`\r
          absolute\r
          inset-[30px]\r
          rotate-45\r
          border border-[#84A4B1]/30\r
\r
          sm:inset-[35px]\r
        `}),a.jsx("div",{className:`\r
          relative z-10\r
\r
          flex\r
          h-[104px]\r
          w-[104px]\r
          flex-col\r
          items-center\r
          justify-center\r
\r
          rounded-full\r
          bg-[#1D2C4F]\r
\r
          text-center\r
\r
          shadow-[0_24px_60px_rgba(29,44,79,0.13)]\r
\r
          sm:h-[118px]\r
          sm:w-[118px]\r
        `,children:a.jsx("img",{src:"/brand/fnar-icon.svg",alt:"",className:"h-[72px] w-auto object-contain"})})]})}function Ov({card:t,index:e}){return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"mb-5 flex items-start justify-between gap-5",children:[a.jsx("span",{className:`\r
            pt-1\r
            text-[9px]\r
            font-medium\r
            tracking-[0.18em]\r
            text-[#84A4B1]\r
          `,children:String(e+1).padStart(2,"0")}),a.jsxs("div",{className:`\r
            relative\r
\r
            flex\r
            h-[56px]\r
            w-[56px]\r
            shrink-0\r
            items-center\r
            justify-center\r
\r
            text-[#1D2C4F]\r
\r
            transition-colors\r
            duration-500\r
\r
            group-hover:text-[#6F95A4]\r
\r
            sm:h-[60px]\r
            sm:w-[60px]\r
          `,children:[a.jsx("span",{className:`\r
              absolute\r
              inset-[5px]\r
\r
              rounded-full\r
\r
              border\r
              border-[#1D2C4F]/[0.07]\r
\r
              transition-[transform,border-color]\r
              duration-500\r
\r
              group-hover:scale-110\r
              group-hover:border-[#84A4B1]/30\r
            `}),a.jsx("div",{className:`\r
              relative z-10\r
              h-[42px]\r
              w-[42px]\r
\r
              sm:h-[46px]\r
              sm:w-[46px]\r
            `,children:m3[t.icon]})]})]}),a.jsx("h3",{className:`\r
          font-arabic\r
          text-[17px]\r
          font-bold\r
          leading-[1.5]\r
          text-[#1D2C4F]\r
\r
          sm:text-[18px]\r
        `,children:t.title}),a.jsx("p",{className:`\r
          mt-2\r
\r
          font-arabic\r
          text-[12px]\r
          leading-6\r
\r
          text-[#1D2C4F]/50\r
\r
          sm:text-[13px]\r
          sm:leading-7\r
        `,children:t.description}),a.jsx("span",{className:`\r
          absolute\r
          bottom-0\r
          right-0\r
\r
          h-px\r
          w-0\r
\r
          bg-[#84A4B1]\r
\r
          transition-[width]\r
          duration-500\r
\r
          group-hover:w-full\r
        `})]})}function g3({card:t,index:e}){return a.jsx("article",{"data-responsive-node":!0,"data-cursor":"hover",className:`\r
        group\r
        relative\r
\r
        min-h-[185px]\r
\r
        bg-[#F3F3F1]\r
\r
        p-5\r
\r
        transition-[background-color,box-shadow]\r
        duration-300\r
\r
        hover:bg-[#F7F7F4]\r
\r
        sm:min-h-[210px]\r
        sm:p-7\r
      `,children:a.jsx(Ov,{card:t,index:e})})}function v3({card:t,index:e}){return a.jsx("div",{className:`\r
        absolute\r
        w-[235px]\r
        xl:w-[255px]\r
      `,style:x3[e],children:a.jsx("article",{"data-desktop-node":!0,"data-cursor":"hover",className:`\r
          group\r
          relative\r
\r
          min-h-[165px]\r
          w-full\r
\r
          border\r
          border-[#1D2C4F]/[0.08]\r
\r
          bg-[#F3F3F1]/95\r
\r
          p-5\r
\r
          backdrop-blur-sm\r
\r
          transition-[border-color,background-color,box-shadow]\r
          duration-300\r
\r
          hover:border-[#84A4B1]/45\r
          hover:bg-[#F7F7F4]\r
          hover:shadow-[0_18px_50px_rgba(29,44,79,0.055)]\r
        `,children:a.jsx(Ov,{card:t,index:e})})})}function y3(){const t=b.useRef(null),e=$r();return b.useEffect(()=>{const r=t.current;if(!r||e)return;const n=E.context(()=>{const i=E.matchMedia(),s=r.querySelector("[data-system-eyebrow]"),o=r.querySelector("[data-system-title]"),l=r.querySelector("[data-system-subtitle]");return E.set(s,{opacity:0,y:10}),E.set(o,{opacity:0,y:28}),E.set(l,{opacity:0,y:14}),E.timeline({scrollTrigger:{trigger:r,start:"top 72%",once:!0}}).to(s,{opacity:1,y:0,duration:.5,ease:"power3.out"}).to(o,{opacity:1,y:0,duration:.85,ease:"power4.out"},"-=.22").to(l,{opacity:1,y:0,duration:.6,ease:"power3.out"},"-=.48"),i.add("(max-width: 1023px)",()=>{const c=r.querySelector("[data-responsive-system]"),d=r.querySelector("[data-responsive-core]"),p=E.utils.toArray("[data-responsive-node]",r);if(!c)return;E.set(d,{opacity:0,scale:.94}),E.set(p,{opacity:0,y:20});const f=E.timeline({scrollTrigger:{trigger:c,start:"top 82%",once:!0}});return f.to(d,{opacity:1,scale:1,duration:.7,ease:"power3.out"}),f.to(p,{opacity:1,y:0,duration:.55,stagger:.07,ease:"power3.out"},"-=.3"),()=>{f.kill()}}),i.add("(min-width: 1024px)",()=>{const c=r.querySelector("[data-desktop-system]"),d=r.querySelector("[data-desktop-core]"),p=E.utils.toArray("[data-desktop-node]",r),f=E.utils.toArray("[data-system-line]",r);if(!c)return;E.set(p,{opacity:0}),E.set(d,{opacity:0}),E.set(f,{strokeDasharray:1,strokeDashoffset:1});const m=E.timeline({scrollTrigger:{trigger:c,start:"top 80%",once:!0}});return m.to(d,{opacity:1,duration:.65,ease:"power3.out"}),m.to(f,{strokeDashoffset:0,duration:.9,stagger:.05,ease:"power2.inOut"},"-=.3"),m.to(p,{opacity:1,duration:.55,stagger:.065,ease:"power2.out"},"-=.5"),()=>{m.kill()}}),()=>{i.revert()}},r);return()=>{n.revert()}},[e]),a.jsxs("section",{ref:t,className:`\r
        relative\r
        overflow-hidden\r
\r
        bg-[#F3F3F1]\r
\r
        py-20\r
        sm:py-24\r
        lg:py-32\r
        xl:py-36\r
      `,children:[a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          inset-0\r
          opacity-[0.45]\r
        `,style:{backgroundImage:`
            linear-gradient(rgba(29,44,79,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29,44,79,.03) 1px, transparent 1px)
          `,backgroundSize:"88px 88px"}}),a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          left-1/2\r
          top-[62%]\r
\r
          h-[420px]\r
          w-[420px]\r
\r
          -translate-x-1/2\r
          -translate-y-1/2\r
\r
          rounded-full\r
\r
          bg-[#84A4B1]/[0.05]\r
\r
          blur-[100px]\r
\r
          sm:h-[550px]\r
          sm:w-[550px]\r
\r
          lg:h-[650px]\r
          lg:w-[650px]\r
        `}),a.jsxs("div",{className:`\r
          relative\r
\r
          mx-auto\r
          w-full\r
          max-w-[1440px]\r
\r
          px-5\r
          sm:px-6\r
          lg:px-10\r
        `,children:[a.jsxs("div",{dir:"rtl",className:`\r
            mx-auto\r
\r
            mb-12\r
            max-w-[800px]\r
\r
            text-center\r
\r
            sm:mb-16\r
            lg:mb-16\r
          `,children:[a.jsxs("div",{"data-system-eyebrow":!0,className:`\r
              mb-5\r
\r
              flex\r
              items-center\r
              justify-center\r
              gap-3\r
            `,children:[a.jsx("span",{className:"h-px w-7 bg-[#84A4B1]"}),a.jsx("span",{className:`\r
                text-[9px]\r
                font-medium\r
                tracking-[0.18em]\r
                text-[#557381]\r
\r
                sm:text-[10px]\r
              `,children:"05 / المنظومة"}),a.jsx("span",{className:"h-px w-7 bg-[#84A4B1]"})]}),a.jsx("h2",{"data-system-title":!0,className:`\r
              pb-[0.14em]\r
\r
              font-arabic\r
              text-[clamp(2.55rem,9vw,5.2rem)]\r
              font-bold\r
\r
              leading-[1.22]\r
              tracking-[-0.035em]\r
\r
              text-[#1D2C4F]\r
            `,children:"ليس دورة عادية."}),a.jsx("p",{"data-system-subtitle":!0,className:`\r
              mx-auto\r
\r
              mt-3\r
              max-w-[620px]\r
\r
              px-2\r
\r
              font-arabic\r
              text-[14px]\r
              leading-7\r
\r
              text-[#1D2C4F]/55\r
\r
              sm:mt-4\r
              sm:text-[16px]\r
              sm:leading-8\r
\r
              lg:mt-5\r
              lg:text-[17px]\r
            `,children:"بل منظومة تعليمية متكاملة تربط المعرفة بالسلوك والمخاطر ورأس المال لبناء فهم أعمق للأسواق."})]}),a.jsxs("div",{dir:"rtl",className:"lg:hidden",children:[a.jsx("div",{"data-responsive-core":!0,className:`\r
              relative\r
\r
              mx-auto\r
              mb-10\r
\r
              flex\r
              h-[180px]\r
              w-[180px]\r
\r
              items-center\r
              justify-center\r
\r
              sm:mb-12\r
              sm:h-[200px]\r
              sm:w-[200px]\r
            `,children:a.jsx(N0,{})}),a.jsx("div",{"data-responsive-system":!0,className:`\r
              mx-auto\r
              grid\r
              max-w-[900px]\r
              grid-cols-1\r
\r
              gap-px\r
\r
              overflow-hidden\r
\r
              border\r
              border-[#1D2C4F]/[0.08]\r
\r
              bg-[#1D2C4F]/[0.08]\r
\r
              sm:grid-cols-2\r
            `,children:_0.map((r,n)=>a.jsx(g3,{card:r,index:n},`responsive-${r.id}`))})]}),a.jsxs("div",{"data-desktop-system":!0,dir:"rtl",className:`\r
            relative\r
\r
            mx-auto\r
            hidden\r
\r
            h-[650px]\r
            w-full\r
            max-w-[1120px]\r
\r
            lg:block\r
\r
            xl:h-[680px]\r
          `,children:[a.jsxs("svg",{viewBox:"0 0 1000 650",preserveAspectRatio:"none","aria-hidden":"true",className:`\r
              pointer-events-none\r
\r
              absolute\r
              inset-0\r
\r
              h-full\r
              w-full\r
            `,children:[a.jsxs("g",{fill:"none",stroke:"#84A4B1",strokeOpacity:".26",strokeWidth:"1",children:[a.jsx("path",{"data-system-line":!0,pathLength:"1",d:"M500 325 L175 145"}),a.jsx("path",{"data-system-line":!0,pathLength:"1",d:"M500 325 L175 505"}),a.jsx("path",{"data-system-line":!0,pathLength:"1",d:"M500 325 L500 590"}),a.jsx("path",{"data-system-line":!0,pathLength:"1",d:"M500 325 L825 505"}),a.jsx("path",{"data-system-line":!0,pathLength:"1",d:"M500 325 L825 145"}),a.jsx("path",{"data-system-line":!0,pathLength:"1",d:"M500 325 L500 60"})]}),a.jsx("circle",{cx:"500",cy:"325",r:"4",fill:"#84A4B1",opacity:".7"}),a.jsxs("g",{fill:"#84A4B1",opacity:".45",children:[a.jsx("circle",{cx:"175",cy:"145",r:"2.2"}),a.jsx("circle",{cx:"175",cy:"505",r:"2.2"}),a.jsx("circle",{cx:"500",cy:"590",r:"2.2"}),a.jsx("circle",{cx:"825",cy:"505",r:"2.2"}),a.jsx("circle",{cx:"825",cy:"145",r:"2.2"}),a.jsx("circle",{cx:"500",cy:"60",r:"2.2"})]}),a.jsx("circle",{cx:"500",cy:"325",r:"125",fill:"none",stroke:"#84A4B1",strokeOpacity:".09"}),a.jsx("circle",{cx:"500",cy:"325",r:"150",fill:"none",stroke:"#84A4B1",strokeOpacity:".06",strokeDasharray:"3 10"})]}),a.jsx("div",{className:`\r
              absolute\r
              left-1/2\r
              top-1/2\r
\r
              -translate-x-1/2\r
              -translate-y-1/2\r
            `,children:a.jsx("div",{"data-desktop-core":!0,className:`\r
                relative\r
\r
                flex\r
                h-[210px]\r
                w-[210px]\r
\r
                items-center\r
                justify-center\r
\r
                xl:h-[220px]\r
                xl:w-[220px]\r
              `,children:a.jsx(N0,{})})}),_0.map((r,n)=>a.jsx(v3,{card:r,index:n},`desktop-${r.id}`))]})]})]})}E.registerPlugin(Y);function w3(){const t=b.useRef(null),e=$r(),r=Ti();b.useEffect(()=>{const i=t.current;if(!i||e)return;const s=E.context(()=>{E.fromTo("[data-program-reveal]",{opacity:0,y:24},{opacity:1,y:0,duration:.8,ease:"power3.out",stagger:.08,scrollTrigger:{trigger:"[data-program-intro]",start:"top 85%",once:!0}}),E.fromTo("[data-course-card]",{opacity:0,y:22},{opacity:1,y:0,duration:.65,ease:"power3.out",stagger:.06,scrollTrigger:{trigger:"[data-course-grid]",start:"top 85%",once:!0}}),E.fromTo("[data-journey]",{opacity:0,y:26},{opacity:1,y:0,duration:.8,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:"[data-journey-container]",start:"top 85%",once:!0}})},i);return()=>s.revert()},[e]);const n=()=>{r("/program"),window.scrollTo({top:0,behavior:"auto"})};return a.jsxs("section",{ref:t,id:"paths",dir:"rtl",className:"relative overflow-hidden bg-cream-100 text-navy-700",children:[a.jsxs("div",{"data-program-intro":!0,className:"relative overflow-hidden bg-navy-900 px-5 py-20 sm:px-8 lg:py-24",children:[a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 perspective-grid opacity-[0.06]"}),a.jsxs("div",{className:"relative mx-auto max-w-[1320px]",children:[a.jsxs("div",{"data-program-reveal":!0,className:"mb-6 flex items-center gap-3",children:[a.jsx("span",{className:"h-px w-8 bg-turquoise-400"}),a.jsx("span",{className:"text-[11px] font-medium text-turquoise-400",children:"البرنامج التعليمي"}),a.jsx("span",{className:"text-[10px] text-cream-100/30",children:"FNAR / PROGRAM"})]}),a.jsxs("div",{className:"grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16",children:[a.jsxs("div",{children:[a.jsxs("h2",{"data-program-reveal":!0,className:"text-[clamp(2.7rem,5.2vw,5.2rem)] font-bold leading-[1.45] tracking-[-0.02em] text-cream-100",children:["ليس مجموعة دورات.",a.jsx("span",{className:"block text-turquoise-400",children:"بل منظومة واحدة."})]}),a.jsx("p",{"data-program-reveal":!0,className:"mt-6 max-w-[590px] text-[14px] leading-[2] text-cream-100/75 sm:text-[16px]",children:"تسع دورات مترابطة ضمن باقة تعليمية متكاملة، صُممت لبناء طريقة التفكير، وفهم الأسواق المالية، والتحليل، وإدارة المخاطر ورأس المال، وصولاً إلى صناعة القرار المستقل."})]}),a.jsx("div",{"data-program-reveal":!0,className:"grid grid-cols-3 gap-3 border-t border-white/10 pt-7",children:[{value:"09",label:"دورات تعليمية"},{value:"03",label:"أشهر تعليمية"},{value:"01",label:"برنامج متكامل"}].map(i=>a.jsxs("div",{className:"min-w-0",children:[a.jsx("div",{className:"font-sans text-[clamp(2rem,3vw,3.1rem)] font-light leading-none text-cream-100",children:i.value}),a.jsx("p",{className:"mt-3 text-[11px] leading-5 text-turquoise-400",children:i.label})]},i.label))})]})]})]}),a.jsxs("div",{className:"mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24",children:[a.jsxs("div",{className:"mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end lg:mb-12",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[a.jsx("span",{className:"h-px w-8 bg-turquoise-400"}),a.jsx("span",{className:"text-[11px] font-medium text-turquoise-600",children:"المحتوى التعليمي"})]}),a.jsxs("h3",{className:"text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[1.45]",children:["تسعة محاور.",a.jsx("span",{className:"block text-turquoise-500",children:"رؤية واحدة."})]})]}),a.jsx("p",{className:"max-w-[390px] text-[14px] leading-[1.95] text-navy-600",children:"كل دورة تكمل الأخرى ضمن مسار تعليمي واحد. لا تُطرح الدورات كمنتجات منفصلة، بل كمكونات لمنهج فنر المتكامل."})]}),a.jsx("div",{"data-course-grid":!0,className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5",children:i3.map((i,s)=>a.jsxs("article",{"data-course-card":!0,className:`\r
                group relative isolate flex min-w-0 flex-col\r
                overflow-hidden rounded-[18px]\r
                border border-navy-700/10\r
                bg-cream-50 p-6\r
                transition-[background-color,border-color,box-shadow]\r
                duration-300\r
                hover:border-turquoise-400/50\r
                hover:bg-navy-700\r
                hover:shadow-[0_16px_35px_rgba(16,25,48,0.12)]\r
                sm:p-7 lg:p-8\r
              `,children:[a.jsx("div",{"aria-hidden":"true",className:`\r
                  absolute inset-x-0 top-0 h-[2px]\r
                  origin-right scale-x-0 bg-turquoise-400\r
                  transition-transform duration-500\r
                  group-hover:scale-x-100\r
                `}),a.jsxs("div",{className:"relative z-10 flex items-start justify-between gap-4",children:[a.jsx("span",{className:"font-sans text-[13px] font-medium tracking-[0.12em] text-turquoise-600 transition-colors duration-300 group-hover:text-turquoise-300",children:String(s+1).padStart(2,"0")}),a.jsx("span",{className:"rounded-full border border-navy-700/10 px-3 py-1.5 text-[10px] text-navy-500 transition-colors duration-300 group-hover:border-white/20 group-hover:text-cream-100/75",children:"ضمن البرنامج"})]}),a.jsxs("div",{"aria-hidden":"true",className:"relative mt-6 flex h-14 items-center justify-start",children:[a.jsx("div",{className:"relative flex h-12 w-12 items-center justify-center rounded-full border border-turquoise-400/35 transition-colors duration-300 group-hover:border-turquoise-300/60",children:a.jsx("span",{className:"h-2 w-2 rotate-45 bg-turquoise-400 transition-transform duration-300 group-hover:rotate-[135deg] group-hover:bg-turquoise-300"})}),a.jsx("span",{className:"mr-3 h-px w-10 bg-navy-700/10 transition-[width,background-color] duration-300 group-hover:w-16 group-hover:bg-turquoise-400/60"})]}),a.jsxs("div",{className:"relative z-10 mt-6",children:[a.jsx("h4",{className:"mb-3 text-[clamp(1.6rem,2vw,2rem)] font-bold leading-[1.55] text-navy-700 transition-colors duration-300 group-hover:text-cream-100",children:i.title}),a.jsx("p",{className:"text-[13px] leading-[2] text-navy-600 transition-colors duration-300 group-hover:text-cream-100/80 sm:text-[14px]",children:i.description})]}),a.jsxs("div",{className:"relative z-10 mt-auto flex items-center justify-between gap-3 border-t border-navy-700/10 pt-5 transition-colors duration-300 group-hover:border-white/15",children:[a.jsx("span",{className:"text-[10px] font-medium text-navy-500 transition-colors duration-300 group-hover:text-turquoise-300",children:"FNAR / COURSE"}),a.jsxs("span",{className:"font-sans text-[11px] text-navy-400 transition-colors duration-300 group-hover:text-cream-100/60",children:[String(s+1).padStart(2,"0")," / 09"]})]})]},i.id))}),a.jsxs("div",{className:"mt-8 flex flex-col gap-4 border-t border-navy-700/10 pt-6 sm:flex-row sm:items-center sm:justify-between",children:[a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("span",{className:"mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise-400"}),a.jsx("p",{className:"text-[12px] leading-7 text-navy-600",children:"جميع الدورات ضمن باقة تعليمية واحدة، والتسجيل الأساسي يشمل البرنامج المتكامل."})]}),a.jsx("span",{className:"shrink-0 font-sans text-[10px] tracking-[0.15em] text-navy-400",children:"FNAR / 01—09"})]})]}),a.jsx("div",{className:"bg-cream-200 py-16 lg:py-24",children:a.jsxs("div",{className:"mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10",children:[a.jsxs("div",{className:"mb-10 lg:mb-12",children:[a.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[a.jsx("span",{className:"h-px w-8 bg-turquoise-400"}),a.jsx("span",{className:"text-[11px] font-medium text-turquoise-600",children:"الرحلة التعليمية"})]}),a.jsxs("h3",{className:"text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.45]",children:["من المعرفة",a.jsx("span",{className:"text-turquoise-500",children:" إلى التطبيق."})]}),a.jsx("p",{className:"mt-5 max-w-[590px] text-[14px] leading-8 text-navy-600",children:"تبدأ الرحلة بمرحلة تعليمية متكاملة، ثم يمكن للمشارك استكشاف فرص الاستمرار في الجانب التطبيقي وفق شروط واتفاق مستقل."})]}),a.jsxs("div",{"data-journey-container":!0,className:"grid grid-cols-1 gap-5 lg:grid-cols-2",children:[a.jsxs("div",{"data-journey":!0,className:"relative overflow-hidden rounded-[20px] bg-navy-700 p-7 sm:p-9",children:[a.jsxs("div",{className:"flex items-start justify-between gap-4",children:[a.jsx("span",{className:"font-sans text-[12px] tracking-[0.15em] text-turquoise-400",children:"STAGE 01"}),a.jsx("span",{className:"rounded-full border border-white/20 px-4 py-2 text-[11px] text-cream-100",children:"3 أشهر"})]}),a.jsxs("div",{className:"mt-12 lg:mt-14",children:[a.jsx("span",{className:"mb-3 block text-[11px] text-turquoise-400",children:"المرحلة الأساسية"}),a.jsx("h4",{className:"mb-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.45] text-cream-100",children:"التعليم وبناء المنهج"}),a.jsx("p",{className:"max-w-[470px] text-[14px] leading-8 text-cream-100/80",children:"ثلاثة أشهر للتعرف على منهج فنر في التفكير والتحليل والإدارة وفهم الأسواق المالية، وبناء أساس واضح لصناعة القرار."})]}),a.jsx("div",{className:"absolute bottom-0 left-0 h-[2px] w-full bg-turquoise-400"})]}),a.jsxs("div",{"data-journey":!0,className:"relative overflow-hidden rounded-[20px] border border-navy-700/10 bg-cream-50 p-7 sm:p-9",children:[a.jsxs("div",{className:"flex items-start justify-between gap-4",children:[a.jsx("span",{className:"font-sans text-[12px] tracking-[0.15em] text-turquoise-600",children:"STAGE 02"}),a.jsx("span",{className:"rounded-full border border-navy-700/15 px-4 py-2 text-[11px] text-navy-600",children:"اختياري"})]}),a.jsxs("div",{className:"mt-12 lg:mt-14",children:[a.jsx("span",{className:"mb-3 block text-[11px] text-turquoise-600",children:"بعد المرحلة التعليمية"}),a.jsx("h4",{className:"mb-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.45] text-navy-700",children:"الاستمرار في الجانب التطبيقي"}),a.jsx("p",{className:"max-w-[470px] text-[14px] leading-8 text-navy-600",children:"يمكن للمشارك بعد انتهاء المرحلة التعليمية استكشاف إمكانية الاستمرار في الجانب التطبيقي طويل المدى. هذه المرحلة منفصلة، وتخضع لشروط واتفاق أو عقد مستقل، ولا يتم القبول فيها تلقائياً."})]}),a.jsx("div",{className:"absolute bottom-0 left-0 h-[2px] w-full bg-turquoise-400/50"})]})]})]})}),a.jsx("div",{className:"bg-cream-100 px-5 py-16 sm:px-8 lg:py-24",children:a.jsxs("div",{className:"mx-auto max-w-[850px] text-center",children:[a.jsxs("div",{className:"mb-5 flex items-center justify-center gap-3",children:[a.jsx("span",{className:"h-px w-8 bg-turquoise-400"}),a.jsx("span",{className:"text-[11px] text-turquoise-600",children:"الخطوة التالية"}),a.jsx("span",{className:"h-px w-8 bg-turquoise-400"})]}),a.jsxs("h3",{className:"text-[clamp(2.2rem,4vw,3.7rem)] font-bold leading-[1.55] text-navy-700",children:["الفهم لا يبدأ من التوصية.",a.jsx("span",{className:"block text-turquoise-500",children:"يبدأ من المنهج."})]}),a.jsx("p",{className:"mx-auto mt-6 max-w-[540px] text-[14px] leading-8 text-navy-600",children:"تعرف على تفاصيل برنامج فنر التعليمي، محتوى الدورات، وآلية الالتحاق بالباقة المتكاملة."}),a.jsxs("button",{type:"button",onClick:n,"data-cursor":"hover",className:`\r
              group relative mt-9 inline-flex min-h-[58px]\r
              w-full max-w-[320px] items-center justify-between\r
              overflow-hidden rounded-full bg-navy-700 px-6\r
              text-[14px] font-semibold text-cream-100\r
              transition-transform duration-300\r
              hover:-translate-y-1\r
              focus-visible:outline focus-visible:outline-2\r
              focus-visible:outline-offset-4\r
              focus-visible:outline-turquoise-400\r
            `,children:[a.jsx("span",{className:"absolute inset-0 translate-y-full bg-turquoise-600 transition-transform duration-300 group-hover:translate-y-0"}),a.jsx("span",{className:"relative z-10",children:"اكتشف برنامج فنر"}),a.jsx("span",{"aria-hidden":"true",className:"relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-transform duration-300 group-hover:-translate-x-1",children:"←"})]}),a.jsx("p",{className:"mt-6 text-[11px] leading-6 text-navy-500",children:"برنامج تعليمي متكامل — دون توصيات تداول أو وعود بالربح."})]})})]})}E.registerPlugin(Y);const _3=[{number:"01",title:"لا توصيات",description:"لأن القرار الذي لا تفهمه، ليس قرارك."},{number:"02",title:"لا وعود بالربح",description:"لأن السوق لا يقدم ضمانات، والمعرفة لا تبيع أوهاماً."},{number:"03",title:"لا اختصارات",description:"لأن الفهم الحقيقي يُبنى، ولا يُختصر."}];function b3(){const t=b.useRef(null),e=$r();return b.useEffect(()=>{const r=t.current;if(!r||e)return;const n=E.context(()=>{E.fromTo("[data-philosophy-intro]",{opacity:0,y:30},{opacity:1,y:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:"[data-philosophy-intro]",start:"top 82%",once:!0}});const i=E.utils.toArray("[data-philosophy-principle]",r);E.set(i,{opacity:0,y:35}),E.to(i,{opacity:1,y:0,duration:.85,stagger:.13,ease:"power3.out",scrollTrigger:{trigger:"[data-philosophy-list]",start:"top 78%",once:!0}}),E.fromTo("[data-philosophy-final]",{opacity:0,y:40},{opacity:1,y:0,duration:1,ease:"power4.out",scrollTrigger:{trigger:"[data-philosophy-final]",start:"top 78%",once:!0}})},r);return()=>n.revert()},[e]),a.jsxs("section",{ref:t,id:"philosophy",className:`\r
        relative\r
        overflow-hidden\r
        bg-[#1D2C4F]\r
      `,children:[a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          inset-0\r
          opacity-60\r
        `,style:{backgroundImage:`
            linear-gradient(rgba(132,164,177,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132,164,177,.035) 1px, transparent 1px)
          `,backgroundSize:"80px 80px"}}),a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
\r
          absolute\r
          left-1/2\r
          top-[18%]\r
\r
          h-[600px]\r
          w-[600px]\r
\r
          -translate-x-1/2\r
\r
          rounded-full\r
\r
          bg-[#84A4B1]/[0.055]\r
\r
          blur-[120px]\r
        `}),a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
\r
          absolute\r
          left-1/2\r
          top-0\r
\r
          hidden\r
          h-full\r
          w-px\r
\r
          -translate-x-1/2\r
\r
          bg-white/[0.035]\r
\r
          lg:block\r
        `}),a.jsxs("div",{className:`\r
          relative\r
          z-10\r
\r
          mx-auto\r
          max-w-[1240px]\r
\r
          px-5\r
          py-20\r
\r
          sm:px-6\r
          sm:py-24\r
\r
          lg:px-10\r
          lg:py-32\r
      `,children:[a.jsxs("div",{"data-philosophy-intro":!0,dir:"rtl",className:`\r
            mb-14\r
\r
            sm:mb-16\r
            lg:mb-20\r
        `,children:[a.jsxs("div",{className:`\r
              mb-5\r
\r
              flex\r
              items-center\r
              gap-3\r
          `,children:[a.jsx("span",{className:`\r
                h-[5px]\r
                w-[5px]\r
\r
                rounded-full\r
\r
                bg-[#84A4B1]\r
\r
                shadow-[0_0_12px_rgba(132,164,177,.6)]\r
              `}),a.jsx("span",{className:`\r
                text-[9px]\r
                font-medium\r
                tracking-[0.2em]\r
\r
                text-[#84A4B1]\r
\r
                sm:text-[10px]\r
              `,children:"07 / فلسفتنا"}),a.jsx("span",{className:`\r
                h-px\r
                w-12\r
\r
                bg-[#84A4B1]/35\r
              `})]}),a.jsxs("div",{className:`\r
              grid\r
              gap-6\r
\r
              lg:grid-cols-[1.1fr_.9fr]\r
              lg:items-end\r
              lg:gap-20\r
          `,children:[a.jsxs("h2",{className:`\r
                max-w-[650px]\r
\r
                pb-[0.1em]\r
\r
                font-arabic\r
\r
                text-[clamp(2.7rem,7vw,5.4rem)]\r
                font-bold\r
                leading-[1.18]\r
\r
                tracking-[-0.04em]\r
\r
                text-[#F3F3F1]\r
              `,children:["ما لا",a.jsx("br",{}),a.jsx("span",{className:"text-[#84A4B1]",children:"نؤمن به."})]}),a.jsx("p",{className:`\r
                max-w-[470px]\r
\r
                font-arabic\r
\r
                text-[13px]\r
                leading-7\r
\r
                text-[#F3F3F1]/45\r
\r
                sm:text-[15px]\r
                sm:leading-8\r
              `,children:"التعليم المالي الحقيقي لا يبدأ بوعد، ولا ينتهي بتوصية. مهمتنا أن نبني طريقة تفكير تستطيع الاعتماد عليها."})]})]}),a.jsx("div",{"data-philosophy-list":!0,className:`\r
            border-t\r
            border-white/[0.08]\r
          `,children:_3.map(r=>a.jsxs("div",{"data-philosophy-principle":!0,"data-cursor":"hover",dir:"rtl",className:`\r
                group\r
\r
                relative\r
\r
                grid\r
                gap-5\r
\r
                overflow-hidden\r
\r
                border-b\r
                border-white/[0.08]\r
\r
                py-8\r
\r
                transition-colors\r
                duration-500\r
\r
                hover:bg-white/[0.025]\r
\r
                sm:py-10\r
\r
                lg:grid-cols-[110px_1fr_1fr]\r
                lg:items-center\r
                lg:gap-10\r
                lg:px-5\r
                lg:py-12\r
              `,children:[a.jsx("div",{"aria-hidden":"true",className:`\r
                  pointer-events-none\r
\r
                  absolute\r
                  inset-y-0\r
                  right-0\r
\r
                  w-0\r
\r
                  bg-gradient-to-l\r
                  from-[#84A4B1]/[0.07]\r
                  to-transparent\r
\r
                  transition-[width]\r
                  duration-700\r
\r
                  group-hover:w-full\r
                `}),a.jsxs("div",{className:`\r
                  relative\r
                  z-10\r
\r
                  flex\r
                  items-center\r
                  gap-3\r
\r
                  lg:block\r
                `,children:[a.jsx("span",{className:`\r
                    text-[10px]\r
                    tracking-[0.18em]\r
\r
                    text-[#84A4B1]/55\r
                  `,children:r.number}),a.jsx("span",{className:`\r
                    h-px\r
                    w-8\r
\r
                    bg-[#84A4B1]/25\r
\r
                    lg:mt-3\r
                    lg:block\r
                  `})]}),a.jsxs("div",{className:`\r
                  relative\r
                  z-10\r
\r
                  flex\r
                  items-center\r
                  gap-4\r
                `,children:[a.jsx("span",{className:`\r
                    font-arabic\r
\r
                    text-[32px]\r
                    font-light\r
                    leading-none\r
\r
                    text-[#84A4B1]/35\r
\r
                    transition-colors\r
                    duration-500\r
\r
                    group-hover:text-[#84A4B1]\r
\r
                    sm:text-[38px]\r
                  `,children:"لا"}),a.jsx("h3",{className:`\r
                    pb-[0.08em]\r
\r
                    font-arabic\r
\r
                    text-[clamp(1.7rem,4vw,2.7rem)]\r
                    font-bold\r
                    leading-[1.3]\r
\r
                    text-[#F3F3F1]\r
                  `,children:r.title.replace("لا ","")})]}),a.jsx("p",{className:`\r
                  relative\r
                  z-10\r
\r
                  max-w-[430px]\r
\r
                  font-arabic\r
\r
                  text-[12px]\r
                  leading-7\r
\r
                  text-[#F3F3F1]/35\r
\r
                  transition-colors\r
                  duration-500\r
\r
                  group-hover:text-[#F3F3F1]/55\r
\r
                  sm:text-[13px]\r
                `,children:r.description}),a.jsx("span",{"aria-hidden":"true",className:`\r
                  absolute\r
                  bottom-0\r
                  right-0\r
\r
                  h-[2px]\r
                  w-0\r
\r
                  bg-[#84A4B1]\r
\r
                  transition-[width]\r
                  duration-700\r
\r
                  group-hover:w-full\r
                `})]},r.number))})]}),a.jsxs("div",{className:`\r
          relative\r
          z-10\r
\r
          overflow-hidden\r
\r
          bg-[#F3F3F1]\r
\r
          py-20\r
\r
          sm:py-24\r
          lg:py-32\r
        `,children:[a.jsx("div",{"aria-hidden":"true",className:`\r
            pointer-events-none\r
            absolute\r
            inset-0\r
          `,style:{backgroundImage:`
              linear-gradient(rgba(29,44,79,.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(29,44,79,.025) 1px, transparent 1px)
            `,backgroundSize:"80px 80px"}}),a.jsx("div",{"aria-hidden":"true",className:`\r
            pointer-events-none\r
\r
            absolute\r
            left-1/2\r
            top-1/2\r
\r
            -translate-x-1/2\r
            -translate-y-1/2\r
\r
            font-arabic\r
\r
            text-[220px]\r
            font-bold\r
            leading-none\r
\r
            text-[#1D2C4F]/[0.025]\r
\r
            sm:text-[320px]\r
            lg:text-[440px]\r
          `,children:"فنر"}),a.jsxs("div",{"data-philosophy-final":!0,dir:"rtl",className:`\r
            relative\r
            z-10\r
\r
            mx-auto\r
            max-w-[1000px]\r
\r
            px-5\r
\r
            text-center\r
\r
            sm:px-6\r
            lg:px-10\r
          `,children:[a.jsxs("span",{className:`\r
              mb-7\r
              inline-flex\r
\r
              items-center\r
              gap-3\r
\r
              text-[9px]\r
              font-medium\r
              tracking-[0.18em]\r
\r
              text-[#557381]\r
            `,children:[a.jsx("span",{className:"h-px w-8 bg-[#84A4B1]"}),"فلسفة فنر",a.jsx("span",{className:"h-px w-8 bg-[#84A4B1]"})]}),a.jsxs("p",{className:`\r
              font-arabic\r
\r
              text-[15px]\r
              font-medium\r
              leading-8\r
\r
              text-[#1D2C4F]/45\r
\r
              sm:text-[18px]\r
            `,children:["نحن لا نعلمك",a.jsxs("span",{className:"font-bold text-[#1D2C4F]",children:[" ","ماذا تشتري."]})]}),a.jsxs("h2",{className:`\r
              mt-4\r
              pb-[0.12em]\r
\r
              font-arabic\r
\r
              text-[clamp(3rem,9vw,6.5rem)]\r
              font-bold\r
              leading-[1.15]\r
\r
              tracking-[-0.045em]\r
\r
              text-[#1D2C4F]\r
            `,children:["نعلمك كيف",a.jsx("br",{}),a.jsx("span",{className:"text-[#6F95A4]",children:"تفهم."})]}),a.jsx("div",{className:`\r
              mx-auto\r
              mt-8\r
\r
              h-px\r
              w-16\r
\r
              bg-[#84A4B1]\r
            `})]})]})]})}E.registerPlugin(Y);function j3(){const t=b.useRef(null),e=$r();return b.useEffect(()=>{const r=t.current;if(!r||e)return;const n=E.context(()=>{E.fromTo("[data-founder-eyebrow]",{opacity:0,y:12},{opacity:1,y:0,duration:.6,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 75%",once:!0}}),E.fromTo("[data-founder-title]",{opacity:0,y:35},{opacity:1,y:0,duration:1,ease:"power4.out",scrollTrigger:{trigger:r,start:"top 72%",once:!0}}),E.fromTo("[data-founder-copy]",{opacity:0,y:24},{opacity:1,y:0,duration:.8,delay:.08,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 70%",once:!0}}),E.fromTo("[data-founder-image]",{opacity:0,scale:1.04,clipPath:"inset(0 0 100% 0)"},{opacity:1,scale:1,clipPath:"inset(0% 0 0% 0)",duration:1.25,ease:"power4.out",scrollTrigger:{trigger:"[data-founder-image-wrap]",start:"top 78%",once:!0}}),E.fromTo("[data-founder-detail]",{opacity:0,y:18},{opacity:1,y:0,duration:.65,stagger:.08,ease:"power3.out",scrollTrigger:{trigger:"[data-founder-details]",start:"top 85%",once:!0}})},r);return()=>n.revert()},[e]),a.jsxs("section",{ref:t,id:"founder",className:`\r
        relative\r
        overflow-hidden\r
        bg-[#F3F3F1]\r
\r
        py-20\r
        sm:py-24\r
        lg:py-28\r
        xl:py-32\r
      `,children:[a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          inset-0\r
          opacity-60\r
        `,style:{backgroundImage:`
            linear-gradient(rgba(29,44,79,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29,44,79,.025) 1px, transparent 1px)
          `,backgroundSize:"80px 80px"}}),a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          -right-[20%]\r
          top-[5%]\r
\r
          h-[600px]\r
          w-[600px]\r
\r
          rounded-full\r
          bg-[#84A4B1]/[0.08]\r
          blur-[130px]\r
        `}),a.jsxs("div",{className:`\r
          relative\r
          z-10\r
\r
          mx-auto\r
          w-full\r
          max-w-[1320px]\r
\r
          px-5\r
          sm:px-6\r
          lg:px-10\r
        `,children:[a.jsxs("div",{"data-founder-eyebrow":!0,dir:"rtl",className:`\r
            mb-10\r
\r
            flex\r
            items-center\r
            gap-3\r
\r
            lg:mb-14\r
          `,children:[a.jsx("span",{className:`\r
              h-[5px]\r
              w-[5px]\r
              rounded-full\r
              bg-[#6F95A4]\r
            `}),a.jsx("span",{className:`\r
              text-[9px]\r
              font-medium\r
              tracking-[0.2em]\r
              text-[#557381]\r
\r
              sm:text-[10px]\r
            `,children:"08 / عن فنر"}),a.jsx("span",{className:`\r
              h-px\r
              w-12\r
              bg-[#84A4B1]/50\r
            `})]}),a.jsxs("div",{className:`\r
            grid\r
            grid-cols-1\r
\r
            gap-12\r
\r
            lg:grid-cols-12\r
            lg:gap-10\r
\r
            xl:gap-16\r
          `,children:[a.jsxs("div",{"data-founder-image-wrap":!0,className:`\r
              relative\r
\r
              lg:col-span-6\r
              lg:order-1\r
            `,children:[a.jsxs("div",{"data-founder-image":!0,className:`\r
                relative\r
\r
                aspect-[4/5]\r
\r
                overflow-hidden\r
\r
                bg-[#0A1930]\r
\r
                sm:aspect-[5/6]\r
                lg:aspect-[4/5]\r
              `,children:[a.jsx("img",{src:"/images/fnar-founder.svg",alt:"مؤسس فنر",className:`\r
                  absolute\r
                  inset-0\r
\r
                  h-full\r
                  w-full\r
\r
                  object-cover\r
                  object-center\r
                `}),a.jsx("div",{"aria-hidden":"true",className:`\r
                  absolute\r
                  inset-0\r
\r
                  bg-gradient-to-t\r
                  from-[#07162B]/35\r
                  via-transparent\r
                  to-transparent\r
                `}),a.jsx("div",{"aria-hidden":"true",className:`\r
                  absolute\r
                  inset-0\r
\r
                  border\r
                  border-white/[0.08]\r
                `}),a.jsxs("div",{className:`\r
                  absolute\r
                  bottom-5\r
                  right-5\r
\r
                  flex\r
                  items-center\r
                  gap-3\r
\r
                  sm:bottom-6\r
                  sm:right-6\r
                `,children:[a.jsx("span",{className:`\r
                    h-[5px]\r
                    w-[5px]\r
\r
                    rounded-full\r
\r
                    bg-[#D7C79B]\r
                  `}),a.jsx("span",{className:`\r
                    text-[8px]\r
                    tracking-[0.18em]\r
\r
                    text-white/55\r
                  `,children:"FNAR / FOUNDER"})]}),a.jsx("div",{"aria-hidden":"true",className:`\r
                  absolute\r
                  left-5\r
                  top-5\r
\r
                  h-10\r
                  w-10\r
\r
                  border-l\r
                  border-t\r
                  border-white/20\r
                `}),a.jsx("div",{"aria-hidden":"true",className:`\r
                  absolute\r
                  bottom-5\r
                  left-5\r
\r
                  h-10\r
                  w-10\r
\r
                  border-b\r
                  border-l\r
                  border-white/20\r
                `})]}),a.jsx("span",{"aria-hidden":"true",className:`\r
                absolute\r
                -bottom-7\r
                left-3\r
\r
                hidden\r
\r
                text-[72px]\r
                font-semibold\r
                leading-none\r
\r
                text-[#1D2C4F]/[0.055]\r
\r
                lg:block\r
                xl:text-[90px]\r
              `,children:"08"})]}),a.jsxs("div",{dir:"rtl",className:`\r
              flex\r
              flex-col\r
              justify-center\r
\r
              lg:col-span-6\r
              lg:order-2\r
              lg:pr-8\r
\r
              xl:pr-12\r
            `,children:[a.jsxs("h2",{"data-founder-title":!0,className:`\r
                max-w-[650px]\r
\r
                pb-[0.12em]\r
\r
                font-arabic\r
\r
                text-[clamp(2.8rem,6vw,5.3rem)]\r
                font-bold\r
                leading-[1.15]\r
\r
                tracking-[-0.045em]\r
\r
                text-[#1D2C4F]\r
              `,children:["من الخبرة",a.jsx("br",{}),a.jsx("span",{className:"text-[#6F95A4]",children:"إلى المنهج."})]}),a.jsxs("div",{"data-founder-copy":!0,className:`\r
                mt-7\r
                max-w-[560px]\r
\r
                sm:mt-8\r
              `,children:[a.jsx("p",{className:`\r
                  font-arabic\r
\r
                  text-[14px]\r
                  leading-8\r
\r
                  text-[#1D2C4F]/60\r
\r
                  sm:text-[16px]\r
                  sm:leading-9\r
                `,children:"رؤية جمعت بين الخبرة العملية في الأسواق المالية وبناء منهج يساعد المتعلم على فهم الأسواق واتخاذ قرارات مستقلة."}),a.jsx("div",{className:`\r
                  relative\r
\r
                  mt-8\r
\r
                  border-r\r
                  border-[#84A4B1]\r
\r
                  pr-5\r
\r
                  sm:mt-10\r
                  sm:pr-6\r
                `,children:a.jsx("p",{className:`\r
                    font-arabic\r
\r
                    text-[17px]\r
                    font-medium\r
                    leading-8\r
\r
                    text-[#1D2C4F]\r
\r
                    sm:text-[19px]\r
                    sm:leading-9\r
                  `,children:"المعرفة ليست أن تعرف أين يتحرك السوق، بل أن تفهم لماذا تتحرك معه أو بدونه."})})]}),a.jsxs("div",{"data-founder-details":!0,className:`\r
                mt-10\r
\r
                border-t\r
                border-[#1D2C4F]/10\r
\r
                pt-6\r
\r
                sm:mt-12\r
                sm:pt-7\r
              `,children:[a.jsxs("div",{"data-founder-detail":!0,className:`\r
                  flex\r
                  items-end\r
                  justify-between\r
                  gap-6\r
                `,children:[a.jsxs("div",{children:[a.jsx("span",{className:`\r
                      block\r
\r
                      text-[10px]\r
                      font-medium\r
\r
                      text-[#1D2C4F]/35\r
                    `,children:"المؤسس"}),a.jsx("p",{className:`\r
                      mt-1\r
\r
                      font-arabic\r
\r
                      text-[20px]\r
                      font-bold\r
\r
                      text-[#1D2C4F]\r
\r
                      sm:text-[22px]\r
                    `,children:"عبدالعزيز الشريف"})]}),a.jsx("span",{className:`\r
                    hidden\r
\r
                    text-[8px]\r
                    tracking-[0.18em]\r
\r
                    text-[#1D2C4F]/25\r
\r
                    sm:block\r
                  `,children:"FOUNDER / FNAR"})]}),a.jsxs("div",{"data-founder-detail":!0,className:`\r
                  mt-6\r
\r
                  flex\r
                  flex-wrap\r
                  items-center\r
                  gap-x-6\r
                  gap-y-3\r
                `,children:[a.jsxs("span",{className:`\r
                    flex\r
                    items-center\r
                    gap-2\r
\r
                    text-[11px]\r
\r
                    text-[#1D2C4F]/45\r
                  `,children:[a.jsx("span",{className:`\r
                      h-[4px]\r
                      w-[4px]\r
\r
                      rounded-full\r
\r
                      bg-[#84A4B1]\r
                    `}),"خبرة عملية"]}),a.jsxs("span",{className:`\r
                    flex\r
                    items-center\r
                    gap-2\r
\r
                    text-[11px]\r
\r
                    text-[#1D2C4F]/45\r
                  `,children:[a.jsx("span",{className:`\r
                      h-[4px]\r
                      w-[4px]\r
\r
                      rounded-full\r
\r
                      bg-[#84A4B1]\r
                    `}),"منهج تعليمي"]}),a.jsxs("span",{className:`\r
                    flex\r
                    items-center\r
                    gap-2\r
\r
                    text-[11px]\r
\r
                    text-[#1D2C4F]/45\r
                  `,children:[a.jsx("span",{className:`\r
                      h-[4px]\r
                      w-[4px]\r
\r
                      rounded-full\r
\r
                      bg-[#84A4B1]\r
                    `}),"قرار مستقل"]})]})]}),a.jsx("div",{"data-founder-detail":!0,className:`\r
                mt-9\r
\r
                sm:mt-10\r
              `,children:a.jsxs("a",{href:"/about",className:`\r
                  group\r
\r
                  inline-flex\r
                  items-center\r
                  gap-4\r
\r
                  font-arabic\r
                  text-[13px]\r
                  font-medium\r
\r
                  text-[#1D2C4F]\r
\r
                  transition-colors\r
                  duration-300\r
\r
                  hover:text-[#6F95A4]\r
                `,"data-cursor":"hover",children:[a.jsx("span",{children:"تعرف على فنر"}),a.jsx("span",{className:`\r
                    flex\r
                    h-9\r
                    w-9\r
\r
                    items-center\r
                    justify-center\r
\r
                    rounded-full\r
\r
                    border\r
                    border-[#1D2C4F]/15\r
\r
                    transition-[transform,border-color,background-color]\r
                    duration-300\r
\r
                    group-hover:-translate-x-1\r
                    group-hover:border-[#84A4B1]/60\r
                    group-hover:bg-[#84A4B1]/10\r
                  `,children:"←"})]})})]})]})]})]})}E.registerPlugin(Y);const N3=[{label:"لوحة التحكم",active:!0},{label:"المسارات"},{label:"دروسي"},{label:"المعرفة"},{label:"الإعدادات"}];function k3(){const t=b.useRef(null),e=$r();b.useEffect(()=>{const n=t.current;if(!n||e)return;const i=E.context(()=>{E.fromTo("[data-dash-intro]",{opacity:0,y:30},{opacity:1,y:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:n,start:"top 78%",once:!0}}),E.fromTo("[data-dash-window]",{opacity:0,y:55,scale:.985},{opacity:1,y:0,scale:1,duration:1.1,ease:"power4.out",scrollTrigger:{trigger:"[data-dash-window]",start:"top 82%",once:!0}});const s=n.querySelectorAll("[data-dash-reveal]");E.fromTo(s,{opacity:0,y:18},{opacity:1,y:0,duration:.65,stagger:.06,ease:"power3.out",scrollTrigger:{trigger:"[data-dash-window]",start:"top 72%",once:!0}}),E.fromTo("[data-dash-progress]",{scaleX:0},{scaleX:1,duration:1.25,delay:.25,ease:"power3.out",transformOrigin:"right center",scrollTrigger:{trigger:"[data-dash-progress]",start:"top 90%",once:!0}})},n);return()=>i.revert()},[e]);const r=pd.user.progressPercent;return a.jsxs("section",{ref:t,id:"dashboard",className:`\r
        relative\r
        overflow-hidden\r
        bg-[#101E38]\r
        py-20\r
        sm:py-24\r
        lg:py-28\r
        xl:py-32\r
      `,children:[a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 opacity-60",style:{backgroundImage:`
            linear-gradient(rgba(132,164,177,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132,164,177,.035) 1px, transparent 1px)
          `,backgroundSize:"80px 80px"}}),a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          left-1/2\r
          top-[30%]\r
          h-[700px]\r
          w-[900px]\r
          -translate-x-1/2\r
          rounded-full\r
          bg-[#84A4B1]/[0.07]\r
          blur-[150px]\r
        `}),a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          left-1/2\r
          top-0\r
          h-px\r
          w-[70%]\r
          -translate-x-1/2\r
          bg-gradient-to-r\r
          from-transparent\r
          via-[#84A4B1]/30\r
          to-transparent\r
        `}),a.jsxs("div",{className:`\r
          relative\r
          z-10\r
          mx-auto\r
          max-w-[1320px]\r
          px-5\r
          sm:px-6\r
          lg:px-10\r
        `,children:[a.jsxs("div",{"data-dash-intro":!0,dir:"rtl",className:`\r
            mx-auto\r
            mb-12\r
            max-w-[760px]\r
            text-center\r
            sm:mb-14\r
            lg:mb-16\r
          `,children:[a.jsxs("div",{className:"mb-5 flex items-center justify-center gap-3",children:[a.jsx("span",{className:"h-px w-8 bg-[#84A4B1]/45"}),a.jsx("span",{className:`\r
                text-[9px]\r
                font-medium\r
                tracking-[0.2em]\r
                text-[#84A4B1]\r
                sm:text-[10px]\r
              `,children:"منصة فنر"}),a.jsx("span",{className:"h-px w-8 bg-[#84A4B1]/45"})]}),a.jsxs("h2",{className:`\r
              pb-[0.12em]\r
              font-arabic\r
              text-[clamp(2.7rem,6vw,5rem)]\r
              font-bold\r
              leading-[1.15]\r
              tracking-[-0.045em]\r
              text-[#F3F3F1]\r
            `,children:["تعلمك.",a.jsxs("span",{className:"text-[#84A4B1]",children:[" ","في مكان واحد."]})]}),a.jsx("p",{className:`\r
              mx-auto\r
              mt-5\r
              max-w-[560px]\r
              font-arabic\r
              text-[13px]\r
              leading-7\r
              text-[#F3F3F1]/45\r
              sm:text-[15px]\r
              sm:leading-8\r
            `,children:"تجربة تعليمية مصممة لتبقي مسارك واضحاً، تقدمك مرئياً، ومعرفتك منظمة."})]}),a.jsxs("div",{"data-dash-window":!0,dir:"rtl",className:`\r
            relative\r
            mx-auto\r
            max-w-[1160px]\r
            overflow-hidden\r
            border\r
            border-white/[0.09]\r
            bg-[#142541]\r
            shadow-[0_35px_100px_rgba(0,0,0,.32)]\r
          `,children:[a.jsxs("div",{className:`\r
              flex\r
              h-12\r
              items-center\r
              justify-between\r
              border-b\r
              border-white/[0.07]\r
              bg-[#102039]\r
              px-4\r
              sm:px-5\r
            `,children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"h-[6px] w-[6px] rounded-full bg-[#84A4B1]/70"}),a.jsx("span",{className:"h-[6px] w-[6px] rounded-full bg-white/15"}),a.jsx("span",{className:"h-[6px] w-[6px] rounded-full bg-white/10"})]}),a.jsx("span",{className:`\r
                text-[8px]\r
                tracking-[0.18em]\r
                text-white/25\r
              `,children:"FNAR / LEARNING PLATFORM"})]}),a.jsxs("div",{className:"flex min-h-[600px]",children:[a.jsxs("aside",{className:`\r
                hidden\r
                w-[220px]\r
                shrink-0\r
                border-l\r
                border-white/[0.07]\r
                bg-[#102039]/70\r
                p-5\r
                md:flex\r
                md:flex-col\r
              `,children:[a.jsx("div",{"data-dash-reveal":!0,className:`\r
                  border-b\r
                  border-white/[0.07]\r
                  pb-6\r
                `,children:a.jsx("img",{src:"/brand/fnar-icon.svg",alt:"فنر",className:`\r
                    h-[58px]\r
                    w-auto\r
                    max-w-[150px]\r
                    object-contain\r
                    object-right\r
                  `})}),a.jsx("nav",{className:"mt-6 space-y-1",children:N3.map((n,i)=>a.jsxs("button",{type:"button","data-dash-reveal":!0,className:`
                      group
                      relative
                      flex
                      w-full
                      items-center
                      gap-3
                      px-3
                      py-2.5
                      text-right
                      font-arabic
                      text-[11px]
                      transition-colors
                      duration-300

                      ${n.active?"bg-[#84A4B1]/10 text-[#F3F3F1]":"text-[#F3F3F1]/35 hover:bg-white/[0.025] hover:text-[#F3F3F1]/70"}
                    `,children:[a.jsxs("span",{className:`
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        text-[8px]

                        ${n.active?"text-[#84A4B1]":"text-white/20"}
                      `,children:["0",i+1]}),n.label,n.active&&a.jsx("span",{className:`\r
                          absolute\r
                          bottom-2\r
                          right-0\r
                          top-2\r
                          w-[2px]\r
                          bg-[#84A4B1]\r
                        `})]},n.label))}),a.jsxs("div",{"data-dash-reveal":!0,className:`\r
                  mt-auto\r
                  border-t\r
                  border-white/[0.07]\r
                  pt-5\r
                `,children:[a.jsx("p",{className:`\r
                    font-arabic\r
                    text-[10px]\r
                    text-white/35\r
                  `,children:"التعلم يبدأ بالفهم"}),a.jsx("p",{className:`\r
                    mt-2\r
                    text-[7px]\r
                    tracking-[0.18em]\r
                    text-[#84A4B1]/40\r
                  `,children:"FNAR PLATFORM"})]})]}),a.jsxs("main",{className:`\r
                min-w-0\r
                flex-1\r
                p-4\r
                sm:p-6\r
                lg:p-8\r
              `,children:[a.jsxs("div",{"data-dash-reveal":!0,className:`\r
                  mb-7\r
                  flex\r
                  items-center\r
                  justify-between\r
                  gap-4\r
                `,children:[a.jsxs("div",{children:[a.jsx("p",{className:`\r
                      mb-1\r
                      font-arabic\r
                      text-[10px]\r
                      text-[#84A4B1]\r
                    `,children:"مرحباً بك"}),a.jsx("h3",{className:`\r
                      font-arabic\r
                      text-[20px]\r
                      font-bold\r
                      text-[#F3F3F1]\r
                      sm:text-[23px]\r
                    `,children:"واصل رحلتك المعرفية"}),a.jsx("p",{className:`\r
                      mt-1\r
                      hidden\r
                      font-arabic\r
                      text-[9px]\r
                      text-white/30\r
                      sm:block\r
                    `,children:"تقدم مستمر، وفهم أعمق للأسواق."})]}),a.jsx("div",{className:"md:hidden",children:a.jsx("img",{src:"/brand/fnar-icon.svg",alt:"فنر",className:`\r
                      h-[42px]\r
                      w-auto\r
                      max-w-[110px]\r
                      object-contain\r
                    `})})]}),a.jsxs("div",{"data-dash-reveal":!0,className:`\r
                  relative\r
                  mb-4\r
                  overflow-hidden\r
                  border\r
                  border-[#84A4B1]/15\r
                  bg-[#172B49]\r
                  p-5\r
                  sm:p-6\r
                  lg:p-7\r
                `,children:[a.jsx("div",{"aria-hidden":"true",className:`\r
                    pointer-events-none\r
                    absolute\r
                    -left-16\r
                    -top-20\r
                    h-56\r
                    w-56\r
                    rounded-full\r
                    bg-[#84A4B1]/[0.07]\r
                    blur-[50px]\r
                  `}),a.jsxs("div",{className:`\r
                    relative\r
                    z-10\r
                    grid\r
                    gap-6\r
                    md:grid-cols-[1fr_auto]\r
                    md:items-end\r
                  `,children:[a.jsxs("div",{children:[a.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[a.jsx("span",{className:`\r
                          h-[5px]\r
                          w-[5px]\r
                          rounded-full\r
                          bg-[#84A4B1]\r
                        `}),a.jsx("span",{className:`\r
                          font-arabic\r
                          text-[9px]\r
                          text-[#84A4B1]\r
                        `,children:"مسارك الحالي"})]}),a.jsx("h4",{className:`\r
                        font-arabic\r
                        text-[20px]\r
                        font-bold\r
                        text-[#F3F3F1]\r
                        sm:text-[24px]\r
                      `,children:pd.currentPath.title}),a.jsx("p",{className:`\r
                        mt-2\r
                        max-w-[500px]\r
                        font-arabic\r
                        text-[10px]\r
                        leading-5\r
                        text-[#F3F3F1]/35\r
                        sm:text-[11px]\r
                      `,children:"واصل التعلم من حيث توقفت، وأكمل خطواتك نحو فهم أعمق للأسواق."})]}),a.jsxs("div",{className:"flex items-end gap-1",children:[a.jsx("span",{className:`\r
                        text-[38px]\r
                        font-semibold\r
                        leading-none\r
                        tracking-[-0.05em]\r
                        text-[#F3F3F1]\r
                        sm:text-[46px]\r
                      `,children:r}),a.jsx("span",{className:`\r
                        mb-1\r
                        text-[13px]\r
                        text-[#84A4B1]\r
                      `,children:"%"})]})]}),a.jsxs("div",{className:"relative z-10 mt-6",children:[a.jsx("div",{className:`\r
                      h-[3px]\r
                      w-full\r
                      overflow-hidden\r
                      bg-white/[0.07]\r
                    `,children:a.jsx("div",{"data-dash-progress":!0,className:`\r
                        h-full\r
                        origin-right\r
                        bg-[#84A4B1]\r
                      `,style:{width:`${r}%`}})}),a.jsxs("div",{className:`\r
                      mt-2\r
                      flex\r
                      justify-between\r
                      text-[8px]\r
                      text-white/20\r
                    `,children:[a.jsx("span",{children:"البداية"}),a.jsx("span",{children:"إتمام المسار"})]})]})]}),a.jsxs("div",{className:`\r
                  mb-4\r
                  grid\r
                  grid-cols-2\r
                  gap-3\r
                  md:grid-cols-3\r
                `,children:[a.jsxs("div",{"data-dash-reveal":!0,className:`\r
                    border\r
                    border-white/[0.07]\r
                    bg-[#102039]/65\r
                    p-4\r
                    sm:p-5\r
                  `,children:[a.jsx("span",{className:`\r
                      font-arabic\r
                      text-[9px]\r
                      text-white/25\r
                    `,children:"التقدم"}),a.jsxs("div",{className:"mt-3 flex items-end gap-1",children:[a.jsx("strong",{className:`\r
                        text-[23px]\r
                        font-semibold\r
                        text-[#84A4B1]\r
                      `,children:r}),a.jsx("span",{className:"mb-1 text-[9px] text-white/25",children:"%"})]})]}),a.jsxs("div",{"data-dash-reveal":!0,className:`\r
                    border\r
                    border-white/[0.07]\r
                    bg-[#102039]/65\r
                    p-4\r
                    sm:p-5\r
                  `,children:[a.jsx("span",{className:`\r
                      font-arabic\r
                      text-[9px]\r
                      text-white/25\r
                    `,children:"الدروس المتبقية"}),a.jsxs("div",{className:"mt-3",children:[a.jsx("strong",{className:`\r
                        font-arabic\r
                        text-[23px]\r
                        font-semibold\r
                        text-[#F3F3F1]\r
                      `,children:"8"}),a.jsx("span",{className:`\r
                        mr-1\r
                        font-arabic\r
                        text-[9px]\r
                        text-white/25\r
                      `,children:"دروس"})]})]}),a.jsxs("div",{"data-dash-reveal":!0,className:`\r
                    col-span-2\r
                    border\r
                    border-white/[0.07]\r
                    bg-[#102039]/65\r
                    p-4\r
                    sm:p-5\r
                    md:col-span-1\r
                  `,children:[a.jsx("span",{className:`\r
                      font-arabic\r
                      text-[9px]\r
                      text-white/25\r
                    `,children:"حالة المسار"}),a.jsxs("div",{className:"mt-3 flex items-center gap-2",children:[a.jsx("span",{className:`\r
                        h-[5px]\r
                        w-[5px]\r
                        rounded-full\r
                        bg-[#84A4B1]\r
                        shadow-[0_0_8px_rgba(132,164,177,.65)]\r
                      `}),a.jsx("strong",{className:`\r
                        font-arabic\r
                        text-[12px]\r
                        font-medium\r
                        text-[#F3F3F1]\r
                      `,children:"قيد التقدم"})]})]})]}),a.jsxs("div",{"data-dash-reveal":!0,className:`\r
                  overflow-hidden\r
                  border\r
                  border-white/[0.07]\r
                  bg-[#102039]/65\r
                `,children:[a.jsxs("div",{className:`\r
                    flex\r
                    items-center\r
                    justify-between\r
                    border-b\r
                    border-white/[0.07]\r
                    px-4\r
                    py-4\r
                    sm:px-5\r
                  `,children:[a.jsxs("div",{children:[a.jsx("p",{className:`\r
                        font-arabic\r
                        text-[12px]\r
                        font-medium\r
                        text-[#F3F3F1]\r
                      `,children:"أكمل التعلم"}),a.jsx("p",{className:`\r
                        mt-1\r
                        font-arabic\r
                        text-[8px]\r
                        text-white/25\r
                      `,children:"الدروس الأخيرة في مسارك"})]}),a.jsx("span",{className:`\r
                      hidden\r
                      text-[8px]\r
                      tracking-[0.15em]\r
                      text-[#84A4B1]/55\r
                      sm:block\r
                    `,children:"RECENT LESSONS"})]}),a.jsx("div",{className:"divide-y divide-white/[0.06]",children:pd.recentLessons.map((n,i)=>a.jsxs("button",{type:"button",className:`\r
                          group\r
                          flex\r
                          w-full\r
                          items-center\r
                          gap-3\r
                          px-4\r
                          py-3.5\r
                          text-right\r
                          transition-colors\r
                          duration-300\r
                          hover:bg-white/[0.025]\r
                          sm:gap-4\r
                          sm:px-5\r
                          sm:py-4\r
                        `,children:[a.jsxs("div",{className:`\r
                            flex\r
                            h-8\r
                            w-8\r
                            shrink-0\r
                            items-center\r
                            justify-center\r
                            border\r
                            border-white/[0.08]\r
                            text-[9px]\r
                            text-white/25\r
                            transition-colors\r
                            duration-300\r
                            group-hover:border-[#84A4B1]/25\r
                            group-hover:text-[#84A4B1]\r
                          `,children:["0",i+1]}),a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsx("p",{className:`\r
                              truncate\r
                              font-arabic\r
                              text-[11px]\r
                              font-medium\r
                              text-[#F3F3F1]/80\r
                              sm:text-[12px]\r
                            `,children:n.title}),a.jsxs("p",{className:`\r
                              mt-1\r
                              font-arabic\r
                              text-[8px]\r
                              text-white/25\r
                            `,children:[n.durationMinutes," دقيقة"]})]}),n.isPreview&&a.jsx("span",{className:`\r
                              hidden\r
                              border\r
                              border-[#84A4B1]/20\r
                              px-2\r
                              py-1\r
                              font-arabic\r
                              text-[8px]\r
                              text-[#84A4B1]\r
                              sm:block\r
                            `,children:"معاينة"}),a.jsx("span",{className:`\r
                            flex\r
                            h-8\r
                            w-8\r
                            shrink-0\r
                            items-center\r
                            justify-center\r
                            rounded-full\r
                            border\r
                            border-white/[0.07]\r
                            text-[12px]\r
                            text-white/25\r
                            transition-all\r
                            duration-300\r
                            group-hover:-translate-x-1\r
                            group-hover:border-[#84A4B1]/25\r
                            group-hover:text-[#84A4B1]\r
                          `,children:"←"})]},n.id))})]})]})]})]}),a.jsxs("div",{dir:"rtl",className:`\r
            mx-auto\r
            mt-7\r
            flex\r
            max-w-[1160px]\r
            items-center\r
            justify-between\r
            gap-6\r
            border-t\r
            border-white/[0.06]\r
            pt-5\r
          `,children:[a.jsx("p",{className:`\r
              font-arabic\r
              text-[9px]\r
              text-white/25\r
              sm:text-[10px]\r
            `,children:"كل ما تحتاجه لمواصلة التعلم بوضوح."}),a.jsx("span",{className:`\r
              hidden\r
              text-[8px]\r
              tracking-[0.18em]\r
              text-[#84A4B1]/35\r
              sm:block\r
            `,children:"FNAR / 09"})]})]})]})}E.registerPlugin(Y);const S3=[{number:"01",title:"مجتمع جاد من المتعلمين",description:"بيئة تعليمية هادئة وجادة، تركز على الفهم الحقيقي بعيداً عن الضوضاء."},{number:"02",title:"تعليم تطبيقي",description:"المفاهيم لا تتوقف عند الشرح، بل ترتبط بأمثلة واقعية من الأسواق."},{number:"03",title:"منهج مترابط",description:"كل مرحلة تبني على ما قبلها، لتتكوّن لديك صورة متكاملة لا معلومات متفرقة."},{number:"04",title:"رحلة تناسب مستواك",description:"ابدأ من الأساس أو طوّر فهمك الحالي ضمن مسار واضح ومتدرج."}];function C3(){const t=b.useRef(null),e=$r();return b.useEffect(()=>{const r=t.current;if(!r||e)return;const n=E.context(()=>{E.fromTo("[data-community-intro]",{opacity:0,y:35},{opacity:1,y:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 75%",once:!0}}),E.fromTo("[data-community-point]",{opacity:0,y:28},{opacity:1,y:0,duration:.7,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:"[data-community-points]",start:"top 78%",once:!0}}),E.fromTo("[data-community-line]",{scaleY:0},{scaleY:1,duration:1.2,ease:"power3.inOut",transformOrigin:"top center",scrollTrigger:{trigger:"[data-community-points]",start:"top 80%",once:!0}})},r);return()=>n.revert()},[e]),a.jsxs("section",{ref:t,id:"community",className:`\r
        relative\r
        overflow-hidden\r
        bg-[#F3F3F1]\r
\r
        py-20\r
        sm:py-24\r
        lg:py-28\r
        xl:py-32\r
      `,children:[a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          inset-0\r
          opacity-[0.45]\r
        `,style:{backgroundImage:`
            linear-gradient(rgba(29,44,79,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29,44,79,.025) 1px, transparent 1px)
          `,backgroundSize:"72px 72px"}}),a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          -right-[15%]\r
          top-[10%]\r
\r
          h-[520px]\r
          w-[520px]\r
\r
          rounded-full\r
\r
          bg-[#84A4B1]/[0.09]\r
          blur-[120px]\r
        `}),a.jsxs("div",{className:`\r
          relative\r
          z-10\r
\r
          mx-auto\r
          max-w-[1320px]\r
\r
          px-5\r
          sm:px-6\r
          lg:px-10\r
        `,children:[a.jsxs("div",{dir:"rtl",className:`\r
            grid\r
            grid-cols-1\r
\r
            gap-14\r
\r
            lg:grid-cols-[0.9fr_1.1fr]\r
            lg:gap-20\r
\r
            xl:gap-28\r
          `,children:[a.jsxs("div",{"data-community-intro":!0,className:`\r
              lg:sticky\r
              lg:top-32\r
              lg:self-start\r
            `,children:[a.jsxs("div",{className:`\r
                mb-6\r
                flex\r
                items-center\r
                gap-3\r
              `,children:[a.jsx("span",{className:`\r
                  h-px\r
                  w-9\r
                  bg-[#84A4B1]\r
                `}),a.jsx("span",{className:`\r
                  font-arabic\r
\r
                  text-[10px]\r
                  font-medium\r
\r
                  tracking-[0.12em]\r
\r
                  text-[#617E8B]\r
                `,children:"مجتمع فنر"})]}),a.jsxs("h2",{className:`\r
                max-w-[580px]\r
\r
                pb-[0.12em]\r
\r
                font-arabic\r
\r
                text-[clamp(2.7rem,6vw,5.6rem)]\r
                font-bold\r
\r
                leading-[1.12]\r
                tracking-[-0.05em]\r
\r
                text-[#1D2C4F]\r
              `,children:["الفهم لا ينمو",a.jsx("br",{}),a.jsx("span",{className:"text-[#84A4B1]",children:"في العزلة."})]}),a.jsx("p",{className:`\r
                mt-7\r
                max-w-[470px]\r
\r
                font-arabic\r
\r
                text-[14px]\r
                leading-8\r
\r
                text-[#1D2C4F]/55\r
\r
                sm:text-[15px]\r
              `,children:"فنر ليس مجرد محتوى تشاهده ثم تغادر. بل بيئة تعليمية تجمع بين المنهج، التطبيق، ومجتمع يشاركك نفس الجدية تجاه التعلم."}),a.jsx("div",{className:`\r
                mt-10\r
\r
                max-w-[430px]\r
\r
                border-r-2\r
                border-[#84A4B1]/60\r
\r
                pr-5\r
              `,children:a.jsxs("p",{className:`\r
                  font-arabic\r
\r
                  text-[13px]\r
                  font-medium\r
                  leading-7\r
\r
                  text-[#1D2C4F]/75\r
                `,children:["لا ضوضاء. لا مطاردة لتوصيات.",a.jsx("br",{}),"مساحة مخصصة للتعلم والفهم."]})}),a.jsxs("div",{className:`\r
                mt-12\r
                hidden\r
\r
                items-center\r
                gap-4\r
\r
                lg:flex\r
              `,children:[a.jsx("span",{className:`\r
                  text-[9px]\r
                  tracking-[0.2em]\r
\r
                  text-[#1D2C4F]/25\r
                `,children:"FNAR / COMMUNITY"}),a.jsx("span",{className:`\r
                  h-px\r
                  w-16\r
\r
                  bg-[#1D2C4F]/10\r
                `})]})]}),a.jsxs("div",{"data-community-points":!0,className:"relative",children:[a.jsx("div",{"aria-hidden":"true",className:`\r
                absolute\r
                bottom-8\r
                right-[19px]\r
                top-8\r
\r
                hidden\r
                w-px\r
\r
                bg-[#1D2C4F]/10\r
\r
                sm:block\r
              `,children:a.jsx("div",{"data-community-line":!0,className:`\r
                  h-full\r
                  w-full\r
\r
                  origin-top\r
\r
                  bg-gradient-to-b\r
                  from-[#84A4B1]/70\r
                  via-[#84A4B1]/25\r
                  to-transparent\r
                `})}),a.jsx("div",{className:"space-y-3 sm:space-y-4",children:S3.map(r=>a.jsxs("article",{"data-community-point":!0,"data-cursor":"hover",className:`\r
                    group\r
                    relative\r
\r
                    border\r
                    border-[#1D2C4F]/[0.07]\r
\r
                    bg-[#F8F8F6]/70\r
\r
                    px-5\r
                    py-7\r
\r
                    transition-all\r
                    duration-500\r
\r
                    hover:-translate-y-[2px]\r
                    hover:border-[#84A4B1]/35\r
                    hover:bg-white\r
\r
                    sm:px-7\r
                    sm:py-8\r
\r
                    lg:px-8\r
                    lg:py-9\r
                  `,children:[a.jsxs("div",{className:`\r
                      flex\r
                      items-start\r
                      gap-5\r
\r
                      sm:gap-7\r
                    `,children:[a.jsx("div",{className:`\r
                        relative\r
                        z-10\r
\r
                        flex\r
                        h-10\r
                        w-10\r
                        shrink-0\r
\r
                        items-center\r
                        justify-center\r
\r
                        rounded-full\r
\r
                        border\r
                        border-[#1D2C4F]/10\r
\r
                        bg-[#F3F3F1]\r
\r
                        transition-all\r
                        duration-500\r
\r
                        group-hover:border-[#84A4B1]/60\r
                        group-hover:bg-[#1D2C4F]\r
                      `,children:a.jsx("span",{className:`\r
                          text-[9px]\r
                          font-medium\r
\r
                          text-[#1D2C4F]/40\r
\r
                          transition-colors\r
                          duration-500\r
\r
                          group-hover:text-[#F3F3F1]\r
                        `,children:r.number})}),a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsxs("div",{className:`\r
                          flex\r
                          items-start\r
                          justify-between\r
                          gap-5\r
                        `,children:[a.jsx("h3",{className:`\r
                            font-arabic\r
\r
                            text-[17px]\r
                            font-bold\r
                            leading-7\r
\r
                            text-[#1D2C4F]\r
\r
                            sm:text-[19px]\r
                          `,children:r.title}),a.jsx("span",{"aria-hidden":"true",className:`\r
                            mt-1\r
                            hidden\r
                            h-8\r
                            w-8\r
                            shrink-0\r
\r
                            items-center\r
                            justify-center\r
\r
                            rounded-full\r
\r
                            border\r
                            border-[#1D2C4F]/10\r
\r
                            text-[12px]\r
\r
                            text-[#1D2C4F]/30\r
\r
                            transition-all\r
                            duration-500\r
\r
                            group-hover:-translate-x-1\r
                            group-hover:border-[#84A4B1]/50\r
                            group-hover:bg-[#84A4B1]/10\r
                            group-hover:text-[#1D2C4F]\r
\r
                            sm:flex\r
                          `,children:"←"})]}),a.jsx("p",{className:`\r
                          mt-3\r
                          max-w-[520px]\r
\r
                          font-arabic\r
\r
                          text-[12px]\r
                          leading-7\r
\r
                          text-[#1D2C4F]/50\r
\r
                          transition-colors\r
                          duration-500\r
\r
                          group-hover:text-[#1D2C4F]/65\r
\r
                          sm:text-[13px]\r
                        `,children:r.description})]})]}),a.jsx("div",{"aria-hidden":"true",className:`\r
                      absolute\r
                      bottom-0\r
                      right-0\r
\r
                      h-[2px]\r
                      w-0\r
\r
                      bg-[#84A4B1]\r
\r
                      transition-all\r
                      duration-700\r
\r
                      group-hover:w-full\r
                    `})]},r.number))})]})]}),a.jsxs("div",{dir:"rtl",className:`\r
            mt-16\r
\r
            flex\r
            flex-col\r
            gap-5\r
\r
            border-t\r
            border-[#1D2C4F]/10\r
\r
            pt-6\r
\r
            sm:flex-row\r
            sm:items-center\r
            sm:justify-between\r
\r
            lg:mt-24\r
          `,children:[a.jsx("p",{className:`\r
              font-arabic\r
              text-[11px]\r
\r
              text-[#1D2C4F]/40\r
            `,children:"لأن جودة البيئة جزء من جودة التعلم."}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:`\r
                h-[5px]\r
                w-[5px]\r
\r
                rounded-full\r
\r
                bg-[#84A4B1]\r
              `}),a.jsx("span",{className:`\r
                text-[8px]\r
                tracking-[0.18em]\r
\r
                text-[#1D2C4F]/25\r
              `,children:"LEARN · UNDERSTAND · GROW"})]})]})]})]})}E.registerPlugin(Y);function F3(){const t=b.useRef(null),e=$r(),r=Ti();b.useEffect(()=>{const i=t.current;if(!i||e)return;const s=E.context(()=>{E.fromTo("[data-con-heading]",{y:40,opacity:0,clipPath:"inset(0 0 100% 0)"},{y:0,opacity:1,clipPath:"inset(0 0 0% 0)",duration:1,ease:"power4.out",scrollTrigger:{trigger:i,start:"top 75%",once:!0}}),E.fromTo("[data-con-card]",{y:40,opacity:0},{y:0,opacity:1,duration:.6,ease:"power3.out",stagger:.08,scrollTrigger:{trigger:"[data-con-grid]",start:"top 72%",once:!0}}),E.fromTo("[data-con-cta]",{y:25,opacity:0},{y:0,opacity:1,duration:.6,ease:"power3.out",scrollTrigger:{trigger:"[data-con-cta]",start:"top 85%",once:!0}})},i);return()=>s.revert()},[e]);const n=Rv.slice(0,3);return a.jsxs("section",{ref:t,id:"consultations-preview",dir:"rtl",className:"relative bg-[#0F1E36] py-24 lg:py-32 overflow-hidden",children:[a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 opacity-30",style:{backgroundImage:"linear-gradient(rgba(132,164,177,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.04) 1px, transparent 1px)",backgroundSize:"80px 80px"}}),a.jsxs("div",{className:"relative z-10 mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10",children:[a.jsxs("div",{"data-con-heading":!0,className:"mb-16 lg:mb-20 flex flex-col items-start",children:[a.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[a.jsx("span",{className:"h-px w-9 bg-[#84A4B1]/60"}),a.jsx("span",{className:"font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]",children:"الاستشارات"})]}),a.jsxs("h2",{className:"font-arabic text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#F3F3F1] max-w-[700px]",children:["استشارات احترافية",a.jsx("br",{}),"لكل مستوى من الحاجة."]}),a.jsx("p",{className:"mt-5 max-w-[520px] font-arabic text-[15px] leading-8 text-[#F3F3F1]/50",children:"خمس استشارات متدرجة من إعادة التنظيم بعد الخسائر إلى استشارة الشركات وأصحاب رؤوس الأموال."})]}),a.jsx("div",{"data-con-grid":!0,className:"grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F3F3F1]/8",children:n.map(i=>a.jsxs("div",{"data-con-card":!0,className:"group relative bg-[#0F1E36] p-7 transition-colors duration-500 hover:bg-[#152742]","data-cursor":"hover",children:[a.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[a.jsx("span",{className:"font-sans text-[1.5rem] font-bold leading-none text-[#84A4B1]/40",children:i.number}),a.jsxs("span",{className:"font-arabic text-[10px] font-medium tracking-[0.12em] text-[#F3F3F1]/30",children:[i.durationMinutes," دقيقة"]})]}),a.jsx("h3",{className:"mb-3 font-arabic text-[16px] font-bold leading-snug text-[#F3F3F1]",children:i.title}),a.jsx("p",{className:"mb-6 font-arabic text-[12px] leading-6 text-[#F3F3F1]/45",children:i.targetAudience}),a.jsxs("div",{className:"flex items-end justify-between border-t border-[#F3F3F1]/8 pt-4",children:[a.jsx("span",{className:"font-arabic text-[10px] text-[#F3F3F1]/35",children:"السعر"}),a.jsxs("span",{className:"font-arabic text-[18px] font-bold text-[#F3F3F1]",children:[i.priceKWD," ",a.jsx("span",{className:"text-[12px] font-normal text-[#F3F3F1]/50",children:"د.ك"})]})]}),a.jsx("div",{className:"absolute bottom-0 left-0 h-px w-0 bg-[#84A4B1] transition-all duration-500 group-hover:w-full"})]},i.id))}),a.jsx("div",{"data-con-cta":!0,className:"mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center",children:a.jsxs("a",{href:"/consultations",onClick:i=>{i.preventDefault(),r("/consultations"),window.scrollTo({top:0})},"data-cursor":"hover",className:"group relative flex min-h-[56px] min-w-[200px] items-center justify-between overflow-hidden rounded-full border border-[#F3F3F1]/20 bg-[#F3F3F1]/[0.05] px-5 pr-7 font-arabic text-[13px] font-semibold text-[#F3F3F1] transition-all duration-500 hover:-translate-y-[2px] hover:border-[#84A4B1]/50",children:[a.jsx("span",{children:"جميع الاستشارات"}),a.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full border border-[#F3F3F1]/15 text-[10px] transition-all duration-500 group-hover:-translate-x-1 group-hover:border-[#84A4B1]/40 group-hover:text-[#84A4B1]",children:"←"})]})})]})]})}E.registerPlugin(Y);function E3(){const t=b.useRef(null),e=$r(),r=Ti();return b.useEffect(()=>{const n=t.current;if(!n||e)return;const i=E.context(()=>{E.fromTo("[data-part-heading]",{y:40,opacity:0,clipPath:"inset(0 0 100% 0)"},{y:0,opacity:1,clipPath:"inset(0 0 0% 0)",duration:1,ease:"power4.out",scrollTrigger:{trigger:n,start:"top 75%",once:!0}}),E.fromTo("[data-part-card]",{y:50,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",stagger:.15,scrollTrigger:{trigger:"[data-part-grid]",start:"top 72%",once:!0}}),E.fromTo("[data-part-cta]",{y:25,opacity:0},{y:0,opacity:1,duration:.6,ease:"power3.out",scrollTrigger:{trigger:"[data-part-cta]",start:"top 85%",once:!0}})},n);return()=>i.revert()},[e]),a.jsxs("section",{ref:t,id:"partnerships-entry",dir:"rtl",className:"relative bg-[#F3F3F1] py-24 lg:py-32 overflow-hidden",children:[a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full blur-[120px]",style:{background:"rgba(132,164,177,.06)"}}),a.jsxs("div",{className:"relative z-10 mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10",children:[a.jsxs("div",{"data-part-heading":!0,className:"mb-16 lg:mb-20 flex flex-col items-start",children:[a.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[a.jsx("span",{className:"h-px w-9 bg-[#84A4B1]/60"}),a.jsx("span",{className:"font-arabic text-[10px] font-medium tracking-[0.2em] text-[#84A4B1]",children:"الشراكات"})]}),a.jsxs("h2",{className:"font-arabic text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#1D2C4F] max-w-[700px]",children:["فرص التعاون",a.jsx("br",{}),"والشراكة الاستراتيجية."]}),a.jsx("p",{className:"mt-5 max-w-[520px] font-arabic text-[15px] leading-8 text-[#1D2C4F]/55",children:"مساران: شراكات استراتيجية للشركات وأصحاب رؤوس الأموال، وشراكات تعاون مهني وتجاري."})]}),a.jsx("div",{"data-part-grid":!0,className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:Mv.map(n=>a.jsxs("div",{"data-part-card":!0,className:"group relative overflow-hidden border border-[#1D2C4F]/10 bg-[#F3F3F1] p-8 lg:p-10 transition-all duration-500 hover:border-[#84A4B1]/30 hover:shadow-[0_20px_60px_rgba(29,44,79,0.06)]","data-cursor":"hover",children:[a.jsxs("div",{className:"mb-4 flex items-center gap-4",children:[a.jsx("span",{className:"font-sans text-[2.5rem] font-bold leading-none text-[#1D2C4F]/15",children:n.number}),a.jsx("span",{className:"font-arabic text-[10px] font-medium tracking-[0.15em] text-[#84A4B1]",children:n.subtitle})]}),a.jsx("h3",{className:"mb-4 font-arabic text-[1.5rem] font-bold leading-snug text-[#1D2C4F]",children:n.title}),a.jsx("p",{className:"mb-6 font-arabic text-[13px] leading-7 text-[#1D2C4F]/55",children:n.description}),n.requiresCapital&&n.minimumCapitalKWD&&a.jsxs("div",{className:"mb-6 border-r-2 border-[#84A4B1]/30 pr-4 py-2",children:[a.jsx("p",{className:"font-arabic text-[11px] text-[#1D2C4F]/45",children:"الحد الأدنى لرأس المال المخصص للعمل"}),a.jsxs("p",{className:"font-arabic text-[16px] font-bold text-[#1D2C4F]",children:[n.minimumCapitalKWD.toLocaleString()," د.ك"]}),a.jsx("p",{className:"mt-1 font-arabic text-[10px] text-[#1D2C4F]/40",children:"رأس المال يبقى في محفظة العميل. استيفاء الحد الأدنى لا يضمن القبول."})]}),a.jsxs("div",{className:"flex flex-wrap gap-2",children:[n.audiences.slice(0,4).map(i=>a.jsx("span",{className:"rounded-full border border-[#1D2C4F]/10 px-3 py-1 font-arabic text-[10px] text-[#1D2C4F]/50",children:i},i)),n.audiences.length>4&&a.jsxs("span",{className:"font-arabic text-[10px] text-[#1D2C4F]/35 py-1",children:["+",n.audiences.length-4]})]}),a.jsx("div",{className:"absolute bottom-0 left-0 h-px w-0 bg-[#84A4B1] transition-all duration-500 group-hover:w-full"})]},n.id))}),a.jsx("div",{"data-part-cta":!0,className:"mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center",children:a.jsxs("a",{href:"/partnerships",onClick:n=>{n.preventDefault(),r("/partnerships"),window.scrollTo({top:0})},"data-cursor":"hover",className:"group relative flex min-h-[56px] min-w-[200px] items-center justify-between overflow-hidden rounded-full bg-[#1D2C4F] px-5 pr-7 font-arabic text-[13px] font-bold text-[#F3F3F1] transition-all duration-500 hover:-translate-y-[2px]",children:[a.jsx("span",{className:"absolute inset-0 translate-y-full bg-[#84A4B1] transition-transform duration-500 ease-out group-hover:translate-y-0"}),a.jsx("span",{className:"relative z-10 transition-colors duration-300 group-hover:text-[#1D2C4F]",children:"فرص الشراكة"}),a.jsx("span",{className:"relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F3F1]/10 text-[10px] transition-all duration-500 group-hover:-translate-x-1 group-hover:bg-[#1D2C4F]/15 group-hover:text-[#1D2C4F]",children:"←"})]})})]})]})}E.registerPlugin(Y);const hd=[{number:"01",label:"المبدأ الأول",title:"الفهم قبل القرار.",text:"القرار المالي الواعي يبدأ بفهم طبيعة السوق والمخاطر والخيارات المتاحة. المعرفة ليست مجرد معلومات، بل أساس نفكر من خلاله."},{number:"02",label:"المبدأ الثاني",title:"المنهجية قبل النتائج.",text:"لا نبحث عن الاختصارات أو الوعود السريعة. نركز على بناء طريقة تفكير منضبطة تساعد على التحليل والتقييم والتعلم المستمر."},{number:"03",label:"المبدأ الثالث",title:"الاستقلالية قبل التبعية.",text:"هدفنا أن يمتلك المتعلم الأدوات التي تساعده على تقييم المعلومات وصناعة قراراته بنفسه، لا أن يعتمد على رأي جاهز."}],k0=[{number:"01",label:"المعرفة",title:"نبدأ من الأساس.",text:"نفهم المفاهيم الأساسية وطبيعة الأسواق المالية قبل الانتقال إلى الأدوات الأكثر تعقيداً."},{number:"02",label:"التحليل",title:"نربط المعلومات.",text:"نحوّل المعرفة إلى منهجية تساعد على قراءة المعطيات وتقييم الخيارات والمخاطر."},{number:"03",label:"القرار",title:"نبني الاستقلالية.",text:"نهدف إلى تطوير القدرة على التفكير المستقل واتخاذ قرارات مدروسة دون وعود بنتائج محددة."}];function Sn({children:t,light:e=!1}){return a.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[a.jsx("span",{className:"h-px w-8 bg-[#84A4B1]"}),a.jsx("span",{className:`text-[11px] font-medium ${e?"text-[#84A4B1]":"text-[#54707D]"}`,children:t})]})}function A3(){const t=b.useRef(null);return b.useEffect(()=>{var s;const e=t.current;if(!e)return;let r=!1;const n=E.context(()=>{E.matchMedia().add({desktop:"(min-width: 1024px)",reduce:"(prefers-reduced-motion: reduce)"},l=>{var y,g;const u=!!((y=l.conditions)!=null&&y.desktop);if(!!((g=l.conditions)!=null&&g.reduce)||(E.utils.toArray("[data-reveal]").forEach(_=>{E.fromTo(_,{autoAlpha:0,y:22},{autoAlpha:1,y:0,duration:.75,ease:"power3.out",scrollTrigger:{trigger:_,start:"top 90%",once:!0}})}),!u))return;E.timeline({scrollTrigger:{trigger:"[data-about-hero]",start:"top top",end:"+=65%",pin:!0,scrub:.7,anticipatePin:1,invalidateOnRefresh:!0}}).to("[data-hero-content]",{y:-36,scale:.96,opacity:.48,duration:1,ease:"none"},0).to("[data-hero-accent]",{scaleX:1.7,duration:1,ease:"none"},0);const d=E.utils.toArray("[data-principle-panel]"),p=E.utils.toArray("[data-principle-indicator]");E.set(d.slice(1),{autoAlpha:0,y:30}),E.timeline({scrollTrigger:{trigger:"[data-philosophy]",start:"top top",end:"+=175%",pin:!0,scrub:.65,anticipatePin:1,invalidateOnRefresh:!0,onUpdate:_=>{const h=_.progress<.34?0:_.progress<.67?1:2;p.forEach((x,v)=>{x.style.opacity=v===h?"1":"0.25"})}}}).to({},{duration:.65}).to(d[0],{autoAlpha:0,y:-30,duration:.3,ease:"power2.inOut"}).fromTo(d[1],{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.35,ease:"power2.inOut"},"<0.1").to({},{duration:.65}).to(d[1],{autoAlpha:0,y:-30,duration:.3,ease:"power2.inOut"}).fromTo(d[2],{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.35,ease:"power2.inOut"},"<0.1").to({},{duration:.75}),E.timeline({scrollTrigger:{trigger:"[data-founder-scene]",start:"top top",end:"+=125%",pin:!0,scrub:.75,anticipatePin:1,invalidateOnRefresh:!0}}).fromTo("[data-founder-frame]",{width:"44%",height:"72%",borderRadius:"16px"},{width:"100%",height:"100%",borderRadius:"0px",duration:1,ease:"none"},0).fromTo("[data-founder-image]",{scale:1.12},{scale:1,duration:1,ease:"none"},0).fromTo("[data-founder-overlay]",{opacity:.15},{opacity:.9,duration:.45,ease:"none"},.48).fromTo("[data-founder-message]",{autoAlpha:0,y:32},{autoAlpha:1,y:0,duration:.4,ease:"power2.out"},.65).to({},{duration:.2});const m=E.utils.toArray("[data-method-card]");m.slice(0,-1).forEach((_,h)=>{const x=m[h+1];E.to(_,{scale:.965,transformOrigin:"center top",ease:"none",scrollTrigger:{trigger:x,start:"top 85%",end:"top 20%",scrub:!0,invalidateOnRefresh:!0}})})})},e),i=()=>{r||Y.refresh()};return(s=document.fonts)==null||s.ready.then(i),window.addEventListener("load",i),()=>{r=!0,window.removeEventListener("load",i),n.revert()}},[]),a.jsxs("main",{ref:t,dir:"rtl",className:"bg-[#F3F3F1]",children:[a.jsxs("section",{"data-about-hero":!0,className:"relative flex min-h-[90svh] items-center overflow-hidden bg-[#0F1E36] px-5 pb-12 pt-28 text-[#F3F3F1] sm:px-8 lg:h-[100svh] lg:py-12",children:[a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 opacity-20",style:{backgroundImage:"linear-gradient(rgba(132,164,177,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(132,164,177,.09) 1px,transparent 1px)",backgroundSize:"76px 76px"}}),a.jsxs("div",{className:"relative z-10 mx-auto w-full max-w-[1120px]",children:[a.jsxs("div",{className:"flex items-center justify-between border-b border-white/15 pb-5",children:[a.jsx("span",{className:"text-[11px] text-[#84A4B1]",children:"عن فنر"}),a.jsx("span",{className:"font-sans text-[10px] tracking-[0.15em] text-white/40",children:"FNAR / 001"})]}),a.jsx("div",{className:"flex min-h-[390px] items-center justify-center py-16 lg:min-h-[460px]",children:a.jsxs("div",{"data-hero-content":!0,className:"max-w-[780px] text-center",children:[a.jsx("p",{className:"mb-6 text-[12px] text-[#84A4B1]",children:"الفهم يصنع الفرق"}),a.jsxs("h1",{className:"text-[clamp(3.2rem,4.5vw,5.2rem)] font-bold leading-[1.6] tracking-[-0.025em]",children:["نبني الفهم.",a.jsx("br",{}),"ليصبح القرار قرارك."]}),a.jsx("div",{"data-hero-accent":!0,className:"mx-auto mt-8 h-[2px] w-12 bg-[#84A4B1]"}),a.jsx("p",{className:"mt-7 text-[12px] text-white/55",children:"المعرفة · المنهجية · الاستقلالية"})]})}),a.jsxs("div",{className:"flex items-center justify-between gap-5 border-t border-white/15 pt-6",children:[a.jsx("p",{className:"max-w-[440px] text-[12px] leading-7 text-white/55",children:"فنر منصة للتعليم المالي تقوم على المعرفة والمنهجية والاستقلالية."}),a.jsx("span",{className:"hidden text-[11px] text-[#84A4B1] sm:block",children:"اكتشف القصة ↓"})]})]})]}),a.jsx("section",{className:"bg-[#F3F3F1] px-5 py-24 sm:px-8 lg:py-32",children:a.jsxs("div",{"data-reveal":!0,className:"mx-auto max-w-[1000px]",children:[a.jsx(Sn,{children:"لماذا فنر؟"}),a.jsxs("h2",{className:"text-[clamp(2.7rem,4vw,4.6rem)] font-bold leading-[1.6] text-[#1D2C4F]",children:["الوصول إلى المعلومات",a.jsx("br",{}),a.jsx("span",{className:"text-[#84A4B1]",children:"لا يعني امتلاك الفهم."})]}),a.jsx("p",{className:"mt-8 max-w-[660px] text-[14px] leading-[2.2] text-[#1D2C4F]/65",children:"نؤمن أن التعليم المالي الحقيقي لا يقتصر على شرح الأدوات أو متابعة الأسواق، بل يبدأ ببناء طريقة تفكير تساعد على التحليل والتقييم واتخاذ القرار بمسؤولية."})]})}),a.jsx("section",{"data-philosophy":!0,className:"relative min-h-[90svh] overflow-hidden bg-[#0F1E36] px-5 py-20 text-[#F3F3F1] sm:px-8 lg:flex lg:h-[100svh] lg:items-center lg:py-0",children:a.jsxs("div",{className:"mx-auto w-full max-w-[1120px]",children:[a.jsxs("div",{className:"flex items-center justify-between border-b border-white/15 pb-5",children:[a.jsx("span",{className:"text-[11px] text-[#84A4B1]",children:"فلسفتنا"}),a.jsx("span",{className:"font-sans text-[10px] text-white/40",children:"FNAR / 002"})]}),a.jsx("div",{className:"relative mt-12 hidden h-[370px] lg:block",children:hd.map(e=>a.jsxs("article",{"data-principle-panel":!0,className:"absolute inset-0 flex items-center gap-12",children:[a.jsx("div",{className:"flex w-[35%] items-center justify-center",children:a.jsx("span",{className:"font-sans text-[clamp(11rem,15vw,16rem)] font-bold leading-none text-[#84A4B1]/25",children:e.number})}),a.jsxs("div",{className:"w-[65%]",children:[a.jsx("span",{className:"text-[11px] text-[#84A4B1]",children:e.label}),a.jsx("h2",{className:"mt-5 text-[clamp(3.4rem,4.1vw,4.8rem)] font-bold leading-[1.5]",children:e.title}),a.jsx("p",{className:"mt-6 max-w-[540px] text-[14px] leading-[2.15] text-white/65",children:e.text})]})]},e.number))}),a.jsx("div",{className:"mt-10 space-y-12 lg:hidden",children:hd.map(e=>a.jsxs("article",{"data-reveal":!0,className:"border-b border-white/10 pb-10",children:[a.jsx("span",{className:"font-sans text-[7rem] font-bold leading-none text-[#84A4B1]/25",children:e.number}),a.jsx("h2",{className:"mt-4 text-[clamp(2.7rem,7vw,4rem)] font-bold leading-[1.5]",children:e.title}),a.jsx("p",{className:"mt-5 text-[13px] leading-8 text-white/65",children:e.text})]},e.number))}),a.jsx("div",{className:"mt-8 hidden gap-3 lg:flex",children:hd.map((e,r)=>a.jsx("span",{"data-principle-indicator":!0,style:{opacity:r===0?1:.25},className:"h-[3px] w-12 bg-[#84A4B1]"},e.number))})]})}),a.jsx("section",{"data-founder-scene":!0,className:"relative flex min-h-[90svh] items-center justify-center overflow-hidden bg-[#E9ECEB] lg:h-[100svh]",children:a.jsxs("div",{"data-founder-frame":!0,className:"relative h-[76svh] w-full overflow-hidden bg-[#1D2C4F] lg:h-[72%] lg:w-[44%] lg:rounded-[16px]",children:[a.jsx("img",{"data-founder-image":!0,src:"/images/fnar-founder.svg",alt:"مؤسس فنر",className:"absolute inset-0 h-full w-full object-cover object-center"}),a.jsx("div",{"data-founder-overlay":!0,"aria-hidden":"true",className:"absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-[#0F1E36]/65 to-transparent opacity-90 lg:opacity-15"}),a.jsxs("div",{"data-founder-message":!0,className:"absolute inset-x-0 bottom-0 z-10 px-7 pb-10 text-[#F3F3F1] sm:px-10 lg:px-[max(60px,calc((100vw-1120px)/2))] lg:pb-16 lg:opacity-0",children:[a.jsx(Sn,{light:!0,children:"وراء فنر"}),a.jsxs("h2",{className:"text-[clamp(3rem,4.5vw,5.2rem)] font-bold leading-[1.45]",children:["وراء فنر،",a.jsx("br",{}),"رؤية تعليمية."]}),a.jsx("p",{className:"mt-5 max-w-[600px] text-[13px] leading-[2.1] text-white/80",children:"الهدف ليس أن يعتمد المتعلم على شخص يخبره ماذا يفعل، بل أن يفهم ما يفعله ولماذا."})]})]})}),a.jsx("section",{className:"bg-[#F3F3F1] px-5 py-24 sm:px-8 lg:py-32",children:a.jsxs("div",{className:"mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20",children:[a.jsxs("div",{"data-reveal":!0,children:[a.jsx(Sn,{children:"الرؤية"}),a.jsxs("h2",{className:"text-[clamp(2.8rem,3.8vw,4.4rem)] font-bold leading-[1.45] text-[#1D2C4F]",children:["البداية",a.jsx("br",{}),"كانت فكرة."]})]}),a.jsxs("div",{"data-reveal":!0,className:"space-y-6 border-r-2 border-[#84A4B1]/45 pr-7",children:[a.jsx("p",{className:"text-[16px] leading-[2.15] text-[#1D2C4F]/85",children:"انطلقت فكرة فنر من قناعة بأن فهم الأسواق المالية يحتاج إلى منهج واضح يربط المعرفة بالتحليل وإدارة المخاطر."}),a.jsx("p",{className:"text-[13px] leading-[2.2] text-[#1D2C4F]/65",children:"تقوم الرؤية على تقديم تجربة تعليمية تساعد المتعلم على تطوير أدواته، وطرح الأسئلة الصحيحة، وبناء طريقة تفكير أكثر استقلالية وانضباطاً."}),a.jsx("p",{className:"text-[13px] leading-[2.2] text-[#1D2C4F]/65",children:"لا نؤمن بالاختصارات أو الوعود السريعة، بل بالتعلم المتدرج والتطبيق الواعي والمسؤولية الفردية."})]})]})}),a.jsx("section",{className:"bg-[#1D2C4F] px-5 py-24 text-[#F3F3F1] sm:px-8 lg:py-32",children:a.jsxs("div",{className:"mx-auto max-w-[1120px]",children:[a.jsxs("div",{"data-reveal":!0,className:"mb-14",children:[a.jsx(Sn,{light:!0,children:"رؤيتنا ورسالتنا"}),a.jsxs("h2",{className:"text-[clamp(2.8rem,4vw,4.6rem)] font-bold leading-[1.5]",children:["من الكويت،",a.jsx("br",{}),a.jsx("span",{className:"text-[#84A4B1]",children:"إلى آفاق أوسع للمعرفة."})]})]}),a.jsxs("div",{className:"grid gap-5 lg:grid-cols-2",children:[a.jsxs("article",{"data-reveal":!0,className:"rounded-[18px] border border-white/15 bg-white/[0.04] p-8 sm:p-10",children:[a.jsx("span",{className:"font-sans text-xs tracking-widest text-[#84A4B1]",children:"01 / VISION"}),a.jsx("h3",{className:"mt-7 text-3xl font-bold",children:"رؤيتنا"}),a.jsx("p",{className:"mt-5 text-[15px] leading-[2.2] text-white/80",children:"نطمح إلى بناء أكاديمية عربية يثق الناس بتعليمها، وتبقى قيمة ما يتعلمونه فيها حاضرة في حياتهم وأعمالهم."}),a.jsx("p",{className:"mt-4 text-[13px] leading-[2.2] text-white/60",children:"تبدأ فنر من الأسواق المالية، وتتطلع إلى الاقتصاد والأعمال والتقنية والمهارات الحياتية. نريد أن نصبح مرجعاً في الخليج والعالم، وأن نُعرف بمناهجنا وبقدرة المتعلمين على تطبيق ما تعلموه."})]}),a.jsxs("article",{"data-reveal":!0,className:"rounded-[18px] border border-white/15 bg-white/[0.04] p-8 sm:p-10",children:[a.jsx("span",{className:"font-sans text-xs tracking-widest text-[#84A4B1]",children:"02 / MISSION"}),a.jsx("h3",{className:"mt-7 text-3xl font-bold",children:"رسالتنا"}),a.jsx("p",{className:"mt-5 text-[15px] leading-[2.2] text-white/80",children:"نبني تعليمنا على غاية واضحة: أن يفهم الإنسان ما يتعلمه، ويعرف كيف يستفيد منه."}),a.jsx("p",{className:"mt-4 text-[13px] leading-[2.2] text-white/60",children:"نشرح الأفكار من أصولها، ونربطها بالتطبيق، ونعطي السؤال والنقاش مكانهما. وفي الأسواق المالية نهتم بقراءة السوق وإدارة المال والمخاطر، وبالأثر النفسي للربح والخسارة وتغير الظروف."})]})]})]})}),a.jsx("section",{className:"bg-[#F3F3F1] px-5 py-24 sm:px-8 lg:py-32",children:a.jsxs("div",{className:"mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20",children:[a.jsxs("div",{"data-reveal":!0,children:[a.jsx(Sn,{children:"المؤسس"}),a.jsxs("h2",{className:"text-[clamp(2.8rem,4vw,4.6rem)] font-bold leading-[1.45] text-[#1D2C4F]",children:["عبدالعزيز",a.jsx("br",{}),"الشريف."]}),a.jsx("div",{className:"mt-8 h-[2px] w-16 bg-[#84A4B1]"}),a.jsx("p",{className:"mt-6 text-[12px] leading-8 text-[#1D2C4F]/55",children:"رحلة في دراسة الأسواق المالية والبحث والتطبيق والتعليم."})]}),a.jsxs("div",{"data-reveal":!0,className:"space-y-6 border-r-2 border-[#84A4B1]/45 pr-7",children:[a.jsx("p",{className:"text-[16px] leading-[2.2] text-[#1D2C4F]/90",children:"بدأ عبدالعزيز الشريف دراسة الأسواق المالية عام 2018، وانتقل إلى التطبيق العملي عام 2019، كما يروي في موقعه الشخصي."}),a.jsx("p",{className:"text-[14px] leading-[2.2] text-[#1D2C4F]/70",children:"توسع اهتمامه من أدوات التحليل وقراءة حركة الأسعار إلى سيكولوجية التداول، والانضباط، وإدارة المخاطر، وكيفية اختبار الأفكار وتطبيقها بدلاً من الاعتماد على التوقعات الجاهزة."}),a.jsx("p",{className:"text-[14px] leading-[2.2] text-[#1D2C4F]/70",children:"وفي عام 2026 وصف مرحلة جديدة من مشروعه التعليمي بالتأصيل المنهجي؛ وهي رؤية تتقاطع مع فلسفة فنر في بناء فهم مترابط، وتعزيز قدرة المتعلم على اتخاذ قراره باستقلالية."}),a.jsxs("a",{href:"https://www.kwkwu.com/",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-3 border-b border-[#1D2C4F]/25 pb-2 text-[13px] font-semibold text-[#1D2C4F] hover:text-[#54707D]",children:["الموقع الشخصي للمؤسس ",a.jsx("span",{"aria-hidden":"true",children:"↗"})]})]})]})}),a.jsx("section",{className:"bg-[#E9ECEB] px-5 py-24 sm:px-8 lg:py-32",children:a.jsxs("div",{className:"mx-auto max-w-[1120px]",children:[a.jsxs("div",{"data-reveal":!0,className:"mb-14",children:[a.jsx(Sn,{children:"محطات المسيرة"}),a.jsxs("h2",{className:"text-[clamp(2.8rem,4vw,4.6rem)] font-bold leading-[1.5] text-[#1D2C4F]",children:["من التعلم",a.jsx("br",{}),a.jsx("span",{className:"text-[#84A4B1]",children:"إلى بناء المنهج."})]})]}),a.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:[{year:"2018",title:"بداية الدراسة",text:"بداية رحلة المؤسس في دراسة الأسواق المالية وفهم حركة الأسعار."},{year:"2019",title:"التطبيق العملي",text:"الانتقال من المعرفة النظرية إلى التعامل مع تحديات السوق والقرار."},{year:"2026",title:"التأصيل المنهجي",text:"مرحلة تعليمية معلنة تركز على ترابط المعرفة والتطبيق والانضباط."}].map(e=>a.jsxs("article",{"data-reveal":!0,className:"rounded-[16px] border border-[#1D2C4F]/10 bg-[#F3F3F1] p-8 sm:p-10",children:[a.jsx("span",{className:"font-sans text-[clamp(3.5rem,5vw,5rem)] font-bold leading-none text-[#84A4B1]",children:e.year}),a.jsx("div",{className:"my-8 h-px bg-[#1D2C4F]/15"}),a.jsx("h3",{className:"text-[21px] font-bold text-[#1D2C4F]",children:e.title}),a.jsx("p",{className:"mt-4 text-[13px] leading-8 text-[#1D2C4F]/65",children:e.text})]},e.year))})]})}),a.jsx("section",{className:"bg-[#0F1E36] px-5 py-24 text-[#F3F3F1] sm:px-8 lg:py-32",children:a.jsxs("div",{className:"mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-2 lg:gap-20",children:[a.jsxs("div",{"data-reveal":!0,children:[a.jsx(Sn,{light:!0,children:"المسار البحثي المنشور"}),a.jsxs("h2",{className:"text-[clamp(2.8rem,4vw,4.6rem)] font-bold leading-[1.5]",children:["المعرفة",a.jsx("br",{}),a.jsx("span",{className:"text-[#84A4B1]",children:"رحلة مستمرة."})]}),a.jsx("p",{className:"mt-7 text-[14px] leading-[2.2] text-white/65",children:"يعرض المؤسس على موقعه الشخصي قائمة قراءة وبحث تشمل أساسيات التحليل الفني، وهيكل السوق، وسيكولوجية التداول، والمؤشرات، والتحليل الكمي، وإدارة المخاطر."}),a.jsxs("a",{href:"/research-path",className:"mt-9 inline-flex min-h-[52px] items-center gap-5 rounded-full border border-[#84A4B1]/50 px-7 text-[13px] font-semibold hover:bg-[#84A4B1] hover:text-[#0F1E36]",children:["اطلع على المسار البحثي ",a.jsx("span",{"aria-hidden":"true",children:"↗"})]})]}),a.jsxs("div",{"data-reveal":!0,className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{className:"rounded-[16px] border border-white/15 bg-white/[0.04] p-6 sm:p-9",children:[a.jsx("span",{className:"font-sans text-[clamp(4rem,7vw,7rem)] font-bold leading-none text-[#84A4B1]",children:"59"}),a.jsx("h3",{className:"mt-6 text-[17px] font-bold",children:"كتاباً"}),a.jsx("p",{className:"mt-3 text-[12px] leading-7 text-white/55",children:"ضمن قائمة القراءة المنشورة على موقع المؤسس."})]}),a.jsxs("div",{className:"rounded-[16px] border border-white/15 bg-white/[0.04] p-6 sm:p-9",children:[a.jsx("span",{className:"font-sans text-[clamp(4rem,7vw,7rem)] font-bold leading-none text-[#84A4B1]",children:"08"}),a.jsx("h3",{className:"mt-6 text-[17px] font-bold",children:"مراحل"}),a.jsx("p",{className:"mt-3 text-[12px] leading-7 text-white/55",children:"تغطي موضوعات متنوعة في دراسة الأسواق المالية."})]}),a.jsx("p",{className:"col-span-2 mt-3 text-[11px] leading-7 text-white/40",children:"الأرقام تصف المسار المنشور ذاتياً، ولا تمثل شهادات أكاديمية أو نتائج تداول معتمدة."})]})]})}),a.jsx("section",{className:"bg-[#E9ECEB] px-5 pb-28 pt-24 sm:px-8 lg:pb-36 lg:pt-32",children:a.jsxs("div",{className:"mx-auto max-w-[1120px]",children:[a.jsxs("div",{"data-reveal":!0,className:"mb-14 lg:mb-20",children:[a.jsx(Sn,{children:"منهجنا"}),a.jsxs("h2",{className:"text-[clamp(2.8rem,4vw,4.6rem)] font-bold leading-[1.45] text-[#1D2C4F]",children:["من المعرفة",a.jsx("br",{}),"إلى القرار."]}),a.jsx("p",{className:"mt-6 max-w-[560px] text-[13px] leading-8 text-[#1D2C4F]/60",children:"رحلة مترابطة تبدأ بالفهم، وتتطور بالتحليل، وتصل إلى القدرة على اتخاذ القرار باستقلالية."})]}),a.jsx("div",{className:"relative",children:k0.map((e,r)=>a.jsx("div",{className:"sticky",style:{top:`calc(92px + ${r*18}px)`,zIndex:r+1,marginBottom:r===k0.length-1?"0px":"clamp(110px, 15vh, 170px)"},children:a.jsxs("article",{"data-method-card":!0,className:"relative flex min-h-[310px] flex-col justify-between overflow-hidden rounded-[18px] border border-[#1D2C4F]/10 bg-[#F3F3F1] p-7 shadow-[0_18px_50px_rgba(15,30,54,0.10)] sm:min-h-[340px] sm:p-10 lg:min-h-[370px] lg:p-12",children:[a.jsxs("div",{className:"relative z-10 flex items-center justify-between",children:[a.jsx("span",{className:"text-[11px] font-medium text-[#54707D]",children:e.label}),a.jsxs("span",{className:"font-sans text-[10px] text-[#1D2C4F]/40",children:["FNAR / ",e.number]})]}),a.jsx("span",{"aria-hidden":"true",className:"pointer-events-none absolute -bottom-10 left-5 font-sans text-[clamp(12rem,17vw,19rem)] font-bold leading-none text-[#84A4B1]/15",children:e.number}),a.jsxs("div",{className:"relative z-10 max-w-[700px]",children:[a.jsx("h3",{className:"text-[clamp(2.8rem,3.5vw,4rem)] font-bold leading-[1.45] text-[#1D2C4F]",children:e.title}),a.jsx("p",{className:"mt-4 max-w-[540px] text-[13px] leading-8 text-[#1D2C4F]/65",children:e.text})]})]})},e.number))})]})}),a.jsx("section",{className:"bg-[#F3F3F1] px-5 py-24 sm:px-8 lg:py-32",children:a.jsxs("div",{className:"mx-auto max-w-[1120px]",children:[a.jsxs("div",{"data-reveal":!0,children:[a.jsx(Sn,{children:"التجربة التعليمية"}),a.jsxs("h2",{className:"max-w-[850px] text-[clamp(2.8rem,4vw,4.6rem)] font-bold leading-[1.5] text-[#1D2C4F]",children:["رؤية تتحول إلى",a.jsxs("span",{className:"text-[#84A4B1]",children:[" ","منهج متكامل."]})]})]}),a.jsxs("div",{className:"mt-14 grid gap-10 border-t border-[#1D2C4F]/15 pt-10 md:grid-cols-2",children:[a.jsxs("div",{"data-reveal":!0,children:[a.jsx("span",{className:"font-sans text-[clamp(9rem,13vw,15rem)] font-bold leading-none tracking-[-0.07em] text-[#1D2C4F]",children:"09"}),a.jsx("h3",{className:"mt-4 text-[21px] font-bold text-[#1D2C4F]",children:"دورات مترابطة."}),a.jsx("p",{className:"mt-3 max-w-[410px] text-[13px] leading-8 text-[#1D2C4F]/60",children:"تسع دورات تشكل برنامجاً تعليمياً واحداً، وليست محتوى متفرقاً."})]}),a.jsxs("div",{"data-reveal":!0,children:[a.jsx("span",{className:"font-sans text-[clamp(9rem,13vw,15rem)] font-bold leading-none tracking-[-0.07em] text-[#84A4B1]",children:"03"}),a.jsx("h3",{className:"mt-4 text-[21px] font-bold text-[#1D2C4F]",children:"أشهر من التعلم."}),a.jsx("p",{className:"mt-3 max-w-[410px] text-[13px] leading-8 text-[#1D2C4F]/60",children:"رحلة تعليمية متدرجة لبناء الفهم والتفكير التحليلي وإدارة المخاطر."})]})]}),a.jsx("p",{"data-reveal":!0,className:"mt-10 max-w-[720px] text-[12px] leading-8 text-[#1D2C4F]/55",children:"يمكن بعد المرحلة التعليمية بحث مرحلة تطبيقية اختيارية طويلة المدى بموجب اتفاق منفصل، وفق الشروط المناسبة لكل حالة."})]})}),a.jsx("section",{className:"bg-[#0F1E36] px-5 py-24 text-center sm:px-8 lg:py-32",children:a.jsxs("div",{"data-reveal":!0,className:"mx-auto max-w-[800px]",children:[a.jsxs("div",{className:"mb-7 flex items-center justify-center gap-3",children:[a.jsx("span",{className:"h-px w-8 bg-[#84A4B1]"}),a.jsx("span",{className:"text-[11px] text-[#84A4B1]",children:"الخطوة التالية"}),a.jsx("span",{className:"h-px w-8 bg-[#84A4B1]"})]}),a.jsxs("h2",{className:"text-[clamp(3rem,4.5vw,5.2rem)] font-bold leading-[1.5] text-[#F3F3F1]",children:["البداية ليست في السوق.",a.jsx("br",{}),a.jsx("span",{className:"text-[#84A4B1]",children:"البداية في الفهم."})]}),a.jsx("p",{className:"mx-auto mt-7 max-w-[530px] text-[13px] leading-8 text-white/65",children:"اكتشف البرنامج التعليمي المتكامل، وتعرف على المنهج الذي يقوم عليه فنر."}),a.jsxs(Ji,{to:"/program",className:"group mt-9 inline-flex min-h-[54px] items-center justify-center gap-8 rounded-full bg-[#F3F3F1] px-8 text-[13px] font-bold text-[#1D2C4F] transition-colors hover:bg-[#84A4B1]",children:["استكشف البرنامج",a.jsx("span",{"aria-hidden":"true",className:"text-[18px] transition-transform group-hover:-translate-x-1",children:"←"})]}),a.jsx("p",{className:"mx-auto mt-10 max-w-[580px] text-[11px] leading-7 text-white/40",children:"محتوى فنر تعليمي وتثقيفي، ولا يشكل توصية استثمارية أو ضماناً لأي نتائج مالية."})]})})]})}/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lv=(...t)=>t.filter((e,r,n)=>!!e&&n.indexOf(e)===r).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=b.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:s,iconNode:o,...l},u)=>b.createElement("svg",{ref:u,...P3,width:e,height:e,stroke:t,strokeWidth:n?Number(r)*24/Number(e):r,className:Lv("lucide",i),...l},[...o.map(([c,d])=>b.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(t,e)=>{const r=b.forwardRef(({className:n,...i},s)=>b.createElement(D3,{ref:s,iconNode:e,className:Lv(`lucide-${T3(t)}`,n),...i}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=Ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=Ze("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=Ze("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=Ze("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=Ze("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=Ze("FilePlus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=Ze("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=Ze("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=Ze("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=Ze("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=Ze("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=Ze("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=Ze("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=Ze("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=Ze("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=Ze("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=Ze("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=Ze("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=Ze("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=Ze("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),V3=[{id:"email",label:"البريد الإلكتروني",value:"ThePrestigeKw@Gmail.com",href:"mailto:ThePrestigeKw@Gmail.com",icon:Iv,external:!1},{id:"phone",label:"رقم الهاتف",value:"+965 96928555",href:"tel:+96596928555",icon:B3,external:!1},{id:"telegram",label:"تواصل عبر تليجرام",value:"Telegram",href:"https://t.me/KwuEthos",icon:$3,external:!0},{id:"whatsapp",label:"تواصل عبر واتساب",value:"WhatsApp",href:"https://wa.me/message/ITJ5L2OVN7J6M1",icon:$v,external:!0}];function H3(){return a.jsxs("main",{dir:"rtl",className:"min-h-screen bg-[#F3F3F1] font-['IBM_Plex_Sans_Arabic',sans-serif] text-[#1D2C4F]",children:[a.jsxs("section",{className:"relative overflow-hidden bg-[#0F1E36] px-6 pb-20 pt-36 text-white md:pb-28 md:pt-44",children:[a.jsx("div",{className:"pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full border border-[#84A4B1]/15"}),a.jsx("div",{className:"pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full border border-[#84A4B1]/10"}),a.jsxs("div",{className:"relative mx-auto max-w-6xl",children:[a.jsxs("div",{className:"mb-8 flex items-center gap-3",children:[a.jsx("span",{className:"h-px w-9 bg-[#84A4B1]"}),a.jsx("span",{className:"text-xs font-semibold tracking-wider text-[#84A4B1]",children:"تواصل معنا"})]}),a.jsxs("h1",{className:"max-w-3xl text-5xl font-bold leading-tight md:text-7xl",children:["نحن هنا",a.jsx("br",{}),a.jsx("span",{className:"text-[#84A4B1]",children:"للاستماع إليك."})]}),a.jsx("p",{className:"mt-8 max-w-xl text-base leading-9 text-white/65 md:text-lg",children:"لديك استفسار عن برامجنا التعليمية أو خدماتنا الاستشارية؟ يسعدنا تواصلك معنا عبر القناة الأنسب لك."})]})]}),a.jsx("section",{className:"px-6 py-20 md:py-28",children:a.jsxs("div",{className:"mx-auto max-w-6xl",children:[a.jsxs("div",{className:"mb-12",children:[a.jsx("p",{className:"mb-4 text-xs font-bold tracking-wider text-[#638B9B]",children:"قنوات التواصل"}),a.jsx("h2",{className:"text-3xl font-bold md:text-5xl",children:"معلومات التواصل"}),a.jsx("p",{className:"mt-5 max-w-xl text-sm leading-8 text-[#1D2C4F]/65",children:"اختر وسيلة التواصل المناسبة لك، وسنكون سعداء باستقبال استفسارك."})]}),a.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:V3.map(t=>{const e=t.icon;return a.jsxs("a",{href:t.href,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0,className:"group flex min-h-[190px] flex-col justify-between rounded-2xl border border-[#1D2C4F]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#84A4B1] hover:shadow-[0_20px_50px_rgba(15,30,54,0.08)] md:p-9","aria-label":`${t.label}: ${t.value}`,children:[a.jsxs("div",{className:"flex items-start justify-between",children:[a.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-[#84A4B1]/15 text-[#1D2C4F] transition-colors group-hover:bg-[#1D2C4F] group-hover:text-white",children:a.jsx(e,{size:22,strokeWidth:1.7})}),a.jsx(S0,{size:21,className:"text-[#1D2C4F]/35 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-[#1D2C4F]"})]}),a.jsxs("div",{className:"mt-8",children:[a.jsx("p",{className:"mb-2 text-sm text-[#1D2C4F]/55",children:t.label}),a.jsx("p",{dir:t.id==="email"||t.id==="phone"?"ltr":"auto",className:`text-lg font-semibold md:text-xl ${t.id==="email"||t.id==="phone"?"text-right":""}`,children:t.value})]})]},t.id)})})]})}),a.jsx("section",{className:"bg-[#E9ECEB] px-6 py-20 md:py-24",children:a.jsxs("div",{className:"mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between",children:[a.jsxs("div",{children:[a.jsx("div",{className:"mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1D2C4F] text-white",children:a.jsx(C0,{size:23,strokeWidth:1.7})}),a.jsx("p",{className:"mb-3 text-sm font-semibold text-[#638B9B]",children:"موقعنا"}),a.jsx("h2",{className:"text-4xl font-bold md:text-5xl",children:"الكويت"}),a.jsx("p",{className:"mt-5 max-w-md text-sm leading-8 text-[#1D2C4F]/65",children:"نرحب باستفساراتكم ونتطلع إلى التواصل معكم."})]}),a.jsxs("div",{className:"flex items-center gap-4 rounded-2xl border border-[#1D2C4F]/10 bg-white px-7 py-6 md:min-w-[300px]",children:[a.jsx(C0,{size:24,className:"shrink-0 text-[#638B9B]"}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs text-[#1D2C4F]/50",children:"الدولة"}),a.jsx("p",{className:"mt-1 text-xl font-bold",children:"دولة الكويت"})]})]})]})}),a.jsx("section",{className:"bg-[#1D2C4F] px-6 py-20 text-center text-white md:py-28",children:a.jsxs("div",{className:"mx-auto max-w-3xl",children:[a.jsx("p",{className:"mb-5 text-xs font-semibold tracking-wider text-[#84A4B1]",children:"FNAR"}),a.jsxs("h2",{className:"text-3xl font-bold leading-relaxed md:text-5xl",children:["لديك سؤال؟",a.jsx("br",{}),"نحن على بُعد رسالة."]}),a.jsx("p",{className:"mx-auto mt-6 max-w-lg text-sm leading-8 text-white/65",children:"تواصل معنا مباشرة عبر واتساب أو البريد الإلكتروني."}),a.jsxs("div",{className:"mt-10 flex flex-col justify-center gap-4 sm:flex-row",children:[a.jsxs("a",{href:"https://wa.me/message/ITJ5L2OVN7J6M1",target:"_blank",rel:"noopener noreferrer",className:"inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#F3F3F1] px-8 text-sm font-bold text-[#1D2C4F] transition-colors hover:bg-[#84A4B1]",children:[a.jsx($v,{size:19}),"تواصل عبر واتساب",a.jsx(S0,{size:17})]}),a.jsxs("a",{href:"mailto:ThePrestigeKw@Gmail.com",className:"inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-white/30 px-8 text-sm font-semibold text-white transition-colors hover:border-[#84A4B1] hover:text-[#84A4B1]",children:[a.jsx(Iv,{size:19}),"راسلنا عبر البريد"]})]})]})})]})}E.registerPlugin(Y);function q3(){const t=b.useRef(null),e=$r(),r=Ti();b.useEffect(()=>{const i=t.current;if(!i||e)return;const s=E.context(()=>{E.fromTo("[data-final-architecture]",{opacity:0,scale:.96},{opacity:1,scale:1,duration:1.4,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 75%",once:!0}}),E.fromTo("[data-final-logo]",{opacity:0,y:18},{opacity:1,y:0,duration:.8,delay:.15,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 72%",once:!0}}),E.fromTo("[data-final-eyebrow]",{opacity:0,y:16},{opacity:1,y:0,duration:.7,delay:.2,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 70%",once:!0}}),E.fromTo("[data-final-title]",{opacity:0,y:45},{opacity:1,y:0,duration:1,delay:.25,ease:"power4.out",scrollTrigger:{trigger:i,start:"top 68%",once:!0}}),E.fromTo("[data-final-copy]",{opacity:0,y:22},{opacity:1,y:0,duration:.8,delay:.35,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 65%",once:!0}}),E.fromTo("[data-final-actions]",{opacity:0,y:22},{opacity:1,y:0,duration:.8,delay:.45,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 62%",once:!0}}),E.fromTo("[data-final-meta]",{opacity:0},{opacity:1,duration:.8,delay:.55,ease:"power2.out",scrollTrigger:{trigger:i,start:"top 60%",once:!0}})},i);return()=>s.revert()},[e]);const n=i=>{r(i),window.scrollTo({top:0,behavior:"instant"})};return a.jsxs("section",{ref:t,id:"final-cta",className:`\r
        relative\r
        isolate\r
        min-h-[760px]\r
        overflow-hidden\r
        bg-[#0D1A31]\r
        py-20\r
\r
        sm:min-h-[820px]\r
        sm:py-24\r
\r
        lg:min-h-[900px]\r
        lg:py-28\r
      `,children:[a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0",style:{background:`
            radial-gradient(
              circle at 50% 42%,
              rgba(132,164,177,.11) 0%,
              rgba(132,164,177,.035) 28%,
              transparent 58%
            )
          `}}),a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          inset-0\r
          opacity-50\r
        `,style:{backgroundImage:`
            linear-gradient(rgba(132,164,177,.026) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132,164,177,.026) 1px, transparent 1px)
          `,backgroundSize:"80px 80px"}}),a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          left-1/2\r
          top-0\r
          h-full\r
          w-px\r
          -translate-x-1/2\r
          bg-gradient-to-b\r
          from-transparent\r
          via-white/[0.035]\r
          to-transparent\r
        `}),a.jsxs("div",{"data-final-architecture":!0,"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          bottom-0\r
          left-1/2\r
\r
          h-[72%]\r
          w-[92%]\r
\r
          max-w-[1050px]\r
\r
          -translate-x-1/2\r
\r
          sm:h-[76%]\r
          sm:w-[80%]\r
\r
          lg:h-[82%]\r
          lg:w-[68%]\r
        `,children:[a.jsx("div",{className:`\r
            absolute\r
            inset-x-0\r
            bottom-0\r
            top-0\r
\r
            rounded-t-[48%]\r
\r
            border\r
            border-[#84A4B1]/[0.09]\r
            border-b-0\r
          `}),a.jsx("div",{className:`\r
            absolute\r
            bottom-0\r
            left-[8%]\r
            right-[8%]\r
            top-[8%]\r
\r
            rounded-t-[48%]\r
\r
            border\r
            border-[#84A4B1]/[0.12]\r
            border-b-0\r
          `}),a.jsx("div",{className:`\r
            absolute\r
            bottom-0\r
            left-[17%]\r
            right-[17%]\r
            top-[17%]\r
\r
            rounded-t-[48%]\r
\r
            border\r
            border-[#84A4B1]/[0.15]\r
            border-b-0\r
          `}),a.jsx("div",{className:`\r
            absolute\r
            bottom-0\r
            left-[28%]\r
            right-[28%]\r
            top-[30%]\r
\r
            overflow-hidden\r
\r
            rounded-t-[48%]\r
\r
            border\r
            border-[#84A4B1]/20\r
            border-b-0\r
\r
            bg-[#84A4B1]/[0.018]\r
          `,children:a.jsx("div",{className:`\r
              absolute\r
              bottom-0\r
              left-1/2\r
\r
              h-[85%]\r
              w-[70%]\r
\r
              -translate-x-1/2\r
\r
              bg-gradient-to-t\r
              from-[#84A4B1]/[0.12]\r
              via-[#84A4B1]/[0.035]\r
              to-transparent\r
\r
              blur-[35px]\r
            `})}),a.jsxs("div",{className:`\r
            absolute\r
            bottom-0\r
            left-1/2\r
\r
            h-[36%]\r
            w-[120%]\r
\r
            -translate-x-1/2\r
\r
            overflow-hidden\r
          `,children:[a.jsx("div",{className:`\r
              absolute\r
              left-1/2\r
              top-0\r
\r
              h-full\r
              w-px\r
\r
              -translate-x-1/2\r
\r
              bg-gradient-to-b\r
              from-[#84A4B1]/20\r
              to-transparent\r
            `}),a.jsx("div",{className:`\r
              absolute\r
              left-[28%]\r
              top-0\r
\r
              h-full\r
              w-px\r
\r
              origin-top\r
              -rotate-[13deg]\r
\r
              bg-gradient-to-b\r
              from-[#84A4B1]/10\r
              to-transparent\r
            `}),a.jsx("div",{className:`\r
              absolute\r
              right-[28%]\r
              top-0\r
\r
              h-full\r
              w-px\r
\r
              origin-top\r
              rotate-[13deg]\r
\r
              bg-gradient-to-b\r
              from-[#84A4B1]/10\r
              to-transparent\r
            `})]})]}),a.jsxs("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          left-0\r
          right-0\r
          top-[18%]\r
\r
          hidden\r
          items-center\r
\r
          lg:flex\r
        `,children:[a.jsx("span",{className:`\r
            h-px\r
            flex-1\r
            bg-gradient-to-r\r
            from-transparent\r
            to-white/[0.055]\r
          `}),a.jsx("span",{className:`\r
            mx-5\r
            h-[4px]\r
            w-[4px]\r
            rounded-full\r
            bg-[#84A4B1]/40\r
          `}),a.jsx("span",{className:`\r
            h-px\r
            flex-1\r
            bg-gradient-to-l\r
            from-transparent\r
            to-white/[0.055]\r
          `})]}),a.jsxs("div",{dir:"rtl",className:`\r
          relative\r
          z-10\r
\r
          mx-auto\r
\r
          flex\r
          min-h-[620px]\r
          max-w-[1200px]\r
\r
          flex-col\r
          items-center\r
          justify-center\r
\r
          px-5\r
          text-center\r
\r
          sm:min-h-[680px]\r
          sm:px-6\r
\r
          lg:min-h-[720px]\r
          lg:px-10\r
        `,children:[a.jsx("div",{"data-final-logo":!0,className:`\r
            mb-8\r
\r
            flex\r
            items-center\r
            justify-center\r
\r
            sm:mb-9\r
          `,children:a.jsx("img",{src:"/brand/fnar-icon.svg",alt:"فنر",className:`\r
              h-[68px]\r
              w-auto\r
              object-contain\r
              opacity-90\r
\r
              sm:h-[78px]\r
              lg:h-[88px]\r
            `})}),a.jsxs("div",{"data-final-eyebrow":!0,className:`\r
            mb-5\r
\r
            flex\r
            items-center\r
            justify-center\r
            gap-3\r
          `,children:[a.jsx("span",{className:`\r
              h-px\r
              w-9\r
\r
              bg-gradient-to-l\r
              from-[#84A4B1]/70\r
              to-transparent\r
            `}),a.jsx("span",{className:`\r
              font-arabic\r
\r
              text-[9px]\r
              font-medium\r
\r
              tracking-[0.12em]\r
\r
              text-[#84A4B1]\r
\r
              sm:text-[10px]\r
            `,children:"القرار المستقل يبدأ من هنا"}),a.jsx("span",{className:`\r
              h-px\r
              w-9\r
\r
              bg-gradient-to-r\r
              from-[#84A4B1]/70\r
              to-transparent\r
            `})]}),a.jsxs("div",{"data-final-title":!0,className:`\r
            flex\r
            flex-col\r
            items-center\r
            text-center\r
          `,children:[a.jsx("h2",{className:`\r
              pb-[0.16em]\r
\r
              font-arabic\r
\r
              text-[clamp(3.1rem,8vw,7.2rem)]\r
              font-bold\r
\r
              leading-[1.18]\r
              tracking-[-0.045em]\r
\r
              text-[#F3F3F1]\r
            `,children:"لا تتبع السوق."}),a.jsxs("div",{className:`\r
              relative\r
\r
              -mt-1\r
\r
              px-6\r
              pb-[0.18em]\r
\r
              sm:mt-0\r
              lg:mt-1\r
            `,children:[a.jsx("span",{"aria-hidden":"true",className:`\r
                pointer-events-none\r
\r
                absolute\r
                left-1/2\r
                top-1/2\r
\r
                h-[55%]\r
                w-[130%]\r
\r
                -translate-x-1/2\r
                -translate-y-1/2\r
\r
                rounded-full\r
\r
                bg-[#84A4B1]/[0.07]\r
\r
                blur-[35px]\r
              `}),a.jsx("span",{className:`\r
                relative\r
                block\r
\r
                font-arabic\r
\r
                text-[clamp(3.6rem,9vw,8rem)]\r
                font-bold\r
\r
                leading-[1.2]\r
                tracking-[-0.055em]\r
\r
                text-[#84A4B1]\r
              `,children:"افهمه."})]})]}),a.jsx("p",{"data-final-copy":!0,className:`\r
            mx-auto\r
            mt-4\r
            max-w-[590px]\r
\r
            font-arabic\r
\r
            text-[13px]\r
            leading-7\r
\r
            text-[#F3F3F1]/45\r
\r
            sm:mt-5\r
            sm:text-[15px]\r
            sm:leading-8\r
          `,children:"ابدأ رحلتك نحو فهم أعمق للأسواق، وابنِ المعرفة التي تساعدك على اتخاذ قراراتك بنفسك."}),a.jsxs("div",{"data-final-actions":!0,className:`\r
            mt-9\r
\r
            flex\r
            w-full\r
            max-w-[500px]\r
\r
            flex-col\r
            items-stretch\r
            justify-center\r
\r
            gap-3\r
\r
            sm:mt-11\r
            sm:w-auto\r
            sm:max-w-none\r
            sm:flex-row\r
            sm:items-center\r
            sm:gap-4\r
          `,children:[a.jsxs("a",{href:"/program",onClick:i=>{i.preventDefault(),n("/program")},"data-cursor":"hover",className:`\r
              group\r
              relative\r
\r
              flex\r
              min-h-[62px]\r
              min-w-[215px]\r
\r
              items-center\r
              justify-between\r
\r
              overflow-hidden\r
\r
              rounded-full\r
\r
              border\r
              border-[#F3F3F1]/90\r
\r
              bg-[#F3F3F1]\r
\r
              px-3\r
              pr-7\r
\r
              shadow-[0_14px_45px_rgba(0,0,0,0.18)]\r
\r
              transition-all\r
              duration-500\r
\r
              hover:-translate-y-[2px]\r
              hover:border-[#A7C0CA]\r
              hover:bg-[#A7C0CA]\r
              hover:shadow-[0_18px_55px_rgba(0,0,0,0.26)]\r
\r
              sm:min-w-[220px]\r
            `,children:[a.jsx("span",{className:`\r
                relative\r
                z-10\r
\r
                font-arabic\r
\r
                text-[13px]\r
                font-bold\r
\r
                text-[#102039]\r
              `,children:"اكتشف برنامج فنر"}),a.jsx("span",{className:`\r
                relative\r
                z-10\r
\r
                flex\r
                h-10\r
                w-10\r
                shrink-0\r
\r
                items-center\r
                justify-center\r
\r
                rounded-full\r
\r
                bg-[#102039]\r
\r
                text-[#F3F3F1]\r
\r
                transition-all\r
                duration-500\r
\r
                group-hover:-translate-x-1\r
                group-hover:rotate-[-8deg]\r
              `,children:a.jsx("svg",{width:"15",height:"15",viewBox:"0 0 16 16",fill:"none",children:a.jsx("path",{d:"M13 8H3M3 8L7 4M3 8L7 12",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})})}),a.jsx("span",{"aria-hidden":"true",className:`\r
                pointer-events-none\r
\r
                absolute\r
                left-8\r
                top-0\r
\r
                h-px\r
                w-20\r
\r
                bg-gradient-to-r\r
                from-transparent\r
                via-white\r
                to-transparent\r
\r
                opacity-70\r
              `})]}),a.jsxs("a",{href:"/consultations",onClick:i=>{i.preventDefault(),n("/consultations")},"data-cursor":"hover",className:`\r
              group\r
\r
              flex\r
              min-h-[62px]\r
              min-w-[215px]\r
\r
              items-center\r
              justify-between\r
\r
              rounded-full\r
\r
              border\r
              border-[#84A4B1]/25\r
\r
              bg-[#84A4B1]/[0.045]\r
\r
              px-3\r
              pr-7\r
\r
              backdrop-blur-md\r
\r
              transition-all\r
              duration-500\r
\r
              hover:-translate-y-[2px]\r
              hover:border-[#84A4B1]/55\r
              hover:bg-[#84A4B1]/[0.10]\r
\r
              sm:min-w-[220px]\r
            `,children:[a.jsx("span",{className:`\r
                font-arabic\r
\r
                text-[12px]\r
                font-medium\r
\r
                text-[#F3F3F1]/70\r
\r
                transition-colors\r
                duration-300\r
\r
                group-hover:text-[#F3F3F1]\r
              `,children:"احجز استشارة"}),a.jsx("span",{className:`\r
                flex\r
                h-10\r
                w-10\r
                shrink-0\r
\r
                items-center\r
                justify-center\r
\r
                rounded-full\r
\r
                border\r
                border-[#84A4B1]/25\r
\r
                bg-[#84A4B1]/[0.08]\r
\r
                text-[#84A4B1]\r
\r
                transition-all\r
                duration-500\r
\r
                group-hover:-translate-x-1\r
                group-hover:border-[#84A4B1]/50\r
                group-hover:bg-[#84A4B1]/15\r
                group-hover:text-[#F3F3F1]\r
              `,children:a.jsx("svg",{width:"15",height:"15",viewBox:"0 0 16 16",fill:"none",children:a.jsx("path",{d:"M13 8H3M3 8L7 4M3 8L7 12",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),a.jsxs("a",{href:"/partnerships",onClick:i=>{i.preventDefault(),n("/partnerships")},"data-cursor":"hover",className:`\r
              group\r
\r
              flex\r
              min-h-[62px]\r
              min-w-[215px]\r
\r
              items-center\r
              justify-between\r
\r
              rounded-full\r
\r
              border\r
              border-[#84A4B1]/15\r
\r
              bg-transparent\r
\r
              px-3\r
              pr-7\r
\r
              transition-all\r
              duration-500\r
\r
              hover:-translate-y-[2px]\r
              hover:border-[#84A4B1]/35\r
              hover:bg-[#84A4B1]/[0.06]\r
\r
              sm:min-w-[220px]\r
            `,children:[a.jsx("span",{className:`\r
                font-arabic\r
\r
                text-[12px]\r
                font-medium\r
\r
                text-[#F3F3F1]/50\r
\r
                transition-colors\r
                duration-300\r
\r
                group-hover:text-[#F3F3F1]\r
              `,children:"فرص الشراكة"}),a.jsx("span",{className:`\r
                flex\r
                h-10\r
                w-10\r
                shrink-0\r
\r
                items-center\r
                justify-center\r
\r
                rounded-full\r
\r
                border\r
                border-[#84A4B1]/15\r
\r
                bg-transparent\r
\r
                text-[#84A4B1]/60\r
\r
                transition-all\r
                duration-500\r
\r
                group-hover:-translate-x-1\r
                group-hover:border-[#84A4B1]/40\r
                group-hover:bg-[#84A4B1]/10\r
                group-hover:text-[#F3F3F1]\r
              `,children:a.jsx("svg",{width:"15",height:"15",viewBox:"0 0 16 16",fill:"none",children:a.jsx("path",{d:"M13 8H3M3 8L7 4M3 8L7 12",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),a.jsxs("div",{"data-final-meta":!0,className:`\r
            mt-10\r
\r
            flex\r
            flex-wrap\r
            items-center\r
            justify-center\r
\r
            gap-x-5\r
            gap-y-3\r
\r
            sm:mt-12\r
          `,children:[a.jsxs("span",{className:`\r
              flex\r
              items-center\r
              gap-2\r
\r
              font-arabic\r
              text-[9px]\r
\r
              text-white/30\r
            `,children:[a.jsx("span",{className:`\r
                h-[4px]\r
                w-[4px]\r
\r
                rounded-full\r
\r
                bg-[#84A4B1]\r
              `}),"منهج متدرج"]}),a.jsx("span",{className:`\r
              hidden\r
\r
              h-[3px]\r
              w-[3px]\r
\r
              rounded-full\r
\r
              bg-white/15\r
\r
              sm:block\r
            `}),a.jsxs("span",{className:`\r
              flex\r
              items-center\r
              gap-2\r
\r
              font-arabic\r
              text-[9px]\r
\r
              text-white/30\r
            `,children:[a.jsx("span",{className:`\r
                h-[4px]\r
                w-[4px]\r
\r
                rounded-full\r
\r
                bg-[#84A4B1]\r
              `}),"تعلم تطبيقي"]}),a.jsx("span",{className:`\r
              hidden\r
\r
              h-[3px]\r
              w-[3px]\r
\r
              rounded-full\r
\r
              bg-white/15\r
\r
              sm:block\r
            `}),a.jsxs("span",{className:`\r
              flex\r
              items-center\r
              gap-2\r
\r
              font-arabic\r
              text-[9px]\r
\r
              text-white/30\r
            `,children:[a.jsx("span",{className:`\r
                h-[4px]\r
                w-[4px]\r
\r
                rounded-full\r
\r
                bg-[#84A4B1]\r
              `}),"قرار مستقل"]})]})]}),a.jsxs("div",{"data-final-meta":!0,"aria-hidden":"true",className:`\r
          absolute\r
          bottom-6\r
          left-5\r
          right-5\r
          z-10\r
\r
          flex\r
          items-center\r
          justify-between\r
\r
          sm:bottom-8\r
          sm:left-8\r
          sm:right-8\r
\r
          lg:left-10\r
          lg:right-10\r
        `,children:[a.jsx("span",{className:`\r
            text-[7px]\r
            tracking-[0.2em]\r
\r
            text-white/15\r
          `,children:"FNAR / KNOWLEDGE BEFORE DECISION"}),a.jsxs("div",{className:`\r
            flex\r
            items-center\r
            gap-3\r
          `,children:[a.jsx("span",{className:`\r
              h-px\r
              w-8\r
\r
              bg-white/10\r
            `}),a.jsx("span",{className:`\r
              text-[7px]\r
              tracking-[0.18em]\r
\r
              text-[#84A4B1]/30\r
            `,children:"11"})]})]})]})}const Y3=[{label:"البرنامج التعليمي",href:"/program",type:"route"},{label:"الاستشارات",href:"/consultations",type:"route"},{label:"الشراكات",href:"/partnerships",type:"route"},{label:"الفواتير والمستندات",href:"/invoices",type:"route"},{label:"عن فنر",href:"/about",type:"route"},{label:"تواصل معنا",href:"/contact",type:"route"}],X3=[{label:"الشروط والأحكام",href:"/documents/fnar-terms-original.pdf"}];function Q3(){const t=new Date().getFullYear(),e=Ti(),r=Yt(),n=(o,l)=>{var u,c;if(o.preventDefault(),l.href!=="#"){if(l.type==="route"){e(l.href),window.scrollTo({top:0,behavior:"instant"});return}if(l.href.includes("#")&&!l.href.startsWith("#")){const[d,p]=l.href.split("#");d&&d!==r.pathname?(e(d),setTimeout(()=>{var f;(f=document.querySelector(`#${p}`))==null||f.scrollIntoView({behavior:"smooth",block:"start"})},300)):(u=document.querySelector(`#${p}`))==null||u.scrollIntoView({behavior:"smooth",block:"start"})}else l.href.startsWith("#")&&((c=document.querySelector(l.href))==null||c.scrollIntoView({behavior:"smooth",block:"start"}))}},i=o=>{o.preventDefault(),e("/"),window.scrollTo({top:0,behavior:"instant"})},s=()=>{var o;r.pathname==="/"?(o=document.querySelector("#hero"))==null||o.scrollIntoView({behavior:"smooth",block:"start"}):(e("/"),window.scrollTo({top:0,behavior:"instant"}))};return a.jsxs("footer",{dir:"rtl",className:`\r
        relative\r
        overflow-hidden\r
\r
        border-t\r
        border-white/[0.06]\r
\r
        bg-[#091426]\r
\r
        text-[#F3F3F1]\r
      `,children:[a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          inset-0\r
        `,style:{background:`
            radial-gradient(
              circle at 78% 0%,
              rgba(132,164,177,.07),
              transparent 34%
            )
          `}}),a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
\r
          absolute\r
          inset-y-0\r
          left-[25%]\r
\r
          hidden\r
          w-px\r
\r
          bg-white/[0.025]\r
\r
          lg:block\r
        `}),a.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
\r
          absolute\r
          inset-y-0\r
          right-[38%]\r
\r
          hidden\r
          w-px\r
\r
          bg-white/[0.025]\r
\r
          lg:block\r
        `}),a.jsxs("div",{className:`\r
          relative\r
          z-10\r
\r
          mx-auto\r
          max-w-[1320px]\r
\r
          px-5\r
          sm:px-6\r
          lg:px-10\r
        `,children:[a.jsxs("div",{className:`\r
            grid\r
            grid-cols-1\r
\r
            gap-14\r
\r
            py-16\r
\r
            sm:py-20\r
\r
            lg:grid-cols-[1.4fr_0.7fr_0.7fr]\r
            lg:gap-16\r
            lg:py-24\r
          `,children:[a.jsxs("div",{className:`\r
              max-w-[470px]\r
          \r
              text-center\r
              mx-auto\r
          \r
              lg:text-right\r
              lg:mx-0\r
            `,children:[a.jsx("a",{href:"/",onClick:i,"data-cursor":"hover","aria-label":"العودة إلى بداية فنر",className:`\r
                group\r
                flex\r
                w-fit\r
                items-center\r
\r
                mx-auto\r
\r
                lg:mx-0\r
              `,children:a.jsx("img",{src:"/brand/fnar-icon.svg",alt:"فنر",className:`\r
                  h-[74px]\r
                  w-auto\r
                  object-contain\r
\r
                  opacity-90\r
\r
                  transition-opacity\r
                  duration-300\r
\r
                  group-hover:opacity-100\r
\r
                  sm:h-[82px]\r
                `})}),a.jsx("h2",{className:`\r
                mt-8\r
                max-w-[440px]\r
\r
                pb-[0.1em]\r
\r
                font-arabic\r
\r
                text-[clamp(1.8rem,3vw,2.8rem)]\r
                font-bold\r
\r
                leading-[1.35]\r
                tracking-[-0.035em]\r
\r
                text-[#F3F3F1]\r
              `,children:"المعرفة قبل القرار."}),a.jsx("p",{className:`\r
                mt-4\r
                max-w-[390px]\r
                mx-auto\r
                lg:mx-0\r
\r
                font-arabic\r
\r
                text-[12px]\r
                leading-7\r
\r
                text-[#F3F3F1]/40\r
\r
                sm:text-[13px]\r
              `,children:"منصة تعليمية لبناء فهم أعمق للأسواق المالية، وتطوير القدرة على اتخاذ قرارات مستقلة ومدروسة."}),a.jsxs("div",{className:`\r
                mt-8\r
\r
                flex\r
                justify-center\r
                items-center\r
                gap-3\r
                lg:justify-start\r
              `,children:[a.jsx("span",{className:`\r
                  h-[5px]\r
                  w-[5px]\r
\r
                  rounded-full\r
\r
                  bg-[#84A4B1]\r
                `}),a.jsx("span",{className:`\r
                  text-[8px]\r
                  tracking-[0.18em]\r
\r
                  text-[#84A4B1]/60\r
                `,children:"KNOWLEDGE BEFORE DECISION"}),a.jsx("span",{className:`\r
                  h-px\r
                  w-10\r
\r
                  bg-[#84A4B1]/20\r
                `})]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:`\r
                mb-7\r
\r
                flex\r
                items-center\r
                gap-3\r
              `,children:[a.jsx("span",{className:`\r
                  text-[9px]\r
                  font-medium\r
\r
                  tracking-[0.15em]\r
\r
                  text-[#84A4B1]/65\r
                `,children:"التنقل"}),a.jsx("span",{className:`\r
                  h-px\r
                  w-7\r
\r
                  bg-[#84A4B1]/20\r
                `})]}),a.jsx("nav",{"aria-label":"روابط الموقع",children:a.jsx("ul",{className:"space-y-1",children:Y3.map((o,l)=>a.jsx("li",{children:a.jsxs("a",{href:o.href,onClick:u=>n(u,o),"data-cursor":"hover",className:`\r
                        group\r
\r
                        flex\r
                        items-center\r
                        justify-between\r
\r
                        border-b\r
                        border-white/[0.045]\r
\r
                        py-3\r
\r
                        font-arabic\r
                        text-[12px]\r
                        font-medium\r
\r
                        text-[#F3F3F1]/50\r
\r
                        transition-colors\r
                        duration-300\r
\r
                        hover:text-[#F3F3F1]\r
                      `,children:[a.jsx("span",{children:o.label}),a.jsxs("span",{className:`\r
                          flex\r
                          items-center\r
                          gap-3\r
                        `,children:[a.jsx("span",{className:`\r
                            text-[7px]\r
\r
                            text-white/15\r
                          `,children:String(l+1).padStart(2,"0")}),a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",className:`\r
                            text-[#84A4B1]/35\r
\r
                            transition-all\r
                            duration-300\r
\r
                            group-hover:-translate-x-1\r
                            group-hover:text-[#84A4B1]\r
                          `,children:a.jsx("path",{d:"M10 6H2M2 6L5 3M2 6L5 9",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})},o.label))})})]}),a.jsxs("div",{children:[a.jsxs("div",{className:`\r
                mb-7\r
\r
                flex\r
                items-center\r
                gap-3\r
              `,children:[a.jsx("span",{className:`\r
                  text-[9px]\r
                  font-medium\r
\r
                  tracking-[0.15em]\r
\r
                  text-[#84A4B1]/65\r
                `,children:"فنر"}),a.jsx("span",{className:`\r
                  h-px\r
                  w-7\r
\r
                  bg-[#84A4B1]/20\r
                `})]}),a.jsxs("ul",{className:"space-y-1",children:[a.jsx("li",{children:a.jsxs("a",{href:"/contact",onClick:o=>{o.preventDefault(),e("/contact"),window.scrollTo({top:0,behavior:"instant"})},"data-cursor":"hover",className:`\r
                    group\r
\r
                    flex\r
                    items-center\r
                    justify-between\r
\r
                    border-b\r
                    border-white/[0.045]\r
\r
                    py-3\r
\r
                    font-arabic\r
                    text-[12px]\r
                    font-medium\r
\r
                    text-[#F3F3F1]/50\r
\r
                    transition-colors\r
                    duration-300\r
\r
                    hover:text-[#F3F3F1]\r
                  `,children:[a.jsx("span",{children:"تواصل معنا"}),a.jsx("span",{className:`\r
                      flex\r
                      h-6\r
                      w-6\r
\r
                      items-center\r
                      justify-center\r
\r
                      rounded-full\r
\r
                      border\r
                      border-white/[0.08]\r
\r
                      text-[#84A4B1]/50\r
\r
                      transition-all\r
                      duration-300\r
\r
                      group-hover:border-[#84A4B1]/30\r
                      group-hover:bg-[#84A4B1]/10\r
                      group-hover:text-[#84A4B1]\r
                    `,children:"←"})]})}),X3.map(o=>a.jsx("li",{children:a.jsx("a",{href:o.href,target:o.href!=="#"?"_blank":void 0,rel:o.href!=="#"?"noopener noreferrer":void 0,onClick:o.href==="#"?l=>l.preventDefault():void 0,"data-cursor":"hover",className:`\r
                      block\r
\r
                      border-b\r
                      border-white/[0.045]\r
\r
                      py-3\r
\r
                      font-arabic\r
                      text-[11px]\r
\r
                      text-[#F3F3F1]/35\r
\r
                      transition-colors\r
                      duration-300\r
\r
                      hover:text-[#84A4B1]\r
                    `,children:o.label})},o.label))]}),a.jsxs("button",{type:"button",onClick:s,"data-cursor":"hover",className:`\r
                group\r
\r
                mt-8\r
\r
                inline-flex\r
                items-center\r
                gap-3\r
\r
                font-arabic\r
                text-[10px]\r
\r
                text-white/30\r
\r
                transition-colors\r
                duration-300\r
\r
                hover:text-[#F3F3F1]\r
              `,children:[a.jsx("span",{className:`\r
                  flex\r
                  h-8\r
                  w-8\r
\r
                  items-center\r
                  justify-center\r
\r
                  rounded-full\r
\r
                  border\r
                  border-white/[0.08]\r
\r
                  text-[#84A4B1]\r
\r
                  transition-all\r
                  duration-300\r
\r
                  group-hover:-translate-y-1\r
                  group-hover:border-[#84A4B1]/35\r
                  group-hover:bg-[#84A4B1]/[0.07]\r
                `,children:"↑"}),"العودة إلى الأعلى"]})]})]}),a.jsx("div",{"aria-hidden":"true",className:`\r
            relative\r
\r
            overflow-hidden\r
\r
            border-t\r
            border-white/[0.055]\r
\r
            pt-8\r
\r
            sm:pt-10\r
          `,children:a.jsxs("div",{className:`\r
              flex\r
              items-end\r
              justify-between\r
            `,children:[a.jsx("span",{className:`\r
                select-none\r
\r
                font-sans\r
\r
                text-[clamp(4.5rem,15vw,12rem)]\r
                font-bold\r
\r
                leading-[0.72]\r
                tracking-[-0.075em]\r
\r
                text-white/[0.025]\r
              `,children:"FNAR"}),a.jsxs("div",{className:`\r
                mb-2\r
\r
                hidden\r
                items-center\r
                gap-4\r
\r
                lg:flex\r
              `,children:[a.jsx("span",{className:`\r
                  text-[7px]\r
                  tracking-[0.22em]\r
\r
                  text-white/15\r
                `,children:"UNDERSTAND · THINK · DECIDE"}),a.jsx("span",{className:`\r
                  h-[4px]\r
                  w-[4px]\r
\r
                  rounded-full\r
\r
                  bg-[#84A4B1]/50\r
                `})]})]})}),a.jsxs("div",{className:`\r
            relative\r
\r
            flex\r
            flex-col\r
\r
            gap-4\r
\r
            border-t\r
            border-white/[0.055]\r
\r
            py-6\r
\r
            sm:flex-row\r
            sm:items-center\r
            sm:justify-between\r
          `,children:[a.jsxs("p",{className:`\r
              font-arabic\r
              text-[9px]\r
\r
              text-white/25\r
            `,children:["© ",t," فنر — جميع الحقوق محفوظة"]}),a.jsxs("div",{className:`\r
              flex\r
              items-center\r
              gap-3\r
            `,children:[a.jsx("span",{className:`\r
                h-[5px]\r
                w-[5px]\r
\r
                rounded-full\r
\r
                bg-[#84A4B1]/60\r
              `}),a.jsx("span",{className:`\r
                text-[7px]\r
                tracking-[0.2em]\r
\r
                text-white/15\r
              `,children:"FNAR"}),a.jsx("span",{className:`\r
                h-px\r
                w-8\r
\r
                bg-white/[0.07]\r
              `}),a.jsx("span",{className:`\r
                text-[7px]\r
                tracking-[0.16em]\r
\r
                text-white/10\r
              `,children:"FINANCIAL EDUCATION"})]})]})]})]})}const Lj="عرض تجريبي — بيانات طالب افتراضي لأغراض العرض فقط",Wv=[{id:"ac-01",number:"01",title:"العقل",description:"طريقة التفكير، وبناء العقلية المناسبة لفهم الأسواق واتخاذ القرارات بصورة منهجية.",month:1,order:1},{id:"ac-02",number:"02",title:"التاجر",description:"مفهوم التاجر، وطبيعة التعامل مع السوق، والسلوك والانضباط المطلوب للعمل فيه.",month:1,order:2},{id:"ac-03",number:"03",title:"الأسواق المالية",description:"مدخل شامل لفهم الأسواق المالية، طبيعتها، آلية عملها، والأطراف الموجودة فيها.",month:1,order:3},{id:"ac-04",number:"04",title:"التحليل الفني — من المدخل إلى الاحتراف",description:"يبدأ من أساسيات التحليل الفني ويتدرج إلى المستويات المتقدمة والاحترافية.",month:2,order:4},{id:"ac-05",number:"05",title:"الإدارة المالية",description:"تنظيم الجانب المالي للمتداول، وفهم الأموال والالتزامات والتعامل معها بصورة منظمة.",month:2,order:5},{id:"ac-06",number:"06",title:"إدارة المخاطر",description:"فهم المخاطر، قياسها، وتنظيم التعامل معها داخل السوق.",month:2,order:6},{id:"ac-07",number:"07",title:"إدارة رأس المال",description:"إدارة رأس المال، توزيعه، وتنظيم استخدامه بصورة منهجية.",month:3,order:7},{id:"ac-08",number:"08",title:"الذهب والمعادن",description:"فهم سوق الذهب والمعادن وطبيعته وخصائصه والعوامل المرتبطة به.",month:3,order:8},{id:"ac-09",number:"09",title:"أخطاء المتداولين",description:"أبرز الأخطاء الشائعة لدى المتداولين وأسبابها وآثارها.",month:3,order:9}],Vv={"ac-01":[{id:"ac-01-m1",title:"الوحدة الأولى — مدخل",lessons:[{id:"ac-01-l1",title:"ما هي طريقة التفكير الصحيحة",durationMinutes:18,order:1,description:"مدخل إلى طريقة التفكير المنهجية في الأسواق المالية، والفرق بين المعرفة العشوائية والمعرفة المنظمة.",objectives:["التمييز بين المعلومة والمعرفة","فهم أهمية المنهجية في التفكير","تحديد مصادر المعرفة الموثوقة"]},{id:"ac-01-l2",title:"الفرق بين المعرفة والمعلومة",durationMinutes:22,order:2,description:"تحليل الفرق الجوهري بين امتلاك المعلومات وفهمها وتحويلها إلى معرفة قابلة للتطبيق.",objectives:["تعريف المعلومة مقابل المعرفة","كيفية تحويل المعلومة إلى معرفة","تطبيقات عملية في السوق"]},{id:"ac-01-l3",title:"التحيزات المعرفية الأساسية",durationMinutes:20,order:3,description:"استعراض أبرز التحيزات المعرفية التي تؤثر على قرارات المتداول وكيفية التعامل معها.",objectives:["التعرف على التحيزات الشائعة","فهم تأثيرها على القرار","استراتيجيات تقليل أثرها"]},{id:"ac-01-l4",title:"بناء العقلية المنهجية",durationMinutes:15,order:4,description:"خطوات عملية لبناء عقلية منهجية تتعامل مع السوق بطريقة منظمة ومنضبطة.",objectives:["مكونات العقلية المنهجية","تمارين بناء العادة","تطبيق على حالات واقعية"]}]},{id:"ac-01-m2",title:"الوحدة الثانية — التطبيق",lessons:[{id:"ac-01-l5",title:"التفكير تحت الضغط",durationMinutes:19,order:5,description:"كيفية الحفاظ على التفكير المنهجي في ظروف السوق الصعبة وتحت الضغط النفسي.",objectives:["فهم تأثير الضغط على القرار","تقنيات الحفاظ على الهدوء","تطبيقات سوقية"]},{id:"ac-01-l6",title:"فصل العاطفة عن القرار",durationMinutes:21,order:6,description:"منهجية فصل المشاعر والعواطف عن عملية اتخاذ القرار في السوق.",objectives:["مصادر العاطفة في التداول","أدوات الفصل بين العاطفة والقرار","حالات عملية"]},{id:"ac-01-l7",title:"تمارين عملية",durationMinutes:25,order:7,description:"مجموعة تمارين تطبيقية لتعزيز طريقة التفكير المنهجية في مواقف سوقية متنوعة.",objectives:["تطبيق المفاهيم النظرية","تحليل حالات حقيقية","تقييم الأداء الذاتي"]},{id:"ac-01-l8",title:"خلاصة ومراجعة",durationMinutes:14,order:8,description:"مراجعة شاملة لمفاهيم الوحدة وتلخيص النقاط الرئيسية.",objectives:["مراجعة المفاهيم","تلخيص الأفكار الأساسية","تقييم الاستيعاب"]}]}],"ac-02":[{id:"ac-02-m1",title:"الوحدة الأولى — مفهوم التاجر",lessons:[{id:"ac-02-l1",title:"من هو التاجر",durationMinutes:16,order:1,description:"تعريف مفهوم التاجر في الأسواق المالية وخصائصه الأساسية.",objectives:["تعريف التاجر","خصائص التاجر الناجح","الفرق بين التاجر وغيره"]},{id:"ac-02-l2",title:"الفرق بين التاجر والمضارب",durationMinutes:18,order:2,description:"تحليل الفرق بين التاجر والمضارب وأهداف كل منهما في السوق.",objectives:["تعريف المضارب","مقارنة الأهداف والأساليب","أيهما يناسبك"]},{id:"ac-02-l3",title:"الانضباط كأساس",durationMinutes:20,order:3,description:"أهمية الانضباط في عمل التاجر وكيفية بنائه كعادة يومية.",objectives:["مفهوم الانضباط","بناء عادات الانضباط","الحفاظ على الانضباط"]}]},{id:"ac-02-m2",title:"الوحدة الثانية — السلوك",lessons:[{id:"ac-02-l4",title:"التعامل مع السوق",durationMinutes:17,order:4,description:"طبيعة العلاقة بين التاجر والسوق وكيفية التعامل معه بفاعلية.",objectives:["فهم طبيعة السوق","بناء علاقة صحية مع السوق","تجنب الأخطاء الشائعة"]},{id:"ac-02-l5",title:"إدارة الذات",durationMinutes:22,order:5,description:"مهارات إدارة الذات كتاجر والتحكم في السلوك والتصرفات.",objectives:["مفاهيم إدارة الذات","تطبيقات في التداول","أدوات القياس"]},{id:"ac-02-l6",title:"خلاصة ومراجعة",durationMinutes:14,order:6,description:"مراجعة شاملة لمفاهيم دورة التاجر وتلخيص النقاط الرئيسية.",objectives:["مراجعة المفاهيم","تلخيص الأفكار","تقييم الاستيعاب"]}]}],"ac-03":[{id:"ac-03-m1",title:"الوحدة الأولى — بنية الأسواق",lessons:[{id:"ac-03-l1",title:"ما هي الأسواق المالية",durationMinutes:20,order:1,description:"تعريف شامل للأسواق المالية ووظائفها وأهميتها في الاقتصاد.",objectives:["تعريف السوق المالي","وظائف السوق","أنواع الأسواق"]},{id:"ac-03-l2",title:"أنواع الأسواق",durationMinutes:18,order:2,description:"تصنيف الأسواق المالية حسب الأدوات والمدى الزمني وطبيعة التداول.",objectives:["تصنيف الأسواق","خصائص كل نوع","متى تستخدم كل نوع"]},{id:"ac-03-l3",title:"الأطراف المشاركة",durationMinutes:22,order:3,description:"استعراض الأطراف المشاركة في الأسواق المالية وأدوار كل منها.",objectives:["تحديد الأطراف","أدوار كل طرف","تأثير كل طرف على السوق"]},{id:"ac-03-l4",title:"آلية العمل",durationMinutes:19,order:4,description:"شرح آلية عمل الأسواق المالية وكيفية تنفيذ الصفقات.",objectives:["فهم آلية التنفيذ","أنواع الأوامر","دورة حياة الصفقة"]}]},{id:"ac-03-m2",title:"الوحدة الثانية — الأدوات",lessons:[{id:"ac-03-l5",title:"الأدوات المالية الرئيسية",durationMinutes:21,order:5,description:"استعراض الأدوات المالية الرئيسية المتاحة في الأسواق.",objectives:["تصنيف الأدوات","خصائص كل أداة","متى تستخدم كل أداة"]},{id:"ac-03-l6",title:"منصات التداول",durationMinutes:16,order:6,description:"مقدمة عن منصات التداول وكيفية اختيار المناسبة منها.",objectives:["أنواع المنصات","معايير الاختيار","تجربة المنصات"]},{id:"ac-03-l7",title:"السيولة والعمق",durationMinutes:18,order:7,description:"فهم مفهوم السيولة وعمق السوق وأثرهما على التداول.",objectives:["تعريف السيولة","تعريف عمق السوق","أثرهما على التنفيذ"]},{id:"ac-03-l8",title:"العوامل المؤثرة على الأسعار",durationMinutes:24,order:8,description:"تحليل العوامل الأساسية والمؤثرات التي تحرك الأسعار في السوق.",objectives:["العوامل الاقتصادية","العوامل السياسية","العوامل النفسية"]},{id:"ac-03-l9",title:"الأخبار وتأثيرها",durationMinutes:20,order:9,description:"كيفية قراءة الأخبار الاقتصادية وفهم تأثيرها على حركة الأسعار.",objectives:["مصادر الأخبار","تحليل تأثير الخبر","التداول حول الأخبار"]},{id:"ac-03-l10",title:"قراءة البيانات",durationMinutes:17,order:10,description:"مهارات قراءة البيانات الاقتصادية والمالية وتفسيرها.",objectives:["أنواع البيانات","كيفية القراءة","التفسير والاستنتاج"]},{id:"ac-03-l11",title:"خلاصة ومراجعة",durationMinutes:14,order:11,description:"مراجعة شاملة لمفاهيم دورة الأسواق المالية.",objectives:["مراجعة المفاهيم","تلخيص الأفكار","تقييم الاستيعاب"]}]}],"ac-04":[{id:"ac-04-m1",title:"الوحدة الأولى — الأساسيات",lessons:[{id:"ac-04-l1",title:"مدخل إلى التحليل الفني",durationMinutes:18,order:1,description:"مقدمة شاملة للتحليل الفني وأساسياته ومبادئه.",objectives:["تعريف التحليل الفني","مبادئه الأساسية","حدود استخدامه"]},{id:"ac-04-l2",title:"أنواع الرسوم البيانية",durationMinutes:16,order:2,description:"استعراض أنواع الرسوم البيانية المستخدمة في التحليل الفني.",objectives:["أنواع الرسوم","خصائص كل نوع","متى تستخدم كل نوع"]},{id:"ac-04-l3",title:"الخطوط والمناطق",durationMinutes:20,order:3,description:"كيفية رسم الخطوط وتحديد المناطق الرئيسية على الرسم البياني.",objectives:["رسم خطوط الاتجاه","تحديد المناطق","تطبيقات عملية"]},{id:"ac-04-l4",title:"الاتجاهات",durationMinutes:22,order:4,description:"فهم أنواع الاتجاهات وكيفية تحديدها والتعامل معها.",objectives:["أنواع الاتجاهات","تحديد الاتجاه","التداول مع الاتجاه"]},{id:"ac-04-l5",title:"مستويات الدعم والمقاومة",durationMinutes:21,order:5,description:"مفهوم الدعم والمقاومة وكيفية استخدامهما في التحليل والتداول.",objectives:["تعريف الدعم والمقاومة","كيفية التحديد","استخدامهما في القرار"]},{id:"ac-04-l6",title:"الأنماط السعرية",durationMinutes:19,order:6,description:"استعراض الأنماط السعرية الرئيسية وكيفية التعرف عليها.",objectives:["أنماط الاستمرار","أنماط الانعكاس","تطبيقات عملية"]}]},{id:"ac-04-m2",title:"الوحدة الثانية — المستويات المتقدمة",lessons:[{id:"ac-04-l7",title:"المؤشرات الفنية",durationMinutes:24,order:7,description:"مقدمة للمؤشرات الفنية الشائعة وكيفية استخدامها.",objectives:["أنواع المؤشرات","كيفية القراءة","حدود المؤشرات"]},{id:"ac-04-l8",title:"التداول بأحجام",durationMinutes:18,order:8,description:"فهم حجم التداول وأثره على تحليل السوق.",objectives:["مفهوم الحجم","تأثيره على السعر","تطبيقات عملية"]},{id:"ac-04-l9",title:"المؤشرات المتقدمة",durationMinutes:22,order:9,description:"استعراض مؤشرات فنية متقدمة وتطبيقاتها.",objectives:["مؤشرات الزخم","مؤشرات التذبذب","استراتيجيات استخدام"]},{id:"ac-04-l10",title:"بناء نظام تحليلي",durationMinutes:20,order:10,description:"خطوات بناء نظام تحليلي شخصي متكامل ومناسب لأسلوبك.",objectives:["مكونات النظام","خطوات البناء","اختبار النظام"]}]},{id:"ac-04-m3",title:"الوحدة الثالثة — الاحتراف",lessons:[{id:"ac-04-l11",title:"تحليل الأطر الزمنية المتعددة",durationMinutes:21,order:11,description:"منهجية تحليل السوق عبر أطر زمنية متعددة لفهم أعمق.",objectives:["فهم الأطر الزمنية","منهجية التحليل المتعدد","تطبيقات عملية"]},{id:"ac-04-l12",title:"إدارة الصفقات",durationMinutes:19,order:12,description:"استراتيجيات إدارة الصفقات بعد الدخول في السوق.",objectives:["إدارة الدخول","إدارة الخروج","تعديل وقف الخسارة"]},{id:"ac-04-l13",title:"حالات عملية متقدمة",durationMinutes:25,order:13,description:"تحليل حالات سوقية متقدمة وتطبيق المفاهيم عليها.",objectives:["تحليل حالات حقيقية","تطبيق الأدوات","تقييم النتائج"]},{id:"ac-04-l14",title:"خلاصة ومراجعة",durationMinutes:14,order:14,description:"مراجعة شاملة لمفاهيم دورة التحليل الفني.",objectives:["مراجعة المفاهيم","تلخيص الأفكار","تقييم الاستيعاب"]}]}]};function G3(t,e){return[{id:`${t}-m1`,title:"محتوى تعليمي — تجريبي",lessons:Array.from({length:Math.min(e,6)},(r,n)=>({id:`${t}-l${n+1}`,title:`الدرس ${String(n+1).padStart(2,"0")}`,durationMinutes:18+n%3*4,order:n+1,description:"محتوى تعليمي توضيحي — سيتم استبداله بالمحتوى الفعلي عند توفّره.",objectives:["هدف تعليمي توضيحي"]}))}]}function K3(t,e){return Vv[t]||G3(t,e)}const zj="أسئلة توضيحية لأغراض العرض — ليست اختبارات فنر الرسمية",J3=[{id:"quiz-ac-01",courseId:"ac-01",title:"اختبر معلوماتك — العقل",description:"اختبار قصير على مفاهيم دورة العقل: طريقة التفكير، التحيزات المعرفية، وبناء العقلية المنهجية.",questions:[{id:"q1",prompt:"ما هو الفرق الجوهري بين المعلومة والمعرفة؟",options:[{id:"a",text:"لا فرق بينهما"},{id:"b",text:"المعرفة هي فهم المعلومة وتحويلها إلى تطبيق عملي"},{id:"c",text:"المعلومة أهم من المعرفة"},{id:"d",text:"المعرفة هي مجرد تكرار للمعلومة"}],correctOptionId:"b",explanation:"المعرفة تتجاوز مجرد امتلاك المعلومات؛ فهي تتطلب فهمها وتحويلها إلى إطار عملي قابل للتطبيق في السوق.",lessonId:"ac-01-l2"},{id:"q2",prompt:"أي مما يلي يُعد تحيزاً معرفياً يؤثر على قرارات المتداول؟",options:[{id:"a",text:"تحليل الرسم البياني قبل الدخول"},{id:"b",text:"تثبيت رأس المال قبل الصفقة"},{id:"c",text:"التمسك بالرأي الأول وتجاهل الأدلة المخالفة"},{id:"d",text:"مراجعة الصفقة بعد إغلاقها"}],correctOptionId:"c",explanation:"التحيز لتأكيد المعتقد السابق (Confirmation Bias) هو من أخطر التحيزات المعرفية، حيث يتجاهل المتداول الأدلة التي تخالف رأيه.",lessonId:"ac-01-l3"},{id:"q3",prompt:"ما الهدف الأساسي من بناء عقلية منهجية في التداول؟",options:[{id:"a",text:"تحقيق أرباح سريعة"},{id:"b",text:"اتخاذ القرارات بطريقة منظمة ومنضبطة"},{id:"c",text:"تقليد المتداولين الآخرين"},{id:"d",text:"الاعتماد على الحدس فقط"}],correctOptionId:"b",explanation:"العقلية المنهجية تعني الاتساق في عملية اتخاذ القرار، والاعتماد على قواعد واضحة بدلاً من العشوائية أو الحدس.",lessonId:"ac-01-l4"},{id:"q4",prompt:"كيف يمكن الحفاظ على التفكير المنهجي تحت ضغط السوق؟",options:[{id:"a",text:"بالتداول بكميات أكبر لتعويض الخسائر"},{id:"b",text:"بإغلاق المنصة وتجاهل السوق"},{id:"c",text:"بالالتزام بخطة مسبقة وعدم الخروج عنها"},{id:"d",text:"بالاعتماد على آراء الآخرين"}],correctOptionId:"c",explanation:"الالتزام بخطة مسبقة ومكتوبة هو من أقوى أدوات الحفاظ على التفكير المنهجي، لأنه يقلل من تأثير العاطفة في لحظة الضغط.",lessonId:"ac-01-l5"},{id:"q5",prompt:"ما الخطوة الأولى لفصل العاطفة عن القرار في التداول؟",options:[{id:"a",text:"منع المشاعر تماماً"},{id:"b",text:"الاعتراف بوجود العاطفة وتأثيرها"},{id:"c",text:"التداول بدون خطة"},{id:"d",text:"زيادة حجم الصفقات"}],correctOptionId:"b",explanation:"لا يمكن السيطرة على ما لا نعترف بوجوده. الخطوة الأولى هي الوعي بأن العاطفة جزء من العملية، ثم بناء آليات للتعامل معها.",lessonId:"ac-01-l6"}]},{id:"quiz-ac-02",courseId:"ac-02",title:"اختبر معلوماتك — التاجر",description:"اختبار على مفاهيم دورة التاجر: مفهوم التاجر، الانضباط، وإدارة الذات.",questions:[{id:"q1",prompt:"ما الذي يميّز التاجر عن المضارب؟",options:[{id:"a",text:"التاجر يبحث عن صفقات سريعة"},{id:"b",text:"التاجر يعتمد على منهجية وانضباط مستمر"},{id:"c",text:"التاجر لا يحتاج إلى خطة"},{id:"d",text:"لا فرق بينهما"}],correctOptionId:"b",explanation:"التاجر يعمل وفق منهجية واضحة وانضباط مستمر، بينما المضارب قد يعتمد على فرص قصيرة الأجل دون إطار منهجي ثابت.",lessonId:"ac-02-l2"},{id:"q2",prompt:"لماذا يُعد الانضباط أساساً في عمل التاجر؟",options:[{id:"a",text:"لأنه يضمن تحقيق أرباح دائماً"},{id:"b",text:"لأنه يحمي من القرارات العاطفية والعشوائية"},{id:"c",text:"لأنه بديل عن التحليل"},{id:"d",text:"لأنه مطلوب فقط في البداية"}],correctOptionId:"b",explanation:"الانضباط يحمي التاجر من الانحراف عن خطته تحت تأثير العاطفة أو الضغط، وهو درع واقٍ ضد القرارات العشوائية.",lessonId:"ac-02-l3"},{id:"q3",prompt:"ما معنى إدارة الذات كتاجر؟",options:[{id:"a",text:"إدارة رأس المال فقط"},{id:"b",text:"التحكم في السلوك والتصرفات والمشاعر أثناء التداول"},{id:"c",text:"تفويض القرارات لشخص آخر"},{id:"d",text:"تقليل عدد الصفقات فقط"}],correctOptionId:"b",explanation:"إدارة الذات تشمل التحكم في السلوك والمشاعر والتصرفات، وهي مهارة أساسية تكمّل المهارات الفنية في التداول.",lessonId:"ac-02-l5"},{id:"q4",prompt:"كيف يبني التاجر علاقة صحية مع السوق؟",options:[{id:"a",text:"بالتعامل مع السوق كعدو"},{id:"b",text:"بالتعامل مع السوق كمرشد"},{id:"c",text:"بفهم طبيعة السوق والتزام بقواعد التعامل معه"},{id:"d",text:"بمحاولة التنبؤ بكل حركة"}],correctOptionId:"c",explanation:"العلاقة الصحية مع السوق تقوم على فهم طبيعته والالتزام بقواعد واضحة في التعامل معه، دون عداوة أو تبعية عمياء.",lessonId:"ac-02-l4"}]},{id:"quiz-ac-03",courseId:"ac-03",title:"اختبر معلوماتك — الأسواق المالية",description:"اختبار على مفاهيم دورة الأسواق المالية: بنية الأسواق، الأدوات، والسيولة.",questions:[{id:"q1",prompt:"ما الوظيفة الأساسية للأسواق المالية؟",options:[{id:"a",text:"توفير الترفيه فقط"},{id:"b",text:"تسهيل تبادل رأس المال والأدوات المالية"},{id:"c",text:"تحديد أسعار العملات فقط"},{id:"d",text:"إدارة البنوك المركزية"}],correctOptionId:"b",explanation:"الأسواق المالية تتيح تبادل رأس المال والأدوات المالية بين الأطراف المختلفة، مما يسهل الاستثمار وإدارة المخاطر.",lessonId:"ac-03-l1"},{id:"q2",prompt:"ما المقصود بالسيولة في السوق؟",options:[{id:"a",text:"عدد المتداولين فقط"},{id:"b",text:"سهولة تنفيذ الصفقات دون تأثير كبير على السعر"},{id:"c",text:"حجم الرسوم فقط"},{id:"d",text:"عدد الأدوات المتاحة"}],correctOptionId:"b",explanation:"السيولة تعني قدرة السوق على استيعاب أوامر البيع والشراء دون حدوث تقلبات كبيرة في السعر، مما يسهل التنفيذ بكفاءة.",lessonId:"ac-03-l7"},{id:"q3",prompt:"أي مما يلي يُعد من الأطراف المشاركة في الأسواق المالية؟",options:[{id:"a",text:"المتداولون والمستثمرون فقط"},{id:"b",text:"الوسطاء والبنوك والجهات التنظيمية"},{id:"c",text:"الصحفيون فقط"},{id:"d",text:"الحكومات فقط"}],correctOptionId:"b",explanation:"الأسواق المالية تشمل أطرافاً متعددة: المتداولين، الوسطاء، البنوك، الجهات التنظيمية، والمؤسسات المالية.",lessonId:"ac-03-l3"},{id:"q4",prompt:"كيف تؤثر الأخبار الاقتصادية على الأسعار؟",options:[{id:"a",text:"لا تأثير لها"},{id:"b",text:"تؤثر فقط على المدى الطويل"},{id:"c",text:"قد تسبب تقلبات فورية في الأسعار"},{id:"d",text:"تؤثر فقط على الذهب"}],correctOptionId:"c",explanation:"الأخبار الاقتصادية قد تسبب تقلبات سريعة في الأسعار، خاصة عند صدور بيانات غير متوقعة، ولذلك يجب التعامل معها بحذر.",lessonId:"ac-03-l9"},{id:"q5",prompt:"ما الاعتبار الأهم عند اختيار منصة تداول؟",options:[{id:"a",text:"شكل المنصة فقط"},{id:"b",text:"الموثوقية والأدوات والرسوم وخدمة الدعم"},{id:"c",text:"عدد الألوان"},{id:"d",text:"حجم الإعلانات"}],correctOptionId:"b",explanation:"اختيار منصة التداول يجب أن يراعي الموثوقية، الأدوات المتاحة، الرسوم، وخدمة الدعم، وليس المظهر الخارجي فقط.",lessonId:"ac-03-l6"}]},{id:"quiz-ac-04",courseId:"ac-04",title:"اختبر معلوماتك — التحليل الفني",description:"اختبار على مفاهيم التحليل الفني: الرسوم البيانية، الاتجاهات، الدعم والمقاومة، والمؤشرات.",questions:[{id:"q1",prompt:"ما المبدأ الأساسي الذي يقوم عليه التحليل الفني؟",options:[{id:"a",text:"الأرصدة السابقة لا علاقة لها بالمستقبل"},{id:"b",text:"حركة السعر تعكس كل المعلومات المتاحة"},{id:"c",text:"التحليل الفني يضمن نتائج مؤكدة"},{id:"d",text:"الأسعار تتحرك عشوائياً دائماً"}],correctOptionId:"b",explanation:"التحليل الفني يفترض أن السعر الحالي يعكس كل المعلومات المتاحة في السوق، وأن الأنماط السابقة قد تتكرر.",lessonId:"ac-04-l1"},{id:"q2",prompt:"ماذا يمثل مستوى الدعم على الرسم البياني؟",options:[{id:"a",text:"نقطة يصعب على السعر تجاوزها للأعلى"},{id:"b",text:"نقطة يصعب على السعر النزول أسفلها"},{id:"c",text:"أعلى سعر في الجلسة"},{id:"d",text:"متوسط السعر الأسبوعي"}],correctOptionId:"b",explanation:"مستوى الدعم هو منطقة سعرية يصعب على السعر النزول أسفلها، حيث يزداد الطلب ويقل العرض عند هذا المستوى.",lessonId:"ac-04-l5"},{id:"q3",prompt:"كيف يتم تحديد الاتجاه الصاعد؟",options:[{id:"a",text:"بقمم وقيعان متناقصة"},{id:"b",text:"بقمم وقيعان متصاعدة"},{id:"c",text:"بسعر ثابت تماماً"},{id:"d",text:"بحجم تداول منخفض"}],correctOptionId:"b",explanation:"الاتجاه الصاعد يتميز بقمم وقيعان متصاعدة، أي أن كل قمة أعلى من سابقتها وكل قاع أعلى من سابقه.",lessonId:"ac-04-l4"},{id:"q4",prompt:"ما فائدة استخدام أكثر من إطار زمني في التحليل؟",options:[{id:"a",text:"لتأكيد الإشارة وفهم الصورة الأوسع"},{id:"b",text:"لزيادة عدد الصفقات"},{id:"c",text:"لتجنب التحليل كلياً"},{id:"d",text:"لا فائدة منه"}],correctOptionId:"a",explanation:"تحليل الأطر الزمنية المتعددة يوفر صورة أشمل للسوق، حيث يساعد الإطار الأوسع على فهم الاتجاه العام والإطار الأضيق على تحديد نقاط الدخول.",lessonId:"ac-04-l11"},{id:"q5",prompt:"ما التحذير الأهم عند استخدام المؤشرات الفنية؟",options:[{id:"a",text:"كلما زاد عدد المؤشرات كان أفضل"},{id:"b",text:"المؤشرات تضمن نجاح الصفقة"},{id:"c",text:"المؤشرات أدوات مساعدة وليست مضمونة"},{id:"d",text:"يجب استخدام مؤشر واحد فقط دائماً"}],correctOptionId:"c",explanation:"المؤشرات الفنية أدوات مساعدة تساعد في التحليل، لكنها ليست مضمونة النتائج ويجب استخدامها ضمن منظومة متكاملة.",lessonId:"ac-04-l7"}]},{id:"quiz-ac-05",courseId:"ac-05",title:"اختبر معلوماتك — الإدارة المالية",description:"اختبار على مفاهيم الإدارة المالية للمتداول: الأموال، الالتزامات، والتنظيم المالي.",questions:[{id:"q1",prompt:"ما الخطوة الأولى في تنظيم الجانب المالي للمتداول؟",options:[{id:"a",text:"فتح صفقات أكبر"},{id:"b",text:"معرفة رأس المال المتاح والالتزامات"},{id:"c",text:"استثمار كل المدخرات"},{id:"d",text:"اقتراض رأس مال إضافي"}],correctOptionId:"b",explanation:"قبل البدء في التداول، يجب معرفة رأس المال المتاح بوضوح وفهم الالتزامات المالية، لتحديد ما يمكن المخاطرة به دون التأثير على الاحتياجات الأساسية."},{id:"q2",prompt:"أي مما يلي يُعد التزاماً مالياً يجب مراعاته؟",options:[{id:"a",text:"رأس المال المخصص للتداول فقط"},{id:"b",text:"النفقات الثابتة والديون والمصاريف العائلية"},{id:"c",text:"الأرباح المتوقعة"},{id:"d",text:"قيمة المنصة"}],correctOptionId:"b",explanation:"الالتزامات المالية تشمل النفقات الثابتة والديون والمصاريف العائلية، ويجب فصلها تماماً عن رأس المال المخصص للتداول."},{id:"q3",prompt:"ما القاعدة الأساسية في تنظيم الأموال للتداول؟",options:[{id:"a",text:"استثمار كل ما تملك"},{id:"b",text:"تخصيص مبلغ يمكن المخاطرة به دون التأثير على المعيشة"},{id:"c",text:"الاقتراض لزيادة رأس المال"},{id:"d",text:"عدم التخطيط المسبق"}],correctOptionId:"b",explanation:"يجب تخصيص مبلغ للتداول يمكن تحمل خسارته دون التأثير على مستوى المعيشة أو الالتزامات الأساسية."}]},{id:"quiz-ac-06",courseId:"ac-06",title:"اختبر معلوماتك — إدارة المخاطر",description:"اختبار على مفاهيم إدارة المخاطر: قياس المخاطر، وتنظيم التعامل معها.",questions:[{id:"q1",prompt:"ما المقصود بإدارة المخاطر في التداول؟",options:[{id:"a",text:"منع الخسائر تماماً"},{id:"b",text:"تحديد المخاطر والسيطرة على حجمها"},{id:"c",text:"تجنب التداول نهائياً"},{id:"d",text:"زيادة المخاطرة لتعويض الخسائر"}],correctOptionId:"b",explanation:"إدارة المخاطر لا تعني منع الخسائر — فهي جزء طبيعي من التداول — بل تعني تحديد المخاطر مسبقاً والسيطرة على حجمها."},{id:"q2",prompt:"ما دور وقف الخسارة (Stop Loss)؟",options:[{id:"a",text:"ضمان تحقيق أرباح"},{id:"b",text:"تحديد أقصى خسارة مقبولة قبل الدخول"},{id:"c",text:"زيادة حجم الصفقة"},{id:"d",text:"إلغاء الحاجة للتحليل"}],correctOptionId:"b",explanation:"وقف الخسارة يحدد مسبقاً مستوى السعر الذي تُغلق عنده الصفقة بخسارة، مما يحمي رأس المال من خسائر كبيرة."},{id:"q3",prompt:"كيف يتم قياس المخاطر في صفقة واحدة؟",options:[{id:"a",text:"بعدد النقاط فقط"},{id:"b",text:"بالمبلغ الذي يمكن خسارته إذا وصل وقف الخسارة"},{id:"c",text:"بحجم الربح المتوقع"},{id:"d",text:"بمدة الصفقة"}],correctOptionId:"b",explanation:"المخاطرة في صفقة واحدة تُقاس بالمبلغ الفعلي الذي يمكن خسارته إذا وصل السعر إلى مستوى وقف الخسارة."},{id:"q4",prompt:"ما القاعدة العامة للمخاطرة في صفقة واحدة؟",options:[{id:"a",text:"مخاطرة 50% من رأس المال"},{id:"b",text:"مخاطرة نسبة صغيرة من رأس المال"},{id:"c",text:"مخاطرة كل رأس المال في صفقة واحدة"},{id:"d",text:"لا حاجة لقاعدة"}],correctOptionId:"b",explanation:"القاعدة العامة هي عدم المخاطرة بنسبة كبيرة من رأس المال في صفقة واحدة، لتجنب الخسائر الكارثية والبقاء في السوق."}]},{id:"quiz-ac-07",courseId:"ac-07",title:"اختبر معلوماتك — إدارة رأس المال",description:"اختبار على مفاهيم إدارة رأس المال: التوزيع، الاستخدام المنهجي، والتنظيم.",questions:[{id:"q1",prompt:"ما الهدف من إدارة رأس المال في التداول؟",options:[{id:"a",text:"مضاعفة رأس المال في أسرع وقت"},{id:"b",text:"تنظيم استخدام رأس المال لتحقيق استدامة طويلة الأمد"},{id:"c",text:"زيادة عدد الصفقات"},{id:"d",text:"تقليل رأس المال"}],correctOptionId:"b",explanation:"إدارة رأس المال تهدف إلى تنظيم استخدامه بشكل يحقق استمرارية طويلة الأمد، ويحمي من استنزاف رأس المال في فترة قصيرة."},{id:"q2",prompt:"ماذا يعني توزيع رأس المال؟",options:[{id:"a",text:"استثمار كل رأس المال في صفقة واحدة"},{id:"b",text:"تقسيم رأس المال على فرص متعددة بدرجات مخاطر مختلفة"},{id:"c",text:"سحب رأس المال كاملاً"},{id:"d",text:"اقتراض مبالغ إضافية"}],correctOptionId:"b",explanation:"توزيع رأس المال يعني تقسيمه على فرص أو صفقات متعددة بدرجات مخاطر مختلفة، مما يقلل من تأثير خسارة صفقة واحدة."},{id:"q3",prompt:"لماذا يُعد تنظيم استخدام رأس المال أهم من حجمه؟",options:[{id:"a",text:"لأن رأس المال الكبير لا يحتاج تنظيم"},{id:"b",text:"لأن التنظيم يحمي رأس المال ولو كان صغيراً"},{id:"c",text:"لأن رأس المال الصغير لا ينفع"},{id:"d",text:"لأن التنظيم غير مهم"}],correctOptionId:"b",explanation:"تنظيم استخدام رأس المال يحميه من الاستنزاف، ولو كان صغيراً. بدون تنظيم، يمكن خسارة رأس مال كبير في وقت قصير."}]},{id:"quiz-ac-08",courseId:"ac-08",title:"اختبر معلوماتك — الذهب والمعادن",description:"اختبار على مفاهيم سوق الذهب والمعادن: طبيعته، خصائصه، والعوامل المرتبطة به.",questions:[{id:"q1",prompt:"ما الذي يميز الذهب عن غيره من المعادن في الأسواق المالية؟",options:[{id:"a",text:"لا قيمة له"},{id:"b",text:"يُعد ملاذاً آمناً في أوقات عدم اليقين"},{id:"c",text:"يتأثر فقط بالعرض"},{id:"d",text:"لا يتأثر بالأخبار"}],correctOptionId:"b",explanation:"الذهب يُعد تقليدياً ملاذاً آمناً في أوقات عدم اليقين الاقتصادي والسياسي، حيث يتجه المستثمرون إليه للحفاظ على قيمة أموالهم."},{id:"q2",prompt:"أي من العوامل التالية يؤثر على سعر الذهب؟",options:[{id:"a",text:"فقط العرض والطلب المحلي"},{id:"b",text:"أسعار الفائدة، التضخم، والقوة الشرائية للدولار"},{id:"c",text:"عدد المتداولين الأفراد فقط"},{id:"d",text:"لا عوامل مؤثرة"}],correctOptionId:"b",explanation:"سعر الذهب يتأثر بعوامل متعددة منها أسعار الفائدة، التضخم، وقوة الدولار الأمريكي، إضافة إلى العرض والطلب العالمي."},{id:"q3",prompt:"ما العلاقة التقليدية بين الذهب والدولار الأمريكي؟",options:[{id:"a",text:"تتحرك دائماً في نفس الاتجاه"},{id:"b",text:"علاقة عكسية غالباً — ارتفاع الدولار قد يضعف الذهب"},{id:"c",text:"لا علاقة بينهما"},{id:"d",text:"الذهب يتحرك فقط مع اليورو"}],correctOptionId:"b",explanation:"غالباً ما تكون العلاقة عكسية بين الذهب والدولار الأمريكي، فحين يضعف الدولار يرتفع الذهب والعكس صحيح، لكنها ليست قاعدة مطلقة."}]},{id:"quiz-ac-09",courseId:"ac-09",title:"اختبر معلوماتك — أخطاء المتداولين",description:"اختبار على أبرز الأخطاء الشائعة لدى المتداولين وأسبابها وآثارها.",questions:[{id:"q1",prompt:"ما الخطأ الأكثر شيوعاً لدى المتداولين المبتدئين؟",options:[{id:"a",text:"الالتزام بخطة واضحة"},{id:"b",text:"مخاطرة أكثر مما يمكن تحمل خسارته"},{id:"c",text:"تحليل السوق قبل الدخول"},{id:"d",text:"استخدام وقف الخسارة"}],correctOptionId:"b",explanation:"مخاطرة أكثر مما يمكن تحمل خسارته من أخطر الأخطاء الشائعة، حيث يؤدي إلى خسائر كبيرة قد تنهي رحلة المتداول مبكراً."},{id:"q2",prompt:"ما أثر التداول العاطفي (الانتقام بعد خسارة)؟",options:[{id:"a",text:"يؤدي إلى أرباح أكبر"},{id:"b",text:"يزيد الخسائر بسبب قرارات غير منهجية"},{id:"c",text:"لا تأثير له"},{id:"d",text:"يحسّن الأداء"}],correctOptionId:"b",explanation:"التداول العاطفي بعد خسارة (Revenge Trading) يؤدي إلى زيادة الخسائر، لأن المتداول يتخذ قرارات غير منهجية تحت ضغط الغضب أو الإحباط."},{id:"q3",prompt:"كيف يمكن تجنب خطأ عدم استخدام وقف الخسارة؟",options:[{id:"a",text:"بعدم التداول نهائياً"},{id:"b",text:"بوضع وقف خسارة قبل تنفيذ كل صفقة"},{id:"c",text:"بزيادة حجم الصفقات"},{id:"d",text:"بالتداول بدون خطة"}],correctOptionId:"b",explanation:"وضع وقف الخسارة قبل تنفيذ الصفقة هو القاعدة الأساسية، ويحمي رأس المال من الخسائر الكبيرة."},{id:"q4",prompt:"ما أثر عدم مراجعة الأداء على المتداول؟",options:[{id:"a",text:"يحسّن النتائج"},{id:"b",text:"يمنع التعلم من الأخطاء وتكرارها"},{id:"c",text:"لا تأثير له"},{id:"d",text:"يوفر وقتاً فقط"}],correctOptionId:"b",explanation:"عدم مراجعة الأداء يمنع المتداول من التعلم من أخطائه، مما يؤدي إلى تكرارها. المراجعة الدورية أساس للتحسين المستمر."}]}],hh="fnar-cms-content-v1",ur={consultations:Rv,followUpSessions:s3,partnershipCategories:Mv,partners:a3,academyCourses:Wv,academyModules:Vv,academyQuizzes:J3},Z3=["consultations","followUpSessions","partnershipCategories","partners","academyCourses","academyQuizzes"];function Mp(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function Ia(t){return t.every(e=>Mp(e)&&typeof e.id=="string"&&e.id.trim().length>0)}function ej(t){if(!Mp(t))throw new Error("ملف النسخة الاحتياطية غير صالح.");for(const e of Z3){const r=t[e];if(!Array.isArray(r)||!Ia(r)||new Set(r.map(n=>n.id)).size!==r.length)throw new Error(`بيانات القسم ${e} غير صالحة.`)}if(!Mp(t.academyModules))throw new Error("بيانات وحدات الأكاديمية غير صالحة.");for(const e of Object.values(t.academyModules)){if(!Array.isArray(e)||!Ia(e))throw new Error("توجد وحدات أكاديمية غير صالحة.");for(const r of e)if(!Array.isArray(r.lessons)||!Ia(r.lessons))throw new Error("توجد دروس غير صالحة في النسخة الاحتياطية.")}for(const e of t.academyQuizzes){if(typeof e.courseId!="string"||!Array.isArray(e.questions)||!Ia(e.questions))throw new Error("توجد اختبارات غير صالحة في النسخة الاحتياطية.");for(const r of e.questions)if(typeof r.prompt!="string"||!Array.isArray(r.options)||!Ia(r.options)||typeof r.correctOptionId!="string"||!r.options.some(n=>n.id===r.correctOptionId))throw new Error("توجد أسئلة غير صالحة في النسخة الاحتياطية.")}return t}const Op=new Set;function Hv(){if(typeof window>"u")return ur;try{const t=localStorage.getItem(hh);if(!t)return ur;const e=JSON.parse(t);return{consultations:Array.isArray(e.consultations)?e.consultations:ur.consultations,followUpSessions:Array.isArray(e.followUpSessions)?e.followUpSessions:ur.followUpSessions,partnershipCategories:Array.isArray(e.partnershipCategories)?e.partnershipCategories:ur.partnershipCategories,partners:Array.isArray(e.partners)?e.partners:ur.partners,academyCourses:Array.isArray(e.academyCourses)?e.academyCourses:ur.academyCourses,academyModules:e.academyModules&&typeof e.academyModules=="object"&&!Array.isArray(e.academyModules)?e.academyModules:ur.academyModules,academyQuizzes:Array.isArray(e.academyQuizzes)?e.academyQuizzes:ur.academyQuizzes}}catch{return ur}}let Et=Hv();function qv(){Op.forEach(t=>t())}function Jn(t){localStorage.setItem(hh,JSON.stringify(t)),Et=t,qv()}function tj(t){return Op.add(t),()=>{Op.delete(t)}}function rj(){return Et}function nj(){return ur}typeof window<"u"&&window.addEventListener("storage",t=>{t.key===hh&&(Et=Hv(),qv())});function mh(){return b.useSyncExternalStore(tj,rj,nj)}const Ut={add(t,e){const r=Et[t];if(r.some(n=>n.id===e.id))throw new Error("هذا المعرّف مستخدم بالفعل.");Jn({...Et,[t]:[...r,e]})},update(t,e,r){const n=Et[t];Jn({...Et,[t]:n.map(i=>i.id===e?{...i,...r,id:e}:i)})},remove(t,e){const r={...Et,[t]:Et[t].filter(n=>n.id!==e)};if(t==="academyCourses"){const n={...Et.academyModules};delete n[e],r.academyModules=n,r.academyQuizzes=Et.academyQuizzes.filter(i=>i.courseId!==e)}Jn(r)},replace(t,e){Jn({...Et,[t]:e})},setAcademyModules(t,e){Jn({...Et,academyModules:{...Et.academyModules,[t]:e}})},reset(t){if(!t){Jn(structuredClone(ur));return}Jn({...Et,[t]:structuredClone(ur[t])})},exportJSON(){return JSON.stringify(Et,null,2)},importJSON(t){let e;try{e=JSON.parse(t)}catch{throw new Error("تعذر قراءة ملف JSON. تحقق من صيغة الملف.")}const r=ej(e);Jn(structuredClone(r))}},F0=[{key:"consultations",label:"الاستشارات",description:"الخدمات والأسعار والمدد",route:"/admin/consultations"},{key:"followUpSessions",label:"جلسات المتابعة",description:"المتابعات والأسعار والأهلية",route:"/admin/consultations"},{key:"partnershipCategories",label:"مسارات الشراكة",description:"المسارات والجمهور والمتطلبات",route:"/admin/partnerships"},{key:"partners",label:"الشركاء",description:"الشركات والشعارات والروابط",route:"/admin/partnerships"}],ij={id:"المعرّف",number:"الرقم",title:"العنوان",name:"الاسم",category:"التصنيف",subtitle:"العنوان الفرعي",description:"الوصف",targetAudience:"الجمهور المستهدف",durationMinutes:"المدة بالدقائق",priceKWD:"السعر بالدينار الكويتي",supportedPriceKWD:"السعر المدعوم",isSupportedEligible:"مؤهل للسعر المدعوم",mayLeadToPartnership:"قد يؤدي إلى شراكة",minimumCapitalKWD:"الحد الأدنى لرأس المال",order:"ترتيب العرض",eligibleAfterCategory:"التصنيف المؤهل للمتابعة",eligibilityWindowDays:"مدة الأهلية بالأيام",audiences:"الفئات المستهدفة",requiresCapital:"يتطلب رأس مال",hasApplicationForm:"يحتوي على نموذج تقديم",logoUrl:"رابط الشعار",website:"الموقع الإلكتروني"},$l="w-full rounded-xl border border-[#1D2C4F]/15 bg-white px-4 py-3 text-[13px] text-[#1D2C4F] outline-none focus:border-[#84A4B1]",sj={consultations:{id:"",number:"",category:"general",title:"",targetAudience:"",description:"",durationMinutes:60,priceKWD:0,isSupportedEligible:!1,mayLeadToPartnership:!1,order:1},followUpSessions:{id:"",title:"",durationMinutes:30,priceKWD:0,eligibleAfterCategory:"general",eligibilityWindowDays:null},partnershipCategories:{id:"",number:"",title:"",subtitle:"",description:"",audiences:[],requiresCapital:!1,hasApplicationForm:!0},partners:{id:"",name:"",category:"strategic",logoUrl:"",website:""}};function aj(t){return`${t}-${crypto.randomUUID()}`}function oj(t){return ij[t]??t}function lj(t){const e=new Blob([t],{type:"application/json"}),r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download="fnar-cms-backup.json",n.click(),URL.revokeObjectURL(r)}function md(){const t=mh(),e=Yt(),[r,n]=b.useState("consultations"),[i,s]=b.useState(null),[o,l]=b.useState(null),[u,c]=b.useState(""),[d,p]=b.useState(""),f=o!==null;b.useEffect(()=>{if(!f)return;const k=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=k}},[f]),b.useEffect(()=>{e.pathname.includes("partnerships")?n("partnershipCategories"):e.pathname.includes("consultations")&&n("consultations")},[e.pathname]);const m=t[r],y=F0.find(k=>k.key===r),g=async k=>{var F;const j=(F=k.target.files)==null?void 0:F[0];if(j&&(k.target.value="",!!window.confirm("سيتم استبدال جميع بيانات نظام إدارة المحتوى بالنسخة الاحتياطية. هل تريد المتابعة؟")))try{const A=await j.text();Ut.importJSON(A),l(null),s(null),c(""),p("تم استيراد النسخة الاحتياطية بنجاح.")}catch(A){p(""),c(A instanceof Error?A.message:"تعذر استيراد النسخة الاحتياطية.")}},_=()=>{s(null),l({...structuredClone(sj[r]),id:aj(r)}),c(""),p("")},h=k=>{s(String(k.id)),l(structuredClone(k)),c(""),p("")},x=(k,j)=>{l(F=>F&&{...F,[k]:j})},v=k=>{if(k.preventDefault(),!!o){if(!String(o.id??"").trim()){c("المعرّف مطلوب.");return}if("title"in o&&!String(o.title??"").trim()){c("العنوان مطلوب.");return}if("name"in o&&!String(o.name??"").trim()){c("الاسم مطلوب.");return}try{i?Ut.update(r,i,o):Ut.add(r,o),l(null),s(null),c(""),p("تم حفظ التغييرات بنجاح.")}catch(j){c(j instanceof Error?j.message:"تعذر حفظ التغييرات.")}}},w=k=>{if(window.confirm("هل أنت متأكد من حذف هذا العنصر؟"))try{Ut.remove(r,k),p("تم حذف العنصر."),c("")}catch{c("تعذر حذف العنصر.")}},N=()=>{if(window.confirm("سيتم استعادة المحتوى الأصلي لهذا القسم. هل تريد المتابعة؟"))try{Ut.reset(r),p("تمت استعادة المحتوى الأصلي."),c("")}catch{c("تعذرت استعادة المحتوى.")}};return a.jsx("main",{dir:"rtl",className:"min-h-screen bg-[#F3F3F1] px-5 pb-20 pt-32 font-arabic text-[#1D2C4F] sm:px-8",children:a.jsxs("div",{className:"mx-auto max-w-[1380px]",children:[a.jsxs("div",{className:"mb-10 flex flex-wrap items-center justify-between gap-5",children:[a.jsxs("div",{children:[a.jsx("p",{className:"mb-3 text-[11px] font-semibold tracking-widest text-[#54707D]",children:"FNAR / CONTENT MANAGEMENT"}),a.jsx("h1",{className:"text-[clamp(2rem,4vw,3.5rem)] font-bold",children:"لوحة إدارة فنر"}),a.jsx("p",{className:"mt-3 text-[13px] text-[#1D2C4F]/60",children:"إدارة الاستشارات والشراكات والأكاديمية والفواتير من مكان واحد."})]}),a.jsxs("div",{className:"flex flex-wrap gap-3",children:[a.jsxs(Ji,{to:"/admin/academy",className:"flex items-center gap-2 rounded-full bg-[#84A4B1] px-5 py-3 text-[12px] font-semibold text-[#0F1E36] transition-colors hover:bg-[#152742] hover:text-white",children:[a.jsx(Bv,{size:16}),"إدارة الأكاديمية"]}),a.jsxs(Ji,{to:"/admin/invoices",className:"flex items-center gap-2 rounded-full bg-[#1D2C4F] px-5 py-3 text-[12px] font-semibold text-white transition-colors hover:bg-[#84A4B1] hover:text-[#0F1E36]",children:[a.jsx(I3,{size:16}),"إدارة الفواتير"]}),a.jsxs("button",{type:"button",onClick:()=>lj(Ut.exportJSON()),className:"flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-5 py-3 text-[12px] transition-colors hover:bg-white",children:[a.jsx(M3,{size:16}),"تصدير نسخة احتياطية"]}),a.jsxs("label",{className:"flex cursor-pointer items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-5 py-3 text-[12px] transition-colors hover:bg-white",children:[a.jsx(U3,{size:16}),"استيراد نسخة احتياطية",a.jsx("input",{type:"file",accept:".json,application/json",className:"sr-only",onChange:g})]}),a.jsxs(Ji,{to:"/",className:"flex items-center gap-2 rounded-full bg-[#1D2C4F] px-5 py-3 text-[12px] text-white transition-colors hover:bg-[#152742]",children:[a.jsx(zv,{size:16}),"عرض الموقع"]})]})]}),a.jsx("div",{className:"mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:F0.map(k=>a.jsxs("button",{type:"button",onClick:()=>{n(k.key),l(null),c(""),p("")},className:`rounded-[18px] border p-5 text-right transition-all ${r===k.key?"border-[#84A4B1] bg-[#152742] text-white":"border-[#1D2C4F]/10 bg-white hover:border-[#84A4B1]"}`,children:[a.jsx("span",{className:"block text-[12px] opacity-65",children:k.description}),a.jsx("span",{className:"mt-3 block text-[19px] font-bold",children:k.label}),a.jsx("span",{className:"mt-4 block font-sans text-[26px] font-bold text-[#84A4B1]",children:t[k.key].length})]},k.key))}),a.jsxs("section",{className:"overflow-hidden rounded-[22px] border border-[#1D2C4F]/10 bg-white",children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-[#1D2C4F]/10 p-6 sm:p-8",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-[22px] font-bold",children:y.label}),a.jsxs("p",{className:"mt-2 text-[12px] text-[#1D2C4F]/50",children:[m.length," عنصر"]})]}),a.jsxs("div",{className:"flex flex-wrap gap-3",children:[a.jsxs("button",{type:"button",onClick:N,className:"flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-4 py-3 text-[12px]",children:[a.jsx(Uv,{size:15}),"استعادة الأصل"]}),a.jsxs("button",{type:"button",onClick:_,className:"flex items-center gap-2 rounded-full bg-[#1D2C4F] px-5 py-3 text-[12px] text-white",children:[a.jsx(Za,{size:16}),"إضافة عنصر"]})]})]}),d&&a.jsx("p",{role:"status",className:"mx-6 mt-5 rounded-lg bg-[#84A4B1]/15 px-4 py-3 text-[12px] text-[#1D2C4F]",children:d}),u&&a.jsx("p",{role:"alert",className:"mx-6 mt-5 rounded-lg bg-red-50 px-4 py-3 text-[12px] text-red-700",children:u}),m.length===0?a.jsxs("div",{className:"px-8 py-20 text-center",children:[a.jsx(O3,{size:32,className:"mx-auto mb-4 text-[#84A4B1]"}),a.jsx("p",{className:"text-[15px] font-semibold",children:"لا توجد عناصر حالياً"}),a.jsx("p",{className:"mt-2 text-[12px] text-[#1D2C4F]/50",children:"أضف أول عنصر لعرضه في الموقع."})]}):a.jsx("div",{className:"divide-y divide-[#1D2C4F]/10",children:m.map(k=>a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-8",children:[a.jsxs("div",{className:"min-w-0",children:[a.jsx("p",{className:"text-[15px] font-semibold",children:String(k.title??k.name??k.id)}),a.jsxs("p",{className:"mt-2 text-[11px] text-[#1D2C4F]/45",children:[String(k.id),typeof k.priceKWD=="number"?` — ${k.priceKWD} د.ك`:""]})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{type:"button",onClick:()=>h(k),"aria-label":"تعديل",className:"rounded-full border border-[#1D2C4F]/10 p-3 hover:bg-[#F3F3F1]",children:a.jsx(z3,{size:16})}),a.jsx("button",{type:"button",onClick:()=>w(String(k.id)),"aria-label":"حذف",className:"rounded-full border border-red-200 p-3 text-red-600 hover:bg-red-50",children:a.jsx(eo,{size:16})})]})]},String(k.id)))})]}),o&&a.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#0B1729]/75 p-3 backdrop-blur-sm sm:p-6",dir:"rtl",children:a.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"cms-editor-title",className:"flex h-[min(850px,calc(100dvh-2rem))] w-full max-w-[760px] flex-col overflow-hidden rounded-[22px] bg-[#F3F3F1] shadow-2xl",children:[a.jsxs("div",{className:"flex shrink-0 items-center justify-between gap-4 border-b border-[#1D2C4F]/10 px-6 py-5 sm:px-9",children:[a.jsxs("div",{children:[a.jsx("p",{className:"mb-2 text-[11px] text-[#54707D]",children:"CONTENT EDITOR"}),a.jsx("h2",{id:"cms-editor-title",className:"text-[24px] font-bold",children:i?"تعديل العنصر":"إضافة عنصر جديد"})]}),a.jsx("button",{type:"button",onClick:()=>l(null),"aria-label":"إغلاق",className:"rounded-full border border-[#1D2C4F]/10 p-3",children:a.jsx(W3,{size:18})})]}),a.jsxs("form",{id:"cms-editor-form",onSubmit:v,className:"flex min-h-0 flex-1 flex-col",children:[a.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-9",children:a.jsx("div",{className:"grid gap-5 sm:grid-cols-2",children:Object.entries(o).map(([k,j])=>{const F=k==="description"||k==="targetAudience",A=Array.isArray(j)||j!==null&&typeof j=="object";return a.jsxs("label",{className:`block ${F||A?"sm:col-span-2":""}`,children:[a.jsx("span",{className:"mb-2 block text-[12px] font-medium",children:oj(k)}),typeof j=="boolean"?a.jsxs("select",{className:$l,value:String(j),onChange:C=>x(k,C.target.value==="true"),children:[a.jsx("option",{value:"true",children:"نعم"}),a.jsx("option",{value:"false",children:"لا"})]}):A?a.jsx("textarea",{dir:"auto",rows:4,className:`${$l} font-mono`,value:JSON.stringify(j,null,2),onChange:C=>{try{x(k,JSON.parse(C.target.value)),c("")}catch{c("تحقق من صيغة JSON في الحقول المركبة.")}}}):F?a.jsx("textarea",{rows:4,className:$l,value:String(j??""),onChange:C=>x(k,C.target.value)}):a.jsx("input",{className:$l,disabled:k==="id",type:typeof j=="number"?"number":"text",min:typeof j=="number"?0:void 0,value:j===null?"":String(j??""),onChange:C=>{const L=C.target.value;x(k,typeof j=="number"?Number(L):j===null?L===""?null:Number(L):L)}})]},k)})})}),a.jsxs("div",{className:"shrink-0 border-t border-[#1D2C4F]/10 bg-[#F3F3F1] px-6 py-4 sm:px-9",children:[u&&a.jsx("p",{role:"alert",className:"mb-3 text-[12px] text-red-600",children:u}),a.jsxs("div",{className:"flex flex-wrap justify-end gap-3",children:[a.jsx("button",{type:"button",onClick:()=>l(null),className:"rounded-full border border-[#1D2C4F]/15 px-6 py-3 text-[12px]",children:"إلغاء"}),a.jsxs("button",{type:"submit",className:"flex items-center gap-2 rounded-full bg-[#1D2C4F] px-7 py-3 text-[12px] font-semibold text-white",children:[a.jsx(du,{size:16}),"حفظ التغييرات"]})]})]})]})]})})]})})}function uj(){const{academyCourses:t,academyModules:e,academyQuizzes:r}=mh();return b.useMemo(()=>{const n=[...t].sort((c,d)=>c.order-d.order),i=c=>n.find(d=>d.id===c),s=c=>n.some(p=>p.id===c)?Object.prototype.hasOwnProperty.call(e,c)?e[c]??[]:Wv.some(p=>p.id===c)?K3(c,6):[]:[];return{courses:n,modules:e,quizzes:r,getCourse:i,getModules:s,getLessons:c=>[...s(c)].sort((d,p)=>d.order-p.order).flatMap(d=>[...d.lessons].sort((p,f)=>p.order-f.order)),getQuiz:c=>r.find(d=>d.courseId===c),getQuizById:c=>r.find(d=>d.id===c)}},[t,e,r])}const jo="w-full rounded-xl border border-[#1D2C4F]/15 bg-white px-4 py-3 text-[13px] text-[#1D2C4F] outline-none focus:border-[#84A4B1]",pu="mb-2 block text-[12px] font-semibold text-[#1D2C4F]/70";function $a(t){return`${t}-${crypto.randomUUID()}`}function xt({label:t,value:e,onChange:r,type:n="text",multiline:i=!1,disabled:s=!1}){return a.jsxs("label",{className:"block",children:[a.jsx("span",{className:pu,children:t}),i?a.jsx("textarea",{rows:3,className:jo,value:e,onChange:o=>r(o.target.value),disabled:s}):a.jsx("input",{className:jo,type:n,value:e,onChange:o=>r(o.target.value),disabled:s})]})}function cj(){var ye;const{academyCourses:t,academyModules:e,academyQuizzes:r}=mh(),n=uj(),[i,s]=b.useState("courses"),[o,l]=b.useState(((ye=t[0])==null?void 0:ye.id)??""),[u,c]=b.useState(null),[d,p]=b.useState([]),[f,m]=b.useState(null),[y,g]=b.useState(""),[_,h]=b.useState(""),[x,v]=b.useState("idle");b.useEffect(()=>{if(x==="idle")return;const P=window.setTimeout(()=>{v("idle")},4e3);return()=>window.clearTimeout(P)},[x]);const w=t.find(P=>P.id===o),N=r.find(P=>P.courseId===o),k=u!==null&&JSON.stringify(u)!==JSON.stringify(w??null)||JSON.stringify(d)!==JSON.stringify(e[o]??[])||JSON.stringify(f)!==JSON.stringify(N??null),j=()=>!k||window.confirm("لديك تغييرات غير محفوظة. هل تريد تجاهلها والمتابعة؟");b.useEffect(()=>{if(!k)return;const P=M=>{M.preventDefault(),M.returnValue=""};return window.addEventListener("beforeunload",P),()=>{window.removeEventListener("beforeunload",P)}},[k]),b.useEffect(()=>{var P;o&&t.some(M=>M.id===o)||l(((P=t[0])==null?void 0:P.id)??"")},[t,o]),b.useEffect(()=>{c(w?structuredClone(w):null),p(structuredClone(e[o]??[])),m(N?structuredClone(N):null),h(""),g("")},[o,w,N,e]);const F=b.useMemo(()=>[...t].sort((P,M)=>P.order-M.order),[t]),A=n.courses.reduce((P,M)=>P+n.getLessons(M.id).length,0),C=P=>{c(M=>M&&{...M,...P})},L=()=>{if(u){if(!u.title.trim()){h("عنوان الدورة مطلوب.");return}try{Ut.update("academyCourses",u.id,u),h(""),g("تم حفظ بيانات الدورة."),v("success")}catch(P){v("error"),h(P instanceof Error?P.message:"تعذر حفظ الدورة.")}}},O=()=>{if(!j())return;const P=$a("ac"),M={id:P,number:String(t.length+1).padStart(2,"0"),title:"دورة جديدة",description:"",month:1,order:Math.max(0,...t.map(q=>q.order))+1};try{Ut.add("academyCourses",M),l(P),s("courses")}catch{h("تعذر إضافة الدورة.")}},V=()=>{if(w&&window.confirm("حذف الدورة قد يؤثر على روابط الدروس وسجلات التقدم. هل تريد المتابعة؟"))try{Ut.remove("academyCourses",w.id),g("تم حذف الدورة من قائمة الدورات.")}catch{h("تعذر حذف الدورة.")}},I=(P,M)=>{p(q=>q.map((J,ie)=>ie===P?{...J,...M}:J))},H=()=>{o&&p(P=>[...P,{id:$a(`${o}-m`),title:"وحدة جديدة",lessons:[]}])},Q=P=>{window.confirm("هل تريد حذف هذه الوحدة ودروسها؟")&&p(M=>M.filter((q,J)=>J!==P))},W=P=>{p(M=>M.map((q,J)=>{if(J!==P)return q;const ie=Math.max(0,...M.flatMap(Z=>Z.lessons.map(me=>me.order)))+1;return{...q,lessons:[...q.lessons,{id:$a(`${o}-l`),title:"درس جديد",description:"",durationMinutes:15,order:ie,objectives:[]}]}}))},D=(P,M,q)=>{p(J=>J.map((ie,Z)=>Z!==P?ie:{...ie,lessons:ie.lessons.map((me,bt)=>bt===M?{...me,...q}:me)}))},z=(P,M)=>{window.confirm("هل تريد حذف هذا الدرس؟")&&p(q=>q.map((J,ie)=>ie===P?{...J,lessons:J.lessons.filter((Z,me)=>me!==M)}:J))},S=()=>{if(!o)return;const P=d.flatMap(M=>[M.id,...M.lessons.map(q=>q.id)]);if(new Set(P).size!==P.length){h("توجد معرّفات مكررة في المنهج.");return}try{Ut.setAcademyModules(o,d),h(""),g("تم حفظ الوحدات والدروس."),v("success")}catch{v("error"),h("تعذر حفظ المنهج.")}},G=()=>{o&&m({id:$a("quiz"),courseId:o,title:`اختبار ${(w==null?void 0:w.title)??""}`,description:"",questions:[]})},ne=(P,M)=>{m(q=>q&&{...q,questions:q.questions.map((J,ie)=>ie===P?{...J,...M}:J)})},st=()=>{m(P=>{if(!P)return P;const M=$a("q");return{...P,questions:[...P.questions,{id:M,prompt:"سؤال جديد",options:[{id:"a",text:""},{id:"b",text:""},{id:"c",text:""},{id:"d",text:""}],correctOptionId:"a",explanation:""}]}})},fe=P=>{m(M=>M&&{...M,questions:M.questions.filter((q,J)=>J!==P)})},Pe=()=>{if(f){if(!f.title.trim()){h("عنوان الاختبار مطلوب."),v("error");return}if(f.questions.length===0){h("يجب إضافة سؤال واحد على الأقل قبل حفظ الاختبار."),v("error");return}for(const P of f.questions)if(!P.prompt.trim()||P.options.length<2||P.options.some(M=>!M.text.trim())||!P.options.some(M=>M.id===P.correctOptionId)){h("يرجى إكمال الأسئلة والخيارات والإجابات الصحيحة.");return}try{N?Ut.update("academyQuizzes",N.id,f):Ut.add("academyQuizzes",f),h(""),g("تم حفظ الاختبار."),v("success")}catch(P){v("error"),h(P instanceof Error?P.message:"تعذر حفظ الاختبار.")}}},je=()=>{if(window.confirm("سيتم استعادة البيانات الأصلية لهذا القسم. هل تريد المتابعة؟"))try{i==="courses"?Ut.reset("academyCourses"):i==="curriculum"?Ut.reset("academyModules"):Ut.reset("academyQuizzes"),g("تمت استعادة البيانات الأصلية."),h("")}catch{h("تعذرت استعادة البيانات.")}};return a.jsxs("main",{dir:"rtl",className:"min-h-screen bg-[#F3F3F1] px-5 pb-24 pt-32 font-arabic text-[#1D2C4F] sm:px-8",children:[a.jsxs("div",{className:"mx-auto max-w-[1250px]",children:[a.jsxs("div",{className:"mb-10 flex flex-wrap items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("p",{className:"mb-3 text-[11px] tracking-widest text-[#54707D]",children:"FNAR / ACADEMY CMS"}),a.jsx("h1",{className:"text-[clamp(2rem,4vw,3.3rem)] font-bold",children:"إدارة الأكاديمية"}),a.jsx("p",{className:"mt-3 text-[13px] text-[#1D2C4F]/55",children:"إدارة الدورات والوحدات والدروس والاختبارات."})]}),a.jsxs(Ji,{to:"/admin",onClick:P=>{j()||P.preventDefault()},className:"flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-5 py-3 text-[12px]",children:[a.jsx(zv,{size:16}),"العودة للوحة الإدارة"]})]}),a.jsx("div",{className:"mb-8 grid gap-4 sm:grid-cols-3",children:[{label:"الدورات",count:t.length,icon:Bv},{label:"الدروس",count:A,icon:L3},{label:"الاختبارات",count:r.length,icon:R3}].map(P=>a.jsxs("div",{className:"rounded-[18px] border border-[#1D2C4F]/10 bg-white p-6",children:[a.jsx(P.icon,{size:19,className:"mb-4 text-[#84A4B1]"}),a.jsx("div",{className:"font-sans text-[30px] font-bold",children:P.count}),a.jsx("p",{className:"mt-1 text-[12px] text-[#1D2C4F]/50",children:P.label})]},P.label))}),a.jsx("div",{className:"mb-6 flex flex-wrap gap-2",children:[["courses","الدورات"],["curriculum","الوحدات والدروس"],["quizzes","الاختبارات"]].map(([P,M])=>a.jsx("button",{type:"button",onClick:()=>{P!==i&&j()&&(s(P),g(""),h(""))},className:`rounded-full px-6 py-3 text-[12px] font-semibold ${i===P?"bg-[#152742] text-white":"border border-[#1D2C4F]/10 bg-white"}`,children:M},P))}),a.jsxs("div",{className:"mb-7 flex flex-wrap items-end justify-between gap-4",children:[a.jsxs("div",{className:"w-full max-w-[430px]",children:[a.jsx("label",{className:pu,children:"اختر الدورة"}),a.jsx("select",{value:o,onChange:P=>{const M=P.target.value;M!==o&&j()&&l(M)},className:jo,children:F.map(P=>a.jsxs("option",{value:P.id,children:[P.number," — ",P.title]},P.id))})]}),a.jsxs("div",{className:"flex flex-wrap gap-2",children:[i==="courses"&&a.jsxs("button",{type:"button",onClick:O,className:"flex items-center gap-2 rounded-full bg-[#152742] px-5 py-3 text-[12px] text-white",children:[a.jsx(Za,{size:16}),"إضافة دورة"]}),a.jsxs("button",{type:"button",onClick:je,className:"flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-5 py-3 text-[12px]",children:[a.jsx(Uv,{size:15}),"استعادة الأصل"]})]})]}),y&&a.jsx("p",{role:"status",className:"mb-5 rounded-xl bg-[#84A4B1]/15 p-4 text-[12px]",children:y}),_&&a.jsx("p",{role:"alert",className:"mb-5 rounded-xl bg-red-50 p-4 text-[12px] text-red-700",children:_}),i==="courses"&&u&&a.jsxs("section",{className:"rounded-[22px] border border-[#1D2C4F]/10 bg-white p-6 sm:p-9",children:[a.jsx("h2",{className:"mb-7 text-[22px] font-bold",children:"بيانات الدورة"}),a.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[a.jsx(xt,{label:"معرّف الدورة — ثابت",value:u.id,onChange:()=>{},disabled:!0}),a.jsx(xt,{label:"رقم الدورة",value:u.number,onChange:P=>C({number:P})}),a.jsx("div",{className:"sm:col-span-2",children:a.jsx(xt,{label:"عنوان الدورة",value:u.title,onChange:P=>C({title:P})})}),a.jsx("div",{className:"sm:col-span-2",children:a.jsx(xt,{label:"وصف الدورة",value:u.description,onChange:P=>C({description:P}),multiline:!0})}),a.jsx(xt,{label:"الشهر",type:"number",value:u.month,onChange:P=>C({month:Number(P)})}),a.jsx(xt,{label:"ترتيب العرض",type:"number",value:u.order,onChange:P=>C({order:Number(P)})})]}),a.jsxs("div",{className:"mt-8 flex flex-wrap justify-between gap-3",children:[a.jsxs("button",{type:"button",onClick:V,className:"flex items-center gap-2 rounded-full border border-red-200 px-5 py-3 text-[12px] text-red-600",children:[a.jsx(eo,{size:15}),"حذف الدورة"]}),a.jsxs("button",{type:"button",onClick:L,className:"flex items-center gap-2 rounded-full bg-[#152742] px-7 py-3 text-[12px] text-white",children:[a.jsx(du,{size:16}),"حفظ الدورة"]})]})]}),i==="curriculum"&&w&&a.jsxs("section",{className:"space-y-5",children:[d.map((P,M)=>a.jsxs("div",{className:"rounded-[22px] border border-[#1D2C4F]/10 bg-white p-6 sm:p-8",children:[a.jsxs("div",{className:"mb-6 flex items-center justify-between gap-4",children:[a.jsxs("h2",{className:"text-[19px] font-bold",children:["الوحدة ",M+1]}),a.jsx("button",{type:"button",onClick:()=>Q(M),className:"text-red-600","aria-label":"حذف الوحدة",children:a.jsx(eo,{size:18})})]}),a.jsx(xt,{label:"عنوان الوحدة",value:P.title,onChange:q=>I(M,{title:q})}),a.jsx("div",{className:"mt-6 space-y-4",children:P.lessons.map((q,J)=>a.jsxs("div",{className:"rounded-[16px] border border-[#1D2C4F]/10 bg-[#F3F3F1] p-5",children:[a.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[a.jsxs("h3",{className:"text-[15px] font-bold",children:["الدرس ",J+1]}),a.jsx("button",{type:"button",onClick:()=>z(M,J),className:"text-red-600","aria-label":"حذف الدرس",children:a.jsx(eo,{size:16})})]}),a.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[a.jsx("div",{className:"sm:col-span-2",children:a.jsx(xt,{label:"عنوان الدرس",value:q.title,onChange:ie=>D(M,J,{title:ie})})}),a.jsx(xt,{label:"المدة بالدقائق",type:"number",value:q.durationMinutes,onChange:ie=>D(M,J,{durationMinutes:Number(ie)})}),a.jsx(xt,{label:"ترتيب الدرس",type:"number",value:q.order,onChange:ie=>D(M,J,{order:Number(ie)})}),a.jsx("div",{className:"sm:col-span-2",children:a.jsx(xt,{label:"وصف الدرس",value:q.description,onChange:ie=>D(M,J,{description:ie}),multiline:!0})}),a.jsx("div",{className:"sm:col-span-2",children:a.jsx(xt,{label:"الأهداف التعليمية — هدف في كل سطر",value:q.objectives.join(`
`),onChange:ie=>D(M,J,{objectives:ie.split(`
`).map(Z=>Z.trim()).filter(Boolean)}),multiline:!0})})]})]},q.id))}),a.jsxs("button",{type:"button",onClick:()=>W(M),className:"mt-5 flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-5 py-3 text-[12px]",children:[a.jsx(Za,{size:15}),"إضافة درس"]})]},P.id)),a.jsxs("div",{className:"flex flex-wrap justify-between gap-3",children:[a.jsxs("button",{type:"button",onClick:H,className:"flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-6 py-3 text-[12px]",children:[a.jsx(Za,{size:16}),"إضافة وحدة"]}),a.jsxs("button",{type:"button",onClick:S,className:"flex items-center gap-2 rounded-full bg-[#152742] px-7 py-3 text-[12px] text-white",children:[a.jsx(du,{size:16}),"حفظ المنهج"]})]})]}),i==="quizzes"&&w&&a.jsx("section",{className:"rounded-[22px] border border-[#1D2C4F]/10 bg-white p-6 sm:p-9",children:f?a.jsxs(a.Fragment,{children:[a.jsx("h2",{className:"mb-7 text-[22px] font-bold",children:"إدارة الاختبار"}),a.jsxs("div",{className:"space-y-5",children:[a.jsx(xt,{label:"عنوان الاختبار",value:f.title,onChange:P=>m(M=>M&&{...M,title:P})}),a.jsx(xt,{label:"وصف الاختبار",value:f.description,onChange:P=>m(M=>M&&{...M,description:P}),multiline:!0})]}),a.jsx("div",{className:"mt-8 space-y-5",children:f.questions.map((P,M)=>a.jsxs("div",{className:"rounded-[16px] border border-[#1D2C4F]/10 bg-[#F3F3F1] p-5",children:[a.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[a.jsxs("h3",{className:"text-[15px] font-bold",children:["السؤال ",M+1]}),a.jsx("button",{type:"button",onClick:()=>fe(M),className:"text-red-600","aria-label":"حذف السؤال",children:a.jsx(eo,{size:16})})]}),a.jsx(xt,{label:"نص السؤال",value:P.prompt,onChange:q=>ne(M,{prompt:q}),multiline:!0}),a.jsx("div",{className:"mt-5 grid gap-4 sm:grid-cols-2",children:P.options.map((q,J)=>a.jsx(xt,{label:`الخيار ${q.id}`,value:q.text,onChange:ie=>ne(M,{options:P.options.map((Z,me)=>me===J?{...Z,text:ie}:Z)})},q.id))}),a.jsxs("div",{className:"mt-5",children:[a.jsx("label",{className:pu,children:"الإجابة الصحيحة"}),a.jsx("select",{className:jo,value:P.correctOptionId,onChange:q=>ne(M,{correctOptionId:q.target.value}),children:P.options.map(q=>a.jsxs("option",{value:q.id,children:[q.id," — ",q.text]},q.id))})]}),a.jsx("div",{className:"mt-5",children:a.jsx(xt,{label:"شرح الإجابة",value:P.explanation,onChange:q=>ne(M,{explanation:q}),multiline:!0})}),a.jsxs("div",{className:"mt-5",children:[a.jsx("label",{className:pu,children:"الدرس المرتبط بالسؤال"}),a.jsxs("select",{className:jo,value:P.lessonId??"",onChange:q=>ne(M,{lessonId:q.target.value||void 0}),children:[a.jsx("option",{value:"",children:"بدون درس محدد"}),d.flatMap(q=>q.lessons.map(J=>a.jsx("option",{value:J.id,children:J.title},J.id)))]})]})]},P.id))}),a.jsxs("div",{className:"mt-7 flex flex-wrap justify-between gap-3",children:[a.jsxs("button",{type:"button",onClick:st,className:"flex items-center gap-2 rounded-full border border-[#1D2C4F]/15 px-6 py-3 text-[12px]",children:[a.jsx(Za,{size:16}),"إضافة سؤال"]}),a.jsxs("button",{type:"button",onClick:Pe,className:"flex items-center gap-2 rounded-full bg-[#152742] px-7 py-3 text-[12px] text-white",children:[a.jsx(du,{size:16}),"حفظ الاختبار"]})]})]}):a.jsxs("div",{className:"py-12 text-center",children:[a.jsx("p",{className:"mb-5 text-[14px]",children:"لا يوجد اختبار لهذه الدورة."}),a.jsx("button",{type:"button",onClick:G,className:"rounded-full bg-[#152742] px-6 py-3 text-[12px] text-white",children:"إنشاء اختبار"})]})})]}),x!=="idle"&&a.jsx("div",{role:x==="error"?"alert":"status","aria-live":"polite",className:"fixed bottom-6 left-1/2 z-[300] w-[calc(100%-2rem)] max-w-[420px] -translate-x-1/2 rounded-[18px] border border-[#84A4B1]/30 bg-[#152742] p-5 text-white shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300",children:a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${x==="success"?"bg-[#84A4B1]/20 text-[#84A4B1]":"bg-red-500/20 text-red-300"}`,children:x==="success"?a.jsx("span",{className:"text-[22px]",children:"✓"}):a.jsx("span",{className:"text-[22px]",children:"!"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("p",{className:"text-[14px] font-bold",children:x==="success"?"تم حفظ التغييرات بنجاح":"لم يتم حفظ التغييرات"}),a.jsx("p",{className:"mt-1 text-[11px] text-white/60",children:x==="success"?"تم حفظ البيانات في المتصفح.":_||"يرجى مراجعة البيانات والمحاولة مجدداً."})]}),a.jsx("button",{type:"button",onClick:()=>v("idle"),"aria-label":"إغلاق الإشعار",className:"rounded-full border border-white/15 px-3 py-2 text-[12px] text-white/70 hover:text-white",children:"✕"})]})})]})}const dj=b.lazy(()=>ft(()=>import("./ProgramPage-Bxi7GhbR.js"),__vite__mapDeps([0,1]),import.meta.url)),pj=b.lazy(()=>ft(()=>import("./ConsultationsPage-DNxe9Hwj.js"),__vite__mapDeps([2,1]),import.meta.url)),fj=b.lazy(()=>ft(()=>import("./PartnershipsPage-a1Mkqr_F.js"),__vite__mapDeps([3,1]),import.meta.url)),hj=b.lazy(()=>ft(()=>import("./InvoicesPage-B1VErWXD.js"),__vite__mapDeps([4,5,6,7]),import.meta.url)),mj=b.lazy(()=>ft(()=>import("./LoginPage-Br8FqpH4.js"),[],import.meta.url)),xj=b.lazy(()=>ft(()=>import("./SignupPage-DP9wDo5U.js"),[],import.meta.url)),gj=b.lazy(()=>ft(()=>import("./ForgotPasswordPage-Do8u1mfF.js"),[],import.meta.url)),vj=b.lazy(()=>ft(()=>import("./AcademyDashboard-OlgAXZ5A.js"),__vite__mapDeps([8,9,10,11]),import.meta.url)),yj=b.lazy(()=>ft(()=>import("./AcademyCourses-sAvpvKEj.js"),__vite__mapDeps([12,9,10]),import.meta.url)),wj=b.lazy(()=>ft(()=>import("./AcademyCourseDetail-Dki81Cmc.js"),__vite__mapDeps([13,9,10]),import.meta.url)),_j=b.lazy(()=>ft(()=>import("./AcademyLessonPage-rwE0xddY.js"),__vite__mapDeps([14,9]),import.meta.url)),bj=b.lazy(()=>ft(()=>import("./AcademyQuizPage-MSqJAquB.js"),__vite__mapDeps([15,10]),import.meta.url)),jj=b.lazy(()=>ft(()=>import("./AcademyQuizResultsPage-BTXVDr7e.js"),__vite__mapDeps([16,10]),import.meta.url)),Nj=b.lazy(()=>ft(()=>import("./AcademyProfilePage-BEudcc0Y.js"),__vite__mapDeps([17,11]),import.meta.url)),kj=b.lazy(()=>ft(()=>import("./AcademyProgressPage-Ben7AIfc.js"),__vite__mapDeps([18,9,10]),import.meta.url)),Sj=b.lazy(()=>ft(()=>import("./ResearchPathPage-BygUCm7S.js"),__vite__mapDeps([19,20,7]),import.meta.url)),Cj=b.lazy(()=>ft(()=>import("./InvoiceDocumentPage-BEtoVva4.js"),__vite__mapDeps([21,5,22,6]),import.meta.url)),Fj=b.lazy(()=>ft(()=>import("./AdminInvoicesPage-B9aKDd4Z.js"),__vite__mapDeps([23,22,6,20]),import.meta.url));function Ej(){return a.jsxs("main",{children:[a.jsx(p3,{}),a.jsx(h3,{}),a.jsx(y3,{}),a.jsx(w3,{}),a.jsx(b3,{}),a.jsx(j3,{}),a.jsx(k3,{}),a.jsx(C3,{}),a.jsx(F3,{}),a.jsx(E3,{}),a.jsx(q3,{})]})}function Aj(){return a.jsx(Y_,{children:a.jsx(l4,{children:a.jsxs(Kb,{children:[a.jsx(Zb,{}),a.jsx(Jb,{}),a.jsx(o3,{}),a.jsxs(j_,{children:[a.jsx(Ne,{path:"/",element:a.jsx(Ej,{})}),a.jsx(Ne,{path:"/program",element:a.jsx(b.Suspense,{fallback:null,children:a.jsx(dj,{})})}),a.jsx(Ne,{path:"/consultations",element:a.jsx(b.Suspense,{fallback:null,children:a.jsx(pj,{})})}),a.jsx(Ne,{path:"/partnerships",element:a.jsx(b.Suspense,{fallback:null,children:a.jsx(fj,{})})}),a.jsx(Ne,{path:"/invoices",element:a.jsx(b.Suspense,{fallback:null,children:a.jsx(hj,{})})}),a.jsx(Ne,{path:"/invoices/:documentId",element:a.jsx(b.Suspense,{fallback:null,children:a.jsx(Cj,{})})}),a.jsx(Ne,{path:"/about",element:a.jsx(b.Suspense,{fallback:null,children:a.jsx(A3,{})})}),a.jsx(Ne,{path:"/login",element:a.jsx(b.Suspense,{fallback:null,children:a.jsx(mj,{})})}),a.jsx(Ne,{path:"/signup",element:a.jsx(b.Suspense,{fallback:null,children:a.jsx(xj,{})})}),a.jsx(Ne,{path:"/forgot-password",element:a.jsx(b.Suspense,{fallback:null,children:a.jsx(gj,{})})}),a.jsx(Ne,{path:"/academy",element:a.jsx(Kn,{children:a.jsx(b.Suspense,{fallback:null,children:a.jsx(vj,{})})})}),a.jsx(Ne,{path:"/academy/courses",element:a.jsx(Kn,{children:a.jsx(b.Suspense,{fallback:null,children:a.jsx(yj,{})})})}),a.jsx(Ne,{path:"/academy/courses/:courseId",element:a.jsx(Kn,{children:a.jsx(b.Suspense,{fallback:null,children:a.jsx(wj,{})})})}),a.jsx(Ne,{path:"/academy/learn/:courseId/:lessonId",element:a.jsx(Kn,{children:a.jsx(b.Suspense,{fallback:null,children:a.jsx(_j,{})})})}),a.jsx(Ne,{path:"/academy/courses/:courseId/quiz",element:a.jsx(Kn,{children:a.jsx(b.Suspense,{fallback:null,children:a.jsx(bj,{})})})}),a.jsx(Ne,{path:"/academy/courses/:courseId/quiz/results",element:a.jsx(Kn,{children:a.jsx(b.Suspense,{fallback:null,children:a.jsx(jj,{})})})}),a.jsx(Ne,{path:"/academy/profile",element:a.jsx(Kn,{children:a.jsx(b.Suspense,{fallback:null,children:a.jsx(Nj,{})})})}),a.jsx(Ne,{path:"/academy/progress",element:a.jsx(Kn,{children:a.jsx(b.Suspense,{fallback:null,children:a.jsx(kj,{})})})}),a.jsx(Ne,{path:"/contact",element:a.jsx(b.Suspense,{fallback:null,children:a.jsx(H3,{})})}),a.jsx(Ne,{path:"/research-path",element:a.jsx(b.Suspense,{fallback:null,children:a.jsx(Sj,{})})}),a.jsx(Ne,{path:"/admin",element:a.jsx(md,{})}),a.jsx(Ne,{path:"/admin/consultations",element:a.jsx(md,{})}),a.jsx(Ne,{path:"/admin/partnerships",element:a.jsx(md,{})}),a.jsx(Ne,{path:"/admin/academy",element:a.jsx(cj,{})}),a.jsx(Ne,{path:"/admin/invoices",element:a.jsx(b.Suspense,{fallback:null,children:a.jsx(Fj,{})})})]}),a.jsx(Q3,{})]})})})}$1(document.getElementById("root")).render(a.jsx(b.StrictMode,{children:a.jsx(Aj,{})}));export{Lj as A,Bv as B,M3 as D,Ji as L,Rj as P,zj as Q,I3 as R,Y as S,U3 as U,W3 as X,ft as _,Ti as a,i3 as b,Dj as c,Yt as d,cg as e,mh as f,E as g,Mj as h,Oj as i,a as j,e3 as k,uj as l,Pj as m,Ze as n,S0 as o,zv as p,Uv as q,b as r,$3 as s,B3 as t,$r as u};
