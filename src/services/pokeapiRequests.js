import axios from "axios";

// Fetch raw pokemon list
export const getPokemonListRequest = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
};

// Fetch specific pokemon info
export const getSinglePokemonRequest = (pokemon) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
};
