(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1ef25de"],{"045f":function(t,e,i){"use strict";var a=i("36de"),s=i.n(a);s.a},"0f4a":function(t,e,i){"use strict";var a=i("5e55"),s=i.n(a);s.a},"1a93":function(t,e,i){"use strict";var a=i("b36d"),s=i.n(a);s.a},"1e28":function(t,e,i){"use strict";i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return l}));var a=i("1bab");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(a["a"])({url:"/top/song",params:{type:t}})}function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return Object(a["a"])({url:"/top/album",params:{area:t,limit:e}})}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Object(a["a"])({url:"/comment/album",params:{id:t,limit:e,offset:i}})}},"36de":function(t,e,i){},"4b5f":function(t,e,i){t.exports=i.p+"img/top50.acbd630c.png"},"5e55":function(t,e,i){},"85cb":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rt-new"},[i("div",{staticClass:"new-main"},[i("div",{staticClass:"new-tog"},[i("el-button",{class:[t.isTog?"active":""],attrs:{size:"small",round:""},nativeOn:{click:function(e){return t.togList(e)}}},[t._v("新歌速递")]),i("el-button",{class:[t.isTog?"":"active"],attrs:{size:"small",round:""},nativeOn:{click:function(e){return t.togAnchor(e)}}},[t._v("新碟上架")])],1),i("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"全部",name:"first"}},[i("SingerAlbum",{directives:[{name:"show",rawName:"v-show",value:t.togShow,expression:"togShow"}],attrs:{wth:95,imgShow:!1,tableList:t.songsList,topTitle:"热门歌曲",images:!0,nicknameshow:!0},scopedSlots:t._u([{key:"tableicon",fn:function(t){return[i("img",{staticStyle:{width:"30px"},attrs:{src:t.item,alt:"404"}})]}},{key:"tablesinger",fn:function(e){return[1===e.item.length?i("span",[t._v(t._s(e.item[0].name))]):i("span",t._l(e.item,(function(a,s){return i("i",{key:a.id},[t._v(t._s(s+1===e.item.length?a.name:a.name+"/"))])})),0)]}}])}),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.togShow,expression:"!togShow"}],staticClass:"new-album"},t._l(t.albumList,(function(t){return i("NewAlbumList",{key:t.id,attrs:{item:t,wth:18}})})),1)],1),i("el-tab-pane",{attrs:{label:"华语",name:"second"}},[i("SingerAlbum",{directives:[{name:"show",rawName:"v-show",value:t.togShow,expression:"togShow"}],attrs:{wth:95,imgShow:!1,tableList:t.huayuList,topTitle:"华语歌曲",images:!0,nicknameshow:!0},scopedSlots:t._u([{key:"tableicon",fn:function(t){return[i("img",{staticStyle:{width:"30px"},attrs:{src:t.item,alt:"404"}})]}},{key:"tablesinger",fn:function(e){return[1===e.item.length?i("span",[t._v(t._s(e.item[0].name))]):i("span",t._l(e.item,(function(a,s){return i("i",{key:a.id},[t._v(t._s(s+1===e.item.length?a.name:a.name+"/"))])})),0)]}}])}),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.togShow,expression:"!togShow"}],staticClass:"new-album"},t._l(t.huayualbum,(function(t){return i("NewAlbumList",{key:t.id,attrs:{item:t,wth:18}})})),1)],1),i("el-tab-pane",{attrs:{label:"欧美",name:"third"}},[i("SingerAlbum",{directives:[{name:"show",rawName:"v-show",value:t.togShow,expression:"togShow"}],attrs:{wth:95,imgShow:!1,tableList:t.oulist,topTitle:"欧美歌曲",images:!0,nicknameshow:!0},scopedSlots:t._u([{key:"tableicon",fn:function(t){return[i("img",{staticStyle:{width:"30px"},attrs:{src:t.item,alt:"404"}})]}},{key:"tablesinger",fn:function(e){return[1===e.item.length?i("span",[t._v(t._s(e.item[0].name))]):i("span",t._l(e.item,(function(a,s){return i("i",{key:a.id},[t._v(t._s(s+1===e.item.length?a.name:a.name+"/"))])})),0)]}}])}),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.togShow,expression:"!togShow"}],staticClass:"new-album"},t._l(t.oualbum,(function(t){return i("NewAlbumList",{key:t.id,attrs:{item:t,wth:18}})})),1)],1),i("el-tab-pane",{attrs:{label:"韩国",name:"fourth"}},[i("SingerAlbum",{directives:[{name:"show",rawName:"v-show",value:t.togShow,expression:"togShow"}],attrs:{wth:95,imgShow:!1,tableList:t.hanlist,topTitle:"韩国歌曲",images:!0,nicknameshow:!0},scopedSlots:t._u([{key:"tableicon",fn:function(t){return[i("img",{staticStyle:{width:"30px"},attrs:{src:t.item,alt:"404"}})]}},{key:"tablesinger",fn:function(e){return[1===e.item.length?i("span",[t._v(t._s(e.item[0].name))]):i("span",t._l(e.item,(function(a,s){return i("i",{key:a.id},[t._v(t._s(s+1===e.item.length?a.name:a.name+"/"))])})),0)]}}])}),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.togShow,expression:"!togShow"}],staticClass:"new-album"},t._l(t.hanalbum,(function(t){return i("NewAlbumList",{key:t.id,attrs:{item:t,wth:18}})})),1)],1),i("el-tab-pane",{attrs:{label:"日本",name:"five"}},[i("SingerAlbum",{directives:[{name:"show",rawName:"v-show",value:t.togShow,expression:"togShow"}],attrs:{wth:95,imgShow:!1,tableList:t.rilist,topTitle:"日本歌曲",images:!0,nicknameshow:!0},scopedSlots:t._u([{key:"tableicon",fn:function(t){return[i("img",{staticStyle:{width:"30px"},attrs:{src:t.item,alt:"404"}})]}},{key:"tablesinger",fn:function(e){return[1===e.item.length?i("span",[t._v(t._s(e.item[0].name))]):i("span",t._l(e.item,(function(a,s){return i("i",{key:a.id},[t._v(t._s(s+1===e.item.length?a.name:a.name+"/"))])})),0)]}}])}),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.togShow,expression:"!togShow"}],staticClass:"new-album"},t._l(t.rialbum,(function(t){return i("NewAlbumList",{key:t.id,attrs:{item:t,wth:18}})})),1)],1)],1)],1)])},s=[],n=(i("b0c0"),i("8a48")),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"album-item",style:{width:t.wth+"%"},on:{click:function(e){return t.toListPage(t.item.id)}}},[i("div",{staticClass:"album-img"},[i("img",{attrs:{src:t.item.picUrl,alt:"404"}}),t._m(0)]),i("div",{staticClass:"namet"},[i("span",{staticStyle:{fontSize:"13px"}},[t._v(t._s(t.item.name))])]),i("p",{staticClass:"album-nickname",staticStyle:{fontSize:"13px",color:"#888"}},[t._v(t._s(t.item.artist.name))])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"album-play"},[i("i",{staticClass:"el-icon-caret-right"})])}],r=(i("a9e3"),{name:"NewAlbumList",data:function(){return{}},props:{item:{type:Object,default:function(){return{}}},wth:{type:Number,default:18}},created:function(){},methods:{toListPage:function(t){console.log(t),this.$router.push("/album"+t)}}}),c=r,u=(i("045f"),i("2877")),m=Object(u["a"])(c,l,o,!1,null,"14bc403a",null),h=m.exports,b=i("1e28"),w={name:"RightNewsing",components:{SingerAlbum:n["a"],NewAlbumList:h},data:function(){return{isTog:!0,activeName:"first",songsList:[],huayuList:[],oulist:[],rilist:[],hanlist:[],albumList:[],huayualbum:[],oualbum:[],rialbum:[],hanalbum:[],togShow:!0}},methods:{handleClick:function(t,e){if(this.togShow)switch(t.name){case"second":this.getNewSongs(7);break;case"third":this.getNewSongs(96);break;case"fourth":this.getNewSongs(8);break;case"five":this.getNewSongs(16);break;default:this.getNewSongs(0)}else switch(t.name){case"second":this.getNewAlbum("ZH");break;case"third":this.getNewAlbum("EA");break;case"fourth":this.getNewAlbum("KR");break;case"five":this.getNewAlbum("JP");break;default:this.getNewAlbum("ALL")}},togList:function(){this.isTog||(this.togShow=!0,console.log("切换了歌单"),this.isTog=!0)},togAnchor:function(){this.isTog&&(this.togShow=!1,console.log("切换了专辑"),this.isTog=!1)},getNewSongs:function(t){var e=this;Object(b["c"])(t).then((function(i){switch(t){case 7:e.huayuList=i.data;break;case 96:e.oulist=i.data;break;case 8:e.rilist=i.data;break;case 16:e.hanlist=i.data;break;default:e.songsList=i.data}}))},getNewAlbum:function(t){var e=this;Object(b["a"])(t).then((function(i){switch(console.log(i),t){case"ZH":e.huayualbum=i.albums;break;case"EA":e.oualbum=i.albums;break;case"KR":e.rialbum=i.albums;break;case"JP":e.hanalbum=i.albums;break;default:e.albumList=i.albums}}))}},created:function(){this.getNewSongs(),this.getNewAlbum("ALL")}},d=w,g=(i("1a93"),Object(u["a"])(d,a,s,!1,null,"7961bcee",null));e["default"]=g.exports},"8a48":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"s-album"},[t.imgShow?a("div",{staticClass:"album-img"},[t._t("albumImg",[a("img",{attrs:{src:i("4b5f"),alt:"404"}})])],2):t._e(),a("div",{staticClass:"album-list",style:{width:t.wth+"%"}},[a("div",{staticClass:"sell-btn",on:{click:t.addCollect}},[a("i",{staticClass:"el-icon-first-aid-kit"})]),a("div",{staticClass:"play-btn",on:{click:function(e){return t.playMusicList(t.tableList[0])}}},[a("i",{staticClass:"el-icon-video-play"})]),a("el-table",{staticStyle:{width:"100%",cursor:"pointer"},attrs:{data:t.tableList.slice(0,t.showNum),lazy:!0,size:"mini"},on:{"row-click":t.playMusicList}},[t._t("albumTitle",[a("el-table-column",{attrs:{type:"index",width:"90",label:t.topTitle}})]),a("el-table-column",{attrs:{width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return t.images?t._t("tableicon",[a("a",{staticClass:"icon",attrs:{href:""},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addCollect(e)}}},[t.isshow?a("i",{staticClass:"el-icon-star-off"}):a("i",{staticClass:"el-icon-star-on"})]),a("a",{staticClass:"icon",attrs:{href:"#"}},[a("i",{staticClass:"el-icon-download"})])],{item:e.row.album.picUrl}):t._e()}}],null,!0)}),a("el-table-column",{attrs:{prop:"name",width:"180"}}),a("el-table-column",{attrs:{prop:"ar[0].name",width:"100"}}),a("el-table-column",{attrs:{prop:"al.name"},scopedSlots:t._u([{key:"default",fn:function(e){return t.nicknameshow?t._t("tablesinger",null,{item:e.row.album.artists}):t._e()}}],null,!0)}),a("el-table-column",{attrs:{prop:"dt",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return a("span",{},[t._v(t._s(t._f("singDate")(e.row.duration||e.row.dt)))])}}])})],2),t.tableList.length>10&&t.lookshow?a("div",{staticClass:"lookAll",on:{click:t.lookAll}},[t._v(" 查看全部"+t._s(t.tableList.length)+"首 "),a("i",{staticClass:"el-icon-arrow-right"})]):t._e()],1)])},s=[],n=(i("a9e3"),i("735b")),l=i("9de6"),o=i("ee02"),r={name:"SingerAlbum",props:{tableList:{type:Array,default:function(){return[]}},wth:{type:Number,default:70},imgShow:{type:Boolean,default:!0},topTitle:{type:String,default:"热门50首"},images:{type:Boolean,default:!1},nicknameshow:{type:Boolean,default:!1}},data:function(){return{isshow:!0,lookshow:!0,showNum:10}},methods:{playMusicList:function(t){console.log(t.id),null!==t.id&&(this.getMusicUrl(t.id),this.getMusicMenu(t.id))},getMusicUrl:function(t){var e=this;Object(n["c"])(t).then((function(t){e.$store.commit(l["d"],t.data[0].url)}))},getMusicMenu:function(t){var e=this;Object(n["b"])(t).then((function(t){e.$store.commit(l["e"],t.songs[0])}))},addCollect:function(){console.log("收藏了"),this.isshow=!this.isshow},lookAll:function(){this.lookshow=!1,this.showNum=this.tableList.length}},filters:{singDate:function(t){return Object(o["c"])(t)}}},c=r,u=(i("0f4a"),i("2877")),m=Object(u["a"])(c,a,s,!1,null,"0267ce56",null);e["a"]=m.exports},b36d:function(t,e,i){}}]);
//# sourceMappingURL=chunk-d1ef25de.3b6df863.js.map