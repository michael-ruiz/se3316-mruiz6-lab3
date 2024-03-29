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
let lists = require('./lab3-data/lists.json');
console.log(lists);
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
    const id = String(req.params.id);
    let g = genres.find(x => x.genre_id === id);
    res.json(g);
});

// Search for genre by name (only 10)
router.get('/genres/title/:name', async (req, res) => {
    const t = String(req.params.name);
    let g = genres.filter(x => x.title.includes(t)).slice(0,10);
    res.json(g);
});

// Get all albums
router.get('/albums', async (req, res) => {
    res.json(albums);
});

// Get album by id
router.get('/albums/:id', async (req, res) => {
    const id = String(req.params.id);
    let g = albums.find(x => x.album_id == id);
    res.json(g);
});

// Search for album by name (only 10)
router.get('/albums/title/:name', async (req, res) => {
    const t = String(req.params.name);
    let g = albums.filter(x => x.album_title.includes(t)).slice(0,10);
    res.json(g);
});

// Get all artists
router.get('/artists', async (req, res) => {
    res.json(artists);
});

// Get artist by id
router.get('/artists/:id', async (req, res) => {
    const id = String(req.params.id);
    let g = artists.find(x => x.artist_id == id);
    res.json(g);
});

// Search for artist by name (only 10)
router.get('/artists/title/:name', async (req, res) => {
    const t = String(req.params.name);
    let g = artists.filter(x => x.artist_name.includes(t)).slice(0,10);
    res.json(g);
});

// Get all tracks
router.get('/tracks', async (req, res) => {
    res.json(tracks);
});

// Get track by id
router.get('/tracks/:id', async (req, res) => {
    const id = String(req.params.id);
    let g = tracks.find(x => x.track_id == id);
    res.json(g);
});

// Search for track by name (only 10)
router.get('/tracks/title/:name', async (req, res) => {
    const t = String(req.params.name);
    let g = tracks.filter(x => x.track_title.includes(t)).slice(0,10);
    res.json(g);
});

router.put('/tracks/lists/:name', async (req, res) => {
    const newList = String(req.params.name);
    let li = {};
    li.name = newList;
    li.songs = req.body.songs; 

    if (lists.findIndex((x) => x.name === li.name) == -1)
    {
        lists.push(li);
        fs.writeFile('./lab3-data/lists.json', JSON.stringify(lists), (e) => {
            if (e){throw e};
            console.log(e);
        });
    }

    else
    {
        res.status(401).send('List already exists');
    }
});

// Get lists
router.get('/tracks/lists/all', async (req, res) => {
    res.json(lists);
});

// Delete a list
router.delete('/tracks/lists/delete/:name', async (req, res) => {
    const n = String(req.params.name);
    if (lists.length > 0)
    {
        const l = lists.find(x => x.name === n);
        let i = lists.indexOf(l);
        lists.splice(i, 1); 

        fs.writeFile('./lab3-data/lists.json', JSON.stringify(lists), (e) => {
            if (e){throw e};
        });
    }
    else 
    {
        res.status(404).send('No Lists');
    }
});

app.use('/api/music', router)
app.listen(port, () => console.log(`Server Started on Port ${port}`));