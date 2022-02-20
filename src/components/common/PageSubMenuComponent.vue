<template lang="pug">
  b-nav.nav-tabs.nav-overflow.header-tabs
    b-nav-item(v-for="i in items" :key="i.name" :to="{ name: i.name }") {{ i.title }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface IPageItem {
  title: string;
  name: string;
}

@Component
export default class PageSubMenuComponent extends Vue {
  get items(): IPageItem[] {
    const routes = this.$router.options.routes;

    const currentRouteParent = routes?.find(
      (r) => r.path === this.$route.matched[0].path
    );
    if (currentRouteParent?.children) {
      return currentRouteParent?.children.map((r) => {
        return {
          title: r.meta?.title,
          name: r.name || "",
        };
      });
    }
    return [];
  }
}
</script>
