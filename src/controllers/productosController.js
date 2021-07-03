const fs = require('fs');
const path = require('path');
const product = require('../models/products');


let productosController = {
    //listado de todos los productos de la base json
    listar: (req,res) => {res.render("products/productList", {products: product.todos() })},

    listarCategoria: (req,res) =>
    {
        res.render("products/productList", {products: product.listarCategoria(req.params.category)})
    },

    //muestra el detalle de un solo producto cuyo id se pasa como parametro
    detalle:(req,res) => {
        res.render("products/productDetail", {product: product.buscar(req.params.id)})},
        
    crear: (req,res) => {res.render("products/productCreateForm")},

    accionCrear: (req,res) => {
        let resultado = product.nuevo(req.body,req.file); 
		return resultado == true? res.redirect("/") : res.send("Error al cargar la informacion");
    },

    cart:(req,res) => {res.render("products/productCart")},

    //renderiza vista para editar un producto    
    editar: (req,res) => {res.render("products/productEditForm",{product: product.buscar(req.params.id)})},

    //accion de modificar un producto
    modificar:(req,res) => {
        let resultado = product.editar(req.body,req.file,req.params.id);
		return resultado == true ? res.redirect("/") : res.send("Error al cargar la informacion");
    },
        
    
    eliminar: (req,res) => {},
};

module.exports = productosController;
