import Moon from '../assets/img/moon.png';
import Sun from '../assets/img/sun.png';

const ToggleTheme = () => {
  return (
    <button
      className="theme-toggle"
      onClick={e => {
        e.target.classList.toggle('toggle');
        document.body.classList.toggle('dark-mode');
      }}
    >
      <img src={Moon} alt="dark mode" />
      <img src={Sun} alt="light mode" />
    </button>
  );
};

export default ToggleTheme;
