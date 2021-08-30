import React, { useState } from "react";
import { calculateWinner } from "./Helper";
import Board from "./Board";
import './TT.css'
const TTT = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
   
    if (winner || squares[i]) return;
   
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };


  return (
    <>
     
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <button className="bt" onClick={() => jumpTo(0)}>Go To Start</button>
        </div>
        <h3 className="h">{winner ? "Winner is : " + winner : "Next Player: " + xO}</h3>
      </div>
    </>
  );
};

export default TTT;