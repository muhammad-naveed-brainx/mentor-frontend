<template>
  <div class="custom-padding text-center">
    <div class="email-envelop"><i class="bi bi-check-lg"></i></div>
    <div class="my-3">
      <label class="sign-in ">Congratulations!</label>
      <p>You have successfully registered to Feedback wizard</p>
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
