(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6968df9c"],{9495:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"friends"},[t("div",{staticClass:"friend-main"},[t("h2",[e._v("我的朋友")]),t("div",{staticClass:"friend-user"},e._l(e.friends,(function(n){return t("div",{key:n.userId,staticClass:"friend-box"},[t("img",{attrs:{src:n.avatarUrl,alt:"404"},on:{click:function(t){return e.togUser(n.userId)}}}),t("p",[e._v(e._s(n.nickname))])])})),0)])])},s=[],i=t("0de1"),o={name:"Friends",data:function(){return{currentUserInfo:"null"===window.localStorage.getItem("currentUserInfo")?null:JSON.parse(window.localStorage.getItem("currentUserInfo")),friends:[]}},methods:{getUserFollows:function(e){var n=this;Object(i["d"])(e).then((function(e){n.friends=e.follow}))},togUser:function(e){console.log(e)}},created:function(){this.currentUserInfo&&this.getUserFollows(this.currentUserInfo.userId)}},c=o,a=(t("d54f"),t("2877")),u=Object(a["a"])(c,r,s,!1,null,"0756e114",null);n["default"]=u.exports},d54f:function(e,n,t){"use strict";var r=t("e84d"),s=t.n(r);s.a},e84d:function(e,n,t){}}]);
//# sourceMappingURL=chunk-6968df9c.511b4ca9.js.map