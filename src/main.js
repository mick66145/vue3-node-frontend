import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

import quasar from '@/plugins/quasar'

// windi
import 'virtual:windi.css'

import App from './App.vue'
import router from './router'
import GlobalComponents from './components'
import GlobalViewsComponents from './components/views'

import 'virtual:svg-icons-register'
import 'quill/dist/quill.snow.css'
import '@/styles/index.scss'

// plugins
import { useDayjs } from '@/plugins/dayjs'
import vxeTable from '@/plugins/vxe-table'
import i18n from '@/plugins/i18n'
import { useVuelidate } from '@/plugins/vuelidate'

import './permission'

const app = createApp(App)
const head = createHead()
app.use(head)
app.use(quasar)
app.use(createPinia())
app.use(router)
app.use(GlobalComponents)
app.use(GlobalViewsComponents)
app.use(useDayjs)
app.use(i18n)
app.use(vxeTable)
app.use(useVuelidate)
app.mount('#app')
