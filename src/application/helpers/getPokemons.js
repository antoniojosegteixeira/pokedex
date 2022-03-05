import {
  getPokemonListRequest,
  getSinglePokemonRequest,
} from "../../services/pokeapiRequests";

const getPokemons = async () => {
  /// Get raw list of every pokemon
  const { data } = await getPokemonListRequest();
  const simplePokemonList = data.results;
  const updatedPokemonList = [...simplePokemonList];

  await Promise.all(
    simplePokemonList.map(async (item, i) => {
      /// Fetch single pokemon data
      const response = await getSinglePokemonRequest(item.name);
      const pokemonData = response.data;

      // Updating simple list with types and image
      updatedPokemonList[i] = {
        id: pokemonData.id,
        name: pokemonData.name,
        types: pokemonData.types,
        image: pokemonData.sprites.front_default,
      };
    })
  );

  return updatedPokemonList;
};

export default getPokemons;
