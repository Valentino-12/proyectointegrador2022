const Genre = document.querySelector("#detailGenre")
const IDGenre = Number(location.search.slice(7)) 
console.log(IDGenre)

function peticion(){
    fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/genre')
    .then(function(datos){
        return datos.json()
    })
    .then(function(generos){
        for(let i = 0; i < generos.data.length; i++){
            if(generos.data[i].id === IDGenre){
                console.log(generos)
                fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${IDGenre}/artists`)
                .then(function(datos){
                    return datos.json()
                })
                .then(function(detailsGenre){
                    Genre.innerHTML = `
                            <h1>${generos.data[i].name}</h1>
                            <h3>Artistas:</h3>
                            <ul class='detailGenreList'>
                                <li>${detailsGenre.data[1].name} <img src='${detailsGenre.data[1].picture_medium}'></li>
                                <li>${detailsGenre.data[2].name} <img src='${detailsGenre.data[2].picture_medium}'></li>
                                <li>${detailsGenre.data[3].name} <img src='${detailsGenre.data[3].picture_medium}'></li>
                                <li>${detailsGenre.data[4].name} <img src='${detailsGenre.data[4].picture_medium}'></li>
                                <li>${detailsGenre.data[5].name} <img src='${detailsGenre.data[5].picture_medium}'></li>
                                <li>${detailsGenre.data[6].name} <img src='${detailsGenre.data[6].picture_medium}'></li>
                                <li>${detailsGenre.data[7].name} <img src='${detailsGenre.data[7].picture_medium}'></li>
                                <li>${detailsGenre.data[8].name} <img src='${detailsGenre.data[8].picture_medium}'></li>
                                <li>${detailsGenre.data[9].name} <img src='${detailsGenre.data[9].picture_medium}'></li>
                                <li>${detailsGenre.data[10].name} <img src='${detailsGenre.data[10].picture_medium}'></li>
                                <li>${detailsGenre.data[11].name} <img src='${detailsGenre.data[11].picture_medium}'></li>
                                <li>${detailsGenre.data[12].name} <img src='${detailsGenre.data[12].picture_medium}'></li>
                            </ul>
                    `
                })

            }
        }
    })
}

peticion()

