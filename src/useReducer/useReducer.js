export const TodoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] add todo":
      return [...initialState, action.payload];

    case "[TODO] delete todo":
      //Esto regresa un nnuevo areglo sin el elemento que se quiere eliminar
      //en este caso es el id dele elemeto
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] toggle todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
