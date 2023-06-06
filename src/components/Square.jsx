const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className={`square ${isWinningSquare ? 'winning' : null}`}
      onClick={onClick}
    >
      <span className={value == 'X' ? 'text-green' : 'text-orange'}>
        {' '}
        {value}
      </span>
    </button>
  );
};

export default Square;
