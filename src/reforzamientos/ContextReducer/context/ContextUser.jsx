import { createContext, useReducer } from "react";
import { reducerUser } from "../store/reducerUser";

export const contextUser = createContext();

export const ProviderContextUser = ({ children }) => {

  
  const [state, dispatch] = useReducer(reducerUser, {
    name: "",
    lastName: "",
    age: "",
  });

  return (
    <contextUser.Provider
      value = {{state, dispatch}}
    >
      {children}
    </contextUser.Provider>
  );
};
