
import { baseApiModules } from '@/api'
import { useApp } from '@/stores/app'
import reduce from 'lodash-es/reduce'

const fileResource = new baseApiModules.FileResource()
export default function useBatchUpload () {
  const batchUpload = async (payload) => {
    const storeApp = useApp()
    const resUpload = {}
    const errors = []
    storeApp.isLoading = true
    await reduce(payload, async (req, value, key) => {
      if (req) await req
      return new Promise(resolve => {
        if (!value) {
          resUpload[key] = value
          resolve(value)
        } else if (value.raw) {
          fileResource.upload({ file: value.raw })
            .then(res => res.data)
            .then(res => {
              resUpload[key] = res.data
              resolve(res)
            })
            .catch(error => {
              console.log('🚀 ~ awaitreduce ~ error', error)
              resUpload[key] = value
              resolve(error)
              errors.push(error)
            })
        } else {
          resUpload[key] = value
          resolve(value)
        }
      })
    }, Promise.resolve())
    storeApp.isLoading = false
    return [resUpload, errors]
  }
  return {
    batchUpload,
  }
}
