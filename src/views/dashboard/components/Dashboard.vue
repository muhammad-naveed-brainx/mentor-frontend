<template>
  <div class="d-flex justify-content-between container">
    <p>Dashboard</p>
    <div><a @click="logout">logout</a></div>
  </div>
</template>
<script setup>
import router from "@/router";
const logout = () => {
  window.localStorage.removeItem('api_token');
  router.push({name: 'login'})
}
</script>
<style>
</style>
