import React from 'react'
const {Component} = React
import {connect} from 'react-redux'
import {toggleTodo} from '../actions'

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

const VisibleTodoList = connect(
  (state, props) => ({
    todos: getVisibleTodos(state.todos, props.filter)
  }),
  (dispatch) => ({
    onTodoClick (id) {
      dispatch(toggleTodo(id))
    }
  })
)(TodoList)

export default VisibleTodoList
