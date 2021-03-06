const Artist = document.querySelector("#detailArtist")
const IDArtist = Number(location.search.slice(4)) 

function peticion(){
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists`)
    .then(function(datos){
        return datos.json();
    })
    .then(function(info){
        for(let i = 0; i < info.data.length; i++){
            if(info.data[i].id === IDArtist){
                fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${IDArtist}/top?limit=5`)
                .then(function(datos){
                    return datos.json()
                })
                .then(function(tracks){
            
                    Artist.innerHTML = `
                    <div class="caja-track"> 
                        <img src="${info.data[i].picture_medium}" width="150px" height="150px" >
                        <div class="text-detail">
                        <h2><a href="">${info.data[i].name}</a></h2>
                        <h3>Top Tracks:</h3>
                        <div class="detailArtistTracks">
                            <h3> - ${tracks.data[0].title}</h3>
                            <h3> - ${tracks.data[1].title}</h3>
                            <h3> - ${tracks.data[2].title}</h3>
                            <h3> - ${tracks.data[3].title}</h3>
                            <h3> - ${tracks.data[4].title}</h3>
                        </div>
                    </div>
                    `
                }
            )}
        }
        return info
    }) 
}

peticion()