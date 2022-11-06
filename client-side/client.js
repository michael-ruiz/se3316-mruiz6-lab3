async function getGenres()
{
    let ul = document.createElement('ul');
    ul.id = 'genresList';
    await fetch('http://localhost:3000/api/music/genres', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = e.title;
            li.className = 'results';
            ul.appendChild(li);
        }
        );
        
    })

    if (document.getElementById('genresList') != null)
    {
        document.getElementById('genres').removeChild(document.getElementById('genresList'));
    }
    
    document.getElementById('genres').appendChild(ul);
}

async function getAlbums()
{
    let ul = document.createElement('ul');
    ul.id = 'albumsList';
    await fetch('http://localhost:3000/api/music/albums', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = e.album_title;
            li.className = 'results';
            ul.appendChild(li);
        }
        );
        
    })

    if (document.getElementById('albumsList') != null)
    {
        document.getElementById('albums').removeChild(document.getElementById('albumsList'));
    }
    
    document.getElementById('albums').appendChild(ul);
}

async function getArtists()
{
    let ul = document.createElement('ul');
    ul.id = 'artistsList';
    await fetch('http://localhost:3000/api/music/artists', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = e.artist_name;
            li.className = 'results';
            ul.appendChild(li);
        }
        );
        
    })

    if (document.getElementById('artistsList') != null)
    {
        document.getElementById('artists').removeChild(document.getElementById('artistsList'));
    }
    
    document.getElementById('artists').appendChild(ul);
}

async function getTracks()
{
    let ul = document.createElement('ul');
    ul.id = 'tracksList';
    await fetch('http://localhost:3000/api/music/tracks', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = e.track_title;
            li.className = 'results';
            ul.appendChild(li);
        }
        );
        
    })

    if (document.getElementById('tracksList') != null)
    {
        document.getElementById('tracks').removeChild(document.getElementById('tracksList'));
    }
    
    document.getElementById('tracks').appendChild(ul);
}

async function searchGenre()
{
    let ul = document.createElement('ul');
    ul.id = 'genresList';
    let input = document.getElementById('searchGenre').value;
    await fetch(`http://localhost:3000/api/music/genres/title/${input}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = e.title;
            li.className = 'results';
            ul.appendChild(li);
        }
        );
        
    })

    if (document.getElementById('genresList') != null)
    {
        document.getElementById('genres').removeChild(document.getElementById('genresList'));
    }
    
    document.getElementById('genres').appendChild(ul);
}

async function searchAlbum()
{
    let ul = document.createElement('ul');
    ul.id = 'albumsList';
    let input = document.getElementById('searchAlbum').value;
    await fetch(`http://localhost:3000/api/music/albums/title/${input}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = e.album_title;
            li.className = 'results';
            ul.appendChild(li);
        }
        );
        
    })

    if (document.getElementById('albumsList') != null)
    {
        document.getElementById('albums').removeChild(document.getElementById('albumsList'));
    }
    
    document.getElementById('albums').appendChild(ul);
}

async function searchArtist()
{
    let ul = document.createElement('ul');
    ul.id = 'artistsList';
    let input = document.getElementById('searchArtist').value;
    await fetch(`http://localhost:3000/api/music/artists/title/${input}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = e.artist_name;
            li.className = 'results';
            ul.appendChild(li);
        }
        );
        
    })

    if (document.getElementById('artistsList') != null)
    {
        document.getElementById('artists').removeChild(document.getElementById('artistsList'));
    }
    
    document.getElementById('artists').appendChild(ul);
}

async function searchTrack()
{
    let ul = document.createElement('ul');
    ul.id = 'tracksList';
    let input = document.getElementById('searchTrack').value;
    await fetch(`http://localhost:3000/api/music/tracks/title/${input}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = e.track_title;
            li.className = 'results';
            ul.appendChild(li);
        }
        );
        
    })

    if (document.getElementById('tracksList') != null)
    {
        document.getElementById('tracks').removeChild(document.getElementById('tracksList'));
    }
    
    document.getElementById('tracks').appendChild(ul);
}