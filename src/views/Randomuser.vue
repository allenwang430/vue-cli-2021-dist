<template>
  <div class="container count-container">
    <!---- state 的 Loaded ------>
    <h2 class="display-5">載入隨機 API</h2>
    <p>API 狀態: {{Loaded}}</p>
    <p>點擊次數: {{clickedTimes}}</p>
    <p>此次隨機有幾個女性: {{FemaleNum}}</p>
    <p>此次隨機有幾個男性: {{MaleNum}}</p>
    <span>資料中是否有超過兩個女性?</span>
    <button @click="DetectGender('female')">Detect</button>
    <br />
    <span>資料中是否有超過兩個男性?</span>
    <button @click="DetectGender('male')">Detect</button>
    <hr />
    <!---- Reload API ------>
    <button @click="Reload">Reload</button>
    <hr />
    <!---- A&B part ------>
    <h2 class="display-5">A - B 組件傳遞資料</h2>
    <div class="a-b-part">
      <Apart></Apart>
      <Bpart></Bpart>
    </div>
    <hr />
    <!---- buttonCounter ------>
    <h2 class="display-5">當頁登記的組件</h2>
    <div id="components-demo">
      <buttonCounter></buttonCounter>
    </div>
    <hr />
    <!---- PropsComponent ------>
    <h2 class="display-5">watch props 運用組件</h2>
    <PropsComponent />
  </div>
</template>

<script>
//匯入A+B組件
import Apart from "@/components/Apart.vue";
import Bpart from "@/components/Bpart.vue";
import PropsComponent from "@/components/PropsComponent.vue";
// 這裡要先 import mapState 進來
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  components: {
    Apart,
    Bpart,
    PropsComponent
  },
  data() {
    return {};
  },
  created() {
    console.clear();
  },
  mounted() {
    // 1. 可以直接使用 this.
    this.GetUser();
  },
  computed: {
    //  2.將 state 中的 Loaded 用 computed 抓出來給 userLoaded 做使用
    ...mapState(["Loaded", "clickedTimes", "users"]),
    ...mapGetters(["FemaleNum", "MaleNum", "returnFn"])
  },
  methods: {
    DetectGender(gd) {
      this.returnFn(gd);
    },
    // 3.Reload 按鈕按下去的時候，把 state 的 Loaded　改回 false，在執行一次 Getuser 這個 actions
    Reload() {
      this.$store.commit("SetFalse");
      // 2. 直接使用 this.
      this.GetUser();
      // 3. payload 一樣加在參數裡面
      this.ClickedActions({ count: 1 });
    },
    //把action都取出來
    ...mapActions(["GetUser", "ClickedActions"])
  }
};

import Vue from "vue";
// 定义一个名为 button-counter 的新组件
Vue.component("buttonCounter", {
  data: function() {
    return {
      count: 0
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

var dEmo = new Vue({
  el: "#components-demo"
});
</script>

<style scoped lang="scss">
#app {
  .count-container {
    margin: 5rem auto;
    & > .display-5 {
      font-weight: 700;
    }
    .apart /deep/ {
      li {
        color: #ded0a7;
      }
    }
  }
}
</style>