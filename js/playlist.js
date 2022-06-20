window.addEventListener("load", function() {

    if(sessionStorage.getItem("pref") != null) {

        let playList = document.querySelector(".playlist");
        let añadir = sessionStorage.getItem("pref").split(",")

        for (let i = 0; i < añadir.length; i++) {

            fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/track/' + añadir[i])
            .then(function(response) {
                return response.json();
            })   
            .then(function(result) {
                console.log(result)
                playList.innerHTML += `<article class="song">
                <a href="detail-track.html?id=${result.id}"> <img class="pos" src="${result.album.cover}">
                <p class="nameplay">${info.title}</p></a>
                </article>`
                document.querySelector(".remove").addEventListener("click", function(){
                    let remove = sessionStorage.removeItem("pref")
                    console.log(remove)
                })
            })
        }

    } else {    
        let nohay = `<section class="songen"><img class="imgnosignal" src="../img/no signal.jpg">
        <p class="nameplay">Parece que no hay canciones agregadas a tu playlist por el momento</p></a></section>`
        playList.innerHTML = nohay
    }
})

