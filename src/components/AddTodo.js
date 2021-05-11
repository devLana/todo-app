import React, { useState } from "react";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";
// import { addTodo, todosAction } from "../redux/actions";
import { addTodo } from "../redux/actions/todos";
import Button from "./Button";

// const AddTodo = ({ toggleAddTodo, dispatch }) => {
const AddTodo = ({ toggleAddTodo }) => {
  const [todo, setTodo] = useState("");
  const [err, setErr] = useState("");

  const dispatch = useDispatch();

  const handleChange = e => {
    setTodo(e.target.value);
  };

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
      setErr("Please enter a todo");
      return;
    }

    // dispatch(todosAction(input, addTodo));
    dispatch(addTodo(input));
    setTodo("");
    toggleAddTodo();
  };

  return (
    <div id="add__todo">
      <div id="add__todo__form">
        <Button
          className="close"
          onClick={toggleAddTodo}
          title="close"
          value="&times;"
        />
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
            autoFocus
          />
          <Button className="submit" onClick={submit} value="Add Todo" />
        </div>
        {err && <p className="err__msg">{err}</p>}
      </div>
    </div>
  );
};

export default AddTodo;
// export default connect()(AddTodo);
