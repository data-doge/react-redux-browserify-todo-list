import React from 'react'
import InlineEdit from 'react-edit-inline'

const Todo = ({id, onTodoToggle, onTodoDelete, onTodoUpdate, completed, text}) => {

  const onChange = ({newText}) => {
    onTodoUpdate(id, newText)
  }

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={onTodoToggle}></input>
      <InlineEdit
        text={text}
        paramName="newText"
        change={onChange}
      />
      <button onClick={onTodoDelete}>X</button>
    </li>
  )
}

export default Todo
