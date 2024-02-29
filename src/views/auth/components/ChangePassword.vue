<template>
  <div class="custom-padding text-center">
    <div class="my-4">
      <div class="sign-in ">Update your password</div>
    </div>
    <div>
      <el-form hide-required-asterisk label-position="top" size="large" ref="formRef" :model="requestData" :rules="rules">
        <el-form-item label="Current Password" required size="large" prop="current_password">
          <el-input required placeholder="Enter current password" size="large" v-model="requestData.current_password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="New Password" required size="large" prop="new_password">
          <el-input placeholder="Enter new password" size="large" v-model="requestData.new_password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="Confirm New Password" required size="large" prop="confirm_new_password">
          <el-input placeholder="Enter new password again" size="large" v-model="requestData.confirm_new_password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="updatePassword" color="#C4A662" class="text-white w-100 btn-caption">Update Password</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { USER_ROLES } from '@/constants';
import {ElNotification} from 'element-plus'
import {ref, reactive, onMounted} from "vue";


//States
const formRef = ref(null);
const requestData = reactive({
  current_password: '',
  new_password: "",
  confirm_new_password: "",
})

const validateCPass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the current password'))
  } else {
    callback()
  }
}
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the new password'))
  } else {
    if (requestData.confirm_new_password !== '') {
      if (!formRef.value) return
      formRef.value.validateField('confirm_new_password', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the new password again'))
  } else if (value !== requestData.new_password) {
    callback(new Error("Password don't match!"))
  } else {
    callback()
  }
}

const rules = reactive({
  current_password: [{validator: validateCPass, trigger: 'blur'}],
  new_password: [{validator: validatePass, trigger: 'blur'}],
  confirm_new_password: [{validator: validatePass2, trigger: 'blur'}],
})

//Methods
const showSuccessMessage = () => {
  ElNotification({
    title: 'Password',
    message: 'Password has been updated',
    type: 'success',
    offset:85
  })
}
const updatePassword = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      const formData = new FormData()
      formData.append('current_password', requestData.current_password)
      formData.append('new_password', requestData.new_password)
      formData.append('confirm_new_password', requestData.confirm_new_password)
      //send data to server
    }
  })
}

</script>

<style scoped>
.btn-caption {
  font: normal normal 600 16px/24px Raleway;
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
