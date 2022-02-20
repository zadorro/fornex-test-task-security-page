<template lang="pug">
  div
    b-row.mb-5(align-h="between")
      b-col(md="9" xl="7" cols="12")
        h2.mb-2 Device History
        p.text-muted.mb-md-0 If you see a device here that you believe wasn’t you, please contact our account fraud department immediately.
      b-col(md="auto" cols="12")
        b-btn(variant="white") Log out all devices
    b-card
      b-list-group.list-group-flush
          b-list-group-item
            b-row(align-v="center")
              b-col.pl-3.pr-0(cols="auto")
                b-icon-alarm
              b-col
                h4.mb-1 iPhone 11
                small.text-muted Los Angeles, CA · April 20 at 4:16pm
              b-col(cols="auto")
                b-btn(variant="white" size="sm") Log out
          b-list-group-item
            b-row(align-v="center")
              b-col.pl-3.pr-0(cols="auto")
                b-icon-alarm
              b-col
                h4.mb-1 iMac OSX · Safari 10.2
                small.text-muted Los Angeles, CA · April 20 at 4:16pm
              b-col(cols="auto")
                b-btn(variant="white" size="sm") Log out
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DeviceHistoryComponent extends Vue {}
</script>
