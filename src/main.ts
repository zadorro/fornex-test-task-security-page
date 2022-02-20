import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { installPlugins } from "@/plugins";

Vue.config.productionTip = false;

installPlugins(Vue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
