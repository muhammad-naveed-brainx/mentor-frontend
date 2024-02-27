<template>
  <div class="d-flex justify-content-center align-items-center height-100-vh">
  <div class="login-container text-center" v-loading="loading">
    <div><img width="157" src="@/assets/images/org_logo.png"></div>
    <div><label class="sign-in my-5">{{title}}</label></div>
    <div class="width-383 mx-auto">
      <el-form hide-required-asterisk label-position="top" size="large" ref="formRef" :model="form" :rules="rules">
        <el-form-item required size="large" prop="password">
          <el-input type="password" placeholder="New Password" size="large" v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item required size="large" prop="password_confirmation">
          <el-input type="password" placeholder="Confirm New Password" size="large" v-model="form.password_confirmation"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="submitForm" color="#C4A662" class="text-white w-100">{{caption}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  </div>
</template>
<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import router from "@/router";
import {useRoute} from "vue-router";
import {ElNotification} from "element-plus";

const userStore = useUserStore()
const route = useRoute();
const formRef = ref(null);
const loading = ref(false)
const typeQuery = ref('')
const form = reactive({
  password: '',
  password_confirmation: "",
})

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the new password again'))
  } else if (value !== form.password) {
    callback(new Error("Password don't match!"))
  } else {
    callback()
  }
}
const rules = reactive({
  password: [{
    required: true,
    message: "Minimum length 8 required",
    trigger: 'blur',
    min: 8,
  }],
  password_confirmation: [{validator: validatePass2, trigger: 'blur'}]
})
const resetFields = () => {
  form.email = ""
  form.password= ""
  formRef.value.resetFields();
}
const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      const data = {
        password: form.password,
        password_confirmation: form.password_confirmation,
        email: route.query.email,
        code: route.query.code
      }
      //write logic here
    }
  })
}

const toResetPassword = () => {
  router.push({name: 'reset'})
}
//computed
const title = computed(()=> {
  return typeQuery.value === 'reset' ? 'Update Password' : 'Create Password'
})
const caption = computed(()=> {
  return typeQuery.value === 'reset' ? 'Reset Password' : 'Create Password'
})

//hooks
onMounted(()=>{
  typeQuery.value = route.query.type;
})
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
