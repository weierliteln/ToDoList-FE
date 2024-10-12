import request from '@/utils/request'

// 获取todo列表
export const getTodoList = (params) => {
  return request.get('/todo/get/list', { params })
}

// 添加todo
export const addTodo = (data) => {
  return request.post('/todo/add/list', data)
}

// 删除todo
export const deleteTodo = (id) => {
  return request.delete(`/todo/delete/list/${id}`)
}

// 修改todo
export const updateTodo = (id, data) => {
  return request.put(`/todo/update/list/${id}`, data)
}