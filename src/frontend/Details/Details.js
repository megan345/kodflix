import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import getGallery from '../gallery-get';
import './Details.css';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }


  componentDidMount() {
    // let movieId = this.props.match.params.movieId;
    // let movie = getGallery().find((mov) => movieId === mov.id);
    // this.setState({ movie });
  

  fetch('/rest/shows')
      .then(function(response) {
        console.log(response.json());
        return response.json();
      })
      .then(galleries => {
        let galleryImageId = this.props.match.params.movieId;
        let movie = galleries.find(show => show.id === galleryImageId);
        this.setState({ movie: movie });
    });
  }
  render() {
    // let movie = this.state.movie;
    if (this.state.movie === undefined) {
      return <Redirect to="/not-found" />;
    } else if (this.state.movie) {
      return (
        <div className="Details">
          <h1>{this.state.movie.name}</h1>
          <Link to="/">Link to home page</Link>
          <div className="content">
            <div className="details-child">{this.state.movie.details}</div>
            <div className="details-child">
              <img src={this.state.movie.logo} alt="Movie"></img>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

}
