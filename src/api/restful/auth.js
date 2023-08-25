import Resource from './resource'
import request from '@/utils/request'
import { Me } from '@/class'

class AuthResource extends Resource {
  constructor () {
    super('auth')
  }

  async login (params) {
    return await request({
      url: `/${this.uri}/login`,
      method: 'post',
      data: params,
    }).then(res => res.data)
  }

  async register (params) {
    return await request({
      url: `/${this.uri}/register`,
      method: 'post',
      data: params,
    }).then(res => res.data)
  }

  async forgetPassword (params) {
    return await request({
      url: `/${this.uri}/forget_password`,
      method: 'post',
      data: params,
    }).then(res => res.data)
  }

  async getVerifyCode (params) {
    return await request({
      url: `/${this.uri}/get-signup-verify-code`,
      method: 'post',
      data: params,
    }).then(res => res.data)
  }

  async getLoginCaptcha (query) {
    return await request({
      url: `/${this.uri}/login_captcha`,
      method: 'get',
      params: query,
    }).then(res => res.data)
  }

  async logout () {
    return await request({
      url: `/${this.uri}/logout`,
      method: 'post',
    })
  }

  async bind (params) {
    return await request({
      url: `/${this.uri}/bind`,
      method: 'post',
      data: params,
    }).then(res => res.data)
  }

  async me () {
    return await request({
      url: `/${this.uri}/me`,
      method: 'get',
    }).then(res => res.data)
      .then(res => {
        const meObj = new Me({
          ...res.data,
        })
        return meObj
      })
  }

  async profile (params) {
    return request({
      url: `/${this.uri}/me`,
      method: 'patch',
      data: params,
    }).then(res => res.data)
  }

  async permission () {
    return await request({
      url: `/${this.uri}/me/permission`,
      method: 'get',
    }).then(res => res.data)
      .then(res => {
        const { list, meta } = res.data
        if (meta?.pagination) {
          const { count, total } = meta.pagination
          return {
            list: list,
            total: total,
            count: count,
          }
        } else {
          return {
            list: list,
          }
        }
      })
  }

  async changePassword (params) {
    return request({
      url: `/${this.uri}/change_password`,
      method: 'post',
      data: params,
    }).then(res => res.data)
  }
}

export default AuthResource
