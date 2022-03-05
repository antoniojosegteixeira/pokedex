import React from "react";

export default function Card({ pokemonData }) {
  const { name, id, image } = pokemonData;
  return (
    <div className="card">
      <img src={image} alt="" />
      {name}
    </div>
  );
}
