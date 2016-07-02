import visibilityFilter from './visibility-filter'
import todos from './todos'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  todos,
  visibilityFilter
})

export default rootReducer
