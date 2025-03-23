import React from "react";
import { TodoItem } from "./TodoItem";
import "./Todos.css"; // Import the CSS file

export const Todos = (props) => {
  return (
    <div className="todos-container">
      <h3 className="todos-title">Todos List</h3>
      {props.todos.length === 0 ? (
        <div className="todos-empty">
          <p>No items to display. Add a new todo to get started!</p>
        </div>
      ) : (
        props.todos.map((todo) => (
          <div className="todo-item-wrapper" key={todo.sno}>
            <TodoItem todo={todo} onDelete={props.onDelete} />
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;
