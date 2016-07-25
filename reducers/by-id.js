import {DELETE_TODO_SUCCESS} from '../constants/action-types'
import filterFromObject from 'object-key-filter'

const byId = (state = {}, action) => {
  if (action.type === DELETE_TODO_SUCCESS) {
    return filterFromObject(state, [action.response.result])
  } else if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos
    }
  }

  return state
}

export default byId

export const getTodo = (state, id) => state[id]
