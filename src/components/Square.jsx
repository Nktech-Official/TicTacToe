const Square = ({ value, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      <span className={value == 'X' ? 'text-green' : 'text-orange'}>
        {' '}
        {value}
      </span>
    </button>
  );
};

export default Square;
