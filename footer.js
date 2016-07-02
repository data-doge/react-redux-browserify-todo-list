import React from 'react'

const FilterLink = ({filter, currentFilter, children, onFilterClick}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>
  }

  return (
    <a href="#" onClick={(e) => {
        e.preventDefault()
        onFilterClick(filter)
      }}>
      {children}
    </a>
  )
}

const Footer = ({visibilityFilter, onFilterClick}) => (
  <p>
    <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter} onFilterClick={onFilterClick}>
      All
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter} onFilterClick={onFilterClick}>
      Active
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter} onFilterClick={onFilterClick}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
