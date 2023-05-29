import Resource from './resource'
import request from '@/utils/request'
import { Me } from '@/class'

class MeResource extends Resource {
  constructor () {
    super('me')
  }

  async me () {
    return await request({
      url: `/${this.uri}`,
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
      url: `/${this.uri}`,
      method: 'patch',
      data: params,
    }).then(res => res.data)
  }

  async permission () {
    return await request({
      url: `/${this.uri}/permission`,
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

export default MeResource
