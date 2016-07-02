import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import rootReducer from './reducers'
import App from './components'
import {createStore} from 'redux'
import { loadState, saveState } from './local-storage'
import throttle from 'lodash.throttle'

const persistedState = loadState()
const store = createStore(rootReducer, persistedState)

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  })
}), 1000)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
