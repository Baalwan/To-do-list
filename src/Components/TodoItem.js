import React from "react";
import "./TodoItem";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item-card">
      <div className="todo-item-content">
        <h5 className="todo-title">{todo.title}</h5>
        <p className="todo-description">{todo.desc}</p>
        <button className="delete-button" onClick={() => onDelete(todo)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
