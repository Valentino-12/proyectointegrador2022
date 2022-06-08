let cajas = document.querySelectorAll('.caja-album');
console.log(cajas[0].innerHTML);

fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums')
    .then(function(datos){
        return datos.json();
        
    })
    .then(function(info){
        console.log(info.data[0]);
        console.log(info.data[0].id);


        for(let i = 0; i ; i++){
            cajas[i].innerHTML = `<img src="../img/album eminem home.webp?id=${info.data[i].cover_medium}" width="200px" height="200px">
                <h2><a href="./detail-album.html?id=${info.data[i].title}"> </a></h2>
                <h3>Artista: <a href="./detail-artist.html?id=${info.data[i].artist.name}"></a></h3>
                <h3>Genero: <a href="./geners.html"> Rap</a></h3>
                <h3>Fecha de lanzamiento: <a href="#">23 de Mayo de 2000</a></h3>
                <div class="desplegable">
                    <button>Temas del Album</button>
                    <div class="links">
                        <a href="#">Public Service Announcement 2000</a>`
        }
        
    })
    .catch(function(error){
        console.log(error)

    })