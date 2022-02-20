import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { layout: "public" },
  },
  {
    path: "/account",
    component: () => import("../views/AccountViews/AccountView.vue"),
    meta: { layout: "private" },
    children: [
      {
        path: "security",
        name: "accountSecurity",
        meta: {
          title: "Security",
        },
        component: () =>
          import("../views/AccountViews/AccountSecurityView.vue"),
      },
      {
        path: "",
        name: "accountExample",
        meta: {
          title: "Billing",
        },
        component: () => import("../views/AccountViews/AccountExampleView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
