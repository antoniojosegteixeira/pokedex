import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

// Criando context
export const AppContext = createContext();

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
