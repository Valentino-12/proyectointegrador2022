let querystring = location.search
let querystringobj = new URLSearchParams(querystring)
let id = querystringobj.get('id')
let album = document.querySelector('.caja-album');
console.log(album.innerHTML);
console.log(album)
fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`)
    .then(function(datos){
        return datos.json();
        
    })
    .then(function(info){
        console.log(info);
        console.log(id);
        console.log(info.artist.name)


            album.innerHTML = ` <img src="../img/album eminem home.webp?id=${info.artist.picture_medium}" width="200px" height="200px">
            <div class="text-detail">
                <h2><a href="./detail-album.html">${info.title} </a></h2>
                <h3>Artista: <a href="./detail-artist.html">${info.artist.name}</a></h3>
                <h3>Genero: <a href="./geners.html">${info.genres.data[0].name}</a></h3>
                <h3>Fecha de lanzamiento: <a href="#">${info.release_date}</a></h3>
                <div class="desplegable">
                    <button>Temas del Album</button>
                    <div class="links">
                        <a href="#">Public Service Announcement 2000</a>
                        <a href="#">Kill You</a>
                        <a href="#">Stan</a>
                        <a href="#">Paul - Skit</a>
                        <a href="#">Who Knew</a>
                        <a href="#">Steve Berman</a>
                        <a href="#">The Way I Am</a>
                        <a href="#">The Real Slim Shady</a>
                        <a href="#">Remember Me?</a>
                        <a href="#">Marshal Mathers</a>
                        <a href="#">Ken Kaniff - Skip</a>
                        <a href="#">Drug Ballad</a>
                        <a href="#">Amityville</a>
                        <a href="#">Bitch Please II</a>
                        <a href="#">Amityville</a>
                        <a href="#">Kim</a>
                        <a href="#">Under The Influence</a>
                        <a href="#">Criminal</a>
                    </div>
                </div>
            </div>`

        
        console.log(cajas)
    })
    .catch(function(error){
        console.log(error)

    })