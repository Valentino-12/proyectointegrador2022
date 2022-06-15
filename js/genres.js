window.addEventListener("load", function() {

    let gener = document.querySelector('.genero');

    fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/genre')
    .then(function(datos){
        return datos.json();
    })
    .then(function(info){
        console.log(info.data);
        console.log(info.data[0].id);

        for(let i = 0; i <= info.data.id ; i++){
            gener.innerHTML = `<a href="./detail-geners.html"><img src="${info.data[i].picture_big}"><b>?${info.data[i].name}</b></a>`
        }
    })
    .catch(function(error){
        console.log(error);
    })
})