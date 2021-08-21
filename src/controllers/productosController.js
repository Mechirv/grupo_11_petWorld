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
const Op = db.Sequelize.Op;



let productosController = {
    //listado de todos los productos de la base json
    listar: async (req,res) => {
        res.render("products/productList", {products: await Product.findAll({include: [{association: "types"},{association:"categories"}]}) })},

    
    buscar: async (req,res) => {
        try{
                res.render("products/productList", {
                    products: await Product.findAll(
                        {include: [{association: "types"}, {association:"categories"}],
                        where: {
                            name: {[Op.like]: `%${req.query.busqueda}%`}
                        }}) }, 
                        );
                    console.log(productos);
            }catch(errors){
                res.send(errors)
            }

    },

    //lista los prodcutos por tipos, menu despegable
    listarTipo: async (req,res) =>
    {
        try{
            let tipo = await Type.findOne({where: {name: req.params.type}});
        res.render("products/productList", {
            products: await Product.findAll(
                {include: [{association:"types"}, {association:"categories"}],
                where: {type_id : tipo.id}}
            )
        })
        }catch(errors){
            res.send(errors)
        }
    },

    listarTipoCategoria: async (req,res) =>{
        try{
            let tipo = await Type.findOne({where: {name: req.params.type}});
            let category = await Category.findOne({where: {name: {[Op.like]: `%${req.params.category}%`}}});
           
            res.render("products/productList", {products: await Product.findAll(
                    {include: [{association:"types"}, {association:"categories"}], 
                    where: {type_id : tipo.id,category_id: category.id}}
                    )});
        

        }catch(errors){

        }

    },

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
            if(!errores.isEmpty()){
                res.render("products/productCreateForm",{categorias: await Category.findAll(), 
                    tipos: await Type.findAll(), errors: errores.mapped(), old: req.body})
   
             }else{
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
            } 
        }
        catch{

        }
    },


    cart:(req,res) => {res.render("products/productCart")},

    //renderiza vista para editar un producto    
    editar: async (req, res) =>{
        let product = await Product.findByPk((req.params.id));
        let categorias = await Category.findAll();
        let tipos = await Type.findAll();

        res.render("products/productEditForm",{product, categorias, tipos })
    },   
   
    //accion de modificar un producto
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
