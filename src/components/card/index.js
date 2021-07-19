import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../constants";
import { CardContainer } from "./styles";
import { Content } from "./content";
import { Loading } from "../loading";
import { Error } from "../error";

function usePokemonData(id) {
  const [ pokemon, setPokemon ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    const pokemonData = axios.get(`${URL}/${id}`);
    pokemonData.then(response => {
      setPokemon(response.data);
      setLoading(false);
    })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.log(error);
      })
    
  }, [])

  return { pokemon, loading, error }
}



export const PokemonCard = (props) => {
  const [ showModal, setShowModal ] = useState(false);
  const { pokemon, loading, error } = usePokemonData(props.id);

  if(loading) {
    return <CardContainer><Loading /></CardContainer>
  }

  if(error) {
    return <CardContainer><Error /></CardContainer>
  }

  return (
    <CardContainer>
      {pokemon && Content(pokemon, showModal, setShowModal)}
    </CardContainer>
  )
};