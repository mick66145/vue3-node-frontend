import axios from 'axios'
import storage from '@/utils/storage'
import configuration from '@/configuration'

const $axios = axios.create({
  baseURL: configuration('backendHost'),
  timeout: 5000,
})

export const $axiosPublic = axios.create({
  baseURL: configuration('backendHost'),
  timeout: 5000,
})

$axios.interceptors.request.use((config) => {
  if (!storage.getToken()) return config
  config.headers.Authorization = `Bearer ${storage.getToken()}`
  return config
})

export default $axios
