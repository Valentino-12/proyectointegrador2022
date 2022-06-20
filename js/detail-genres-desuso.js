window.addEventListener("load", function() {
    let queryString = new URLSearchParams(location.search);
    let detailgener = document.querySelector('.divartist');
    let Gen = queryString.get("idGen");

    fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${Gen}`)

    .then(function(response) {
        return response.json();
    })
    
    .then(function(result){
        console.log(result);
        
        detailgener.innerHTML = `<div class="artistuno" style="background: radial-gradient(circle, rgba(148,51,193,1) 0%, rgba(4,2,2,1) 100%);">
        <h1>${result.name}</h1>
        <img src="${result.picture}" width="200px" height="200px">
        </div>`
    })
    .catch(function(error){ 
        console.log('El error fue: ' + error);
    })



    let artistGen = document.querySelector(".artist-gen")

    fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${Gen}/artists`)
    .then(function(response) {
        return response.json();            
    })
    .then(function(info) {
        console.log (info)
        
        for (let i = 0; i <= info.data.length; i++) {

            artistGen.innerHTML += `<section class="canciones-gen">
            <a href="./detail-artist.html?idArtist=${info.data[i].id}"> <img class="tops" src="${info.data[i].picture}">
            <p class="name">${info.data[i].name}</p></a></section>`  
        }
    })
})

