import { createContext, useState, useEffect } from "react";
import axios from "axios";

const URL = "https://rickandmortyapi.com/api/character";

export const CharactersContext = createContext();

export const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        const { info, results } = res.data;
        setCharacters(results);
        setTotalResults(info.count);
        setTotalPages(info.pages);
        setNextPage(info.next);
        setPrevPage(info.prev);
      })
      .catch((err) => console.log(err));
  }, []);

  const nextToPage = (page) => {
    axios.get(page).then((res) => {
      const { info, results } = res.data;
      setCharacters(results);
      setNextPage(info.next);
      setPrevPage(info.prev);
    });
  };

  const prevToPage = (page) => {
    axios.get(page).then((res) => {
      const { info, results } = res.data;
      setCharacters(results);
      setNextPage(info.next);
      setPrevPage(info.prev);
    });
  };

  const goToPageSelected = (page) => {
    axios.get(`${URL}?page=${page}`).then((res) => {
      const { info, results } = res.data;
      setCharacters(results);
      setNextPage(info.next);
      setPrevPage(info.prev);
    });
  };

  useEffect(() => {
    if (nextPage) {
      const page = nextPage.split("page=")[1];
      setCurrentPage(page - 1);
    }
  }, [nextPage, prevPage]);

  const dataContext = {
    characters,
    totalResults,
    totalPages,
    nextPage,
    prevPage,
    currentPage,
    nextToPage,
    prevToPage,
    goToPageSelected,
  };

  return (
    <CharactersContext.Provider value={dataContext}>
      {children}
    </CharactersContext.Provider>
  );
};
