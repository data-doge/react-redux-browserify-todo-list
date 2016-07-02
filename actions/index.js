import * as types from '../constants/action-types'

let nextId = 0
export const addTodo = (text) => ({type: types.ADD_TODO, text, id: nextId++})
export const toggleTodo = (id) => ({type: types.TOGGLE_TODO, id})
export const setVisibilityFilter = (filter) => ({type: types.SET_VISIBILITY_FILTER, filter})
