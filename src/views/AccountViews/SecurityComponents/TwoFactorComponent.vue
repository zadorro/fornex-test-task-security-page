<template lang="pug">
  div
    b-row.mb-5(align-h="between")
      b-col(md="9" xl="7" cols="12")
        h2.mb-2 Two factor security
        p.text-muted.mb-md-0 Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.
      b-col(md="auto" cols="12")
        b-btn(variant="primary" v-b-toggle.sidebar-right) Сайдбар
    b-card
      b-list-group.list-group-flush
          b-list-group-item
            b-row(align-v="center")
              b-col
                h4.mb-1 Authenticator app
                small.text-muted Google auth or 1Password
              b-col(cols="auto")
                b-btn(variant="white" size="sm") Setup
          b-list-group-item
            b-row(align-v="center")
              b-col
                h4.mb-1 SMS Recovery
                  b-icon.text-muted.ml-2(icon="exclamation-circle")
                small.text-muted Standard messaging rates apply
              b-col(cols="auto")
                b-btn(variant="danger" size="sm") Disable
          b-list-group-item
            b-row(align-v="center")
              b-col
                h4.mb-1 Recovery codes
                small.text-muted Standard messaging rates apply
              b-col(cols="auto")
                b-btn(variant="white" size="sm") Setup
    hr.my-5
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TwoFactorComponent extends Vue {}
</script>
