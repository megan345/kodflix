import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie(props){
    return (
      <Link to={`${props.id}`} className="item">
      <img src={require(`./common/images/${props.id}.jpg`)} alt={`${props.id}`} />        
      <div className="overlay">
          <h3>{props.name}</h3>
        </div>
      </Link>
    );
  }