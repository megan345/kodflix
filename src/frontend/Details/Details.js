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
    fetch('/rest/shows')
        .then(response => {
          return response.json();
        })
        .then(gallery => {
          let galleryImageId = this.props.match.params.movieId;
          let movie = gallery.find(show => show.id === galleryImageId);
          this.setState({ movie: movie });
      });
    }

  render() {
    let movie = this.state.movie;
    if (this.state.movie === undefined) {
      return <Redirect to="/not-found" />;
    } else if (this.state.movie) {
      return (
        <div className="Details">
          <h1>{this.state.movie.name}</h1>
          <div className="content">
            <div className="item">{movie.synopsis}</div>
            <div className="item">
              <img
                src={require(`../common/images/${movie.id}.jpg`)}
                alt={`${movie.id}`}
              />
            </div>
          </div>
          <Link to="/">Link to home page</Link>
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
