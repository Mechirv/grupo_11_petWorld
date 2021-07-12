const path = require('path');
const fs = require('fs');

const model = {

    //devuelve un array de todos los usuarios
    todos: function(){
        const directory = path.resolve(__dirname, '../data/users.json');
        const file = fs.readFileSync(directory, 'utf-8');
        const convert = JSON.parse(file);
        return convert;
    },


    //busca un usuarip en particular
    buscar: function(id){
        let usuarios = this.todos();
        let usuario = usuarios.find((user) => user.id == id);
        return usuario;

    },

    nuevo: function(data, file){
        const directory = path.resolve(__dirname, '../data/users.json');
        let usuarios = this.todos();


		let usuario = {
			id: usuarios.length > 0 ? usuarios[usuarios.length -1].id + 1: 1,

            
			fullname: data.fullname,
           usuario: data.usuario,
           email: data.email,
           password: data.pass,
			image: file.filename, 	
		};
		usuarios.push(usuario);
		let nuevoUsuario = JSON.stringify(usuarios,null,2);
        fs.writeFileSync(directory,nuevoUsuario);
        return true;
    },

    //edita un producto cuyo id se recibe como parametro
    editar: function(data,file,id){
        const directory = path.resolve(__dirname,"../data/products.json")
        let productos = this.todos();
        productos.map(function(producto){
            if(producto.id == id ){
                
                    producto.description= data.description,
                    producto.type = data.type,
                    producto.category= data.category,
                    producto.destacado = data.destacado,
                    producto.price= data.price,
                    producto.image= file.filename
                    }
                return producto
            })
        fs.writeFileSync(directory,JSON.stringify(productos, null,2));
        return true;

    },

    //elimina un producto en particular cuyo id se recibe como parametro
    eliminar: function(id){
        const directory = path.resolve(__dirname,"../data","products.json")
        let productos = this.todos();
        let eliminar = this.buscar(id);

        fs.unlinkSync(path.resolve(__dirname,"../../public/img/products",eliminar.image));
       
    
        productos = productos.filter( function(prod){
            if(prod.id != eliminar.id){
                return prod;
            }
        });
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    }

}


module.exports = model;