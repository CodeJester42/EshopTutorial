import React from 'react'
import LightButton from '../../images/light-mode-button.png';
import DarkButton from '../../images/dark-mode-button.png';

const DarkMode = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem('theme') ? 
        localStorage.getItem('theme') : 'light');

    const element = document.documentElement;
    console.log(element);

    // set theme to localStorage and html element
    React.useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
    })

  return (
    <div className='relative'>
        <img 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            src={LightButton} 
            alt='light mode button'
            className={`w-12 cursor-pointer absolute right-0 z-10
            ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`} 
        />
        <img 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            src={DarkButton} 
            alt='dark mode button'
            className={`w-12 cursor-pointer`} 
        />
    </div>
  )
}

export default DarkMode
