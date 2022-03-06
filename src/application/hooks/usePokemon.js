import { useContext } from "react";
import { AppContext } from "../context/store";
import getPokemons from "../helpers/getPokemons";

export function usePokemon() {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { pokemonList, error, filter } = state;

  // Fetch complete pokemon list
  // Dispatch results
  const getPokemonList = async () => {
    try {
      const updatedPokemonList = await getPokemons();
      dispatch({ type: "ADD_POKEMON_LIST", payload: updatedPokemonList });
    } catch (err) {
      dispatch({ type: "ADD_ERROR", payload: err.message });
    }
  };

  const addFilter = (filter) => {
    dispatch({ type: "ADD_POKEMON_FILTER", payload: filter });
  };

  return { pokemonList, error, filter, getPokemonList, addFilter };
}
