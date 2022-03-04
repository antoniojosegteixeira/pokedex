import { useContext } from "react";
import { AppContext } from "../context/store";
import { getPokemonListRequest } from "../../services/pokeapiRequests";

export function usePokemon() {
  const context = useContext(AppContext);
  const { state, dispatch } = context;

  const getPokemonList = async () => {
    const pokemonList = await getPokemonListRequest();
    dispatch({ type: "ADD_POKEMON_LIST", payload: pokemonList.results });
  };

  return { getPokemonList };
}
