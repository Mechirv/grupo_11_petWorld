const db = require('../database/models/index');
const { validationResult } = require('express-validator');
const path = require('path');
const Type = db.Type;
const sequelize = db.sequelize;


const typesController = {
    listar: async (req,res) =>{
        res.render("types/typeList",{types: await Type.findAll()})
    },
    crear: (req,res) =>{
        res.render("types/typeCreateForm")
    },

    accionCrear: async (req,res) =>{
            console.log(req.body);
            let Nuevo = await Type.create({name:req.body.name});
            res.redirect("/types/")

    },

    //muestra form para editar un tipo
    editar: async (req,res) =>{
            let type = await Type.findByPk((req.params.id));
            res.render("types/typeEditForm",{type })

    },
    //accion de editar
    modificar: async (req,res) =>{
        console.log(req.body);
        let update = await Type.update(req.body,{
            where: {id:req.params.id}
        });
        res.redirect("/types/");

    },
    eliminar:async (req,res) =>{
        let eliminado = await Type.destroy({
            where: {id: req.params.id}});
        res.redirect("/types/");
        
    }


}

module.exports = typesController;