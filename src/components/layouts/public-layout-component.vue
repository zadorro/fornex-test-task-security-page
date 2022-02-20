<template lang="pug">
  b-container(fluid)
    slot
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PublicLayoutComponent extends Vue {}
</script>
