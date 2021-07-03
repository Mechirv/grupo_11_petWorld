const path = require('path');
const fs = require('fs');

const model = {
    todos: function(){
        const directory = path.resolve(__dirname, '../data/products.json');
        const file = fs.readFileSync(directory, 'utf-8');
        const convert = JSON.parse(file);
        return convert;
    },

    buscar: function(id){
        let productos = this.todos();
        let producto = productos.find((prod) => prod.id == id);
        return producto;

    },

    nuevo : function(data, file){
        const directory = path.resolve(__dirname, '../data/products.json');
        let productos = this.todos();
        let id = () => {
			if(productos.length > 0){
				id = productos.length + 1;
			}else{
				id = 1;
			}
			return id;	
		}

		let producto = {
			id: id,
			name: data.name,
			price: data.price,
			description: data.description,
			category: data.category,
			image: file.image,
		};
		productos.push(producto);
		let nuevoProducto = JSON.stringify(productos);
        fs.writeFileSync('products.json',nuevoProducto);
        return true;
    },
    editar: function(data,file,id){
        const directory = path.resolve(__dirname,"../data/products.json")
        let productos = this.todos();
        productos.map(function(producto){
            if(producto.id == id ){
                    producto.name= data.name,
                    producto.description= data.price,
                    producto.category= data.category,
                    producto.price= data.description,
                    producto.image= file.image
                    }
                return producto
            })
        fs.writeFileSync(directory,JSON.stringify(productos));
        return true;

    }



}


module.exports = model;