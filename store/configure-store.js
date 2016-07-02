import {createStore} from 'redux'
import {loadState, saveState} from './local-storage'
import rootReducer from './../reducers'
import throttle from 'lodash.throttle'

const configureStore = () => {
  const persistedState = loadState()
  const store = createStore(rootReducer, persistedState)

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }), 1000)

  return store
}

export default configureStore
