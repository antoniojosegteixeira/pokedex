import React, { useEffect, useState } from "react";
import { usePokemon } from "../../application/hooks/usePokemon";

import Card from "../../components/Card";

function Home() {
  const { getPokemonList, addFilter, pokemonList, filter, error } =
    usePokemon();
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

        <br />
        <button onClick={() => addFilter("grass")}>GRASS</button>
        <br />
        <h3>{loading && "loading"}</h3>
        <div className="home-card-container">
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
