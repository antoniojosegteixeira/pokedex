import React from "react";
import { usePokemon } from "../../application/hooks/usePokemon";
import types from "../../utils/pokemonTypesArray";

import TypeButton from "./TypeButton";

export default function FilterWrapper() {
  const { addFilter } = usePokemon();

  return (
    <div className="filter-wrapper">
      {types && types.map((type) => <TypeButton type={type} key={type} />)}
      <button onClick={() => addFilter("")} className={"type-button reset"}>
        Reset
      </button>
    </div>
  );
}
