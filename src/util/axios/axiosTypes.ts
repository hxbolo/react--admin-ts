import { message } from 'antd'

/**
 * @description HTTP请求网络状态码及相应的错误信息
 * @param status 状态嘛
 * @param msg 自定义错误信息文案
 */
class showStatus<T> {
  error: any
  constructor(message: T) {
    this.error = message
  }
  public statusErr<T, S>(status: T, msg: S) {
    const codeList = new Map()
    codeList.set(400, () => {
      this.error(msg)
    })
    codeList.set(401, () => {
      this.error('登录已过期，请重新登录!')
    })
    codeList.set(403, () => {
      this.error('禁止访问!')
    })
    codeList.set(404, () => {
      this.error('未找到资源!')
    })
    codeList.set(405, () => {
      this.error('网络请求错误，请求方式不被允许!')
    })
    codeList.set(408, () => {
      this.error('请求错误，网络请求超时!')
    })
    codeList.set(500, () => {
      this.error('服务器错误，请联系管理员!')
    })
    codeList.set(502, () => {
      this.error('网络错误!')
    })
    codeList.set(503, () => {
      this.error('服务不可用!')
    })
    codeList.set(504, () => {
      this.error('服务不可用!')
    })
    codeList.set(9999, () => {
      this.error(msg)
    })
    codeList.get(status).call(this.statusErr)
  }
}
export const err = new showStatus(message.error)
