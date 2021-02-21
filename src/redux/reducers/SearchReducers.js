import {
  FETCH_POKEMON_ERROR,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
} from "../constants/SearchConstants";

const initialState = {
  loading: false,
  pokemon: [],
  error: "",
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
        error: "",
      };
    case FETCH_POKEMON_ERROR:
      return {
        loading: false,
        pokemon: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default search;
