import axios from 'axios'
import { message } from 'ant-design-vue'
import router from '@/router'
// import store from '../store/state'
import statusCode from './base-statuscode'

// if 403 401 to login
const toLogin = () => {
  router.replace({
    path: '/login',
    query: { redirect: router.currentRoute.fullPath }
  })
}

// if network 404
const toNotFind = () => {
  router.replace({
    path: '/404',
    query: { redirect: router.currentRoute.fullPath }
  })
}

// clear storage
const clearStorage = () => {
  // todo clear
  setTimeout(() => toLogin(), 1000)
}

// status code !== 200 msg
const errorHandle = code => {
  switch (code) {
    case 401:
      message.warning(statusCode(code))
      clearStorage()
      toLogin()
      break

    case 403:
      message.error(statusCode(code))
      // localStorage.removeItem('token')
      // store.commit('loginSuccess', null)
      setTimeout(() => {
        clearStorage()
        toLogin()
      }, 1000)
      break

    default:
      message.error(statusCode(code))
      break
  }
}

// base axios
let instance = axios.create()
instance.defaults.withCredentials = false
instance.defaults.timeout = 30000
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// request interceptors set token
instance.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // const token = store.state.token
    // const token = sessionStorage.getItem('access_token')
    // token && (config.headers.Authorization = token)
    // token ? (config.headers['token'] = token) : (config.headers['token'] = null)
    // config.headers['withCredentials'] = true
    return config
  },
  error => Promise.error(error)
)

// response interceptors
instance.interceptors.response.use(
  response => {
    // response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
    const CODE = response.data.code
    CODE ? Promise.resolve(response) : message.error(response.data.msg)
  },
  error => {
    if (error && error.response) {
      errorHandle(error.response.status)
      return Promise.reject(error.response)
    } else {
      // 无网络情况
      // 请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      if (!window.navigator.onLine) {
        message.warning('网络不稳定，请检查网络连接')
        // store.commit('changeNetwork', false)
        toNotFind()
      } else {
        return Promise.reject(error)
      }
    }
  }
)

export default instance
