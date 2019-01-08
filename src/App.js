import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import casinoroyale from './Images/casinoroyale.jpg';
import ted from './Images/ted.jpg';
import goodwillhunting from './Images/goodwillhunting.jpg';
import matrix from './Images/matrix.jpg';
import hitch from './Images/hitch.jpg';
import nottinghill from './Images/nottinghill.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="form-row">
            <div class="child">
              <img src={ted} className="App-logo" alt="ted-movie" />
            </div>
            <div class="child">
              <img src={goodwillhunting} className="App-logo" alt="goodwillhunting-movie" />
            </div>
            <div class="child">
              <img src={matrix} className="App-logo" alt="matrix-movie" />
            </div>
          </div>
          <div class="form-row">
            <div class="child">
              <img src={hitch} className="App-logo" alt="hitch-movie" />
            </div>
            <div class="child">
              <img src={nottinghill} className="App-logo" alt="nottinghill-movie" />
            </div>
            <div class="child">
              <img src={casinoroyale} className="App-logo" alt="casinoroyale-movie" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
