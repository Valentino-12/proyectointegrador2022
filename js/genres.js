fetch('https://api.allorigins.win/get?url=https://api.deezer.com/genre')
    .then(function(datos){
        return datos.json();
    })
    .then(function(info){
        console.log(info.contents);

    })
    .catch(function(error){
        console.log(error);
    })