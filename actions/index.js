import * as types from '../constants/action-types'
import v4 from 'node-uuid'
import * as api from '../api'

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
})

export const fetchTodos = (filter) => {
  return api.fetchTodos(filter).then((response) => {
    return receiveTodos(filter, response)
  })
}

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  text,
  id: v4()
})

export const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  id
})
