import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ color, OnChangeColor }) {
  function handleClick() {
    const newColor = getRandomColor();
    OnChangeColor(newColor);
  }

  return (
    <div
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;
