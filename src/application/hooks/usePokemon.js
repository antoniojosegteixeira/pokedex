import { useContext } from "react";
import { AppContext } from "../context/store";
import { getPokemonListRequest } from "../../services/pokeapiRequests";

export function usePokemon() {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { pokemonList, error, filter } = state;

  const getPokemonList = async () => {
    const pokemonList = await getPokemonListRequest();
    dispatch({ type: "ADD_POKEMON_LIST", payload: pokemonList.results });
  };

  const addFilter = (filter) => {
    dispatch({ type: "ADD_POKEMON_FILTER", payload: filter });
  };

  return { pokemonList, error, filter, getPokemonList, addFilter };
}
