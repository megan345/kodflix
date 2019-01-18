import React, { Component } from 'react';
import Gallery from './Gallery';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Details from './Details';
import './App.css';
import getGallery from './gallery-get';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Gallery} />
          <Route exact path="/:movieId" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;