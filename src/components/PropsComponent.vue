<template>
  <div>
    <h6>即時驗證帳號格式，條件為 3~15 個字，只能使用小寫英文、數字、底線。</h6>
    <input type="text" v-model="number" />
    <p v-if="verificationResult === false">請輸入正確的格式</p>
  </div>
</template>

<script>
export default {
  /*
  name: "PropsComponent",
  props: {
    hello: {
      type: String,
      required: true,
      default: 30
    },
    world: {
      type: Object,
      default() {
        return {
          item01: 123,
          item02: 456,
          item03: 789
        };
      }
    },
    kitty: {
      validator(value) {
        return "validator" + value;
      }
    },
    dog: String
  },
  */
  created() {
    console.log("PropsComponent - created 階段");
  },
  data() {
    return {
      number: "",
      verificationResult: true,
      dataList: {
        item04: 444,
        item05: 555,
        item06: 666
      }
    };
  },
  watch: {
    number: function(newValue) {
      this.verificationResult = /^[a-z0-9_]{3,15}$/.test(newValue);
    }
    /*
    testObject: {
      handler: function(newName, oldName) {
        console.log("test change",newName, oldName);
      },
      deep: true,
      immediate: true
    }
    */
  },
  mounted() {
    //  ...
  }
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
