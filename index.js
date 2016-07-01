import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import deepFreeze from 'deep-freeze'
import expect from 'expect'

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

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const store = createStore(counter)
/*
  dispatch(action): calls reducer with action
  getState(): returns the current state
  subscribe(callback): calls callback whenever dispatch is called
*/

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({ type: 'INCREMENT' })
      }
      onDecrement={() =>
        store.dispatch({ type: 'DECREMENT' })
      }
    />,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()

// -----------------------------

const addCounter = (list) => {
  return [...list, 0]
}

const removeCounter = (list, i) => {
  return [
    ...list.slice(0, i),
    ...list.slice(i + 1)
  ]
}

const incrementCounter = (list, i) => {
  return [
    ...list.slice(0, i),
    list[i] + 1,
    ...list.slice(i + 1)
  ]
}

const decrementCounter = (list, i) => {
  return [
    ...list.slice(0, i),
    list[i] - 1,
    ...list.slice(i + 1)
  ]
}

const testAddCounter = () => {
  const listBefore = []
  const listAfter = [0]

  deepFreeze(listBefore)
  expect(
    addCounter(listBefore)
  ).toEqual(listAfter)

  console.log('addCounter works!')
}
testAddCounter()

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20]
  const listAfter = [0, 20]

  deepFreeze(listBefore)

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter)

  console.log('removeCounter works!')
}
testRemoveCounter()

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20]
  const listAfter = [0, 11, 20]

  deepFreeze(listBefore)

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter)

  console.log('incrementCounter works!')
}
testIncrementCounter()

const testDecrementCounter = () => {
  const listBefore = [0, 10, 20]
  const listAfter = [0, 9, 20]

  deepFreeze(listBefore)

  expect(
    decrementCounter(listBefore, 1)
  ).toEqual(listAfter)

  console.log('decrementCounter works!')
}
testDecrementCounter()
