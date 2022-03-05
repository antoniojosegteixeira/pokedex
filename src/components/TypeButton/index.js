import React from "react";
import { usePokemon } from "../../application/hooks/usePokemon";

export default function TypeButton() {
  const { filter, addFilter } = usePokemon();

  console.log(filter);

  return <button onClick={() => addFilter("grass")}>GRASS</button>;
}
