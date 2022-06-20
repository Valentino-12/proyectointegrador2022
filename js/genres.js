window.addEventListener("load", function() {

    let gener = document.querySelector('.all-gender');

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function(response) {
        return response.json();
    })
    
    .then(function(info){
        console.log(info.data);

        for(let i = 0; i <= info.data.length ; i++){
            gener.innerHTML += `<article class="genero"><a href="./detail-geners.html?idGen=${info.data[i].id}"><img src="${info.data[i].picture}"><br><b>${info.data[i].name}</b></a></article>`
        }
    })
    .catch(function(error){
        console.log('El error fue: ' + error);
    })
})