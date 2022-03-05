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
    const getPokemons = async () => {
      /// Get raw list of every pokemon
      const { results } = await getPokemonListRequest();
      const simplePokemonList = results;
      const updatedPokemonList = [...simplePokemonList];

      await Promise.all(
        simplePokemonList.map(async (item, i) => {
          /// Fetch single pokemon data
          const response = await getSinglePokemonRequest(item);

          // Updating simple list with types and image
          updatedPokemonList[i] = {
            id: response.id,
            name: response.name,
            types: response.types,
            image: response.sprites.front_default,
          };
        })
      );

      return updatedPokemonList;
    };

    const updatedPokemonList = await getPokemons();

    dispatch({ type: "ADD_POKEMON_LIST", payload: updatedPokemonList });
  };

  const addFilter = (filter) => {
    dispatch({ type: "ADD_POKEMON_FILTER", payload: filter });
  };

  return { pokemonList, error, filter, getPokemonList, addFilter };
}
