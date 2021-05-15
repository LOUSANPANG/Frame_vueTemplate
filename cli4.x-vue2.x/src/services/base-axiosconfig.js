import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'
import statusCode from './base-statuscode'

/**
 * 401 403 navgation back login
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: { redirect: router.currentRoute.fullPath }
  })
}

/**
 * network notfound navgation 404
 */
const toNotFind = () => {
  router.replace({
    path: '/404',
    query: { redirect: router.currentRoute.fullPath }
  })
}

/**
 * navgation login and clear locastorage
 */
const clearStorage = () => {
  localStorage.clear()
  setTimeout(() => toLogin(), 1000)
}

/**
 * Message
 * @param {number} code 状态码
 */
const errorHandle = (code) => {
  switch (code) {
    case 401:
      Message.warning(statusCode(code))
      clearStorage()
      toLogin()
      break

    case 403:
      Message.error(statusCode(code))
      setTimeout(() => {
        clearStorage()
        toLogin()
      }, 1000)
      break

    default:
      Message.error(statusCode(code))
      break
  }
}

let instance = axios.create()
instance.defaults.withCredentials = false
instance.defaults.timeout = 30000
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    token ? (config.headers['token'] = token) : (config.headers['token'] = null)
    config.headers['withCredentials'] = true
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      // 防止服务没有code的情况
      if (response.data.code === undefined) {
        return response.data
      } else {
        // 服务成功码 code 0 1
        const code = response.data.code
        if (code) {
          return response
        } else {
          // Message.error(response.data.msg)
          return Promise.reject(response.data.msg)
        }
      }
    }
  },
  (error) => {
    if (error && error.response) {
      errorHandle(error.response.status)
      return Promise.reject(error.response)
    } else {
      if (!window.navigator.onLine) {
        Message.warning('网络不稳定，请检查网络连接')
        toNotFind()
      } else {
        Message.error('网络请求超时')
      }
      return Promise.reject(error.response)
    }
  }
)

export default instance
