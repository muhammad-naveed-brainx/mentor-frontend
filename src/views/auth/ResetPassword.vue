<template>
  <div class="d-flex justify-content-center align-items-center height-100-vh">
  <div class="login-container text-center">
    <div><img width="157" src="@/assets/images/org_logo.png"></div>
    <div class="my-5">
      <label class="sign-in ">Reset your password</label>
      <label>Your password reset link will be sent to the registered email address.</label>
    </div>
    <div class="width-383 mx-auto">
      <el-form hide-required-asterisk label-position="top" size="large" ref="formRef" :model="form" :rules="rules">
        <el-form-item required size="large" prop="email">
          <el-input type="email" placeholder="Email" size="large" v-model="form.email"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="submitForm" color="#C4A662" class="text-white w-100">Reset Password</el-button>
        </el-form-item>
      </el-form>
      <label @click="backToLogin" class="cursor-pointer forgot-password">Back to login</label>
    </div>
  </div>
  </div>
</template>
<script setup>
import {reactive, ref} from "vue";
import router from "../../router";
import {ElNotification} from "element-plus";

const formRef = ref(null);
const form = reactive({
  email: '',
})
const rules = reactive({
  email: [{
    required: true,
    type: 'email',
    trigger: 'blur',
    message: "Please enter valid email address",
  }],
})
const resetFields = () => {
  form.email = ""
  formRef.value.resetFields();
}
const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      // write logic
    }
  })
}
const backToLogin = () => {
  router.push({name: 'login'})
}
</script>
<style>
</style>
