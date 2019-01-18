import React from 'react';
import Movie from './Movie';
import casinoroyale from './Images/casinoroyale.jpg';
import titanic from './Images/titanic.jpg';
import jasonbourne from './Images/jasonbourne.jpg';
import fightclub from './Images/fightclub.jpg';
import martian from './Images/martian.jpg';
import oceans8 from './Images/oceans8.jpg';


export default function getGallery(){
    return ([
        { id: 'titanic', name: 'Titanic', logo: titanic },
        { id: 'jasonbourne', name: 'Jason Bourne', logo: jasonbourne },
        { id: 'fightlcub', name: 'Fight Club', logo: fightclub },
        { id: 'martian', name: 'Martian', logo: martian },
        { id: 'oceans8', name: 'Oceans 8', logo: oceans8 },
        { id: 'casinoroyale', name: 'Casino Royale', logo: casinoroyale}
    ])
}