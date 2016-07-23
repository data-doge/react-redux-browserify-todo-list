import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toggleTodo, receiveTodos} from '../actions'
import {withRouter} from 'react-router'
import TodoList from './todo-list'
import {getVisibleTodos} from '../reducers'
import {fetchTodos} from '../api'

class VisibleTodoList extends Component {
  componentDidMount () {
    this.fetchData()
  }

  componentDidUpdate (prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData () {
    const {filter, receiveTodos} = this.props
    fetchTodos(filter).then(todos => {
      receiveTodos(filter, todos)
    })
  }

  render () {
    return <TodoList {...this.props} />
  }
}

const mapStateToProps = (state, {params}) => {
  const filter = params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id))
  },
  receiveTodos: (filter, todos) => {
    dispatch(receiveTodos(filter, todos))
  }
})

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList))

export default VisibleTodoList
