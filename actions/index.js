import * as types from '../constants/action-types'
import v4 from 'node-uuid'
import {getIsFetching} from '../reducers'
import * as api from '../api'

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter))
    return Promise.resolve()

  dispatch({
    type: types.FETCH_TODOS_REQUEST,
    filter
  })

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: types.FETCH_TODOS_SUCCESS,
        filter,
        response
      })
    },
    error => {
      dispatch({
        type: types.FETCH_TODOS_FAILURE,
        filter,
        message: error.message || 'Something went wrong.'
      })
    }
  )
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
