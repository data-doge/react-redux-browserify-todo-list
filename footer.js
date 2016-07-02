import React from 'react'
const {Component} = React

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

class FilterLink extends Component {
  // componentDidMount () {
  //   this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate())
  // }
  //
  // componentWillUnmount () {
  //   this.unsubscribe()
  // }

  render () {
    const {filter, store, children} = this.props
    const state = store.getState()

    return (
      <Link
        active={filter === state.visibilityFilter}
        onClick={() => { store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: filter}) }}
      >
        {children}
      </Link>
    )
  }
}

const Footer = ({store}) => (
  <p>
    <FilterLink filter='SHOW_ALL' store={store}>
      All
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_ACTIVE' store={store}>
      Active
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_COMPLETED' store={store}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
