import axios from 'axios'
import { useUserStore } from '@/stores'
//import router from '@/router'

// 基础地址
const baseURL = 'http://127.0.0.1:3000/'

// 创建axios实例
const instance = axios.create({
  baseURL,
  // timeout: 1000,
  contentType: 'application/json'
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const useStore = useUserStore()
    if (useStore.token) {
      config.headers.Authorization = useStore.token
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance
export { baseURL }
