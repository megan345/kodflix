import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      welcomeMessage: 'Hello welcome to the details page'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        welcomeMessage: 'The best is yet to come!'
      })
    }, 2000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.welcomeMessage}</h1>
        <Link to="/">Link to home page</Link>
      </div>
    )
  }

}