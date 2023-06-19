import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

// windi
import 'virtual:windi.css'

import App from './App.vue'
import router from './router'
import { useDayjs } from '@/plugins/dayjs'
import GlobalComponents from './components'

import 'virtual:svg-icons-register'
import 'quill/dist/quill.snow.css'
import '@/styles/index.scss'

import i18n from '@/plugins/i18n'
import { useVuelidate } from '@/plugins/vuelidate'

import './permission'

const app = createApp(App)
const head = createHead()
app.use(head)
app.use(createPinia())
app.use(router)
app.use(GlobalComponents)

app.use(useDayjs)
app.use(i18n)
app.use(useVuelidate)
app.mount('#app')
