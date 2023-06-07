import './App.css';
import react from "react";
import { useState, useEffect } from 'react';
import TodoLst from "./TodoLst";
import TodoInput from "./TodoInput";
import TodoFooter from "./TodoFooter";

function App() {
  
let [todos, setTodos] = useState(() => {
  return JSON.parse(localStorage.getItem("todos")) || []
});;

useEffect(() => {
  window.localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

const addTodo = (text) => {
  setTodos([...todos, 
    { id: Math.random(), 
      text: text, 
      isCompleted: false} ])
};

const deleteTodo = (deletedTodo) => {
  setTodos(todos.filter((todoItem) => todoItem.id !== deletedTodo.id));
 };

 const changeTodoStatus = (changedTodo) => {
  setTodos(todos.map((todo) => {
    if(todo.id === changedTodo.id){
    return changedTodo;
  }
  return todo
  }))
 };

  return (
    <div className="App">
      <TodoInput addTodo = {addTodo}/>
      <TodoLst todos = {todos}
               deleteTodo = {deleteTodo}
               changeTodoStatus = {changeTodoStatus}
      />
      <TodoFooter todos = {todos}/>
    </div>
  );
}

export default App;
