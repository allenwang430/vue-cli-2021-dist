(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["randomuser"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(r(t))}},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),c=n("9112");for(var a in o){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(f){s.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=n("ae40"),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"24a1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container count-container"},[n("h2",[t._v("載入隨機 API")]),n("p",[t._v("API 狀態: "+t._s(t.Loaded))]),n("p",[t._v("點擊次數: "+t._s(t.clickedTimes))]),n("p",[t._v("此次隨機有幾個女性: "+t._s(t.FemaleNum))]),n("p",[t._v("此次隨機有幾個男性: "+t._s(t.MaleNum))]),n("span",[t._v("資料中是否有超過兩個女性?")]),n("button",{on:{click:function(e){return t.DetectGender("female")}}},[t._v("Detect")]),n("br"),n("span",[t._v("資料中是否有超過兩個男性?")]),n("button",{on:{click:function(e){return t.DetectGender("male")}}},[t._v("Detect")]),n("hr"),n("button",{on:{click:t.Reload}},[t._v("Reload")]),n("hr"),n("h2",[t._v("A - B 組件傳遞資料")]),n("div",{staticClass:"a-b-part"},[n("Apart"),n("Bpart")],1)])},o=[];n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"apart"},[t._v(" 我是 A 組件 "),n("ul",t._l(t.todos,(function(e,r){return n("li",{key:r,class:e.done?"done":"",on:{click:function(e){return t.setDone(r)}}},[t._v(t._s(e.text))])})),0)])},s=[],f=n("2f62"),l={name:"Apart",data:function(){return{}},computed:Object(f["d"])(["todos"]),methods:{setDone:function(t){this.$store.commit("setDone",t)}}},d=l,b=(n("283f"),n("2877")),p=Object(b["a"])(d,u,s,!1,null,"391038d2",null),v=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bpart"},[n("div",[t._v("我是 B 組件，在下方輸入框輸入任務，並在 A 組件中添加任務。")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{on:{click:t.addTodo}},[t._v("add todo")])])},m=[],y={name:"Bpart",data:function(){return{text:""}},methods:{addTodo:function(){this.text&&this.$store.commit("addTodo",this.text)}}},g=y,O=(n("2af6"),Object(b["a"])(g,h,m,!1,null,"4920a180",null)),S=O.exports,w={components:{Apart:v,Bpart:S},data:function(){return{}},created:function(){console.clear()},mounted:function(){this.GetUser()},computed:a(a({},Object(f["d"])(["Loaded","clickedTimes","users"])),Object(f["c"])(["FemaleNum","MaleNum","returnFn"])),methods:a({DetectGender:function(t){this.returnFn(t)},Reload:function(){this.$store.commit("SetFalse"),this.GetUser(),this.ClickedActions({count:1})}},Object(f["b"])(["GetUser","ClickedActions"]))},j=w,L=(n("3c72"),Object(b["a"])(j,r,o,!1,null,null,null));e["default"]=L.exports},"283f":function(t,e,n){"use strict";var r=n("7e96"),o=n.n(r);o.a},"2af6":function(t,e,n){"use strict";var r=n("6b8c"),o=n.n(r);o.a},"3a1d":function(t,e,n){},"3c72":function(t,e,n){"use strict";var r=n("3a1d"),o=n.n(r);o.a},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"6b8c":function(t,e,n){},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),c=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},"7e96":function(t,e,n){},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),c=n("c430"),a=n("83ab"),u=n("4930"),s=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),b=n("861d"),p=n("825a"),v=n("7b0b"),h=n("fc6a"),m=n("c04e"),y=n("5c6c"),g=n("7c73"),O=n("df75"),S=n("241c"),w=n("057f"),j=n("7418"),L=n("06cf"),P=n("9bf2"),_=n("d1e7"),x=n("9112"),D=n("6eeb"),E=n("5692"),T=n("f772"),k=n("d012"),A=n("90e3"),C=n("b622"),N=n("e538"),G=n("746f"),M=n("d44e"),F=n("69f3"),R=n("b727").forEach,V=T("hidden"),B="Symbol",$="prototype",H=C("toPrimitive"),I=F.set,J=F.getterFor(B),U=Object[$],q=o.Symbol,Q=i("JSON","stringify"),W=L.f,z=P.f,K=w.f,X=_.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),nt=E("wks"),rt=o.QObject,ot=!rt||!rt[$]||!rt[$].findChild,it=a&&f((function(){return 7!=g(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=W(U,e);r&&delete U[e],z(t,e,n),r&&t!==U&&z(U,e,r)}:z,ct=function(t,e){var n=Y[t]=g(q[$]);return I(n,{type:B,tag:t,description:e}),a||(n.description=e),n},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ut=function(t,e,n){t===U&&ut(Z,e,n),p(t);var r=m(e,!0);return p(n),l(Y,r)?(n.enumerable?(l(t,V)&&t[V][r]&&(t[V][r]=!1),n=g(n,{enumerable:y(0,!1)})):(l(t,V)||z(t,V,y(1,{})),t[V][r]=!0),it(t,r,n)):z(t,r,n)},st=function(t,e){p(t);var n=h(e),r=O(n).concat(pt(n));return R(r,(function(e){a&&!lt.call(n,e)||ut(t,e,n[e])})),t},ft=function(t,e){return void 0===e?g(t):st(g(t),e)},lt=function(t){var e=m(t,!0),n=X.call(this,e);return!(this===U&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,V)&&this[V][e])||n)},dt=function(t,e){var n=h(t),r=m(e,!0);if(n!==U||!l(Y,r)||l(Z,r)){var o=W(n,r);return!o||!l(Y,r)||l(n,V)&&n[V][r]||(o.enumerable=!0),o}},bt=function(t){var e=K(h(t)),n=[];return R(e,(function(t){l(Y,t)||l(k,t)||n.push(t)})),n},pt=function(t){var e=t===U,n=K(e?Z:h(t)),r=[];return R(n,(function(t){!l(Y,t)||e&&!l(U,t)||r.push(Y[t])})),r};if(u||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),n=function(t){this===U&&n.call(Z,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),it(this,e,y(1,t))};return a&&ot&&it(U,e,{configurable:!0,set:n}),ct(e,t)},D(q[$],"toString",(function(){return J(this).tag})),D(q,"withoutSetter",(function(t){return ct(A(t),t)})),_.f=lt,P.f=ut,L.f=dt,S.f=w.f=bt,j.f=pt,N.f=function(t){return ct(C(t),t)},a&&(z(q[$],"description",{configurable:!0,get:function(){return J(this).description}}),c||D(U,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:q}),R(O(nt),(function(t){G(t)})),r({target:B,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:f((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(v(t))}}),Q){var vt=!u||f((function(){var t=q();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),o[1]=e,Q.apply(null,o)}})}q[$][H]||x(q[$],H,q[$].valueOf),M(q,B),k[V]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),i=n("df75"),c=n("d039"),a=c((function(){i(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return i(o(t))}})},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),c=n("fc6a"),a=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=c(t),o=a.f,s=i(r),f={},l=0;while(s.length>l)n=o(r,e=s[l++]),void 0!==n&&u(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),c=n("06cf").f,a=n("83ab"),u=o((function(){c(1)})),s=!a||u;r({target:"Object",stat:!0,forced:s,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);