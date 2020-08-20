import React, { useState } from "react";
import Button from "./Button";

const AddTodo = ({ toggleAddTodo, status }) => {
  const [todo, setTodo] = useState("");
  const [err, setErr] = useState("");

  const handleChange = e => setTodo(e.target.value);

  const handleBlur = e => {
    e.target.style.border = "2px solid #000";
  };

  const handleFocus = e => {
    e.target.style.border = "2px solid #011b65";
    setErr("");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      e.target.blur();
      submit();
    }
  };

  const submit = () => {
    const input = todo.trim();

    if (!input) {
      setErr("Enter a todo");
      return;
    }
  };

  return (
    <div id="add__todo" style={{ display: status ? "flex" : "none"}}>
      <div id="add__todo--form">
        <Button className="close" onClick={toggleAddTodo} title="close">
          &times;
        </Button>
        <div className="input--container">
          <h2>Add A New Todo</h2>
          <input
            type="text"
            value={todo}
            placeholder="Add new todo"
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyUp={handleKeyPress}
          />
          <Button className="submit" onClick={submit}>
            Add Todo
          </Button>
        </div>
        {err && <p className="err__msg">{err}</p>}
      </div>
    </div>
  );
};

export default AddTodo;
