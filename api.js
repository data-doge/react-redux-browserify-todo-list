import {v4} from 'node-uuid'
import remove from 'lodash.remove'

const fakeDatabase = {
  todos: [{
    id: v4(),
    text: 'hey',
    completed: true
  }, {
    id: v4(),
    text: 'ho',
    completed: true
  }, {
    id: v4(),
    text: 'let\'s go',
    completed: false
  }]
}

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const fetchTodos = (filter) => {
  return delay(500).then(() => {
    // if (Math.random() > 0.5) {
    //   throw new Error('Boom!')
    // }

    switch (filter) {
      case 'all':
        return fakeDatabase.todos
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed)
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed)
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  })
}

export const addTodo = (text) =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false
    }

    fakeDatabase.todos.push(todo)
    return todo
  })

export const toggleTodo = (id) =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id)
    todo.completed = !todo.completed
    return todo
  })

export const updateTodo = (id, text) =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id)
    todo.text = text
    return todo
  })

export const deleteTodo = (id) =>
  delay(500).then(() => {
    const deletedTodo = remove(fakeDatabase.todos, (todo) => {
      return todo.id === id
    })[0]

    return deletedTodo
  })
