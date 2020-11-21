import React, { useState } from "react";
import { connect } from "react-redux";
import "./NewTodoForm.css";

const NewTodoForm = (todos) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        placeholder="Type your new task here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button className="new-todo-button">Submit</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (state) => ({});

export default connect()(NewTodoForm);
