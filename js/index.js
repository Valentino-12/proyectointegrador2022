let cajas = document.querySelectorAll('.caja');
console.log(cajas[0].innerHTML);

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')
    .then(function(datos){
        return datos.json();
    })
    .then(function(info){
        console.log(info);

        for(let i = 0; i < 5; i++){
            cajas[i].innerHTML = `<a href="./detail-artist.html?id=${info.data[i].artist.id}">
            <img class="imgindex" src="${info.data[i].artist.picture_medium}" alt=""></a>
            <div class="texto">
            <h3><a href="./detail-track.html?id=${info.data[i].id}">${info.data[i].title}</a></h3>
            <h3><a href="./detail-artist.html?id=${info.data[i].artist.id}">- ${info.data[i].artist.name}</a></h3>
            </div>`
        }
        
    })  
    .catch(function(error){
        console.log(error)

    })

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists')
    .then(function(datos){
        return datos.json();
        
    })
    .then(function(info){
        console.log(info.data[0]);
        console.log(info.data[0].id);


        for(let i = 0; i < 5; i++){
            
            cajas[i+5].innerHTML = `<a href="./detail-artist.html${info.data[i].id}"><img class="imgindex" src="${info.data[i].picture_medium}" alt=""></a><div class="texto"><h3><a href="./detail-artist.html?id=${info.data[i].id}">${info.data[i].name} </a></h3></div>`
        }
        
    })
    .catch(function(error){
        console.log(error)

    })

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums')
    .then(function(datos){
        return datos.json();
        
    })
    .then(function(info){
        console.log(info.data);
        console.log(info.data[0].id);


        for(let i = 0; i < 5; i++){
            
            cajas[i+10].innerHTML = `<a href="./detail-album.html?id=${info.data[i].id}"> <img class="imgindex" src="${info.data[i].cover_medium}" alt=""></a> <div class="texto">
            <h3><a href="./detail-album.html?id=${info.data[i].id}">${info.data[i].title} </a></h3>
            <h3><a href="./detail-artist.html?id=${info.data[i].artist.id}l"> - ${info.data[i].artist.name}</a></h3></div>`
        }
        
    })
    .catch(function(error){
        console.log(error)

    })
