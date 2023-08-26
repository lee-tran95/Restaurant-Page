(()=>{"use strict";var e={309:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(81),r=t.n(o),a=t(645),c=t.n(a),i=t(667),s=t.n(i),d=new URL(t(201),t.b),u=c()(r()),l=s()(d);u.push([e.id,`:root{\n    --main-text-color: black;\n    --secondary-text-color: white;\n}\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nbody{\n    overflow: auto;\n    height: 100vh;\n    background: url(${l});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    image-rendering: -webkit-optimize-contrast;\n}\n\nbutton{\n    display: inline-block;\n    border: none;\n    padding: 1rem 2rem;\n    margin: 0;\n    text-decoration: none;\n    background: #ed1250;\n    color: #ffffff;\n    font-family: sans-serif;\n    font-size: 1rem;\n    line-height: 1;\n    cursor: pointer;\n    text-align: center;\n    transition: background 250ms ease-in-out, transform 150ms ease;\n}\n.header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: #ed1250;\n    background-color: #042f4b;\n    opacity: .8;\n}\n h4{\n    font-size: 2rem;\n    background: linear-gradient(to right, #ed1250 0%, #fbc99d 100%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n }\n\n p{\n    font-size: 1.2rem;\n    color: #fbc99d;\n    padding: 10px 20px\n }\n\n .days{\n    color: #ed1250;\n }\n\n .hours{\n    color: #fff6da;\n }\n.homeContent{\n    width: 100vw;\n    height: 89vh;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.aboutContent{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.7);\n    margin-top: auto;\n}\n\n.hoursOfOperation{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.7);\n    margin-top: auto;\n    padding: 25px;\n}`,""]);const m=u},195:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,"#menu-content{\n    width: 70vw;\n    height: 89vh;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-items{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.item-name{\n    color: #ed1250;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var m=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=r(p,o);o.byIndex=i,n.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},201:(e,n,t)=>{e.exports=t.p+"fed0d369f6e845ee3bc7.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=function(){const e=document.createElement("div");e.classList.add("homeContent");const n=document.createElement("div");n.classList.add("aboutContent");const t=document.createElement("h4");t.textContent="SUSHIDON IS...";const o=document.createElement("p");o.textContent="SushiDon provides hand crafted udon bowls, tempura, sushi and beverages from a theater kitchen, allowing guests to watch as their food is prepared. Our udon noodles and sushi are made to order to ensure that you are getting the best tasting Japanese food around.";const r=document.createElement("Button");r.textContent="ORDER NOW";const a=document.createElement("div");a.classList.add("hoursOfOperation");const c=document.createElement("p");c.classList.add("days"),c.textContent="Mondays - Thursdays: ";const i=document.createElement("span");i.classList.add("hours"),i.textContent=" 8AM - 8PM";const s=document.createElement("p");s.classList.add("days"),s.textContent="Friday - Saturday: ";const d=document.createElement("span");d.classList.add("hours"),d.textContent=" 8AM -11PM",c.appendChild(i),s.appendChild(d),n.append(t,o,r),a.append(c,s),e.append(a,n),document.getElementById("content").append(e)};var n=t(379),o=t.n(n),r=t(795),a=t.n(r),c=t(569),i=t.n(c),s=t(565),d=t.n(s),u=t(216),l=t.n(u),m=t(589),p=t.n(m),f=t(195),h={};function g(e,n){const t=document.createElement("div");t.classList.add("menu-item");const o=document.createElement("h2");o.classList.add("item-name"),o.textContent=`${e}`;const r=document.createElement("p");return r.classList.add("item-description"),r.textContent=`${n}`,t.append(o,r),t}h.styleTagTransform=p(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),o()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var v=t(309),b={};b.styleTagTransform=p(),b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=l(),o()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals,function(){const e=document.createElement("header");e.classList.add("header");const n=document.createElement("h1");n.textContent="SUSHIDON";const t=document.createElement("span");t.textContent="JAPANESE NOODLES & SUSHI";const o=document.createElement("nav"),r=document.createElement("button");r.id="home",r.textContent="Home";const a=document.createElement("button");a.id="menu",a.textContent="Menu";const c=document.createElement("button");c.id="contact",c.textContent="Contact",o.append(r,a,c),e.append(n,t,o),document.getElementById("content").append(e)}(),e();let y=document.getElementById("content"),x=document.querySelector(".header");document.getElementById("home").addEventListener("click",(()=>{y.removeChild(x.nextSibling),e()})),document.getElementById("menu").addEventListener("click",(()=>{y.removeChild(x.nextSibling),function(){const e=document.createElement("div");e.id="menu-content";const n=document.createElement("div");n.classList.add("menu-items"),n.append(g("Miso Udon","Our Sanuki-Style Udon served in a savory vegan miso broth with fresh bean sprouts, corn, and your choice of ground spicy soy meat or sweet beef."),g("Nikutama","Our Sanuki-style Udon served in our Umami-rich (flavor-packed) sauce. Can be enjoyed hot or cold"),g("Tonkotsu","Our Sanuki-Style Udon served in our creamy and savory pork broth"),g("B.K.","Our Sanuki-style Udon served in our Umami-rich (flavor-packed) sauce. Can be enjoyed hot or cold"),g("Hawaiian Roll","California roll with Tuna and Green Onions with Soy Mustard Sauce"),g("In & Out Shrimp","Shrimp Tempura Roll with Crabmeat, Avocado, and Cucumber drizzled with Shrimp Cilantro and Eel Sauce"),g("Rainbow Roll","California Roll with Assorted Fish and Avocado"),g("Double Crab","Softshell Crab, Avocado and Cucumber topped with Spicy Crab and Eel Sauce")),e.append(n),document.getElementById("content").append(e)}()})),document.getElementById("contact").addEventListener("click",(()=>{y.removeChild(x.nextSibling),function(){const e=document.createElement("div");e.textContent="Hi",document.getElementById("content").append(e)}()}))})()})();