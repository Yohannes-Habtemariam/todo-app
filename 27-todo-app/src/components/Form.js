import React from 'react'

export default function Form( {addTodo} ) {
  return (
    <form onSubmit={addTodo}>
    <input type="text" name="task" placeholder="Write Here!" />
    <button> Add To-Do </button>
  </form>
  )
}
