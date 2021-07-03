const path = require('path');
const product = require('../models/products');
const indexControlador = {
    home: (req,res)=>{
    let products = product.destacados();
    res.render("index", {products:products})
    }
}


module.exports = indexControlador;