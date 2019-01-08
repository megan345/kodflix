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
              <img src={ted} className="image" alt="ted-movie" />
              <div className="overlay">
                <h1>TED The Movie</h1>
              </div>
            </div>
            <div class="child">
              <img src={goodwillhunting} className="image" alt="goodwillhunting-movie" />
              <div className="overlay">
                <h1>Good Will Hunting</h1>
              </div>
            </div>
            <div class="child">
              <img src={matrix} className="image" alt="matrix-movie" />
              <div className="overlay">
                <h1>The Matrix</h1>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="child">
              <img src={hitch} className="image" alt="hitch-movie" />
              <div className="overlay">
                <h1>Hitch</h1>
              </div>
            </div>
            <div class="child">
              <img src={nottinghill} className="image" alt="nottinghill-movie" />
              <div className="overlay">
                <h1>Notting Hill</h1>
              </div>
            </div>
            <div class="child">
              <img src={casinoroyale} className="image" alt="casinoroyale-movie" />
              <div className="overlay">
                <h1>Casino Royale</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
