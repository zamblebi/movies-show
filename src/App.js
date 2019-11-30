import React from 'react';
import './App.css';

import Header from './components/Header'
import Movie from './components/Movie'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Movie/>
      </header>
    </div>
  );
}

export default App;
