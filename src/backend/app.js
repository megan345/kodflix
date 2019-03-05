const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const getMovies = require('./movies.js');
const path = require('path');

// New command to start the server is npm run start-backend

app.get('/rest/shows', (req, res) => 
    res.send(getMovies()));

// app.get('/', (req, res) => 
//     res.send("Hello, World"));

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) { 
    res.sendFile(path.join(__dirname, '../../build', 'index.html')); });

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))
