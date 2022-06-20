let form = document.querySelector('form');
form.addEventListener('submit', function(event){
    let put = document.querySelector('input').value;
    event.preventDefault(); //Detenemos el comportamiento default del formulario que es enviarse.
    console.log(put);
    console.log(put.length);
    if(put == ''){
        alert('la busqueda no puede estar vacia')
        } 
    else if(put.length < 3){
      alert('la busqueda no puede tener menos de 3 caracteres')
    }
    else{
        window.location.href = `search-results.html?q=${put}`; //Si no hay errores entonces enviamos el formulario
    }
})