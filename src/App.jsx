import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';

import './styles.scss';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const Winner = calculateWinner(squares);

  const handleSquareClick = position => {
    if (!squares[position] && !Winner) {
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

  return (
    <div className="app">
      <StatusMessage winner={Winner} isXNext={isXNext} squares={squares} />

      <Board handleSquareClick={handleSquareClick} squares={squares} />
    </div>
  );
}

export default App;
