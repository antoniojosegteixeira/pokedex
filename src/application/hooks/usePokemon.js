import { useContext } from "react";
import { AppContext } from "./application/context/store";

export function usePokemon() {
  const context = useContext(AppContext);
  const { state, dispatch } = context;

  return {};
}
