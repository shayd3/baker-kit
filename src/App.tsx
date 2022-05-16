import React from 'react';
import './App.css';
import Calculator from './Tools/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Baker Kit</h1>
        <pre>Tools for the average baker</pre>
      </header>
      <hr />
      <div className="Tools">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
