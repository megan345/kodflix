import React, { Component } from 'react';
import Gallery from './Gallery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Details from './Details/Details';
import './App.css';
import getGallery from './gallery-get';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/:movieId" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;