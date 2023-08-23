import Configuration from '@/configuration'
import Resource from '@/api/restful/resource'
import request from '@/utils/request'

const fileBaseUrl = `${Configuration('fileServerHost')}`

class FileResource extends Resource {
  constructor () {
    super('file')
  }

  async upload ({ file }) {
    const formData = new FormData()
    formData.append('file', file)
    return await request({
      baseURL: `${fileBaseUrl}`,
      url: `/${this.uri}/upload`,
      method: 'post',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }
}

export default FileResource
