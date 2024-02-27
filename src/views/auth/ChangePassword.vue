<template>
  <div>
    <div class="row" style="margin-bottom: 40px">
      <div class="user-heading">Update your password</div>
    </div>
    <div class="main-container" style="width: 750px">
      <el-form hide-required-asterisk label-position="top" size="large" ref="formRef" style="max-width: 440px"
               :model="requestData" :rules="rules">
        <el-form-item label="Current Password" required size="large" prop="current_password">
          <el-input required placeholder="Enter current password" size="large" v-model="requestData.current_password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="New Password" required size="large" prop="new_password">
          <el-input placeholder="Enter new password" size="large" v-model="requestData.new_password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="Confirm New Password" required size="large" prop="confirm_new_password">
          <el-input placeholder="Enter new password again" size="large" v-model="requestData.confirm_new_password" type="password"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="d-flex justify-content-start">
      <el-button @click="updatePassword" color="#C4A662" class="add-btn-colored text-white"
                 style="font: normal normal 600 16px/24px Raleway;">
        Update Password
      </el-button>
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
.main-container {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  opacity: 1;
  padding: 36px 21px;
  margin-bottom: 24px;
}
</style>
