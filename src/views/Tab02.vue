<template>
  <div class="app-actived-component container">
    <div :is="loadedComponent"></div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      component: "HelloWorld"
    };
  },
  created() {},
  computed: {
    loadedComponent() {
      return (component => {
        return () => ({
          component: import("@/components/" + component + ".vue")
        });
      })(this.component);
    }
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      //兩秒後切換成 PropsComponent 元件
      this.component = "PropsComponent";
      //在等兩秒後切回 HelloWorld 元件
      setTimeout(() => {
        this.component = "HelloWorld";
      }, 2000);
    }, 2000);
  }
};
</script>
<style scoped lang="scss">
.app-actived-component {
  margin: 15rem auto;
}
</style>