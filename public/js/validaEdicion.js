window.addEventListener('load', function() {
    let formulario = document.querySelector('#abmProduct');
    let btnSubmit = document.querySelector('#accept-modify');

    btnSubmit.addEventListener('click', function(event){
        event.preventDefault();
        let nombre = document.querySelector('#nombreProducto');
        let descripcion = document.querySelector('#descripcionProducto');
        let precio = document.querySelector('#precioProducto');
        let imagen = document.querySelector('#imagenProducto');

        let errores = [];

        if(nombre.value == ''){
            errores.push('Debe ingresar el nombre del producto');
        }else if(nombre.value.length <5){
            errores.push('El nombre debe tener al menos 5 caracteres')
        }
        if(descripcion.value == ''){
            errores.push('Debe ingresar la descripción del producto');
        }else if(descripcion.value.length <20){
            errores.push('La descripción debe tener al menos 20 caracteres')
        }
        if(precio.value == ''){
            errores.push('Debe ingresar el precio del prducto')
        }else if(precio.value <=0){
            errores.length('El precio debe ser un número mayor que cero')
        }
        if(!((/\.(jpg|jpeg|png|gif)$/i).test(imagen.name))){
            errores.push('formato de imagen incorrecto')
        }


        if (errores.length > 0) {
            let ulErrores = document.querySelector('.errores');
            ulErrores.classList.add('alert-warning');
            ulErrores.innerHTML = '';
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += `<li >  ${errores[i]} </li>`;
            }}
        else{
            formulario.submit();
        }


    })

})