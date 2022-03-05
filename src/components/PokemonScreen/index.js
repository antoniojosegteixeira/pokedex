import React from "react";
import { usePokemon } from "../../application/hooks/usePokemon";

import Card from "../../components/Card";

export default function PokemonScreen() {
  const { pokemonList, filter } = usePokemon();

  /// Check if there's a filter
  if (pokemonList && filter && pokemonList.length > 0) {
    const filteredPokemons = pokemonList.filter((pokemon) => {
      return pokemon.types[0].type.name === filter;
    });

    return (
      <div className="screen-grid">
        {filteredPokemons.map((item) => (
          <div key={item.name}>
            <Card name={item.name} id={item.id} image={item.image} />
          </div>
        ))}
      </div>
    );
  }

  /// Default pokemon screen
  if (pokemonList && pokemonList.length > 0) {
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

  /// Loading

  return <div></div>;
}
