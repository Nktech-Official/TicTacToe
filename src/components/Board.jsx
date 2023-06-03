import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const handleSquareClick = position => {
    if (!squares[position]) {
      setSquares(currentSquares => {
        return currentSquares.map((squaresValue, pos) => {
          if (position === pos) {
            return isXNext ? 'X' : 'O';
          }
          return squaresValue;
        });
      });
      setIsXNext(isXNextCurrent => !isXNextCurrent);
    }
  };

  const renderSquare = pos => {
    return (
      <Square value={squares[pos]} onClick={() => handleSquareClick(pos)} />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
