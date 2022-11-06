let lists = [];
let possibleSongs = [];

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
            let check = document.createElement('input');
            check.type = 'checkbox';

            li.appendChild(check);
            ul.appendChild(li);
        }
        );
        
    })

    let btn = document.createElement('button');
    btn.innerText = 'Add';
    btn.className = 'search';
    ul.appendChild(btn);

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
            let check = document.createElement('input');
            check.type = 'checkbox';

            li.appendChild(check);
            li.className = 'results';
            ul.appendChild(li);
        }
        );
        
    })

    let btn = document.createElement('button');
    btn.innerText = 'Add';
    btn.className = 'search';
    ul.appendChild(btn);

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
            let check = document.createElement('input');
            check.type = 'checkbox';

            li.appendChild(check);
            ul.appendChild(li);
        }
        );
        
    })

    let btn = document.createElement('button');
    btn.innerText = 'Add';
    btn.className = 'search';
    ul.appendChild(btn);

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
            let check = document.createElement('input');
            check.type = 'checkbox';
            check.onchange = function(){
                if (check.checked == true)
                {
                    possibleSongs.push(li.innerText);
                }
                else
                {
                    possibleSongs.remove(li.innerText);
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

    for (i = 0; i < lists.length; i++)
    {
        if (lists[i].name === listName)
        {
            lists[i].songs.concat(temp.songs);
            possibleSongs = [];
        }
    }

    lists.push(temp);
    possibleSongs = [];

    await fetch(`http://localhost:3000/api/music/tracks/lists`, {
        method: 'PUT',
        body: JSON.stringify(lists),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}