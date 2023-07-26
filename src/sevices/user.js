import { request } from '@/utils'
// 用户相关的接口
export default {
  // 用户密码登录
  pwdLogin: (params) => request.POST('/idaasweb/user/login/pwd', params),
  // 用户详情
  getUserDetail: (params) => request.GET('/idaasweb/user/getOne', params),
  // 用户权限
  getUserAuthorizeAndPermission: (params) =>
    request.GET('/idaasweb/user/login/authorizeAndPermission', params),
  // 用户退出
  logout: (params) => request.POST('/idaasweb/user/login/logout', params),
}
