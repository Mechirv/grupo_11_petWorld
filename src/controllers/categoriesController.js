const db = require('../database/models/index');
const { validationResult } = require('express-validator');
const path = require('path');
const Category = db.Category;
const sequelize = db.sequelize;


//Otra forma de llamar a los modelos




const categoriesController = {
    listar: async (req,res) =>{
        res.render("categories/categoryList",{categories: await Category.findAll()})
    },
    crear: (req,res) =>{
        res.render("categories/categoryCreateForm")
    },

    accionCrear: async (req,res) =>{
            let Nuevo = await Category.create({name:req.body.name});
            res.redirect("/categories/")

    },

    //muestra form para editar un tipo
    editar: async (req,res) =>{
            let category = await Category.findByPk((req.params.id));
            res.render("categories/categoryEditForm",{category })

    },
    //accion de editar
    modificar: async (req,res) =>{
        
        try{
            let update = await Category.update(
                {name: req.body.name},
                {where: {id:req.params.id}}
                );
            res.redirect("/categories/");
        }catch(errors){
            
        }
        

    },
    eliminar:async (req,res) =>{
        let eliminado = await Category.destroy({
            where: {id: req.params.id}});
        res.redirect("/categories/");
        
    }


}

module.exports = categoriesController;