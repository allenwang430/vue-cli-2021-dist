import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/carousel",
    name: "Carousel",
    component: () =>
      import(/* webpackChunkName: "carousel" */ "../views/Carousel.vue")
  },
  {
    path: "/randomuser",
    name: "Randomuser",
    component: () =>
      import(/* webpackChunkName: "randomuser" */ "../views/Randomuser.vue")
  },
  {
    path: "/tab01",
    name: "Tab01",
    component: () =>
      import(/* webpackChunkName: "tab01" */ "../views/Tab01.vue")
  },
  {
    path: "/tab02",
    name: "Tab02",
    component: () =>
      import(/* webpackChunkName: "tab02" */ "../views/Tab02.vue")
  },
  {
    path: "/vue01",
    name: "Vue01",
    component: () =>
      import(/* webpackChunkName: "vue01" */ "../views/Vue01.vue")
  },
  {
    path: "/vue02",
    name: "Vue02",
    component: () =>
      import(/* webpackChunkName: "vue02" */ "../views/Vue02.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
