import React from 'react'
import {render} from 'react-dom'
import configureStore from './store/configure-store'
import Root from './components/root'
import {fetchTodos} from './api'

fetchTodos('all').then(todos => {
  console.log(todos)
})

const store = configureStore()

render(
  <Root store={store}></Root>,
  document.getElementById('root')
)
