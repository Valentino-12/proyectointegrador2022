let querystring = location.search
let querystringobj = new URLSearchParams(querystring)
let id = querystringobj.get('id')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
    .then(function(datos){
        return datos.json();
    })
    .then
        (function(info){
            console.log(info);
            let track = document.querySelector('.sectiondetail');
            track.innerHTML = `<div class="caja-track"> <img src="${info.album.cover_medium}" width="150px" height="150px" >
            <div class="text-detail">
            <h2><a href="./detail-track.html">${info.title}</a></h2>
            <h3>Artista: <a href="./detail-artist.html">${info.artist.name}</a></h3>
            <h3>Album: <a href="./detail-album.html">${info.album.title}</a></h3>
            <button class="añadir">Añadir playlist</button>
            </div> </div>
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${info.id}?tracklist=false" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
            
            document.querySelector(".añadir").addEventListener("click", function(){
                let mandar;
                if (sessionStorage.getItem("pref") != null) {
                    mandar = sessionStorage.getItem("pref").split(",")
                    mandar.push(id)
                } else {
                    mandar = []
                    mandar.push(id)
                }
                sessionStorage.setItem("pref", mandar);
            })
        }
    )
    .catch(function(error){
        console.log(error)
    })