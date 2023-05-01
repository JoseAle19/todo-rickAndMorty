import { useState } from "react";
import { userContext } from "./useContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
