import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import Test from './test';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>
        <h1>Parent (App.jsx)</h1>
        <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'}</button>
        <Test />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;