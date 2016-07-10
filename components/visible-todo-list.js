import React from 'react'
const {Component} = React
import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import * as todoFilters from '../constants/todo-filter'

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
    case todoFilters.SHOW_ALL:
      return todos
    case todoFilters.SHOW_COMPLETED:
      return todos.filter( t => t.completed )
    case todoFilters.SHOW_ACTIVE:
      return todos.filter( t => !t.completed )
  }
}

const VisibleTodoList = connect(
  (state, props) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }),
  (dispatch) => ({
    onTodoClick (id) {
      dispatch(toggleTodo(id))
    }
  })
)(TodoList)

export default VisibleTodoList
