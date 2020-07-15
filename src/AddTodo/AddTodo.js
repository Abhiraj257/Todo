import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    todo: null
  }
  handleChange = e => {
    const todo = e.target.value
    this.setState({
      todo: todo
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
    e.target.reset()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='todo'>Add New Todo</label>
        <input type='text' required='required' onChange={this.handleChange} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
export default AddTodo
