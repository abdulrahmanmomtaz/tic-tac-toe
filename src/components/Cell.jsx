import React from "react";

export default function Cell({ id, cell, go, setGo, cells, setCells, winningMessage }) {
  const handleClick = () => {
    if (cell !== "" || winningMessage) return;

    const newCells = [...cells];
    newCells[id] = go;
    setCells(newCells);
    setGo(go === "circle" ? "cross" : "circle");
  };

  return (
    <div
      className={`square ${cell}`}
      onClick={handleClick}
    >
      {cell === "circle" && "⭕"}
      {cell === "cross" && "❌"}
    </div>
  );
}
