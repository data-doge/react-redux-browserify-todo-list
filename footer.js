import React from 'react'
const {Component} = React
import {connect} from 'react-redux'

const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER', filter: filter
})

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
  (state, props) => ({
    active: props.filter === state.visibilityFilter
  }),
  (dispatch, props) => ({
    onClick: () => {
      dispatch(setVisibilityFilter(props.filter))
    }
  })
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
