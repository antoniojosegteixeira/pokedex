import React from "react";
import { usePokemon } from "../../../application/hooks/usePokemon";

export default function TypeButton({ type }) {
  const { addFilter } = usePokemon();

  return (
    <button onClick={() => addFilter(type)} className={`type-button ${type}`}>
      {type}
    </button>
  );
}
