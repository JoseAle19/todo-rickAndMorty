import { TodoItem } from "./TodoItem";

export const TodoList = ({todos, onDeleteTodo, onDoneTodo}) => {
  return (
    <>
      <ul   className="list-group m-2">
        {todos.map((todo) => (
           <TodoItem  key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onDoneTodo={onDoneTodo} />
        ))}
      </ul>
    </>
  );
};
