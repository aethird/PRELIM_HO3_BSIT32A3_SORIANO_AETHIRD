import React, { useState } from "react";
import "../App.css"; // Ensure correct path

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  // Handles input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Adds a new todo
  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { text: inputValue, completed: false, editing: false },
      ]);
      setInputValue("");
    }
  };

  // Toggles completion status
  const handleToggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Enables editing mode
  const handleEditTodo = (index) => {
    setTodos(
      todos.map((todo, i) => (i === index ? { ...todo, editing: true } : todo))
    );
  };

  // Handles editing input change
  const handleEditChange = (index, newText) => {
    setTodos(
      todos.map((todo, i) => (i === index ? { ...todo, text: newText } : todo))
    );
  };

  // Saves the edited task
  const handleSaveEdit = (index) => {
    setTodos(
      todos.map((todo, i) => (i === index ? { ...todo, editing: false } : todo))
    );
  };

  // Removes a todo
  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1>✅ To-Do List</h1>

      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTodo}>➕ Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
            />

            {todo.editing ? (
              <input
                type="text"
                value={todo.text}
                onChange={(e) => handleEditChange(index, e.target.value)}
                onBlur={() => handleSaveEdit(index)}
                autoFocus
              />
            ) : (
              <span className={todo.completed ? "completed" : ""}>
                {todo.text}
              </span>
            )}

            {!todo.editing && (
              <button
                className="edit-btn"
                onClick={() => handleEditTodo(index)}
              >
                ✏️ Edit
              </button>
            )}

            <button
              className="delete-btn"
              onClick={() => handleRemoveTodo(index)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
