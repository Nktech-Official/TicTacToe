import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';
import History from './components/History';
import './styles.scss';

const NEW_GAME = [
  {
    squares: Array(9).fill(null),
    isXNext: false,
  },
];

function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];
  const Winner = calculateWinner(gamingBoard.squares);
  const noMovesLeft = gamingBoard.squares.every(
    squareValue => squareValue !== null
  );

  const handleSquareClick = position => {
    if (!gamingBoard.squares[position] && !Winner) {
      setHistory(currentHistory => {
        const isTraversing = currentMove + 1 !== currentHistory.length;

        const lastGamingState = isTraversing
          ? currentHistory[currentMove]
          : history[history.length - 1];

        const nextSquareState = lastGamingState.squares.map(
          (squaresValue, pos) => {
            if (position === pos) {
              return lastGamingState.isXNext ? 'X' : 'O';
            }
            return squaresValue;
          }
        );
        const base = isTraversing
          ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
          : currentHistory;
        return base.concat({
          squares: nextSquareState,
          isXNext: !lastGamingState.isXNext,
        });
      });
      setCurrentMove(move => move + 1);
    }
  };
  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <StatusMessage winner={Winner} gamingBoard={gamingBoard} />

      <Board
        handleSquareClick={handleSquareClick}
        squares={gamingBoard.squares}
      />
      <button
        type="button"
        className={`btn-reset ${Winner || noMovesLeft ? 'active' : ''}`}
        onClick={() => {
          setCurrentMove(0);
          setHistory(NEW_GAME);
        }}
      >
        Start New Game
      </button>
      <h2>Current Game History</h2>
      <History
        history={history}
        onClick={moveTo}
        noMovesLeft={noMovesLeft}
        currentMove={currentMove}
      />
    </div>
  );
}

export default App;
