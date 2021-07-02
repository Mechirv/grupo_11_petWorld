const path = require('path');
const fs = require('fs');

const model = {
    all: function(){
        const directory = path.resolve(__dirname, '../data/products.json');
        const file = fs.readFileSync(directory, 'utf-8');
        const convert = JSON.parse(file);
        return convert;
    },

    buscar: function(id){
        let productos = this.all();
        let producto = productos.find((prod) => prod.id == id);
        return producto;

    },

    nuevo : function(data, file){
        const directory = path.resolve(__dirname, '../data/products.json');
        let productos = this.all();
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



}


module.exports = model;