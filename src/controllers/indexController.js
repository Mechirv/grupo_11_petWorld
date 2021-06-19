
const path = require('path');
const indexControlador = {
    home: (req,res)=>res.sendFile(path.resolve(__dirname,"../views","index.html")),


}


module.exports = indexControlador;