import './App.css';
import Header from "./Components/Header"
import Todos from "./Components/Todos"
import AddTodo from "./Components/AddTodo"
import Footer from "./Components/Footer"
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  try {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos && savedTodos !== "undefined") {
      initTodo = JSON.parse(savedTodos);
    } else {
      initTodo = [];
    }
  } catch (error) {
    console.error("Error parsing todos from localStorage:", error);
    initTodo = [];
  }

  const [todos, setTodos] = useState(initTodo); // Initialize todos BEFORE addTodo

  const onDelete = (todo) => {
    console.log("Deleted", todo);
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((e) => e !== todo);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const addTodo = (title, desc) => {
    console.log("Added To do-", title);
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, myTodo];
      return updatedTodos;
    });
    console.log(myTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My To Do List" searchbar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;