import { useState, useMemo } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) sum += i;
    return sum;
  }, []); 

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count} | Math: {expensiveValue}
    </button>
  );
}