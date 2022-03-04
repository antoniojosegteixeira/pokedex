import React, { useEffect } from "react";
import { usePokemon } from "./application/hooks/usePokemon";

function App() {
  const { pokemonList, getPokemonList } = usePokemon();

  useEffect(() => {
    if (Object.keys(pokemonList).length === 0) {
      getPokemonList();
    }
  }, [getPokemonList, pokemonList]);

  console.log(pokemonList);

  return <div>PokeApi</div>;
}

export default App;
