import React from 'react'
import {RIEInput} from 'riek'

const Todo = ({id, onTodoToggle, onTodoDelete, onTodoUpdate, completed, text}) => {

  const onChange = ({newText}) => {
    onTodoUpdate(id, newText)
  }

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={onTodoToggle}></input>
      <RIEInput
        value={text}
        propName="newText"
        change={onChange}
      />
      <button onClick={onTodoDelete}>X</button>
    </li>
  )
}

export default Todo
