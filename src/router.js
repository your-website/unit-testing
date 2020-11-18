import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/list",
      name: "list",
      component: () =>
        import("./views/List.vue")
    },
    {
      path: "/drawer",
      name: "drawer",
      component: () =>
        import("./views/Drawer.vue")
    },
    {
      path: "/simple",
      name: "simple",
      component: () =>
        import("./views/Simple.vue")
    },
    {
      path: "/stagger",
      name: "stagger",
      component: () =>
        import("./views/Stagger.vue")
    },
    {
      path: "/state",
      name: "state",
      component: () =>
        import("./views/State.vue")
    },
    {
      path: "/timeline",
      name: "timeline",
      component: () =>
        import("./views/Timeline.vue")
    },
    {
      path: "/master",
      name: "master",
      component: () =>
        import("./views/Master.vue")
    }
  ]
});
