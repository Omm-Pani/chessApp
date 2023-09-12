import React from "react";

export default function piece({ image, x, y }) {
  return (
    <div className="piece" style={{ backgroundImage: `url(${image})` }}></div>
  );
}
