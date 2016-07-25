import React from 'react'

const Todo = ({onTodoToggle, onTodoDelete, completed, text}) => (
  <li>
    <input type="checkbox" checked={completed} onChange={onTodoToggle}></input>
    <span style={{width: '200px', display: 'inline-block'}}>{text}</span>
    <button onClick={onTodoDelete}>X</button>
  </li>
)

export default Todo
