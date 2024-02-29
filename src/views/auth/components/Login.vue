<template>
  <div class="text-end"><label @click="toRegister" class="forgot-password cursor-pointer">Register</label></div>
  <div v-loading="loading" class="text-center custom-padding">
    <label class="sign-in">Sign In</label>
    <el-form hide-required-asterisk label-position="top" size="large" ref="formRef" :model="form" :rules="rules">
      <el-form-item required size="large" prop="email">
        <el-input type="email" placeholder="Email" size="large" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item required size="large" prop="password">
        <el-input type="password" placeholder="Password" size="large" v-model="form.password" show-password @keyup.enter="submitForm"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm" color="#C4A662" class="text-white w-100">Sign In</el-button>
      </el-form-item>
    </el-form>
    <label @click="$router.push({name: 'reset'})" class="forgot-password cursor-pointer">Forgot Password?</label>
  </div>
</template>
<script setup>
import {reactive, ref} from "vue";
import router from "@/router";
import {apiClient} from "@/services/ApiRequest";
import {ElNotification} from "element-plus";
const formRef = ref(null);
const loading = ref(false)
const form = reactive({
  email: '',
  password: "",
})
const rules = reactive({
  email: [{
    required: true,
    type: 'email',
    trigger: 'blur',
    message: "Please enter valid email address",
  }],
  password: [
    {
      required: true,
      trigger: 'blur',
      min: 8,
      message: "Minimum 8 length password is required",
    }
  ]
})
const resetFields = () => {
  form.email = ""
  form.password= ""
}
const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      const payload = JSON.parse(JSON.stringify(form)); //this will deep copy object
      loading.value = true
      apiClient.post('/login', payload).then((response)=>{
        window.localStorage.setItem("api_token", response.data.data.token)
        loading.value = false
        router.push({name: 'dashboard'})
      }).catch((error)=>{
        const errorMessage = error.response.data.message ?? "An error occurred"
        showErrorMessage(errorMessage)
        loading.value = false
        throw new Error(error)
      })
    }
  })
}
const showErrorMessage = (message) => {
  ElNotification({
    title: 'Error',
    message: message,
    type: 'error',
    offset:85
  })
}

const toRegister = () => {
  router.push({name: 'signup'})
}
</script>
<style scoped >
.sign-in {
  font: normal normal 600 30px/48px Poppins;
  color: #141416;
}
.forgot-password {
  font: normal normal 400 14px/16px Poppins;
  color: blue;
  text-decoration: underline;
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
<style>
@import "@/assets/css/global_styles.css";
</style>
