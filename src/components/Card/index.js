import React from "react";

export default function Card({ name, id, image }) {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt="" />
      </div>

      <div className="card-info">
        <span className="card-name">{name}</span>
      </div>
    </div>
  );
}
