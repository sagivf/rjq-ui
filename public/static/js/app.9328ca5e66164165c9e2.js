webpackJsonp([1],{140:function(t,e){},18:function(t,e,a){"use strict";var s=a(17),n=function(t){return t&&t.__esModule?t:{default:t}}(s);t.exports={mounted:function(){(0,n.default)(this.$el).foundation()},unmounted:function(){(0,n.default)(this.$el).foundation.destroy()}}},63:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=a(17),i=s(n),r=a(2),u=s(r),l=a(65),o=s(l),c=a(70),d=s(c),v=a(97),f=s(v),_=a(99),m=s(_);a(140),window.jQuery=i.default,window.$=i.default,a(141),a(142),a(143),u.default.use(f.default),u.default.use(m.default),new u.default({el:"#app",router:d.default,template:"<App/>",components:{App:o.default}})},65:function(t,e,a){"use strict";function s(t){a(66)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(68),i=a.n(n),r=a(69),u=a(4),l=s,o=u(i.a,r.a,l,null,null);e.default=o.exports},66:function(t,e){},68:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",mounted:function(){this.offCanvas=new Foundation.OffCanvas($("#offCanvas"))}}},69:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"off-canvas position-right",attrs:{id:"offCanvas","data-off-canvas":""}},[a("ul",{staticClass:"sidebar-menu",attrs:{"data-close":"offCanvas"}},[a("li",[a("router-link",{attrs:{to:"/",exact:""}},[t._v("Queues")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/jobs",exact:""}},[t._v("Jobs")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/servers",exact:""}},[t._v("Servers")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/about",exact:""}},[t._v("About")])],1)])]),t._v(" "),a("div",{staticClass:"off-canvas-content",attrs:{"data-off-canvas-content":""}},[a("div",{staticClass:"top-bar"},[a("ul",{staticClass:"menu expanded"},[a("li",{staticClass:"logo"},[a("router-link",{attrs:{to:"/"}},[t._v("RethinkDB Job Queue UI")])],1),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("router-view")],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"button small menu-button",attrs:{"data-toggle":"offCanvas"}},[t._v("Menu")])])}],i={render:s,staticRenderFns:n};e.a=i},70:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),i=s(n),r=a(71),u=s(r),l=a(72),o=s(l),c=a(76),d=s(c),v=a(84),f=s(v),_=a(89),m=s(_),p=a(93),b=s(p);i.default.use(u.default),e.default=new u.default({linkActiveClass:"active",routes:[{name:"about",path:"/about",component:f.default},{name:"queues",path:"/",component:o.default},{name:"queue",path:"/queues/:id/:status?",component:d.default},{name:"jobs",path:"/jobs",component:m.default},{name:"servers",path:"/servers",component:b.default}]})},72:function(t,e,a){"use strict";function s(t){a(73)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(74),i=a.n(n),r=a(75),u=a(4),l=s,o=u(i.a,r.a,l,"data-v-4fd10f44",null);e.default=o.exports},73:function(t,e){},74:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),n=function(t){return t&&t.__esModule?t:{default:t}}(s),i={data:function(){return{queues:[]}},created:function(){var t=this;n.default.http.get("rjq-api/queues").then(function(e){t.queues=e.body}).catch(function(t){console.error(t)})}};e.default=i},75:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row align-middle"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v("Queues")]),t._v(" "),a("table",[t._m(0),t._v(" "),a("tbody",t._l(t.queues,function(e){return a("tr",[a("td",[a("router-link",{attrs:{to:{name:"queue",params:{id:e.name}}}},[t._v(t._s(e.name))])],1),t._v(" "),a("td",[a("router-link",{attrs:{to:{name:"queue",params:{id:e.name,status:"waiting"}}}},[t._v(t._s(e.waiting))])],1),t._v(" "),a("td",[a("router-link",{attrs:{to:{name:"queue",params:{id:e.name,status:"active"}}}},[t._v(t._s(e.active))])],1),t._v(" "),a("td",[a("router-link",{attrs:{to:{name:"queue",params:{id:e.name,status:"completed"}}}},[t._v(t._s(e.completed))])],1),t._v(" "),a("td",[a("router-link",{attrs:{to:{name:"queue",params:{id:e.name,status:"cancelled"}}}},[t._v(t._s(e.cancelled))])],1),t._v(" "),a("td",[a("router-link",{attrs:{to:{name:"queue",params:{id:e.name,status:"failed"}}}},[t._v(t._s(e.failed))])],1),t._v(" "),a("td",[a("router-link",{attrs:{to:{name:"queue",params:{id:e.name,status:"terminated"}}}},[t._v(t._s(e.terminated))])],1),t._v(" "),a("td",[t._v(t._s(e.total))]),t._v(" "),t._m(1,!0),t._v(" "),t._m(2,!0)])}))])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("Waiting")]),t._v(" "),a("th",[t._v("Active")]),t._v(" "),a("th",[t._v("Completed")]),t._v(" "),a("th",[t._v("Cancelled")]),t._v(" "),a("th",[t._v("Failed")]),t._v(" "),a("th",[t._v("Terminated")]),t._v(" "),a("th",[t._v("Total")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("button",{staticClass:"button alert",attrs:{type:"button"}},[t._v("Purge")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("button",{staticClass:"button alert",attrs:{type:"button"}},[t._v("Purge Logs")])])}],i={render:s,staticRenderFns:n};e.a=i},76:function(t,e,a){"use strict";function s(t){a(77)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(78),i=a.n(n),r=a(83),u=a(4),l=s,o=u(i.a,r.a,l,"data-v-7e53c9bf",null);e.default=o.exports},77:function(t,e){},78:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(t){var e=this;d.forEach(function(a){e[a]=t.filter(function(t){return t.status===a})})}Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),r=s(i),u=a(79),l=s(u),o=a(17),c=s(o),d=["waiting","active","completed","failed","cancelled","terminated"],v={mixins:[a(18)],data:function(){return{all:[],waiting:[],active:[]}},watch:{$route:"changeTab"},methods:{changeTab:function(){var t=this.$route.params.status,e=void 0===t?"all":t;(0,c.default)(".tabs-panel").removeClass("is-active").attr("aria-hidden",""),(0,c.default)("#"+e).addClass("is-active").attr("aria-hidden","false"),(0,c.default)(".tabs-title").removeClass("is-active"),(0,c.default)(".tabs-title-"+e).addClass("is-active")}},created:function(){var t=this;r.default.http.get("rjq-api/queues/"+this.$route.params.id).then(function(e){t.all=e.body,console.log("sadasd"),console.log(t.all),n.call(t,t.all),t.changeTab()}).catch(function(t){console.error(t)})},components:{Jobs:l.default}};e.default=v},79:function(t,e,a){"use strict";function s(t){a(80)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(81),i=a.n(n),r=a(82),u=a(4),l=s,o=u(i.a,r.a,l,"data-v-c03f4ad0",null);e.default=o.exports},80:function(t,e){},81:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(18)],props:["list"]}},82:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.list,function(e){return a("el-card",{key:e.id,staticClass:"box-card"},[a("div",{staticClass:"clearfix",slot:"header"},[a("span",{staticStyle:{"line-height":"36px"}},[t._v(t._s(e.name)+" - "+t._s(e.id))]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"danger"}},[t._v("Cancel")])],1),t._v(" "),a("div",[a("ul",[a("li",[t._v(t._s(e.v))]),t._v(" "),a("li",[t._v("Priority: "+t._s(e.priority))]),t._v(" "),a("li",[t._v("Process Count: "+t._s(e.processCount))])])])])}))},n=[],i={render:s,staticRenderFns:n};e.a=i},83:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row collapse"},[a("h1",[t._v("Queue "+t._s(t.$route.params.id))])]),t._v(" "),a("div",{staticClass:"row collapse"},[a("div",{staticClass:"medium-3 columns"},[a("h2",[t._v("Status "+t._s(t.$route.params.status||"All"))]),t._v(" "),a("ul",{staticClass:"tabs vertical"},[a("li",{staticClass:"tabs-title tabs-title-all"},[a("router-link",{attrs:{to:{name:"queue",params:{id:t.$route.params.id}}}},[t._v("\n            All\n          ")])],1),t._v(" "),a("li",{staticClass:"tabs-title tabs-title-active"},[a("router-link",{attrs:{to:{name:"queue",params:{id:t.$route.params.id,status:"active"}}}},[t._v("\n            Active\n          ")])],1),t._v(" "),a("li",{staticClass:"tabs-title tabs-title-waiting"},[a("router-link",{attrs:{to:{name:"queue",params:{id:t.$route.params.id,status:"waiting"}}}},[t._v("\n            Waiting\n          ")])],1),t._v(" "),a("li",{staticClass:"tabs-title tabs-title-completed"},[a("router-link",{attrs:{to:{name:"queue",params:{id:t.$route.params.id,status:"completed"}}}},[t._v("\n            Completed\n          ")])],1),t._v(" "),a("li",{staticClass:"tabs-title tabs-title-cancelled"},[a("router-link",{attrs:{to:{name:"queue",params:{id:t.$route.params.id,status:"cancelled"}}}},[t._v("\n            Cancelled\n          ")])],1),t._v(" "),a("li",{staticClass:"tabs-title tabs-title-failed"},[a("router-link",{attrs:{to:{name:"queue",params:{id:t.$route.params.id,status:"failed"}}}},[t._v("\n            Failed\n          ")])],1),t._v(" "),a("li",{staticClass:"tabs-title tabs-title-terminated"},[a("router-link",{attrs:{to:{name:"queue",params:{id:t.$route.params.id,status:"terminated"}}}},[t._v("\n            Terminated\n          ")])],1)])]),t._v(" "),a("div",{staticClass:"medium-9 columns"},[a("div",{staticClass:"tabs-content vertical"},[a("div",{staticClass:"tabs-panel",attrs:{id:"all"}},[a("jobs",{attrs:{list:t.all}})],1),t._v(" "),a("div",{staticClass:"tabs-panel",attrs:{id:"active"}},[a("jobs",{attrs:{list:t.active}})],1),t._v(" "),a("div",{staticClass:"tabs-panel",attrs:{id:"waiting"}},[a("jobs",{attrs:{list:t.waiting}})],1),t._v(" "),a("div",{staticClass:"tabs-panel",attrs:{id:"completed"}},[a("jobs",{attrs:{list:t.completed}})],1),t._v(" "),a("div",{staticClass:"tabs-panel",attrs:{id:"cancelled"}},[a("jobs",{attrs:{list:t.cancelled}})],1),t._v(" "),a("div",{staticClass:"tabs-panel",attrs:{id:"failed"}},[a("jobs",{attrs:{list:t.failed}})],1),t._v(" "),a("div",{staticClass:"tabs-panel",attrs:{id:"terminated"}},[a("jobs",{attrs:{list:t.terminated}})],1)])])])])},n=[],i={render:s,staticRenderFns:n};e.a=i},84:function(t,e,a){"use strict";function s(t){a(85)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(86),i=a.n(n),r=a(87),u=a(4),l=s,o=u(i.a,r.a,l,"data-v-3bc3f2be",null);e.default=o.exports},85:function(t,e){},86:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"RethinkDB Job Queue"}}}},87:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row align-middle"},[t._m(0),t._v(" "),a("div",{staticClass:"small-12 medium-5 columns"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("p",[t._v("Insight to your queues status.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("More Resources")]),t._v(" "),t._m(3)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"small-10 medium-5 small-offset-1 columns image"},[s("img",{attrs:{src:a(88)}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button secondary call-button",attrs:{href:"https://github.com/grantcarthew/node-rethinkdb-job-queue/wiki",target:"_blank"}},[a("i",{staticClass:"icon-puzzle"}),t._v("\n      RethinkDB Job Queue\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button secondary hollow call-button",attrs:{href:"https://github.com/sagivf/rjq-ui",target:"_blank"}},[a("i",{staticClass:"icon-github-circled"}),t._v("\n      Source\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/hal0gen/vue-foundation",target:"_blank"}},[t._v("VueJS + Foundation")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vuejs.org/v2/guide/",target:"_blank"}},[t._v("VueJS")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/outbrain/Leonardo",target:"_blank"}},[t._v("Leonardo JS")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://foundation.zurb.com/sites/docs",target:"_blank"}},[t._v("Foundation")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://element.eleme.io/",target:"_blank"}},[t._v("UI Library")])])])}],i={render:s,staticRenderFns:n};e.a=i},88:function(t,e,a){t.exports=a.p+"static/img/thinkerjoblist.23139a4.png"},89:function(t,e,a){"use strict";function s(t){a(90)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(91),i=a.n(n),r=a(92),u=a(4),l=s,o=u(i.a,r.a,l,"data-v-8cf7a7d2",null);e.default=o.exports},90:function(t,e){},91:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(18)],name:"tooltip",data:function(){return{msg:"Tooltip"}}}},92:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v("Jobs")]),t._v(" "),a("ul",[a("li",[t._v("Searching Jobs")]),t._v(" "),a("li",[t._v("Creating Jobs")]),t._v(" "),a("li",[t._v("Canceling Jobs")]),t._v(" "),a("li",[t._v("Scheduling Jobs")])])])])}],i={render:s,staticRenderFns:n};e.a=i},93:function(t,e,a){"use strict";function s(t){a(94)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(95),i=a.n(n),r=a(96),u=a(4),l=s,o=u(i.a,r.a,l,"data-v-fe567584",null);e.default=o.exports},94:function(t,e){},95:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[a(18)],name:"tooltip",data:function(){return{}}}},96:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"medium-10 medium-offset-1 columns"},[a("h1",[t._v("Servers")]),t._v(" "),a("p",[t._v("\n      Here we can put stuff regarding the servers status."),a("br"),t._v("\n      Maybe specifically things related to the queueing DB's/tables\n    ")])])])}],i={render:s,staticRenderFns:n};e.a=i},98:function(t,e){}},[63]);