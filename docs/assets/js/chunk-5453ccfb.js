(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5453ccfb"],{"2af6":function(t,e,n){"use strict";var o=n("6b8c"),a=n.n(o);a.a},"6b8c":function(t,e,n){},"9b85":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bpart"},[n("div",[t._v("我是 B 組件，在下方輸入框輸入任務，並在 A 組件中添加任務。")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{on:{click:t.addTodo}},[t._v("add todo")])])},a=[],i={name:"Bpart",data:function(){return{text:""}},methods:{addTodo:function(){this.text&&this.$store.commit("addTodo",this.text)}}},c=i,s=(n("2af6"),n("2877")),d=Object(s["a"])(c,o,a,!1,null,"4920a180",null);e["default"]=d.exports}}]);