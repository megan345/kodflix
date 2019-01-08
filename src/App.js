import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import casinoroyale from './Images/casinoroyale.jpg';
import titanic from './Images/titanic.jpg';
import jasonbourne from './Images/jasonbourne.jpg';
import fightclub from './Images/fightclub.jpg';
import martian from './Images/martian.jpg';
import oceans8 from './Images/oceans8.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="form-row">
            <div class="child">
              <img src={titanic} className="image" alt="ted-movie" />
              <div className="overlay">
                <h1>Titanic</h1>
              </div>
            </div>
            <div class="child">
              <img src={jasonbourne} className="image" alt="jasonbourne" />
              <div className="overlay">
                <h1>Good Will Hunting</h1>
              </div>
            </div>
            <div class="child">
              <img src={fightclub} className="image" alt="fightclub" />
              <div className="overlay">
                <h1>The Matrix</h1>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="child">
              <img src={martian} className="image" alt="martian" />
              <div className="overlay">
                <h1>Hitch</h1>
              </div>
            </div>
            <div class="child">
              <img src={oceans8} className="image" alt="nottinghill-movie" />
              <div className="overlay">
                <h1>Oceans 8</h1>
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
