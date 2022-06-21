window.addEventListener("load", function() {

    let añadir = sessionStorage.getItem("pref").split(",")

    if(añadir != null) {

        let playList = document.querySelector(".playlist");

        for (let i = 0; i < añadir.length; i++) {

            fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${añadir[i]}`)
            .then(function(response) {
                return response.json();
            })   
            .then(function(data) {
                console.log(data)
                playList.innerHTML += `<article class="song">
                <a href="detail-track.html?id=${data.id}"> <img class="pos" src="${data.album.cover}">
                <p class="nameplay">${data.title}</p></a>
                </article>`

                document.querySelector(".remove").addEventListener("click", function(){sessionStorage.removeItem("pref")})
            })
        }
    }  
})

