(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-739938b8"],{"0dac":function(t,e,n){"use strict";var a=n("61c4"),i=n.n(a);i.a},"11e7":function(t,e,n){"use strict";var a=n("f899"),i=n.n(a);i.a},"1f90":function(t,e,n){},"25b2":function(t,e,n){},"61c4":function(t,e,n){},7641:function(t,e,n){},"7b33":function(t,e,n){"use strict";var a=n("1f90"),i=n.n(a);i.a},"858a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rt-anchor"},[n("SwiperAnchor",{attrs:{swipers:t.banners}}),n("TitleIcon"),n("div",{staticClass:"content"},[n("TitleHeader",{staticStyle:{margin:"0 auto"},attrs:{name:"精选电台",path:"/hotAnchor"}}),t._l(t.recommends,(function(t,e){return n("Card",{key:e,attrs:{item:t,wth:23}})})),n("TitleHeader",{staticStyle:{marginTop:"50px"},attrs:{name:"付费精选",path:"/payAnchor"}}),t._l(t.pays,(function(t){return n("PayCard",{key:t.id,attrs:{item:t}})})),n("TitleHeader",{staticStyle:{marginTop:"50px"},attrs:{name:"电台个性推荐",show:!1}}),t._l(t.recommend,(function(e){return n("Card",{key:e.id,attrs:{item:e,wth:15,topShow:!1,userShow:!1}},[n("div",{staticClass:"slot-text",attrs:{slot:"btm-text"},slot:"btm-text"},[t._v(t._s(e.name))])])})),n("TitleHeader",{staticStyle:{marginTop:"50px"},attrs:{name:"创作|翻唱",path:"/anchor2001"}}),t._l(t.creations,(function(e){return n("Card",{key:e.id,attrs:{item:e,wth:15,topShow:!1,userShow:!1}},[n("div",{staticClass:"slot-text",attrs:{slot:"btm-text"},slot:"btm-text"},[t._v(t._s(e.name))])])})),n("TitleHeader",{staticStyle:{marginTop:"50px"},attrs:{name:"3D|电子",path:"/anchor10002"}}),t._l(t.electrs,(function(e){return n("Card",{key:e.id,attrs:{item:e,wth:15,topShow:!1,userShow:!1}},[n("div",{staticClass:"slot-text",attrs:{slot:"btm-text"},slot:"btm-text"},[t._v(t._s(e.name))])])})),n("TitleHeader",{staticStyle:{marginTop:"50px"},attrs:{name:"音乐故事",path:"/anchor2"}}),t._l(t.musicStory,(function(e){return n("Card",{key:e.id,attrs:{item:e,wth:15,topShow:!1,userShow:!1}},[n("div",{staticClass:"slot-text",attrs:{slot:"btm-text"},slot:"btm-text"},[t._v(t._s(e.name))])])})),n("TitleHeader",{staticStyle:{marginTop:"50px"},attrs:{name:"情感调频",path:"/anchor3"}}),t._l(t.emotion,(function(e){return n("Card",{key:e.id,attrs:{item:e,wth:15,topShow:!1,userShow:!1}},[n("div",{staticClass:"slot-text",attrs:{slot:"btm-text"},slot:"btm-text"},[t._v(t._s(e.name))])])})),n("TitleHeader",{staticStyle:{marginTop:"50px"},attrs:{name:"二次元",path:"/anchor3001"}}),t._l(t.quadratic,(function(e){return n("Card",{key:e.id,attrs:{item:e,wth:15,topShow:!1,userShow:!1}},[n("div",{staticClass:"slot-text",attrs:{slot:"btm-text"},slot:"btm-text"},[t._v(t._s(e.name))])])}))],2)],1)},i=[],r=(n("d81d"),n("a434"),n("b0c0"),n("2909")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper"},[n("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},t._l(t.swipers,(function(e,a){return n("el-carousel-item",{key:a},[n("el-image",{staticStyle:{height:"100%"},attrs:{src:e.pic||e.imageUrl,fit:"contain"},on:{click:function(n){return t.changeUrl(e.targetId)}}}),n("el-tag",{staticStyle:{position:"absolute",top:"76%",right:"0","border-radius":"10px 0 0 10px",height:"19px",lineHeight:"19px"},attrs:{type:"独家"!==e.typeTitle?"danger":"primary",effect:"dark"}},[t._v(t._s(e.typeTitle))])],1)})),1)],1)},c=[],o=n("735b"),u=n("9de6"),l={name:"Swiper",props:{swipers:{type:Array,default:function(){return[]}}},data:function(){return{musicUrl:"",musicMenu:{}}},methods:{changeUrl:function(t){console.log(t),null!==t&&(this.getMusicUrl(t),this.getMusicMenu(t))},getMusicUrl:function(t){var e=this;Object(o["c"])(t).then((function(t){e.musicUrl=t.data[0].url,e.$store.commit(u["d"],e.musicUrl)}))},getMusicMenu:function(t){var e=this;Object(o["b"])(t).then((function(t){e.musicMenu=t.songs[0],e.$store.commit(u["e"],e.musicMenu)}))}},created:function(){}},d=l,m=(n("d42a"),n("2877")),h=Object(m["a"])(d,s,c,!1,null,null,null),f=h.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"titleIcon"},t._l(t.cateList,(function(e,a){return n("div",{key:a,staticClass:"tt-item",on:{click:function(n){return t.handel(e.id)}}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e.picIPadUrl,alt:"404"}})]),n("p",[t._v(t._s(e.name))])])})),0)},g=[],v=n("c1ec"),b={name:"TitleIcon",data:function(){return{cateList:[]}},methods:{getAnchorCateList:function(){var t=this;Object(v["b"])().then((function(e){t.cateList=e.categories.splice(0,5)}))},handel:function(t){this.$router.push("/anchor"+t)}},created:function(){this.getAnchorCateList()}},_=b,y=(n("11e7"),Object(m["a"])(_,p,g,!1,null,"e9b919f8",null)),w=y.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",style:{width:t.wth+"%"}},[n("div",{staticClass:"img",on:{click:function(e){return t.handel(t.item.id)}}},[n("img",{attrs:{src:t.item.picUrl,alt:"404"}}),t.topShow?n("span",{staticClass:"top"},[t._v(t._s(t.item.category))]):t._e(),n("span",{staticClass:"botm"},[t._t("btm-text",[n("i",{staticClass:"el-icon-view"}),t._v(t._s(t.item.subCount)+" ")])],2)]),n("div",{staticClass:"talk"},[t._v(t._s(t.item.rcmdtext||t.item.lastProgramName))]),t.userShow?n("div",{staticClass:"c-user"},[n("a",{attrs:{href:"#"}},[n("img",{staticClass:"u-img",attrs:{src:t.item.dj.avatarUrl,alt:"404"}})]),n("a",{staticClass:"nickname",attrs:{href:"#"}},[t._v(t._s(t.item.dj.nickname))])]):t._e()])},j=[],S=(n("a9e3"),{props:{item:{type:Object,default:function(){return{}}},topShow:{type:Boolean,default:!0},userShow:{type:Boolean,default:!0},wth:{type:Number,default:18}},data:function(){return{}},methods:{handel:function(t){this.$router.push("/listAnchor"+t)}}}),x=S,O=(n("0dac"),Object(m["a"])(x,C,j,!1,null,"409fc65e",null)),T=O.exports,k=n("dc93"),A=n("d5b7"),M={name:"RightAchor",components:{SwiperAnchor:f,TitleIcon:w,TitleHeader:A["a"],Card:T,PayCard:k["a"]},data:function(){return{banners:[],recommends:[],recommend:[],pays:[],cate:[],creations:[],electrs:[],musicStory:[],emotion:[],quadratic:[]}},methods:{getAnchorBanner:function(){var t=this;Object(v["a"])().then((function(e){t.banners=e.data}))},getAnchorRecommend:function(){var t=this;Object(v["g"])().then((function(e){t.recommends=e.djRadios;var n=Object(r["a"])(t.recommends);t.recommends=t.recommends.splice(0,4),n.splice(0,4),t.recommend=Object(r["a"])(n)}))},getAnchorPay:function(){var t=this;Object(v["e"])().then((function(e){t.pays=e.data.list}))},getAnchorCateList:function(){var t=this;Object(v["b"])().then((function(e){e.categories.map((function(e){t.cate.push({name:e.name,id:e.id})}))}))},getCreation:function(t){var e=this;Object(v["i"])(t).then((function(t){e.creations=t.djRadios.splice(0,6)}))},getElectr:function(t){var e=this;Object(v["i"])(t).then((function(t){e.electrs=t.djRadios.splice(0,6)}))},getMusicStory:function(t){var e=this;Object(v["i"])(t).then((function(t){e.musicStory=t.djRadios.splice(0,6)}))},getEmotion:function(t){var e=this;Object(v["i"])(t).then((function(t){e.emotion=t.djRadios.splice(0,6)}))},getQuadratic:function(t){var e=this;Object(v["i"])(t).then((function(t){e.quadratic=t.djRadios.splice(0,6)}))}},created:function(){this.getAnchorBanner(),this.getAnchorRecommend(),this.getAnchorPay(),this.getAnchorCateList(),this.getCreation(2001),this.getElectr(10002),this.getMusicStory(2),this.getEmotion(3),this.getQuadratic(3001)}},E=M,U=(n("7b33"),Object(m["a"])(E,a,i,!1,null,"6e24afba",null));e["default"]=U.exports},"8c63":function(t,e,n){},"928a":function(t,e,n){"use strict";var a=n("7641"),i=n.n(a);i.a},a434:function(t,e,n){"use strict";var a=n("23e7"),i=n("23cb"),r=n("a691"),s=n("50c4"),c=n("7b0b"),o=n("65f0"),u=n("8418"),l=n("1dde"),d=n("ae40"),m=l("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,p=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!m||!h},{splice:function(t,e){var n,a,l,d,m,h,b=c(this),_=s(b.length),y=i(t,_),w=arguments.length;if(0===w?n=a=0:1===w?(n=0,a=_-y):(n=w-2,a=p(f(r(e),0),_-y)),_+n-a>g)throw TypeError(v);for(l=o(b,a),d=0;d<a;d++)m=y+d,m in b&&u(l,d,b[m]);if(l.length=a,n<a){for(d=y;d<_-a;d++)m=d+a,h=d+n,m in b?b[h]=b[m]:delete b[h];for(d=_;d>_-a+n;d--)delete b[d-1]}else if(n>a)for(d=_-a;d>y;d--)m=d+a-1,h=d+n-1,m in b?b[h]=b[m]:delete b[h];for(d=0;d<n;d++)b[d+y]=arguments[d+2];return b.length=_-a+n,l}})},c1ec:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"g",(function(){return s})),n.d(e,"e",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"i",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"h",(function(){return d})),n.d(e,"f",(function(){return m}));var a=n("1bab");function i(){return Object(a["a"])({url:"dj/banner"})}function r(){return Object(a["a"])({url:"dj/catelist"})}function s(){return Object(a["a"])({url:"/dj/recommend"})}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;return Object(a["a"])({url:"/dj/paygift",params:{limit:t}})}function o(t){return Object(a["a"])({url:"/dj/detail",params:{rid:t}})}function u(t){return Object(a["a"])({url:"/dj/recommend/type",params:{type:t}})}function l(t,e){return Object(a["a"])({url:"/dj/radio/hot",params:{cateId:t,limit:e}})}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"hot",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return Object(a["a"])({url:"/dj/toplist",params:{type:t,limit:e}})}function m(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(a["a"])({url:"/dj/program",params:{rid:t,asc:e}})}},c6c2:function(t,e,n){"use strict";var a=n("8c63"),i=n.n(a);i.a},d42a:function(t,e,n){"use strict";var a=n("25b2"),i=n.n(a);i.a},d5b7:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("div",{staticClass:"content"},[n("div",{staticClass:"name"},[t._v(t._s(t.name))]),t.show?n("div",{staticClass:"more"},[n("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.toggel(e)}}},[t._v(t._s(t.more)),n("i",{staticClass:"el-icon-arrow-right"})])]):t._e()])])},i=[],r={name:"TitleHeader",props:{name:{type:String,default:"名字"},more:{type:String,default:"更多"},path:{type:String,default:"/home/rtsongs"},show:{type:Boolean,default:!0}},methods:{toggel:function(){this.$router.push(this.path)}}},s=r,c=(n("c6c2"),n("2877")),o=Object(c["a"])(s,a,i,!1,null,"259a686a",null);e["a"]=o.exports},dc93:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"payCard",staticStyle:{width:"48%"}},[n("div",{staticClass:"pay-img"},[n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handel(t.item.id)}}},[n("img",{attrs:{src:t.item.picUrl,alt:"404"}})]),t.timeShow?n("span",{staticClass:"time"},[t._v(t._s(t._f("showDate")(t.time))+"...")]):t._e()]),n("div",{staticClass:"content"},[n("p",{staticClass:"title"},[n("a",{attrs:{href:"#"}},[t._v(t._s(t.item.name))])]),n("p",[t._v(t._s(t.item.rcmdText||t.item.rcmdtext))]),t._t("count",[n("p",[t._v(t._s(t.item.lastProgramName))])]),t.priceShow?n("p",{staticClass:"price"},[t._v("￥"+t._s(t.item.originalPrice/100))]):t._e()],2)])},i=[],r=n("c1ec"),s=n("ee02"),c={data:function(){return{time:0}},props:{item:{type:Object,default:function(){return{}}},timeShow:{type:Boolean,default:!0},priceShow:{type:Boolean,default:!0}},methods:{handel:function(t){this.$router.push("/listAnchor"+t)},getAnchorDetail:function(t){var e=this;Object(r["c"])(t).then((function(t){e.time=t.djRadio.lastProgramCreateTime}))}},created:function(){this.getAnchorDetail(this.item.id)},filters:{showDate:function(t){var e=new Date(t);return Object(s["a"])(e,"yyyy年MM月dd日")}}},o=c,u=(n("928a"),n("2877")),l=Object(u["a"])(o,a,i,!1,null,"6a7f01e3",null);e["a"]=l.exports},f899:function(t,e,n){}}]);
//# sourceMappingURL=chunk-739938b8.3546855b.js.map