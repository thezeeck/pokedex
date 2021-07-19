import React, { useState, useEffect } from "react";
import { ModalPortal } from "../modal";
import { Chart } from "../chart";
import { ModalGrid, TypeItem, TypeContainer, ModalTitle, TextSpecies, Statics } from "./styles";
import { URL } from "../../constants";
import axios from "axios";
import { Loading } from "../loading";
import { Error } from "../error";

export const PokemonModal = ({pokemon, children, id}) => {
  const [ species, setSpecies ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    const pokemonData = axios.get(`${URL}-species/${pokemon.id}/`);
    pokemonData.then(response => {
      let text = response.data.flavor_text_entries.filter(entrie => entrie.language.name === "en");
      setSpecies(text);
      setLoading(false);
    })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.log(error);
      })
    
  }, []);

  if(loading) {
    return <ModalPortal><Loading /></ModalPortal>
  }

  if(error) {
    return (
      <ModalPortal>
        <section>
          <Error />
          { children }
        </section>
      </ModalPortal>
    )
  }

  return (
    <ModalPortal>
      <section>
        { children }
        <ModalGrid>
          <li>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </li>
          <li>
            <span>#{id}</span>
            <ModalTitle>{pokemon.name}</ModalTitle>
            <TypeContainer>
              {pokemon.types.map(type => {
                return (<TypeItem key={pokemon.id + type.type.name} typeColor={type.type.name} className={type.type.name}>{type.type.name}</TypeItem>)
              })}
            </TypeContainer>
          </li>
          <li>
            <span><strong>Height:</strong> {pokemon.height}m</span><br />
            <span><strong>Weight:</strong> {pokemon.height}kg</span>
          </li>
        </ModalGrid>
        <TextSpecies>
          { species && species[Math.floor(Math.random() * (species.length - 1))].flavor_text}
        </TextSpecies>
        <Statics><span>Statics</span></Statics>
        <Chart pokemonStats={pokemon.stats} />
      </section>
    </ModalPortal>
  )
}