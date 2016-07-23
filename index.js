import React from 'react'
import {render} from 'react-dom'
import configureStore from './store/configure-store'
import Root from './components/root'

const store = configureStore()

render(
  <Root store={store}></Root>,
  document.getElementById('root')
)
