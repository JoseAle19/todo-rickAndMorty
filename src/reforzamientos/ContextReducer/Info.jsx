import { useContext } from "react";
import { contextUser } from "./context/ContextUser";
import { updateLastNameAction, updateNameAction } from "./store/Actions";

export const Info = () => {
  const { state, dispatch } = useContext(contextUser);

  return (
    <div className="m-5">
      <h1 className="text-center alert alert-success m-2">Informacion child</h1>
      <label >
        Cambiar nombre desde child
      <input
        className="form-control"
        type="text"
        placeholder="Nombre"
        value={state.name}
        onChange={(e) =>
          dispatch( updateNameAction(e.target.value)  )
        }
      />
      </label>
    </div>
  );
};
