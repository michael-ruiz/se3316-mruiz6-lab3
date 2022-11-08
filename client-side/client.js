let possibleSongs = [];

async function getGenres()
{
    let ul = document.createElement('ul');
    ul.id = 'genresList';
    await fetch('/api/music/genres', {
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
    await fetch('/api/music/albums', {
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
    await fetch('/api/music/artists', {
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
    await fetch('/api/music/tracks', {
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
    await fetch(`/api/music/genres/title/${input}`, {
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
    await fetch(`/api/music/albums/title/${input}`, {
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
    await fetch(`/api/music/artists/title/${input}`, {
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
    await fetch(`/api/music/tracks/title/${input}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = e.track_title;
            li.className = 'results';
            let check = document.createElement('input');
            check.type = 'checkbox';
            check.onchange = function(){
                if (check.checked == true)
                {
                    possibleSongs.push(e.track_id);
                }
                else
                {
                    let i = possibleSongs.indexOf(li.innerText);
                    possibleSongs.splice(i, 1);   
                }
            };

            li.appendChild(check);
            ul.appendChild(li);
        }
        );
        
    })

    let btn = document.createElement('button');
    btn.innerText = 'Add';
    btn.className = 'search';
    btn.onclick = check;
    ul.appendChild(btn);

    if (document.getElementById('tracksList') != null)
    {
        document.getElementById('tracks').removeChild(document.getElementById('tracksList'));
    }
    
    document.getElementById('tracks').appendChild(ul);
}

async function check()
{
    let listName = prompt('What list do you want to add it to?');
    let temp = {};
    temp.name = listName;
    temp.songs = possibleSongs;
    possibleSongs = [];

    await fetch(`/api/music/tracks/lists/${listName}`, {
        method: 'PUT',
        body: JSON.stringify(temp),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

async function getLists()
{
    let t = document.getElementById('listse');
    let ul = document.createElement('ul');
    ul.id = 'List';
    await fetch(`/api/music/tracks/lists`).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            let btn = document.createElement('button');
            btn.innerText = 'Delete';
            btn.onclick = () => 
            {
                fetch(`/api/music/lists/${e.name}}`, {
                    method: 'DELETE',
                },)
            }
            li.innerText = `${e.name} ${e.songs}`;
            li.className = 'results';
            li.appendChild(btn);
            ul.appendChild(li);
        }
        ); 
    })

    if (document.getElementById('lists') != null)
    {
        document.getElementById('listDiv').removeChild(document.getElementById('lists'));
    }
    
    document.getElementById('listDiv').appendChild(ul);   
}