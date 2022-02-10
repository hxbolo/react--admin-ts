//在index.js中引入axios
import axios from 'axios'
import QS from 'qs'
//antd的message提示组件，大家可根据自己的ui组件更改。
import { message } from 'antd'
// 设置基础url
export const baseUrl: string = 'http://dev-app.axzo.cn'

const service = axios.create({
  baseURL: baseUrl,
  timeout: 100000,
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    console.log(config)

    // 每次请求都要确认本地是否存在token，
    const token =
      window.localStorage.getItem('userToken') ||
      window.sessionStorage.getItem('userToken')
    // 在请求的时候都加上token
    config.data = Object.assign({}, config.data, {
      // token,
    })
    // 设置请求头
    config.headers = {
      // 'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    }
    config.data = QS.stringify(config.data)
    return config
  },
  (err) => {
    return err
  }
)

// 响应拦截
service.interceptors.response.use((response: any) => {
  if (response.status) {
    switch (response.status) {
      case 200:
        return response.data
      case 401:
        // 未登录
        break
      case 403:
        // token 过期方法
        break
      default:
        message.error(response.data)
    }
  } else {
    return response.data
  }
})

//最后把封装好的axios导出
export default service


export function get(url: any, params: any) {
  return service.get(url, {
    params,
  })
}
export function post(url: any, data: any) {
  return service.post(url, data)
}
export function put(url: any, data: any) {
  return service.put(url, data)
}
export function del(url: any) {
  return service.get(url)
}
