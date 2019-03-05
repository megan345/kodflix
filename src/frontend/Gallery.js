import React, { Component } from 'react';
import Movie from './Movie';

// Gallery component
//
class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        fetch("/rest/shows")
            .then(response => {
                return response.json();
            })
            .then(movies => {
                this.setState({movies: movies});
            });
    }
    render() {
        return (
            <div>
                <div className="container">
                    {this.state.movies.map(movies => (
                        <Movie id={movies.id} name={movies.name} />
                    ))}
                </div>
            </div>
        );
    }
}
export default Gallery;