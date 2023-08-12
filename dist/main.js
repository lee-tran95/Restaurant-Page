(()=>{"use strict";var e={309:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(81),r=n.n(o),a=n(645),c=n.n(a),i=n(667),s=n.n(i),d=new URL(n(201),n.b),u=c()(r()),l=s()(d);u.push([e.id,`:root{\n    --main-text-color: red;\n    --secondary-text-color: white;\n}\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nbody{\n    overflow: auto;\n    height: 100vh;\n    background: url(${l});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    image-rendering: -webkit-optimize-contrast;\n}\n.header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: black;\n    background-color: white;\n    opacity: .8;\n}\n h4{\n    color: white;\n }\n\n p{\n    color: white;\n    padding: 10px 20px\n }\n\n.homeContent{\n    height: 89vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n}\n\n.aboutContent{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent)\n}`,""]);const p=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},201:(e,t,n)=>{e.exports=n.p+"fed0d369f6e845ee3bc7.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=function(){const e=document.createElement("div");e.classList.add("homeContent");const t=document.createElement("div");t.classList.add("aboutContent");const n=document.createElement("h4");n.textContent="SUSHIDON IS...";const o=document.createElement("p");o.textContent="SushiDon provides hand crafted udon bowls, tempura, sushi and beverages from a theater kitchen, allowing guests to watch as their food is prepared. Our udon noodles and sushi are made to order to ensure that you are getting the best tasting Japanese food around.";const r=document.createElement("Button");r.textContent="ORDER NOW",t.append(n,o,r),e.append(t),document.getElementById("content").append(e)};var t=n(379),o=n.n(t),r=n(795),a=n.n(r),c=n(569),i=n.n(c),s=n(565),d=n.n(s),u=n(216),l=n.n(u),p=n(589),m=n.n(p),f=n(309),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),o()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");t.textContent="SUSHIDON";const n=document.createElement("span");n.textContent="JAPANESE NOODLES & SUSHI";const o=document.createElement("nav"),r=document.createElement("button");r.id="home",r.textContent="Home";const a=document.createElement("button");a.id="menu",a.textContent="Menu";const c=document.createElement("button");c.id="contact",c.textContent="Contact",o.append(r,a,c),e.append(t,n,o),document.getElementById("content").append(e)}(),e();let v=document.getElementById("content"),g=document.querySelector(".header");document.getElementById("home").addEventListener("click",(()=>{v.removeChild(g.nextSibling),e()})),document.getElementById("menu").addEventListener("click",(()=>{v.removeChild(g.nextSibling),function(){const e=document.createElement("div");e.textContent="hi",document.getElementById("content").append(e)}()}))})()})();