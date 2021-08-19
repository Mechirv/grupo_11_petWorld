const db = require('../database/models/index');
const { validationResult } = require('express-validator');
const path = require('path');


const Category = db.Category;
const sequelize = db.sequelize;


//Otra forma de llamar a los modelos




const categoriesController = {
    listar: (req,res) =>{

    },
    crear: (req,res) =>{

    },
    accionCrear:(req,res) =>{

    },
    editar:(req,res) =>{

    },
    modificar: (req,res) =>{

    },
    eliminar:(req,res) =>{

    }


}

module.exports = categoriesController;