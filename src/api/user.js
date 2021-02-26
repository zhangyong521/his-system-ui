import request from '@/utils/request'

// 用户的接口位置
// 登录
export function login(data) {
  return request({
    url: '/login/doLogin',
    method: 'post',
    data: data
  })
}
// 获取个人信息
export function getInfo(token) {
  return request({
    url: '/login/getInfo',
    method: 'get',
    params: { token }
  })
}
// 退出登录
export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}
// 得到菜单信息
export function getMenus() {
  return request({
    url: '/login/getMenus',
    method: 'get'
  })
}
