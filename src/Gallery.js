import React from 'react';
import Movie from './Movie';
import casinoroyale from './Images/casinoroyale.jpg';
import titanic from './Images/titanic.jpg';
import jasonbourne from './Images/jasonbourne.jpg';
import fightclub from './Images/fightclub.jpg';
import martian from './Images/martian.jpg';
import oceans8 from './Images/oceans8.jpg';

// Gallery component

export default function Gallery(){
    return (
        <div>
            <div class="container">
            <div class="form-row">
                <Movie id="titanic" name="Titanic" logo = {titanic} />
                <Movie name="Jason Bourne" logo = {jasonbourne} />
                <Movie name="Fight Club" logo = {fightclub}/>
            </div>
            <div class="form-row">
                <Movie name="Martian" logo = {martian} />
                <Movie name="Oceans 8" logo = {oceans8} />
                <Movie name="Casino Royale" logo = {casinoroyale} />
            </div>
            </div>
        </div>
    )
}