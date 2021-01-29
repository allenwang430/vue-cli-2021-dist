<template>
  <div class="apart">
    我是 A 組件
    <ul>
      <li
        v-for="(value,index) in todos"
        :key="index"
        :class="value.done?'done':''"
        @click="setDone(index)"
      >{{value.text}}</li>
    </ul>
  </div>
</template>

<script>
//import store from "@/store/index.js";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Apart",
  data() {
    return {
      //todos: []
    };
  },
  computed: mapState([
    // 匯入 todos state
    "todos"
  ]),
  methods: {
    setDone(index) {
      this.$store.commit("setDone", index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.apart {
  background: #795548;
  color: white;
  padding: 20px;
  li.done {
    background: #f44336;
  }
}
</style>
