import React, { useEffect } from "react";
import { usePokemon } from "../../application/hooks/usePokemon";

import logo from "../../assets/images/logo.png";
import PokemonScreen from "../../components/PokemonScreen";
import FilterWrapper from "../../components/FilterWrapper";
import ErrorMessage from "../../components/ErrorMessage";

function Home() {
  const { getPokemonList, pokemonList, error } = usePokemon();

  // Fetch pokemon list
  useEffect(() => {
    const fetchList = async () => {
      await getPokemonList();
    };

    if (pokemonList && pokemonList.length === 0 && !error) {
      fetchList();
    }
  }, [pokemonList, getPokemonList, error]);

  return (
    <>
      <div className="home-wrapper">
        <div className="home-container">
          <div className="home-header">
            <img className="home-logo" alt="Pokédex" src={logo} />
          </div>
          <div className="home-content">
            <FilterWrapper />
            <ErrorMessage />
            <br />
            <PokemonScreen />
          </div>
        </div>
      </div>
      <div className="home-footer">
        <span>Built by Antônio Teixeira</span>
      </div>
    </>
  );
}

export default Home;
