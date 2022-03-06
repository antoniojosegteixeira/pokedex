import axios from "axios";

// Fetch raw pokemon data
export const getPokemonListRequest = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
};

// Fetch information for a single pokemon
export const getSinglePokemonRequest = async (pokemon) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
};
