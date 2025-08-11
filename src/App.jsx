import React, { useEffect, useState } from "react";
import Cell from "./components/Cell";


const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function App() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("");

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");

      if (circleWins) {
        setWinningMessage("⭕ Circle Wins!");
      } else if (crossWins) {
        setWinningMessage("❌ Cross Wins!");
      }
    });
  }, [cells]);

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winningMessage) {
      setWinningMessage("😐 It's a Draw!");
    }
  }, [cells, winningMessage]);

  const resetGame = () => {
    setCells(Array(9).fill(""));
    setGo("circle");
    setWinningMessage("");
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <div className={`message ${winningMessage ? "winner" : ""}`}>
        {winningMessage || `🕹️ It's ${go.toUpperCase()}'s turn`}
      </div>
      {winningMessage && (
        <button className="reset-btn" onClick={resetGame}>
          🔄 Play Again
        </button>
      )}
    </div>
  );
}
