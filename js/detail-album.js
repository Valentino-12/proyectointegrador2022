let querystring = location.search
let querystringobj = new URLSearchParams(querystring)
let id = querystringobj.get('id')
let album = document.querySelector('.contenido-album');
console.log(album.innerHTML);
console.log(album)
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
    .then(function(datos){
        return datos.json();
        
    })
    .then(function(info){
        console.log(info);
        console.log(id);
        console.log(info.artist.name);

        var canciones = '';

        for(let i = 0; i < info.tracks.data.length; i++) {
            canciones += `<a href="./detail-track.html?id=${info.tracks.data[i].id}">${info.tracks.data[i].title}</a>`
        }

            album.innerHTML = `<div class="caja-album">
            <img src="${info.artist.picture_medium}">
            <div class="text-detail">
                <h2>${info.title} </a></h2>
                <h3>Artista: <a href="./detail-artist.html?id=${info.artist.id}">${info.artist.name}</a></h3>
                <h3>Genero: <a href="./geners.html?id=${info.genres.data[0].id}"> ${info.genres.data[0].name}</a></h3>
                <h3>Fecha de lanzamiento:${info.release_date}</h3>
                    <div class="links">
                    ${canciones}
                </div>
            </div>
        </div>`

        
        console.log(cajas)
    })
    .catch(function(error){
        console.log(error)

    })