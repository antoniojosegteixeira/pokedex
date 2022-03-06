export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POKEMON_LIST":
      return { ...state, pokemonList: action.payload };
    case "ADD_POKEMON_FILTER":
      return { ...state, filter: action.payload };
    case "ADD_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
