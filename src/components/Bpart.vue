<template>
  <div class="bpart">
    <div>我是 B 組件，在下方輸入框輸入任務，並在 A 組件中添加任務。</div>
    <input type="text" v-model="text" />
    <button @click="addTodo">add todo</button>
  </div>
</template>

<script>
//import store from "@/store/index.js";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Bpart",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    addTodo() {
      if (this.text) {
        this.$store.commit("addTodo", this.text);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bpart {
  background: #7cbdb7;
  padding: 20px;
}
</style>
