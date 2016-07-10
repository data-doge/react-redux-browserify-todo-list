import React from 'react'
const {Component} = React
import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import {withRouter} from 'react-router'

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
    case 'all':
      return todos
    case 'completed':
      return todos.filter( t => t.completed )
    case 'active':
      return todos.filter( t => !t.completed )
  }
}

const VisibleTodoList = withRouter(connect(
  (state, {params}) => ({
    todos: getVisibleTodos(state.todos, params.filter || 'all')
  }),
  {onTodoClick: toggleTodo}
)(TodoList))

export default VisibleTodoList
