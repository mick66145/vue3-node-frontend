import Resource from './resource'
import request from '@/utils/request'

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

  async logout () {
    return await request({
      url: `/${this.uri}/logout`,
      method: 'post',
    })
  }
}

export default AuthResource
