(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["carousel"],{c0a4:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v(t._s(this.headerTitle))]),a("div",{staticClass:"carousel"},[a("ul",t._l(t.exampleTitle,(function(e,s){return a("li",{key:s},[t._v(t._s(e))])})),0),a("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[a("ol",{staticClass:"carousel-indicators"},t._l(t.sliderInfo,(function(t,e){return a("li",{key:e,class:{active:0===e},attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":e}})})),0),a("div",{staticClass:"carousel-inner"},t._l(t.sliderInfo,(function(e,s){return a("div",{key:s,staticClass:"carousel-item",class:{active:0===s}},[a("img",{staticClass:"d-block w-100",attrs:{src:e.picurl,alt:""}}),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("h5",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.caption))]),a("ul",{staticClass:"list-group"},t._l(e.list,(function(e,s){return a("li",{key:s,staticClass:"list-group-item list-group-item-light"},[t._v(t._s(e.name))])})),0)])])})),0),t._m(0),t._m(1)])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])}],n=(a("d3b7"),{data:function(){return{headerTitle:"範例頁標題",sliderInfo:"",exampleTitle:[]}},created:function(){var t=this,e="/data/",s=a("bc3a"),l="".concat(e,"sliderinfo.json");s.get(l).then((function(e){t.sliderInfo=e.data})).catch((function(t){console.log(t)}));var n={name:"meal_01",url:"".concat(e,"example_01.json"),data:{username:"admin_01",password:"1234"},type:"get"},i={name:"meal_02",url:"".concat(e,"example_02.json"),data:{username:"admin_02",password:"78910"},type:"get"},o={name:"meal_03",url:"".concat(e,"example_03.json"),data:{username:"admin_03",password:"030303"},type:"get"},c={name:"meal_10",url:"".concat(e,"example_10.json"),data:{username:"admin_10",password:"101010"},type:"get"};this.ajaxMix(n).then((function(e){return console.log("階段1-1"),t.exampleTitle.push(e[0].articles[0].title),console.log(e[0].articles[0].title),t.ajaxMix(i)}),this.ajaxMix(c).then((function(e){console.log("階段1-2"),t.exampleTitle.push(e[0].articles[0].title),console.log(e[0].articles[0].title)}))).then((function(e){console.log("階段2-1"),t.exampleTitle.push(e[0].articles[0].title),console.log(e[0].articles[0].title)}),this.ajaxMix(o).then((function(e){console.log("階段2-2"),t.exampleTitle.push(e[0].articles[0].title),console.log(e[0].articles[0].title)}))).catch((function(t){console.log(t)}))},mounted:function(){$(".carousel").carousel({interval:!1})},methods:{ajaxMix:function(t){return new Promise((function(e,a){$.ajax({type:t.type,url:t.url,data:t.data,dataType:"json",success:function(t){e(t)},error:function(t){a(t)}})}))}}}),i=n,o=a("2877"),c=Object(o["a"])(i,s,l,!1,null,null,null);e["default"]=c.exports}}]);