<template>
  <div class="custom-padding text-center">
    <div class="email-envelop"><i class="bi bi-envelope-fill"></i></div>
    <div class="my-5">
      <label class="sign-in ">Email Sent</label>
      <label>We've sent you an email with a link to reset your password. Check your spam and promotions folder if it doesn't appear in your main mailbox.</label>
    </div>
      <el-button @click="backToLogin" color="#C4A662" class="text-white w-100 py-4">Back to login</el-button>
  </div>
</template>
<script setup>
import router from "@/router";
const backToLogin = () => {
  router.push({name: 'login'})

}
</script>
<style scoped>
.email-envelop {
  display: inline-block;
  padding: 14px 18px;
  background-color: #EDE4CF;
  color: #C4A662;
  border-radius: 50%;
}
.sign-in {
  font: normal normal 600 30px/48px Poppins;
  color: #141416;
}
.custom-padding {
  padding: 90px;
}

@media screen and (max-width: 768px) {
  .custom-padding {
    padding: 0;
  }
}
</style>
