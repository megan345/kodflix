import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moviecover from './moviecover.jpg';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Hello It's the first day! <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div className="App">
          <div class="container">
            <div class="form-row">
              <div class="child">Black Mirror</div>
              <div class="child">Breaking Bad</div>
              <div class="child">Death Note</div>
            </div>
            <div class="form-row">
              <div class="child">Game of Thrones</div>
              <div class="child">The Walking Dead</div>
              <div class="child">The Wire</div>
            </div>
         </div>

      </div>
    );
  }
}

export default App;
