(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{207:function(t,n,o){var e=o(220);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,o(5).default)("472555e2",e,!0,{sourceMap:!1})},219:function(t,n,o){"use strict";var e=o(207);o.n(e).a},220:function(t,n,o){(t.exports=o(4)(!1)).push([t.i,"\n.container[data-v-614cd0bd]{text-align:center;padding:2em;background:rgba(100,150,250,.5)\n}",""])},234:function(t,n,o){"use strict";o.r(n);var e=o(76),i=(o(27),{layout:"admin",middleware:["checkAuth","auth"],components:{BlogPostForm:e.a},data:function(){return{editedPost:{author:"",title:"",thumbnailLink:"",content:""}}},methods:{onSave:function(){console.log(this.editedPost)},onCancel:function(){this.$router.push("/admin")},onSubmitted:function(t){var n=this;this.$store.dispatch("addPost",t).then(function(){n.$router.push("/admin")})}}}),s=(o(219),o(1)),a=Object(s.a)(i,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"admin-new-post container"},[n("h1",[this._v("New Post Page")]),this._v(" "),n("section",{staticClass:"new-post-form"},[n("BlogPostForm",{on:{submit:this.onSubmitted}})],1)])},[],!1,null,"614cd0bd",null);a.options.__file="index.vue";n.default=a.exports}}]);