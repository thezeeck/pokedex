import React from "react";
import { PokemonCard } from "../card";
import { PokemonListContainer } from "./styles";

function multiplePokemon(pokemons) {
  let cards = pokemons.map(pokemon => {
    let arrayURL = pokemon.url.split("/");
    let id = arrayURL[arrayURL.length - 2];
    return (
      <PokemonCard
        key={pokemon.name}
        id={id}
        pokemon={pokemon}
      >{pokemon.name}</PokemonCard>
  )});

  return cards;
}

function singlePokemon(pokemon) {
  return <PokemonCard
    key={pokemon.name}
    id={pokemon.id}
    pokemon={pokemon}
  >{pokemon.name}</PokemonCard>
}

export const PokemonList = ({ pokemons }) => {
  return (
    <PokemonListContainer>
      {Array.isArray(pokemons) ?
        multiplePokemon(pokemons) : singlePokemon(pokemons)
      }
    </PokemonListContainer>
  )
}