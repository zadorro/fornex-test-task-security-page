<template lang="pug">
  div
    b-row.mb-5(align-h="between")
      b-col(md="9" xl="7" cols="12")
        h2.mb-2 Change your password
        p.text-muted.mb-md-0 We will email you a confirmation when changing your password, so please expect that email after submitting.
      b-col(md="auto" cols="12")
        b-btn(variant="white") Forgot your password?
    b-row
      b-col(md="6" order-md="2")
        b-card.bg-light.border.ml-md-4
          p.mb-2
            | Password requirements
          // Text
          p.small.text-muted.mb-2
            | To create a new password, you have to meet all of the following requirements:
          // List group
          ul.small.text-muted.pl-3.mb-0
            li
              | Minimum 8 character
            li
              | At least one special character
            li
              | At least one number
            li
              | Can’t be the same as a previous password
      b-col(md="6")
        form
          b-form-group(:label="currentPassword.label" label-for="currentPassword")
            b-form-input(v-model="currentPassword.value" id="currentPassword" type="password")
          b-form-group(:label="newPassword.label" label-for="newPassword")
            b-form-input(v-model="newPassword.value" id="newPassword" type="password")
          b-form-group(:label="confirmNewPassword.label" label-for="confirmNewPassword")
            b-form-input(v-model="confirmNewPassword.value" id="confirmNewPassword" type="password")
        b-btn(variant="primary" block) Update password
    hr.my-5
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ChangePasswordComponent extends Vue {
  currentPassword = {
    value: "",
    label: "Current password",
  };
  newPassword = {
    value: "",
    label: "New password",
  };
  confirmNewPassword = {
    value: "",
    label: "Confirm new password",
  };
}
</script>
