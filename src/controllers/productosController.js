const fs = require('fs');
const path = require('path');
const product = require('../models/products');
const category = require('../models/categories');
const types = require('../models/types');
const { validationResult } = require('express-validator');


let productosController = {
    //listado de todos los productos de la base json
    listar: (req,res) => {res.render("products/productList", {products: product.todos() })},

    //lista los prodcutos por categoría
    listarCategoria: (req,res) =>
    {
        res.render("products/productList", {products: product.listarCategoria(req.params.category)})
    },

    //muestra el detalle de un solo producto cuyo id se pasa como parametro
    detalle:(req,res) => {
        res.render("products/productDetail", {product: product.buscar(req.params.id)})},
    
    //renderiza la vista para crear un producto
    crear: (req,res) => {res.render("products/productCreateForm", {categorias:category.todos(), tipos:types.todos()})},

    //crear un nuevo producto
    accionCrear: (req,res) => {
        const errores = validationResult(req);
        
        if(errores.isEmpty()){
            console.log(req.body);
            let resultado = product.nuevo(req.body,req.file); 
		    return resultado == true? res.redirect("/products/") : res.send("Error al cargar la informacion");
        }else{
            return res.render("products/productCreateForm", {errores: errores.mapped(), old: req.body})

        }
    },

    cart:(req,res) => {res.render("products/productCart")},

    //renderiza vista para editar un producto    
    editar: (req,res) => {res.render("products/productEditForm",{product: product.buscar(req.params.id), categorias:category.todos(), tipos:types.todos() })},

    //accion de modificar un producto
    modificar:(req,res) => {
        let resultado = product.editar(req.body,req.file,req.params.id);
		return resultado == true ? res.redirect("/products/") : res.send("Error al cargar la informacion");
    },
        
    //acción de eliminar un producto
    eliminar: (req,res) => {
        let resultado = product.eliminar(req.params.id);
        return resultado == true ? res.redirect("/products/") : res.send("Error al cargar la informacion");
    },
};

module.exports = productosController;
