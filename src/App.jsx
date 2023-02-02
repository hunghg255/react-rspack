import React, { useEffect } from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { DatePicker, message } from 'antd';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    message.success('Hello asd');
  }, []);

  return (
    <div className='App'>
      <DatePicker />
      <div>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Rspack + React asdas asdasd</h1>
      ádasda
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Rspack and React logos to learn more
      </p>
    </div>
  );
}

export default App;
