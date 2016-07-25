import React from 'react'
import Todo from './todo'

const TodoList = ({todos, onTodoToggle, onTodoDelete, onTodoUpdate}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        id={todo.id}
        {...todo}
        onTodoToggle={() => onTodoToggle(todo.id)}
        onTodoDelete={() => onTodoDelete(todo.id)}
        onTodoUpdate={onTodoUpdate}
      />
    )}
  </ul>
)

export default TodoList
