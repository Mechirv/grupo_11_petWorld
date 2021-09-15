window.addEventListener('load', function() {
    let formulario = document.querySelector('#register');
    let btnSubmit = document.querySelector('#button-register');

    btnSubmit.addEventListener('click', function(event){
        event.preventDefault();
        let email = document.querySelector('#email');
        let pass = document.querySelector('#pass');
        let pass2 = document.querySelector('#confirm-pass');
        let nombre = document.querySelector('#nombre');
        let apellido = document.querySelector('#apellido');
        let imagen = document.querySelector('#imagenUsuario')

        let errores = [];

        if(email.value == ''){
            console.log(email.value)
            errores.push('Debe ingresar un email')

        }else if(!validaEmail(email.value)){
            errores.push('formato incorrecto')
        }
        if(pass.value == ''){
            errores.push('Debe ingresar una contraseña')
        }else if(pass.value.length < 8 || pass.value.length > 15){
            errores.push('La contraseña debe tener entre 8 y 15 caracteres')
        }
    
        if(pass2.value == ''){
            errores.push('Debe reingresar su contraseña')
        }else if(pass2.value.length < 8 || pass2.value.length > 15){
            errores.push('La contraseña debe tener entre 8 y 15 caracteres')
        }else if(pass.value != pass2.value){
            errores.push("Las contraseñas deben ser iguales")
        }
        
        if(nombre.value == ''){
            errores.push('Ingrese su nombre')
        }else if(nombre.value.length <3){
            errores.push('El nombre debe tener al menos 2 caracteres');
        }
        if(apellido.value== ''){
            errores.push('Ingrese su apellido')
        }else if(apellido.value.length<3){
            errores.push('El apellido debe tener al menos 2 caracteres')
        }


        if(!((/(.jpg|.jpeg|.png|.gif)$/i).test(imagen.value))){
        
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

function validaEmail(email){
    let regEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regEx.test(email);
}


