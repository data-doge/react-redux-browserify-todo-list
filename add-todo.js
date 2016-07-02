import React from 'react'
import {connect} from 'react-redux'

let nextTodoId = 0
const addTodo = (text) => ({
  type: 'ADD_TODO',
  text,
  id: nextTodoId++
})

const AddTodo = connect()( // does not subscribe to store, but passes dispatch
  ({dispatch}) => {
    let input

    return (
      <div>
        <input ref={node => { input = node }} />

        <button onClick={() => {
          dispatch(addTodo(input.value))
          input.value = ''
        }}>Add Todo</button>
      </div>
    )
  }
)

export default AddTodo
