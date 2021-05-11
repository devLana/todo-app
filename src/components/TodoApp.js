import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStorage, removeStorage, setStorage } from "../utils";
import { setTodos } from "../redux/actions/todos";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import DeleteAll from "./DeleteAll";

const TodoApp = () => {
  const [addTodo, setAddTodo] = useState(false);
  const [deleteAll, setDelete] = useState(false);
  const render = useRef(false);

  const dispatch = useDispatch();
  const stateTodos = useSelector(state => state.todos);

  useEffect(() => {
    const storageTodos = getStorage();

    if (storageTodos) dispatch(setTodos(storageTodos));
  }, [dispatch]);

  useEffect(() => {
    if (!render.current) {
      render.current = true;
    } else {
      stateTodos.length === 0 ? removeStorage() : setStorage(stateTodos);
    }
  }, [stateTodos, render]);

  const toggleAddTodo = () => {
    setAddTodo(!addTodo);
  };

  const toggleDelete = () => {
    setDelete(!deleteAll);
  };

  return (
    <div className="container">
      <div id="todo__app">
        <Navbar toggleAddTodo={toggleAddTodo} toggleDelete={toggleDelete} />
        <TodoList />
        <Footer />
        {addTodo && <AddTodo toggleAddTodo={toggleAddTodo} />}
        {deleteAll && <DeleteAll toggleDelete={toggleDelete} />}
      </div>
    </div>
  );
};

export default TodoApp;
