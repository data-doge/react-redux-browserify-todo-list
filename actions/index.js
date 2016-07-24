import * as types from '../constants/action-types'
import v4 from 'node-uuid'
import {getIsFetching} from '../reducers'
import * as api from '../api'

const requestTodos = (filter) => ({
  type: types.REQUEST_TODOS,
  filter
})

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
})

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter))
    return Promise.resolve()

  dispatch(requestTodos(filter))

  return api.fetchTodos(filter).then(response => {
    dispatch(receiveTodos(filter, response))
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
