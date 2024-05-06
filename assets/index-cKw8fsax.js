function mT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n_={exports:{}},Gl={},r_={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),yT=Symbol.for("react.portal"),_T=Symbol.for("react.fragment"),vT=Symbol.for("react.strict_mode"),wT=Symbol.for("react.profiler"),ET=Symbol.for("react.provider"),IT=Symbol.for("react.context"),TT=Symbol.for("react.forward_ref"),ST=Symbol.for("react.suspense"),AT=Symbol.for("react.memo"),RT=Symbol.for("react.lazy"),em=Symbol.iterator;function PT(t){return t===null||typeof t!="object"?null:(t=em&&t[em]||t["@@iterator"],typeof t=="function"?t:null)}var i_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s_=Object.assign,o_={};function Hi(t,e,n){this.props=t,this.context=e,this.refs=o_,this.updater=n||i_}Hi.prototype.isReactComponent={};Hi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a_(){}a_.prototype=Hi.prototype;function Ud(t,e,n){this.props=t,this.context=e,this.refs=o_,this.updater=n||i_}var $d=Ud.prototype=new a_;$d.constructor=Ud;s_($d,Hi.prototype);$d.isPureReactComponent=!0;var tm=Array.isArray,l_=Object.prototype.hasOwnProperty,jd={current:null},u_={key:!0,ref:!0,__self:!0,__source:!0};function c_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)l_.call(e,r)&&!u_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:No,type:t,key:s,ref:o,props:i,_owner:jd.current}}function CT(t,e){return{$$typeof:No,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===No}function kT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nm=/\/+/g;function oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kT(""+t.key):e.toString(36)}function xa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case No:case yT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+oc(o,0):r,tm(i)?(n="",t!=null&&(n=t.replace(nm,"$&/")+"/"),xa(i,e,n,"",function(u){return u})):i!=null&&(Bd(i)&&(i=CT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(nm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+oc(s,a);o+=xa(s,e,n,l,i)}else if(l=PT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+oc(s,a++),o+=xa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ia(t,e,n){if(t==null)return t;var r=[],i=0;return xa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function NT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Je={current:null},Da={transition:null},xT={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Da,ReactCurrentOwner:jd};function h_(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:ia,forEach:function(t,e,n){ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ia(t,function(){e++}),e},toArray:function(t){return ia(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Hi;q.Fragment=_T;q.Profiler=wT;q.PureComponent=Ud;q.StrictMode=vT;q.Suspense=ST;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xT;q.act=h_;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=s_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)l_.call(e,l)&&!u_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:No,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:IT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ET,_context:t},t.Consumer=t};q.createElement=c_;q.createFactory=function(t){var e=c_.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:TT,render:t}};q.isValidElement=Bd;q.lazy=function(t){return{$$typeof:RT,_payload:{_status:-1,_result:t},_init:NT}};q.memo=function(t,e){return{$$typeof:AT,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Da.transition;Da.transition={};try{t()}finally{Da.transition=e}};q.unstable_act=h_;q.useCallback=function(t,e){return Je.current.useCallback(t,e)};q.useContext=function(t){return Je.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Je.current.useDeferredValue(t)};q.useEffect=function(t,e){return Je.current.useEffect(t,e)};q.useId=function(){return Je.current.useId()};q.useImperativeHandle=function(t,e,n){return Je.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return Je.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Je.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Je.current.useMemo(t,e)};q.useReducer=function(t,e,n){return Je.current.useReducer(t,e,n)};q.useRef=function(t){return Je.current.useRef(t)};q.useState=function(t){return Je.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return Je.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return Je.current.useTransition()};q.version="18.3.1";r_.exports=q;var I=r_.exports;const hn=gT(I),DT=mT({__proto__:null,default:hn},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OT=I,VT=Symbol.for("react.element"),LT=Symbol.for("react.fragment"),MT=Object.prototype.hasOwnProperty,bT=OT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FT={key:!0,ref:!0,__self:!0,__source:!0};function d_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)MT.call(e,r)&&!FT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VT,type:t,key:s,ref:o,props:i,_owner:bT.current}}Gl.Fragment=LT;Gl.jsx=d_;Gl.jsxs=d_;n_.exports=Gl;var y=n_.exports,sh={},f_={exports:{}},mt={},p_={exports:{}},m_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,B){var z=D.length;D.push(B);e:for(;0<z;){var pe=z-1>>>1,Te=D[pe];if(0<i(Te,B))D[pe]=B,D[z]=Te,z=pe;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var B=D[0],z=D.pop();if(z!==B){D[0]=z;e:for(var pe=0,Te=D.length,na=Te>>>1;pe<na;){var dr=2*(pe+1)-1,sc=D[dr],fr=dr+1,ra=D[fr];if(0>i(sc,z))fr<Te&&0>i(ra,sc)?(D[pe]=ra,D[fr]=z,pe=fr):(D[pe]=sc,D[dr]=z,pe=dr);else if(fr<Te&&0>i(ra,z))D[pe]=ra,D[fr]=z,pe=fr;else break e}}return B}function i(D,B){var z=D.sortIndex-B.sortIndex;return z!==0?z:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=D)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function E(D){if(_=!1,g(D),!v)if(n(l)!==null)v=!0,rc(R);else{var B=n(u);B!==null&&ic(E,B.startTime-D)}}function R(D,B){v=!1,_&&(_=!1,p(V),V=-1),m=!0;var z=d;try{for(g(B),h=n(l);h!==null&&(!(h.expirationTime>B)||D&&!at());){var pe=h.callback;if(typeof pe=="function"){h.callback=null,d=h.priorityLevel;var Te=pe(h.expirationTime<=B);B=t.unstable_now(),typeof Te=="function"?h.callback=Te:h===n(l)&&r(l),g(B)}else r(l);h=n(l)}if(h!==null)var na=!0;else{var dr=n(u);dr!==null&&ic(E,dr.startTime-B),na=!1}return na}finally{h=null,d=z,m=!1}}var C=!1,k=null,V=-1,Y=5,U=-1;function at(){return!(t.unstable_now()-U<Y)}function ss(){if(k!==null){var D=t.unstable_now();U=D;var B=!0;try{B=k(!0,D)}finally{B?os():(C=!1,k=null)}}else C=!1}var os;if(typeof f=="function")os=function(){f(ss)};else if(typeof MessageChannel<"u"){var Zp=new MessageChannel,pT=Zp.port2;Zp.port1.onmessage=ss,os=function(){pT.postMessage(null)}}else os=function(){w(ss,0)};function rc(D){k=D,C||(C=!0,os())}function ic(D,B){V=w(function(){D(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,rc(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var z=d;d=B;try{return D()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=d;d=D;try{return B()}finally{d=z}},t.unstable_scheduleCallback=function(D,B,z){var pe=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?pe+z:pe):z=pe,D){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=z+Te,D={id:c++,callback:B,priorityLevel:D,startTime:z,expirationTime:Te,sortIndex:-1},z>pe?(D.sortIndex=z,e(u,D),n(l)===null&&D===n(u)&&(_?(p(V),V=-1):_=!0,ic(E,z-pe))):(D.sortIndex=Te,e(l,D),v||m||(v=!0,rc(R))),D},t.unstable_shouldYield=at,t.unstable_wrapCallback=function(D){var B=d;return function(){var z=d;d=B;try{return D.apply(this,arguments)}finally{d=z}}}})(m_);p_.exports=m_;var UT=p_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $T=I,ft=UT;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g_=new Set,Hs={};function Br(t,e){ki(t,e),ki(t+"Capture",e)}function ki(t,e){for(Hs[t]=e,t=0;t<e.length;t++)g_.add(e[t])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oh=Object.prototype.hasOwnProperty,jT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rm={},im={};function BT(t){return oh.call(im,t)?!0:oh.call(rm,t)?!1:jT.test(t)?im[t]=!0:(rm[t]=!0,!1)}function zT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qT(t,e,n,r){if(e===null||typeof e>"u"||zT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ze(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Me[t]=new Ze(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Me[e]=new Ze(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Me[t]=new Ze(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Me[t]=new Ze(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Me[t]=new Ze(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Me[t]=new Ze(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Me[t]=new Ze(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Me[t]=new Ze(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Me[t]=new Ze(t,5,!1,t.toLowerCase(),null,!1,!1)});var zd=/[\-:]([a-z])/g;function qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zd,qd);Me[e]=new Ze(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zd,qd);Me[e]=new Ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zd,qd);Me[e]=new Ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Me[t]=new Ze(t,1,!1,t.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Me[t]=new Ze(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,n,r){var i=Me.hasOwnProperty(e)?Me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qT(e,n,i,r)&&(n=null),r||i===null?BT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tn=$T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=Symbol.for("react.element"),ri=Symbol.for("react.portal"),ii=Symbol.for("react.fragment"),Hd=Symbol.for("react.strict_mode"),ah=Symbol.for("react.profiler"),y_=Symbol.for("react.provider"),__=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),lh=Symbol.for("react.suspense"),uh=Symbol.for("react.suspense_list"),Gd=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),v_=Symbol.for("react.offscreen"),sm=Symbol.iterator;function as(t){return t===null||typeof t!="object"?null:(t=sm&&t[sm]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,ac;function vs(t){if(ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ac=e&&e[1]||""}return`
`+ac+t}var lc=!1;function uc(t,e){if(!t||lc)return"";lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vs(t):""}function WT(t){switch(t.tag){case 5:return vs(t.type);case 16:return vs("Lazy");case 13:return vs("Suspense");case 19:return vs("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function ch(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ii:return"Fragment";case ri:return"Portal";case ah:return"Profiler";case Hd:return"StrictMode";case lh:return"Suspense";case uh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case __:return(t.displayName||"Context")+".Consumer";case y_:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gd:return e=t.displayName||null,e!==null?e:ch(t.type)||"Memo";case kn:e=t._payload,t=t._init;try{return ch(t(e))}catch{}}return null}function HT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ch(e);case 8:return e===Hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function w_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KT(t){var e=w_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oa(t){t._valueTracker||(t._valueTracker=KT(t))}function E_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=w_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hh(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function om(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function I_(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function dh(t,e){I_(t,e);var n=er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fh(t,e.type,n):e.hasOwnProperty("defaultValue")&&fh(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function am(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fh(t,e,n){(e!=="number"||Xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ws=Array.isArray;function yi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ph(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(ws(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function T_(t,e){var n=er(e.value),r=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var aa,A_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(aa=aa||document.createElement("div"),aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GT=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(t){GT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ns[e]=Ns[t]})});function R_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ns.hasOwnProperty(t)&&Ns[t]?(""+e).trim():e+"px"}function P_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=R_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var QT=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gh(t,e){if(e){if(QT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function yh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _h=null;function Qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vh=null,_i=null,vi=null;function cm(t){if(t=Oo(t)){if(typeof vh!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Zl(e),vh(t.stateNode,t.type,e))}}function C_(t){_i?vi?vi.push(t):vi=[t]:_i=t}function k_(){if(_i){var t=_i,e=vi;if(vi=_i=null,cm(t),e)for(t=0;t<e.length;t++)cm(e[t])}}function N_(t,e){return t(e)}function x_(){}var cc=!1;function D_(t,e,n){if(cc)return t(e,n);cc=!0;try{return N_(t,e,n)}finally{cc=!1,(_i!==null||vi!==null)&&(x_(),k_())}}function Gs(t,e){var n=t.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var wh=!1;if(mn)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){wh=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{wh=!1}function YT(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var xs=!1,Ja=null,Za=!1,Eh=null,XT={onError:function(t){xs=!0,Ja=t}};function JT(t,e,n,r,i,s,o,a,l){xs=!1,Ja=null,YT.apply(XT,arguments)}function ZT(t,e,n,r,i,s,o,a,l){if(JT.apply(this,arguments),xs){if(xs){var u=Ja;xs=!1,Ja=null}else throw Error(A(198));Za||(Za=!0,Eh=u)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function O_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hm(t){if(zr(t)!==t)throw Error(A(188))}function e1(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hm(i),t;if(s===r)return hm(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function V_(t){return t=e1(t),t!==null?L_(t):null}function L_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L_(t);if(e!==null)return e;t=t.sibling}return null}var M_=ft.unstable_scheduleCallback,dm=ft.unstable_cancelCallback,t1=ft.unstable_shouldYield,n1=ft.unstable_requestPaint,me=ft.unstable_now,r1=ft.unstable_getCurrentPriorityLevel,Yd=ft.unstable_ImmediatePriority,b_=ft.unstable_UserBlockingPriority,el=ft.unstable_NormalPriority,i1=ft.unstable_LowPriority,F_=ft.unstable_IdlePriority,Ql=null,Kt=null;function s1(t){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:l1,o1=Math.log,a1=Math.LN2;function l1(t){return t>>>=0,t===0?32:31-(o1(t)/a1|0)|0}var la=64,ua=4194304;function Es(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Es(a):(s&=o,s!==0&&(r=Es(s)))}else o=n&~i,o!==0?r=Es(o):s!==0&&(r=Es(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nt(e),i=1<<n,r|=t[n],e&=~i;return r}function u1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=u1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function U_(){var t=la;return la<<=1,!(la&4194240)&&(la=64),t}function hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nt(e),t[e]=n}function h1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var X=0;function $_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var j_,Jd,B_,z_,q_,Th=!1,ca=[],jn=null,Bn=null,zn=null,Qs=new Map,Ys=new Map,xn=[],d1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fm(t,e){switch(t){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(e.pointerId)}}function us(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Oo(e),e!==null&&Jd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function f1(t,e,n,r,i){switch(e){case"focusin":return jn=us(jn,t,e,n,r,i),!0;case"dragenter":return Bn=us(Bn,t,e,n,r,i),!0;case"mouseover":return zn=us(zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qs.set(s,us(Qs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ys.set(s,us(Ys.get(s)||null,t,e,n,r,i)),!0}return!1}function W_(t){var e=_r(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=O_(n),e!==null){t.blockedOn=e,q_(t.priority,function(){B_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_h=r,n.target.dispatchEvent(r),_h=null}else return e=Oo(n),e!==null&&Jd(e),t.blockedOn=n,!1;e.shift()}return!0}function pm(t,e,n){Oa(t)&&n.delete(e)}function p1(){Th=!1,jn!==null&&Oa(jn)&&(jn=null),Bn!==null&&Oa(Bn)&&(Bn=null),zn!==null&&Oa(zn)&&(zn=null),Qs.forEach(pm),Ys.forEach(pm)}function cs(t,e){t.blockedOn===e&&(t.blockedOn=null,Th||(Th=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,p1)))}function Xs(t){function e(i){return cs(i,t)}if(0<ca.length){cs(ca[0],t);for(var n=1;n<ca.length;n++){var r=ca[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jn!==null&&cs(jn,t),Bn!==null&&cs(Bn,t),zn!==null&&cs(zn,t),Qs.forEach(e),Ys.forEach(e),n=0;n<xn.length;n++)r=xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xn.length&&(n=xn[0],n.blockedOn===null);)W_(n),n.blockedOn===null&&xn.shift()}var wi=Tn.ReactCurrentBatchConfig,nl=!0;function m1(t,e,n,r){var i=X,s=wi.transition;wi.transition=null;try{X=1,Zd(t,e,n,r)}finally{X=i,wi.transition=s}}function g1(t,e,n,r){var i=X,s=wi.transition;wi.transition=null;try{X=4,Zd(t,e,n,r)}finally{X=i,wi.transition=s}}function Zd(t,e,n,r){if(nl){var i=Sh(t,e,n,r);if(i===null)Ec(t,e,r,rl,n),fm(t,r);else if(f1(i,t,e,n,r))r.stopPropagation();else if(fm(t,r),e&4&&-1<d1.indexOf(t)){for(;i!==null;){var s=Oo(i);if(s!==null&&j_(s),s=Sh(t,e,n,r),s===null&&Ec(t,e,r,rl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ec(t,e,r,null,n)}}var rl=null;function Sh(t,e,n,r){if(rl=null,t=Qd(r),t=_r(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=O_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rl=t,null}function H_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r1()){case Yd:return 1;case b_:return 4;case el:case i1:return 16;case F_:return 536870912;default:return 16}default:return 16}}var bn=null,ef=null,Va=null;function K_(){if(Va)return Va;var t,e=ef,n=e.length,r,i="value"in bn?bn.value:bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Va=i.slice(t,1<r?1-r:void 0)}function La(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ha(){return!0}function mm(){return!1}function gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ha:mm,this.isPropagationStopped=mm,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),e}var Ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=gt(Ki),Do=ue({},Ki,{view:0,detail:0}),y1=gt(Do),dc,fc,hs,Yl=ue({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hs&&(hs&&t.type==="mousemove"?(dc=t.screenX-hs.screenX,fc=t.screenY-hs.screenY):fc=dc=0,hs=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:fc}}),gm=gt(Yl),_1=ue({},Yl,{dataTransfer:0}),v1=gt(_1),w1=ue({},Do,{relatedTarget:0}),pc=gt(w1),E1=ue({},Ki,{animationName:0,elapsedTime:0,pseudoElement:0}),I1=gt(E1),T1=ue({},Ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),S1=gt(T1),A1=ue({},Ki,{data:0}),ym=gt(A1),R1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=C1[t])?!!e[t]:!1}function nf(){return k1}var N1=ue({},Do,{key:function(t){if(t.key){var e=R1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=La(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?P1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?La(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?La(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),x1=gt(N1),D1=ue({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_m=gt(D1),O1=ue({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),V1=gt(O1),L1=ue({},Ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),M1=gt(L1),b1=ue({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),F1=gt(b1),U1=[9,13,27,32],rf=mn&&"CompositionEvent"in window,Ds=null;mn&&"documentMode"in document&&(Ds=document.documentMode);var $1=mn&&"TextEvent"in window&&!Ds,G_=mn&&(!rf||Ds&&8<Ds&&11>=Ds),vm=" ",wm=!1;function Q_(t,e){switch(t){case"keyup":return U1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var si=!1;function j1(t,e){switch(t){case"compositionend":return Y_(e);case"keypress":return e.which!==32?null:(wm=!0,vm);case"textInput":return t=e.data,t===vm&&wm?null:t;default:return null}}function B1(t,e){if(si)return t==="compositionend"||!rf&&Q_(t,e)?(t=K_(),Va=ef=bn=null,si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G_&&e.locale!=="ko"?null:e.data;default:return null}}var z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!z1[t.type]:e==="textarea"}function X_(t,e,n,r){C_(r),e=il(e,"onChange"),0<e.length&&(n=new tf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Os=null,Js=null;function q1(t){lv(t,0)}function Xl(t){var e=li(t);if(E_(e))return t}function W1(t,e){if(t==="change")return e}var J_=!1;if(mn){var mc;if(mn){var gc="oninput"in document;if(!gc){var Im=document.createElement("div");Im.setAttribute("oninput","return;"),gc=typeof Im.oninput=="function"}mc=gc}else mc=!1;J_=mc&&(!document.documentMode||9<document.documentMode)}function Tm(){Os&&(Os.detachEvent("onpropertychange",Z_),Js=Os=null)}function Z_(t){if(t.propertyName==="value"&&Xl(Js)){var e=[];X_(e,Js,t,Qd(t)),D_(q1,e)}}function H1(t,e,n){t==="focusin"?(Tm(),Os=e,Js=n,Os.attachEvent("onpropertychange",Z_)):t==="focusout"&&Tm()}function K1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Js)}function G1(t,e){if(t==="click")return Xl(e)}function Q1(t,e){if(t==="input"||t==="change")return Xl(e)}function Y1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ot=typeof Object.is=="function"?Object.is:Y1;function Zs(t,e){if(Ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!oh.call(e,i)||!Ot(t[i],e[i]))return!1}return!0}function Sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Am(t,e){var n=Sm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function ev(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ev(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tv(){for(var t=window,e=Xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xa(t.document)}return e}function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function X1(t){var e=tv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ev(n.ownerDocument.documentElement,n)){if(r!==null&&sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Am(n,s);var o=Am(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var J1=mn&&"documentMode"in document&&11>=document.documentMode,oi=null,Ah=null,Vs=null,Rh=!1;function Rm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rh||oi==null||oi!==Xa(r)||(r=oi,"selectionStart"in r&&sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vs&&Zs(Vs,r)||(Vs=r,r=il(Ah,"onSelect"),0<r.length&&(e=new tf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=oi)))}function da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ai={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},yc={},nv={};mn&&(nv=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function Jl(t){if(yc[t])return yc[t];if(!ai[t])return t;var e=ai[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nv)return yc[t]=e[n];return t}var rv=Jl("animationend"),iv=Jl("animationiteration"),sv=Jl("animationstart"),ov=Jl("transitionend"),av=new Map,Pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){av.set(t,e),Br(e,[t])}for(var _c=0;_c<Pm.length;_c++){var vc=Pm[_c],Z1=vc.toLowerCase(),eS=vc[0].toUpperCase()+vc.slice(1);sr(Z1,"on"+eS)}sr(rv,"onAnimationEnd");sr(iv,"onAnimationIteration");sr(sv,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(ov,"onTransitionEnd");ki("onMouseEnter",["mouseout","mouseover"]);ki("onMouseLeave",["mouseout","mouseover"]);ki("onPointerEnter",["pointerout","pointerover"]);ki("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function Cm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ZT(r,e,void 0,t),t.currentTarget=null}function lv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Cm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Cm(i,a,u),s=l}}}if(Za)throw t=Eh,Za=!1,Eh=null,t}function te(t,e){var n=e[xh];n===void 0&&(n=e[xh]=new Set);var r=t+"__bubble";n.has(r)||(uv(e,t,2,!1),n.add(r))}function wc(t,e,n){var r=0;e&&(r|=4),uv(n,t,r,e)}var fa="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[fa]){t[fa]=!0,g_.forEach(function(n){n!=="selectionchange"&&(tS.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fa]||(e[fa]=!0,wc("selectionchange",!1,e))}}function uv(t,e,n,r){switch(H_(e)){case 1:var i=m1;break;case 4:i=g1;break;default:i=Zd}n=i.bind(null,e,n,t),i=void 0,!wh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ec(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=_r(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}D_(function(){var u=s,c=Qd(n),h=[];e:{var d=av.get(t);if(d!==void 0){var m=tf,v=t;switch(t){case"keypress":if(La(n)===0)break e;case"keydown":case"keyup":m=x1;break;case"focusin":v="focus",m=pc;break;case"focusout":v="blur",m=pc;break;case"beforeblur":case"afterblur":m=pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=v1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=V1;break;case rv:case iv:case sv:m=I1;break;case ov:m=M1;break;case"scroll":m=y1;break;case"wheel":m=F1;break;case"copy":case"cut":case"paste":m=S1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=_m}var _=(e&4)!==0,w=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=Gs(f,p),E!=null&&_.push(to(f,E,g)))),w)break;f=f.return}0<_.length&&(d=new m(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==_h&&(v=n.relatedTarget||n.fromElement)&&(_r(v)||v[gn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?_r(v):null,v!==null&&(w=zr(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=gm,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=_m,E="onPointerLeave",p="onPointerEnter",f="pointer"),w=m==null?d:li(m),g=v==null?d:li(v),d=new _(E,f+"leave",m,n,c),d.target=w,d.relatedTarget=g,E=null,_r(c)===u&&(_=new _(p,f+"enter",v,n,c),_.target=g,_.relatedTarget=w,E=_),w=E,m&&v)t:{for(_=m,p=v,f=0,g=_;g;g=Jr(g))f++;for(g=0,E=p;E;E=Jr(E))g++;for(;0<f-g;)_=Jr(_),f--;for(;0<g-f;)p=Jr(p),g--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=Jr(_),p=Jr(p)}_=null}else _=null;m!==null&&km(h,d,m,_,!1),v!==null&&w!==null&&km(h,w,v,_,!0)}}e:{if(d=u?li(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var R=W1;else if(Em(d))if(J_)R=Q1;else{R=K1;var C=H1}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=G1);if(R&&(R=R(t,u))){X_(h,R,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&fh(d,"number",d.value)}switch(C=u?li(u):window,t){case"focusin":(Em(C)||C.contentEditable==="true")&&(oi=C,Ah=u,Vs=null);break;case"focusout":Vs=Ah=oi=null;break;case"mousedown":Rh=!0;break;case"contextmenu":case"mouseup":case"dragend":Rh=!1,Rm(h,n,c);break;case"selectionchange":if(J1)break;case"keydown":case"keyup":Rm(h,n,c)}var k;if(rf)e:{switch(t){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else si?Q_(t,n)&&(V="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(V="onCompositionStart");V&&(G_&&n.locale!=="ko"&&(si||V!=="onCompositionStart"?V==="onCompositionEnd"&&si&&(k=K_()):(bn=c,ef="value"in bn?bn.value:bn.textContent,si=!0)),C=il(u,V),0<C.length&&(V=new ym(V,t,null,n,c),h.push({event:V,listeners:C}),k?V.data=k:(k=Y_(n),k!==null&&(V.data=k)))),(k=$1?j1(t,n):B1(t,n))&&(u=il(u,"onBeforeInput"),0<u.length&&(c=new ym("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=k))}lv(h,e)})}function to(t,e,n){return{instance:t,listener:e,currentTarget:n}}function il(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Gs(t,n),s!=null&&r.unshift(to(t,s,i)),s=Gs(t,e),s!=null&&r.push(to(t,s,i))),t=t.return}return r}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function km(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Gs(n,s),l!=null&&o.unshift(to(n,l,a))):i||(l=Gs(n,s),l!=null&&o.push(to(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function Nm(t){return(typeof t=="string"?t:""+t).replace(nS,`
`).replace(rS,"")}function pa(t,e,n){if(e=Nm(e),Nm(t)!==e&&n)throw Error(A(425))}function sl(){}var Ph=null,Ch=null;function kh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nh=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,xm=typeof Promise=="function"?Promise:void 0,sS=typeof queueMicrotask=="function"?queueMicrotask:typeof xm<"u"?function(t){return xm.resolve(null).then(t).catch(oS)}:Nh;function oS(t){setTimeout(function(){throw t})}function Ic(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xs(e)}function qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gi=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Gi,no="__reactProps$"+Gi,gn="__reactContainer$"+Gi,xh="__reactEvents$"+Gi,aS="__reactListeners$"+Gi,lS="__reactHandles$"+Gi;function _r(t){var e=t[Bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gn]||n[Bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dm(t);t!==null;){if(n=t[Bt])return n;t=Dm(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[Bt]||t[gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Zl(t){return t[no]||null}var Dh=[],ui=-1;function or(t){return{current:t}}function ie(t){0>ui||(t.current=Dh[ui],Dh[ui]=null,ui--)}function Z(t,e){ui++,Dh[ui]=t.current,t.current=e}var tr={},He=or(tr),rt=or(!1),Cr=tr;function Ni(t,e){var n=t.type.contextTypes;if(!n)return tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function it(t){return t=t.childContextTypes,t!=null}function ol(){ie(rt),ie(He)}function Om(t,e,n){if(He.current!==tr)throw Error(A(168));Z(He,e),Z(rt,n)}function cv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,HT(t)||"Unknown",i));return ue({},n,r)}function al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Cr=He.current,Z(He,t),Z(rt,rt.current),!0}function Vm(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=cv(t,e,Cr),r.__reactInternalMemoizedMergedChildContext=t,ie(rt),ie(He),Z(He,t)):ie(rt),Z(rt,n)}var rn=null,eu=!1,Tc=!1;function hv(t){rn===null?rn=[t]:rn.push(t)}function uS(t){eu=!0,hv(t)}function ar(){if(!Tc&&rn!==null){Tc=!0;var t=0,e=X;try{var n=rn;for(X=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rn=null,eu=!1}catch(i){throw rn!==null&&(rn=rn.slice(t+1)),M_(Yd,ar),i}finally{X=e,Tc=!1}}return null}var ci=[],hi=0,ll=null,ul=0,_t=[],vt=0,kr=null,sn=1,on="";function mr(t,e){ci[hi++]=ul,ci[hi++]=ll,ll=t,ul=e}function dv(t,e,n){_t[vt++]=sn,_t[vt++]=on,_t[vt++]=kr,kr=t;var r=sn;t=on;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var s=32-Nt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,sn=1<<32-Nt(e)+i|n<<i|r,on=s+t}else sn=1<<s|n<<i|r,on=t}function of(t){t.return!==null&&(mr(t,1),dv(t,1,0))}function af(t){for(;t===ll;)ll=ci[--hi],ci[hi]=null,ul=ci[--hi],ci[hi]=null;for(;t===kr;)kr=_t[--vt],_t[vt]=null,on=_t[--vt],_t[vt]=null,sn=_t[--vt],_t[vt]=null}var ht=null,ut=null,se=!1,kt=null;function fv(t,e){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ht=t,ut=qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ht=t,ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:sn,overflow:on}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ht=t,ut=null,!0):!1;default:return!1}}function Oh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vh(t){if(se){var e=ut;if(e){var n=e;if(!Lm(t,e)){if(Oh(t))throw Error(A(418));e=qn(n.nextSibling);var r=ht;e&&Lm(t,e)?fv(r,n):(t.flags=t.flags&-4097|2,se=!1,ht=t)}}else{if(Oh(t))throw Error(A(418));t.flags=t.flags&-4097|2,se=!1,ht=t}}}function Mm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ht=t}function ma(t){if(t!==ht)return!1;if(!se)return Mm(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kh(t.type,t.memoizedProps)),e&&(e=ut)){if(Oh(t))throw pv(),Error(A(418));for(;e;)fv(t,e),e=qn(e.nextSibling)}if(Mm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ut=qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ut=null}}else ut=ht?qn(t.stateNode.nextSibling):null;return!0}function pv(){for(var t=ut;t;)t=qn(t.nextSibling)}function xi(){ut=ht=null,se=!1}function lf(t){kt===null?kt=[t]:kt.push(t)}var cS=Tn.ReactCurrentBatchConfig;function ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function ga(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bm(t){var e=t._init;return e(t._payload)}function mv(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Gn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,E){return f===null||f.tag!==6?(f=Nc(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,E){var R=g.type;return R===ii?c(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===kn&&bm(R)===f.type)?(E=i(f,g.props),E.ref=ds(p,f,g),E.return=p,E):(E=Ba(g.type,g.key,g.props,null,p.mode,E),E.ref=ds(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=xc(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,E,R){return f===null||f.tag!==7?(f=Rr(g,p.mode,E,R),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Nc(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case sa:return g=Ba(f.type,f.key,f.props,null,p.mode,g),g.ref=ds(p,null,f),g.return=p,g;case ri:return f=xc(f,p.mode,g),f.return=p,f;case kn:var E=f._init;return h(p,E(f._payload),g)}if(ws(f)||as(f))return f=Rr(f,p.mode,g,null),f.return=p,f;ga(p,f)}return null}function d(p,f,g,E){var R=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:a(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case sa:return g.key===R?l(p,f,g,E):null;case ri:return g.key===R?u(p,f,g,E):null;case kn:return R=g._init,d(p,f,R(g._payload),E)}if(ws(g)||as(g))return R!==null?null:c(p,f,g,E,null);ga(p,g)}return null}function m(p,f,g,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,a(f,p,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case sa:return p=p.get(E.key===null?g:E.key)||null,l(f,p,E,R);case ri:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,R);case kn:var C=E._init;return m(p,f,g,C(E._payload),R)}if(ws(E)||as(E))return p=p.get(g)||null,c(f,p,E,R,null);ga(f,E)}return null}function v(p,f,g,E){for(var R=null,C=null,k=f,V=f=0,Y=null;k!==null&&V<g.length;V++){k.index>V?(Y=k,k=null):Y=k.sibling;var U=d(p,k,g[V],E);if(U===null){k===null&&(k=Y);break}t&&k&&U.alternate===null&&e(p,k),f=s(U,f,V),C===null?R=U:C.sibling=U,C=U,k=Y}if(V===g.length)return n(p,k),se&&mr(p,V),R;if(k===null){for(;V<g.length;V++)k=h(p,g[V],E),k!==null&&(f=s(k,f,V),C===null?R=k:C.sibling=k,C=k);return se&&mr(p,V),R}for(k=r(p,k);V<g.length;V++)Y=m(k,p,V,g[V],E),Y!==null&&(t&&Y.alternate!==null&&k.delete(Y.key===null?V:Y.key),f=s(Y,f,V),C===null?R=Y:C.sibling=Y,C=Y);return t&&k.forEach(function(at){return e(p,at)}),se&&mr(p,V),R}function _(p,f,g,E){var R=as(g);if(typeof R!="function")throw Error(A(150));if(g=R.call(g),g==null)throw Error(A(151));for(var C=R=null,k=f,V=f=0,Y=null,U=g.next();k!==null&&!U.done;V++,U=g.next()){k.index>V?(Y=k,k=null):Y=k.sibling;var at=d(p,k,U.value,E);if(at===null){k===null&&(k=Y);break}t&&k&&at.alternate===null&&e(p,k),f=s(at,f,V),C===null?R=at:C.sibling=at,C=at,k=Y}if(U.done)return n(p,k),se&&mr(p,V),R;if(k===null){for(;!U.done;V++,U=g.next())U=h(p,U.value,E),U!==null&&(f=s(U,f,V),C===null?R=U:C.sibling=U,C=U);return se&&mr(p,V),R}for(k=r(p,k);!U.done;V++,U=g.next())U=m(k,p,V,U.value,E),U!==null&&(t&&U.alternate!==null&&k.delete(U.key===null?V:U.key),f=s(U,f,V),C===null?R=U:C.sibling=U,C=U);return t&&k.forEach(function(ss){return e(p,ss)}),se&&mr(p,V),R}function w(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===ii&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case sa:e:{for(var R=g.key,C=f;C!==null;){if(C.key===R){if(R=g.type,R===ii){if(C.tag===7){n(p,C.sibling),f=i(C,g.props.children),f.return=p,p=f;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===kn&&bm(R)===C.type){n(p,C.sibling),f=i(C,g.props),f.ref=ds(p,C,g),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}g.type===ii?(f=Rr(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=Ba(g.type,g.key,g.props,null,p.mode,E),E.ref=ds(p,f,g),E.return=p,p=E)}return o(p);case ri:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=xc(g,p.mode,E),f.return=p,p=f}return o(p);case kn:return C=g._init,w(p,f,C(g._payload),E)}if(ws(g))return v(p,f,g,E);if(as(g))return _(p,f,g,E);ga(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Nc(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return w}var Di=mv(!0),gv=mv(!1),cl=or(null),hl=null,di=null,uf=null;function cf(){uf=di=hl=null}function hf(t){var e=cl.current;ie(cl),t._currentValue=e}function Lh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ei(t,e){hl=t,uf=di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nt=!0),t.firstContext=null)}function St(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},di===null){if(hl===null)throw Error(A(308));di=t,hl.dependencies={lanes:0,firstContext:t}}else di=di.next=t;return e}var vr=null;function df(t){vr===null?vr=[t]:vr.push(t)}function yv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,df(e)):(n.next=i.next,i.next=n),e.interleaved=n,yn(t,r)}function yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nn=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _v(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yn(t,n)}return i=r.interleaved,i===null?(e.next=e,df(r)):(e.next=i.next,i.next=e),r.interleaved=e,yn(t,n)}function Ma(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xd(t,n)}}function Fm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dl(t,e,n,r){var i=t.updateQueue;Nn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=ue({},h,d);break e;case 2:Nn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);xr|=o,t.lanes=o,t.memoizedState=h}}function Um(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Vo={},Gt=or(Vo),ro=or(Vo),io=or(Vo);function wr(t){if(t===Vo)throw Error(A(174));return t}function pf(t,e){switch(Z(io,e),Z(ro,t),Z(Gt,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mh(e,t)}ie(Gt),Z(Gt,e)}function Oi(){ie(Gt),ie(ro),ie(io)}function vv(t){wr(io.current);var e=wr(Gt.current),n=mh(e,t.type);e!==n&&(Z(ro,t),Z(Gt,n))}function mf(t){ro.current===t&&(ie(Gt),ie(ro))}var oe=or(0);function fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sc=[];function gf(){for(var t=0;t<Sc.length;t++)Sc[t]._workInProgressVersionPrimary=null;Sc.length=0}var ba=Tn.ReactCurrentDispatcher,Ac=Tn.ReactCurrentBatchConfig,Nr=0,ae=null,Ee=null,Ae=null,pl=!1,Ls=!1,so=0,hS=0;function Fe(){throw Error(A(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ot(t[n],e[n]))return!1;return!0}function _f(t,e,n,r,i,s){if(Nr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ba.current=t===null||t.memoizedState===null?mS:gS,t=n(r,i),Ls){s=0;do{if(Ls=!1,so=0,25<=s)throw Error(A(301));s+=1,Ae=Ee=null,e.updateQueue=null,ba.current=yS,t=n(r,i)}while(Ls)}if(ba.current=ml,e=Ee!==null&&Ee.next!==null,Nr=0,Ae=Ee=ae=null,pl=!1,e)throw Error(A(300));return t}function vf(){var t=so!==0;return so=0,t}function jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ae.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function At(){if(Ee===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=Ee.next;var e=Ae===null?ae.memoizedState:Ae.next;if(e!==null)Ae=e,Ee=t;else{if(t===null)throw Error(A(310));Ee=t,t={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ae===null?ae.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function oo(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=At(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Nr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,xr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ot(r,e.memoizedState)||(nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,xr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pc(t){var e=At(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ot(s,e.memoizedState)||(nt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function wv(){}function Ev(t,e){var n=ae,r=At(),i=e(),s=!Ot(r.memoizedState,i);if(s&&(r.memoizedState=i,nt=!0),r=r.queue,wf(Sv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,ao(9,Tv.bind(null,n,r,i,e),void 0,null),Re===null)throw Error(A(349));Nr&30||Iv(n,e,i)}return i}function Iv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tv(t,e,n,r){e.value=n,e.getSnapshot=r,Av(e)&&Rv(t)}function Sv(t,e,n){return n(function(){Av(e)&&Rv(t)})}function Av(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ot(t,n)}catch{return!0}}function Rv(t){var e=yn(t,1);e!==null&&xt(e,t,1,-1)}function $m(t){var e=jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},e.queue=t,t=t.dispatch=pS.bind(null,ae,t),[e.memoizedState,t]}function ao(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Pv(){return At().memoizedState}function Fa(t,e,n,r){var i=jt();ae.flags|=t,i.memoizedState=ao(1|e,n,void 0,r===void 0?null:r)}function tu(t,e,n,r){var i=At();r=r===void 0?null:r;var s=void 0;if(Ee!==null){var o=Ee.memoizedState;if(s=o.destroy,r!==null&&yf(r,o.deps)){i.memoizedState=ao(e,n,s,r);return}}ae.flags|=t,i.memoizedState=ao(1|e,n,s,r)}function jm(t,e){return Fa(8390656,8,t,e)}function wf(t,e){return tu(2048,8,t,e)}function Cv(t,e){return tu(4,2,t,e)}function kv(t,e){return tu(4,4,t,e)}function Nv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xv(t,e,n){return n=n!=null?n.concat([t]):null,tu(4,4,Nv.bind(null,e,t),n)}function Ef(){}function Dv(t,e){var n=At();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ov(t,e){var n=At();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Vv(t,e,n){return Nr&21?(Ot(n,e)||(n=U_(),ae.lanes|=n,xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nt=!0),t.memoizedState=n)}function dS(t,e){var n=X;X=n!==0&&4>n?n:4,t(!0);var r=Ac.transition;Ac.transition={};try{t(!1),e()}finally{X=n,Ac.transition=r}}function Lv(){return At().memoizedState}function fS(t,e,n){var r=Kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mv(t))bv(e,n);else if(n=yv(t,e,n,r),n!==null){var i=Ye();xt(n,t,r,i),Fv(n,e,r)}}function pS(t,e,n){var r=Kn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mv(t))bv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ot(a,o)){var l=e.interleaved;l===null?(i.next=i,df(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=yv(t,e,i,r),n!==null&&(i=Ye(),xt(n,t,r,i),Fv(n,e,r))}}function Mv(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function bv(t,e){Ls=pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xd(t,n)}}var ml={readContext:St,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},mS={readContext:St,useCallback:function(t,e){return jt().memoizedState=[t,e===void 0?null:e],t},useContext:St,useEffect:jm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fa(4194308,4,Nv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fa(4,2,t,e)},useMemo:function(t,e){var n=jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fS.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=jt();return t={current:t},e.memoizedState=t},useState:$m,useDebugValue:Ef,useDeferredValue:function(t){return jt().memoizedState=t},useTransition:function(){var t=$m(!1),e=t[0];return t=dS.bind(null,t[1]),jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=jt();if(se){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Re===null)throw Error(A(349));Nr&30||Iv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jm(Sv.bind(null,r,s,t),[t]),r.flags|=2048,ao(9,Tv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=jt(),e=Re.identifierPrefix;if(se){var n=on,r=sn;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=so++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gS={readContext:St,useCallback:Dv,useContext:St,useEffect:wf,useImperativeHandle:xv,useInsertionEffect:Cv,useLayoutEffect:kv,useMemo:Ov,useReducer:Rc,useRef:Pv,useState:function(){return Rc(oo)},useDebugValue:Ef,useDeferredValue:function(t){var e=At();return Vv(e,Ee.memoizedState,t)},useTransition:function(){var t=Rc(oo)[0],e=At().memoizedState;return[t,e]},useMutableSource:wv,useSyncExternalStore:Ev,useId:Lv,unstable_isNewReconciler:!1},yS={readContext:St,useCallback:Dv,useContext:St,useEffect:wf,useImperativeHandle:xv,useInsertionEffect:Cv,useLayoutEffect:kv,useMemo:Ov,useReducer:Pc,useRef:Pv,useState:function(){return Pc(oo)},useDebugValue:Ef,useDeferredValue:function(t){var e=At();return Ee===null?e.memoizedState=t:Vv(e,Ee.memoizedState,t)},useTransition:function(){var t=Pc(oo)[0],e=At().memoizedState;return[t,e]},useMutableSource:wv,useSyncExternalStore:Ev,useId:Lv,unstable_isNewReconciler:!1};function Pt(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nu={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=Kn(t),s=dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(xt(e,t,i,r),Ma(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=Kn(t),s=dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(xt(e,t,i,r),Ma(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ye(),r=Kn(t),i=dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wn(t,i,r),e!==null&&(xt(e,t,r,n),Ma(e,t,r))}};function Bm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zs(n,r)||!Zs(i,s):!0}function Uv(t,e,n){var r=!1,i=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=St(s):(i=it(e)?Cr:He.current,r=e.contextTypes,s=(r=r!=null)?Ni(t,i):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function zm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nu.enqueueReplaceState(e,e.state,null)}function bh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ff(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=St(s):(s=it(e)?Cr:He.current,i.context=Ni(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&nu.enqueueReplaceState(i,i.state,null),dl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vi(t,e){try{var n="",r=e;do n+=WT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _S=typeof WeakMap=="function"?WeakMap:Map;function $v(t,e,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yl||(yl=!0,Gh=r),Fh(t,e)},n}function jv(t,e,n){n=dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Fh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fh(t,e),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _S;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=DS.bind(null,t,e,n),e.then(t,t))}function Wm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dn(-1,1),e.tag=2,Wn(n,e,1))),n.lanes|=1),t)}var vS=Tn.ReactCurrentOwner,nt=!1;function Ge(t,e,n,r){e.child=t===null?gv(e,null,n,r):Di(e,t.child,n,r)}function Km(t,e,n,r,i){n=n.render;var s=e.ref;return Ei(e,i),r=_f(t,e,n,r,s,i),n=vf(),t!==null&&!nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(se&&n&&of(e),e.flags|=1,Ge(t,e,r,i),e.child)}function Gm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Bv(t,e,s,r,i)):(t=Ba(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zs,n(o,r)&&t.ref===e.ref)return _n(t,e,i)}return e.flags|=1,t=Gn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Bv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Zs(s,r)&&t.ref===e.ref)if(nt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(nt=!0);else return e.lanes=t.lanes,_n(t,e,i)}return Uh(t,e,n,r,i)}function zv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(pi,lt),lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(pi,lt),lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(pi,lt),lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(pi,lt),lt|=r;return Ge(t,e,i,n),e.child}function qv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uh(t,e,n,r,i){var s=it(n)?Cr:He.current;return s=Ni(e,s),Ei(e,i),n=_f(t,e,n,r,s,i),r=vf(),t!==null&&!nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(se&&r&&of(e),e.flags|=1,Ge(t,e,n,i),e.child)}function Qm(t,e,n,r,i){if(it(n)){var s=!0;al(e)}else s=!1;if(Ei(e,i),e.stateNode===null)Ua(t,e),Uv(e,n,r),bh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=St(u):(u=it(n)?Cr:He.current,u=Ni(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&zm(e,o,r,u),Nn=!1;var d=e.memoizedState;o.state=d,dl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||rt.current||Nn?(typeof c=="function"&&(Mh(e,n,c,r),l=e.memoizedState),(a=Nn||Bm(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,_v(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Pt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=St(l):(l=it(n)?Cr:He.current,l=Ni(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&zm(e,o,r,l),Nn=!1,d=e.memoizedState,o.state=d,dl(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||rt.current||Nn?(typeof m=="function"&&(Mh(e,n,m,r),v=e.memoizedState),(u=Nn||Bm(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return $h(t,e,n,r,s,i)}function $h(t,e,n,r,i,s){qv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Vm(e,n,!1),_n(t,e,s);r=e.stateNode,vS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Di(e,t.child,null,s),e.child=Di(e,null,a,s)):Ge(t,e,a,s),e.memoizedState=r.state,i&&Vm(e,n,!0),e.child}function Wv(t){var e=t.stateNode;e.pendingContext?Om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Om(t,e.context,!1),pf(t,e.containerInfo)}function Ym(t,e,n,r,i){return xi(),lf(i),e.flags|=256,Ge(t,e,n,r),e.child}var jh={dehydrated:null,treeContext:null,retryLane:0};function Bh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hv(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(oe,i&1),t===null)return Vh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=su(o,r,0,null),t=Rr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bh(n),e.memoizedState=jh,t):If(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gn(a,s):(s=Rr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jh,r}return s=t.child,t=s.sibling,r=Gn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function If(t,e){return e=su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ya(t,e,n,r){return r!==null&&lf(r),Di(e,t.child,null,n),t=If(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Cc(Error(A(422))),ya(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=su({mode:"visible",children:r.children},i,0,null),s=Rr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Di(e,t.child,null,o),e.child.memoizedState=Bh(o),e.memoizedState=jh,s);if(!(e.mode&1))return ya(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Cc(s,r,void 0),ya(t,e,o,r)}if(a=(o&t.childLanes)!==0,nt||a){if(r=Re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(t,i),xt(r,t,i,-1))}return Cf(),r=Cc(Error(A(421))),ya(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=OS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ut=qn(i.nextSibling),ht=e,se=!0,kt=null,t!==null&&(_t[vt++]=sn,_t[vt++]=on,_t[vt++]=kr,sn=t.id,on=t.overflow,kr=e),e=If(e,r.children),e.flags|=4096,e)}function Xm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lh(t.return,e,n)}function kc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Kv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ge(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xm(t,n,e);else if(t.tag===19)Xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&fl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),kc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&fl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}kc(e,!0,n,null,s);break;case"together":kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Gn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ES(t,e,n){switch(e.tag){case 3:Wv(e),xi();break;case 5:vv(e);break;case 1:it(e.type)&&al(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(cl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?Hv(t,e,n):(Z(oe,oe.current&1),t=_n(t,e,n),t!==null?t.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Kv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,zv(t,e,n)}return _n(t,e,n)}var Gv,zh,Qv,Yv;Gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zh=function(){};Qv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,wr(Gt.current);var s=null;switch(n){case"input":i=hh(t,i),r=hh(t,r),s=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":i=ph(t,i),r=ph(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=sl)}gh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Yv=function(t,e,n,r){n!==r&&(e.flags|=4)};function fs(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ue(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function IS(t,e,n){var r=e.pendingProps;switch(af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(e),null;case 1:return it(e.type)&&ol(),Ue(e),null;case 3:return r=e.stateNode,Oi(),ie(rt),ie(He),gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kt!==null&&(Xh(kt),kt=null))),zh(t,e),Ue(e),null;case 5:mf(e);var i=wr(io.current);if(n=e.type,t!==null&&e.stateNode!=null)Qv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return Ue(e),null}if(t=wr(Gt.current),ma(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bt]=e,r[no]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Is.length;i++)te(Is[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":om(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":lm(r,s),te("invalid",r)}gh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&pa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pa(r.textContent,a,t),i=["children",""+a]):Hs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":oa(r),am(r,s,!0);break;case"textarea":oa(r),um(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=sl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Bt]=e,t[no]=r,Gv(t,e,!1,!1),e.stateNode=t;e:{switch(o=yh(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Is.length;i++)te(Is[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":om(t,r),i=hh(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),te("invalid",t);break;case"textarea":lm(t,r),i=ph(t,r),te("invalid",t);break;default:i=r}gh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?P_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&A_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ks(t,l):typeof l=="number"&&Ks(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&Wd(t,s,l,o))}switch(n){case"input":oa(t),am(t,r,!1);break;case"textarea":oa(t),um(t);break;case"option":r.value!=null&&t.setAttribute("value",""+er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?yi(t,!!r.multiple,s,!1):r.defaultValue!=null&&yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ue(e),null;case 6:if(t&&e.stateNode!=null)Yv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=wr(io.current),wr(Gt.current),ma(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bt]=e,(s=r.nodeValue!==n)&&(t=ht,t!==null))switch(t.tag){case 3:pa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=e,e.stateNode=r}return Ue(e),null;case 13:if(ie(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&ut!==null&&e.mode&1&&!(e.flags&128))pv(),xi(),e.flags|=98560,s=!1;else if(s=ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Bt]=e}else xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ue(e),s=!1}else kt!==null&&(Xh(kt),kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?Ie===0&&(Ie=3):Cf())),e.updateQueue!==null&&(e.flags|=4),Ue(e),null);case 4:return Oi(),zh(t,e),t===null&&eo(e.stateNode.containerInfo),Ue(e),null;case 10:return hf(e.type._context),Ue(e),null;case 17:return it(e.type)&&ol(),Ue(e),null;case 19:if(ie(oe),s=e.memoizedState,s===null)return Ue(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)fs(s,!1);else{if(Ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fl(t),o!==null){for(e.flags|=128,fs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&me()>Li&&(e.flags|=128,r=!0,fs(s,!1),e.lanes=4194304)}else{if(!r)if(t=fl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return Ue(e),null}else 2*me()-s.renderingStartTime>Li&&n!==1073741824&&(e.flags|=128,r=!0,fs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=me(),e.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),e):(Ue(e),null);case 22:case 23:return Pf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?lt&1073741824&&(Ue(e),e.subtreeFlags&6&&(e.flags|=8192)):Ue(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function TS(t,e){switch(af(e),e.tag){case 1:return it(e.type)&&ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oi(),ie(rt),ie(He),gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mf(e),null;case 13:if(ie(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(oe),null;case 4:return Oi(),null;case 10:return hf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var _a=!1,Be=!1,SS=typeof WeakSet=="function"?WeakSet:Set,N=null;function fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function qh(t,e,n){try{n()}catch(r){he(t,e,r)}}var Jm=!1;function AS(t,e){if(Ph=nl,t=tv(),sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ch={focusedElem:t,selectionRange:n},nl=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,w=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Pt(e.type,_),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(E){he(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return v=Jm,Jm=!1,v}function Ms(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qh(e,n,s)}i=i.next}while(i!==r)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xv(t){var e=t.alternate;e!==null&&(t.alternate=null,Xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bt],delete e[no],delete e[xh],delete e[aS],delete e[lS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jv(t){return t.tag===5||t.tag===3||t.tag===4}function Zm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sl));else if(r!==4&&(t=t.child,t!==null))for(Hh(t,e,n),t=t.sibling;t!==null;)Hh(t,e,n),t=t.sibling}function Kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kh(t,e,n),t=t.sibling;t!==null;)Kh(t,e,n),t=t.sibling}var ke=null,Ct=!1;function Pn(t,e,n){for(n=n.child;n!==null;)Zv(t,e,n),n=n.sibling}function Zv(t,e,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:Be||fi(n,e);case 6:var r=ke,i=Ct;ke=null,Pn(t,e,n),ke=r,Ct=i,ke!==null&&(Ct?(t=ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(Ct?(t=ke,n=n.stateNode,t.nodeType===8?Ic(t.parentNode,n):t.nodeType===1&&Ic(t,n),Xs(t)):Ic(ke,n.stateNode));break;case 4:r=ke,i=Ct,ke=n.stateNode.containerInfo,Ct=!0,Pn(t,e,n),ke=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qh(n,e,o),i=i.next}while(i!==r)}Pn(t,e,n);break;case 1:if(!Be&&(fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,e,a)}Pn(t,e,n);break;case 21:Pn(t,e,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Pn(t,e,n),Be=r):Pn(t,e,n);break;default:Pn(t,e,n)}}function eg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new SS),e.forEach(function(r){var i=VS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ke=a.stateNode,Ct=!1;break e;case 3:ke=a.stateNode.containerInfo,Ct=!0;break e;case 4:ke=a.stateNode.containerInfo,Ct=!0;break e}a=a.return}if(ke===null)throw Error(A(160));Zv(s,o,i),ke=null,Ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){he(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)e0(e,t),e=e.sibling}function e0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rt(e,t),Ut(t),r&4){try{Ms(3,t,t.return),ru(3,t)}catch(_){he(t,t.return,_)}try{Ms(5,t,t.return)}catch(_){he(t,t.return,_)}}break;case 1:Rt(e,t),Ut(t),r&512&&n!==null&&fi(n,n.return);break;case 5:if(Rt(e,t),Ut(t),r&512&&n!==null&&fi(n,n.return),t.flags&32){var i=t.stateNode;try{Ks(i,"")}catch(_){he(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&I_(i,s),yh(a,o);var u=yh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?P_(i,h):c==="dangerouslySetInnerHTML"?A_(i,h):c==="children"?Ks(i,h):Wd(i,c,h,u)}switch(a){case"input":dh(i,s);break;case"textarea":T_(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?yi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?yi(i,!!s.multiple,s.defaultValue,!0):yi(i,!!s.multiple,s.multiple?[]:"",!1))}i[no]=s}catch(_){he(t,t.return,_)}}break;case 6:if(Rt(e,t),Ut(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){he(t,t.return,_)}}break;case 3:if(Rt(e,t),Ut(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xs(e.containerInfo)}catch(_){he(t,t.return,_)}break;case 4:Rt(e,t),Ut(t);break;case 13:Rt(e,t),Ut(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Af=me())),r&4&&eg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Be=(u=Be)||c,Rt(e,t),Be=u):Rt(e,t),Ut(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(h=N=c;N!==null;){switch(d=N,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ms(4,d,d.return);break;case 1:fi(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){he(r,n,_)}}break;case 5:fi(d,d.return);break;case 22:if(d.memoizedState!==null){ng(h);continue}}m!==null?(m.return=d,N=m):ng(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=R_("display",o))}catch(_){he(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){he(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Rt(e,t),Ut(t),r&4&&eg(t);break;case 21:break;default:Rt(e,t),Ut(t)}}function Ut(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jv(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ks(i,""),r.flags&=-33);var s=Zm(t);Kh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zm(t);Hh(t,a,o);break;default:throw Error(A(161))}}catch(l){he(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function RS(t,e,n){N=t,t0(t)}function t0(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_a;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Be;a=_a;var u=Be;if(_a=o,(Be=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?rg(i):l!==null?(l.return=o,N=l):rg(i);for(;s!==null;)N=s,t0(s),s=s.sibling;N=i,_a=a,Be=u}tg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):tg(t)}}function tg(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Be||ru(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Um(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Um(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Xs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Be||e.flags&512&&Wh(e)}catch(d){he(e,e.return,d)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function ng(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function rg(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){he(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){he(e,i,l)}}var s=e.return;try{Wh(e)}catch(l){he(e,s,l)}break;case 5:var o=e.return;try{Wh(e)}catch(l){he(e,o,l)}}}catch(l){he(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var PS=Math.ceil,gl=Tn.ReactCurrentDispatcher,Tf=Tn.ReactCurrentOwner,It=Tn.ReactCurrentBatchConfig,G=0,Re=null,_e=null,Oe=0,lt=0,pi=or(0),Ie=0,lo=null,xr=0,iu=0,Sf=0,bs=null,et=null,Af=0,Li=1/0,nn=null,yl=!1,Gh=null,Hn=null,va=!1,Fn=null,_l=0,Fs=0,Qh=null,$a=-1,ja=0;function Ye(){return G&6?me():$a!==-1?$a:$a=me()}function Kn(t){return t.mode&1?G&2&&Oe!==0?Oe&-Oe:cS.transition!==null?(ja===0&&(ja=U_()),ja):(t=X,t!==0||(t=window.event,t=t===void 0?16:H_(t.type)),t):1}function xt(t,e,n,r){if(50<Fs)throw Fs=0,Qh=null,Error(A(185));xo(t,n,r),(!(G&2)||t!==Re)&&(t===Re&&(!(G&2)&&(iu|=n),Ie===4&&Dn(t,Oe)),st(t,r),n===1&&G===0&&!(e.mode&1)&&(Li=me()+500,eu&&ar()))}function st(t,e){var n=t.callbackNode;c1(t,e);var r=tl(t,t===Re?Oe:0);if(r===0)n!==null&&dm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dm(n),e===1)t.tag===0?uS(ig.bind(null,t)):hv(ig.bind(null,t)),sS(function(){!(G&6)&&ar()}),n=null;else{switch($_(r)){case 1:n=Yd;break;case 4:n=b_;break;case 16:n=el;break;case 536870912:n=F_;break;default:n=el}n=u0(n,n0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function n0(t,e){if($a=-1,ja=0,G&6)throw Error(A(327));var n=t.callbackNode;if(Ii()&&t.callbackNode!==n)return null;var r=tl(t,t===Re?Oe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vl(t,r);else{e=r;var i=G;G|=2;var s=i0();(Re!==t||Oe!==e)&&(nn=null,Li=me()+500,Ar(t,e));do try{NS();break}catch(a){r0(t,a)}while(!0);cf(),gl.current=s,G=i,_e!==null?e=0:(Re=null,Oe=0,e=Ie)}if(e!==0){if(e===2&&(i=Ih(t),i!==0&&(r=i,e=Yh(t,i))),e===1)throw n=lo,Ar(t,0),Dn(t,r),st(t,me()),n;if(e===6)Dn(t,r);else{if(i=t.current.alternate,!(r&30)&&!CS(i)&&(e=vl(t,r),e===2&&(s=Ih(t),s!==0&&(r=s,e=Yh(t,s))),e===1))throw n=lo,Ar(t,0),Dn(t,r),st(t,me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:gr(t,et,nn);break;case 3:if(Dn(t,r),(r&130023424)===r&&(e=Af+500-me(),10<e)){if(tl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nh(gr.bind(null,t,et,nn),e);break}gr(t,et,nn);break;case 4:if(Dn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Nt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*PS(r/1960))-r,10<r){t.timeoutHandle=Nh(gr.bind(null,t,et,nn),r);break}gr(t,et,nn);break;case 5:gr(t,et,nn);break;default:throw Error(A(329))}}}return st(t,me()),t.callbackNode===n?n0.bind(null,t):null}function Yh(t,e){var n=bs;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=vl(t,e),t!==2&&(e=et,et=n,e!==null&&Xh(e)),t}function Xh(t){et===null?et=t:et.push.apply(et,t)}function CS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ot(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dn(t,e){for(e&=~Sf,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nt(e),r=1<<n;t[n]=-1,e&=~r}}function ig(t){if(G&6)throw Error(A(327));Ii();var e=tl(t,0);if(!(e&1))return st(t,me()),null;var n=vl(t,e);if(t.tag!==0&&n===2){var r=Ih(t);r!==0&&(e=r,n=Yh(t,r))}if(n===1)throw n=lo,Ar(t,0),Dn(t,e),st(t,me()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,et,nn),st(t,me()),null}function Rf(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(Li=me()+500,eu&&ar())}}function Dr(t){Fn!==null&&Fn.tag===0&&!(G&6)&&Ii();var e=G;G|=1;var n=It.transition,r=X;try{if(It.transition=null,X=1,t)return t()}finally{X=r,It.transition=n,G=e,!(G&6)&&ar()}}function Pf(){lt=pi.current,ie(pi)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iS(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ol();break;case 3:Oi(),ie(rt),ie(He),gf();break;case 5:mf(r);break;case 4:Oi();break;case 13:ie(oe);break;case 19:ie(oe);break;case 10:hf(r.type._context);break;case 22:case 23:Pf()}n=n.return}if(Re=t,_e=t=Gn(t.current,null),Oe=lt=e,Ie=0,lo=null,Sf=iu=xr=0,et=bs=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}vr=null}return t}function r0(t,e){do{var n=_e;try{if(cf(),ba.current=ml,pl){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pl=!1}if(Nr=0,Ae=Ee=ae=null,Ls=!1,so=0,Tf.current=null,n===null||n.return===null){Ie=1,lo=e,_e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Oe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Wm(o);if(m!==null){m.flags&=-257,Hm(m,o,a,s,e),m.mode&1&&qm(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){qm(s,u,e),Cf();break e}l=Error(A(426))}}else if(se&&a.mode&1){var w=Wm(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Hm(w,o,a,s,e),lf(Vi(l,a));break e}}s=l=Vi(l,a),Ie!==4&&(Ie=2),bs===null?bs=[s]:bs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=$v(s,l,e);Fm(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Hn===null||!Hn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=jv(s,a,e);Fm(s,E);break e}}s=s.return}while(s!==null)}o0(n)}catch(R){e=R,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function i0(){var t=gl.current;return gl.current=ml,t===null?ml:t}function Cf(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Re===null||!(xr&268435455)&&!(iu&268435455)||Dn(Re,Oe)}function vl(t,e){var n=G;G|=2;var r=i0();(Re!==t||Oe!==e)&&(nn=null,Ar(t,e));do try{kS();break}catch(i){r0(t,i)}while(!0);if(cf(),G=n,gl.current=r,_e!==null)throw Error(A(261));return Re=null,Oe=0,Ie}function kS(){for(;_e!==null;)s0(_e)}function NS(){for(;_e!==null&&!t1();)s0(_e)}function s0(t){var e=l0(t.alternate,t,lt);t.memoizedProps=t.pendingProps,e===null?o0(t):_e=e,Tf.current=null}function o0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=TS(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ie=6,_e=null;return}}else if(n=IS(n,e,lt),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);Ie===0&&(Ie=5)}function gr(t,e,n){var r=X,i=It.transition;try{It.transition=null,X=1,xS(t,e,n,r)}finally{It.transition=i,X=r}return null}function xS(t,e,n,r){do Ii();while(Fn!==null);if(G&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(h1(t,s),t===Re&&(_e=Re=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||va||(va=!0,u0(el,function(){return Ii(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=It.transition,It.transition=null;var o=X;X=1;var a=G;G|=4,Tf.current=null,AS(t,n),e0(n,t),X1(Ch),nl=!!Ph,Ch=Ph=null,t.current=n,RS(n),n1(),G=a,X=o,It.transition=s}else t.current=n;if(va&&(va=!1,Fn=t,_l=i),s=t.pendingLanes,s===0&&(Hn=null),s1(n.stateNode),st(t,me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yl)throw yl=!1,t=Gh,Gh=null,t;return _l&1&&t.tag!==0&&Ii(),s=t.pendingLanes,s&1?t===Qh?Fs++:(Fs=0,Qh=t):Fs=0,ar(),null}function Ii(){if(Fn!==null){var t=$_(_l),e=It.transition,n=X;try{if(It.transition=null,X=16>t?16:t,Fn===null)var r=!1;else{if(t=Fn,Fn=null,_l=0,G&6)throw Error(A(331));var i=G;for(G|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Ms(8,c,s)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var d=c.sibling,m=c.return;if(Xv(c),c===u){N=null;break}if(d!==null){d.return=m,N=d;break}N=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ms(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=f;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ru(9,a)}}catch(R){he(a,a.return,R)}if(a===o){N=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,N=E;break e}N=a.return}}if(G=i,ar(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Ql,t)}catch{}r=!0}return r}finally{X=n,It.transition=e}}return!1}function sg(t,e,n){e=Vi(n,e),e=$v(t,e,1),t=Wn(t,e,1),e=Ye(),t!==null&&(xo(t,1,e),st(t,e))}function he(t,e,n){if(t.tag===3)sg(t,t,n);else for(;e!==null;){if(e.tag===3){sg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){t=Vi(n,t),t=jv(e,t,1),e=Wn(e,t,1),t=Ye(),e!==null&&(xo(e,1,t),st(e,t));break}}e=e.return}}function DS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ye(),t.pingedLanes|=t.suspendedLanes&n,Re===t&&(Oe&n)===n&&(Ie===4||Ie===3&&(Oe&130023424)===Oe&&500>me()-Af?Ar(t,0):Sf|=n),st(t,e)}function a0(t,e){e===0&&(t.mode&1?(e=ua,ua<<=1,!(ua&130023424)&&(ua=4194304)):e=1);var n=Ye();t=yn(t,e),t!==null&&(xo(t,e,n),st(t,n))}function OS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),a0(t,n)}function VS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),a0(t,n)}var l0;l0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rt.current)nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nt=!1,ES(t,e,n);nt=!!(t.flags&131072)}else nt=!1,se&&e.flags&1048576&&dv(e,ul,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ua(t,e),t=e.pendingProps;var i=Ni(e,He.current);Ei(e,n),i=_f(null,e,r,t,i,n);var s=vf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,it(r)?(s=!0,al(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ff(e),i.updater=nu,e.stateNode=i,i._reactInternals=e,bh(e,r,t,n),e=$h(null,e,r,!0,s,n)):(e.tag=0,se&&s&&of(e),Ge(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ua(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=MS(r),t=Pt(r,t),i){case 0:e=Uh(null,e,r,t,n);break e;case 1:e=Qm(null,e,r,t,n);break e;case 11:e=Km(null,e,r,t,n);break e;case 14:e=Gm(null,e,r,Pt(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Uh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Qm(t,e,r,i,n);case 3:e:{if(Wv(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,_v(t,e),dl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vi(Error(A(423)),e),e=Ym(t,e,r,n,i);break e}else if(r!==i){i=Vi(Error(A(424)),e),e=Ym(t,e,r,n,i);break e}else for(ut=qn(e.stateNode.containerInfo.firstChild),ht=e,se=!0,kt=null,n=gv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xi(),r===i){e=_n(t,e,n);break e}Ge(t,e,r,n)}e=e.child}return e;case 5:return vv(e),t===null&&Vh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kh(r,i)?o=null:s!==null&&kh(r,s)&&(e.flags|=32),qv(t,e),Ge(t,e,o,n),e.child;case 6:return t===null&&Vh(e),null;case 13:return Hv(t,e,n);case 4:return pf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Di(e,null,r,n):Ge(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Km(t,e,r,i,n);case 7:return Ge(t,e,e.pendingProps,n),e.child;case 8:return Ge(t,e,e.pendingProps.children,n),e.child;case 12:return Ge(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(cl,r._currentValue),r._currentValue=o,s!==null)if(Ot(s.value,o)){if(s.children===i.children&&!rt.current){e=_n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=dn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ge(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ei(e,n),i=St(i),r=r(i),e.flags|=1,Ge(t,e,r,n),e.child;case 14:return r=e.type,i=Pt(r,e.pendingProps),i=Pt(r.type,i),Gm(t,e,r,i,n);case 15:return Bv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Ua(t,e),e.tag=1,it(r)?(t=!0,al(e)):t=!1,Ei(e,n),Uv(e,r,i),bh(e,r,i,n),$h(null,e,r,!0,t,n);case 19:return Kv(t,e,n);case 22:return zv(t,e,n)}throw Error(A(156,e.tag))};function u0(t,e){return M_(t,e)}function LS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,n,r){return new LS(t,e,n,r)}function kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function MS(t){if(typeof t=="function")return kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Gd)return 14}return 2}function Gn(t,e){var n=t.alternate;return n===null?(n=Et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ba(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")kf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ii:return Rr(n.children,i,s,e);case Hd:o=8,i|=8;break;case ah:return t=Et(12,n,e,i|2),t.elementType=ah,t.lanes=s,t;case lh:return t=Et(13,n,e,i),t.elementType=lh,t.lanes=s,t;case uh:return t=Et(19,n,e,i),t.elementType=uh,t.lanes=s,t;case v_:return su(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y_:o=10;break e;case __:o=9;break e;case Kd:o=11;break e;case Gd:o=14;break e;case kn:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Et(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rr(t,e,n,r){return t=Et(7,t,r,e),t.lanes=n,t}function su(t,e,n,r){return t=Et(22,t,r,e),t.elementType=v_,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=Et(6,t,null,e),t.lanes=n,t}function xc(t,e,n){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hc(0),this.expirationTimes=hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,r,i,s,o,a,l){return t=new bS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(s),t}function FS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function c0(t){if(!t)return tr;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(it(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(it(n))return cv(t,n,e)}return e}function h0(t,e,n,r,i,s,o,a,l){return t=Nf(n,r,!0,t,i,s,o,a,l),t.context=c0(null),n=t.current,r=Ye(),i=Kn(n),s=dn(r,i),s.callback=e??null,Wn(n,s,i),t.current.lanes=i,xo(t,i,r),st(t,r),t}function ou(t,e,n,r){var i=e.current,s=Ye(),o=Kn(i);return n=c0(n),e.context===null?e.context=n:e.pendingContext=n,e=dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wn(i,e,o),t!==null&&(xt(t,i,o,s),Ma(t,i,o)),o}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xf(t,e){og(t,e),(t=t.alternate)&&og(t,e)}function US(){return null}var d0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Df(t){this._internalRoot=t}au.prototype.render=Df.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));ou(t,e,null,null)};au.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){ou(null,t,null,null)}),e[gn]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=z_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xn.length&&e!==0&&e<xn[n].priority;n++);xn.splice(n,0,t),n===0&&W_(t)}};function Of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ag(){}function $S(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=wl(o);s.call(u)}}var o=h0(e,r,t,0,null,!1,!1,"",ag);return t._reactRootContainer=o,t[gn]=o.current,eo(t.nodeType===8?t.parentNode:t),Dr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=wl(l);a.call(u)}}var l=Nf(t,0,!1,null,null,!1,!1,"",ag);return t._reactRootContainer=l,t[gn]=l.current,eo(t.nodeType===8?t.parentNode:t),Dr(function(){ou(e,l,n,r)}),l}function uu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=wl(o);a.call(l)}}ou(e,o,t,i)}else o=$S(n,e,t,i,r);return wl(o)}j_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Es(e.pendingLanes);n!==0&&(Xd(e,n|1),st(e,me()),!(G&6)&&(Li=me()+500,ar()))}break;case 13:Dr(function(){var r=yn(t,1);if(r!==null){var i=Ye();xt(r,t,1,i)}}),xf(t,1)}};Jd=function(t){if(t.tag===13){var e=yn(t,134217728);if(e!==null){var n=Ye();xt(e,t,134217728,n)}xf(t,134217728)}};B_=function(t){if(t.tag===13){var e=Kn(t),n=yn(t,e);if(n!==null){var r=Ye();xt(n,t,e,r)}xf(t,e)}};z_=function(){return X};q_=function(t,e){var n=X;try{return X=t,e()}finally{X=n}};vh=function(t,e,n){switch(e){case"input":if(dh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zl(r);if(!i)throw Error(A(90));E_(r),dh(r,i)}}}break;case"textarea":T_(t,n);break;case"select":e=n.value,e!=null&&yi(t,!!n.multiple,e,!1)}};N_=Rf;x_=Dr;var jS={usingClientEntryPoint:!1,Events:[Oo,li,Zl,C_,k_,Rf]},ps={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BS={bundleType:ps.bundleType,version:ps.version,rendererPackageName:ps.rendererPackageName,rendererConfig:ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V_(t),t===null?null:t.stateNode},findFiberByHostInstance:ps.findFiberByHostInstance||US,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{Ql=wa.inject(BS),Kt=wa}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS;mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Of(e))throw Error(A(200));return FS(t,e,null,n)};mt.createRoot=function(t,e){if(!Of(t))throw Error(A(299));var n=!1,r="",i=d0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,r,i),t[gn]=e.current,eo(t.nodeType===8?t.parentNode:t),new Df(e)};mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=V_(e),t=t===null?null:t.stateNode,t};mt.flushSync=function(t){return Dr(t)};mt.hydrate=function(t,e,n){if(!lu(e))throw Error(A(200));return uu(null,t,e,!0,n)};mt.hydrateRoot=function(t,e,n){if(!Of(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=d0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=h0(e,null,t,1,n??null,i,!1,s,o),t[gn]=e.current,eo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new au(e)};mt.render=function(t,e,n){if(!lu(e))throw Error(A(200));return uu(null,t,e,!1,n)};mt.unmountComponentAtNode=function(t){if(!lu(t))throw Error(A(40));return t._reactRootContainer?(Dr(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[gn]=null})}),!0):!1};mt.unstable_batchedUpdates=Rf;mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lu(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return uu(t,e,n,!1,r)};mt.version="18.3.1-next-f1338f8080-20240426";function f0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f0)}catch(t){console.error(t)}}f0(),f_.exports=mt;var zS=f_.exports,lg=zS;sh.createRoot=lg.createRoot,sh.hydrateRoot=lg.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uo.apply(this,arguments)}var Un;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Un||(Un={}));const ug="popstate";function qS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Jh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:El(i)}return HS(e,n,null,t)}function le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function p0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function WS(){return Math.random().toString(36).substr(2,8)}function cg(t,e){return{usr:t.state,key:t.key,idx:e}}function Jh(t,e,n,r){return n===void 0&&(n=null),uo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qi(e):e,{state:n,key:e&&e.key||r||WS()})}function El(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function HS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Un.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(uo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Un.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:p})}function d(w,p){a=Un.Push;let f=Jh(_.location,w,p);u=c()+1;let g=cg(f,u),E=_.createHref(f);try{o.pushState(g,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function m(w,p){a=Un.Replace;let f=Jh(_.location,w,p);u=c();let g=cg(f,u),E=_.createHref(f);o.replaceState(g,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function v(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:El(w);return f=f.replace(/ $/,"%20"),le(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ug,h),l=w,()=>{i.removeEventListener(ug,h),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let p=v(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(w){return o.go(w)}};return _}var hg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(hg||(hg={}));function KS(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Qi(e):e,i=Mi(r.pathname||"/",n);if(i==null)return null;let s=m0(t);GS(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=sA(i);o=rA(s[a],l)}return o}function m0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Qn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),m0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:tA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of g0(s.path))i(s,o,l)}),e}function g0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=g0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function GS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const QS=/^:[\w-]+$/,YS=3,XS=2,JS=1,ZS=10,eA=-2,dg=t=>t==="*";function tA(t,e){let n=t.split("/"),r=n.length;return n.some(dg)&&(r+=eA),e&&(r+=XS),n.filter(i=>!dg(i)).reduce((i,s)=>i+(QS.test(s)?YS:s===""?JS:ZS),r)}function nA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function rA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Zh({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Qn([i,c.pathname]),pathnameBase:uA(Qn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Qn([i,c.pathnameBase]))}return s}function Zh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=iA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:m}=c;if(d==="*"){let _=a[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[h];return m&&!v?u[d]=void 0:u[d]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function iA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),p0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function sA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return p0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Mi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function oA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Qi(t):t;return{pathname:n?n.startsWith("/")?n:aA(n,e):e,search:cA(r),hash:hA(i)}}function aA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vf(t,e){let n=lA(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Lf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Qi(t):(i=uo({},t),le(!i.pathname||!i.pathname.includes("?"),Dc("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),Dc("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),Dc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=oA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Qn=t=>t.join("/").replace(/\/\/+/g,"/"),uA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function dA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const y0=["post","put","patch","delete"];new Set(y0);const fA=["get",...y0];new Set(fA);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},co.apply(this,arguments)}const cu=I.createContext(null),_0=I.createContext(null),Sn=I.createContext(null),hu=I.createContext(null),An=I.createContext({outlet:null,matches:[],isDataRoute:!1}),v0=I.createContext(null);function pA(t,e){let{relative:n}=e===void 0?{}:e;Yi()||le(!1);let{basename:r,navigator:i}=I.useContext(Sn),{hash:s,pathname:o,search:a}=du(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Qn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Yi(){return I.useContext(hu)!=null}function qr(){return Yi()||le(!1),I.useContext(hu).location}function w0(t){I.useContext(Sn).static||I.useLayoutEffect(t)}function Lo(){let{isDataRoute:t}=I.useContext(An);return t?PA():mA()}function mA(){Yi()||le(!1);let t=I.useContext(cu),{basename:e,future:n,navigator:r}=I.useContext(Sn),{matches:i}=I.useContext(An),{pathname:s}=qr(),o=JSON.stringify(Vf(i,n.v7_relativeSplatPath)),a=I.useRef(!1);return w0(()=>{a.current=!0}),I.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=Lf(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Qn([e,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[e,r,o,s,t])}function E0(){let{matches:t}=I.useContext(An),e=t[t.length-1];return e?e.params:{}}function du(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=I.useContext(Sn),{matches:i}=I.useContext(An),{pathname:s}=qr(),o=JSON.stringify(Vf(i,r.v7_relativeSplatPath));return I.useMemo(()=>Lf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function gA(t,e){return yA(t,e)}function yA(t,e,n,r){Yi()||le(!1);let{navigator:i}=I.useContext(Sn),{matches:s}=I.useContext(An),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=qr(),c;if(e){var h;let w=typeof e=="string"?Qi(e):e;l==="/"||(h=w.pathname)!=null&&h.startsWith(l)||le(!1),c=w}else c=u;let d=c.pathname||"/",m=d;if(l!=="/"){let w=l.replace(/^\//,"").split("/");m="/"+d.replace(/^\//,"").split("/").slice(w.length).join("/")}let v=KS(t,{pathname:m}),_=IA(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Qn([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Qn([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&_?I.createElement(hu.Provider,{value:{location:co({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Un.Pop}},_):_}function _A(){let t=RA(),e=dA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,null)}const vA=I.createElement(_A,null);class wA extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(An.Provider,{value:this.props.routeContext},I.createElement(v0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function EA(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(cu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(An.Provider,{value:e},r)}function IA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);c>=0||le(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:d,errors:m}=n,v=h.route.loader&&d[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,d)=>{let m,v=!1,_=null,w=null;n&&(m=a&&h.route.id?a[h.route.id]:void 0,_=h.route.errorElement||vA,l&&(u<0&&d===0?(v=!0,w=null):u===d&&(v=!0,w=h.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,d+1)),f=()=>{let g;return m?g=_:v?g=w:h.route.Component?g=I.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=c,I.createElement(EA,{match:h,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?I.createElement(wA,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var I0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(I0||{}),Il=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Il||{});function TA(t){let e=I.useContext(cu);return e||le(!1),e}function SA(t){let e=I.useContext(_0);return e||le(!1),e}function AA(t){let e=I.useContext(An);return e||le(!1),e}function T0(t){let e=AA(),n=e.matches[e.matches.length-1];return n.route.id||le(!1),n.route.id}function RA(){var t;let e=I.useContext(v0),n=SA(Il.UseRouteError),r=T0(Il.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function PA(){let{router:t}=TA(I0.UseNavigateStable),e=T0(Il.UseNavigateStable),n=I.useRef(!1);return w0(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,co({fromRouteId:e},s)))},[t,e])}function ms(t){let{to:e,replace:n,state:r,relative:i}=t;Yi()||le(!1);let{future:s,static:o}=I.useContext(Sn),{matches:a}=I.useContext(An),{pathname:l}=qr(),u=Lo(),c=Lf(e,Vf(a,s.v7_relativeSplatPath),l,i==="path"),h=JSON.stringify(c);return I.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:i}),[u,h,i,n,r]),null}function $t(t){le(!1)}function CA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Un.Pop,navigator:s,static:o=!1,future:a}=t;Yi()&&le(!1);let l=e.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:l,navigator:s,static:o,future:co({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Qi(r));let{pathname:c="/",search:h="",hash:d="",state:m=null,key:v="default"}=r,_=I.useMemo(()=>{let w=Mi(c,l);return w==null?null:{location:{pathname:w,search:h,hash:d,state:m,key:v},navigationType:i}},[l,c,h,d,m,v,i]);return _==null?null:I.createElement(Sn.Provider,{value:u},I.createElement(hu.Provider,{children:n,value:_}))}function kA(t){let{children:e,location:n}=t;return gA(ed(e),n)}new Promise(()=>{});function ed(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,ed(r.props.children,s));return}r.type!==$t&&le(!1),!r.props.index||!r.props.children||le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ed(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tl.apply(this,arguments)}function S0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function NA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function xA(t,e){return t.button===0&&(!e||e==="_self")&&!NA(t)}const DA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],OA=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],VA="6";try{window.__reactRouterVersion=VA}catch{}const LA=I.createContext({isTransitioning:!1}),MA="startTransition",fg=DT[MA];function bA(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=qS({window:i,v5Compat:!0}));let o=s.current,[a,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(h=>{u&&fg?fg(()=>l(h)):l(h)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(CA,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const FA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fn=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=S0(e,DA),{basename:m}=I.useContext(Sn),v,_=!1;if(typeof u=="string"&&UA.test(u)&&(v=u,FA))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),R=Mi(E.pathname,m);E.origin===g.origin&&R!=null?u=R+E.search+E.hash:_=!0}catch{}let w=pA(u,{relative:i}),p=jA(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function f(g){r&&r(g),g.defaultPrevented||p(g)}return I.createElement("a",Tl({},d,{href:v||w,onClick:_||s?r:f,ref:n,target:l}))}),pr=I.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,h=S0(e,OA),d=du(l,{relative:h.relative}),m=qr(),v=I.useContext(_0),{navigator:_,basename:w}=I.useContext(Sn),p=v!=null&&BA(d)&&u===!0,f=_.encodeLocation?_.encodeLocation(d).pathname:d.pathname,g=m.pathname,E=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(g=g.toLowerCase(),E=E?E.toLowerCase():null,f=f.toLowerCase()),E&&w&&(E=Mi(E,w)||E);const R=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let C=g===f||!o&&g.startsWith(f)&&g.charAt(R)==="/",k=E!=null&&(E===f||!o&&E.startsWith(f)&&E.charAt(f.length)==="/"),V={isActive:C,isPending:k,isTransitioning:p},Y=C?r:void 0,U;typeof s=="function"?U=s(V):U=[s,C?"active":null,k?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let at=typeof a=="function"?a(V):a;return I.createElement(fn,Tl({},h,{"aria-current":Y,className:U,ref:n,style:at,to:l,unstable_viewTransition:u}),typeof c=="function"?c(V):c)});var td;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(td||(td={}));var pg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(pg||(pg={}));function $A(t){let e=I.useContext(cu);return e||le(!1),e}function jA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Lo(),u=qr(),c=du(t,{relative:o});return I.useCallback(h=>{if(xA(h,n)){h.preventDefault();let d=r!==void 0?r:El(u)===El(c);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function BA(t,e){e===void 0&&(e={});let n=I.useContext(LA);n==null&&le(!1);let{basename:r}=$A(td.useViewTransitionState),i=du(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Mi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Mi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Zh(i.pathname,o)!=null||Zh(i.pathname,s)!=null}var mg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},R0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(A0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new qA;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WA=function(t){const e=A0(t);return R0.encodeByteArray(e,!0)},Sl=function(t){return WA(t).replace(/\./g,"")},P0=function(t){try{return R0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=()=>HA().__FIREBASE_DEFAULTS__,GA=()=>{if(typeof process>"u"||typeof mg>"u")return;const t=mg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&P0(t[1]);return e&&JSON.parse(e)},fu=()=>{try{return KA()||GA()||QA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},C0=t=>{var e,n;return(n=(e=fu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},YA=t=>{const e=C0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},k0=()=>{var t;return(t=fu())===null||t===void 0?void 0:t.config},N0=t=>{var e;return(e=fu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Sl(JSON.stringify(n)),Sl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function eR(){var t;const e=(t=fu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function x0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nR(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rR(){return!eR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function D0(){try{return typeof indexedDB=="object"}catch{return!1}}function O0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function iR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="FirebaseError";class Ft extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sR,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?oR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ft(i,a,r)}}function oR(t,e){return t.replace(aR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aR=/\{\$([^}]+)}/g;function lR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ho(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gg(s)&&gg(o)){if(!ho(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ts(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uR(t,e){const n=new cR(t,e);return n.subscribe.bind(n)}class cR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Oc),i.error===void 0&&(i.error=Oc),i.complete===void 0&&(i.complete=Oc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=1e3,fR=2,pR=4*60*60*1e3,mR=.5;function yg(t,e=dR,n=fR){const r=e*Math.pow(n,t),i=Math.round(mR*r*(Math.random()-.5)*2);return Math.min(pR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t){return t&&t._delegate?t._delegate:t}class Vt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new XA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_R(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yR(t){return t===yr?void 0:t}function _R(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const wR={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},ER=H.INFO,IR={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},TR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=IR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pu{constructor(e){this.name=e,this._logLevel=ER,this._logHandler=TR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const SR=(t,e)=>e.some(n=>t instanceof n);let _g,vg;function AR(){return _g||(_g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RR(){return vg||(vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const V0=new WeakMap,nd=new WeakMap,L0=new WeakMap,Vc=new WeakMap,Mf=new WeakMap;function PR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&V0.set(n,t)}).catch(()=>{}),Mf.set(e,t),e}function CR(t){if(nd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});nd.set(t,e)}let rd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||L0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kR(t){rd=t(rd)}function NR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lc(this),e,...n);return L0.set(r,e.sort?e.sort():[e]),Yn(r)}:RR().includes(t)?function(...e){return t.apply(Lc(this),e),Yn(V0.get(this))}:function(...e){return Yn(t.apply(Lc(this),e))}}function xR(t){return typeof t=="function"?NR(t):(t instanceof IDBTransaction&&CR(t),SR(t,AR())?new Proxy(t,rd):t)}function Yn(t){if(t instanceof IDBRequest)return PR(t);if(Vc.has(t))return Vc.get(t);const e=xR(t);return e!==t&&(Vc.set(t,e),Mf.set(e,t)),e}const Lc=t=>Mf.get(t);function M0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yn(o.result),l.oldVersion,l.newVersion,Yn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const DR=["get","getKey","getAll","getAllKeys","count"],OR=["put","add","delete","clear"],Mc=new Map;function wg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=OR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Mc.set(e,s),s}kR(t=>({...t,get:(e,n,r)=>wg(e,n)||t.get(e,n,r),has:(e,n)=>!!wg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const id="@firebase/app",Eg="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new pu("@firebase/app"),MR="@firebase/app-compat",bR="@firebase/analytics-compat",FR="@firebase/analytics",UR="@firebase/app-check-compat",$R="@firebase/app-check",jR="@firebase/auth",BR="@firebase/auth-compat",zR="@firebase/database",qR="@firebase/database-compat",WR="@firebase/functions",HR="@firebase/functions-compat",KR="@firebase/installations",GR="@firebase/installations-compat",QR="@firebase/messaging",YR="@firebase/messaging-compat",XR="@firebase/performance",JR="@firebase/performance-compat",ZR="@firebase/remote-config",eP="@firebase/remote-config-compat",tP="@firebase/storage",nP="@firebase/storage-compat",rP="@firebase/firestore",iP="@firebase/firestore-compat",sP="firebase",oP="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="[DEFAULT]",aP={[id]:"fire-core",[MR]:"fire-core-compat",[FR]:"fire-analytics",[bR]:"fire-analytics-compat",[$R]:"fire-app-check",[UR]:"fire-app-check-compat",[jR]:"fire-auth",[BR]:"fire-auth-compat",[zR]:"fire-rtdb",[qR]:"fire-rtdb-compat",[WR]:"fire-fn",[HR]:"fire-fn-compat",[KR]:"fire-iid",[GR]:"fire-iid-compat",[QR]:"fire-fcm",[YR]:"fire-fcm-compat",[XR]:"fire-perf",[JR]:"fire-perf-compat",[ZR]:"fire-rc",[eP]:"fire-rc-compat",[tP]:"fire-gcs",[nP]:"fire-gcs-compat",[rP]:"fire-fst",[iP]:"fire-fst-compat","fire-js":"fire-js",[sP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Map,lP=new Map,od=new Map;function Ig(t,e){try{t.container.addComponent(e)}catch(n){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function en(t){const e=t.name;if(od.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;od.set(e,t);for(const n of Al.values())Ig(n,t);for(const n of lP.values())Ig(n,t);return!0}function Hr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new Wr("app","Firebase",uP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=oP;function b0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Xn.create("bad-app-name",{appName:String(i)});if(n||(n=k0()),!n)throw Xn.create("no-options");const s=Al.get(i);if(s){if(ho(n,s.options)&&ho(r,s.config))return s;throw Xn.create("duplicate-app",{appName:i})}const o=new vR(i);for(const l of od.values())o.addComponent(l);const a=new cP(n,r,o);return Al.set(i,a),a}function bf(t=sd){const e=Al.get(t);if(!e&&t===sd&&k0())return b0();if(!e)throw Xn.create("no-app",{appName:t});return e}function Tt(t,e,n){var r;let i=(r=aP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(a.join(" "));return}en(new Vt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="firebase-heartbeat-database",dP=1,fo="firebase-heartbeat-store";let bc=null;function F0(){return bc||(bc=M0(hP,dP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),bc}async function fP(t){try{const n=(await F0()).transaction(fo),r=await n.objectStore(fo).get(U0(t));return await n.done,r}catch(e){if(e instanceof Ft)Or.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Or.warn(n.message)}}}async function Tg(t,e){try{const r=(await F0()).transaction(fo,"readwrite");await r.objectStore(fo).put(e,U0(t)),await r.done}catch(n){if(n instanceof Ft)Or.warn(n.message);else{const r=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Or.warn(r.message)}}}function U0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=1024,mP=30*24*60*60*1e3;class gP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _P(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sg();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=mP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sg(),{heartbeatsToSend:r,unsentEntries:i}=yP(this._heartbeatsCache.heartbeats),s=Sl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Sg(){return new Date().toISOString().substring(0,10)}function yP(t,e=pP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ag(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ag(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _P{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return D0()?O0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ag(t){return Sl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t){en(new Vt("platform-logger",e=>new VR(e),"PRIVATE")),en(new Vt("heartbeat",e=>new gP(e),"PRIVATE")),Tt(id,Eg,t),Tt(id,Eg,"esm2017"),Tt("fire-js","")}vP("");function Ff(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wP=$0,j0=new Wr("auth","Firebase",$0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new pu("@firebase/auth");function EP(t,...e){Rl.logLevel<=H.WARN&&Rl.warn(`Auth (${Xi}): ${t}`,...e)}function za(t,...e){Rl.logLevel<=H.ERROR&&Rl.error(`Auth (${Xi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw Uf(t,...e)}function Qt(t,...e){return Uf(t,...e)}function B0(t,e,n){const r=Object.assign(Object.assign({},wP()),{[e]:n});return new Wr("auth","Firebase",r).create(e,{appName:t.name})}function pn(t){return B0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return j0.create(t,...e)}function M(t,e,...n){if(!t)throw Uf(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw za(e),new Error(e)}function vn(t,e){t||an(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IP(){return Rg()==="http:"||Rg()==="https:"}function Rg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IP()||x0()||"connection"in navigator)?navigator.onLine:!0}function SP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=ZA()||tR()}get(){return TP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=new bo(3e4,6e4);function lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rn(t,e,n,r,i={}){return q0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Mo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),z0.fetch()(W0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function q0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AP),e);try{const i=new CP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ea(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ea(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ea(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw B0(t,c,u);Lt(t,c)}}catch(i){if(i instanceof Ft)throw i;Lt(t,"network-request-failed",{message:String(i)})}}async function Fo(t,e,n,r,i={}){const s=await Rn(t,e,n,r,i);return"mfaPendingCredential"in s&&Lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function W0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$f(t.config,i):`${t.config.apiScheme}://${i}`}function PP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),RP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qt(t,e,r);return i.customData._tokenResponse=n,i}function Pg(t){return t!==void 0&&t.enterprise!==void 0}class kP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return PP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function NP(t,e){return Rn(t,"GET","/v2/recaptchaConfig",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e){return Rn(t,"POST","/v1/accounts:delete",e)}async function H0(t,e){return Rn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DP(t,e=!1){const n=de(t),r=await n.getIdToken(e),i=jf(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Us(Fc(i.auth_time)),issuedAtTime:Us(Fc(i.iat)),expirationTime:Us(Fc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fc(t){return Number(t)*1e3}function jf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return za("JWT malformed, contained fewer than 3 sections"),null;try{const i=P0(n);return i?JSON.parse(i):(za("Failed to decode base64 JWT payload"),null)}catch(i){return za("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Cg(t){const e=jf(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ft&&OP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await bi(t,H0(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?K0(s.providerUserInfo):[],a=MP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ld(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function LP(t){const e=de(t);await Pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function K0(t){return t.map(e=>{var{providerId:n}=e,r=Ff(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bP(t,e){const n=await q0(t,{},async()=>{const r=Mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=W0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",z0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FP(t,e){return Rn(t,"POST","/v2/accounts:revokeToken",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=Cg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ti;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ti,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ff(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ld(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await bi(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DP(this,e)}reload(){return LP(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(pn(this.auth));const e=await this.getIdToken();return await bi(this,xP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:R,providerData:C,stsTokenManager:k}=n;M(g&&k,e,"internal-error");const V=Ti.fromJSON(this.name,k);M(typeof g=="string",e,"internal-error"),Cn(h,e.name),Cn(d,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof R=="boolean",e,"internal-error"),Cn(m,e.name),Cn(v,e.name),Cn(_,e.name),Cn(w,e.name),Cn(p,e.name),Cn(f,e.name);const Y=new ln({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:R,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:V,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(Y.providerData=C.map(U=>Object.assign({},U))),w&&(Y._redirectEventId=w),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ti;i.updateFromServerResponse(n);const s=new ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?K0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ti;a.updateFromIdToken(r);const l=new ln({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ld(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=new Map;function un(t){vn(t instanceof Function,"Expected a class definition");let e=kg.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}G0.type="NONE";const Ng=G0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t,e,n){return`firebase:${t}:${e}:${n}`}class Si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qa(this.userKey,i.apiKey,s),this.fullPersistenceKey=qa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Si(un(Ng),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||un(Ng);const o=qa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ln._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Si(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Si(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(X0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Q0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Z0(e))return"Blackberry";if(ew(e))return"Webos";if(Bf(e))return"Safari";if((e.includes("chrome/")||Y0(e))&&!e.includes("edge/"))return"Chrome";if(J0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Q0(t=be()){return/firefox\//i.test(t)}function Bf(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y0(t=be()){return/crios\//i.test(t)}function X0(t=be()){return/iemobile/i.test(t)}function J0(t=be()){return/android/i.test(t)}function Z0(t=be()){return/blackberry/i.test(t)}function ew(t=be()){return/webos/i.test(t)}function mu(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UP(t=be()){var e;return mu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $P(){return nR()&&document.documentMode===10}function tw(t=be()){return mu(t)||J0(t)||ew(t)||Z0(t)||/windows phone/i.test(t)||X0(t)}function jP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t,e=[]){let n;switch(t){case"Browser":n=xg(be());break;case"Worker":n=`${xg(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,e={}){return Rn(t,"GET","/v2/passwordPolicy",lr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=6;class WP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dg(this),this.idTokenSubscription=new Dg(this),this.beforeStateQueue=new BP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Si.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await H0(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qt(this.app))return Promise.reject(pn(this));const n=e?de(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qt(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zP(this),n=new WP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Si.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&EP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kr(t){return de(t)}class Dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=uR(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KP(t){gu=t}function rw(t){return gu.loadJS(t)}function GP(){return gu.recaptchaEnterpriseScript}function QP(){return gu.gapiScript}function YP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const XP="recaptcha-enterprise",JP="NO_RECAPTCHA";class ZP{constructor(e){this.type=XP,this.auth=Kr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{NP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new kP(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Pg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(JP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Pg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=GP();l.length!==0&&(l+=a),rw(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Og(t,e,n,r=!1){const i=new ZP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ud(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Og(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Og(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t,e){const n=Hr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ho(s,e??{}))return i;Lt(i,"already-initialized")}return n.initialize({options:e})}function tC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nC(t,e,n){const r=Kr(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=iw(e),{host:o,port:a}=rC(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),iC()}function iw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rC(t){const e=iw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vg(o)}}}function Vg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function sC(t,e){return Rn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(t,e){return Fo(t,"POST","/v1/accounts:signInWithPassword",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e){return Fo(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}async function lC(t,e){return Fo(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends zf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new po(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new po(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ud(e,n,"signInWithPassword",oC);case"emailLink":return aC(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ud(e,r,"signUpPassword",sC);case"emailLink":return lC(e,{idToken:n,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e){return Fo(t,"POST","/v1/accounts:signInWithIdp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="http://localhost";class Vr extends zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ff(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:uC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hC(t){const e=Ts(Ss(t)).link,n=e?Ts(Ss(e)).deep_link_id:null,r=Ts(Ss(t)).deep_link_id;return(r?Ts(Ss(r)).link:null)||r||n||e||t}class qf{constructor(e){var n,r,i,s,o,a;const l=Ts(Ss(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=cC((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hC(e);try{return new qf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.providerId=Ji.PROVIDER_ID}static credential(e,n){return po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qf.parseLink(n);return M(r,"argument-error"),po._fromEmailAndCode(e,r.code,r.tenantId)}}Ji.PROVIDER_ID="password";Ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends sw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Uo{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Uo{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Uo{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(t,e){return Fo(t,"POST","/v1/accounts:signUp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ln._fromIdTokenResponse(e,r,i),o=Lg(r);return new Lr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lg(r);return new Lr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Ft{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Cl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Cl(e,n,r,i)}}function ow(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Cl._fromErrorAndOperation(t,s,e,r):s})}async function fC(t,e,n=!1){const r=await bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t,e,n=!1){const{auth:r}=t;if(qt(r.app))return Promise.reject(pn(r));const i="reauthenticate";try{const s=await bi(t,ow(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=jf(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Lr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(t,e,n=!1){if(qt(t.app))return Promise.reject(pn(t));const r="signIn",i=await ow(t,r,e),s=await Lr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function mC(t,e){return aw(Kr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw(t){const e=Kr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gC(t,e,n){if(qt(t.app))return Promise.reject(pn(t));const r=Kr(t),o=await ud(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dC).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&lw(t),l}),a=await Lr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function yC(t,e,n){return qt(t.app)?Promise.reject(pn(t)):mC(de(t),Ji.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e){return Rn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=de(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await bi(r,_C(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function wC(t,e,n,r){return de(t).onIdTokenChanged(e,n,r)}function EC(t,e,n){return de(t).beforeAuthStateChanged(e,n)}function IC(t,e,n,r){return de(t).onAuthStateChanged(e,n,r)}function TC(t){return de(t).signOut()}const kl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kl,"1"),this.storage.removeItem(kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(){const t=be();return Bf(t)||mu(t)}const AC=1e3,RC=10;class cw extends uw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SC()&&jP(),this.fallbackToPolling=tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$P()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},AC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cw.type="LOCAL";const PC=cw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw extends uw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hw.type="SESSION";const dw=hw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await CC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Wf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function NC(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function xC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OC(){return fw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="firebaseLocalStorageDb",VC=1,Nl="firebaseLocalStorage",mw="fbase_key";class $o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _u(t,e){return t.transaction([Nl],e?"readwrite":"readonly").objectStore(Nl)}function LC(){const t=indexedDB.deleteDatabase(pw);return new $o(t).toPromise()}function cd(){const t=indexedDB.open(pw,VC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nl,{keyPath:mw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nl)?e(r):(r.close(),await LC(),e(await cd()))})})}async function Mg(t,e,n){const r=_u(t,!0).put({[mw]:e,value:n});return new $o(r).toPromise()}async function MC(t,e){const n=_u(t,!1).get(e),r=await new $o(n).toPromise();return r===void 0?null:r.value}function bg(t,e){const n=_u(t,!0).delete(e);return new $o(n).toPromise()}const bC=800,FC=3;class gw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yu._getInstance(OC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xC(),!this.activeServiceWorker)return;this.sender=new kC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cd();return await Mg(e,kl,"1"),await bg(e,kl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>MC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_u(i,!1).getAll();return new $o(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gw.type="LOCAL";const UC=gw;new bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t,e){return e?un(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends zf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jC(t){return aw(t.auth,new Hf(t),t.bypassAuthState)}function BC(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),pC(n,new Hf(t),t.bypassAuthState)}async function zC(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),fC(n,new Hf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jC;case"linkViaPopup":case"linkViaRedirect":return zC;case"reauthViaPopup":case"reauthViaRedirect":return BC;default:Lt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=new bo(2e3,1e4);class mi extends yw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mi.currentPopupAction&&mi.currentPopupAction.cancel(),mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qC.get())};e()}}mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="pendingRedirect",Wa=new Map;class HC extends yw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wa.get(this.auth._key());if(!e){try{const r=await KC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wa.set(this.auth._key(),e)}return this.bypassAuthState||Wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KC(t,e){const n=YC(e),r=QC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function GC(t,e){Wa.set(t._key(),e)}function QC(t){return un(t._redirectPersistence)}function YC(t){return qa(WC,t.config.apiKey,t.name)}async function XC(t,e,n=!1){if(qt(t.app))return Promise.reject(pn(t));const r=Kr(t),i=$C(r,e),o=await new HC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=10*60*1e3;class ZC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ek(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_w(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fg(e))}saveEventToCache(e){this.cachedEventUids.add(Fg(e)),this.lastProcessedEventTime=Date.now()}}function Fg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _w({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ek(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _w(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(t,e={}){return Rn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rk=/^https?/;async function ik(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tk(t);for(const n of e)try{if(sk(n))return}catch{}Lt(t,"unauthorized-domain")}function sk(t){const e=ad(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rk.test(n))return!1;if(nk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=new bo(3e4,6e4);function Ug(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ak(t){return new Promise((e,n)=>{var r,i,s;function o(){Ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ug(),n(Qt(t,"network-request-failed"))},timeout:ok.get()})}if(!((i=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yt().gapi)===null||s===void 0)&&s.load)o();else{const a=YP("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},rw(`${QP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ha=null,e})}let Ha=null;function lk(t){return Ha=Ha||ak(t),Ha}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=new bo(5e3,15e3),ck="__/auth/iframe",hk="emulator/auth/iframe",dk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pk(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$f(e,hk):`https://${t.config.authDomain}/${ck}`,r={apiKey:e.apiKey,appName:t.name,v:Xi},i=fk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Mo(r).slice(1)}`}async function mk(t){const e=await lk(t),n=Yt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:pk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Yt().setTimeout(()=>{s(o)},uk.get());function l(){Yt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yk=500,_k=600,vk="_blank",wk="http://localhost";class $g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ek(t,e,n,r=yk,i=_k){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=be().toLowerCase();n&&(a=Y0(u)?vk:n),Q0(u)&&(e=e||wk,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(UP(u)&&a!=="_self")return Ik(e||"",a),new $g(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new $g(h)}function Ik(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk="__/auth/handler",Sk="emulator/auth/handler",Ak=encodeURIComponent("fac");async function jg(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xi,eventId:i};if(e instanceof sw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries({}))o[c]=h}if(e instanceof Uo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Ak}=${encodeURIComponent(l)}`:"";return`${Rk(t)}?${Mo(a).slice(1)}${u}`}function Rk({config:t}){return t.emulator?$f(t,Sk):`https://${t.authDomain}/${Tk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="webStorageSupport";class Pk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dw,this._completeRedirectFn=XC,this._overrideRedirectResult=GC}async _openPopup(e,n,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await jg(e,n,r,ad(),i);return Ek(e,o,Wf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jg(e,n,r,ad(),i);return NC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mk(e),r=new ZC(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uc,{type:Uc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Uc];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ik(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tw()||Bf()||mu()}}const Ck=Pk;var Bg="@firebase/auth",zg="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xk(t){en(new Vt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nw(t)},u=new HP(r,i,s,l);return tC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),en(new Vt("auth-internal",e=>{const n=Kr(e.getProvider("auth").getImmediate());return(r=>new kk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(Bg,zg,Nk(t)),Tt(Bg,zg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=5*60,Ok=N0("authIdTokenMaxAge")||Dk;let qg=null;const Vk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ok)return;const i=n==null?void 0:n.token;qg!==i&&(qg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Lk(t=bf()){const e=Hr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eC(t,{popupRedirectResolver:Ck,persistence:[UC,PC,dw]}),r=N0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Vk(s.toString());EC(n,o,()=>o(n.currentUser)),wC(n,a=>o(a))}}const i=C0("auth");return i&&nC(n,`http://${i}`),n}function Mk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}KP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Mk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xk("Browser");const vu=()=>{const[t,e]=I.useState(null),[n,r]=I.useState(null),[i,s]=I.useState(!1),o=Lk(),a=async c=>{r(!0);try{const{user:h}=await gC(o,c.email,c.password);return await vC(h,{displayName:c.displayName}),h}catch(h){console.log(h.message),console.log(typeof h.message);let d;h.message.includes("Password")?d="A senha precisa conter pelo menos 6 caracteres.":h.message.includes("email-already")?d="E-mail já cadastrado.":d="Ocorreu um erro, por favor tenta mais tarde.",e(d)}r(!1)},l=()=>{TC(o)},u=async c=>{r(!0),e(!1);try{await yC(o,c.email,c.password)}catch(h){console.log(h.message),console.log(typeof h.message),console.log(h.message.includes("user-not"));let d;h.message.includes("user-not-found")?d="Usuário não encontrado.":h.message.includes("wrong-password")?d="Senha incorreta.":d="Ocorreu um erro, por favor tenta mais tarde.",console.log(d),e(d)}console.log(t),r(!1)};return I.useEffect(()=>()=>s(!0),[]),{auth:o,createUser:a,error:t,logout:l,login:u,loading:n}},bk="_footer_xo5k9_1",Fk={footer:bk},Uk=()=>(console.log("Footer component rendered"),y.jsxs("footer",{className:Fk.footer,children:[y.jsx("h3",{children:"O melhor lugar para adquirir sua nova casa!"}),y.jsx("p",{children:" New Home © 2024 "})]})),$k="_brand_2b24c_23",jk="_links_list_2b24c_41",Bk="_hamburger_2b24c_107",zk="_show_2b24c_159",yt={brand:$k,links_list:jk,hamburger:Bk,show:zk},vw=I.createContext();function qk({children:t,value:e}){return y.jsx(vw.Provider,{value:e,children:t})}function wu(){return I.useContext(vw)}var ww={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Wg=hn.createContext&&hn.createContext(ww),Wk=["attr","size","title"];function Hk(t,e){if(t==null)return{};var n=Kk(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Kk(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function xl(){return xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xl.apply(this,arguments)}function Hg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Dl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hg(Object(n),!0).forEach(function(r){Gk(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gk(t,e,n){return e=Qk(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qk(t){var e=Yk(t,"string");return typeof e=="symbol"?e:e+""}function Yk(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ew(t){return t&&t.map((e,n)=>hn.createElement(e.tag,Dl({key:n},e.attr),Ew(e.child)))}function Xk(t){return e=>hn.createElement(Jk,xl({attr:Dl({},t.attr)},e),Ew(t.child))}function Jk(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=Hk(t,Wk),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),hn.createElement("svg",xl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Dl(Dl({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&hn.createElement("title",null,s),t.children)};return Wg!==void 0?hn.createElement(Wg.Consumer,null,n=>e(n)):e(ww)}function Zk(t){return Xk({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}const eN=()=>{const{user:t}=wu(),{logout:e}=vu(),[n,r]=I.useState(!1);return y.jsxs("nav",{className:yt.navbar,children:[y.jsxs(pr,{to:"/",className:yt.brand,children:["New ",y.jsx("span",{children:" Home"})]}),y.jsx(Zk,{className:yt.hamburger,onClick:()=>r(!n)}),y.jsxs("ul",{className:`${yt.links_list} ${n?yt.show:""}`,children:[y.jsx("li",{children:y.jsx(pr,{to:"/",className:yt.link,children:"Home"})}),!t&&y.jsxs(y.Fragment,{children:[y.jsx("li",{children:y.jsx(pr,{to:"/login",className:yt.link,children:"Logar"})}),y.jsx("li",{children:y.jsx(pr,{to:"/register",className:yt.link,children:"Registrar"})})]}),t&&y.jsxs(y.Fragment,{children:[y.jsx("li",{children:y.jsx(pr,{to:"/posts/create",className:yt.link,children:"Adicionar"})}),y.jsx("li",{children:y.jsx(pr,{to:"/dashboard",className:yt.link,children:"Editar"})})]}),y.jsx("li",{children:y.jsx(pr,{to:"/about",className:yt.link,children:"Sobre"})}),t&&y.jsx("li",{children:y.jsx("button",{onClick:e,className:yt.logoutButton,children:"Sair"})})]})]})},tN="_home_ae6kc_1",nN="_search_form_ae6kc_19",rN="_noposts_ae6kc_55",iN="_styles_ae6kc_79",$c={home:tN,search_form:nN,noposts:rN,styles:iN,"post-list":"_post-list_ae6kc_97"};var sN="firebase",oN="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt(sN,oN,"app");const Iw="@firebase/installations",Kf="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=1e4,Sw=`w:${Kf}`,Aw="FIS_v2",aN="https://firebaseinstallations.googleapis.com/v1",lN=60*60*1e3,uN="installations",cN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Mr=new Wr(uN,cN,hN);function Rw(t){return t instanceof Ft&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw({projectId:t}){return`${aN}/projects/${t}/installations`}function Cw(t){return{token:t.token,requestStatus:2,expiresIn:fN(t.expiresIn),creationTime:Date.now()}}async function kw(t,e){const r=(await e.json()).error;return Mr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Nw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function dN(t,{refreshToken:e}){const n=Nw(t);return n.append("Authorization",pN(e)),n}async function xw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function fN(t){return Number(t.replace("s","000"))}function pN(t){return`${Aw} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Pw(t),i=Nw(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Aw,appId:t.appId,sdkVersion:Sw},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await xw(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Cw(u.authToken)}}else throw await kw("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=/^[cdef][\w-]{21}$/,hd="";function _N(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=vN(t);return yN.test(n)?n:hd}catch{return hd}}function vN(t){return gN(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=new Map;function Vw(t,e){const n=Eu(t);Lw(n,e),wN(n,e)}function Lw(t,e){const n=Ow.get(t);if(n)for(const r of n)r(e)}function wN(t,e){const n=EN();n&&n.postMessage({key:t,fid:e}),IN()}let Er=null;function EN(){return!Er&&"BroadcastChannel"in self&&(Er=new BroadcastChannel("[Firebase] FID Change"),Er.onmessage=t=>{Lw(t.data.key,t.data.fid)}),Er}function IN(){Ow.size===0&&Er&&(Er.close(),Er=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN="firebase-installations-database",SN=1,br="firebase-installations-store";let jc=null;function Gf(){return jc||(jc=M0(TN,SN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(br)}}})),jc}async function Ol(t,e){const n=Eu(t),i=(await Gf()).transaction(br,"readwrite"),s=i.objectStore(br),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Vw(t,e.fid),e}async function Mw(t){const e=Eu(t),r=(await Gf()).transaction(br,"readwrite");await r.objectStore(br).delete(e),await r.done}async function Iu(t,e){const n=Eu(t),i=(await Gf()).transaction(br,"readwrite"),s=i.objectStore(br),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Vw(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qf(t){let e;const n=await Iu(t.appConfig,r=>{const i=AN(r),s=RN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===hd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function AN(t){const e=t||{fid:_N(),registrationStatus:0};return bw(e)}function RN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Mr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=PN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CN(t)}:{installationEntry:e}}async function PN(t,e){try{const n=await mN(t,e);return Ol(t.appConfig,n)}catch(n){throw Rw(n)&&n.customData.serverCode===409?await Mw(t.appConfig):await Ol(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function CN(t){let e=await Kg(t.appConfig);for(;e.registrationStatus===1;)await Dw(100),e=await Kg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Qf(t);return r||n}return e}function Kg(t){return Iu(t,e=>{if(!e)throw Mr.create("installation-not-found");return bw(e)})}function bw(t){return kN(t)?{fid:t.fid,registrationStatus:0}:t}function kN(t){return t.registrationStatus===1&&t.registrationTime+Tw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN({appConfig:t,heartbeatServiceProvider:e},n){const r=xN(t,n),i=dN(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Sw,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await xw(()=>fetch(r,a));if(l.ok){const u=await l.json();return Cw(u)}else throw await kw("Generate Auth Token",l)}function xN(t,{fid:e}){return`${Pw(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yf(t,e=!1){let n;const r=await Iu(t.appConfig,s=>{if(!Fw(s))throw Mr.create("not-registered");const o=s.authToken;if(!e&&VN(o))return s;if(o.requestStatus===1)return n=DN(t,e),s;{if(!navigator.onLine)throw Mr.create("app-offline");const a=MN(s);return n=ON(t,a),a}});return n?await n:r.authToken}async function DN(t,e){let n=await Gg(t.appConfig);for(;n.authToken.requestStatus===1;)await Dw(100),n=await Gg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Yf(t,e):r}function Gg(t){return Iu(t,e=>{if(!Fw(e))throw Mr.create("not-registered");const n=e.authToken;return bN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ON(t,e){try{const n=await NN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ol(t.appConfig,r),n}catch(n){if(Rw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Mw(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ol(t.appConfig,r)}throw n}}function Fw(t){return t!==void 0&&t.registrationStatus===2}function VN(t){return t.requestStatus===2&&!LN(t)}function LN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+lN}function MN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function bN(t){return t.requestStatus===1&&t.requestTime+Tw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(t){const e=t,{installationEntry:n,registrationPromise:r}=await Qf(e);return r?r.catch(console.error):Yf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(t,e=!1){const n=t;return await $N(n),(await Yf(n,e)).token}async function $N(t){const{registrationPromise:e}=await Qf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(t){if(!t||!t.options)throw Bc("App Configuration");if(!t.name)throw Bc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Bc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Bc(t){return Mr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="installations",BN="installations-internal",zN=t=>{const e=t.getProvider("app").getImmediate(),n=jN(e),r=Hr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},qN=t=>{const e=t.getProvider("app").getImmediate(),n=Hr(e,Uw).getImmediate();return{getId:()=>FN(n),getToken:i=>UN(n,i)}};function WN(){en(new Vt(Uw,zN,"PUBLIC")),en(new Vt(BN,qN,"PRIVATE"))}WN();Tt(Iw,Kf);Tt(Iw,Kf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="analytics",HN="firebase_id",KN="origin",GN=60*1e3,QN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new pu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dt=new Wr("analytics","Analytics",YN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t){if(!t.startsWith(Xf)){const e=dt.create("invalid-gtag-resource",{gtagURL:t});return ot.warn(e.message),""}return t}function $w(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function JN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ZN(t,e){const n=JN("firebase-js-sdk-policy",{createScriptURL:XN}),r=document.createElement("script"),i=`${Xf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ex(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function tx(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await $w(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){ot.error(a)}t("config",i,s)}async function nx(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await $w(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){ot.error(s)}}function rx(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await nx(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await tx(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){ot.error(a)}}return i}function ix(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=rx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function sx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Xf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=30,ax=1e3;class lx{constructor(e={},n=ax){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jw=new lx;function ux(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function cx(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:ux(r)},s=QN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw dt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function hx(t,e=jw,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw dt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw dt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new px;return setTimeout(async()=>{a.abort()},GN),Bw({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Bw(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=jw){var s;const{appId:o,measurementId:a}=t;try{await dx(r,e)}catch(l){if(a)return ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await cx(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!fx(u)){if(i.deleteThrottleMetadata(o),a)return ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?yg(n,i.intervalMillis,ox):yg(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),ot.debug(`Calling attemptFetch again in ${c} millis`),Bw(t,h,r,i)}}function dx(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fx(t){if(!(t instanceof Ft)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class px{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function mx(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gx(){if(D0())try{await O0()}catch(t){return ot.warn(dt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ot.warn(dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yx(t,e,n,r,i,s,o){var a;const l=hx(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>ot.error(m)),e.push(l);const u=gx().then(m=>{if(m)return r.getId()}),[c,h]=await Promise.all([l,u]);sx(s)||ZN(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[KN]="firebase",d.update=!0,h!=null&&(d[HN]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.app=e}_delete(){return delete $s[this.app.options.appId],Promise.resolve()}}let $s={},Qg=[];const Yg={};let zc="dataLayer",vx="gtag",Xg,zw,Jg=!1;function wx(){const t=[];if(x0()&&t.push("This is a browser extension environment."),iR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=dt.create("invalid-analytics-context",{errorInfo:e});ot.warn(n.message)}}function Ex(t,e,n){wx();const r=t.options.appId;if(!r)throw dt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dt.create("no-api-key");if($s[r]!=null)throw dt.create("already-exists",{id:r});if(!Jg){ex(zc);const{wrappedGtag:s,gtagCore:o}=ix($s,Qg,Yg,zc,vx);zw=s,Xg=o,Jg=!0}return $s[r]=yx(t,Qg,Yg,e,Xg,zc,n),new _x(t)}function Ix(t=bf()){t=de(t);const e=Hr(t,Vl);return e.isInitialized()?e.getImmediate():Tx(t)}function Tx(t,e={}){const n=Hr(t,Vl);if(n.isInitialized()){const i=n.getImmediate();if(ho(e,n.getOptions()))return i;throw dt.create("already-initialized")}return n.initialize({options:e})}function Sx(t,e,n,r){t=de(t),mx(zw,$s[t.app.options.appId],e,n,r).catch(i=>ot.error(i))}const Zg="@firebase/analytics",ey="0.10.2";function Ax(){en(new Vt(Vl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Ex(r,i,n)},"PUBLIC")),en(new Vt("analytics-internal",t,"PRIVATE")),Tt(Zg,ey),Tt(Zg,ey,"esm2017");function t(e){try{const n=e.getProvider(Vl).getImmediate();return{logEvent:(r,i,s)=>Sx(n,r,i,s)}}catch(n){throw dt.create("interop-component-reg-failed",{reason:n})}}}Ax();var Rx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Jf=Jf||{},F=Rx||self;function Tu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Su(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Px(t){return Object.prototype.hasOwnProperty.call(t,qc)&&t[qc]||(t[qc]=++Cx)}var qc="closure_uid_"+(1e9*Math.random()>>>0),Cx=0;function kx(t,e,n){return t.call.apply(t.bind,arguments)}function Nx(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=kx:qe=Nx,qe.apply(null,arguments)}function Ia(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ce(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ur(){this.s=this.s,this.o=this.o}var xx=0;ur.prototype.s=!1;ur.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),xx!=0)&&Px(this)};ur.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ty(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Tu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function We(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var Dx=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};F.addEventListener("test",n,e),F.removeEventListener("test",n,e)}catch{}return t}();function mo(t){return/^[\s\xa0]*$/.test(t)}function Au(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function zt(t){return Au().indexOf(t)!=-1}function ep(t){return ep[" "](t),t}ep[" "]=function(){};function Ox(t,e){var n=RD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Vx=zt("Opera"),Fi=zt("Trident")||zt("MSIE"),Ww=zt("Edge"),dd=Ww||Fi,Hw=zt("Gecko")&&!(Au().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge"))&&!(zt("Trident")||zt("MSIE"))&&!zt("Edge"),Lx=Au().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge");function Kw(){var t=F.document;return t?t.documentMode:void 0}var fd;e:{var Wc="",Hc=function(){var t=Au();if(Hw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ww)return/Edge\/([\d\.]+)/.exec(t);if(Fi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Lx)return/WebKit\/(\S+)/.exec(t);if(Vx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hc&&(Wc=Hc?Hc[1]:""),Fi){var Kc=Kw();if(Kc!=null&&Kc>parseFloat(Wc)){fd=String(Kc);break e}}fd=Wc}var pd;if(F.document&&Fi){var ny=Kw();pd=ny||parseInt(fd,10)||void 0}else pd=void 0;var Mx=pd;function go(t,e){if(We.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hw){e:{try{ep(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&go.$.h.call(this)}}Ce(go,We);var bx={2:"touch",3:"pen",4:"mouse"};go.prototype.h=function(){go.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ru="closure_listenable_"+(1e6*Math.random()|0),Fx=0;function Ux(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Fx,this.fa=this.ia=!1}function Pu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function $x(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Gw(t){const e={};for(const n in t)e[n]=t[n];return e}const ry="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<ry.length;s++)n=ry[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Cu(t){this.src=t,this.g={},this.h=0}Cu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Ux(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function md(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=qw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Pu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function gd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var np="closure_lm_"+(1e6*Math.random()|0),Gc={};function Yw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Yw(t,e[s],n,r,i);return null}return n=Zw(n),t&&t[Ru]?t.O(e,n,Su(r)?!!r.capture:!!r,i):jx(t,e,n,!1,r,i)}function jx(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Su(i)?!!i.capture:!!i,a=ip(t);if(a||(t[np]=a=new Cu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Bx(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Dx||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Jw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Bx(){function t(n){return e.call(t.src,t.listener,n)}const e=zx;return t}function Xw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Xw(t,e[s],n,r,i);else r=Su(r)?!!r.capture:!!r,n=Zw(n),t&&t[Ru]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gd(s,n,r,i),-1<n&&(Pu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ip(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gd(e,n,r,i)),(n=-1<t?e[t]:null)&&rp(n))}function rp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ru])md(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Jw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ip(e))?(md(n,t),n.h==0&&(n.src=null,e[np]=null)):Pu(t)}}}function Jw(t){return t in Gc?Gc[t]:Gc[t]="on"+t}function zx(t,e){if(t.fa)t=!0;else{e=new go(e,this);var n=t.listener,r=t.la||t.src;t.ia&&rp(t),t=n.call(r,e)}return t}function ip(t){return t=t[np],t instanceof Cu?t:null}var Qc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zw(t){return typeof t=="function"?t:(t[Qc]||(t[Qc]=function(e){return t.handleEvent(e)}),t[Qc])}function Pe(){ur.call(this),this.i=new Cu(this),this.S=this,this.J=null}Ce(Pe,ur);Pe.prototype[Ru]=!0;Pe.prototype.removeEventListener=function(t,e,n,r){Xw(this,t,e,n,r)};function Ve(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new We(e,t);else if(e instanceof We)e.target=e.target||t;else{var i=e;e=new We(r,t),Qw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ta(o,r,!0,e)&&i}if(o=e.g=t,i=Ta(o,r,!0,e)&&i,i=Ta(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ta(o,r,!1,e)&&i}Pe.prototype.N=function(){if(Pe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Pu(n[r]);delete t.g[e],t.h--}}this.J=null};Pe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Pe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ta(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&md(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var sp=F.JSON.stringify;class qx{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Wx(){var t=op;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Hx{constructor(){this.h=this.g=null}add(e,n){const r=eE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var eE=new qx(()=>new Kx,t=>t.reset());class Kx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Gx(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Qx(t){F.setTimeout(()=>{throw t},0)}let yo,_o=!1,op=new Hx,tE=()=>{const t=F.Promise.resolve(void 0);yo=()=>{t.then(Yx)}};var Yx=()=>{for(var t;t=Wx();){try{t.h.call(t.g)}catch(n){Qx(n)}var e=eE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_o=!1};function ku(t,e){Pe.call(this),this.h=t||1,this.g=e||F,this.j=qe(this.qb,this),this.l=Date.now()}Ce(ku,Pe);P=ku.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ve(this,"tick"),this.ga&&(ap(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ap(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){ku.$.N.call(this),ap(this),delete this.g};function lp(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function nE(t){t.g=lp(()=>{t.g=null,t.i&&(t.i=!1,nE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Xx extends ur{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:nE(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vo(t){ur.call(this),this.h=t,this.g={}}Ce(vo,ur);var iy=[];function rE(t,e,n,r){Array.isArray(n)||(n&&(iy[0]=n.toString()),n=iy);for(var i=0;i<n.length;i++){var s=Yw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function iE(t){tp(t.g,function(e,n){this.g.hasOwnProperty(n)&&rp(e)},t),t.g={}}vo.prototype.N=function(){vo.$.N.call(this),iE(this)};vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Nu(){this.g=!0}Nu.prototype.Ea=function(){this.g=!1};function Jx(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Zx(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function gi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tD(t,n)+(r?" "+r:"")})}function eD(t,e){t.info(function(){return"TIMEOUT: "+e})}Nu.prototype.info=function(){};function tD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return sp(n)}catch{return e}}var Gr={},sy=null;function xu(){return sy=sy||new Pe}Gr.Ta="serverreachability";function sE(t){We.call(this,Gr.Ta,t)}Ce(sE,We);function wo(t){const e=xu();Ve(e,new sE(e))}Gr.STAT_EVENT="statevent";function oE(t,e){We.call(this,Gr.STAT_EVENT,t),this.stat=e}Ce(oE,We);function Qe(t){const e=xu();Ve(e,new oE(e,t))}Gr.Ua="timingevent";function aE(t,e){We.call(this,Gr.Ua,t),this.size=e}Ce(aE,We);function jo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var Du={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},lE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function up(){}up.prototype.h=null;function oy(t){return t.h||(t.h=t.i())}function uE(){}var Bo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function cp(){We.call(this,"d")}Ce(cp,We);function hp(){We.call(this,"c")}Ce(hp,We);var yd;function Ou(){}Ce(Ou,up);Ou.prototype.g=function(){return new XMLHttpRequest};Ou.prototype.i=function(){return{}};yd=new Ou;function zo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new vo(this),this.P=nD,t=dd?125:void 0,this.V=new ku(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new cE}function cE(){this.i=null,this.g="",this.h=!1}var nD=45e3,hE={},_d={};P=zo.prototype;P.setTimeout=function(t){this.P=t};function vd(t,e,n){t.L=1,t.A=Lu(wn(e)),t.u=n,t.S=!0,dE(t,null)}function dE(t,e){t.G=Date.now(),qo(t),t.B=wn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),wE(n.i,"t",r),t.o=0,n=t.l.J,t.h=new cE,t.g=jE(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Xx(qe(t.Pa,t,t.g),t.O)),rE(t.U,t.g,"readystatechange",t.nb),e=t.I?Gw(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),wo(),Jx(t.j,t.v,t.B,t.m,t.W,t.u)}P.nb=function(t){t=t.target;const e=this.M;e&&Wt(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const c=Wt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||dd||this.g&&(this.h.h||this.g.ja()||cy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?wo(3):wo(2)),Vu(this);var n=this.g.da();this.ca=n;t:if(fE(this)){var r=cy(this.g);t="";var i=r.length,s=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ir(this),js(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Zx(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mo(a)){var u=a;break t}}u=null}if(n=u)gi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wd(this,n);else{this.i=!1,this.s=3,Qe(12),Ir(this),js(this);break e}}this.S?(pE(this,c,o),dd&&this.i&&c==3&&(rE(this.U,this.V,"tick",this.mb),this.V.start())):(gi(this.j,this.m,o,null),wd(this,o)),c==4&&Ir(this),this.i&&!this.J&&(c==4?bE(this.l,this):(this.i=!1,qo(this)))}else TD(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Qe(12)):(this.s=0,Qe(13)),Ir(this),js(this)}}}catch{}finally{}};function fE(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function pE(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=rD(t,n),i==_d){e==4&&(t.s=4,Qe(14),r=!1),gi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==hE){t.s=4,Qe(15),gi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else gi(t.j,t.m,i,null),wd(t,i);fE(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Qe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),yp(e),e.M=!0,Qe(11))):(gi(t.j,t.m,n,"[Invalid Chunked Response]"),Ir(t),js(t))}P.mb=function(){if(this.g){var t=Wt(this.g),e=this.g.ja();this.o<e.length&&(Vu(this),pE(this,t,e),this.i&&t!=4&&qo(this))}};function rD(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?_d:(n=Number(e.substring(n,r)),isNaN(n)?hE:(r+=1,r+n>e.length?_d:(e=e.slice(r,r+n),t.o=r+n,e)))}P.cancel=function(){this.J=!0,Ir(this)};function qo(t){t.Y=Date.now()+t.P,mE(t,t.P)}function mE(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=jo(qe(t.lb,t),e)}function Vu(t){t.C&&(F.clearTimeout(t.C),t.C=null)}P.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(eD(this.j,this.B),this.L!=2&&(wo(),Qe(17)),Ir(this),this.s=2,js(this)):mE(this,this.Y-t)};function js(t){t.l.H==0||t.J||bE(t.l,t)}function Ir(t){Vu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ap(t.V),iE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function wd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ed(n.i,t))){if(!t.K&&Ed(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)bl(n),Fu(n);else break e;gp(n),Qe(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=jo(qe(n.ib,n),6e3));if(1>=TE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Tr(n,11)}else if((t.K||n.g==t)&&bl(n),!mo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(dp(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ne(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=$E(r,r.J?r.pa:null,r.Y),o.K){SE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Vu(a),qo(a)),r.g=o}else LE(r);0<n.j.length&&Uu(n)}else u[0]!="stop"&&u[0]!="close"||Tr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Tr(n,7):mp(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}wo(4)}catch{}}function iD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Tu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function sD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Tu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function gE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Tu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=sD(t),r=iD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var yE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pr){this.h=t.h,Ll(this,t.j),this.s=t.s,this.g=t.g,Ml(this,t.m),this.l=t.l;var e=t.i,n=new Eo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ay(this,n),this.o=t.o}else t&&(e=String(t).match(yE))?(this.h=!1,Ll(this,e[1]||"",!0),this.s=As(e[2]||""),this.g=As(e[3]||"",!0),Ml(this,e[4]),this.l=As(e[5]||"",!0),ay(this,e[6]||"",!0),this.o=As(e[7]||"")):(this.h=!1,this.i=new Eo(null,this.h))}Pr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rs(e,ly,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Rs(e,ly,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Rs(n,n.charAt(0)=="/"?uD:lD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rs(n,hD)),t.join("")};function wn(t){return new Pr(t)}function Ll(t,e,n){t.j=n?As(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ml(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ay(t,e,n){e instanceof Eo?(t.i=e,dD(t.i,t.h)):(n||(e=Rs(e,cD)),t.i=new Eo(e,t.h))}function ne(t,e,n){t.i.set(e,n)}function Lu(t){return ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function As(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,aD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function aD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ly=/[#\/\?@]/g,lD=/[#\?:]/g,uD=/[#\?]/g,cD=/[#\?@]/g,hD=/#/g;function Eo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function cr(t){t.g||(t.g=new Map,t.h=0,t.i&&oD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Eo.prototype;P.add=function(t,e){cr(this),this.i=null,t=Zi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _E(t,e){cr(t),e=Zi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function vE(t,e){return cr(t),e=Zi(t,e),t.g.has(e)}P.forEach=function(t,e){cr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.ta=function(){cr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.Z=function(t){cr(this);let e=[];if(typeof t=="string")vE(this,t)&&(e=e.concat(this.g.get(Zi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return cr(this),this.i=null,t=Zi(this,t),vE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function wE(t,e,n){_E(t,e),0<n.length&&(t.i=null,t.g.set(Zi(t,e),Zf(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Zi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dD(t,e){e&&!t.j&&(cr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(_E(this,r),wE(this,i,n))},t)),t.j=e}var fD=class{constructor(t,e){this.g=t,this.map=e}};function EE(t){this.l=t||pD,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pD=10;function IE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function TE(t){return t.h?1:t.g?t.g.size:0}function Ed(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function dp(t,e){t.g?t.g.add(e):t.h=e}function SE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}EE.prototype.cancel=function(){if(this.i=AE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function AE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Zf(t.i)}var mD=class{stringify(t){return F.JSON.stringify(t,void 0)}parse(t){return F.JSON.parse(t,void 0)}};function gD(){this.g=new mD}function yD(t,e,n){const r=n||"";try{gE(t,function(i,s){let o=i;Su(i)&&(o=sp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _D(t,e){const n=new Nu;if(F.Image){const r=new Image;r.onload=Ia(Sa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ia(Sa,n,r,"TestLoadImage: error",!1,e),r.onabort=Ia(Sa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ia(Sa,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Sa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Wo(t){this.l=t.ec||null,this.j=t.ob||!1}Ce(Wo,up);Wo.prototype.g=function(){return new Mu(this.l,this.j)};Wo.prototype.i=function(t){return function(){return t}}({});function Mu(t,e){Pe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=fp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ce(Mu,Pe);var fp=0;P=Mu.prototype;P.open=function(t,e){if(this.readyState!=fp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Io(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||F).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ho(this)),this.readyState=fp};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Io(this)),this.g&&(this.readyState=3,Io(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;RE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function RE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ho(this):Io(this),this.readyState==3&&RE(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,Ho(this))};P.Ya=function(t){this.g&&(this.response=t,Ho(this))};P.ka=function(){this.g&&Ho(this)};function Ho(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Io(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Io(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var vD=F.JSON.parse;function fe(t){Pe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=PE,this.L=this.M=!1}Ce(fe,Pe);var PE="",wD=/^https?$/i,ED=["POST","PUT"];P=fe.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():yd.g(),this.C=this.u?oy(this.u):oy(yd),this.g.onreadystatechange=qe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){uy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=qw(ED,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{NE(this),0<this.B&&((this.L=ID(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.ua,this)):this.A=lp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){uy(this,s)}};function ID(t){return Fi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof Jf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ve(this,"timeout"),this.abort(8))};function uy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,CE(t),bu(t)}function CE(t){t.F||(t.F=!0,Ve(t,"complete"),Ve(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ve(this,"complete"),Ve(this,"abort"),bu(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bu(this,!0)),fe.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?kE(this):this.kb())};P.kb=function(){kE(this)};function kE(t){if(t.h&&typeof Jf<"u"&&(!t.C[1]||Wt(t)!=4||t.da()!=2)){if(t.v&&Wt(t)==4)lp(t.La,0,t);else if(Ve(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(yE)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!wD.test(i?i.toLowerCase():"")}n=r}if(n)Ve(t,"complete"),Ve(t,"success");else{t.m=6;try{var s=2<Wt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",CE(t)}}finally{bu(t)}}}}function bu(t,e){if(t.g){NE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ve(t,"ready");try{n.onreadystatechange=r}catch{}}}function NE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function Wt(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),vD(e)}};function cy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case PE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function TD(t){const e={};t=(t.g&&2<=Wt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(mo(t[r]))continue;var n=Gx(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}$x(e,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function xE(t){let e="";return tp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function pp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=xE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ne(t,e,n))}function gs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function DE(t){this.Ga=0,this.j=[],this.l=new Nu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=gs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=gs("baseRetryDelayMs",5e3,t),this.hb=gs("retryDelaySeedMs",1e4,t),this.eb=gs("forwardChannelMaxRetries",2,t),this.xa=gs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new EE(t&&t.concurrentRequestLimit),this.Ja=new gD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=DE.prototype;P.ra=8;P.H=1;function mp(t){if(OE(t),t.H==3){var e=t.W++,n=wn(t.I);if(ne(n,"SID",t.K),ne(n,"RID",e),ne(n,"TYPE","terminate"),Ko(t,n),e=new zo(t,t.l,e),e.L=2,e.A=Lu(wn(n)),n=!1,F.navigator&&F.navigator.sendBeacon)try{n=F.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&F.Image&&(new Image().src=e.A,n=!0),n||(e.g=jE(e.l,null),e.g.ha(e.A)),e.G=Date.now(),qo(e)}UE(t)}function Fu(t){t.g&&(yp(t),t.g.cancel(),t.g=null)}function OE(t){Fu(t),t.u&&(F.clearTimeout(t.u),t.u=null),bl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Uu(t){if(!IE(t.i)&&!t.m){t.m=!0;var e=t.Na;yo||tE(),_o||(yo(),_o=!0),op.add(e,t),t.C=0}}function SD(t,e){return TE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=jo(qe(t.Na,t,e),FE(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new zo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Gw(s),Qw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=VE(this,i,e),n=wn(this.I),ne(n,"RID",t),ne(n,"CVER",22),this.F&&ne(n,"X-HTTP-Session-Id",this.F),Ko(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(xE(s)))+"&"+e:this.o&&pp(n,this.o,s)),dp(this.i,i),this.bb&&ne(n,"TYPE","init"),this.P?(ne(n,"$req",e),ne(n,"SID","null"),i.aa=!0,vd(i,n,null)):vd(i,n,e),this.H=2}}else this.H==3&&(t?hy(this,t):this.j.length==0||IE(this.i)||hy(this))};function hy(t,e){var n;e?n=e.m:n=t.W++;const r=wn(t.I);ne(r,"SID",t.K),ne(r,"RID",n),ne(r,"AID",t.V),Ko(t,r),t.o&&t.s&&pp(r,t.o,t.s),n=new zo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=VE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),dp(t.i,n),vd(n,r,e)}function Ko(t,e){t.na&&tp(t.na,function(n,r){ne(e,r,n)}),t.h&&gE({},function(n,r){ne(e,r,n)})}function VE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?qe(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{yD(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function LE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;yo||tE(),_o||(yo(),_o=!0),op.add(e,t),t.A=0}}function gp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=jo(qe(t.Ma,t),FE(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,ME(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=jo(qe(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Qe(10),Fu(this),ME(this))};function yp(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function ME(t){t.g=new zo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=wn(t.wa);ne(e,"RID","rpc"),ne(e,"SID",t.K),ne(e,"AID",t.V),ne(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ne(e,"TO",t.qa),ne(e,"TYPE","xmlhttp"),Ko(t,e),t.o&&t.s&&pp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Lu(wn(e)),n.u=null,n.S=!0,dE(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Fu(this),gp(this),Qe(19))};function bl(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function bE(t,e){var n=null;if(t.g==e){bl(t),yp(t),t.g=null;var r=2}else if(Ed(t.i,e))n=e.F,SE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=xu(),Ve(r,new aE(r,n)),Uu(t)}else LE(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&SD(t,e)||r==2&&gp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Tr(t,5);break;case 4:Tr(t,10);break;case 3:Tr(t,6);break;default:Tr(t,2)}}}function FE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Tr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=qe(t.pb,t);n||(n=new Pr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Ll(n,"https"),Lu(n)),_D(n.toString(),r)}else Qe(2);t.H=0,t.h&&t.h.za(e),UE(t),OE(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Qe(2)):(this.l.info("Failed to ping google.com"),Qe(1))};function UE(t){if(t.H=0,t.ma=[],t.h){const e=AE(t.i);(e.length!=0||t.j.length!=0)&&(ty(t.ma,e),ty(t.ma,t.j),t.i.i.length=0,Zf(t.j),t.j.length=0),t.h.ya()}}function $E(t,e,n){var r=n instanceof Pr?wn(n):new Pr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ml(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Pr(null);r&&Ll(s,r),e&&(s.g=e),i&&Ml(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ne(r,n,e),ne(r,"VER",t.ra),Ko(t,r),r}function jE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new fe(new Wo({ob:n})):new fe(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function BE(){}P=BE.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function Fl(){if(Fi&&!(10<=Number(Mx)))throw Error("Environmental error: no available transport.")}Fl.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){Pe.call(this),this.g=new DE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!mo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!mo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new es(this)}Ce(pt,Pe);pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Qe(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=$E(t,null,t.Y),Uu(t)};pt.prototype.close=function(){mp(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=sp(t),t=n);e.j.push(new fD(e.fb++,t)),e.H==3&&Uu(e)};pt.prototype.N=function(){this.g.h=null,delete this.j,mp(this.g),delete this.g,pt.$.N.call(this)};function zE(t){cp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ce(zE,cp);function qE(){hp.call(this),this.status=1}Ce(qE,hp);function es(t){this.g=t}Ce(es,BE);es.prototype.Ba=function(){Ve(this.g,"a")};es.prototype.Aa=function(t){Ve(this.g,new zE(t))};es.prototype.za=function(t){Ve(this.g,new qE)};es.prototype.ya=function(){Ve(this.g,"b")};function AD(){this.blockSize=-1}function Mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ce(Mt,AD);Mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Yc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Mt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Yc(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Yc(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Yc(this,r),i=0;break}}this.h=i,this.i+=e};Mt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function J(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var RD={};function _p(t){return-128<=t&&128>t?Ox(t,function(e){return new J([e|0],0>e?-1:0)}):new J([t|0],0>t?-1:0)}function Ht(t){if(isNaN(t)||!isFinite(t))return Ri;if(0>t)return xe(Ht(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Id;return new J(e,0)}function WE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return xe(WE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ht(Math.pow(e,8)),r=Ri,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Ht(Math.pow(e,s)),r=r.R(s).add(Ht(o))):(r=r.R(n),r=r.add(Ht(o)))}return r}var Id=4294967296,Ri=_p(0),Td=_p(1),dy=_p(16777216);P=J.prototype;P.ea=function(){if(wt(this))return-xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Id+r)*e,e*=Id}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cn(this))return"0";if(wt(this))return"-"+xe(this).toString(t);for(var e=Ht(Math.pow(t,6)),n=this,r="";;){var i=$l(n,e).g;n=Ul(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,cn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function wt(t){return t.h==-1}P.X=function(t){return t=Ul(this,t),wt(t)?-1:cn(t)?0:1};function xe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new J(n,~t.h).add(Td)}P.abs=function(){return wt(this)?xe(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new J(n,n[n.length-1]&-2147483648?-1:0)};function Ul(t,e){return t.add(xe(e))}P.R=function(t){if(cn(this)||cn(t))return Ri;if(wt(this))return wt(t)?xe(this).R(xe(t)):xe(xe(this).R(t));if(wt(t))return xe(this.R(xe(t)));if(0>this.X(dy)&&0>t.X(dy))return Ht(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Aa(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Aa(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Aa(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Aa(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new J(n,0)};function Aa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ys(t,e){this.g=t,this.h=e}function $l(t,e){if(cn(e))throw Error("division by zero");if(cn(t))return new ys(Ri,Ri);if(wt(t))return e=$l(xe(t),e),new ys(xe(e.g),xe(e.h));if(wt(e))return e=$l(t,xe(e)),new ys(xe(e.g),e.h);if(30<t.g.length){if(wt(t)||wt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Td,r=e;0>=r.X(t);)n=fy(n),r=fy(r);var i=Zr(n,1),s=Zr(r,1);for(r=Zr(r,2),n=Zr(n,2);!cn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Zr(r,1),n=Zr(n,1)}return e=Ul(t,i.R(e)),new ys(i,e)}for(i=Ri;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ht(n),o=s.R(e);wt(o)||0<o.X(t);)n-=r,s=Ht(n),o=s.R(e);cn(s)&&(s=Td),i=i.add(s),t=Ul(t,o)}return new ys(i,t)}P.gb=function(t){return $l(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new J(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new J(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new J(n,this.h^t.h)};function fy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new J(n,t.h)}function Zr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new J(i,t.h)}Fl.prototype.createWebChannel=Fl.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;Du.NO_ERROR=0;Du.TIMEOUT=8;Du.HTTP_ERROR=6;lE.COMPLETE="complete";uE.EventType=Bo;Bo.OPEN="a";Bo.CLOSE="b";Bo.ERROR="c";Bo.MESSAGE="d";Pe.prototype.listen=Pe.prototype.O;fe.prototype.listenOnce=fe.prototype.P;fe.prototype.getLastError=fe.prototype.Sa;fe.prototype.getLastErrorCode=fe.prototype.Ia;fe.prototype.getStatus=fe.prototype.da;fe.prototype.getResponseJson=fe.prototype.Wa;fe.prototype.getResponseText=fe.prototype.ja;fe.prototype.send=fe.prototype.ha;fe.prototype.setWithCredentials=fe.prototype.Oa;Mt.prototype.digest=Mt.prototype.l;Mt.prototype.reset=Mt.prototype.reset;Mt.prototype.update=Mt.prototype.j;J.prototype.add=J.prototype.add;J.prototype.multiply=J.prototype.R;J.prototype.modulo=J.prototype.gb;J.prototype.compare=J.prototype.X;J.prototype.toNumber=J.prototype.ea;J.prototype.toString=J.prototype.toString;J.prototype.getBits=J.prototype.D;J.fromNumber=Ht;J.fromString=WE;var PD=function(){return new Fl},CD=function(){return xu()},Xc=Du,kD=lE,ND=Gr,py={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},xD=Wo,Ra=uE,DD=fe,OD=Mt,Pi=J;const my="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="10.11.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new pu("@firebase/firestore");function _s(){return Fr.logLevel}function O(t,...e){if(Fr.logLevel<=H.DEBUG){const n=e.map(vp);Fr.debug(`Firestore (${ts}): ${t}`,...n)}}function En(t,...e){if(Fr.logLevel<=H.ERROR){const n=e.map(vp);Fr.error(`Firestore (${ts}): ${t}`,...n)}}function Ui(t,...e){if(Fr.logLevel<=H.WARN){const n=e.map(vp);Fr.warn(`Firestore (${ts}): ${t}`,...n)}}function vp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: `+t;throw En(e),new Error(e)}function ee(t,e){t||b()}function j(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Ft{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(je.UNAUTHENTICATED))}shutdown(){}}class LD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class MD{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new HE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new je(e)}}class bD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class FD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new bD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class UD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $D{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ee(typeof n.token=="string"),this.R=n.token,new UD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=jD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function $i(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new we(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new we(0,0))}static max(){return new $(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return To.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof To?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends To{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const BD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends To{construct(e,n,r){return new De(e,n,r)}static isValidIdentifier(e){return BD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new De(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(n)}static emptyPath(){return new De([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(re.fromString(e))}static fromName(e){return new L(re.fromString(e).popFirst(5))}static empty(){return new L(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new re(e.slice()))}}function zD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new nr(i,L.empty(),e)}function qD(t){return new nr(t.readTime,t.key,-1)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr($.min(),L.empty(),-1)}static max(){return new nr($.max(),L.empty(),-1)}}function WD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==HD)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function GD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}wp.oe=-1;function $u(t){return t==null}function jl(t){return t===0&&1/t==-1/0}function QD(t){return typeof t=="number"&&Number.isInteger(t)&&!jl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function GE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pa(this.root,e,this.comparator,!0)}}class Pa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ne.RED,this.left=i??Ne.EMPTY,this.right=s??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ne(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ne(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yy(this.data.getIterator())}getIteratorFrom(e){return new yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new ct([])}unionWith(e){let n=new Le(De.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $i(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new QE("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const YD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(ee(!!t),typeof t=="string"){let e=0;const n=YD.exec(t);if(ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ur(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ip(t){const e=t.mapValue.fields.__previous_value__;return Ep(e)?Ip(e):e}function So(t){const e=rr(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ao{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ao("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ao&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ep(t)?4:JD(t)?9007199254740991:10:b()}function tn(t,e){if(t===e)return!0;const n=$r(t);if(n!==$r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return So(t).isEqual(So(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=rr(i.timestampValue),a=rr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ur(i.bytesValue).isEqual(Ur(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ye(i.geoPointValue.latitude)===ye(s.geoPointValue.latitude)&&ye(i.geoPointValue.longitude)===ye(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ye(i.integerValue)===ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ye(i.doubleValue),a=ye(s.doubleValue);return o===a?jl(o)===jl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return $i(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(gy(o)!==gy(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!tn(o[l],a[l])))return!1;return!0}(t,e);default:return b()}}function Ro(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function ji(t,e){if(t===e)return 0;const n=$r(t),r=$r(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ye(s.integerValue||s.doubleValue),l=ye(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return _y(t.timestampValue,e.timestampValue);case 4:return _y(So(t),So(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ur(s),l=Ur(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Q(a[u],l[u]);if(c!==0)return c}return Q(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Q(ye(s.latitude),ye(o.latitude));return a!==0?a:Q(ye(s.longitude),ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=ji(a[u],l[u]);if(c)return c}return Q(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ca.mapValue&&o===Ca.mapValue)return 0;if(s===Ca.mapValue)return 1;if(o===Ca.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Q(l[h],c[h]);if(d!==0)return d;const m=ji(a[l[h]],u[c[h]]);if(m!==0)return m}return Q(l.length,c.length)}(t.mapValue,e.mapValue);default:throw b()}}function _y(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=rr(t),r=rr(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function Bi(t){return Sd(t)}function Sd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return L.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Sd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Sd(n.fields[o])}`;return i+"}"}(t.mapValue):b()}function vy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ad(t){return!!t&&"integerValue"in t}function Tp(t){return!!t&&"arrayValue"in t}function wy(t){return!!t&&"nullValue"in t}function Ey(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ka(t){return!!t&&"mapValue"in t}function Bs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bs(n)}setAll(e){let n=De.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Bs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ka(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new tt(Bs(this.value))}}function YE(t){const e=[];return Qr(t.fields,(n,r)=>{const i=new De([n]);if(Ka(r)){const s=YE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ze(e,0,$.min(),$.min(),$.min(),tt.empty(),0)}static newFoundDocument(e,n,r,i){return new ze(e,1,n,$.min(),r,i,0)}static newNoDocument(e,n){return new ze(e,2,n,$.min(),$.min(),tt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,$.min(),$.min(),tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){this.position=e,this.inclusive=n}}function Iy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=ji(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ty(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{}class ve extends XE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new tO(e,n,r):n==="array-contains"?new iO(e,r):n==="in"?new sO(e,r):n==="not-in"?new oO(e,r):n==="array-contains-any"?new aO(e,r):new ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nO(e,r):new rO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ji(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.matchesComparison(ji(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends XE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new bt(e,n)}matches(e){return JE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function JE(t){return t.op==="and"}function ZE(t){return eO(t)&&JE(t)}function eO(t){for(const e of t.filters)if(e instanceof bt)return!1;return!0}function Rd(t){if(t instanceof ve)return t.field.canonicalString()+t.op.toString()+Bi(t.value);if(ZE(t))return t.filters.map(e=>Rd(e)).join(",");{const e=t.filters.map(n=>Rd(n)).join(",");return`${t.op}(${e})`}}function eI(t,e){return t instanceof ve?function(r,i){return i instanceof ve&&r.op===i.op&&r.field.isEqual(i.field)&&tn(r.value,i.value)}(t,e):t instanceof bt?function(r,i){return i instanceof bt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&eI(o,i.filters[a]),!0):!1}(t,e):void b()}function tI(t){return t instanceof ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Bi(n.value)}`}(t):t instanceof bt?function(n){return n.op.toString()+" {"+n.getFilters().map(tI).join(" ,")+"}"}(t):"Filter"}class tO extends ve{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class nO extends ve{constructor(e,n){super(e,"in",n),this.keys=nI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rO extends ve{constructor(e,n){super(e,"not-in",n),this.keys=nI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class iO extends ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tp(n)&&Ro(n.arrayValue,this.value)}}class sO extends ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ro(this.value.arrayValue,n)}}class oO extends ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ro(this.value.arrayValue,n)}}class aO extends ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ro(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Sy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new lO(t,e,n,r,i,s,o)}function Sp(t){const e=j(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),$u(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bi(r)).join(",")),e.ue=n}return e.ue}function Ap(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ty(t.startAt,e.startAt)&&Ty(t.endAt,e.endAt)}function Pd(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function uO(t,e,n,r,i,s,o,a){return new ns(t,e,n,r,i,s,o,a)}function ju(t){return new ns(t)}function Ay(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rI(t){return t.collectionGroup!==null}function zs(t){const e=j(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Le(De.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Po(s,r))}),n.has(De.keyField().canonicalString())||e.ce.push(new Po(De.keyField(),r))}return e.ce}function Xt(t){const e=j(t);return e.le||(e.le=cO(e,zs(t))),e.le}function cO(t,e){if(t.limitType==="F")return Sy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Po(i.field,s)});const n=t.endAt?new Bl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bl(t.startAt.position,t.startAt.inclusive):null;return Sy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cd(t,e){const n=t.filters.concat([e]);return new ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kd(t,e,n){return new ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bu(t,e){return Ap(Xt(t),Xt(e))&&t.limitType===e.limitType}function iI(t){return`${Sp(Xt(t))}|lt:${t.limitType}`}function ei(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>tI(i)).join(", ")}]`),$u(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Bi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Bi(i)).join(",")),`Target(${r})`}(Xt(t))}; limitType=${t.limitType})`}function zu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of zs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Iy(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,zs(r),i)||r.endAt&&!function(o,a,l){const u=Iy(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,zs(r),i))}(t,e)}function hO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sI(t){return(e,n)=>{let r=!1;for(const i of zs(t)){const s=dO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dO(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?ji(l,u):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return GE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=new ce(L.comparator);function In(){return fO}const oI=new ce(L.comparator);function Ps(...t){let e=oI;for(const n of t)e=e.insert(n.key,n);return e}function aI(t){let e=oI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return qs()}function lI(){return qs()}function qs(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const pO=new ce(L.comparator),mO=new Le(L.comparator);function W(...t){let e=mO;for(const n of t)e=e.add(n);return e}const gO=new Le(Q);function yO(){return gO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jl(e)?"-0":e}}function cI(t){return{integerValue:""+t}}function _O(t,e){return QD(e)?cI(e):uI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this._=void 0}}function vO(t,e,n){return t instanceof zl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ep(s)&&(s=Ip(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Co?dI(t,e):t instanceof ko?fI(t,e):function(i,s){const o=hI(i,s),a=Ry(o)+Ry(i.Pe);return Ad(o)&&Ad(i.Pe)?cI(a):uI(i.serializer,a)}(t,e)}function wO(t,e,n){return t instanceof Co?dI(t,e):t instanceof ko?fI(t,e):n}function hI(t,e){return t instanceof ql?function(r){return Ad(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class zl extends qu{}class Co extends qu{constructor(e){super(),this.elements=e}}function dI(t,e){const n=pI(e);for(const r of t.elements)n.some(i=>tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ko extends qu{constructor(e){super(),this.elements=e}}function fI(t,e){let n=pI(e);for(const r of t.elements)n=n.filter(i=>!tn(i,r));return{arrayValue:{values:n}}}class ql extends qu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ry(t){return ye(t.integerValue||t.doubleValue)}function pI(t){return Tp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function EO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Co&&i instanceof Co||r instanceof ko&&i instanceof ko?$i(r.elements,i.elements,tn):r instanceof ql&&i instanceof ql?tn(r.Pe,i.Pe):r instanceof zl&&i instanceof zl}(t.transform,e.transform)}class IO{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ga(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wu{}function mI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Rp(t.key,Dt.none()):new Yo(t.key,t.data,Dt.none());{const n=t.data,r=tt.empty();let i=new Le(De.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hr(t.key,r,new ct(i.toArray()),Dt.none())}}function TO(t,e,n){t instanceof Yo?function(i,s,o){const a=i.value.clone(),l=Cy(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof hr?function(i,s,o){if(!Ga(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Cy(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(gI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ws(t,e,n,r){return t instanceof Yo?function(s,o,a,l){if(!Ga(s.precondition,o))return a;const u=s.value.clone(),c=ky(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof hr?function(s,o,a,l){if(!Ga(s.precondition,o))return a;const u=ky(s.fieldTransforms,l,o),c=o.data;return c.setAll(gI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Ga(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function SO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=hI(r.transform,i||null);s!=null&&(n===null&&(n=tt.empty()),n.set(r.field,s))}return n||null}function Py(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&$i(r,i,(s,o)=>EO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yo extends Wu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hr extends Wu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Cy(t,e,n){const r=new Map;ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,wO(o,a,n[i]))}return r}function ky(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vO(s,o,e))}return r}class Rp extends Wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AO extends Wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=mI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&$i(this.mutations,e.mutations,(n,r)=>Py(n,r))&&$i(this.baseMutations,e.baseMutations,(n,r)=>Py(n,r))}}class Pp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ee(e.mutations.length===r.length);let i=function(){return pO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Pp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,K;function kO(t){switch(t){default:return b();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function yI(t){if(t===void 0)return En("GRPC error has no .code"),T.UNKNOWN;switch(t){case ge.OK:return T.OK;case ge.CANCELLED:return T.CANCELLED;case ge.UNKNOWN:return T.UNKNOWN;case ge.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case ge.INTERNAL:return T.INTERNAL;case ge.UNAVAILABLE:return T.UNAVAILABLE;case ge.UNAUTHENTICATED:return T.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case ge.NOT_FOUND:return T.NOT_FOUND;case ge.ALREADY_EXISTS:return T.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return T.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case ge.ABORTED:return T.ABORTED;case ge.OUT_OF_RANGE:return T.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return T.UNIMPLEMENTED;case ge.DATA_LOSS:return T.DATA_LOSS;default:return b()}}(K=ge||(ge={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=new Pi([4294967295,4294967295],0);function Ny(t){const e=NO().encode(t),n=new OD;return n.update(e),new Uint8Array(n.digest())}function xy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Pi([n,r],0),new Pi([i,s],0)]}class Cp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Cs(`Invalid padding: ${n}`);if(r<0)throw new Cs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Cs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Cs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Pi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Pi.fromNumber(r)));return i.compare(xO)===1&&(i=new Pi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ny(e),[r,i]=xy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Cp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Ny(e),[r,i]=xy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Cs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hu($.min(),i,new ce(Q),In(),W())}}class Xo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xo(r,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class _I{constructor(e,n){this.targetId=e,this.me=n}}class vI{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Dy{constructor(){this.fe=0,this.ge=Vy(),this.pe=Ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=W(),n=W(),r=W();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new Xo(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Vy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class DO{constructor(e){this.Le=e,this.Be=new Map,this.ke=In(),this.qe=Oy(),this.Qe=new ce(Q)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Pd(s))if(r===0){const o=new L(s.path);this.Ue(n,o,ze.newNoDocument(o,$.min()))}else ee(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ur(r).toUint8Array()}catch(l){if(l instanceof QE)return Ui("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Cp(o,i,s)}catch(l){return Ui(l instanceof Cs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Pd(a.target)){const l=new L(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ze.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=W();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Hu(e,n,this.Qe,this.ke,r);return this.ke=In(),this.qe=Oy(),this.Qe=new ce(Q),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Dy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Le(Q),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Dy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Oy(){return new ce(L.comparator)}function Vy(){return new ce(L.comparator)}const OO={asc:"ASCENDING",desc:"DESCENDING"},VO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LO={and:"AND",or:"OR"};class MO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nd(t,e){return t.useProto3Json||$u(e)?e:{value:e}}function Wl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bO(t,e){return Wl(t,e.toTimestamp())}function Jt(t){return ee(!!t),$.fromTimestamp(function(n){const r=rr(n);return new we(r.seconds,r.nanos)}(t))}function kp(t,e){return xd(t,e).canonicalString()}function xd(t,e){const n=function(i){return new re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function EI(t){const e=re.fromString(t);return ee(RI(e)),e}function Dd(t,e){return kp(t.databaseId,e.path)}function Jc(t,e){const n=EI(e);if(n.get(1)!==t.databaseId.projectId)throw new x(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(TI(n))}function II(t,e){return kp(t.databaseId,e)}function FO(t){const e=EI(t);return e.length===4?re.emptyPath():TI(e)}function Od(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function TI(t){return ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ly(t,e,n){return{name:Dd(t,e),fields:n.value.mapValue.fields}}function UO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ee(c===void 0||typeof c=="string"),Ke.fromBase64String(c||"")):(ee(c===void 0||c instanceof Buffer||c instanceof Uint8Array),Ke.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:yI(u.code);return new x(c,u.message||"")}(o);n=new vI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Jc(t,r.document.name),s=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):$.min(),a=new tt({mapValue:{fields:r.document.fields}}),l=ze.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Qa(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Jc(t,r.document),s=r.readTime?Jt(r.readTime):$.min(),o=ze.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Qa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Jc(t,r.document),s=r.removedTargetIds||[];n=new Qa([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new CO(i,s),a=r.targetId;n=new _I(a,o)}}return n}function $O(t,e){let n;if(e instanceof Yo)n={update:Ly(t,e.key,e.value)};else if(e instanceof Rp)n={delete:Dd(t,e.key)};else if(e instanceof hr)n={update:Ly(t,e.key,e.data),updateMask:QO(e.fieldMask)};else{if(!(e instanceof AO))return b();n={verify:Dd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof zl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ql)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:bO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:b()}(t,e.precondition)),n}function jO(t,e){return t&&t.length>0?(ee(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Jt(i.updateTime):Jt(s);return o.isEqual($.min())&&(o=Jt(s)),new IO(o,i.transformResults||[])}(n,e))):[]}function BO(t,e){return{documents:[II(t,e.path)]}}function zO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=II(t,i);const s=function(u){if(u.length!==0)return AI(bt.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:ti(d.field),direction:HO(d.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Nd(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function qO(t){let e=FO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ee(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=SI(h);return d instanceof bt&&ZE(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Po(ni(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,$u(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,m=h.values||[];return new Bl(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new Bl(m,d)}(n.endAt)),uO(e,i,o,s,a,"F",l,u)}function WO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ni(n.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ni(n.unaryFilter.field);return ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ni(n.unaryFilter.field);return ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ni(n.unaryFilter.field);return ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(n){return ve.create(ni(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return bt.create(n.compositeFilter.filters.map(r=>SI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return b()}}(n.compositeFilter.op))}(t):b()}function HO(t){return OO[t]}function KO(t){return VO[t]}function GO(t){return LO[t]}function ti(t){return{fieldPath:t.canonicalString()}}function ni(t){return De.fromServerFormat(t.fieldPath)}function AI(t){return t instanceof ve?function(n){if(n.op==="=="){if(Ey(n.value))return{unaryFilter:{field:ti(n.field),op:"IS_NAN"}};if(wy(n.value))return{unaryFilter:{field:ti(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ey(n.value))return{unaryFilter:{field:ti(n.field),op:"IS_NOT_NAN"}};if(wy(n.value))return{unaryFilter:{field:ti(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(n.field),op:KO(n.op),value:n.value}}}(t):t instanceof bt?function(n){const r=n.getFilters().map(i=>AI(i));return r.length===1?r[0]:{compositeFilter:{op:GO(n.op),filters:r}}}(t):b()}function QO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r,i,s=$.min(),o=$.min(),a=Ke.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e){this.ut=e}}function XO(t){const e=qO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(){this.on=new ZO}addToCollectionParentIndex(e,n){return this.on.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(nr.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class ZO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Le(re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Le(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new zi(0)}static Nn(){return new zi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ws(r.mutation,i,ct.empty(),we.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=Sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ps();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=In();const o=qs(),a=function(){return qs()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof hr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ws(c.mutation,u,c.mutation.getFieldMask(),we.now())):o.set(u.key,ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new t2(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=qs();let i=new ce((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||ct.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=lI();c.forEach(d=>{if(!s.has(d)){const m=mI(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(Sr());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:aI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Ps();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ps();return this.indexManager.getCollectionParents(e,s).next(a=>S.forEach(a,l=>{const u=function(h,d){return new ns(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,ze.newInvalidDocument(c)))});let a=Ps();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Ws(c.mutation,u,ct.empty(),we.now()),zu(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return S.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jt(i.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:XO(i.bundledQuery),readTime:Jt(i.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(){this.overlays=new ce(L.comparator),this.lr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=Sr(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ce((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Sr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Sr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PO(n,r));let s=this.lr.get(n);s===void 0&&(s=W(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.hr=new Le(Se.Pr),this.Ir=new Le(Se.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Se(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Se(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new L(new re([])),r=new Se(n,e),i=new Se(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new L(new re([])),r=new Se(n,e),i=new Se(n,e+1);let s=W();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Se(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return L.comparator(e.key,n.key)||Q(e.gr,n.gr)}static Tr(e,n){return Q(e.gr,n.gr)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Le(Se.Pr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Se(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Se(n,0),i=new Se(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(Q);return n.forEach(i=>{const s=new Se(i,0),o=new Se(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),S.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Se(new L(s),0);let a=new Le(Q);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),S.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ee(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return S.forEach(n.mutations,i=>{const s=new Se(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Se(n,0),i=this.yr.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e){this.Cr=e,this.docs=function(){return new ce(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let r=In();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ze.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=In();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||WD(qD(c),r)<=0||(i.has(c.key)||zu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,r,i){b()}vr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new a2(this)}getSize(e){return S.resolve(this.size)}}class a2 extends e2{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.persistence=e,this.Fr=new rs(n=>Sp(n),Ap),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Np,this.targetCount=0,this.Nr=zi.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),S.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.kn(n),S.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n){this.Lr={},this.overlays={},this.Br=new wp(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new l2(this),this.indexManager=new JO,this.remoteDocumentCache=function(i){return new o2(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new YO(n),this.Kr=new r2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new i2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new s2(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new c2(this.Br.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return S.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class c2 extends KD{constructor(e){super(),this.currentSequenceNumber=e}}class xp{constructor(e){this.persistence=e,this.Gr=new Np,this.zr=null}static jr(e){return new xp(e)}get Hr(){if(this.zr)return this.zr;throw b()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,r=>{const i=L.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return S.or([()=>S.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Dp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return rR()?8:GD(be())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new h2;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(_s()<=H.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",ei(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(_s()<=H.DEBUG&&O("QueryEngine","Query:",ei(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(_s()<=H.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",ei(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(n))):S.resolve())}zi(e,n){if(Ay(n))return S.resolve(null);let r=Xt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kd(n,null,"F"),r=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,kd(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return Ay(n)||i.isEqual($.min())?S.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?S.resolve(null):(_s()<=H.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ei(n)),this.Xi(e,o,n,zD(i,-1)).next(a=>a))})}Yi(e,n){let r=new Le(sI(e));return n.forEach((i,s)=>{zu(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return _s()<=H.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",ei(n)),this.Gi.getDocumentsMatchingQuery(e,n,nr.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new ce(Q),this.ns=new rs(s=>Sp(s),Ap),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new n2(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function p2(t,e,n,r){return new f2(t,e,n,r)}async function PI(t,e){const n=j(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function m2(t,e){const n=j(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let m=S.resolve();return d.forEach(v=>{m=m.next(()=>c.getEntry(l,v)).next(_=>{const w=u.docVersions.get(v);ee(w!==null),_.version.compareTo(w)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=W();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function CI(t){const e=j(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function g2(t,e){const n=j(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Ke.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(_,w,p){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,m,c)&&a.push(n.qr.updateTargetData(s,m))});let l=In(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(y2(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual($.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function y2(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=In();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function _2(t,e){const n=j(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function v2(t,e){const n=j(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new $n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Vd(t,e,n){const r=j(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Qo(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function My(t,e,n){const r=j(t);let i=$.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=j(l),d=h.ns.get(c);return d!==void 0?S.resolve(h.ts.get(d)):h.qr.getTargetData(u,c)}(r,o,Xt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:$.min(),n?s:W())).next(a=>(w2(r,hO(e),a),{documents:a,ls:s})))}function w2(t,e,n){let r=t.rs.get(e)||$.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class by{constructor(){this.activeTargetIds=yO()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E2{constructor(){this.eo=new by,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new by,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka=null;function Zc(){return ka===null?ka=function(){return 268435456+Math.round(2147483648*Math.random())}():ka++,"0x"+ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="WebChannelConnection";class A2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+n.host,this.wo=`projects/${i}/databases/${s}`,this.So=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get bo(){return!1}Do(n,r,i,s,o){const a=Zc(),l=this.Co(n,r.toUriEncodedString());O("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(u,s,o),this.Fo(n,l,u,i).then(c=>(O("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Ui("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Mo(n,r,i,s,o,a){return this.Do(n,r,i,s,o)}vo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ts}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Co(n,r){const i=T2[n];return`${this.yo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,r,i){const s=Zc();return new Promise((o,a)=>{const l=new DD;l.setWithCredentials(!0),l.listenOnce(kD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Xc.NO_ERROR:const c=l.getResponseJson();O($e,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Xc.TIMEOUT:O($e,`RPC '${e}' ${s} timed out`),a(new x(T.DEADLINE_EXCEEDED,"Request time out"));break;case Xc.HTTP_ERROR:const h=l.getStatus();if(O($e,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(w){const p=w.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(p)>=0?p:T.UNKNOWN}(m.status);a(new x(v,m.message))}else a(new x(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(T.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{O($e,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O($e,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}xo(e,n,r){const i=Zc(),s=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PD(),a=CD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new xD({})),this.vo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O($e,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const v=new S2({co:w=>{m?O($e,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(O($e,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),O($e,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},lo:()=>h.close()}),_=(w,p,f)=>{w.listen(p,g=>{try{f(g)}catch(E){setTimeout(()=>{throw E},0)}})};return _(h,Ra.EventType.OPEN,()=>{m||(O($e,`RPC '${e}' stream ${i} transport opened.`),v.Vo())}),_(h,Ra.EventType.CLOSE,()=>{m||(m=!0,O($e,`RPC '${e}' stream ${i} transport closed`),v.fo())}),_(h,Ra.EventType.ERROR,w=>{m||(m=!0,Ui($e,`RPC '${e}' stream ${i} transport errored:`,w),v.fo(new x(T.UNAVAILABLE,"The operation could not be completed")))}),_(h,Ra.EventType.MESSAGE,w=>{var p;if(!m){const f=w.data[0];ee(!!f);const g=f,E=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(E){O($e,`RPC '${e}' stream ${i} received error:`,E);const R=E.status;let C=function(Y){const U=ge[Y];if(U!==void 0)return yI(U)}(R),k=E.message;C===void 0&&(C=T.INTERNAL,k="Unknown error status: "+R+" with message "+E.message),m=!0,v.fo(new x(C,k)),h.close()}else O($e,`RPC '${e}' stream ${i} received:`,f),v.po(f)}}),_(a,ND.STAT_EVENT,w=>{w.stat===py.PROXY?O($e,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===py.NOPROXY&&O($e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.mo()},0),v}}function eh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t){return new MO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Oo=r,this.No=i,this.Lo=s,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Wo=r,this.Go=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new kI(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(En(n.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.zo===n&&this.a_(r,i)},r=>{e(()=>{const i=new x(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(i)})})}a_(e,n){const r=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.u_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R2 extends NI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=UO(this.serializer,e),r=function(s){if(!("targetChange"in s))return $.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?Jt(o.readTime):$.min()}(e);return this.listener.l_(n,r)}h_(e){const n={};n.database=Od(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Pd(l)?{documents:BO(s,l)}:{query:zO(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wI(s,o.resumeToken);const u=Nd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo($.min())>0){a.readTime=Wl(s,o.snapshotVersion.toTimestamp());const u=Nd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=WO(this.serializer,e);r&&(n.labels=r),this.r_(n)}P_(e){const n={};n.database=Od(this.serializer),n.removeTarget=e,this.r_(n)}}class P2 extends NI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=jO(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.d_(r,n)}return ee(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=Od(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$O(this.serializer,r))};this.r_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.V_=!1}m_(){if(this.V_)throw new x(T.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,r,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Do(e,xd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(T.UNKNOWN,s.toString())})}Mo(e,n,r,i,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,xd(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(T.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class k2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(En(n),this.y_=!1):O("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.ro(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=j(l);u.M_.add(4),await Jo(u),u.N_.set("Unknown"),u.M_.delete(4),await Gu(u)}(this))})}),this.N_=new k2(r,i)}}async function Gu(t){if(Yr(t))for(const e of t.x_)await e(!0)}async function Jo(t){for(const e of t.x_)await e(!1)}function xI(t,e){const n=j(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Mp(n)?Lp(n):is(n).Zo()&&Vp(n,e))}function Op(t,e){const n=j(t),r=is(n);n.F_.delete(e),r.Zo()&&DI(n,e),n.F_.size===0&&(r.Zo()?r.t_():Yr(n)&&n.N_.set("Unknown"))}function Vp(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}is(t).h_(e)}function DI(t,e){t.L_.xe(e),is(t).P_(e)}function Lp(t){t.L_=new DO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),is(t).start(),t.N_.w_()}function Mp(t){return Yr(t)&&!is(t).Yo()&&t.F_.size>0}function Yr(t){return j(t).M_.size===0}function OI(t){t.L_=void 0}async function x2(t){t.N_.set("Online")}async function D2(t){t.F_.forEach((e,n)=>{Vp(t,e)})}async function O2(t,e){OI(t),Mp(t)?(t.N_.D_(e),Lp(t)):t.N_.set("Unknown")}async function V2(t,e,n){if(t.N_.set("Online"),e instanceof vI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hl(t,r)}else if(e instanceof Qa?t.L_.Ke(e):e instanceof _I?t.L_.He(e):t.L_.We(e),!n.isEqual($.min()))try{const r=await CI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.F_.get(u);c&&s.F_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.F_.get(l);if(!c)return;s.F_.set(l,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),DI(s,l);const h=new $n(c.target,l,u,c.sequenceNumber);Vp(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Hl(t,r)}}async function Hl(t,e,n){if(!Qo(e))throw e;t.M_.add(1),await Jo(t),t.N_.set("Offline"),n||(n=()=>CI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Gu(t)})}function VI(t,e){return e().catch(n=>Hl(t,n,e))}async function Qu(t){const e=j(t),n=ir(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;L2(e);)try{const i=await _2(e.localStore,r);if(i===null){e.v_.length===0&&n.t_();break}r=i.batchId,M2(e,i)}catch(i){await Hl(e,i)}LI(e)&&MI(e)}function L2(t){return Yr(t)&&t.v_.length<10}function M2(t,e){t.v_.push(e);const n=ir(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function LI(t){return Yr(t)&&!ir(t).Yo()&&t.v_.length>0}function MI(t){ir(t).start()}async function b2(t){ir(t).R_()}async function F2(t){const e=ir(t);for(const n of t.v_)e.E_(n.mutations)}async function U2(t,e,n){const r=t.v_.shift(),i=Pp.from(r,e,n);await VI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Qu(t)}async function $2(t,e){e&&ir(t).T_&&await async function(r,i){if(function(o){return kO(o)&&o!==T.ABORTED}(i.code)){const s=r.v_.shift();ir(r).e_(),await VI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Qu(r)}}(t,e),LI(t)&&MI(t)}async function Uy(t,e){const n=j(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Yr(n);n.M_.add(3),await Jo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Gu(n)}async function j2(t,e){const n=j(t);e?(n.M_.delete(2),await Gu(n)):e||(n.M_.add(2),await Jo(n),n.N_.set("Unknown"))}function is(t){return t.B_||(t.B_=function(n,r,i){const s=j(n);return s.m_(),new R2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:x2.bind(null,t),Io:D2.bind(null,t),Eo:O2.bind(null,t),l_:V2.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),Mp(t)?Lp(t):t.N_.set("Unknown")):(await t.B_.stop(),OI(t))})),t.B_}function ir(t){return t.k_||(t.k_=function(n,r,i){const s=j(n);return s.m_(),new P2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:b2.bind(null,t),Eo:$2.bind(null,t),A_:F2.bind(null,t),d_:U2.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await Qu(t)):(await t.k_.stop(),t.v_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new bp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fp(t,e){if(En("AsyncQueue",`${e}: ${t}`),Qo(t))return new x(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Ps(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new Ci(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ci;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.q_=new ce(L.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):b():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class qi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qi(e,n,Ci.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class z2{constructor(){this.queries=new rs(e=>iI(e),Bu),this.onlineState="Unknown",this.z_=new Set}}async function bI(t,e){const n=j(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new B2,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Fp(o,`Initialization of query '${ei(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Up(n)}async function FI(t,e){const n=j(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function q2(t,e){const n=j(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Up(n)}function W2(t,e,n){const r=j(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Up(t){t.z_.forEach(e=>{e.next()})}var Ld,jy;(jy=Ld||(Ld={})).J_="default",jy.Cache="cache";class UI{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Ld.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.key=e}}class jI{constructor(e){this.key=e}}class H2{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=W(),this.mutatedKeys=W(),this.Ia=sI(e),this.Ta=new Ci(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new $y,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=zu(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let w=!1;d&&m?d.data.isEqual(m.data)?v!==_&&(r.track({type:3,doc:m}),w=!0):this.Ra(d,m)||(r.track({type:2,doc:m}),w=!0,(l&&this.Ia(m,l)>0||u&&this.Ia(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),w=!0):d&&!m&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((c,h)=>function(m,v){const _=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return _(m)-_(v)}(c.type,h.type)||this.Ia(c.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new qi(this.query,e.Ta,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new $y,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=W(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new jI(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new $I(r))}),n}pa(e){this.la=e.ls,this.Pa=W();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return qi.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class K2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class G2{constructor(e){this.key=e,this.wa=!1}}class Q2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new rs(a=>iI(a),Bu),this.Da=new Map,this.Ca=new Set,this.va=new ce(L.comparator),this.Fa=new Map,this.Ma=new Np,this.xa={},this.Oa=new Map,this.Na=zi.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Y2(t,e,n=!0){const r=KI(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await BI(r,e,n,!0),i}async function X2(t,e){const n=KI(t);await BI(n,e,!0,!1)}async function BI(t,e,n,r){const i=await v2(t.localStore,Xt(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await J2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&xI(t.remoteStore,i),a}async function J2(t,e,n,r,i){t.Ba=(h,d,m)=>async function(_,w,p,f){let g=w.view.da(p);g.Zi&&(g=await My(_.localStore,w.query,!1).then(({documents:k})=>w.view.da(k,g)));const E=f&&f.targetChanges.get(w.targetId),R=f&&f.targetMismatches.get(w.targetId)!=null,C=w.view.applyChanges(g,_.isPrimaryClient,E,R);return zy(_,w.targetId,C.fa),C.snapshot}(t,h,d,m);const s=await My(t.localStore,e,!0),o=new H2(e,s.ls),a=o.da(s.documents),l=Xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);zy(t,n,u.fa);const c=new K2(e,n,o);return t.ba.set(e,c),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function Z2(t,e,n){const r=j(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Bu(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Vd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Op(r.remoteStore,i.targetId),Md(r,i.targetId)}).catch(Go)):(Md(r,i.targetId),await Vd(r.localStore,i.targetId,!0))}async function eV(t,e){const n=j(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Op(n.remoteStore,r.targetId))}async function tV(t,e,n){const r=lV(t);try{const i=await function(o,a){const l=j(o),u=we.now(),c=a.reduce((m,v)=>m.add(v.key),W());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=In(),_=W();return l.ss.getEntries(m,c).next(w=>{v=w,v.forEach((p,f)=>{f.isValidDocument()||(_=_.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,v)).next(w=>{h=w;const p=[];for(const f of a){const g=SO(f,h.get(f.key).overlayedDocument);g!=null&&p.push(new hr(f.key,g,YE(g.value.mapValue),Dt.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,p,a)}).next(w=>{d=w;const p=w.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(m,w.batchId,p)})}).then(()=>({batchId:d.batchId,changes:aI(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.xa[o.currentUser.toKey()];u||(u=new ce(Q)),u=u.insert(a,l),o.xa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Zo(r,i.changes),await Qu(r.remoteStore)}catch(i){const s=Fp(i,"Failed to persist write");n.reject(s)}}async function zI(t,e){const n=j(t);try{const r=await g2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?ee(o.wa):i.removedDocuments.size>0&&(ee(o.wa),o.wa=!1))}),await Zo(n,r,e)}catch(r){await Go(r)}}function By(t,e,n){const r=j(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=j(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.U_)d.j_(a)&&(u=!0)}),u&&Up(l)}(r.eventManager,e),i.length&&r.Sa.l_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nV(t,e,n){const r=j(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ce(L.comparator);o=o.insert(s,ze.newNoDocument(s,$.min()));const a=W().add(s),l=new Hu($.min(),new Map,new ce(Q),o,a);await zI(r,l),r.va=r.va.remove(s),r.Fa.delete(e),$p(r)}else await Vd(r.localStore,e,!1).then(()=>Md(r,e,n)).catch(Go)}async function rV(t,e){const n=j(t),r=e.batch.batchId;try{const i=await m2(n.localStore,e);WI(n,r,null),qI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,i)}catch(i){await Go(i)}}async function iV(t,e,n){const r=j(t);try{const i=await function(o,a){const l=j(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ee(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);WI(r,e,n),qI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zo(r,i)}catch(i){await Go(i)}}function qI(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function WI(t,e,n){const r=j(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Md(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(r=>{t.Ma.containsKey(r)||HI(t,r)})}function HI(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Op(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),$p(t))}function zy(t,e,n){for(const r of n)r instanceof $I?(t.Ma.addReference(r.key,e),sV(t,r)):r instanceof jI?(O("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||HI(t,r.key)):b()}function sV(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(O("SyncEngine","New document in limbo: "+n),t.Ca.add(r),$p(t))}function $p(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new L(re.fromString(e)),r=t.Na.next();t.Fa.set(r,new G2(n)),t.va=t.va.insert(n,r),xI(t.remoteStore,new $n(Xt(ju(n.path)),r,"TargetPurposeLimboResolution",wp.oe))}}async function Zo(t,e,n){const r=j(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Dp.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Sa.l_(i),await async function(l,u){const c=j(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(u,d=>S.forEach(d.ki,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>S.forEach(d.qi,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Qo(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=c.ts.get(d),v=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(v);c.ts=c.ts.insert(d,_)}}}(r.localStore,s))}async function oV(t,e){const n=j(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await PI(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new x(T.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zo(n,r._s)}}function aV(t,e){const n=j(t),r=n.Fa.get(e);if(r&&r.wa)return W().add(r.key);{let i=W();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function KI(t){const e=j(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nV.bind(null,e),e.Sa.l_=q2.bind(null,e.eventManager),e.Sa.ka=W2.bind(null,e.eventManager),e}function lV(t){const e=j(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iV.bind(null,e),e}class qy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ku(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return p2(this.persistence,new d2,e.initialUser,this.serializer)}createPersistence(e){return new u2(xp.jr,this.serializer)}createSharedClientState(e){return new E2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>By(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oV.bind(null,this.syncEngine),await j2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new z2}()}createDatastore(e){const n=Ku(e.databaseInfo.databaseId),r=function(s){return new A2(s)}(e.databaseInfo);return function(s,o,a,l){return new C2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new N2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>By(this.syncEngine,n,0),function(){return Fy.D()?new Fy:new I2}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new Q2(i,s,o,a,l,u);return c&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=j(r);O("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Jo(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=je.UNAUTHENTICATED,this.clientId=KE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function th(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await PI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dV(t);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Uy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Uy(e.remoteStore,i)),t._onlineComponents=e}function hV(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function dV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await th(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hV(n))throw n;Ui("Error using user provided cache. Falling back to memory cache: "+n),await th(t,new qy)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await th(t,new qy);return t._offlineComponents}async function QI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Wy(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Wy(t,new uV))),t._onlineComponents}function fV(t){return QI(t).then(e=>e.syncEngine)}async function bd(t){const e=await QI(t),n=e.eventManager;return n.onListen=Y2.bind(null,e.syncEngine),n.onUnlisten=Z2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=X2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eV.bind(null,e.syncEngine),n}function pV(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new GI({next:d=>{o.enqueueAndForget(()=>FI(s,h));const m=d.docs.has(a);!m&&d.fromCache?u.reject(new x(T.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&l&&l.source==="server"?u.reject(new x(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new UI(ju(a.path),c,{includeMetadataChanges:!0,ra:!0});return bI(s,h)}(await bd(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t,e,n){if(!n)throw new x(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mV(t,e,n,r){if(e===!0&&r===!0)throw new x(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ky(t){if(!L.isDocumentKey(t))throw new x(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gy(t){if(L.isDocumentKey(t))throw new x(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function Zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yu(t);throw new x(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new VD;switch(r.type){case"firstParty":return new FD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hy.get(n);r&&(O("ComponentProvider","Removing Datastore"),Hy.delete(n),r.terminate())}(this),Promise.resolve()}}function gV(t,e,n,r={}){var i;const s=(t=Zt(t,Xu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=je.MOCK_USER;else{a=JA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new x(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new je(u)}t._authCredentials=new LD(new HE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xr(this.firestore,e,this._query)}}class Xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}}class Zn extends Xr{constructor(e,n,r){super(e,n,ju(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new L(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function JI(t,e,...n){if(t=de(t),XI("collection","path",e),t instanceof Xu){const r=re.fromString(e,...n);return Gy(r),new Zn(t,null,r)}{if(!(t instanceof Xe||t instanceof Zn))throw new x(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return Gy(r),new Zn(t.firestore,null,r)}}function Ju(t,e,...n){if(t=de(t),arguments.length===1&&(e=KE.newId()),XI("doc","path",e),t instanceof Xu){const r=re.fromString(e,...n);return Ky(r),new Xe(t,null,new L(r))}{if(!(t instanceof Xe||t instanceof Zn))throw new x(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return Ky(r),new Xe(t.firestore,t instanceof Zn?t.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new kI(this,"async_queue_retry"),this.hu=()=>{const n=eh();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=eh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=eh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Jn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!Qo(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw En("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=bp.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&b()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Yy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class jr extends Xu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new yV}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ZI(this),this._firestoreClient.terminate()}}function _V(t,e){const n=typeof t=="object"?t:bf(),r=typeof t=="string"?t:"(default)",i=Hr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=YA("firestore");s&&gV(i,...s)}return i}function jp(t){return t._firestoreClient||ZI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ZI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new XD(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,YI(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new cV(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wi(Ke.fromBase64String(e))}catch(n){throw new x(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wi(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vV=/^__.*__$/;class wV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}class eT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class qp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new qp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Kl(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(tT(this.fu)&&vV.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class EV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ku(e)}Fu(e,n,r,i=!1){return new qp({fu:e,methodName:n,vu:r,path:De.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wp(t){const e=t._freezeSettings(),n=Ku(t._databaseId);return new EV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function IV(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Hp("Data must be an object, but it was:",o,r);const a=nT(r,o);let l,u;if(s.merge)l=new ct(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Fd(e,h,n);if(!o.contains(d))throw new x(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);iT(c,d)||c.push(d)}l=new ct(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new wV(new tt(a),l,u)}class ec extends Bp{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ec}}function TV(t,e,n,r){const i=t.Fu(1,e,n);Hp("Data must be an object, but it was:",i,r);const s=[],o=tt.empty();Qr(r,(l,u)=>{const c=Kp(e,l,n);u=de(u);const h=i.Su(c);if(u instanceof ec)s.push(c);else{const d=ea(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new ct(s);return new eT(o,a,i.fieldTransforms)}function SV(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[Fd(e,r,n)],l=[i];if(s.length%2!=0)throw new x(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Fd(e,s[d])),l.push(s[d+1]);const u=[],c=tt.empty();for(let d=a.length-1;d>=0;--d)if(!iT(u,a[d])){const m=a[d];let v=l[d];v=de(v);const _=o.Su(m);if(v instanceof ec)u.push(m);else{const w=ea(v,_);w!=null&&(u.push(m),c.set(m,w))}}const h=new ct(u);return new eT(c,h,o.fieldTransforms)}function AV(t,e,n,r=!1){return ea(n,t.Fu(r?4:3,e))}function ea(t,e){if(rT(t=de(t)))return Hp("Unsupported field value:",e,t),nT(t,e);if(t instanceof Bp)return function(r,i){if(!tT(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ea(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=de(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _O(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=we.fromDate(r);return{timestampValue:Wl(i.serializer,s)}}if(r instanceof we){const s=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wl(i.serializer,s)}}if(r instanceof zp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wi)return{bytesValue:wI(i.serializer,r._byteString)};if(r instanceof Xe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:kp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Yu(r)}`)}(t,e)}function nT(t,e){const n={};return GE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,(r,i)=>{const s=ea(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof zp||t instanceof Wi||t instanceof Xe||t instanceof Bp)}function Hp(t,e,n){if(!rT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Yu(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Fd(t,e,n){if((e=de(e))instanceof Zu)return e._internalPath;if(typeof e=="string")return Kp(t,e);throw Kl("Field path arguments must be of type string or ",t,!1,void 0,n)}const RV=new RegExp("[~\\*/\\[\\]]");function Kp(t,e,n){if(e.search(RV)>=0)throw Kl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zu(...e.split("."))._internalPath}catch{throw Kl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Kl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(T.INVALID_ARGUMENT,a+t+l)}function iT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PV extends sT{data(){return super.data()}}function tc(t,e){return typeof e=="string"?Kp(t,e):e instanceof Zu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gp{}class oT extends Gp{}function nh(t,e,...n){let r=[];e instanceof Gp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Qp).length,a=s.filter(l=>l instanceof nc).length;if(o>1||o>0&&a>0)throw new x(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class nc extends oT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new nc(e,n,r)}_apply(e){const n=this._parse(e);return aT(e._query,n),new Xr(e.firestore,e.converter,Cd(e._query,n))}_parse(e){const n=Wp(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new x(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Zy(h,c);const m=[];for(const v of h)m.push(Jy(l,s,v));d={arrayValue:{values:m}}}else d=Jy(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Zy(h,c),d=AV(a,o,h,c==="in"||c==="not-in");return ve.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Xy(t,e,n){const r=e,i=tc("where",t);return nc._create(i,r,n)}class Qp extends Gp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:bt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)aT(o,l),o=Cd(o,l)}(e._query,n),new Xr(e.firestore,e.converter,Cd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yp extends oT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Yp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new x(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new x(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Po(s,o)}(e._query,this._field,this._direction);return new Xr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ns(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function rh(t,e="asc"){const n=e,r=tc("orderBy",t);return Yp._create(r,n)}function Jy(t,e,n){if(typeof(n=de(n))=="string"){if(n==="")throw new x(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rI(e)&&n.indexOf("/")!==-1)throw new x(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(re.fromString(n));if(!L.isDocumentKey(r))throw new x(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vy(t,new L(r))}if(n instanceof Xe)return vy(t,n._key);throw new x(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yu(n)}.`)}function Zy(t,e){if(!Array.isArray(t)||t.length===0)throw new x(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aT(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class kV{convertValue(e,n="none"){switch($r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new zp(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ip(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(So(e));default:return null}}convertTimestamp(e){const n=rr(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=re.fromString(e);ee(RI(r));const i=new Ao(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||En(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NV(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lT extends sT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(tc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ya extends lT{data(e={}){return super.data(e)}}class xV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ks(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ya(this._firestore,this._userDataWriter,r.key,r,new ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ya(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ks(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ya(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ks(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:DV(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OV(t){t=Zt(t,Xe);const e=Zt(t.firestore,jr);return pV(jp(e),t._key).then(n=>cT(e,t,n))}class uT extends kV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,n)}}function VV(t,e,n,...r){t=Zt(t,Xe);const i=Zt(t.firestore,jr),s=Wp(i);let o;return o=typeof(e=de(e))=="string"||e instanceof Zu?SV(s,"updateDoc",t._key,e,n,r):TV(s,"updateDoc",t._key,e),Xp(i,[o.toMutation(t._key,Dt.exists(!0))])}function LV(t){return Xp(Zt(t.firestore,jr),[new Rp(t._key,Dt.none())])}function MV(t,e){const n=Zt(t.firestore,jr),r=Ju(t),i=NV(t.converter,e);return Xp(n,[IV(Wp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then(()=>r)}function bV(t,...e){var n,r,i;t=de(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Yy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Yy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Xe)u=Zt(t.firestore,jr),c=ju(t._key.path),l={next:h=>{e[o]&&e[o](cT(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Zt(t,Xr);u=Zt(h.firestore,jr),c=h._query;const d=new uT(u);l={next:m=>{e[o]&&e[o](new xV(u,d,h,m))},error:e[o+1],complete:e[o+2]},CV(t._query)}return function(d,m,v,_){const w=new GI(_),p=new UI(m,w,v);return d.asyncQueue.enqueueAndForget(async()=>bI(await bd(d),p)),()=>{w.$a(),d.asyncQueue.enqueueAndForget(async()=>FI(await bd(d),p))}}(jp(u),c,a,l)}function Xp(t,e){return function(r,i){const s=new Jn;return r.asyncQueue.enqueueAndForget(async()=>tV(await fV(r),i,s)),s.promise}(jp(t),e)}function cT(t,e,n){const r=n.docs.get(e._key),i=new uT(t);return new lT(t,i,e._key,r,new ks(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ts=i})(Xi),en(new Vt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new jr(new MD(r.getProvider("auth-internal")),new $D(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new x(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ao(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Tt(my,"4.6.1",e),Tt(my,"4.6.1","esm2017")})();const FV={apiKey:"AIzaSyDREdSTjrk0nHo7nlZmNXUFPPTokR3bVzY",authDomain:"new-home-69b84.firebaseapp.com",projectId:"new-home-69b84",storageBucket:"new-home-69b84.appspot.com",messagingSenderId:"495930988397",appId:"1:495930988397:web:b66676f44a2036dcaeac64",measurementId:"G-5ZL2L3E67G"},hT=b0(FV);Ix(hT);const ta=_V(hT),Jp=(t,e=null,n=null)=>{const[r,i]=I.useState(null),[s,o]=I.useState(null),[a,l]=I.useState(null),[u,c]=I.useState(!1);return I.useEffect(()=>{async function h(){if(u)return;l(!0);const d=await JI(ta,t);try{let m;e?m=await nh(d,Xy("tags","array-contains",e),rh("createdAt","desc")):n?m=await nh(d,Xy("uid","==",n),rh("createdAt","desc")):m=await nh(d,rh("createdAt","desc")),await bV(m,v=>{i(v.docs.map(_=>({id:_.id,..._.data()})))})}catch(m){console.log(m),o(m.message)}l(!1)}h()},[t,e,n,u]),console.log(r),I.useEffect(()=>()=>c(!0),[]),{documents:r,loading:a,error:s}},UV="_post_detail_x32aw_1",$V="_tags_x32aw_25",jV="_createdby_x32aw_51",ih={post_detail:UV,tags:$V,createdby:jV},dT=({post:t})=>y.jsxs("div",{className:ih.post_detail,children:[y.jsx("img",{src:t.image,alt:t.title}),y.jsx("h2",{children:t.title}),y.jsxs("h4",{children:["Preço: R$",t.price]}),y.jsxs("p",{className:ih.createdby,children:["por: ",t.createdBy]}),y.jsx("div",{className:ih.tags,children:t.tags.map(e=>y.jsxs("p",{children:[y.jsx("span",{children:"#"}),e]},e))}),y.jsx(fn,{to:`/posts/${t.id}`,className:"btn btn-outline",children:"Ler"})]}),BV=()=>{const{documents:t,loading:e}=Jp("posts"),n=Lo(),[r,i]=I.useState(""),s=o=>{if(o.preventDefault(),r)return n(`/search?q=${r}`)};return console.log(e),y.jsxs("div",{className:$c.home,children:[y.jsx("h1",{children:"Confira nossos imóveis mais recentes"}),y.jsxs("form",{className:$c.search_form,onSubmit:s,children:[y.jsx("input",{type:"text",placeholder:"Ou busque por tags...",onChange:o=>i(o.target.value)}),y.jsx("button",{className:"btn ",children:"Pesquisar"})]}),y.jsxs("div",{className:"post-list",children:[e&&y.jsx("p",{children:"Carregando..."}),t&&t.length===0&&y.jsxs("div",{className:$c.noposts,children:[y.jsx("p",{children:"Nenhuma casa encontrada "}),y.jsx(fn,{to:"/posts/create",className:"btn",children:"Adicione a primeira casa"})]}),t&&t.map(o=>y.jsx(dT,{post:o},o.id))]})]})},zV="_about_13tkk_1",qV={about:zV},WV=()=>y.jsxs("div",{className:qV.about,children:[y.jsxs("h2",{children:["Sobre o New ",y.jsx("span",{children:"Home"})]}),y.jsx("p",{children:"O projeto é um site especializado na venda de propriedades, construído com React e JavaScript, integrado ao Firebase para armazenamento e gerenciamento de dados. Essa plataforma proporciona um ambiente dinâmico e interativo para artistas e entusiastas de design compartilharem suas criações e experiências."}),y.jsx(fn,{to:"/posts/create",className:"btn",children:"Criar post"})]}),HV="_post_container_9yo88_1",KV="_tags_9yo88_17",GV="_btn_container_9yo88_57",e_={post_container:HV,tags:KV,btn_container:GV},fT=(t,e)=>{const[n,r]=I.useState(null),[i,s]=I.useState(null),[o,a]=I.useState(null);return I.useEffect(()=>{(async()=>{a(!0);try{const u=await Ju(ta,t,e),c=await OV(u);r(c.data())}catch(u){console.log(u),s(u.message)}a(!1)})()},[t,e]),console.log(n),{document:n,loading:o,error:i}},QV=()=>{const{id:t}=E0(),{document:e}=fT("posts",t);return y.jsx("div",{className:e_.post_container,children:e&&y.jsxs(y.Fragment,{children:[y.jsx("h1",{children:e.title}),y.jsx("img",{src:e.image,alt:e.title}),y.jsx("h4",{children:e.body}),y.jsxs("p",{children:["Preço: ",e.price]}),y.jsx("h3",{children:"Este post trata sobre:"}),y.jsx("div",{className:e_.tags,children:e.tags.map(n=>y.jsxs("p",{children:[y.jsx("span",{children:"#"}),n]},n))}),y.jsx(fn,{to:"/",className:"btn btn-voltar",children:"Voltar"})]})})},YV="_create_Post_hvugf_3",XV="_create_post_hvugf_33",JV="_customFileInput_hvugf_49",t_={create_Post:YV,create_post:XV,customFileInput:JV},ZV={loading:null,error:null},eL=(t,e)=>{switch(e.type){case"LOADING":return{loading:!0,error:null};case"INSERTED_DOC":return{loading:!1,error:null};case"ERROR":return{loading:!1,error:e.payload};default:return t}},tL=t=>{const[e,n]=I.useReducer(eL,ZV),[r,i]=I.useState(!1),s=a=>{r||n(a)},o=async a=>{s({type:"LOADING"});try{const l={...a,createdAt:we.now()},u=await MV(JI(ta,t),l);s({type:"INSERTED_DOC",payload:u})}catch(l){s({type:"ERROR",payload:l.message})}};return I.useEffect(()=>()=>i(!0),[]),{insertDocument:o,response:e}},nL=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,a]=I.useState(""),[l,u]=I.useState(""),[c,h]=I.useState(null),{user:d}=wu(),m=Lo(),{insertDocument:v,response:_}=tL("posts"),w=async p=>{if(p.preventDefault(),u(""),!c){u("Por favor, selecione uma imagem.");return}const f=i.split(",").map(g=>g.trim().toLowerCase());try{await v({title:t,image:c,body:n,tags:f,price:o,uid:d.uid,createdBy:d.displayName}),m("/")}catch{u("Ocorreu um erro ao criar o post. Por favor, tente novamente.")}};return y.jsxs("div",{className:t_.create_post,children:[y.jsx("h1",{children:"Inclua informações sobre a propriedade"}),y.jsx("p",{children:"Compartilhe informações sobre a propriedade"}),y.jsxs("form",{onSubmit:w,children:[y.jsxs("label",{children:[y.jsx("span",{children:"Título:"}),y.jsx("input",{type:"text",name:"text",required:!0,placeholder:"Pense num bom título...",onChange:p=>e(p.target.value),value:t})]}),y.jsxs("label",{children:[y.jsx("span",{children:"Selecione uma imagem do seu computador:"}),y.jsx("input",{type:"file",accept:"image/*",className:t_.customFileInput,onChange:p=>{const f=p.target.files[0];if(f){const g=new FileReader;g.onload=E=>{h(E.target.result)},g.readAsDataURL(f)}}})]}),y.jsxs("label",{children:[y.jsx("span",{children:"Preço:"}),y.jsx("input",{type:"text",name:"price",required:!0,placeholder:"Coloque o valor do imóvel",onChange:p=>a(p.target.value),value:o})]}),y.jsxs("label",{children:[y.jsx("span",{children:"Conteúdo:"}),y.jsx("textarea",{name:"body",required:!0,placeholder:"Fale sobre a propriedade",onChange:p=>r(p.target.value),value:n,className:"texta"})]}),y.jsxs("label",{children:[y.jsx("span",{children:"Tags:"}),y.jsx("input",{type:"text",name:"tags",required:!0,placeholder:"Insira as tags separadas por vírgula",onChange:p=>s(p.target.value),value:i})]}),y.jsxs("div",{className:"btnCadas",children:[!_.loading&&y.jsx("button",{className:"btn",children:"Criar post!"}),_.loading&&y.jsx("button",{className:"btn",disabled:!0,children:"Aguarde..."})]}),(_.error||l)&&y.jsx("p",{className:"error",children:_.error||l})]})]})},rL="_search_container_11ovg_1",iL={search_container:rL};function sL(){const{search:t}=qr();return I.useMemo(()=>new URLSearchParams(t),[t])}const oL=()=>{const e=sL().get("q"),{documents:n}=Jp("posts",e);return y.jsxs("div",{className:iL.search_container,children:[y.jsxs("h1",{children:["Resultados encontrados para: ",e]}),y.jsxs("div",{className:"post-list",children:[n&&n.length===0&&y.jsxs(y.Fragment,{children:[y.jsx("p",{children:"Não foram encontrados posts a partir da sua busca..."}),y.jsx(fn,{to:"/",className:"btn btn-dark",children:"Voltar"})]}),n&&n.map(r=>y.jsx(dT,{post:r},r.id))]})]})},aL="_login_tmodo_1",lL={login:aL},uL=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(""),[i,s]=I.useState(""),{login:o,error:a,loading:l}=vu(),u=async c=>{c.preventDefault(),s("");const d=await o({email:t,password:n});console.log(d)};return I.useEffect(()=>{console.log(a),a&&s(a)},[a]),y.jsxs("div",{className:lL.login,children:[y.jsx("h1",{children:"Entrar"}),y.jsx("p",{children:"Faça o login para poder utilizar o sistema"}),y.jsxs("form",{onSubmit:u,children:[y.jsxs("label",{children:[y.jsx("span",{children:"E-mail:"}),y.jsx("input",{type:"email",name:"email",required:!0,placeholder:"E-mail do usuário",onChange:c=>e(c.target.value),value:t})]}),y.jsxs("label",{children:[y.jsx("span",{children:"Senha:"}),y.jsx("input",{type:"password",name:"password",required:!0,placeholder:"Insira a senha",onChange:c=>r(c.target.value),value:n})]}),y.jsxs("div",{className:"btnCadas",children:[!l&&y.jsx("button",{className:"btn",children:"Entrar"}),l&&y.jsx("button",{className:"btn",disabled:!0,children:"Aguarde..."})]}),i&&y.jsx("p",{className:"error",children:i})]})]})},cL="_register_1lclz_1",hL="_Register_1lclz_33",dL={register:cL,Register:hL},fL=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,a]=I.useState(""),[l,u]=I.useState(""),{auth:c,createUser:h,error:d,loading:m}=vu(),v=async _=>{_.preventDefault(),u("");const w={displayName:t,email:n,password:i};if(i!==o){u("As senhas Necessitam ser iguais!");return}const p=await h(w);console.log(p)};return I.useEffect(()=>{d&&u(d)},[d]),y.jsxs("div",{className:dL.Register,children:[y.jsx("h1",{children:"Cadastre-se Para Utilizar "}),y.jsx("p",{children:"Crie seu Usuário e compartilhe suas propriedades "}),y.jsxs("form",{onSubmit:v,className:"registrar",children:[y.jsxs("label",{children:[y.jsx("span",{children:"Nome:"}),y.jsx("input",{type:"text",name:"displayName",required:!0,placeholder:"Nome do Usuário",value:t,onChange:_=>e(_.target.value)})]}),y.jsxs("label",{children:[y.jsx("span",{children:"E-mail:"}),y.jsx("input",{type:"email",name:"email",required:!0,placeholder:"E-mail do Usuário",value:n,onChange:_=>r(_.target.value)})]}),y.jsxs("label",{children:[y.jsx("span",{children:"Senha"}),y.jsx("input",{type:"password",name:"password",required:!0,placeholder:"Digite a Senha",value:i,onChange:_=>s(_.target.value)})]}),y.jsxs("label",{children:[y.jsx("span",{children:"Confirme sua Senha"}),y.jsx("input",{type:"password",name:"confirmPassword",required:!0,placeholder:"Confirmação de Senha",value:o,onChange:_=>a(_.target.value)})]}),y.jsxs("div",{className:"btnCadas",children:[!m&&y.jsx("button",{className:"btn",children:" Cadastrar"}),m&&y.jsx("button",{className:"btn",disabled:!0,children:" Aguarde..."})]}),l&&y.jsxs("p",{className:"error",children:[" ",l]})]})]})},pL={loading:null,error:null},mL=(t,e)=>{switch(e.type){case"LOADING":return{loading:!0,error:null};case"DELETED_DOC":return{loading:!1,error:null};case"ERROR":return{loading:!1,error:e.payload};default:return t}},gL=t=>{const[e,n]=I.useReducer(mL,pL),[r,i]=I.useState(!1),s=a=>{r||n(a)},o=async a=>{s({type:"LOADING"});try{const l=await LV(Ju(ta,t,a));s({type:"DELETED_DOC",payload:l})}catch(l){s({type:"ERROR",payload:l.message})}};return I.useEffect(()=>()=>i(!0),[]),{deleteDocument:o,response:e}},yL=()=>{const{user:t}=wu(),e=t.uid,{documents:n}=Jp("posts",null,e),{deleteDocument:r}=gL("posts");return console.log(e),console.log(n),y.jsxs("div",{className:"dashboard",children:[y.jsx("h2",{children:"Gerencie os suas propriedades "}),n&&n.length===0?y.jsxs("div",{className:"noposts",children:[y.jsx("p",{children:"Não foram encontrados posts"}),y.jsx(fn,{to:"/posts/create",className:"btn",children:"Criar primeiro post"})]}):y.jsxs("div",{className:"post_header",children:[y.jsx("span",{children:"Título"}),y.jsx("span",{children:"Ações"})]}),n&&n.map(i=>y.jsxs("div",{className:"post_row",children:[y.jsx("p",{children:i.title}),y.jsxs("div",{className:"actions",children:[y.jsx(fn,{to:`/posts/${i.id}`,className:"btn btn-outline",children:"Ver"}),y.jsx(fn,{to:`/posts/edit/${i.id}`,className:"btn btn-outline",children:"Editar"}),y.jsx("button",{onClick:()=>r(i.id),className:"btn btn-outline btn-danger",children:"Excluir"})]})]},i.id))]})},_L="_edit_Post_11l4c_1",vL="_edit_post_11l4c_47",Na={edit_Post:_L,edit_post:vL,"btn-center":"_btn-center_11l4c_67"},wL={loading:null,error:null},EL=(t,e)=>{switch(e.type){case"LOADING":return{loading:!0,error:null};case"UPDATED_DOC":return{loading:!1,error:null};case"ERROR":return{loading:!1,error:e.payload};default:return t}},IL=t=>{const[e,n]=I.useReducer(EL,wL),[r,i]=I.useState(!1),s=a=>{r||n(a)},o=async(a,l)=>{s({type:"LOADING"});try{const u=await Ju(ta,t,a);console.log(u);const c=await VV(u,l);console.log(o),s({type:"UPDATED_DOC",payload:c})}catch(u){console.log(u),s({type:"ERROR",payload:u.message})}};return I.useEffect(()=>()=>i(!0),[]),{updateDocument:o,response:e}},TL=()=>{const{id:t}=E0(),{document:e}=fT("posts",t),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,a]=I.useState(""),[l,u]=I.useState(""),[c,h]=I.useState(""),[d,m]=I.useState("");I.useEffect(()=>{e&&(r(e.title),s(e.image),a(e.body),u(e.tags.join(", ")),h(e.price))},[e]),wu();const v=Lo(),{updateDocument:_,response:w}=IL("posts"),p=f=>{f.preventDefault(),m("");try{new URL(i)}catch{m("A imagem precisa ser uma URL válida.");return}const g=l.split(",").map(R=>R.trim());_(t,{title:n,image:i,body:o,tags:g,price:c}),v("/dashboard")};return y.jsx("div",{className:Na.edit_post,children:e&&y.jsxs(y.Fragment,{children:[y.jsxs("h1",{children:["Editando a Propriedade: ",e.title]}),y.jsx("p",{children:"Altere os dados da propriedade conforme necessário"}),y.jsxs("form",{onSubmit:p,children:[y.jsxs("label",{children:[y.jsx("span",{children:"Título:"}),y.jsx("input",{type:"text",name:"title",required:!0,placeholder:"Digite um título...",value:n,onChange:f=>r(f.target.value)})]}),y.jsxs("label",{children:[y.jsx("span",{children:"URL da Imagem:"}),y.jsx("input",{type:"text",name:"image",required:!0,placeholder:"Insira uma URL da imagem",value:i,onChange:f=>s(f.target.value)})]}),y.jsx("p",{className:Na.preview_title,children:"Preview da imagem atual:"}),y.jsx("img",{className:Na.image_preview,src:i,alt:n}),y.jsxs("label",{children:[y.jsx("span",{children:"Conteúdo:"}),y.jsx("textarea",{name:"body",required:!0,placeholder:"Insira o conteúdo",value:o,onChange:f=>a(f.target.value)})]}),y.jsxs("label",{children:[y.jsx("span",{children:"Tags:"}),y.jsx("input",{type:"text",name:"tags",required:!0,placeholder:"Insira as tags separadas por vírgula",value:l,onChange:f=>u(f.target.value)})]}),y.jsxs("label",{children:[y.jsx("span",{children:"Preço:"}),y.jsx("input",{type:"text",name:"price",required:!0,placeholder:"Insira o preço",value:c,onChange:f=>h(f.target.value)})]}),y.jsxs("div",{className:"btnCadas",children:[!w.loading&&y.jsx("button",{className:"btn",children:"Editar"}),w.loading&&y.jsx("button",{className:"btn",disabled:!0,children:"Aguarde.. ."})]}),(w.error||d)&&y.jsx("p",{className:Na.error,children:w.error||d})]})]})})};function SL(){const[t,e]=I.useState(void 0),{auth:n}=vu(),r=t===void 0;return I.useEffect(()=>{IC(n,i=>{e(i)})},[n]),r?y.jsx("p",{children:"Carregando..."}):y.jsx("div",{className:"App",children:y.jsx(qk,{value:{user:t},children:y.jsxs(bA,{children:[y.jsx(eN,{}),y.jsx("div",{className:"container",children:y.jsxs(kA,{children:[y.jsx($t,{path:"/",element:y.jsx(BV,{})}),y.jsx($t,{path:"/about",element:y.jsx(WV,{})}),y.jsx($t,{path:"/posts/create",element:t?y.jsx(nL,{}):y.jsx(ms,{to:"/login"})}),y.jsx($t,{path:"/posts/edit/:id",element:t?y.jsx(TL,{}):y.jsx(ms,{to:"/login"})}),y.jsx($t,{path:"/posts/:id",element:y.jsx(QV,{})}),y.jsx($t,{path:"/search",element:y.jsx(oL,{})}),y.jsx($t,{path:"/login",element:t?y.jsx(ms,{to:"/"}):y.jsx(uL,{})}),y.jsx($t,{path:"/register",element:t?y.jsx(ms,{to:"/"}):y.jsx(fL,{})}),y.jsx($t,{path:"/dashboard",element:t?y.jsx(yL,{}):y.jsx(ms,{to:"/login"})})]})}),y.jsx(Uk,{})]})})})}sh.createRoot(document.getElementById("root")).render(y.jsx(hn.StrictMode,{children:y.jsx(SL,{})}));
