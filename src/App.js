import './App.css';
import React, { useState } from 'react';
import Top from './components/Top';
import Bottom from './components/Bottom';

function App() {
  const [number, setNumber] = useState(3);
  const addNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div className="container">
      <h1>최상단 화면</h1>
      <Top />
      <Bottom />
    </div>
  );
}

export default App;
