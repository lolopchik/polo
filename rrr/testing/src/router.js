import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component: () => import("./components/MainComponents/ErrorFour.vue"),
    },
    {
      path: "/one",
      component: () => import("./components/СomponetsForPages/Search.vue"),
    },
    {
      path: "/Quetion",
      component: () =>
        import("./components/MainComponents/QuetionComp.vue"),
    },
    {
      path: "/Main",
      component: () => import("./components/MainComponents/MainComp.vue"),
    },
    {
      path: "/States",
      component: () => import("./components/СomponetsForPages/StatesMain.vue"),
    },
    {
      path: "/UserInfo",
      component: () => import("./components/СomponetsForPages/UserInfo.vue"),
    },
  ],
});
