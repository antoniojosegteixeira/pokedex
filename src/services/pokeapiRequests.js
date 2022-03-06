import axios from "axios";

export const getPokemonListRequest = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
};

export const getSinglePokemonRequest = async (pokemon) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
};
