(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{1:function(e,a){},dfbe:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"q-pa-md"},[t("div",{staticClass:"s2rem q-mb-xl"},[e._v(e._s(e.course.name))]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-12 col-sm-8"}),t("div",{staticClass:"col-xs-12 col-sm-4"},[t("q-list",[t("q-item",[e._v("teste")]),t("q-item",[e._v("teste")])],1)],1)])])},r=[],o=(t("e6cf"),t("ded3")),l=t.n(o),n=t("2f62"),i=t("d6d3"),u=t.n(i),c=(t("fda2"),{components:{videoPlayer:u.a},data(){return{playerOptions:{height:"360",autoplay:!0,muted:!1,language:"en",playbackRates:[.7,1,1.5,2],sources:[{type:"video/mp4",src:"https://www.youtube.com/watch?v=1t8mX2LS_HE&feature=emb_logo"}],poster:"https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg"},course:{},user:{}}},async created(){this.user=await this.fetchUserData();const e=await this.getCourseBySlug(this.$route.params.slug);this.user.courses.includes(e.docRef)?this.course=e:this.$router.push({path:`/comprar/${this.$route.params.slug}`})},methods:l()(l()({},Object(n["b"])({fetchUserData:"users/fetchUserData",getCourseBySlug:"courses/getCourseBySlug"})),{},{onPlayerPlay(e){},onPlayerPause(e){},onPlayerEnded(e){},onPlayerWaiting(e){},onPlayerPlaying(e){},onPlayerLoadeddata(e){},onPlayerTimeupdate(e){},onPlayerCanplay(e){},onPlayerCanplaythrough(e){},playerStateChanged(e){},playerReadied(e){console.log("example player 1 readied",e),e.currentTime(10)}})}),d=c,p=t("2877"),m=t("9989"),h=t("1c1c"),y=t("66e5"),g=t("eebe"),f=t.n(g),P=Object(p["a"])(d,s,r,!1,null,null,null);a["default"]=P.exports;f()(P,"components",{QPage:m["a"],QList:h["a"],QItem:y["a"]})}}]);