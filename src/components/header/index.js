import React from "react";
import { HeaderContainer, Search, ClearSearchButton } from "./styles";
import SearchIcon from "../../img/search.svg";
import { URL, LIMIT } from "../../constants";
import CloseIcon from "../../img/close.svg";

export const Header = ({ setCurrentPage, setSearch, search }) => {
  
  const searchPokemon = event => {
    event.preventDefault();
    if(search) {
      setCurrentPage(`${URL}/${search}`);
    } else {
      setCurrentPage(`${URL}?limit=${LIMIT}&offset=0`);
    }
  }

  function clearSearch() {
    setSearch("");
    setCurrentPage(`${URL}?limit=${LIMIT}&offset=0`);
  }

  return (
    <HeaderContainer>
      <figure>
        <img alt="Pokemon" src={require(`../../img/logo-pokemon.png`).default} />
      </figure>
      <Search>
        <form onSubmit={searchPokemon}>
          <label>
            <img alt="Search by keywords..." src={SearchIcon} />
            <input type="text" placeholder="Search by keywords..." value={search} onChange={e => setSearch(e.target.value)} />
          </label>
        </form>
        {search &&
          <ClearSearchButton onClick={e => clearSearch("")}>
            <img src={CloseIcon} alt="Close" />
          </ClearSearchButton>}
      </Search>
    </HeaderContainer>
  )
};