import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {withRouter} from 'react-router'
import TodoList from './todo-list'
import {getVisibleTodos} from '../reducers'

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
    const {toggleTodo, ...rest} = this.props

    return (
      <TodoList
        {...rest}
        onTodoClick={toggleTodo}
      />
    )
  }
}

const mapStateToProps = (state, {params}) => {
  const filter = params.filter || 'all'
  return {
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
