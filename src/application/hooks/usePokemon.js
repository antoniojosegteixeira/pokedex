import { useContext } from "react";
import { AppContext } from "../context/store";
import {
  getPokemonListRequest,
  getSinglePokemonRequest,
} from "../../services/pokeapiRequests";

export function usePokemon() {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { pokemonList, error, filter } = state;

  const getPokemonList = async () => {
    const listResponse = await getPokemonListRequest();
    const simplePokemonList = listResponse.results;
    const updatedPokemonList = { ...simplePokemonList };

    simplePokemonList.map(async (item, i) => {
      /// Fetch single pokemon data
      const response = await getSinglePokemonRequest(item);

      // Updating simple list with types and image
      updatedPokemonList[i] = {
        ...updatedPokemonList[i],
        types: response.types,
        image: response.sprites.front_default,
      };
    });

    dispatch({ type: "ADD_POKEMON_LIST", payload: updatedPokemonList });
  };

  const addFilter = (filter) => {
    dispatch({ type: "ADD_POKEMON_FILTER", payload: filter });
  };

  return { pokemonList, error, filter, getPokemonList, addFilter };
}
