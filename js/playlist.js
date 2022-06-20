window.addEventListener("load", function() {

    if(sessionStorage.getItem("pref") != null) {
        let playli = document.querySelector('.no-hay');
        let añadir = sessionStorage.getItem("pref").split(",")

        for (let i = 0; i < añadir.length; i++) {

            fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/track/' + añadir[i])
            .then(
                function(response) {
                    return response.json();            
                }
            )   
            .then(
                function(resultado) {
                    console.log(resultado)
                    
                    playli.innerHTML += `<article class="song">
                    <p class="nomer"> - </p>
                    <a href="detail-track.html"> <img class="pos" src= "${info.album.cover_medium}>
                    <p class="nameplay">${info.title}</p></a>
                    </article>`   

                document.querySelector(".remove").addEventListener("click", function(){
                    let remove = sessionStorage.removeItem("pref")
                    console.log(remove)

                })
                }
            )
        }

    } else {    
        playli.innerHTML = `<section class="songen"><p class="nums"> - 
        </p><img class="imgnosignal" src="../img/no signal.jpg">
        <p class="nameplay">Parece que no hay canciones agregadas a tu playlist por el momento</p></a></section>`
    }
})

