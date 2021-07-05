import {
    GET_POKEMONS_ERROR,
    GET_POKEMONS_REQUEST,
    GET_POKEMONS_SUCCESS
} from "../constants/GetPokemonsConstants";

const initialState = {
    loading: false,
    pokemons: [],
    error: ""
}

const getPokemons = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_POKEMONS_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemons: action.payload,
                error: ""
            }
        case GET_POKEMONS_ERROR:
            return {
                loading: false,
                pokemons: [],
                error: action.payload
            }

        default:
            return state
    }
}

export default getPokemons