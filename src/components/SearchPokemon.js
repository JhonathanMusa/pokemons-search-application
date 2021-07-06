import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetch_pokemon from "../redux/actions/SearchActions";
import style from "./Result.module.css";

const SearchPokemon = () => {
  const [pokemonName, setPokemonName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetch_pokemon(pokemonName));
    setPokemonName("");
  };

  return (
    <div className={style.searchContainer}>
      <form onSubmit={handleSubmit}>
        <div className={style.searchBox}>
          <label htmlFor="search_pokemon"></label>
          <input
            type="text"
            placeholder="Search Pokemon..."
            className={style.input_search}
            id="search_pokemon"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
          <button className={style.btn_search}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchPokemon;
