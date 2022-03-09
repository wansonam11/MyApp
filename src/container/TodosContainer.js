import React, { useEffect } from "react";
import TodoTemplate from "../components/todos/TodoTemplate";
import TodoInput from "../components/todos/TodoInput";
import TodoList from "../components/todos/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "../lib/customHooks";
import {
  changeInput,
  insert,
  remove,
  toggle,
  modify,
  fetchAllTodos,
} from "../modules/todo";

function TodosContainer() {
  const { todos, input } = useSelector(({ todoList }) => ({
    todos: todoList.todos,
    input: todoList.input,
  }));

  const dispatch = useDispatch();

  const [
    handleChangeInput,
    handleAdd,
    handleRemove,
    handleToggle,
    handleModify,
  ] = useActions([changeInput, insert, remove, toggle, modify], []);

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInput
        input={input}
        handleAdd={handleAdd}
        handleChangeInput={handleChangeInput}
      />
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
        handleModify={handleModify}
      />
    </TodoTemplate>
  );
}

export default TodosContainer;
