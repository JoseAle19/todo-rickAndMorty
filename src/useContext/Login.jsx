import { useContext } from "react";
import { userContext } from "./context/useContext";
import { useForm } from "../hooks/useForm";
const inicalState = {
  email: "",
  name: "",
}
export const Login = () => {
  const user = useContext(userContext);
  
  const { state, handleInputChangelogin } = useForm(inicalState);


  const { email, name } = state;
  return (
    <>
      <h1>Login</h1>
      <hr />
      <h1>{JSON.stringify(user)}</h1>
      <div>
        <form>
          <input
            type="text"
            placeholder="name"
            className="form-control mt-4  "
            name="name"
            onChange={(e) => handleInputChangelogin(e)}
            value={name}
          />
          <input
            type="text"
            placeholder="email"
            className="form-control mt-4  "
            name="email"
            onChange={(e) => handleInputChangelogin(e)}
            value={email}
          />
        </form>
      </div>
      <button
        onClick={() => {
          user.setUser({ name: name, email: email });
        }}
        className="btn btn-primary m-3"
      >
        Cargar usuario
      </button>
    </>
  );
};
