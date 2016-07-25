import {normalize} from 'normalizr'
import * as schema from './schema'
import * as types from '../constants/action-types'
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
        response: normalize(response, schema.arrayOfTodos)
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

export const addTodo = (text) => (dispatch) =>
  api.addTodo(text).then(response => {
    dispatch({
      type: types.ADD_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    })
  })

export const toggleTodo = (id) => (dispatch) => {
  return api.toggleTodo(id).then(response => {
    dispatch({
      type: types.TOGGLE_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    })
  })
}

export const updateTodo = (id, text) => (dispatch) => {
  return api.updateTodo(id, text).then(response => {
    dispatch({
      type: types.UPDATE_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    })
  })
}

export const deleteTodo = (id) => (dispatch) =>
  api.deleteTodo(id).then(response =>
    dispatch({
      type: types.DELETE_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    })
  )
