import { useEffect, useState } from 'react';
import Moon from '../assets/img/moon.png';
import Sun from '../assets/img/sun.png';

const ToggleTheme = () => {
  const [isDark, SetIsDark] = useState(localStorage.getItem('isDark'));
  const toggleButton = e => {
    SetIsDark(`${isDark == 'false' ? 'true' : 'false'}`);
    localStorage.setItem('isDark', `${isDark == 'false' ? 'true' : 'false'}`);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode');
    if (localStorage.getItem('isDark') == undefined) {
      localStorage.setItem('isDark', `${isDark == 'false' ? 'true' : 'false'}`);
    }
    if (localStorage.getItem('isDark') == isDark) {
    }
  }, [isDark]);
  return (
    <button
      className={`theme-toggle ${isDark == 'true' ? 'toggle' : ''}`}
      onClick={toggleButton}
    >
      <img src={Moon} alt="dark mode" />
      <img src={Sun} alt="light mode" />
    </button>
  );
};

export default ToggleTheme;
