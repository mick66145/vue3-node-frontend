import { AuthResource, MeResource } from '@/api'
import {
  getToken,
  setToken,
  removeToken,
  getLineAccessToken,
  setLineAccessToken,
  removeLineAccessToken,
} from '@/utils/auth'
import { defineStore } from 'pinia'

export const useUser = defineStore({
  id: 'user',
  state: () => ({
    token: getToken(),
    lineAccessToken: getLineAccessToken(),
    info: '',
    permissionList: [],
    authResource: new AuthResource(),
    meResource: new MeResource(),
  }),
  actions: {

    login (payload) {
      return this.authResource.login(payload)
        .then(res => {
          const { data } = res
          this.setToken(data.token)
          return res
        })
    },
    register (payload) {
      /* 如果有註冊的api就使用以下註解 */
      // return this.authResource.register(payload)
      //   .then(res => {
      //     return res
      //   })
      return new Promise((resolve) => {
        resolve(true)
      })
    },
    forgetPassword (payload) {
      /* 如果有註冊的api就使用以下註解 */
      // return this.authResource.forgetPassword(payload)
      //   .then(res => {
      //     return res
      //   })
      return new Promise((resolve) => {
        resolve(true)
      })
    },

    getVerifyCode (payload) {
      /* 如果有註冊的api就使用以下註解 */
      // return this.authResource.getVerifyCode(payload)
      //   .then(res => {
      //     return res
      //   })
      return new Promise((resolve) => {
        resolve(true)
      })
    },

    bind (payload) {
      /* 如果有綁定的api就使用以下註解 */
      // return this.authResource.bind(payload)
      //   .then(res => {
      //     return res
      //   })
      return new Promise((resolve) => {
        resolve(true)
      })
    },

    whoami () {
      return new Promise((resolve, reject) => {
        this.meResource.me()
          .then(res => {
            const { data } = res
            if (!data) {
              reject(new Error('Verification failed, please Login again.'))
            }
            this.info = { ...data }
            resolve(data)
          }).catch(error => {
            reject(error)
          })
      })
    },

    permission () {
      /* 如果有權限的api就使用以下註解 */
      // return new Promise((resolve, reject) => {
      //   this.meResource.permission()
      //     .then(res => {
      //       const { list } = res
      //       this.permissionList = list.map(permission => { return permission.name })
      //       resolve()
      //     }).catch(error => {
      //       reject(error)
      //     })
      // })
      return new Promise((resolve) => {
        resolve(true)
      })
    },

    profile (payload) {
      return this.meResource.profile(payload)
    },

    changePassword (payload) {
      return this.meResource.changePassword(payload)
    },

    logout () {
      /* 如果有登出的api就使用以下註解 */
      // return new Promise((resolve, reject) => {
      //   return this.authResource.logout().then(res => {
      //     this.clear()
      //     resolve()
      //   })
      //     .catch(error => {
      //       reject(error)
      //     })
      // })
      this.clear()
    },

    setToken (token) {
      setToken(token)
      this.token = token
    },

    setLineAccessToken (token) {
      setLineAccessToken(token)
      this.lineAccessToken = token
    },

    clear () {
      this.token = ''
      this.lineAccessToken = ''
      removeToken()
      removeLineAccessToken()
      this.$reset()
    },
  },

})
