const path = require('path');
const fs = require('fs');
const tipos = {
    todos: function() {
        const directory = path.resolve(__dirname,"../data","types.json")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
    },
    buscar: function (id) {
        let tipos = this.todos();
        let resultado = tipos.find(tipo => tipo.id == id)
        return resultado;
    }
};
module.exports = tipos;