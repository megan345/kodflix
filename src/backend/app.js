const express = require('express');
const app = express();
const port = 3001;
const getMovies = require('./movies.js');

// New command to start the server is npm run start-backend

app.get('/rest/movie-details', (req, res) => 
    res.send(getMovies()))

app.get('/', (req, res) => 
    res.send("Hello, World"))

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))

