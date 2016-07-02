import { createStore, combineReducers } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
const { Component } = React
import TodoList from './todo-list.js'
import AddTodo from './add-todo.js'
import Footer from './footer.js'

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

const store = createStore(todoApp)

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

let nextTodoId = 0
class TodoApp extends Component {
  render () {
    const { todos, visibilityFilter } = this.props
    let visibleTodos = getVisibleTodos(todos, visibilityFilter)

    return (
      <div>
        <AddTodo onAddClick={text =>
          store.dispatch({ type: 'ADD_TODO', text: text, id: nextTodoId++ })
        }/>

        <TodoList
          todos={visibleTodos}
          onTodoClick={id => store.dispatch({type: 'TOGGLE_TODO', id})}
        />

        <Footer
          visibilityFilter={visibilityFilter}
          onFilterClick={filter =>
            store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: filter})
          }
        />
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()}/>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
