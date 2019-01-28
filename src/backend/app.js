const express = require('express');
const app = express();
const port = 3000;
const getMovies = require('./movies.js');

app.get('/rest/movie-details', (req, res) => 
    res.send(getMovies()))

app.get('/', (req, res) => 
    res.send("Hello, World"))

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))
