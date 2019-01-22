import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../gallery-get';
import './Details.css';

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
        <div className="Details">
          <h1>{this.state.movie.name}</h1>
          <Link to="/">Link to home page</Link>
          <div className="content">
            <div className="details-child">{this.state.movie.details}</div>
            <div className="details-child">
              <img src={this.state.movie.logo}></img>
            </div>
          </div>
        </div>
      )
    }
  }

}
