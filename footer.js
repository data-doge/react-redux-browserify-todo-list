import React from 'react'
const {Component} = React
import {connect} from 'react-redux'

const Link = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#" onClick={(e) => {
      e.preventDefault()
      onClick()
    }}>
    {children}
    </a>
  )
}

const FilterLink = connect(
  (state, props) => {
    return {
      active: props.filter === state.visibilityFilter
    }
  },
  (dispatch, props) => {
    return {
      onClick: () => {
        dispatch({type: 'SET_VISIBILITY_FILTER', filter: props.filter})
      }
    }
  }
)(Link)

const Footer = () => (
  <p>
    <FilterLink filter='SHOW_ALL'>All</FilterLink>
    {' '}
    <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
    {' '}
    <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
  </p>
)

export default Footer
