import React, { Component } from 'react';
import Stack from './Stack';
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
            <Stack name="Titanic" logo = {titanic}/>
            <Stack name="Jason Bourne" logo = {jasonbourne}/>
            <Stack name="Fight Club" logo = {fightclub}/>
          </div>
          <div class="form-row">
            <Stack name="Martian" logo = {martian} />
            <Stack name="Oceans 8" logo = {oceans8} />
            <Stack name="Casino Royale" logo = {casinoroyale} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
