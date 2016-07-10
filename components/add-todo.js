import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

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
