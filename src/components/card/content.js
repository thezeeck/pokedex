import React from "react";
import { TypeContainer, TypeItem, BGColor, CloseButton } from "./styles";
import { PokemonModal } from "./pokemonModal";
import CloseIcon from "../../img/close.svg";

export const Content = (pokemon, showModal, setShowModal) => {
  const id = pokemon.id < 10 ? `00${pokemon.id}` : pokemon.id < 100 ? `0${pokemon.id}` : pokemon.id;

  return (
    <React.Fragment>
      <BGColor typeColor={pokemon.types} onClick={() => {setShowModal(true)}}>
        <figure>
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        </figure>
        <strong>{pokemon.name}</strong><br />
        <TypeContainer>
          {pokemon.types.map(type => {
            return (<TypeItem key={pokemon.id + type.type.name} typeColor={type.type.name} className={type.type.name}>{type.type.name}</TypeItem>)
          })}
        </TypeContainer>
        <span>#{id}</span>
      </BGColor>
      { showModal && 
        <PokemonModal pokemon={pokemon} id={id}>
          <CloseButton onClick={() => { setShowModal(false) }}>
            <img src={CloseIcon} alt="Close" />
          </CloseButton>
        </PokemonModal> }
    </React.Fragment>
  )
}