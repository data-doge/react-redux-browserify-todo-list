import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {withRouter} from 'react-router'
import TodoList from './todo-list'
import {getVisibleTodos, getErrorMessage, getIsFetching} from '../reducers'
import FetchError from './fetch-error'

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
    const {filter, fetchTodos} = this.props
    fetchTodos(filter)
  }

  render () {
    const {isFetching, errorMessage, toggleTodo, todos} = this.props
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      )
    }

    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
      />
    )
  }
}

const mapStateToProps = (state, {params}) => {
  const filter = params.filter || 'all'
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    todos: getVisibleTodos(state, filter),
    filter
  }
}

const mapDispatchToProps = actions

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList))

export default VisibleTodoList
