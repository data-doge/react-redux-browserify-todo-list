import React from 'react'

const Todo = ({onTodoToggle, onTodoDelete, completed, text}) => (
  <li>
    <span
      onClick={onTodoToggle}
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      {text}
    </span>

    <button onClick={onTodoDelete}>
      X
    </button>
  </li>
)

export default Todo
