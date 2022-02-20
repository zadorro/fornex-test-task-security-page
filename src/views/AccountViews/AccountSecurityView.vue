<template lang="pug">
  #account-security
    two-factor-component
    change-password-component
    device-history-component
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TwoFactorComponent from "@/views/AccountViews/SecurityComponents/TwoFactorComponent.vue";
import ChangePasswordComponent from "@/views/AccountViews/SecurityComponents/ChangePasswordComponent.vue";
import DeviceHistoryComponent from "@/views/AccountViews/SecurityComponents/DeviceHistoryComponent.vue";
@Component({
  components: {
    DeviceHistoryComponent,
    ChangePasswordComponent,
    TwoFactorComponent,
  },
})
export default class AccountView extends Vue {}
</script>
