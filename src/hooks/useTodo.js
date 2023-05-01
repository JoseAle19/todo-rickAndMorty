import { useReducer } from "react";
import { TodoReducer } from "../useReducer/useReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};
export const useTodo = () => {
  
  const [todos, dispatch] = useReducer(TodoReducer, [], init);

  const handleAddTodo = (newTodo) => {
    const action = {
      type: "[TODO] add todo",
      payload: newTodo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (idTodo) => {
    const action = {
      type: "[TODO] delete todo",
      payload: idTodo,
    };

    dispatch(action);
  };

  const handleToggleTodo = (idTodo) => {
    dispatch({
      type: "[TODO] toggle todo",
      payload: idTodo,
    });
  };

  const todoCounterPending = () => {
    return todos.filter((todo) => !todo.done).length;
  };
  const todoCounterfinish = () => {
    return todos.filter((todo) => todo.done).length;
  };
  return {
    todos,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todoCounterPending,
    todoCounterfinish
  };
};
