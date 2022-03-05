import React, { useEffect, useState } from "react";
import { usePokemon } from "../../application/hooks/usePokemon";

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
    <div className="page-wrapper">
      <div className="container">
        <div className="title-container">
          <h1 className="main-title">PokéApi</h1>
        </div>

        <br />
        <button onClick={() => addFilter("grass")}>GRASS</button>
        <br />
        <h3>{loading && "loading"}</h3>
        <div>
          {pokemonList.length > 0 &&
            pokemonList.map((item) => (
              <div key={item.name}>
                <img src={item.image} alt="" />
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
