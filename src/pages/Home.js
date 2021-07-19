import React from "react";
import { Header } from "../components/header";
import { HomeLayout } from "./HomeLayout";

export const Home = ({setCurrentPage, search, setSearch, loading, count, pokemons, currentPage, error}) => (
  <React.Fragment>
    <Header setCurrentPage={setCurrentPage} search={search} setSearch={setSearch}/>
    <HomeLayout 
      setCurrentPage={setCurrentPage}
      loading={loading}
      count={count}
      pokemons={pokemons}
      currentPage={currentPage}
      error={error}
    />
  </React.Fragment>
);