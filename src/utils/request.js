import Configuration from '@/configuration'
import axios from 'axios'
import useNotify from '@/use/useNotify'

export const handleError = (error) => {
  const { response } = error
  const { notifyAPIError } = useNotify()
  if (response) {
    return Promise.reject(error)
  }

  // can not receive response
  // 請求過時或者是斷網
  if (!window.navigator.onLine) {
    notifyAPIError({ message: '網絡有些問題。請重新加載' })
  } else {
    // maybe Program have some problem
    return Promise.reject(error)
  }
}

// create an axios instance
const service = axios.create({
  baseURL: `${Configuration('backendHost')}`, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 600000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  response => response,
  handleError,
)

export default service
