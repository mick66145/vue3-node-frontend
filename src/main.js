import { createApp } from 'vue'
import { createPinia } from 'pinia'

import quasar from '@/plugins/quasar'

// windi
import 'virtual:windi.css'

import App from './App.vue'
import router from './router'
import GlobalComponents from './components'

import 'virtual:svg-icons-register'
import 'quill/dist/quill.snow.css'
import '@/styles/index.scss'

// plugins
import { useDayjs } from '@/plugins/dayjs'
import i18n from '@/plugins/i18n'
import { useVuelidate } from '@/plugins/vuelidate'

const app = createApp(App)
app.use(quasar)
app.use(createPinia())
app.use(router)
app.use(GlobalComponents)
app.use(useDayjs)
app.use(i18n)
app.use(useVuelidate)
app.mount('#app')
