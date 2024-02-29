<template>
  <div class="custom-padding text-center">
    <div class="my-4">
      <label class="sign-in ">Reset your password</label>
      <label>Your password reset link will be sent to the registered email address.</label>
    </div>
    <div>
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
</template>
<script setup>
import {reactive, ref} from "vue";
import router from "../../../router";
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
<style scoped>
.sign-in {
  font: normal normal 600 30px/48px Poppins;
  color: #141416;
}
.forgot-password {
  font: normal normal 400 14px/16px Poppins;
  letter-spacing: -0.14px;
  color: #182B4E;
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
