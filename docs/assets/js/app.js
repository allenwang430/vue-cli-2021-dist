(function(e){function t(t){for(var a,r,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},s=[];function i(e){return c.p+"assets/js/"+({about:"about",carousel:"carousel",randomuser:"randomuser"}[e]||e)+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={randomuser:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="assets/css/"+({about:"about",carousel:"carousel",randomuser:"randomuser"}[e]||e)+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],f.parentNode.removeChild(f),n(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0418":function(e,t,n){"use strict";var a=n("9c58"),r=n("ad21"),o=n("2877"),s=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"70851e22",null);t["default"]=s.exports},"28d6":function(e,t,n){},"2e93":function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},o=[],s=n("0418"),i=n("fd2d"),c={components:{Header:s["default"],Footer:i["default"]}},u=c,l=(n("5c0b"),n("2877")),d=Object(l["a"])(u,r,o,!1,null,null,null),f=d.exports,p=n("9483");Object(p["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var v=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"container-fluid bg-accent bg-position-center bg-size-cover py-3 py-sm-5",staticStyle:{"background-image":"url(img/picture/bg-001.jpg)"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col align-self-center"},[n("h1",{staticClass:"display-3"},[e._v(e._s(this.keyView.title))]),n("p",{staticClass:"lead"},[e._v(e._s(this.keyView.des))]),n("p",[n("a",{staticClass:"btn btn-secondary",attrs:{href:this.keyView.btnLink,role:"button"}},[e._v(e._s(this.keyView.btn))])])])])])]),n("div",{staticClass:"container marketing"},[n("hr",{staticClass:"featurette-divider"}),e._l(e.featurette,(function(t,a){return n("div",{key:a,staticClass:"row featurette"},[n("div",{staticClass:"col-md-7",class:{"order-md-last":a%2,"order-md-first":!a%2}},[n("h2",{staticClass:"featurette-heading"},[e._v(e._s(t.title))]),n("p",{staticClass:"lead"},[e._v(e._s(t.des))])]),n("div",{staticClass:"col-md-5",class:{"order-md-first":a%2,"order-md-last":!a%2}},[n("img",{staticClass:"img-fluid",attrs:{src:t.picUrl}})])])})),n("hr",{staticClass:"featurette-divider"})],2)])},h=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},b=[],y={name:"HelloWorld",props:{msg:String}},C=y,_=(n("67eb"),Object(l["a"])(C,g,b,!1,null,"7809147a",null)),k=_.exports,w={components:{HelloWorld:k},data:function(){return{keyView:{},featurette:[]}},created:function(){var e=this,t="/project-vue/dist/data/",n={name:"home-data",url:"".concat(t,"home.json"),data:"",type:"get"};this.ajaxMix(n).then((function(t){e.keyView=t.keyView,e.featurette=t.featurette}))},methods:{ajaxMix:function(e){return new Promise((function(t,n){$.ajax({type:e.type,url:e.url,data:e.data,dataType:"json",success:function(e){t(e)},error:function(e){n(e)}})}))}}},j=w,x=(n("cccb"),Object(l["a"])(j,m,h,!1,null,null,null)),O=x.exports;a["a"].use(v["a"]);var T=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/carousel",name:"Carousel",component:function(){return n.e("carousel").then(n.bind(null,"c0a4"))}},{path:"/randomuser",name:"Randomuser",component:function(){return n.e("randomuser").then(n.bind(null,"24a1"))}}],E=new v["a"]({routes:T}),L=E,S=(n("4de4"),n("2f62")),A=n("bc3a"),P=n.n(A);a["a"].use(S["a"]);var N=new S["a"].Store({state:{todos:[{text:"寫國文作業",done:!1},{text:"寫數學考卷",done:!1}],Loaded:!1,isLoading:!1,clickTimes:0,clickedTimes:0,users:[]},getters:{FemaleNum:function(e){return e.users.filter((function(e){return"female"==e.gender})).length},MaleNum:function(e,t){return e.users.length-t.FemaleNum},returnFn:function(e){return function(t){e.users.filter((function(e){return e.gender==t})).length>2?console.log("數據中超過兩個"+t):console.log("數據中沒有超過兩個"+t)}}},mutations:{addTodo:function(e,t){var n={text:t,done:!1};e.todos.push(n)},setDone:function(e,t){e.todos[t].done=!0},Loaded:function(e){e.isLoading=!e.isLoading,a["a"].set(e,"click",!1)},addTimes:function(e,t){e.clickedTimes=e.clickedTimes+t.count},dataLoaded:function(e){e.Loaded=!0},SetFalse:function(e){e.Loaded=!1},setUserInfo:function(e,t){e.users=t}},actions:{GetUser:function(e){var t=e.commit;e.dispatch;P.a.get("https://randomuser.me/api/?results=5").then((function(e){console.log(e),t("dataLoaded");var n=e.data.results;t("setUserInfo",n)})).catch((function(e){console.log(e)}))},ClickedActions:function(e,t){var n=e.commit;n("addTimes",t)}},modules:{}}),F=N,H=(n("4989"),n("1157")),M=n.n(H);window.$=window.jQuery=M.a,a["a"].config.productionTip=!1,new a["a"]({router:L,store:F,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"5ced":function(e,t,n){},"67eb":function(e,t,n){"use strict";var a=n("28d6"),r=n.n(a);r.a},8557:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"container"},[n("p",{staticClass:"float-right"},[n("a",{attrs:{href:"#"}},[e._v("Back to top")])]),n("p",[e._v(" © 2017-2020 Company, Inc. · "),n("a",{attrs:{href:"#"}},[e._v("Privacy")]),e._v(" · "),n("a",{attrs:{href:"#"}},[e._v("Terms")])])])}]},"94d4":function(e,t,n){"use strict";var a=n("2e93"),r=n.n(a);t["default"]=r.a},"9c0c":function(e,t,n){},"9c58":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("nav",{staticClass:"navbar navbar-expand-sm navbar-dark fixed-top bg-dark"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Design")]),e._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Home")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[e._v("About")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/carousel"}},[e._v("Carousel")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/randomuser"}},[e._v("Randomuser")])],1)])])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}]},ad21:function(e,t,n){"use strict";var a=n("e504"),r=n.n(a);t["default"]=r.a},cccb:function(e,t,n){"use strict";var a=n("5ced"),r=n.n(a);r.a},e504:function(e,t){},fd2d:function(e,t,n){"use strict";var a=n("8557"),r=n("94d4"),o=n("2877"),s=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"1e62f890",null);t["default"]=s.exports}});