window.addEventListener("load", function() {

    if(sessionStorage.getItem("añadir") != null) {

        let añadir = sessionStorage.getItem("añadir").split(",")

        for (let i = 0; i < añadir.length; i++) {

            fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/track/' + añadir[i])
            .then(
                function(respuesta) {
                    return respuesta.json();            
                }
            )
            .then(
                function(resultado) {
                    console.log(resultado)
                

                    let NewFav = `
                    <article class="song">
                    <p class="nomer"> - </p>
                    <a href="detail-track.html"> <img class="pos" src= "${info.album.cover_medium}>
                    <p class="nameplay">${info.title}</p></a>
                    </article>
                    `   
                
                document.querySelector(".no-hay").innerHTML += NewFav

                document.querySelector(".remove").addEventListener("click", function(){
                    let remove = sessionStorage.removeItem("añadir")
                    console.log(remove)

                })
                }
            )

        }

    } else {    
        let htmlEmpty = `<section class="songen"><p class="nums"> - 
        </p><img class="imgnosignal" src="../img/no signal.jpg">
        <p class="nameplay">Parece que no hay canciones agregadas a tu playlist por el momento</p></a></section>`
    document.querySelector(".no-hay").innerHTML = htmlEmpty
    }
})

