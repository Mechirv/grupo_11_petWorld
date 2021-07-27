const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

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

    buscarPorEmail: function(email){
        const directory = path.resolve(__dirname, '../data/users.json');
        let usuarios = this.todos();
        let usuario = usuarios.find((user) => user.email == email);
        return usuario;
    },

    nuevo: function(data){
        const directory = path.resolve(__dirname, '../data/users.json');
        let usuarios = this.todos();

		let usuario = {
			id: usuarios.length > 0 ? usuarios[usuarios.length -1].id + 1: 1,
			nombre: data.nombre,
            apellido: data.apellido,
           email: data.email,
           password: bcrypt.hashSync(data.pass,10),
			image: null, 	
		};
		usuarios.push(usuario);
		let nuevoUsuario = JSON.stringify(usuarios,null,2);
        fs.writeFileSync(directory,nuevoUsuario);
        return true;
    },

    //edita un producto cuyo id se recibe como parametro
    editar: function(data,file,id){


    },

 

}


module.exports = model;