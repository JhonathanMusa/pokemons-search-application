import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetch_pokemon from "../redux/actions/SearchActions";


const SearchPokemon = () => {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");

  return (
    <div className="form-group">
      <label htmlFor="search_pokemon"></label>
      <input
        type="text"
        placeholder="Search..."
        className="form-control"
        id="search_pokemon"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button className="btn btn-primary btn-block mt-3" onClick={() => dispatch(fetch_pokemon(pokemonName))}>
        Search
      </button>
    </div>
  );
};

export default SearchPokemon;
