import Axios from "axios";
import {
  FETCH_POKEMON_ERROR,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
} from "../constants/SearchConstants";

const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};

const fetchPokemonSuccess = (Pokemon) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: Pokemon,
  };
};

const fetchPokemonError = (error) => {
  return {
    type: FETCH_POKEMON_ERROR,
    payload: error,
  };
};

const fetch_pokemon = (value) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((response) => {
        dispatch(fetchPokemonSuccess([response.data]));
      })
      .catch((error) => {
        dispatch(fetchPokemonError("Pokemon Not found"));
      });
  };
};

export default fetch_pokemon;
