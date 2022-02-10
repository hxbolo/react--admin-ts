import axios from '../util//axios/index'
import url from './baseUrl/url'

enum Api {
  login = '/pudge/webApi/oauth/login',
  userList = '/zeus/webApi/admin/user/list',
  cardList = '/zeus/webApi/admin/worker/card/list',
}

/**
 * @description: 用户登录
 */

// 查询组织
export const login = (params: any) => {
  return axios.request({
    url: `${url.pug}${Api.login}`,
    method: 'post',
    params,
  })
}

export function getUserList(params: any) {
  return axios.request({
    url: `${url.pug}${Api.userList}?pageSize=${params.pageSize}&pageNo=${params.pageNo}`,
    method: 'post',
    // params,
  })
}
export function getCardList(params: any) {
  return axios.request({
    url: `${url.pug}${Api.cardList}`,
    method: 'post',
    params,
  })
}
