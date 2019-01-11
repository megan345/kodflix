import React from 'react';
import { Link } from 'react-router-dom';

export default function Details(){
    return (
      <div>
        <h1>Hello welcome to the details page!</h1>
        <Link to="/">Link to home page</Link>
      </div>
    )
  }