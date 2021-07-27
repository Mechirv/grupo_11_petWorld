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

    nuevo: function(data,file){
        const directory = path.resolve(__dirname, '../data/users.json');
        let usuarios = this.todos();

		let usuario = {
			id: usuarios.length > 0 ? usuarios[usuarios.length -1].id + 1: 1,
			nombre: data.nombre,
            apellido: data.apellido,
           email: data.email,
           password: bcrypt.hashSync(data.pass,10),
			image: file.filename, 
            admin: 	data.email.indexOf("@petworld") !=-1 ? true: false,
		};
		usuarios.push(usuario);
		let nuevoUsuario = JSON.stringify(usuarios,null,2);
        fs.writeFileSync(directory,nuevoUsuario);
        return true;
    },

}


module.exports = model;