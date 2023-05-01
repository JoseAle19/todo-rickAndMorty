export const TodoItem = ({ todo, onDeleteTodo, onDoneTodo }) => {
  return (
    <>
      <li
        onClick={() => onDoneTodo(todo.id)}
        className={`list-group-item d-flex justify-content-between m-2 p-2 text-light  ${
          todo.done ? "bg-success" : "bg-danger"
        }`}
      >
        <span className="aling-self-center">{todo.desc}</span>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className="btn btn-danger"
        >
          Eliminar tarea
        </button>
      </li>
    </>
  );
};
