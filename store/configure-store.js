import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './../reducers'

const configureStore = () => {
  const store = createStore(rootReducer)
  const middlewares = [thunk]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(
    rootReducer,
    // persistedState,
    applyMiddleware(...middlewares)
  )
}

export default configureStore
