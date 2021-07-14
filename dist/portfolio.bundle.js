(()=>{"use strict";var n,e,r,t,o,i,a,A,c,d,l={716:(n,e,r)=>{r.d(e,{Z:()=>f});var t=r(15),o=r.n(t),i=r(645),a=r.n(i),A=r(667),c=r.n(A),d=r(808),l=a()(o()),s=c()(d.Z);l.push([n.id,'*{padding:0;margin:0;box-sizing:border-box}body{background-color:#000}#flex-container{position:fixed;width:100%;display:flex;align-items:center;justify-content:flex-end;padding-right:5vw;padding-top:0;background-color:rgba(0,0,0,.7)}#flex-container img{width:4vw}#flex-container .nav-item{list-style:none;margin-right:8vw}#flex-container .nav-item a{text-decoration:none;color:#fff}#flex-container .nav-item:first-child{margin-right:auto;margin-left:10vw;padding-top:.5vw}#flex-container .text:hover{color:#fc3}#flex-container .text::after{content:"";display:block;margin-top:2px;width:2px;height:2px;background:#fc3;transition:width .5s}#flex-container .text:hover::after{width:100%;transition:width .5s}.grid-container{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:40vw 5vw minmax(40vw, auto);grid-template-areas:"banner banner banner" "filter filter filter" "mov mov mov"}.grid-container .grid-object-1{grid-area:banner;background-image:url('+s+");background-size:cover;background-repeat:no-repeat;display:flex}.grid-container .grid-object-1 .para1{color:#fff;padding-left:5vw}.grid-container .grid-object-1 .para1 .line1{font-size:2vw;margin-top:17vw}.grid-container .grid-object-1 .para1 .line2{font-size:5vw;font-weight:bolder;padding-top:1vw;color:#fc3}.grid-container .grid-object-1 .border{width:2vw;height:14vw;margin-top:15vw;margin-left:4vw;border-left:solid #fc3;border-radius:repeat(5px, 4)}.grid-container .grid-object-1 .para2{color:#fff;font-size:2vw;margin-top:12vw;margin-left:2vw;margin-right:2vw;text-align:left}.grid-container .grid-object-2{grid-area:filter;background-color:#d3d3d3}.grid-container .grid-object-3{grid-area:mov;border:solid red}","",{version:3,sources:["webpack://./src/portfolio/portfolio.scss"],names:[],mappings:"AAAA,EACI,SAAA,CACA,QAAA,CACA,qBAAA,CAEJ,KACI,qBAAA,CAEJ,gBAEI,cAAA,CACA,UAAA,CAGA,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CACA,aAAA,CAEA,+BAAA,CARA,oBAAA,SAAA,CAWA,0BAEI,eAAA,CACA,gBAAA,CAEA,4BAEI,oBAAA,CACA,UAAA,CAGR,sCAEI,iBAAA,CACA,gBAAA,CACA,gBAAA,CAGJ,4BACI,UAAA,CAGJ,6BACI,UAAA,CACA,aAAA,CACA,cAAA,CACA,SAAA,CACA,UAAA,CACA,eAAA,CACA,oBAAA,CAEJ,mCACI,UAAA,CACA,oBAAA,CAGR,gBACI,YAAA,CACA,iCAAA,CACA,8CAAA,CACA,+EACA,CAIA,+BACI,gBAAA,CAEA,wDAAA,CACA,qBAAA,CACA,2BAAA,CAEA,YAAA,CAEA,sCACI,UAAA,CAEA,gBAAA,CAEA,6CACI,aAAA,CACA,eAAA,CAEJ,6CACI,aAAA,CACA,kBAAA,CACA,eAAA,CACA,UAAA,CAIR,uCACI,SAAA,CACA,WAAA,CACA,eAAA,CACA,eAAA,CACA,sBAAA,CACA,4BAAA,CAGJ,sCACI,UAAA,CACA,aAAA,CACA,eAAA,CACA,eAAA,CACA,gBAAA,CACA,eAAA,CAUR,+BACI,gBAAA,CAKA,wBAAA,CAGJ,+BACI,aAAA,CACA,gBAAA",sourcesContent:['*{\n    padding: 0;\n    margin:0;\n    box-sizing: border-box;\n}\nbody{\n    background-color:black;\n}\n#flex-container{\n    //controll the nav bar\n    position:fixed;\n    width:100%;\n    img{width:4vw;}\n    //border:solid red;\n    display:flex;\n    align-items:center;\n    justify-content: flex-end;\n    padding-right: 5vw;\n    padding-top:0;\n    //border-radius:0px 0px 10px 10px;\n    background-color: rgb(0, 0, 0, 0.7);\n    \n\n    .nav-item{\n        //controll each element in the nav bar\n        list-style:none;\n        margin-right:8vw;\n\n        a{\n            //controll the element in the nav abr\n            text-decoration: none;\n            color:white;\n        }\n    }\n    .nav-item:first-child{\n        //only controll the logo \n        margin-right:auto;\n        margin-left:10vw;\n        padding-top:0.5vw;\n    }\n\n    .text:hover{\n        color:#ffcc33;\n    }\n\n    .text::after{\n        content: \'\';\n        display:block;\n        margin-top:2px;\n        width:2px;\n        height:2px;\n        background: #ffcc33;\n        transition:width 0.5s;     \n    }\n    .text:hover::after{\n        width:100%;\n        transition:width 0.5s;   \n    }\n}\n.grid-container{\n    display:grid;\n    grid-template-columns:1fr 1fr 1fr;\n    grid-template-rows: 40vw 5vw minmax(40vw, auto);\n    grid-template-areas:\n    "banner banner banner"\n    "filter filter filter"\n    "mov mov mov";\n\n    .grid-object-1{\n        grid-area: banner;\n        //border:solid white;\n        background-image: url("../image/portfolio/set2.jpg");\n        background-size: cover;\n        background-repeat: no-repeat;\n        \n        display:flex;\n\n        .para1{\n            color:white;\n            //padding-top: ;\n            padding-left:5vw;\n            \n            .line1{\n                font-size: 2vw;\n                margin-top:17vw;\n            }\n            .line2{\n                font-size: 5vw;\n                font-weight: bolder;\n                padding-top:1vw;\n                color:#ffcc33;\n            }\n        }\n\n        .border{\n            width:2vw;\n            height:14vw;\n            margin-top:15vw;\n            margin-left: 4vw;\n            border-left:solid #ffcc33;\n            border-radius: repeat(5px,4);\n        }\n\n        .para2{\n            color:white;\n            font-size:2vw;\n            margin-top:12vw;\n            margin-left:2vw;\n            margin-right:2vw;\n            text-align: left;\n            \n        }\n    }\n\n    \n    \n\n\n\n    .grid-object-2{\n        grid-area: filter;\n        // //border:solid green;\n        // background-image: url("../image/portfolio/set2.jpg");\n        // background-size: cover;\n        // background-repeat: no-repeat;\n        background-color: lightgrey;\n    }\n\n    .grid-object-3{\n        grid-area: mov;\n        border:solid red;\n    }\n\n}\n'],sourceRoot:""}]);const f=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var A=0;A<n.length;A++){var c=[].concat(n[A]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}n.exports=function(n){var r,t,o=(t=4,function(n){if(Array.isArray(n))return n}(r=n)||function(n,e){var r=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=r){var t,o,i=[],a=!0,A=!1;try{for(r=r.call(n);!(a=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);a=!0);}catch(n){A=!0,o=n}finally{try{a||null==r.return||r.return()}finally{if(A)throw o}}return i}}(r,t)||function(n,r){if(n){if("string"==typeof n)return e(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),d="/*# ".concat(c," */"),l=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[i].concat(l).concat([d]).join("\n")}return[i].join("\n")}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},808:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"17c9fd0b0a58848ac865ec92d6b88024.jpg"},695:n=>{var e={};n.exports=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],A=0;A<n.length;A++){var c=n[A],d=t.base?c[0]+t.base:c[0],l=i[d]||0,s="".concat(d," ").concat(l);i[d]=l+1;var f=r(s),g={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(e[f].references++,e[f].updater(g)):e.push({identifier:s,updater:o(g,t),references:1}),a.push(s)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=r(i[a]);e[A].references--}for(var c=t(n,o),d=0;d<i.length;d++){var l=r(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},s={};function f(n){var e=s[n];if(void 0!==e)return e.exports;var r=s[n]={id:n,exports:{}};return l[n](r,r.exports,f),r.exports}f.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return f.d(e,{a:e}),e},f.d=(n,e)=>{for(var r in e)f.o(e,r)&&!f.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),f.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;f.g.importScripts&&(n=f.g.location+"");var e=f.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),f.p=n})(),n=f(379),e=f.n(n),r=f(795),t=f.n(r),o=f(695),i=f.n(o),a=f(216),A=f.n(a),c=f(716),(d={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=f.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=i()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}}).domAPI=t(),d.insertStyleElement=A(),e()(c.Z,d),c.Z&&c.Z.locals&&c.Z.locals,console.log("hello")})();
//# sourceMappingURL=portfolio.bundle.js.map