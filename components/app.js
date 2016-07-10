import React from 'react'
import VisibleTodoList from './visible-todo-list.js'
import AddTodo from './add-todo.js'
import Footer from './footer.js'

const App = () => (
  <div>
    <AddTodo />
      <VisibleTodoList />
    <Footer />
  </div>
)

export default App
