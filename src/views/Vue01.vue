<template>
  <div class="app-vue-01 container">
    <h2>{{message}}</h2>
    <div id="app_title_01" v-bind:title="bindTitle">懸浮後顯示</div>
    <hr />
    <!-------------------------------------->
    <h2>v-if 相關</h2>
    <div v-if="display">看不看的到? => true/false</div>
    <hr />
    <!-------------------------------------->
    <h2>v-for 相關</h2>
    <div>類似 each => v-for="(value,index) in todos" :key="index"</div>
    <ul class="list-group" style="margin-top:15px;">
      <li class="list-group-item" v-for="(value,index) in todos" :key="index">{{value.text}}</li>
    </ul>
    <hr />
    <!-------------------------------------->
    <h2>綁定 methods</h2>
    <div>
      <p>v-on:click 可以省略成 @click => @click.self</p>
      <strong>事件修飾符:</strong>
      <ul>
        <li>stop：等同於event.stopPropagation()，防止事件冒泡。</li>
        <li>prevent：等同於event.preventDefault()，防止執行預設的行為。</li>
        <li>capture：與事件冒泡的方向相反，事件捕獲 (event capturing) 是由外而內的。</li>
        <li>self：只會觸發自己範圍內的事件，不包含子元素。</li>
        <li>once：只會觸發一次</li>
      </ul>
    </div>
    <h5>{{reverseText}}</h5>
    <button @click.self="reverseMessage">點選後反轉</button>
    <hr />
    <!-------------------------------------->
    <h2>v-model 雙向綁定</h2>
    <div>input 裡面輸入文字，data 就會跟著變動。</div>
    <h5>{{vModalText}}</h5>
    <input type="text" v-model="vModalText" placeholder="輸入文字" />
    <hr />
    <!-------------------------------------->
    <h2>引入組件(component)</h2>
    <div>
      export default 外面輸入 => import Header from "@/components/HelloWorld.vue";
      <br />
      export default 裡面輸入 => components: { HelloWorld }
      <br />並插入模板語法〈HelloWorld〉〈/HelloWorld〉
    </div>
    <HelloWorld></HelloWorld>
    <hr />
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      message: "What the fuck?",
      bindTitle: "此為 New 出來的標題",
      display: true,
      todos: [
        { text: "列表項目001" },
        { text: "列表項目002" },
        { text: "列表項目003" }
      ],
      reverseText: "原本的文字 - Apple",
      vModalText: "原本的 v-modal"
    };
  },
  methods: {
    reverseMessage() {
      this.reverseText = this.reverseText
        .split("")
        .reverse()
        .join("");
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.container {
  margin: 5rem auto;
  .hello {
    margin: 1rem;
    text-align: left;
  }
}
</style>