<template>
  <div class="app-tabs container">
    <div class="row">
      <div class="col-3">
        <ul class="list-group">
          <li
            v-for="(value,index) in tabs"
            :key="value.id"
            v-text="value.name"
            @click.prevent="switchTab(value.id)"
            class="list-group-item"
            :class="{ 'active': index === 0 }"
          ></li>
        </ul>
      </div>
      <div class="col-9">
        <!------ :is 的運用 "使用is的話整個元件會被銷毀在重建" ------>
        <div :is="activeTab">content</div>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
import Tab1 from "@/components/Apart.vue";
import Tab2 from "@/components/Bpart.vue";

export default {
  name: "app-tabs",
  data() {
    return {
      activeTab: Tab1,
      tabs: [
        {
          id: 1,
          name: "頁籤 A",
          context: Tab1
        },
        {
          id: 2,
          name: "頁籤 B",
          context: Tab2
        }
      ]
    };
  },
  methods: {
    switchTab(id) {
      let index = this.tabs.findIndex(t => t.id === id);
      if (index > -1) {
        this.activeTab = this.tabs[index].context;
      }
      $(".list-group-item").removeClass("active");
      $(event.currentTarget).addClass("active");
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.app-tabs {
  margin: 15rem auto;
}
</style>