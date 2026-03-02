import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Test = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="box">
      <h2>Child (Test.jsx)</h2>
      <p>Current Vibe: <strong>{theme.toUpperCase()}</strong></p>
      <button onClick={toggleTheme}>Toggle via Child</button>
    </div>
  );
};

export default Test;