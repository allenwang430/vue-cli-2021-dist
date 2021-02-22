<template>
  <div class="hello">
    <h1 @click="thisHello">{{ this.msg }}</h1>
    <!-----
    <h1 class="actionhello">{{ this.msg }}</h1>
    ------->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "HelloWorld"
    };
  },
  created() {
    /*
    //全域事件會被重複綁定，需要取消掉
    window.addEventListener(
      "click",
      function() {
        console.log("HelloWorld Component click!");
      },
      false
    );
    */
    console.log("HelloWorld - created 階段");
  },
  methods: {
    thisHello() {
      console.log($(event.currentTarget).text());
    }
  },
  mounted() {
    /*
    $(".actionhello")
      .off("click")
      .on("click", function() {
        console.log($(event.currentTarget).text());
      });
    */
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  margin: 20rem auto;
  text-align: center;
}
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
