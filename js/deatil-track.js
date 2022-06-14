const TrackTitle = document.querySelector("#titleDetailTrack")

function peticion(){
    let trackID = Number(location.search.slice(4)) 
    fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks`)
    .then(function(datos){
        return datos.json();
    })
    .then(function(info){
        for(let i = 0; i < info.data.length; i++){
            if(info.data[i].id === trackID){
                TrackTitle.innerHTML = `
                    <img src=${info.data[i].album.cover_medium}></img>
                    <h3> ${info.data[i].title} </h3>
                    <h3> ${info.data[i].artist.name} </h3>
                    <h3> ${info.data[i].album.title} </h3>
                    <iframe src="${info.data[i].preview}" type="audio">
                `
                console.log(info.data[i])
            }
        }
    
        return info
    }) 
}

peticion()
