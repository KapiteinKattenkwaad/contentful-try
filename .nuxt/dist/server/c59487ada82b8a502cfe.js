exports.ids=[3],exports.modules={31:function(t,e){},32:function(t,e){},33:function(t,e){},38:function(t,e,n){"use strict";n.r(e);var r=n(31),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},39:function(t,e,n){"use strict";n.r(e);var r=n(32),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},40:function(t,e,n){"use strict";n.r(e);var r=n(33),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},41:function(t,e,n){"use strict";n.r(e);var r=n(6);const o=Object(r.a)();var c={components:{},async asyncData({env:t}){try{return{posts:(await o.getEntries({content_type:"blogPost",order:"-sys.createdAt"})).items}}catch(t){console.error(t)}}},d=n(1);var l=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",attrs:{id:"cards"}},[t._ssrNode('<div class="column" data-v-58c26ad0>',"</div>",[t._ssrNode('<div class="card" data-v-58c26ad0>',"</div>",[t._ssrNode(t._ssrList(t.posts,(function(e){return"<div data-v-58c26ad0><div data-v-58c26ad0>"+t._ssrEscape(t._s(e.fields.title))+"</div></div>"}))+' <p class="card-text" data-v-58c26ad0>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde quod minima. Quibusdam\n        sunt quis harum repellat id provident temporibus!</p> '),n("nuxt-link",{attrs:{to:"/services"}},[n("button",{staticClass:"button header-button2 card-button"},[t._v("Meer weten?")])])],2)])])}),[],!1,(function(t){var e=n(38);e.__inject__&&e.__inject__(t)}),"58c26ad0","55f4db0f").exports;var v=Object(d.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[this._ssrNode('<h2 class="title">\n        Voor al uw kraanwerken\n    </h2> <h1 class="subtitle">\n        Hijswerken Stijn\n    </h1> '),this._ssrNode('<div class="buttons-wrapper">',"</div>",[e("nuxt-link",{attrs:{to:"/contact"}},[e("button",{staticClass:"button header-button"},[this._v("\n                Gratis offerte\n            ")])]),this._ssrNode(" "),e("nuxt-link",{attrs:{to:"#cards"}},[e("button",{staticClass:"button header-button2"},[this._v("\n                Meer info\n            ")])])],2)],2)}),[],!1,(function(t){var e=n(39);e.__inject__&&e.__inject__(t)}),null,"c52bd206").exports;const _=Object(r.a)();var f={data:function(){return{image:"post.fields.file.url"}},transition:"default",components:{Cards:l,HeroHome:v},async asyncData({env:t}){try{return{posts:(await _.getEntries({content_type:"blogPost",order:"-sys.createdAt"})).items}}catch(t){console.error(t)}}};var h=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("HeroHome"),t._ssrNode(" "),t._ssrNode('<section class="container" data-v-7018142a>',"</section>",[t._ssrNode('<div class="row" data-v-7018142a>',"</div>",t._l(t.posts,(function(e){return t._ssrNode('<div id="cards" data-v-7018142a>',"</div>",[t._ssrNode('<div class="column" data-v-7018142a>',"</div>",[t._ssrNode('<div class="card" data-v-7018142a>',"</div>",[t._ssrNode((e.fields.fotoBoven?"<img"+t._ssrAttr("src",e.fields.fotoBoven.fields.file.url)+' class="card-image" data-v-7018142a>':"\x3c!----\x3e")+' <h3 class="card-title" data-v-7018142a>'+t._ssrEscape(t._s(e.fields.title))+'</h3> <p class="card-text" data-v-7018142a>'+t._ssrEscape(" "+t._s(e.fields.content)+" ")+"</p> "),n("nuxt-link",{attrs:{to:"/services"}},[n("button",{staticClass:"button header-button2 card-button"},[t._v("Meer weten?")])])],2)])])})),0)])],2)}),[],!1,(function(t){var e=n(40);e.__inject__&&e.__inject__(t)}),"7018142a","f10e07d0");e.default=h.exports}};
//# sourceMappingURL=c59487ada82b8a502cfe.js.map