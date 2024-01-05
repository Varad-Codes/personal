import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';


const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = () => {
    setDarkMode(!darkMode); // Toggle darkMode state
    console.log(darkMode);
    const main = document.getElementById("root")

    if (!darkMode) {
      main?.classList.remove("light")
      main?.classList.add("dark")
    } else {
      main?.classList.remove("dark")
      main?.classList.add("light")
    }
  };

  return (
    <div className='justify-center content-center align-middle nav-el'>
      <button onClick={handleThemeChange} className='flex justify-center content-center align-middle'>
        {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
