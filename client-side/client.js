let possibleSongs = [];
let currentTracks = [];
let sortSeparator = '----------------------------------------------------';

async function getGenres()
{
    let ul = document.createElement('ul');
    ul.id = 'genresList';
    let header = document.createElement('li');
    header.className = 'header';
    header.innerText = `ID - GENRE`;
    ul.appendChild(header);
    await fetch('/api/music/genres', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = `${e.genre_id} - ${e.title}`;
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
    let header = document.createElement('li');
    header.className = 'header';
    header.innerText = `ID - ALBUM`;
    ul.appendChild(header);
    await fetch('/api/music/albums', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = `${e.album_id} - ${e.album_title}`;
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
    let header = document.createElement('li');
    header.className = 'header';
    header.innerText = `ID - ARTIST`;
    ul.appendChild(header);
    await fetch('/api/music/artists', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = `${e.artist_id} - ${e.artist_name}`;
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
    let header = document.createElement('li');
    header.className = 'header';
    header.innerText = `ID - TRACK - ARTIST - ALBUM - TIME`;
    ul.appendChild(header);
    await fetch('/api/music/tracks', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = `${e.track_id} - ${e.track_title} - ${e.artist_name} - ${e.album_title} - ${e.track_duration}`;
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
    let header = document.createElement('li');
    header.className = 'header';
    header.innerText = `ID - GENRE`;
    ul.appendChild(header);
    let input = document.getElementById('searchGenre').value;
    await fetch(`/api/music/genres/title/${input}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = `${e.genre_id} - ${e.title}`;
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
    let header = document.createElement('li');
    header.className = 'header';
    header.innerText = `ID - ALBUM`;
    ul.appendChild(header);
    let input = document.getElementById('searchAlbum').value;
    await fetch(`/api/music/albums/title/${input}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = `${e.album_id} - ${e.album_title}`;
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
    let header = document.createElement('li');
    header.className = 'header';
    header.innerText = `ID - ARTIST`;
    ul.appendChild(header);
    let input = document.getElementById('searchArtist').value;
    await fetch(`/api/music/artists/title/${input}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let li = document.createElement('li');
            li.innerText = `${e.artist_id} - ${e.artist_name}`;
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
    let header = document.createElement('li');
    header.className = 'header';
    header.innerText = `ID - TRACK - ARTIST - ALBUM - TIME`;
    ul.appendChild(header);
    let input = document.getElementById('searchTrack').value;
    await fetch(`/api/music/tracks/title/${input}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(res => res.json()).then(res => {
        res.forEach(e => {
            let song = {};
            song.track_id = e.track_id;
            song.track_title = e.track_title;
            song.artist_name = e.artist_name;
            song.track_duration = e.track_duration;
            song.album_title = e.album_title;

            let li = document.createElement('li');
            li.innerText = `${e.track_id} - ${e.track_title} - ${e.artist_name} - ${e.album_title} - ${e.track_duration}`;
            li.className = 'results';
            let check = document.createElement('input');
            check.type = 'checkbox';
            check.onchange = () => {
                if (check.checked == true)
                {
                    possibleSongs.push(song);
                }
                else
                {
                    let i = possibleSongs.indexOf(song);
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
    let ul = document.createElement('ul');
    ul.id = 'List';
    let header = document.createElement('li');
    header.className = 'header';
    header.innerText = `NAME - TRACK IDs`;
    ul.appendChild(header);
    let btn1 = document.createElement('button');
    btn1.className = 'search';
    btn1.innerText = 'Sort by name';
    btn1.onclick = () => {
        currentTracks.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })

            let sep = document.createElement('li');
            sep.innerText = sortSeparator;
            ul.appendChild(sep);

           currentTracks.forEach(e => {
            let ids = []; 
            e.songs.forEach((x) => ids.push(x.track_id))
            let li = document.createElement('li');
            li.innerText = `${e.name} - ${ids}`;
            li.className = 'results';
            ul.appendChild(li);
        });
    };
    ul.appendChild(btn1);

    await fetch(`/api/music/tracks/lists/all`).then(res => res.json()).then(res => {
        res.forEach(e => {
            currentTracks.push(e);
            let ids = []; 
            e.songs.forEach((x) => ids.push(x.track_id))
            let li = document.createElement('li');
            li.innerText = `${e.name} - ${ids}`;
            li.className = 'results';
            let btn = document.createElement('button');
            btn.className = 'search';
            btn.innerText = 'Delete';
            btn.onclick = () => {
                console.log(e.name);
                fetch(`/api/music/tracks/lists/delete/${e.name}`, {
                    method: 'DELETE',
                  });
            };
            li.appendChild(btn);
            ul.appendChild(li);
        });
    });

    if (document.getElementById('lists') != null)
    {
        document.getElementById('listDiv').removeChild(document.getElementById('lists'));
    }
    
    document.getElementById('listDiv').appendChild(ul);   
}