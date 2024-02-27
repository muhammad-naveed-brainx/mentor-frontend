import './assets/main.css'
import 'element-plus/dist/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'
//element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// fonts
import 'typeface-poppins'
import 'typeface-lato';
import 'typeface-raleway';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { useModalStore } from './stores/modalStore';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(createPinia())

app.mount('#app')
