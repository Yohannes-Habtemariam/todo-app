import React from 'react'

export default function CompletedTodo( {transferringTodo, removeTodo, completedTodo} ) {
  return (
    <section className="completed-tasks-container">
    <h2> Completed To-Do Tasks </h2>
    <ul>
      { completedTodo.map( todo => {
        return(
          <li key={todo.id}> 
            {todo.task} 
            <p className="delete"> 
              <span onClick={ () => transferringTodo(todo.id) } className="transferred-todo"> ⬆ </span> 
              <span onClick={ () => removeTodo(todo.id) } className="delete-todo"> X </span> 
            </p> 
          </li>
        )
      }) }
    </ul>
  </section>
  )
}
