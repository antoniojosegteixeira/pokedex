import { pokemonList } from "../utils/mockResponse";

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
