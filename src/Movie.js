import React from 'react';
import { Link } from 'react-router-dom';

export default function Stack(props){
    return (
      <Link to='/details' class="child">
        <img src={props.logo} className="image" alt={props.name} />
        <div className="overlay">
          <h1>{props.name}</h1>
        </div>
      </Link>
    );
  }