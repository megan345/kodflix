import React from 'react';
import Movie from './Movie';
import casinoroyale from './Images/casinoroyale.jpg';
import titanic from './Images/titanic.jpg';
import jasonbourne from './Images/jasonbourne.jpg';
import fightclub from './Images/fightclub.jpg';
import martian from './Images/martian.jpg';
import oceans8 from './Images/oceans8.jpg';
import getGallery from './gallery-get';

// Gallery component
// JUST FOR PULL REQUEST PURPOSES

export default function Gallery(){
    return (
        <div>
            <div class="container">
                {
                    // Create the stack by iterating over the array
                    // using map
                    getGallery().map(movie => 
                        (<Movie id={movie.id} name={movie.name} logo={movie.logo}
                            message={"Hello, this will be the details page for each Movie & TV show :)"} />))
                }
            </div>
        </div>
    )
}