import { combineReducers } from "redux";
import search from "./SearchReducers";
import getPokemons from "./GetPokemonsReducers"

const rootReducers = combineReducers({
  search,
  getPokemons,
});

export default rootReducers;
