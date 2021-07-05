import axios from "axios"
import { GET_POKEMONS_ERROR, GET_POKEMONS_REQUEST, GET_POKEMONS_SUCCESS } from "../constants/GetPokemonsConstants"

const getPokemonsRequest = () => {
    return {
        type: GET_POKEMONS_REQUEST
    }
}

const getPokemonsSuccess = (Pokemons) => {
    return {
        type: GET_POKEMONS_SUCCESS,
        payload: Pokemons,
    }
}

const getPokemonsError = (error) => {
    return {
        type: GET_POKEMONS_ERROR,
        payload: error
    }
}

const get_pokemons = () => {
    return (dispatch) => {
        dispatch(getPokemonsRequest())
        axios.get(`hhttps://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`)
            .then(response => {
                dispatch(getPokemonsSuccess([response.data]))
            }).catch(error => {
                dispatch(getPokemonsError("Pokemons not found"))
            })
    }
}

export default get_pokemons