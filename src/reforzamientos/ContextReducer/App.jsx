import { updateNameAction, updateLastNameAction } from "./store/Actions";
// Dependencias

// Componenetes
import { Info } from "./Info";
// Context
import { useContext, useReducer } from "react";
import { contextUser } from "./context/ContextUser";
export const App = () => {
  const { state, dispatch } = useContext(contextUser);

  const saveUser = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <h1>useContext y useReducer</h1>
        <form onSubmit={saveUser}>
          <label>
            Nombre
            <input
              onChange={(e) => dispatch(updateNameAction(e.target.value))}
              className="form-control"
              type="text"
              value={state.name}
            />
          </label>
          <label>
            Apellido
            <input
              onChange={(e) => dispatch(updateLastNameAction(e.target.value))}
              className="form-control"
              type="text"
              value={state.lastName}
            />
          </label>
          <button className="btn btn-primary m-2">Guardar usuario</button>
        </form>

        {/* <pre>{JSON.stringify(state)}</pre> */}
      </div>
      <Info/>
    </>
  );
};
