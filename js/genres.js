window.addEventListener("load", function() {

    let gener = document.querySelector('.all-gender');

    fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/genre')
    .then(function(response) {
        return response.json();
    })
    
    .then(function(info){
        console.log(info.data);

        for(let i = 0; i <= info.data.length ; i++){
            gener.innerHTML += `<article class="genero"><a href="./detail-geners.html"><img src="${info.data[i].picture}"><br><b>${info.data[i].name}</b></a></article>`
        }
    })
    .catch(function(error){
        console.log(error);
    })
})