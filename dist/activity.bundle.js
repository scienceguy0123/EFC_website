(()=>{"use strict";var n,e,t,r,A,i,o,a,c,d,l={534:(n,e,t)=>{t.d(e,{Z:()=>g});var r=t(15),A=t.n(r),i=t(645),o=t.n(i),a=t(667),c=t.n(a),d=t(853),l=o()(A()),s=c()(d.Z);l.push([n.id,'*{padding:0;margin:0;box-sizing:border-box}body{background-color:#000}#flex-container{grid-area:nav;position:fixed;width:100vw;display:flex;align-items:center;justify-content:flex-end;padding-right:5vw;padding-top:0;background-color:rgba(0,0,0,.9);z-index:100}#flex-container img{width:4vw}#flex-container .nav-item{list-style:none;margin-right:8vw;font-size:1.5vw}#flex-container .nav-item a{text-decoration:none;color:#fff}#flex-container .nav-item:first-child{margin-right:auto;margin-left:10vw;padding-top:.5vw}#flex-container .text:hover{color:#fc3}#flex-container .text::after{content:"";display:block;margin-top:2px;width:2px;height:2px;background:#fc3;transition:width .5s}#flex-container .text:hover::after{width:100%;transition:width .5s}.grid-container{display:grid;grid-template-rows:40vw 8vw minmax(40vw, auto);grid-template-areas:"banner" "subtitle" "content"}.grid-container .grid-object-1{grid-area:banner;background-image:url('+s+");background-size:cover;background-repeat:no-repeat;display:flex}.grid-container .grid-object-1 .para1{color:#fff;padding-left:5vw}.grid-container .grid-object-1 .para1 .line1{font-size:2vw;margin-top:17vw}.grid-container .grid-object-1 .para1 .line2{font-size:5vw;font-weight:bolder;padding-top:1vw;color:#fc3}.grid-container .grid-object-1 .border{width:2vw;height:14vw;margin-top:15vw;margin-left:4vw;border-left:solid #fc3;border-radius:repeat(5px, 4)}.grid-container .grid-object-1 .para2{color:#fff;font-size:2vw;margin-top:14vw;margin-left:2vw;margin-right:2vw;text-align:left}.grid-container .grid-object-2{grid-area:subtitle;display:flex;justify-content:center;align-items:center}.grid-container .grid-object-2 p{color:#fc3;font-weight:bolder;font-size:3vw}.grid-container .grid-object-3{grid-area:content;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:minmax(40vw, auto)}.grid-container .grid-object-3 .content{margin:3vw}.grid-container .grid-object-3 .screening{border-radius:10px;background-color:#242424;transition:.2s;display:flex;flex-direction:column}.grid-container .grid-object-3 .screening img{width:5vw;margin-top:3vw;margin-left:2vw}.grid-container .grid-object-3 .screening .title{margin-top:3vw;margin-left:2vw;font-weight:bolder;letter-spacing:.1vw;color:#d93d59;font-size:3vw}.grid-container .grid-object-3 .screening .border{width:5vw;border-top:2px solid #d93d59;margin-top:1vw;margin-left:2vw}.grid-container .grid-object-3 .screening .detail{color:#d93d59;margin-left:2vw;margin-right:2vw;margin-top:2.5vw;padding-bottom:2vw;font-size:2vw}.grid-container .grid-object-3 .screening:hover{background-color:#d93d59;transform:scale(1.05)}.grid-container .grid-object-3 .screening:hover .title{color:#fff}.grid-container .grid-object-3 .screening:hover .border{border-top:2px solid #fff}.grid-container .grid-object-3 .screening:hover .detail{color:#fff}","",{version:3,sources:["webpack://./src/activity/activity.scss"],names:[],mappings:"AAAA,EACI,SAAA,CACA,QAAA,CACA,qBAAA,CAEJ,KACI,qBAAA,CAGJ,gBAEI,aAAA,CACA,cAAA,CACA,WAAA,CAGA,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CACA,aAAA,CAEA,+BAAA,CACA,WAAA,CATA,oBAAA,SAAA,CAWA,0BAEI,eAAA,CACA,gBAAA,CACA,eAAA,CACA,4BAEI,oBAAA,CACA,UAAA,CAGR,sCAEI,iBAAA,CACA,gBAAA,CACA,gBAAA,CAEJ,4BACI,UAAA,CAEJ,6BACI,UAAA,CACA,aAAA,CACA,cAAA,CACA,SAAA,CACA,UAAA,CACA,eAAA,CACA,oBAAA,CAEJ,mCACI,UAAA,CACA,oBAAA,CAIR,gBACI,YAAA,CACA,8CAAA,CACA,iDACA,CAIA,+BACI,gBAAA,CAEA,wDAAA,CACA,qBAAA,CACA,2BAAA,CAEA,YAAA,CAEA,sCACI,UAAA,CAEA,gBAAA,CAEA,6CACI,aAAA,CACA,eAAA,CAEJ,6CACI,aAAA,CACA,kBAAA,CACA,eAAA,CACA,UAAA,CAIR,uCACI,SAAA,CACA,WAAA,CACA,eAAA,CACA,eAAA,CACA,sBAAA,CACA,4BAAA,CAGJ,sCACI,UAAA,CACA,aAAA,CACA,eAAA,CACA,eAAA,CACA,gBAAA,CACA,eAAA,CAKR,+BACI,kBAAA,CAEA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iCACI,UAAA,CACA,kBAAA,CACA,aAAA,CAIR,+BACI,iBAAA,CAEA,YAAA,CACA,iCAAA,CACA,qCAAA,CAEA,wCACI,UAAA,CAEJ,0CAEI,kBAAA,CAEA,wBAAA,CACA,cAAA,CACA,YAAA,CACA,qBAAA,CACA,8CACI,SAAA,CACA,cAAA,CACA,eAAA,CAEJ,iDACI,cAAA,CACA,eAAA,CACA,kBAAA,CACA,mBAAA,CACA,aAAA,CACA,aAAA,CAEJ,kDAEI,SAAA,CACA,4BAAA,CACA,cAAA,CACA,eAAA,CAEJ,kDACI,aAAA,CACA,eAAA,CACA,gBAAA,CACA,gBAAA,CACA,kBAAA,CACA,aAAA,CAKR,gDACI,wBAAA,CACA,qBAAA,CAEA,uDACI,UAAA,CAEJ,wDACI,yBAAA,CAEJ,wDACI,UAAA",sourcesContent:['*{\n    padding: 0;\n    margin:0;\n    box-sizing: border-box;\n}\nbody{\n    background-color:black;\n}\n\n#flex-container{\n    //controll the nav bar\n    grid-area:nav;\n    position:fixed;\n    width:100vw;\n    img{width:4vw;}\n    //border:solid red;\n    display:flex;\n    align-items:center;\n    justify-content: flex-end;\n    padding-right: 5vw;\n    padding-top:0;\n    //border-radius:0px 0px 10px 10px;\n    background-color: rgb(0, 0, 0, 0.9);\n    z-index:100;\n    \n    .nav-item{\n        //controll each element in the nav bar\n        list-style:none;\n        margin-right:8vw;\n        font-size: 1.5vw;\n        a{\n            //controll the element in the nav abr\n            text-decoration: none;\n            color:white;\n        }\n    }\n    .nav-item:first-child{\n        //only controll the logo \n        margin-right:auto;\n        margin-left:10vw;\n        padding-top:0.5vw;\n    }\n    .text:hover{\n        color:#ffcc33;\n    }\n    .text::after{\n        content: \'\';\n        display:block;\n        margin-top:2px;\n        width:2px;\n        height:2px;\n        background: #ffcc33;\n        transition:width 0.5s;     \n    }\n    .text:hover::after{\n        width:100%;\n        transition:width 0.5s;   \n    }\n}\n\n.grid-container{\n    display:grid;\n    grid-template-rows:40vw 8vw minmax(40vw,auto);\n    grid-template-areas:\n    "banner"\n    "subtitle"\n    "content";\n\n    .grid-object-1{\n        grid-area: banner;\n        //border:solid white;\n        background-image: url("../image/activity/cinema.jpg");\n        background-size: cover;\n        background-repeat: no-repeat;\n\n        display:flex;\n\n        .para1{\n            color:white;\n            //padding-top: ;\n            padding-left:5vw;\n            \n            .line1{\n                font-size: 2vw;\n                margin-top:17vw;\n            }\n            .line2{\n                font-size: 5vw;\n                font-weight: bolder;\n                padding-top:1vw;\n                color:#ffcc33;\n            }\n        }\n\n        .border{\n            width:2vw;\n            height:14vw;\n            margin-top:15vw;\n            margin-left: 4vw;\n            border-left:solid #ffcc33;\n            border-radius: repeat(5px,4);\n        }\n\n        .para2{\n            color:white;\n            font-size:2vw;\n            margin-top:14vw;\n            margin-left:2vw;\n            margin-right:2vw;\n            text-align: left;\n            \n        }\n    }\n\n    .grid-object-2{\n        grid-area:subtitle;\n        //border:solid red;\n        display:flex;\n        justify-content: center;\n        align-items: center;\n        p{\n            color:#ffcc33;\n            font-weight: bolder;\n            font-size: 3vw;\n        }\n    }\n\n    .grid-object-3{\n        grid-area:content;\n        //border: solid blue;\n        display:grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-template-rows:minmax(40vw, auto);\n\n        .content{\n            margin:3vw;\n        }\n        .screening{\n            //border:solid purple;\n            border-radius: 10px;\n            \n            background-color:rgb(36, 36, 36);\n            transition:0.2s;\n            display:flex;\n            flex-direction: column;\n            img{\n                width:5vw;\n                margin-top:3vw;\n                margin-left:2vw;\n            }\n            .title{\n                margin-top:3vw;\n                margin-left:2vw;\n                font-weight:bolder;\n                letter-spacing: 0.1vw;\n                color:#D93D59;\n                font-size:3vw;\n            }\n            .border{\n                \n                width:5vw;\n                border-top:2px solid #D93D59;\n                margin-top:1vw;\n                margin-left:2vw;\n            }\n            .detail{\n                color:#D93D59;\n                margin-left:2vw;\n                margin-right:2vw;\n                margin-top:2.5vw;\n                padding-bottom:2vw;\n                font-size: 2vw;\n\n            }\n        }\n\n        .screening:hover{\n            background-color:#D93D59;\n            transform: scale(1.05);\n            \n            .title{\n                color:white;\n            }\n            .border{\n                border-top:2px solid white;\n            }\n            .detail{\n                color:white;\n            }\n        }\n    }\n}'],sourceRoot:""}]);const g=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var A={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(A[o]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);r&&A[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var t,r,A=(r=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,e){var t=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=t){var r,A,i=[],o=!0,a=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(n){a=!0,A=n}finally{try{o||null==t.return||t.return()}finally{if(a)throw A}}return i}}(t,r)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=A[1],o=A[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),d="/*# ".concat(c," */"),l=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[i].concat(l).concat([d]).join("\n")}return[i].join("\n")}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},853:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"88e9a8c4373abc20c114fa8c6da62058.jpg"},695:n=>{var e={};n.exports=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],a=0;a<n.length;a++){var c=n[a],d=r.base?c[0]+r.base:c[0],l=i[d]||0,s="".concat(d," ").concat(l);i[d]=l+1;var g=t(s),C={css:c[1],media:c[2],sourceMap:c[3]};-1!==g?(e[g].references++,e[g].updater(C)):e.push({identifier:s,updater:A(C,r),references:1}),o.push(s)}return o}function A(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,A){var i=r(n=n||[],A=A||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var a=t(i[o]);e[a].references--}for(var c=r(n,A),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,A=t.media,i=t.sourceMap;A?n.setAttribute("media",A):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},s={};function g(n){var e=s[n];if(void 0!==e)return e.exports;var t=s[n]={id:n,exports:{}};return l[n](t,t.exports,g),t.exports}g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),n=g(379),e=g.n(n),t=g(795),r=g.n(t),A=g(695),i=g.n(A),o=g(216),a=g.n(o),c=g(534),(d={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=g.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=i()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}}).domAPI=r(),d.insertStyleElement=a(),e()(c.Z,d),c.Z&&c.Z.locals&&c.Z.locals})();
//# sourceMappingURL=activity.bundle.js.map