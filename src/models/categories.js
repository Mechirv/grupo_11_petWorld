const path = require('path');
const fs = require('fs');
const categorias = {
    todos: function() {
        const directory = path.resolve(__dirname,"../data","categories.json")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
    },
    buscar: function (id) {
        let categorias = this.todas();
        let resultado = categorias.find(categoria => categoria.id == id)
        return resultado;
    }
};
module.exports = categorias;