import React, { Component } from 'react'
import Todos from './Todo/todo'
import AddTodo from './AddTodo/AddTodo'
class App extends Component {
  state = {
    todos: [
      { id: 1, todo: 'Wake up Early in the morning' },
      { id: 2, todo: 'Read A book' }
    ]
  }
  deleteTodo = id => {
    const filter = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todos: filter })
  }
  addTodo = newTodo => {
    newTodo.id = Math.random()
    const todos = [...this.state.todos, newTodo]
    this.setState({ todos: todos })
  }
  render() {
    // const todos = this.state.todos.map(todo => {
    //   return <Todos todos={todo} />
    // })
    return (
      <div className='todo-App container'>
        <h1 className='center blue-text'>TODO's</h1>
        <Todos todo={this.state} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}
export default App
