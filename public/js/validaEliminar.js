window.addEventListener('load', function() {
 
let form = document.querySelector('#eliminar');
form.addEventListener('click',function(e){
    e.preventDefault();
    let resultado = window.confirm('Eliminar el producto?');
    let elimina = document.querySelector('#button-eliminar');
    if(resultado == true){
        form.submit()
    }
})

})
                                                
                                         