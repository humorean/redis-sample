/**
 * Create a unordered list using React that lists the top 5 exchanges by volume of currency type Bitcoin (BTC) in
 * ascending order given the api endpoint:
 *   http://localhost:3334/volume
 * 
 * Work the way you are most comfortable and treat this as an everyday work task. You are allowed to ask questions,
 * look up documentation and search for answers.
 */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Top 5 Exchanges by BTC Volume</h1>
        </header>

        {/* list goes here */}

      </div>
    );
  }
}

export default App;
