import {SHOW_ALL} from '../constants/todo-filter'
import {SET_VISIBILITY_FILTER} from '../constants/action-types'

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter