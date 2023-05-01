import { Characters } from "./components/Characters";
import { CharactersContextProvider } from "./context/CharactersContext";

export const App = () => {
  return (
    <div className="container">
      <h2 className="alert alert-success text-center ">Rick And Morty App</h2>
      <hr />
      <CharactersContextProvider>
        <Characters></Characters>
      </CharactersContextProvider>
    </div>
  );
};
