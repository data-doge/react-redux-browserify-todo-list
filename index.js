import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import rootReducer from './reducers'
import App from './components'
import {createStore} from 'redux'
const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
