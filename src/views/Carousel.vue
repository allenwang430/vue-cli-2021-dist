<template>
  <div>
    <h1>{{ this.headerTitle }}</h1>
    <div class="carousel">
      <ul>
        <li v-for="(value, index) in exampleTitle" :key="index">{{ value }}</li>
      </ul>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            v-for="(value, index) in sliderInfo"
            :key="index"
            :class="{ active: index === 0 }"
            data-target="#carouselExampleIndicators"
            :data-slide-to="index"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(info, index) in sliderInfo"
            :key="index"
            :class="{ active: index === 0 }"
          >
            <img :src="info.picurl" class="d-block w-100" alt />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ info.title }}</h5>
              <p>{{ info.caption }}</p>
              <ul class="list-group">
                <li
                  class="list-group-item list-group-item-light"
                  v-for="(text, t_index) in info.list"
                  :key="t_index"
                >
                  {{ text.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerTitle: "範例頁標題",
      sliderInfo: "",
      exampleTitle: [],
    };
  },
  created() {
    //線上url前綴 - /project-vue/dist/data/
    //本機url前綴 - /data/
    const onlineUrl = "/vue-cli-2021-dist/data/";

    // 最基本的 axios 運用
    let sliderInfoAj = {
      name: "sliderinfo",
      url: `${onlineUrl}sliderinfo.json`,
      data: "",
      type: "get",
    };
    this.ajaxMix(sliderInfoAj)
      .then((data) => {
        //console.log(data);
        this.sliderInfo = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    ////////////////////////////////////////////////
    // promise 寫法

    //宣告 ajax 物件
    let meal_01 = {
        name: "meal_01",
        url: `${onlineUrl}example_01.json`,
        data: { username: "admin_01", password: "1234" },
        type: "get",
      },
      meal_02 = {
        name: "meal_02",
        url: `${onlineUrl}example_02.json`,
        data: { username: "admin_02", password: "78910" },
        type: "get",
      },
      meal_03 = {
        name: "meal_03",
        url: `${onlineUrl}example_03.json`,
        data: { username: "admin_03", password: "030303" },
        type: "get",
      },
      meal_10 = {
        name: "meal_10",
        url: `${onlineUrl}example_10.json`,
        data: { username: "admin_10", password: "101010" },
        type: "get",
      };

    //注意這裡返回的是promise對象
    this.ajaxMix(meal_01)
      .then(
        (data) => {
          console.log("階段1-1");
          this.exampleTitle.push(data[0].articles[0].title);
          console.log(data[0].articles[0].title);
          //能夠將階段一的資料傳遞至下一階段
          return this.ajaxMix(meal_02);
        },
        this.ajaxMix(meal_10).then((data10) => {
          //在同階段執行不同的事情
          console.log("階段1-2");
          this.exampleTitle.push(data10[0].articles[0].title);
          console.log(data10[0].articles[0].title);
        })
      )
      .then(
        (data2) => {
          console.log("階段2-1");
          this.exampleTitle.push(data2[0].articles[0].title);
          console.log(data2[0].articles[0].title);
        },
        this.ajaxMix(meal_03).then((data3) => {
          console.log("階段2-2");
          this.exampleTitle.push(data3[0].articles[0].title);
          console.log(data3[0].articles[0].title);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    $(".carousel").carousel({
      interval: false,
    });

    /////////////////
  },
  methods: {
    //promise 封裝 ajax
    ajaxMix(item) {
      return new Promise((resolve, reject) => {
        $.ajax({
          type: item.type,
          url: item.url,
          data: item.data,
          dataType: "json",
          success: function (data) {
            //console.log("ajaxMix-計數");
            resolve(data);
          },
          error: function (err) {
            reject(err);
          },
        });
      });
    },
  },
};
</script>