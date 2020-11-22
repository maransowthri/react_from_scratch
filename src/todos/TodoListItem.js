import React from "react";
import { todos } from "./reducers";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => (
  <div className="todo-item-container">
    <h3 style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
      {todo.text}
    </h3>
    <div className="buttons-container">
      <button
        className="completed-button"
        onClick={() => onCompletePressed(todo.text)}
      >
        Mark as {todo.isCompleted ? "un" : ""}completed
      </button>
      <button
        className="remove-button"
        onClick={() => onRemovePressed(todo.text)}
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
