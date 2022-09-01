(()=>{"use strict";var t={426:(t,e,r)=>{r.d(e,{Z:()=>a});var s=r(81),n=r.n(s),o=r(645),i=r.n(o)()(n());i.push([t.id,"body {\n    margin: 0;\n}\n\nheader {\n    background-color: #888;\n}\n\nh1 {\n    font-family: Arial, Helvetica, sans-serif;\n    color: #f00;\n}",""]);const a=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",s=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),s&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),s&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,s,n,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(s)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(i[l]=!0)}for(var c=0;c<t.length;c++){var h=[].concat(t[c]);s&&i[h[0]]||(void 0!==o&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=o),r&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=r):h[2]=r),n&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=n):h[4]="".concat(n)),e.push(h))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,s=0;s<e.length;s++)if(e[s].identifier===t){r=s;break}return r}function s(t,s){for(var o={},i=[],a=0;a<t.length;a++){var l=t[a],c=s.base?l[0]+s.base:l[0],h=o[c]||0,u="".concat(c," ").concat(h);o[c]=h+1;var d=r(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var p=n(f,s);s.byIndex=a,e.splice(a,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function n(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,n){var o=s(t=t||[],n=n||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var a=r(o[i]);e[a].references--}for(var l=s(t,n),c=0;c<o.length;c++){var h=r(o[c]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}o=l}}},569:t=>{var e={};t.exports=function(t,r){var s=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var s="";r.supports&&(s+="@supports (".concat(r.supports,") {")),r.media&&(s+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(s+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),s+=r.css,n&&(s+="}"),r.media&&(s+="}"),r.supports&&(s+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(s){var n=e[s];if(void 0!==n)return n.exports;var o=e[s]={id:s,exports:{}};return t[s](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{const t=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(t){return{}}}();void 0===t.trustedTypes&&(t.trustedTypes={createPolicy:(t,e)=>e});const e={configurable:!1,enumerable:!1,writable:!1};void 0===t.FAST&&Reflect.defineProperty(t,"FAST",Object.assign({value:Object.create(null)},e));const s=t.FAST;if(void 0===s.getById){const t=Object.create(null);Reflect.defineProperty(s,"getById",Object.assign({value(e,r){let s=t[e];return void 0===s&&(s=r?t[e]=r():null),s}},e))}const n=Object.freeze([]),o=t.FAST.getById(1,(()=>{const e=[],r=[];function s(){if(r.length)throw r.shift()}function n(t){try{t.call()}catch(t){r.push(t),setTimeout(s,0)}}function o(){let t=0;for(;t<e.length;)if(n(e[t]),t++,t>1024){for(let r=0,s=e.length-t;r<s;r++)e[r]=e[r+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(r){e.length<1&&t.requestAnimationFrame(o),e.push(r)},process:o})})),i=t.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let a=i;const l=`fast-${Math.random().toString(36).substring(2,8)}`,c=`${l}{`,h=`}${l}`,u=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(a!==i)throw new Error("The HTML policy can only be set once.");a=t},createHTML:t=>a.createHTML(t),isMarker:t=>t&&8===t.nodeType&&t.data.startsWith(l),extractDirectiveIndexFromMarker:t=>parseInt(t.data.replace(`${l}:`,"")),createInterpolationPlaceholder:t=>`${c}${t}${h}`,createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder:t=>`\x3c!--${l}:${t}--\x3e`,queueUpdate:o.enqueue,processUpdates:o.process,nextUpdate:()=>new Promise(o.enqueue),setAttribute(t,e,r){null==r?t.removeAttribute(e):t.setAttribute(e,r)},setBooleanAttribute(t,e,r){r?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;null!==e;e=t.firstChild)t.removeChild(e)},createTemplateWalker:t=>document.createTreeWalker(t,133,null,!1)});class d{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return void 0===this.spillover?this.sub1===t||this.sub2===t:-1!==this.spillover.indexOf(t)}subscribe(t){const e=this.spillover;if(void 0===e){if(this.has(t))return;if(void 0===this.sub1)return void(this.sub1=t);if(void 0===this.sub2)return void(this.sub2=t);this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else-1===e.indexOf(t)&&e.push(t)}unsubscribe(t){const e=this.spillover;if(void 0===e)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const r=e.indexOf(t);-1!==r&&e.splice(r,1)}}notify(t){const e=this.spillover,r=this.source;if(void 0===e){const e=this.sub1,s=this.sub2;void 0!==e&&e.handleChange(r,t),void 0!==s&&s.handleChange(r,t)}else for(let s=0,n=e.length;s<n;++s)e[s].handleChange(r,t)}}class f{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const r=this.subscribers[t];void 0!==r&&r.notify(t),null===(e=this.sourceSubscribers)||void 0===e||e.notify(t)}subscribe(t,e){var r;if(e){let r=this.subscribers[e];void 0===r&&(this.subscribers[e]=r=new d(this.source)),r.subscribe(t)}else this.sourceSubscribers=null!==(r=this.sourceSubscribers)&&void 0!==r?r:new d(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var r;if(e){const r=this.subscribers[e];void 0!==r&&r.unsubscribe(t)}else null===(r=this.sourceSubscribers)||void 0===r||r.unsubscribe(t)}}const p=s.getById(2,(()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,r=new WeakMap,s=u.queueUpdate;let n,o=t=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function i(t){let r=t.$fastController||e.get(t);return void 0===r&&(Array.isArray(t)?r=o(t):e.set(t,r=new f(t))),r}function a(t){let e=r.get(t);if(void 0===e){let s=Reflect.getPrototypeOf(t);for(;void 0===e&&null!==s;)e=r.get(s),s=Reflect.getPrototypeOf(s);e=void 0===e?[]:e.slice(0),r.set(t,e)}return e}class l{constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return void 0!==n&&n.watch(t,this.name),t[this.field]}setValue(t,e){const r=this.field,s=t[r];if(s!==e){t[r]=e;const n=t[this.callback];"function"==typeof n&&n.call(t,s,e),i(t).notify(this.name)}}}class c extends d{constructor(t,e,r=!1){super(t,e),this.binding=t,this.isVolatileBinding=r,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,e){this.needsRefresh&&null!==this.last&&this.disconnect();const r=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const s=this.binding(t,e);return n=r,s}disconnect(){if(null!==this.last){let t=this.first;for(;void 0!==t;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,e){const r=this.last,s=i(t),o=null===r?this.first:{};if(o.propertySource=t,o.propertyName=e,o.notifier=s,s.subscribe(this,e),null!==r){if(!this.needsRefresh){let e;n=void 0,e=r.propertySource[r.propertyName],n=this,t===e&&(this.needsRefresh=!0)}r.next=o}this.last=o}handleChange(){this.needsQueue&&(this.needsQueue=!1,s(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let t=this.first;return{next:()=>{const e=t;return void 0===e?{value:void 0,done:!0}:(t=t.next,{value:e,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(t){o=t},getNotifier:i,track(t,e){void 0!==n&&n.watch(t,e)},trackVolatile(){void 0!==n&&(n.needsRefresh=!0)},notify(t,e){i(t).notify(e)},defineProperty(t,e){"string"==typeof e&&(e=new l(e)),a(t).push(e),Reflect.defineProperty(t,e.name,{enumerable:!0,get:function(){return e.getValue(this)},set:function(t){e.setValue(this,t)}})},getAccessors:a,binding(t,e,r=this.isVolatileBinding(t)){return new c(t,e,r)},isVolatileBinding:e=>t.test(e.toString())})}));function g(t,e){p.defineProperty(t,e)}const b=s.getById(3,(()=>{let t=null;return{get:()=>t,set(e){t=e}}}));class v{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return b.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){b.set(t)}}p.defineProperty(v.prototype,"index"),p.defineProperty(v.prototype,"length");const m=Object.seal(new v);class y{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=null===this.behaviors?t:this.behaviors.concat(t),this}}function w(t){return t.map((t=>t instanceof y?w(t.styles):[t])).reduce(((t,e)=>t.concat(e)),[])}function C(t){return t.map((t=>t instanceof y?t.behaviors:null)).reduce(((t,e)=>null===e?t:(null===t&&(t=[]),t.concat(e))),null)}y.create=(()=>{if(u.supportsAdoptedStyleSheets){const t=new Map;return e=>new x(e,t)}return t=>new k(t)})();class x extends y{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=C(t)}get styleSheets(){if(void 0===this._styleSheets){const t=this.styles,e=this.styleSheetCache;this._styleSheets=w(t).map((t=>{if(t instanceof CSSStyleSheet)return t;let r=e.get(t);return void 0===r&&(r=new CSSStyleSheet,r.replaceSync(t),e.set(t,r)),r}))}return this._styleSheets}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const e=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter((t=>-1===e.indexOf(t))),super.removeStylesFrom(t)}}let $=0;class k extends y{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=C(t),this.styleSheets=w(t),this.styleClass="fast-style-class-"+ ++$}addStylesTo(t){const e=this.styleSheets,r=this.styleClass;t=this.normalizeTarget(t);for(let s=0;s<e.length;s++){const n=document.createElement("style");n.innerHTML=e[s],n.className=r,t.append(n)}super.addStylesTo(t)}removeStylesFrom(t){const e=(t=this.normalizeTarget(t)).querySelectorAll(`.${this.styleClass}`);for(let r=0,s=e.length;r<s;++r)t.removeChild(e[r]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const F={toView:t=>t?"true":"false",fromView:t=>null!=t&&"false"!==t&&!1!==t&&0!==t};class V{constructor(t,e,r=e.toLowerCase(),s="reflect",n){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=r,this.mode=s,this.converter=n,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,"boolean"===s&&void 0===n&&(this.converter=F)}setValue(t,e){const r=t[this.fieldName],s=this.converter;void 0!==s&&(e=s.fromView(e)),r!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](r,e),t.$fastController.notify(this.name))}getValue(t){return p.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,r=this.guards;r.has(t)||"fromView"===e||u.queueUpdate((()=>{r.add(t);const s=t[this.fieldName];switch(e){case"reflect":const e=this.converter;u.setAttribute(t,this.attribute,void 0!==e?e.toView(s):s);break;case"boolean":u.setBooleanAttribute(t,this.attribute,s)}r.delete(t)}))}static collect(t,...e){const r=[];e.push(t.attributes);for(let s=0,n=e.length;s<n;++s){const n=e[s];if(void 0!==n)for(let e=0,s=n.length;e<s;++e){const s=n[e];"string"==typeof s?r.push(new V(t,s)):r.push(new V(t,s.property,s.attribute,s.mode,s.converter))}}return r}}function S(t,e){let r;function s(t,e){arguments.length>1&&(r.property=e);const s=t.constructor.attributes||(t.constructor.attributes=[]);s.push(r)}return arguments.length>1?(r={},void s(t,e)):(r=void 0===t?{}:t,s)}const D={mode:"open"},T={},O=s.getById(4,(()=>{const t=new Map;return Object.freeze({register:e=>!t.has(e.type)&&(t.set(e.type,e),!0),getByType:e=>t.get(e)})}));class P{constructor(t,e=t.definition){"string"==typeof e&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const r=V.collect(t,e.attributes),s=new Array(r.length),n={},o={};for(let t=0,e=r.length;t<e;++t){const e=r[t];s[t]=e.attribute,n[e.name]=e,o[e.attribute]=e}this.attributes=r,this.observedAttributes=s,this.propertyLookup=n,this.attributeLookup=o,this.shadowOptions=void 0===e.shadowOptions?D:null===e.shadowOptions?void 0:Object.assign(Object.assign({},D),e.shadowOptions),this.elementOptions=void 0===e.elementOptions?T:Object.assign(Object.assign({},T),e.elementOptions),this.styles=void 0===e.styles?void 0:Array.isArray(e.styles)?y.create(e.styles):e.styles instanceof y?e.styles:y.create([e.styles])}get isDefined(){return!!O.getByType(this.type)}define(t=customElements){const e=this.type;if(O.register(this)){const t=this.attributes,r=e.prototype;for(let e=0,s=t.length;e<s;++e)p.defineProperty(r,t[e]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}}function N(t,e,r,s){var n,o=arguments.length,i=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(o<3?n(i):o>3?n(e,r,i):n(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i}P.forType=O.getByType;const R=new WeakMap,L={bubbles:!0,composed:!0,cancelable:!0};function M(t){return t.shadowRoot||R.get(t)||null}class B extends f{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const r=e.shadowOptions;if(void 0!==r){const e=t.attachShadow(r);"closed"===r.mode&&R.set(t,e)}const s=p.getAccessors(t);if(s.length>0){const e=this.boundObservables=Object.create(null);for(let r=0,n=s.length;r<n;++r){const n=s[r].name,o=t[n];void 0!==o&&(delete t[n],e[n]=o)}}}get isConnected(){return p.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,p.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=t,this.needsInitialization||null===t||this.addStyles(t))}addStyles(t){const e=M(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const r=t.behaviors;t.addStylesTo(e),null!==r&&this.addBehaviors(r)}}removeStyles(t){const e=M(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const r=t.behaviors;t.removeStylesFrom(e),null!==r&&this.removeBehaviors(r)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),r=t.length,s=[];for(let n=0;n<r;++n){const r=t[n];e.has(r)?e.set(r,e.get(r)+1):(e.set(r,1),s.push(r))}if(this._isConnected){const t=this.element;for(let e=0;e<s.length;++e)s[e].bind(t,m)}}removeBehaviors(t,e=!1){const r=this.behaviors;if(null===r)return;const s=t.length,n=[];for(let o=0;o<s;++o){const s=t[o];if(r.has(s)){const t=r.get(s)-1;0===t||e?r.delete(s)&&n.push(s):r.set(s,t)}}if(this._isConnected){const t=this.element;for(let e=0;e<n.length;++e)n[e].unbind(t)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(t,m);const e=this.behaviors;if(null!==e)for(const[r]of e)r.bind(t,m);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;null!==t&&t.unbind();const e=this.behaviors;if(null!==e){const t=this.element;for(const[r]of e)r.unbind(t)}}onAttributeChangedCallback(t,e,r){const s=this.definition.attributeLookup[t];void 0!==s&&s.onAttributeChangedCallback(this.element,r)}emit(t,e,r){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},L),r)))}finishInitialization(){const t=this.element,e=this.boundObservables;if(null!==e){const r=Object.keys(e);for(let s=0,n=r.length;s<n;++s){const n=r[s];t[n]=e[n]}this.boundObservables=null}const r=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():r.template&&(this._template=r.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():r.styles&&(this._styles=r.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,r=M(e)||e;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||u.removeChildNodes(r),t&&(this.view=t.render(e,r,e))}static forCustomElement(t){const e=t.$fastController;if(void 0!==e)return e;const r=P.forType(t.constructor);if(void 0===r)throw new Error("Missing FASTElement definition.");return t.$fastController=new B(t,r)}}function A(t){return class extends t{constructor(){super(),B.forCustomElement(this)}$emit(t,e,r){return this.$fastController.emit(t,e,r)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,r){this.$fastController.onAttributeChangedCallback(t,e,r)}}}const I=Object.assign(A(HTMLElement),{from:t=>A(t),define:(t,e)=>new P(t,e).define().type}),E=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(r){Reflect.defineMetadata(t,e,r)}},Reflect.defineMetadata=function(t,e,r){let s=E.get(r);void 0===s&&E.set(r,s=new Map),s.set(t,e)},Reflect.getOwnMetadata=function(t,e){const r=E.get(e);if(void 0!==r)return r.get(t)});class j{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,ut(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:r,key:s}=this;return this.container=this.key=void 0,r.registerResolver(s,new J(s,t,e))}}function H(t){const e=t.slice(),r=Object.keys(t),s=r.length;let n;for(let o=0;o<s;++o)n=r[o],yt(n)||(e[n]=t[n]);return e}const z=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton:t=>new J(t,1,t),transient:t=>new J(t,2,t)}),q=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:z.singleton})}),_=new Map;function U(t){return e=>Reflect.getOwnMetadata(t,e)}let G=null;const W=Object.freeze({createContainer:t=>new ct(null,Object.assign({},q.default,t)),findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:W.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(at,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||W.getOrCreateDOMContainer()},getOrCreateDOMContainer:(t,e)=>t?t.$$container$$||new ct(t,Object.assign({},q.default,e,{parentLocator:W.findParentContainer})):G||(G=new ct(null,Object.assign({},q.default,e,{parentLocator:()=>null}))),getDesignParamtypes:U("design:paramtypes"),getAnnotationParamtypes:U("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return void 0===e&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=_.get(t);if(void 0===e){const r=t.inject;if(void 0===r){const r=W.getDesignParamtypes(t),s=W.getAnnotationParamtypes(t);if(void 0===r)if(void 0===s){const r=Object.getPrototypeOf(t);e="function"==typeof r&&r!==Function.prototype?H(W.getDependencies(r)):[]}else e=H(s);else if(void 0===s)e=H(r);else{e=H(r);let t,n=s.length;for(let r=0;r<n;++r)t=s[r],void 0!==t&&(e[r]=t);const o=Object.keys(s);let i;n=o.length;for(let t=0;t<n;++t)i=o[t],yt(i)||(e[i]=s[i])}}else e=H(r);_.set(t,e)}return e},defineProperty(t,e,r,s=!1){const n=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let t=this[n];if(void 0===t){const o=this instanceof HTMLElement?W.findResponsibleContainer(this):W.getOrCreateDOMContainer();if(t=o.get(r),this[n]=t,s&&this instanceof I){const s=this.$fastController,o=()=>{W.findResponsibleContainer(this).get(r)!==this[n]&&(this[n]=t,s.notify(e))};s.subscribe({handleChange:o},"isConnected")}}return t}})},createInterface(t,e){const r="function"==typeof t?t:e,s="string"==typeof t?t:t&&"friendlyName"in t&&t.friendlyName||gt,n="string"!=typeof t&&(t&&"respectConnection"in t&&t.respectConnection||!1),o=function(t,e,r){if(null==t||void 0!==new.target)throw new Error(`No registration for interface: '${o.friendlyName}'`);e?W.defineProperty(t,e,o,n):W.getOrCreateAnnotationParamTypes(t)[r]=o};return o.$isInterface=!0,o.friendlyName=null==s?"(anonymous)":s,null!=r&&(o.register=function(t,e){return r(new j(t,null!=e?e:o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject:(...t)=>function(e,r,s){if("number"==typeof s){const r=W.getOrCreateAnnotationParamTypes(e),n=t[0];void 0!==n&&(r[s]=n)}else if(r)W.defineProperty(e,r,t[0]);else{const r=s?W.getOrCreateAnnotationParamTypes(s.value):W.getOrCreateAnnotationParamTypes(e);let n;for(let e=0;e<t.length;++e)n=t[e],void 0!==n&&(r[e]=n)}},transient:t=>(t.register=function(e){return dt.transient(t,t).register(e)},t.registerInRequestor=!1,t),singleton:(t,e=K)=>(t.register=function(e){return dt.singleton(t,t).register(e)},t.registerInRequestor=e.scoped,t)}),Z=W.createInterface("Container");function Q(t){return function(e){const r=function(t,e,s){W.inject(r)(t,e,s)};return r.$isResolver=!0,r.resolve=function(r,s){return t(e,r,s)},r}}W.inject;const K={scoped:!1};function X(t,e,r){W.inject(X)(t,e,r)}function Y(t,e){return e.getFactory(t).construct(e)}Q(((t,e,r)=>()=>r.get(t))),Q(((t,e,r)=>r.has(t,!0)?r.get(t):void 0)),X.$isResolver=!0,X.resolve=()=>{},Q(((t,e,r)=>{const s=Y(t,e),n=new J(t,0,s);return r.registerResolver(t,n),s})),Q(((t,e,r)=>Y(t,e)));class J{constructor(t,e,r){this.key=t,this.strategy=e,this.state=r,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state;case 2:{const r=t.getFactory(this.state);if(null===r)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return r.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,r,s;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return null!==(s=null===(r=null===(e=t.getResolver(this.state))||void 0===e?void 0:e.getFactory)||void 0===r?void 0:r.call(e,t))&&void 0!==s?s:null;default:return null}}}function tt(t){return this.get(t)}function et(t,e){return e(t)}class rt{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let r;return r=void 0===e?new this.Type(...this.dependencies.map(tt,t)):new this.Type(...this.dependencies.map(tt,t),...e),null==this.transformers?r:this.transformers.reduce(et,r)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const st={$isResolver:!0,resolve:(t,e)=>e};function nt(t){return"function"==typeof t.register}function ot(t){return function(t){return nt(t)&&"boolean"==typeof t.registerInRequestor}(t)&&t.registerInRequestor}const it=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),at="__DI_LOCATE_PARENT__",lt=new Map;class ct{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,null!==t&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Z,st),t instanceof Node&&t.addEventListener(at,(t=>{t.composedPath()[0]!==this.owner&&(t.detail.container=this,t.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let e,r,s,n,o;const i=this.context;for(let a=0,l=t.length;a<l;++a)if(e=t[a],bt(e))if(nt(e))e.register(this,i);else if(void 0!==e.prototype)dt.singleton(e,e).register(this);else for(r=Object.keys(e),n=0,o=r.length;n<o;++n)s=e[r[n]],bt(s)&&(nt(s)?s.register(this,i):this.register(s));return--this.registerDepth,this}registerResolver(t,e){ft(t);const r=this.resolvers,s=r.get(t);return null==s?r.set(t,e):s instanceof J&&4===s.strategy?s.state.push(e):r.set(t,new J(t,4,[s,e])),e}registerTransformer(t,e){const r=this.getResolver(t);if(null==r)return!1;if(r.getFactory){const t=r.getFactory(this);return null!=t&&(t.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(ft(t),void 0!==t.resolve)return t;let r,s=this;for(;null!=s;){if(r=s.resolvers.get(t),null!=r)return r;if(null==s.parent){const r=ot(t)?this:s;return e?this.jitRegister(t,r):null}s=s.parent}return null}has(t,e=!1){return!!this.resolvers.has(t)||!(!e||null==this.parent)&&this.parent.has(t,!0)}get(t){if(ft(t),t.$isResolver)return t.resolve(this,this);let e,r=this;for(;null!=r;){if(e=r.resolvers.get(t),null!=e)return e.resolve(r,this);if(null==r.parent){const s=ot(t)?this:r;return e=this.jitRegister(t,s),e.resolve(r,this)}r=r.parent}throw new Error(`Unable to resolve key: ${t}`)}getAll(t,e=!1){ft(t);const r=this;let s,o=r;if(e){let e=n;for(;null!=o;)s=o.resolvers.get(t),null!=s&&(e=e.concat(pt(s,o,r))),o=o.parent;return e}for(;null!=o;){if(s=o.resolvers.get(t),null!=s)return pt(s,o,r);if(o=o.parent,null==o)return n}return n}getFactory(t){let e=lt.get(t);if(void 0===e){if(vt(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);lt.set(t,e=new rt(t,W.getDependencies(t)))}return e}registerFactory(t,e){lt.set(t,e)}createChild(t){return new ct(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if("function"!=typeof t)throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(it.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(nt(t)){const r=t.register(e);if(!(r instanceof Object)||null==r.resolve){const r=e.resolvers.get(t);if(null!=r)return r;throw new Error("A valid resolver was not returned from the static register method")}return r}if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const r=this.config.defaultResolver(t,e);return e.resolvers.set(t,r),r}}}const ht=new WeakMap;function ut(t){return function(e,r,s){if(ht.has(s))return ht.get(s);const n=t(e,r,s);return ht.set(s,n),n}}const dt=Object.freeze({instance:(t,e)=>new J(t,0,e),singleton:(t,e)=>new J(t,1,e),transient:(t,e)=>new J(t,2,e),callback:(t,e)=>new J(t,3,e),cachedCallback:(t,e)=>new J(t,3,ut(e)),aliasTo:(t,e)=>new J(e,5,t)});function ft(t){if(null==t)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function pt(t,e,r){if(t instanceof J&&4===t.strategy){const s=t.state;let n=s.length;const o=new Array(n);for(;n--;)o[n]=s[n].resolve(e,r);return o}return[t.resolve(e,r)]}const gt="(anonymous)";function bt(t){return"object"==typeof t&&null!==t||"function"==typeof t}const vt=function(){const t=new WeakMap;let e=!1,r="",s=0;return function(n){return e=t.get(n),void 0===e&&(r=n.toString(),s=r.length,e=s>=29&&s<=100&&125===r.charCodeAt(s-1)&&r.charCodeAt(s-2)<=32&&93===r.charCodeAt(s-3)&&101===r.charCodeAt(s-4)&&100===r.charCodeAt(s-5)&&111===r.charCodeAt(s-6)&&99===r.charCodeAt(s-7)&&32===r.charCodeAt(s-8)&&101===r.charCodeAt(s-9)&&118===r.charCodeAt(s-10)&&105===r.charCodeAt(s-11)&&116===r.charCodeAt(s-12)&&97===r.charCodeAt(s-13)&&110===r.charCodeAt(s-14)&&88===r.charCodeAt(s-15),t.set(n,e)),e}}(),mt={};function yt(t){switch(typeof t){case"number":return t>=0&&(0|t)===t;case"string":{const e=mt[t];if(void 0!==e)return e;const r=t.length;if(0===r)return mt[t]=!1;let s=0;for(let e=0;e<r;++e)if(s=t.charCodeAt(e),0===e&&48===s&&r>1||s<48||s>57)return mt[t]=!1;return mt[t]=!0}default:return!1}}function wt(t){return`${t.toLowerCase()}:presentation`}const Ct=new Map,xt=Object.freeze({define(t,e,r){const s=wt(t);void 0===Ct.get(s)?Ct.set(s,e):Ct.set(s,!1),r.register(dt.instance(s,e))},forTag(t,e){const r=wt(t),s=Ct.get(r);return!1===s?W.findResponsibleContainer(e).get(r):s||null}});class $t{constructor(t,e){this.template=t||null,this.styles=void 0===e?null:Array.isArray(e)?y.create(e):e instanceof y?e:y.create([e])}applyTo(t){const e=t.$fastController;null===e.template&&(e.template=this.template),null===e.styles&&(e.styles=this.styles)}}class kt extends I{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=xt.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new Vt(this===kt?class extends kt{}:this,t,e)}}function Ft(t,e,r){return"function"==typeof t?t(e,r):t}N([g],kt.prototype,"template",void 0),N([g],kt.prototype,"styles",void 0);class Vt{constructor(t,e,r){this.type=t,this.elementDefinition=e,this.overrideDefinition=r,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const r=this.definition,s=this.overrideDefinition,n=`${r.prefix||e.elementPrefix}-${r.baseName}`;e.tryDefineElement({name:n,type:this.type,baseClass:this.elementDefinition.baseClass,callback:t=>{const e=new $t(Ft(r.template,t,r),Ft(r.styles,t,r));t.definePresentation(e);let n=Ft(r.shadowOptions,t,r);t.shadowRootMode&&(n?s.shadowOptions||(n.mode=t.shadowRootMode):null!==n&&(n={mode:t.shadowRootMode})),t.defineElement({elementOptions:Ft(r.elementOptions,t,r),shadowOptions:n,attributes:Ft(r.attributes,t,r)})}})}}class St{createCSS(){return""}createBehavior(){}}function Dt(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}const Tt=document.createElement("div");class Ot{setProperty(t,e){u.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){u.queueUpdate((()=>this.target.removeProperty(t)))}}class Pt extends Ot{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class Nt extends Ot{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class Rt{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),p.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(null!==this.target)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),u.queueUpdate((()=>{null!==this.target&&this.target.setProperty(t,e)}))}removeProperty(t){this.store.delete(t),u.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(t)}))}handleChange(t,e){const{sheet:r}=this.style;if(r){const t=r.insertRule(":host{}",r.cssRules.length);this.target=r.cssRules[t].style}else this.target=null}}N([g],Rt.prototype,"target",void 0);class Lt{constructor(t){this.target=t.style}setProperty(t,e){u.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){u.queueUpdate((()=>this.target.removeProperty(t)))}}class Mt{setProperty(t,e){Mt.properties[t]=e;for(const r of Mt.roots.values())It.getOrCreate(Mt.normalizeRoot(r)).setProperty(t,e)}removeProperty(t){delete Mt.properties[t];for(const e of Mt.roots.values())It.getOrCreate(Mt.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=Mt;if(!e.has(t)){e.add(t);const r=It.getOrCreate(this.normalizeRoot(t));for(const t in Mt.properties)r.setProperty(t,Mt.properties[t])}}static unregisterRoot(t){const{roots:e}=Mt;if(e.has(t)){e.delete(t);const r=It.getOrCreate(Mt.normalizeRoot(t));for(const t in Mt.properties)r.removeProperty(t)}}static normalizeRoot(t){return t===Tt?document:t}}Mt.roots=new Set,Mt.properties={};const Bt=new WeakMap,At=u.supportsAdoptedStyleSheets?class extends Ot{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(y.create([e]))}}:Rt,It=Object.freeze({getOrCreate(t){if(Bt.has(t))return Bt.get(t);let e;return e=t===Tt?new Mt:t instanceof Document?u.supportsAdoptedStyleSheets?new Pt:new Nt:t instanceof I?new At(t):new Lt(t),Bt.set(t,e),e}});class Et extends St{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,null!==t.cssCustomPropertyName&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Et.uniqueId(),Et.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new Et({name:"string"==typeof t?t:t.name,cssCustomPropertyName:"string"==typeof t?t:void 0===t.cssCustomPropertyName?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return"string"==typeof t.cssCustomProperty}static isDerivedDesignTokenValue(t){return"function"==typeof t}static getTokenById(t){return Et.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=_t.getOrCreate(t).get(this);if(void 0!==e)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof Et&&(e=this.alias(e)),_t.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),_t.existsFor(t)&&_t.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(Tt,t),this}subscribe(t,e){const r=this.getOrCreateSubscriberSet(e);e&&!_t.existsFor(e)&&_t.getOrCreate(e),r.has(t)||r.add(t)}unsubscribe(t,e){const r=this.subscribers.get(e||this);r&&r.has(t)&&r.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach((t=>t.handleChange(e))),this.subscribers.has(t)&&this.subscribers.get(t).forEach((t=>t.handleChange(e)))}alias(t){return e=>t.getValueFor(e)}}Et.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})(),Et.tokensById=new Map;class jt{constructor(t,e,r){this.source=t,this.token=e,this.node=r,this.dependencies=new Set,this.observer=p.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,m))}}class Ht{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),p.getNotifier(this).notify(t.id))}get(t){return p.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const zt=new WeakMap,qt=new WeakMap;class _t{constructor(t){this.target=t,this.store=new Ht,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,e)=>{const r=Et.getTokenById(e);if(r&&(r.notify(this.target),Et.isCSSDesignToken(r))){const e=this.parent,s=this.isReflecting(r);if(e){const n=e.get(r),o=t.get(r);n===o||s?n===o&&s&&this.stopReflectToCSS(r):this.reflectToCSS(r)}else s||this.reflectToCSS(r)}}},zt.set(t,this),p.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof I?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return zt.get(t)||new _t(t)}static existsFor(t){return zt.has(t)}static findParent(t){if(Tt!==t.target){let e=Dt(t.target);for(;null!==e;){if(zt.has(e))return zt.get(e);e=Dt(e)}return _t.getOrCreate(Tt)}return null}static findClosestAssignedNode(t,e){let r=e;do{if(r.has(t))return r;r=r.parent?r.parent:r.target!==Tt?_t.getOrCreate(Tt):null}while(null!==r);return null}get parent(){return qt.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(void 0!==e)return e;const r=this.getRaw(t);return void 0!==r?(this.hydrate(t,r),this.get(t)):void 0}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):null===(e=_t.findClosestAssignedNode(t,this))||void 0===e?void 0:e.getRaw(t)}set(t,e){Et.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),Et.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=_t.findParent(this);t&&t.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&qt.get(this).removeChild(this)}appendChild(t){t.parent&&qt.get(t).removeChild(t);const e=this.children.filter((e=>t.contains(e)));qt.set(t,this),this.children.push(t),e.forEach((e=>t.appendChild(e))),p.getNotifier(this.store).subscribe(t);for(const[e,r]of this.store.all())t.hydrate(e,this.bindingObservers.has(e)?this.getRaw(e):r)}removeChild(t){const e=this.children.indexOf(t);return-1!==e&&this.children.splice(e,1),p.getNotifier(this.store).unsubscribe(t),t.parent===this&&qt.delete(t)}contains(t){return function(t,e){let r=e;for(;null!==r;){if(r===t)return!0;r=Dt(r)}return!1}(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),_t.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),_t.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const r=Et.getTokenById(e);r&&this.hydrate(r,this.getRaw(r))}hydrate(t,e){if(!this.has(t)){const r=this.bindingObservers.get(t);Et.isDerivedDesignTokenValue(e)?r?r.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(r&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const r=new jt(e,t,this);return this.bindingObservers.set(t,r),r}tearDownBindingObserver(t){return!!this.bindingObservers.has(t)&&(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0)}}_t.cssCustomPropertyReflector=new class{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:r}=t;this.add(e,r)}add(t,e){It.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(_t.getOrCreate(e).get(t)))}remove(t,e){It.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&"function"==typeof t.createCSS?t.createCSS():t}},N([g],_t.prototype,"children",void 0);const Ut=Object.freeze({create:function(t){return Et.from(t)},notifyConnection:t=>!(!t.isConnected||!_t.existsFor(t)||(_t.getOrCreate(t).bind(),0)),notifyDisconnection:t=>!(t.isConnected||!_t.existsFor(t)||(_t.getOrCreate(t).unbind(),0)),registerRoot(t=Tt){Mt.registerRoot(t)},unregisterRoot(t=Tt){Mt.unregisterRoot(t)}}),Gt=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Wt=new Map,Zt=new Map;let Qt=null;const Kt=W.createInterface((t=>t.cachedCallback((t=>(null===Qt&&(Qt=new Yt(null,t)),Qt))))),Xt=Object.freeze({tagFor:t=>Zt.get(t),responsibleFor(t){const e=t.$$designSystem$$;return e||W.findResponsibleContainer(t).get(Kt)},getOrCreate(t){if(!t)return null===Qt&&(Qt=W.getOrCreateDOMContainer().get(Kt)),Qt;const e=t.$$designSystem$$;if(e)return e;const r=W.getOrCreateDOMContainer(t);if(r.has(Kt,!1))return r.get(Kt);{const e=new Yt(t,r);return r.register(dt.instance(Kt,e)),e}}});class Yt{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Gt.definitionCallbackOnly,null!==t&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,r=[],s=this.disambiguate,n=this.shadowRootMode,o={elementPrefix:this.prefix,tryDefineElement(t,o,i){const a=function(t,e,r){return"string"==typeof t?{name:t,type:e,callback:r}:t}(t,o,i),{name:l,callback:c,baseClass:h}=a;let{type:u}=a,d=l,f=Wt.get(d),p=!0;for(;f;){const t=s(d,u,f);switch(t){case Gt.ignoreDuplicate:return;case Gt.definitionCallbackOnly:p=!1,f=void 0;break;default:d=t,f=Wt.get(d)}}p&&((Zt.has(u)||u===kt)&&(u=class extends u{}),Wt.set(d,u),Zt.set(u,d),h&&Zt.set(h,d)),r.push(new Jt(e,d,u,n,c,p))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&Ut.registerRoot(this.designTokenRoot)),e.registerWithContext(o,...t);for(const t of r)t.callback(t),t.willDefine&&null!==t.definition&&t.definition.define();return this}}class Jt{constructor(t,e,r,s,n,o){this.container=t,this.name=e,this.type=r,this.shadowRootMode=s,this.callback=n,this.willDefine=o,this.definition=null}definePresentation(t){xt.define(this.name,t,this.container)}defineElement(t){this.definition=new P(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return Xt.tagFor(t)}}class te{}N([S({attribute:"aria-atomic"})],te.prototype,"ariaAtomic",void 0),N([S({attribute:"aria-busy"})],te.prototype,"ariaBusy",void 0),N([S({attribute:"aria-controls"})],te.prototype,"ariaControls",void 0),N([S({attribute:"aria-current"})],te.prototype,"ariaCurrent",void 0),N([S({attribute:"aria-describedby"})],te.prototype,"ariaDescribedby",void 0),N([S({attribute:"aria-details"})],te.prototype,"ariaDetails",void 0),N([S({attribute:"aria-disabled"})],te.prototype,"ariaDisabled",void 0),N([S({attribute:"aria-errormessage"})],te.prototype,"ariaErrormessage",void 0),N([S({attribute:"aria-flowto"})],te.prototype,"ariaFlowto",void 0),N([S({attribute:"aria-haspopup"})],te.prototype,"ariaHaspopup",void 0),N([S({attribute:"aria-hidden"})],te.prototype,"ariaHidden",void 0),N([S({attribute:"aria-invalid"})],te.prototype,"ariaInvalid",void 0),N([S({attribute:"aria-keyshortcuts"})],te.prototype,"ariaKeyshortcuts",void 0),N([S({attribute:"aria-label"})],te.prototype,"ariaLabel",void 0),N([S({attribute:"aria-labelledby"})],te.prototype,"ariaLabelledby",void 0),N([S({attribute:"aria-live"})],te.prototype,"ariaLive",void 0),N([S({attribute:"aria-owns"})],te.prototype,"ariaOwns",void 0),N([S({attribute:"aria-relevant"})],te.prototype,"ariaRelevant",void 0),N([S({attribute:"aria-roledescription"})],te.prototype,"ariaRoledescription",void 0);class ee{constructor(){this.targetIndex=0}}class re extends ee{constructor(){super(...arguments),this.createPlaceholder=u.createInterpolationPlaceholder}}class se extends ee{constructor(t,e,r){super(),this.name=t,this.behavior=e,this.options=r}createPlaceholder(t){return u.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function ne(t,e){this.source=t,this.context=e,null===this.bindingObserver&&(this.bindingObserver=p.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function oe(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function ie(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function ae(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function le(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function ce(t){u.setAttribute(this.target,this.targetName,t)}function he(t){u.setBooleanAttribute(this.target,this.targetName,t)}function ue(t){if(null==t&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;void 0===e?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function de(t){this.target[this.targetName]=t}function fe(t){const e=this.classVersions||Object.create(null),r=this.target;let s=this.version||0;if(null!=t&&t.length){const n=t.split(/\s+/);for(let t=0,o=n.length;t<o;++t){const o=n[t];""!==o&&(e[o]=s,r.classList.add(o))}}if(this.classVersions=e,this.version=s+1,0!==s){s-=1;for(const t in e)e[t]===s&&r.classList.remove(t)}}class pe extends re{constructor(t){super(),this.binding=t,this.bind=ne,this.unbind=ie,this.updateTarget=ce,this.isBindingVolatile=p.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,void 0!==t)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=de,"innerHTML"===this.cleanedTargetName){const t=this.binding;this.binding=(e,r)=>u.createHTML(t(e,r))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=he;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=oe,this.unbind=le;break;default:this.cleanedTargetName=t,"class"===t&&(this.updateTarget=fe)}}targetAtContent(){this.updateTarget=ue,this.unbind=ae}createBehavior(t){return new ge(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ge{constructor(t,e,r,s,n,o,i){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=r,this.bind=s,this.unbind=n,this.updateTarget=o,this.targetName=i}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){v.setEvent(t);const e=this.binding(this.source,this.context);v.setEvent(null),!0!==e&&t.preventDefault()}}let be=null;class ve{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){be=this}static borrow(t){const e=be||new ve;return e.directives=t,e.reset(),be=null,e}}function me(t){if(1===t.length)return t[0];let e;const r=t.length,s=t.map((t=>"string"==typeof t?()=>t:(e=t.targetName||e,t.binding))),n=new pe(((t,e)=>{let n="";for(let o=0;o<r;++o)n+=s[o](t,e);return n}));return n.targetName=e,n}const ye=h.length;function we(t,e){const r=e.split(c);if(1===r.length)return null;const s=[];for(let e=0,n=r.length;e<n;++e){const n=r[e],o=n.indexOf(h);let i;if(-1===o)i=n;else{const e=parseInt(n.substring(0,o));s.push(t.directives[e]),i=n.substring(o+ye)}""!==i&&s.push(i)}return s}function Ce(t,e,r=!1){const s=e.attributes;for(let n=0,o=s.length;n<o;++n){const i=s[n],a=i.value,l=we(t,a);let c=null;null===l?r&&(c=new pe((()=>a)),c.targetName=i.name):c=me(l),null!==c&&(e.removeAttributeNode(i),n--,o--,t.addFactory(c))}}function xe(t,e,r){const s=we(t,e.textContent);if(null!==s){let n=e;for(let o=0,i=s.length;o<i;++o){const i=s[o],a=0===o?e:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);"string"==typeof i?a.textContent=i:(a.textContent=" ",t.captureContentBinding(i)),n=a,t.targetIndex++,a!==e&&r.nextNode()}t.targetIndex--}}const $e=document.createRange();class ke{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=t.parentNode,r=this.lastChild;let s,n=this.firstChild;for(;n!==r;)s=n.nextSibling,e.insertBefore(n,t),n=s;e.insertBefore(r,t)}}remove(){const t=this.fragment,e=this.lastChild;let r,s=this.firstChild;for(;s!==e;)r=s.nextSibling,t.appendChild(s),s=r;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let r,s=this.firstChild;for(;s!==e;)r=s.nextSibling,t.removeChild(s),s=r;t.removeChild(e);const n=this.behaviors,o=this.source;for(let t=0,e=n.length;t<e;++t)n[t].unbind(o)}bind(t,e){const r=this.behaviors;if(this.source!==t)if(null!==this.source){const s=this.source;this.source=t,this.context=e;for(let n=0,o=r.length;n<o;++n){const o=r[n];o.unbind(s),o.bind(t,e)}}else{this.source=t,this.context=e;for(let s=0,n=r.length;s<n;++s)r[s].bind(t,e)}}unbind(){if(null===this.source)return;const t=this.behaviors,e=this.source;for(let r=0,s=t.length;r<s;++r)t[r].unbind(e);this.source=null}static disposeContiguousBatch(t){if(0!==t.length){$e.setStartBefore(t[0].firstChild),$e.setEndAfter(t[t.length-1].lastChild),$e.deleteContents();for(let e=0,r=t.length;e<r;++e){const r=t[e],s=r.behaviors,n=r.source;for(let t=0,e=s.length;t<e;++t)s[t].unbind(n)}}}}class Fe{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(null===this.fragment){let t;const e=this.html;if("string"==typeof e){t=document.createElement("template"),t.innerHTML=u.createHTML(e);const r=t.content.firstElementChild;null!==r&&"TEMPLATE"===r.tagName&&(t=r)}else t=e;const r=function(t,e){const r=t.content;document.adoptNode(r);const s=ve.borrow(e);Ce(s,t,!0);const n=s.behaviorFactories;s.reset();const o=u.createTemplateWalker(r);let i;for(;i=o.nextNode();)switch(s.targetIndex++,i.nodeType){case 1:Ce(s,i);break;case 3:xe(s,i,o);break;case 8:u.isMarker(i)&&s.addFactory(e[u.extractDirectiveIndexFromMarker(i)])}let a=0;(u.isMarker(r.firstChild)||1===r.childNodes.length&&e.length)&&(r.insertBefore(document.createComment(""),r.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:r,viewBehaviorFactories:l,hostBehaviorFactories:n,targetOffset:a}}(t,this.directives);this.fragment=r.fragment,this.viewBehaviorFactories=r.viewBehaviorFactories,this.hostBehaviorFactories=r.hostBehaviorFactories,this.targetOffset=r.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),r=this.viewBehaviorFactories,s=new Array(this.behaviorCount),n=u.createTemplateWalker(e);let o=0,i=this.targetOffset,a=n.nextNode();for(let t=r.length;o<t;++o){const t=r[o],e=t.targetIndex;for(;null!==a;){if(i===e){s[o]=t.createBehavior(a);break}a=n.nextNode(),i++}}if(this.hasHostBehaviors){const e=this.hostBehaviorFactories;for(let r=0,n=e.length;r<n;++r,++o)s[o]=e[r].createBehavior(t)}return new ke(e,s)}render(t,e,r){"string"==typeof e&&(e=document.getElementById(e)),void 0===r&&(r=e);const s=this.create(r);return s.bind(t,m),s.appendTo(e),s}}const Ve=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Se(t,...e){const r=[];let s="";for(let n=0,o=t.length-1;n<o;++n){const o=t[n];let i=e[n];if(s+=o,i instanceof Fe){const t=i;i=()=>t}if("function"==typeof i&&(i=new pe(i)),i instanceof re){const t=Ve.exec(o);null!==t&&(i.targetName=t[2])}i instanceof ee?(s+=i.createPlaceholder(r.length),r.push(i)):s+=i}return s+=t[t.length-1],new Fe(s,r)}class De{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function Te(t){return new se("fast-ref",De,t)}class Oe{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Pe=(t,e)=>Se`
    <span
        part="end"
        ${Te("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${Te("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Ne=(t,e)=>Se`
    <span
        part="start"
        ${Te("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Te("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;function Re(t,...e){e.forEach((e=>{if(Object.getOwnPropertyNames(e.prototype).forEach((r=>{"constructor"!==r&&Object.defineProperty(t.prototype,r,Object.getOwnPropertyDescriptor(e.prototype,r))})),e.attributes){const r=t.attributes||[];t.attributes=r.concat(e.attributes)}}))}Se`
    <span part="end" ${Te("endContainer")}>
        <slot
            name="end"
            ${Te("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,Se`
    <span part="start" ${Te("startContainer")}>
        <slot
            name="start"
            ${Te("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`;class Le extends kt{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(t=this.$fastController.definition.shadowOptions)||void 0===t?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}N([S],Le.prototype,"download",void 0),N([S],Le.prototype,"href",void 0),N([S],Le.prototype,"hreflang",void 0),N([S],Le.prototype,"ping",void 0),N([S],Le.prototype,"referrerpolicy",void 0),N([S],Le.prototype,"rel",void 0),N([S],Le.prototype,"target",void 0),N([S],Le.prototype,"type",void 0),N([g],Le.prototype,"defaultSlottedContent",void 0);class Me{}N([S({attribute:"aria-expanded"})],Me.prototype,"ariaExpanded",void 0),Re(Me,te),Re(Le,Oe,Me);class Be extends class{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=p.getAccessors(t).some((t=>t.name===e)),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(n),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return void 0!==this.options.filter&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Ae(t){return"string"==typeof t&&(t={property:t}),new se("fast-slotted",Be,t)}function Ie(t,e){const r=[];let s="";const n=[];for(let o=0,i=t.length-1;o<i;++o){s+=t[o];let i=e[o];if(i instanceof St){const t=i.createBehavior();i=i.createCSS(),t&&n.push(t)}i instanceof y||i instanceof CSSStyleSheet?(""!==s.trim()&&(r.push(s),s=""),r.push(i)):s+=i}return s+=t[t.length-1],""!==s.trim()&&r.push(s),{styles:r,behaviors:n}}function Ee(t,...e){const{styles:r,behaviors:s}=Ie(t,e),n=y.create(r);return s.length&&n.withBehaviors(...s),n}class je extends St{constructor(t,e){super(),this.behaviors=e,this.css="";const r=t.reduce(((t,e)=>("string"==typeof e?this.css+=e:t.push(e),t)),[]);r.length&&(this.styles=y.create(r))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}let He;const ze=function(){if("boolean"==typeof He)return He;if("undefined"==typeof window||!window.document||!window.document.createElement)return He=!1,He;const t=document.createElement("style"),e=function(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}();null!==e&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),He=!0}catch(t){He=!1}finally{document.head.removeChild(t)}return He}()?"focus-visible":"focus";class qe extends class{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,r=this.constructListener(t);r.bind(e)(),e.addListener(r),this.listenerCache.set(t,r)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new qe(t,e)}constructListener(t){let e=!1;const r=this.styles;return function(){const{matches:s}=this;s&&!e?(t.$fastController.addStyles(r),e=s):!s&&e&&(t.$fastController.removeStyles(r),e=s)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const _e=qe.with(window.matchMedia("(forced-colors)"));var Ue,Ge;function We(t,e,r){return isNaN(t)||t<=e?e:t>=r?r:t}function Ze(t,e,r){return isNaN(t)||t<=e?0:t>=r?1:t/(r-e)}function Qe(t,e,r){return isNaN(t)?e:e+t*(r-e)}function Ke(t){return t*(Math.PI/180)}function Xe(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:e+t*(r-e)}function Ye(t,e,r){if(t<=0)return e%360;if(t>=1)return r%360;const s=(e-r+360)%360;return s<=(r-e+360)%360?(e-s*t+360)%360:(e+s*t+360)%360}function Je(t,e){const r=Math.pow(10,e);return Math.round(t*r)/r}qe.with(window.matchMedia("(prefers-color-scheme: dark)")),qe.with(window.matchMedia("(prefers-color-scheme: light)")),function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"}(Ue||(Ue={})),function(t){t.ltr="ltr",t.rtl="rtl"}(Ge||(Ge={})),Math.PI;class tr{constructor(t,e,r,s){this.r=t,this.g=e,this.b=r,this.a="number"!=typeof s||isNaN(s)?1:s}static fromObject(t){return!t||isNaN(t.r)||isNaN(t.g)||isNaN(t.b)?null:new tr(t.r,t.g,t.b,t.a)}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Qe(this.r,0,255))},${Math.round(Qe(this.g,0,255))},${Math.round(Qe(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Qe(this.r,0,255))},${Math.round(Qe(this.g,0,255))},${Math.round(Qe(this.b,0,255))},${We(this.a,0,1)})`}roundToPrecision(t){return new tr(Je(this.r,t),Je(this.g,t),Je(this.b,t),Je(this.a,t))}clamp(){return new tr(We(this.r,0,1),We(this.g,0,1),We(this.b,0,1),We(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return function(t){const e=Math.round(We(t,0,255)).toString(16);return 1===e.length?"0"+e:e}(Qe(t,0,255))}}class er{constructor(t,e,r){this.h=t,this.s=e,this.l=r}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.l)?null:new er(t.h,t.s,t.l)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new er(Je(this.h,t),Je(this.s,t),Je(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class rr{constructor(t,e,r){this.h=t,this.s=e,this.v=r}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.v)?null:new rr(t.h,t.s,t.v)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.v===t.v}roundToPrecision(t){return new rr(Je(this.h,t),Je(this.s,t),Je(this.v,t))}toObject(){return{h:this.h,s:this.s,v:this.v}}}class sr{constructor(t,e,r){this.l=t,this.a=e,this.b=r}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.a)||isNaN(t.b)?null:new sr(t.l,t.a,t.b)}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new sr(Je(this.l,t),Je(this.a,t),Je(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}sr.epsilon=216/24389,sr.kappa=24389/27;class nr{constructor(t,e,r){this.l=t,this.c=e,this.h=r}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.c)||isNaN(t.h)?null:new nr(t.l,t.c,t.h)}equalValue(t){return this.l===t.l&&this.c===t.c&&this.h===t.h}roundToPrecision(t){return new nr(Je(this.l,t),Je(this.c,t),Je(this.h,t))}toObject(){return{l:this.l,c:this.c,h:this.h}}}class or{constructor(t,e,r){this.x=t,this.y=e,this.z=r}static fromObject(t){return!t||isNaN(t.x)||isNaN(t.y)||isNaN(t.z)?null:new or(t.x,t.y,t.z)}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new or(Je(this.x,t),Je(this.y,t),Je(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function ir(t){return.2126*t.r+.7152*t.g+.0722*t.b}function ar(t){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return ir(new tr(e(t.r),e(t.g),e(t.b),1))}or.whitePoint=new or(.95047,1,1.08883);const lr=(t,e)=>(t+.05)/(e+.05);function cr(t,e){const r=ar(t),s=ar(e);return r>s?lr(r,s):lr(s,r)}function hr(t){const e=Math.max(t.r,t.g,t.b),r=Math.min(t.r,t.g,t.b),s=e-r;let n=0;0!==s&&(n=e===t.r?(t.g-t.b)/s%6*60:e===t.g?60*((t.b-t.r)/s+2):60*((t.r-t.g)/s+4)),n<0&&(n+=360);const o=(e+r)/2;let i=0;return 0!==s&&(i=s/(1-Math.abs(2*o-1))),new er(n,i,o)}function ur(t,e=1){const r=(1-Math.abs(2*t.l-1))*t.s,s=r*(1-Math.abs(t.h/60%2-1)),n=t.l-r/2;let o=0,i=0,a=0;return t.h<60?(o=r,i=s,a=0):t.h<120?(o=s,i=r,a=0):t.h<180?(o=0,i=r,a=s):t.h<240?(o=0,i=s,a=r):t.h<300?(o=s,i=0,a=r):t.h<360&&(o=r,i=0,a=s),new tr(o+n,i+n,a+n,e)}function dr(t){const e=Math.max(t.r,t.g,t.b),r=e-Math.min(t.r,t.g,t.b);let s=0;0!==r&&(s=e===t.r?(t.g-t.b)/r%6*60:e===t.g?60*((t.b-t.r)/r+2):60*((t.r-t.g)/r+4)),s<0&&(s+=360);let n=0;return 0!==e&&(n=r/e),new rr(s,n,e)}function fr(t){function e(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}const r=e(t.r),s=e(t.g),n=e(t.b);return new or(.4124564*r+.3575761*s+.1804375*n,.2126729*r+.7151522*s+.072175*n,.0193339*r+.119192*s+.9503041*n)}function pr(t,e=1){function r(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}const s=r(3.2404542*t.x-1.5371385*t.y-.4985314*t.z),n=r(-.969266*t.x+1.8760108*t.y+.041556*t.z),o=r(.0556434*t.x-.2040259*t.y+1.0572252*t.z);return new tr(s,n,o,e)}function gr(t){return function(t){function e(t){return t>sr.epsilon?Math.pow(t,1/3):(sr.kappa*t+16)/116}const r=e(t.x/or.whitePoint.x),s=e(t.y/or.whitePoint.y),n=e(t.z/or.whitePoint.z);return new sr(116*s-16,500*(r-s),200*(s-n))}(fr(t))}function br(t,e=1){return pr(function(t){const e=(t.l+16)/116,r=e+t.a/500,s=e-t.b/200,n=Math.pow(r,3),o=Math.pow(e,3),i=Math.pow(s,3);let a=0;a=n>sr.epsilon?n:(116*r-16)/sr.kappa;let l=0;l=t.l>sr.epsilon*sr.kappa?o:t.l/sr.kappa;let c=0;return c=i>sr.epsilon?i:(116*s-16)/sr.kappa,a=or.whitePoint.x*a,l=or.whitePoint.y*l,c=or.whitePoint.z*c,new or(a,l,c)}(t),e)}function vr(t){return function(t){let e=0;(Math.abs(t.b)>.001||Math.abs(t.a)>.001)&&(e=Math.atan2(t.b,t.a)*(180/Math.PI)),e<0&&(e+=360);const r=Math.sqrt(t.a*t.a+t.b*t.b);return new nr(t.l,r,e)}(gr(t))}function mr(t,e=1){return br(function(t){let e=0,r=0;return 0!==t.h&&(e=Math.cos(Ke(t.h))*t.c,r=Math.sin(Ke(t.h))*t.c),new sr(t.l,e,r)}(t),e)}function yr(t,e,r=18){const s=vr(t);let n=s.c+e*r;return n<0&&(n=0),mr(new nr(s.l,n,s.h))}function wr(t,e){return t*e}function Cr(t,e){return new tr(wr(t.r,e.r),wr(t.g,e.g),wr(t.b,e.b),1)}function xr(t,e){return We(t<.5?2*e*t:1-2*(1-e)*(1-t),0,1)}function $r(t,e){return new tr(xr(t.r,e.r),xr(t.g,e.g),xr(t.b,e.b),1)}var kr,Fr;function Vr(t,e,r,s){if(isNaN(t)||t<=0)return r;if(t>=1)return s;switch(e){case Fr.HSL:return ur(function(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:new er(Ye(t,e.h,r.h),Xe(t,e.s,r.s),Xe(t,e.l,r.l))}(t,hr(r),hr(s)));case Fr.HSV:return function(t,e=1){const r=t.s*t.v,s=r*(1-Math.abs(t.h/60%2-1)),n=t.v-r;let o=0,i=0,a=0;return t.h<60?(o=r,i=s,a=0):t.h<120?(o=s,i=r,a=0):t.h<180?(o=0,i=r,a=s):t.h<240?(o=0,i=s,a=r):t.h<300?(o=s,i=0,a=r):t.h<360&&(o=r,i=0,a=s),new tr(o+n,i+n,a+n,e)}(function(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:new rr(Ye(t,e.h,r.h),Xe(t,e.s,r.s),Xe(t,e.v,r.v))}(t,dr(r),dr(s)));case Fr.XYZ:return pr(function(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:new or(Xe(t,e.x,r.x),Xe(t,e.y,r.y),Xe(t,e.z,r.z))}(t,fr(r),fr(s)));case Fr.LAB:return br(function(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:new sr(Xe(t,e.l,r.l),Xe(t,e.a,r.a),Xe(t,e.b,r.b))}(t,gr(r),gr(s)));case Fr.LCH:return mr(function(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:new nr(Xe(t,e.l,r.l),Xe(t,e.c,r.c),Ye(t,e.h,r.h))}(t,vr(r),vr(s)));default:return function(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:new tr(Xe(t,e.r,r.r),Xe(t,e.g,r.g),Xe(t,e.b,r.b),Xe(t,e.a,r.a))}(t,r,s)}}!function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"}(kr||(kr={})),function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"}(Fr||(Fr={}));class Sr{constructor(t){if(null==t||0===t.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(t)}static createBalancedColorScale(t){if(null==t||0===t.length)throw new Error("The colors argument must be non-empty");const e=new Array(t.length);for(let r=0;r<t.length;r++)0===r?e[r]={color:t[r],position:0}:r===t.length-1?e[r]={color:t[r],position:1}:e[r]={color:t[r],position:r*(1/(t.length-1))};return new Sr(e)}getColor(t,e=Fr.RGB){if(1===this.stops.length)return this.stops[0].color;if(t<=0)return this.stops[0].color;if(t>=1)return this.stops[this.stops.length-1].color;let r=0;for(let e=0;e<this.stops.length;e++)this.stops[e].position<=t&&(r=e);let s=r+1;return s>=this.stops.length&&(s=this.stops.length-1),Vr((t-this.stops[r].position)*(1/(this.stops[s].position-this.stops[r].position)),e,this.stops[r].color,this.stops[s].color)}trim(t,e,r=Fr.RGB){if(t<0||e>1||e<t)throw new Error("Invalid bounds");if(t===e)return new Sr([{color:this.getColor(t,r),position:0}]);const s=[];for(let r=0;r<this.stops.length;r++)this.stops[r].position>=t&&this.stops[r].position<=e&&s.push(this.stops[r]);if(0===s.length)return new Sr([{color:this.getColor(t),position:t},{color:this.getColor(e),position:e}]);s[0].position!==t&&s.unshift({color:this.getColor(t),position:t}),s[s.length-1].position!==e&&s.push({color:this.getColor(e),position:e});const n=e-t,o=new Array(s.length);for(let e=0;e<s.length;e++)o[e]={color:s[e].color,position:(s[e].position-t)/n};return new Sr(o)}findNextColor(t,e,r=!1,s=Fr.RGB,n=.005,o=32){isNaN(t)||t<=0?t=0:t>=1&&(t=1);const i=this.getColor(t,s),a=r?0:1;if(cr(i,this.getColor(a,s))<=e)return a;let l=r?0:t,c=r?t:0,h=a,u=0;for(;u<=o;){h=Math.abs(c-l)/2+l;const t=cr(i,this.getColor(h,s));if(Math.abs(t-e)<=n)return h;t>e?r?l=h:c=h:r?c=h:l=h,u++}return h}clone(){const t=new Array(this.stops.length);for(let e=0;e<t.length;e++)t[e]={color:this.stops[e].color,position:this.stops[e].position};return new Sr(t)}sortColorScaleStops(t){return t.sort(((t,e)=>{const r=t.position,s=e.position;return r<s?-1:r>s?1:0}))}}const Dr=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Tr(t){const e=Dr.exec(t);if(null===e)return null;let r=e[1];if(3===r.length){const t=r.charAt(0),e=r.charAt(1),s=r.charAt(2);r=t.concat(t,e,e,s,s)}const s=parseInt(r,16);return isNaN(s)?null:new tr(Ze((16711680&s)>>>16,0,255),Ze((65280&s)>>>8,0,255),Ze(255&s,0,255),1)}class Or{constructor(t){this.config=Object.assign({},Or.defaultPaletteConfig,t),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(t){let e=!1;for(const r in t)this.config[r]&&(this.config[r].equalValue?this.config[r].equalValue(t[r])||(this.config[r]=t[r],e=!0):t[r]!==this.config[r]&&(this.config[r]=t[r],e=!0));return e&&this.updatePaletteColors(),e}updatePaletteColors(){const t=this.generatePaletteColorScale();for(let e=0;e<this.config.steps;e++)this.palette[e]=t.getColor(e/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const t=hr(this.config.baseColor),e=new Sr([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let r=e.getColor(0),s=e.getColor(1);if(t.s>=this.config.saturationAdjustmentCutoff&&(r=yr(r,this.config.saturationLight),s=yr(s,this.config.saturationDark)),0!==this.config.multiplyLight){const t=Cr(this.config.baseColor,r);r=Vr(this.config.multiplyLight,this.config.interpolationMode,r,t)}if(0!==this.config.multiplyDark){const t=Cr(this.config.baseColor,s);s=Vr(this.config.multiplyDark,this.config.interpolationMode,s,t)}if(0!==this.config.overlayLight){const t=$r(this.config.baseColor,r);r=Vr(this.config.overlayLight,this.config.interpolationMode,r,t)}if(0!==this.config.overlayDark){const t=$r(this.config.baseColor,s);s=Vr(this.config.overlayDark,this.config.interpolationMode,s,t)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new Sr([{position:0,color:this.config.baseColor},{position:1,color:s.clamp()}]):this.config.baseScalePosition>=1?new Sr([{position:0,color:r.clamp()},{position:1,color:this.config.baseColor}]):new Sr([{position:0,color:r.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:s.clamp()}]):new Sr([{position:0,color:r.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:s.clamp()}])}}Or.defaultPaletteConfig={baseColor:Tr("#808080"),steps:11,interpolationMode:Fr.RGB,scaleColorLight:new tr(1,1,1,1),scaleColorDark:new tr(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},Or.greyscalePaletteConfig={baseColor:Tr("#808080"),steps:11,interpolationMode:Fr.RGB,scaleColorLight:new tr(1,1,1,1),scaleColorDark:new tr(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},Or.defaultPaletteConfig.scaleColorLight,Or.defaultPaletteConfig.scaleColorDark;class Pr{constructor(t){this.palette=[],this.config=Object.assign({},Pr.defaultPaletteConfig,t),this.regenPalettes()}regenPalettes(){let t=this.config.steps;(isNaN(t)||t<3)&&(t=3);const e=.14,r=new tr(e,e,e,1),s=new Or(Object.assign(Object.assign({},Or.greyscalePaletteConfig),{baseColor:r,baseScalePosition:86/94,steps:t})).palette,n=(ir(this.config.baseColor)+hr(this.config.baseColor).l)/2,o=this.matchRelativeLuminanceIndex(n,s)/(t-1),i=this.matchRelativeLuminanceIndex(e,s)/(t-1),a=hr(this.config.baseColor),l=ur(er.fromObject({h:a.h,s:a.s,l:e})),c=ur(er.fromObject({h:a.h,s:a.s,l:.06})),h=new Array(5);h[0]={position:0,color:new tr(1,1,1,1)},h[1]={position:o,color:this.config.baseColor},h[2]={position:i,color:l},h[3]={position:.99,color:c},h[4]={position:1,color:new tr(0,0,0,1)};const u=new Sr(h);this.palette=new Array(t);for(let e=0;e<t;e++){const r=u.getColor(e/(t-1),Fr.RGB);this.palette[e]=r}}matchRelativeLuminanceIndex(t,e){let r=Number.MAX_VALUE,s=0,n=0;const o=e.length;for(;n<o;n++){const o=Math.abs(ir(e[n])-t);o<r&&(r=o,s=n)}return s}}function Nr(t,e){const r=t.relativeLuminance>e.relativeLuminance?t:e,s=t.relativeLuminance>e.relativeLuminance?e:t;return(r.relativeLuminance+.05)/(s.relativeLuminance+.05)}Pr.defaultPaletteConfig={baseColor:Tr("#808080"),steps:94};const Rr=Object.freeze({create:(t,e,r)=>new Lr(t,e,r),from:t=>new Lr(t.r,t.g,t.b)});class Lr extends tr{constructor(t,e,r){super(t,e,r,1),this.toColorString=this.toStringHexRGB,this.contrast=Nr.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=ar(this)}static fromObject(t){return new Lr(t.r,t.g,t.b)}}function Mr(t,e,r=0,s=t.length-1){if(s===r)return t[r];const n=Math.floor((s-r)/2)+r;return e(t[n])?Mr(t,e,r,n):Mr(t,e,n+1,s)}const Br=(-.1+Math.sqrt(.21))/2;function Ar(t){return function(t){return t.relativeLuminance<=Br}(t)?-1:1}const Ir=Object.freeze({create:function(t,e,r){return"number"==typeof t?Ir.from(Rr.create(t,e,r)):Ir.from(t)},from:function(t){return function(t){const e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const r in e)if(typeof e[r]!=typeof t[r])return!1;return!0}(t)?Er.from(t):Er.from(Rr.create(t.r,t.g,t.b))}});class Er{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,r,s){void 0===r&&(r=this.closestIndexOf(t));let n=this.swatches;const o=this.lastIndex;let i=r;return void 0===s&&(s=Ar(t)),-1===s&&(n=this.reversedSwatches,i=o-i),Mr(n,(r=>Nr(t,r)>=e),i,o)}get(t){return this.swatches[t]||this.swatches[We(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(-1!==e)return this.closestIndexCache.set(t.relativeLuminance,e),e;const r=this.swatches.reduce(((e,r)=>Math.abs(r.relativeLuminance-t.relativeLuminance)<Math.abs(e.relativeLuminance-t.relativeLuminance)?r:e));return e=this.swatches.indexOf(r),this.closestIndexCache.set(t.relativeLuminance,e),e}static from(t){return new Er(t,Object.freeze(new Pr({baseColor:tr.fromObject(t)}).palette.map((t=>{const e=Tr(t.toStringHexRGB());return Rr.create(e.r,e.g,e.b)}))))}}const jr=Rr.create(1,1,1),Hr=Rr.create(0,0,0),zr=Rr.from(Tr("#808080")),qr=Rr.from(Tr("#DA1A5F"));function _r(t){return Rr.create(t,t,t)}function Ur(t,e,r,s,n,o){return Math.max(t.closestIndexOf(_r(e))+r,s,n,o)}const{create:Gr}=Ut;function Wr(t){return Ut.create({name:t,cssCustomPropertyName:null})}const Zr=Gr("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),Qr=Gr("base-height-multiplier").withDefault(10),Kr=(Gr("base-horizontal-spacing-multiplier").withDefault(3),Gr("base-layer-luminance").withDefault(.23)),Xr=Gr("control-corner-radius").withDefault(4),Yr=Gr("density").withDefault(0),Jr=Gr("design-unit").withDefault(4),ts=(Gr("direction").withDefault(Ge.ltr),Gr("disabled-opacity").withDefault(.3)),es=Gr("stroke-width").withDefault(1),rs=Gr("focus-stroke-width").withDefault(2),ss=Gr("type-ramp-base-font-size").withDefault("14px"),ns=Gr("type-ramp-base-line-height").withDefault("20px"),os=(Gr("type-ramp-minus-1-font-size").withDefault("12px"),Gr("type-ramp-minus-1-line-height").withDefault("16px"),Gr("type-ramp-minus-2-font-size").withDefault("10px"),Gr("type-ramp-minus-2-line-height").withDefault("16px"),Gr("type-ramp-plus-1-font-size").withDefault("16px"),Gr("type-ramp-plus-1-line-height").withDefault("24px"),Gr("type-ramp-plus-2-font-size").withDefault("20px"),Gr("type-ramp-plus-2-line-height").withDefault("28px"),Gr("type-ramp-plus-3-font-size").withDefault("28px"),Gr("type-ramp-plus-3-line-height").withDefault("36px"),Gr("type-ramp-plus-4-font-size").withDefault("34px"),Gr("type-ramp-plus-4-line-height").withDefault("44px"),Gr("type-ramp-plus-5-font-size").withDefault("46px"),Gr("type-ramp-plus-5-line-height").withDefault("56px"),Gr("type-ramp-plus-6-font-size").withDefault("60px"),Gr("type-ramp-plus-6-line-height").withDefault("72px"),Wr("accent-fill-rest-delta").withDefault(0),Wr("accent-fill-hover-delta").withDefault(4)),is=Wr("accent-fill-active-delta").withDefault(-5),as=Wr("accent-fill-focus-delta").withDefault(0),ls=Wr("accent-foreground-rest-delta").withDefault(0),cs=Wr("accent-foreground-hover-delta").withDefault(6),hs=Wr("accent-foreground-active-delta").withDefault(-4),us=Wr("accent-foreground-focus-delta").withDefault(0),ds=Wr("neutral-fill-rest-delta").withDefault(7),fs=Wr("neutral-fill-hover-delta").withDefault(10),ps=Wr("neutral-fill-active-delta").withDefault(5),gs=Wr("neutral-fill-focus-delta").withDefault(0),bs=Wr("neutral-fill-input-rest-delta").withDefault(0),vs=Wr("neutral-fill-input-hover-delta").withDefault(0),ms=Wr("neutral-fill-input-active-delta").withDefault(0),ys=Wr("neutral-fill-input-focus-delta").withDefault(0),ws=Wr("neutral-fill-stealth-rest-delta").withDefault(0),Cs=Wr("neutral-fill-stealth-hover-delta").withDefault(5),xs=Wr("neutral-fill-stealth-active-delta").withDefault(3),$s=Wr("neutral-fill-stealth-focus-delta").withDefault(0),ks=Wr("neutral-fill-strong-rest-delta").withDefault(0),Fs=Wr("neutral-fill-strong-hover-delta").withDefault(8),Vs=Wr("neutral-fill-strong-active-delta").withDefault(-5),Ss=Wr("neutral-fill-strong-focus-delta").withDefault(0),Ds=Wr("neutral-fill-layer-rest-delta").withDefault(3),Ts=Wr("neutral-stroke-rest-delta").withDefault(25),Os=Wr("neutral-stroke-hover-delta").withDefault(40),Ps=Wr("neutral-stroke-active-delta").withDefault(16),Ns=Wr("neutral-stroke-focus-delta").withDefault(25),Rs=Wr("neutral-stroke-divider-rest-delta").withDefault(8),Ls=Gr("neutral-color").withDefault(zr),Ms=Wr("neutral-palette").withDefault((t=>Ir.from(Ls.getValueFor(t)))),Bs=Gr("accent-color").withDefault(qr),As=Wr("accent-palette").withDefault((t=>Ir.from(Bs.getValueFor(t)))),Is=Wr("neutral-layer-card-container-recipe").withDefault({evaluate:t=>{return e=Ms.getValueFor(t),r=Kr.getValueFor(t),s=Ds.getValueFor(t),e.get(e.closestIndexOf(_r(r))+s);var e,r,s}}),Es=(Gr("neutral-layer-card-container").withDefault((t=>Is.getValueFor(t).evaluate(t))),Wr("neutral-layer-floating-recipe").withDefault({evaluate:t=>function(t,e,r){const s=t.closestIndexOf(_r(e))-r;return t.get(s-r)}(Ms.getValueFor(t),Kr.getValueFor(t),Ds.getValueFor(t))})),js=(Gr("neutral-layer-floating").withDefault((t=>Es.getValueFor(t).evaluate(t))),Wr("neutral-layer-1-recipe").withDefault({evaluate:t=>function(t,e){return t.get(t.closestIndexOf(_r(e)))}(Ms.getValueFor(t),Kr.getValueFor(t))})),Hs=Gr("neutral-layer-1").withDefault((t=>js.getValueFor(t).evaluate(t))),zs=Wr("neutral-layer-2-recipe").withDefault({evaluate:t=>{return e=Ms.getValueFor(t),r=Kr.getValueFor(t),s=Ds.getValueFor(t),n=ds.getValueFor(t),o=fs.getValueFor(t),i=ps.getValueFor(t),e.get(Ur(e,r,s,n,o,i));var e,r,s,n,o,i}}),qs=(Gr("neutral-layer-2").withDefault((t=>zs.getValueFor(t).evaluate(t))),Wr("neutral-layer-3-recipe").withDefault({evaluate:t=>{return e=Ms.getValueFor(t),r=Kr.getValueFor(t),s=Ds.getValueFor(t),n=ds.getValueFor(t),o=fs.getValueFor(t),i=ps.getValueFor(t),e.get(Ur(e,r,s,n,o,i)+s);var e,r,s,n,o,i}})),_s=(Gr("neutral-layer-3").withDefault((t=>qs.getValueFor(t).evaluate(t))),Wr("neutral-layer-4-recipe").withDefault({evaluate:t=>{return e=Ms.getValueFor(t),r=Kr.getValueFor(t),s=Ds.getValueFor(t),n=ds.getValueFor(t),o=fs.getValueFor(t),i=ps.getValueFor(t),e.get(Ur(e,r,s,n,o,i)+2*s);var e,r,s,n,o,i}})),Us=(Gr("neutral-layer-4").withDefault((t=>_s.getValueFor(t).evaluate(t))),Gr("fill-color").withDefault((t=>Hs.getValueFor(t))));var Gs;!function(t){t[t.normal=4.5]="normal",t[t.large=7]="large"}(Gs||(Gs={}));const Ws=Gr({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,r,s,n,o,i,a,l){const c=t.source,h=e.closestIndexOf(r)>=Math.max(i,a,l)?-1:1,u=t.closestIndexOf(c),d=u+-1*h*s,f=d+h*n,p=d+h*o;return{rest:t.get(d),hover:t.get(u),active:t.get(f),focus:t.get(p)}}(As.getValueFor(t),Ms.getValueFor(t),e||Us.getValueFor(t),os.getValueFor(t),is.getValueFor(t),as.getValueFor(t),ds.getValueFor(t),fs.getValueFor(t),ps.getValueFor(t))}),Zs=Gr("accent-fill-rest").withDefault((t=>Ws.getValueFor(t).evaluate(t).rest)),Qs=Gr("accent-fill-hover").withDefault((t=>Ws.getValueFor(t).evaluate(t).hover)),Ks=Gr("accent-fill-active").withDefault((t=>Ws.getValueFor(t).evaluate(t).active)),Xs=Gr("accent-fill-focus").withDefault((t=>Ws.getValueFor(t).evaluate(t).focus)),Ys=t=>(e,r)=>function(t,e){return t.contrast(jr)>=e?jr:Hr}(r||Zs.getValueFor(e),t),Js=Wr("foreground-on-accent-recipe").withDefault({evaluate:(t,e)=>Ys(Gs.normal)(t,e)}),tn=Gr("foreground-on-accent-rest").withDefault((t=>Js.getValueFor(t).evaluate(t,Zs.getValueFor(t)))),en=Gr("foreground-on-accent-hover").withDefault((t=>Js.getValueFor(t).evaluate(t,Qs.getValueFor(t)))),rn=Gr("foreground-on-accent-active").withDefault((t=>Js.getValueFor(t).evaluate(t,Ks.getValueFor(t)))),sn=(Gr("foreground-on-accent-focus").withDefault((t=>Js.getValueFor(t).evaluate(t,Xs.getValueFor(t)))),Wr("foreground-on-accent-large-recipe").withDefault({evaluate:(t,e)=>Ys(Gs.large)(t,e)})),nn=(Gr("foreground-on-accent-rest-large").withDefault((t=>sn.getValueFor(t).evaluate(t,Zs.getValueFor(t)))),Gr("foreground-on-accent-hover-large").withDefault((t=>sn.getValueFor(t).evaluate(t,Qs.getValueFor(t)))),Gr("foreground-on-accent-active-large").withDefault((t=>sn.getValueFor(t).evaluate(t,Ks.getValueFor(t)))),Gr("foreground-on-accent-focus-large").withDefault((t=>sn.getValueFor(t).evaluate(t,Xs.getValueFor(t)))),t=>(e,r)=>function(t,e,r,s,n,o,i){const a=t.source,l=t.closestIndexOf(a),c=Ar(e),h=l+(1===c?Math.min(s,n):Math.max(c*s,c*n)),u=t.colorContrast(e,r,h,c),d=t.closestIndexOf(u),f=d+c*Math.abs(s-n);let p,g;return(1===c?s<n:c*s>c*n)?(p=d,g=f):(p=f,g=d),{rest:t.get(p),hover:t.get(g),active:t.get(p+c*o),focus:t.get(p+c*i)}}(As.getValueFor(e),r||Us.getValueFor(e),t,ls.getValueFor(e),cs.getValueFor(e),hs.getValueFor(e),us.getValueFor(e))),on=Gr({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>nn(Gs.normal)(t,e)}),an=Gr("accent-foreground-rest").withDefault((t=>on.getValueFor(t).evaluate(t).rest)),ln=Gr("accent-foreground-hover").withDefault((t=>on.getValueFor(t).evaluate(t).hover)),cn=Gr("accent-foreground-active").withDefault((t=>on.getValueFor(t).evaluate(t).active)),hn=(Gr("accent-foreground-focus").withDefault((t=>on.getValueFor(t).evaluate(t).focus)),Gr({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,r,s,n,o){const i=t.closestIndexOf(e),a=i>=Math.max(r,s,n,o)?-1:1;return{rest:t.get(i+a*r),hover:t.get(i+a*s),active:t.get(i+a*n),focus:t.get(i+a*o)}}(Ms.getValueFor(t),e||Us.getValueFor(t),ds.getValueFor(t),fs.getValueFor(t),ps.getValueFor(t),gs.getValueFor(t))})),un=Gr("neutral-fill-rest").withDefault((t=>hn.getValueFor(t).evaluate(t).rest)),dn=Gr("neutral-fill-hover").withDefault((t=>hn.getValueFor(t).evaluate(t).hover)),fn=Gr("neutral-fill-active").withDefault((t=>hn.getValueFor(t).evaluate(t).active)),pn=(Gr("neutral-fill-focus").withDefault((t=>hn.getValueFor(t).evaluate(t).focus)),Gr({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,r,s,n,o){const i=Ar(e),a=t.closestIndexOf(e);return{rest:t.get(a-i*r),hover:t.get(a-i*s),active:t.get(a-i*n),focus:t.get(a-i*o)}}(Ms.getValueFor(t),e||Us.getValueFor(t),bs.getValueFor(t),vs.getValueFor(t),ms.getValueFor(t),ys.getValueFor(t))})),gn=(Gr("neutral-fill-input-rest").withDefault((t=>pn.getValueFor(t).evaluate(t).rest)),Gr("neutral-fill-input-hover").withDefault((t=>pn.getValueFor(t).evaluate(t).hover)),Gr("neutral-fill-input-active").withDefault((t=>pn.getValueFor(t).evaluate(t).active)),Gr("neutral-fill-input-focus").withDefault((t=>pn.getValueFor(t).evaluate(t).focus)),Gr({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,r,s,n,o,i,a,l,c){const h=Math.max(r,s,n,o,i,a,l,c),u=t.closestIndexOf(e),d=u>=h?-1:1;return{rest:t.get(u+d*r),hover:t.get(u+d*s),active:t.get(u+d*n),focus:t.get(u+d*o)}}(Ms.getValueFor(t),e||Us.getValueFor(t),ws.getValueFor(t),Cs.getValueFor(t),xs.getValueFor(t),$s.getValueFor(t),ds.getValueFor(t),fs.getValueFor(t),ps.getValueFor(t),gs.getValueFor(t))})),bn=Gr("neutral-fill-stealth-rest").withDefault((t=>gn.getValueFor(t).evaluate(t).rest)),vn=Gr("neutral-fill-stealth-hover").withDefault((t=>gn.getValueFor(t).evaluate(t).hover)),mn=Gr("neutral-fill-stealth-active").withDefault((t=>gn.getValueFor(t).evaluate(t).active)),yn=(Gr("neutral-fill-stealth-focus").withDefault((t=>gn.getValueFor(t).evaluate(t).focus)),Gr({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,r,s,n,o){const i=Ar(e),a=t.closestIndexOf(t.colorContrast(e,4.5)),l=a+i*Math.abs(r-s);let c,h;return(1===i?r<s:i*r>i*s)?(c=a,h=l):(c=l,h=a),{rest:t.get(c),hover:t.get(h),active:t.get(c+i*n),focus:t.get(c+i*o)}}(Ms.getValueFor(t),e||Us.getValueFor(t),ks.getValueFor(t),Fs.getValueFor(t),Vs.getValueFor(t),Ss.getValueFor(t))})),wn=(Gr("neutral-fill-strong-rest").withDefault((t=>yn.getValueFor(t).evaluate(t).rest)),Gr("neutral-fill-strong-hover").withDefault((t=>yn.getValueFor(t).evaluate(t).hover)),Gr("neutral-fill-strong-active").withDefault((t=>yn.getValueFor(t).evaluate(t).active)),Gr("neutral-fill-strong-focus").withDefault((t=>yn.getValueFor(t).evaluate(t).focus)),Wr("neutral-fill-layer-recipe").withDefault({evaluate:(t,e)=>function(t,e,r){const s=t.closestIndexOf(e);return t.get(s-(s<r?-1*r:r))}(Ms.getValueFor(t),e||Us.getValueFor(t),Ds.getValueFor(t))})),Cn=(Gr("neutral-fill-layer-rest").withDefault((t=>wn.getValueFor(t).evaluate(t))),Wr("focus-stroke-outer-recipe").withDefault({evaluate:t=>{return e=Ms.getValueFor(t),r=Us.getValueFor(t),e.colorContrast(r,3.5);var e,r}})),xn=Gr("focus-stroke-outer").withDefault((t=>Cn.getValueFor(t).evaluate(t))),$n=Wr("focus-stroke-inner-recipe").withDefault({evaluate:t=>{return e=As.getValueFor(t),r=Us.getValueFor(t),s=xn.getValueFor(t),e.colorContrast(s,3.5,e.closestIndexOf(e.source),-1*Ar(r));var e,r,s}}),kn=Gr("focus-stroke-inner").withDefault((t=>$n.getValueFor(t).evaluate(t))),Fn=Wr("neutral-foreground-hint-recipe").withDefault({evaluate:t=>{return e=Ms.getValueFor(t),r=Us.getValueFor(t),e.colorContrast(r,4.5);var e,r}}),Vn=(Gr("neutral-foreground-hint").withDefault((t=>Fn.getValueFor(t).evaluate(t))),Wr("neutral-foreground-recipe").withDefault({evaluate:t=>{return e=Ms.getValueFor(t),r=Us.getValueFor(t),e.colorContrast(r,14);var e,r}})),Sn=Gr("neutral-foreground-rest").withDefault((t=>Vn.getValueFor(t).evaluate(t))),Dn=Gr({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,r,s,n,o){const i=t.closestIndexOf(e),a=Ar(e),l=i+a*r,c=l+a*(s-r),h=l+a*(n-r),u=l+a*(o-r);return{rest:t.get(l),hover:t.get(c),active:t.get(h),focus:t.get(u)}}(Ms.getValueFor(t),Us.getValueFor(t),Ts.getValueFor(t),Os.getValueFor(t),Ps.getValueFor(t),Ns.getValueFor(t))}),Tn=(Gr("neutral-stroke-rest").withDefault((t=>Dn.getValueFor(t).evaluate(t).rest)),Gr("neutral-stroke-hover").withDefault((t=>Dn.getValueFor(t).evaluate(t).hover)),Gr("neutral-stroke-active").withDefault((t=>Dn.getValueFor(t).evaluate(t).active)),Gr("neutral-stroke-focus").withDefault((t=>Dn.getValueFor(t).evaluate(t).focus)),Wr("neutral-stroke-divider-recipe").withDefault({evaluate:(t,e)=>function(t,e,r){return t.get(t.closestIndexOf(e)+Ar(e)*r)}(Ms.getValueFor(t),e||Us.getValueFor(t),Rs.getValueFor(t))})),On=(Gr("neutral-stroke-divider-rest").withDefault((t=>Tn.getValueFor(t).evaluate(t))),Ut.create({name:"height-number",cssCustomPropertyName:null}).withDefault((t=>(Qr.getValueFor(t)+Yr.getValueFor(t))*Jr.getValueFor(t))),(function(t,...e){const{styles:r,behaviors:s}=Ie(t,e);return new je(r,s)})`(${Qr} + ${Yr}) * ${Jr}`),Pn=Ee`
    ${"inline-flex",":host([hidden]){display:none}:host{display:inline-flex}"} :host {
        font-family: ${Zr};
        outline: none;
        font-size: ${ss};
        line-height: ${ns};
        height: calc(${On} * 1px);
        min-width: calc(${On} * 1px);
        background-color: ${un};
        color: ${Sn};
        border-radius: calc(${Xr} * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: baseline;
        padding: 0 calc((10 + (${Jr} * 2 * ${Yr})) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(${es} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-weight: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: ${dn};
    }

    :host(:active) {
        background-color: ${fn};
    }

    .control:${ze} {
        border-color: ${xn};
        box-shadow: 0 0 0 calc((${rs} - ${es}) * 1px) ${xn} inset;
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    .start,
    .content,
    .end {
        align-self: center;
    }

    .start,
    .end {
        display: flex;
    }

    .control.icon-only {
        padding: 0;
        line-height: 0;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
        pointer-events: none;
    }

    .start {
        margin-inline-end: 11px;
    }

    .end {
        margin-inline-start: 11px;
    }
`.withBehaviors(_e(Ee`
            :host .control {
              background-color: ${Ue.ButtonFace};
              border-color: ${Ue.ButtonText};
              color: ${Ue.ButtonText};
              fill: currentColor;
            }

            :host(:hover) .control {
              forced-color-adjust: none;
              background-color: ${Ue.Highlight};
              color: ${Ue.HighlightText};
            }

            .control:${ze} {
              forced-color-adjust: none;
              background-color: ${Ue.Highlight};
              border-color: ${Ue.ButtonText};
              box-shadow: 0 0 0 calc((${rs} - ${es}) * 1px) ${Ue.ButtonText} inset;
              color: ${Ue.HighlightText};
            }

            .control:hover,
            :host([appearance="outline"]) .control:hover {
              border-color: ${Ue.ButtonText};
            }

            :host([href]) .control {
                border-color: ${Ue.LinkText};
                color: ${Ue.LinkText};
            }

            :host([href]) .control:hover,
            :host([href]) .control:${ze}{
              forced-color-adjust: none;
              background: ${Ue.ButtonFace};
              border-color: ${Ue.LinkText};
              box-shadow: 0 0 0 1px ${Ue.LinkText} inset;
              color: ${Ue.LinkText};
              fill: currentColor;
            }
        `));const Nn=Ee`
    :host([appearance="accent"]) {
        background: ${Zs};
        color: ${tn};
    }

    :host([appearance="accent"]:hover) {
        background: ${Qs};
        color: ${en};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${Ks};
        color: ${rn};
    }

    :host([appearance="accent"]) .control:${ze} {
        box-shadow: 0 0 0 calc((${rs} - ${es}) * 1px) ${xn} inset,
            0 0 0 calc((${rs} + ${es}) * 1px) ${kn} inset;
    }
`.withBehaviors(_e(Ee`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${Ue.Highlight};
                color: ${Ue.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${Ue.HighlightText};
                border-color: ${Ue.Highlight};
                color: ${Ue.Highlight};
            }

            :host([appearance="accent"]) .control:${ze} {
                border-color: ${Ue.Highlight};
                box-shadow: 0 0 0 calc(${rs} * 1px) ${Ue.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control{
                background: ${Ue.LinkText};
                color: ${Ue.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${Ue.ButtonFace};
                border-color: ${Ue.LinkText};
                box-shadow: none;
                color: ${Ue.LinkText};
                fill: currentColor;
            }

            :host([appearance="accent"][href]) .control:${ze} {
                border-color: ${Ue.LinkText};
                box-shadow: 0 0 0 calc(${rs} * 1px) ${Ue.HighlightText} inset;
            }
        `)),Rn=Ee`
    :host([appearance="hypertext"]) {
        font-size: inherit;
        line-height: inherit;
        height: auto;
        min-width: 0;
        background: transparent;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }

    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${an};
        border-bottom: calc(${es} * 1px) solid ${an};
    }

    :host([appearance="hypertext"]:hover),
    :host([appearance="hypertext"]) .control:hover {
        background: transparent;
        border-bottom-color: ${ln};
    }

    :host([appearance="hypertext"]:active),
    :host([appearance="hypertext"]) .control:active {
        background: transparent;
        border-bottom-color: ${cn};
    }

    :host([appearance="hypertext"]) .control:${ze} {
        border-bottom: calc(${rs} * 1px) solid ${xn};
        margin-bottom: calc(calc(${es} - ${rs}) * 1px);
    }
`.withBehaviors(_e(Ee`
            :host([appearance="hypertext"]:hover) {
                background-color: ${Ue.ButtonFace};
                color: ${Ue.ButtonText};
            }
            :host([appearance="hypertext"][href]) .control:hover,
            :host([appearance="hypertext"][href]) .control:active,
            :host([appearance="hypertext"][href]) .control:${ze} {
                color: ${Ue.LinkText};
                border-bottom-color: ${Ue.LinkText};
                box-shadow: none;
            }
        `)),Ln=Ee`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${an};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        background: transparent;
        color: ${ln};
    }

    :host([appearance="lightweight"]:active) {
        background: transparent;
        color: ${cn};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${es} * 1px);
        position: absolute;
        top: calc(1em + 4px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${ln};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${cn};
    }

    :host([appearance="lightweight"]) .control:${ze} .content::before {
        background: ${Sn};
        height: calc(${rs} * 1px);
    }
`.withBehaviors(_e(Ee`
            :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${ze} {
                forced-color-adjust: none;
                background: ${Ue.ButtonFace};
                color: ${Ue.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${ze} .content::before {
                background: ${Ue.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${ze} {
                background: ${Ue.ButtonFace};
                box-shadow: none;
                color: ${Ue.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${ze} .content::before {
                background: ${Ue.LinkText};
            }
        `)),Mn=Ee`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${Zs};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${Qs};
    }

    :host([appearance="outline"]:active) {
        border-color: ${Ks};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${ze} {
        box-shadow: 0 0 0 calc((${rs} - ${es}) * 1px) ${xn} inset;
        border-color: ${xn};
    }
`.withBehaviors(_e(Ee`
            :host([appearance="outline"]) .control {
                border-color: ${Ue.ButtonText};
            }
            :host([appearance="outline"]) .control:${ze} {
              forced-color-adjust: none;
              background-color: ${Ue.Highlight};
              border-color: ${Ue.ButtonText};
              box-shadow: 0 0 0 calc((${rs} - ${es}) * 1px) ${Ue.ButtonText} inset;
              color: ${Ue.HighlightText};
              fill: currentColor;
            }
            :host([appearance="outline"][href]) .control {
                background: ${Ue.ButtonFace};
                border-color: ${Ue.LinkText};
                color: ${Ue.LinkText};
                fill: currentColor;
            }
            :host([appearance="outline"][href]) .control:hover,
            :host([appearance="outline"][href]) .control:${ze} {
              forced-color-adjust: none;
              border-color: ${Ue.LinkText};
              box-shadow: 0 0 0 1px ${Ue.LinkText} inset;
            }
        `)),Bn=Ee`
    :host([appearance="stealth"]) {
        background: ${bn};
    }

    :host([appearance="stealth"]:hover) {
        background: ${vn};
    }

    :host([appearance="stealth"]:active) {
        background: ${mn};
    }
`.withBehaviors(_e(Ee`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${Ue.ButtonFace};
                border-color: transparent;
                color: ${Ue.ButtonText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${Ue.Highlight};
                border-color: ${Ue.Highlight};
                color: ${Ue.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:${ze}) .control {
                background: ${Ue.Highlight};
                box-shadow: 0 0 0 1px ${Ue.Highlight};
                color: ${Ue.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${Ue.LinkText};
            }

            :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${ze}) .control {
                background: ${Ue.LinkText};
                border-color: ${Ue.LinkText};
                color: ${Ue.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]:${ze}) .control {
                forced-color-adjust: none;
                box-shadow: 0 0 0 1px ${Ue.LinkText};
            }
        `));class An{constructor(t,e,r){this.propertyName=t,this.value=e,this.styles=r}bind(t){p.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){p.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}function In(t,e){return new An("appearance",t,e)}class En extends Le{appearanceChanged(t,e){this.$fastController.isConnected&&(this.classList.remove(t),this.classList.add(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(t,e){const r=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===r.length&&r[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}N([S],En.prototype,"appearance",void 0);const jn=En.compose({baseName:"anchor",baseClass:Le,template:(t,e)=>Se`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Te("control")}
    >
        ${Ne(0,e)}
        <span class="content" part="content">
            <slot ${Ae("defaultSlottedContent")}></slot>
        </span>
        ${Pe(0,e)}
    </a>
`,styles:(t,e)=>Ee`
        ${Pn}
    `.withBehaviors(In("accent",Nn),In("hypertext",Rn),In("lightweight",Ln),In("outline",Mn),In("stealth",Bn)),shadowOptions:{delegatesFocus:!0}});var Hn;!function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"}(Hn||(Hn={}));const zn="form-associated-proxy",qn="ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype,_n=new WeakMap;class Un extends kt{}class Gn extends(function(t){const e=class extends t{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return qn}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,e=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),r=t?e.concat(Array.from(t)):e;return Object.freeze(r)}return n}valueChanged(t,e){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),u.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),u.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!qn)return null;let t=_n.get(this);return t||(t=this.attachInternals(),_n.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((t=>this.proxy.removeEventListener(t,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,e,r){this.elementInternals?this.elementInternals.setValidity(t,e,r):"string"==typeof e&&this.proxy.setCustomValidity(e)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((t=>this.proxy.addEventListener(t,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",zn),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",zn)),null===(t=this.shadowRoot)||void 0===t||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),null===(t=this.shadowRoot)||void 0===t||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,e){this.elementInternals&&this.elementInternals.setFormValue(t,e||t)}_keypressHandler(t){if("Enter"===t.key&&this.form instanceof HTMLFormElement){const t=this.form.querySelector("[type=submit]");null==t||t.click()}}stopPropagation(t){t.stopPropagation()}};return S({mode:"boolean"})(e.prototype,"disabled"),S({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),S({attribute:"current-value"})(e.prototype,"currentValue"),S(e.prototype,"name"),S({mode:"boolean"})(e.prototype,"required"),g(e.prototype,"value"),e}(Un)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Wn extends Gn{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&(null===(e=this.defaultSlottedContent)||void 0===e?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;null===(t=this.form)||void 0===t||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(t=this.$fastController.definition.shadowOptions)||void 0===t?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===e&&this.addEventListener("click",this.handleSubmission),"submit"===t&&this.removeEventListener("click",this.handleSubmission),"reset"===e&&this.addEventListener("click",this.handleFormReset),"reset"===t&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const e=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);e&&e.forEach((t=>{t.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var t;super.disconnectedCallback();const e=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);e&&e.forEach((t=>{t.removeEventListener("click",this.handleClick)}))}}N([S({mode:"boolean"})],Wn.prototype,"autofocus",void 0),N([S({attribute:"form"})],Wn.prototype,"formId",void 0),N([S],Wn.prototype,"formaction",void 0),N([S],Wn.prototype,"formenctype",void 0),N([S],Wn.prototype,"formmethod",void 0),N([S({mode:"boolean"})],Wn.prototype,"formnovalidate",void 0),N([S],Wn.prototype,"formtarget",void 0),N([S],Wn.prototype,"type",void 0),N([g],Wn.prototype,"defaultSlottedContent",void 0);class Zn{}N([S({attribute:"aria-expanded"})],Zn.prototype,"ariaExpanded",void 0),N([S({attribute:"aria-pressed"})],Zn.prototype,"ariaPressed",void 0),Re(Zn,te),Re(Wn,Oe,Zn);const Qn="not-allowed";class Kn extends Wn{constructor(){super(...arguments),this.appearance="neutral"}defaultSlottedContentChanged(t,e){const r=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===r.length&&r[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}N([S],Kn.prototype,"appearance",void 0);const Xn=Kn.compose({baseName:"button",baseClass:Wn,template:(t,e)=>Se`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Te("control")}
    >
        ${Ne(0,e)}
        <span class="content" part="content">
            <slot ${Ae("defaultSlottedContent")}></slot>
        </span>
        ${Pe(0,e)}
    </button>
`,styles:(t,e)=>Ee`
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active) {
            opacity: ${ts};
            background-color: ${un};
            cursor: ${Qn};
        }

        ${Pn}
    `.withBehaviors(_e(Ee`
                :host([disabled]),
                :host([disabled]) .control,
                :host([disabled]:hover),
                :host([disabled]:active) {
                    forced-color-adjust: none;
                    background-color: ${Ue.ButtonFace};
                    border-color: ${Ue.GrayText};
                    color: ${Ue.GrayText};
                    cursor: ${Qn};
                    opacity: 1;
                }
            `),In("accent",Ee`
                :host([appearance="accent"][disabled]),
                :host([appearance="accent"][disabled]:hover),
                :host([appearance="accent"][disabled]:active) {
                    background: ${Zs};
                }

                ${Nn}
            `.withBehaviors(_e(Ee`
                        :host([appearance="accent"][disabled]) .control,
                        :host([appearance="accent"][disabled]) .control:hover {
                            background: ${Ue.ButtonFace};
                            border-color: ${Ue.GrayText};
                            color: ${Ue.GrayText};
                        }
                    `))),In("lightweight",Ee`
                :host([appearance="lightweight"][disabled]:hover),
                :host([appearance="lightweight"][disabled]:active) {
                    background-color: transparent;
                    color: ${an};
                }

                :host([appearance="lightweight"][disabled]) .content::before,
                :host([appearance="lightweight"][disabled]:hover) .content::before,
                :host([appearance="lightweight"][disabled]:active) .content::before {
                    background: transparent;
                }

                ${Ln}
            `.withBehaviors(_e(Ee`
                        :host([appearance="lightweight"].disabled) .control {
                            forced-color-adjust: none;
                            color: ${Ue.GrayText};
                        }

                        :host([appearance="lightweight"].disabled)
                            .control:hover
                            .content::before {
                            background: none;
                        }
                    `))),In("outline",Ee`
                :host([appearance="outline"][disabled]),
                :host([appearance="outline"][disabled]:hover),
                :host([appearance="outline"][disabled]:active) {
                    background: transparent;
                    border-color: ${Zs};
                }

                ${Mn}
            `.withBehaviors(_e(Ee`
                        :host([appearance="outline"][disabled]) .control {
                            border-color: ${Ue.GrayText};
                        }
                    `))),In("stealth",Ee`
                :host([appearance="stealth"][disabled]),
                :host([appearance="stealth"][disabled]:hover),
                :host([appearance="stealth"][disabled]:active) {
                    background: ${bn};
                }

                ${Bn}
            `.withBehaviors(_e(Ee`
                        :host([appearance="stealth"][disabled]) {
                            background: ${Ue.ButtonFace};
                        }

                        :host([appearance="stealth"][disabled]) .control {
                            background: ${Ue.ButtonFace};
                            border-color: transparent;
                            color: ${Ue.GrayText};
                        }
                    `)))),shadowOptions:{delegatesFocus:!0}});var Yn=r(379),Jn=r.n(Yn),to=r(795),eo=r.n(to),ro=r(569),so=r.n(ro),no=r(565),oo=r.n(no),io=r(216),ao=r.n(io),lo=r(589),co=r.n(lo),ho=r(426),uo={};uo.styleTagTransform=co(),uo.setAttributes=oo(),uo.insert=so().bind(null,"head"),uo.domAPI=eo(),uo.insertStyleElement=ao(),Jn()(ho.Z,uo),ho.Z&&ho.Z.locals&&ho.Z.locals,Xt.getOrCreate(undefined).withPrefix("fast").register(jn(),Xn())})()})();