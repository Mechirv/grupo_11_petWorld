const fs = require('fs');
const path = require('path');
const product = require('../models/products');


let productosController = {
    //listado de todos los productos de la base json
    listar: (req,res) => {res.render("products/productList", {products: product.all() })},

    //muestra el detalle de un solo producto cuyo id se pasa como parametro
    detalle:(req,res) => {
        res.render("products/productDetail", {product: product.buscar(req.params.id)})},
        
    crear: (req,res) => {res.render("products/productCreate", {product : product.all()})},

    accionCrear: (req,res) => {
        let resultado = product.nuevo(req.body,req.file); 
		return resultado == true? res.redirect("/") : res.send("Error al cargar la informacion");
    },

    cart:(req,res) => {res.render("products/productCart")},

    editar: (req,res) => {res.render("products/productModify",{product: product.buscar(req.params.id)})},

    modificar:(req,res) => {res.render("products/productModify")},
    eliminar: (req,res) => {},
};

module.exports = productosController;
