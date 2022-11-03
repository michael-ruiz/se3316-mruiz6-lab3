const fs = require('fs');
const csv = require('csv-parser');
const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

let genres = [];
let tracks = [];
fs.createReadStream('lab3-data/genres.csv').pipe(csv()).on('data', (rows) => {genres.push(rows);});
fs.createReadStream('lab3-data/raw_tracks.csv').pipe(csv()).on('data', (rows) => {tracks.push(rows);});

app.use('/', express.static('static'));
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

// Get all genres
router.get('/genres', async (req, res) => {
    res.send(genres);
});

// Get specific genres
router.get('/genres/:id', async (req, res) => {
    const id = req.params.id
    res.send(id);
});

// Get all tracks
router.get('/tracks', async (req, res) => {
    res.send(tracks);
});

app.use('/api/music', router)
app.listen(port, () => console.log(`Server Started on Port ${port}`));
