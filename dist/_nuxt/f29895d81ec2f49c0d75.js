(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(t,e,n){t.exports=n(152)},152:function(t,e,n){"use strict";n.r(e),function(t){n(96),n(71),n(28);var e=n(32),r=(n(65),n(162),n(10)),o=(n(107),n(109),n(29),n(40),n(53),n(76),n(112),n(166),n(178),n(180),n(1)),c=n(143),f=n(92),l=n(2),h=n(23),d=n(64);o.a.component(d.a.name,d.a),o.a.component("NLink",d.a),t.fetch||(t.fetch=c.a);var m,v,y=[],x=window.__NUXT__||{};Object.assign(o.a.config,{silent:!0,performance:!1});var w=o.a.config.errorHandler||console.error;function _(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map((function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter((function(t){return o[t]&&t.toLowerCase().includes("leave")})).forEach((function(t){e[t]=o[t]}))}return e}))}function O(t,e,n){return C.apply(this,arguments)}function C(){return(C=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c,f,h,d=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!m.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(l.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,Object(l.n)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some((function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some((function(t){return d._diffQuery[t]}))}))&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},f=c.statusCode||c.status||c.response&&c.response.status||500,h=c.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(h)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:f,message:h}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}}),t,this,[[4,12]])})))).apply(this,arguments)}function j(t,e){return x.serverRendered&&e&&Object(l.a)(t,e),t._Ctor=t,t}function k(t){var path=Object(l.d)(t.options.base,t.options.mode);return Object(l.c)(t.match(path),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r,o,c){var f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return f=j(Object(l.o)(e),x.data?x.data[c]:null),r.components[o]=f,t.abrupt("return",f);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,o,c){return t.apply(this,arguments)}}())}function $(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=Object(l.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach((function(t){t.options.middleware&&(o=o.concat(t.options.middleware))}))),o=o.map((function(t){return"function"==typeof t?t:("function"!=typeof f.a[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),f.a[t])})),!c)return Object(l.k)(o,e)}function E(t,e,n){return P.apply(this,arguments)}function P(){return(P=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c,f,d,v,x,w,O,C,j,k,E,P,R,T,S,N=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?y=[]:(o=[],y=Object(l.e)(n,o).map((function(t,i){return Object(l.b)(n.matched[o[i]].path)(n.params)}))),c=!1,f=function(path){n.path===path.path&&N.$loading.finish&&N.$loading.finish(),n.path!==path.path&&N.$loading.pause&&N.$loading.pause(),c||(c=!0,r(path))},t.next=7,Object(l.p)(m,{route:e,from:n,next:f.bind(this)});case 7:if(this._dateLastError=m.nuxt.dateErr,this._hadError=!!m.nuxt.err,d=[],(v=Object(l.e)(e,d)).length){t.next=25;break}return t.next=14,$.call(this,v,m.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof h.a.layout?h.a.layout(m.context):h.a.layout);case 18:return x=t.sent,t.next=21,$.call(this,v,m.context,x);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return m.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return v.forEach((function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)})),this.setTransitions(_(v,e,n)),t.prev=27,t.next=30,$.call(this,v,m.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!m.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(w=v[0].options.layout)&&(w=w(m.context)),t.next=38,this.loadLayout(w);case 38:return w=t.sent,t.next=41,$.call(this,v,m.context,w);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!m.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:O=!0,t.prev=46,C=!0,j=!1,k=void 0,t.prev=50,E=v[Symbol.iterator]();case 52:if(C=(P=E.next()).done){t.next=64;break}if("function"==typeof(R=P.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,R.options.validate(m.context);case 58:if(O=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:C=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),j=!0,k=t.t0;case 70:t.prev=70,t.prev=71,C||null==E.return||E.return();case 73:if(t.prev=73,!j){t.next=76;break}throw k;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(O){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(v.map((function(t,i){if(t._path=Object(l.b)(e.matched[d[i]].path)(e.params),t._dataRefresh=!1,N._pathChanged&&N._queryChanged||t._path!==y[i])t._dataRefresh=!0;else if(!N._pathChanged&&N._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some((function(t){return N._diffQuery[t]})))}if(!N._hadError&&N._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=!!t.options.fetch,f=o&&c?30:45;if(o){var h=Object(l.m)(t.options.asyncData,m.context).then((function(e){Object(l.a)(t,e),N.$loading.increase&&N.$loading.increase(f)}));r.push(h)}if(N.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(m.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then((function(t){N.$loading.increase&&N.$loading.increase(f)})),r.push(p)}return Promise.all(r)})));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(T=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,T));case 97:return y=[],Object(l.i)(T),"function"==typeof(S=h.a.layout)&&(S=S(m.context)),t.next=103,this.loadLayout(S);case 103:this.error(T),this.$nuxt.$emit("routeChanged",e,n,T),r();case 106:case"end":return t.stop()}}),t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])})))).apply(this,arguments)}function R(t,n){Object(l.c)(t,(function(t,n,r,c){return"object"!==Object(e.a)(t)||t.options||((t=o.a.extend(t))._Ctor=t,r.components[c]=t),t}))}function T(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?h.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(m.context)),this.setLayout(e)}function S(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||o.a.nextTick((function(){var e=[],r=Object(l.f)(t,e),c=Object(l.e)(t,e);r.forEach((function(t,i){if(t&&t.constructor._dataRefresh&&c[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)o.a.set(t.$data,n,e[n])}})),T.call(n,t)}))}function N(t){window.onNuxtReadyCbs.forEach((function(e){"function"==typeof e&&e(t)})),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),v.afterEach((function(e,n){o.a.nextTick((function(){return t.$nuxt.$emit("routeChanged",e,n)}))}))}function A(){return(A=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m=e.app,v=e.router,t.next=4,Promise.all(k(v));case 4:return n=t.sent,r=new o.a(m),c=x.layout||"default",t.next=9,r.loadLayout(c);case 9:if(r.setLayout(c),f=function(){r.$mount("#__nuxt"),v.afterEach(R),v.afterEach(S.bind(r)),o.a.nextTick((function(){N(r)}))},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(_(n,v.currentRoute)),y=v.currentRoute.matched.map((function(t){return Object(l.b)(t.path)(v.currentRoute.params)}))),r.$loading={},x.error&&r.error(x.error),v.beforeEach(O.bind(r)),v.beforeEach(E.bind(r)),!x.serverRendered){t.next=20;break}return f(),t.abrupt("return");case 20:h=function(){R(v.currentRoute,v.currentRoute),T.call(r,v.currentRoute),f()},E.call(r,v.currentRoute,v.currentRoute,(function(path){if(path){var t=v.afterEach((function(e,n){t(),h()}));v.push(path,void 0,(function(t){t&&w(t)}))}else h()}));case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(h.b)().then((function(t){return A.apply(this,arguments)})).catch((function(t){var e=new Error(t);e.message="[nuxt] Error while mounting app: "+e.message,w(e)}))}.call(this,n(19))},198:function(t,e,n){"use strict";var r=n(59);n.n(r).a},199:function(t,e,n){"use strict";var r=n(60);n.n(r).a},2:function(t,e,n){"use strict";n.d(e,"i",(function(){return m})),n.d(e,"j",(function(){return v})),n.d(e,"a",(function(){return y})),n.d(e,"o",(function(){return x})),n.d(e,"e",(function(){return w})),n.d(e,"f",(function(){return _})),n.d(e,"c",(function(){return O})),n.d(e,"n",(function(){return C})),n.d(e,"h",(function(){return j})),n.d(e,"p",(function(){return $})),n.d(e,"k",(function(){return P})),n.d(e,"m",(function(){return R})),n.d(e,"d",(function(){return T})),n.d(e,"b",(function(){return S})),n.d(e,"g",(function(){return N})),n.d(e,"l",(function(){return A}));var r=n(150),o=(n(78),n(28),n(183),n(184),n(185),n(32)),c=(n(187),n(189),n(190),n(193),n(195),n(65),n(10)),f=(n(96),n(29),n(40),n(53),n(76),n(31)),l=n(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(source,!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function m(t){l.a.config.errorHandler&&l.a.config.errorHandler(t)}function v(t){return t.then((function(t){return t.default||t}))}function y(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),d({},data,{},e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function x(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=l.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).map((function(r){return e&&e.push(n),t.components[r]}))})))}function _(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.instances).map((function(r){return e&&e.push(n),t.instances[r]}))})))}function O(t,e){return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).reduce((function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r}),[])})))}function C(t){return Promise.all(O(t,function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,n,r,o){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=x(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function j(t){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,C(e);case 4:return t.abrupt("return",d({},e,{meta:w(e).map((function(t,n){return d({},t.options.meta,{},(e.matched[n]||{}).meta)}))}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(t,e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var c,f,l,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{CTF_SPACE_ID:"4cylycdwezuo",CTF_CDA_ACCESS_TOKEN:"7VXjBXT67hc4D6OhLEVNyePP4o2X75Hhx-rON-b3ll4"}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=B(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([j(n.route),j(n.from)]);case 3:c=t.sent,f=Object(r.a)(c,2),l=f[0],h=f[1],n.route&&(e.context.route=l),n.from&&(e.context.from=h),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():R(t[0],e).then((function(){return P(t.slice(1),e)}))}function R(t,e){var n;return(n=2===t.length?new Promise((function(n){t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))})):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function T(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function S(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=(r||{}).pretty?L:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l=data[f.name||"pathMatch"],h=void 0;if(null==l){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d]),!e[c].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===d?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?encodeURI(l).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):o(l),!e[c].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');path+=f.prefix+h}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",f=e&&e.delimiter||"/";for(;null!=(n=D.exec(t));){var l=n[0],h=n[1],d=n.index;if(path+=t.slice(c,d),c=d+l.length,h)path+=h[1];else{var m=t[c],v=n[2],y=n[3],x=n[4],w=n[5],_=n[6],O=n[7];path&&(r.push(path),path="");var C=null!=v&&null!=m&&m!==v,j="+"===_||"*"===_,k="?"===_||"*"===_,$=n[2]||f,pattern=x||w;r.push({name:y||o++,prefix:v||"",delimiter:$,optional:k,repeat:j,partial:C,asterisk:!!O,pattern:pattern?M(pattern):O?".*":"[^"+I($)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function N(t,e){var n={},r=d({},t,{},e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function A(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return d({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t){return encodeURI(t).replace(/[/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function I(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function M(t){return t.replace(/([=!:$/()])/g,"\\$1")}function B(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,c=t.split("/"),f=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");return 2===(c=path.split("#")).length&&(path=c[0],o=c[1]),f+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(f+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map((function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map((function(t){return[e,"=",t].join("")})).join("&"):e+"="+n})).filter(Boolean).join("&")}(e)),f+=o?"#"+o:""}},201:function(t,e,n){},202:function(t,e,n){},203:function(t,e,n){},204:function(t,e,n){},205:function(t,e,n){t.exports=n.p+"img/60ae172.svg"},206:function(t,e,n){"use strict";var r=n(62);n.n(r).a},207:function(t,e,n){"use strict";var r=n(63);n.n(r).a},23:function(t,e,n){"use strict";n(78),n(28),n(29),n(53),n(40);var r=n(31),o=(n(65),n(10)),c=(n(76),n(1)),f=n(144),l=n.n(f),h=n(93),d=n(2),m=function(){return Object(d.j)(n.e(2).then(n.bind(null,313)))},v=function(){return Object(d.j)(n.e(3).then(n.bind(null,312)))},y=function(){return Object(d.j)(n.e(5).then(n.bind(null,314)))},x=function(){return Object(d.j)(n.e(6).then(n.bind(null,315)))},w=function(){return Object(d.j)(n.e(4).then(n.bind(null,311)))};c.a.use(h.a);var _=function(){return{x:0,y:0}};var O=n(145);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var j=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},n.n(O).a,{name:"NoSsr"}),k={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,f=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;data.nuxtChildDepth=l;var h=c[l]||f,d={};$.forEach((function(t){void 0!==h[t]&&(d[t]=h[t])}));var m={};E.forEach((function(t){"function"==typeof h[t]&&(m[t]=h[t].bind(o))}));var v=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")})),v)return v.call(o,t)};var y=[t("router-view",data)];return r.keepAlive&&(y=[t("keep-alive",{props:r.keepAliveProps},y)]),t("transition",{props:d,on:m},y)}},$=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],E=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],P={name:"Error",props:{error:{type:Object,default:null}},layout:"service"},R=(n(198),n(12)),T=Object(R.a)(P,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("h1",[this._v("OOOPS")]),this._v(" "),e("h3",[this._v(this._s(this.error.message))]),this._v(" "),e("nuxt-link",{attrs:{to:"/"}},[this._v("Terug naar de home page")])],1)}),[],!1,null,null,null).exports,S=(n(71),{name:"Nuxt",components:{NuxtChild:k,NuxtError:T},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(d.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;if(t&&t.options){var e=t.options,n=e.key,r=e.watchQuery;if(n)return"function"==typeof n?n(this.$route):n;if(r){if(r.length){var o={},c=!0,f=!1,l=void 0;try{for(var h,m=r[Symbol.iterator]();!(c=(h=m.next()).done);c=!0){var v=h.value;o[v]=this.$route.query[v]}}catch(t){f=!0,l=t}finally{try{c||null==m.return||m.return()}finally{if(f)throw l}}return this.$router.resolve({path:this.$route.path,query:o}).href}return this.$route.fullPath}}return this.$route.path}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}}),N={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},A=(n(199),Object(R.a)(N,void 0,void 0,!1,null,null,null).exports),D=(n(200),n(201),n(202),n(203),n(204),n(61).a),L=Object(R.a)(D,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("header",{attrs:{id:"navbar"}},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(205),alt:"logo",id:"logo"}})]),this._v(" "),e("nav",[e("ul",[e("li",[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/about"}},[this._v("Over")])],1),this._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/services"}},[this._v("Services")])],1),this._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[this._v("Contact")])],1)])])],1)])}),[],!1,null,null,null).exports,I=(n(206),{components:{Nav:L,Footer:Object(R.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"skewed"}),this._v(" "),e("footer",[e("div",{staticClass:"footer"},[e("h4",[this._v("Hijswerken Stijn")])])])])}],!1,null,null,null).exports}}),M=(n(207),{_default:Object(R.a)(I,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nav"),this._v(" "),e("nuxt"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null).exports}),B={head:{title:"nuxt-contentful-starter",htmlAttrs:{prefix:"og: http://ogp.me/ns#",lang:"en"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"},{hid:"description",name:"description",content:"A starter scaffolding based on Nuxt, Contentful and PostCSS."},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"Nuxt Contentful Starter"},{hid:"author",name:"author",content:"Mattia Astorino"},{hid:"theme-color",name:"theme-color",content:"#ffffff"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"Nuxt Contentful Starter"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"Nuxt Contentful Starter"},{hid:"og:description",name:"og:description",property:"og:description",content:"A starter scaffolding based on Nuxt, Contentful and PostCSS."}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.png"},{rel:"apple-touch-icon",href:"/img/icons/apple-touch-icon.png"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Big+Shoulders+Text|McLaren&display=swap"},{rel:"manifest",href:"/_nuxt/manifest.56302ca0.json"},{rel:"shortcut icon",href:"apple-touch-icon.png"}],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&M["_"+t]||(t="default"),this.layoutName=t,this.layout=M["_"+t],this.layout},loadLayout:function(t){return t&&M["_"+t]||(t="default"),Promise.resolve(M["_"+t])}},components:{NuxtLoading:A}},U=n(94),H=n.n(U),F=n(66);function J(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function K(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?J(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):J(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}n.d(e,"b",(function(){return Q})),n.d(e,"a",(function(){return T})),c.a.component(j.name,j),c.a.component(k.name,k),c.a.component("NChild",k),c.a.component(S.name,S),c.a.use(l.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var X={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function Q(t){return V.apply(this,arguments)}function V(){return(V=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,f,path,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new h.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:_,routes:[{path:"/about",component:m,name:"about"},{path:"/contact",component:v,name:"contact"},{path:"/persons",component:y,name:"persons"},{path:"/services",component:x,name:"services"},{path:"/",component:w,name:"index"}],fallback:!1});case 2:return n=t.sent,r=K({router:n,nuxt:{defaultTransition:X,transitions:[X],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map((function(t){return t=t?"string"==typeof t?Object.assign({},X,{name:t}):Object.assign({},X,t):X})),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?Object(d.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},B),o=e?e.next:function(t){return r.router.push(t)},e?f=n.resolve(e.url).route:(path=Object(d.d)(n.options.base),f=n.resolve(path).route),t.next=8,Object(d.p)(r,{route:f,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 8:if(l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";c.a[n]||(c.a[n]=!0,c.a.use((function(){c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get:function(){return this.$root.$options[t]}})})))},"function"!=typeof H.a){t.next=12;break}return t.next=12,H()(r.context,l);case 12:if("function"!=typeof F.default){t.next=15;break}return t.next=15,Object(F.default)(r.context,l);case 15:t.next=18;break;case 18:return t.abrupt("return",{app:r,router:n});case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},59:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){"use strict";(function(t){"undefined"==typeof window&&(t.window={}),window.onscroll=function(){document.body.scrollTop>80||document.documentElement.scrollTop>80?(document.getElementById("logo").style.width="50px",document.getElementById("navbar").style.backgroundImage="linear-gradient(to right, rgba(0,0,0,0.3) , rgba(2, 2, 2, 0.15))"):(document.getElementById("logo").style.width="70px",document.getElementById("navbar").style.backgroundImage="none")},e.a={}}).call(this,n(19))},62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){"use strict";n(71),n(28),n(29),n(107),n(109);var r=n(1),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},c=window.IntersectionObserver&&new window.IntersectionObserver((function(t){t.forEach((function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()}))}));e.a={name:"NuxtLink",extends:r.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||o(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(c.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){c&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),c.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map((function(t){return t.components.default})).filter((function(t){return"function"==typeof t&&!t.options&&!t.__prefetched}))},prefetch:function(){if(this.canPrefetch()){c.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,f=t[Symbol.iterator]();!(e=(o=f.next()).done);e=!0){var l=o.value;l().catch((function(){})),l.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==f.return||f.return()}finally{if(n)throw r}}}}}}},66:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(296),o=function(){return r.createClient({space:"4cylycdwezuo",accessToken:"7VXjBXT67hc4D6OhLEVNyePP4o2X75Hhx-rON-b3ll4"})}},92:function(t,e,n){"use strict";e.a={}},94:function(t,e){"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js",{scope:"/"}).then((function(t){window.$sw=t})).catch((function(t){console.error("Service worker registration failed:",t)})):console.warn("Service workers are not supported.")},95:function(t,e){}},[[151,7,1,8]]]);