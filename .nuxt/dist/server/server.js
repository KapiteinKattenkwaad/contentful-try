module.exports=function(t){var e={},n={0:0};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(e){if(0!==n[e]){var r=require("./"+{1:"50055d9732e57837d92e",2:"36907356fa4d0211da4a",3:"c59487ada82b8a502cfe",4:"79b996b75f623fa5664b",5:"10c74127d404713c663e"}[e]+".js"),o=r.modules,c=r.ids;for(var l in o)t[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},r.p="/_nuxt/",r.oe=function(t){process.nextTick((function(){throw t}))},r(r.s=12)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function r(t,e,n,r,o,c,l,d){var h,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),c&&(f._scopeId="data-v-"+c),l?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},f._ssrRegister=h):o&&(h=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),h)if(f.functional){f._injectStyles=h;var m=f.render;f.render=function(t,e){return h.call(e),m(t,e)}}else{var x=f.beforeCreate;f.beforeCreate=x?[].concat(x,h):[h]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const r=n(25),o=()=>r.createClient({space:"4cylycdwezuo",accessToken:"7VXjBXT67hc4D6OhLEVNyePP4o2X75Hhx-rON-b3ll4"})},function(t,e){t.exports=require("vue-router")},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e){t.exports=require("vue-no-ssr")},function(t,e,n){t.exports=n(26)},function(t,e){t.exports=require("consola")},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){t.exports=n.p+"img/60ae172.svg"},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e){},function(t,e){t.exports=require("contentful")},function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(13),n(0)),c=n.n(o),l=n(9),d=n.n(l);var h={};function f(t){return t.then(t=>t.default||t)}function m(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function x(t,e=!1){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).map(r=>(e&&e.push(n),t.components[r]))))}function y(t){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).reduce((r,o)=>(t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r),[])))}(t,async(t,e,n,r)=>("function"!=typeof t||t.options||(t=await t()),n.components[r]=m(t),n.components[r])))}async function v(t){if(t)return await y(t),{...t,meta:x(t).map((e,n)=>({...e.options.meta,...(t.matched[n]||{}).meta}))}}async function _(t,e){t.context||(t.context={isStatic:!1,isDev:!1,isHMR:!1,app:t,payload:e.payload,error:e.error,base:"/",env:{CTF_SPACE_ID:"4cylycdwezuo",CTF_CDA_ACCESS_TOKEN:"7VXjBXT67hc4D6OhLEVNyePP4o2X75Hhx-rON-b3ll4"}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,n)=>{if(!e)return;t.context._redirected=!0;let r=typeof path;"number"==typeof e||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=e),e=302),"object"===r&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:n,status:e}):(path=function(t,e){let n;const r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));let o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&(path=c[0],o=c[1]);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+n}).filter(Boolean).join("&")}(e));return l+=o?"#"+o:""}(path,n),t.context.next({path:path,status:e}))},t.context.beforeNuxtRender=t=>e.beforeRenderFns.push(t));const[n,r]=await Promise.all([v(e.route),v(e.from)]);e.route&&(t.context.route=n),e.from&&(t.context.from=r),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!!e.isHMR,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function w(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():C(t[0],e).then(()=>w(t.slice(1),e))}function C(t,e){let n;return(n=2===t.length?new Promise(n=>{t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function $(t,e){return function(t){const e=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){let path="";const data=n||{},o=(r||{}).pretty?j:encodeURIComponent;for(let i=0;i<t.length;i++){const n=t[i];if("string"==typeof n){path+=n;continue}const r=data[n.name||"pathMatch"];let c;if(null==r){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(r)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let t=0;t<r.length;t++){if(c=o(r[t]),!e[i].test(c))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(c)+"`");path+=(0===t?n.prefix:n.delimiter)+c}}else{if(c=n.asterisk?encodeURI(r).replace(/[?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase()):o(r),!e[i].test(c))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+c+'"');path+=n.prefix+c}}return path}}(function(t,e){const n=[];let r=0,o=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=k.exec(t));){const e=l[0],d=l[1],h=l.index;if(path+=t.slice(o,h),o=h+e.length,d){path+=d[1];continue}const f=t[o],m=l[2],x=l[3],y=l[4],v=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const C=null!=m&&null!=f&&f!==m,$="+"===_||"*"===_,k="?"===_||"*"===_,j=l[2]||c,pattern=y||v;n.push({name:x||r++,prefix:m||"",delimiter:j,optional:k,repeat:$,partial:C,asterisk:!!w,pattern:pattern?E(pattern):w?".*":"[^"+N(j)+"]+?"})}o<t.length&&(path+=t.substr(o));path&&n.push(path);return n}(t,e))}const k=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function j(t){return encodeURI(t).replace(/[/?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function N(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function E(t){return t.replace(/([=!:$/()])/g,"\\$1")}var T=n(10),O=n.n(T),S=n(7),P=n.n(S);const A=()=>f(n.e(1).then(n.bind(null,43))),R=()=>f(n.e(2).then(n.bind(null,42))),D=()=>f(n.e(4).then(n.bind(null,44))),L=()=>f(n.e(5).then(n.bind(null,45))),M=()=>f(n.e(3).then(n.bind(null,41)));c.a.use(P.a);const I=function(){return{x:0,y:0}};var B=n(11),F={...n.n(B).a,name:"NoSsr"},U={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:n}){data.nuxtChild=!0;const r=e,o=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition;let l=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&l++,e=e.$parent;data.nuxtChildDepth=l;const d=o[l]||c,h={};H.forEach(t=>{void 0!==d[t]&&(h[t]=d[t])});const f={};K.forEach(t=>{"function"==typeof d[t]&&(f[t]=d[t].bind(r))});const m=f.beforeEnter;f.beforeEnter=t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(r,t)};let x=[t("router-view",data)];return n.keepAlive&&(x=[t("keep-alive",{props:n.keepAliveProps},x)]),t("transition",{props:h,on:f},x)}};const H=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],K=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var V={name:"Error",props:{error:{type:Object,default:null}},layout:"service"},X=n(1);var J=Object(X.a)(V,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[this._ssrNode("<h1>OOOPS</h1> <h3>"+this._ssrEscape(this._s(this.error.message))+"</h3> "),e("nuxt-link",{attrs:{to:"/"}},[this._v("Terug naar de home page")])],2)}),[],!1,(function(t){var e=n(14);e.__inject__&&e.__inject__(t)}),null,"98246d5a").exports,z={name:"Nuxt",components:{NuxtChild:U,NuxtError:J},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||$(this.$route.matched[0].path)(this.$route.params);const t=this.$route.matched[0]&&this.$route.matched[0].components.default;if(t&&t.options){const{key:e,watchQuery:n}=t.options;if(e)return"function"==typeof e?e(this.$route):e;if(n){if(n.length){const t={};for(const e of n)t[e]=this.$route.query[e];return this.$router.resolve({path:this.$route.path,query:t}).href}return this.$route.fullPath}}return this.$route.path}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},W={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var Q=Object(X.a)(W,void 0,void 0,!1,(function(t){var e=n(15);e.__inject__&&e.__inject__(t)}),null,"005e7b2b").exports;n(16),n(17),n(18),n(19),n(20);"undefined"==typeof window&&(global.window={}),window.onscroll=function(){document.body.scrollTop>80||document.documentElement.scrollTop>80?(document.getElementById("logo").style.width="50px",document.getElementById("navbar").style.backgroundImage="linear-gradient(to right, rgba(0,0,0,0.3) , rgba(2, 2, 2, 0.15))"):(document.getElementById("logo").style.width="70px",document.getElementById("navbar").style.backgroundImage="none")};var G={};var Y={components:{Nav:Object(X.a)(G,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<header id="navbar">',"</header>",[r("nuxt-link",{attrs:{to:"/"}},[r("img",{attrs:{src:n(21),alt:"logo",id:"logo"}})]),t._ssrNode(" "),t._ssrNode("<nav>","</nav>",[t._ssrNode("<ul>","</ul>",[t._ssrNode("<li>","</li>",[r("nuxt-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("Over")])],1),t._ssrNode(" "),t._ssrNode("<li>","</li>",[r("nuxt-link",{staticClass:"nav-link",attrs:{to:"/services"}},[t._v("Services")])],1),t._ssrNode(" "),t._ssrNode("<li>","</li>",[r("nuxt-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)],2)])],2)])}),[],!1,(function(t){}),null,"477051cf").exports,Footer:Object(X.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._ssrNode('<div class="skewed"></div> <footer><div class="footer"><h4>Hijswerken Stijn</h4></div></footer>')])}),[],!1,(function(t){var e=n(22);e.__inject__&&e.__inject__(t)}),null,"63baca9f").exports}};const Z={_default:Object(X.a)(Y,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nav"),this._ssrNode(" "),e("nuxt"),this._ssrNode(" "),e("Footer")],2)}),[],!1,(function(t){var e=n(23);e.__inject__&&e.__inject__(t)}),null,"4c82af68").exports};var tt={head:{title:"nuxt-contentful-starter",htmlAttrs:{prefix:"og: http://ogp.me/ns#",lang:"nl"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"},{hid:"description",name:"description",content:"A starter scaffolding based on Nuxt, Contentful and PostCSS."},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"Hijswerken Stijn"},{hid:"author",name:"author",content:"Mattia Astorino"},{hid:"theme-color",name:"theme-color",content:"#ffffff"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"Hijswerken Stijn"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"Hijswerken Stijn"},{hid:"og:description",name:"og:description",property:"og:description",content:"A starter scaffolding based on Nuxt, Contentful and PostCSS."}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.png"},{rel:"apple-touch-icon",href:"/img/icons/apple-touch-icon.png"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Big+Shoulders+Text|McLaren&display=swap"},{rel:"manifest",href:"/_nuxt/manifest.b09592c8.json"},{rel:"shortcut icon",href:"apple-touch-icon.png"}],style:[],script:[]},render(t,e){const n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&Z["_"+t]||(t="default"),this.layoutName=t,this.layout=Z["_"+t],this.layout},loadLayout:t=>(t&&Z["_"+t]||(t="default"),Promise.resolve(Z["_"+t]))},components:{NuxtLoading:Q}},et=(n(24),n(6));c.a.component(F.name,F),c.a.component(U.name,U),c.a.component("NChild",U),c.a.component(z.name,z),c.a.use(O.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const nt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function ot(t){const e=await new P.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:I,routes:[{path:"/about",component:A,name:"about"},{path:"/contact",component:R,name:"contact"},{path:"/persons",component:D,name:"persons"},{path:"/services",component:L,name:"services"},{path:"/",component:M,name:"index"}],fallback:!1}),n={router:e,nuxt:{defaultTransition:nt,transitions:[nt],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},nt,{name:t}):Object.assign({},nt,t):nt),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,n.context._errored=!!e,e=e?function(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}(e):null;const r=this.nuxt||this.$options.nuxt;return r.dateErr=Date.now(),r.err=e,t&&(t.nuxt.error=e),e}},...tt},r=t?t.next:t=>n.router.push(t);let o;if(t)o=e.resolve(t.url).route;else{const path=function(base,t){let path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(e.options.base);o=e.resolve(path).route}await _(n,{route:o,next:r,error:n.nuxt.error.bind(n),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t});const l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");n[t="$"+t]=e;const r="__nuxt_"+t+"_installed__";c.a[r]||(c.a[r]=!0,c.a.use(()=>{c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get(){return this.$root.$options[t]}})}))};return"function"==typeof et.default&&await Object(et.default)(n.context,l),t&&t.url&&await new Promise((r,o)=>{e.push(t.url,r,()=>{const o=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,n.context.route=await v(e),n.context.params=e.params||{},n.context.query=e.query||{},o(),r()})})}),{app:n,router:e}}var it={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}}};c.a.component(it.name,it),c.a.component("NLink",it),global.fetch||(global.fetch=d.a);const st=()=>new c.a({render:t=>t("div")}),at=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(r.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=async t=>{t.redirected=!1,t.next=at(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],error:null,serverRendered:!0};const{app:e,router:n}=await ot(t),r=new c.a(e);t.meta=r.$meta(),t.asyncData={};const o=async()=>{await Promise.all(t.beforeRenderFns.map(e=>C(e,{Components:f,nuxtState:t.nuxt}))),t.rendered=()=>{}},l=async()=>{const n="function"==typeof J.layout?J.layout(e.context):J.layout;return t.nuxt.layout=n||"default",await r.loadLayout(n),r.setLayout(n),await o(),r},d=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),l()),f=x(n.match(t.url));let y=[];if(y=y.map(t=>"function"==typeof t?t:("function"!=typeof h[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),h[t])),await w(y,e.context),t.redirected)return st();if(t.nuxt.error)return l();let v=f.length?f[0].options.layout:J.layout;if("function"==typeof v&&(v=v(e.context)),await r.loadLayout(v),t.nuxt.error)return l();if(v=r.setLayout(v),t.nuxt.layout=r.layoutName,y=[],(v=m(v)).options.middleware&&(y=y.concat(v.options.middleware)),f.forEach(t=>{t.options.middleware&&(y=y.concat(t.options.middleware))}),y=y.map(t=>"function"==typeof t?t:("function"!=typeof h[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),h[t])),await w(y,e.context),t.redirected)return st();if(t.nuxt.error)return l();let _=!0;try{for(const t of f)if("function"==typeof t.options.validate&&!(_=await t.options.validate(e.context)))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),l()}if(!_)return t._generate&&(t.nuxt.serverRendered=!1),d();if(!f.length)return d();const $=await Promise.all(f.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=C(n.options.asyncData,e.context);o.then(e=>(t.asyncData[n.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){const data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(n),e)),r.push(o)}else r.push(null);return n.options.fetch?r.push(n.options.fetch(e.context)):r.push(null),Promise.all(r)}));return t.nuxt.data=$.map(t=>t[0]||{}),t.redirected?st():t.nuxt.error?l():(await o(),r)}}]);
//# sourceMappingURL=server.js.map