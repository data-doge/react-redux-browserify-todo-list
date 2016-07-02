import React from 'react'
const {Component} = React
import {connect} from 'react-redux'

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO', id: id
})

const Todo = ({onClick, completed, text}) => (
  <li
    onClick={onClick}
    style={{textDecoration: completed ? 'line-through' : 'none'}}
  >
    {text}
  </li>
)

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter( t => t.completed )
    case 'SHOW_ACTIVE':
      return todos.filter( t => !t.completed )
  }
}

const VisibleTodoList = connect(
  (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }),
  (dispatch) => ({
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  })
)(TodoList)

export default VisibleTodoList
