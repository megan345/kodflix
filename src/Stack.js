import React from 'react';

export default function Stack(props){
    return (
      <div class="child">
        <img src={props.logo} className="image" alt={`${props.name} logo`} />
        <div className="overlay">
          <h1>{props.name}</h1>
        </div>
      </div>
    );
  }