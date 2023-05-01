// import useForm from "../hooks/useForm";

import { useForm } from "../hooks/useForm";
export const TodoForm = ({ onNewTodo }) => {
  const { description, handleInputChange } = useForm({
    desc: "",
  });

  const { desc } = description;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (desc.length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: desc,
      done: false,
    };
    onNewTodo(newTodo);
  };

  const todosSaveds = JSON.parse(localStorage.getItem("todos"));
  const todoExist = todosSaveds.find((todo) => todo.desc === desc);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="form-control"
          name="desc"
          value={desc}
          onChange={handleInputChange}
        />
        <button disabled={todoExist}  type="submit" className="btn btn-outline-primary mt-2 ">
          Agregar tarea
        </button>
      </form>
    </>
  );
};
