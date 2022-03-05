import { pokemonList, singlePokemon } from "../utils/mockResponse";

export const getPokemonListRequest = () => {
  return new Promise((resolve, reject) => {
    const response = pokemonList;

    setTimeout(() => {
      if (response) {
        resolve(response);
      } else {
        reject({ message: "Error" });
      }
    }, 1500);
  });
};

export const getSinglePokemonRequest = () => {
  return new Promise((resolve, reject) => {
    const response = singlePokemon;

    setTimeout(() => {
      if (response) {
        resolve(response);
      } else {
        reject({ message: "Error" });
      }
    }, 1500);
  });
};
