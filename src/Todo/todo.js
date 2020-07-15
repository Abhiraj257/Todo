import React from 'react'
const Todos = props => {
  const todoList = props.todo.todos.length ? (
    props.todo.todos.map(todo => {
      return (
        <div
          className='collection-item'
          key={todo.id}
          onClick={() => {
            props.deleteTodo(todo.id)
          }}>
          <span>{todo.todo}</span>
        </div>
      )
    })
  ) : (
    <p className='center'>You Have No Todos Left</p>
  )
  return <div className='todos collection'>{todoList}</div>
}

export default Todos
