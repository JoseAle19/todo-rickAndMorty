import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
export const Pagination = () => {
  const {
    totalResults,
    totalPages,
    currentPage,
    nextPage,
    prevPage,
    nextToPage,
    prevToPage,
    goToPageSelected,
  } = useContext(CharactersContext);

  return (
    <>
      <div className="col-3 d-flex align-items-center">
        <b>
          Resultados totales: <p className="text-primary">{totalResults}</p>
        </b>
      </div>

      <div className="col-3 d-flex align-items-center">
        <b>
          Page {currentPage} de {totalPages}
        </b>
      </div>

      <div className="col-3 d-flex align-items-center">
        <b>Siguiente pagina</b>
        <select
          className="form-select w-auto m-2"
          onChange={(e) => {
            const { value } = e.target;
            goToPageSelected(value);
          }}
        >
          {[...Array(totalPages)].map((_, i) => {
            return (
              <option key={i} value={i + 1}>
                Pagina {i + 1}
              </option>
            );
          })}
        </select>
      </div>

      <div className="col-3  text-center">
        {prevPage && (
          <button
            onClick={() => {
              prevToPage(prevPage);
            }}
            className="btn btn-success mx-2"
          >
            <h6>Anterior</h6>
            {"<"}
          </button>
        )}
        {nextPage && (
          <button
            onClick={() => {
              nextToPage(nextPage);
            }}
            className="btn btn-success"
          >
            <h6>Siguiente</h6>
            {">"}
          </button>
        )}
      </div>
    </>
  );
};
