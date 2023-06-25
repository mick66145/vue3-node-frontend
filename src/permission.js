import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { useUser } from '@/stores/user'
import { i18n } from '@/plugins/i18n'
import getPageTitle from './utils/get-page-title'
import useLogout from '@/hooks/useLogout'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (to.meta.auth) {
    const store = useUser()
    const { resetStore } = useLogout()
    if (!store.isLogin) {
      return next({ path: '/login', params: to.params, query: { redirect: to.fullPath } })
    } else {
      const info = store.info
      if (info) {
        next()
      } else {
        try {
          await store.whoami()
          next({ ...to, replace: true })
        } catch (error) {
          resetStore()
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    next()
  }
})

router.beforeEach(async (to, from, next) => {
  const store = useUser()
  const path = ['/login', '/register']
  if (path.includes(to.path) && store.isLogin) {
    next('/')
  }
  next()
})

router.afterEach((to) => {
  document.title = getPageTitle(to.meta.title ? i18n.global.t(to.meta.title || 'g.system-system-name', to.params.lang) : '')
  NProgress.done()
})
