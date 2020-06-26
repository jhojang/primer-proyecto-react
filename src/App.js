import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.jsx';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Había una vez una iguana con una ruana de lana
          </p>
          <a className="App-link" href="">Enlace</a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}


export default App;
