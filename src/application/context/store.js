import React, { createContext, useReducer } from "react";

// Criando context
export const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POKEMON_LIST":
      return { ...state, pokemonList: action.payload };
    default:
      return state;
  }
};

const initialState = {
  pokemonList: {},
  filter: "",
  error: "",
};

// Criando provider
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
