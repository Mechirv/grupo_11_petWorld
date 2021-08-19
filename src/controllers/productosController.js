const fs = require('fs');
const path = require('path');
//const product = require('../models/products');
//const category = require('../models/categories');
//const types = require('../models/types');
const { validationResult } = require('express-validator');
const db = require('../database/models/index');
const Product = db.Product;
const sequelize = db.sequelize;
const Category = db.Category;
const Type = db.Type;
const Op = db.sequelize.Op;



let productosController = {
    //listado de todos los productos de la base json
    listar: async (req,res) => {
        res.render("products/productList", {products: await Product.findAll({include: [{association: "types"},{association:"categories"}]}) })},

    
    buscar: async (req,res) => {
        try{
            let buscar = req.query.busqueda;
            console.log(buscar);
            let productos = await Product.findAll(
                {where: {
                    name: {[Op.like]: '%buscar%' }
                }});
            res.render("products/productList", {products:productos});
            }catch(errors){
                console.log(errors);

                res.send(errors)
            }

    },

        //lista los prodcutos por categoría
    //listarCategoria: async (req,res) =>
    //{
    //    
    //    res.render("products/productList", 
    //    {
    //        products: await Product.findAll(
    //            {include: [{association:"types"}]},
    //            { where: {name : await Type.findOne({where:{name:req.params.type}})}}
    //        )
    //    })
    //    //res.render("products/productList", {products: product.listarCategoria(req.params.category)})
    //},

    //muestra el detalle de un solo producto cuyo id se pasa como parametro
    detalle:async (req,res) => {
        res.render("products/productDetail", {product: await Product.findByPk(req.params.id)})},
    
    //renderiza la vista para crear un producto
    crear: async (req,res) => {res.render("products/productCreateForm", {
        categorias: await Category.findAll(), 
        tipos: await Type.findAll()
        })},

    //crear un nuevo producto
    accionCrear: async (req,res) =>{
        const errores = validationResult(req);
        try{
            await Product.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.file.filename,
                destacado: req.body.destacado,
                category_id: req.body.category_id,
                type_id: req.body.type_id
            });
            res.redirect("/products/")
        }catch(errors){
            return res.render("users/register", {errors: errors.mapped(), old: req.body})

        }
    },


    //accionCrear: (req,res) => {
    //    const errores = validationResult(req);
    //    
    //    if(errores.isEmpty()){
    //        console.log(req.body);
    //        let resultado = product.nuevo(req.body,req.file); 
	//	    return resultado == true? res.redirect("/products/") : res.send("Error al cargar la informacion");
    //    }else{
    //        return res.render("products/productCreateForm", {errores: errores.mapped(), old: req.body})
    //    }
    //},

    cart:(req,res) => {res.render("products/productCart")},

    //renderiza vista para editar un producto    
    //editar: (req,res) => {res.render("products/productEditForm",{product: product.buscar(req.params.id), categorias:category.todos(), tipos: types.todos() })},

    editar: async (req, res) =>{
        let product = await Product.findByPk((req.params.id));
        let categorias = await Category.findAll();
        let tipos = await Type.findAll();

        res.render("products/productEditForm",{product, categorias, tipos })
    },   
    //accion de modificar un producto
    //modificar:(req,res) => {
    //    let resultado = product.editar(req.body,req.file,req.params.id);
	//	return resultado == true ? res.redirect("/products/") : res.send("Error al cargar la informacion");
    //},

    modificar: async (req,res) =>{
        try{
            let update = await Product.update({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.file.filename,
                destacado: req.body.destacado,
                category_id: req.body.category_id,
                type_id: req.body.type_id
            },{
                where: {id:req.params.id}
            });
            res.redirect("/products/");
        }catch(errors){
            res.send(errors);
        }

    },
        
    //acción de eliminar un producto
    eliminar: async (req,res) => {
        let eliminado = await Product.destroy({
            where: {id: req.params.id}});
        res.redirect("/products/");
    },
};

module.exports = productosController;
