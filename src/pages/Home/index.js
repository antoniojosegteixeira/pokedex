import React, { useEffect, useState } from "react";
import { usePokemon } from "../../application/hooks/usePokemon";

import logo from "../../assets/images/logo.png";
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
        <div className="home-header">
          <img className="home-logo" alt="Pokédex" src={logo} />
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
