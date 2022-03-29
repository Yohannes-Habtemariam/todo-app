import React from 'react'

export default function PendingTodo( {pendingTodo, transferringTodo, removeTodo} ) {
  return (
    <section className="pending-tasks-container">
        <h2> Pending To-Do Tasks </h2>
        <ul>
          {pendingTodo.map( todo => {
            return (
              <li key={ todo.id }> 
                { todo.task }
                <p className="delete"> 
                  <span onClick={ () => transferringTodo(todo.id) } className="transferred-todo"> ⬇ </span> 
                  <span onClick={ () => removeTodo(todo.id) } className="delete-todo"> X </span> 
                </p> 
              </li>
            )
          } )}
        </ul>
      </section>

  )
}
