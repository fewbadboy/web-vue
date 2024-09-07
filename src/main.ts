import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'ant-design-vue/dist/reset.css'
import './styles/main.css'

import 'dayjs/locale/zh-cn';

import i18n from './i18n'
import "./permission";

import router from './router'

import App from './App.vue'

const pinia = createPinia()


const app = createApp(App)

app.use(pinia)
app.use(i18n)

app.use(router)

app.mount('#app')
