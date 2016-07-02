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
  componentDidMount () {
    const {store} = this.context
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const {filter, children} = this.props
    const { store } = this.context
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

FilterLink.contextTypes = {
  store: React.PropTypes.object
}

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
