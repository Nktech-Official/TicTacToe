import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import './styles.scss';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const nextPlayer = isXNext ? 'X' : 'O';
  const Winner = calculateWinner(squares);
  console.log(Winner);

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
      <h2>
        {' '}
        {Winner ? `${Winner} is  Winner` : `Next Player is ${nextPlayer}`}
      </h2>

      <Board handleSquareClick={handleSquareClick} squares={squares} />
    </div>
  );
}

export default App;
