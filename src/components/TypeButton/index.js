import React from "react";
import { usePokemon } from "../../application/hooks/usePokemon";

export default function TypeButton({ type }) {
  const { filter, addFilter } = usePokemon();

  return <button onClick={() => addFilter(type)}>{type}</button>;
}
