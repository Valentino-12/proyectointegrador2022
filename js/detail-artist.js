const Artist = document.querySelector("#detailArtist")
const IDArtist = Number(location.search.slice(4)) 

function peticion(){
    fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists`)
    .then(function(datos){
        return datos.json();
    })
    .then(function(info){
        for(let i = 0; i < info.data.length; i++){
            if(info.data[i].id === IDArtist){
                fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${IDArtist}/top?limit=5`)
                .then(function(datos){
                    return datos.json()
                })
                .then(function(tracks){
                    let arr = []
                    for(let i = 0; i < 5; i++){
                        arr.unshift(tracks.data[i].title + ' ')
                    }
                        
                    Artist.innerHTML = `
                    <div class="caja-track"> 
                        <img src="${info.data[i].picture_medium}" width="150px" height="150px" >
                        <div class="text-detail">
                        <h2><a href="">${info.data[i].name}</a></h2>
                        <h3>Top Tracks:</h3>
                        <h3>
                           ${arr}
                        </h3>
                    </div>
                    `
                }
            )}
        }
        return info
    }) 
}

peticion()