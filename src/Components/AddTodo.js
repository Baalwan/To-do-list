import React, { useState } from "react";
import "./AddTodo.css"; // Import the separate CSS file

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and description cannot be left empty");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="add-todo-form-container">
      {" "}
      {/* Container for better styling */}
      <div className="add-todo-form">
        <h3 className="form-title">Add a Todo Item</h3>
        <form onSubmit={submit} className="todo-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Todo Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              id="title"
              placeholder="Enter todo title"
              aria-describedby="titleHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc" className="form-label">
              Todo Description
            </label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-input"
              id="desc"
              placeholder="Enter todo description"
              rows="3"
            />
          </div>
          <button type="submit" className="submit-btn">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
