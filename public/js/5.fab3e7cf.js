(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{b039:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"lHh Lpr lFf"}},[o("q-header",{attrs:{elevated:""}},[o("q-toolbar",[o("q-toolbar-title",[t._v(" Area do Aluno")]),o("q-btn",{attrs:{flat:""},on:{click:t.logout}},[t._v("Sair")])],1)],1),o("q-page-container",[o("router-view")],1)],1)},n=[],s=(o("e6cf"),o("ded3")),c=o.n(s),r=o("2f62"),u={name:"MainLayout",data(){return{leftDrawerOpen:!1,userCourses:[],otherCourses:[]}},methods:c()(c()({},Object(r["b"])({logoff:"auth/logoff"})),{},{async logout(){await this.logoff()}}),async mounted(){this.$q.loading.show();const t=[],e=[];await this.$db().collection("users").where("uuid","==",localStorage.getItem("csm-user-uuid")).get().then((function(t){t.forEach((function(t){const o=t.data().courses;o.map((t=>{e.push(t)}))}))})).catch((function(t){console.log("Error getting documents: ",t)})),await this.$db().collection("cursos").get().then((function(e){e.forEach((function(e){t.push(e.data())}))})).catch((function(t){console.log("Error getting documents: ",t)})),this.courses=t.map((t=>{console.log(t.docRef),e.find((e=>e===t.docRef))?(console.log("achou"),this.userCourses.push(t)):this.otherCourses.push(t)})),this.$q.loading.hide()}},l=u,i=o("2877"),h=o("4d5a"),d=o("e359"),f=o("65c6"),g=o("6ac5"),p=o("9c40"),b=o("9404"),w=o("1c1c"),m=o("0170"),Q=o("66e5"),q=o("4074"),v=o("09e3"),y=o("eebe"),C=o.n(y),E=Object(i["a"])(l,a,n,!1,null,null,null);e["default"]=E.exports;C()(E,"components",{QLayout:h["a"],QHeader:d["a"],QToolbar:f["a"],QToolbarTitle:g["a"],QBtn:p["a"],QDrawer:b["a"],QList:w["a"],QItemLabel:m["a"],QItem:Q["a"],QItemSection:q["a"],QPageContainer:v["a"]})}}]);