export const AlerTodo = () => {
  setTimeout(() => {
    return (
      <>
        <div class="alert alert-primary" role="alert">
            Esta tarea ya existe
        </div>
      </>
    );
  }, 1000);
};
