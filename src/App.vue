<template lang="pug">
  #app
    b-navbar(toggleable="sm" type="light" variant="light")
      b-navbar-toggle(target="navbar-toggle-collapse" size="sm")
      b-collapse(id="navbar-toggle-collapse" is-nav)
        b-navbar-nav(id="navbar-toggle-collapse")
          b-nav-item(to="/") Home
          b-nav-item(:to="{ name: 'accountSecurity' }") Security
          b-nav-item(to="/account") Example
    component(:is="layout")
      router-view
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Public from "@/components/layouts/public-layout-component.vue";
import Private from "@/components/layouts/private-layout-component.vue";

@Component({
  components: {
    Public,
    Private,
  },
})
export default class App extends Vue {
  get layout(): string {
    // для более глубокой вложенности можно сделать рекурсию
    const layout =
      this.$route.meta?.layout ||
      this.$route.matched.find((r) => r.meta.layout)?.meta.layout;

    return layout || `public`;
  }
}
</script>
