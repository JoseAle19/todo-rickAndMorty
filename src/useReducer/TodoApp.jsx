import {  useEffect } from "react";
import { TodoList, TodoForm } from "../components";
import { useTodo } from "../hooks/useTodo";
export const TodoApp = () => {
  const { todos, todoCounterPending, todoCounterfinish, handleAddTodo, handleDeleteTodo, handleToggleTodo } =
    useTodo();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  return (
    <>
      <h1>Tareas: {todos.length}</h1>
      <h5>Tareas completadas✅: {todoCounterfinish()}</h5>
      <h5>Tareas pendientes🕕 : {todoCounterPending()}</h5>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onDoneTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar tarea nueva</h4>
          <hr />
          <TodoForm onNewTodo={handleAddTodo} />
        </div>
      </div>
    </>
  );
};
