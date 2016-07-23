import * as types from '../constants/action-types'
import v4 from 'node-uuid'

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  text,
  id: v4()
})

export const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  id
})

export const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
})
