<template lang="pug">
  b-row
    b-col(cols="12")
      page-title(title="Account" subTitle="OVERVIEW")
        page-sub-menu
    b-col(cols="12")
      router-view
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AccountView extends Vue {}
</script>
