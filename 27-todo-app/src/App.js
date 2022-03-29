import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import PendingTodo from "./components/PendingTodo";
import CompletedTodo from "./components/CompletedTodo";


function App() {
  const [ todoList, setTodoList ] = useState([
    { id: 1, task: "Reading", status: false},
    { id: 2, task: "Breakfast", status: false},
    { id: 3, task: "Sport", status: false},
    { id: 4, task: "Programming", status: false},
    { id: 5, task: "Project", status: false},
    { id: 6, task: "Meeting", status: false},
  ]);
  const pendingTodo = todoList.filter( todo => todo.status === false );
  const completedTodo = todoList.filter( todo => todo.status === true );

  // How to add a new todo task
  const addTodo = ( event ) => {
    if (event.target.task.value.length > 0) {
      event.preventDefault();

      let addNewTodo = {
        id: todoList.length + 1,
        task: event.target.task.value,
        status: false,
      };

      setTodoList([ ...todoList, addNewTodo ]);
      event.target.reset();
    } else {
      alert( "Please type the todo task in the input field!" )
    }
  };

  // How to delete or remove a todo task
  const removeTodo = todoID => {
    let deleteTodo = todoList.filter( todo => todo.id !== todoID );
    setTodoList( deleteTodo )
  }

  // How to transfer a todo task from pending to completed and vis versal 
  const transferringTodo = todoID => {
    let transferTodo = todoList.map( todo => {
      if (todo.id === todoID) {
        todo.status = !todo.status
        return todo;
      } else {
        return todo;
      }
    });
    setTodoList( transferTodo );
  }


  return (

    <article className="App-container">

      <Header/>

      <Form addTodo={addTodo} />

      <PendingTodo 
        transferringTodo={transferringTodo} 
        removeTodo={removeTodo} 
        pendingTodo={pendingTodo} 
      />

      <CompletedTodo 
        transferringTodo={transferringTodo} 
        removeTodo={removeTodo} 
        completedTodo={completedTodo}
      />

    </article>
  );
}

export default App;
