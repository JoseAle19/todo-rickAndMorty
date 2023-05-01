//ependencias
import { useContext } from "react";
// Context
// Componentes
import { CharactersContext } from "../context/CharactersContext";
import { Pagination } from "./Pagination";
export const Characters = () => {
  const {characters} = useContext(CharactersContext);

  return (
    <div className="row">
        <Pagination />
      {characters.map((character) => {
        const { name, status, species, created, image} = character;
        return (
          <div key={created} className="col-3 mt-3">
            <div className={`card mb-3  ${status==='Alive' && 'bg-success'} ${status==='Dead' && 'bg-danger'} ${status==='unknown' && 'bg-info'}`}  >
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nombre: {name}</h5>
                <p className="card-text">Estado: {status} </p>
                <p className="card-text">Especie: {species} </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
