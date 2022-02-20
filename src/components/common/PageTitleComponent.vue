<template lang="pug">
 header.header.mt-md-5
  .header-body
    h6 {{ subTitle }}
    h1 {{ title }}
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PageTitleComponent extends Vue {
  @Prop() private title!: string;
  @Prop() private subTitle!: string;
}
</script>
