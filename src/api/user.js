import request from '@/utils/request'

//登录
export const login = (data) => {
  return request.post('/user/login', data)
}


// 注册
export const register = (data) => {
  return request.post('/user/register', data)
}