<template>
  <div class="container count-container">
    <h1>{{isLoading}}</h1>
    <button @click="Loaded();addTimes()">Reverse</button>
    <p>Button Click Times: {{clickedTimes}}</p>
    <hr />
    <h2>
      count:
      <span class="count">{{ count }}</span>
    </h2>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script>
// 這裡要先 import mapState 進來
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      count: 0
    };
  },
  computed: {
    otherfn() {
      return "asdf";
    },
    ...mapState(["isLoading", "clickedTimes"])
  },
  /*
  //基本監控 store 的方法
  {
    isLoading() {
      // 在這邊吐回 state 裡面的 isLoading
      return this.$store.state.isLoading;
    },
    clicked() {
      // 抓 state 的 clickTimes
      return this.$store.state.clickTimes;
    }
  },
  */
  methods: {
    increase() {
      this.count += 1;
    },
    decrease() {
      this.count -= 1;
    },
    ...mapMutations(["Loaded", "addTimes"])
  }
};
</script>

<style>
.count {
  color: red;
}
.count-container {
  margin: 20rem auto;
}
</style>