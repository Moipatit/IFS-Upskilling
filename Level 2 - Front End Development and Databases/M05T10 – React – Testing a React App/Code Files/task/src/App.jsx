import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(2);

  // Function to decrement the count with a minimum limit
  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev)); // Prevent going below 0
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Practical Task</h1>
      <div className="card">
        <button onClick={decrement}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
