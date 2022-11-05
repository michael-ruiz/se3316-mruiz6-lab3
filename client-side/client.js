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