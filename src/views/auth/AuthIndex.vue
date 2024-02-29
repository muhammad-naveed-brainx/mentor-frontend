<template>
  <div class="d-flex justify-content-center align-items-center height-100-vh">
    <div class="auth-container">
      <router-view />
    </div>
  </div>
</template>
<style scoped >
.auth-container {
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  background-color: #FFFFFF;
  width: 70%;
  max-width: 760px;
  padding: 10px;
}
@media screen and (max-width: 768px) {
  .auth-container {
    width: 100% !important;
  }
}
</style>
<style>
@import "@/assets/css/global_styles.css";
</style>
