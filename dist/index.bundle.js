(()=>{"use strict";var n,e,t,r,o,a,i,c,s,u,l={800:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(15),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"nav{position:absolute;top:0%}.flex-container{display:flex;align-items:center;margin-right:5rem;margin-left:2rem}.flex-container .nav-item{list-style:none;margin-right:3rem}.flex-container .nav-item a{text-decoration:none;color:#f5f5f5}.flex-container .nav-item:first-child{margin-top:10px}body{background-color:#000}.cover img{width:100%}.grid-container{border:solid #fff}.quote{color:#fff}","",{version:3,sources:["webpack://./src/_navigation.scss","webpack://./src/index.scss"],names:[],mappings:"AAAA,IACI,iBAAA,CACA,MAAA,CAEJ,gBAEI,YAAA,CAEA,kBAAA,CACA,iBAAA,CACA,gBAAA,CAEA,0BAEI,eAAA,CACA,iBAAA,CAEA,4BACI,oBAAA,CACA,aAAA,CAIR,sCACI,eAAA,CCnBR,KAEI,qBAAA,CAKA,WAAA,UAAA,CAIJ,gBACI,iBAAA,CAIJ,OACI,UAAA",sourcesContent:["nav{\n    position:absolute;\n    top:0%;\n}\n.flex-container {\n    \n    display:flex;\n    \n    align-items: center;\n    margin-right: 5rem;\n    margin-left: 2rem;\n\n    .nav-item{\n        \n        list-style: none;\n        margin-right: 3rem;\n        ;\n        a{\n            text-decoration: none;\n            color:whitesmoke\n        }\n    }\n\n    .nav-item:first-child{\n        margin-top:10px;       \n    }\n}",'@import "_navigation";\n// *{\n//     padding: 0;\n//     margin:0;\n// }\nbody{  \n    \n    background-color: black;\n    // border:solid red;\n\n}\n.cover{\n    img{width:100%};\n    \n}\n\n.grid-container{\n    border:solid white;\n}\n\n\n.quote{\n    color:white;\n}\n\n'],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var t,r,o=(r=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,e){var t=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){c=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(t,r)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},695:n=>{var e={};n.exports=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var A=t(f),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==A?(e[A].references++,e[A].updater(d)):e.push({identifier:f,updater:o(d,r),references:1}),i.push(f)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var l=t(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},f={};function A(n){var e=f[n];if(void 0!==e)return e.exports;var t=f[n]={id:n,exports:{}};return l[n](t,t.exports,A),t.exports}A.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return A.d(e,{a:e}),e},A.d=(n,e)=>{for(var t in e)A.o(e,t)&&!A.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},A.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=A(379),e=A.n(n),t=A(795),r=A.n(t),o=A(695),a=A.n(o),i=A(216),c=A.n(i),s=A(800),(u={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=A.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=a()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}}).domAPI=r(),u.insertStyleElement=c(),e()(s.Z,u),s.Z&&s.Z.locals&&s.Z.locals,console.log("hello")})();
//# sourceMappingURL=index.bundle.js.map