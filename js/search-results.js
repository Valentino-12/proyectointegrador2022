let querystring = location.search
let querystringobj = new URLSearchParams(querystring)
let q = querystringobj.get('q')

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${q}`)
    .then(function(datos){
        return datos.json();
    })
    .then(function(info){
        console.log(info);
        let titulo=document.querySelector('.titulo-section')
        
        if(info.data.length==0){
            titulo.innerHTML = `no se ha encontrado resultados de busqueda para: ${q}`
        } else{
            titulo.innerHTML = `resultado de busqueda para ${q}`
        }
        let section=document.querySelector('#resultados')
        for(let i=0;i<info.data.length;i++){
            section.innerHTML+=`<div class="caja">
            <a href="./detail-artist.html?id=${info.data[i].artist.id}">
                <img class="imgindex" src="${info.data[i].album.cover_medium}" alt="">
            </a>
            <div class="texto">
                <h3><a href="./detail-track.html?id=${info.data[i].id}">${info.data[i].title} - </a></h3>
                <h3><a href="./detail-artist.html?id=${info.data[i].artist.id}"> ${info.data[i].artist.name}</a></h3>
            </div>
        </div>`
        }
        

        
        
    })
    .then(function(){
        let gif=document.querySelector('#gif-loading')
        gif.style.display='none'
    })  
    .catch(function(error){
        console.log(error)

    })





