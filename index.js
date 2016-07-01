import $ from 'jquery'
import { createStore } from 'redux'

// reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)
/*
  dispatch(action): calls reducer with action
  getState(): returns the current state
  subscribe(callback): calls callback whenever dispatch is called
*/

const render = () => {
  $('body').html(store.getState())
}

store.subscribe(render)
render()

$(document).click((e) => {
  console.log('meow')
  store.dispatch({type: 'INCREMENT'})
})
