import React from "react";
import { usePokemon } from "../../application/hooks/usePokemon";

import Card from "../../components/Card";

export default function PokemonScreen() {
  const { pokemonList, filter } = usePokemon();
  return (
    <div className="screen-grid">
      {pokemonList.length > 0 &&
        pokemonList.map((item) => (
          <div key={item.name}>
            <Card name={item.name} id={item.id} image={item.image} />
          </div>
        ))}
    </div>
  );
}
