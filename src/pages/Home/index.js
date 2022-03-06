import React, { useEffect, useState } from "react";
import { usePokemon } from "../../application/hooks/usePokemon";

import PokemonScreen from "../../components/PokemonScreen";
import FilterWrapper from "../../components/FilterWrapper";

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
        <div className="home-content">
          <FilterWrapper />
          <br />
          <h3>{loading && "loading"}</h3>
          <PokemonScreen />
        </div>
      </div>
    </div>
  );
}

export default Home;
