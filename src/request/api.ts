import service from './index'

export const login = (params: any) =>
  service.post('/pudge/webApi/oauth/login', params)

export const getUserList = (params: any) =>
  service.post('/zeus/webApi/admin/user/list', params)
