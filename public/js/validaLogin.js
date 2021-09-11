window.addEventListener('load', function() {
    let formulario = document.querySelector('#form-login');
    let btnSubmit = document.querySelector('#button-login-id');

    btnSubmit.addEventListener('click', function(event){
        event.preventDefault();
        let usuario = document.querySelector('#usuario');
        let pass = document.querySelector('#pass');

        let errores = [];

        if(usuario.value == ''){
            errores.push('Debe ingresar su usuario');
        }else if(!validaEmail(usuario.value)){
            errores.push('Ingrese un email válido')
        }
        if(pass.value == ''){
            errores.push('Debe ingresar una contraseña')
        }else if(pass.value.length < 8 || pass.value.length > 15){
            errores.push('La contraseña debe tener entre 8 y 15 caracteres')
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