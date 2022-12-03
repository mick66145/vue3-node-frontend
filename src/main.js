import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'

import 'quasar/src/css/index.sass'

import App from './App.vue'
import router from './router'
import { useDayjs } from '@/plugins/dayjs'
import GlobalComponents from './components'

import 'virtual:svg-icons-register'

// import 'virtual:windi.css'
import '@/styles/index.scss'

import i18n from '@/plugins/i18n'

const app = createApp(App)
app.use(Quasar)
app.use(createPinia())
app.use(router)
app.use(GlobalComponents)

app.use(useDayjs)
app.use(i18n)

app.mount('#app')
