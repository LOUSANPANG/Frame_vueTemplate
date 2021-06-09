/**
 * @description 服务实例
 */
import qs from 'qs'
import axios from '../base-axiosconfig'

// test get 1
const getTest = data => {
  const url = `${$CONFIG.test}/inquire?offset=${data.offset}&limit=${data.limit}`
  return axios.get(url)
}

// test get 2
const getTest2 = params => {
  const url = `${$CONFIG.test}/1`
  return axios.get(url, { params })
}

// test post
const postTest = data => {
  const url = `${$CONFIG.test}/downloadImage`
  return axios({
    method: 'POST',
    url,
    data,
    responseType: 'arraybuffer'
  })
}

// test post 2
const postTest2 = params => {
  const url = `${$CONFIG.test}/1`
  return axios.post(url, qs.stringify(params))
}

export default {
  getTest,
  getTest2,
  postTest,
  postTest2
}
