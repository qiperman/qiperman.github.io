(function(t){function e(e){for(var r,o,c=e[0],s=e[1],l=e[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"17d7":function(t,e,n){"use strict";var r=n("f3d3"),a=n.n(r);a.a},2573:function(t){t.exports=JSON.parse('[{"type":"Верстка","title":"Gangland","img":"2.png","link":"/public/sites/Gangland/dist/index.html"},{"type":"Верстка","title":"Pax-Template","img":"1.png","link":"/public/sites/Pax/index.html"}]')},2752:function(t,e,n){"use strict";var r=n("2d6e"),a=n.n(r);a.a},"2d6e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main",{staticClass:"page-wrapper"},[n("the-header"),n("page-title"),n("section",{staticClass:"works"},t._l(t.WORKS,(function(t,e){return n("work",{key:e,attrs:{work:t}})})),1)],1)])},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"work",attrs:{href:t.work.link,target:"_blank"}},[n("img",{staticClass:"work__image",attrs:{src:t.image,alt:""}}),n("div",{staticClass:"work__info"},[n("div",{staticClass:"work__type"},[t._v(t._s(t.work.type))]),n("div",{staticClass:"work__title"},[t._v(t._s(t.work.title))])])])},c=[],s={name:"Work",props:{work:{required:!0}},computed:{image:function(){return n("7584")("./".concat(this.work.img))}}},l=s,u=(n("2752"),n("2877")),p=Object(u["a"])(l,o,c,!1,null,"c5b6b3c2",null),f=p.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"wrapper"},[n("a",{staticClass:"header__logo",attrs:{href:"/"}},[t._v(" Portfolio ")]),n("div",{staticClass:"header__right"},[t._v(" Viktor Matveev ")])])])}],_={name:"TheHeader"},g=_,h=(n("17d7"),Object(u["a"])(g,d,v,!1,null,"0ae690b0",null)),m=h.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-title"},[n("div",{staticClass:"wrapper"},[n("h1",{staticClass:"page-title__text"},[t._v("Мои работы")])])])}],k={name:"PageTitle"},y=k,O=(n("d0ea"),Object(u["a"])(y,b,w,!1,null,"d9f59dfe",null)),x=O.exports,C=n("2573"),j={name:"App",components:{Work:f,TheHeader:m,PageTitle:x},data:function(){return{WORKS:C}}},P=j,T=(n("5c0b"),Object(u["a"])(P,a,i,!1,null,null,null)),E=T.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"619a":function(t,e,n){t.exports=n.p+"img/3.22378140.png"},7584:function(t,e,n){var r={"./1.png":"c1c5","./2.png":"81e5","./3.png":"619a"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="7584"},"81e5":function(t,e,n){t.exports=n.p+"img/2.5899bde6.png"},"9c0c":function(t,e,n){},c1c5:function(t,e,n){t.exports=n.p+"img/1.a1e42b4d.png"},d0ea:function(t,e,n){"use strict";var r=n("fa58"),a=n.n(r);a.a},f3d3:function(t,e,n){},fa58:function(t,e,n){}});
//# sourceMappingURL=app.6cccd2e5.js.map