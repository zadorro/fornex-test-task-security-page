import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/styles/app.sass";

import { VueClass } from "vue-class-component/lib/declarations";
import BootstrapVue, { IconsPlugin } from "bootstrap-vue";
import PageTitleComponent from "@/components/common/PageTitleComponent.vue";
import PageSubMenuComponent from "@/components/common/PageSubMenuComponent.vue";

export function installPlugins(Vue: VueClass<unknown>): void {
  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);
  Vue.component("PageTitle", PageTitleComponent);
  Vue.component("PageSubMenu", PageSubMenuComponent);
}
