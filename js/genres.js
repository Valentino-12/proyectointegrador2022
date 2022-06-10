let cajas = document.querySelectorAll('.all-gender');
fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/genre')
    .then(function(datos){
        return datos.json();
    })
    .then(function(info){
        console.log(info.data[0]);
        console.log(info.data[0].id);

        for(let i = 0; i ; i++){
        cajas[i].innerHTML = `<article class="genero"><a href="./detail-geners.html?id=${info.data[i].name}"><img src="${info.data[i].artist.picture_medium}" alt=""></a></article>` 
        }
    })
    .catch(function(error){
        console.log(error);
    })