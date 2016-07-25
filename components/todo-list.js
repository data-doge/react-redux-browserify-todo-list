import React from 'react'
import Todo from './todo'

const TodoList = ({todos, onTodoToggle, onTodoDelete}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onTodoToggle={() => onTodoToggle(todo.id)}
        onTodoDelete={() => onTodoDelete(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
