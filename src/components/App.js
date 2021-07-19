import React, { useState, useEffect } from "react";
import axios from "axios";
import { LIMIT } from "../constants";
import { Home } from "../pages/Home";

export const App = () => {
  const [ pokemons, setPokemon ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=0`);
  const [ loading, setLoading ] = useState(true);
  const [ count, setCount] = useState(0);
  const [ search, setSearch] = useState("");
  const [ error, setError ] = useState(null)
  
  useEffect(() => {
    setLoading(true);
    axios.get(currentPage)
      .then(res => {
        setPokemon(res.data.results ? res.data.results : res.data);
        setCount(res.data.count ? res.data.count : 0);
        setLoading(false);
        setError(null);
        if(res.data.results) {
          setSearch("");
        }
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <Home
      pokemons={pokemons}
      loading={loading}
      count={count}
      setSearch={setSearch}
      search={search}
      error={error}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
    />
  );
}
