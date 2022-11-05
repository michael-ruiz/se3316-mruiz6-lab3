const fs = require('fs');
const csv = require('csv-parser');
const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

// Populate lists with data
let genres = [];
let albums = [];
let artists = [];
let tracks = [];
fs.createReadStream('lab3-data/genres.csv').pipe(csv()).on('data', (rows) => {genres.push(rows);});
fs.createReadStream('lab3-data/raw_albums.csv').pipe(csv()).on('data', (rows) => {albums.push(rows);});
fs.createReadStream('lab3-data/raw_artists.csv').pipe(csv()).on('data', (rows) => {artists.push(rows);});
fs.createReadStream('lab3-data/raw_tracks.csv').pipe(csv()).on('data', (rows) => {tracks.push(rows);});

app.use('/', express.static('client-side'));
app.use(express.json());

// Print out the request
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

// Get all genres
router.get('/genres', async (req, res) => {
    res.json(genres);
});

// Get genre by id
router.get('/genres/:id', async (req, res) => {
    const id = req.params.id
    let g = genres.find(x => x.genre_id === id);
    res.json(g);
});

// Get all albums
router.get('/albums', async (req, res) => {
    res.json(albums);
});

// Get album by id
router.get('/albums/:id', async (req, res) => {
    const id = req.params.id
    let g = albums.find(x => x.album_id == id);
    res.json(g);
});

// Get all artists
router.get('/artists', async (req, res) => {
    res.json(artists);
});

// Get artist by id
router.get('/artists/:id', async (req, res) => {
    const id = req.params.id
    let g = artists.find(x => x.artist_id == id);
    res.json(g);
});

// Get all tracks
router.get('/tracks', async (req, res) => {
    res.json(tracks);
});

// Get track by id
router.get('/tracks/:id', async (req, res) => {
    const id = req.params.id
    let g = tracks.find(x => x.track_id == id);
    res.json(g);
});

app.use('/api/music', router)
app.listen(port, () => console.log(`Server Started on Port ${port}`));