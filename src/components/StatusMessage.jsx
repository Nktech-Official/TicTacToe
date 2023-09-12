const StatusMessage = ({ winner, gamingBoard, noMovesLeft }) => {
  const { isXNext } = gamingBoard;
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMsg = () => {
    if (winner) {
      return (
        <>
          <span className={winner == 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>{' '}
          is Winner
        </>
      );
    } else if (!winner && noMovesLeft) {
      return <span>It&#39;s a Draw</span>;
    } else {
      return (
        <>
          Next Player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>{' '}
        </>
      );
    }
  };

  return <h2 className="status-message"> {renderStatusMsg()}</h2>;
};

export default StatusMessage;
