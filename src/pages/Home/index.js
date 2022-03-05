import React, { useEffect, useState } from "react";
import { usePokemon } from "../../application/hooks/usePokemon";
import types from "../../utils/pokemonTypesArray";

import Card from "../../components/Card";
import TypeButton from "../../components/TypeButton";

function Home() {
  const { getPokemonList, pokemonList, filter, error } = usePokemon();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      await getPokemonList();
      setLoading(false);
    };

    if (pokemonList && pokemonList.length === 0) {
      setLoading(true);
      fetchList();
    }
  }, [pokemonList, getPokemonList, loading]);

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-title-container">
          <h1 className="home-main-title">PokéApi</h1>
        </div>

        <div>
          {types && types.map((type) => <TypeButton type={type} key={type} />)}
        </div>
        <br />
        <h3>{loading && "loading"}</h3>
        <div className="home-card-grid">
          {pokemonList.length > 0 &&
            pokemonList.map((item) => (
              <div key={item.name}>
                <Card name={item.name} id={item.id} image={item.image} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
