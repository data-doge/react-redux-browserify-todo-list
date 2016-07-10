import React from 'react'
import FilterLink from './filter-link'

const Footer = () => (
  <p>
    <FilterLink filter='all'>All</FilterLink>
    {' '}
    <FilterLink filter='active'>Active</FilterLink>
    {' '}
    <FilterLink filter='completed'>Completed</FilterLink>
  </p>
)

export default Footer
