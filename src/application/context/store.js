import React, { createContext, useReducer } from "react";

// Criando context
const AppContext = createContext({});

const reducer = (state, action) => {
  return state;
};

const initialState = {
  pokemonList: [],
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