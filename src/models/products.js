const path = require('path');
const fs = require('fs');

const model = {

    //devuelve un array de todos los productos
    todos: function(){
        const directory = path.resolve(__dirname, '../data/products.json');
        const file = fs.readFileSync(directory, 'utf-8');
        const convert = JSON.parse(file);
        return convert;
    },

    destacados: function(){
        let productos = this.todos();
        let destacados = productos.filter(function(prod){
            if(prod.destacado == true){
                return prod;
            }
        });
        return destacados;

    },

    listarCategoria: function(category){
        let productos = this.todos();
        let categoria = productos.filter((prod) =>
        prod.category == category
        );
        return categoria;

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
                    producto.description= data.description,
                    producto.category= data.category,
                    producto.price= data.price,
                    producto.image= file.filename
                    }
                return producto
            })
        fs.writeFileSync(directory,JSON.stringify(productos));
        return true;

    }



}


module.exports = model;