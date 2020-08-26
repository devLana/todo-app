import React from "react";
import { connect } from "react-redux";
import { deleteAll } from "../redux/actions";
import Button from "./Button";

const DeleteAll = ({ dispatch, toggleDelete }) => {
  const deleteAllTodos = () => {
    dispatch(deleteAll());
    toggleDelete();
  };

  return (
    <div id="delete__all">
      <div id="delete__all--container">
        <h2>Delete All Todos</h2>
        <p>Are you sure you want to delete all todos?</p>
        <div className="delete__ctrl__btns">
          <Button
            className="delete__all"
            onClick={deleteAllTodos}
            value="Delete"
          />
          <Button
            className="cancel__delete__all"
            onClick={toggleDelete}
            value="Cancel"
          />
        </div>
      </div>
    </div>
  );
};

export default connect()(DeleteAll);
