import { useContext } from "react";
import { userContext } from "./context/useContext";

export const About = () => {
  const { user } = useContext(userContext);

  return (
    <>
      <h1>Hola de nuevo: {!user ? 'Sin usuario registrado': user?.name}</h1>
    </>
  );
};
