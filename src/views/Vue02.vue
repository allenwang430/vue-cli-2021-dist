<template>
  <div class="app-vue-02 container">
    <h2>new Vue</h2>
    <div>
      可以用 "var vm = new Vue({}) 的方式去新建一個 Vue 物件。"
      <br />而且還可以用 vm.$data 的方式去叫出資料。 <br />藉由在 created() 把
      vm.$data 加入至 data 內，未來就可以拿來使用了。
      <h4>
        <strong>{{ newText }}</strong>
      </h4>
    </div>
    <hr />
    <!------------------------------------------------->
    <h2>v-once</h2>
    <div v-once>
      使用此模板語法，data 將不會受到雙向綁定改變。 => {{ invariant }}
    </div>
    <hr />
    <!------------------------------------------------->
    <h2>v-html</h2>
    <div>
      可以直接印出 html元素，安全性較低；會直接覆蓋掉原本的標籤屬性和內容。
      <div v-html="showImg"></div>
    </div>
    <hr />
    <!------------------------------------------------->
    <h2>v-text</h2>
    <div>
      可以直接印出文字，會直接覆蓋掉原本的內容；和雙花括號的功能一樣。
      <h4 class="class-id-001" v-text="showText"></h4>
    </div>
    <hr />
    <!------------------------------------------------->
    <h2>v-bind:</h2>
    <div v-bind:bind_data="v_bind_data">
      可以在屬性上綁定 data 資料: {{ v_bind_data }}<br />
      v-bind:bind_data 的縮寫 :bind_data
    </div>
    <hr />
    <!------------------------------------------------->
    <h2>v-on:</h2>
    <div>
      可以<a
        target="_blank"
        href="https://www.runoob.com/jsref/dom-obj-event.html"
        >綁定事件</a
      >和自定義的方法(methods)
    </div>
    <hr />
    <!------------------------------------------------->
    <h2>jwplayer - live</h2>
    <div id="jwplayer-col-live"></div>
    <hr />
    <!------------------------------------------------->
    <h2>jwplayer - m3u8</h2>
    <div id="jwplayer-m3u8"></div>
    <hr />

    <!------------------------------------------------->

    <h2>vue 的生命週期</h2>
    <img
      class="img-fluid vue_life_circle"
      src="https://cn.vuejs.org/images/lifecycle.png"
    />
    <hr />
    <!------------------------------------------------->
  </div>
</template>
<script>
//新建一個vm
import Vue from "vue";
var vm = new Vue({
  name: "app02",
  data() {
    return {
      message02: "我是一個新 Vue 物件"
    };
  }
});

//預設載入
export default {
  methods: {
    //
  },
  data() {
    return {
      newText: "",
      invariant: "應該不會改變",
      showImg: `<img src="https://miro.medium.com/max/700/1*A-wBVEczC2hxt56lVnbypQ.png">`,
      showText: "印出 v-text 的文字",
      v_bind_data: "此為 v_bind_data"
    };
  },
  //---------------生命週期---------------
  beforeCreate() {
    console.log("App beforeCreate.");
  },
  created() {},
  beforeMount() {
    console.log("App beforeMount.");
  },
  mounted() {
    //可藉由此方式呼叫新建的物件
    //console.log(this.newText);
    console.log("App mounted.");
  },
  beforeUpdate() {
    console.log("App beforeUpdate.");
  },
  updated() {
    console.log("App updated.");
  },
  beforeDestroy() {
    console.log("App beforeDestroy.");
  },
  destroyed() {
    console.log("App destroyed.");
  },
  beforeRouteEnter(to, from, next) {
    console.log("App beforeRouterEnter.");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("App beforeRouterUpdate.");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("App beforeRouterLeave.");
    next();
  }
};
</script>
<style scoped lang="scss">
.container {
  margin: 5rem auto;
  .hello {
    margin: 1rem;
    text-align: left;
  }
  .vue_life_circle {
    max-width: 620px;
  }
  .class-id-001 {
    background: #efefef;
    padding: 0.5rem;
  }
}
</style>