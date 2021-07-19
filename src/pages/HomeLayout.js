import React from "react";
import { PokemonList } from "../components/pokemonList";
import { Pagination } from "../components/pagination";
import { LIMIT } from "../constants";
import { Error } from "../components/error";
import { Loading } from "../components/loading";

export const HomeLayout = ({loading, count, pokemons, currentPage, error, setCurrentPage}) => {
  if(loading) {
    return <Loading />;
  }

  if(error) {
    return <Error />
  }

  return (
    <React.Fragment>
      <PokemonList  pokemons={pokemons} />
      { count > LIMIT && <Pagination url={currentPage} setCurrentPage={setCurrentPage} count={count} /> }
  </React.Fragment>
  )
};