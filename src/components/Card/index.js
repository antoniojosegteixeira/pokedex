import React from "react";

export default function Card({ name, id, image, types }) {
  console.log(types);

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt="" />
      </div>

      <div className="card-info">
        <span className="card-name">{name}</span>
        <div className="card-type-wrapper">
          {types.map(({ type }) => (
            <div
              className={`card-type ${type.name}`}
              key={`${type.name} ${id}`}
            >
              {type.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
