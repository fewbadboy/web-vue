import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n'

import 'ant-design-vue/dist/reset.css'
import './styles/main.css'

import "./permission";

import router from './router'

import App from './App.vue'

const pinia = createPinia()

const app = createApp(App)

app.use(i18n)

app.use(pinia)

app.use(router)

app.mount('#app')
