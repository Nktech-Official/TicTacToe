const History = ({ history, onClick, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((curr, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                onClick={() => {
                  onClick(index);
                }}
                className={`btn-move ${currentMove === index ? 'active' : ''}`}
              >
                {index === 0 ? `Go to Game Start` : `Go to Move #${index}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
