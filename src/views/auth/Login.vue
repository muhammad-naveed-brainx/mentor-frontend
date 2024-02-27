<template>
  <div class="d-flex justify-content-center align-items-center height-100-vh">
  <div class="login-container text-center" v-loading="loading">
    <div><label class="sign-in my-5">Sign In</label></div>
    <div class="width-383 mx-auto">
      <el-form hide-required-asterisk label-position="top" size="large" ref="formRef" :model="form" :rules="rules">
        <el-form-item required size="large" prop="email">
          <el-input type="email" placeholder="Email" size="large" v-model="form.email"></el-input>
        </el-form-item>

        <el-form-item required size="large" prop="password">
          <el-input type="password" placeholder="Password" size="large" v-model="form.password" @keyup.enter="submitForm"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="submitForm" color="#C4A662" class="text-white w-100">Sign In</el-button>
        </el-form-item>
      </el-form>
      <label @click="toResetPassword" class="cursor-pointer forgot-password">Forgot Password?</label>
    </div>
  </div>
  </div>
</template>
<script setup>
import {reactive, ref} from "vue";
import router from "@/router";
import { ElNotification } from 'element-plus'
import {USER_ROLES} from "@/constants";

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
      message: "Required",
    }
  ]
})
const resetFields = () => {
  form.email = ""
  form.password= ""
  formRef.value.resetFields();
}
const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
     // authenticate
      window.localStorage.setItem("api_token", 'auth_token')
      router.push({name: 'dashboard'})
    }
  })
}

const toResetPassword = () => {
  router.push({name: 'reset'})
}
</script>
<style>
.login-container {
  max-width: 760px;
  max-height: 572px;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  background-color: #FFFFFF;
  padding: 50px 186px;
}
.sign-in {
  font: normal normal 600 30px/48px Poppins;
  color: #141416;
}
.width-383 {
  width: 383px;
}
.forgot-password {
  font: normal normal medium 14px/16px Poppins;
  letter-spacing: -0.14px;
  color: #182B4E;
}
.height-100-vh {
  height: 91vh;
}
</style>
