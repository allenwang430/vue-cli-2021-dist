(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tab01","chunk-a8a06640","chunk-5453ccfb"],{"283f":function(t,e,n){"use strict";var a=n("7e96"),i=n.n(a);i.a},"2af6":function(t,e,n){"use strict";var a=n("6b8c"),i=n.n(a);i.a},"6b8c":function(t,e,n){},"7e96":function(t,e,n){},"91ec":function(t,e,n){},"9b85":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bpart"},[n("div",[t._v("我是 B 組件，在下方輸入框輸入任務，並在 A 組件中添加任務。")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{on:{click:t.addTodo}},[t._v("add todo")])])},i=[],c={name:"Bpart",data:function(){return{text:""}},methods:{addTodo:function(){this.text&&this.$store.commit("addTodo",this.text)}}},s=c,o=(n("2af6"),n("2877")),r=Object(o["a"])(s,a,i,!1,null,"4920a180",null);e["default"]=r.exports},"9ee4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"apart"},[t._v(" 我是 A 組件 "),n("ul",t._l(t.todos,(function(e,a){return n("li",{key:a,class:e.done?"done":"",on:{click:function(e){return t.setDone(a)}}},[t._v(t._s(e.text))])})),0)])},i=[],c=n("2f62"),s={name:"Apart",data:function(){return{}},computed:Object(c["d"])(["todos"]),methods:{setDone:function(t){this.$store.commit("setDone",t)}}},o=s,r=(n("283f"),n("2877")),u=Object(r["a"])(o,a,i,!1,null,"391038d2",null);e["default"]=u.exports},b6df:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-tabs container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-3"},[n("ul",{staticClass:"list-group"},t._l(t.tabs,(function(e,a){return n("li",{key:e.id,staticClass:"list-group-item",class:{active:0===a},domProps:{textContent:t._s(e.name)},on:{click:function(n){return n.preventDefault(),t.switchTab(e.id)}}})})),0)]),n("div",{staticClass:"col-9"},[n(t.activeTab,{tag:"div"},[t._v("content")])],1)]),n("hr")])},i=[],c=(n("c740"),n("9ee4")),s=n("9b85"),o={name:"app-tabs",data:function(){return{activeTab:c["default"],tabs:[{id:1,name:"頁籤 A",context:c["default"]},{id:2,name:"頁籤 B",context:s["default"]}]}},methods:{switchTab:function(t){var e=this.tabs.findIndex((function(e){return e.id===t}));e>-1&&(this.activeTab=this.tabs[e].context),$(".list-group-item").removeClass("active"),$(event.currentTarget).addClass("active")}},mounted:function(){}},r=o,u=(n("bdaa"),n("2877")),d=Object(u["a"])(r,a,i,!1,null,"5c7e3c2a",null);e["default"]=d.exports},bdaa:function(t,e,n){"use strict";var a=n("91ec"),i=n.n(a);i.a},c740:function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").findIndex,c=n("44d2"),s=n("ae40"),o="findIndex",r=!0,u=s(o);o in[]&&Array(1)[o]((function(){r=!1})),a({target:"Array",proto:!0,forced:r||!u},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),c(o)}}]);