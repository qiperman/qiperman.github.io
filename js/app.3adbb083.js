(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0101":function(t,e,r){},"17d7":function(t,e,r){"use strict";var n=r("f3d3"),a=r.n(n);a.a},2665:function(t,e,r){"use strict";var n=r("0101"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("main",{staticClass:"page-wrapper"},[r("the-header"),r("page-title"),r("section",{staticClass:"works"},t._l(t.WORKS,(function(t,e){return r("work",{key:e,attrs:{work:t}})})),1)],1)])},o=[],i=(r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"work",attrs:{href:t.work.link,target:"_blank"}},[r("img",{staticClass:"work__image",attrs:{src:t.image,alt:""}}),r("div",{staticClass:"work__info"},[r("div",{staticClass:"work__type"},[t._v(t._s(t.work.type))]),r("div",{staticClass:"work__title"},[t._v(t._s(t.work.title))])])])}),s=[],c={name:"Work",props:{work:{required:!0}},computed:{image:function(){return"thumbs/".concat(this.work.img)}}},u=c,l=(r("2665"),r("2877")),f=Object(l["a"])(u,i,s,!1,null,"348aae66",null),p=f.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("div",{staticClass:"wrapper"},[r("a",{staticClass:"header__logo",attrs:{href:"/"}},[t._v(" Portfolio ")]),r("div",{staticClass:"header__right"},[t._v(" Viktor Matveev ")])])])}],v={name:"TheHeader"},h=v,b=(r("17d7"),Object(l["a"])(h,d,_,!1,null,"0ae690b0",null)),m=b.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"page-title"},[r("div",{staticClass:"wrapper"},[r("h1",{staticClass:"page-title__text"},[t._v("Мои работы")])])])}],k={name:"PageTitle"},y=k,O=(r("d0ea"),Object(l["a"])(y,w,g,!1,null,"d9f59dfe",null)),j=O.exports,C={name:"App",components:{Work:p,TheHeader:m,PageTitle:j},data:function(){return{WORKS:[]}},mounted:function(){var t=this;fetch("/works.json").then((function(t){return t.json()})).then((function(e){t.WORKS=e}))}},x=C,P=(r("5c0b"),Object(l["a"])(x,a,o,!1,null,null,null)),S=P.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c0c":function(t,e,r){},d0ea:function(t,e,r){"use strict";var n=r("fa58"),a=r.n(n);a.a},f3d3:function(t,e,r){},fa58:function(t,e,r){}});
//# sourceMappingURL=app.3adbb083.js.map