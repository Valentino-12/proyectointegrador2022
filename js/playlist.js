window.addEventListener("load", function() {

    if(sessionStorage.getItem("fav") != null) {

        let añadir = sessionStorage.getItem("fav").split(",")

        for (let i = 0; i < añadir.length; i++) {

            fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/tracks' + añadir[i])
            .then(
                function(respuesta) {
                    return respuesta.json();            
                }
            )
            .then(
                function(resultado) {
                    console.log(resultado)
                
                    const sep = resultado;
                    let name = sep.title;
                    let img = sep.album.cover;
                    let id = sep.id;

                    let NewFav = `
                    <article class="song">
                    <p class="nomer"> - </p>
                    <a href="detail-track.html?idTrack=` + id + `"> <img class="pos" src= "` + img + `>
                    <p class="nameplay">` + name + `</p></a>
                    </article>
                    `
                
                document.querySelector(".playlist").innerHTML += NewFav

                document.querySelector(".remove").addEventListener("click", function(){
                    let remove = sessionStorage.removeItem("fav")
                    console.log(remove)

                })
                }
            )

        }

    } else {    
        let htmlEmpty = `<section class="songen"><p class="nums"> - </p><img class="imgnosignal" src="../img/no signal.jpg"><p class="nameplay">Parece que no hay canciones agregadas a tu playlist por el momento</p></a></section>`
    document.querySelector(".playlist").innerHTML = htmlEmpty
    }
})

