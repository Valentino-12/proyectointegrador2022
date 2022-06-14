window.addEventListener("load", function() {
    fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/genre')
    .then(function(datos){
        return datos.json();
    })
    .then(function(info){
        console.log(info.data);
        console.log(info.data[0].id);

        for(let i = 0; i <= info.data.id ; i++){
            let Newhtml = `<article class="genero"><a href="./detail-geners.html?id=${info.data[i].id}"><img src="${info.data[i].picture_big}"><b>?id=${info.data[i].name}</b></a></article>`
            document.querySelector(".genero").innerHTML += Newhtml
        }
    })
    .catch(function(error){
        console.log(error);
    })
})