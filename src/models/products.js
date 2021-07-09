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

    //devuelve los productos destacados
    destacados: function(){
        let productos = this.todos();
        let destacados = productos.filter(function(prod){
            if(prod.destacado == true){
                return prod;
            }
        });
        return destacados;

    },

    //devuelvo los productos por categoría, ya sea perros o gatos
    listarCategoria: function(type){
        let productos = this.todos();
        let tipo = productos.filter((prod) =>
        prod.type == type
        );
        return tipo;

    },

    //busca un producto en particular
    buscar: function(id){
        let productos = this.todos();
        let producto = productos.find((prod) => prod.id == id);
        return producto;

    },

    nuevo: function(data, file){
        const directory = path.resolve(__dirname, '../data/products.json');
        let productos = this.todos();


		let producto = {
			id: productos.length > 0 ? productos[productos.length -1].id + 1: 1,
			name: data.name,
            description: data.description,
            type: data.type,
            category: data.category,
            destacado: data.destacado,
			image: file.filename,
            price: data.price,
				
		};
		productos.push(producto);
		let nuevoProducto = JSON.stringify(productos);
        fs.writeFileSync(directory,nuevoProducto);
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
        fs.writeFileSync(directory,JSON.stringify(productos));
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
        fs.writeFileSync(directory,JSON.stringify(productos));
        return true;
    }

}


module.exports = model;