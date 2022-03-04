import React, { useEffect } from "react";
import { usePokemon } from "./application/hooks/usePokemon";

function App() {
  const { getPokemonList, addFilter, pokemonList, filter, error } =
    usePokemon();

  useEffect(() => {
    if (Object.keys(pokemonList).length === 0) {
      getPokemonList();
    }
  }, [getPokemonList, pokemonList]);

  return (
    <div>
      PokeApi
      <br />
      <button onClick={() => addFilter("grass")}>GRASS</button>
      <br />
      <div>
        {pokemonList &&
          pokemonList.map((item, i) => (
            <div>
              <div>{item.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
