import React from 'react'
const {Component} = React

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

class VisibleTodoList extends Component {
  componentDidMount () {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const {store} = this.props
    const {todos, visibilityFilter} = store.getState()

    return (
      <TodoList
        todos={this.getVisibleTodos(todos, visibilityFilter)}
        onTodoClick={id => store.dispatch({type: 'TOGGLE_TODO', id})}
      />
    )
  }

  getVisibleTodos (todos, filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter( t => t.completed )
      case 'SHOW_ACTIVE':
        return todos.filter( t => !t.completed )
    }
  }
}

export default VisibleTodoList
