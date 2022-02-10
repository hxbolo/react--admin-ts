import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { err } from './axiosTypes'
import Cookies from 'js-cookie'
const baseUrl = 'http://dev-app.axzo.cn'

class HttpRequest {
  private readonly baseUrl: string
  constructor() {
    this.baseUrl = 'http://dev-app.axzo.cn'
  }
  getInsideConfig() {
    const config = {
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }
    return config
  }

  // 请求拦截
  interceptors(instance: AxiosInstance, url: string | number | undefined) {

    //请求拦截
    instance.interceptors.request.use(
      (config) => {
        // 添加全局的loading..
        const { url } = config
        if (url?.includes('login')) {
        } else {
          if (Cookies.get('ACCESS_TOKEN')) {
            // @ts-ignore
            config.headers['Authorization'] = `Bearer ${Cookies.get(
              'ACCESS_TOKEN'
            )}`
          } else {
            // TODO: 跳转到登录页
          }
        }
        // 请求头携带token
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
    //响应拦截
    instance.interceptors.response.use(
      (res) => {
        //返回数据
        const { data } = res
        if (data.code != 200) {
          err.statusErr(data.code, data.msg)
        } else {
          return data.data
        }
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
  }
  //  request (options) {
  //     var instance = this.create()
  //     this.interceptors(instance, options.url)
  //     this.queue[options.url] = instance
  //     this.showErrorQueue[options.url] = options.showError === undefined ? true : !!options.showError
  //     return instance(options)
  //   }
  request(options: AxiosRequestConfig) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    console.log('options', options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
