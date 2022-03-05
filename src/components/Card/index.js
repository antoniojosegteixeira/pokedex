import React from "react";

export default function Card({ name, id, image }) {
  return (
    <div className="card">
      <img src={image} alt="" />
      {name}
    </div>
  );
}
