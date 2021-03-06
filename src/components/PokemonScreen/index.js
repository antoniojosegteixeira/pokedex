import React from "react";
import { usePokemon } from "../../application/hooks/usePokemon";

import Card from "../Card";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

export default function PokemonScreen() {
  const { pokemonList, filter, error } = usePokemon();

  /// Check if there's a filter
  if (pokemonList && filter && pokemonList.length > 0) {
    const filteredPokemons = pokemonList.filter((pokemon) => {
      return pokemon.types[0].type.name === filter;
    });

    if (filteredPokemons.length > 0) {
      return (
        <div className="screen-grid">
          {filteredPokemons.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              id={item.id}
              image={item.image}
              types={item.types}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="screen-empty">
          <p className="screen-empty-message">No Pokémons!</p>
        </div>
      );
    }
  }

  /// Default pokemon screen
  if (pokemonList && pokemonList.length > 0) {
    return (
      <div className="screen-grid">
        {pokemonList.length > 0 &&
          pokemonList.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              id={item.id}
              image={item.image}
              types={item.types}
            />
          ))}
      </div>
    );
  }

  /// Loading and error container
  return (
    <div className="screen-empty">
      {error ? <ErrorMessage error={error} /> : <Spinner />}
    </div>
  );
}
