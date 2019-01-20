import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from './gallery-get';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = getGallery().find((mov) => movieId === mov.id);
    this.setState({ movie });
  }

  render() {
    if (this.state.movie === undefined) {
      return <Redirect to="/not-found" />;
    } else {
      return (
        <div>
          <h1>{this.state.movie.name}</h1>
          <Link to="/">Link to home page</Link>
        </div>
      )
    }
  }

}
